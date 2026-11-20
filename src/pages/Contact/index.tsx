import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { PageHeader, Section } from 'src/components/ui/layout'
import contact from 'src/data/contact'
import { color, ease, font, mq, radius, size, space } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'
import { externalTo, mailTo, urlPageMdEdit } from 'src/utils/urls'
import { EnvelopeIcon, MarkerIcon, TwitterIcon } from './icons'

interface Props {
  title: string
  body: string
}

export default function Contact({ title, body }: Props) {
  return (
    <>
      <PageHead
        title={title}
        description={`東京理科大学 応用数学研究部(OSK)の連絡先。部室は東京理科大学 ${contact.clubroom}。見学・入部は Discord から。`}
      />
      <MainLayout>
        <PageHeader label="Contact" title={title} narrow />
        <Section narrow>
          <Cards>
            <Card icon={<DiscordGlyph />} label="見学・入部">
              <StyledLink href="/pay">Discord サーバーに参加する</StyledLink>
            </Card>
            <Card icon={<MarkerIcon />} label="部室">
              東京理科大学 {contact.clubroom}
            </Card>
            <Card icon={<TwitterIcon />} label="X(旧Twitter)">
              <a href={externalTo('twitter', contact.twitterId)} target="_blank" rel="noopener">
                @{contact.twitterId}
              </a>
            </Card>
            <Card icon={<EnvelopeIcon />} label="メール">
              <a href={mailTo(contact.mail)}>{contact.mail}</a>
            </Card>
          </Cards>
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('contact')} />
        </Section>
      </MainLayout>
    </>
  )
}

function Card({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <CardBox>
      <CardIcon aria-hidden="true">{icon}</CardIcon>
      <div>
        <CardLabel>{label}</CardLabel>
        <CardBody>{children}</CardBody>
      </div>
    </CardBox>
  )
}

const DiscordGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.099 18.069.104 18.08.113 18.087a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
)

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${space.sm};
  margin-bottom: ${space.lg};
  ${mq.sp} {
    grid-template-columns: 1fr;
  }
`

const CardBox = styled.div`
  display: flex;
  gap: ${space.sm};
  padding: ${space.md};
  background: ${color.surface};
  border: solid 1px ${color.line};
  border-radius: ${radius};
`

const CardIcon = styled.div`
  flex: none;
  width: 22px;
  height: 22px;
  color: ${color.accent};
  svg {
    width: 100%;
    height: 100%;
  }
`

const CardLabel = styled.p`
  margin: 0 0 4px;
  font-family: ${font.serif};
  font-weight: 600;
`

const CardBody = styled.div`
  font-size: ${size.sm};
  color: ${color.inkMuted};
  line-height: 1.8;
  overflow-wrap: anywhere;
  a {
    color: ${color.accent};
    transition: opacity 0.2s ${ease};
    &:hover {
      opacity: 0.8;
    }
  }
`
