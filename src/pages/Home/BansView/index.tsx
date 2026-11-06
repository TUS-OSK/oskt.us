import styled from '@emotion/styled'
import { Section, SectionTitle } from 'src/components/MainLayout/elements'
import { pageTo } from 'src/utils/urls'
import { StyledLink } from 'src/utils/next/elements'
import Motif, { type MotifType } from './Motif'

interface Ban {
  name: string
  caption: string
  motif: MotifType
}

// _pages/markdowns/about.md の「班について」と同じ6班・同じ説明文を使う。
// モチーフは暫定でNabitoが割り当てたもの(2026-11)。本人がこだわりたい班があれば
// 差し替える前提で、まずは「テーマが伝わる」ことを優先した組み合わせにしている
const BANS: Ban[] = [
  { name: '機械学習班', caption: '機械学習・データサイエンスの手法を学び、実践します。', motif: 'ml' },
  { name: '数理統計班', caption: '数学・統計学の理論と応用を探求します。', motif: 'stat' },
  { name: 'コンピュータサイエンス班', caption: '計算機科学の理論・低レイヤ技術などを学びます。', motif: 'cs' },
  { name: '競プロ班', caption: '競技プログラミングのコンテストに参加し、アルゴリズムの腕を磨きます。', motif: 'cp' },
  { name: 'CG班', caption: 'コンピュータグラフィックスや映像制作に取り組みます。', motif: 'cg' },
  { name: 'Web・アプリ開発班', caption: 'Webサイトやアプリケーションの開発を行います。', motif: 'web' },
]

export default function BansView() {
  return (
    <Section>
      <SectionTitle>班について</SectionTitle>
      <Lead>入部後は自分の興味に合わせて班を選んで活動します。所属が違う部員と新しい班をつくることもできます。</Lead>
      <Grid>
        {BANS.map((ban) => (
          <Card key={ban.name} href={pageTo('about')}>
            <Motif type={ban.motif} />
            <Meta>
              <Name>{ban.name}</Name>
              <Caption>{ban.caption}</Caption>
            </Meta>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

const Lead = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: -24px 0 40px;

  @media (max-width: 700px) {
    margin-top: -8px;
  }
`

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

const Card = styled(StyledLink)`
  position: relative;
  display: block;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`

const Meta = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 16px 18px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
`

const Name = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`

const Caption = styled.div`
  color: #ddd;
  font-size: 12px;
  margin-top: 4px;
  line-height: 1.5em;
`
