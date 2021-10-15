import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import MarkdownTitle from 'src/components/MarkdownTitle'
import { Section } from 'src/components/MainLayout/elements'
import { urlPageMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  caption: string
  body: string
}

export default function About({ title, caption, body }: Props) {
  return (
    <>
      <PageHead title={title}></PageHead>
      <MainLayout>
        <Section>
          {title && <MarkdownTitle title={title}></MarkdownTitle>}
          <MarkdownBody body={caption}></MarkdownBody>
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('about')}></MarkdownBody>
        </Section>
      </MainLayout>
    </>
  )
}
