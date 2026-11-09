// 毛筆ヒーローのWebGL2描画。
//
// インクの法線は、部員がストロークした墨を薄膜方程式 h_t = -div(h^3 grad p) で流した
// 高さから事前に焼き込んである(public/images/hero/ink_a.webp)。ここではカーソルに応じた
// ライティングだけを毎フレーム計算する。
//
// 背景はトロピカル曲線(max多項式の折れ目)の周期タイルを、奥に傾いた遠い面として貼っている。
// 墨を手前に浮かせるため、(1)背景は霧で沈める (2)墨の影を遠くに大きくぼかして落とす
// (3)カーソルに対して墨と背景を逆方向に動かす、の3つで奥行きを作っている。

export interface InkTextures {
  inkA: string // RG: 平方根圧縮した法線xy / B: 字形マスク
  inkB: string // R: ラメ / G: 明度 / B: 箔の向き
  tropical: string // R: 線 / G: にじみ / B: 点灯のムラ
}

interface Options {
  canvas: HTMLCanvasElement
  frame: HTMLElement // 墨を置く位置はCSSが決め、このDOMの矩形に合わせて描く
  textures: InkTextures
  onReady: () => void
}

const VERTEX = `#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }`

const FRAGMENT = `#version 300 es
precision highp float;
uniform sampler2D uA, uB, uT;
uniform vec2 uRes, uLight, uPar;
uniform vec4 uRect;
uniform float uTime, uDpr;
out vec4 o;

const vec3 BG = vec3(.05, .05, .07);
const vec3 SHADOW = vec3(.20, .21, .26), LIT = vec3(1., 1., 1.02);
const vec3 LINE = vec3(.28, .78, 1.);

vec3 backdrop(vec2 px, vec2 inkUv) {
  vec2 p = (px - .5 * uRes) / uRes.y;
  // 上へ行くほど遠ざかる面。wが奥行き
  float w = 1.25 - .85 * p.y;
  vec2 q = (p - uPar * .018) / w;
  vec2 uv = q * .9 + uTime * vec2(.0035, .0018);
  vec3 t = texture(uT, uv).rgb;
  float reveal = .05 + smoothstep(.42, .72, texture(uT, uv * .5 + uTime * vec2(-.005, .0035)).b);
  float fog = mix(1., .16, smoothstep(.75, 1.7, w));

  vec2 inkCenter = uRect.xy + .5 * uRect.zw;
  float r = length((px - inkCenter) / uRect.w);
  float nearInk = .25 + .75 * exp(-r * r * 2.2);

  vec3 col = BG;
  col *= mix(1., .55, smoothstep(.45, 1.05, length(p)));
  // 字の背後の空気がわずかに光る
  float halo = textureLod(uA, inkUv, 6.5).b;
  col += vec3(.05, .17, .27) * halo * .8;
  col += LINE * (t.r * .62 + t.g * .34) * reveal * fog * nearInk * .55;
  // 遠い面に落ちる影。光と反対側へ大きくずれ、大きくぼける
  float castShadow = textureLod(uA, inkUv + uLight * vec2(.05, .035), 5.6).b;
  col *= 1. - .78 * clamp(castShadow * 1.5, 0., 1.);
  return col;
}

void main() {
  vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 inkUv = (px - uRect.xy - uPar * vec2(9., 7.) * uDpr) / uRect.zw;
  vec3 color = backdrop(px, inkUv);

  if (inkUv.x > 0. && inkUv.x < 1. && inkUv.y > 0. && inkUv.y < 1.) {
    vec4 A = texture(uA, inkUv), B_ = texture(uB, inkUv);
    float m = A.b;
    if (m > .002) {
      vec2 c = (A.rg * 255. - 127.) / 127.;
      vec2 nxy = sign(c) * c * c * 4.;
      vec3 N = normalize(vec3(nxy, 1.));
      vec3 L = normalize(vec3(uLight.x, -uLight.y, .55)), V = vec3(0., 0., 1.), Hv = normalize(L + V);
      float d = pow(clamp(dot(N, L) * .5 + .5, 0., 1.), 1.6), sp = pow(max(dot(N, Hv), 0.), 60.);
      vec3 ink = mix(SHADOW, LIT, d) + (LIT - SHADOW) * sp * .9;
      ink *= B_.g * 1.2;
      if (B_.r > .004) {
        float th = B_.b * 6.2831853;
        vec3 nf = normalize(N + vec3(cos(th), sin(th), 0.) * .55);
        float s = pow(max(dot(nf, Hv), 0.), 70.);
        ink = mix(ink, mix(vec3(.10, .72, .92), vec3(.78, 1., 1.), clamp(s * 1.5, 0., 1.)), B_.r * .95);
      }
      color = mix(color, ink, m);
    }
  }
  o = vec4(color, 1.);
}`

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })

/** WebGL2が使えない・画像が読めない場合は何もせず、呼び出し側の静止画が残る */
export function startInkRenderer({ canvas, frame, textures, onReady }: Options): () => void {
  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'low-power' })
  if (!gl) return () => undefined

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let destroyed = false
  let raf = 0
  let render: (() => void) | null = null
  let visible = true

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
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return () => undefined
  gl.useProgram(program)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const position = gl.getAttribLocation(program, 'a')
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
  const uniform = (name: string) => gl.getUniformLocation(program, name)
  const anisotropy = gl.getExtension('EXT_texture_filter_anisotropic')

  const upload = (unit: number, image: HTMLImageElement, wrap: number, name: string) => {
    gl.activeTexture(gl.TEXTURE0 + unit)
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    gl.generateMipmap(gl.TEXTURE_2D)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap)
    if (anisotropy && wrap === gl.REPEAT) gl.texParameterf(gl.TEXTURE_2D, anisotropy.TEXTURE_MAX_ANISOTROPY_EXT, 8)
    gl.uniform1i(uniform(name), unit)
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
  Promise.all([loadImage(textures.inkA), loadImage(textures.inkB), loadImage(textures.tropical)])
    .then(([inkA, inkB, tropical]) => {
      if (destroyed) return
      upload(0, inkA, gl.CLAMP_TO_EDGE, 'uA')
      upload(1, inkB, gl.CLAMP_TO_EDGE, 'uB')
      upload(2, tropical, gl.REPEAT, 'uT')
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

  return () => {
    destroyed = true
    if (raf) cancelAnimationFrame(raf)
    observer.disconnect()
    intersection.disconnect()
    window.removeEventListener('pointermove', onPointerMove)
    document.removeEventListener('visibilitychange', onVisibility)
    canvas.removeEventListener('webglcontextlost', onContextLost)
  }
}
