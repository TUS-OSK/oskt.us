import styled from 'styled-components'
import { Section } from 'src/components/MainLayout/elements'

export default function NewsView() {
  return (
    <Container>
      <div>
        <div className="title">NEWS</div>
        {/* ${md(NEWS_PATH)(...arguments)} */}
      </div>
    </Container>
  )
}

const Container = styled(Section)`
  overflow: hidden;
  background-color: #eee;
  color: #555;
  text-align: center;

  & .title {
    @apply --section-title;

    font-size: 25px;
    font-weight: bold;
    font-family: 'novecentosans';

    /* @media (max-width: 700px) {
      @apply --section-title-small;
    } */
  }
`
