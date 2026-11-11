import { getClubInfo, type ClubInfo } from 'api/club'
import { getPageMarkdown } from 'api/markdowns'
import { GetStaticProps } from 'next'
import About from 'src/pages/About'

interface Props {
  title: string
  club: ClubInfo
  body: string
}

export default function AboutPage({ title, club, body }: Props) {
  return <About title={title} club={club} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('about')
  return { props: { title: meta.title ?? '応数研とは', club: getClubInfo(), body } }
}
