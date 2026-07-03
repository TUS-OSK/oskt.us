import { useState, useEffect } from 'react'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import styled from '@emotion/styled'

const DISCORD_CLIENT_ID = '1090498074012553266'
const DISCORD_GUILD_ID = '1088362165347549247'
const DISCORD_REDIRECT_URI = 'https://oskt.us/pay'
const DISCORD_INVITE = 'https://discord.gg/J8M4XF9pjT'
const CHECKOUT_API = 'https://lzezd40iu3.execute-api.ap-northeast-1.amazonaws.com/checkout'
const PROFILE_STORAGE_KEY = 'osk_pay_profile'

type UserType = 'shinnyubu' | 'kizon'
type Affiliation = 'internal' | 'external'

interface DiscordUser {
  discord_id: string
  global_name: string
  in_guild: boolean
}

interface Profile {
  userType: UserType
  name: string
  furigana: string
  phone: string
  birthdate: string
  gender: string
  email: string
  affiliation: Affiliation
  student_id: string
  university: string
  faculty: string
  department: string
  grade: string
}

const GRADE_OPTIONS = [
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
  'M1', 'M2',
  'D1', 'D2', 'D3',
]

const defaultProfile = (): Profile => ({
  userType: 'shinnyubu',
  name: '', furigana: '', phone: '', birthdate: '', gender: '',
  email: '', affiliation: 'internal',
  student_id: '', university: '', faculty: '', department: '', grade: '',
})

const generateVerifier = (): string => {
  const buf = new Uint8Array(32)
  crypto.getRandomValues(buf)
  return btoa(String.fromCharCode(...buf)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

const generateChallenge = async (verifier: string): Promise<string> => {
  const data = new TextEncoder().encode(verifier)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return btoa(String.fromCharCode(...new Uint8Array(hash))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export default function PayPage() {
  const [discordUser, setDiscordUser] = useState<DiscordUser | null>(null)
  const [profile, setProfile] = useState<Profile>(defaultProfile)
  const [loading, setLoading] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState('')

  // localStorage から復元
  useEffect(() => {
    try {
      const saved = localStorage.getItem(PROFILE_STORAGE_KEY)
      if (saved) setProfile(p => ({ ...p, ...JSON.parse(saved) }))
    } catch {}
  }, [])

  // OAuth コールバック処理
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    if (!code) return

    const verifier = sessionStorage.getItem('discord_pkce_verifier')
    sessionStorage.removeItem('discord_pkce_verifier')
    window.history.replaceState({}, '', '/pay')

    if (!verifier) {
      setError('認証セッションが失効しました。もう一度お試しください。')
      return
    }

    setAuthLoading(true)
    ;(async () => {
      const tokenRes = await fetch('https://discord.com/api/v10/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: DISCORD_CLIENT_ID,
          grant_type: 'authorization_code',
          code,
          redirect_uri: DISCORD_REDIRECT_URI,
          code_verifier: verifier,
        }).toString(),
      })
      if (!tokenRes.ok) {
        setError('Discordログインに失敗しました。もう一度お試しください。')
        setAuthLoading(false)
        return
      }
      const token = await tokenRes.json()
      const userRes = await fetch('https://discord.com/api/v10/users/@me', {
        headers: { Authorization: `Bearer ${token.access_token}` },
      })
      const user = await userRes.json()
      const memberRes = await fetch(
        `https://discord.com/api/v10/users/@me/guilds/${DISCORD_GUILD_ID}/member`,
        { headers: { Authorization: `Bearer ${token.access_token}` } }
      )
      setDiscordUser({
        discord_id: user.id,
        global_name: user.global_name || user.username,
        in_guild: memberRes.ok,
      })
      // Discord メールをプリフィル
      if (user.email) setProfile(p => ({ ...p, email: user.email }))
      setAuthLoading(false)
    })().catch(e => {
      console.error(e)
      setError('通信エラーが発生しました')
      setAuthLoading(false)
    })
  }, [])

  const set = (key: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const v = e.target.value as never
    setProfile(p => {
      const next = { ...p, [key]: v }
      try { localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const handleDiscordLogin = async () => {
    const verifier = generateVerifier()
    const challenge = await generateChallenge(verifier)
    sessionStorage.setItem('discord_pkce_verifier', verifier)
    const url = new URL('https://discord.com/oauth2/authorize')
    url.searchParams.set('client_id', DISCORD_CLIENT_ID)
    url.searchParams.set('redirect_uri', DISCORD_REDIRECT_URI)
    url.searchParams.set('response_type', 'code')
    url.searchParams.set('scope', 'identify guilds.members.read')
    url.searchParams.set('code_challenge', challenge)
    url.searchParams.set('code_challenge_method', 'S256')
    window.location.href = url.toString()
  }

  const validate = (): string => {
    if (!profile.name) return '氏名を入力してください'
    if (!profile.furigana) return 'ふりがなを入力してください'
    if (!profile.phone) return '電話番号を入力してください'
    if (!profile.birthdate) return '生年月日を入力してください'
    if (!profile.gender) return '性別を選択してください'
    if (!profile.email) return 'メールアドレスを入力してください'
    if (profile.affiliation === 'internal' && !profile.student_id) return '学籍番号を入力してください'
    if (profile.affiliation === 'external' && !profile.university) return '大学名を入力してください'
    if (!profile.faculty) return '学部を入力してください'
    if (!profile.department) return '学科・専攻を入力してください'
    if (!profile.grade) return '学年を選択してください'
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!discordUser) return
    const validationError = validate()
    if (validationError) { setError(validationError); return }
    setError('')
    setLoading(true)
    try {
      const res = await fetch(CHECKOUT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          discord_id: discordUser.discord_id,
          user_type: profile.userType,
          email: profile.email,
          name: profile.name,
          furigana: profile.furigana,
          phone: profile.phone,
          birthdate: profile.birthdate,
          gender: profile.gender,
          affiliation: profile.affiliation,
          student_id: profile.affiliation === 'internal' ? profile.student_id : '',
          university: profile.affiliation === 'external' ? profile.university : '',
          faculty: profile.faculty,
          department: profile.department,
          grade: profile.grade,
        }),
      })
      const data = await res.json()
      if (data.url) {
        localStorage.removeItem(PROFILE_STORAGE_KEY)
        window.location.href = data.url
      } else {
        setError('エラーが発生しました: ' + JSON.stringify(data))
      }
    } catch {
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

          {authLoading ? (
            <LoadingMsg>Discordアカウントを確認中...</LoadingMsg>
          ) : !discordUser ? (
            <LoginSection>
              <Step>
                <StepNum>1</StepNum>
                <StepBody>
                  <StepLabel>Discordサーバーに参加する</StepLabel>
                  <StepDesc>まだ参加していない場合は先にこちらから</StepDesc>
                  <InviteButton href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
                    <DiscordIcon viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                    </DiscordIcon>
                    サーバーに参加する
                  </InviteButton>
                </StepBody>
              </Step>
              <StepDivider />
              <Step>
                <StepNum>2</StepNum>
                <StepBody>
                  <StepLabel>Discordでログインして支払いへ</StepLabel>
                  <StepDesc>参加済みの方はこちらから</StepDesc>
                  <DiscordButton type="button" onClick={handleDiscordLogin}>
                    <DiscordIcon viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                    </DiscordIcon>
                    Discordでログイン
                  </DiscordButton>
                </StepBody>
              </Step>
              {error && <ErrorMsg>{error}</ErrorMsg>}
            </LoginSection>
          ) : !discordUser.in_guild ? (
            <NotInGuild>
              <NotInGuildIcon>⚠️</NotInGuildIcon>
              <NotInGuildTitle>まずDiscordサーバーに参加してください</NotInGuildTitle>
              <NotInGuildDesc>
                部費の支払いはサーバー参加後に行えます。<br />
                参加後、このページに戻ってもう一度ログインしてください。
              </NotInGuildDesc>
              <InviteButton href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
                <DiscordIcon viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </DiscordIcon>
                Discordサーバーに参加する
              </InviteButton>
              <RetryLink type="button" onClick={() => setDiscordUser(null)}>
                参加済みの場合は再度ログイン
              </RetryLink>
            </NotInGuild>
          ) : (
            <Form onSubmit={handleSubmit}>
              <UserBadge>
                <BadgeCheck>✓</BadgeCheck>
                <BadgeName>{discordUser.global_name}</BadgeName>
                <BadgeChange type="button" onClick={() => setDiscordUser(null)}>変更</BadgeChange>
              </UserBadge>

              <SectionTitle>あなたの状況</SectionTitle>
              <RadioGroup>
                {([
                  ['shinnyubu', '新入部員（今学期から入部）'],
                  ['kizon', '既存部員（更新）'],
                ] as [UserType, string][]).map(([v, label]) => (
                  <RadioLabel key={v}>
                    <input type="radio" name="userType" value={v}
                      checked={profile.userType === v} onChange={set('userType')} />
                    {label}
                  </RadioLabel>
                ))}
              </RadioGroup>

              <SectionTitle>会員情報</SectionTitle>
              <FieldNote>入部手続きに使用します。毎学期更新してください。</FieldNote>

              <Row>
                <FieldGroup>
                  <Label>氏名 <Req>*</Req></Label>
                  <Input value={profile.name} onChange={set('name')} placeholder="東京 太郎" />
                </FieldGroup>
                <FieldGroup>
                  <Label>ふりがな <Req>*</Req></Label>
                  <Input value={profile.furigana} onChange={set('furigana')} placeholder="とうきょう たろう" />
                </FieldGroup>
              </Row>

              <Row>
                <FieldGroup>
                  <Label>生年月日 <Req>*</Req></Label>
                  <Input type="date" value={profile.birthdate} onChange={set('birthdate')} />
                </FieldGroup>
                <FieldGroup>
                  <Label>性別 <Req>*</Req></Label>
                  <Select value={profile.gender} onChange={set('gender')}>
                    <option value="">選択してください</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                    <option value="other">その他</option>
                    <option value="no_answer">回答しない</option>
                  </Select>
                </FieldGroup>
              </Row>

              <FieldGroup>
                <Label>電話番号 <Req>*</Req></Label>
                <Input type="tel" value={profile.phone} onChange={set('phone')} placeholder="090-0000-0000" />
              </FieldGroup>

              <FieldGroup>
                <Label>メールアドレス <Req>*</Req></Label>
                <Input type="email" value={profile.email} onChange={set('email')} placeholder="example@example.com" />
              </FieldGroup>

              <FieldGroup>
                <Label>所属 <Req>*</Req></Label>
                <RadioGroup>
                  <RadioLabel>
                    <input type="radio" name="affiliation" value="internal"
                      checked={profile.affiliation === 'internal'} onChange={set('affiliation')} />
                    学内（東京理科大学）
                  </RadioLabel>
                  <RadioLabel>
                    <input type="radio" name="affiliation" value="external"
                      checked={profile.affiliation === 'external'} onChange={set('affiliation')} />
                    学外（他大学・社会人など）
                  </RadioLabel>
                </RadioGroup>
              </FieldGroup>

              {profile.affiliation === 'internal' ? (
                <FieldGroup>
                  <Label>学籍番号 <Req>*</Req></Label>
                  <Input value={profile.student_id} onChange={set('student_id')} placeholder="1A000000" />
                </FieldGroup>
              ) : (
                <FieldGroup>
                  <Label>大学名 <Req>*</Req></Label>
                  <Input value={profile.university} onChange={set('university')} placeholder="○○大学" />
                </FieldGroup>
              )}

              <Row>
                <FieldGroup>
                  <Label>学部 <Req>*</Req></Label>
                  <Input value={profile.faculty} onChange={set('faculty')} placeholder="理学部" />
                </FieldGroup>
                <FieldGroup>
                  <Label>学科 / 専攻 <Req>*</Req></Label>
                  <Input value={profile.department} onChange={set('department')} placeholder="数学科" />
                </FieldGroup>
              </Row>

              <FieldGroup>
                <Label>学年 <Req>*</Req></Label>
                <Select value={profile.grade} onChange={set('grade')}>
                  <option value="">選択してください</option>
                  {GRADE_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                </Select>
              </FieldGroup>

              {error && <ErrorMsg>{error}</ErrorMsg>}

              <SubmitButton type="submit" disabled={loading}>
                {loading ? '処理中...' : 'お支払いへ進む →'}
              </SubmitButton>
            </Form>
          )}
        </Container>
      </MainLayout>
    </>
  )
}

const Container = styled.div`
  max-width: 520px;
  margin: 60px auto;
  padding: 0 24px 80px;
`
const Title = styled.h1`font-size: 1.8rem; font-weight: bold; margin-bottom: 8px;`
const Subtitle = styled.p`color: #666; margin-bottom: 40px;`
const LoadingMsg = styled.p`color: #888;`
const LoginSection = styled.div`display: flex; flex-direction: column; gap: 24px; padding: 8px 0;`
const Step = styled.div`display: flex; gap: 16px; align-items: flex-start;`
const StepNum = styled.div`
  width: 28px; height: 28px; border-radius: 50%; background: #5865F2;
  color: white; font-weight: bold; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;
`
const StepBody = styled.div`display: flex; flex-direction: column; gap: 6px; flex: 1;`
const StepLabel = styled.div`font-weight: bold;`
const StepDesc = styled.div`font-size: 0.85rem; color: #888;`
const StepDivider = styled.div`border-left: 2px dashed #ddd; height: 16px; margin-left: 13px;`
const DiscordButton = styled.button`
  display: flex; align-items: center; gap: 10px;
  background: #5865F2; color: white; border: none;
  padding: 14px 28px; border-radius: 8px; font-size: 1rem; font-weight: bold; cursor: pointer;
  &:hover { background: #4752c4; }
`
const DiscordIcon = styled.svg`width: 22px; height: 22px; flex-shrink: 0;`
const NotInGuild = styled.div`
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; padding: 32px 0; text-align: center;
`
const NotInGuildIcon = styled.div`font-size: 2.4rem;`
const NotInGuildTitle = styled.h2`font-size: 1.2rem; font-weight: bold;`
const NotInGuildDesc = styled.p`color: #555; line-height: 1.7;`
const InviteButton = styled.a`
  display: flex; align-items: center; gap: 10px;
  background: #5865F2; color: white; padding: 14px 24px;
  border-radius: 8px; font-size: 1rem; font-weight: bold; text-decoration: none;
  &:hover { background: #4752c4; }
`
const RetryLink = styled.button`
  background: none; border: none; color: #5865F2; font-size: 0.9rem; cursor: pointer; text-decoration: underline;
`
const UserBadge = styled.div`
  display: flex; align-items: center; gap: 8px; padding: 12px 16px;
  background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px;
`
const BadgeCheck = styled.span`color: #16a34a; font-weight: bold;`
const BadgeName = styled.span`font-weight: bold; flex: 1;`
const BadgeChange = styled.button`
  background: none; border: none; color: #888; font-size: 0.85rem; cursor: pointer; text-decoration: underline;
`
const Form = styled.form`display: flex; flex-direction: column; gap: 20px;`
const SectionTitle = styled.h2`font-size: 1rem; font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 8px; margin-top: 8px;`
const FieldNote = styled.p`font-size: 0.82rem; color: #888; margin-top: -12px;`
const Row = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 16px;`
const FieldGroup = styled.div`display: flex; flex-direction: column; gap: 6px;`
const Label = styled.label`font-size: 0.9rem; font-weight: bold;`
const Req = styled.span`color: #e53e3e; margin-left: 2px;`
const Input = styled.input`
  border: 1px solid #ddd; border-radius: 6px; padding: 10px 12px;
  font-size: 0.95rem; width: 100%; box-sizing: border-box;
  &:focus { outline: none; border-color: #5865F2; box-shadow: 0 0 0 2px #5865f230; }
`
const Select = styled.select`
  border: 1px solid #ddd; border-radius: 6px; padding: 10px 12px;
  font-size: 0.95rem; width: 100%; box-sizing: border-box; background: white;
  &:focus { outline: none; border-color: #5865F2; box-shadow: 0 0 0 2px #5865f230; }
`
const RadioGroup = styled.div`display: flex; flex-direction: column; gap: 10px;`
const RadioLabel = styled.label`display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.95rem;`
const ErrorMsg = styled.p`color: #e53e3e; font-size: 0.9rem;`
const SubmitButton = styled.button`
  background: #5865F2; color: white; border: none;
  padding: 14px 24px; border-radius: 8px; font-size: 1rem; font-weight: bold; cursor: pointer;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
  &:hover:not(:disabled) { background: #4752c4; }
`
