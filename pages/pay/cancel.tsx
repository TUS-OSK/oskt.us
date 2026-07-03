import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import styled from '@emotion/styled'
import Link from 'next/link'

export default function PayCancelPage() {
  return (
    <>
      <PageHead title="お支払いキャンセル" />
      <MainLayout>
        <Container>
          <Icon>✕</Icon>
          <Title>お支払いがキャンセルされました</Title>
          <Message>
            お支払いはキャンセルされました。再度お支払いを行う場合は下のボタンからどうぞ。
          </Message>
          <Link href="/pay" passHref>
            <RetryLink>お支払いページへ戻る</RetryLink>
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
  color: #e53e3e;
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
const RetryLink = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #5865F2;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  &:hover { background: #4752c4; }
`
