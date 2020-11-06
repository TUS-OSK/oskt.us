import { compareDesc, format } from 'date-fns'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { FixedSizeContents, Section } from 'src/components/MainLayout/elements'
import { StyledLink as StyledLink_ } from 'src/utils/next/elements'
import styled from 'styled-components'
import { articleTo, urlPageMdEdit } from 'src/utils/urls'

export interface MetaItem {
  year: string
  slug: string
  date: Date
  caption: string
}

interface Props {
  title?: string
  body: string
  metaList: MetaItem[]
}

export default function News({ title, body, metaList }: Props) {
  const sortedMetaList = metaList.sort((a, b) => compareDesc(a.date, b.date))

  return (
    <>
      <PageHead title={title}></PageHead>
      <MainLayout>
        <Section>
          <FixedSizeContents size={520}>
            {sortedMetaList.map(({ year, slug, date, caption }) => (
              <MetaItem key={articleTo(year, slug)}>
                <Hiduke>{format(date, 'yyyy/MM/dd')}</Hiduke>
                <StyledLink href={articleTo(year, slug)}>{caption}</StyledLink>
              </MetaItem>
            ))}
            <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('archive')}></MarkdownBody>
          </FixedSizeContents>
        </Section>
      </MainLayout>
    </>
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
