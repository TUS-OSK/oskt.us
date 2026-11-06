import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

// ヒーロー背景: ライフゲーム(Conway's Game of Life)。
// 「応用数学部らしい」ビジュアルとして、写真ではなくセルオートマトンを背景にする。
// 1世代/秒とゆっくり進めることで、うるさくならないようにしている(秒間60世代だと
// チラついて読みにくくなる)。prefers-reduced-motionの場合は初期状態で止めたままにする。
const CELL = 14
const BG = '#f6f5f2'
const DOT_COLOR = '#2a2a3a'
const ACCENT_COLOR = '#da6272'
const ACCENT_EVERY = 7 // 7マスに1マスだけアクセントカラーにする(目印として使う)
const GENERATION_MS = 1000

export default function LifeGameBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let cols = 0
    let rows = 0
    let grid: Uint8Array<ArrayBufferLike> = new Uint8Array(0)

    const at = (x: number, y: number): number => grid[((y + rows) % rows) * cols + ((x + cols) % cols)]

    const seed = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      cols = Math.max(1, Math.floor(width / CELL))
      rows = Math.max(1, Math.floor(height / CELL))
      grid = new Uint8Array(cols * rows)
      // 生存率を低めにして、最初から疎で上品な密度にする
      for (let i = 0; i < grid.length; i++) grid[i] = Math.random() < 0.16 ? 1 : 0
    }

    const step = () => {
      const next = new Uint8Array(cols * rows)
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let n = 0
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx || dy) n += at(x + dx, y + dy)
            }
          }
          const cur = at(x, y)
          next[y * cols + x] = cur ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 1 : 0
        }
      }
      // ほぼ全滅/埋め尽くしで止まったら播き直す(単調なまま固まるのを防ぐ)
      const alive = next.reduce((a, b) => a + b, 0)
      grid = alive < cols * rows * 0.01 || alive > cols * rows * 0.6 ? reseed() : next
    }

    const reseed = (): Uint8Array<ArrayBufferLike> => {
      const g = new Uint8Array(cols * rows)
      for (let i = 0; i < g.length; i++) g[i] = Math.random() < 0.16 ? 1 : 0
      return g
    }

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.fillStyle = BG
      ctx.fillRect(0, 0, width, height)
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (!at(x, y)) continue
          const accent = (x + y) % ACCENT_EVERY === 0
          ctx.fillStyle = accent ? ACCENT_COLOR : DOT_COLOR
          ctx.globalAlpha = accent ? 0.85 : 0.22
          ctx.fillRect(x * CELL, y * CELL, CELL - 3, CELL - 3)
        }
      }
      ctx.globalAlpha = 1
    }

    seed()
    render()

    if (reduceMotion) return // 揺れが苦手な人向けに、初期状態の静止画のまま止める

    let raf = 0
    let last = 0
    const loop = (ts: number) => {
      if (ts - last > GENERATION_MS) {
        step()
        render()
        last = ts
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // seed()はcanvas.width/heightの変更を伴い描画内容を消すため、再描画まで必ずセットで呼ぶ。
    // 呼び忘れると次の世代更新(最大1秒後)まで真っ白になる隙間ができる
    const onResize = () => {
      seed()
      render()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <Canvas ref={canvasRef} />
}

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`
