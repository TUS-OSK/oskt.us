import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import MarkdownTitle from 'src/components/MarkdownTitle'
import { Section } from 'src/components/MainLayout/elements'
import { urlPageMdEdit } from 'src/utils/urls'
import styled from 'styled-components'
import { EventCalendar } from '../Home/ScheduleView'

interface Props {
  title?: string
  body: string
  currentYearCalendar: EventCalendar
}

export default function Schedule({ title, body, currentYearCalendar }: Props) {
  return (
    <>
      <PageHead title={title}></PageHead>
      <MainLayout>
        <Section>
          {title && <MarkdownTitle title={title}></MarkdownTitle>}
          <CurrentYearPlan>
            {currentYearCalendar.months.map((m) => {
              const events = currentYearCalendar.events[m]
              if (events === undefined) {
                return null
              }
              return (
                <Month>
                  <MonthHeader>{m}月</MonthHeader>
                  {events.map((e, _) => (
                    <>
                      <div>{e.name.ja}</div>
                      <MonthDetail>{e.detail}</MonthDetail>
                    </>
                  ))}
                </Month>
              )
            })}
          </CurrentYearPlan>
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('archive')}></MarkdownBody>
        </Section>
      </MainLayout>
    </>
  )
}

const CurrentYearPlan = styled.div``

const Month = styled.div``

const MonthHeader = styled.div``

const MonthDetail = styled.div``
