import styled from 'styled-components'
import AboutView from './AboutView'
import HeroView from './HeroView'

export default function Home() {
  return (
    <Container>
      <HeroView></HeroView>
      <AboutView></AboutView>
    </Container>
  )
}

const Container = styled.div``
