import { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Header from '../Header'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Container>
        <Header></Header>
        {children}
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
