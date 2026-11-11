import { compareDesc } from 'date-fns'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { NewsList, type NewsItem } from 'src/components/ui/blocks'
import { PageHeader, Section } from 'src/components/ui/layout'
import { urlPageMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  body: string
  metaList: NewsItem[]
}

export type MetaItemProps = NewsItem

export default function News({ title = 'ニュース', body, metaList }: Props) {
  const sorted = [...metaList].sort((a, b) => compareDesc(a.date, b.date))
  return (
    <>
      <PageHead title={title} description="東京理科大学 応用数学研究部(OSK)のお知らせと活動記録。新歓、班の活動、理大祭、大会への参加など。" />
      <MainLayout>
        <PageHeader label="News" title={title} lead="お知らせと活動の記録です。" narrow />
        <Section narrow>
          <NewsList items={sorted} />
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('news')} />
        </Section>
      </MainLayout>
    </>
  )
}
