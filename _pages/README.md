# ページの編集について

ここにはメインページの Markdown ファイルがあります。

## ルーティング

ルーティングは以下のように対応しています。
`/_pages/markdowns/[page].md`→`oskt.us/[page]`

> 注意: ファイル名は変更しないでください。また、新しい`[page].md`を追加しても新しいページはできません。

## メタ情報

ファイルには以下のような様式でメタ情報を記述することができます。

```
---
title: タイトル名
---

...body
```

- `title`: ブラウザーのタイトルバーやページのタブに表示される文書の題名

> 注意: `title`メタ情報は必ず入れるようにしてください。また、基本的に`title`はトップタイトル(h1)として表示されています。

## 特殊なページについて

### Top

Top ページには独自の Markdown ファイルがありません。

また、他のメインページの Markdown ファイルに依存している情報があることに注意してください。

### About

About ページのメタ情報は以下の様式で記述されます。

```
---
title: タイトル名
caption: 応数研の概要
---

...body
```

- `title`: ブラウザーのタイトルバーやページのタブに表示される文書の題名(トップタイトルとしても表示される。)

- `caption`: 応数研の概要。トップページにもここの文章が使われています。

### News

このページの`title`メタ情報はトップタイトルとして表示されません。

また、本文は News 一覧より前に表示されます。

News 一覧に表示したくない記事がある場合には[\_articles/README.md]()を参照してください。

### Contact

このページの`title`メタ情報はトップタイトルとして表示されません。

また、本文は Contact 情報 一覧より前に表示されます。