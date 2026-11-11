import { getClubInfo, getYearFlow, type ClubInfo, type FlowItem } from 'api/club'
import { getArticlesAll } from 'api/markdowns'
import { GetStaticProps } from 'next'
import Home from 'src/pages/Home'
import { listNewsMeta, type NewsMeta, toNewsItems } from './news'

interface Props {
  club: ClubInfo
  flow: FlowItem[]
  news: NewsMeta[]
}

export default function IndexPage({ club, flow, news }: Props) {
  return <Home club={club} flow={flow} news={toNewsItems(news)} />
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    club: getClubInfo(),
    flow: getYearFlow(true),
    news: listNewsMeta(getArticlesAll()),
  },
})
