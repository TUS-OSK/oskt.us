// サイト全体のデザインの基本値。色・書体・文字サイズ・余白はここ以外で直書きしない。
//
// 色は3色まで(2026-11、部の方針):
//   ベース   … 夜の黒(トップのヒーローと同じ #0d0d12)
//   メイン   … 墨の白。グレーはこの白の不透明度違いで作る
//   アクセント … 青(トップの背景模様の光と同じ #7fd6ff)
// 局所的な濃淡(面の明るさ・線の濃さ)は、この3色の不透明度違いだけで作る。

export const color = {
  base: '#0d0d12',
  /** カード・表など、地から一段浮かせる面 */
  surface: '#15161d',
  surfaceRaised: '#1c1d26',

  ink: 'rgba(255, 255, 255, 0.92)',
  /** 本文の補足・説明文。#0d0d12 上で 9.1:1 */
  inkMuted: 'rgba(255, 255, 255, 0.68)',
  /** キャプション・日付など。#0d0d12 上で 6.1:1、surface 上でも 5.9:1 */
  inkSubtle: 'rgba(255, 255, 255, 0.54)',

  line: 'rgba(255, 255, 255, 0.12)',
  lineStrong: 'rgba(255, 255, 255, 0.28)',

  accent: '#7fd6ff',
  accentSoft: 'rgba(127, 214, 255, 0.12)',
  accentLine: 'rgba(127, 214, 255, 0.4)',
} as const

export const font = {
  /** 見出し。トップのコピーと同じ明朝 */
  serif: "'Hiragino Mincho ProN', 'Yu Mincho', YuMincho, 'Noto Serif JP', serif",
  /** 本文 */
  sans:
    "'quasimoda', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', '游ゴシック体', 'Yu Gothic', YuGothic, 'Noto Sans JP', Meiryo, sans-serif",
  /** 英字のラベル・日付・数字 */
  label: "'novecentosans', 'quasimoda', sans-serif",
} as const

/** 文字サイズは6段階だけ使う */
export const size = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: 'clamp(19px, 1.6vw, 22px)',
  xl: 'clamp(24px, 2.6vw, 34px)',
  xxl: 'clamp(30px, 4.4vw, 56px)',
} as const

export const space = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '72px',
  xxl: '120px',
} as const

/** 本文の行幅と、ページ全体の最大幅 */
export const width = {
  prose: '720px',
  page: '1120px',
} as const

export const radius = '4px'

export const mq = {
  sp: '@media (max-width: 699px)',
  tab: '@media (max-width: 959px)',
  pc: '@media (min-width: 960px)',
} as const

export const ease = 'cubic-bezier(0.2, 0.7, 0.2, 1)'
