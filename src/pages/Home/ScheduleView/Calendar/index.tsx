import React from 'react'
import styled from '@emotion/styled'
import { EventCalendar } from 'src/pages/Home/ScheduleView'
import MonthEventElement from './MonthEventElement'

interface Props {
  eventCalendar: EventCalendar
}

export default function Calendar({ eventCalendar: { months, events } }: Props) {
  return (
    <Container>
      <Header>
        <MonthTitle>Month</MonthTitle>
        <EventsTitle>Activities / Events</EventsTitle>
      </Header>
      {months.map((m) => {
        const monthlyEvents = events[m]
        return !monthlyEvents ? (
          <Month key={m} month={m} />
        ) : (
          <Month key={m} month={m}>
            <MonthEventElementWrapper>
              <HoverActionController>
                <MonthEventElement events={monthlyEvents} />
              </HoverActionController>
            </MonthEventElementWrapper>
          </Month>
        )
      })}
    </Container>
  )
}

const Container = styled.div``

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`

const MONTH_WIDTH = 80

const MonthTitle = styled.div`
  width: ${MONTH_WIDTH}px;
`

const EventsTitle = styled.div``

const Month = styled.div<{ month: number }>`
  font-size: 16px;
  box-sizing: border-box;
  min-height: 24px;
  border-top: 1px solid #ddd;
  padding: 8px 6px;
  display: flex;

  &::before {
    display: block;
    width: ${MONTH_WIDTH}px;
    content: '${(p) => p.month}';
  }
`

const MonthEventElementWrapper = styled.div`
  flex: 1;
`

const HoverActionController = styled.div`
  transition: transform 0.15s ease;

  &:hover {
    transition-timing-function: ease;
    transform: scale(1.05);
  }
`
