import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { BASE_PATH, withBasePath } from 'src/utils/basePath'
import { BACKGROUND_MODES, type BackgroundMode, type InkRenderer, startInkRenderer } from './inkRenderer'

const STATIC_INK = '/images/hero/ink_static.webp'
const DEFAULT_MODE: BackgroundMode = 'tropical'

const modeFromUrl = (): BackgroundMode => {
  const q = new URLSearchParams(window.location.search).get('bg')
  return BACKGROUND_MODES.some((m) => m.id === q) ? (q as BackgroundMode) : DEFAULT_MODE
}

// 静止画を先に出し、WebGLの準備ができたら立体描画へ切り替える。
// WebGL2が使えない環境では静止画のまま表示される
export default function TopBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<HTMLImageElement>(null)
  const rendererRef = useRef<InkRenderer | null>(null)
  const [ready, setReady] = useState(false)
  const [mode, setMode] = useState<BackgroundMode>(DEFAULT_MODE)
  // 背景の柄は役員で比較検討中。PRプレビューか ?bg= 付きのときだけ切替UIを出す
  const [showPicker, setShowPicker] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const frame = frameRef.current
    if (!canvas || !frame) return
    const initial = modeFromUrl()
    setMode(initial)
    setShowPicker(Boolean(BASE_PATH) || new URLSearchParams(window.location.search).has('bg'))
    const renderer = startInkRenderer({
      canvas,
      frame,
      mode: initial,
      textures: {
        inkA: withBasePath('/images/hero/ink_a.webp'),
        inkB: withBasePath('/images/hero/ink_b.webp'),
        soft: withBasePath('/images/hero/ink_soft.webp'),
        tropical: withBasePath('/images/hero/tropical.webp'),
        trails: withBasePath('/images/hero/trails.webp'),
      },
      onReady: () => setReady(true),
    })
    rendererRef.current = renderer
    return () => renderer.destroy()
  }, [])

  const choose = (next: BackgroundMode) => {
    setMode(next)
    rendererRef.current?.setMode(next)
    const url = new URL(window.location.href)
    url.searchParams.set('bg', next)
    window.history.replaceState(null, '', url)
  }

  return (
    <>
      <Canvas ref={canvasRef} data-ready={ready} aria-hidden="true" />
      <Title>
        <Ink ref={frameRef} src={withBasePath(STATIC_INK)} alt="応用数学研究部" data-ready={ready} />
      </Title>
      {showPicker && ready && (
        <Picker aria-label="背景の柄(比較用)">
          {BACKGROUND_MODES.map((m) => (
            <PickerButton key={m.id} type="button" aria-pressed={mode === m.id} onClick={() => choose(m.id)}>
              {m.label}
            </PickerButton>
          ))}
        </Picker>
      )}
    </>
  )
}

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  transition: opacity 1.2s ease;
  &[data-ready='true'] {
    opacity: 1;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: inherit;
`

// 描画側はこの要素の矩形に墨を合わせるので、位置と大きさはCSSだけで調整できる
const Ink = styled.img`
  position: absolute;
  z-index: 1;
  display: block;
  aspect-ratio: 1214 / 1843;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);
  height: min(calc(100svh - 340px), 132vw);
  transition: opacity 1.2s ease;
  &[data-ready='true'] {
    opacity: 0;
  }

  @media (min-width: 860px) {
    top: 50%;
    left: auto;
    right: max(3vw, calc(50% - 600px));
    transform: translateY(-50%);
    height: min(94vh, 1120px);
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
