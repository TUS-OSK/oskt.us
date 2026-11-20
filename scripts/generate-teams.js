// _teams/<id>.md(部員が GitHub の画面から直す班の文面)を読んで、
// サイトのコードから読み込める src/data/teams.generated.json に書き出す。
// yarn dev / yarn build の前に自動で動く(package.json の predev / prebuild)。
//
// 書き方が間違っていたら、どのファイルのどこが違うかを日本語で出してビルドを止める。
// PR のプレビューが失敗したら、まずこのメッセージを見ればよい。

const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const matter = require('gray-matter')

const DIR = join(__dirname, '..', '_teams')
const OUT = join(__dirname, '..', 'src', 'data', 'teams.generated.json')
const WEEKDAYS = ['月', '火', '水', '木', '金', '土', '日']

const errors = []
const teams = {}

for (const file of readdirSync(DIR).filter((f) => f.endsWith('.md') && f !== 'README.md')) {
  const id = file.replace(/\.md$/, '')
  const where = `_teams/${file}`
  let parsed
  try {
    parsed = matter(readFileSync(join(DIR, file), 'utf8'))
  } catch (e) {
    errors.push(`${where}: 冒頭の --- で囲んだ部分の書き方が崩れています(${e.reason ?? e.message})。' の閉じ忘れや、行頭のスペースのずれがないか見てください`)
    continue
  }
  const d = parsed.data
  const need = (key, label) => {
    if (typeof d[key] !== 'string' || !d[key].trim()) errors.push(`${where}: 「${key}」(${label})が空です`)
  }
  const needList = (key, label) => {
    if (!Array.isArray(d[key]) || d[key].length === 0 || d[key].some((x) => typeof x !== 'string' || !x.trim())) {
      errors.push(`${where}: 「${key}」(${label})は、- で始まる行を1つ以上書いてください`)
    }
  }
  need('name', '班の名前')
  need('phrase', 'トップの見出しに出る短い言葉')
  need('question', 'トップの見出しの下に出る問いかけ')
  need('tagline', '一行の紹介')
  need('beginner', '「未経験でも？」の答え')
  needList('topics', 'やっていること')
  needList('forWhom', 'こんな人に')

  let meeting
  if (d.meeting) {
    const m = d.meeting
    const day = WEEKDAYS.indexOf(String(m.day ?? '').replace(/曜日?$/, ''))
    if (day < 0) errors.push(`${where}: meeting の day は 月・火・水・木・金・土・日 のどれか1文字にしてください(今は「${m.day}」)`)
    const start = String(m.start ?? '')
    if (!/^\d{1,2}:\d{2}$/.test(start)) errors.push(`${where}: meeting の start は '18:00' のように書いてください(今は「${m.start}」)`)
    meeting = {
      day,
      start,
      ...(m.place ? { place: String(m.place) } : {}),
      ...(m.note ? { note: String(m.note) } : {}),
    }
  }

  const about = parsed.content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
  if (about.length === 0) errors.push(`${where}: いちばん下の --- より後ろに「どんな班？」の文章を書いてください`)

  teams[id] = {
    name: d.name,
    phrase: d.phrase,
    question: d.question,
    tagline: d.tagline,
    about,
    topics: d.topics,
    forWhom: d.forWhom,
    beginner: d.beginner,
    ...(meeting ? { meeting } : {}),
  }
}

if (errors.length) {
  console.error('\n班のページの文面(_teams/*.md)に直すところがあります:\n')
  for (const e of errors) console.error(`  - ${e}`)
  console.error('')
  process.exit(1)
}

writeFileSync(OUT, `${JSON.stringify(teams, null, 2)}\n`)
console.log(`teams: ${Object.keys(teams).length} 班の文面を ${OUT.replace(join(__dirname, '..') + '/', '')} に書き出しました`)
