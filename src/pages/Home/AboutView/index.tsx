import Button from 'src/components/Button'
import styled from '@emotion/styled'
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
      <Content>
        <Lead>OSK</Lead>
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

// 旧実装は画面幅いっぱいの巨大な"OSK"ロゴタイプ(font-size: 40vw)を上に乗せていたが、
// 不気味という指摘を受けて撤去(2026-11)。代わりにこのセクションの直前(ヒーロー直後)に
// ActivityGalleryを配置し、「開いてすぐ見える場所」には写真を置く方針にした。
const Lead = styled.div`
  font-family: 'novecentosans';
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  color: #fff;
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
