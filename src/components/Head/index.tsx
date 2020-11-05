import Head from 'next/head'

interface PageHeadProps {
  title?: {
    main?: string
    sub?: string
  }
}

const PAGE_MAIN_TITLE = '応用数学研究部'

export function PageHead({ title: _title = { main: PAGE_MAIN_TITLE, sub: '' } }: PageHeadProps) {
  const { main = PAGE_MAIN_TITLE, sub = '' } = _title
  const title = sub ? `${main} - ${sub}` : main
  return (
    <Head>
      <meta charSet="utf-8"></meta>
      <title>{title}</title>
    </Head>
  )
}
