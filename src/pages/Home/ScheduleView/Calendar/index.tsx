import { ReactElement } from 'react'
import styled from 'styled-components'
import { EventCalendar, months } from 'src/pages/Home/ScheduleView'
import EventElement from './Event'

interface Props {
  start: number
  eventCalendar: EventCalendar
}

const toReactElements = (ec: EventCalendar) => {
  const results: ReactElement[] = []
  months.forEach((m) => {
    const events = ec[m]
    if (events === undefined) {
      return
    }
    results.push(...events.map((e, i) => <EventElement key={`${m}-${i}`} jaName={e.name.ja} enName={e.name.en} />))
  })
  return results
}

export default function Calendar({ start, eventCalendar }: Props) {
  return (
    <Grid>
      <Title>Month</Title>
      <Title>Activities / Events</Title>

      {[...Array(12).keys()].map((i) => (
        <Month key={i} month={((i + start - 1) % 12) + 1} />
      ))}

      <EventArea>{toReactElements(eventCalendar)}</EventArea>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: max-content 1fr;
`

const Title = styled.div`
  text-align: center;
  padding: 8px;
`

const GRID = 40
const Month = styled.div<{ month: number }>`
  font-size: 16px;
  box-sizing: border-box;
  height: ${GRID}px;
  border-top: 1px solid #ddd;
  padding: 4px 6px;
  grid-column: 1/3;

  &::before {
    display: block;
    content: '${(p) => p.month}';
  }
`

const EventArea = styled.div`
  grid-column: 2/3;
  grid-row: 2;
  position: relative;
`
