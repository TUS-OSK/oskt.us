import styled from '@emotion/styled'

export default function HackersCafe() {
  // <br />
  //   コーヒー好きがこだわった挽き目でボルカンブレンドの旨みを最大限引き出します
  // <br />
  return (
    <MainContent>
      <Title>Hackers' Cafe</Title>
      <Description>
        I部研究会応用数学研究部による２日間限定のカフェ。
        牛込神楽坂の焙煎店VOLCANオリジナルブレンドのボルカンブレンドを、一杯ずつハンドドリップで提供します。
      </Description>
      <ImageRight src="/images/ridaisai/2023/coffeeCup.jpg" />
      <Title>ボルカンブレンド</Title>
      <Description>
        ボルカンアスールを中心に4種類の豆をブレンドしています。 苦味甘味のバランスが絶妙です。
        コーヒー好きの部員がおいしさを最大限引き出す挽き目を探りました。 アイスでもホットでも最高です。
      </Description>
      <ImageLeft src="/images/ridaisai/2023/coffee.jpg" />
      <Title>作品展示</Title>
      <Description>
        レイトレーシングのシェーダー、自作ゲーム、学生証による入退室システムなどの部員の制作物を展示しています。
        VR体験会、アルゴリズムクイズなどの体験型の企画もありますのでぜひ訪れてみてください。
      </Description>
    </MainContent>
  )
}
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.div`
  font-family: 'Yu Gothic', sans-serif;
  margin: 0 3%;
  font-size: 1em;
  text-align: left;
`

const Title = styled.div`
  margin: 0.5em 0 0 0;
  font-family: 'Hiragino Kaku Gothic Pro', sans-serif;
  font-size: 2em;
  line-height: 1.3em;
  text-align: left;

  &::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: solid 2px #5d639e;
    margin: 5px auto;
  }
`

const Flex = styled.div`
  flex-basis: 45%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2em;
`

const Align = styled.div`
  width: 90%;
  display: flex;
  flex: 1 auto;
  margin: auto;
  justify-content: center;
`

const Image = styled.img`
  margin: 0 0 0 auto;
  width: 50%;
  object-fit: contain;
`

const ImageRight = styled(Image)`
  margin: 0.2em 0 0 auto;
`

const ImageLeft = styled(Image)`
  margin: 0.5em auto 0 0;
`
