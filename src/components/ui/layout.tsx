import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { color, font, mq, size, space, width } from 'src/design/tokens'

/** ページ幅の箱。narrow は本文1カラムの幅 */
export const Container = styled.div<{ narrow?: boolean }>`
  box-sizing: border-box;
  max-width: ${(p) => (p.narrow ? `calc(${width.prose} + 48px)` : width.page)};
  margin: 0 auto;
  padding: 0 ${space.md};
`

interface PageHeaderProps {
  /** 英字の小見出し(例: ABOUT) */
  label: string
  title: string
  lead?: ReactNode
  narrow?: boolean
}

/** 下層ページの冒頭。英字ラベル・明朝の大見出し・リード文の3段 */
export function PageHeader({ label, title, lead, narrow }: PageHeaderProps) {
  return (
    <HeaderBox>
      <Container narrow={narrow}>
        <Label>{label}</Label>
        <Title>{title}</Title>
        {lead && <Lead>{lead}</Lead>}
      </Container>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  padding: ${space.xxl} 0 ${space.xl};
  border-bottom: solid 1px ${color.line};
  /* 背景の奥にトップの墨の世界がうっすら続いている気配 */
  background:
    radial-gradient(ellipse 60% 120% at 85% 0%, rgba(127, 214, 255, 0.07), transparent 70%),
    ${color.base};

  ${mq.sp} {
    padding: ${space.xl} 0 ${space.lg};
  }
`

export const Label = styled.p`
  margin: 0 0 ${space.sm};
  font-family: ${font.label};
  font-size: ${size.xs};
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${color.accent};
`

const Title = styled.h1`
  margin: 0;
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xxl};
  line-height: 1.3;
  letter-spacing: 0.08em;
`

const Lead = styled.p`
  margin: ${space.md} 0 0;
  max-width: 40em;
  color: ${color.inkMuted};
  font-size: ${size.md};
  line-height: 2;
`

interface SectionProps {
  label?: string
  title?: string
  lead?: ReactNode
  children: ReactNode
  narrow?: boolean
  id?: string
  /** 一段明るい面にする */
  tone?: 'base' | 'surface'
}

/** ページ内の1区画。見出し(英字ラベル＋明朝)と中身 */
export function Section({ label, title, lead, children, narrow, id, tone = 'base' }: SectionProps) {
  return (
    <SectionBox id={id} data-tone={tone} aria-labelledby={title && id ? `${id}-title` : undefined}>
      <Container narrow={narrow}>
        {(label || title) && (
          <SectionHead>
            {label && <Label>{label}</Label>}
            {title && <SectionTitle id={id ? `${id}-title` : undefined}>{title}</SectionTitle>}
            {lead && <SectionLead>{lead}</SectionLead>}
          </SectionHead>
        )}
        {children}
      </Container>
    </SectionBox>
  )
}

const SectionBox = styled.section`
  padding: ${space.xl} 0;
  &[data-tone='surface'] {
    background: ${color.surface};
    border-top: solid 1px ${color.line};
    border-bottom: solid 1px ${color.line};
  }
  ${mq.sp} {
    padding: ${space.lg} 0;
  }
`

const SectionHead = styled.div`
  margin-bottom: ${space.lg};
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xl};
  line-height: 1.4;
  letter-spacing: 0.06em;
`

const SectionLead = styled.p`
  margin: ${space.sm} 0 0;
  max-width: 40em;
  color: ${color.inkMuted};
  line-height: 2;
`

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`
