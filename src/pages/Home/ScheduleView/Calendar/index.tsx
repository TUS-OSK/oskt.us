import styled from 'styled-components'
import SmallEvent from './SmallEvent'

interface Props {
  start: number
  smallEvents: { month: number; jaName: string; enName: string }[]
}

export default function Calendar({ start, smallEvents }: Props) {
  return (
    <Grid>
      <Title>Month</Title>
      <Title>Activities / Events</Title>

      {[...Array(12).keys()].map((i) => (
        <Month key={i} month={((i + start - 1) % 12) + 1} />
      ))}

      <EventArea>
        {smallEvents.map((e, i) => (
          <SmallEvent key={i} jaName={e.jaName} enName={e.enName} />
        ))}
      </EventArea>
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
