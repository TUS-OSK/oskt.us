import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  description: string
  open?: boolean
  children?: ReactNode
  fluidColor?: string
}

export default function Section({ title, description, children }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Contents>{children}</Contents>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  z-index: 0;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Description = styled.div`
  font-size: 20px;
  max-width: 600px;
  margin: auto;
`

const Contents = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
`
