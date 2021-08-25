import { Section } from 'src/components/MainLayout/elements'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container as="footer">
      <small>Copyright (c) 2021 OSK</small>
    </Container>
  )
}

const Container = styled(Section)`
  display: flex;
  justify-content: center;
  background-color: #333;
  color: #bbb;
`
