import type { ClubInfo } from 'api/club'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { FactList, StatTiles, TeamGrid } from 'src/components/ui/blocks'
import { PageHeader, Section } from 'src/components/ui/layout'
import LinkButton, { ButtonRow } from 'src/components/ui/LinkButton'
import { TEAMS } from 'src/data/teams'
import { urlPageMdEdit } from 'src/utils/urls'

interface Props {
  title: string
  club: ClubInfo
  body: string
}

export default function About({ title, club, body }: Props) {
  return (
    <>
      <PageHead title={title} description={club.caption} />
      <MainLayout>
        <PageHeader label="About" title={title} lead={club.caption} />
        <Section id="facts" label="Basics" title="はじめての方へ" narrow>
          <FactList facts={club.facts} />
          <ButtonRow style={{ marginTop: 32 }}>
            <LinkButton href="/pay">入部・見学</LinkButton>
            <LinkButton href="/faq" variant="secondary">
              よくある質問
            </LinkButton>
          </ButtonRow>
        </Section>
        <Section id="numbers" label="In numbers" title="数字で見る応数研">
          <StatTiles stats={club.stats} />
        </Section>
        <Section
          id="teams"
          label="Teams"
          title="班とプロジェクト"
          lead="入部したら、興味に合わせて班を選びます。いくつ掛け持ちしても構いません。"
        >
          <TeamGrid teams={TEAMS} />
        </Section>
        <Section narrow>
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('about')} />
        </Section>
      </MainLayout>
    </>
  )
}
