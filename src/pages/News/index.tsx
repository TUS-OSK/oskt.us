import { compareDesc, format } from 'date-fns'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { Section } from 'src/pages/Home/elements'
import { StyledLink as StyledLink_ } from 'src/utils/next/elements'
import styled from 'styled-components'

export interface MetaItem {
  path: string
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
      <PageHead title={{ sub: title }}></PageHead>
      <MainLayout>
        <Section>
          <MarkdownBody body={body}></MarkdownBody>
          {sortedMetaList.map(({ date, caption, path }) => (
            <MetaItem key={path}>
              <Hiduke>{format(date, 'yyyy/MM/dd')}</Hiduke>
              <StyledLink href={path}>{caption}</StyledLink>
            </MetaItem>
          ))}
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
