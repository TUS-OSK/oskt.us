import styled from 'styled-components'
import AboutView from './AboutView'
import ContactView from './ContactView'
import HeroView from './HeroView'
import NewsView from './NewsView'
import ScheduleView from './ScheduleView'

export default function Home() {
  return (
    <Container>
      <HeroView></HeroView>
      <AboutView></AboutView>
      <ScheduleView></ScheduleView>
      <NewsView></NewsView>
      <ContactView></ContactView>
    </Container>
  )
}

const Container = styled.div``
