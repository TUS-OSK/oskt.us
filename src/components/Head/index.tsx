import Head from 'next/head'
import { useRouter } from 'next/router'
import meta from '_configs/meta.json'

interface PageHeadProps {
  title?: string
  /** 検索結果やSNSのプレビューに出る説明文。省略時はサイト共通の説明 */
  description?: string
  /** 記事ページは article、それ以外は website */
  type?: 'website' | 'article'
}

const TITLE_PREFIX = meta.title_prefix
// OGP・canonical は本番ドメインの絶対URLである必要がある(PRプレビューでも本番を指す)
const SITE_URL = 'https://oskt.us'
const DEFAULT_DESCRIPTION =
  '東京理科大学 応用数学研究部(応数研・OSK)の公式サイト。半世紀以上続く部活で、機械学習・数理統計・コンピュータサイエンス・競技プログラミング・3DCG・Web/アプリ開発の班に分かれて活動しています。'
const OG_IMAGE = `${SITE_URL}/images/og.jpg`

/** Markdown本文から、検索結果向けの短い説明文(約110字)を作る */
export function descriptionFromMarkdown(markdown: string, max = 110): string {
  const text = markdown
    .replace(/<[^>]+>/g, ' ') // 生HTML(埋め込み等)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // 画像
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // リンクは文字だけ残す
    .replace(/^#{1,6}\s+.*$/gm, ' ') // 見出し行
    .replace(/[*_`>|~-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > max ? `${text.slice(0, max)}…` : text
}

export function PageHead({ title: _title = '', description = DEFAULT_DESCRIPTION, type = 'website' }: PageHeadProps) {
  const title = _title ? `${TITLE_PREFIX} - ${_title}` : TITLE_PREFIX
  const { asPath } = useRouter()
  const path = asPath.split(/[?#]/)[0]
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  return (
    <Head>
      <meta charSet="utf-8"></meta>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#0d0d12" />
      <meta property="og:site_name" content={TITLE_PREFIX} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tus_osk" />
    </Head>
  )
}
