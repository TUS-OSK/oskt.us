import { useState } from 'react'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import styled from '@emotion/styled'

const CHECKOUT_API = 'https://lzezd40iu3.execute-api.ap-northeast-1.amazonaws.com/checkout'

type UserType = 'kengaku' | 'shinnyubu' | 'kizon'

export default function PayPage() {
  const [userType, setUserType] = useState<UserType>('kengaku')
  const [discordId, setDiscordId] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (userType !== 'kengaku' && !discordId) {
      setError('Discord IDを入力してください')
      return
    }
    if (userType === 'kengaku' && !email && !discordId) {
      setError('メールアドレスまたはDiscord IDを入力してください')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(CHECKOUT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_type: userType, discord_id: discordId, email }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('エラーが発生しました: ' + JSON.stringify(data))
      }
    } catch (e) {
      setError('通信エラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHead title="部費のお支払い" />
      <MainLayout>
        <Container>
          <Title>部費のお支払い</Title>
          <Subtitle>¥1,000 / セメスター</Subtitle>

          <Form onSubmit={handleSubmit}>
            <Label>あなたの状況</Label>
            <RadioGroup>
              {([
                ['kengaku', '見学中（まだ部員でない）'],
                ['shinnyubu', '新入部員（今学期から入部）'],
                ['kizon', '既存部員（更新）'],
              ] as [UserType, string][]).map(([v, label]) => (
                <RadioLabel key={v}>
                  <input
                    type="radio"
                    name="userType"
                    value={v}
                    checked={userType === v}
                    onChange={() => setUserType(v)}
                  />
                  {label}
                </RadioLabel>
              ))}
            </RadioGroup>

            {userType === 'kengaku' && (
              <Field>
                <Label>メールアドレス（支払い完了通知用）</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="example@example.com"
                />
              </Field>
            )}

            <Field>
              <Label>
                Discord ID
                {userType === 'kengaku' ? '（お持ちの場合）' : '（必須）'}
              </Label>
              <Input
                type="text"
                value={discordId}
                onChange={e => setDiscordId(e.target.value)}
                placeholder="123456789012345678"
              />
              <Hint>
                DiscordのユーザーIDは、設定 → 詳細設定 → デベロッパーモードをONにしてからアカウント名を右クリック →「ユーザーIDをコピー」で取得できます
              </Hint>
            </Field>

            {error && <ErrorMsg>{error}</ErrorMsg>}

            <SubmitButton type="submit" disabled={loading}>
              {loading ? '処理中...' : 'お支払いへ進む →'}
            </SubmitButton>
          </Form>
        </Container>
      </MainLayout>
    </>
  )
}

const Container = styled.div`
  max-width: 540px;
  margin: 60px auto;
  padding: 0 24px;
`
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 8px;
`
const Subtitle = styled.p`
  color: #666;
  margin-bottom: 40px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`
const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`
const Field = styled.div``
const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  &:focus { outline: none; border-color: #5865F2; }
`
const Hint = styled.p`
  font-size: 0.78rem;
  color: #888;
  margin-top: 6px;
`
const ErrorMsg = styled.p`
  color: #e53e3e;
  font-size: 0.9rem;
`
const SubmitButton = styled.button`
  background: #5865F2;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
  &:hover:not(:disabled) { background: #4752c4; }
`
