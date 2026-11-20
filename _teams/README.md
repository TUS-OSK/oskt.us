# 班のページの文面

このフォルダのファイルが、サイトの各班のページ(`https://oskt.us/teams/<班>`)と、トップの班の紹介・週の表のもとになっています。
各班の人が、GitHub の画面から直接直せます。

| 班 | ページ | 直すファイル |
|---|---|---|
| 機械学習班 | [oskt.us/teams/ml](https://oskt.us/teams/ml) | [ml.md を直す](https://github.com/TUS-OSK/oskt.us/edit/master/_teams/ml.md) |
| 競技プログラミング班 | [oskt.us/teams/kyopro](https://oskt.us/teams/kyopro) | [kyopro.md を直す](https://github.com/TUS-OSK/oskt.us/edit/master/_teams/kyopro.md) |
| 数理統計班 | [oskt.us/teams/stat](https://oskt.us/teams/stat) | [stat.md を直す](https://github.com/TUS-OSK/oskt.us/edit/master/_teams/stat.md) |
| コンピュータサイエンス班 | [oskt.us/teams/cs](https://oskt.us/teams/cs) | [cs.md を直す](https://github.com/TUS-OSK/oskt.us/edit/master/_teams/cs.md) |
| 3DCG | [oskt.us/teams/cg](https://oskt.us/teams/cg) | [cg.md を直す](https://github.com/TUS-OSK/oskt.us/edit/master/_teams/cg.md) |
| Web・アプリ開発 | [oskt.us/teams/web](https://oskt.us/teams/web) | [web.md を直す](https://github.com/TUS-OSK/oskt.us/edit/master/_teams/web.md) |

## 直し方

1. 上の表の「〇〇.md を直す」を開く(GitHub へのログインが必要です)
2. 文を直す。ファイルの中の `#` で始まる行は説明なので、残したままで大丈夫です
3. 画面右上の「Commit changes...」を押し、「Create a new branch」を選んで「Propose changes」→「Create pull request」
4. プルリクエストのページにプレビューの URL が出るので、見た目を確かめる
5. 問題なければ、サイトの担当の人にマージしてもらう

部への書き込み権限がない人は、3. で自動的に自分用のコピー(fork)が作られます。そのまま進めて大丈夫です。

## 書き方の約束

- 文は `'...'` で囲みます。文の中で `'` を使いたいときは `''` と2つ重ねます
- 箇条書きは、行頭の `  - ` (スペース2つ・ハイフン・スペース)をそろえます
- 毎週の集まりの曜日は `月` `火` `水` `木` `金` `土` `日` のどれか1文字、時刻は `'18:00'` の形です
- いちばん下の `---` より後ろが「どんな班？」の文章です。空行を入れると段落が分かれます
- トーンは、Discord で部員に話すときのような、やわらかい丁寧語にします(「〜なんです」「〜できますよ」)。自慢や売り込みの言い方は避けます

書き方を間違えると、プレビューの作成が失敗し、どのファイルのどこが違うかが日本語で表示されます。

## 班を増やすとき

`<班のid>.md` をこのフォルダに作り(既存のファイルをコピーすると楽です)、`src/data/teams.ts` の `TEAM_ORDER` に1行足します。後者はコードなので、サイトの担当の人に頼んでください。
