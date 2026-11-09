(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19675,(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(43181)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},3677,(e,t,a)=>{t.exports={label:"入会はこちらから！",path:"/pay",enabled:!0}},43181,e=>{"use strict";var t=e.i(91398),a=e.i(66706),r=e.i(13299),i=e.i(46418),o=e.i(54097);let n=[{src:"/images/activity/ml-blackboard-work.jpg",alt:"黒板で誤差逆伝播を計算する部員",band:"機械学習班"},{src:"/images/activity/ml-writing-together.jpg",alt:"黒板の前で議論する部員",band:"機械学習班"},{src:"/images/activity/ml-board.jpg",alt:"誤差逆伝播法の計算を書き込んだ黒板",band:"機械学習班"}];function l(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(i.n,{children:"活動の様子"}),(0,t.jsx)(s,{children:n.map((e,a)=>(0,t.jsxs)(c,{children:[(0,t.jsx)("img",{src:(0,o.v)(e.src),alt:e.alt,loading:"lazy"}),(0,t.jsx)(d,{children:(0,t.jsx)(f,{children:e.band})})]},a))})]})}let s=(0,r.f)("div",{target:"e1bssynv3"})({name:"49jszk",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;@media (max-width: 900px){grid-template-columns:repeat(2, 1fr);}@media (max-width: 600px){grid-template-columns:1fr;}"}),c=(0,r.f)("div",{target:"e1bssynv2"})({name:"1d94xdw",styles:"position:relative;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12);aspect-ratio:4/3;img{width:100%;height:100%;object-fit:cover;display:block;}"}),d=(0,r.f)("div",{target:"e1bssynv1"})({name:"67ekhz",styles:"position:absolute;left:0;right:0;bottom:0;padding:10px 14px;background:linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))"}),f=(0,r.f)("div",{target:"e1bssynv0"})({name:"v905nl",styles:"color:#fff;font-size:12px;font-weight:bold"});var h=e.i(34666),m=e.i(83958);function u({aboutData:{caption:e}}){return(0,t.jsx)(v,{children:(0,t.jsxs)(x,{children:[(0,t.jsx)(p,{children:"OSK"}),e,(0,t.jsx)(g,{children:(0,t.jsx)(h.U,{color:{primary:"#bbb",secondary:"#333"},href:(0,m.E)("about"),children:"DETAIL"})})]})})}let p=(0,r.f)("div",{target:"ez6ekud3"})({name:"1kblwd7",styles:"font-family:'novecentosans';font-weight:bold;font-size:28px;letter-spacing:0.1em;margin-bottom:16px;color:#fff"}),x=(0,r.f)(i.Z,{target:"ez6ekud2"})({name:"1kwsc2o",styles:"background-color:#333;color:#bbb;font-size:16px;line-height:1.6em"}),g=(0,r.f)("div",{target:"ez6ekud1"})({name:"1wyywwk",styles:"display:flex;flex-direction:row-reverse;margin-bottom:0"}),v=(0,r.f)("div",{target:"ez6ekud0"})("");var w=e.i(24666),y=e.i(91788);function b({type:e}){let a=(0,y.useRef)(null);return(0,y.useEffect)(()=>{let t=a.current;if(!t)return;let r=t.getContext("2d");if(!r)return;let i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=0,n=window.devicePixelRatio||1,{width:l,height:s}=t.getBoundingClientRect();t.width=l*n,t.height=s*n,r.scale(n,n);let c=({ml:()=>{var e,t,a;let i,o,n;return e=r,t=l,a=s,i=e=>9e-4*(e-.3*t)*(e-.3*t)+.3*a+30*Math.sin(.012*e),o=20,n=0,()=>{e.fillStyle="#1b1b2a",e.fillRect(0,0,t,a),e.strokeStyle="rgba(255,255,255,0.07)";for(let r=16;r<a;r+=24)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke();e.beginPath(),e.strokeStyle="#8fa0ff",e.lineWidth=3;for(let a=0;a<=t;a+=4){let t=i(a);0===a?e.moveTo(a,t):e.lineTo(a,t)}e.stroke();let r=.3*t;o+=(r-o)*.01+.5*Math.sin(.05*n),e.beginPath(),e.fillStyle="#da6272",e.arc(o,i(o)-10,7,0,2*Math.PI),e.fill(),n++}},stat:()=>{var e,t,a;let i,o;return e=r,t=l,a=s,i=Array.from({length:20},(e,t)=>{let a=(t/20-.5)*4;return Math.exp(-a*a/2)}),o=0,()=>{e.fillStyle="#2a2235",e.fillRect(0,0,t,a);let r=t/20;for(let t=0;t<20;t++){let n=.08*Math.sin(.04*o+t),l=Math.max(.03,i[t]+n*i[t]),s=l*(a-60);e.fillStyle=`rgba(218, 98, 114, ${.4+.5*l})`,e.fillRect(t*r+2,a-30-s,r-4,s)}e.beginPath(),e.strokeStyle="rgba(255,255,255,0.6)",e.lineWidth=2;for(let r=0;r<=t;r+=4){let i=(r/t-.5)*4,o=a-30-Math.exp(-i*i/2)*(a-60);0===r?e.moveTo(r,o):e.lineTo(r,o)}e.stroke(),o++}},cs:()=>(function(e,t,a){let r=Array.from({length:12},()=>({x:20+Math.random()*(t-40),y:20+Math.random()*(a-40)})),i=[];for(let e=0;e<12;e++)i.push([e,(e+1+Math.floor(2*Math.random()))%12]);let o=[0],n=[0],l=0;return()=>{if(e.fillStyle="#131722",e.fillRect(0,0,t,a),l%18==0)if(n.length){let e=n.shift();i.forEach(([t,a])=>{t!==e||o.includes(a)||(o.push(a),n.push(a)),a!==e||o.includes(t)||(o.push(t),n.push(t))})}else o=[0],n=[0];i.forEach(([t,a])=>{e.strokeStyle="rgba(255,255,255,0.15)",e.beginPath(),e.moveTo(r[t].x,r[t].y),e.lineTo(r[a].x,r[a].y),e.stroke()}),r.forEach((t,a)=>{let r=o.includes(a);e.beginPath(),e.fillStyle=r?"#6fe3c0":"rgba(255,255,255,0.3)",e.arc(t.x,t.y,r?6:4,0,2*Math.PI),e.fill()}),l++}})(r,l,s),cp:()=>{var e,t,a;let i,o,n,c;return e=r,t=l,a=s,i=Array.from({length:18},()=>Math.random()),o=0,n=0,c=0,()=>{if(e.fillStyle="#1c1f14",e.fillRect(0,0,t,a),c%6==0)if(o<18)if(n<18-o-1){if(i[n]>i[n+1]){let e=i[n];i[n]=i[n+1],i[n+1]=e}n++}else n=0,o++;else i=Array.from({length:18},()=>Math.random()),o=0,n=0;let r=t/18;i.forEach((t,i)=>{let o=t*(a-40);e.fillStyle=i===n||i===n+1?"#f2c14e":"#9fd168",e.fillRect(i*r+2,a-20-o,r-4,o)}),c++}},cg:()=>{var e,t,a;let i,o;return e=r,t=l,a=s,e.fillStyle="#0e0e16",e.fillRect(0,0,t,a),i=Array.from({length:140},()=>({x:Math.random()*t,y:Math.random()*a})),o=0,()=>{e.fillStyle="rgba(14,14,22,0.1)",e.fillRect(0,0,t,a),i.forEach(r=>{let i,n,l,s=(i=r.x,n=r.y,(Math.sin(.012*i+.002*(l=o))+Math.cos(.015*n-.0017*l))*Math.PI),c=r.x+1.4*Math.cos(s),d=r.y+1.4*Math.sin(s);e.strokeStyle="rgba(143, 160, 255, 0.5)",e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(c,d),e.stroke(),r.x=c,r.y=d,(r.x<0||r.x>t||r.y<0||r.y>a)&&(r.x=Math.random()*t,r.y=Math.random()*a)}),o++}},web:()=>{var e,t,a;let i,o,n;return e=r,t=l,a=s,i=["<",">","/","{","}",";"],n=Array(o=Math.max(1,Math.floor(t/16))).fill(0).map(()=>-20*Math.random()),e.fillStyle="#0c1a24",e.fillRect(0,0,t,a),()=>{e.fillStyle="rgba(12, 26, 36, 0.16)",e.fillRect(0,0,t,a),e.fillStyle="#5ec8e8",e.font="14px monospace";for(let t=0;t<o;t++){let r=i[Math.floor(Math.random()*i.length)];e.fillText(r,16*t,16*n[t]),16*n[t]>a&&Math.random()>.975&&(n[t]=0),n[t]++}}}})[e]();if(i)return void c();let d=()=>{c(),o=requestAnimationFrame(d)};return o=requestAnimationFrame(d),()=>cancelAnimationFrame(o)},[e]),(0,t.jsx)(M,{ref:a})}let M=(0,r.f)("canvas",{target:"e17zwido0"})({name:"10rcg5p",styles:"position:absolute;inset:0;width:100%;height:100%"}),E=[{name:"機械学習班",caption:"機械学習・データサイエンスの手法を学び、実践します。",motif:"ml",photo:"/images/activity/ml-board.jpg"},{name:"数理統計班",caption:"数学・統計学の理論と応用を探求します。",motif:"stat"},{name:"コンピュータサイエンス班",caption:"計算機科学の理論・低レイヤ技術などを学びます。",motif:"cs"},{name:"競プロ班",caption:"競技プログラミングのコンテストに参加し、アルゴリズムの腕を磨きます。",motif:"cp"},{name:"CG班",caption:"コンピュータグラフィックスや映像制作に取り組みます。",motif:"cg"},{name:"Web・アプリ開発班",caption:"Webサイトやアプリケーションの開発を行います。",motif:"web"}];function T(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(i.n,{children:"班について"}),(0,t.jsx)(j,{children:"入部後は自分の興味に合わせて班を選んで活動します。所属が違う部員と新しい班をつくることもできます。"}),(0,t.jsx)(R,{children:E.map(e=>(0,t.jsxs)(A,{href:(0,m.E)("about"),children:[e.photo?(0,t.jsx)(k,{src:(0,o.v)(e.photo),alt:`${e.name}の活動の様子`,loading:"lazy"}):(0,t.jsx)(b,{type:e.motif}),(0,t.jsxs)(S,{children:[(0,t.jsx)(z,{children:e.name}),(0,t.jsx)(_,{children:e.caption})]})]},e.name))})]})}let j=(0,r.f)("p",{target:"e3g6au56"})({name:"q4lo16",styles:"text-align:center;color:#666;font-size:14px;margin:-24px 0 40px;@media (max-width: 700px){margin-top:-8px;}"}),R=(0,r.f)("div",{target:"e3g6au55"})({name:"49jszk",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;@media (max-width: 900px){grid-template-columns:repeat(2, 1fr);}@media (max-width: 600px){grid-template-columns:1fr;}"}),A=(0,r.f)(w.f,{target:"e3g6au54"})({name:"1yeyu2",styles:"position:relative;display:block;height:220px;border-radius:10px;overflow:hidden;text-decoration:none;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12);transition:transform 0.2s ease;&:hover{transform:translateY(-3px);}"}),k=(0,r.f)("img",{target:"e3g6au53"})({name:"hsbyz0",styles:"position:absolute;inset:0;width:100%;height:100%;object-fit:cover"}),S=(0,r.f)("div",{target:"e3g6au52"})({name:"5ysz2",styles:"position:absolute;left:0;right:0;bottom:0;z-index:2;padding:16px 18px;background:linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"}),z=(0,r.f)("div",{target:"e3g6au51"})({name:"1lelbod",styles:"color:#fff;font-weight:bold;font-size:16px"}),_=(0,r.f)("div",{target:"e3g6au50"})({name:"1r5egio",styles:"color:#ddd;font-size:12px;margin-top:4px;line-height:1.5em"});var L=e.i(69291);function D(){return(0,t.jsx)(P,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"compass",className:"svg-inline--fa fa-compass fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,t.jsx)("path",{fill:"currentColor",d:"M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"})})}function U(){return(0,t.jsx)(P,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"comments",className:"svg-inline--fa fa-comments fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,t.jsx)("path",{fill:"currentColor",d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"})})}let P=(0,r.f)("svg",{target:"e1i3lo1s0"})("width:",40,"px;height:",40,"px;");function I({contactData:{clubroom:e,twitterId:a,mail:r}}){return(0,t.jsxs)(N,{children:[(0,t.jsxs)(C,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(D,{}),"LOCATION"]}),(0,t.jsxs)(O,{children:[(0,t.jsx)(X,{children:(0,t.jsx)(L._,{})}),e]})]}),(0,t.jsxs)(G,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(U,{}),"CONTACT"]}),(0,t.jsxs)(O,{children:[(0,t.jsx)(X,{children:(0,t.jsx)(L.T,{})}),(0,t.jsxs)(Y,{target:"_blank",rel:"noopener",href:(0,m.C)("twitter",a),children:["@",a]})]}),(0,t.jsxs)(O,{children:[(0,t.jsx)(X,{children:(0,t.jsx)(L.I,{})}),(0,t.jsx)(Y,{href:(0,m.T)(r),children:r})]})]})]})}let N=(0,r.f)("div",{target:"edsla3w7"})({name:"jtl1pt",styles:"display:flex;flex-flow:row;@media (max-width: 700px){flex-flow:column;}"}),F=(0,r.f)("div",{target:"edsla3w6"})({name:"1osbop6",styles:"padding:60px 40px;flex:1"}),C=(0,r.f)(F,{target:"edsla3w5"})({name:"1b8ying",styles:"background-color:#7987bb"}),G=(0,r.f)(F,{target:"edsla3w4"})({name:"6df8ic",styles:"background-color:#da8d9b"}),B=(0,r.f)(i.n,{target:"edsla3w3"})({name:"1iulk2y",styles:"display:flex;flex-flow:column;align-items:center;margin-bottom:40px"}),O=(0,r.f)("div",{target:"edsla3w2"})("display:flex;justify-content:center;font-size:16px;line-height:",24,"px;color:#333;max-width:240px;text-align:center;margin:0 auto 16px;"),X=(0,r.f)("div",{target:"edsla3w1"})("width:",24,"px;height:",24,"px;margin-right:4px;"),Y=(0,r.f)("a",{target:"edsla3w0"})({name:"1wjykim",styles:"color:#333"});var q=e.i(92241),W=e.i(49804),H=e.i(7065);let K=H.q`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,V=H.q`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,Z=H.q`
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,$=0+1.5*.8,{label:J,path:Q,enabled:ee=!0}=e.i(3677).default,et=()=>(0,t.jsx)(er,{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:16,height:16,children:(0,t.jsx)("path",{fill:"currentColor",d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.099 18.069.104 18.08.113 18.087a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"})});function ea(){return ee?(0,t.jsxs)(en,{href:Q,children:[(0,t.jsx)(et,{}),(0,t.jsx)(ei,{children:J})]}):(0,t.jsxs)(el,{children:[(0,t.jsx)(et,{}),(0,t.jsx)(ei,{children:J})]})}let er=(0,r.f)("svg",{target:"ebsuzlz3"})({name:"eykqtd",styles:"flex:none"}),ei=(0,r.f)("span",{target:"ebsuzlz2"})("margin-left:4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:14px;line-height:",16,"px;"),eo=`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  border-radius: 4px;
  height: 40px;
  max-width: 200px;
  padding: 0 16px;
`,en=(0,r.f)(w.f,{target:"ebsuzlz1"})(eo," background-color:#da6272;color:#fff;"),el=(0,r.f)("div",{target:"ebsuzlz0"})(eo," background-color:#aaa;color:#eee;cursor:not-allowed;"),es=(e,t)=>(t+96)%96*96+(e+96)%96,ec=["gd","ant","ising","life","seigaiha","tropical"],ed=`#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }`,ef=`#version 300 es
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
const float GRID = 96.;

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
vec3 gradientDescent(vec2 uv) {
  float h = texture(uH, uv).r;
  vec2 e = vec2(1. / 256., 0.);
  float hx = texture(uH, uv + e.xy).r - texture(uH, uv - e.xy).r;
  float hy = texture(uH, uv + e.yx).r - texture(uH, uv - e.yx).r;
  vec3 n = normalize(vec3(-hx * 26., -hy * 26., 1.));
  float shade = clamp(dot(n, normalize(vec3(-.5, .55, .65))), 0., 1.);
  vec2 g = uv * 70.;
  float dotMark = 1. - smoothstep(.09, .09 + 1.5 * fwidth(g.x), length(fract(g) - .5));
  float x = h * 14.;
  float contour = hair(min(fract(x), 1. - fract(x)), .03);
  float tr = texture(uGT, uv).r;
  trailGlow = SPARK * (tr * tr * 1.8);
  return LINE * (dotMark * (.10 + .75 * shade * shade) + contour * .16 * (.4 + h));
}

// 1: 競技プログラミング / ラングトンのアリ, 3: コンピュータサイエンス / ライフゲーム
vec3 cells(vec2 uv, sampler2D grid, bool ant) {
  vec2 g = uv * 40.;
  vec2 v = texelFetch(grid, ivec2(mod(floor(g), GRID)), 0).rg;
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
}`,eh=e=>new Promise((t,a)=>{let r=new Image;r.onload=()=>t(r),r.onerror=a,r.src=e});function em({mode:e,onReady:a}){let r=(0,y.useRef)(null),i=(0,y.useRef)(null),n=(0,y.useRef)(null),l=(0,y.useRef)(e),s=(0,y.useRef)(a),[c,d]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{let e=r.current,t=i.current;if(!e||!t)return;let a=function({canvas:e,frame:t,textures:a,mode:r,onReady:i}){let o={setMode:()=>void 0,destroy:()=>void 0},n=e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!n)return o;let l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=!1,c=0,d=null,f=!0,h=r,m=r,u=-1/0,p=(e,t)=>{let a=n.createShader(e);return n.shaderSource(a,t),n.compileShader(a),n.getShaderParameter(a,n.COMPILE_STATUS)||console.error(n.getShaderInfoLog(a)),a},x=n.createProgram();if(n.attachShader(x,p(n.VERTEX_SHADER,ed)),n.attachShader(x,p(n.FRAGMENT_SHADER,ef)),n.linkProgram(x),!n.getProgramParameter(x,n.LINK_STATUS))return o;n.useProgram(x),n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);let g=n.getAttribLocation(x,"a");n.enableVertexAttribArray(g),n.vertexAttribPointer(g,2,n.FLOAT,!1,0,0);let v=n.getExtension("EXT_texture_filter_anisotropic");n.pixelStorei(n.UNPACK_ALIGNMENT,1);let w=(e,t,a,r)=>{n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,n.createTexture()),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,a===n.NEAREST?n.NEAREST:n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,r),n.uniform1i(n.getUniformLocation(x,t),e)},y=(e,t,a,r,i=!0)=>{w(e,r,i?n.LINEAR_MIPMAP_LINEAR:n.NEAREST,a),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),i&&n.generateMipmap(n.TEXTURE_2D),v&&i&&a===n.REPEAT&&n.texParameterf(n.TEXTURE_2D,v.TEXTURE_MAX_ANISOTROPY_EXT,8)},b=(e,t,a)=>{w(e,t,a,n.REPEAT),n.texImage2D(n.TEXTURE_2D,0,n.R8,1,1,0,n.RED,n.UNSIGNED_BYTE,new Uint8Array(1))};b(5,"uLife",n.NEAREST),b(6,"uAnt",n.NEAREST),b(7,"uIs",n.NEAREST),b(8,"uH",n.LINEAR),b(9,"uGT",n.LINEAR);let M={life:()=>({unit:5,size:96,rg:!0,allocated:!1,...function(){let e=new Uint8Array(9216),t=new Float32Array(9216),a=new Float32Array(9216),r=new Uint8Array(18432),i=0,o=0;for(let a=0;a<9216;a++)t[a]=e[a]=+(.2>Math.random());let n=()=>{let t=new Uint8Array(9216),r=0;for(let i=0;i<96;i++)for(let o=0;o<96;o++){let n=0;for(let t=-1;t<=1;t++)for(let a=-1;a<=1;a++)(a||t)&&(n+=e[es(o+a,i+t)]);let l=96*i+o,s=3===n||2===n&&e[l]?1:0;s&&!e[l]&&(a[l]=1),t[l]=s,r+=s}e=t,o++,(r<276.48||o%45==0)&&(t=>{let a=Math.floor(96*Math.random()),r=Math.floor(96*Math.random());for(let[i,o]of t)e[es(a+i,r+o)]=1})(.5>Math.random()?[[1,0],[2,1],[0,2],[1,2],[2,2]]:[[1,0],[2,0],[0,1],[1,1],[1,2]])};return{update(o){i+=o;for(let e=0;i>=.9&&e<5;e++)i-=.9,n();let l=1-Math.exp(-(3*o)),s=Math.exp(-(1.5*o));for(let i=0;i<9216;i++)t[i]+=(e[i]-t[i])*l,a[i]*=s,r[2*i]=255*t[i],r[2*i+1]=255*Math.min(1,.7*a[i]);return r}}}()}),ant:()=>({unit:6,size:96,rg:!0,allocated:!1,...function(){let e=[-1,-1,1,1],t=new Uint8Array(9216),a=new Float32Array(9216),r=new Uint8Array(18432),i=[],o=0,n=()=>{t.fill(0),o=0,i=Array.from({length:6},()=>({x:Math.floor(96*Math.random()),y:Math.floor(96*Math.random()),d:Math.floor(4*Math.random())}))},l=()=>{for(let a of i){let r=es(a.x,a.y);a.d=(a.d+e[t[r]]+4)%4,t[r]=(t[r]+1)%e.length,a.x=(a.x+[0,1,0,-1][a.d]+96)%96,a.y=(a.y+[-1,0,1,0][a.d]+96)%96}++o>36e3&&n()};n();for(let e=0;e<6e3;e++)l();for(let e=0;e<9216;e++)a[e]=t[e]/3;return{update(e){if(e>0)for(let e=0;e<50;e++)l();let o=1-Math.exp(-(6*e));for(let e=0;e<9216;e++)a[e]+=(t[e]/3-a[e])*o,r[2*e]=255*a[e],r[2*e+1]=0;for(let e of i)r[2*es(e.x,e.y)+1]=255;return r}}}()}),ising:()=>({unit:7,size:96,rg:!0,allocated:!1,...function(){let e=new Int8Array(9216),t=new Int8Array(9216),a=new Float32Array(9216),r=new Float32Array(9216),i=new Uint8Array(18432);e.fill(1),t.fill(-1);for(let a=0;a<7;a++){let a=96*Math.random(),r=96*Math.random(),i=6+12*Math.random();for(let o=0;o<96;o++)for(let n=0;n<96;n++){let l=Math.min(Math.abs(n-a),96-Math.abs(n-a)),s=Math.min(Math.abs(o-r),96-Math.abs(o-r));l*l+s*s<i*i&&(e[96*o+n]=-1,t[96*o+n]=1)}}for(let i=0;i<9216;i++)a[i]=(1+e[i])/2,r[i]=(1+t[i])/2;let o=0;return{update(n){for(o+=9e3*n;o>=1;o--){let a=Math.floor(96*Math.random()),r=Math.floor(96*Math.random()),i=96*r+a;if(.5>Math.random()){let o=t[i]+t[es(a,r-1)]+t[es(a-1,r)],n=-2*e[i]*o;(n<=0||Math.random()<Math.exp(-n/1.05))&&(e[i]=-e[i])}else{let o=e[i]+e[es(a,r+1)]+e[es(a+1,r)],n=-2*t[i]*o;(n<=0||Math.random()<Math.exp(-n/1.05))&&(t[i]=-t[i])}}let l=1-Math.exp(-(2.5*n));for(let o=0;o<9216;o++)a[o]+=((1+e[o])/2-a[o])*l,r[o]+=((1+t[o])/2-r[o])*l,i[2*o]=255*a[o],i[2*o+1]=255*r[o];return i}}}()}),gd:()=>{let e=function(){let e=(e,t)=>{let a=t,r=Array.from({length:e*e},()=>{let e=(a=1664525*a+0x3c6ef35f>>>0)/0x100000000*Math.PI*2;return[Math.cos(e),Math.sin(e)]}),i=e=>e*e*e*(e*(6*e-15)+10);return(t,a)=>{let o=Math.floor(t),n=Math.floor(a),l=t-o,s=a-n,c=(t,a,i,o)=>{let n=r[(a%e+e)%e*e+(t%e+e)%e];return n[0]*i+n[1]*o},d=i(l),f=i(s),h=c(o,n,l,s)+d*(c(o+1,n,l-1,s)-c(o,n,l,s));return h+f*(c(o,n+1,l,s-1)+d*(c(o+1,n+1,l-1,s-1)-c(o,n+1,l,s-1))-h)}},t=[e(4,11),e(8,23),e(16,37)],a=new Float32Array(65536),r=1/0,i=-1/0;for(let e=0;e<256;e++)for(let o=0;o<256;o++){let n=o/256,l=e/256,s=t[0](4*n,4*l)+.45*t[1](8*n,8*l)+.15*t[2](16*n,16*l);a[256*e+o]=s,r=Math.min(r,s),i=Math.max(i,s)}for(let e=0;e<65536;e++)a[e]=(a[e]-r)/(i-r);let o=(e,t)=>{let r=(e%1+1)%1*256-.5,i=(t%1+1)%1*256-.5,o=Math.floor(r),n=Math.floor(i),l=r-o,s=i-n,c=(e,t)=>a[(t+256)%256*256+(e+256)%256];return(c(o,n)*(1-l)+c(o+1,n)*l)*(1-s)+(c(o,n+1)*(1-l)+c(o+1,n+1)*l)*s},n=1/256,l=(e,t)=>[(o(e+n,t)-o(e-n,t))/(2*n),(o(e,t+n)-o(e,t-n))/(2*n)],s=new Float32Array(262144),c=new Uint8Array(262144),d=()=>({x:Math.random(),y:Math.random(),vx:0,vy:0,still:0,age:0}),f=Array.from({length:18},d),h=(e,t)=>{let a=Math.round((e%1+1)%1*512),r=Math.round((t%1+1)%1*512);for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let i=(r+e+512)%512*512+(a+t+512)%512;s[i]=Math.max(s[i],t||e?.45:1)}};return{height:a,update(e){let t=60*e,a=Math.pow(.992,t);for(let e=0;e<262144;e++)s[e]*=a;for(let a=0;a<f.length;a++){let r=f[a],[i,o]=l(r.x,r.y),n=Math.pow(.93,t);r.vx=r.vx*n-22e-6*i*t,r.vy=r.vy*n-22e-6*o*t;let s=Math.max(1,Math.ceil(512*Math.hypot(r.vx,r.vy)));for(let e=1;e<=s;e++)h(r.x+r.vx*e/s,r.y+r.vy*e/s);r.x+=r.vx,r.y+=r.vy,r.age+=e,r.still=4e-5>Math.hypot(r.vx,r.vy)?r.still+e:0,(r.still>1.6||r.age>22)&&(f[a]=d())}for(let e=0;e<262144;e++)c[e]=255*Math.min(1,s[e]);return c}}}();return n.activeTexture(n.TEXTURE8),n.texImage2D(n.TEXTURE_2D,0,n.R16F,256,256,0,n.RED,n.FLOAT,e.height),{unit:9,size:512,rg:!1,allocated:!1,update:e.update}}},E={},T=(e,t)=>{let a=M[e];if(!a)return;let r=E[e]??=a(),i=r.update(t);n.activeTexture(n.TEXTURE0+r.unit);let o=r.rg?n.RG:n.RED;r.allocated?n.texSubImage2D(n.TEXTURE_2D,0,0,0,r.size,r.size,o,n.UNSIGNED_BYTE,i):(n.texImage2D(n.TEXTURE_2D,0,r.rg?n.RG8:n.R8,r.size,r.size,0,o,n.UNSIGNED_BYTE,i),r.allocated=!0)},j={x:-.6,y:-.7,tx:-.6,ty:-.7},R={x:0,y:0,tx:0,ty:0},A=-1/0,k=e=>{if("mouse"!==e.pointerType)return;let a=t.getBoundingClientRect(),r=e=>Math.max(-1.8,Math.min(1.8,e));j.tx=r((e.clientX-(a.left+a.width/2))/(a.height/2)),j.ty=r((e.clientY-(a.top+a.height/2))/(a.height/2)),R.tx=e.clientX/window.innerWidth*2-1,R.ty=e.clientY/window.innerHeight*2-1,A=performance.now()},S=()=>{let a=Math.min(window.devicePixelRatio||1,2),r=e.getBoundingClientRect();e.width=Math.max(1,Math.round(r.width*a)),e.height=Math.max(1,Math.round(r.height*a)),n.viewport(0,0,e.width,e.height);let i=t.getBoundingClientRect();n.uniform2f(n.getUniformLocation(x,"uRes"),e.width,e.height),n.uniform1f(n.getUniformLocation(x,"uDpr"),a),n.uniform4f(n.getUniformLocation(x,"uRect"),(i.left-r.left)*a,(i.top-r.top)*a,i.width*a,i.height*a),d?.()},z=new ResizeObserver(S),_=e=>{let t=Math.min(1,Math.max(0,(e-u)/1e3/.9));return t*t*(3-2*t)},L=e=>{n.uniform1f(n.getUniformLocation(x,"uTime"),e/1e3),n.uniform2f(n.getUniformLocation(x,"uLight"),j.x,j.y),n.uniform2f(n.getUniformLocation(x,"uPar"),R.x,R.y),n.uniform1i(n.getUniformLocation(x,"uMode0"),ec.indexOf(m)),n.uniform1i(n.getUniformLocation(x,"uMode1"),ec.indexOf(h)),n.uniform1f(n.getUniformLocation(x,"uFade"),_(e)),n.drawArrays(n.TRIANGLES,0,3)},D=performance.now(),U=e=>{if(c=0,s||!f||document.hidden)return;let t=Math.min(.1,(e-D)/1e3);if(D=e,e-A>2500){let t=e/1e3;j.tx=-.55+.45*Math.sin(.23*t),j.ty=-.6+.35*Math.cos(.31*t),R.tx=0,R.ty=0}let a=1-Math.exp(-(5*t));j.x+=(j.tx-j.x)*a,j.y+=(j.ty-j.y)*a,R.x+=(R.tx-R.x)*a,R.y+=(R.ty-R.y)*a,T(h,t),m!==h&&1>_(e)&&T(m,t),L(e),c=requestAnimationFrame(U)},P=()=>{c||s||l||!d||(D=performance.now(),c=requestAnimationFrame(U))},I=new IntersectionObserver(([e])=>{(f=e.isIntersecting)&&P()}),N=()=>{document.hidden||P()},F=t=>{t.preventDefault(),s=!0,e.style.display="none"};return e.addEventListener("webglcontextlost",F),Promise.all([a.inkA,a.inkB,a.soft,a.tropical,a.trails].map(eh)).then(([a,r,o,c,f])=>{s||(y(0,a,n.CLAMP_TO_EDGE,"uA"),y(1,r,n.CLAMP_TO_EDGE,"uB"),y(2,o,n.CLAMP_TO_EDGE,"uS"),y(3,c,n.REPEAT,"uT"),y(4,f,n.REPEAT,"uR",!1),d=()=>{T(h,0),L(l?0:performance.now())},S(),z.observe(e),z.observe(t),I.observe(e),window.addEventListener("pointermove",k,{passive:!0}),document.addEventListener("visibilitychange",N),d(),P(),i())}).catch(()=>void 0),{setMode(e){if(e===h)return;let t=performance.now();_(t)>=.5&&(m=h),h=e,u=l?-1/0:t,d?.()},destroy(){s=!0,c&&cancelAnimationFrame(c),z.disconnect(),I.disconnect(),window.removeEventListener("pointermove",k),document.removeEventListener("visibilitychange",N),e.removeEventListener("webglcontextlost",F)}}}({canvas:e,frame:t,mode:l.current,textures:{inkA:(0,o.v)("/images/hero/ink_a.webp"),inkB:(0,o.v)("/images/hero/ink_b.webp"),soft:(0,o.v)("/images/hero/ink_soft.webp"),tropical:(0,o.v)("/images/hero/tropical.webp"),trails:(0,o.v)("/images/hero/trails.webp")},onReady:()=>{d(!0),s.current?.()}});return n.current=a,()=>a.destroy()},[]),(0,y.useEffect)(()=>{l.current=e,n.current?.setMode(e)},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eu,{ref:r,"data-ready":c,"aria-hidden":"true"}),(0,t.jsx)(ep,{children:(0,t.jsx)(ex,{ref:i,src:(0,o.v)("/images/hero/ink_static.webp"),alt:"応用数学研究部","data-ready":c})})]})}let eu=(0,r.f)("canvas",{target:"e15rgzkp2"})({name:"n6t5nk",styles:"position:absolute;inset:0;width:100%;height:100%;display:block;opacity:0;transition:opacity 1.2s ease;&[data-ready='true']{opacity:1;}"}),ep=(0,r.f)("h1",{target:"e15rgzkp1"})({name:"1q6amu3",styles:"margin:0;font-size:inherit"}),ex=(0,r.f)("img",{target:"e15rgzkp0"})({name:"yjsrmj",styles:"position:absolute;z-index:1;display:block;aspect-ratio:1214/1843;top:92px;left:50%;transform:translateX(-50%);height:min(calc(100svh - 340px), 132vw);transition:opacity 1.2s ease;&[data-ready='true']{opacity:0;}@media (min-width: 860px){top:50%;left:auto;right:max(3vw, calc(50% - 600px));transform:translateY(-50%);height:min(94vh, 1120px, 75vw);}"}),eg="∇∂∑∫λπθ≈≠01ｱｲｳｴｵｶｷｸｹｺ#%&$";function ev({word:e}){let[a,r]=(0,y.useState)(e),[i,o]=(0,y.useState)(!1),n=(0,y.useRef)(e);return(0,y.useEffect)(()=>{if(e===n.current)return;let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=n.current;if(n.current=e,t)return void r(e);let i=performance.now(),l=0;o(!0);let s=t=>{let n=Math.min(1,(t-i)/520),c=Math.round(a.length+(e.length-a.length)*Math.min(1,1.6*n)),d=Math.floor(Math.max(0,1.25*n-.25)*e.length),f="";for(let t=0;t<c;t++)f+=t<d?e[t]:eg[Math.floor(Math.random()*eg.length)];r(n>=1?e:f),n<1?l=requestAnimationFrame(s):o(!1)};return l=requestAnimationFrame(s),()=>cancelAnimationFrame(l)},[e]),(0,t.jsx)(ey,{"data-text":a,"data-glitching":i,children:a})}let ew=H.q`
  0% { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 0); }
  20% { clip-path: inset(70% 0 5% 0); transform: translate(3px, 0); }
  40% { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(85% 0 2% 0); transform: translate(2px, 0); }
  80% { clip-path: inset(5% 0 80% 0); transform: translate(-1px, 0); }
  100% { clip-path: inset(45% 0 35% 0); transform: translate(1px, 0); }
`,ey=(0,r.f)("span",{target:"e1p8yz6q0"})("position:relative;display:inline-block;color:#fff;&[data-glitching='true']::before,&[data-glitching='true']::after{content:attr(data-text);position:absolute;inset:0;pointer-events:none;}&[data-glitching='true']::before{color:#7fd6ff;animation:",ew," 0.18s steps(2) infinite;}&[data-glitching='true']::after{color:#ff5d8f;mix-blend-mode:screen;animation:",ew," 0.23s steps(2) infinite reverse;}"),eb=[{word:"機械学習",mode:"gd",motif:"勾配降下法"},{word:"競技プログラミング",mode:"ant",motif:"ラングトンのアリ"},{word:"数理統計",mode:"ising",motif:"イジング模型の鱗文"},{word:"コンピュータサイエンス",mode:"life",motif:"ライフゲーム"},{word:"3DCG",mode:"seigaiha",motif:"青海波"},{word:"Web・アプリ開発",mode:"tropical",motif:"トロピカル曲線"}];var eM={name:"mgg7wz",styles:"html{background:#0d0d12;overscroll-behavior:none;}body{background:#fff;}"};function eE(){let[e,a]=(0,y.useState)(0),[r,i]=(0,y.useState)(null),[n,l]=(0,y.useState)(!1),[s,c]=(0,y.useState)(!1);(0,y.useEffect)(()=>{let e,t,r=(e=new URLSearchParams(window.location.search).get("bg"),(t=eb.findIndex(t=>t.mode===e))>=0?t:null);i(r),null!==r&&a(r),c(!!o.z||new URLSearchParams(window.location.search).has("bg"))},[]),(0,y.useEffect)(()=>{if(!n||null!==r||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=window.setInterval(()=>{document.hidden||a(e=>(e+1)%eb.length)},4e3);return()=>window.clearInterval(e)},[n,r]);let d=e=>{i(e),null!==e&&a(e);let t=new URL(window.location.href);null===e?t.searchParams.set("bg","cycle"):t.searchParams.set("bg",eb[e].mode),window.history.replaceState(null,"",t)},f=eb[e];return(0,t.jsxs)(eG,{children:[(0,t.jsx)(H.B,{styles:eM}),(0,t.jsx)(em,{mode:f.mode,onReady:()=>l(!0)}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(eR,{children:(0,t.jsx)(ea,{})}),(0,t.jsx)(eA,{children:(0,t.jsx)(q.f,{})})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eS,{children:"東京理科大学"}),(0,t.jsx)(ez,{"aria-label":"そうだ、応用数学しよう。",children:(0,t.jsxs)("span",{"aria-hidden":"true",children:["そうだ、",(0,t.jsx)("br",{}),(0,t.jsx)(ev,{word:f.word}),"しよう。"]})}),(0,t.jsx)(e_,{children:eb.map((a,r)=>(0,t.jsx)(eL,{"data-active":r===e,children:a.word},a.mode))}),(0,t.jsxs)(eP,{children:[(0,t.jsx)(eI,{href:(0,m.E)("about"),children:"部の様子"}),(0,t.jsx)(eN,{href:(0,m.E)("contact"),children:"ご連絡"})]})]}),s&&n&&(0,t.jsxs)(eD,{"aria-label":"背景の比較用",children:[(0,t.jsx)(eU,{type:"button","aria-pressed":null===r,onClick:()=>d(null),children:"巡回"}),eb.map((e,a)=>(0,t.jsx)(eU,{type:"button","aria-pressed":r===a,onClick:()=>d(a),children:e.motif},e.mode))]}),(0,t.jsx)(eF,{children:(0,t.jsx)(eC,{})})]})}let eT="rgba(255, 255, 255, 0.92)",ej=(0,r.f)("div",{target:"e1p42bwd15"})("position:relative;z-index:2;overflow:hidden;display:flex;flex-flow:column;padding:",40,"px 24px 0;box-sizing:border-box;@media (max-width: 859px){padding-top:8px;}a{color:rgba(255, 255, 255, 0.72);border-bottom-color:rgba(255, 255, 255, 0.4);}"),eR=(0,r.f)("div",{target:"e1p42bwd14"})("position:fixed;bottom:24px;right:24px;z-index:100;animation:",V," ",1,"s ",W.W," ",$+.2,"s 1 normal both running;"),eA=(0,r.f)("div",{target:"e1p42bwd13"})("animation:",V," ",1,"s ",W.W," ",$,"s 1 normal both running;"),ek=(0,r.f)("div",{target:"e1p42bwd12"})("position:absolute;z-index:2;left:24px;right:24px;bottom:24px;color:",eT,";animation:",Z," ",1,"s ",W.W," ",$,"s 1 normal both running;@media (min-width: 860px){left:max(6vw, calc(50% - 600px));right:auto;bottom:16vh;max-width:440px;}"),eS=(0,r.f)("p",{target:"e1p42bwd11"})({name:"i4ryc9",styles:"margin:0 0 12px;font-size:14px;letter-spacing:0.3em;color:rgba(255, 255, 255, 0.6)"}),ez=(0,r.f)("p",{target:"e1p42bwd10"})({name:"1jxxrmx",styles:"margin:0 0 16px;font-family:'Hiragino Mincho ProN','Yu Mincho','YuMincho',serif;font-size:clamp(22px, 2.8vw, 40px);line-height:1.5;letter-spacing:0.08em;white-space:nowrap"}),e_=(0,r.f)("p",{target:"e1p42bwd9"})({name:"1jzvb31",styles:"margin:0 0 24px;font-size:13px;line-height:1.9;color:rgba(255, 255, 255, 0.5);@media (max-width: 859px){margin-bottom:16px;font-size:12px;}"}),eL=(0,r.f)("span",{target:"e1p42bwd8"})({name:"5kij1s",styles:"white-space:nowrap;transition:color 0.4s ease;&:not(:last-child)::after{content:' / ';color:rgba(255, 255, 255, 0.3);}&[data-active='true']{color:#7fd6ff;}"}),eD=(0,r.f)("div",{target:"e1p42bwd7"})({name:"13zzruo",styles:"position:absolute;z-index:3;top:12px;left:12px;display:flex;flex-wrap:wrap;gap:4px;max-width:calc(100% - 24px)"}),eU=(0,r.f)("button",{target:"e1p42bwd6"})({name:"1ysr8wj",styles:"padding:4px 10px;font-size:12px;color:rgba(255, 255, 255, 0.7);background:rgba(10, 14, 22, 0.6);border:solid 1px rgba(127, 214, 255, 0.25);border-radius:999px;cursor:pointer;&[aria-pressed='true']{color:#0d0d12;background:#7fd6ff;border-color:#7fd6ff;}"}),eP=(0,r.f)("div",{target:"e1p42bwd5"})({name:"1wesxqa",styles:"display:flex;gap:12px"}),eI=(0,r.f)(w.f,{target:"e1p42bwd4"})("padding:10px 28px;font-size:14px;letter-spacing:0.1em;color:#0d0d12;background:",eT,";transition:background 0.2s ease;&:hover{background:#7fd6ff;}"),eN=(0,r.f)(w.f,{target:"e1p42bwd3"})("padding:9px 27px;font-size:14px;letter-spacing:0.1em;color:",eT,";border:solid 1px rgba(255, 255, 255, 0.4);transition:border-color 0.2s ease,color 0.2s ease;&:hover{color:#7fd6ff;border-color:#7fd6ff;}@media (max-width: 859px){display:none;}"),eF=(0,r.f)("div",{target:"e1p42bwd2"})({name:"1uz9rs",styles:"position:absolute;z-index:2;left:50%;bottom:12px;transform:translateX(-50%);@media (max-width: 859px){display:none;}"}),eC=(0,r.f)("div",{target:"e1p42bwd1"})("width:",40,"px;height:",40,"px;display:flex;align-items:center;justify-content:center;animation:",K," ",1,"s ",W.W," ",$,"s 1 normal both running;&::before{content:'';width:",28.2842712474619,"px;height:",28.2842712474619,"px;border-right:solid 1px rgba(255, 255, 255, 0.5);border-bottom:solid 1px rgba(255, 255, 255, 0.5);transform:rotate(45deg);}"),eG=(0,r.f)("div",{target:"e1p42bwd0"})({name:"1nut75i",styles:"width:100%;height:100svh;min-height:600px;overflow:hidden;position:relative;box-sizing:border-box;background:#0d0d12"});var eB=e.i(35889),eO=e.i(34991);let eX="#555",eY="#eee";function eq({newsData:{metaList:e}}){let a=e.sort((e,t)=>(0,eO.f)(e.date,t.date));return(0,t.jsxs)(eW,{children:[(0,t.jsx)(i.n,{children:"NEWS"}),(0,t.jsx)(eB.Y,{metaList:a.slice(0,5)}),(0,t.jsx)(eH,{children:(0,t.jsx)(h.U,{color:{primary:eX,secondary:eY},href:(0,m.E)("news"),children:"もっと見る"})})]})}let eW=(0,r.f)(i.Z,{target:"eg1brd31"})("overflow:hidden;background-color:",eY,";color:",eX,";text-align:center;"),eH=(0,r.f)("div",{target:"eg1brd30"})({name:"va2k03",styles:"text-align:end"});var eK=e.i(26447),eV=e.i(9091);function eZ({newsData:e,aboutData:r,scheduleData:i,contactData:o}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.f,{}),(0,t.jsx)(eE,{}),(0,t.jsx)(l,{}),(0,t.jsx)(u,{aboutData:r}),(0,t.jsx)(T,{}),(0,t.jsx)(eK.U,{scheduleData:i}),(0,t.jsx)(eq,{newsData:e}),(0,t.jsx)(I,{contactData:o}),(0,t.jsx)(eV.f,{})]})}var e$=e.i(71949);e.s(["__N_SSG",0,!0,"default",0,function({aboutData:e,scheduleData:a,newsData:r,contactData:i}){let{caption:o}=e.meta,n=new eK.P(a.meta.startMonth,a.meta.eventCalendar,!0),l=JSON.parse(r.articlesStr),{clubroom:s,twitterId:c,mail:d}=i.meta;return(0,t.jsx)(eZ,{aboutData:{caption:o},scheduleData:{eventCalendar:n},newsData:{metaList:(0,e$.createfilterdArticleMetaList)(l)},contactData:{clubroom:s,twitterId:c,mail:d}})}],43181)}]);