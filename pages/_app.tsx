import { AppProps } from 'next/dist/next-server/lib/router/router'
import { createGlobalStyle, css } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

const fontSettings = css`
  @font-face {
    font-family: 'quasimoda';
    src: url('/fonts/quasimoda-light.otf');
  }

  @font-face {
    font-family: 'novecentosans';
    src: url('/fonts/Novecentosanswide-Book.otf');
  }

  @font-face {
    font-family: 'novecentosans';
    src: url('/fonts/Novecentosanswide-Bold.otf');
    font-weight: bold;
  }
`

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
