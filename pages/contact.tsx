import Contact from 'src/pages/Contact'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'
import { GetStaticProps } from 'next'

interface ContactMeta {
  clubroom: string
  twitterId: string
  mail: string
}

interface Props {
  meta: MarkdownMeta<ContactMeta>
  body: string
}

export default function ContactPage({ meta, body }: Props) {
  const { clubroom, twitterId, mail, title } = meta

  return <Contact title={title} clubroom={clubroom} twitterId={twitterId} mail={mail} body={body} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { meta, body } = getPageMarkdown<ContactMeta>('contact')

  return {
    props: {
      meta,
      body,
    },
  }
}
