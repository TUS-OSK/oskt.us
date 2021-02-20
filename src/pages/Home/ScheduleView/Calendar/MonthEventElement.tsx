import styled from 'styled-components'
import { EventData } from '..'
import EventElement from './EventElement'
import { useState, useEffect } from 'react'
import { pageTo } from 'src/utils/urls'
import { StyledLink } from 'src/utils/next/elements'

export interface Props {
  events: EventData[]
}

type EventStatus = 'before' | 'shown' | 'after' | 'hidden'

export default function MonthEventElement({ events: _events }: Props) {
  // NOTE: eventsが2個の時だけafterとbeforeの区別を付けられなくなってしまうため二倍にする
  const events = _events.length === 2 ? [..._events, ..._events] : _events

  const [topIndex, setTopIndex] = useState(0)

  useEffect(() => {
    if (1 < events.length) {
      const t = setTimeout(() => setTopIndex((i) => (i + 1) % events.length), 2000)
      return () => clearTimeout(t)
    }
  })

  const getStatus = (i: number): EventStatus => {
    if (i === topIndex) {
      return 'shown'
    }
    if ((i - 1 + events.length) % events.length === topIndex) {
      return 'before'
    }
    if ((i + 1) % events.length === topIndex) {
      return 'after'
    }
    return 'hidden'
  }

  return (
    <Container href={`${pageTo('schedule')}#${encodeURIComponent(events[topIndex].name.ja)}`}>
      <EventElement>
        {events.map((e, i) => (
          <EventText key={i} status={getStatus(i)}>
            <JaName>{e.name.ja}</JaName>
            <EnName>{e.name.en}</EnName>
          </EventText>
        ))}
      </EventElement>
    </Container>
  )
}

// [px]
export const EVENT_ELEMENT_HEIGHT = 64
const Container = styled(StyledLink)`
  position: relative;
  display: flex;
  flex-flow: column;

  &:hover {
    cursor: pointer;
  }
`

const eventStatusStyle: {
  [status in EventStatus]: { visibility: 'visible' | 'hidden'; opacity: number; y?: number }
} = {
  before: {
    visibility: 'visible',
    opacity: 0,
    y: 16,
  },
  shown: {
    visibility: 'visible',
    opacity: 100,
  },
  after: {
    visibility: 'hidden',
    opacity: 0,
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
}

const JaName = styled.div`
  font-size: 16px;
  color: #fffd;
`

const EnName = styled.div`
  font-size: 12px;
  color: #fff7;
`

const EventText = styled.div<{ status: EventStatus }>`
  position: absolute;
  visibility: ${(p) => eventStatusStyle[p.status].visibility};
  ${JaName} {
    opacity: ${(p) => eventStatusStyle[p.status].opacity};
    transform: translateY(${(p) => eventStatusStyle[p.status].y ?? 0}px);
    transition: opacity 0.4s, transform 0.4s;
  }
  ${EnName} {
    opacity: ${(p) => eventStatusStyle[p.status].opacity};
    transform: translateY(${(p) => (eventStatusStyle[p.status].y ?? 0) / 2}px);
    transition: 0.1s opacity 0.4s, 0.1s transform 0.4s;
  }
`
