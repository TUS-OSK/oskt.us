import Head from 'next/head'
import meta from '_configs/meta.json'

interface PageHeadProps {
  title?: string
}

const TITLE_PREFIX = meta.title_prefix

export function PageHead({ title: _title = '' }: PageHeadProps) {
  const title = _title ? `${TITLE_PREFIX} - ${_title}` : TITLE_PREFIX
  return (
    <Head>
      <meta charSet="utf-8"></meta>
      <title>{title}</title>
    </Head>
  )
}
