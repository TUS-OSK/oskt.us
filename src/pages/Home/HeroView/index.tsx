import Menu from 'src/components/Menu'
import { SWIFT } from 'src/utils/animations'
import styled from 'styled-components'
import { slideArrow, slideMenu, T_AROUND, T_SLIDE } from './animations'
import Banner from './Banner'

export default function HeroView() {
  return (
    <Container>
      <Top>
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

const Top = styled.div`
  overflow: hidden;
`

const MenuWrapper = styled.div`
  opacity: 0;
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
`

const ARROW_SIZE = 40
const ARROW_PADDING = 100

const Arrow = styled.div`
  position: relative;
  z-index: 0;
  width: ${ARROW_SIZE + ARROW_PADDING}px;
  height: ${ARROW_SIZE + ARROW_PADDING}px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    width: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
    height: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
    box-sizing: border-box;
    border-right: solid 1px rgba(0, 0, 0, 0.4);
    border-bottom: solid 1px rgba(0, 0, 0, 0.4);
    animation: ${slideArrow} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
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
