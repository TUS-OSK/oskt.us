import { isValid } from 'date-fns'
import News from 'src/pages/News'
import { getPageMarkdown, getArticlesAll, ArticleMarkdownData, MarkdownBaseMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'
import type { NewsItem } from 'src/components/ui/blocks'

/** 一覧に出す記事の見出しだけ(本文は含めない。ページのデータを軽くするため) */
export interface NewsMeta {
  year: string
  slug: string
  date: string
  caption: string
}

/** 日付とキャプションがあり、private でない記事だけを一覧に出す */
export function listNewsMeta(articles: ArticleMarkdownData<MarkdownBaseMeta>[]): NewsMeta[] {
  return articles.flatMap(({ year, slug, meta }) => {
    const { date, caption } = meta
    if (caption === undefined || date === undefined || meta.private) return []
    const d = new Date(date)
    return isValid(d) ? [{ year, slug, date: d.toISOString(), caption }] : []
  })
}

export const toNewsItems = (metas: NewsMeta[]): NewsItem[] => metas.map((m) => ({ ...m, date: new Date(m.date) }))

interface Props {
  title: string
  body: string
  news: NewsMeta[]
}

export default function NewsPage({ title, body, news }: Props) {
  return <News title={title} body={body} metaList={toNewsItems(news)} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('news')
  return { props: { title: meta.title ?? 'ニュース', body, news: listNewsMeta(getArticlesAll()) } }
}
