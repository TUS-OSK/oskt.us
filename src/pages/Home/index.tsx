import { PageHead } from 'src/components/Head'
import AboutView, { AboutData } from './AboutView'
import ContactView, { ContactData } from './ContactView'
import HeroView from './HeroView'
import NewsView from './NewsView'
import ScheduleView, { ScheduleData } from './ScheduleView'
import { NewsData } from './NewsView'
import Footer from 'src/components/Footer'

interface Props {
  newsData: NewsData
  aboutData: AboutData
  scheduleData: ScheduleData
  contactData: ContactData
}

export default function Home({ newsData, aboutData, scheduleData, contactData }: Props) {
  return (
    <>
      <PageHead />
      <HeroView></HeroView>
      <AboutView aboutData={aboutData}></AboutView>
      <ScheduleView scheduleData={scheduleData}></ScheduleView>
      <NewsView newsData={newsData}></NewsView>
      <ContactView contactData={contactData}></ContactView>
      <Footer></Footer>
    </>
  )
}
