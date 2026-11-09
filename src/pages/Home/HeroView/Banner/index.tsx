import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { withBasePath } from 'src/utils/basePath'
import { startInkRenderer } from './inkRenderer'

const STATIC_INK = '/images/hero/ink_static.webp'

// 静止画を先に出し、WebGLの準備ができたら立体描画へ切り替える。
// WebGL2が使えない環境では静止画のまま表示される
export default function TopBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<HTMLImageElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const frame = frameRef.current
    if (!canvas || !frame) return
    return startInkRenderer({
      canvas,
      frame,
      textures: {
        inkA: withBasePath('/images/hero/ink_a.webp'),
        inkB: withBasePath('/images/hero/ink_b.webp'),
        tropical: withBasePath('/images/hero/tropical.webp'),
      },
      onReady: () => setReady(true),
    })
  }, [])

  return (
    <>
      <Canvas ref={canvasRef} data-ready={ready} aria-hidden="true" />
      <Title>
        <Ink ref={frameRef} src={withBasePath(STATIC_INK)} alt="応用数学研究部" data-ready={ready} />
      </Title>
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
