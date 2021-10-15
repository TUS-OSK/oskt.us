import { fontSettings } from 'src/utils/fonts'
import { css, Global } from '@emotion/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${fontSettings()}
          body {
            font-family: 'quasimoda', '游ゴシック体', 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro',
              'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'MS Pゴシック', 'MS PGothic', sans-serif;
          }
          // NOTE: 初期スタイルの上書き
          body {
            margin: 0;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
