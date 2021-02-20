import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody, { MarkdownBodyContainer } from 'src/components/MarkdownBody'
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
            <MarkdownBodyContainer centered={false}>
              <h2>今年度</h2>
              {currentYearCalendar.months.map((m) => {
                const events = currentYearCalendar.events[m]
                if (events === undefined) {
                  return null
                }
                return (
                  <>
                    <h3>{m}月</h3>
                    {events.map((e, _) => (
                      <>
                        <h4 id={encodeURIComponent(e.name.ja)}>{e.name.ja}：</h4>
                        <p>{e.detail}</p>
                      </>
                    ))}
                  </>
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
