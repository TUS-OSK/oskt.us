// 毛筆ヒーローのWebGL2描画。
//
// インクの法線は、部員がストロークした墨を薄膜方程式 h_t = -div(h^3 grad p) で流した
// 高さから事前に焼き込んである(public/images/hero/ink_a.webp)。ここではカーソルに応じた
// ライティングだけを毎フレーム計算する。
//
// 背景は奥へ倒れた遠い平面として描き、(1)霧で沈める (2)墨の影を遠くに大きくぼかして落とす
// (3)カーソルに対して墨と背景を逆方向に動かす、の3つで墨を手前に浮かせている。
// 背景の柄は BackgroundMode で切り替える(役員で比較検討中のため、PRプレビューでは切替UIを出す)。
//
// テクスチャの焼き込みは OSK-hisyochan/resources/workspace/ink_sim/{bake_web,bake_bg}.py

export const BACKGROUND_MODES = [
  { id: 'tropical', label: 'トロピカル曲線' },
  { id: 'four', label: '四色和柄' },
  { id: 'seigaiha', label: '青海波' },
  { id: 'life', label: 'ライフゲーム' },
  { id: 'ant', label: 'ラングトンのアリ' },
] as const
export type BackgroundMode = (typeof BACKGROUND_MODES)[number]['id']

export interface InkTextures {
  inkA: string // RG: 平方根圧縮した法線xy / B: 字形マスク
  inkB: string // R: ラメ / G: 明度 / B: 箔の向き
  soft: string // 字形マスクを外側40%ずつ余白付きでぼかしたもの(R: 影 / G: 後光)
  tropical: string // R: 線までの距離 / G: 四色塗り分け / B: 点灯のムラ
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

const GRID = 96 // ライフゲーム・アリの盤面(トーラス)
const TRAIL_CYCLE = 22 // bake_bg.py の CYCLE と一致させる

const VERTEX = `#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }`

const FRAGMENT = `#version 300 es
precision highp float;
uniform sampler2D uA, uB, uS, uT, uR, uG;
uniform vec2 uRes, uLight, uPar;
uniform vec4 uRect;
uniform float uTime, uDpr;
uniform int uMode;
out vec4 o;

const vec3 BG = vec3(.05, .05, .07);
const vec3 SHADOW = vec3(.20, .21, .26), LIT = vec3(1., 1., 1.02);
const vec3 LINE = vec3(.28, .78, 1.);
const float TILT = 1.05;           // 背景面の傾き tan(θ)。θ≈46°で上ほど遠い
const float SOFT_PAD = .4;
const float CYCLE = ${TRAIL_CYCLE}.;
const float GRID = ${GRID}.;

// 距離dの線を、画面上でほぼ1pxの太さになるようにアンチエイリアスする
float hair(float d, float w) {
  float fw = max(fwidth(d), 1e-5);
  return (1. - smoothstep(w, w + 1.5 * fw, d)) * clamp(2.2 * w / fw, .25, 1.);
}

// --- 和柄。いずれも「線までの距離」を返す(柄の1単位あたり)
float seigaihaD(vec2 p) {
  // 半径1の円を横2間隔・縦0.5間隔で互い違いに並べ、下の段ほど手前に重ねる
  float j0 = floor(p.y / .5);
  for (int k = -2; k <= 2; k++) {
    float j = j0 + float(k);
    float off = mod(j, 2.);
    vec2 c = vec2(2. * floor((p.x - off) / 2. + .5) + off, j * .5);
    float r = length(p - c);
    // 下の段から調べ、最初に含まれた円が最前面。同心円4本の線までの距離を返す
    if (r < 1.) {
      float x = r * 4.;
      return min(fract(x), 1. - fract(x)) * .25;
    }
  }
  return 1.;
}
float segD(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)); }
float asanohaD(vec2 p) {
  // 三角格子の各三角形で、重心と3頂点を結ぶ
  const float S3 = 1.7320508;
  vec2 s = vec2(p.x - p.y / S3, p.y * 2. / S3);
  vec2 f = fract(s), i = floor(s);
  vec2 A, B, C;
  if (f.x + f.y < 1.) { A = i; B = i + vec2(1, 0); C = i + vec2(0, 1); } else { A = i + vec2(1, 1); B = i + vec2(1, 0); C = i + vec2(0, 1); }
  mat2 E = mat2(1., 0., .5, S3 / 2.);
  vec2 a = E * A, b = E * B, c = E * C, g = (a + b + c) / 3.;
  float d = min(min(segD(p, g, a), segD(p, g, b)), segD(p, g, c));
  return min(d, min(min(segD(p, a, b), segD(p, b, c)), segD(p, c, a)));
}
float shippoD(vec2 p) {
  vec2 c = floor(p);
  float d = 1.;
  for (int y = 0; y <= 1; y++) for (int x = 0; x <= 1; x++) d = min(d, abs(length(p - c - vec2(x, y)) - .70710678));
  return d;
}
float kikkoD(vec2 p) {
  const vec2 s = vec2(1., 1.7320508);
  vec4 hc = floor(vec4(p, p - vec2(.5, 1.)) / s.xyxy) + .5;
  vec4 h = vec4(p - hc.xy * s, p - (hc.zw + .5) * s);
  vec2 q = abs(dot(h.xy, h.xy) < dot(h.zw, h.zw) ? h.xy : h.zw);
  return .5 - max(dot(q, s * .5), q.x);
}

vec3 trailGlow = vec3(0.);
vec3 tropicalLines(vec2 uv, vec4 T, float lineGain) {
  float d = T.r * 24.;
  float core = hair(d, .55);
  float glow = exp(-d * d / 90.) * .7;
  float reveal = .05 + smoothstep(.42, .72, texture(uT, uv * .5 + uTime * vec2(-.005, .0035)).b);
  vec3 c = LINE * (core * .62 + glow * .34) * reveal * lineGain;
  // 網目の上をときどき光が走る。位相は焼き込み済みなので、時刻と比べるだけ
  vec4 tr = texelFetch(uR, ivec2(mod(floor(uv * 2048.), 2048.)), 0);
  if (tr.b > 0.) {
    float ph = (tr.r * 65280. + tr.g * 255.) / 65535.;
    float age = fract(uTime / CYCLE - ph) * CYCLE;
    // 軌跡は字から離れても見えるよう、近さによる減衰をかけずに別で足す
    trailGlow = vec3(.55, .95, 1.) * tr.b * (exp(-age * 1.4) * 1.6 + exp(-age * 12.) * 2.5) * step(age, 3.);
  }
  return c;
}

vec3 pattern(vec2 uv) {
  if (uMode == 0) {
    return tropicalLines(uv, texture(uT, uv), 1.);
  }
  if (uMode == 1) {
    // トロピカル曲線のセルを4色の青で塗り分け、色ごとに別の和柄を入れる
    vec4 T = texture(uT, uv);
    float k = T.g * 3.;
    vec4 w = max(vec4(0.), 1. - abs(vec4(k) - vec4(0., 1., 2., 3.)));
    vec3 tone = w.x * vec3(.035, .07, .13) + w.y * vec3(.05, .10, .17) + w.z * vec3(.025, .055, .10) + w.w * vec3(.06, .12, .20);
    float l = w.x * hair(seigaihaD(uv * 26.), .035) + w.y * hair(asanohaD(uv * 15.), .022)
            + w.z * hair(shippoD(uv * 19.), .03) + w.w * hair(kikkoD(uv * 17.), .03);
    return tone * 1.7 + LINE * l * .16 + tropicalLines(uv, T, .8);
  }
  if (uMode == 2) {
    float l = hair(seigaihaD(uv * 22.), .035);
    float sweep = pow(.5 + .5 * sin(dot(uv, vec2(1., .55)) * 4. - uTime * .5), 6.);
    return LINE * l * (.22 + .55 * sweep) + vec3(.02, .05, .09) * .6;
  }
  // 3: ライフゲーム / 4: ラングトンのアリ。R: 生きている度合い G: 誕生・アリの光
  vec2 g = uv * 40.;
  vec2 cell = mod(floor(g), GRID);
  vec2 v = texelFetch(uG, ivec2(cell), 0).rg;
  vec2 f = abs(fract(g) - .5);
  float sq = 1. - smoothstep(.30, .30 + 1.5 * fwidth(g.x), max(f.x, f.y));
  float grid = hair(.5 - max(f.x, f.y), .02) * .10;
  return LINE * (grid + sq * (v.r * .55 + v.g * .9)) + vec3(.7, .97, 1.) * sq * v.g * .35;
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

  vec3 col = BG * mix(1., .55, smoothstep(.45, 1.05, length(p)));
  vec2 softUv = (inkUv + SOFT_PAD) / (1. + 2. * SOFT_PAD);
  col += vec3(.05, .17, .27) * texture(uS, softUv).g * .8;
  col += pattern(uv) * fog * nearInk * .55 + trailGlow * mix(1., .35, smoothstep(.85, 2.6, t));
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

// ライフゲーム・ラングトンのアリの盤面。CPUで回し、表示用の輝度をなめらかに追従させる
function createAutomaton() {
  const n = GRID * GRID
  const state = new Uint8Array(n)
  const glow = new Float32Array(n)
  const flash = new Float32Array(n)
  const bytes = new Uint8Array(n * 2)
  const at = (x: number, y: number) => ((y + GRID) % GRID) * GRID + ((x + GRID) % GRID)
  let kind: 'life' | 'ant' = 'life'
  let acc = 0
  let generation = 0
  let ants: { x: number; y: number; d: number }[] = []

  const stamp = (cells: number[][]) => {
    const ox = Math.floor(Math.random() * GRID), oy = Math.floor(Math.random() * GRID)
    for (const [x, y] of cells) state[at(ox + x, oy + y)] = 1
  }
  const reset = (next: 'life' | 'ant') => {
    kind = next
    state.fill(0)
    glow.fill(0)
    flash.fill(0)
    generation = 0
    if (kind === 'life') {
      for (let i = 0; i < n; i++) state[i] = Math.random() < 0.2 ? 1 : 0
    } else {
      ants = Array.from({ length: 3 }, () => ({
        x: Math.floor(Math.random() * GRID),
        y: Math.floor(Math.random() * GRID),
        d: Math.floor(Math.random() * 4),
      }))
      // 開いた瞬間から模様が見えるよう、少し歩かせておく
      for (let i = 0; i < 2500; i++) antStep()
      for (let i = 0; i < n; i++) glow[i] = state[i]
      flash.fill(0)
    }
  }
  const lifeStep = () => {
    const next = new Uint8Array(n)
    let alive = 0
    for (let y = 0; y < GRID; y++)
      for (let x = 0; x < GRID; x++) {
        let k = 0
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (dx || dy) k += state[at(x + dx, y + dy)]
        const i = y * GRID + x
        const v = k === 3 || (k === 2 && state[i]) ? 1 : 0
        if (v && !state[i]) flash[i] = 1
        next[i] = v
        alive += v
      }
    state.set(next)
    generation++
    // 盤面が静まったら、グライダーやRペントミノを投げ込んで動きを絶やさない
    if (alive < n * 0.03 || generation % 45 === 0)
      stamp(Math.random() < 0.5 ? [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]] : [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]])
  }
  const antStep = () => {
    for (const a of ants) {
      const i = at(a.x, a.y)
      a.d = (a.d + (state[i] ? 3 : 1)) % 4
      state[i] ^= 1
      flash[i] = 1
      a.x = (a.x + [0, 1, 0, -1][a.d] + GRID) % GRID
      a.y = (a.y + [-1, 0, 1, 0][a.d] + GRID) % GRID
    }
    if (++generation > 14000) reset('ant')
  }
  return {
    reset,
    update(dt: number) {
      const period = kind === 'life' ? 0.9 : 1 / 45
      acc += dt
      let steps = 0
      while (acc >= period && steps < 50) {
        acc -= period
        steps++
        if (kind === 'life') lifeStep()
        else antStep()
      }
      const k = 1 - Math.exp(-dt * (kind === 'life' ? 3 : 6))
      const fk = Math.exp(-dt * (kind === 'life' ? 1.5 : 0.8))
      for (let i = 0; i < n; i++) {
        glow[i] += (state[i] - glow[i]) * k
        flash[i] *= fk
        bytes[i * 2] = glow[i] * 255
        bytes[i * 2 + 1] = Math.min(1, flash[i] * (kind === 'life' ? 0.7 : 0.5)) * 255
      }
      if (kind === 'ant') for (const a of ants) bytes[at(a.x, a.y) * 2 + 1] = 255
      return bytes
    },
  }
}

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
  let mode: BackgroundMode = initialMode
  const automaton = createAutomaton()

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

  const bindUnit = (unit: number, name: string) => {
    gl.activeTexture(gl.TEXTURE0 + unit)
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
    gl.uniform1i(uniform(name), unit)
  }
  const upload = (unit: number, image: HTMLImageElement, wrap: number, name: string, mip = true) => {
    bindUnit(unit, name)
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    if (mip) gl.generateMipmap(gl.TEXTURE_2D)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mip ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mip ? gl.LINEAR : gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap)
    if (anisotropy && mip && wrap === gl.REPEAT)
      gl.texParameterf(gl.TEXTURE_2D, anisotropy.TEXTURE_MAX_ANISOTROPY_EXT, 8)
  }

  // 盤面テクスチャ(ユニット5)
  bindUnit(5, 'uG')
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG8, GRID, GRID, 0, gl.RG, gl.UNSIGNED_BYTE, new Uint8Array(GRID * GRID * 2))
  const uploadGrid = (bytes: Uint8Array) => {
    gl.activeTexture(gl.TEXTURE5)
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, GRID, GRID, gl.RG, gl.UNSIGNED_BYTE, bytes)
  }
  const modeIndex = (m: BackgroundMode) => BACKGROUND_MODES.findIndex((x) => x.id === m)
  const applyMode = () => {
    gl.uniform1i(uniform('uMode'), modeIndex(mode))
    if (mode === 'life' || mode === 'ant') {
      automaton.reset(mode)
      // 動きを止める設定の人には、少し進めた盤面を1枚だけ見せる
      uploadGrid(automaton.update(reduceMotion ? 3 : 0))
    }
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

  const draw = (now: number) => {
    gl.uniform1f(uniform('uTime'), now / 1000)
    gl.uniform2f(uniform('uLight'), light.x, light.y)
    gl.uniform2f(uniform('uPar'), parallax.x, parallax.y)
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
    if (mode === 'life' || mode === 'ant') uploadGrid(automaton.update(dt))
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
      applyMode()
      render = () => draw(reduceMotion ? 0 : performance.now())
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
      mode = next
      if (render) {
        applyMode()
        render()
      }
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
