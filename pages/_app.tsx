import { fontSettings } from 'src/utils/fonts'
import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  ${fontSettings}

  body {
    font-family: 'quasimoda', '游ゴシック体', 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'MS Pゴシック', 'MS PGothic', sans-serif;
  }

  // NOTE: 初期スタイルの上書き
  body {
    margin: 0;
  }
`
