import Archive from 'src/pages/Archive'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'

interface Props {
  meta: MarkdownMeta
  body: string
}

export default function ArchivePage({ meta: { title }, body }: Props) {
  return <Archive title={title} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('archive')

  return {
    props: {
      meta,
      body,
    },
  }
}
