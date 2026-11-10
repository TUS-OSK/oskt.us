(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19675,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(43181)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},3677,(e,t,r)=>{t.exports={label:"入会はこちらから！",path:"/pay",enabled:!0}},43181,e=>{"use strict";var t=e.i(91398),r=e.i(66706),a=e.i(13299),i=e.i(46418),o=e.i(54097);let n=[{src:"/images/activity/ml-blackboard-work.jpg",alt:"黒板で誤差逆伝播を計算する部員",band:"機械学習班"},{src:"/images/activity/ml-writing-together.jpg",alt:"黒板の前で議論する部員",band:"機械学習班"},{src:"/images/activity/ml-board.jpg",alt:"誤差逆伝播法の計算を書き込んだ黒板",band:"機械学習班"}];function l(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(i.n,{children:"活動の様子"}),(0,t.jsx)(s,{children:n.map((e,r)=>(0,t.jsxs)(c,{children:[(0,t.jsx)("img",{src:(0,o.v)(e.src),alt:e.alt,loading:"lazy"}),(0,t.jsx)(d,{children:(0,t.jsx)(f,{children:e.band})})]},r))})]})}let s=(0,a.f)("div",{target:"e1bssynv3"})({name:"49jszk",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;@media (max-width: 900px){grid-template-columns:repeat(2, 1fr);}@media (max-width: 600px){grid-template-columns:1fr;}"}),c=(0,a.f)("div",{target:"e1bssynv2"})({name:"1d94xdw",styles:"position:relative;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12);aspect-ratio:4/3;img{width:100%;height:100%;object-fit:cover;display:block;}"}),d=(0,a.f)("div",{target:"e1bssynv1"})({name:"67ekhz",styles:"position:absolute;left:0;right:0;bottom:0;padding:10px 14px;background:linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))"}),f=(0,a.f)("div",{target:"e1bssynv0"})({name:"v905nl",styles:"color:#fff;font-size:12px;font-weight:bold"});var m=e.i(34666),h=e.i(83958);function u({aboutData:{caption:e}}){return(0,t.jsx)(v,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(x,{children:"OSK"}),e,(0,t.jsx)(g,{children:(0,t.jsx)(m.U,{color:{primary:"#bbb",secondary:"#333"},href:(0,h.E)("about"),children:"DETAIL"})})]})})}let x=(0,a.f)("div",{target:"ez6ekud3"})({name:"1kblwd7",styles:"font-family:'novecentosans';font-weight:bold;font-size:28px;letter-spacing:0.1em;margin-bottom:16px;color:#fff"}),p=(0,a.f)(i.Z,{target:"ez6ekud2"})({name:"1kwsc2o",styles:"background-color:#333;color:#bbb;font-size:16px;line-height:1.6em"}),g=(0,a.f)("div",{target:"ez6ekud1"})({name:"1wyywwk",styles:"display:flex;flex-direction:row-reverse;margin-bottom:0"}),v=(0,a.f)("div",{target:"ez6ekud0"})("");var y=e.i(24666),b=e.i(91788);function w({type:e}){let r=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let t=r.current;if(!t)return;let a=t.getContext("2d");if(!a)return;let i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=0,n=window.devicePixelRatio||1,{width:l,height:s}=t.getBoundingClientRect();t.width=l*n,t.height=s*n,a.scale(n,n);let c=({ml:()=>{var e,t,r;let i,o,n;return e=a,t=l,r=s,i=e=>9e-4*(e-.3*t)*(e-.3*t)+.3*r+30*Math.sin(.012*e),o=20,n=0,()=>{e.fillStyle="#1b1b2a",e.fillRect(0,0,t,r),e.strokeStyle="rgba(255,255,255,0.07)";for(let a=16;a<r;a+=24)e.beginPath(),e.moveTo(0,a),e.lineTo(t,a),e.stroke();e.beginPath(),e.strokeStyle="#8fa0ff",e.lineWidth=3;for(let r=0;r<=t;r+=4){let t=i(r);0===r?e.moveTo(r,t):e.lineTo(r,t)}e.stroke();let a=.3*t;o+=(a-o)*.01+.5*Math.sin(.05*n),e.beginPath(),e.fillStyle="#da6272",e.arc(o,i(o)-10,7,0,2*Math.PI),e.fill(),n++}},stat:()=>{var e,t,r;let i,o;return e=a,t=l,r=s,i=Array.from({length:20},(e,t)=>{let r=(t/20-.5)*4;return Math.exp(-r*r/2)}),o=0,()=>{e.fillStyle="#2a2235",e.fillRect(0,0,t,r);let a=t/20;for(let t=0;t<20;t++){let n=.08*Math.sin(.04*o+t),l=Math.max(.03,i[t]+n*i[t]),s=l*(r-60);e.fillStyle=`rgba(218, 98, 114, ${.4+.5*l})`,e.fillRect(t*a+2,r-30-s,a-4,s)}e.beginPath(),e.strokeStyle="rgba(255,255,255,0.6)",e.lineWidth=2;for(let a=0;a<=t;a+=4){let i=(a/t-.5)*4,o=r-30-Math.exp(-i*i/2)*(r-60);0===a?e.moveTo(a,o):e.lineTo(a,o)}e.stroke(),o++}},cs:()=>(function(e,t,r){let a=Array.from({length:12},()=>({x:20+Math.random()*(t-40),y:20+Math.random()*(r-40)})),i=[];for(let e=0;e<12;e++)i.push([e,(e+1+Math.floor(2*Math.random()))%12]);let o=[0],n=[0],l=0;return()=>{if(e.fillStyle="#131722",e.fillRect(0,0,t,r),l%18==0)if(n.length){let e=n.shift();i.forEach(([t,r])=>{t!==e||o.includes(r)||(o.push(r),n.push(r)),r!==e||o.includes(t)||(o.push(t),n.push(t))})}else o=[0],n=[0];i.forEach(([t,r])=>{e.strokeStyle="rgba(255,255,255,0.15)",e.beginPath(),e.moveTo(a[t].x,a[t].y),e.lineTo(a[r].x,a[r].y),e.stroke()}),a.forEach((t,r)=>{let a=o.includes(r);e.beginPath(),e.fillStyle=a?"#6fe3c0":"rgba(255,255,255,0.3)",e.arc(t.x,t.y,a?6:4,0,2*Math.PI),e.fill()}),l++}})(a,l,s),cp:()=>{var e,t,r;let i,o,n,c;return e=a,t=l,r=s,i=Array.from({length:18},()=>Math.random()),o=0,n=0,c=0,()=>{if(e.fillStyle="#1c1f14",e.fillRect(0,0,t,r),c%6==0)if(o<18)if(n<18-o-1){if(i[n]>i[n+1]){let e=i[n];i[n]=i[n+1],i[n+1]=e}n++}else n=0,o++;else i=Array.from({length:18},()=>Math.random()),o=0,n=0;let a=t/18;i.forEach((t,i)=>{let o=t*(r-40);e.fillStyle=i===n||i===n+1?"#f2c14e":"#9fd168",e.fillRect(i*a+2,r-20-o,a-4,o)}),c++}},cg:()=>{var e,t,r;let i,o;return e=a,t=l,r=s,e.fillStyle="#0e0e16",e.fillRect(0,0,t,r),i=Array.from({length:140},()=>({x:Math.random()*t,y:Math.random()*r})),o=0,()=>{e.fillStyle="rgba(14,14,22,0.1)",e.fillRect(0,0,t,r),i.forEach(a=>{let i,n,l,s=(i=a.x,n=a.y,(Math.sin(.012*i+.002*(l=o))+Math.cos(.015*n-.0017*l))*Math.PI),c=a.x+1.4*Math.cos(s),d=a.y+1.4*Math.sin(s);e.strokeStyle="rgba(143, 160, 255, 0.5)",e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(c,d),e.stroke(),a.x=c,a.y=d,(a.x<0||a.x>t||a.y<0||a.y>r)&&(a.x=Math.random()*t,a.y=Math.random()*r)}),o++}},web:()=>{var e,t,r;let i,o,n;return e=a,t=l,r=s,i=["<",">","/","{","}",";"],n=Array(o=Math.max(1,Math.floor(t/16))).fill(0).map(()=>-20*Math.random()),e.fillStyle="#0c1a24",e.fillRect(0,0,t,r),()=>{e.fillStyle="rgba(12, 26, 36, 0.16)",e.fillRect(0,0,t,r),e.fillStyle="#5ec8e8",e.font="14px monospace";for(let t=0;t<o;t++){let a=i[Math.floor(Math.random()*i.length)];e.fillText(a,16*t,16*n[t]),16*n[t]>r&&Math.random()>.975&&(n[t]=0),n[t]++}}}})[e]();if(i)return void c();let d=()=>{c(),o=requestAnimationFrame(d)};return o=requestAnimationFrame(d),()=>cancelAnimationFrame(o)},[e]),(0,t.jsx)(E,{ref:r})}let E=(0,a.f)("canvas",{target:"e17zwido0"})({name:"10rcg5p",styles:"position:absolute;inset:0;width:100%;height:100%"}),T=[{name:"機械学習班",caption:"機械学習・データサイエンスの手法を学び、実践します。",motif:"ml",photo:"/images/activity/ml-board.jpg"},{name:"数理統計班",caption:"数学・統計学の理論と応用を探求します。",motif:"stat"},{name:"コンピュータサイエンス班",caption:"計算機科学の理論・低レイヤ技術などを学びます。",motif:"cs"},{name:"競プロ班",caption:"競技プログラミングのコンテストに参加し、アルゴリズムの腕を磨きます。",motif:"cp"},{name:"CG班",caption:"コンピュータグラフィックスや映像制作に取り組みます。",motif:"cg"},{name:"Web・アプリ開発班",caption:"Webサイトやアプリケーションの開発を行います。",motif:"web"}];function R(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(i.n,{children:"班について"}),(0,t.jsx)(A,{children:"入部後は自分の興味に合わせて班を選んで活動します。所属が違う部員と新しい班をつくることもできます。"}),(0,t.jsx)(M,{children:T.map(e=>(0,t.jsxs)(j,{href:(0,h.E)("about"),children:[e.photo?(0,t.jsx)(S,{src:(0,o.v)(e.photo),alt:`${e.name}の活動の様子`,loading:"lazy"}):(0,t.jsx)(w,{type:e.motif}),(0,t.jsxs)(_,{children:[(0,t.jsx)(k,{children:e.name}),(0,t.jsx)(U,{children:e.caption})]})]},e.name))})]})}let A=(0,a.f)("p",{target:"e3g6au56"})({name:"q4lo16",styles:"text-align:center;color:#666;font-size:14px;margin:-24px 0 40px;@media (max-width: 700px){margin-top:-8px;}"}),M=(0,a.f)("div",{target:"e3g6au55"})({name:"49jszk",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;@media (max-width: 900px){grid-template-columns:repeat(2, 1fr);}@media (max-width: 600px){grid-template-columns:1fr;}"}),j=(0,a.f)(y.f,{target:"e3g6au54"})({name:"1yeyu2",styles:"position:relative;display:block;height:220px;border-radius:10px;overflow:hidden;text-decoration:none;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12);transition:transform 0.2s ease;&:hover{transform:translateY(-3px);}"}),S=(0,a.f)("img",{target:"e3g6au53"})({name:"hsbyz0",styles:"position:absolute;inset:0;width:100%;height:100%;object-fit:cover"}),_=(0,a.f)("div",{target:"e3g6au52"})({name:"5ysz2",styles:"position:absolute;left:0;right:0;bottom:0;z-index:2;padding:16px 18px;background:linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"}),k=(0,a.f)("div",{target:"e3g6au51"})({name:"1lelbod",styles:"color:#fff;font-weight:bold;font-size:16px"}),U=(0,a.f)("div",{target:"e3g6au50"})({name:"1r5egio",styles:"color:#ddd;font-size:12px;margin-top:4px;line-height:1.5em"});var L=e.i(69291);function P(){return(0,t.jsx)(F,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"compass",className:"svg-inline--fa fa-compass fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,t.jsx)("path",{fill:"currentColor",d:"M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"})})}function D(){return(0,t.jsx)(F,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"comments",className:"svg-inline--fa fa-comments fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,t.jsx)("path",{fill:"currentColor",d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"})})}let F=(0,a.f)("svg",{target:"e1i3lo1s0"})("width:",40,"px;height:",40,"px;");function I({contactData:{clubroom:e,twitterId:r,mail:a}}){return(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(P,{}),"LOCATION"]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(L._,{})}),e]})]}),(0,t.jsxs)(B,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(D,{}),"CONTACT"]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(L.T,{})}),(0,t.jsxs)(Y,{target:"_blank",rel:"noopener",href:(0,h.C)("twitter",r),children:["@",r]})]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(L.I,{})}),(0,t.jsx)(Y,{href:(0,h.T)(a),children:a})]})]})]})}let z=(0,a.f)("div",{target:"edsla3w7"})({name:"jtl1pt",styles:"display:flex;flex-flow:row;@media (max-width: 700px){flex-flow:column;}"}),N=(0,a.f)("div",{target:"edsla3w6"})({name:"1osbop6",styles:"padding:60px 40px;flex:1"}),C=(0,a.f)(N,{target:"edsla3w5"})({name:"1b8ying",styles:"background-color:#7987bb"}),B=(0,a.f)(N,{target:"edsla3w4"})({name:"6df8ic",styles:"background-color:#da8d9b"}),X=(0,a.f)(i.n,{target:"edsla3w3"})({name:"1iulk2y",styles:"display:flex;flex-flow:column;align-items:center;margin-bottom:40px"}),G=(0,a.f)("div",{target:"edsla3w2"})("display:flex;justify-content:center;font-size:16px;line-height:",24,"px;color:#333;max-width:240px;text-align:center;margin:0 auto 16px;"),O=(0,a.f)("div",{target:"edsla3w1"})("width:",24,"px;height:",24,"px;margin-right:4px;"),Y=(0,a.f)("a",{target:"edsla3w0"})({name:"1wjykim",styles:"color:#333"});var q=e.i(92241),W=e.i(49804),H=e.i(7065);let V=H.q`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,K=H.q`
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
`,$=0+1.5*.8,{label:J,path:Q,enabled:ee=!0}=e.i(3677).default,et=()=>(0,t.jsx)(ea,{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:16,height:16,children:(0,t.jsx)("path",{fill:"currentColor",d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.099 18.069.104 18.08.113 18.087a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"})});function er(){return ee?(0,t.jsxs)(en,{href:Q,children:[(0,t.jsx)(et,{}),(0,t.jsx)(ei,{children:J})]}):(0,t.jsxs)(el,{children:[(0,t.jsx)(et,{}),(0,t.jsx)(ei,{children:J})]})}let ea=(0,a.f)("svg",{target:"ebsuzlz3"})({name:"eykqtd",styles:"flex:none"}),ei=(0,a.f)("span",{target:"ebsuzlz2"})("margin-left:4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:14px;line-height:",16,"px;"),eo=`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  border-radius: 4px;
  height: 40px;
  max-width: 200px;
  padding: 0 16px;
`,en=(0,a.f)(y.f,{target:"ebsuzlz1"})(eo," background-color:#da6272;color:#fff;"),el=(0,a.f)("div",{target:"ebsuzlz0"})(eo," background-color:#aaa;color:#eee;cursor:not-allowed;"),es=96,ec=(e,t)=>(t+es)%es*es+(e+es)%es,ed=es*es,ef=["gd","ant","ising","life","seigaiha","tropical"],em=e=>"gd-smooth"===e?0:ef.indexOf(e),eh=`#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }`,eu=`#version 300 es
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
const float GRID = ${es}.;
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
}`,ex=e=>new Promise((t,r)=>{let a=new Image;a.onload=()=>t(a),a.onerror=r,a.src=e});function ep({mode:e,onReady:r}){let a=(0,b.useRef)(null),i=(0,b.useRef)(null),n=(0,b.useRef)(null),l=(0,b.useRef)(e),s=(0,b.useRef)(r),[c,d]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let e=a.current,t=i.current;if(!e||!t)return;let r=function({canvas:e,frame:t,textures:r,mode:a,onReady:i}){let o={setMode:()=>void 0,destroy:()=>void 0},n=e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!n)return o;let l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=!1,c=0,d=null,f=!0,m=a,h=a,u=-1/0,x=(e,t)=>{let r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)||console.error(n.getShaderInfoLog(r)),r},p=n.createProgram();if(n.attachShader(p,x(n.VERTEX_SHADER,eh)),n.attachShader(p,x(n.FRAGMENT_SHADER,eu)),n.linkProgram(p),!n.getProgramParameter(p,n.LINK_STATUS))return o;n.useProgram(p),n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);let g=n.getAttribLocation(p,"a");n.enableVertexAttribArray(g),n.vertexAttribPointer(g,2,n.FLOAT,!1,0,0);let v=n.getExtension("EXT_texture_filter_anisotropic");n.pixelStorei(n.UNPACK_ALIGNMENT,1);let y=(e,t,r,a)=>{n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,n.createTexture()),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,r===n.NEAREST?n.NEAREST:n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,a),n.uniform1i(n.getUniformLocation(p,t),e)},b=(e,t,r,a,i=!0)=>{y(e,a,i?n.LINEAR_MIPMAP_LINEAR:n.NEAREST,r),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),i&&n.generateMipmap(n.TEXTURE_2D),v&&i&&r===n.REPEAT&&n.texParameterf(n.TEXTURE_2D,v.TEXTURE_MAX_ANISOTROPY_EXT,8)},w=(e,t,r)=>{y(e,t,r,n.REPEAT),n.texImage2D(n.TEXTURE_2D,0,n.R8,1,1,0,n.RED,n.UNSIGNED_BYTE,new Uint8Array(1))};w(5,"uLife",n.NEAREST),w(6,"uAnt",n.NEAREST),w(7,"uIs",n.NEAREST),w(8,"uH",n.LINEAR),w(9,"uGT",n.LINEAR);let E=(e,t,r=es)=>{let a=!1;return i=>{let o=t(i);n.activeTexture(n.TEXTURE0+e),a?n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,r,n.RG,n.UNSIGNED_BYTE,o):n.texImage2D(n.TEXTURE_2D,0,n.RG8,r,r,0,n.RG,n.UNSIGNED_BYTE,o),a=!0}},T=null,R=e=>{let t=function(e){let t=(e,t)=>{let r=t,a=Array.from({length:e*e},()=>{let e=(r=1664525*r+0x3c6ef35f>>>0)/0x100000000*Math.PI*2;return[Math.cos(e),Math.sin(e)]}),i=e=>e*e*e*(e*(6*e-15)+10);return(t,r)=>{let o=Math.floor(t),n=Math.floor(r),l=t-o,s=r-n,c=(t,r,i,o)=>{let n=a[(r%e+e)%e*e+(t%e+e)%e];return n[0]*i+n[1]*o},d=i(l),f=i(s),m=c(o,n,l,s)+d*(c(o+1,n,l-1,s)-c(o,n,l,s));return m+f*(c(o,n+1,l,s-1)+d*(c(o+1,n+1,l-1,s-1)-c(o,n+1,l,s-1))-m)}},r=[t(4,11),t(8,23),t(16,37)],a=new Float32Array(65536),i=1/0,o=-1/0;for(let e=0;e<256;e++)for(let t=0;t<256;t++){let n=t/256,l=e/256,s=r[0](4*n,4*l)+.45*r[1](8*n,8*l)+.15*r[2](16*n,16*l);a[256*e+t]=s,i=Math.min(i,s),o=Math.max(o,s)}for(let e=0;e<65536;e++)a[e]=(a[e]-i)/(o-i);let n=(e,t)=>{let r=(e%1+1)%1*256-.5,i=(t%1+1)%1*256-.5,o=Math.floor(r),n=Math.floor(i),l=r-o,s=i-n,c=(e,t)=>a[(t+256)%256*256+(e+256)%256];return(c(o,n)*(1-l)+c(o+1,n)*l)*(1-s)+(c(o,n+1)*(1-l)+c(o+1,n+1)*l)*s},l=1/256,s=(e,t)=>[(n(e+l,t)-n(e-l,t))/(2*l),(n(e,t+l)-n(e,t-l))/(2*l)],c=()=>({x:Math.random(),y:Math.random(),vx:0,vy:0,still:0,age:0,clock:0,target:null}),d=Array.from({length:"step"===e?14:18},c);return{height:a,update(t){let r=[];if("smooth"===e){let e=60*t;for(let a=0;a<d.length;a++){let i=d[a],[o,n]=s(i.x,i.y),l=Math.pow(.93,e);i.vx=i.vx*l-22e-6*o*e,i.vy=i.vy*l-22e-6*n*e,r.push(i.x,i.y,i.x+i.vx,i.y+i.vy,.6,.7),i.x+=i.vx,i.y+=i.vy,i.age+=t,i.still=4e-5>Math.hypot(i.vx,i.vy)?i.still+t:0,(i.still>1.6||i.age>22)&&(d[a]=c())}return{segments:r,decay:Math.pow(.992,e)}}for(let e=0;e<d.length;e++){let a=d[e];if(a.age+=t,!a.target){let[e,t]=s(a.x,a.y);a.vx=.55*a.vx-.0045*e,a.vy=.55*a.vy-.0045*t,a.target={x0:a.x,y0:a.y,x1:a.x+a.vx,y1:a.y+a.vy},a.clock=0}let i=a.target,o=e=>1-Math.pow(1-Math.min(1,e),3),n=o(a.clock/.3);a.clock+=t;let l=o(a.clock/.3);r.push(i.x0+(i.x1-i.x0)*n,i.y0+(i.y1-i.y0)*n,i.x0+(i.x1-i.x0)*l,i.y0+(i.y1-i.y0)*l,.6,.55),a.clock>=.3&&(a.x=i.x1,a.y=i.y1,r.push(a.x,a.y,a.x,a.y,1.4,.8),a.target=null,a.still=.0025>Math.hypot(a.vx,a.vy)?a.still+1:0,(a.still>4||a.age>30)&&(d[e]=c()))}return{segments:r,decay:Math.pow(.985,60*t)}}}}(e);return n.activeTexture(n.TEXTURE8),n.texImage2D(n.TEXTURE_2D,0,n.R16F,256,256,0,n.RED,n.FLOAT,t.height),T??=(()=>{let e=(e,t)=>{let r=n.createProgram();return n.attachShader(r,x(n.VERTEX_SHADER,e)),n.attachShader(r,x(n.FRAGMENT_SHADER,t)),n.linkProgram(r),r},t=e(eh,`#version 300 es
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
}`),a=[0,1].map(()=>{let e=n.createTexture();return n.activeTexture(n.TEXTURE10),n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,1024,1024,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),e}),i=a.map(e=>{let t=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,t),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),t}),o=n.createVertexArray();n.bindVertexArray(o);let l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);let s=n.getAttribLocation(t,"a");n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let c=n.createVertexArray();n.bindVertexArray(c);let d=n.createBuffer();for(let[e,t,a]of(n.bindBuffer(n.ARRAY_BUFFER,d),[["aPos",2,0],["aSeg",4,2],["aStyle",2,6]])){let i=n.getAttribLocation(r,e);n.enableVertexAttribArray(i),n.vertexAttribPointer(i,t,n.FLOAT,!1,32,4*a)}n.bindVertexArray(null);let f=0;return(e,l)=>{let s=1-f;n.bindFramebuffer(n.FRAMEBUFFER,i[s]),n.viewport(0,0,1024,1024),n.useProgram(t),n.bindVertexArray(o),n.activeTexture(n.TEXTURE10),n.bindTexture(n.TEXTURE_2D,a[f]),n.uniform1i(n.getUniformLocation(t,"uPrev"),10),n.uniform1f(n.getUniformLocation(t,"uDecay"),l),n.drawArrays(n.TRIANGLES,0,3);let m=[];for(let t=0;t<e.length;t+=6){let[r,a,i,o,n,l]=e.slice(t,t+6),s=Math.floor(r),c=Math.floor(a),d=(r-s)*1024,f=(a-c)*1024,h=(i-s)*1024,u=(o-c)*1024,x=n+2;for(let e of[-1024,0,1024])for(let t of[-1024,0,1024]){let r=Math.min(d,h)+e-x,a=Math.max(d,h)+e+x,i=Math.min(f,u)+t-x,o=Math.max(f,u)+t+x;if(a<0||r>1024||o<0||i>1024)continue;let s=[d+e,f+t,h+e,u+t,n,l];for(let[e,t]of[[r,i],[a,i],[r,o],[r,o],[a,i],[a,o]])m.push(e,t,...s)}}m.length&&(n.useProgram(r),n.bindVertexArray(c),n.bindBuffer(n.ARRAY_BUFFER,d),n.bufferData(n.ARRAY_BUFFER,new Float32Array(m),n.DYNAMIC_DRAW),n.enable(n.BLEND),n.blendEquation(n.MAX),n.drawArrays(n.TRIANGLES,0,m.length/8),n.disable(n.BLEND)),f=s,n.activeTexture(n.TEXTURE9),n.bindTexture(n.TEXTURE_2D,a[f])}})(),e=>{let{segments:r,decay:a}=t.update(e);T?.(r,a)}},A={life:()=>E(5,function(){let e=new Uint8Array(ed),t=new Float32Array(ed),r=new Float32Array(ed),a=new Uint8Array(2*ed),i=0,o=0;for(let r=0;r<ed;r++)t[r]=e[r]=+(.2>Math.random());let n=()=>{let t=new Uint8Array(ed),a=0;for(let i=0;i<es;i++)for(let o=0;o<es;o++){let n=0;for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++)(r||t)&&(n+=e[ec(o+r,i+t)]);let l=i*es+o,s=3===n||2===n&&e[l]?1:0;s&&!e[l]&&(r[l]=1),t[l]=s,a+=s}e=t,o++,(a<.03*ed||o%45==0)&&(t=>{let r=Math.floor(Math.random()*es),a=Math.floor(Math.random()*es);for(let[i,o]of t)e[ec(r+i,a+o)]=1})(.5>Math.random()?[[1,0],[2,1],[0,2],[1,2],[2,2]]:[[1,0],[2,0],[0,1],[1,1],[1,2]])};return{update(o){i+=o;for(let e=0;i>=.9&&e<5;e++)i-=.9,n();let l=1-Math.exp(-(3*o)),s=Math.exp(-(1.5*o));for(let i=0;i<ed;i++)t[i]+=(e[i]-t[i])*l,r[i]*=s,a[2*i]=255*t[i],a[2*i+1]=255*Math.min(1,.7*r[i]);return a}}}().update),ant:()=>{let e=performance.now()/1e3;return E(6,function(e=[0,0],t=0,r=!1){let a=[-1,1,1,1,1,1,-1,-1,-1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,1,1,-1,1,1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,-1,-1,1,1,-1,1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,1,-1,-1,1,1,1,-1,1,-1,1,1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,1,-1,-1],i=(e,t)=>(t+192)%192*192+(e+192)%192,o=e=>e?.1+.9*Math.min(1,Math.max(0,(e-2)/28)):0,n=new Uint8Array(36864),l=new Float32Array(36864),s=new Uint8Array(73728),c={x:0,y:0,d:0},d=0,f=0,m=0,h=0,u=()=>{n.fill(0),d=0,f=0,m=0;let t=e=>(Math.floor(e)%192+192)%192;Object.assign(c,{x:t(e[0]),y:t(e[1]),d:0})},x=()=>{let e=i(c.x,c.y);c.d=(c.d+a[n[e]]+4)%4,n[e]=(n[e]+1)%a.length,c.x=(c.x+[0,1,0,-1][c.d]+192)%192,c.y=(c.y+[-1,0,1,0][c.d]+192)%192,d++};return u(),{update(e){if(e>0)if((h+=e)<t);else if(d<23e4){f+=60*e;let t=Math.min(23e4-d,Math.ceil(16*f*e*60));for(let e=0;e<t;e++)x()}else(m+=e)>2.5&&u();else if(r)for(;d<23e4;)x();let a=e>0?1-Math.exp(-(12*e)):1;for(let e=0;e<36864;e++)l[e]+=(o(n[e])-l[e])*a,s[2*e]=255*l[e],s[2*e+1]=0;return s[2*i(c.x,c.y)+1]=255,s}}}([(-.19+.0035*e)*150,(.06+.0018*e)*150],.9,l).update,192)},ising:()=>E(7,function(){let e=new Int8Array(ed),t=new Int8Array(ed),r=new Float32Array(ed),a=new Float32Array(ed),i=new Uint8Array(2*ed);e.fill(1),t.fill(-1);for(let r=0;r<7;r++){let r=Math.random()*es,a=Math.random()*es,i=6+12*Math.random();for(let o=0;o<es;o++)for(let n=0;n<es;n++){let l=Math.min(Math.abs(n-r),es-Math.abs(n-r)),s=Math.min(Math.abs(o-a),es-Math.abs(o-a));l*l+s*s<i*i&&(e[o*es+n]=-1,t[o*es+n]=1)}}for(let i=0;i<ed;i++)r[i]=(1+e[i])/2,a[i]=(1+t[i])/2;let o=0;return{update(n){for(o+=9e3*n;o>=1;o--){let r=Math.floor(Math.random()*es),a=Math.floor(Math.random()*es),i=a*es+r;if(.5>Math.random()){let o=t[i]+t[ec(r,a-1)]+t[ec(r-1,a)],n=-2*e[i]*o;(n<=0||Math.random()<Math.exp(-n/1.05))&&(e[i]=-e[i])}else{let o=e[i]+e[ec(r,a+1)]+e[ec(r+1,a)],n=-2*t[i]*o;(n<=0||Math.random()<Math.exp(-n/1.05))&&(t[i]=-t[i])}}let l=1-Math.exp(-(2.5*n));for(let o=0;o<ed;o++)r[o]+=((1+e[o])/2-r[o])*l,a[o]+=((1+t[o])/2-a[o])*l,i[2*o]=255*r[o],i[2*o+1]=255*a[o];return i}}}().update),gd:()=>R("step"),"gd-smooth":()=>R("smooth"),seigaiha:null,tropical:null},M={},j=(e,t)=>{let r=A[e];r&&(M[e]??=r())(t)},S={x:-.6,y:-.7,tx:-.6,ty:-.7},_={x:0,y:0,tx:0,ty:0},k=-1/0,U=e=>{if("mouse"!==e.pointerType)return;let r=t.getBoundingClientRect(),a=e=>Math.max(-1.8,Math.min(1.8,e));S.tx=a((e.clientX-(r.left+r.width/2))/(r.height/2)),S.ty=a((e.clientY-(r.top+r.height/2))/(r.height/2)),_.tx=e.clientX/window.innerWidth*2-1,_.ty=e.clientY/window.innerHeight*2-1,k=performance.now()},L=()=>{n.useProgram(p);let r=Math.min(window.devicePixelRatio||1,2),a=e.getBoundingClientRect();e.width=Math.max(1,Math.round(a.width*r)),e.height=Math.max(1,Math.round(a.height*r)),n.viewport(0,0,e.width,e.height);let i=t.getBoundingClientRect();n.uniform2f(n.getUniformLocation(p,"uRes"),e.width,e.height),n.uniform1f(n.getUniformLocation(p,"uDpr"),r),n.uniform4f(n.getUniformLocation(p,"uRect"),(i.left-a.left)*r,(i.top-a.top)*r,i.width*r,i.height*r),d?.()},P=new ResizeObserver(L),D=e=>{let t=Math.min(1,Math.max(0,(e-u)/1e3/.9));return t*t*(3-2*t)},F=t=>{n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(p),n.bindVertexArray(null),n.viewport(0,0,e.width,e.height),n.uniform1f(n.getUniformLocation(p,"uTime"),t/1e3),n.uniform2f(n.getUniformLocation(p,"uLight"),S.x,S.y),n.uniform2f(n.getUniformLocation(p,"uPar"),_.x,_.y),n.uniform1i(n.getUniformLocation(p,"uMode0"),em(h)),n.uniform1i(n.getUniformLocation(p,"uMode1"),em(m)),n.uniform1f(n.getUniformLocation(p,"uFade"),D(t)),n.drawArrays(n.TRIANGLES,0,3)},I=performance.now(),z=e=>{if(c=0,s||!f||document.hidden)return;let t=Math.min(.1,(e-I)/1e3);if(I=e,e-k>2500){let t=e/1e3;S.tx=-.55+.45*Math.sin(.23*t),S.ty=-.6+.35*Math.cos(.31*t),_.tx=0,_.ty=0}let r=1-Math.exp(-(5*t));S.x+=(S.tx-S.x)*r,S.y+=(S.ty-S.y)*r,_.x+=(_.tx-_.x)*r,_.y+=(_.ty-_.y)*r,j(m,t),h!==m&&1>D(e)&&j(h,t),F(e),c=requestAnimationFrame(z)},N=()=>{c||s||l||!d||(I=performance.now(),c=requestAnimationFrame(z))},C=new IntersectionObserver(([e])=>{(f=e.isIntersecting)&&N()}),B=()=>{document.hidden||N()},X=t=>{t.preventDefault(),s=!0,e.style.display="none"};return e.addEventListener("webglcontextlost",X),Promise.all([r.inkA,r.inkB,r.soft,r.tropical,r.trails].map(ex)).then(([r,a,o,c,f])=>{s||(b(0,r,n.CLAMP_TO_EDGE,"uA"),b(1,a,n.CLAMP_TO_EDGE,"uB"),b(2,o,n.CLAMP_TO_EDGE,"uS"),b(3,c,n.REPEAT,"uT"),b(4,f,n.REPEAT,"uR",!1),d=()=>{j(m,0),F(l?0:performance.now())},L(),P.observe(e),P.observe(t),C.observe(e),window.addEventListener("pointermove",U,{passive:!0}),document.addEventListener("visibilitychange",B),d(),N(),i())}).catch(()=>void 0),{setMode(e){if(e===m)return;"ant"===e&&delete M.ant;let t=performance.now();D(t)>=.5&&(h=m),m=e,u=l?-1/0:t,d?.()},destroy(){s=!0,c&&cancelAnimationFrame(c),P.disconnect(),C.disconnect(),window.removeEventListener("pointermove",U),document.removeEventListener("visibilitychange",B),e.removeEventListener("webglcontextlost",X)}}}({canvas:e,frame:t,mode:l.current,textures:{inkA:(0,o.v)("/images/hero/ink_a.webp"),inkB:(0,o.v)("/images/hero/ink_b.webp"),soft:(0,o.v)("/images/hero/ink_soft.webp"),tropical:(0,o.v)("/images/hero/tropical.webp"),trails:(0,o.v)("/images/hero/trails.webp")},onReady:()=>{d(!0),s.current?.()}});return n.current=r,()=>r.destroy()},[]),(0,b.useEffect)(()=>{l.current=e,n.current?.setMode(e)},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eg,{ref:a,"data-ready":c,"aria-hidden":"true"}),(0,t.jsx)(ev,{children:(0,t.jsx)(ey,{ref:i,src:(0,o.v)("/images/hero/ink_static.webp"),alt:"応用数学研究部","data-ready":c})})]})}let eg=(0,a.f)("canvas",{target:"e15rgzkp2"})({name:"n6t5nk",styles:"position:absolute;inset:0;width:100%;height:100%;display:block;opacity:0;transition:opacity 1.2s ease;&[data-ready='true']{opacity:1;}"}),ev=(0,a.f)("h1",{target:"e15rgzkp1"})({name:"1q6amu3",styles:"margin:0;font-size:inherit"}),ey=(0,a.f)("img",{target:"e15rgzkp0"})({name:"yjsrmj",styles:"position:absolute;z-index:1;display:block;aspect-ratio:1214/1843;top:92px;left:50%;transform:translateX(-50%);height:min(calc(100svh - 340px), 132vw);transition:opacity 1.2s ease;&[data-ready='true']{opacity:0;}@media (min-width: 860px){top:50%;left:auto;right:max(3vw, calc(50% - 600px));transform:translateY(-50%);height:min(94vh, 1120px, 75vw);}"}),eb="∇∂∑∫λπθ≈≠01ｱｲｳｴｵｶｷｸｹｺ#%&$";function ew({word:e}){let[r,a]=(0,b.useState)(e),[i,o]=(0,b.useState)(!1),n=(0,b.useRef)(e);return(0,b.useEffect)(()=>{if(e===n.current)return;let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=n.current;if(n.current=e,t)return void a(e);let i=performance.now(),l=0;o(!0);let s=t=>{let n=Math.min(1,(t-i)/520),c=Math.round(r.length+(e.length-r.length)*Math.min(1,1.6*n)),d=Math.floor(Math.max(0,1.25*n-.25)*e.length),f="";for(let t=0;t<c;t++)f+=t<d?e[t]:eb[Math.floor(Math.random()*eb.length)];a(n>=1?e:f),n<1?l=requestAnimationFrame(s):o(!1)};return l=requestAnimationFrame(s),()=>cancelAnimationFrame(l)},[e]),(0,t.jsx)(eT,{"data-text":r,"data-glitching":i,children:r})}let eE=H.q`
  0% { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 0); }
  20% { clip-path: inset(70% 0 5% 0); transform: translate(3px, 0); }
  40% { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(85% 0 2% 0); transform: translate(2px, 0); }
  80% { clip-path: inset(5% 0 80% 0); transform: translate(-1px, 0); }
  100% { clip-path: inset(45% 0 35% 0); transform: translate(1px, 0); }
`,eT=(0,a.f)("span",{target:"e1p8yz6q0"})("position:relative;display:inline-block;color:#fff;&[data-glitching='true']::before,&[data-glitching='true']::after{content:attr(data-text);position:absolute;inset:0;pointer-events:none;}&[data-glitching='true']::before{color:#7fd6ff;animation:",eE," 0.18s steps(2) infinite;}&[data-glitching='true']::after{color:#ff5d8f;mix-blend-mode:screen;animation:",eE," 0.23s steps(2) infinite reverse;}"),eR=[{word:"機械学習",mode:"gd",motif:"勾配降下法(離散)"},{word:"競技プログラミング",mode:"ant",motif:"ラングトンのアリ"},{word:"数理統計",mode:"ising",motif:"イジング模型の鱗文"},{word:"コンピュータサイエンス",mode:"life",motif:"ライフゲーム"},{word:"3DCG",mode:"seigaiha",motif:"青海波"},{word:"Web・アプリ開発",mode:"tropical",motif:"トロピカル曲線"}],eA=[{team:0,mode:"gd-smooth",motif:"勾配降下法(なめらか)"}];var eM={name:"mgg7wz",styles:"html{background:#0d0d12;overscroll-behavior:none;}body{background:#fff;}"};function ej(){let[e,r]=(0,b.useState)(0),[a,i]=(0,b.useState)(null),[n,l]=(0,b.useState)(!1),[s,c]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=(()=>{let e=new URLSearchParams(window.location.search).get("bg"),t=eR.findIndex(t=>t.mode===e);if(t>=0)return{team:t,mode:eR[t].mode};let r=eA.find(t=>t.mode===e);return r?{team:r.team,mode:r.mode}:null})();e&&(i(e.mode),r(e.team)),c(!!o.z||new URLSearchParams(window.location.search).has("bg"))},[]),(0,b.useEffect)(()=>{if(!n||null!==a||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=window.setInterval(()=>{document.hidden||r(e=>(e+1)%eR.length)},4e3);return()=>window.clearInterval(e)},[n,a]);let d=(e,t)=>{i(t),null!==e&&r(e);let a=new URL(window.location.href);a.searchParams.set("bg",t??"cycle"),window.history.replaceState(null,"",a)},f=eR[e],m=a??f.mode;return(0,t.jsxs)(eY,{children:[(0,t.jsx)(H.B,{styles:eM}),(0,t.jsx)(ep,{mode:m,onReady:()=>l(!0)}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(ek,{children:(0,t.jsx)(er,{})}),(0,t.jsx)(eU,{children:(0,t.jsx)(q.f,{})})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eP,{children:"東京理科大学"}),(0,t.jsx)(eD,{"aria-label":"そうだ、応用数学しよう。",children:(0,t.jsxs)("span",{"aria-hidden":"true",children:["そうだ、",(0,t.jsx)("br",{}),(0,t.jsx)(ew,{word:f.word}),"しよう。"]})}),(0,t.jsx)(eF,{children:eR.map((r,a)=>(0,t.jsx)(eI,{"data-active":a===e,children:r.word},r.mode))}),(0,t.jsxs)(eC,{children:[(0,t.jsx)(eB,{href:(0,h.E)("about"),children:"部の様子"}),(0,t.jsx)(eX,{href:(0,h.E)("contact"),children:"ご連絡"})]})]}),s&&n&&(0,t.jsxs)(ez,{"aria-label":"背景の比較用",children:[(0,t.jsx)(eN,{type:"button","aria-pressed":null===a,onClick:()=>d(null,null),children:"巡回"}),eR.map((e,r)=>(0,t.jsx)(eN,{type:"button","aria-pressed":a===e.mode,onClick:()=>d(r,e.mode),children:e.motif},e.mode)),eA.map(e=>(0,t.jsx)(eN,{type:"button","aria-pressed":a===e.mode,onClick:()=>d(e.team,e.mode),children:e.motif},e.mode))]}),(0,t.jsx)(eG,{children:(0,t.jsx)(eO,{})})]})}let eS="rgba(255, 255, 255, 0.92)",e_=(0,a.f)("div",{target:"e1p42bwd15"})("position:relative;z-index:2;overflow:hidden;display:flex;flex-flow:column;padding:",40,"px 24px 0;box-sizing:border-box;@media (max-width: 859px){padding-top:8px;}a{color:rgba(255, 255, 255, 0.72);border-bottom-color:rgba(255, 255, 255, 0.4);}"),ek=(0,a.f)("div",{target:"e1p42bwd14"})("position:fixed;bottom:24px;right:24px;z-index:100;animation:",K," ",1,"s ",W.W," ",$+.2,"s 1 normal both running;"),eU=(0,a.f)("div",{target:"e1p42bwd13"})("animation:",K," ",1,"s ",W.W," ",$,"s 1 normal both running;"),eL=(0,a.f)("div",{target:"e1p42bwd12"})("position:absolute;z-index:2;left:24px;right:24px;bottom:24px;color:",eS,";animation:",Z," ",1,"s ",W.W," ",$,"s 1 normal both running;@media (min-width: 860px){left:max(6vw, calc(50% - 600px));right:auto;bottom:16vh;max-width:440px;}"),eP=(0,a.f)("p",{target:"e1p42bwd11"})({name:"i4ryc9",styles:"margin:0 0 12px;font-size:14px;letter-spacing:0.3em;color:rgba(255, 255, 255, 0.6)"}),eD=(0,a.f)("p",{target:"e1p42bwd10"})({name:"1jxxrmx",styles:"margin:0 0 16px;font-family:'Hiragino Mincho ProN','Yu Mincho','YuMincho',serif;font-size:clamp(22px, 2.8vw, 40px);line-height:1.5;letter-spacing:0.08em;white-space:nowrap"}),eF=(0,a.f)("p",{target:"e1p42bwd9"})({name:"1jzvb31",styles:"margin:0 0 24px;font-size:13px;line-height:1.9;color:rgba(255, 255, 255, 0.5);@media (max-width: 859px){margin-bottom:16px;font-size:12px;}"}),eI=(0,a.f)("span",{target:"e1p42bwd8"})({name:"5kij1s",styles:"white-space:nowrap;transition:color 0.4s ease;&:not(:last-child)::after{content:' / ';color:rgba(255, 255, 255, 0.3);}&[data-active='true']{color:#7fd6ff;}"}),ez=(0,a.f)("div",{target:"e1p42bwd7"})({name:"13zzruo",styles:"position:absolute;z-index:3;top:12px;left:12px;display:flex;flex-wrap:wrap;gap:4px;max-width:calc(100% - 24px)"}),eN=(0,a.f)("button",{target:"e1p42bwd6"})({name:"1ysr8wj",styles:"padding:4px 10px;font-size:12px;color:rgba(255, 255, 255, 0.7);background:rgba(10, 14, 22, 0.6);border:solid 1px rgba(127, 214, 255, 0.25);border-radius:999px;cursor:pointer;&[aria-pressed='true']{color:#0d0d12;background:#7fd6ff;border-color:#7fd6ff;}"}),eC=(0,a.f)("div",{target:"e1p42bwd5"})({name:"1wesxqa",styles:"display:flex;gap:12px"}),eB=(0,a.f)(y.f,{target:"e1p42bwd4"})("padding:10px 28px;font-size:14px;letter-spacing:0.1em;color:#0d0d12;background:",eS,";transition:background 0.2s ease;&:hover{background:#7fd6ff;}"),eX=(0,a.f)(y.f,{target:"e1p42bwd3"})("padding:9px 27px;font-size:14px;letter-spacing:0.1em;color:",eS,";border:solid 1px rgba(255, 255, 255, 0.4);transition:border-color 0.2s ease,color 0.2s ease;&:hover{color:#7fd6ff;border-color:#7fd6ff;}@media (max-width: 859px){display:none;}"),eG=(0,a.f)("div",{target:"e1p42bwd2"})({name:"1uz9rs",styles:"position:absolute;z-index:2;left:50%;bottom:12px;transform:translateX(-50%);@media (max-width: 859px){display:none;}"}),eO=(0,a.f)("div",{target:"e1p42bwd1"})("width:",40,"px;height:",40,"px;display:flex;align-items:center;justify-content:center;animation:",V," ",1,"s ",W.W," ",$,"s 1 normal both running;&::before{content:'';width:",28.2842712474619,"px;height:",28.2842712474619,"px;border-right:solid 1px rgba(255, 255, 255, 0.5);border-bottom:solid 1px rgba(255, 255, 255, 0.5);transform:rotate(45deg);}"),eY=(0,a.f)("div",{target:"e1p42bwd0"})({name:"1nut75i",styles:"width:100%;height:100svh;min-height:600px;overflow:hidden;position:relative;box-sizing:border-box;background:#0d0d12"});var eq=e.i(35889),eW=e.i(34991);let eH="#555",eV="#eee";function eK({newsData:{metaList:e}}){let r=e.sort((e,t)=>(0,eW.f)(e.date,t.date));return(0,t.jsxs)(eZ,{children:[(0,t.jsx)(i.n,{children:"NEWS"}),(0,t.jsx)(eq.Y,{metaList:r.slice(0,5)}),(0,t.jsx)(e$,{children:(0,t.jsx)(m.U,{color:{primary:eH,secondary:eV},href:(0,h.E)("news"),children:"もっと見る"})})]})}let eZ=(0,a.f)(i.Z,{target:"eg1brd31"})("overflow:hidden;background-color:",eV,";color:",eH,";text-align:center;"),e$=(0,a.f)("div",{target:"eg1brd30"})({name:"va2k03",styles:"text-align:end"});var eJ=e.i(26447),eQ=e.i(9091);function e0({newsData:e,aboutData:a,scheduleData:i,contactData:o}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.f,{}),(0,t.jsx)(ej,{}),(0,t.jsx)(l,{}),(0,t.jsx)(u,{aboutData:a}),(0,t.jsx)(R,{}),(0,t.jsx)(eJ.U,{scheduleData:i}),(0,t.jsx)(eK,{newsData:e}),(0,t.jsx)(I,{contactData:o}),(0,t.jsx)(eQ.f,{})]})}var e1=e.i(71949);e.s(["__N_SSG",0,!0,"default",0,function({aboutData:e,scheduleData:r,newsData:a,contactData:i}){let{caption:o}=e.meta,n=new eJ.P(r.meta.startMonth,r.meta.eventCalendar,!0),l=JSON.parse(a.articlesStr),{clubroom:s,twitterId:c,mail:d}=i.meta;return(0,t.jsx)(e0,{aboutData:{caption:o},scheduleData:{eventCalendar:n},newsData:{metaList:(0,e1.createfilterdArticleMetaList)(l)},contactData:{clubroom:s,twitterId:c,mail:d}})}],43181)}]);