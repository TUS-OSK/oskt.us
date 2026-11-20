import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { PageHeader, Section } from 'src/components/ui/layout'
import { urlPageMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  body: string
}

export default function Archive({ title = 'アーカイブ', body }: Props) {
  return (
    <>
      <PageHead title={title} description="東京理科大学 応用数学研究部(OSK)の過去の記事・ページの一覧。年度ごとの新歓や講義班の紹介など。" />
      <MainLayout>
        <PageHeader label="Archive" title={title} lead="これまでの記事とページの一覧です。" narrow />
        <Section narrow>
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('archive')} />
        </Section>
      </MainLayout>
    </>
  )
}
