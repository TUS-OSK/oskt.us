import styled from '@emotion/styled'
import { format } from 'date-fns'
import Motif, { type MotifType } from 'src/components/Motif'
import { ReactNode } from 'react'
import { type Team, TEAMS, WEEKDAYS, scheduleText, teamPath } from 'src/data/teams'
import { color, ease, font, mq, radius, size, space } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'
import { articleTo } from 'src/utils/urls'

// ───────── はじめての方へ(項目と内容の表) ─────────

export interface Fact {
  label: string
  text: string
}

/** extra: 項目名ごとに、文の下へ足す要素(「活動日」の週の表など) */
export function FactList({ facts, extra = {} }: { facts: Fact[]; extra?: Record<string, ReactNode> }) {
  return (
    <Facts>
      {facts.map((f) => (
        <FactRow key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.text}</dd>
          {extra[f.label] && <dd className="extra">{extra[f.label]}</dd>}
        </FactRow>
      ))}
    </Facts>
  )
}

// ───────── 1週間の活動(班の定例を曜日ごとに) ─────────

export function WeekTable() {
  const byDay = WEEKDAYS.map((_, day) =>
    TEAMS.filter((t) => t.meeting?.day === day).sort((a, b) => a.meeting!.start.localeCompare(b.meeting!.start)),
  )
  return (
    <Week
      aria-label="1週間の班の集まり"
      style={{ gridTemplateColumns: byDay.map((d) => (d.length ? '1.4fr' : '0.6fr')).join(' ') }}
    >
      {WEEKDAYS.map((label, day) => (
        <Day key={label} data-empty={byDay[day].length === 0} data-weekend={day >= 5}>
          <DayName>{label}</DayName>
          <DayBody>
            {byDay[day].length === 0 ? (
              <Empty>—</Empty>
            ) : (
              byDay[day].map((t) => (
                <Slot key={t.id} href={teamPath(t)}>
                  <time>{t.meeting!.start}〜</time>
                  <span>{t.name}</span>
                  {t.meeting!.place && <small>{t.meeting!.place}</small>}
                </Slot>
              ))
            )}
          </DayBody>
        </Day>
      ))}
    </Week>
  )
}

const Week = styled.ol`
  margin: ${space.sm} 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  border: solid 1px ${color.line};
  border-radius: ${radius};
  overflow: hidden;

  ${mq.tab} {
    /* 曜日を縦に並べる(列幅は style で付けているので上書きする) */
    grid-template-columns: 1fr !important;
  }
`

const Day = styled.li`
  display: flex;
  flex-direction: column;
  min-height: 116px;
  border-left: solid 1px ${color.line};
  &:first-of-type {
    border-left: none;
  }

  ${mq.tab} {
    flex-direction: row;
    min-height: 0;
    border-left: none;
    border-top: solid 1px ${color.line};
    &:first-of-type {
      border-top: none;
    }
  }
`

const DayName = styled.span`
  padding: 6px 0;
  text-align: center;
  font-family: ${font.serif};
  font-size: ${size.sm};
  color: ${color.ink};
  border-bottom: solid 1px ${color.line};
  background: rgba(255, 255, 255, 0.03);

  [data-empty='true'] > & {
    color: ${color.inkSubtle};
  }

  ${mq.tab} {
    flex: 0 0 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: none;
    border-right: solid 1px ${color.line};
  }
`

const DayBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
`

const Empty = styled.span`
  margin: auto;
  color: ${color.inkSubtle};
  ${mq.tab} {
    margin: 0;
  }
`

const Slot = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
  border-radius: ${radius};
  background: rgba(127, 214, 255, 0.08);
  border: solid 1px rgba(127, 214, 255, 0.22);
  color: ${color.ink};
  line-height: 1.4;
  transition: border-color 0.2s ${ease};

  time {
    font-family: ${font.label};
    font-size: ${size.sm};
    color: ${color.accent};
    letter-spacing: 0.04em;
  }
  span {
    font-size: ${size.xs};
  }
  small {
    font-size: ${size.xs};
    color: ${color.inkMuted};
  }
  &:hover {
    border-color: ${color.accent};
  }

  ${mq.tab} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 10px;
  }
`

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
  /* 表などは項目名の列もまたいで、行の幅いっぱいに出す */
  dd.extra {
    grid-column: 1 / -1;
  }

  ${mq.sp} {
    grid-template-columns: 1fr;
    gap: 4px;
    padding: ${space.sm} 0;
  }
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
              <TeamSchedule>{scheduleText(team) ?? 'プロジェクト型で活動'}</TeamSchedule>
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
