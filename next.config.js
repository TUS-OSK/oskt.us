// PRプレビューは gh-pages の /pr-preview/pr-<番号>/ 配下に配信されるため、
// アセット（/_next/...）と内部リンクのパスをそのサブディレクトリに合わせる必要がある。
// 本番デプロイでは PREVIEW_BASE_PATH を設定しないので、従来通りルート配信のまま。
const basePath = process.env.PREVIEW_BASE_PATH || ''

module.exports = {
  // Next 14で`next export`コマンドが廃止され、`output: 'export'`での`next build`に
  // 一本化された（2026-11、Next 11→16アップグレード時に追従）。
  output: 'export',
  basePath,
  assetPrefix: basePath,
  // Markdown中の生HTML（画像src等）にbasePathを反映するため、クライアント側にも
  // 公開する（src/components/MarkdownBody/index.tsx 参照）。NEXT_PUBLIC_ 接頭辞は
  // Next.jsがビルド時にクライアントバンドルへ静的に埋め込む対象という意味。
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}
