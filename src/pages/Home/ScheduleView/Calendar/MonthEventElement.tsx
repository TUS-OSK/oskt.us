import styled from 'styled-components'
import { EventData } from '..'
import EventElement from './EventElement'
import { useState, useEffect } from 'react'

export interface Props {
  events: EventData[]
}

type EventStatus = 'before' | 'shown' | 'after' | 'hidden'

export default function MonthEventElement({ events }: Props) {
  const doubledEvents = [...events, ...events]

  const [topIndex, setTopIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setTopIndex((i) => (i + 1) % doubledEvents.length), 2000)
    return () => clearTimeout(t)
  })

  if (events.length === 1) {
    return (
      <Container>
        <EventElement jaName={events[0].name.ja} enName={events[0].name.en}></EventElement>
      </Container>
    )
  }
  const getStatus = (i: number): EventStatus => {
    if ((i - 1 + doubledEvents.length) % doubledEvents.length === topIndex) {
      return 'before'
    }
    if (i === topIndex) {
      return 'shown'
    }
    if ((i + 1) % doubledEvents.length === topIndex) {
      return 'after'
    }
    return 'hidden'
  }

  return (
    <Container>
      {doubledEvents.map((e, i) => (
        <EventElementWrapper key={i} style={i === 0 || i === 1 ? {} : { opacity: 0 }} status={getStatus(i)}>
          <EventElement jaName={e.name.ja} enName={e.name.en}></EventElement>
        </EventElementWrapper>
      ))}
    </Container>
  )
}

// [px]
export const EVENT_ELEMENT_HEIGHT = 64
const Container = styled.div`
  position: relative;
  transition: transform 0.15s ease;

  &:hover {
    transition-timing-function: ease;
    transform: scale(1.05);
    box-shadow: 0 2px 10px 0 #0003;
  }
`

const eventStatusTransform: {
  [status in EventStatus]: { angle: number; position: string; origin: string; zIndex: number; visible: boolean }
} = {
  before: {
    angle: -90,
    position: '',
    origin: '',
    zIndex: 0,
    visible: false,
  },
  shown: {
    angle: 0,
    position: '',
    origin: '',
    zIndex: 2,
    visible: true,
  },
  after: {
    angle: -90,
    position: '',
    origin: '',
    zIndex: 3,
    visible: true,
  },
  hidden: {
    angle: 90,
    position: '',
    origin: '',
    zIndex: 0,
    visible: false,
  },
}
const EventElementWrapper = styled.div<{ status: EventStatus }>`
  position: absolute;
  width: 100%;
  visibility: ${(p) => (eventStatusTransform[p.status].visible ? 'visible' : 'hidden')};
  transform: translate3d() rotate3d(1, 0, 0, ${(p) => eventStatusTransform[p.status].angle}deg);
  transform-origin: ${(p) => eventStatusTransform[p.status].origin};
  transition: 1s transform linear;
  z-index: ${(p) => eventStatusTransform[p.status].zIndex};
`
