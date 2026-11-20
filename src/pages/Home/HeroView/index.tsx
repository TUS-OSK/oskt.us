import { SWIFT } from 'src/utils/animations'
import { StyledLink } from 'src/utils/next/elements'
import { pageTo } from 'src/utils/urls'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { BASE_PATH } from 'src/utils/basePath'
import { rise, slideArrow, T_AROUND, T_SLIDE } from './animations'
import Banner from './Banner'
import GlitchWord from './GlitchWord'
import { teamPath, TEAMS as ALL_TEAMS } from 'src/data/teams'
import { type BackgroundMode, EXTRA_MODES, INTRO, TEAM_INTERVAL_MS, TEAMS } from './teams'

// 背景モチーフの比較用。PRプレビューか ?bg= 付きのときだけ、巡回を止めて班を選べるUIを出す
const pinnedFromUrl = (): { team: number; mode: BackgroundMode } | null => {
  const q = new URLSearchParams(window.location.search).get('bg')
  const i = TEAMS.findIndex((t) => t.mode === q)
  if (i >= 0) return { team: i, mode: TEAMS[i].mode }
  const extra = EXTRA_MODES.find((m) => m.mode === q)
  return extra ? { team: extra.team, mode: extra.mode } : null
}

export default function HeroView() {
  // -1 は巡回前(「応用数学しよう」)。WebGLが使えない・動きを減らす設定のときはこのまま
  const [index, setIndex] = useState(-1)
  const [pinned, setPinned] = useState<BackgroundMode | null>(null)
  const [ready, setReady] = useState(false)
  const [showPicker, setShowPicker] = useState(false)

  useEffect(() => {
    const p = pinnedFromUrl()
    if (p) {
      setPinned(p.mode)
      setIndex(p.team)
    }
    setShowPicker(Boolean(BASE_PATH) || new URLSearchParams(window.location.search).has('bg'))
  }, [])

  // 4秒ごとに次の班へ。描画の準備ができるまでと、動きを減らす設定の人には回さない
  useEffect(() => {
    if (!ready || pinned !== null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % TEAMS.length)
    }, TEAM_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [ready, pinned])

  const pin = (team: number | null, mode: BackgroundMode | null) => {
    setPinned(mode)
    if (team !== null) setIndex(team)
    const url = new URL(window.location.href)
    url.searchParams.set('bg', mode ?? 'cycle')
    window.history.replaceState(null, '', url)
  }

  const team = index >= 0 ? TEAMS[index] : null
  const mode = pinned ?? team?.mode ?? 'seigaiha'
  // 日本科学未来館のゾーン紹介のように「名前・短い言葉・問いかけ・詳しくみる」の順で見せる
  const shown = team ?? INTRO
  const more = team
    ? { href: teamPath(ALL_TEAMS[index]), subject: team.name }
    : { href: pageTo('about'), subject: '応数研' }
  return (
    <Container>
      <Banner mode={mode} onReady={() => setReady(true)}></Banner>
      <Copy>
        {/* 読み上げでは巡回する文字を毎回読ませず、固定の一文として伝える */}
        <VisuallyHidden as="p">
          東京理科大学 応用数学研究部(応数研・OSK)は、数学・プログラミング・データサイエンス・統計・AIに取り組む部活(サークル)です。
        </VisuallyHidden>
        <div aria-hidden="true">
          <University>{shown.name}</University>
          <Lead>
            <GlitchWord word={shown.phrase} />
          </Lead>
          <Question key={shown.question}>{shown.question}</Question>
          <Teams>
            {TEAMS.map((t, i) => (
              <TeamName key={t.mode} data-active={i === index}>
                {t.name.replace(/班$/, '')}
              </TeamName>
            ))}
          </Teams>
        </div>
        <Actions>
          <Primary href={more.href}>
            {/* スマホでは折り返して右下のボタンと重なるので「詳しくみる」だけにする */}
            <span className="pc">{more.subject}について</span>詳しくみる
          </Primary>
          <Secondary href={pageTo('contact')}>ご連絡</Secondary>
        </Actions>
      </Copy>
      {showPicker && ready && (
        <Picker aria-label="背景の比較用">
          <PickerButton type="button" aria-pressed={pinned === null} onClick={() => pin(null, null)}>
            巡回
          </PickerButton>
          {TEAMS.map((t, i) => (
            <PickerButton key={t.mode} type="button" aria-pressed={pinned === t.mode} onClick={() => pin(i, t.mode)}>
              {t.motif}
            </PickerButton>
          ))}
          {EXTRA_MODES.map((m) => (
            <PickerButton
              key={m.mode}
              type="button"
              aria-pressed={pinned === m.mode}
              onClick={() => pin(m.team, m.mode)}
            >
              {m.motif}
            </PickerButton>
          ))}
        </Picker>
      )}
      <Bottom>
        <Arrow></Arrow>
      </Bottom>
    </Container>
  )
}

const INK_WHITE = 'rgba(255, 255, 255, 0.92)'

const Copy = styled.div`
  position: absolute;
  z-index: 2;
  left: 24px;
  right: 24px;
  /* スマホでは右下に「入部はこちらから！」が固定で出るので、その上に置く */
  bottom: 88px;
  color: ${INK_WHITE};
  animation: ${rise} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;

  @media (min-width: 860px) {
    left: max(6vw, calc(50% - 600px));
    right: auto;
    bottom: 16vh;
    max-width: 560px;
  }
`

// 未来館の「5階」にあたる、いま見せている班の名前
const University = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #7fd6ff;
`

const Lead = styled.p`
  margin: 0 0 12px;
  font-family: 'Hiragino Mincho ProN', 'Yu Mincho', 'YuMincho', serif;
  font-size: clamp(26px, 3.4vw, 48px);
  line-height: 1.5;
  letter-spacing: 0.08em;
  white-space: nowrap;
`

// 班が変わるたびに、問いかけを下からふわっと出す
const Question = styled.p`
  margin: 0 0 20px;
  min-height: 3.6em;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.78);
  animation: ${rise} 0.6s ${SWIFT} both;

  @media (max-width: 859px) {
    font-size: 14px;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`

const Teams = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 24px;
  font-size: 13px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.5);

  /* スマホでは見出しの上の班名と同じことになるので出さない */
  @media (max-width: 859px) {
    display: none;
  }
`

// 「〇〇しよう」の〇〇に対応する班だけを光らせる
const TeamName = styled.span`
  white-space: nowrap;
  transition: color 0.4s ease;
  &:not(:last-child)::after {
    content: '/';
    margin: 0 0.5em;
    color: rgba(255, 255, 255, 0.3);
  }
  &[data-active='true'] {
    color: #7fd6ff;
  }
`

const Picker = styled.div`
  position: absolute;
  z-index: 3;
  top: 12px;
  left: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-width: calc(100% - 24px);
`

const PickerButton = styled.button`
  padding: 4px 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(10, 14, 22, 0.6);
  border: solid 1px rgba(127, 214, 255, 0.25);
  border-radius: 999px;
  cursor: pointer;
  &[aria-pressed='true'] {
    color: #0d0d12;
    background: #7fd6ff;
    border-color: #7fd6ff;
  }
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  a {
    white-space: nowrap;
  }
`

const Primary = styled(StyledLink)`
  white-space: nowrap;
  @media (max-width: 859px) {
    .pc {
      display: none;
    }
  }
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #0d0d12;
  background: ${INK_WHITE};
  transition: background 0.2s ease;
  &:hover {
    background: #7fd6ff;
  }
`

const Secondary = styled(StyledLink)`
  padding: 9px 27px;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: ${INK_WHITE};
  border: solid 1px rgba(255, 255, 255, 0.4);
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
  &:hover {
    color: #7fd6ff;
    border-color: #7fd6ff;
  }

  /* スマホでは右下の「入部はこちらから！」と重なるので、そちらに任せる */
  @media (max-width: 859px) {
    display: none;
  }
`

const Bottom = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);

  @media (max-width: 859px) {
    display: none;
  }
`

const ARROW_SIZE = 40

const Arrow = styled.div`
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideArrow} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
  &::before {
    content: '';
    width: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
    height: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
    border-right: solid 1px rgba(255, 255, 255, 0.5);
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    transform: rotate(45deg);
  }
`

const Container = styled.div`
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  background: #0d0d12;
`
