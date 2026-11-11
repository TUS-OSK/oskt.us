import { GetStaticPaths, GetStaticProps } from 'next'
import { TEAMS } from 'src/data/teams'
import TeamDetail from 'src/pages/Teams/Detail'

interface Props {
  id: string
}

export default function TeamPage({ id }: Props) {
  return <TeamDetail id={id} />
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: TEAMS.map((t) => ({ params: { id: t.id } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { id: String(params?.id) },
})
