// 班の情報の置き場所。トップの「そうだ、〇〇しよう。」の巡回、トップの班カード、週の表、
// 班ページ(/teams/<id>)はすべてここから作る。
//
// 文面(名前・紹介・やっていること・集まりの曜日など)は _teams/<id>.md にあり、部員が GitHub の
// 画面から直せる。ビルドの前に scripts/generate-teams.js が teams.generated.json に変換する。
// ここに残しているのは、班の並び順と、トップの背景モチーフ(見た目の仕組み)だけ。
// 班を増やすときは、_teams/<id>.md を作って、下の TEAM_ORDER に1行足す。
//
// 文面の方針は docs/copy-plan.md(4章)。

import generated from './teams.generated.json'

/** トップのヒーロー背景に流す応用数学のモチーフ */
export type HeroMode = 'gd' | 'ant' | 'ising' | 'life' | 'seigaiha' | 'tropical'

/** 月曜を0とした曜日 */
export const WEEKDAYS = ['月', '火', '水', '木', '金', '土', '日'] as const

export interface Meeting {
  /** 0=月 … 6=日 */
  day: number
  /** 開始時刻(HH:MM) */
  start: string
  /** オンライン・教室など。分からなければ書かない */
  place?: string
  /** 何をする回か(短く) */
  note?: string
}

export interface Team {
  id: string
  /** 班の正式名 */
  name: string
  /** 「そうだ、〇〇しよう。」の〇〇 */
  word: string
  /** 一文の説明。カテゴリ語(AI・統計など)を必ず入れる */
  tagline: string
  /** 班ページの「どんな班？」(段落ごと) */
  about: string[]
  /** やっていること */
  topics: string[]
  /** こんな人に */
  forWhom: string[]
  /** 未経験でも？ */
  beginner: string
  /** 毎週の定例。未定の班は書かない(トップの週の表と班ページの「When」はここから作る) */
  meeting?: Meeting
  hero: { mode: HeroMode; motif: string }
}

// 班の並び順(トップの巡回・一覧の順)と、トップの背景に流すモチーフ
const TEAM_ORDER: { id: string; hero: Team['hero'] }[] = [
  { id: 'ml', hero: { mode: 'gd', motif: '勾配降下法' } },
  { id: 'kyopro', hero: { mode: 'ant', motif: 'ラングトンのアリ' } },
  { id: 'stat', hero: { mode: 'ising', motif: 'イジング模型の鱗文' } },
  { id: 'cs', hero: { mode: 'life', motif: 'ライフゲーム' } },
  { id: 'cg', hero: { mode: 'seigaiha', motif: '青海波' } },
  { id: 'web', hero: { mode: 'tropical', motif: 'トロピカル曲線' } },
]

type TeamText = Omit<Team, 'id' | 'hero'>
const TEXTS = generated as Record<string, TeamText>

export const TEAMS: Team[] = TEAM_ORDER.map(({ id, hero }) => {
  const text = TEXTS[id]
  if (!text) throw new Error(`_teams/${id}.md がありません(src/data/teams.ts の TEAM_ORDER にある班)`)
  return { id, hero, ...text }
})

export const teamPath = (team: Team) => `/teams/${team.id}`

/** 「毎週水曜 18:00〜(オンライン)」の形。定例のない班は undefined */
export const scheduleText = (team: Team) => {
  const m = team.meeting
  if (!m) return undefined
  const extra = [m.note, m.place].filter(Boolean).join('、')
  return `毎週${WEEKDAYS[m.day]}曜 ${m.start}〜${extra ? `(${extra})` : ''}`
}
