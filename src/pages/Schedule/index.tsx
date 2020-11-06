import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import MarkdownTitle from 'src/components/MarkdownTitle'
import { Section } from 'src/pages/Home/elements'

interface Props {
  title?: string
  body: string
}

export default function Schedule({ title, body }: Props) {
  return (
    <>
      <PageHead title={{ sub: title }}></PageHead>
      <MainLayout>
        <Section>
          {title && <MarkdownTitle title={title}></MarkdownTitle>}
          <MarkdownBody body={body}></MarkdownBody>
        </Section>
      </MainLayout>
    </>
  )
}
