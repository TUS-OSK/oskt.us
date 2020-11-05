import Schedule from 'src/pages/Schedule'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'

interface Props {
  meta: MarkdownMeta
  body: string
}

export default function SchedulePage({ meta: { title }, body }: Props) {
  return <Schedule title={title} body={body} />
}

export async function getStaticProps() {
  const { meta, body } = getPageMarkdown('schedule')

  return {
    props: {
      meta,
      body,
    },
  }
}
