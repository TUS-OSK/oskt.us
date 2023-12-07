import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import { Section } from 'src/components/MainLayout/elements'

interface Props {
  title?: string
  content?: string
}

export default function Blog({ title, content }: Props) {
  return (
    <>
      <PageHead title={title}></PageHead>
      <MainLayout>
        <Section>
          {content}
        </Section>
      </MainLayout>
    </>
  )
}
