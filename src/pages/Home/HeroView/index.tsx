import Menu from 'src/components/Menu'
import { SWIFT } from 'src/utils/animations'
import styled from '@emotion/styled'
import { slideArrow, slideMenu, T_AROUND, T_SLIDE } from './animations'
import Baloon, { BALOON_HEIGHT } from './Baloon'
import Banner from './Banner'

export default function HeroView() {
  return (
    <Container>
      <Top>
        <BaloonWrapper>
          <Baloon></Baloon>
        </BaloonWrapper>
        <MenuWrapper>
          <Menu></Menu>
        </MenuWrapper>
      </Top>
      <Center>
        <Banner></Banner>
      </Center>
      <Bottom>
        <Arrow></Arrow>
      </Bottom>
    </Container>
  )
}

const BALOON_MARGIN = 40

const Top = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  padding: ${BALOON_HEIGHT + BALOON_MARGIN}px 24px;
  box-sizing: border-box;
`

const BaloonWrapper = styled.div`
  position: absolute;
  top: ${BALOON_MARGIN}px;
  right: ${BALOON_MARGIN}px;
  animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND + 0.2}s 1 normal both running;
`

const MenuWrapper = styled.div`
  animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
`

const Center = styled.div`
  width: 100%;
  height: 50%;
  min-height: 280px;
`

const Bottom = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 40px 24px;
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
    border-right: solid 1px rgba(0, 0, 0, 0.4);
    border-bottom: solid 1px rgba(0, 0, 0, 0.4);
    transform: rotate(45deg);
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  animation-play-state: paused;
`
