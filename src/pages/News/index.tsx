import { compareDesc, format } from 'date-fns'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { FixedSizeContents, Section } from 'src/components/MainLayout/elements'
import { StyledLink as StyledLink_ } from 'src/utils/next/elements'
import styled from '@emotion/styled'
import { articleTo, urlPageMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  body: string
  metaList: MetaItemProps[]
}

export default function News({ title, body, metaList }: Props) {
  const sortedMetaList = metaList.sort((a, b) => compareDesc(a.date, b.date))
  return (
    <>
      <PageHead title={title}></PageHead>
      <MainLayout>
        <Section>
          <FixedSizeContents size={520}>
            <MetaList metaList={sortedMetaList}></MetaList>
            <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('archive')}></MarkdownBody>
          </FixedSizeContents>
        </Section>
      </MainLayout>
    </>
  )
}

export interface MetaItemProps {
  year: string
  slug: string
  date: Date
  caption: string
}

interface MetaListProps {
  metaList: MetaItemProps[]
}

export function MetaList({ metaList }: MetaListProps) {
  return (
    <MetaListContainer>
      {metaList.map(({ year, slug, date, caption }) => (
        <MetaItem key={articleTo(year, slug)}>
          <Hiduke>{format(date, 'yyyy/MM/dd')}</Hiduke>
          <StyledLink href={articleTo(year, slug)}>{caption}</StyledLink>
        </MetaItem>
      ))}
    </MetaListContainer>
  )
}

const MetaListContainer = styled.ul`
  padding: 0;
  margin: 0;
`

const MetaItem = styled.li`
  list-style: none;
  margin-bottom: 24px;
`

const Hiduke = styled.time`
  color: #333;
  font-weight: bold;
  font-family: 'novecentosans', sans-serif;
  margin-right: 8px;
`

const StyledLink = styled(StyledLink_)`
  color: #333;
  text-decoration: underline;
`
