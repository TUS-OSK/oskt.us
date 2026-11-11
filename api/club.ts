import { getPageMarkdown } from './markdowns'

// トップ・応数研とは・年間スケジュールで共通に使う「部の基本情報」を Markdown から読む。
// 中身は _pages/markdowns/about.md と schedule.md の冒頭(YAML)に書いてあり、
// Discord からのサイト編集でも直せる

export interface Fact {
  label: string
  text: string
}

export interface Stat {
  value: string
  unit?: string
  label: string
}

export interface FlowItem {
  month: number
  name: string
  detail?: string
}

export interface ClubInfo {
  caption: string
  facts: Fact[]
  stats: Stat[]
}

interface AboutYaml {
  caption?: string
  facts?: Fact[]
  stats?: Stat[]
}

interface ScheduleYaml {
  startMonth?: number
  eventCalendar?: Record<string, { name: { ja: string }; detail?: string; top?: boolean }[]>
}

export function getClubInfo(): ClubInfo {
  const { meta } = getPageMarkdown<AboutYaml>('about')
  return {
    caption: meta.caption ?? '',
    facts: meta.facts ?? [],
    stats: (meta.stats ?? []).map((s) => ({ ...s, value: String(s.value) })),
  }
}

/** 年度の始まりの月から順に並べた行事。topOnly ならトップに出すものだけ */
export function getYearFlow(topOnly = false): FlowItem[] {
  const { meta } = getPageMarkdown<ScheduleYaml>('schedule')
  const start = meta.startMonth ?? 4
  const calendar = meta.eventCalendar ?? {}
  const items: FlowItem[] = []
  for (let i = 0; i < 12; i++) {
    const month = ((start - 1 + i) % 12) + 1
    for (const e of calendar[String(month)] ?? []) {
      if (topOnly && !e.top) continue
      items.push({ month, name: e.name.ja, ...(e.detail ? { detail: e.detail } : {}) })
    }
  }
  return items
}
