import { isValid } from 'date-fns'
import News from 'src/pages/News'
import { getPageMarkdown, getArticlesAll, MarkdownMeta, ArticleMarkdownData } from 'api/markdowns'
import { GetStaticProps } from 'next'

interface Props {
  meta: MarkdownMeta
  body: string
  articlesStr: string
}

function notUndefined<T>(item: T | undefined): item is T {
  return item !== undefined
}

export default function NewsPage({ meta: { title }, body, articlesStr }: Props) {
  const articles: ArticleMarkdownData[] = JSON.parse(articlesStr)
  const filterdMetaList = articles
    .map(({ year, slug, meta }) => {
      const { date, caption } = meta
      // NOTE: 表示するのに必要なdataとcaptionがあるものだけfilterする
      if (caption !== undefined && date !== undefined && isValid(new Date(date))) {
        // NOTE: privateがfalseな記事のみNewsで公開する
        return !meta.private
          ? {
              year,
              slug,
              date: new Date(date),
              caption,
            }
          : undefined
      }
    })
    .filter(notUndefined)

  return <News title={title} body={body} metaList={filterdMetaList}></News>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = getArticlesAll()
  const { meta, body } = getPageMarkdown('news')

  return {
    props: {
      meta,
      body,
      articlesStr: JSON.stringify(articles),
    },
  }
}
