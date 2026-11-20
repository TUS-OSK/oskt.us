import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import styled from '@emotion/styled'
import Link from 'next/link'
import { color, ease, font, size, space } from 'src/design/tokens'

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
          <BackLink href="/">トップページへ戻る</BackLink>
        </Container>
      </MainLayout>
    </>
  )
}

const Container = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: ${space.xxl} ${space.md} ${space.xl};
  text-align: center;
`
const Icon = styled.div`
  width: 56px;
  height: 56px;
  margin: 0 auto ${space.md};
  border: solid 1px ${color.accent};
  border-radius: 50%;
  color: ${color.accent};
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  margin: 0 0 ${space.sm};
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xl};
  letter-spacing: 0.06em;
`
const Message = styled.p`
  margin: 0 0 ${space.lg};
  color: ${color.inkMuted};
  line-height: 1.9;
`
const BackLink = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  background: ${color.ink};
  color: ${color.base};
  border-radius: 2px;
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: background-color 0.2s ${ease};
  &:hover { background: ${color.accent}; }
`
