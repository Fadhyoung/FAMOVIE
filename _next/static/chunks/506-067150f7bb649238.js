(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{8506:(e,l,s)=>{Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.bind(s,2488)),Promise.resolve().then(s.bind(s,396)),Promise.resolve().then(s.bind(s,9997)),Promise.resolve().then(s.bind(s,123))},2488:(e,l,s)=>{"use strict";s.d(l,{default:()=>d});var t=s(5155),a=s(648),r=s(2888),i=s(2099),n=s(3963),o=s(6911);function d(){let{t:e,isLoading:l,data:s,dropdown:d,currentPage:c,totalPages:x,handlePageChange:m,handleDropdown:u}=(0,n.A)();return l&&e("loading"),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"lg:w-3/4 xs:w-full m-auto flex flex-col items-center justify-center gap-5",children:[(0,t.jsxs)("div",{className:"w-full flex justify-between",children:[(0,t.jsx)(o.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",children:e("movieIveWatched")}),(0,t.jsxs)(o.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",children:[(0,t.jsx)(a.Dqr,{})," ",e("filter")]})]}),(0,t.jsx)("div",{className:"w-full flex items-center flex-wrap ".concat(s.length<4?"justify-start":"justify-between"),children:s.map((e,l)=>(0,t.jsx)(i.v9,{title:e.Title,desc:e.Plot,poster:e.Poster},l))}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 justify-center items-center",children:[(0,t.jsxs)("div",{className:"w-full flex justify-center gap-2 mt-4",children:[(0,t.jsx)(o.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>m(c-1),children:(0,t.jsx)(r.irw,{})}),(0,t.jsx)(o.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:u,children:c},c),(0,t.jsxs)(o.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>m(c+1),children:[(0,t.jsx)(r.fOo,{})," "]})]}),d?(0,t.jsx)("div",{className:"pagination flex overflow-x-scroll border rounded-lg border-black",children:Array.from({length:x},(e,l)=>(0,t.jsx)(o.A,{className:"basis-[20%] p-2 flex-shrink-0 text-[10px] text-black ".concat(l%2==0?"bg-gray-100":"bg-white"," hover:scale-x-125"),onClick:()=>m(l+1),children:l+1},"page-".concat(l)))}):(0,t.jsx)("div",{})]})]})})}},396:(e,l,s)=>{"use strict";s.d(l,{default:()=>c});var t=s(5155);s(2115);var a=s(1536),r=s(2888),i=s(2099),n=s(3963),o=s(804),d=s(6911);function c(){let{t:e,best3:l,currentBestPage:s,category:c,isLoading:x,setCurrentBestPage:m,handleBest3PageChange:u}=(0,n.A)();return x&&e("loading"),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-11/12 m-auto rounded-b-[40px] drop-shadow-xl bg-gradient-to-t from-black to-transparent",style:{padding:"1px"},children:(0,t.jsxs)("div",{className:"w-full lg:px-16 xs:px-2 py-10 relative flex flex-col gap-5 justify-center items-center overflow-hidden rounded-b-[38px] text-black ",children:[(0,t.jsx)("div",{className:"w-full h-full absolute -z-30 bg-white"}),(0,t.jsx)("div",{className:"w-[1644px] h-[1644px] absolute -z-10 -bottom-[1000] rounded-full border border-white-2"}),(0,t.jsx)("div",{className:"w-[1100px] h-[1100px] absolute -z-20 -bottom-[625] rounded-full bg-white-2"}),(0,t.jsxs)("div",{className:"w-full flex lg:flex-row xs:flex-col lg:gap-20 xs:gap-5 justify-between",children:[(0,t.jsxs)("div",{className:"lg:w-1/3 xs:w-full flex flex-col lg:items-start xs:items-center gap-2",children:[(0,t.jsxs)(d.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>window.open("https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk","_blank"),children:[e("famovieImdbList"),(0,t.jsx)(a.EQc,{})]}),(0,t.jsxs)(d.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>window.open("https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk","_blank"),children:[e("letterbox"),(0,t.jsx)(a.EQc,{})]})]}),(0,t.jsxs)("div",{className:"lg:w-1/3 xs:w-full flex flex-col items-center text-center text-black",children:[(0,t.jsx)(o.A,{variant:"sm",weight:"400",color:"secondary",children:e("firstRecomendation")}),(0,t.jsx)(o.A,{variant:"2xl",weight:"700",color:"secondary",children:e("myBest3")})]}),(0,t.jsxs)("div",{className:"lg:w-1/3 xs:w-full lg:flex xs:hidden flex-col items-end gap-2",children:[(0,t.jsxs)("div",{className:"w-fit flex gap-2 justify-between",children:[(0,t.jsx)(d.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>u(s-1),children:(0,t.jsx)(r.irw,{})}),(0,t.jsx)(d.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>u(s+1),children:(0,t.jsx)(r.fOo,{})})]}),(0,t.jsxs)(d.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>u(s+1),children:["#",c[s]]})]})]}),(0,t.jsx)("div",{className:"w-full flex lg:flex-row xs:flex-col mt-10 lg:gap-10 xs:gap-2 justify-between items-end",children:x?(0,t.jsx)(o.A,{variant:"lg",children:e("loading")}):(0,t.jsx)(t.Fragment,{children:l.map((e,l)=>(0,t.jsx)(i.Ay,{width:"lg:w-1/3 xs:w-full",height:"h-56",data:e},l))})}),(0,t.jsx)("div",{className:"flex flex-wrap gap-5 ",children:c.map((l,a)=>(0,t.jsx)(d.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4 ".concat(s===a?"!bg-black text-white":"bg-white"),onClick:()=>m(a),children:e(l.toLowerCase())},a))})]})})})}},9997:(e,l,s)=>{"use strict";s.d(l,{default:()=>u});var t=s(5155),a=s(8422),r=s(8100),i=s(1536),n=s(3963),o=s(5565),d=s(804);let c=JSON.parse('{"M":[{"area":"left","img":"sansa.jpg","alt":"sansa"},{"area":"top-right","img":"hundredeyes.jpg","alt":"hundredeyes"},{"area":"bottom-right","img":"bb.jpg","alt":"bb"}],"s":[{"area":"left-top","img":"vikings.jpg","alt":"vikings"},{"area":"left-bottom","img":"elliot.jpg","alt":"elliot"},{"area":"center-top","img":"rhaenyra .jpg","alt":"rhaenyra"},{"area":"center-bottom","img":"narcos.jpeg","alt":"narcos"},{"area":"right","img":"great.jpg","alt":"great"}]}');var x=s(6911);let m=e=>{let{area:l,alt:s,img:a}=e;return(0,t.jsxs)(x.A,{className:"w-full h-full relative overflow-hidden ",style:{gridArea:l},children:[(0,t.jsx)(d.A,{variant:"xs",color:"primary",className:"absolute z-10 bottom-2 right-2",children:s}),(0,t.jsx)("div",{className:"w-full h-full absolute top-0 hover:scale-125 transition-all duration-300",children:(0,t.jsx)(o.default,{className:"w-full h-full object-cover",src:"/FAMOVIE/images/".concat(a),alt:a?"Image for ".concat(l):"Decorative image",fill:!0})})]})};function u(){let{t:e}=(0,n.A)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"w-full h-screen min-h-[600] max-h-[1000] p-2 relative grid lg:grid-cols-2 xs:grid-cols-1 gap-2 justify-center items-center bg-white",children:[(0,t.jsx)("div",{className:"m-auto absolute bottom-0 left-1/2 p-2 z-20 lg:text-black xs:text-white transform -translate-x-1/2 lg:-translate-y-24 xs:-translate-y-10",children:(0,t.jsx)(r.RED,{size:40,className:"animate-bounce"})}),(0,t.jsx)("div",{className:"lg:block xs:hidden w-52 pb-3 absolute bottom-0 left-1/2 p-2 z-30 text-black transform -translate-x-1/2",children:(0,t.jsx)(o.default,{className:"w-full object-cover",src:"/FAMOVIE/images/FullLogo.png",alt:"FAMOVIE Full Logo",width:208,height:0})}),(0,t.jsxs)("div",{className:"w-full h-full flex flex-col lg:justify-between xs:justify-start relative text-white overflow-hidden lg:custom-shape1 xs:custom-shape1-none",children:[(0,t.jsx)(o.default,{className:"w-full h-full absolute -z-20 object-cover scale-150 translate-x-40 translate-y-24",src:"/FAMOVIE/images/daenerys.jpg",alt:"Daenerys Targaryen",width:1920,height:1080}),(0,t.jsx)("div",{className:"w-96 h-96 absolute -z-10 -left-16 -bottom-32 flex justify-center items-center rounded-full border border-white",children:(0,t.jsx)("div",{className:"w-72 h-72 rounded-full border border-dashed border-white"})}),(0,t.jsxs)("div",{className:"h-full w-2/3 px-5 -z-20 bg-blur-1",children:[(0,t.jsx)("div",{className:"blur-1"}),(0,t.jsx)("div",{className:"blur-2"}),(0,t.jsx)("div",{className:"blur-3"}),(0,t.jsx)("div",{className:"blur-4"}),(0,t.jsx)("div",{className:"blur-5"}),(0,t.jsx)("div",{className:"blur-6"})]}),(0,t.jsxs)("div",{className:"w-full p-10 flex flex-col gap-3 justify-start",children:[(0,t.jsx)(d.A,{variant:"4xl",weight:"700",children:e("famovie")}),(0,t.jsx)(d.A,{variant:"md",weight:"500",className:"lg:w-1/2 xs:w-full",children:e("titleDescription")}),(0,t.jsx)("div",{className:"lg:w-2/5 xs:w-full border-b border-dashed border-white"}),(0,t.jsx)("div",{className:"lg:w-1/3 xs:w-full flex flex-wrap gap-2",children:[...Array(6)].map((l,s)=>(0,t.jsx)(x.A,{size:"md",variant:"secondary",disabled:!0,children:e("genres")},s))})]}),(0,t.jsxs)("div",{className:"w-full flex flex-col lg:items-start xs:items-center gap-2 p-10",children:[(0,t.jsx)(d.A,{variant:"2xl",weight:"700",children:e("gameOfThrones")}),(0,t.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,t.jsx)(d.A,{variant:"xl",weight:"700",children:e("rate")}),(0,t.jsx)(d.A,{variant:"md",weight:"400",className:"italic",children:e("imdbRating")})]}),(0,t.jsx)("div",{children:(0,t.jsxs)(x.A,{radius:"lg",variant:"primary",buttonType:"outline",children:[e("myReviewHere"),(0,t.jsx)(a.$xg,{size:30})]})}),(0,t.jsxs)(x.A,{radius:"lg",variant:"primary",buttonType:"solid",size:"lg",className:"w-fit flex gap-2",onClick:()=>window.open("https://fadhyoung.github.io/Portofolio1/","_blank"),children:[e("visitMyWebsite")," ",(0,t.jsx)(i.EQc,{size:20})]})]})]}),(0,t.jsxs)("div",{className:"xs:hidden lg:flex w-full h-full relative custom-shape flex-col gap-1",children:[(0,t.jsx)("div",{className:"w-full h-full absolute z-10 reduce_light pointer-events-none"}),(0,t.jsx)("div",{className:"w-full h-1/2 gap-1 overflow-hidden LP_TOP_GRID foreground2",children:c.M.map(e=>{let{area:l,alt:s,img:a}=e;return(0,t.jsx)(m,{area:l,alt:s,img:a},l)})}),(0,t.jsx)("div",{className:"w-full h-1/2 gap-1 overflow-hidden LP_BOTTOM_GRID foreground2",children:c.s.map(e=>{let{area:l,alt:s,img:a}=e;return(0,t.jsx)(m,{area:l,alt:s,img:a},l)})})]})]})})}},123:(e,l,s)=>{"use strict";s.d(l,{default:()=>o});var t=s(5155);s(2115);var a=s(2888),r=s(2099),i=s(3963),n=s(6911);function o(){let{t:e,top10:l,scrollWrapperRef:s,scroll:o}=(0,i.A)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-full h-auto pb-5 rounded-b-xl drop-shadow-xl border-b border-black bg-white",children:(0,t.jsxs)("div",{className:"w-10/12 m-auto flex flex-col items-start gap-5",children:[(0,t.jsxs)("div",{className:"w-full flex justify-between",children:[(0,t.jsx)(n.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",children:e("top10Recommendations")}),(0,t.jsxs)("div",{className:"w-fit flex gap-2 justify-between",children:[(0,t.jsx)(n.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>o("left"),children:(0,t.jsx)(a.irw,{})}),(0,t.jsxs)(n.A,{radius:"lg",buttonType:"outline",size:"md",className:"flex gap-4",onClick:()=>o("right"),children:[(0,t.jsx)(a.fOo,{})," "]})]})]}),(0,t.jsx)("div",{className:"w-full flex gap-8 overflow-x-scroll snap-x",ref:s,children:l.map((e,l)=>(0,t.jsx)(r.hT,{title:e.Title,desc:e.Plot,poster:e.Poster,url:e.URL},l))})]})})})}},3963:(e,l,s)=>{"use strict";s.d(l,{A:()=>u});var t=s(9159),a=s.n(t);async function r(){let e=await fetch("/FAMOVIE/famovie_list.csv");return await e.text()}async function i(){let e=await fetch("/FAMOVIE/Best3.csv");return await e.text()}async function n(){let e=await fetch("/FAMOVIE/top10.csv");return await e.text()}var o=s(2115),d=s(2651);let c=async e=>{try{return(await d.A.request({method:"GET",url:"https://www.omdbapi.com/?i=".concat(e,"&apikey=ff359f1e")})).data}catch(l){return console.error("Error fetching image for ID ".concat(e,":"),l),null}},x=async e=>Promise.all(e.map(async e=>{let l=e.Const,s=e.URL;return{...await c(l),URL:s}}));var m=s(3878);function u(){let e=(0,m.c3)("home"),[l,s]=(0,o.useState)([]),[t,d]=(0,o.useState)(1),[c,u]=(0,o.useState)(0),[f,h]=(0,o.useState)([]),g=["Western","Asian","Movies","Indonesia"],[p,b]=(0,o.useState)(0),j=(0,o.useRef)(null),[w,v]=(0,o.useState)([]),[y,N]=(0,o.useState)(!1),[A,k]=(0,o.useState)(!1),z=async e=>{let l=await r();a().parse(l,{header:!0,skipEmptyLines:!0,complete:async l=>{let t=l.data;u(Math.ceil(t.length/8));let a=(e-1)*8,r=t.slice(a,a+8);s(await x(r))}})},T=async e=>{try{let l=await i();a().parse(l,{header:!0,skipEmptyLines:!0,complete:async l=>{let s=l.data.filter(l=>l.Category===e),t=await x(s);h(t)}})}catch(e){console.error("Error fetching page data:",e)}},C=async()=>{let e=await n();a().parse(e,{header:!0,skipEmptyLines:!0,complete:async e=>{let l=e.data;v(await x(l))}})};return(0,o.useEffect)(()=>{k(!0),z(t),T(g[p]),C(),k(!1)},[t,p]),{t:e,data:l,isLoading:A,currentPage:t,best3:f,currentBestPage:p,category:g,handleBest3PageChange:e=>{k(!0),e<=0?b(0):e>=g.length-1?b(g.length-1):b(e),k(!1)},setCurrentBestPage:b,top10:w,scrollWrapperRef:j,scroll:e=>{var l;let s=j.current;if(!s)return;let t=4*((null===(l=s.firstChild)||void 0===l?void 0:l.offsetWidth)||0);"left"===e?s.scrollBy({left:-t,behavior:"smooth"}):"right"===e&&s.scrollBy({left:t,behavior:"smooth"})},dropdown:y,totalPages:c,handleDropdown:()=>{N(e=>!e)},fetchMoview:z,handlePageChange:e=>{e<=0?d(1):e>=c?d(c):d(e)},setIsLoading:k}}},6911:(e,l,s)=>{"use strict";s.d(l,{A:()=>n});var t=s(5155),a=s(2115),r=s(3463);let i=a.forwardRef((e,l)=>{let{label:s,children:a,startIcon:i,endIcon:n,icon:o,buttonType:d="solid",size:c="sm",variant:x="primary",radius:m="xs",isLoading:u=!1,loadingPosition:f="right",labelLoading:h="Loading...",className:g,disabled:p,visibleOn:b="all",...j}=e,w={primary:"bg-white text-black",secondary:"bg-primaryGreen text-white",tertiary:"bg-secondaryGreen",quartiary:"bg-tertiaryGreen",danger:"bg-red-600",default:"bg-gray-200"},v={solid:"".concat(w[x]," text-black"),outline:"border border-black text-black",subtle:"".concat(w[x]," bg-opacity-50"),ghost:"bg-transparent",link:"bg-transparent underline p-0",icon:"p-2 rounded-full",elevated:"".concat(w[x]," lg:shadow-md hover:shadow-lg")};return(0,t.jsxs)("button",{ref:l,className:(0,r.A)("inline-flex items-center justify-center font-medium focus:outline-none transition-all",v[d],{xs:"px-2 py-1 text-xs",sm:"xs:px-2 xs:py-1 xs:text-xs lg:px-3 lg:py-1.5 lg:text-sm",md:"xs:px-3 xs:py-1.5 xs:text-sm lg:px-4 lg:py-2 lg:text-base",lg:"xs:px-4 xs:py-2 xs:text-base lg:px-5 lg:py-3 lg:text-lg",xl:"xs:px-5 xs:py-3 xs:text-lg lg:px-8 lg:py-5 lg:text-xl"}[c],{none:"rounded-none",xs:"rounded-sm",sm:"rounded",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl",full:"rounded-full"}[m],{"mobile-only":"md:hidden flex","desktop-only":"hidden md:flex",all:"block"}[b],p&&"opacity-50 cursor-not-allowed",g),disabled:p||u,...j,children:[u&&"left"===f&&(0,t.jsx)("span",{className:"mr-2 animate-spin",children:"\uD83D\uDD04"}),i&&!o&&(0,t.jsx)("span",{className:"mr-2",children:i}),o||(u?h:null!=a?a:s),n&&!o&&(0,t.jsx)("span",{className:"ml-2",children:n}),u&&"right"===f&&(0,t.jsx)("span",{className:"ml-2 animate-spin",children:"\uD83D\uDD04"})]})});i.displayName="Button";let n=i},2099:(e,l,s)=>{"use strict";s.d(l,{hT:()=>x,v9:()=>m,Ay:()=>u});var t=s(5155),a=s(6911),r=s(804),i=s(5565),n=s(1536),o=s(1589),d=s(3878);let c=e=>{let{text:l,wordLimit:s}=e;void 0===l&&(l="Undetected");let t=l.split(" ");return t.length>(s||0)?t.slice(0,s).join(" ")+"...":l},x=e=>{let{title:l,desc:s,poster:o,url:x}=e,m=(0,d.c3)("card");return(0,t.jsxs)("div",{className:"lg:basis-[18%] xs:basis-[70%] flex flex-col flex-shrink-0 text-black",children:[(0,t.jsxs)("div",{className:"h-96 relative overflow-hidden border border-black",children:[(0,t.jsx)(i.default,{className:"w-full h-full absolute z-20 object-cover",src:o||"/default-poster.jpg",alt:l||"Poster",layout:"fill",objectFit:"cover"}),(0,t.jsxs)(a.A,{className:"absolute z-40 bottom-4 right-4 text-white",children:[" ",(0,t.jsx)(n.EQc,{size:20})," "]})]}),(0,t.jsxs)("div",{className:"p-2 flex flex-col gap-2",children:[(0,t.jsx)(r.A,{variant:"xl",color:"secondary",children:c({text:l,wordLimit:4})}),(0,t.jsx)(r.A,{variant:"sm",color:"secondary",children:c({text:s,wordLimit:10})}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(a.A,{buttonType:"outline",radius:"lg",className:"px-3 py-1 text-[12px] font-semibold",onClick:()=>window.open("title","_blank","noopener,noreferrer"),children:m("reviewHere")}),(0,t.jsx)(a.A,{buttonType:"ghost",className:"px-3 py-1 text-[12px] font-semibold",onClick:()=>window.open(x,"_blank","noopener,noreferrer"),children:m("imdb")})]})]})]})},m=e=>{let{title:l,desc:s,poster:o}=e,x=(0,d.c3)("card");return(0,t.jsxs)("div",{className:"lg:basis-[23.5%] xs:basis-[45%] h-[400px] m-2 flex-shrink-0 relative flex flex-col items-end rounded-[10px] overflow-hidden bg-red-500",children:[(0,t.jsx)(i.default,{className:"w-full h-full absolute z-10 object-cover",src:o||"/default-poster.jpg",alt:l||"Poster",layout:"fill",objectFit:"cover"}),(0,t.jsx)("div",{className:"w-full h-3/4 absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent"}),(0,t.jsxs)("div",{className:"w-full p-3 absolute bottom-0 z-30 flex flex-col gap-1",children:[(0,t.jsx)(r.A,{variant:"lg",weight:"600",color:"primary",children:l}),(0,t.jsx)(r.A,{variant:"sm",weight:"400",color:"primary",children:c({text:s,wordLimit:10})}),(0,t.jsxs)(a.A,{buttonType:"solid",variant:"primary",radius:"lg",className:"flex gap-4",children:[x("reviewHere")," ",(0,t.jsx)(n.EQc,{})," "]})]})]})},u=e=>{let{width:l,height:s,data:d}=e;return console.log("data",d),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"".concat(l," ").concat(s," p-1 flex flex-row justify-between overflow-hidden border rounded-[20px] border-black bg-white"),children:[(0,t.jsx)(i.default,{className:"basis-[30%] h-full object-cover rounded-[20px]",src:(null==d?void 0:d.Poster)||"",alt:(null==d?void 0:d.Title)||"Poster",width:150,height:225}),(0,t.jsxs)("div",{className:"basis-[60%] p-5 flex flex-col items-start justify-between",children:[(0,t.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,t.jsxs)("div",{className:"flex gap-2 items-start text-[20px] text-amber-300",children:[(0,t.jsx)(r.A,{variant:"2xl",color:"secondary",children:null==d?void 0:d.imdbRating}),(0,t.jsx)(o.gt3,{size:25})]}),(0,t.jsx)(a.A,{onClick:()=>window.open(null==d?void 0:d.URL,"_blank"),children:(0,t.jsx)(n.EQc,{size:25})})]}),(0,t.jsxs)("div",{className:"w-full flex flex-col",children:[(0,t.jsx)(r.A,{variant:"xl",weight:"600",className:"w-full",color:"secondary",children:null==d?void 0:d.Title}),(0,t.jsx)(r.A,{variant:"sm",weight:"400",className:"w-full text-justify",color:"secondary",children:c({text:null==d?void 0:d.Plot,wordLimit:15})})]}),(0,t.jsx)(r.A,{variant:"xs",color:"tertiary",className:"w-full flex flex-nowrap overflow-hidden",children:null==d?void 0:d.Genre})]})]})})}},804:(e,l,s)=>{"use strict";s.d(l,{A:()=>c});var t=s(5155),a=s(2115),r=s(3463);let i={"2xs":"lg:text-[0.625rem] xs:text-[0.375rem]",xs:"lg:text-[0.75rem] xs:text-[0.5rem]",sm:"lg:text-[0.875rem] xs:text-[0.625rem]",md:"lg:text-[1rem] xs:text-[0.75rem]",lg:"lg:text-[1.25rem] xs:text-[1rem]",xl:"lg:text-[1.5rem] xs:text-[1.25rem]","2xl":"lg:text-[1.875rem] xs:text-[1.5rem]","3xl":"lg:text-[2.125rem] xs:text-[1.5rem]","4xl":"lg:text-[6rem] xs:text-[2.25rem]"},n={primary:"text-[#FFFFFF]",secondary:"text-[#000000]",tertiary:"text-[#a3a3a3]",link:"text-[#3366CC]"},o={"mobile-only":"md:hidden flex","desktop-only":"hidden md:flex",all:"flex"},d=(0,a.forwardRef)((e,l)=>{let{variant:s,className:a="",children:d,color:c="primary",weight:x,styles:m,id:u,visibleOn:f="all"}=e;return(0,t.jsx)("p",{id:u,ref:l,className:(0,r.A)(i[s],n[c],o[f],a),style:{color:c,fontWeight:x,...m},children:d})});d.displayName="Typography";let c=d}}]);