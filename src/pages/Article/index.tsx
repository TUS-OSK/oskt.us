import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import MarkdownTitle from 'src/components/MarkdownTitle'
import { Section } from 'src/components/MainLayout/elements'
import { urlArticleMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  year: string
  slug: string
  body: string
}

export default function Article({ title, year, slug, body }: Props) {
  return (
    <>
      <PageHead title={title}></PageHead>
      <MainLayout>
        <Section>
          {title && <MarkdownTitle title={title}></MarkdownTitle>}
          <MarkdownBody body={body} editRequestUrl={urlArticleMdEdit(year, slug)}></MarkdownBody>
        </Section>
      </MainLayout>
    </>
  )
}
