import { ReactNode } from 'react'
import { SWIFT } from 'src/utils/animations'
import styled from '@emotion/styled'
import Footer from '../Footer'
import Header from '../Header'
import { keyframes } from '@emotion/react'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Container>
        <Header></Header>
        <Body>{children}</Body>
      </Container>
      <Footer></Footer>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

const slideBody = keyframes`
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Body = styled.div`
  animation: ${slideBody} ${SWIFT} 0.2s 1 normal both running;
`
