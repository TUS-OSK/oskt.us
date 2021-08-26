import styled from '@emotion/styled'
import { Section, SectionTitle } from 'src/components/MainLayout/elements'
import { MetaItemProps, MetaList } from 'src/pages/News'
import { compareDesc } from 'date-fns'
import { pageTo } from 'src/utils/urls'
import Button from 'src/components/Button'

export interface NewsData {
  metaList: MetaItemProps[]
}

interface Props {
  newsData: NewsData
}

const PRIMARY_COLOR = '#555'
const SECONDARY_COLOR = '#eee'

export default function NewsView({ newsData: { metaList } }: Props) {
  const sortedMetaList = metaList.sort((a, b) => compareDesc(a.date, b.date))

  return (
    <Container>
      <SectionTitle>NEWS</SectionTitle>
      <MetaList metaList={sortedMetaList.slice(0, 5)}></MetaList>
      <More>
        <Button color={{ primary: PRIMARY_COLOR, secondary: SECONDARY_COLOR }} href={pageTo('news')}>
          もっと見る
        </Button>
      </More>
    </Container>
  )
}

const Container = styled(Section)`
  overflow: hidden;
  background-color: ${SECONDARY_COLOR};
  color: ${PRIMARY_COLOR};
  text-align: center;
`

const More = styled.div`
  text-align: end;
`
