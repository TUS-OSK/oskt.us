import { PageHead } from 'src/components/Head'
import ActivityGallery from './ActivityGallery'
import AboutView, { AboutData } from './AboutView'
import BansView from './BansView'
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
      <main>
        <HeroView></HeroView>
        <ActivityGallery></ActivityGallery>
        <AboutView aboutData={aboutData}></AboutView>
        <BansView></BansView>
        <ScheduleView scheduleData={scheduleData}></ScheduleView>
        <NewsView newsData={newsData}></NewsView>
        <ContactView contactData={contactData}></ContactView>
      </main>
      <Footer></Footer>
    </>
  )
}
