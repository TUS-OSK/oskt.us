import styled from '@emotion/styled'
import { format } from 'date-fns'
import Motif, { type MotifType } from 'src/components/Motif'
import { type Team, teamPath } from 'src/data/teams'
import { color, ease, font, mq, radius, size, space } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'
import { articleTo } from 'src/utils/urls'

// ───────── はじめての方へ(項目と内容の表) ─────────

export interface Fact {
  label: string
  text: string
}

export function FactList({ facts }: { facts: Fact[] }) {
  return (
    <Facts>
      {facts.map((f) => (
        <FactRow key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.text}</dd>
        </FactRow>
      ))}
    </Facts>
  )
}

const Facts = styled.dl`
  margin: 0;
  border-top: solid 1px ${color.line};
`

const FactRow = styled.div`
  display: grid;
  grid-template-columns: 10em 1fr;
  gap: ${space.md};
  padding: ${space.md} 0;
  border-bottom: solid 1px ${color.line};

  dt {
    font-family: ${font.serif};
    font-weight: 600;
    letter-spacing: 0.06em;
  }
  dd {
    margin: 0;
    color: ${color.inkMuted};
    line-height: 1.9;
  }

  ${mq.sp} {
    grid-template-columns: 1fr;
    gap: 4px;
    padding: ${space.sm} 0;
  }
`

// ───────── 数字で見る応数研 ─────────

export interface Stat {
  value: string
  unit?: string
  label: string
}

export function StatTiles({ stats }: { stats: Stat[] }) {
  return (
    <Stats>
      {stats.map((s) => (
        <StatItem key={s.label}>
          <StatValue>
            {s.value}
            {s.unit && <small>{s.unit}</small>}
          </StatValue>
          <StatLabel>{s.label}</StatLabel>
        </StatItem>
      ))}
    </Stats>
  )
}

const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-left: solid 1px ${color.line};

  ${mq.tab} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatItem = styled.li`
  padding: ${space.md} ${space.md} ${space.sm};
  border-right: solid 1px ${color.line};
  border-bottom: solid 1px ${color.line};
  border-top: solid 1px ${color.line};
`

const StatValue = styled.p`
  margin: 0;
  font-family: ${font.label};
  font-size: ${size.xxl};
  line-height: 1.1;
  color: ${color.ink};

  small {
    margin-left: 4px;
    font-family: ${font.sans};
    font-size: ${size.sm};
    color: ${color.inkMuted};
  }
`

const StatLabel = styled.p`
  margin: ${space.xs} 0 0;
  font-size: ${size.sm};
  line-height: 1.7;
  color: ${color.inkMuted};
`

// ───────── 班カード ─────────

const MOTIF_OF: Record<string, MotifType> = {
  ml: 'ml',
  kyopro: 'cp',
  stat: 'stat',
  cs: 'cs',
  cg: 'cg',
  web: 'web',
}

export function TeamGrid({ teams }: { teams: Team[] }) {
  return (
    <Teams>
      {teams.map((team) => (
        <li key={team.id}>
          <TeamCard href={teamPath(team)}>
            <TeamArt aria-hidden="true">
              <Motif type={MOTIF_OF[team.id] ?? 'cs'} />
            </TeamArt>
            <TeamBody>
              <TeamName>{team.name}</TeamName>
              <TeamTagline>{team.tagline}</TeamTagline>
              <TeamSchedule>{team.schedule ?? 'プロジェクト型で活動'}</TeamSchedule>
            </TeamBody>
          </TeamCard>
        </li>
      ))}
    </Teams>
  )
}

const Teams = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${space.md};

  ${mq.tab} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.sp} {
    grid-template-columns: 1fr;
  }
`

const TeamCard = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${color.ink};
  background: ${color.surface};
  border: solid 1px ${color.line};
  border-radius: ${radius};
  overflow: hidden;
  transition:
    border-color 0.25s ${ease},
    transform 0.25s ${ease};

  &:hover {
    border-color: ${color.accentLine};
    transform: translateY(-2px);
  }
`

const TeamArt = styled.div`
  position: relative;
  height: 140px;
  border-bottom: solid 1px ${color.line};
`

const TeamBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${space.md};
`

const TeamName = styled.h3`
  margin: 0 0 ${space.xs};
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.lg};
  letter-spacing: 0.06em;
`

const TeamTagline = styled.p`
  margin: 0 0 ${space.sm};
  font-size: ${size.sm};
  line-height: 1.8;
  color: ${color.inkMuted};
`

const TeamSchedule = styled.p`
  margin: auto 0 0;
  font-size: ${size.xs};
  letter-spacing: 0.04em;
  color: ${color.accent};
`

// ───────── 1年の流れ ─────────

export interface FlowItem {
  month: number
  name: string
  detail?: string
}

export function YearFlow({ items }: { items: FlowItem[] }) {
  return (
    <Flow>
      {items.map((item) => (
        <FlowRow key={`${item.month}-${item.name}`}>
          <FlowMonth>
            {item.month}
            <small>月</small>
          </FlowMonth>
          <div>
            <FlowName>{item.name}</FlowName>
            {item.detail && <FlowDetail>{item.detail}</FlowDetail>}
          </div>
        </FlowRow>
      ))}
    </Flow>
  )
}

const Flow = styled.ol`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    left: 2.6em;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background: ${color.line};
  }
`

const FlowRow = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 5.2em 1fr;
  gap: ${space.md};
  padding: ${space.sm} 0;

  &::before {
    content: '';
    position: absolute;
    left: calc(2.6em - 3px);
    top: calc(${space.sm} + 14px);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${color.accent};
    box-shadow: 0 0 0 4px ${color.base};
  }
`

const FlowMonth = styled.p`
  margin: 0;
  padding-right: 1.6em;
  text-align: left;
  font-family: ${font.label};
  font-size: ${size.lg};
  line-height: 1.6;
  small {
    font-family: ${font.sans};
    font-size: ${size.xs};
    color: ${color.inkSubtle};
    margin-left: 2px;
  }
`

const FlowName = styled.p`
  margin: 0;
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.md};
  line-height: 1.8;
`

const FlowDetail = styled.p`
  margin: 2px 0 0;
  font-size: ${size.sm};
  color: ${color.inkMuted};
  line-height: 1.8;
`

// ───────── ニュース一覧 ─────────

export interface NewsItem {
  year: string
  slug: string
  date: Date
  caption: string
}

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <News>
      {items.map((item) => (
        <li key={articleTo(item.year, item.slug)}>
          <NewsLink href={articleTo(item.year, item.slug)}>
            <time dateTime={format(item.date, 'yyyy-MM-dd')}>{format(item.date, 'yyyy.MM.dd')}</time>
            <span>{item.caption}</span>
          </NewsLink>
        </li>
      ))}
    </News>
  )
}

const News = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: solid 1px ${color.line};
`

const NewsLink = styled(StyledLink)`
  display: grid;
  grid-template-columns: 7.5em 1fr;
  gap: ${space.md};
  padding: ${space.sm} 0;
  border-bottom: solid 1px ${color.line};
  color: ${color.ink};
  transition: color 0.2s ${ease};

  time {
    font-family: ${font.label};
    font-size: ${size.sm};
    color: ${color.inkSubtle};
    line-height: 1.9;
  }
  &:hover span {
    color: ${color.accent};
  }

  ${mq.sp} {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`
