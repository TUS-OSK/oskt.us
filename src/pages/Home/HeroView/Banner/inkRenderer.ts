// 毛筆ヒーローのWebGL2描画。
//
// インクの法線は、部員がストロークした墨を薄膜方程式 h_t = -div(h^3 grad p) で流した
// 高さから事前に焼き込んである(public/images/hero/ink_a.webp)。ここではカーソルに応じた
// ライティングだけを毎フレーム計算する。
//
// 背景は奥へ倒れた遠い平面として描き、(1)霧で沈める (2)墨の影を遠くに大きくぼかして落とす
// (3)カーソルに対して墨と背景を逆方向に動かす、の3つで墨を手前に浮かせている。
// 背景のモチーフは班ごとに1つ(../teams.ts)。切り替え時はクロスフェードする。
//
// テクスチャの焼き込みは OSK-hisyochan/resources/workspace/ink_sim/{bake_web,bake_bg}.py

import type { BackgroundMode } from '../teams'
import { ANT_GRID, createAnts, createGradientDescent, createIsing, createLife, GD_HEIGHT, type GdStyle, GRID } from './simulations'

export interface InkTextures {
  inkA: string // RG: 平方根圧縮した法線xy / B: 字形マスク
  inkB: string // R: ラメ / G: 明度 / B: 箔の向き
  soft: string // 字形マスクを外側40%ずつ余白付きでぼかしたもの(R: 影 / G: 後光)
  tropical: string // R: 線までの距離 / B: 点灯のムラ
  trails: string // RG: 軌跡の位相(16bit) / B: 軌跡の太さ
}

interface Options {
  canvas: HTMLCanvasElement
  frame: HTMLElement // 墨を置く位置はCSSが決め、このDOMの矩形に合わせて描く
  textures: InkTextures
  mode: BackgroundMode
  onReady: () => void
}

export interface InkRenderer {
  setMode: (mode: BackgroundMode) => void
  destroy: () => void
}

const TRAIL_CYCLE = 22 // bake_bg.py の CYCLE と一致させる
const FADE_SECONDS = 0.9
const MODES: readonly BackgroundMode[] = ['gd', 'ant', 'ising', 'life', 'seigaiha', 'tropical']
const shaderMode = (m: BackgroundMode) => (m === 'gd-smooth' ? 0 : MODES.indexOf(m))
const TRAIL = 1024 // 勾配降下の軌跡を描くテクスチャの解像度(曲面1周期あたり)

const VERTEX = `#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }`

const FRAGMENT = `#version 300 es
precision highp float;
uniform sampler2D uA, uB, uS, uT, uR, uLife, uAnt, uIs, uH, uGT;
uniform vec2 uRes, uLight, uPar;
uniform vec4 uRect;
uniform float uTime, uDpr, uFade;
uniform int uMode0, uMode1;
out vec4 o;

const vec3 BG = vec3(.05, .05, .07);
const vec3 SHADOW = vec3(.20, .21, .26), LIT = vec3(1., 1., 1.02);
const vec3 LINE = vec3(.28, .78, 1.);
const vec3 SPARK = vec3(.55, .95, 1.);
const float TILT = 1.05;           // 背景面の傾き tan(θ)。θ≈46°で上ほど遠い
const float SOFT_PAD = .4;
const float CYCLE = ${TRAIL_CYCLE}.;
const float GRID = ${GRID}.;

// 距離dの線を、画面上でほぼ1pxの太さになるようにアンチエイリアスする
float hair(float d, float w) {
  float fw = max(fwidth(d), 1e-5);
  return (1. - smoothstep(w, w + 1.5 * fw, d)) * clamp(2.2 * w / fw, .25, 1.);
}

// 青海波: 半径1の円を横2間隔・縦0.5間隔で互い違いに並べ、下の段ほど手前に重ねる
float seigaihaD(vec2 p) {
  float j0 = floor(p.y / .5);
  for (int k = -2; k <= 2; k++) {
    float j = j0 + float(k);
    float off = mod(j, 2.);
    vec2 c = vec2(2. * floor((p.x - off) / 2. + .5) + off, j * .5);
    float r = length(p - c);
    if (r < 1.) {
      float x = r * 4.;
      return min(fract(x), 1. - fract(x)) * .25;
    }
  }
  return 1.;
}

vec3 trailGlow = vec3(0.);

// 0: 機械学習 / 勾配降下法
// 曲面は高さに比例して画面上方へ持ち上がって見える。画素ごとに、手前(画面下)側から
// 奥へ向かって高さ場をレイマーチし、最初にぶつかった点を見えている点とする(手前の山が奥を隠す)
const float RELIEF = .14;
vec3 gradientDescent(vec2 uv) {
  // 粗く進めて交差を見つけ、前後の区間を二分探索で詰める(段々の縞を消す)
  float lo = 0., hi = 1.;
  for (int i = 1; i <= 32; i++) {
    float k = float(i) / 32.;
    vec2 c = uv - vec2(0., RELIEF * (1. - k));
    if (c.y + texture(uH, c).r * RELIEF >= uv.y) { hi = k; break; }
    lo = k;
  }
  for (int i = 0; i < 6; i++) {
    float k = .5 * (lo + hi);
    vec2 c = uv - vec2(0., RELIEF * (1. - k));
    if (c.y + texture(uH, c).r * RELIEF >= uv.y) hi = k; else lo = k;
  }
  vec2 q = uv - vec2(0., RELIEF * (1. - hi));
  float h = texture(uH, q).r;
  // 方眼が起伏に沿って曲がり、高いところほど明るい
  vec2 f = abs(fract(q * 40.) - .5);
  float mesh = max(hair(.5 - f.x, .025), hair(.5 - f.y, .025));
  trailGlow = SPARK * texture(uGT, q).r * .9;
  return LINE * mesh * (.04 + .9 * h * h);
}

// 1: 競技プログラミング / ラングトンのアリ, 3: コンピュータサイエンス / ライフゲーム
vec3 cells(vec2 uv, sampler2D grid, bool ant) {
  // アリは正方形の領域が育つ様子を丸ごと見せたいので、マスを細かくする
  vec2 g = uv * (ant ? 105. : 40.);
  vec2 v = texelFetch(grid, ivec2(mod(floor(g), ant ? ${ANT_GRID}. : GRID)), 0).rg;
  vec2 f = abs(fract(g) - .5);
  float sq = 1. - smoothstep(.30, .30 + 1.5 * fwidth(g.x), max(f.x, f.y));
  float frame = hair(.5 - max(f.x, f.y), .02) * .10;
  if (ant) {
    // 4状態を階調に。アリ自身は白く光る
    return LINE * (frame + sq * v.r * .8) + vec3(.8, .98, 1.) * sq * v.g * 1.2;
  }
  return LINE * (frame + sq * (v.r * .55 + v.g * .9)) + vec3(.7, .97, 1.) * sq * v.g * .35;
}

// 2: 数理統計 / 反強磁性イジング模型の鱗文。格子周期で歪ませ、エッシャー風に噛み合う形にする
vec3 ising(vec2 uv) {
  const float S3 = 1.7320508;
  vec2 p = uv * 26.;
  vec2 s = vec2(p.x - p.y / S3, p.y * 2. / S3);
  s += .085 * vec2(sin(6.2831853 * s.y), sin(6.2831853 * s.x));
  vec2 f = fract(s);
  bool upper = f.x + f.y > 1.;
  vec2 v = texelFetch(uIs, ivec2(mod(floor(s), GRID)), 0).rg;
  float shade = upper ? v.g : v.r;
  float d = upper ? min(min(1. - f.x, 1. - f.y), f.x + f.y - 1.) : min(min(f.x, f.y), 1. - f.x - f.y);
  float edge = hair(d, .02);
  float inner = hair(abs(d - .16), .012);
  vec3 tone = mix(vec3(.025, .05, .09), vec3(.10, .24, .38), shade);
  return tone * 1.5 + LINE * (edge * .30 + inner * .10 * shade);
}

// 4: 3DCG / 青海波。光の帯がゆっくり掃く
vec3 seigaiha(vec2 uv) {
  float l = hair(seigaihaD(uv * 22.), .035);
  float sweep = pow(.5 + .5 * sin(dot(uv, vec2(1., .55)) * 4. - uTime * .5), 6.);
  return LINE * l * (.22 + .55 * sweep) + vec3(.02, .05, .09) * .6;
}

// 5: Web・アプリ開発 / トロピカル曲線の網目と、その上を走るパケットの光
vec3 tropical(vec2 uv) {
  float d = texture(uT, uv).r * 24.;
  float core = hair(d, .55);
  float glow = exp(-d * d / 90.) * .7;
  float reveal = .05 + smoothstep(.42, .72, texture(uT, uv * .5 + uTime * vec2(-.005, .0035)).b);
  vec4 tr = texelFetch(uR, ivec2(mod(floor(uv * 2048.), 2048.)), 0);
  if (tr.b > 0.) {
    float ph = (tr.r * 65280. + tr.g * 255.) / 65535.;
    float age = fract(uTime / CYCLE - ph) * CYCLE;
    trailGlow = SPARK * tr.b * (exp(-age * 1.4) * 1.6 + exp(-age * 12.) * 2.5) * step(age, 3.);
  }
  return LINE * (core * .62 + glow * .34) * reveal;
}

vec3 pattern(int mode, vec2 uv) {
  trailGlow = vec3(0.);
  if (mode == 0) return gradientDescent(uv);
  if (mode == 1) return cells(uv, uAnt, true);
  if (mode == 2) return ising(uv);
  if (mode == 3) return cells(uv, uLife, false);
  if (mode == 4) return seigaiha(uv);
  return tropical(uv);
}

vec3 backdrop(vec2 px, vec2 inkUv) {
  vec2 p = (px - .5 * uRes) / uRes.y;
  p.y = -p.y;
  p -= uPar * vec2(.018, -.018);
  // 奥へ倒れた平面への透視投影。t は奥行き(上へ行くほど大きい)
  float t = 1. / max(1. - p.y * TILT, .18);
  vec2 plane = vec2(p.x, p.y * 1.45) * t;
  vec2 uv = plane * .75 + uTime * vec2(.0035, .0018);
  float fog = mix(1., .10, smoothstep(.85, 2.6, t));

  vec2 inkCenter = uRect.xy + .5 * uRect.zw;
  float r = length((px - inkCenter) / uRect.w);
  float nearInk = .3 + .7 * exp(-r * r * 2.);

  // 切り替え中は前後2つのモチーフを重ねる(uMode0 → uMode1)
  vec3 pat = vec3(0.), spark = vec3(0.);
  if (uFade < 1.) {
    pat = pattern(uMode0, uv) * (1. - uFade);
    spark = trailGlow * (1. - uFade);
  }
  if (uFade > 0.) {
    pat += pattern(uMode1, uv) * uFade;
    spark += trailGlow * uFade;
  }

  vec3 col = BG * mix(1., .55, smoothstep(.45, 1.05, length(p)));
  vec2 softUv = (inkUv + SOFT_PAD) / (1. + 2. * SOFT_PAD);
  col += vec3(.05, .17, .27) * texture(uS, softUv).g * .8;
  // 光の軌跡は字から離れても見えるよう、近さによる減衰をかけずに足す
  col += pat * fog * nearInk * .55 + spark * mix(1., .35, smoothstep(.85, 2.6, t));
  // 遠い面に落ちる影。光と反対側へ大きくずれる
  vec2 castUv = (inkUv + uLight * vec2(.05, .035) + SOFT_PAD) / (1. + 2. * SOFT_PAD);
  col *= 1. - .78 * clamp(texture(uS, castUv).r * 1.5, 0., 1.);
  return col;
}

void main() {
  vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 inkUv = (px - uRect.xy - uPar * vec2(9., 7.) * uDpr) / uRect.zw;
  vec3 color = backdrop(px, inkUv);

  // 分岐の外で常にサンプルする(分岐内だと2x2画素の微分が未定義になり、矩形の縁でミップが乱れる)
  vec4 A = texture(uA, inkUv), B_ = texture(uB, inkUv);
  vec2 inside = step(vec2(0.), inkUv) * step(inkUv, vec2(1.));
  float m = A.b * inside.x * inside.y;
  vec2 c = (A.rg * 255. - 127.) / 127.;
  vec3 N = normalize(vec3(sign(c) * c * c * 4., 1.));
  vec3 L = normalize(vec3(uLight.x, -uLight.y, .55)), V = vec3(0., 0., 1.), Hv = normalize(L + V);
  float d = pow(clamp(dot(N, L) * .5 + .5, 0., 1.), 1.6), sp = pow(max(dot(N, Hv), 0.), 60.);
  vec3 ink = (mix(SHADOW, LIT, d) + (LIT - SHADOW) * sp * .9) * B_.g * 1.2;
  float th = B_.b * 6.2831853;
  vec3 nf = normalize(N + vec3(cos(th), sin(th), 0.) * .55);
  float s = pow(max(dot(nf, Hv), 0.), 70.);
  ink = mix(ink, mix(vec3(.10, .72, .92), vec3(.78, 1., 1.), clamp(s * 1.5, 0., 1.)), B_.r * .95);
  o = vec4(mix(color, ink, m), 1.);
}`

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })

/** WebGL2が使えない・画像が読めない場合は何もせず、呼び出し側の静止画が残る */
export function startInkRenderer({ canvas, frame, textures, mode: initialMode, onReady }: Options): InkRenderer {
  const noop: InkRenderer = { setMode: () => undefined, destroy: () => undefined }
  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'low-power' })
  if (!gl) return noop

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let destroyed = false
  let raf = 0
  let render: (() => void) | null = null
  let visible = true
  let current: BackgroundMode = initialMode
  let previous: BackgroundMode = initialMode
  let fadeStart = -Infinity

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type) as WebGLShader
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(shader))
    return shader
  }
  const program = gl.createProgram() as WebGLProgram
  gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX))
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT))
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return noop
  gl.useProgram(program)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const position = gl.getAttribLocation(program, 'a')
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
  const uniform = (name: string) => gl.getUniformLocation(program, name)
  const anisotropy = gl.getExtension('EXT_texture_filter_anisotropic')
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)

  const texture = (unit: number, name: string, filter: number, wrap: number) => {
    gl.activeTexture(gl.TEXTURE0 + unit)
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter === gl.NEAREST ? gl.NEAREST : gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap)
    gl.uniform1i(uniform(name), unit)
  }
  const upload = (unit: number, image: HTMLImageElement, wrap: number, name: string, mip = true) => {
    texture(unit, name, mip ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST, wrap)
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    if (mip) gl.generateMipmap(gl.TEXTURE_2D)
    if (anisotropy && mip && wrap === gl.REPEAT)
      gl.texParameterf(gl.TEXTURE_2D, anisotropy.TEXTURE_MAX_ANISOTROPY_EXT, 8)
  }

  // CPUで進めるモチーフ。初めて表示されたときに作り、以後は状態を保ったまま続きから動く
  const blank = (unit: number, name: string, filter: number) => {
    texture(unit, name, filter, gl.REPEAT)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, 1, 1, 0, gl.RED, gl.UNSIGNED_BYTE, new Uint8Array(1))
  }
  blank(5, 'uLife', gl.NEAREST)
  blank(6, 'uAnt', gl.NEAREST)
  blank(7, 'uIs', gl.NEAREST)
  blank(8, 'uH', gl.LINEAR)
  blank(9, 'uGT', gl.LINEAR)

  const gridSim = (unit: number, update: (dt: number) => Uint8Array, size = GRID) => {
    let allocated = false
    return (dt: number) => {
      const bytes = update(dt)
      gl.activeTexture(gl.TEXTURE0 + unit)
      if (allocated) gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, size, size, gl.RG, gl.UNSIGNED_BYTE, bytes)
      else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG8, size, size, 0, gl.RG, gl.UNSIGNED_BYTE, bytes)
      allocated = true
    }
  }

  // 勾配降下の軌跡はGPUで描く: 前フレームの残像を薄めて写し(decay)、今フレームの線分を
  // アンチエイリアス付きで重ねる。2枚のテクスチャを交互に読み書きする
  let trailPass: ((segments: number[], decay: number) => void) | null = null
  const createTrailPass = () => {
    const prog = (vs: string, fs: string) => {
      const p = gl.createProgram() as WebGLProgram
      gl.attachShader(p, compile(gl.VERTEX_SHADER, vs))
      gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs))
      gl.linkProgram(p)
      return p
    }
    const decayProg = prog(
      VERTEX,
      `#version 300 es
precision highp float;
uniform sampler2D uPrev; uniform float uDecay; out vec4 o;
void main() { o = texture(uPrev, gl_FragCoord.xy / ${TRAIL}.) * uDecay; }`,
    )
    const segProg = prog(
      `#version 300 es
in vec2 aPos; in vec4 aSeg; in vec2 aStyle;
flat out vec4 vSeg; flat out vec2 vStyle; out vec2 vPx;
void main() { vSeg = aSeg; vStyle = aStyle; vPx = aPos; gl_Position = vec4(aPos / ${TRAIL}. * 2. - 1., 0., 1.); }`,
      `#version 300 es
precision highp float;
flat in vec4 vSeg; flat in vec2 vStyle; in vec2 vPx; out vec4 o;
void main() {
  vec2 pa = vPx - vSeg.xy, ba = vSeg.zw - vSeg.xy;
  float d = length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0., 1.));
  o = vec4(vStyle.y * (1. - smoothstep(vStyle.x - .75, vStyle.x + .75, d)));
}`,
    )
    const textures = [0, 1].map(() => {
      const t = gl.createTexture() as WebGLTexture
      gl.activeTexture(gl.TEXTURE10)
      gl.bindTexture(gl.TEXTURE_2D, t)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, TRAIL, TRAIL, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
      return t
    })
    const framebuffers = textures.map((t) => {
      const fb = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      return fb
    })
    const decayVao = gl.createVertexArray()
    gl.bindVertexArray(decayVao)
    const fullscreen = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, fullscreen)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aDecay = gl.getAttribLocation(decayProg, 'a')
    gl.enableVertexAttribArray(aDecay)
    gl.vertexAttribPointer(aDecay, 2, gl.FLOAT, false, 0, 0)
    const segVao = gl.createVertexArray()
    gl.bindVertexArray(segVao)
    const segBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, segBuffer)
    for (const [name, size, offset] of [['aPos', 2, 0], ['aSeg', 4, 2], ['aStyle', 2, 6]] as const) {
      const loc = gl.getAttribLocation(segProg, name)
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 32, offset * 4)
    }
    gl.bindVertexArray(null)
    let cur = 0
    return (segments: number[], decay: number) => {
      const next = 1 - cur
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[next])
      gl.viewport(0, 0, TRAIL, TRAIL)
      gl.useProgram(decayProg)
      gl.bindVertexArray(decayVao)
      gl.activeTexture(gl.TEXTURE10)
      gl.bindTexture(gl.TEXTURE_2D, textures[cur])
      gl.uniform1i(gl.getUniformLocation(decayProg, 'uPrev'), 10)
      gl.uniform1f(gl.getUniformLocation(decayProg, 'uDecay'), decay)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      // 線分ごとに太さ分ふくらませた四角形を、タイルの継ぎ目をまたぐ分も含めて描く
      const verts: number[] = []
      for (let i = 0; i < segments.length; i += 6) {
        const [u0, v0, u1, v1, w, intensity] = segments.slice(i, i + 6)
        const ox = Math.floor(u0), oy = Math.floor(v0)
        const x0 = (u0 - ox) * TRAIL, y0 = (v0 - oy) * TRAIL, x1 = (u1 - ox) * TRAIL, y1 = (v1 - oy) * TRAIL
        const pad = w + 2
        for (const sx of [-TRAIL, 0, TRAIL])
          for (const sy of [-TRAIL, 0, TRAIL]) {
            const l = Math.min(x0, x1) + sx - pad, r = Math.max(x0, x1) + sx + pad
            const b = Math.min(y0, y1) + sy - pad, t = Math.max(y0, y1) + sy + pad
            if (r < 0 || l > TRAIL || t < 0 || b > TRAIL) continue
            const seg = [x0 + sx, y0 + sy, x1 + sx, y1 + sy, w, intensity]
            for (const [x, y] of [[l, b], [r, b], [l, t], [l, t], [r, b], [r, t]]) verts.push(x, y, ...seg)
          }
      }
      if (verts.length) {
        gl.useProgram(segProg)
        gl.bindVertexArray(segVao)
        gl.bindBuffer(gl.ARRAY_BUFFER, segBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.DYNAMIC_DRAW)
        gl.enable(gl.BLEND)
        gl.blendEquation(gl.MAX)
        gl.drawArrays(gl.TRIANGLES, 0, verts.length / 8)
        gl.disable(gl.BLEND)
      }
      cur = next
      gl.activeTexture(gl.TEXTURE9)
      gl.bindTexture(gl.TEXTURE_2D, textures[cur])
    }
  }
  const gdSim = (style: GdStyle) => {
    const gd = createGradientDescent(style)
    gl.activeTexture(gl.TEXTURE8)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.R16F, GD_HEIGHT, GD_HEIGHT, 0, gl.RED, gl.FLOAT, gd.height)
    trailPass ??= createTrailPass()
    return (dt: number) => {
      const { segments, decay } = gd.update(dt)
      trailPass?.(segments, decay)
    }
  }
  const factories: Record<BackgroundMode, (() => (dt: number) => void) | null> = {
    life: () => gridSim(5, createLife().update),
    ant: () => gridSim(6, createAnts().update, ANT_GRID),
    ising: () => gridSim(7, createIsing().update),
    gd: () => gdSim('step'),
    'gd-smooth': () => gdSim('smooth'),
    seigaiha: null,
    tropical: null,
  }
  const sims: Partial<Record<BackgroundMode, (dt: number) => void>> = {}
  const stepSim = (mode: BackgroundMode, dt: number) => {
    const factory = factories[mode]
    if (!factory) return
    const step = (sims[mode] ??= factory())
    step(dt)
  }

  const light = { x: -0.6, y: -0.7, tx: -0.6, ty: -0.7 }
  const parallax = { x: 0, y: 0, tx: 0, ty: 0 }
  let pointerAt = -Infinity
  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return
    const r = frame.getBoundingClientRect()
    const clamp = (v: number) => Math.max(-1.8, Math.min(1.8, v))
    light.tx = clamp((event.clientX - (r.left + r.width / 2)) / (r.height / 2))
    light.ty = clamp((event.clientY - (r.top + r.height / 2)) / (r.height / 2))
    parallax.tx = (event.clientX / window.innerWidth) * 2 - 1
    parallax.ty = (event.clientY / window.innerHeight) * 2 - 1
    pointerAt = performance.now()
  }

  const resize = () => {
    gl.useProgram(program)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const bounds = canvas.getBoundingClientRect()
    canvas.width = Math.max(1, Math.round(bounds.width * dpr))
    canvas.height = Math.max(1, Math.round(bounds.height * dpr))
    gl.viewport(0, 0, canvas.width, canvas.height)
    const r = frame.getBoundingClientRect()
    gl.uniform2f(uniform('uRes'), canvas.width, canvas.height)
    gl.uniform1f(uniform('uDpr'), dpr)
    gl.uniform4f(
      uniform('uRect'),
      (r.left - bounds.left) * dpr,
      (r.top - bounds.top) * dpr,
      r.width * dpr,
      r.height * dpr,
    )
    render?.()
  }
  const observer = new ResizeObserver(resize)

  const fadeAt = (now: number) => {
    const t = Math.min(1, Math.max(0, (now - fadeStart) / 1000 / FADE_SECONDS))
    return t * t * (3 - 2 * t)
  }
  const draw = (now: number) => {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.useProgram(program)
    gl.bindVertexArray(null)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform1f(uniform('uTime'), now / 1000)
    gl.uniform2f(uniform('uLight'), light.x, light.y)
    gl.uniform2f(uniform('uPar'), parallax.x, parallax.y)
    gl.uniform1i(uniform('uMode0'), shaderMode(previous))
    gl.uniform1i(uniform('uMode1'), shaderMode(current))
    gl.uniform1f(uniform('uFade'), fadeAt(now))
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  let last = performance.now()
  const tick = (now: number) => {
    raf = 0
    if (destroyed || !visible || document.hidden) return
    const dt = Math.min(0.1, (now - last) / 1000)
    last = now
    // カーソルが無い(スマホ)か2.5秒止まっていたら、光がゆっくり巡る
    if (now - pointerAt > 2500) {
      const t = now / 1000
      light.tx = -0.55 + 0.45 * Math.sin(t * 0.23)
      light.ty = -0.6 + 0.35 * Math.cos(t * 0.31)
      parallax.tx = 0
      parallax.ty = 0
    }
    const k = 1 - Math.exp(-dt * 5)
    light.x += (light.tx - light.x) * k
    light.y += (light.ty - light.y) * k
    parallax.x += (parallax.tx - parallax.x) * k
    parallax.y += (parallax.ty - parallax.y) * k
    stepSim(current, dt)
    if (previous !== current && fadeAt(now) < 1) stepSim(previous, dt)
    draw(now)
    raf = requestAnimationFrame(tick)
  }
  const resume = () => {
    if (!raf && !destroyed && !reduceMotion && render) {
      last = performance.now()
      raf = requestAnimationFrame(tick)
    }
  }
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) resume()
  })
  const onVisibility = () => {
    if (!document.hidden) resume()
  }
  const onContextLost = (event: Event) => {
    event.preventDefault()
    destroyed = true
    canvas.style.display = 'none'
  }

  canvas.addEventListener('webglcontextlost', onContextLost)
  Promise.all([textures.inkA, textures.inkB, textures.soft, textures.tropical, textures.trails].map(loadImage))
    .then(([inkA, inkB, soft, tropical, trails]) => {
      if (destroyed) return
      upload(0, inkA, gl.CLAMP_TO_EDGE, 'uA')
      upload(1, inkB, gl.CLAMP_TO_EDGE, 'uB')
      upload(2, soft, gl.CLAMP_TO_EDGE, 'uS')
      upload(3, tropical, gl.REPEAT, 'uT')
      upload(4, trails, gl.REPEAT, 'uR', false)
      render = () => {
        stepSim(current, 0)
        draw(reduceMotion ? 0 : performance.now())
      }
      resize()
      observer.observe(canvas)
      observer.observe(frame)
      intersection.observe(canvas)
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      document.addEventListener('visibilitychange', onVisibility)
      render()
      resume()
      onReady()
    })
    .catch(() => undefined) // 読み込めなければ静止画のまま

  return {
    setMode(next) {
      if (next === current) return
      // アリは出番が来るたびに更地から育てる
      if (next === 'ant') delete sims.ant
      const now = performance.now()
      // フェード途中で次が来たら、いま濃い方を「前」として引き継ぐ
      if (fadeAt(now) >= 0.5) previous = current
      current = next
      fadeStart = reduceMotion ? -Infinity : now
      render?.()
    },
    destroy() {
      destroyed = true
      if (raf) cancelAnimationFrame(raf)
      observer.disconnect()
      intersection.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('webglcontextlost', onContextLost)
    },
  }
}
