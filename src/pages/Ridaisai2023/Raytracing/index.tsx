import styled from '@emotion/styled'

export default function Raytracing() {
  return (
    <div>
      <Title>レイトレーシング班</Title>
      <DescriptionBox>
        <Description>
          レイトレーシングとは光を現実と同じように計算することでとてもリアルなCGを作る手法です。
          <br />
          映画などのリアルなCGには必ず使われていると言ってもの過言ではなく、近年ではゲームにも応用され始め、ますます注目度が高まっている技術です。
          <br />
          このサークルでは自作のレイトレーシングプログラムで実際に画像を出したり、新しい手法を調べて新しく実装したりなどレイトレーシングに関わる活動をしています。
          <br />
          理大祭では活動で制作した画像をいくつか展示しています。
        </Description>
      </DescriptionBox>
    </div>
  )
}

const Title = styled.h1`
  font-family: 'novecentosans', sans-serif;
  font-size: 2.5em;
  line-height: 1.3em;
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 40px;
    border-bottom: solid 2px #5d639e;
    margin: 50px auto;
  }
`

const DescriptionBox = styled.div`
  margin: 10%;
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
  padding: 2em 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: #aaa;
  }

  &::before {
    left: 10px;
  }

  &::after {
    right: 10px;
  }
`

const Description = styled.div`
  margin: 0 3%;
  font-size: 1.2em;
`

const LoopSlide = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  overflow: hidden;
`
