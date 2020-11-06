import Button from 'src/components/Button'
import styled from 'styled-components'
import { Section } from 'src/components/MainLayout/elements'
import { pageTo } from 'src/utils/urls'

export interface AboutData {
  caption: string
}

interface Props {
  aboutData: AboutData
}

const PRIMARY_COLOR = '#bbb'
const SECONDARY_COLOR = '#333'

export default function AboutView({ aboutData: { caption } }: Props) {
  return (
    <Container>
      <Text>OSK</Text>
      <Content>
        {caption}
        <ButtonWrapper>
          <Button color={{ primary: PRIMARY_COLOR, secondary: SECONDARY_COLOR }} href={pageTo('about')}>
            DETAIL
          </Button>
        </ButtonWrapper>
      </Content>
    </Container>
  )
}

const Text = styled.div`
  font-size: 40vw;
  color: #333;
  margin-left: -30px;
  height: 0.8em;
  user-select: none;
`

const Content = styled(Section)`
  background-color: #333;
  color: #bbb;
  font-size: 16px;
  line-height: 1.6em;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 0;
`

const Container = styled.div``
