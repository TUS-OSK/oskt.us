import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { Section } from 'src/pages/Home/elements'

interface Props {
  body: string
}

export default function Archive({ body }: Props) {
  return (
    <MainLayout>
      <Section>
        <MarkdownBody body={body}></MarkdownBody>
      </Section>
    </MainLayout>
  )
}
