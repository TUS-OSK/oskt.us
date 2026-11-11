import styled from '@emotion/styled'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import { PageHeader, Section } from 'src/components/ui/layout'
import LinkButton, { ButtonRow } from 'src/components/ui/LinkButton'
import { color } from 'src/design/tokens'

// Next.js 既定の英語の404ではサイトに戻る導線が無かったので、サイトの体裁で置き換える。
// 古い記事のURLから来る人も多いので、ニュースとアーカイブへの導線を置く
export default function NotFound() {
  return (
    <>
      <PageHead title="ページが見つかりません" description="お探しのページは見つかりませんでした。" />
      <MainLayout>
        <PageHeader
          label="404"
          title="ページが見つかりません"
          lead="お探しのページは移動したか、削除された可能性があります。下のリンクからお探しください。"
          narrow
        />
        <Section narrow>
          <ButtonRow>
            <LinkButton href="/">トップページ</LinkButton>
            <LinkButton href="/news" variant="secondary">
              ニュース
            </LinkButton>
            <LinkButton href="/archive" variant="secondary">
              記事のアーカイブ
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              ご連絡
            </LinkButton>
          </ButtonRow>
          <Hint>古い記事は「記事のアーカイブ」に年度ごとにまとまっています。</Hint>
        </Section>
      </MainLayout>
    </>
  )
}

const Hint = styled.p`
  margin-top: 32px;
  color: ${color.inkSubtle};
`
