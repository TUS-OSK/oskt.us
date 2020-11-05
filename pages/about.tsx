import About from 'src/pages/About'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'

interface Props {
  meta: MarkdownMeta
  body: string
}

export default function AboutPage({ meta: { title }, body }: Props) {
  return <About title={title} body={body} />
}

export async function getStaticProps() {
  const { meta, body } = getPageMarkdown('about')

  return {
    props: {
      meta,
      body,
    },
  }
}
