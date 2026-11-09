(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19675,(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(43181)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},3677,(e,t,a)=>{t.exports={label:"入会はこちらから！",path:"/pay",enabled:!0}},43181,e=>{"use strict";var t=e.i(91398),a=e.i(66706),r=e.i(13299),i=e.i(46418),o=e.i(54097);let n=[{src:"/images/activity/ml-blackboard-work.jpg",alt:"黒板で誤差逆伝播を計算する部員",band:"機械学習班"},{src:"/images/activity/ml-writing-together.jpg",alt:"黒板の前で議論する部員",band:"機械学習班"},{src:"/images/activity/ml-board.jpg",alt:"誤差逆伝播法の計算を書き込んだ黒板",band:"機械学習班"}];function l(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(i.n,{children:"活動の様子"}),(0,t.jsx)(s,{children:n.map((e,a)=>(0,t.jsxs)(c,{children:[(0,t.jsx)("img",{src:(0,o.v)(e.src),alt:e.alt,loading:"lazy"}),(0,t.jsx)(d,{children:(0,t.jsx)(f,{children:e.band})})]},a))})]})}let s=(0,r.f)("div",{target:"e1bssynv3"})({name:"49jszk",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;@media (max-width: 900px){grid-template-columns:repeat(2, 1fr);}@media (max-width: 600px){grid-template-columns:1fr;}"}),c=(0,r.f)("div",{target:"e1bssynv2"})({name:"1d94xdw",styles:"position:relative;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12);aspect-ratio:4/3;img{width:100%;height:100%;object-fit:cover;display:block;}"}),d=(0,r.f)("div",{target:"e1bssynv1"})({name:"67ekhz",styles:"position:absolute;left:0;right:0;bottom:0;padding:10px 14px;background:linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))"}),f=(0,r.f)("div",{target:"e1bssynv0"})({name:"v905nl",styles:"color:#fff;font-size:12px;font-weight:bold"});var p=e.i(34666),h=e.i(83958);function x({aboutData:{caption:e}}){return(0,t.jsx)(v,{children:(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"OSK"}),e,(0,t.jsx)(u,{children:(0,t.jsx)(p.U,{color:{primary:"#bbb",secondary:"#333"},href:(0,h.E)("about"),children:"DETAIL"})})]})})}let m=(0,r.f)("div",{target:"ez6ekud3"})({name:"1kblwd7",styles:"font-family:'novecentosans';font-weight:bold;font-size:28px;letter-spacing:0.1em;margin-bottom:16px;color:#fff"}),g=(0,r.f)(i.Z,{target:"ez6ekud2"})({name:"1kwsc2o",styles:"background-color:#333;color:#bbb;font-size:16px;line-height:1.6em"}),u=(0,r.f)("div",{target:"ez6ekud1"})({name:"1wyywwk",styles:"display:flex;flex-direction:row-reverse;margin-bottom:0"}),v=(0,r.f)("div",{target:"ez6ekud0"})("");var b=e.i(24666),w=e.i(91788);function y({type:e}){let a=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let t=a.current;if(!t)return;let r=t.getContext("2d");if(!r)return;let i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=0,n=window.devicePixelRatio||1,{width:l,height:s}=t.getBoundingClientRect();t.width=l*n,t.height=s*n,r.scale(n,n);let c=({ml:()=>{var e,t,a;let i,o,n;return e=r,t=l,a=s,i=e=>9e-4*(e-.3*t)*(e-.3*t)+.3*a+30*Math.sin(.012*e),o=20,n=0,()=>{e.fillStyle="#1b1b2a",e.fillRect(0,0,t,a),e.strokeStyle="rgba(255,255,255,0.07)";for(let r=16;r<a;r+=24)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke();e.beginPath(),e.strokeStyle="#8fa0ff",e.lineWidth=3;for(let a=0;a<=t;a+=4){let t=i(a);0===a?e.moveTo(a,t):e.lineTo(a,t)}e.stroke();let r=.3*t;o+=(r-o)*.01+.5*Math.sin(.05*n),e.beginPath(),e.fillStyle="#da6272",e.arc(o,i(o)-10,7,0,2*Math.PI),e.fill(),n++}},stat:()=>{var e,t,a;let i,o;return e=r,t=l,a=s,i=Array.from({length:20},(e,t)=>{let a=(t/20-.5)*4;return Math.exp(-a*a/2)}),o=0,()=>{e.fillStyle="#2a2235",e.fillRect(0,0,t,a);let r=t/20;for(let t=0;t<20;t++){let n=.08*Math.sin(.04*o+t),l=Math.max(.03,i[t]+n*i[t]),s=l*(a-60);e.fillStyle=`rgba(218, 98, 114, ${.4+.5*l})`,e.fillRect(t*r+2,a-30-s,r-4,s)}e.beginPath(),e.strokeStyle="rgba(255,255,255,0.6)",e.lineWidth=2;for(let r=0;r<=t;r+=4){let i=(r/t-.5)*4,o=a-30-Math.exp(-i*i/2)*(a-60);0===r?e.moveTo(r,o):e.lineTo(r,o)}e.stroke(),o++}},cs:()=>(function(e,t,a){let r=Array.from({length:12},()=>({x:20+Math.random()*(t-40),y:20+Math.random()*(a-40)})),i=[];for(let e=0;e<12;e++)i.push([e,(e+1+Math.floor(2*Math.random()))%12]);let o=[0],n=[0],l=0;return()=>{if(e.fillStyle="#131722",e.fillRect(0,0,t,a),l%18==0)if(n.length){let e=n.shift();i.forEach(([t,a])=>{t!==e||o.includes(a)||(o.push(a),n.push(a)),a!==e||o.includes(t)||(o.push(t),n.push(t))})}else o=[0],n=[0];i.forEach(([t,a])=>{e.strokeStyle="rgba(255,255,255,0.15)",e.beginPath(),e.moveTo(r[t].x,r[t].y),e.lineTo(r[a].x,r[a].y),e.stroke()}),r.forEach((t,a)=>{let r=o.includes(a);e.beginPath(),e.fillStyle=r?"#6fe3c0":"rgba(255,255,255,0.3)",e.arc(t.x,t.y,r?6:4,0,2*Math.PI),e.fill()}),l++}})(r,l,s),cp:()=>{var e,t,a;let i,o,n,c;return e=r,t=l,a=s,i=Array.from({length:18},()=>Math.random()),o=0,n=0,c=0,()=>{if(e.fillStyle="#1c1f14",e.fillRect(0,0,t,a),c%6==0)if(o<18)if(n<18-o-1){if(i[n]>i[n+1]){let e=i[n];i[n]=i[n+1],i[n+1]=e}n++}else n=0,o++;else i=Array.from({length:18},()=>Math.random()),o=0,n=0;let r=t/18;i.forEach((t,i)=>{let o=t*(a-40);e.fillStyle=i===n||i===n+1?"#f2c14e":"#9fd168",e.fillRect(i*r+2,a-20-o,r-4,o)}),c++}},cg:()=>{var e,t,a;let i,o;return e=r,t=l,a=s,e.fillStyle="#0e0e16",e.fillRect(0,0,t,a),i=Array.from({length:140},()=>({x:Math.random()*t,y:Math.random()*a})),o=0,()=>{e.fillStyle="rgba(14,14,22,0.1)",e.fillRect(0,0,t,a),i.forEach(r=>{let i,n,l,s=(i=r.x,n=r.y,(Math.sin(.012*i+.002*(l=o))+Math.cos(.015*n-.0017*l))*Math.PI),c=r.x+1.4*Math.cos(s),d=r.y+1.4*Math.sin(s);e.strokeStyle="rgba(143, 160, 255, 0.5)",e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(c,d),e.stroke(),r.x=c,r.y=d,(r.x<0||r.x>t||r.y<0||r.y>a)&&(r.x=Math.random()*t,r.y=Math.random()*a)}),o++}},web:()=>{var e,t,a;let i,o,n;return e=r,t=l,a=s,i=["<",">","/","{","}",";"],n=Array(o=Math.max(1,Math.floor(t/16))).fill(0).map(()=>-20*Math.random()),e.fillStyle="#0c1a24",e.fillRect(0,0,t,a),()=>{e.fillStyle="rgba(12, 26, 36, 0.16)",e.fillRect(0,0,t,a),e.fillStyle="#5ec8e8",e.font="14px monospace";for(let t=0;t<o;t++){let r=i[Math.floor(Math.random()*i.length)];e.fillText(r,16*t,16*n[t]),16*n[t]>a&&Math.random()>.975&&(n[t]=0),n[t]++}}}})[e]();if(i)return void c();let d=()=>{c(),o=requestAnimationFrame(d)};return o=requestAnimationFrame(d),()=>cancelAnimationFrame(o)},[e]),(0,t.jsx)(T,{ref:a})}let T=(0,r.f)("canvas",{target:"e17zwido0"})({name:"10rcg5p",styles:"position:absolute;inset:0;width:100%;height:100%"}),E=[{name:"機械学習班",caption:"機械学習・データサイエンスの手法を学び、実践します。",motif:"ml",photo:"/images/activity/ml-board.jpg"},{name:"数理統計班",caption:"数学・統計学の理論と応用を探求します。",motif:"stat"},{name:"コンピュータサイエンス班",caption:"計算機科学の理論・低レイヤ技術などを学びます。",motif:"cs"},{name:"競プロ班",caption:"競技プログラミングのコンテストに参加し、アルゴリズムの腕を磨きます。",motif:"cp"},{name:"CG班",caption:"コンピュータグラフィックスや映像制作に取り組みます。",motif:"cg"},{name:"Web・アプリ開発班",caption:"Webサイトやアプリケーションの開発を行います。",motif:"web"}];function j(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(i.n,{children:"班について"}),(0,t.jsx)(R,{children:"入部後は自分の興味に合わせて班を選んで活動します。所属が違う部員と新しい班をつくることもできます。"}),(0,t.jsx)(k,{children:E.map(e=>(0,t.jsxs)(A,{href:(0,h.E)("about"),children:[e.photo?(0,t.jsx)(M,{src:(0,o.v)(e.photo),alt:`${e.name}の活動の様子`,loading:"lazy"}):(0,t.jsx)(y,{type:e.motif}),(0,t.jsxs)(_,{children:[(0,t.jsx)(S,{children:e.name}),(0,t.jsx)(z,{children:e.caption})]})]},e.name))})]})}let R=(0,r.f)("p",{target:"e3g6au56"})({name:"q4lo16",styles:"text-align:center;color:#666;font-size:14px;margin:-24px 0 40px;@media (max-width: 700px){margin-top:-8px;}"}),k=(0,r.f)("div",{target:"e3g6au55"})({name:"49jszk",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;@media (max-width: 900px){grid-template-columns:repeat(2, 1fr);}@media (max-width: 600px){grid-template-columns:1fr;}"}),A=(0,r.f)(b.f,{target:"e3g6au54"})({name:"1yeyu2",styles:"position:relative;display:block;height:220px;border-radius:10px;overflow:hidden;text-decoration:none;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12);transition:transform 0.2s ease;&:hover{transform:translateY(-3px);}"}),M=(0,r.f)("img",{target:"e3g6au53"})({name:"hsbyz0",styles:"position:absolute;inset:0;width:100%;height:100%;object-fit:cover"}),_=(0,r.f)("div",{target:"e3g6au52"})({name:"5ysz2",styles:"position:absolute;left:0;right:0;bottom:0;z-index:2;padding:16px 18px;background:linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"}),S=(0,r.f)("div",{target:"e3g6au51"})({name:"1lelbod",styles:"color:#fff;font-weight:bold;font-size:16px"}),z=(0,r.f)("div",{target:"e3g6au50"})({name:"1r5egio",styles:"color:#ddd;font-size:12px;margin-top:4px;line-height:1.5em"});var D=e.i(69291);function L(){return(0,t.jsx)(U,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"compass",className:"svg-inline--fa fa-compass fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,t.jsx)("path",{fill:"currentColor",d:"M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"})})}function P(){return(0,t.jsx)(U,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"comments",className:"svg-inline--fa fa-comments fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,t.jsx)("path",{fill:"currentColor",d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"})})}let U=(0,r.f)("svg",{target:"e1i3lo1s0"})("width:",40,"px;height:",40,"px;");function I({contactData:{clubroom:e,twitterId:a,mail:r}}){return(0,t.jsxs)(N,{children:[(0,t.jsxs)(B,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(L,{}),"LOCATION"]}),(0,t.jsxs)(F,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(D._,{})}),e]})]}),(0,t.jsxs)(G,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(P,{}),"CONTACT"]}),(0,t.jsxs)(F,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(D.T,{})}),(0,t.jsxs)(Y,{target:"_blank",rel:"noopener",href:(0,h.C)("twitter",a),children:["@",a]})]}),(0,t.jsxs)(F,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(D.I,{})}),(0,t.jsx)(Y,{href:(0,h.T)(r),children:r})]})]})]})}let N=(0,r.f)("div",{target:"edsla3w7"})({name:"jtl1pt",styles:"display:flex;flex-flow:row;@media (max-width: 700px){flex-flow:column;}"}),C=(0,r.f)("div",{target:"edsla3w6"})({name:"1osbop6",styles:"padding:60px 40px;flex:1"}),B=(0,r.f)(C,{target:"edsla3w5"})({name:"1b8ying",styles:"background-color:#7987bb"}),G=(0,r.f)(C,{target:"edsla3w4"})({name:"6df8ic",styles:"background-color:#da8d9b"}),X=(0,r.f)(i.n,{target:"edsla3w3"})({name:"1iulk2y",styles:"display:flex;flex-flow:column;align-items:center;margin-bottom:40px"}),F=(0,r.f)("div",{target:"edsla3w2"})("display:flex;justify-content:center;font-size:16px;line-height:",24,"px;color:#333;max-width:240px;text-align:center;margin:0 auto 16px;"),O=(0,r.f)("div",{target:"edsla3w1"})("width:",24,"px;height:",24,"px;margin-right:4px;"),Y=(0,r.f)("a",{target:"edsla3w0"})({name:"1wjykim",styles:"color:#333"});var W=e.i(92241),q=e.i(49804),H=e.i(7065);let K=H.q`
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
`,en=(0,r.f)(b.f,{target:"ebsuzlz1"})(eo," background-color:#da6272;color:#fff;"),el=(0,r.f)("div",{target:"ebsuzlz0"})(eo," background-color:#aaa;color:#eee;cursor:not-allowed;"),es=[{id:"tropical",label:"トロピカル曲線"},{id:"four",label:"四色和柄"},{id:"seigaiha",label:"青海波"},{id:"life",label:"ライフゲーム"},{id:"ant",label:"ラングトンのアリ"}],ec=`#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }`,ed=`#version 300 es
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
const float TILT = 1.05;           // 背景面の傾き tan(θ)。θ≈46\xb0で上ほど遠い
const float SOFT_PAD = .4;
const float CYCLE = 22.;
const float GRID = 96.;

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
}`,ef=e=>new Promise((t,a)=>{let r=new Image;r.onload=()=>t(r),r.onerror=a,r.src=e}),ep="tropical";function eh(){let e=(0,w.useRef)(null),a=(0,w.useRef)(null),r=(0,w.useRef)(null),[i,n]=(0,w.useState)(!1),[l,s]=(0,w.useState)(ep),[c,d]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{let t,i=e.current,l=a.current;if(!i||!l)return;let c=(t=new URLSearchParams(window.location.search).get("bg"),es.some(e=>e.id===t)?t:ep);s(c),d(!!o.z||new URLSearchParams(window.location.search).has("bg"));let f=function({canvas:e,frame:t,textures:a,mode:r,onReady:i}){let o,n,l,s,c,d,f,p,h,x,m,g,u={setMode:()=>void 0,destroy:()=>void 0},v=e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"low-power"});if(!v)return u;let b=window.matchMedia("(prefers-reduced-motion: reduce)").matches,w=!1,y=0,T=null,E=!0,j=r,R=(o=new Uint8Array(9216),n=new Float32Array(9216),l=new Float32Array(9216),s=new Uint8Array(18432),c=(e,t)=>(t+96)%96*96+(e+96)%96,d="life",f=0,p=0,h=[],x=e=>{if(d=e,o.fill(0),n.fill(0),l.fill(0),p=0,"life"===d)for(let e=0;e<9216;e++)o[e]=+(.2>Math.random());else{h=Array.from({length:3},()=>({x:Math.floor(96*Math.random()),y:Math.floor(96*Math.random()),d:Math.floor(4*Math.random())}));for(let e=0;e<2500;e++)g();for(let e=0;e<9216;e++)n[e]=o[e];l.fill(0)}},m=()=>{let e=new Uint8Array(9216),t=0;for(let a=0;a<96;a++)for(let r=0;r<96;r++){let i=0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)(t||e)&&(i+=o[c(r+t,a+e)]);let n=96*a+r,s=3===i||2===i&&o[n]?1:0;s&&!o[n]&&(l[n]=1),e[n]=s,t+=s}o.set(e),p++,(t<276.48||p%45==0)&&(e=>{let t=Math.floor(96*Math.random()),a=Math.floor(96*Math.random());for(let[r,i]of e)o[c(t+r,a+i)]=1})(.5>Math.random()?[[1,0],[2,1],[0,2],[1,2],[2,2]]:[[1,0],[2,0],[0,1],[1,1],[1,2]])},g=()=>{for(let e of h){let t=c(e.x,e.y);e.d=(e.d+(o[t]?3:1))%4,o[t]^=1,l[t]=1,e.x=(e.x+[0,1,0,-1][e.d]+96)%96,e.y=(e.y+[-1,0,1,0][e.d]+96)%96}++p>14e3&&x("ant")},{reset:x,update(e){let t="life"===d?.9:1/45;f+=e;let a=0;for(;f>=t&&a<50;)f-=t,a++,"life"===d?m():g();let r=1-Math.exp(-e*("life"===d?3:6)),i=Math.exp(-e*("life"===d?1.5:.8));for(let e=0;e<9216;e++)n[e]+=(o[e]-n[e])*r,l[e]*=i,s[2*e]=255*n[e],s[2*e+1]=255*Math.min(1,l[e]*("life"===d?.7:.5));if("ant"===d)for(let e of h)s[2*c(e.x,e.y)+1]=255;return s}}),k=(e,t)=>{let a=v.createShader(e);return v.shaderSource(a,t),v.compileShader(a),v.getShaderParameter(a,v.COMPILE_STATUS)||console.error(v.getShaderInfoLog(a)),a},A=v.createProgram();if(v.attachShader(A,k(v.VERTEX_SHADER,ec)),v.attachShader(A,k(v.FRAGMENT_SHADER,ed)),v.linkProgram(A),!v.getProgramParameter(A,v.LINK_STATUS))return u;v.useProgram(A),v.bindBuffer(v.ARRAY_BUFFER,v.createBuffer()),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),v.STATIC_DRAW);let M=v.getAttribLocation(A,"a");v.enableVertexAttribArray(M),v.vertexAttribPointer(M,2,v.FLOAT,!1,0,0);let _=v.getExtension("EXT_texture_filter_anisotropic"),S=(e,t)=>{v.activeTexture(v.TEXTURE0+e),v.bindTexture(v.TEXTURE_2D,v.createTexture()),v.uniform1i(v.getUniformLocation(A,t),e)},z=(e,t,a,r,i=!0)=>{S(e,r),v.pixelStorei(v.UNPACK_COLORSPACE_CONVERSION_WEBGL,v.NONE),v.texImage2D(v.TEXTURE_2D,0,v.RGBA,v.RGBA,v.UNSIGNED_BYTE,t),i&&v.generateMipmap(v.TEXTURE_2D),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,i?v.LINEAR_MIPMAP_LINEAR:v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,i?v.LINEAR:v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,a),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,a),_&&i&&a===v.REPEAT&&v.texParameterf(v.TEXTURE_2D,_.TEXTURE_MAX_ANISOTROPY_EXT,8)};S(5,"uG"),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.NEAREST),v.pixelStorei(v.UNPACK_ALIGNMENT,1),v.texImage2D(v.TEXTURE_2D,0,v.RG8,96,96,0,v.RG,v.UNSIGNED_BYTE,new Uint8Array(18432));let D=e=>{v.activeTexture(v.TEXTURE5),v.texSubImage2D(v.TEXTURE_2D,0,0,0,96,96,v.RG,v.UNSIGNED_BYTE,e)},L=()=>{let e;v.uniform1i(v.getUniformLocation(A,"uMode"),(e=j,es.findIndex(t=>t.id===e))),("life"===j||"ant"===j)&&(R.reset(j),D(R.update(3*!!b)))},P={x:-.6,y:-.7,tx:-.6,ty:-.7},U={x:0,y:0,tx:0,ty:0},I=-1/0,N=e=>{if("mouse"!==e.pointerType)return;let a=t.getBoundingClientRect(),r=e=>Math.max(-1.8,Math.min(1.8,e));P.tx=r((e.clientX-(a.left+a.width/2))/(a.height/2)),P.ty=r((e.clientY-(a.top+a.height/2))/(a.height/2)),U.tx=e.clientX/window.innerWidth*2-1,U.ty=e.clientY/window.innerHeight*2-1,I=performance.now()},C=()=>{let a=Math.min(window.devicePixelRatio||1,2),r=e.getBoundingClientRect();e.width=Math.max(1,Math.round(r.width*a)),e.height=Math.max(1,Math.round(r.height*a)),v.viewport(0,0,e.width,e.height);let i=t.getBoundingClientRect();v.uniform2f(v.getUniformLocation(A,"uRes"),e.width,e.height),v.uniform1f(v.getUniformLocation(A,"uDpr"),a),v.uniform4f(v.getUniformLocation(A,"uRect"),(i.left-r.left)*a,(i.top-r.top)*a,i.width*a,i.height*a),T?.()},B=new ResizeObserver(C),G=e=>{v.uniform1f(v.getUniformLocation(A,"uTime"),e/1e3),v.uniform2f(v.getUniformLocation(A,"uLight"),P.x,P.y),v.uniform2f(v.getUniformLocation(A,"uPar"),U.x,U.y),v.drawArrays(v.TRIANGLES,0,3)},X=performance.now(),F=e=>{if(y=0,w||!E||document.hidden)return;let t=Math.min(.1,(e-X)/1e3);if(X=e,e-I>2500){let t=e/1e3;P.tx=-.55+.45*Math.sin(.23*t),P.ty=-.6+.35*Math.cos(.31*t),U.tx=0,U.ty=0}let a=1-Math.exp(-(5*t));P.x+=(P.tx-P.x)*a,P.y+=(P.ty-P.y)*a,U.x+=(U.tx-U.x)*a,U.y+=(U.ty-U.y)*a,("life"===j||"ant"===j)&&D(R.update(t)),G(e),y=requestAnimationFrame(F)},O=()=>{y||w||b||!T||(X=performance.now(),y=requestAnimationFrame(F))},Y=new IntersectionObserver(([e])=>{(E=e.isIntersecting)&&O()}),W=()=>{document.hidden||O()},q=t=>{t.preventDefault(),w=!0,e.style.display="none"};return e.addEventListener("webglcontextlost",q),Promise.all([a.inkA,a.inkB,a.soft,a.tropical,a.trails].map(ef)).then(([a,r,o,n,l])=>{w||(z(0,a,v.CLAMP_TO_EDGE,"uA"),z(1,r,v.CLAMP_TO_EDGE,"uB"),z(2,o,v.CLAMP_TO_EDGE,"uS"),z(3,n,v.REPEAT,"uT"),z(4,l,v.REPEAT,"uR",!1),L(),T=()=>G(b?0:performance.now()),C(),B.observe(e),B.observe(t),Y.observe(e),window.addEventListener("pointermove",N,{passive:!0}),document.addEventListener("visibilitychange",W),T(),O(),i())}).catch(()=>void 0),{setMode(e){j=e,T&&(L(),T())},destroy(){w=!0,y&&cancelAnimationFrame(y),B.disconnect(),Y.disconnect(),window.removeEventListener("pointermove",N),document.removeEventListener("visibilitychange",W),e.removeEventListener("webglcontextlost",q)}}}({canvas:i,frame:l,mode:c,textures:{inkA:(0,o.v)("/images/hero/ink_a.webp"),inkB:(0,o.v)("/images/hero/ink_b.webp"),soft:(0,o.v)("/images/hero/ink_soft.webp"),tropical:(0,o.v)("/images/hero/tropical.webp"),trails:(0,o.v)("/images/hero/trails.webp")},onReady:()=>n(!0)});return r.current=f,()=>f.destroy()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ex,{ref:e,"data-ready":i,"aria-hidden":"true"}),(0,t.jsx)(em,{children:(0,t.jsx)(eg,{ref:a,src:(0,o.v)("/images/hero/ink_static.webp"),alt:"応用数学研究部","data-ready":i})}),c&&i&&(0,t.jsx)(eu,{"aria-label":"背景の柄(比較用)",children:es.map(e=>(0,t.jsx)(ev,{type:"button","aria-pressed":l===e.id,onClick:()=>{var t;let a;return s(t=e.id),r.current?.setMode(t),void((a=new URL(window.location.href)).searchParams.set("bg",t),window.history.replaceState(null,"",a))},children:e.label},e.id))})]})}let ex=(0,r.f)("canvas",{target:"e15rgzkp4"})({name:"n6t5nk",styles:"position:absolute;inset:0;width:100%;height:100%;display:block;opacity:0;transition:opacity 1.2s ease;&[data-ready='true']{opacity:1;}"}),em=(0,r.f)("h1",{target:"e15rgzkp3"})({name:"1q6amu3",styles:"margin:0;font-size:inherit"}),eg=(0,r.f)("img",{target:"e15rgzkp2"})({name:"1yci1m",styles:"position:absolute;z-index:1;display:block;aspect-ratio:1214/1843;top:92px;left:50%;transform:translateX(-50%);height:min(calc(100svh - 340px), 132vw);transition:opacity 1.2s ease;&[data-ready='true']{opacity:0;}@media (min-width: 860px){top:50%;left:auto;right:max(3vw, calc(50% - 600px));transform:translateY(-50%);height:min(94vh, 1120px);}"}),eu=(0,r.f)("div",{target:"e15rgzkp1"})({name:"13zzruo",styles:"position:absolute;z-index:3;top:12px;left:12px;display:flex;flex-wrap:wrap;gap:4px;max-width:calc(100% - 24px)"}),ev=(0,r.f)("button",{target:"e15rgzkp0"})({name:"1ysr8wj",styles:"padding:4px 10px;font-size:12px;color:rgba(255, 255, 255, 0.7);background:rgba(10, 14, 22, 0.6);border:solid 1px rgba(127, 214, 255, 0.25);border-radius:999px;cursor:pointer;&[aria-pressed='true']{color:#0d0d12;background:#7fd6ff;border-color:#7fd6ff;}"});var eb={name:"mgg7wz",styles:"html{background:#0d0d12;overscroll-behavior:none;}body{background:#fff;}"};function ew(){return(0,t.jsxs)(eP,{children:[(0,t.jsx)(H.B,{styles:eb}),(0,t.jsx)(eh,{}),(0,t.jsxs)(eT,{children:[(0,t.jsx)(eE,{children:(0,t.jsx)(ea,{})}),(0,t.jsx)(ej,{children:(0,t.jsx)(W.f,{})})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(ek,{children:"東京理科大学"}),(0,t.jsxs)(eA,{children:["そうだ、",(0,t.jsx)("br",{}),"応用数学しよう。"]}),(0,t.jsx)(eM,{children:"機械学習 / 数理統計 / コンピュータサイエンス / 競プロ / CG / Web・アプリ開発"}),(0,t.jsxs)(e_,{children:[(0,t.jsx)(eS,{href:(0,h.E)("about"),children:"部の様子"}),(0,t.jsx)(ez,{href:(0,h.E)("contact"),children:"ご連絡"})]})]}),(0,t.jsx)(eD,{children:(0,t.jsx)(eL,{})})]})}let ey="rgba(255, 255, 255, 0.92)",eT=(0,r.f)("div",{target:"e1p42bwd12"})("position:relative;z-index:2;overflow:hidden;display:flex;flex-flow:column;padding:",40,"px 24px 0;box-sizing:border-box;@media (max-width: 859px){padding-top:8px;}a{color:rgba(255, 255, 255, 0.72);border-bottom-color:rgba(255, 255, 255, 0.4);}"),eE=(0,r.f)("div",{target:"e1p42bwd11"})("position:fixed;bottom:24px;right:24px;z-index:100;animation:",V," ",1,"s ",q.W," ",$+.2,"s 1 normal both running;"),ej=(0,r.f)("div",{target:"e1p42bwd10"})("animation:",V," ",1,"s ",q.W," ",$,"s 1 normal both running;"),eR=(0,r.f)("div",{target:"e1p42bwd9"})("position:absolute;z-index:2;left:24px;right:24px;bottom:24px;color:",ey,";animation:",Z," ",1,"s ",q.W," ",$,"s 1 normal both running;@media (min-width: 860px){left:max(6vw, calc(50% - 600px));right:auto;bottom:16vh;max-width:440px;}"),ek=(0,r.f)("p",{target:"e1p42bwd8"})({name:"i4ryc9",styles:"margin:0 0 12px;font-size:14px;letter-spacing:0.3em;color:rgba(255, 255, 255, 0.6)"}),eA=(0,r.f)("p",{target:"e1p42bwd7"})({name:"12jyv23",styles:"margin:0 0 16px;font-family:'Hiragino Mincho ProN','Yu Mincho','YuMincho',serif;font-size:clamp(24px, 3.2vw, 44px);line-height:1.5;letter-spacing:0.08em;white-space:nowrap"}),eM=(0,r.f)("p",{target:"e1p42bwd6"})({name:"3k45wc",styles:"margin:0 0 24px;font-size:13px;line-height:1.9;word-break:keep-all;color:rgba(255, 255, 255, 0.62);@media (max-width: 859px){margin-bottom:16px;font-size:12px;}"}),e_=(0,r.f)("div",{target:"e1p42bwd5"})({name:"1wesxqa",styles:"display:flex;gap:12px"}),eS=(0,r.f)(b.f,{target:"e1p42bwd4"})("padding:10px 28px;font-size:14px;letter-spacing:0.1em;color:#0d0d12;background:",ey,";transition:background 0.2s ease;&:hover{background:#7fd6ff;}"),ez=(0,r.f)(b.f,{target:"e1p42bwd3"})("padding:9px 27px;font-size:14px;letter-spacing:0.1em;color:",ey,";border:solid 1px rgba(255, 255, 255, 0.4);transition:border-color 0.2s ease,color 0.2s ease;&:hover{color:#7fd6ff;border-color:#7fd6ff;}@media (max-width: 859px){display:none;}"),eD=(0,r.f)("div",{target:"e1p42bwd2"})({name:"1uz9rs",styles:"position:absolute;z-index:2;left:50%;bottom:12px;transform:translateX(-50%);@media (max-width: 859px){display:none;}"}),eL=(0,r.f)("div",{target:"e1p42bwd1"})("width:",40,"px;height:",40,"px;display:flex;align-items:center;justify-content:center;animation:",K," ",1,"s ",q.W," ",$,"s 1 normal both running;&::before{content:'';width:",28.2842712474619,"px;height:",28.2842712474619,"px;border-right:solid 1px rgba(255, 255, 255, 0.5);border-bottom:solid 1px rgba(255, 255, 255, 0.5);transform:rotate(45deg);}"),eP=(0,r.f)("div",{target:"e1p42bwd0"})({name:"1nut75i",styles:"width:100%;height:100svh;min-height:600px;overflow:hidden;position:relative;box-sizing:border-box;background:#0d0d12"});var eU=e.i(35889),eI=e.i(34991);let eN="#555",eC="#eee";function eB({newsData:{metaList:e}}){let a=e.sort((e,t)=>(0,eI.f)(e.date,t.date));return(0,t.jsxs)(eG,{children:[(0,t.jsx)(i.n,{children:"NEWS"}),(0,t.jsx)(eU.Y,{metaList:a.slice(0,5)}),(0,t.jsx)(eX,{children:(0,t.jsx)(p.U,{color:{primary:eN,secondary:eC},href:(0,h.E)("news"),children:"もっと見る"})})]})}let eG=(0,r.f)(i.Z,{target:"eg1brd31"})("overflow:hidden;background-color:",eC,";color:",eN,";text-align:center;"),eX=(0,r.f)("div",{target:"eg1brd30"})({name:"va2k03",styles:"text-align:end"});var eF=e.i(26447),eO=e.i(9091);function eY({newsData:e,aboutData:r,scheduleData:i,contactData:o}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.f,{}),(0,t.jsx)(ew,{}),(0,t.jsx)(l,{}),(0,t.jsx)(x,{aboutData:r}),(0,t.jsx)(j,{}),(0,t.jsx)(eF.U,{scheduleData:i}),(0,t.jsx)(eB,{newsData:e}),(0,t.jsx)(I,{contactData:o}),(0,t.jsx)(eO.f,{})]})}var eW=e.i(71949);e.s(["__N_SSG",0,!0,"default",0,function({aboutData:e,scheduleData:a,newsData:r,contactData:i}){let{caption:o}=e.meta,n=new eF.P(a.meta.startMonth,a.meta.eventCalendar,!0),l=JSON.parse(r.articlesStr),{clubroom:s,twitterId:c,mail:d}=i.meta;return(0,t.jsx)(eY,{aboutData:{caption:o},scheduleData:{eventCalendar:n},newsData:{metaList:(0,eW.createfilterdArticleMetaList)(l)},contactData:{clubroom:s,twitterId:c,mail:d}})}],43181)}]);