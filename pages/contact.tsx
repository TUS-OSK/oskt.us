import Contact from 'src/pages/Contact'
import { getPageMarkdown, MarkdownMeta } from 'api/markdowns'

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

export async function getStaticProps() {
  const { meta, body } = getPageMarkdown<ContactMeta>('contact')

  return {
    props: {
      meta,
      body,
    },
  }
}
