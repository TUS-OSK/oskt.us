import { compareDesc, format } from 'date-fns'
import MainLayout from 'src/components/MainLayout'
import { Section } from 'src/pages/Home/elements'
import { StyledLink as StyledLink_ } from 'src/utils/next/elements'
import styled from 'styled-components'

export interface MetaItem {
  path: string
  date: Date
  caption: string
}

interface Props {
  metaList: MetaItem[]
}

export default function News({ metaList }: Props) {
  const sortedMetaList = metaList.sort((a, b) => compareDesc(a.date, b.date))

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
