// next build(output: 'export')の後に out/ の HTML から sitemap.xml を生成する。
// package.json の postbuild から呼ばれる(yarn v1 は build の後に postbuild を自動実行する)。
// PRプレビュー(PREVIEW_BASE_PATH あり)は検索エンジンに載せないので生成しない。
const fs = require('fs')
const path = require('path')

if (process.env.PREVIEW_BASE_PATH) {
  console.log('sitemap: PRプレビューのため生成しません')
  process.exit(0)
}

const SITE_URL = 'https://oskt.us'
const OUT = path.join(__dirname, '..', 'out')
// 検索結果に出す意味がないページ
const EXCLUDE = new Set(['/404', '/pay/cancel', '/pay/success'])

const pages = []
const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    if (fs.statSync(full).isDirectory()) {
      if (name !== '_next' && name !== 'pr-preview') walk(full)
    } else if (name.endsWith('.html')) {
      let url = '/' + path.relative(OUT, full).replace(/\\/g, '/').replace(/\.html$/, '')
      if (url === '/index') url = '/'
      if (!EXCLUDE.has(url)) pages.push({ url, mtime: fs.statSync(full).mtime })
    }
  }
}
walk(OUT)
pages.sort((a, b) => a.url.localeCompare(b.url))

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map(({ url }) => `  <url><loc>${SITE_URL}${url === '/' ? '/' : url}</loc></url>`),
  '</urlset>',
  '',
].join('\n')
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml)
console.log(`sitemap: ${pages.length} ページを out/sitemap.xml に書き出しました`)
