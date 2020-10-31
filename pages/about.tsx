import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import About from 'src/pages/About'

interface Props {
  body: string
}

export default function IndexPage({ body }: Props) {
  return <About body={body} />
}

const dir = join(process.cwd(), '_markdowns')

export async function getStaticProps() {
  const path = join(dir, 'about.md')
  const file = readFileSync(path, 'utf8')
  const { content } = matter(file)

  return {
    props: {
      body: content,
    },
  }
}
