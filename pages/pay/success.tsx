import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import styled from '@emotion/styled'
import Link from 'next/link'

export default function PaySuccessPage() {
  return (
    <>
      <PageHead title="お支払い完了" />
      <MainLayout>
        <Container>
          <Icon>✓</Icon>
          <Title>お支払いが完了しました</Title>
          <Message>
            ご入金を確認しました。Discordのロールが自動的に付与されます。<br />
            数分経っても反映されない場合は部長または会計にお知らせください。
          </Message>
          <Link href="/" passHref>
            <BackLink>トップページへ戻る</BackLink>
          </Link>
        </Container>
      </MainLayout>
    </>
  )
}

const Container = styled.div`
  max-width: 480px;
  margin: 80px auto;
  padding: 0 24px;
  text-align: center;
`
const Icon = styled.div`
  font-size: 3rem;
  color: #38a169;
  margin-bottom: 16px;
`
const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 16px;
`
const Message = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 32px;
`
const BackLink = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #5865F2;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  &:hover { background: #4752c4; }
`
