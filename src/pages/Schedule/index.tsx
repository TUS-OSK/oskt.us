import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody, { MarkdownBodyContainer } from 'src/components/MarkdownBody'
import MarkdownTitle from 'src/components/MarkdownTitle'
import { Section } from 'src/components/MainLayout/elements'
import { urlPageMdEdit } from 'src/utils/urls'
import styled from '@emotion/styled'
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
            <MarkdownBodyContainer centered={false}>
              <h2>今年度（予定）</h2>
              {currentYearCalendar.months.map((m) => {
                const events = currentYearCalendar.events[m]
                if (events === undefined) {
                  return null
                }
                return (
                  <div key={`${m}月`}>
                    <h3>{m}月</h3>
                    {events.map((e, _) => (
                      <div key={encodeURIComponent(e.name.ja)}>
                        <EventTitle id={encodeURIComponent(e.name.ja)}>{e.name.ja}</EventTitle>
                        <EventDetail>{e.detail}</EventDetail>
                      </div>
                    ))}
                  </div>
                )
              })}
            </MarkdownBodyContainer>
          </CurrentYearPlan>
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('archive')}></MarkdownBody>
        </Section>
      </MainLayout>
    </>
  )
}

const CurrentYearPlan = styled.div``

const EventTitle = styled.div`
  font-family: 'novecentosans', sans-serif;
  font-weight: bold;
  margin-top: 16px;
`
const EventDetail = styled.div``
