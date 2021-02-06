import styled from 'styled-components'

export interface Props {
  jaName: string
  enName: string
}

export default function EventElement({ jaName, enName }: Props) {
  return (
    <Container>
      <JaName>{jaName}</JaName>
      <EnName>{enName}</EnName>
    </Container>
  )
}

const JaName = styled.div`
  font-size: 16px;
  color: #fffd;
`

const EnName = styled.div`
  font-size: 12px;
  color: #fff7;
`

// [px]
export const EVENT_ELEMENT_HEIGHT = 54
const Container = styled.div`
  box-sizing: border-box;
  border: 2px solid #d24154;
  padding: 0 16px;
  display: flex;
  align-items: center;
  transition: box-shadow 0.15s ease;
  user-select: none;
  white-space: nowrap;
  background-color: #da6272;
  height: ${EVENT_ELEMENT_HEIGHT}px;
  width: 100%;
`
