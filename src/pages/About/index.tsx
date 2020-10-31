import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import styled from 'styled-components'
import { Section } from '../Home/elements'

interface Props {
  body: string
}

export default function About({ body }: Props) {
  return (
    <>
      <MainLayout>
        <Container>
          <Content>
            <MarkdownBody body={body}></MarkdownBody>
          </Content>
        </Container>
      </MainLayout>
    </>
  )
}

const Content = styled(Section)``

const Container = styled.div`
  /* .root {
    @apply --body;

    & .edit-request {
      color: var(--secondary-color);
      font-size: 13px;

      & a {
        color: inherit;
      }
    }
  } */
`
