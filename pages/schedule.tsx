import Schedule from 'src/pages/Schedule'
import { getPageMarkdown } from 'api/markdowns'

interface Props {
  body: string
}

export default function SchedulePage({ body }: Props) {
  return <Schedule body={body}></Schedule>
}

export async function getStaticProps() {
  const { body } = getPageMarkdown('schedule')

  return {
    props: {
      body,
    },
  }
}
