import Archive from 'src/pages/Archive'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'

interface Props {
  meta: MarkdownMeta
  body: string
}

export default function ArchivePage({ body }: Props) {
  return <Archive body={body} />
}

export async function getStaticProps() {
  const { meta, body } = getPageMarkdown('archive')

  return {
    props: {
      meta,
      body,
    },
  }
}
