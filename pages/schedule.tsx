import Schedule from 'src/pages/Schedule'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'
import { EventCalendar, Month, months } from 'src/pages/Home/ScheduleView'

export interface EventDataMD {
  name: {
    ja: string
    en: string
  }
  detail: string[]
  top: boolean
}
export type EventCalendarMD = { [m in Month]?: EventDataMD[] }

export interface ScheduleMeta {
  eventCalendar: EventCalendarMD
}

interface Props {
  meta: MarkdownMeta
  body: string
}

export const parseEventCalendar = (ecmd: EventCalendarMD): EventCalendar => {
  const ec: EventCalendar = {}
  months.forEach((m) => {
    const es = ecmd[m]?.filter((e) => e.top)
    if (!es?.length) return
    ec[m] = es.map((e) => ({
      name: e.name,
      detail: e.detail,
    }))
  })
  return ec
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
