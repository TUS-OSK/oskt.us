import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { type Photo } from 'src/data/photos'
import { TEAMS, teamPath } from 'src/data/teams'
import { color, ease, mq, radius, size, space } from 'src/design/tokens'
import { withBasePath } from 'src/utils/basePath'
import { StyledLink } from 'src/utils/next/elements'

interface Props {
  photos: Photo[]
  /** 見出し(画面には出さず、読み上げ用) */
  label: string
  /**
   * true: 横に流し続け、写真を押すとその班のページへ飛ぶ(トップ)
   * false: 幅に収まるように2列で並べる(班ページ。同じ班なのでリンクも班名も付けない)
   */
  flow?: boolean
}

const teamOf = (id: string) => TEAMS.find((t) => t.id === id)

// 写真の帯。写真は切り抜かず、高さをそろえて元の縦横比のまま並べる。
// 流すときは同じ並びを2回つなげて -50% まで動かし、継ぎ目なく繰り返す。
// マウスを乗せる・フォーカスすると止まり、動きを減らす設定の人には流さない
export default function PhotoStrip({ photos, label, flow = false }: Props) {
  if (photos.length === 0) return null
  const items = (hidden: boolean) => (
    <Row aria-hidden={hidden || undefined}>
      {photos.map((p) => {
        const team = teamOf(p.team)
        const img = (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={withBasePath(p.src)}
            alt={hidden ? '' : p.alt}
            width={p.width}
            height={p.height}
            loading="lazy"
            decoding="async"
          />
        )
        return (
          <Item key={p.src}>
            {flow && team ? (
              <ToTeam href={teamPath(team)} tabIndex={hidden ? -1 : undefined}>
                {img}
                <Caption>
                  {team.name}
                  <span aria-hidden="true">→</span>
                </Caption>
              </ToTeam>
            ) : (
              img
            )}
          </Item>
        )
      })}
    </Row>
  )
  return (
    <Strip aria-label={label} data-flow={flow}>
      <Track style={flow ? { animationDuration: `${photos.length * 9}s` } : undefined}>
        {items(false)}
        {flow && items(true)}
      </Track>
    </Strip>
  )
}

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

const HEIGHT = 340
const HEIGHT_SP = 230
const GAP = 12

const Strip = styled.section`
  /* 流さないとき(班ページ)は、写真を縮めて2列に収め、見切れないようにする */
  &[data-flow='false'] {
    ul {
      display: block;
      columns: 2;
      column-gap: ${GAP}px;
      padding: 0;
      ${mq.sp} {
        columns: 1;
      }
    }
    li {
      margin-bottom: ${GAP}px;
      break-inside: avoid;
    }
    img {
      width: 100%;
      height: auto;
    }
  }

  &[data-flow='true'] {
    overflow: hidden;
    padding: ${space.md} 0;
    border-bottom: solid 1px ${color.line};
  }
  &[data-flow='true']:hover > div,
  &[data-flow='true']:focus-within > div {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-flow='true'] {
      overflow-x: auto;
    }
    &[data-flow='true'] > div {
      animation: none;
    }
    &[data-flow='true'] ul[aria-hidden] {
      display: none;
    }
  }
`

const Track = styled.div`
  [data-flow='true'] > & {
    display: flex;
    width: max-content;
    animation: ${scroll} linear infinite;
  }
`

const Row = styled.ul`
  display: flex;
  gap: ${GAP}px;
  margin: 0;
  /* 2つ目の並びとの間も同じ間隔にして、継ぎ目を見えなくする */
  padding: 0 ${GAP}px 0 0;
  list-style: none;
`

const Item = styled.li`
  position: relative;
  flex: none;
  border-radius: ${radius};
  overflow: hidden;
  border: solid 1px ${color.line};
  background: #fff;

  img {
    display: block;
    height: ${HEIGHT}px;
    width: auto;
    transition: transform 0.4s ${ease};
    ${mq.sp} {
      height: ${HEIGHT_SP}px;
    }
  }
`

const ToTeam = styled(StyledLink)`
  display: block;
  &:hover img {
    transform: scale(1.03);
  }
  &:focus-visible {
    outline: solid 2px ${color.accent};
    outline-offset: -2px;
  }
`

const Caption = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 6px;
  padding: 18px 10px 6px;
  font-size: ${size.xs};
  letter-spacing: 0.06em;
  color: ${color.ink};
  background: linear-gradient(to top, rgba(13, 13, 18, 0.85), transparent);

  span {
    transition: transform 0.2s ${ease};
  }
  a:hover & {
    color: ${color.accent};
  }
  a:hover & span {
    transform: translateX(4px);
  }
`
