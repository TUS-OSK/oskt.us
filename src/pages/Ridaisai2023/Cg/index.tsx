import styled from '@emotion/styled'

export default function Cg() {
  return (
    <div>
      <Title>CG班</Title>
      <DescriptionBox>
        <Description>
          CG班では主にblender,unityを扱い、3DCG用のモデルを作成したり、VRで遊んだりしています。
          <br />
          3DCGモデリング完全初心者の部員たちがweb上のチュートリアルや、本から学んでいます。
          <br />
          理大祭では今年発売のmeta
          quest3のMRを利用し、部員が作成した簡単なアプリケーションや、既製品のアプリケーションを使って、VR、MRの展示を行っています。
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
  text-align: center;
`
