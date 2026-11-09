import styled from '@emotion/styled'
import { Section, SectionTitle } from 'src/components/MainLayout/elements'
import { withBasePath } from 'src/utils/basePath'

interface Photo {
  src: string
  alt: string
  band: string
}

// 部員から提供された活動写真。班ごとに増えていく想定で、配列に追記するだけで並ぶようにしてある。
// 顔出し非同意の部員は絵文字/モザイクで加工済みのものだけをここに置くこと(運用ルールは
// Discordでの呼びかけ参照)。
const PHOTOS: Photo[] = [
  { src: '/images/activity/ml-blackboard-work.jpg', alt: '黒板で誤差逆伝播を計算する部員', band: '機械学習班' },
  { src: '/images/activity/ml-writing-together.jpg', alt: '黒板の前で議論する部員', band: '機械学習班' },
  { src: '/images/activity/ml-board.jpg', alt: '誤差逆伝播法の計算を書き込んだ黒板', band: '機械学習班' },
]

// 「開いてすぐ見える場所に写真を流しておきたい」という方針のため、ヒーロー直後・本文の
// 一番上に置く。Invariants(Oxford)の写真カルーセルを参考に、ただし現状は点数が少ないので
// 無限ループのカルーセルではなく、素直な横並びグリッドにしてある(写真が増えたら見直す)
export default function ActivityGallery() {
  return (
    <Section>
      <SectionTitle>活動の様子</SectionTitle>
      <Grid>
        {PHOTOS.map((photo, i) => (
          <Card key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBasePath(photo.src)} alt={photo.alt} loading="lazy" />
            <Meta>
              <Band>{photo.band}</Band>
            </Meta>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Meta = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 14px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0));
`

const Band = styled.div`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`
