import { ReactNode } from 'react'
import styled from '@emotion/styled'

export interface Props {
  children: ReactNode
}

export default function EventElement({ children }: Props) {
  return <Container>{children}</Container>
}

// [px]
export const EVENT_ELEMENT_HEIGHT = 54
const Container = styled.div`
  box-sizing: border-box;
  border: 2px solid #d24154;
  padding: 0 16px;
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  background-color: #da6272;
  height: ${EVENT_ELEMENT_HEIGHT}px;
`
