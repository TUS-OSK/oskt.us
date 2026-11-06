import styled from '@emotion/styled'
import { BOUNCE, SWIFT } from 'src/utils/animations'
import { fade, flip } from './animations'
import { T_AROUND, T_COVER, T_FLIP, T_PIC } from '../animations'
import LifeGameBackground from './LifeGameBackground'

export default function TopBanner() {
  return (
    <Banner>
      <ImageWrapper>
        <LifeGameBackground />
      </ImageWrapper>
      <Names></Names>
    </Banner>
  )
}

const Banner = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
`

// 写真(/images/bg.jpg)からライフゲーム背景に差し替え(2026-11、新歓向けリニューアル)。
// 元のImageはCSSのbackground-imageだったが、canvas差し込み用にwrapperへ変更。
// フェードインのアニメーションはそのまま踏襲する
const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  animation: ${fade} ${T_PIC}s ${SWIFT} ${T_AROUND}s 1 normal both running;
`

function Names() {
  return (
    <NamesContainer>
      <First>応用</First>
      <Second>数学</Second>
      <Third>研究部</Third>
      <Forth>東京理科大学</Forth>
    </NamesContainer>
  )
}

const NamesContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  line-height: 36px;
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
  letter-spacing: 5px;
  perspective: 200px;
  padding: 40px;
  white-space: nowrap;
`

const Name = styled.div`
  margin-bottom: 0;
  transform-origin: 50% 0;
`

const First = styled(Name)`
  animation: ${flip} ${T_FLIP}s ${BOUNCE} ${T_COVER}s 1 normal both running;
`

const Second = styled(Name)`
  animation: ${flip} ${T_FLIP}s ${BOUNCE} ${T_COVER + T_FLIP * 0.5}s 1 normal both running;
`
const Third = styled(Name)`
  margin-bottom: 1px;
  animation: ${flip} ${T_FLIP}s ${BOUNCE} ${T_COVER + T_FLIP}s 1 normal both running;
`

const Forth = styled(Name)`
  font-weight: normal;
  font-size: 20px;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.4);
  letter-spacing: 3px;
  animation: ${flip} ${T_FLIP}s ${BOUNCE} ${T_COVER + T_FLIP * 1.5}s 1 normal both running;
`
