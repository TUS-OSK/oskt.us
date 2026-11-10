import styled from '@emotion/styled'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import { FixedSizeContents, Section } from 'src/components/MainLayout/elements'
import MarkdownTitle from 'src/components/MarkdownTitle'
import { StyledLink } from 'src/utils/next/elements'

// Next.js 既定の英語の404ではサイトに戻る導線が無かったので、サイトの体裁で置き換える。
// 古い記事のURLから来る人も多いので、ニュースとアーカイブへの導線を置く
export default function NotFound() {
  return (
    <>
      <PageHead title="ページが見つかりません" description="お探しのページは見つかりませんでした。" />
      <MainLayout>
        <Section>
          <FixedSizeContents size={520}>
            <MarkdownTitle title="ページが見つかりません" />
            <Message>
              お探しのページは移動したか、削除された可能性があります。
              <br />
              下のリンクからお探しください。
            </Message>
            <Links>
              <li>
                <Link href="/">トップページ</Link>
              </li>
              <li>
                <Link href="/news">ニュース</Link>
              </li>
              <li>
                <Link href="/archive">過去の記事(アーカイブ)</Link>
              </li>
              <li>
                <Link href="/contact">お問い合わせ</Link>
              </li>
            </Links>
          </FixedSizeContents>
        </Section>
      </MainLayout>
    </>
  )
}

const Message = styled.p`
  line-height: 1.8;
  text-align: center;
`

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 24px;
  padding: 0;
  margin: 32px 0 0;
  list-style: none;
`

const Link = styled(StyledLink)`
  color: #333;
  text-decoration: underline;
`
