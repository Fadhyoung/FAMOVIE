(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2831:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,5104,23)),Promise.resolve().then(s.t.bind(s,4672,23)),Promise.resolve().then(s.bind(s,8138)),Promise.resolve().then(s.bind(s,4840)),Promise.resolve().then(s.bind(s,2764)),Promise.resolve().then(s.bind(s,6305))},8138:(e,t,s)=>{"use strict";s.d(t,{OpenLinkButton:()=>a,default:()=>n});var l=s(5155);function a(e){let{url:t,className:s,text:a}=e;return(0,l.jsx)("button",{className:s,onClick:()=>window.open("https://fadhyoung.github.io/Portofolio1/","_blank"),children:a})}let n=e=>{let{area:t,img:s}=e;return(0,l.jsxs)("button",{className:"w-full h-full relative overflow-hidden ",style:{gridArea:t},children:[(0,l.jsx)("p",{className:"absolute z-30 bottom-1 right-3 text-[12px] font-thin italic",children:t}),(0,l.jsx)("div",{className:"w-full h-full absolute top-0 hover:scale-125 transition-all duration-300",children:(0,l.jsx)("img",{className:"w-full h-full object-cover",src:"/FAMOVIE/images/".concat(s)})})]})}},3800:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>c,hT:()=>o,v9:()=>r});var l=s(5155),a=s(1536),n=s(1589);let i=(e,t)=>{void 0===e&&(e="Undetected");let s=e.split(" ");return s.length>t?s.slice(0,t).join(" ")+"...":e},o=e=>{let{title:t,plot:s,img:n,url:o}=e;return(0,l.jsxs)("div",{className:"basis-[18%] flex flex-col flex-shrink-0 text-black",children:[(0,l.jsxs)("div",{className:"h-96 relative overflow-hidden border border-black",children:[(0,l.jsx)("img",{className:"w-full h-full absolute z-20 object-cover",src:n}),(0,l.jsxs)("button",{className:"absolute z-40 bottom-4 right-4 text-white",children:[" ",(0,l.jsx)(a.EQc,{size:20})," "]})]}),(0,l.jsxs)("div",{className:"p-2 flex flex-col gap-2",children:[(0,l.jsx)("h1",{className:"text-[18px] font-semibold",children:i(t,4)}),(0,l.jsx)("p",{className:"text-[12px]",children:i(s,10)}),(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsx)("button",{className:"px-3 py-1 text-[12px] font-semibold b2-button",onClick:()=>window.open("/review","_blank","noopener,noreferrer"),children:"Review here"}),(0,l.jsx)("button",{className:"px-3 py-1 text-[12px] font-semibold b2-button",onClick:()=>window.open(o,"_blank","noopener,noreferrer"),children:"imdb"})]})]})]})},r=e=>{let{title:t,desc:s,poster:n}=e;return(0,l.jsxs)("div",{className:"basis-[23.5%] h-[400px] m-2 flex-shrink-0 relative flex flex-col items-end rounded-[10px] overflow-hidden bg-red-500",children:[(0,l.jsx)("img",{className:"w-full h-full absolute z-10 object-cover",src:n}),(0,l.jsx)("div",{className:"w-full h-3/4 absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent"}),(0,l.jsxs)("div",{className:"w-full p-3 absolute bottom-0 z-30 flex flex-col gap-1",children:[(0,l.jsx)("h2",{className:"text-[16px] font-semibold text-white",children:t}),(0,l.jsx)("p",{className:"text-[12px] font-normal text-white",children:i(s,10)}),(0,l.jsxs)("button",{className:"b4-button",children:["My review here ",(0,l.jsx)(a.EQc,{})," "]})]})]})},c=e=>{let{width:t,height:s,data:o={}}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"".concat(t," ").concat(s," p-1 flex flex-row justify-between overflow-hidden border rounded-[20px] border-black bg-white"),children:[(0,l.jsx)("img",{className:"basis-[30%] h-full object-cover rounded-[20px]",src:o.Poster}),(0,l.jsxs)("div",{className:"basis-[60%] p-5 flex flex-col items-start justify-between",children:[(0,l.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,l.jsxs)("div",{className:"flex gap-2 items-start text-[20px] text-amber-300",children:[(0,l.jsx)("h2",{children:o.imdbRating}),(0,l.jsx)(n.gt3,{size:25})]}),(0,l.jsx)("button",{onClick:()=>window.open(o.URL,"_blank"),children:(0,l.jsx)(a.EQc,{size:25})})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col",children:[(0,l.jsx)("h1",{className:"w-full text-[16px] font-semibold",children:o.Title}),(0,l.jsx)("p",{className:"w-full text-[14px] font-normal text-justify",children:i(o.Plot,15)})]}),(0,l.jsx)("div",{className:"w-full flex flex-nowrap overflow-hidden text-[12px] text-gray-400",children:o.Genre})]})]})})}},4840:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var l=s(5155),a=s(2115),n=s(9159),i=s.n(n),o=s(58),r=s(648),c=s(2888),d=s(3800);function x(e){let{width:t}=e,[s,n]=(0,a.useState)([]),[x,h]=(0,a.useState)(1),[b,u]=(0,a.useState)(0),[f,m]=(0,a.useState)(!1),[j,p]=(0,a.useState)(!1),w=async e=>{try{let t=await fetch("/FAMOVIE/famovie_list.csv"),s=await t.text();i().parse(s,{header:!0,skipEmptyLines:!0,complete:async t=>{let s=t.data,l=Math.ceil(s.length/8);u(l);let a=(e-1)*8,i=s.slice(a,a+8);t.data;let r=await (0,o.li)(i);n(r)}})}catch(e){console.error("Error fetching page data:",e)}};console.log("data length: ",s.length),(0,a.useEffect)(()=>{p(!0),w(x),p(!1)},[x]);let v=e=>{e<=0?h(1):e>=b?h(b):h(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"".concat(t," m-auto flex flex-col items-center justify-center gap-5"),children:[(0,l.jsxs)("div",{className:"w-full flex justify-between",children:[(0,l.jsx)("button",{className:"flex gap-2 b3-button",children:"Movies series that I've watched"}),(0,l.jsxs)("button",{className:"b3-button",children:[(0,l.jsx)(r.Dqr,{})," Filter"]})]}),(0,l.jsx)("div",{className:"w-full flex items-center flex-wrap ".concat(s.length<4?"justify-start":"justify-between"),children:s.map((e,t)=>(0,l.jsx)(d.v9,{title:e.Title,desc:e.Plot,poster:e.Poster},t))}),(0,l.jsxs)("div",{className:"flex flex-col gap-2 justify-center items-center",children:[(0,l.jsxs)("div",{className:"w-full flex justify-center gap-2 mt-4",children:[(0,l.jsx)("button",{className:"b3-button cursor-pointer",onClick:()=>v(x-1),children:(0,l.jsx)(c.irw,{})}),(0,l.jsx)("button",{onClick:()=>{m(e=>!e)},className:"b3-button dcursor-pointer",children:x},x),(0,l.jsxs)("button",{className:"b3-button dcursor-pointer",onClick:()=>v(x+1),children:[(0,l.jsx)(c.fOo,{})," "]})]}),f?(0,l.jsx)("div",{className:"pagination flex overflow-x-scroll border rounded-lg border-black",children:Array.from({length:b},(e,t)=>(0,l.jsx)("button",{className:"basis-[20%] p-2 flex-shrink-0 text-[10px] text-black ".concat(t%2==0?"bg-gray-100":"bg-white"," hover:scale-x-125"),onClick:()=>v(t+1),children:t+1},"page-".concat(t)))}):(0,l.jsx)("div",{})]})]})})}},2764:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var l=s(5155),a=s(2115),n=s(9159),i=s.n(n),o=s(58),r=s(1536),c=s(2888),d=s(3800);function x(){let[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(["Western","Asian","Movies","Indonesia"]),[x,h]=(0,a.useState)(0),[b,u]=(0,a.useState)(!1),f=async()=>{try{let e=await fetch("/FAMOVIE/Best3.csv"),l=await e.text();i().parse(l,{header:!0,skipEmptyLines:!0,complete:async e=>{let l=e.data.filter(e=>e.Category===s[x]);console.log(l);let a=await (0,o.li)(l);t(a)}})}catch(e){console.error("Error fetching page data:",e)}};console.log("data length: ",e.length),(0,a.useEffect)(()=>{u(!0),f(s[x]),u(!1)},[x]);let m=e=>{u(!0),e<=0?h(0):e>=s.length-1?h(s.length-1):h(e),u(!1)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"w-11/12 m-auto rounded-b-[40px] drop-shadow-xl bg-gradient-to-t from-black to-transparent",style:{padding:"1px"},children:(0,l.jsxs)("div",{className:"w-full px-16 py-10 relative flex flex-col gap-5 justify-center items-center overflow-hidden rounded-b-[38px] text-black ",children:[(0,l.jsx)("div",{className:"w-full h-full absolute -z-30 bg-white"}),(0,l.jsx)("div",{className:"w-[1644px] h-[1644px] absolute -z-10 -bottom-[1000] rounded-full border border-white-2"}),(0,l.jsx)("div",{className:"w-[1100px] h-[1100px] absolute -z-20 -bottom-[625] rounded-full bg-white-2"}),(0,l.jsxs)("div",{className:"w-full flex gap-20 justify-between",children:[(0,l.jsxs)("div",{className:"w-1/3 flex flex-col items-start gap-2",children:[(0,l.jsxs)("button",{className:"b3-button",onClick:()=>window.open("https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk","_blank"),children:["Famovie imdb list ",(0,l.jsx)(r.EQc,{})]}),(0,l.jsxs)("button",{className:"b3-button",onClick:()=>window.open("https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk","_blank"),children:["Letterbox ",(0,l.jsx)(r.EQc,{})]})]}),(0,l.jsxs)("div",{className:"w-1/3 text-center text-black",children:[(0,l.jsx)("p",{className:"text-[14px] font-medium",children:"1st Recomendation"}),(0,l.jsx)("h1",{className:"text-[32px] font-semibold",children:"GETTING TO KNOW WITH MY BEST 3"})]}),(0,l.jsxs)("div",{className:"w-1/3 flex flex-col items-end gap-2",children:[(0,l.jsxs)("div",{className:"w-fit flex gap-2 justify-between",children:[(0,l.jsx)("button",{className:"b3-button",onClick:()=>m(x-1),children:(0,l.jsx)(c.irw,{})}),(0,l.jsxs)("button",{className:"b3-button",onClick:()=>m(x+1),children:[(0,l.jsx)(c.fOo,{})," "]})]}),(0,l.jsxs)("button",{className:"b3-button",children:["#",s[x]]})]})]}),(0,l.jsx)("div",{className:"w-full flex mt-10 gap-10 justify-between items-end",children:b?(0,l.jsx)("p",{children:"Loading..."}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Ay,{width:"w-1/3",height:"h-56",data:e[0]}),(0,l.jsx)(d.Ay,{width:"w-1/3",height:"h-56",data:e[1]}),(0,l.jsx)(d.Ay,{width:"w-1/3",height:"h-56",data:e[2]})]})}),(0,l.jsxs)("div",{className:"flex gap-5",children:[(0,l.jsx)("button",{className:"b3-button ".concat(0===x?"bg-black text-white":"bg-white"),onClick:()=>h(0),children:" Western"}),(0,l.jsx)("button",{className:"b3-button ".concat(1===x?"bg-black text-white":"bg-white"),onClick:()=>h(1),children:" Asian"}),(0,l.jsx)("button",{className:"b3-button ".concat(2===x?"bg-black text-white":"bg-white"),onClick:()=>h(2),children:" Movies"}),(0,l.jsx)("button",{className:"b3-button ".concat(3===x?"bg-black text-white":"bg-white"),onClick:()=>h(3),children:" Indonesia"})]})]})})})}},6305:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var l=s(5155),a=s(2115),n=s(9159),i=s.n(n),o=s(58),r=s(2888),c=s(3800);function d(){let e=(0,a.useRef)(null),[t,s]=(0,a.useState)([]);(0,a.useEffect)(()=>{fetch("/FAMOVIE/top10.csv").then(e=>e.text()).then(e=>{i().parse(e,{header:!0,skipEmptyLines:!0,complete:async e=>{let t=e.data;s(await (0,o.li)(t))}})})},[]);let n=t=>{var s;let l=e.current;if(!l)return;let a=4*((null===(s=l.firstChild)||void 0===s?void 0:s.offsetWidth)||0);"left"===t?l.scrollBy({left:-a,behavior:"smooth"}):"right"===t&&l.scrollBy({left:a,behavior:"smooth"})};return console.log(t[0]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"w-full h-auto pb-5 rounded-b-xl drop-shadow-xl border-b border-black bg-white",children:(0,l.jsxs)("div",{className:"w-10/12 m-auto flex flex-col items-start gap-5",children:[(0,l.jsxs)("div",{className:"w-full flex justify-between",children:[(0,l.jsx)("button",{className:"flex gap-2 b3-button",children:"Top 10 Recomendation"}),(0,l.jsxs)("div",{className:"w-fit flex gap-2 justify-between",children:[(0,l.jsx)("button",{className:"b3-button cursor-pointer",onClick:()=>n("left"),children:(0,l.jsx)(r.irw,{})}),(0,l.jsxs)("button",{className:"b3-button dcursor-pointer",onClick:()=>n("right"),children:[(0,l.jsx)(r.fOo,{})," "]})]})]}),(0,l.jsx)("div",{className:"w-full flex gap-8 overflow-x-scroll snap-x",ref:e,children:t.map((e,t)=>(0,l.jsx)(c.hT,{title:e.Title,plot:e.Plot,img:e.Poster,url:e.URL},t))})]})})})}},58:(e,t,s)=>{"use strict";s.d(t,{li:()=>n});var l=s(2651);let a=async e=>{try{let t=await l.A.request({method:"GET",url:"https://www.omdbapi.com/?i=".concat(e,"&apikey=ff359f1e")});return console.log("service result: ",t.data),t.data}catch(t){return console.error("Error fetching image for ID ".concat(e,":"),t),null}},n=async e=>Promise.all(e.map(async e=>{let t=e.Const,s=e.URL;return{...await a(t),URL:s}}))}},e=>{var t=t=>e(e.s=t);e.O(0,[761,479,844,446,711,759,441,517,358],()=>t(2831)),_N_E=e.O()}]);