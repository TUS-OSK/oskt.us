import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import { TeamGrid } from 'src/components/ui/blocks'
import { PageHeader, Section } from 'src/components/ui/layout'
import LinkButton, { ButtonRow } from 'src/components/ui/LinkButton'
import { TEAMS } from 'src/data/teams'

const DESCRIPTION =
  '東京理科大学 応用数学研究部の班とプロジェクト。機械学習(AI・データサイエンス)、数理統計(統計学・統計検定)、競技プログラミング(AtCoder・ICPC)、コンピュータサイエンス(型理論・Lean)、3DCG、Web・アプリ開発。'

export default function TeamsIndex() {
  return (
    <>
      <PageHead title="班とプロジェクト" description={DESCRIPTION} />
      <MainLayout>
        <PageHeader
          label="Teams"
          title="班とプロジェクト"
          lead="入部したら、興味に合わせて班を選びます。いくつ掛け持ちしても構いません。班の時間に合わなくても、勉強会の記録は Discord に残るので、自分のペースで参加できます。"
        />
        <Section id="list" label="All teams" title="班の一覧">
          <TeamGrid teams={TEAMS} />
        </Section>
        <Section
          id="new"
          label="Start your own"
          title="やりたいことが班になければ"
          lead="部員を集めて、新しい勉強会やプロジェクトを自由に立ち上げられます。これまでに、学外ハッカソンへの出場、スーパーコンピュータの学生大会への挑戦、部内SNSの開発、過去の部誌のデジタル化などが、部員の発案で生まれました。"
          narrow
        >
          <ButtonRow>
            <LinkButton href="/pay">入部・見学</LinkButton>
            <LinkButton href="/faq" variant="secondary">
              よくある質問
            </LinkButton>
          </ButtonRow>
        </Section>
      </MainLayout>
    </>
  )
}
