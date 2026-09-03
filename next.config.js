// PRプレビューは gh-pages の /pr-preview/pr-<番号>/ 配下に配信されるため、
// アセット（/_next/...）と内部リンクのパスをそのサブディレクトリに合わせる必要がある。
// 本番デプロイでは PREVIEW_BASE_PATH を設定しないので、従来通りルート配信のまま。
const basePath = process.env.PREVIEW_BASE_PATH || ''

module.exports = {
  basePath,
  assetPrefix: basePath,
}
