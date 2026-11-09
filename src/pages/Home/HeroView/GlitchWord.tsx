import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'

const NOISE = '∇∂∑∫λπθ≈≠01ｱｲｳｴｵｶｷｸｹｺ#%&$'
const DURATION_MS = 520

// 言葉が変わるとき、ランダムな記号から左の文字順に新しい言葉へ「解読」され、
// その間だけ色ずれのグリッチが乗る
export default function GlitchWord({ word }: { word: string }) {
  const [text, setText] = useState(word)
  const [glitching, setGlitching] = useState(false)
  const from = useRef(word)

  useEffect(() => {
    if (word === from.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prev = from.current
    from.current = word
    if (reduceMotion) {
      setText(word)
      return
    }
    const start = performance.now()
    let raf = 0
    setGlitching(true)
    const frame = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION_MS)
      const length = Math.round(prev.length + (word.length - prev.length) * Math.min(1, p * 1.6))
      const settled = Math.floor(Math.max(0, p * 1.25 - 0.25) * word.length)
      let next = ''
      for (let i = 0; i < length; i++)
        next += i < settled ? word[i] : NOISE[Math.floor(Math.random() * NOISE.length)]
      setText(p >= 1 ? word : next)
      if (p < 1) raf = requestAnimationFrame(frame)
      else setGlitching(false)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [word])

  return (
    <Word data-text={text} data-glitching={glitching}>
      {text}
    </Word>
  )
}

const jitter = keyframes`
  0% { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 0); }
  20% { clip-path: inset(70% 0 5% 0); transform: translate(3px, 0); }
  40% { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(85% 0 2% 0); transform: translate(2px, 0); }
  80% { clip-path: inset(5% 0 80% 0); transform: translate(-1px, 0); }
  100% { clip-path: inset(45% 0 35% 0); transform: translate(1px, 0); }
`

const Word = styled.span`
  position: relative;
  display: inline-block;
  color: #fff;

  &[data-glitching='true']::before,
  &[data-glitching='true']::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  &[data-glitching='true']::before {
    color: #7fd6ff;
    animation: ${jitter} 0.18s steps(2) infinite;
  }
  &[data-glitching='true']::after {
    color: #ff5d8f;
    mix-blend-mode: screen;
    animation: ${jitter} 0.23s steps(2) infinite reverse;
  }
`
