import { Section } from 'src/components/MainLayout/elements'
import styled from '@emotion/styled'

export default function Footer() {
  return (
    <Container as="footer">
      <small>Copyright (c) 2022 OSK</small>
    </Container>
  )
}

const Container = styled(Section)`
  display: flex;
  justify-content: center;
  background-color: #333;
  color: #bbb;
`
