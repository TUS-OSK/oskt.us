import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { Section } from 'src/pages/Home/elements'

interface Props {
  title?: string
  body: string
}

export default function Article({ title, body }: Props) {
  return (
    <>
      <PageHead title={{ sub: title }}></PageHead>
      <MainLayout>
        <Section>
          <MarkdownBody body={body}></MarkdownBody>
        </Section>
      </MainLayout>
    </>
  )
}
