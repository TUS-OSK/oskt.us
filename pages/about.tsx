import About from 'src/pages/About'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'

interface Props {
  meta: MarkdownMeta
  body: string
}

export default function AboutPage({ meta: { title }, body }: Props) {
  return <About title={title} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('about')

  return {
    props: {
      meta,
      body,
    },
  }
}
