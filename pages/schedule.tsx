import { getYearFlow, type FlowItem } from 'api/club'
import { getPageMarkdown } from 'api/markdowns'
import { GetStaticProps } from 'next'
import Schedule from 'src/pages/Schedule'

interface Props {
  title: string
  body: string
  flow: FlowItem[]
}

export default function SchedulePage({ title, body, flow }: Props) {
  return <Schedule title={title} body={body} flow={flow} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('schedule')
  return { props: { title: meta.title ?? '年間スケジュール', body, flow: getYearFlow() } }
}
