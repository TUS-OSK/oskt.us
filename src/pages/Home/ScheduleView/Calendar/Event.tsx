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

const Container = styled.div`
  box-sizing: border-box;
  border: 2px solid #d24154;
  padding: 16px;
  display: flex;
  align-items: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  user-select: none;
  white-space: nowrap;
  background-color: #da6272;
  position: absolute;
  width: 100%;

  &:hover {
    transition-timing-function: ease;
    transform: scale(1.05);
    box-shadow: 0 2px 10px 0 #0003;
  }
`
