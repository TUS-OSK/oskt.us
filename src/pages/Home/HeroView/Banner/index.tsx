import styled from '@emotion/styled'
import { BOUNCE, CUBIC_OUT, SWIFT } from 'src/utils/animations'
import { fade, flip, pic } from './animations'
import { T_AROUND, T_COVER, T_FLIP, T_PIC } from '../animations'

export default function TopBanner() {
  return (
    <Banner>
      <Image></Image>
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

const Image = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  animation: ${fade} ${T_PIC}s ${SWIFT} ${T_AROUND}s 1 normal both running,
    ${pic} ${T_PIC * 0.9}s ${CUBIC_OUT} ${T_AROUND}s 1 normal both running;
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
