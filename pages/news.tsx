import { isValid } from 'date-fns'
import News from 'src/pages/News'
import { getPageMarkdown, getPostsAll, MarkdownData, MarkdownMeta } from 'api/markdowns'

interface Props {
  meta: MarkdownMeta
  body: string
  postsStr: string
}

function notUndefined<T>(item: T | undefined): item is T {
  return item !== undefined
}

export default function NewsPage({ meta: { title }, body, postsStr }: Props) {
  const posts: MarkdownData[] = JSON.parse(postsStr)
  const filterdMetaList = posts
    .map(({ path, meta }) => {
      const { date, caption } = meta
      // NOTE: 表示するのに必要なdataとcaptionがあるものだけfilterする
      if (caption !== undefined && date !== undefined && isValid(new Date(date))) {
        // NOTE: privateがfalseな記事のみNewsで公開する
        return !meta.private
          ? {
              path,
              date: new Date(date),
              caption,
            }
          : undefined
      }
    })
    .filter(notUndefined)

  return <News title={title} body={body} metaList={filterdMetaList}></News>
}

export async function getStaticProps() {
  const posts = getPostsAll()
  const { meta, body } = getPageMarkdown('news')

  return {
    props: {
      meta,
      body,
      postsStr: JSON.stringify(posts),
    },
  }
}
