import { type HeroMode, TEAMS as ALL_TEAMS } from 'src/data/teams'

// 「そうだ、〇〇しよう。」の〇〇と、そのとき背景に流す応用数学のモチーフ。
// 班の情報そのものは src/data/teams.ts にまとめてあり、ここはヒーロー用の形に直すだけ。
// 巡回の順は src/data/teams.ts の並び順
export const TEAMS = ALL_TEAMS.map((t) => ({ word: t.word, mode: t.hero.mode, motif: t.hero.motif }))

// 'gd-smooth' は巡回には入れず、比較用に選べる勾配降下法のなめらか版
export type BackgroundMode = HeroMode | 'gd-smooth'
export const EXTRA_MODES = [{ team: 0, mode: 'gd-smooth', motif: '勾配降下法(なめらか)' }] as const
export const TEAM_INTERVAL_MS = 4000
