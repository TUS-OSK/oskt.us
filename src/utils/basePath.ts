// next.config.js の basePath 機構(next/link・next/imageのhref/src)は自動で効くが、
// 本文中の生HTML(Markdown内の画像src等)やpublic/配下への絶対パス直書きには効かない。
// PRプレビューは `/pr-preview/pr-<番号>/` 配下に配信されるため、`/images/...` のような
// ルート相対パスをそのまま使うと本番では動いてプレビューでだけ404になる
// (本番はbasePathが空文字のため動いてしまい、見た目上の不具合が本番検証では発覚しにくい)。
//
// NEXT_PUBLIC_ 接頭辞はNext.jsがビルド時にクライアントバンドルへ静的に埋め込む対象という意味。
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** ルート相対パス(例: /images/foo.jpg)の先頭にbasePathを付与する */
export const withBasePath = (path: string): string => (BASE_PATH ? `${BASE_PATH}${path}` : path)
