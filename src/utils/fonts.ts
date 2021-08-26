import { css } from '@emotion/react'

export interface Font {
  base: string
  bold?: string
}

/**
 * NOTE: ここにフォントの情報を追加すれば自動的に以下の情報が追加される
 * - preloadのためのlinkタグ
 * - @font-face
 */
export const FONT_PATHS: {
  [id in string]: Font
} = {
  novecentosans: {
    base: '/fonts/Novecentosanswide-Book.otf',
    bold: '/fonts/Novecentosanswide-Bold.otf',
  },
} as const

type FontType = keyof Font

const fontFace = (key: string, type: FontType) => css`
  @font-face {
    font-family: ${key};
    src: url(${FONT_PATHS[key][type]});
    ${type === 'bold' &&
    css`
      font-weight: bold;
    `}
  }
`

const mapFontKeyToFontFaceCss = (key: string) => {
  const types = Object.keys(FONT_PATHS[key]) as FontType[]
  const fontFaces = types.map((type) => fontFace(key, type))
  return css`
    ${fontFaces}
  `
}

export const fontSettings = () => {
  const fontFaces = Object.keys(FONT_PATHS).map((fontKey) => mapFontKeyToFontFaceCss(fontKey))
  return css`
    ${fontFaces}
  `
}
