import Contact from 'src/pages/Contact'
import { getPageMarkdown, MarkdownBaseMeta } from 'api/markdowns'

interface ContactMeta extends MarkdownBaseMeta {
  clubroom: string
  twitterId: string
  mail: string
}

interface Props {
  meta: ContactMeta
  body: string
}

export default function ContactPage({ meta, body }: Props) {
  const { clubroom, twitterId, mail } = meta

  return <Contact clubroom={clubroom} twitterId={twitterId} mail={mail} body={body}></Contact>
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
