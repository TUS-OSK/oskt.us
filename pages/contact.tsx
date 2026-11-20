import { getPageMarkdown } from 'api/markdowns'
import { GetStaticProps } from 'next'
import Contact from 'src/pages/Contact'

interface Props {
  title: string
  body: string
}

export default function ContactPage({ title, body }: Props) {
  return <Contact title={title} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('contact')
  return { props: { title: meta.title ?? 'ご連絡', body } }
}
