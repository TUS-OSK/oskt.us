import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { EventCalendar, Events } from 'src/pages/Home/ScheduleView'
import { EVENT_ELEMENT_HEIGHT } from './EventElement'
import MonthEventElement from './MonthEventElement'

interface Props {
  eventCalendar: EventCalendar
}

const toReactElements = (months: number[], _events: Events) => {
  const results: ReactElement[] = []
  months.forEach((m, i) => {
    const events = _events[m]
    if (!events) return
    results.push(
      <MonthEventElementWrapper index={i} key={`${m}`}>
        <HoverActionController>
          <MonthEventElement events={events} />
        </HoverActionController>
      </MonthEventElementWrapper>
    )
  })
  return results
}

export default function Calendar({ eventCalendar: { months, events } }: Props) {
  return (
    <Grid>
      <Title>Month</Title>
      <Title>Activities / Events</Title>

      {months.map((m) => (
        <Month key={m} month={m} />
      ))}

      <EventArea>{toReactElements(months, events)}</EventArea>
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

const ROW_HEIGHT = EVENT_ELEMENT_HEIGHT + 8 * 2

const Month = styled.div<{ month: number }>`
  font-size: 16px;
  box-sizing: border-box;
  height: ${ROW_HEIGHT}px;
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

const MonthEventElementWrapper = styled.div<{ index: number }>`
  position: absolute;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  transform: translateY(${(props) => ROW_HEIGHT * props.index}px);
`

const HoverActionController = styled.div`
  transition: transform 0.15s ease;

  &:hover {
    transition-timing-function: ease;
    transform: scale(1.05);
  }
`
