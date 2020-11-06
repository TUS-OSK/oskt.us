import { getArticlesAll, getPageMarkdown } from 'api/markdowns'
import { GetStaticProps } from 'next'
import Home from 'src/pages/Home'
import { AboutMeta } from './about'
import { ContactMeta } from './contact'
import { createfilterdArticleMetaList } from './news'

interface Props {
  aboutData: {
    meta: AboutMeta
  }
  newsData: {
    articlesStr: string
  }
  contactData: {
    meta: ContactMeta
  }
}

export default function IndexPage({ aboutData: _aboutData, newsData: _newsData, contactData: _contactData }: Props) {
  const { caption } = _aboutData.meta

  const articles = JSON.parse(_newsData.articlesStr)

  const { clubroom, twitterId, mail } = _contactData.meta

  return (
    <Home
      aboutData={{ caption }}
      newsData={{ metaList: createfilterdArticleMetaList(articles) }}
      contactData={{ clubroom, twitterId, mail }}
    />
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta: aboutMeta } = getPageMarkdown<AboutMeta>('about')
  const { meta: contactMeta } = getPageMarkdown<ContactMeta>('contact')
  const articles = getArticlesAll()

  return {
    props: {
      aboutData: {
        meta: aboutMeta,
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
