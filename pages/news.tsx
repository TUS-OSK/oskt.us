import { isValid } from 'date-fns'
import News from 'src/pages/News'
import { getPostsAll, MarkdownBaseMeta, MarkdownData } from 'api/markdowns'

interface Props {
  postsStr: string
}

function notUndefined<T>(item: T | undefined): item is T {
  return item !== undefined
}

export default function NewsPage({ postsStr }: Props) {
  const posts: MarkdownData<MarkdownBaseMeta>[] = JSON.parse(postsStr)
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

  return <News metaList={filterdMetaList}></News>
}

export async function getStaticProps() {
  const posts = getPostsAll()

  return {
    props: {
      postsStr: JSON.stringify(posts),
    },
  }
}
