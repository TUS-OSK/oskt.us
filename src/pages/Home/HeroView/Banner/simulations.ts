// 背景モチーフのうち、CPUで状態を進めるもの。いずれもトーラス上で動き、
// update(dt) が表示用のバイト列(テクスチャにそのまま転送する)を返す。

export const GRID = 96

const torus = (x: number, y: number) => ((y + GRID) % GRID) * GRID + ((x + GRID) % GRID)
const N = GRID * GRID

/** R: 生きている度合い G: 誕生の光 */
export function createLife() {
  let state = new Uint8Array(N)
  const glow = new Float32Array(N)
  const flash = new Float32Array(N)
  const bytes = new Uint8Array(N * 2)
  let acc = 0
  let generation = 0
  for (let i = 0; i < N; i++) glow[i] = state[i] = Math.random() < 0.2 ? 1 : 0

  const stamp = (cells: number[][]) => {
    const ox = Math.floor(Math.random() * GRID), oy = Math.floor(Math.random() * GRID)
    for (const [x, y] of cells) state[torus(ox + x, oy + y)] = 1
  }
  const step = () => {
    const next = new Uint8Array(N)
    let alive = 0
    for (let y = 0; y < GRID; y++)
      for (let x = 0; x < GRID; x++) {
        let k = 0
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (dx || dy) k += state[torus(x + dx, y + dy)]
        const i = y * GRID + x
        const v = k === 3 || (k === 2 && state[i]) ? 1 : 0
        if (v && !state[i]) flash[i] = 1
        next[i] = v
        alive += v
      }
    state = next
    generation++
    // 盤面が静まったら、グライダーやRペントミノを投げ込んで動きを絶やさない
    if (alive < N * 0.03 || generation % 45 === 0)
      stamp(Math.random() < 0.5 ? [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]] : [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]])
  }
  return {
    update(dt: number) {
      acc += dt
      for (let s = 0; acc >= 0.9 && s < 5; s++) {
        acc -= 0.9
        step()
      }
      const k = 1 - Math.exp(-dt * 3), fk = Math.exp(-dt * 1.5)
      for (let i = 0; i < N; i++) {
        glow[i] += (state[i] - glow[i]) * k
        flash[i] *= fk
        bytes[i * 2] = glow[i] * 255
        bytes[i * 2 + 1] = Math.min(1, flash[i] * 0.7) * 255
      }
      return bytes
    },
  }
}

/** 4状態のターマイト(規則 LLRR)。R: 状態の階調 G: アリの位置 */
export function createAnts() {
  const RULE = [-1, -1, 1, 1] // 状態ごとに 左折(-1)/右折(+1)
  const ANTS = 6
  const STEPS_PER_FRAME = 50 // 1描画あたりの歩数。模様が育つ速さ
  const LIMIT = 36000 // この歩数(1匹あたり、約12秒分)で盤面をまっさらに戻す
  const state = new Uint8Array(N)
  const glow = new Float32Array(N)
  const bytes = new Uint8Array(N * 2)
  let ants: { x: number; y: number; d: number }[] = []
  let walked = 0
  const reset = () => {
    state.fill(0)
    walked = 0
    ants = Array.from({ length: ANTS }, () => ({
      x: Math.floor(Math.random() * GRID),
      y: Math.floor(Math.random() * GRID),
      d: Math.floor(Math.random() * 4),
    }))
  }
  const step = () => {
    for (const a of ants) {
      const i = torus(a.x, a.y)
      a.d = (a.d + RULE[state[i]] + 4) % 4
      state[i] = (state[i] + 1) % RULE.length
      a.x = (a.x + [0, 1, 0, -1][a.d] + GRID) % GRID
      a.y = (a.y + [-1, 0, 1, 0][a.d] + GRID) % GRID
    }
    if (++walked > LIMIT) reset()
  }
  reset()
  for (let i = 0; i < 6000; i++) step() // 開いた瞬間から模様が見えるよう、少し歩かせておく
  for (let i = 0; i < N; i++) glow[i] = state[i] / 3
  return {
    update(dt: number) {
      if (dt > 0) for (let s = 0; s < STEPS_PER_FRAME; s++) step()
      const k = 1 - Math.exp(-dt * 6)
      for (let i = 0; i < N; i++) {
        glow[i] += (state[i] / 3 - glow[i]) * k
        bytes[i * 2] = glow[i] * 255
        bytes[i * 2 + 1] = 0
      }
      for (const a of ants) bytes[torus(a.x, a.y) * 2 + 1] = 255
      return bytes
    },
  }
}

/**
 * 三角格子(鱗文)の反強磁性イジング模型をメトロポリス法で動かす。
 * 隣り合う三角形が逆の濃淡になるのが基底状態(=伝統的な鱗文)で、温度ゆらぎで
 * ところどころ濃淡が入れ替わり、ずれた領域の境界がゆっくり動く。
 * R: 下向き三角形の濃さ G: 上向き三角形の濃さ
 */
export function createIsing() {
  const T = 1.05 // 双対の蜂の巣格子の臨界温度(約1.52)より低く、秩序を保ちつつゆらぐ
  const FLIPS_PER_SECOND = 9000
  const lo = new Int8Array(N), up = new Int8Array(N)
  const glo = new Float32Array(N), gup = new Float32Array(N)
  const bytes = new Uint8Array(N * 2)
  lo.fill(1)
  up.fill(-1)
  // 位相のずれた領域をいくつか作っておき、その境界が動く様子を見せる
  for (let d = 0; d < 7; d++) {
    const cx = Math.random() * GRID, cy = Math.random() * GRID, r = 6 + Math.random() * 12
    for (let y = 0; y < GRID; y++)
      for (let x = 0; x < GRID; x++) {
        const dx = Math.min(Math.abs(x - cx), GRID - Math.abs(x - cx)), dy = Math.min(Math.abs(y - cy), GRID - Math.abs(y - cy))
        if (dx * dx + dy * dy < r * r) {
          lo[y * GRID + x] = -1
          up[y * GRID + x] = 1
        }
      }
  }
  for (let i = 0; i < N; i++) {
    glo[i] = (1 + lo[i]) / 2
    gup[i] = (1 + up[i]) / 2
  }
  let acc = 0
  return {
    update(dt: number) {
      acc += dt * FLIPS_PER_SECOND
      for (; acc >= 1; acc--) {
        const x = Math.floor(Math.random() * GRID), y = Math.floor(Math.random() * GRID), i = y * GRID + x
        if (Math.random() < 0.5) {
          const sum = up[i] + up[torus(x, y - 1)] + up[torus(x - 1, y)]
          const dE = -2 * lo[i] * sum
          if (dE <= 0 || Math.random() < Math.exp(-dE / T)) lo[i] = -lo[i] as -1 | 1
        } else {
          const sum = lo[i] + lo[torus(x, y + 1)] + lo[torus(x + 1, y)]
          const dE = -2 * up[i] * sum
          if (dE <= 0 || Math.random() < Math.exp(-dE / T)) up[i] = -up[i] as -1 | 1
        }
      }
      const k = 1 - Math.exp(-dt * 2.5)
      for (let i = 0; i < N; i++) {
        glo[i] += ((1 + lo[i]) / 2 - glo[i]) * k
        gup[i] += ((1 + up[i]) / 2 - gup[i]) * k
        bytes[i * 2] = glo[i] * 255
        bytes[i * 2 + 1] = gup[i] * 255
      }
      return bytes
    },
  }
}

/**
 * 周期的なパーリンノイズの曲面を、慣性付きの勾配降下法で光の粒が転がり落ちる。
 * height は曲面(シェーダで点描と等高線に使う)、update は軌跡のバッファを返す。
 */
export const GD_HEIGHT = 256
export const GD_TRAIL = 512

export function createGradientDescent() {
  // 周期 period の格子でのパーリンノイズ
  const perlin = (period: number, seed: number) => {
    let s = seed
    const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296) * Math.PI * 2
    const grads = Array.from({ length: period * period }, () => {
      const a = rnd()
      return [Math.cos(a), Math.sin(a)]
    })
    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
    return (x: number, y: number) => {
      const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi
      const g = (ix: number, iy: number, dx: number, dy: number) => {
        const v = grads[(((iy % period) + period) % period) * period + (((ix % period) + period) % period)]
        return v[0] * dx + v[1] * dy
      }
      const u = fade(xf), v = fade(yf)
      const a = g(xi, yi, xf, yf) + u * (g(xi + 1, yi, xf - 1, yf) - g(xi, yi, xf, yf))
      const b = g(xi, yi + 1, xf, yf - 1) + u * (g(xi + 1, yi + 1, xf - 1, yf - 1) - g(xi, yi + 1, xf, yf - 1))
      return a + v * (b - a)
    }
  }
  const S = GD_HEIGHT
  const octaves = [perlin(4, 11), perlin(8, 23), perlin(16, 37)]
  const height = new Float32Array(S * S)
  let lo = Infinity, hi = -Infinity
  for (let y = 0; y < S; y++)
    for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S
      const h = octaves[0](u * 4, v * 4) + 0.45 * octaves[1](u * 8, v * 8) + 0.15 * octaves[2](u * 16, v * 16)
      height[y * S + x] = h
      lo = Math.min(lo, h)
      hi = Math.max(hi, h)
    }
  for (let i = 0; i < S * S; i++) height[i] = (height[i] - lo) / (hi - lo)

  const sample = (u: number, v: number) => {
    const x = (((u % 1) + 1) % 1) * S - 0.5, y = (((v % 1) + 1) % 1) * S - 0.5
    const x0 = Math.floor(x), y0 = Math.floor(y), fx = x - x0, fy = y - y0
    const at = (i: number, j: number) => height[((j + S) % S) * S + ((i + S) % S)]
    return (at(x0, y0) * (1 - fx) + at(x0 + 1, y0) * fx) * (1 - fy) + (at(x0, y0 + 1) * (1 - fx) + at(x0 + 1, y0 + 1) * fx) * fy
  }
  const E = 1 / S
  const grad = (u: number, v: number) => [
    (sample(u + E, v) - sample(u - E, v)) / (2 * E),
    (sample(u, v + E) - sample(u, v - E)) / (2 * E),
  ]

  const T = GD_TRAIL
  const trail = new Float32Array(T * T)
  const bytes = new Uint8Array(T * T)
  const spawn = () => ({ x: Math.random(), y: Math.random(), vx: 0, vy: 0, still: 0, age: 0 })
  const balls = Array.from({ length: 18 }, spawn)
  const splat = (x: number, y: number) => {
    const px = Math.round((((x % 1) + 1) % 1) * T), py = Math.round((((y % 1) + 1) % 1) * T)
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const i = ((py + dy + T) % T) * T + ((px + dx + T) % T)
        trail[i] = Math.max(trail[i], dx || dy ? 0.45 : 1)
      }
  }
  return {
    height,
    update(dt: number) {
      const frames = dt * 60
      const decay = Math.pow(0.992, frames)
      for (let i = 0; i < T * T; i++) trail[i] *= decay
      for (let b = 0; b < balls.length; b++) {
        const p = balls[b]
        const [gx, gy] = grad(p.x, p.y)
        // 慣性付き勾配降下(heavy-ball): v ← μv − η∇h
        const mu = Math.pow(0.93, frames)
        p.vx = p.vx * mu - 2.2e-5 * gx * frames
        p.vy = p.vy * mu - 2.2e-5 * gy * frames
        const steps = Math.max(1, Math.ceil(Math.hypot(p.vx, p.vy) * T))
        for (let s = 1; s <= steps; s++) splat(p.x + (p.vx * s) / steps, p.y + (p.vy * s) / steps)
        p.x += p.vx
        p.y += p.vy
        p.age += dt
        p.still = Math.hypot(p.vx, p.vy) < 4e-5 ? p.still + dt : 0
        // 谷底に落ち着いたら、別の場所から転がし直す
        if (p.still > 1.6 || p.age > 22) balls[b] = spawn()
      }
      for (let i = 0; i < T * T; i++) bytes[i] = Math.min(1, trail[i]) * 255
      return bytes
    },
  }
}
