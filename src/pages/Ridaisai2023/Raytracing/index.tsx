import styled from '@emotion/styled'

export default function Raytracing() {
  return (
    <div>
      <Title>レイトレーシング班</Title>
      <Description>
        レイトレーシングとは光を現実と同じように計算することでとてもリアルなCGを作る手法です。映画などのリアルなCGには必ず使われていると言ってもの過言ではなく、近年ではゲームにも応用され始め、ますます注目度が高まっている技術です。
        このサークルでは自作のレイトレーシングプログラムで実際に画像を出したり、新しい手法を調べて新しく実装したりなどレイトレーシングに関わる活動をしています。理大祭では活動で制作した画像をいくつか展示しています。
      </Description>

      <RayImages>
        <div>
          <RayImage src="../../../../public/images/ridaisai/2023/Raytracing/ray1.png" />
        </div>
        <div>
          <RayImage src="../../../../public/images/ridaisai/2023/Raytracing/ray2.png" />
        </div>
      </RayImages>
      <RayImages>
        <div>
          <RayImage src="../../../../public/images/ridaisai/2023/Raytracing/ray3.png" />
        </div>
        <div>
          <RayImage src="../../../../public/images/ridaisai/2023/Raytracing/ray4.png" />
        </div>
      </RayImages>
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

const Description = styled.div``

const RayImages = styled.div`
  display: flex;
`

const RayImage = styled.img`
  max-width: 100%;
`
