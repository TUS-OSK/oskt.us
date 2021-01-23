import { getArticlesAll, getPageMarkdown } from 'api/markdowns'
import { GetStaticProps } from 'next'
import Home from 'src/pages/Home'
import { AboutMeta } from './about'
import { ContactMeta } from './contact'
import { createfilterdArticleMetaList } from './news'
import { ScheduleMeta } from './schedule'

interface Props {
  aboutData: {
    meta: AboutMeta
  }
  scheduleData: {
    meta: ScheduleMeta
  }
  newsData: {
    articlesStr: string
  }
  contactData: {
    meta: ContactMeta
  }
}

export default function IndexPage({
  aboutData: _aboutData,
  scheduleData: _scheduleData,
  newsData: _newsData,
  contactData: _contactData,
}: Props) {
  const { caption } = _aboutData.meta

  const eventCalendar = _scheduleData.meta.eventCalendar

  const articles = JSON.parse(_newsData.articlesStr)

  const { clubroom, twitterId, mail } = _contactData.meta

  return (
    <Home
      aboutData={{ caption }}
      scheduleData={{ eventCalendar }}
      newsData={{ metaList: createfilterdArticleMetaList(articles) }}
      contactData={{ clubroom, twitterId, mail }}
    />
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta: aboutMeta } = getPageMarkdown<AboutMeta>('about')
  const { meta: scheduleMeta } = getPageMarkdown<ScheduleMeta>('schedule')
  const { meta: contactMeta } = getPageMarkdown<ContactMeta>('contact')
  const articles = getArticlesAll()

  return {
    props: {
      aboutData: {
        meta: aboutMeta,
      },
      scheduleData: {
        meta: scheduleMeta,
      },
      contactData: {
        meta: contactMeta,
      },
      newsData: {
        articlesStr: JSON.stringify(articles),
      },
    },
  }
}
