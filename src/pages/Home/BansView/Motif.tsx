import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

export type MotifType = 'ml' | 'stat' | 'cs' | 'cp' | 'cg' | 'web'

interface Props {
  type: MotifType
}

// 班紹介カードの背景に使う、班のテーマに寄せた軽量な生成的アニメーション。
// 「暫定でNabitoが割り当てた組み合わせ」(2026-11)。班の実際の活動内容と違う/
// もっとこだわりたい、という班があれば差し替える前提
export default function Motif({ type }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    const dpr = window.devicePixelRatio || 1
    const { width: W, height: H } = canvas.getBoundingClientRect()
    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.scale(dpr, dpr)

    const drawers: Record<MotifType, () => () => void> = {
      ml: () => drawGradientDescent(ctx, W, H),
      stat: () => drawHistogram(ctx, W, H),
      cs: () => drawGraph(ctx, W, H),
      cp: () => drawSort(ctx, W, H),
      cg: () => drawFlowField(ctx, W, H),
      web: () => drawTagRain(ctx, W, H),
    }

    const tick = drawers[type]()
    if (reduceMotion) {
      tick()
      return
    }

    const loop = () => {
      tick()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [type])

  return <Canvas ref={ref} />
}

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

// ── 機械学習班: 損失曲線を転がるボール(勾配降下法) ──
function drawGradientDescent(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const f = (x: number) => 0.0009 * (x - W * 0.3) * (x - W * 0.3) + H * 0.3 + 30 * Math.sin(x * 0.012)
  let ballX = 20
  let t = 0
  return () => {
    ctx.fillStyle = '#1b1b2a'
    ctx.fillRect(0, 0, W, H)
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    for (let y = 16; y < H; y += 24) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(W, y)
      ctx.stroke()
    }
    ctx.beginPath()
    ctx.strokeStyle = '#8fa0ff'
    ctx.lineWidth = 3
    for (let x = 0; x <= W; x += 4) {
      const y = f(x)
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
    const target = W * 0.3
    ballX += (target - ballX) * 0.01 + Math.sin(t * 0.05) * 0.5
    ctx.beginPath()
    ctx.fillStyle = '#da6272'
    ctx.arc(ballX, f(ballX) - 10, 7, 0, Math.PI * 2)
    ctx.fill()
    t++
  }
}

// ── 数理統計班: 揺れるヒストグラム+正規分布 ──
function drawHistogram(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const n = 20
  const heights = Array.from({ length: n }, (_, i) => {
    const x = (i / n - 0.5) * 4
    return Math.exp((-x * x) / 2)
  })
  let t = 0
  return () => {
    ctx.fillStyle = '#2a2235'
    ctx.fillRect(0, 0, W, H)
    const bw = W / n
    for (let i = 0; i < n; i++) {
      const jitter = 0.08 * Math.sin(t * 0.04 + i)
      const h = Math.max(0.03, heights[i] + jitter * heights[i])
      const barH = h * (H - 60)
      ctx.fillStyle = `rgba(218, 98, 114, ${0.4 + h * 0.5})`
      ctx.fillRect(i * bw + 2, H - 30 - barH, bw - 4, barH)
    }
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'
    ctx.lineWidth = 2
    for (let x = 0; x <= W; x += 4) {
      const xx = (x / W - 0.5) * 4
      const y = H - 30 - Math.exp((-xx * xx) / 2) * (H - 60)
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
    t++
  }
}

// ── コンピュータサイエンス班: グラフ探索が光を伝う ──
function drawGraph(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const N = 12
  const nodes = Array.from({ length: N }, () => ({
    x: 20 + Math.random() * (W - 40),
    y: 20 + Math.random() * (H - 40),
  }))
  const edges: [number, number][] = []
  for (let i = 0; i < N; i++) edges.push([i, (i + 1 + Math.floor(Math.random() * 2)) % N])
  let visited = [0]
  let frontier = [0]
  let t = 0
  return () => {
    ctx.fillStyle = '#131722'
    ctx.fillRect(0, 0, W, H)
    if (t % 18 === 0) {
      if (frontier.length) {
        const cur = frontier.shift() as number
        edges.forEach(([a, b]) => {
          if (a === cur && !visited.includes(b)) {
            visited.push(b)
            frontier.push(b)
          }
          if (b === cur && !visited.includes(a)) {
            visited.push(a)
            frontier.push(a)
          }
        })
      } else {
        visited = [0]
        frontier = [0]
      }
    }
    edges.forEach(([a, b]) => {
      ctx.strokeStyle = 'rgba(255,255,255,0.15)'
      ctx.beginPath()
      ctx.moveTo(nodes[a].x, nodes[a].y)
      ctx.lineTo(nodes[b].x, nodes[b].y)
      ctx.stroke()
    })
    nodes.forEach((node, i) => {
      const on = visited.includes(i)
      ctx.beginPath()
      ctx.fillStyle = on ? '#6fe3c0' : 'rgba(255,255,255,0.3)'
      ctx.arc(node.x, node.y, on ? 6 : 4, 0, Math.PI * 2)
      ctx.fill()
    })
    t++
  }
}

// ── 競プロ班: バブルソートのバー ──
function drawSort(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const n = 18
  let arr = Array.from({ length: n }, () => Math.random())
  let i = 0
  let j = 0
  let t = 0
  return () => {
    ctx.fillStyle = '#1c1f14'
    ctx.fillRect(0, 0, W, H)
    if (t % 6 === 0) {
      if (i < n) {
        if (j < n - i - 1) {
          if (arr[j] > arr[j + 1]) {
            const tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
          }
          j++
        } else {
          j = 0
          i++
        }
      } else {
        arr = Array.from({ length: n }, () => Math.random())
        i = 0
        j = 0
      }
    }
    const bw = W / n
    arr.forEach((v, idx) => {
      const h = v * (H - 40)
      const active = idx === j || idx === j + 1
      ctx.fillStyle = active ? '#f2c14e' : '#9fd168'
      ctx.fillRect(idx * bw + 2, H - 20 - h, bw - 4, h)
    })
    t++
  }
}

// ── CG班: フローフィールドの粒子 ──
function drawFlowField(ctx: CanvasRenderingContext2D, W: number, H: number) {
  ctx.fillStyle = '#0e0e16'
  ctx.fillRect(0, 0, W, H)
  const P = 140
  const particles = Array.from({ length: P }, () => ({ x: Math.random() * W, y: Math.random() * H }))
  const noise = (x: number, y: number, t: number) => Math.sin(x * 0.012 + t * 0.002) + Math.cos(y * 0.015 - t * 0.0017)
  let t = 0
  return () => {
    ctx.fillStyle = 'rgba(14,14,22,0.1)'
    ctx.fillRect(0, 0, W, H)
    particles.forEach((p) => {
      const angle = noise(p.x, p.y, t) * Math.PI
      const nx = p.x + Math.cos(angle) * 1.4
      const ny = p.y + Math.sin(angle) * 1.4
      ctx.strokeStyle = 'rgba(143, 160, 255, 0.5)'
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(nx, ny)
      ctx.stroke()
      p.x = nx
      p.y = ny
      if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
        p.x = Math.random() * W
        p.y = Math.random() * H
      }
    })
    t++
  }
}

// ── Web・アプリ開発班: タグが降ってくる ──
function drawTagRain(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const chars = ['<', '>', '/', '{', '}', ';']
  const cols = Math.max(1, Math.floor(W / 16))
  const drops = new Array(cols).fill(0).map(() => Math.random() * -20)
  ctx.fillStyle = '#0c1a24'
  ctx.fillRect(0, 0, W, H)
  return () => {
    ctx.fillStyle = 'rgba(12, 26, 36, 0.16)'
    ctx.fillRect(0, 0, W, H)
    ctx.fillStyle = '#5ec8e8'
    ctx.font = '14px monospace'
    for (let i = 0; i < cols; i++) {
      const ch = chars[Math.floor(Math.random() * chars.length)]
      ctx.fillText(ch, i * 16, drops[i] * 16)
      if (drops[i] * 16 > H && Math.random() > 0.975) drops[i] = 0
      drops[i]++
    }
  }
}
