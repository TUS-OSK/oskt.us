import Button from 'src/components/Button'
import styled from 'styled-components'
import { Section } from 'src/components/MainLayout/elements'

export default function AboutView() {
  return (
    <Container>
      <Text>OSK</Text>
      <Content>
        <p>
          応用数学研究部(応数研,
          OSK)は東京理科大学一部研究会に属する部活動団体で、創部から半世紀以上たつ歴史ある団体です。
        </p>
        <p>
          コンピュータを利用してプログラミングを主に、計算機科学、WEB開発、アプリケーション開発、ゲーム開発、など様々なことに挑戦しています。
        </p>
        <ButtonWrapper>
          <Button href="#">DETAIL</Button>
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
