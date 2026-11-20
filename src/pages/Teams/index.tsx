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
          lead="入部したら、気になる班に顔を出してみてくださいね。いくつ掛け持ちしても大丈夫です。班の時間に合わなくても、勉強会の記録は Discord に残るので、自分のペースで参加できますよ。"
        />
        <Section id="list" label="All teams" title="班の一覧">
          <TeamGrid teams={TEAMS} />
        </Section>
        <Section
          id="new"
          label="Start your own"
          title="やりたいことが班になければ"
          lead="仲間を集めて、新しい勉強会やプロジェクトを始められます。学外ハッカソンへの出場、スーパーコンピュータの学生大会への挑戦、部内SNSの開発、昔の部誌のデジタル化。どれも部員の「やってみたい」から始まったんです。"
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
