import { useState, useEffect } from 'react'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import { color, ease, font, mq, radius, size, space } from 'src/design/tokens'
import styled from '@emotion/styled'

const DISCORD_CLIENT_ID = '1090498074012553266'
const DISCORD_GUILD_ID = '1088362165347549247'
const DISCORD_REDIRECT_URI = 'https://oskt.us/pay'
const DISCORD_INVITE = 'https://discord.gg/J8M4XF9pjT'
const CHECKOUT_API = 'https://lzezd40iu3.execute-api.ap-northeast-1.amazonaws.com/checkout'
const PROFILE_STORAGE_KEY = 'osk_pay_profile'

type UserType = 'shinnyubu' | 'kizon'
type Affiliation = 'tus_student' | 'tus_alumni' | 'external_student' | 'external_worker'

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
  email: '', affiliation: 'tus_student',
  student_id: '', university: '', faculty: '', department: '', grade: '',
})

// 学部・学科・学年は「現在在学中」の人にのみ意味がある項目
const isCurrentlyEnrolled = (a: Affiliation) => a === 'tus_student' || a === 'external_student'

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
  const [alreadyPaid, setAlreadyPaid] = useState<boolean | null>(null)
  const [updateSuccess, setUpdateSuccess] = useState(false)

  // 入力途中の会員情報を復元する。Discordログインで同じタブのまま一度外部へ遷移するので
  // その間だけ保持できればよい。localStorage だと入力を途中でやめた人の氏名・電話番号・
  // 生年月日が端末に無期限で残る(大学の共用PCで問題になる)ため、タブを閉じれば消える
  // sessionStorage に置く
  useEffect(() => {
    try {
      // 以前の版が localStorage に残した分は読まずに消す
      localStorage.removeItem(PROFILE_STORAGE_KEY)
      const saved = sessionStorage.getItem(PROFILE_STORAGE_KEY)
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

  // ログイン確定後、フォームを出す前に「今学期は払い済みか」を確認する。
  // 払い済みなら決済ボタンではなく情報更新ボタンに切り替えるため、フォーム表示前に判定する。
  useEffect(() => {
    if (!discordUser || !discordUser.in_guild) return
    setAlreadyPaid(null)
    fetch(CHECKOUT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ discord_id: discordUser.discord_id, check_only: true }),
    })
      .then(res => res.json())
      .then(data => {
        setAlreadyPaid(!!data.already_paid)
        // DB側の登録済みプロフィールをSSOTとして反映する（sessionStorageはタブ内の
        // 一時キャッシュなので、値がある項目はDB側を優先して上書きする）
        if (data.profile) {
          setProfile(p => ({
            ...p,
            ...Object.fromEntries(Object.entries(data.profile).filter(([, v]) => v)),
          }))
        }
      })
      .catch(() => setAlreadyPaid(false))
  }, [discordUser])

  const set = (key: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const v = e.target.value as never
    setProfile(p => {
      const next = { ...p, [key]: v }
      try { sessionStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(next)) } catch {}
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
    if (profile.affiliation === 'tus_student' && !profile.student_id) return '学籍番号を入力してください'
    if (profile.affiliation === 'external_student' && !profile.university) return '大学名を入力してください'
    if (isCurrentlyEnrolled(profile.affiliation)) {
      if (!profile.faculty) return '学部を入力してください'
      if (!profile.department) return '学科・専攻を入力してください'
      if (!profile.grade) return '学年を選択してください'
    }
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
          student_id: profile.affiliation === 'tus_student' ? profile.student_id : '',
          university: profile.affiliation === 'external_student' ? profile.university : '',
          faculty: isCurrentlyEnrolled(profile.affiliation) ? profile.faculty : '',
          department: isCurrentlyEnrolled(profile.affiliation) ? profile.department : '',
          grade: isCurrentlyEnrolled(profile.affiliation) ? profile.grade : '',
        }),
      })
      const data = await res.json()
      if (data.url) {
        sessionStorage.removeItem(PROFILE_STORAGE_KEY)
        window.location.href = data.url
      } else if (res.status === 409 && data.error === 'already_paid_this_semester') {
        if (alreadyPaid) {
          // 事前チェックの時点で払い済みと分かっていた＝最初から情報更新のみが目的だったケース。
          // 409はプロフィール保存が完了した後に返るエラーなので、ここでは失敗ではなく成功として扱う。
          sessionStorage.removeItem(PROFILE_STORAGE_KEY)
          setUpdateSuccess(true)
        } else {
          // 事前チェック後、別タブ等で支払いが完了した等のレースケース
          setError('今学期の部費はすでにお支払い済みです。会員情報は更新されました。')
        }
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
      <PageHead
        title={alreadyPaid ? '会員情報の更新' : '入部・見学'}
        description="東京理科大学 応用数学研究部(OSK)への入部・見学と部費のお支払い。見学は Discord サーバーに参加するだけでできます。"
      />
      <MainLayout>
        <Container>
          <Title>{alreadyPaid ? '会員情報の更新' : '入部・見学'}</Title>
          <Subtitle>{alreadyPaid ? '今学期分のお支払いは確認済みです。情報の更新のみ行えます。' : '見学は Discord サーバーに参加するだけでできます。入部は部費のお支払いで完了します（¥2,000 / 半期、OB/OGの方は¥2,000以上の任意金額）。'}</Subtitle>

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
                  <VisitNote>見学だけしたい方もこちらから！</VisitNote>
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
          ) : updateSuccess ? (
            <SuccessSection>
              <SuccessIcon>✓</SuccessIcon>
              <SuccessTitle>会員情報を更新しました</SuccessTitle>
              <SuccessDesc>今学期分のお支払いはすでに確認済みです。ご協力ありがとうございました。</SuccessDesc>
            </SuccessSection>
          ) : alreadyPaid === null ? (
            <LoadingMsg>お支払い状況を確認中...</LoadingMsg>
          ) : (
            <Form onSubmit={handleSubmit}>
              <UserBadge>
                <BadgeCheck>✓</BadgeCheck>
                <BadgeName>{discordUser.global_name}</BadgeName>
                <BadgeChange type="button" onClick={() => setDiscordUser(null)}>変更</BadgeChange>
              </UserBadge>

              {!alreadyPaid && (
                <>
                  <SectionTitle>あなたの状況</SectionTitle>
                  <FieldNote>
                    今回が初めての部費支払いなら「新入部員」、以前の学期にも部費を払ったことがあれば「既存部員」を選んでください。
                    入部人数の記録に使うだけで、選択を間違えても部員ロールの付与や手続きには影響しません。
                  </FieldNote>
                  <RadioGroup>
                    {([
                      ['shinnyubu', '新入部員（今学期が初めての部費支払い）'],
                      ['kizon', '既存部員（以前の学期にも支払い済み）'],
                    ] as [UserType, string][]).map(([v, label]) => (
                      <RadioLabel key={v}>
                        <input type="radio" name="userType" value={v}
                          checked={profile.userType === v} onChange={set('userType')} />
                        {label}
                      </RadioLabel>
                    ))}
                  </RadioGroup>
                </>
              )}

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
                    <input type="radio" name="affiliation" value="tus_student"
                      checked={profile.affiliation === 'tus_student'} onChange={set('affiliation')} />
                    東京理科大学（在学中）
                  </RadioLabel>
                  <RadioLabel>
                    <input type="radio" name="affiliation" value="tus_alumni"
                      checked={profile.affiliation === 'tus_alumni'} onChange={set('affiliation')} />
                    東京理科大学（卒業生・OB/OG）
                  </RadioLabel>
                  <RadioLabel>
                    <input type="radio" name="affiliation" value="external_student"
                      checked={profile.affiliation === 'external_student'} onChange={set('affiliation')} />
                    学外（学生）
                  </RadioLabel>
                  <RadioLabel>
                    <input type="radio" name="affiliation" value="external_worker"
                      checked={profile.affiliation === 'external_worker'} onChange={set('affiliation')} />
                    学外（社会人）
                  </RadioLabel>
                </RadioGroup>
              </FieldGroup>

              {!alreadyPaid && profile.affiliation === 'tus_alumni' && (
                <FieldNote>OB/OGの方は次の画面で¥2,000以上の任意の金額をご入力いただけます。</FieldNote>
              )}

              {profile.affiliation === 'tus_student' && (
                <FieldGroup>
                  <Label>学籍番号 <Req>*</Req></Label>
                  <Input value={profile.student_id} onChange={set('student_id')} placeholder="1A000000" />
                </FieldGroup>
              )}
              {profile.affiliation === 'external_student' && (
                <FieldGroup>
                  <Label>大学名 <Req>*</Req></Label>
                  <Input value={profile.university} onChange={set('university')} placeholder="○○大学" />
                </FieldGroup>
              )}

              {isCurrentlyEnrolled(profile.affiliation) && (
                <>
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
                </>
              )}

              {error && <ErrorMsg>{error}</ErrorMsg>}

              <SubmitButton type="submit" disabled={loading}>
                {loading ? '処理中...' : alreadyPaid ? '情報を更新する' : profile.affiliation === 'tus_alumni' ? 'お支払い金額の入力へ進む →' : 'お支払いへ進む →'}
              </SubmitButton>
            </Form>
          )}
        </Container>
      </MainLayout>
    </>
  )
}

// 見た目はサイト共通の3色(黒地・白・青)に揃える。Discord の操作ボタンだけは
// 「Discord のボタン」と分かるよう白地にロゴを置く
const Container = styled.div`
  box-sizing: border-box;
  max-width: 600px;
  margin: 0 auto;
  padding: ${space.xxl} ${space.md} ${space.xl};
  ${mq.sp} {
    padding-top: ${space.xl};
  }
`
const Title = styled.h1`
  margin: 0 0 ${space.xs};
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xl};
  letter-spacing: 0.06em;
`
const Subtitle = styled.p`
  margin: 0 0 ${space.lg};
  color: ${color.inkMuted};
`
const LoadingMsg = styled.p`color: ${color.inkMuted};`
const LoginSection = styled.div`display: flex; flex-direction: column; gap: ${space.md};`
const Step = styled.div`
  display: flex;
  gap: ${space.sm};
  align-items: flex-start;
  padding: ${space.md};
  background: ${color.surface};
  border: solid 1px ${color.line};
  border-radius: ${radius};
`
const StepNum = styled.div`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin-top: 2px;
  border: solid 1px ${color.accent};
  border-radius: 50%;
  color: ${color.accent};
  font-family: ${font.label};
  font-size: ${size.sm};
  display: flex;
  align-items: center;
  justify-content: center;
`
const StepBody = styled.div`display: flex; flex-direction: column; gap: 6px; flex: 1;`
const StepLabel = styled.div`font-family: ${font.serif}; font-weight: 600; font-size: ${size.md};`
const StepDesc = styled.div`font-size: ${size.sm}; color: ${color.inkMuted}; margin-bottom: 8px;`
const StepDivider = styled.div`display: none;`
const VisitNote = styled.p`
  margin: 8px 0 0;
  font-size: ${size.sm};
  color: ${color.inkMuted};
  line-height: 1.7;
`
const buttonStyle = `
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  align-self: flex-start;
  padding: 12px 24px;
  border: none; border-radius: 2px;
  background: ${color.ink}; color: ${color.base};
  font-family: inherit; font-size: ${size.sm}; letter-spacing: 0.06em;
  text-decoration: none; cursor: pointer;
  transition: background-color 0.2s ${ease};
  &:hover { background: ${color.accent}; }
`
const DiscordButton = styled.button`${buttonStyle}`
const DiscordIcon = styled.svg`width: 20px; height: 20px; flex-shrink: 0;`
const NotInGuild = styled.div`
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; padding: ${space.lg} 0; text-align: center;
  a { align-self: center; }
`
const NotInGuildIcon = styled.div`font-size: 2rem;`
const NotInGuildTitle = styled.h2`margin: 0; font-family: ${font.serif}; font-weight: 600; font-size: ${size.lg};`
const NotInGuildDesc = styled.p`color: ${color.inkMuted}; line-height: 1.8;`
const SuccessSection = styled.div`
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; padding: ${space.xl} 0; text-align: center;
`
const SuccessIcon = styled.div`
  width: 48px; height: 48px; border-radius: 50%;
  border: solid 1px ${color.accent}; color: ${color.accent};
  font-size: 1.4rem;
  display: flex; align-items: center; justify-content: center;
`
const SuccessTitle = styled.h2`margin: 0; font-family: ${font.serif}; font-weight: 600; font-size: ${size.lg};`
const SuccessDesc = styled.p`color: ${color.inkMuted}; line-height: 1.8;`
const InviteButton = styled.a`${buttonStyle}`
const RetryLink = styled.button`
  background: none; border: none; color: ${color.accent};
  font-family: inherit; font-size: ${size.sm}; cursor: pointer; text-decoration: underline;
`
const UserBadge = styled.div`
  display: flex; align-items: center; gap: 8px; padding: 12px 16px;
  background: ${color.accentSoft}; border: solid 1px ${color.accentLine}; border-radius: ${radius};
`
const BadgeCheck = styled.span`color: ${color.accent};`
const BadgeName = styled.span`font-weight: bold; flex: 1;`
const BadgeChange = styled.button`
  background: none; border: none; color: ${color.inkMuted};
  font-family: inherit; font-size: ${size.sm}; cursor: pointer; text-decoration: underline;
`
const Form = styled.form`display: flex; flex-direction: column; gap: 20px;`
const SectionTitle = styled.h2`
  margin: ${space.sm} 0 0;
  padding-bottom: 8px;
  border-bottom: solid 1px ${color.line};
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.md};
`
const FieldNote = styled.p`margin: -10px 0 0; font-size: ${size.sm}; color: ${color.inkMuted}; line-height: 1.7;`
const Row = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  ${mq.sp} { grid-template-columns: 1fr; }
`
const FieldGroup = styled.div`display: flex; flex-direction: column; gap: 6px;`
const Label = styled.label`font-size: ${size.sm}; font-weight: bold;`
const Req = styled.span`color: ${color.accent}; margin-left: 2px;`
const fieldStyle = `
  width: 100%;
  box-sizing: border-box;
  padding: 11px 12px;
  font-family: inherit;
  font-size: ${size.md};
  color: ${color.ink};
  background: ${color.surface};
  border: solid 1px ${color.lineStrong};
  border-radius: ${radius};
  &::placeholder { color: ${color.inkSubtle}; }
  &:focus { outline: none; border-color: ${color.accent}; box-shadow: 0 0 0 2px ${color.accentSoft}; }
`
const Input = styled.input`${fieldStyle}`
const Select = styled.select`${fieldStyle}`
const RadioGroup = styled.div`display: flex; flex-direction: column; gap: 10px;`
const RadioLabel = styled.label`
  display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: ${size.md};
  input { accent-color: ${color.accent}; width: 16px; height: 16px; }
`
const ErrorMsg = styled.p`
  margin: 0;
  padding: 10px 14px;
  border-left: solid 2px ${color.ink};
  background: rgba(255, 255, 255, 0.06);
  font-size: ${size.sm};
`
const SubmitButton = styled.button`
  ${buttonStyle}
  align-self: stretch;
  padding: 14px 24px;
  font-size: ${size.md};
  &:disabled { opacity: 0.5; cursor: not-allowed; }
  &:hover:not(:disabled) { background: ${color.accent}; }
`
