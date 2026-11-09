import Menu from 'src/components/Menu'
import { SWIFT } from 'src/utils/animations'
import { StyledLink } from 'src/utils/next/elements'
import { pageTo } from 'src/utils/urls'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'
import { rise, slideArrow, slideMenu, T_AROUND, T_SLIDE } from './animations'
import Baloon from './Baloon'
import Banner from './Banner'

export default function HeroView() {
  return (
    <Container>
      {/* トップだけ黒地なので、上や左右に引っ張ったときに白地が覗かないようにする */}
      <Global
        styles={css`
          html {
            background: #0d0d12;
            overscroll-behavior: none;
          }
          body {
            background: #fff;
          }
        `}
      />
      <Banner></Banner>
      <Top>
        <BaloonWrapper>
          <Baloon></Baloon>
        </BaloonWrapper>
        <MenuWrapper>
          <Menu></Menu>
        </MenuWrapper>
      </Top>
      <Copy>
        <University>東京理科大学</University>
        <Lead>
          そうだ、
          <br />
          応用数学しよう。
        </Lead>
        <Teams>機械学習 / 数理統計 / コンピュータサイエンス / 競プロ / CG / Web・アプリ開発</Teams>
        <Actions>
          <Primary href={pageTo('about')}>部の様子</Primary>
          <Secondary href={pageTo('contact')}>ご連絡</Secondary>
        </Actions>
      </Copy>
      <Bottom>
        <Arrow></Arrow>
      </Bottom>
    </Container>
  )
}

const BALOON_MARGIN = 40
const INK_WHITE = 'rgba(255, 255, 255, 0.92)'

const Top = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  padding: ${BALOON_MARGIN}px 24px 0;
  box-sizing: border-box;

  @media (max-width: 859px) {
    padding-top: 8px;
  }

  a {
    color: rgba(255, 255, 255, 0.72);
    border-bottom-color: rgba(255, 255, 255, 0.4);
  }
`

const BaloonWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND + 0.2}s 1 normal both running;
`

const MenuWrapper = styled.div`
  animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
`

const Copy = styled.div`
  position: absolute;
  z-index: 2;
  left: 24px;
  right: 24px;
  bottom: 24px;
  color: ${INK_WHITE};
  animation: ${rise} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;

  @media (min-width: 860px) {
    left: max(6vw, calc(50% - 600px));
    right: auto;
    bottom: 16vh;
    max-width: 440px;
  }
`

const University = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.6);
`

const Lead = styled.p`
  margin: 0 0 16px;
  font-family: 'Hiragino Mincho ProN', 'Yu Mincho', 'YuMincho', serif;
  font-size: clamp(24px, 3.2vw, 44px);
  line-height: 1.5;
  letter-spacing: 0.08em;
  white-space: nowrap;
`

const Teams = styled.p`
  margin: 0 0 24px;
  font-size: 13px;
  line-height: 1.9;
  word-break: keep-all;
  color: rgba(255, 255, 255, 0.62);

  @media (max-width: 859px) {
    margin-bottom: 16px;
    font-size: 12px;
  }
`

const Actions = styled.div`
  display: flex;
  gap: 12px;
`

const Primary = styled(StyledLink)`
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #0d0d12;
  background: ${INK_WHITE};
  transition: background 0.2s ease;
  &:hover {
    background: #7fd6ff;
  }
`

const Secondary = styled(StyledLink)`
  padding: 9px 27px;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: ${INK_WHITE};
  border: solid 1px rgba(255, 255, 255, 0.4);
  transition: border-color 0.2s ease, color 0.2s ease;
  &:hover {
    color: #7fd6ff;
    border-color: #7fd6ff;
  }

  /* スマホでは右下の入会ボタンと重なるので、そちらに任せる */
  @media (max-width: 859px) {
    display: none;
  }
`

const Bottom = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);

  @media (max-width: 859px) {
    display: none;
  }
`

const ARROW_SIZE = 40

const Arrow = styled.div`
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideArrow} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
  &::before {
    content: '';
    width: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
    height: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
    border-right: solid 1px rgba(255, 255, 255, 0.5);
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    transform: rotate(45deg);
  }
`

const Container = styled.div`
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  background: #0d0d12;
`
