import Schedule from 'src/pages/Schedule'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'
import { EventCalendar, Month } from 'src/pages/Home/ScheduleView'

export interface EventDataMD {
  name: {
    ja: string
    en: string
  }
  detail: string
  top: boolean
}

export type EventCalendarMD = { [m in Month]?: EventDataMD[] }

export interface ScheduleMeta {
  startMonth: number
  eventCalendar: EventCalendarMD
}

interface Props {
  meta: MarkdownMeta<ScheduleMeta>
  body: string
}

export default function SchedulePage({ meta: { title, startMonth, eventCalendar }, body }: Props) {
  return <Schedule title={title} body={body} currentYearCalendar={new EventCalendar(startMonth, eventCalendar)} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown<ScheduleMeta>('schedule')

  return {
    props: {
      meta,
      body,
    },
  }
}
