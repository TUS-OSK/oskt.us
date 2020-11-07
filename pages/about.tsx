import About from 'src/pages/About'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'

export interface AboutMeta {
  caption: string
}

interface Props {
  meta: MarkdownMeta<AboutMeta>
  body: string
}

export default function AboutPage({ meta: { title, caption }, body }: Props) {
  return <About title={title} caption={caption} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown<AboutMeta>('about')

  return {
    props: {
      meta,
      body,
    },
  }
}
