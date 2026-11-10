// 「そうだ、〇〇しよう。」の〇〇と、そのとき背景に流す応用数学のモチーフ。
// 班の並びはこの順に巡回する。背景との対応は暫定(2026-11、役員と調整中)
export const TEAMS = [
  { word: '機械学習', mode: 'gd', motif: '勾配降下法(離散)' },
  { word: '競技プログラミング', mode: 'ant', motif: 'ラングトンのアリ' },
  { word: '数理統計', mode: 'ising', motif: 'イジング模型の鱗文' },
  { word: 'コンピュータサイエンス', mode: 'life', motif: 'ライフゲーム' },
  { word: '3DCG', mode: 'seigaiha', motif: '青海波' },
  { word: 'Web・アプリ開発', mode: 'tropical', motif: 'トロピカル曲線' },
] as const

// 'gd-smooth' は巡回には入れず、比較用に選べる勾配降下法のなめらか版
export type BackgroundMode = (typeof TEAMS)[number]['mode'] | 'gd-smooth'
export const EXTRA_MODES = [{ team: 0, mode: 'gd-smooth', motif: '勾配降下法(なめらか)' }] as const
export const TEAM_INTERVAL_MS = 4000
