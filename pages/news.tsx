import { compareDesc, format, isDate, isValid } from 'date-fns'
import MainLayout from 'src/components/MainLayout'
import { Section } from 'src/pages/Home/elements'
import { StyledLink as StyledLink_ } from 'src/utils/next/elements'
import styled from 'styled-components'
import { getPostsAll, MarkdownBaseMeta, MarkdownData } from './api/markdowns'

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
  const sortedMetaList = filterdMetaList.sort((a, b) => compareDesc(a.date, b.date))

  return (
    <MainLayout>
      <Section>
        {sortedMetaList.map(({ date, caption, path }) => (
          <MetaItem key={path}>
            <Hiduke>{format(date, 'yyyy/MM/dd')}</Hiduke>
            <StyledLink href={path}>{caption}</StyledLink>
          </MetaItem>
        ))}
      </Section>
    </MainLayout>
  )
}

const StyledLink = styled(StyledLink_)`
  text-decoration: underline;
`

const Hiduke = styled.time`
  font-weight: bold;
  font-family: 'novecentosans', sans-serif;
  margin-right: 8px;
`

const MetaItem = styled.div`
  color: #333;
  margin-bottom: 24px;
`

export async function getStaticProps() {
  const posts = getPostsAll()

  return {
    props: {
      postsStr: JSON.stringify(posts),
    },
  }
}
