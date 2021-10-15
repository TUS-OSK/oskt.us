import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'
import FAQ from 'src/pages/FAQ'

interface Props {
  meta: MarkdownMeta
  body: string
}

export default function FAQPage({ meta: { title }, body }: Props) {
  return <FAQ title={title} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown('faq')

  return {
    props: {
      meta,
      body,
    },
  }
}
