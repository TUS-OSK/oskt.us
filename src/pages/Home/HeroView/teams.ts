import { type HeroMode, TEAMS as ALL_TEAMS } from 'src/data/teams'

// トップの見出し(班の名前・短い言葉・問いかけ)と、そのとき背景に流す応用数学のモチーフ。
// 日本科学未来館のゾーン紹介(「世界をさぐる」+問いかけ)にならった形。
// 班の情報そのものは src/data/teams.ts にまとめてあり、ここはヒーロー用の形に直すだけ。
// 巡回の順は src/data/teams.ts の並び順
export const TEAMS = ALL_TEAMS.map((t) => ({
  name: t.name,
  phrase: t.phrase,
  question: t.question,
  mode: t.hero.mode,
  motif: t.hero.motif,
}))

// 巡回の前(と、動きを減らす設定の人)に出す、部全体の見出し
export const INTRO = {
  name: '東京理科大学 応用数学研究部',
  phrase: '数学を、つかってみる',
  question: '授業で習った数学は、どこで役に立つのでしょう？',
}

// 'gd-smooth' は巡回には入れず、比較用に選べる勾配降下法のなめらか版
export type BackgroundMode = HeroMode | 'gd-smooth'
export const EXTRA_MODES = [{ team: 0, mode: 'gd-smooth', motif: '勾配降下法(なめらか)' }] as const
// 問いかけまで読めるよう、1班あたり少し長めに見せる
export const TEAM_INTERVAL_MS = 6000
