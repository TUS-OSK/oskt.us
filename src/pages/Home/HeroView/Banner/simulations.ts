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

/**
 * 128状態のターマイト(部員提供の規則)。1匹から正方形の領域が育ち、その中に
 * 斜めのハイウェイと入り組んだ塊が現れる。R: 状態の階調 G: アリの位置
 */
export const ANT_GRID = 192
export const ANT_SCALE = 150 // 背景の平面1単位あたりのマス数

/**
 * start: 歩き始めるマス(盤面の外なら折り返す) / delay: 背景の切り替えが終わるまで待つ秒数
 * still: 動きを減らす設定。育ちきった盤面を1枚だけ見せる
 */
export function createAnts(start: [number, number] = [0, 0], delay = 0, still = false) {
  // 状態ごとに 左折(-1)/右折(+1)
  // prettier-ignore
  const RULE = [-1,1,1,1,1,1,-1,-1,-1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,1,1,-1,1,1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,-1,-1,1,1,-1,1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,1,-1,-1,1,1,1,-1,1,-1,1,1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,1,-1,-1]
  const G = ANT_GRID, n = G * G
  // 1描画あたりの歩数を c·n(n: 描き始めてからのフレーム数)で増やす。累計歩数は n² に比例し、
  // 正方形の一辺 ∝ √歩数 が時間に比例して育つので、成長の速さが一定に見える。
  // 待ち時間のあと約2.8秒(170フレーム)で盤面が埋まるよう c を決めている
  const C = 16
  const LIMIT = 230000 // 盤面がほぼ埋まる歩数。ここで少し見せてから最初からやり直す
  const HOLD_SECONDS = 2.5
  const at = (x: number, y: number) => ((y + G) % G) * G + ((x + G) % G)
  // 大半のマスは状態2前後で埋まる「地」になる。それより上の状態だけを明るくして模様を浮かせる
  const tone = (v: number) => (v ? 0.1 + 0.9 * Math.min(1, Math.max(0, (v - 2) / 28)) : 0)
  const state = new Uint8Array(n)
  const glow = new Float32Array(n)
  const bytes = new Uint8Array(n * 2)
  const ant = { x: 0, y: 0, d: 0 }
  let walked = 0
  let frames = 0
  let held = 0
  let waited = 0
  const reset = () => {
    state.fill(0)
    walked = 0
    frames = 0
    held = 0
    const wrap = (v: number) => ((Math.floor(v) % G) + G) % G
    Object.assign(ant, { x: wrap(start[0]), y: wrap(start[1]), d: 0 })
  }
  const step = () => {
    const i = at(ant.x, ant.y)
    ant.d = (ant.d + RULE[state[i]] + 4) % 4
    state[i] = (state[i] + 1) % RULE.length
    ant.x = (ant.x + [0, 1, 0, -1][ant.d] + G) % G
    ant.y = (ant.y + [-1, 0, 1, 0][ant.d] + G) % G
    walked++
  }
  reset()
  return {
    update(dt: number) {
      if (dt > 0) {
        if ((waited += dt) < delay) {
          // 背景のフェードが終わるまでは1歩も進めず、1マス目から見せる
        } else if (walked < LIMIT) {
          frames += dt * 60
          const steps = Math.min(LIMIT - walked, Math.ceil(C * frames * dt * 60))
          for (let s = 0; s < steps; s++) step()
        } else if ((held += dt) > HOLD_SECONDS) reset()
      } else if (still) {
        // 動きを減らす設定の人には、育ちきった盤面を1枚だけ見せる
        // (dt=0 は切り替え直後の1枚描きでも来るので、そこで育ちきらせてはいけない)
        while (walked < LIMIT) step()
      }
      const k = dt > 0 ? 1 - Math.exp(-dt * 12) : 1
      for (let i = 0; i < n; i++) {
        glow[i] += (tone(state[i]) - glow[i]) * k
        bytes[i * 2] = glow[i] * 255
        bytes[i * 2 + 1] = 0
      }
      bytes[at(ant.x, ant.y) * 2 + 1] = 255
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
 * height は曲面(シェーダで方眼と陰影に使う)。update は今フレームに描き足す線分を返し、
 * 軌跡の残像はGPU側で decay を掛けて薄めていく。
 *  step:   0.3秒ごとに大きく1歩進み、反復点に点を打つ(最適化の反復が見える)
 *  smooth: 毎フレーム小さく進み、なめらかな軌跡を描く
 */
export const GD_HEIGHT = 256
export type GdStyle = 'step' | 'smooth'

export interface GdFrame {
  segments: number[] // [x0, y0, x1, y1, 太さ(テクスチャpx), 明るさ] の繰り返し。座標は曲面の周期単位
  decay: number // 今フレームの残像の減衰率
}

export function createGradientDescent(style: GdStyle) {
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

  const STEP_SECONDS = 0.3
  const spawn = () => ({
    x: Math.random(),
    y: Math.random(),
    vx: 0,
    vy: 0,
    still: 0,
    age: 0,
    clock: 0,
    target: null as null | { x0: number; y0: number; x1: number; y1: number },
  })
  const balls = Array.from({ length: style === 'step' ? 14 : 18 }, spawn)
  return {
    height,
    update(dt: number): GdFrame {
      const segments: number[] = []
      if (style === 'smooth') {
        const frames = dt * 60
        for (let b = 0; b < balls.length; b++) {
          const p = balls[b]
          const [gx, gy] = grad(p.x, p.y)
          // 慣性付き勾配降下(heavy-ball): v ← μv − η∇h
          const mu = Math.pow(0.93, frames)
          p.vx = p.vx * mu - 2.2e-5 * gx * frames
          p.vy = p.vy * mu - 2.2e-5 * gy * frames
          segments.push(p.x, p.y, p.x + p.vx, p.y + p.vy, 0.6, 0.7)
          p.x += p.vx
          p.y += p.vy
          p.age += dt
          p.still = Math.hypot(p.vx, p.vy) < 4e-5 ? p.still + dt : 0
          if (p.still > 1.6 || p.age > 22) balls[b] = spawn() // 谷底に落ち着いたら別の場所から転がし直す
        }
        return { segments, decay: Math.pow(0.992, frames) }
      }
      // 0.3秒ごとに1歩。次の反復点までは先頭がイージングで滑り、着いたら点を打つ
      for (let b = 0; b < balls.length; b++) {
        const p = balls[b]
        p.age += dt
        if (!p.target) {
          const [gx, gy] = grad(p.x, p.y)
          p.vx = p.vx * 0.55 - 0.0045 * gx
          p.vy = p.vy * 0.55 - 0.0045 * gy
          p.target = { x0: p.x, y0: p.y, x1: p.x + p.vx, y1: p.y + p.vy }
          p.clock = 0
        }
        const t = p.target
        const ease = (u: number) => 1 - Math.pow(1 - Math.min(1, u), 3)
        const a0 = ease(p.clock / STEP_SECONDS)
        p.clock += dt
        const a1 = ease(p.clock / STEP_SECONDS)
        segments.push(t.x0 + (t.x1 - t.x0) * a0, t.y0 + (t.y1 - t.y0) * a0, t.x0 + (t.x1 - t.x0) * a1, t.y0 + (t.y1 - t.y0) * a1, 0.6, 0.55)
        if (p.clock >= STEP_SECONDS) {
          p.x = t.x1
          p.y = t.y1
          segments.push(p.x, p.y, p.x, p.y, 1.4, 0.8) // 反復点
          p.target = null
          p.still = Math.hypot(p.vx, p.vy) < 0.0025 ? p.still + 1 : 0
          if (p.still > 4 || p.age > 30) balls[b] = spawn()
        }
      }
      return { segments, decay: Math.pow(0.985, dt * 60) }
    },
  }
}
