(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{14:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return oe}});var r=n(5893),i=n(5025),a=n(7231),s=n(1664),o=n(7294),l=n(117),c=(n(5022),n(9368)),d=n(5914),f=n(2922),u=n(5804),p=n.n(u),x=n(2809),h=n(5948);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,x.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(t){var e=t.list,n=t.setList;return(0,r.jsx)(h.Z5,{onDragEnd:function(t){if(t.destination){var r=function(t,e,n){var r=Array.from(t),a=r.splice(e,1),s=(0,i.Z)(a,1)[0];return r.splice(n,0,s),r}(e.Current,t.source.index,t.destination.index);n({Original:e.Original,Current:r})}},children:(0,r.jsx)(h.bK,{droppableId:"list",direction:"horizontal",children:function(t){return(0,r.jsxs)(y,{ref:t.innerRef,children:[e.Current.map((function(t,e){return(0,r.jsx)(h._l,{draggableId:t.toString(),index:e,children:function(e){return(0,r.jsx)(L,j(j(j({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:t}))}},t.toString())})),t.placeholder]})}})})},y=(0,a.Z)("div",{target:"e1mr6aiq1"})({name:"1fxn6ai",styles:"width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center"}),L=(0,a.Z)("span",{target:"e1mr6aiq0"})({name:"1rr6ncy",styles:"width:3em;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;border:5px solid rgba(255, 255, 255, 0.1);border-radius:5px"});function v(t){var e,n=t.length,r=[3,4,5,6][(e=4,Math.floor(Math.random()*e))],i=function(t){for(var e,n=t.length;n>0;){e=Math.floor(Math.random()*n),n--;var r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}return t}(t);return[].concat((0,f.Z)(i.slice(0,n-r)),(0,f.Z)(i.slice(n-r).sort().reverse()))}var F=(0,a.Z)("button",{target:"e3ak6dm5"})({name:"dwp4r4",styles:"text-align:center;background-color:rgb(255, 209, 84);color:rgb(51, 51, 51);width:7em;height:2.5em;min-width:100px;box-shadow:none;border:none;border-radius:8px;font-weight:bold;font-size:1.2em;cursor:pointer;margin:0 0 2em 0"}),b=function(t){var e=t.list;return(0,r.jsx)(w,{children:e.map((function(t){return(0,r.jsx)(M,{children:t})}))})},Z=function(){var t=(0,o.useState)("default"),e=t[0],n=t[1],i=Array.from([1,2,3,4,5,6,7,8,9]),a=v(i);a===i.reverse()&&(a=i);var s=(0,o.useState)({Original:a,Current:a}),l=s[0],c=s[1],d=function(){var t=v(i);t===i.reverse()&&(t=i),c({Original:t,Current:t}),n("default")};switch(e){case"default":return(0,r.jsxs)(C,{children:[(0,r.jsx)(k,{children:"Next Permutation!"}),(0,r.jsx)(O,{children:"\u4e0e\u3048\u3089\u308c\u305f\u6570\u5217\u306enext_permutation\u3092\u7b54\u3048\u308b\u30b2\u30fc\u30e0\u3067\u3059\u3002"}),(0,r.jsx)(F,{type:"button",onClick:function(){n("quiz")},children:"\u904a\u3076"})]});case"quiz":return(0,r.jsxs)(C,{children:[(0,r.jsx)(k,{children:"\u554f\u984c"}),(0,r.jsx)(b,{list:l.Original}),(0,r.jsx)(k,{children:"\u56de\u7b54"}),(0,r.jsx)(m,{list:l,setList:c}),(0,r.jsx)(F,{type:"button",onClick:function(){n("result")},children:"\u56de\u7b54\u3059\u308b"})]});case"result":var f=function(t){for(var e=p()(t),n=e.length,r=n-2;r>=0;r--)if(e[r]<e[r+1])for(var i=n-1;i>r;i--)if(e[i]>e[r]){var a=[e[i],e[r]];e[r]=a[0],e[i]=a[1];for(var s=n-(r+1)>>1,o=0;o<s;o++){var l=[e[n-1-o],e[r+1+o]];e[r+1+o]=l[0],e[n-1-o]=l[1]}return e}}(l.Original);return JSON.stringify(f)===JSON.stringify(l.Current)?(0,r.jsxs)(C,{children:[(0,r.jsx)(k,{children:"\u6b63\u89e3\uff01\uff01"}),(0,r.jsx)(F,{type:"button",onClick:function(){d()},children:"\u3082\u3046\u4e00\u5ea6\u904a\u3076"})]}):(0,r.jsxs)(C,{children:[(0,r.jsx)(k,{children:"\u4e0d\u6b63\u89e3"}),(0,r.jsx)(k,{children:"\u554f\u984c"}),(0,r.jsx)(b,{list:l.Original}),(0,r.jsx)(k,{children:"\u3042\u306a\u305f\u306e\u56de\u7b54"}),(0,r.jsx)(b,{list:l.Current}),(0,r.jsx)(k,{children:"\u6b63\u89e3"}),(0,r.jsx)(b,{list:f}),(0,r.jsx)(F,{type:"button",onClick:function(){d()},children:"\u3082\u3046\u4e00\u5ea6\u904a\u3076"})]});default:return null}},C=(0,a.Z)("div",{target:"e3ak6dm4"})({name:"7vgguz",styles:"width:100%;display:flex;background:rgb(43, 135, 209);color:white;margin:auto;flex-direction:column;align-items:center;justify-content:space-evenly;gap:1em"}),w=(0,a.Z)("div",{target:"e3ak6dm3"})({name:"1fxn6ai",styles:"width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center"}),M=(0,a.Z)("span",{target:"e3ak6dm2"})({name:"1rr6ncy",styles:"width:3em;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;border:5px solid rgba(255, 255, 255, 0.1);border-radius:5px"}),O=(0,a.Z)("div",{target:"e3ak6dm1"})({name:"1yvwgk2",styles:"font-family:'Yu Gothic',sans-serif;margin:0 3%;font-size:1em;text-align:left"}),k=(0,a.Z)("div",{target:"e3ak6dm0"})({name:"1imnbln",styles:"margin:0.5em 0 0 0;font-family:'Hiragino Kaku Gothic Pro',sans-serif;font-size:2em;line-height:1.3em;text-align:left;&::after{content:'';display:block;width:100%;border-bottom:solid 2px #5d639e;margin:5px auto;}"}),B="@media (max-width: ".concat(960,"px)");function z(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(H,{children:"CG\u73ed"}),(0,r.jsx)(P,{children:(0,r.jsxs)(A,{children:["CG\u73ed\u3067\u306f\u4e3b\u306bblender,unity\u3092\u6271\u3044\u30013DCG\u7528\u306e\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3057\u305f\u308a\u3001VR\u3067\u904a\u3093\u3060\u308a\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.jsx)("br",{}),"3DCG\u30e2\u30c7\u30ea\u30f3\u30b0\u5b8c\u5168\u521d\u5fc3\u8005\u306e\u90e8\u54e1\u305f\u3061\u304cweb\u4e0a\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3084\u3001\u672c\u304b\u3089\u5b66\u3093\u3067\u3044\u307e\u3059\u3002",(0,r.jsx)("br",{}),"\u7406\u5927\u796d\u3067\u306f\u4eca\u5e74\u767a\u58f2\u306emeta quest3\u306eMR\u3092\u5229\u7528\u3057\u3001\u90e8\u54e1\u304c\u4f5c\u6210\u3057\u305f\u7c21\u5358\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u3001\u65e2\u88fd\u54c1\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u3063\u3066\u3001VR\u3001MR\u306e\u5c55\u793a\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002"]})})]})}var H=(0,a.Z)("h1",{target:"ej5fcti2"})({name:"1ydlwb3",styles:"font-family:'novecentosans',sans-serif;font-size:2.5em;line-height:1.3em;text-align:center;&::after{content:'';display:block;width:40px;border-bottom:solid 2px #5d639e;margin:50px auto;}"}),P=(0,a.Z)("div",{target:"ej5fcti1"})({name:"otktgx",styles:"margin:10%;border-top:2px solid #aaa;border-bottom:2px solid #aaa;padding:2em 0;position:relative;&::before,&::after{content:'';position:absolute;top:-10px;width:2px;height:-webkit-calc(100% + 20px);height:calc(100% + 20px);background-color:#aaa;}&::before{left:10px;}&::after{right:10px;}"}),A=(0,a.Z)("div",{target:"ej5fcti0"})({name:"7i0kq3",styles:"margin:0 3%;font-size:1.2em;text-align:center"});function q(){return(0,r.jsxs)(E,{children:[(0,r.jsx)(R,{children:"Hackers' Cafe"}),(0,r.jsx)(S,{children:"I\u90e8\u7814\u7a76\u4f1a\u5fdc\u7528\u6570\u5b66\u7814\u7a76\u90e8\u306b\u3088\u308b\uff12\u65e5\u9593\u9650\u5b9a\u306e\u30ab\u30d5\u30a7\u3002 \u725b\u8fbc\u795e\u697d\u5742\u306e\u7119\u714e\u5e97VOLCAN\u30aa\u30ea\u30b8\u30ca\u30eb\u30d6\u30ec\u30f3\u30c9\u306e\u30dc\u30eb\u30ab\u30f3\u30d6\u30ec\u30f3\u30c9\u3092\u3001\u4e00\u676f\u305a\u3064\u30cf\u30f3\u30c9\u30c9\u30ea\u30c3\u30d7\u3067\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),(0,r.jsx)(D,{src:"/images/ridaisai/2023/coffeeCup.jpg"}),(0,r.jsx)(R,{children:"\u30dc\u30eb\u30ab\u30f3\u30d6\u30ec\u30f3\u30c9"}),(0,r.jsx)(S,{children:"\u30dc\u30eb\u30ab\u30f3\u30a2\u30b9\u30fc\u30eb\u3092\u4e2d\u5fc3\u306b4\u7a2e\u985e\u306e\u8c46\u3092\u30d6\u30ec\u30f3\u30c9\u3057\u3066\u3044\u307e\u3059\u3002 \u82e6\u5473\u7518\u5473\u306e\u30d0\u30e9\u30f3\u30b9\u304c\u7d76\u5999\u3067\u3059\u3002 \u30b3\u30fc\u30d2\u30fc\u597d\u304d\u306e\u90e8\u54e1\u304c\u304a\u3044\u3057\u3055\u3092\u6700\u5927\u9650\u5f15\u304d\u51fa\u3059\u633d\u304d\u76ee\u3092\u63a2\u308a\u307e\u3057\u305f\u3002 \u30a2\u30a4\u30b9\u3067\u3082\u30db\u30c3\u30c8\u3067\u3082\u6700\u9ad8\u3067\u3059\u3002"}),(0,r.jsx)(_,{src:"/images/ridaisai/2023/coffee.jpg"}),(0,r.jsx)(R,{children:"\u4f5c\u54c1\u5c55\u793a"}),(0,r.jsx)(S,{children:"\u30ec\u30a4\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u306e\u30b7\u30a7\u30fc\u30c0\u30fc\u3001\u81ea\u4f5c\u30b2\u30fc\u30e0\u3001\u5b66\u751f\u8a3c\u306b\u3088\u308b\u5165\u9000\u5ba4\u30b7\u30b9\u30c6\u30e0\u306a\u3069\u306e\u90e8\u54e1\u306e\u5236\u4f5c\u7269\u3092\u5c55\u793a\u3057\u3066\u3044\u307e\u3059\u3002 VR\u4f53\u9a13\u4f1a\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u30af\u30a4\u30ba\u306a\u3069\u306e\u4f53\u9a13\u578b\u306e\u4f01\u753b\u3082\u3042\u308a\u307e\u3059\u306e\u3067\u305c\u3072\u8a2a\u308c\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"})]})}var E=(0,a.Z)("div",{target:"eg7x8r55"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),S=(0,a.Z)("div",{target:"eg7x8r54"})({name:"1yvwgk2",styles:"font-family:'Yu Gothic',sans-serif;margin:0 3%;font-size:1em;text-align:left"}),R=(0,a.Z)("div",{target:"eg7x8r53"})({name:"1imnbln",styles:"margin:0.5em 0 0 0;font-family:'Hiragino Kaku Gothic Pro',sans-serif;font-size:2em;line-height:1.3em;text-align:left;&::after{content:'';display:block;width:100%;border-bottom:solid 2px #5d639e;margin:5px auto;}"}),V=(0,a.Z)("img",{target:"eg7x8r52"})({name:"3lun84",styles:"margin:0 0 0 auto;width:50%;object-fit:contain"}),D=(0,a.Z)(V,{target:"eg7x8r51"})({name:"1co12wj",styles:"margin:0.2em 0 0 auto"}),_=(0,a.Z)(V,{target:"eg7x8r50"})({name:"1hul58r",styles:"margin:0.5em auto 0 0"}),I=n(2237),T=n(917);function G(){return(0,r.jsx)("svg",{width:"100%",viewBox:"0 0 215 217",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M213.5 107.5C213.5 119.181 216.873 133.938 213.5 144.5C209.592 156.737 201.658 164.042 194 174C181.597 190.127 175.373 206.218 156 213.5C143.962 218.025 124.119 216 110.5 216C90.0345 216 74.7616 215.984 59.5227 208C36.1274 195.743 29.0345 184.447 17.5345 155C12.693 142.603 0.5 124.612 0.5 110.5C0.5 99.5529 5.0226 89.9793 8 80C11.6362 67.8128 13.6549 54.512 21 44.5C30.3484 31.7574 44.1246 25.2383 58 17.5C73.836 8.66831 91.0803 0.5 110.5 0.5C118.921 0.5 127.121 1.4463 135 3.23838C148.637 6.3403 161.811 19.3515 173 27C194.691 41.8275 206.302 49.3435 213.035 75.5C216.767 90 213.5 98.0043 213.5 107.5Z"})})}var N=n(2209),X=n(4674);function K(){var t=(0,N.Z)(["\n  to {\n    ","\n  }\n"]);return K=function(){return t},t}function U(){var t=(0,N.Z)(["\n  50% {\n    ","\n  }\n  to {\n    ","\n  }\n"]);return U=function(){return t},t}function Y(){var t=(0,N.Z)(["\n  to {\n    ","\n  }\n"]);return Y=function(){return t},t}var J="#f9faf3",W={name:"19pdey3",styles:"transform:rotate(0)"},Q={name:"11nlby3",styles:"transform:rotate(360deg)"},$=(0,T.F4)(Y(),Q),tt=(0,T.iv)(W," animation:60s ",$,";",""),et={name:"1nk1x65",styles:"transform:scale(1)"},nt={name:"1w3e6k9",styles:"transform:scale(1.05)"},rt={name:"1nk1x65",styles:"transform:scale(1)"},it=(0,T.F4)(U(),nt,rt),at=(0,T.iv)(et," animation:4s ",it," infinite;",""),st={name:"piosqc",styles:"transform:translateY(-100%)"},ot={name:"18kx7q8",styles:"transform:translateY(100%)"},lt=(0,T.F4)(K(),ot),ct=(0,T.iv)(st," animation:1s ",lt," 1s infinite;",""),dt={name:"3ix1vd",styles:"opacity:1"},ft={name:"mws4fn",styles:"opacity:0"},ut={name:"o5eh00",styles:"opacity:1;transform:scale(1) rotate(0)"},pt={name:"bpcpwl",styles:"opacity:0;transform:scale(0.4) rotate(-240deg)"},xt={name:"64ancp",styles:"opacity:1;transform:translateX(0)"},ht={name:"18v7cpv",styles:"opacity:0;transform:translateX(-8px)"},gt={name:"x5jv5q",styles:"background-color:none"},jt={name:"2f9cko",styles:"opacity:1;transform:rotate(0)"},mt={name:"1na06ez",styles:"opacity:0;transform:rotate(-20deg)"},yt={1:{duration:.6,delay:.4,animation:{popIcon:function(){return[mt,jt]}}},2:{duration:.4,delay:0,animation:{fadeInBackground:function(){return[gt,(0,T.iv)("background-color:",J,";","")]},fadeInText:function(){return[ht,xt]},popUpAndRotateBackground:function(){return[pt,ut]}}},3:{duration:.4,delay:0,animation:{popUpText:function(){return[ft,dt]}}}},Lt=(0,X.Mt)(yt).animation;function vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(n),!0).forEach((function(e){(0,x.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function bt(t){var e=t.fluidCss,n=(0,I.Z)(t,["fluidCss"]);return(0,r.jsx)(Zt,Ft(Ft({},n),{},{children:(0,r.jsx)(wt,{fluidCss:e,children:(0,r.jsx)(Ct,{children:(0,r.jsx)(G,{})})})}))}var Zt=(0,a.Z)("div",{target:"e19qob502"})("position:absolute;z-index:-1;",(function(t){return t.top&&(0,T.iv)("top:",t.top,"px;","")})," ",(function(t){return t.bottom&&(0,T.iv)("bottom:",t.bottom,"px;","")})," ",(function(t){return t.left&&(0,T.iv)("left:",t.left,"px;","")})," ",(function(t){return t.right&&(0,T.iv)("right:",t.right,"px;","")})," width:",(function(t){return t.size}),"px;height:",(function(t){return t.size}),"px;",at,";"),Ct=(0,a.Z)("div",{target:"e19qob501"})("display:flex;align-items:center;justify-content:center;color:rgba(236, 186, 111, 0.2);transform-origin:center center;",tt,";"),wt=(0,a.Z)("div",{target:"e19qob500"})((function(t){return t.fluidCss}),";"),Mt=(0,o.createContext)(null);function Ot(){return(0,r.jsxs)("svg",{viewBox:"0 0 361 228",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M249.893 146.878H260.664L287.124 174.227L260.664 201.576H249.893L277.888 174.227L249.893 146.878Z",fill:"#898B99"}),(0,r.jsx)("path",{d:"M249.893 146.887H260.664L256.364 153.206L249.893 146.887Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M260.664 146.887L258.106 150.639L266.39 152.793L260.664 146.887Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M256.364 153.206L258.106 150.639L266.39 152.793L256.364 153.206Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M262.441 159.139L263.491 152.918L256.364 153.206L262.441 159.139Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M266.39 152.793L262.441 159.139L263.491 152.919L266.39 152.793Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M263.68 157.137L266.39 152.793L272.054 158.663L263.68 157.137Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M262.441 159.139L263.68 157.137L272.054 158.663L262.441 159.139Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M268.625 165.179L270.142 158.753L262.441 159.139L268.625 165.179Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M272.054 158.663L268.625 165.179L270.142 158.753L272.054 158.663Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M277.161 163.932L268.625 165.179L272.054 158.663L277.161 163.932Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M275.554 164.165L274.154 170.583L268.625 165.179L275.554 164.165Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M280.608 167.495L274.154 170.583L275.554 164.165L280.608 167.495Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M277.161 163.932L275.554 164.165L280.608 167.495L277.161 163.932Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M274.154 170.583L277.888 174.227L280.608 167.495L274.154 170.583Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M278.382 173.015L284.862 176.569L280.608 167.495L278.382 173.015Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M287.124 174.227L284.862 176.569L280.608 167.495L287.124 174.227Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M278.382 173.015L280.608 180.958L284.862 176.569L278.382 173.015Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M277.888 174.227L278.382 173.015L280.608 180.958L277.888 174.227Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M273.705 178.32L280.608 180.959L277.888 174.227L273.705 178.32Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M280.608 180.958L273.705 178.32L272.206 183.768L280.608 180.958Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M268.733 183.175L273.705 178.32L272.206 183.768L268.733 183.175Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M275.698 186.03L280.608 180.958L272.206 183.768L275.698 186.03Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M270.905 190.993L272.206 183.768L275.698 186.03L270.905 190.993Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M268.733 183.175L270.905 190.993L272.206 183.768L268.733 183.175Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M262.638 189.126L270.905 190.993L268.733 183.175L262.638 189.126Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M262.638 189.126L265.502 196.576L270.905 190.993L262.638 189.126Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M262.638 189.126L258.034 197.528L265.502 196.576L262.638 189.126Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M254.04 197.528L262.638 189.126L258.034 197.528H254.04Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M258.034 197.528L265.502 196.576L260.664 201.576L258.034 197.528Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M258.034 197.528L249.893 201.576L254.04 197.528H258.034Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M260.664 201.576L258.034 197.528L249.893 201.576H260.664Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M231.188 141.546L233.503 146.887L239.284 141.546H231.188Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M231.188 141.546L233.503 146.887L230.137 147.838L231.188 141.546Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M239.284 141.546L233.503 146.887L237.578 151.68L239.284 141.546Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M230.137 147.838L233.503 146.887L234.562 154.058L230.137 147.838Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M233.503 146.887L234.562 154.058L237.578 151.68L233.503 146.887Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M234.562 154.058L228.306 158.753L230.137 147.838L234.562 154.058Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M234.562 154.058L237.578 151.68L236.133 160.332L231.439 156.41L234.562 154.058Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M228.306 158.753L231.439 156.41L236.133 160.332L228.306 158.753Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M231.188 159.336L234.93 167.495L236.133 160.332L231.188 159.336Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M231.188 159.336L228.306 158.753L229.294 166.57L231.188 159.336Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M229.294 166.571L231.188 159.336L234.93 167.495L229.294 166.571Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M229.294 166.571L228.306 158.753L226.17 171.48L229.294 166.571Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M226.17 171.48L229.294 166.57L234.93 167.495L226.17 171.48Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M226.17 171.48L234.93 167.495L234.006 173.015L226.17 171.48Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M226.17 171.48L227.732 178.32L234.006 173.015L226.17 171.48Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M227.732 178.32L226.17 171.48L224.635 180.653L227.732 178.32Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M227.732 178.32L234.006 173.015L232.22 184.1L227.732 178.32Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M224.635 180.653L227.732 178.32L232.22 184.1L224.635 180.653Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M224.635 180.653L226.17 191.586L232.22 184.1L224.635 180.653Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M226.17 191.586L224.635 180.653L222.508 193.327L226.17 191.586Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M226.17 191.586L232.22 184.1L230.173 195.903L226.17 191.586Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M222.508 193.327L226.17 191.586L230.173 195.903L222.508 193.327Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M230.173 195.903L221.377 200.113L222.508 193.327L230.173 195.903Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M221.377 200.113L230.173 195.903L229.267 201.306L221.377 200.113Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M221.377 200.113L224.339 204.816L229.267 201.306L221.377 200.113Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M224.339 204.816L229.267 201.306L228.324 206.907L224.339 204.816Z",fill:"#3FBAFF"}),(0,r.jsx)("path",{d:"M224.339 204.816L220.237 206.916L228.324 206.907L224.339 204.816Z",fill:"#3F96FF"}),(0,r.jsx)("path",{d:"M224.339 204.816L221.377 200.113L220.237 206.916L224.339 204.816Z",fill:"#6B76FF"}),(0,r.jsx)("path",{d:"M185.151 146.869L158.682 174.227L185.151 201.576H195.922L167.927 174.227L195.922 146.869H185.151Z",fill:"#2B2B2B"}),(0,r.jsx)("path",{d:"M155.101 120.148H147.777V201.576H155.101V120.148Z",fill:"#2B2B2B"}),(0,r.jsx)("path",{d:"M80.6207 176.372C80.6207 180.178 79.9565 183.696 78.6281 186.927C77.2997 190.159 75.4507 192.959 73.0811 195.329C70.7116 197.698 67.8753 199.547 64.5722 200.876C61.2692 202.204 57.643 202.868 53.6937 202.868C49.8162 202.868 46.2259 202.204 42.9229 200.876C39.6198 199.547 36.7835 197.698 34.414 195.329C32.0444 192.959 30.1954 190.159 28.867 186.927C27.5386 183.696 26.8744 180.178 26.8744 176.372C26.8744 172.566 27.5386 169.048 28.867 165.817C30.1954 162.585 32.0444 159.785 34.414 157.415C36.7835 155.046 39.6198 153.197 42.9229 151.868C46.2259 150.54 49.8162 149.876 53.6937 149.876C57.643 149.876 61.2692 150.54 64.5722 151.868C67.8753 153.197 70.7116 155.046 73.0811 157.415C75.4507 159.785 77.2997 162.585 78.6281 165.817C79.9565 169.048 80.6207 172.566 80.6207 176.372ZM72.8657 176.372C72.8657 173.572 72.4169 170.933 71.5194 168.455C70.6218 165.978 69.3473 163.824 67.6957 161.993C66.0442 160.162 64.0337 158.708 61.6641 157.631C59.2945 156.554 56.6377 156.015 53.6937 156.015C50.7497 156.015 48.1108 156.554 45.7772 157.631C43.4435 158.708 41.4509 160.162 39.7994 161.993C38.1478 163.824 36.8733 165.978 35.9757 168.455C35.0782 170.933 34.6294 173.572 34.6294 176.372C34.6294 179.172 35.0782 181.811 35.9757 184.288C36.8733 186.766 38.1478 188.92 39.7994 190.751C41.4509 192.582 43.4435 194.018 45.7772 195.059C48.1108 196.1 50.7497 196.621 53.6937 196.621C56.6377 196.621 59.2945 196.1 61.6641 195.059C64.0337 194.018 66.0442 192.582 67.6957 190.751C69.3473 188.92 70.6218 186.766 71.5194 184.288C72.4169 181.811 72.8657 179.172 72.8657 176.372Z",fill:"#2B2B2B"}),(0,r.jsx)("path",{d:"M123.165 163.124C122.088 161.041 120.455 159.336 118.265 158.008C116.075 156.679 113.579 156.015 110.779 156.015C109.486 156.015 108.194 156.159 106.901 156.446C105.609 156.733 104.46 157.2 103.455 157.846C102.45 158.492 101.642 159.318 101.031 160.323C100.421 161.329 100.116 162.513 100.116 163.878C100.116 166.247 101.085 168.06 103.024 169.317C104.963 170.574 108.014 171.633 112.179 172.494C118.139 173.715 122.537 175.492 125.373 177.826C128.21 180.16 129.628 183.301 129.628 187.25C129.628 190.123 129.071 192.546 127.958 194.521C126.845 196.495 125.391 198.111 123.596 199.368C121.801 200.624 119.773 201.522 117.511 202.06C115.249 202.599 112.969 202.868 110.671 202.868C106.866 202.868 103.168 202.078 99.5773 200.499C95.987 198.919 93.043 196.442 90.7452 193.067L96.5615 188.758C97.854 190.984 99.7568 192.851 102.27 194.359C104.783 195.867 107.548 196.621 110.564 196.621C112.143 196.621 113.651 196.477 115.087 196.19C116.523 195.903 117.78 195.4 118.857 194.682C119.934 193.964 120.796 193.049 121.442 191.936C122.088 190.823 122.411 189.441 122.411 187.789C122.411 185.132 121.137 183.14 118.588 181.811C116.039 180.483 112.359 179.244 107.548 178.095C106.04 177.736 104.442 177.287 102.755 176.749C101.067 176.21 99.5055 175.421 98.0694 174.379C96.6333 173.338 95.4485 172.028 94.515 170.448C93.5816 168.868 93.1148 166.894 93.1148 164.524C93.1148 161.939 93.6175 159.731 94.6227 157.9C95.628 156.069 96.9744 154.561 98.6618 153.376C100.349 152.191 102.27 151.312 104.424 150.737C106.578 150.163 108.804 149.876 111.102 149.876C114.621 149.876 118.031 150.666 121.334 152.245C124.637 153.825 127.115 156.051 128.766 158.923L123.165 163.124Z",fill:"#2B2B2B"}),(0,r.jsx)("path",{d:"M353.302 7.18054V220.819H7.63055V7.18054H353.302ZM360.482 0H353.302H7.63055H0.450012V7.18054V220.819V228H7.63055H353.302H360.482V220.819V7.18054V0Z",fill:"#2B2B2B"})]})}function kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?kt(Object(n),!0).forEach((function(e){(0,x.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function zt(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return Ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ht(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){o=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function Ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Pt(){var t,e,n=(0,o.useContext)(Mt),i=(0,o.useRef)(null),a=(0,o.useState)(null),s=a[0],l=a[1],c=(0,o.useCallback)((function(t){l(window.innerHeight<t)}),[]);return(0,o.useEffect)((function(){i.current&&c(i.current.clientHeight)}),[]),(0,o.useEffect)((function(){if(i.current){var t=new ResizeObserver((function(t){var e,n=zt(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;c(r.target.clientHeight)}}catch(i){n.e(i)}finally{n.f()}}));return t.observe(i.current),function(){return t.disconnect()}}}),[]),(0,r.jsxs)(qt,Bt(Bt({ref:i},null!==s?{ready:!0,smallerWindowThanHero:s,heroHeight:null!==(t=null===(e=i.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0}:{ready:!1}),{},{children:[(0,r.jsx)(bt,Bt({fluidCss:_t},"desktop"===n?{top:-400,left:-200,size:800}:{top:-200,left:-100,size:400})),(0,r.jsx)(bt,Bt({fluidCss:_t},"desktop"===n?{right:-100,bottom:100,size:400}:{right:-100,bottom:50,size:200})),(0,r.jsx)(bt,Bt({fluidCss:_t},"desktop"===n?{right:200,bottom:10,size:200}:{right:40,bottom:10,size:100})),(0,r.jsx)(Et,{children:(0,r.jsx)(Ot,{})}),(0,r.jsx)(St,{children:"\uff12\uff10\uff12\uff13\u5e74\u5ea6 \u7406\u5927\u796d \u7279\u8a2d\u30da\u30fc\u30b8"}),(0,r.jsxs)(Rt,{children:[(0,r.jsx)(It,{children:(0,r.jsx)(Tt,{})}),"scroll",(0,r.jsx)(Vt,{})]})]}))}var At={name:"ugz4h2",styles:"min-height:600px;height:100vh"},qt=(0,a.Z)("div",{target:"ea61yqa5"})("display:grid;justify-items:center;align-content:center;",At," position:relative;z-index:0;overflow:hidden;",(function(t){var e=Lt(2,"fadeInBackground").style;return t.ready?e:null})," ",(function(t){return t.ready&&(0,T.iv)("position:sticky;top:",t.smallerWindowThanHero?"calc(100vh - ".concat(t.heroHeight,"px)"):0,";z-index:-1;","")}),";"),Et=(0,a.Z)("div",{target:"ea61yqa4"})("width:100%;max-width:400px;padding:0 40px;box-sizing:border-box;transform-origin:bottom left;",(function(){return Lt(1,"popIcon").style}),";"),St=(0,a.Z)("div",{target:"ea61yqa3"})("font-weight:bold;margin-top:16px;font-size:40px;",B,"{margin-top:16px;font-size:20px;}",(function(){return Lt(2,"fadeInText").style}),";"),Rt=(0,a.Z)("div",{target:"ea61yqa2"})("margin-top:40px;position:relative;z-index:0;display:flex;align-items:center;font-family:'novecentosans',sans-serif;font-weight:bold;overflow:hidden;font-size:24px;",B,"{font-size:16px;}",(function(){return Lt(3,"popUpText").style}),";"),Vt=(0,a.Z)("div",{target:"ea61yqa1"})("background-color:",J,";position:absolute;top:0;right:0;left:0;bottom:0;",ct,";"),Dt=Lt(2,"popUpAndRotateBackground").style,_t=(0,T.iv)("transform-origin:center center;",Dt,";",""),It=(0,a.Z)("div",{target:"ea61yqa0"})("width:60px;height:60px;",B,"{width:40px;height:40px;}"),Tt=function(){return(0,r.jsx)("svg",{viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 8V45.8125L37.7985 41.1268L40.3126 44.2379L28 54.1875V8H32Z",fill:"black"})})};function Gt(){var t=(0,N.Z)(["\n  0% {\n    opacity: 0;\n    transform: translateX(40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]);return Gt=function(){return t},t}function Nt(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(Xt,{children:"\u30ec\u30a4\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u73ed"}),(0,r.jsx)(Kt,{children:(0,r.jsxs)(Ut,{children:["\u30ec\u30a4\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u3068\u306f\u5149\u3092\u73fe\u5b9f\u3068\u540c\u3058\u3088\u3046\u306b\u8a08\u7b97\u3059\u308b\u3053\u3068\u3067\u3068\u3066\u3082\u30ea\u30a2\u30eb\u306aCG\u3092\u4f5c\u308b\u624b\u6cd5\u3067\u3059\u3002",(0,r.jsx)("br",{}),"\u6620\u753b\u306a\u3069\u306e\u30ea\u30a2\u30eb\u306aCG\u306b\u306f\u5fc5\u305a\u4f7f\u308f\u308c\u3066\u3044\u308b\u3068\u8a00\u3063\u3066\u3082\u306e\u904e\u8a00\u3067\u306f\u306a\u304f\u3001\u8fd1\u5e74\u3067\u306f\u30b2\u30fc\u30e0\u306b\u3082\u5fdc\u7528\u3055\u308c\u59cb\u3081\u3001\u307e\u3059\u307e\u3059\u6ce8\u76ee\u5ea6\u304c\u9ad8\u307e\u3063\u3066\u3044\u308b\u6280\u8853\u3067\u3059\u3002",(0,r.jsx)("br",{}),"\u3053\u306e\u30b5\u30fc\u30af\u30eb\u3067\u306f\u81ea\u4f5c\u306e\u30ec\u30a4\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u5b9f\u969b\u306b\u753b\u50cf\u3092\u51fa\u3057\u305f\u308a\u3001\u65b0\u3057\u3044\u624b\u6cd5\u3092\u8abf\u3079\u3066\u65b0\u3057\u304f\u5b9f\u88c5\u3057\u305f\u308a\u306a\u3069\u30ec\u30a4\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u306b\u95a2\u308f\u308b\u6d3b\u52d5\u3092\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.jsx)("br",{}),"\u7406\u5927\u796d\u3067\u306f\u6d3b\u52d5\u3067\u5236\u4f5c\u3057\u305f\u753b\u50cf\u3092\u3044\u304f\u3064\u304b\u5c55\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]})}),(0,r.jsxs)(Jt,{children:[(0,r.jsx)(Wt,{src:"/images/ridaisai/2023/Raytracing/ray1.png"}),(0,r.jsx)(Wt,{src:"/images/ridaisai/2023/Raytracing/ray2.png"}),(0,r.jsx)(Wt,{src:"/images/ridaisai/2023/Raytracing/ray3.png"}),(0,r.jsx)(Wt,{src:"/images/ridaisai/2023/Raytracing/ray4.png"})]})]})}var Xt=(0,a.Z)("h1",{target:"e11qyakx4"})({name:"1ydlwb3",styles:"font-family:'novecentosans',sans-serif;font-size:2.5em;line-height:1.3em;text-align:center;&::after{content:'';display:block;width:40px;border-bottom:solid 2px #5d639e;margin:50px auto;}"}),Kt=(0,a.Z)("div",{target:"e11qyakx3"})({name:"otktgx",styles:"margin:10%;border-top:2px solid #aaa;border-bottom:2px solid #aaa;padding:2em 0;position:relative;&::before,&::after{content:'';position:absolute;top:-10px;width:2px;height:-webkit-calc(100% + 20px);height:calc(100% + 20px);background-color:#aaa;}&::before{left:10px;}&::after{right:10px;}"}),Ut=(0,a.Z)("div",{target:"e11qyakx2"})({name:"7i0kq3",styles:"margin:0 3%;font-size:1.2em;text-align:center"}),Yt=(0,T.F4)(Gt()),Jt=(0,a.Z)("div",{target:"e11qyakx1"})({name:"1dznyoa",styles:"margin:0 5%;text-align:center"}),Wt=(0,a.Z)("img",{target:"e11qyakx0"})("animation:",Yt," 1.6s;object-fit:contain;max-width:100%;");function Qt(){var t=(0,o.useRef)(null),e=function(t){var e=(0,o.useRef)(null),n=(0,o.useState)(!0),r=n[0],i=n[1];return(0,o.useEffect)((function(){var n,r=function(){if(null!==t.current){var n=t.current.scrollTop;if(t.current.scrollTop>window.innerHeight)return i(!1);if(null!==e.current){var r=n-e.current;return r>24?(e.current=n,i(!1)):r<-24?(e.current=n,i(!0)):void 0}e.current=n}};return null===(n=t.current)||void 0===n||n.addEventListener("scroll",r),function(){var e;return null===(e=t.current)||void 0===e?void 0:e.removeEventListener("scroll",r)}}),[]),(0,o.useEffect)((function(){t.current&&t.current.scrollTop>window.innerHeight&&r&&i(!1)}),[]),[r]}(t),n=(0,i.Z)(e,1)[0],a=(0,o.useState)(!1),f=a[0],u=a[1];return(0,o.useEffect)((function(){if(f){var t=function(){return u(!1)};return window.addEventListener("click",t),function(){return window.removeEventListener("click",t)}}})),(0,r.jsx)($t,{children:(0,r.jsxs)(te,{ref:t,children:[(0,r.jsx)(Pt,{}),(0,r.jsx)(se,{children:(0,r.jsx)(ae,{children:(0,r.jsxs)(l.mQ,{children:[(0,r.jsxs)(l.td,{children:[(0,r.jsx)(l.OK,{children:"Hackers' Cafe"}),(0,r.jsx)(l.OK,{children:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u30af\u30a4\u30ba by \u7af6\u30d7\u30ed\u73ed"}),(0,r.jsx)(l.OK,{children:"CG\u73ed"}),(0,r.jsx)(l.OK,{children:"\u30ec\u30a4\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u73ed"})]}),(0,r.jsx)(l.x4,{children:(0,r.jsx)(q,{})}),(0,r.jsx)(l.x4,{children:(0,r.jsx)(Z,{})}),(0,r.jsx)(l.x4,{children:(0,r.jsx)(z,{})}),(0,r.jsx)(l.x4,{children:(0,r.jsx)(Nt,{})})]})})}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(ee,{children:(0,r.jsx)(s.default,{href:"/",passHref:!0,children:(0,r.jsx)(ie,{open:n,children:(0,r.jsx)(d.Z,{})})})})]})})}var $t=(0,a.Z)("div",{target:"e784adc5"})({name:"d3v9zr",styles:"overflow:hidden"}),te=(0,a.Z)("div",{target:"e784adc4"})({name:"83lqwg",styles:"position:relative;z-index:0;height:100vh;overflow-y:auto;scroll-behavior:smooth"}),ee=(0,a.Z)("div",{target:"e784adc3"})("position:fixed;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;height:",80,"px;padding:0 40px;",B,"{height:",64,"px;padding:0 24px;}"),ne={name:"1t2kr30",styles:"visibility:hidden;opacity:0;transform:rotateX(-45deg)"},re={name:"iel626",styles:"visibility:visible;opacity:1;transform:rotateX(0)"},ie=(0,a.Z)("a",{target:"e784adc2"})("display:flex;transition:all 0.2s;transform-origin:top center;",(function(t){return t.open?re:ne}),";"),ae=(0,a.Z)("div",{target:"e784adc1"})("flex:1;overflow:hidden;padding:80px;",B,"{padding:24px;}"),se=(0,a.Z)("div",{target:"e784adc0"})({name:"1aian6j",styles:"position:relative;display:flex;background-color:white;align-items:center"});function oe(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Qt,{})})}},3479:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ridaisai/2023",function(){return n(14)}])}},function(t){t.O(0,[774,630,215,122,258,888,179],(function(){return e=3479,t(t.s=e);var e}));var e=t.O();_N_E=e}]);