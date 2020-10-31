import MarkdownBody from 'src/components/MarkdownBody'

interface Props {
  body: string
}

export default function About({ body }: Props) {
  return <MarkdownBody body={body}></MarkdownBody>
}
