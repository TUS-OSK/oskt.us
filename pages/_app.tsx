import { AppProps } from 'next/dist/next-server/lib/router/router'
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
  // NOTE: 初期スタイルの上書き
  body {
    margin: 0;
  }
`
