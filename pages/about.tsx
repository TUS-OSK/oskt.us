import About from 'src/pages/About'
import { getPageMarkdown } from 'api/markdowns'

interface Props {
  body: string
}

export default function AboutPage({ body }: Props) {
  return <About body={body}></About>
}

export async function getStaticProps() {
  const { body } = getPageMarkdown('about')

  return {
    props: {
      body,
    },
  }
}
