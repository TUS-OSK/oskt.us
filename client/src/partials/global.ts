/**
 * グローバルCSSの適用
 */

import { injectGlobal } from 'styled-components'

import normalize from 'styled-normalize'
import fontFace from './fonts'

injectGlobal`
  ${normalize}
  ${fontFace}

  body {
    font-family: quasimoda, '游ゴシック体', 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'MS Pゴシック', 'MS PGothic';
  }
`
