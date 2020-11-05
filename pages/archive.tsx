import Archive from 'src/pages/Archive'
import { getPageMarkdown } from 'api/markdowns'

interface Props {
  body: string
}

export default function ArchivePage({ body }: Props) {
  return <Archive body={body}></Archive>
}

export async function getStaticProps() {
  const { body } = getPageMarkdown('archive')

  return {
    props: {
      body,
    },
  }
}
