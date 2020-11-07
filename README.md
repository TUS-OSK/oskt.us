# oskt.us

応用数学研究部の公式ホームページのソースコードです。

[記事を編集したい場合はこちらへ](https://github.com/TUS-OSK/oskt.us/tree/master/_articles)
[メインページを編集したい場合はこちらへ](https://github.com/TUS-OSK/oskt.us/tree/master/_pages)

## 構成

Next.js + TypeScript + styled-components となっています。

Markdown ファイルの Parser には gray-matter + remark が採用されています。

## 開発環境

```bash
$ yarn install && yarn dev
```

## ビルド

master への push 時に Github Actions により yarn build が実行され、gh-pages ブランチにデプロイされます。
