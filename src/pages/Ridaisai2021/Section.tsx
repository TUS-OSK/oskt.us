import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { MEDIA_QUERY_MOBILE } from './breakpoint/helper'

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
  font-weight: bold;

  font-size: 32px;
  margin-bottom: 16px;
  ${MEDIA_QUERY_MOBILE} {
    font-size: 24px;
    margin-bottom: 8px;
  }
`

const Description = styled.div`
  max-width: 600px;
  margin: auto;

  font-size: 20px;
  ${MEDIA_QUERY_MOBILE} {
    font-size: 16px;
  }
`

const Contents = styled.div`
  padding-top: 40px;
  ${MEDIA_QUERY_MOBILE} {
    padding-top: 24px;
  }
`
