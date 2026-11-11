import styled from '@emotion/styled'
import Motif, { type MotifType } from 'src/components/Motif'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import { Container, Label } from 'src/components/ui/layout'
import LinkButton, { ButtonRow } from 'src/components/ui/LinkButton'
import { TEAMS, teamPath } from 'src/data/teams'
import { color, font, mq, radius, size, space } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'

const MOTIF_OF: Record<string, MotifType> = { ml: 'ml', kyopro: 'cp', stat: 'stat', cs: 'cs', cg: 'cg', web: 'web' }

export default function TeamDetail({ id }: { id: string }) {
  const index = TEAMS.findIndex((t) => t.id === id)
  const team = TEAMS[index]
  const others = TEAMS.filter((t) => t.id !== id)

  return (
    <>
      <PageHead title={team.name} description={`東京理科大学 応用数学研究部の${team.name}。${team.tagline}`} />
      <MainLayout>
        <Hero>
          <Art aria-hidden="true">
            <Motif type={MOTIF_OF[team.id] ?? 'cs'} />
          </Art>
          <Container narrow>
            <Crumb>
              <StyledLink href="/teams">班とプロジェクト</StyledLink>
            </Crumb>
            <Title>{team.name}</Title>
            <Tagline>{team.tagline}</Tagline>
            <When>
              <Label as="span">When</Label>
              <span>{team.schedule ?? 'プロジェクト型で活動しています。日時は参加者で決めます'}</span>
            </When>
          </Container>
        </Hero>
        <Container narrow>
          <Block>
            <BlockTitle>どんな班？</BlockTitle>
            <p>{team.about}</p>
          </Block>
          <Block>
            <BlockTitle>やっていること</BlockTitle>
            <List>
              {team.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </List>
          </Block>
          <Block>
            <BlockTitle>こんな人に</BlockTitle>
            <List>
              {team.forWhom.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </List>
          </Block>
          <Block>
            <BlockTitle>未経験でも？</BlockTitle>
            <p>{team.beginner}</p>
          </Block>
          <Block>
            <BlockTitle>参加するには</BlockTitle>
            <p>
              見学は Discord サーバーへの参加で、いつでもできます。班の勉強会は Discord
              に記録が残るので、時間が合わなくても追いつけます。
            </p>
            <ButtonRow>
              <LinkButton href="/pay">入部・見学</LinkButton>
              <LinkButton href="/faq" variant="secondary">
                よくある質問
              </LinkButton>
            </ButtonRow>
          </Block>
        </Container>
        <Container>
          <Others aria-label="ほかの班">
            <Label>Other teams</Label>
            <OtherList>
              {others.map((t) => (
                <li key={t.id}>
                  <StyledLink href={teamPath(t)}>{t.name}</StyledLink>
                </li>
              ))}
            </OtherList>
          </Others>
        </Container>
      </MainLayout>
    </>
  )
}

const Hero = styled.div`
  position: relative;
  padding: ${space.xxl} 0 ${space.xl};
  border-bottom: solid 1px ${color.line};
  overflow: hidden;

  ${mq.sp} {
    padding: ${space.xl} 0 ${space.lg};
  }
`

// 班のモチーフを見出しの奥に薄く敷く
const Art = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.45;
  mask-image: linear-gradient(to right, transparent 0%, #000 70%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 70%);
`

const Crumb = styled.p`
  position: relative;
  margin: 0 0 ${space.sm};
  font-size: ${size.sm};
  a {
    color: ${color.inkMuted};
    &::before {
      content: '← ';
    }
    &:hover {
      color: ${color.accent};
    }
  }
`

const Title = styled.h1`
  position: relative;
  margin: 0;
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xxl};
  letter-spacing: 0.08em;
  line-height: 1.3;
`

const Tagline = styled.p`
  position: relative;
  margin: ${space.md} 0 0;
  max-width: 34em;
  color: ${color.inkMuted};
  line-height: 2;
`

const When = styled.p`
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px;
  margin: ${space.md} 0 0;
  padding: 10px 16px;
  background: rgba(13, 13, 18, 0.7);
  border: solid 1px ${color.accentLine};
  border-radius: ${radius};
  span:first-of-type {
    margin: 0;
  }
`

const Block = styled.section`
  padding: ${space.lg} 0 0;
  p {
    margin: 0 0 ${space.md};
    line-height: 2;
    color: ${color.inkMuted};
  }
`

const BlockTitle = styled.h2`
  margin: 0 0 ${space.sm};
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.lg};
  letter-spacing: 0.06em;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: solid 1px ${color.line};
  li {
    padding: 12px 0 12px 1.4em;
    border-bottom: solid 1px ${color.line};
    color: ${color.inkMuted};
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 1.35em;
      width: 8px;
      height: 1px;
      background: ${color.accent};
    }
  }
`

const Others = styled.nav`
  margin-top: ${space.xl};
  padding-top: ${space.lg};
  border-top: solid 1px ${color.line};
`

const OtherList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    display: inline-block;
    padding: 8px 16px;
    border: solid 1px ${color.lineStrong};
    border-radius: 999px;
    font-size: ${size.sm};
    color: ${color.ink};
    &:hover {
      color: ${color.accent};
      border-color: ${color.accent};
    }
  }
`
