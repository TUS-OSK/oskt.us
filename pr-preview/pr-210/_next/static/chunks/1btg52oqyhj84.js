(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19675,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(43181)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},43181,e=>{"use strict";var t=e.i(91398),r=e.i(13299),a=e.i(34991),i=e.i(66706),n=e.i(23957),o=e.i(43770),l=e.i(83817),s=e.i(62251),c=e.i(23963),d=e.i(75097),f=e.i(15004),u=e.i(27035),m=e.i(49804),h=e.i(24666),x=e.i(83958),p=e.i(91788),v=e.i(54097),g=e.i(7065);let y=g.q`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,E=g.q`
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,w=0+1.5*.8,b=96,T=(e,t)=>(t+b)%b*b+(e+b)%b,A=b*b,R=["gd","ant","ising","life","seigaiha","tropical"],M=e=>"gd-smooth"===e?0:R.indexOf(e),_=`#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }`,U=`#version 300 es
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
const float TILT = 1.05;           // 背景面の傾き tan(θ)。θ≈46\xb0で上ほど遠い
const float SOFT_PAD = .4;
const float CYCLE = 22.;
const float GRID = ${b}.;
const float ANT_SCALE = 150.;

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
const float RELIEF = .26;
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
  vec2 g = uv * (ant ? ANT_SCALE : 40.);
  vec2 v = texelFetch(grid, ivec2(mod(floor(g), ant ? 192. : GRID)), 0).rg;
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
}`,L=e=>new Promise((t,r)=>{let a=new Image;a.onload=()=>t(a),a.onerror=r,a.src=e});function S({mode:e,onReady:r}){let a=(0,p.useRef)(null),i=(0,p.useRef)(null),n=(0,p.useRef)(null),o=(0,p.useRef)(e),l=(0,p.useRef)(r),[s,c]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{let e=a.current,t=i.current;if(!e||!t)return;let r=function({canvas:e,frame:t,textures:r,mode:a,onReady:i}){let n={setMode:()=>void 0,destroy:()=>void 0},o=e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!o)return n;let l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=!1,c=0,d=null,f=!0,u=a,m=a,h=-1/0,x=(e,t)=>{let r=o.createShader(e);return o.shaderSource(r,t),o.compileShader(r),o.getShaderParameter(r,o.COMPILE_STATUS)||console.error(o.getShaderInfoLog(r)),r},p=o.createProgram();if(o.attachShader(p,x(o.VERTEX_SHADER,_)),o.attachShader(p,x(o.FRAGMENT_SHADER,U)),o.linkProgram(p),!o.getProgramParameter(p,o.LINK_STATUS))return n;o.useProgram(p),o.bindBuffer(o.ARRAY_BUFFER,o.createBuffer()),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);let v=o.getAttribLocation(p,"a");o.enableVertexAttribArray(v),o.vertexAttribPointer(v,2,o.FLOAT,!1,0,0);let g=o.getExtension("EXT_texture_filter_anisotropic");o.pixelStorei(o.UNPACK_ALIGNMENT,1);let y=(e,t,r,a)=>{o.activeTexture(o.TEXTURE0+e),o.bindTexture(o.TEXTURE_2D,o.createTexture()),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,r),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,r===o.NEAREST?o.NEAREST:o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,a),o.uniform1i(o.getUniformLocation(p,t),e)},E=(e,t,r,a,i=!0)=>{y(e,a,i?o.LINEAR_MIPMAP_LINEAR:o.NEAREST,r),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,t),i&&o.generateMipmap(o.TEXTURE_2D),g&&i&&r===o.REPEAT&&o.texParameterf(o.TEXTURE_2D,g.TEXTURE_MAX_ANISOTROPY_EXT,8)},w=(e,t,r)=>{y(e,t,r,o.REPEAT),o.texImage2D(o.TEXTURE_2D,0,o.R8,1,1,0,o.RED,o.UNSIGNED_BYTE,new Uint8Array(1))};w(5,"uLife",o.NEAREST),w(6,"uAnt",o.NEAREST),w(7,"uIs",o.NEAREST),w(8,"uH",o.LINEAR),w(9,"uGT",o.LINEAR);let R=(e,t,r=b)=>{let a=!1;return i=>{let n=t(i);o.activeTexture(o.TEXTURE0+e),a?o.texSubImage2D(o.TEXTURE_2D,0,0,0,r,r,o.RG,o.UNSIGNED_BYTE,n):o.texImage2D(o.TEXTURE_2D,0,o.RG8,r,r,0,o.RG,o.UNSIGNED_BYTE,n),a=!0}},S=null,P=e=>{let t=function(e){let t=(e,t)=>{let r=t,a=Array.from({length:e*e},()=>{let e=(r=1664525*r+0x3c6ef35f>>>0)/0x100000000*Math.PI*2;return[Math.cos(e),Math.sin(e)]}),i=e=>e*e*e*(e*(6*e-15)+10);return(t,r)=>{let n=Math.floor(t),o=Math.floor(r),l=t-n,s=r-o,c=(t,r,i,n)=>{let o=a[(r%e+e)%e*e+(t%e+e)%e];return o[0]*i+o[1]*n},d=i(l),f=i(s),u=c(n,o,l,s)+d*(c(n+1,o,l-1,s)-c(n,o,l,s));return u+f*(c(n,o+1,l,s-1)+d*(c(n+1,o+1,l-1,s-1)-c(n,o+1,l,s-1))-u)}},r=[t(4,11),t(8,23),t(16,37)],a=new Float32Array(65536),i=1/0,n=-1/0;for(let e=0;e<256;e++)for(let t=0;t<256;t++){let o=t/256,l=e/256,s=r[0](4*o,4*l)+.45*r[1](8*o,8*l)+.15*r[2](16*o,16*l);a[256*e+t]=s,i=Math.min(i,s),n=Math.max(n,s)}for(let e=0;e<65536;e++)a[e]=(a[e]-i)/(n-i);let o=(e,t)=>{let r=(e%1+1)%1*256-.5,i=(t%1+1)%1*256-.5,n=Math.floor(r),o=Math.floor(i),l=r-n,s=i-o,c=(e,t)=>a[(t+256)%256*256+(e+256)%256];return(c(n,o)*(1-l)+c(n+1,o)*l)*(1-s)+(c(n,o+1)*(1-l)+c(n+1,o+1)*l)*s},l=1/256,s=(e,t)=>[(o(e+l,t)-o(e-l,t))/(2*l),(o(e,t+l)-o(e,t-l))/(2*l)],c=()=>({x:Math.random(),y:Math.random(),vx:0,vy:0,still:0,age:0,clock:0,target:null}),d=Array.from({length:"step"===e?14:18},c);return{height:a,update(t){let r=[];if("smooth"===e){let e=60*t;for(let a=0;a<d.length;a++){let i=d[a],[n,o]=s(i.x,i.y),l=Math.pow(.93,e);i.vx=i.vx*l-22e-6*n*e,i.vy=i.vy*l-22e-6*o*e,r.push(i.x,i.y,i.x+i.vx,i.y+i.vy,.6,.7),i.x+=i.vx,i.y+=i.vy,i.age+=t,i.still=4e-5>Math.hypot(i.vx,i.vy)?i.still+t:0,(i.still>1.6||i.age>22)&&(d[a]=c())}return{segments:r,decay:Math.pow(.992,e)}}for(let e=0;e<d.length;e++){let a=d[e];if(a.age+=t,!a.target){let[e,t]=s(a.x,a.y);a.vx=.55*a.vx-.0045*e,a.vy=.55*a.vy-.0045*t,a.target={x0:a.x,y0:a.y,x1:a.x+a.vx,y1:a.y+a.vy},a.clock=0}let i=a.target,n=e=>1-Math.pow(1-Math.min(1,e),3),o=n(a.clock/.3);a.clock+=t;let l=n(a.clock/.3);r.push(i.x0+(i.x1-i.x0)*o,i.y0+(i.y1-i.y0)*o,i.x0+(i.x1-i.x0)*l,i.y0+(i.y1-i.y0)*l,.6,.55),a.clock>=.3&&(a.x=i.x1,a.y=i.y1,r.push(a.x,a.y,a.x,a.y,1.4,.8),a.target=null,a.still=.0025>Math.hypot(a.vx,a.vy)?a.still+1:0,(a.still>4||a.age>30)&&(d[e]=c()))}return{segments:r,decay:Math.pow(.985,60*t)}}}}(e);return o.activeTexture(o.TEXTURE8),o.texImage2D(o.TEXTURE_2D,0,o.R16F,256,256,0,o.RED,o.FLOAT,t.height),S??=(()=>{let e=(e,t)=>{let r=o.createProgram();return o.attachShader(r,x(o.VERTEX_SHADER,e)),o.attachShader(r,x(o.FRAGMENT_SHADER,t)),o.linkProgram(r),r},t=e(_,`#version 300 es
precision highp float;
uniform sampler2D uPrev; uniform float uDecay; out vec4 o;
// 掛け算だけだと8bitの丸めで薄い跡が永久に残るので、毎フレーム一定量も引いて必ず消す
void main() { o = max(texture(uPrev, gl_FragCoord.xy / 1024.) * uDecay - 1.2 / 255., 0.); }`),r=e(`#version 300 es
in vec2 aPos; in vec4 aSeg; in vec2 aStyle;
flat out vec4 vSeg; flat out vec2 vStyle; out vec2 vPx;
void main() { vSeg = aSeg; vStyle = aStyle; vPx = aPos; gl_Position = vec4(aPos / 1024. * 2. - 1., 0., 1.); }`,`#version 300 es
precision highp float;
flat in vec4 vSeg; flat in vec2 vStyle; in vec2 vPx; out vec4 o;
void main() {
  vec2 pa = vPx - vSeg.xy, ba = vSeg.zw - vSeg.xy;
  float d = length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0., 1.));
  o = vec4(vStyle.y * (1. - smoothstep(vStyle.x - .75, vStyle.x + .75, d)));
}`),a=[0,1].map(()=>{let e=o.createTexture();return o.activeTexture(o.TEXTURE10),o.bindTexture(o.TEXTURE_2D,e),o.texImage2D(o.TEXTURE_2D,0,o.RGBA8,1024,1024,0,o.RGBA,o.UNSIGNED_BYTE,null),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.REPEAT),e}),i=a.map(e=>{let t=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,t),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),t}),n=o.createVertexArray();o.bindVertexArray(n);let l=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,l),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);let s=o.getAttribLocation(t,"a");o.enableVertexAttribArray(s),o.vertexAttribPointer(s,2,o.FLOAT,!1,0,0);let c=o.createVertexArray();o.bindVertexArray(c);let d=o.createBuffer();for(let[e,t,a]of(o.bindBuffer(o.ARRAY_BUFFER,d),[["aPos",2,0],["aSeg",4,2],["aStyle",2,6]])){let i=o.getAttribLocation(r,e);o.enableVertexAttribArray(i),o.vertexAttribPointer(i,t,o.FLOAT,!1,32,4*a)}o.bindVertexArray(null);let f=0;return(e,l)=>{let s=1-f;o.bindFramebuffer(o.FRAMEBUFFER,i[s]),o.viewport(0,0,1024,1024),o.useProgram(t),o.bindVertexArray(n),o.activeTexture(o.TEXTURE10),o.bindTexture(o.TEXTURE_2D,a[f]),o.uniform1i(o.getUniformLocation(t,"uPrev"),10),o.uniform1f(o.getUniformLocation(t,"uDecay"),l),o.drawArrays(o.TRIANGLES,0,3);let u=[];for(let t=0;t<e.length;t+=6){let[r,a,i,n,o,l]=e.slice(t,t+6),s=Math.floor(r),c=Math.floor(a),d=(r-s)*1024,f=(a-c)*1024,m=(i-s)*1024,h=(n-c)*1024,x=o+2;for(let e of[-1024,0,1024])for(let t of[-1024,0,1024]){let r=Math.min(d,m)+e-x,a=Math.max(d,m)+e+x,i=Math.min(f,h)+t-x,n=Math.max(f,h)+t+x;if(a<0||r>1024||n<0||i>1024)continue;let s=[d+e,f+t,m+e,h+t,o,l];for(let[e,t]of[[r,i],[a,i],[r,n],[r,n],[a,i],[a,n]])u.push(e,t,...s)}}u.length&&(o.useProgram(r),o.bindVertexArray(c),o.bindBuffer(o.ARRAY_BUFFER,d),o.bufferData(o.ARRAY_BUFFER,new Float32Array(u),o.DYNAMIC_DRAW),o.enable(o.BLEND),o.blendEquation(o.MAX),o.drawArrays(o.TRIANGLES,0,u.length/8),o.disable(o.BLEND)),f=s,o.activeTexture(o.TEXTURE9),o.bindTexture(o.TEXTURE_2D,a[f])}})(),e=>{let{segments:r,decay:a}=t.update(e);S?.(r,a)}},F={life:()=>R(5,function(){let e=new Uint8Array(A),t=new Float32Array(A),r=new Float32Array(A),a=new Uint8Array(2*A),i=0,n=0;for(let r=0;r<A;r++)t[r]=e[r]=+(.2>Math.random());let o=()=>{let t=new Uint8Array(A),a=0;for(let i=0;i<b;i++)for(let n=0;n<b;n++){let o=0;for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++)(r||t)&&(o+=e[T(n+r,i+t)]);let l=i*b+n,s=3===o||2===o&&e[l]?1:0;s&&!e[l]&&(r[l]=1),t[l]=s,a+=s}e=t,n++,(a<.03*A||n%45==0)&&(t=>{let r=Math.floor(Math.random()*b),a=Math.floor(Math.random()*b);for(let[i,n]of t)e[T(r+i,a+n)]=1})(.5>Math.random()?[[1,0],[2,1],[0,2],[1,2],[2,2]]:[[1,0],[2,0],[0,1],[1,1],[1,2]])};return{update(n){i+=n;for(let e=0;i>=.9&&e<5;e++)i-=.9,o();let l=1-Math.exp(-(3*n)),s=Math.exp(-(1.5*n));for(let i=0;i<A;i++)t[i]+=(e[i]-t[i])*l,r[i]*=s,a[2*i]=255*t[i],a[2*i+1]=255*Math.min(1,.7*r[i]);return a}}}().update),ant:()=>{let e=performance.now()/1e3;return R(6,function(e=[0,0],t=0,r=!1){let a=[-1,1,1,1,1,1,-1,-1,-1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,1,1,-1,1,1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,-1,-1,1,1,-1,1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,1,-1,-1,1,1,1,-1,1,-1,1,1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,1,-1,-1],i=(e,t)=>(t+192)%192*192+(e+192)%192,n=e=>e?.1+.9*Math.min(1,Math.max(0,(e-2)/28)):0,o=new Uint8Array(36864),l=new Float32Array(36864),s=new Uint8Array(73728),c={x:0,y:0,d:0},d=0,f=0,u=0,m=0,h=()=>{o.fill(0),d=0,f=0,u=0;let t=e=>(Math.floor(e)%192+192)%192;Object.assign(c,{x:t(e[0]),y:t(e[1]),d:0})},x=()=>{let e=i(c.x,c.y);c.d=(c.d+a[o[e]]+4)%4,o[e]=(o[e]+1)%a.length,c.x=(c.x+[0,1,0,-1][c.d]+192)%192,c.y=(c.y+[-1,0,1,0][c.d]+192)%192,d++};return h(),{update(e){if(e>0)if((m+=e)<t);else if(d<23e4){f+=60*e;let t=Math.min(23e4-d,Math.ceil(16*f*e*60));for(let e=0;e<t;e++)x()}else(u+=e)>2.5&&h();else if(r)for(;d<23e4;)x();let a=e>0?1-Math.exp(-(12*e)):1;for(let e=0;e<36864;e++)l[e]+=(n(o[e])-l[e])*a,s[2*e]=255*l[e],s[2*e+1]=0;return s[2*i(c.x,c.y)+1]=255,s}}}([(-.19+.0035*e)*150,(.06+.0018*e)*150],.9,l).update,192)},ising:()=>R(7,function(){let e=new Int8Array(A),t=new Int8Array(A),r=new Float32Array(A),a=new Float32Array(A),i=new Uint8Array(2*A);e.fill(1),t.fill(-1);for(let r=0;r<7;r++){let r=Math.random()*b,a=Math.random()*b,i=6+12*Math.random();for(let n=0;n<b;n++)for(let o=0;o<b;o++){let l=Math.min(Math.abs(o-r),b-Math.abs(o-r)),s=Math.min(Math.abs(n-a),b-Math.abs(n-a));l*l+s*s<i*i&&(e[n*b+o]=-1,t[n*b+o]=1)}}for(let i=0;i<A;i++)r[i]=(1+e[i])/2,a[i]=(1+t[i])/2;let n=0;return{update(o){for(n+=9e3*o;n>=1;n--){let r=Math.floor(Math.random()*b),a=Math.floor(Math.random()*b),i=a*b+r;if(.5>Math.random()){let n=t[i]+t[T(r,a-1)]+t[T(r-1,a)],o=-2*e[i]*n;(o<=0||Math.random()<Math.exp(-o/1.05))&&(e[i]=-e[i])}else{let n=e[i]+e[T(r,a+1)]+e[T(r+1,a)],o=-2*t[i]*n;(o<=0||Math.random()<Math.exp(-o/1.05))&&(t[i]=-t[i])}}let l=1-Math.exp(-(2.5*o));for(let n=0;n<A;n++)r[n]+=((1+e[n])/2-r[n])*l,a[n]+=((1+t[n])/2-a[n])*l,i[2*n]=255*r[n],i[2*n+1]=255*a[n];return i}}}().update),gd:()=>P("step"),"gd-smooth":()=>P("smooth"),seigaiha:null,tropical:null},j={},D=(e,t)=>{let r=F[e];r&&(j[e]??=r())(t)},I={x:-.6,y:-.7,tx:-.6,ty:-.7},k={x:0,y:0,tx:0,ty:0},N=-1/0,B=e=>{if("mouse"!==e.pointerType)return;let r=t.getBoundingClientRect(),a=e=>Math.max(-1.8,Math.min(1.8,e));I.tx=a((e.clientX-(r.left+r.width/2))/(r.height/2)),I.ty=a((e.clientY-(r.top+r.height/2))/(r.height/2)),k.tx=e.clientX/window.innerWidth*2-1,k.ty=e.clientY/window.innerHeight*2-1,N=performance.now()},X={x:0,y:0,ready:!1},C=e=>{if(null===e.beta||null===e.gamma)return;let t=(window.screen.orientation?.angle??0)%360,[r,a]=90===t?[e.beta,-e.gamma]:270===t||-90===t?[-e.beta,e.gamma]:[e.gamma,e.beta];X.ready||Object.assign(X,{x:r,y:a,ready:!0}),X.x+=(r-X.x)*.004,X.y+=(a-X.y)*.004;let i=r-X.x,n=a-X.y,o=(e,t)=>Math.max(-t,Math.min(t,e));I.tx=o(-.6+i/22,1.8),I.ty=o(-.7+n/22,1.8),k.tx=o(i/30,1),k.ty=o(n/30,1),N=performance.now()},z=window.DeviceOrientationEvent,G=()=>window.addEventListener("deviceorientation",C,{passive:!0}),O=()=>{document.removeEventListener("click",O,!0),document.removeEventListener("touchend",O,!0),z?.requestPermission?.().then(e=>"granted"===e&&G()).catch(()=>void 0)},q=()=>{o.useProgram(p);let r=Math.min(window.devicePixelRatio||1,2),a=e.getBoundingClientRect();e.width=Math.max(1,Math.round(a.width*r)),e.height=Math.max(1,Math.round(a.height*r)),o.viewport(0,0,e.width,e.height);let i=t.getBoundingClientRect();o.uniform2f(o.getUniformLocation(p,"uRes"),e.width,e.height),o.uniform1f(o.getUniformLocation(p,"uDpr"),r),o.uniform4f(o.getUniformLocation(p,"uRect"),(i.left-a.left)*r,(i.top-a.top)*r,i.width*r,i.height*r),d?.()},Y=new ResizeObserver(q),H=e=>{let t=Math.min(1,Math.max(0,(e-h)/1e3/.9));return t*t*(3-2*t)},W=t=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.useProgram(p),o.bindVertexArray(null),o.viewport(0,0,e.width,e.height),o.uniform1f(o.getUniformLocation(p,"uTime"),t/1e3),o.uniform2f(o.getUniformLocation(p,"uLight"),I.x,I.y),o.uniform2f(o.getUniformLocation(p,"uPar"),k.x,k.y),o.uniform1i(o.getUniformLocation(p,"uMode0"),M(m)),o.uniform1i(o.getUniformLocation(p,"uMode1"),M(u)),o.uniform1f(o.getUniformLocation(p,"uFade"),H(t)),o.drawArrays(o.TRIANGLES,0,3)},V=performance.now(),K=e=>{if(c=0,s||!f||document.hidden)return;let t=Math.min(.1,(e-V)/1e3);if(V=e,e-N>2500){let t=e/1e3;I.tx=-.55+.45*Math.sin(.23*t),I.ty=-.6+.35*Math.cos(.31*t),k.tx=0,k.ty=0}let r=1-Math.exp(-(5*t));I.x+=(I.tx-I.x)*r,I.y+=(I.ty-I.y)*r,k.x+=(k.tx-k.x)*r,k.y+=(k.ty-k.y)*r,D(u,t),m!==u&&1>H(e)&&D(m,t),W(e),c=requestAnimationFrame(K)},Z=()=>{c||s||l||!d||(V=performance.now(),c=requestAnimationFrame(K))},$=new IntersectionObserver(([e])=>{(f=e.isIntersecting)&&Z()}),J=()=>{document.hidden||Z()},Q=t=>{t.preventDefault(),s=!0,e.style.display="none"};return e.addEventListener("webglcontextlost",Q),Promise.all([r.inkA,r.inkB,r.soft,r.tropical,r.trails].map(L)).then(([r,a,n,c,f])=>{s||(E(0,r,o.CLAMP_TO_EDGE,"uA"),E(1,a,o.CLAMP_TO_EDGE,"uB"),E(2,n,o.CLAMP_TO_EDGE,"uS"),E(3,c,o.REPEAT,"uT"),E(4,f,o.REPEAT,"uR",!1),d=()=>{D(u,0),W(l?0:performance.now())},q(),Y.observe(e),Y.observe(t),$.observe(e),window.addEventListener("pointermove",B,{passive:!0}),document.addEventListener("visibilitychange",J),z&&!l&&("function"==typeof z.requestPermission?(document.addEventListener("click",O,!0),document.addEventListener("touchend",O,!0)):G()),d(),Z(),i())}).catch(()=>void 0),{setMode(e){if(e===u)return;"ant"===e&&delete j.ant;let t=performance.now();H(t)>=.5&&(m=u),u=e,h=l?-1/0:t,d?.()},destroy(){s=!0,c&&cancelAnimationFrame(c),Y.disconnect(),$.disconnect(),window.removeEventListener("pointermove",B),window.removeEventListener("deviceorientation",C),document.removeEventListener("click",O,!0),document.removeEventListener("touchend",O,!0),document.removeEventListener("visibilitychange",J),e.removeEventListener("webglcontextlost",Q)}}}({canvas:e,frame:t,mode:o.current,textures:{inkA:(0,v.v)("/images/hero/ink_a.webp"),inkB:(0,v.v)("/images/hero/ink_b.webp"),soft:(0,v.v)("/images/hero/ink_soft.webp"),tropical:(0,v.v)("/images/hero/tropical.webp"),trails:(0,v.v)("/images/hero/trails.webp")},onReady:()=>{c(!0),l.current?.()}});return n.current=r,()=>r.destroy()},[]),(0,p.useEffect)(()=>{o.current=e,n.current?.setMode(e)},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P,{ref:a,"data-ready":s,"aria-hidden":"true"}),(0,t.jsx)(F,{children:(0,t.jsx)(j,{ref:i,src:(0,v.v)("/images/hero/ink_static.webp"),alt:"応用数学研究部","data-ready":s})})]})}let P=(0,r.f)("canvas",{target:"e15rgzkp2"})({name:"n6t5nk",styles:"position:absolute;inset:0;width:100%;height:100%;display:block;opacity:0;transition:opacity 1.2s ease;&[data-ready='true']{opacity:1;}"}),F=(0,r.f)("h1",{target:"e15rgzkp1"})({name:"1q6amu3",styles:"margin:0;font-size:inherit"}),j=(0,r.f)("img",{target:"e15rgzkp0"})({name:"yjsrmj",styles:"position:absolute;z-index:1;display:block;aspect-ratio:1214/1843;top:92px;left:50%;transform:translateX(-50%);height:min(calc(100svh - 340px), 132vw);transition:opacity 1.2s ease;&[data-ready='true']{opacity:0;}@media (min-width: 860px){top:50%;left:auto;right:max(3vw, calc(50% - 600px));transform:translateY(-50%);height:min(94vh, 1120px, 75vw);}"}),D="∇∂∑∫λπθ≈≠01ｱｲｳｴｵｶｷｸｹｺ#%&$";function I({word:e}){let[r,a]=(0,p.useState)(e),[i,n]=(0,p.useState)(!1),o=(0,p.useRef)(e);return(0,p.useEffect)(()=>{if(e===o.current)return;let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=o.current;if(o.current=e,t)return void a(e);let i=performance.now(),l=0;n(!0);let s=t=>{let o=Math.min(1,(t-i)/520),c=Math.round(r.length+(e.length-r.length)*Math.min(1,1.6*o)),d=Math.floor(Math.max(0,1.25*o-.25)*e.length),f="";for(let t=0;t<c;t++)f+=t<d?e[t]:D[Math.floor(Math.random()*D.length)];a(o>=1?e:f),o<1?l=requestAnimationFrame(s):n(!1)};return l=requestAnimationFrame(s),()=>cancelAnimationFrame(l)},[e]),(0,t.jsx)(N,{"data-text":r,"data-glitching":i,children:r})}let k=g.q`
  0% { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 0); }
  20% { clip-path: inset(70% 0 5% 0); transform: translate(3px, 0); }
  40% { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(85% 0 2% 0); transform: translate(2px, 0); }
  80% { clip-path: inset(5% 0 80% 0); transform: translate(-1px, 0); }
  100% { clip-path: inset(45% 0 35% 0); transform: translate(1px, 0); }
`,N=(0,r.f)("span",{target:"e1p8yz6q0"})("position:relative;display:inline-block;color:#fff;&[data-glitching='true']::before,&[data-glitching='true']::after{content:attr(data-text);position:absolute;inset:0;pointer-events:none;}&[data-glitching='true']::before{color:#7fd6ff;animation:",k," 0.18s steps(2) infinite;}&[data-glitching='true']::after{color:#ff5d8f;mix-blend-mode:screen;animation:",k," 0.23s steps(2) infinite reverse;}"),B=f.P.map(e=>({word:e.word,mode:e.hero.mode,motif:e.hero.motif})),X=[{team:0,mode:"gd-smooth",motif:"勾配降下法(なめらか)"}];function C(){let[e,r]=(0,p.useState)(-1),[a,i]=(0,p.useState)(null),[n,o]=(0,p.useState)(!1),[l,s]=(0,p.useState)(!1);(0,p.useEffect)(()=>{let e=(()=>{let e=new URLSearchParams(window.location.search).get("bg"),t=B.findIndex(t=>t.mode===e);if(t>=0)return{team:t,mode:B[t].mode};let r=X.find(t=>t.mode===e);return r?{team:r.team,mode:r.mode}:null})();e&&(i(e.mode),r(e.team)),s(!!v.z||new URLSearchParams(window.location.search).has("bg"))},[]),(0,p.useEffect)(()=>{if(!n||null!==a||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=window.setInterval(()=>{document.hidden||r(e=>(e+1)%B.length)},4e3);return()=>window.clearInterval(e)},[n,a]);let c=(e,t)=>{i(t),null!==e&&r(e);let a=new URL(window.location.href);a.searchParams.set("bg",t??"cycle"),window.history.replaceState(null,"",a)},d=e>=0?B[e]:null,f=a??d?.mode??"seigaiha";return(0,t.jsxs)(et,{children:[(0,t.jsx)(S,{mode:f,onReady:()=>o(!0)}),(0,t.jsxs)(G,{children:[(0,t.jsx)(O,{children:"東京理科大学"}),(0,t.jsxs)(q,{children:[(0,t.jsx)(Y,{children:"そうだ、応用数学しよう。東京理科大学 応用数学研究部(応数研・OSK)は、数学・プログラミング・データサイエンス・統計・AIに取り組む部活(サークル)です。"}),(0,t.jsxs)("span",{"aria-hidden":"true",children:["そうだ、",(0,t.jsx)("br",{}),(0,t.jsx)(I,{word:d?.word??"応用数学"}),"しよう。"]})]}),(0,t.jsx)(H,{children:B.map((r,a)=>(0,t.jsx)(W,{"data-active":a===e,children:r.word},r.mode))}),(0,t.jsxs)(Z,{children:[(0,t.jsx)($,{href:(0,x.E)("about"),children:"部の様子"}),(0,t.jsx)(J,{href:(0,x.E)("contact"),children:"ご連絡"})]})]}),l&&n&&(0,t.jsxs)(V,{"aria-label":"背景の比較用",children:[(0,t.jsx)(K,{type:"button","aria-pressed":null===a,onClick:()=>c(null,null),children:"巡回"}),B.map((e,r)=>(0,t.jsx)(K,{type:"button","aria-pressed":a===e.mode,onClick:()=>c(r,e.mode),children:e.motif},e.mode)),X.map(e=>(0,t.jsx)(K,{type:"button","aria-pressed":a===e.mode,onClick:()=>c(e.team,e.mode),children:e.motif},e.mode))]}),(0,t.jsx)(Q,{children:(0,t.jsx)(ee,{})})]})}let z="rgba(255, 255, 255, 0.92)",G=(0,r.f)("div",{target:"e1p42bwd13"})("position:absolute;z-index:2;left:24px;right:24px;bottom:24px;color:",z,";animation:",E," ",1,"s ",m.W," ",w,"s 1 normal both running;@media (min-width: 860px){left:max(6vw, calc(50% - 600px));right:auto;bottom:16vh;max-width:440px;}"),O=(0,r.f)("p",{target:"e1p42bwd12"})({name:"i4ryc9",styles:"margin:0 0 12px;font-size:14px;letter-spacing:0.3em;color:rgba(255, 255, 255, 0.6)"}),q=(0,r.f)("p",{target:"e1p42bwd11"})({name:"1jxxrmx",styles:"margin:0 0 16px;font-family:'Hiragino Mincho ProN','Yu Mincho','YuMincho',serif;font-size:clamp(22px, 2.8vw, 40px);line-height:1.5;letter-spacing:0.08em;white-space:nowrap"}),Y=(0,r.f)("span",{target:"e1p42bwd10"})({name:"14q40xi",styles:"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap"}),H=(0,r.f)("p",{target:"e1p42bwd9"})({name:"19v0v0t",styles:"display:flex;flex-wrap:wrap;margin:0 0 24px;font-size:13px;line-height:1.9;color:rgba(255, 255, 255, 0.5);@media (max-width: 859px){margin-bottom:16px;font-size:12px;}"}),W=(0,r.f)("span",{target:"e1p42bwd8"})({name:"1t8zctq",styles:"white-space:nowrap;transition:color 0.4s ease;&:not(:last-child)::after{content:'/';margin:0 0.5em;color:rgba(255, 255, 255, 0.3);}&[data-active='true']{color:#7fd6ff;}"}),V=(0,r.f)("div",{target:"e1p42bwd7"})({name:"13zzruo",styles:"position:absolute;z-index:3;top:12px;left:12px;display:flex;flex-wrap:wrap;gap:4px;max-width:calc(100% - 24px)"}),K=(0,r.f)("button",{target:"e1p42bwd6"})({name:"1ysr8wj",styles:"padding:4px 10px;font-size:12px;color:rgba(255, 255, 255, 0.7);background:rgba(10, 14, 22, 0.6);border:solid 1px rgba(127, 214, 255, 0.25);border-radius:999px;cursor:pointer;&[aria-pressed='true']{color:#0d0d12;background:#7fd6ff;border-color:#7fd6ff;}"}),Z=(0,r.f)("div",{target:"e1p42bwd5"})({name:"1wesxqa",styles:"display:flex;gap:12px"}),$=(0,r.f)(h.f,{target:"e1p42bwd4"})("padding:10px 28px;font-size:14px;letter-spacing:0.1em;color:#0d0d12;background:",z,";transition:background 0.2s ease;&:hover{background:#7fd6ff;}"),J=(0,r.f)(h.f,{target:"e1p42bwd3"})("padding:9px 27px;font-size:14px;letter-spacing:0.1em;color:",z,";border:solid 1px rgba(255, 255, 255, 0.4);transition:border-color 0.2s ease,color 0.2s ease;&:hover{color:#7fd6ff;border-color:#7fd6ff;}@media (max-width: 859px){display:none;}"),Q=(0,r.f)("div",{target:"e1p42bwd2"})({name:"1uz9rs",styles:"position:absolute;z-index:2;left:50%;bottom:12px;transform:translateX(-50%);@media (max-width: 859px){display:none;}"}),ee=(0,r.f)("div",{target:"e1p42bwd1"})("width:",40,"px;height:",40,"px;display:flex;align-items:center;justify-content:center;animation:",y," ",1,"s ",m.W," ",w,"s 1 normal both running;&::before{content:'';width:",28.2842712474619,"px;height:",28.2842712474619,"px;border-right:solid 1px rgba(255, 255, 255, 0.5);border-bottom:solid 1px rgba(255, 255, 255, 0.5);transform:rotate(45deg);}"),et=(0,r.f)("div",{target:"e1p42bwd0"})({name:"1nut75i",styles:"width:100%;height:100svh;min-height:600px;overflow:hidden;position:relative;box-sizing:border-box;background:#0d0d12"});var er=e.i(58678),ea=e.i(48731);let ei={"@context":"https://schema.org","@type":"Organization",name:"応用数学研究部",alternateName:["応数研","OSK","東京理科大学 応用数学研究部"],url:"https://oskt.us",logo:"https://oskt.us/images/og.jpg",foundingDate:"1959",description:"東京理科大学の部活動(Ⅰ部研究会)。数学・プログラミング・データサイエンス・統計・AIを扱い、機械学習、数理統計、競技プログラミング、コンピュータサイエンス、3DCG、Web・アプリ開発の班で活動する。",parentOrganization:{"@type":"CollegeOrUniversity",name:"東京理科大学",url:"https://www.tus.ac.jp/"},location:{"@type":"Place",name:`東京理科大学 ${ea.f.clubroom}(部室)`},knowsAbout:["応用数学","機械学習","データサイエンス","統計学","統計検定","競技プログラミング","ICPC","AtCoder","コンピュータサイエンス","型理論","定理証明 Lean","3DCG","Unity","Blender","Webアプリ開発"],email:ea.f.mail,sameAs:[`https://x.com/${ea.f.twitterId}`,"https://github.com/TUS-OSK"]};function en(){return(0,t.jsx)(er.default,{children:(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(ei)}})})}function eo({club:e,flow:r,news:u}){let m=[...u].sort((e,t)=>(0,a.f)(e.date,t.date)).slice(0,5);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.r,{}),(0,t.jsx)(en,{}),(0,t.jsxs)(s.f,{overlayHeader:!0,children:[(0,t.jsx)(C,{}),(0,t.jsx)(c.f,{photos:d.q,label:"活動の様子",flow:!0}),(0,t.jsx)(el,{"aria-labelledby":"intro-title",children:(0,t.jsxs)(o.t,{children:[(0,t.jsx)(o.Q,{children:"Applied Mathematics Club, Tokyo University of Science"}),(0,t.jsxs)(es,{id:"intro-title",children:["数学とコードを、",(0,t.jsx)("br",{}),"いっしょに楽しもう。"]}),(0,t.jsx)(ec,{children:e.caption}),(0,t.jsxs)(l.A,{children:[(0,t.jsx)(l.U,{href:"/about",children:"応数研とは"}),(0,t.jsx)(l.U,{href:"/teams",variant:"secondary",children:"班とプロジェクト"})]})]})}),(0,t.jsx)(o.Z,{id:"facts",label:"Basics",title:"はじめての方へ",tone:"surface",children:(0,t.jsx)(n.L,{facts:e.facts,extra:{活動日:(0,t.jsx)(n.B,{})}})}),(0,t.jsx)(o.Z,{id:"teams",label:"Teams",title:"班とプロジェクト",lead:"気になる班から、のぞいてみてくださいね。いくつ掛け持ちしても、新しく始めても大丈夫です！",children:(0,t.jsx)(n.K,{teams:f.P})}),(0,t.jsxs)(o.Z,{id:"flow",label:"Every year",title:"1年の流れ",narrow:!0,children:[(0,t.jsx)(n.M,{items:r}),(0,t.jsx)(l.A,{style:{marginTop:24},children:(0,t.jsx)(l.U,{href:"/schedule",variant:"text",children:"年間スケジュール"})})]}),(0,t.jsxs)(o.Z,{id:"news",label:"News",title:"お知らせ",narrow:!0,children:[(0,t.jsx)(n.d,{items:m}),(0,t.jsx)(l.A,{style:{marginTop:24},children:(0,t.jsx)(l.U,{href:"/news",variant:"text",children:"ニュースをすべて見る"})})]}),(0,t.jsx)(ed,{"aria-labelledby":"join-title",children:(0,t.jsxs)(o.t,{narrow:!0,children:[(0,t.jsx)(o.Q,{children:"Join us"}),(0,t.jsxs)(ef,{id:"join-title",children:["見学は、",(0,t.jsx)("br",{}),"いつでも気軽にどうぞ。"]}),(0,t.jsx)(eu,{children:"Discord サーバーに入るだけで見学できます。勉強会の様子を見たり、気になることを部員に聞いたりできますよ。入部するかどうかは、そのあとゆっくり決めてくださいね。"}),(0,t.jsxs)(l.A,{children:[(0,t.jsx)(l.U,{href:"/pay",children:"入部・見学"}),(0,t.jsx)(l.U,{href:"/faq",variant:"secondary",children:"よくある質問"})]})]})})]})]})}let el=(0,r.f)("section",{target:"e1xgym185"})("padding:",u.z.xxl," 0 ",u.z.xl,";",u.A.sp,"{padding:",u.z.xl," 0 ",u.z.lg,";}"),es=(0,r.f)("h2",{target:"e1xgym184"})("margin:0 0 ",u.z.md,";font-family:",u.e.serif,";font-weight:600;font-size:",u.o.xxl,";line-height:1.4;letter-spacing:0.1em;"),ec=(0,r.f)("p",{target:"e1xgym183"})("margin:0 0 ",u.z.lg,";max-width:40em;color:",u.B.inkMuted,";line-height:2.1;"),ed=(0,r.f)("section",{target:"e1xgym182"})("padding:",u.z.xxl," 0;text-align:left;border-top:solid 1px ",u.B.line,";background:radial-gradient(ellipse 70% 100% at 50% 100%, rgba(127, 214, 255, 0.08), transparent 70%),",u.B.base,";"),ef=(0,r.f)("h2",{target:"e1xgym181"})("margin:0 0 ",u.z.sm,";font-family:",u.e.serif,";font-weight:600;font-size:",u.o.xl,";letter-spacing:0.08em;"),eu=(0,r.f)("p",{target:"e1xgym180"})("margin:0 0 ",u.z.lg,";color:",u.B.inkMuted,";line-height:2;");var em=e.i(71949);e.s(["__N_SSG",0,!0,"default",0,function({club:e,flow:r,news:a}){return(0,t.jsx)(eo,{club:e,flow:r,news:(0,em.toNewsItems)(a)})}],43181)}]);