import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/*
            旧Next.js(11)は外部フォントCSSを自動でインライン化しpreconnectヒントを
            付与する機能(Automatic Webfont Optimization)を持っていたが、新しいNextでは
            削除されている。<link rel=stylesheet>自体は引き続き動作するが、preconnectが
            無いとDNS/TLSのハンドシェイクがCSS取得と直列になる分わずかに遅くなるため、
            ここで明示的に復元する。
          */}
          <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
          <link rel="stylesheet" href="https://use.typekit.net/diu7iey.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
