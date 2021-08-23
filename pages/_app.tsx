import { AppProps } from 'next/dist/shared/lib/router/router'
import { fontSettings } from 'src/utils/fonts'
import { createGlobalStyle } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

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
