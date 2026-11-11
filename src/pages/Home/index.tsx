import styled from '@emotion/styled'
import type { ClubInfo, FlowItem } from 'api/club'
import { compareDesc } from 'date-fns'
import { PageHead } from 'src/components/Head'
import { FactList, NewsList, type NewsItem, StatTiles, TeamGrid, YearFlow } from 'src/components/ui/blocks'
import { Container, Label, Section } from 'src/components/ui/layout'
import LinkButton, { ButtonRow } from 'src/components/ui/LinkButton'
import SiteShell from 'src/components/ui/SiteShell'
import { TEAMS } from 'src/data/teams'
import { color, font, mq, size, space } from 'src/design/tokens'
import ActivityGallery from './ActivityGallery'
import HeroView from './HeroView'
import OrganizationJsonLd from './OrganizationJsonLd'

interface Props {
  club: ClubInfo
  flow: FlowItem[]
  news: NewsItem[]
}

export default function Home({ club, flow, news }: Props) {
  const latest = [...news].sort((a, b) => compareDesc(a.date, b.date)).slice(0, 5)
  return (
    <>
      <PageHead />
      <OrganizationJsonLd />
      <SiteShell overlayHeader>
        <HeroView />

        <Intro aria-labelledby="intro-title">
          <Container>
            <Label>Applied Mathematics Club, Tokyo University of Science</Label>
            <IntroTitle id="intro-title">
              数学を、
              <br />
              使う側へ。
            </IntroTitle>
            <IntroText>{club.caption}</IntroText>
            <ButtonRow>
              <LinkButton href="/about">応数研とは</LinkButton>
              <LinkButton href="/teams" variant="secondary">
                班とプロジェクト
              </LinkButton>
            </ButtonRow>
          </Container>
        </Intro>

        <Section id="facts" label="Basics" title="はじめての方へ" tone="surface">
          <FactList facts={club.facts} />
        </Section>

        <Section
          id="teams"
          label="Teams"
          title="班とプロジェクト"
          lead="興味に合わせて班を選びます。いくつ掛け持ちしても、新しく立ち上げても構いません。"
        >
          <TeamGrid teams={TEAMS} />
        </Section>

        <ActivityGallery />

        <Section id="numbers" label="In numbers" title="数字で見る応数研">
          <StatTiles stats={club.stats} />
        </Section>

        <Section id="flow" label="Every year" title="1年の流れ" narrow>
          <YearFlow items={flow} />
          <ButtonRow style={{ marginTop: 24 }}>
            <LinkButton href="/schedule" variant="text">
              年間スケジュール
            </LinkButton>
          </ButtonRow>
        </Section>

        <Section id="news" label="News" title="お知らせ" narrow>
          <NewsList items={latest} />
          <ButtonRow style={{ marginTop: 24 }}>
            <LinkButton href="/news" variant="text">
              ニュースをすべて見る
            </LinkButton>
          </ButtonRow>
        </Section>

        <Join aria-labelledby="join-title">
          <Container narrow>
            <Label>Join us</Label>
            <JoinTitle id="join-title">まずは、Discord で見学から。</JoinTitle>
            <JoinText>
              見学は Discord サーバーに参加するだけ。班の勉強会の様子をのぞいたり、質問したりできます。
            </JoinText>
            <ButtonRow>
              <LinkButton href="/pay">入部・見学</LinkButton>
              <LinkButton href="/faq" variant="secondary">
                よくある質問
              </LinkButton>
            </ButtonRow>
          </Container>
        </Join>
      </SiteShell>
    </>
  )
}

const Intro = styled.section`
  padding: ${space.xxl} 0 ${space.xl};
  ${mq.sp} {
    padding: ${space.xl} 0 ${space.lg};
  }
`

const IntroTitle = styled.h2`
  margin: 0 0 ${space.md};
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xxl};
  line-height: 1.4;
  letter-spacing: 0.1em;
`

const IntroText = styled.p`
  margin: 0 0 ${space.lg};
  max-width: 40em;
  color: ${color.inkMuted};
  line-height: 2.1;
`

const Join = styled.section`
  padding: ${space.xxl} 0;
  text-align: left;
  border-top: solid 1px ${color.line};
  background:
    radial-gradient(ellipse 70% 100% at 50% 100%, rgba(127, 214, 255, 0.08), transparent 70%),
    ${color.base};
`

const JoinTitle = styled.h2`
  margin: 0 0 ${space.sm};
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xl};
  letter-spacing: 0.08em;
`

const JoinText = styled.p`
  margin: 0 0 ${space.lg};
  color: ${color.inkMuted};
  line-height: 2;
`
