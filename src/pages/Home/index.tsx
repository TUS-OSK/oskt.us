import { SWIFT } from 'src/utils/animations'
import styled from 'styled-components'
import { slideArrow, T_AROUND, T_SLIDE } from './animations'
import Menu from './Menu'
import TopBanner from './TopBanner'

export default function Home() {
  return (
    <Container>
      <TopBanner></TopBanner>
      <Menu></Menu>
      <Arrow></Arrow>
    </Container>
  )
}

const Arrow = styled.div`
  position: absolute;
  border-right: solid 1px rgba(0, 0, 0, 0.4);
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  transform: translate(-50%) rotate(45deg);
  width: 40px;
  height: 40px;
  bottom: 40px;
  left: 50%;
  animation: ${slideArrow} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  animation-play-state: paused;
`
