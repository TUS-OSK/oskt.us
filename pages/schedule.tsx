import Schedule from 'src/pages/Schedule'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'
import { EventData } from 'src/pages/Home/ScheduleView'

export const months = [...new Array(12).keys()].map((i) => i + 1)
export type Month = typeof months[number]
export type EventCalendar = { [m in Month]?: EventData[] }

export interface ScheduleMeta {
  eventCalendar: EventCalendar
}

interface Props {
  meta: MarkdownMeta
  body: string
}

export default function SchedulePage({ meta: { title }, body }: Props) {
  return <Schedule title={title} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('schedule')

  return {
    props: {
      meta,
      body,
    },
  }
}
