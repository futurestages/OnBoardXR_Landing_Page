(this["webpackJsonpreact-bootstrap-layout-card"]=this["webpackJsonpreact-bootstrap-layout-card"]||[]).push([[0],{71:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(20),l=c.n(i),n=c(8),r=c(7),o=c(97),j=c(55),d=c(0);var h,x,b,m=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=(t[0],t[1],Object(s.useState)("")),a=Object(r.a)(c,2),i=(a[0],a[1],Object(s.useState)({md:""})),l=Object(r.a)(i,2),n=l[0],h=l[1];return Object(s.useEffect)((function(){fetch("welcome.md",{headers:{"Content-Type":"application/vnd.github.v3+md",Accept:"application/vnd.github.v3+md"}}).then((function(e){return e.text()})).then((function(e){h({md:e})}))}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px"}}),n.md&&Object(d.jsx)(j.a,{children:n.md})]})})},O=c(102),g=c(101),p=c(100),u=c(62),f=c(103),y=c(98),v=c(99),w=c(63),N=c(64),k=(c(71),c(2)),C=c(6),_=c(4),L=c(3),T=c.n(L),S=["className"],E=function(e){var t=e.className,c=Object(_.a)(e,S),s=T()(Object(C.a)({"position-relative":!0},"".concat(t),t));return Object(d.jsx)("div",Object(k.a)(Object(k.a)({className:T()(s)},c),{},{children:c.children}))},I=["tag","color","className","children"],R={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",span:"span",div:"div",li:"li",b:"b",small:"small",strong:"strong",cite:"cite",del:"del"},B={primary:"primary",secondary:"secondary",success:"success",warning:"warning",danger:"danger",info:"info",muted:"muted",dark:"dark",white:"white"},D=function(e){var t,c=e.tag,s=e.color,a=e.className,i=e.children,l=Object(_.a)(e,I),n=c?R[c]:"p",r=s?B[s]:void 0,o=T()((t={},Object(C.a)(t,"".concat(a),a),Object(C.a)(t,"text-".concat(r),s),t));return Object(d.jsx)(n,Object(k.a)(Object(k.a)({className:"".concat(T()(o))},l),{},{children:i}))},A=c(38),W=c(39),z=W.b.img(h||(h=Object(A.a)(["\n  ","\n"])),(function(e){return e.bg&&Object(W.a)(x||(x=Object(A.a)(["\n      background-image: url(",");\n      background-size: cover;\n      height: ",";\n      width: 100%;\n    "])),(function(e){return e.bg?e.bg:""}),(function(e){return e.height}))||Object(W.a)(b||(b=Object(A.a)(["\n      max-width: 100%;\n      height: auto;\n    "])))})),J=function(e){var t=e.alt,c=e.src,s=e.className,a=e.bg,i=e.height,l=T()(Object(C.a)({"img-fluid":!0},"".concat(s),s));return Object(d.jsx)(z,{alt:t,src:c,className:T()(l),bg:a,height:i})},F=c.p+"static/media/danger.470ba2bd.png",H=(c.p,c.p+"static/media/brands.3173ddd3.png"),X=(c.p,c.p+"static/media/join1.46eb438f.jpeg"),G=c.p+"static/media/join2.c2139548.jpeg",M=c.p+"static/media/join3.483dbf92.jpeg",U=(c.p,c(74),c(30)),q=c.n(U),K=(c(87),c(88),c(89),function(e){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("p",{className:"",children:"\xa9 Copyright 2021 OnBoardXR / The Jigsaw Ensemble, LLC."}),Object(d.jsx)("p",{style:{marginBottom:".8rem"},children:" "}),Object(d.jsx)("div",{className:"footer-social",children:e.footer&&e.footer.map((function(e,t){return Object(d.jsx)("a",{href:e.url,target:"__blank",className:"footer-social-link",children:Object(d.jsx)("svg",{style:{width:"25px",height:"25px"},viewBox:"0 0 24 24",children:Object(d.jsx)("path",{fill:"currentColor",d:e.icon})})},t)}))})]})}),P={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}};function Q(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=(t[1],Object(s.useState)(!1)),i=Object(r.a)(a,2),l=i[0],n=i[1],j=Object(s.useState)(!1),h=Object(r.a)(j,2),x=h[0],b=h[1],m=Object(s.useState)(""),k=Object(r.a)(m,2),C=k[0],_=k[1],L=Object(s.useState)([]),T=Object(r.a)(L,2);T[0],T[1];return Object(s.useEffect)((function(){document.body.classList.add("dark-theme"),fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})),console.log(l)}),[c]),Object(s.useEffect)((function(){0===C.length&&b(!1)}),[C]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{fluid:"lg",children:[Object(d.jsxs)("div",{className:"header-example mb-5  justify-content-between align-items-center",children:[Object(d.jsx)(O.a,{expand:"lg",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(O.a.Brand,{href:"#home",children:Object(d.jsx)("img",{src:F,width:"50",height:"50",className:"d-inline-block align-top",alt:"React Bootstrap logo"})}),Object(d.jsx)(O.a.Toggle,{"aria-controls":"navbarScroll",style:{backgroundColor:"yellow"}}),Object(d.jsxs)(O.a.Collapse,{children:[Object(d.jsx)(g.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px",color:"yellow"},navbarScroll:!0,children:l&&l.navBar.map((function(e,t){return Object(d.jsx)(g.a.Link,{id:t,style:{color:"yellow"},href:e.link,children:e.name})}))}),Object(d.jsx)(p.a,{className:" d-flex",children:Object(d.jsx)(u.a,{style:{color:"yellow",backgroundColor:"black",borderColor:"yellow",borderWidth:"3px"},type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){_(e.target.value),b(!0),e.preventDefault(),console.log(e.nativeEvent.inputType)}})})]})]})}),Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}})]}),x?Object(d.jsxs)(o.a,{id:"main",children:[Object(d.jsxs)(N.a,{variant:"warning",children:["Showing Results to : ",C]}),Object(d.jsx)(q.a,{responsive:P,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return e.name.includes(C)||e.heading.includes(C)||e.tags.includes(C)})).map((function(e,t){return Object(d.jsxs)(f.a,{className:"text-dark m-4 mobile_res",children:[Object(d.jsx)(J,{className:"card-img",src:e.image}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(d.jsx)("div",{className:"h3 ",children:Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsxs)("div",{className:"m-3",children:[Object(d.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(d.jsxs)("div",{className:"align-items-right m-3",children:[Object(d.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(d.jsxs)("div",{className:"h5 mb-3",children:[Object(d.jsx)("a",{className:"text-white text-decoration-none",href:"/".concat(e.link),children:e.heading}),Object(d.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(d.jsx)("div",{className:"align-items-right",children:Object(d.jsx)(y.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))})]}):Object(d.jsx)(o.a,{id:"main",children:Object(d.jsxs)(v.a,{children:[Object(d.jsxs)(w.a,{sm:12,md:6,lg:6,className:"col-md-offset-2 mb-2",children:[Object(d.jsx)("div",{className:"h3 ",style:{marginLeft:"20%",marginTop:"20%"},children:Object(d.jsx)("a",{className:"text-white text-decoration-none",href:"/#",children:"Enter a portal to access live xr performances across the metaverse"})}),Object(d.jsx)("div",{style:{marginLeft:"20%",marginTop:"10%"},children:Object(d.jsx)(y.a,{onClick:function(e){e.preventDefault(),window.location.href="".concat(l&&l.haveacodeLink)},children:"Have a code? "})})]}),Object(d.jsx)(w.a,{sm:12,md:6,lg:6,children:Object(d.jsxs)(f.a,{className:"text-dark m-4 mobile_res",children:[Object(d.jsx)(J,{className:"card-img",src:l&&l.masterCard.image}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(d.jsx)("div",{className:"h3 ",children:Object(d.jsx)("p",{className:"text-white text-decoration-none",children:l&&l.masterCard.title})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsxs)("div",{className:"m-3",children:[Object(d.jsx)("img",{src:l&&l.masterCard.leftOverlay,height:"50px",width:"50px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:l&&l.masterCard.leftOverlayText})]}),Object(d.jsxs)("div",{className:"align-items-right m-3",children:[Object(d.jsx)("img",{src:l&&l.masterCard.rightOverlay,height:"50px",width:"50px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:l&&l.masterCard.rightOverlayText})]})]})]}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(d.jsxs)("div",{className:"h5 mb-3",children:[Object(d.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(l&&l.masterCard.link),children:l&&l.masterCard.heading}),Object(d.jsx)("br",{}),Object(d.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",l&&l.masterCard.name," "]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between m-2",children:[Object(d.jsx)("img",{src:l&&l.masterCard.artist,width:"75px",height:"75px"}),Object(d.jsx)("div",{className:"m-2",style:{textAlign:"right"},children:Object(d.jsx)(y.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(e){e.preventDefault(),window.location.href="".concat(l&&l.masterCard.link)},children:"Enter"})})]})]})]})})]})}),Object(d.jsxs)(v.a,{className:"mb-4",children:[Object(d.jsxs)(w.a,{sm:12,md:6,lg:1,style:{color:"yellow"},children:[" ",Object(d.jsx)("h4",{children:"Shows"})]}),Object(d.jsxs)(w.a,{sm:12,md:6,lg:11,children:["  ",Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}})]})]}),Object(d.jsx)(q.a,{responsive:P,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return"shows"===e.category})).map((function(e,t){return Object(d.jsxs)(f.a,{className:"text-dark m-4 mobile_res",children:[Object(d.jsx)(J,{className:"card-img",src:e.image}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(d.jsx)("div",{className:"h3 ",children:Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsxs)("div",{className:"m-3",children:[Object(d.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(d.jsxs)("div",{className:"align-items-right m-3",children:[Object(d.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(d.jsxs)("div",{className:"h5",children:[Object(d.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(e.link),children:e.heading}),Object(d.jsx)("br",{}),Object(d.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between m-2",children:[Object(d.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(d.jsx)("div",{className:"align-items-right m-2",children:Object(d.jsx)(y.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))}),Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(d.jsx)("img",{src:H,width:"90%"}),Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(d.jsxs)(o.a,{className:"mt-5 ",id:"about",children:[Object(d.jsx)("p",{className:"text-white h1",children:"About"}),Object(d.jsxs)("p",{className:"text-white text-decoration-none h3 mb-5",children:["  ",l&&l.about," "]})]}),Object(d.jsxs)(v.a,{className:"mb-4 mt-2",children:[Object(d.jsxs)(w.a,{sm:12,md:6,lg:1,style:{color:"yellow"},children:[" ",Object(d.jsx)("h4",{children:"Lobbies"})]}),Object(d.jsxs)(w.a,{sm:12,md:6,lg:11,children:["  ",Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}})]})]}),Object(d.jsx)(q.a,{responsive:P,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return"lobbies"===e.category})).map((function(e,t){return Object(d.jsxs)(f.a,{className:"text-dark m-4 mobile_res",children:[Object(d.jsx)(J,{className:"card-img",src:e.image}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(d.jsx)("div",{className:"h3 ",children:Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsxs)("div",{className:"m-3",children:[Object(d.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(d.jsxs)("div",{className:"align-items-right m-3",children:[Object(d.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(d.jsxs)("div",{className:"h5",children:[Object(d.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(e.link),children:e.heading}),Object(d.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(d.jsx)("div",{className:"align-items-right",children:Object(d.jsx)(y.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))}),Object(d.jsxs)(v.a,{className:"mb-4",children:[Object(d.jsxs)(w.a,{sm:12,md:6,lg:1,style:{color:"yellow"},children:[" ",Object(d.jsx)("h4",{children:"Clips"})]}),Object(d.jsxs)(w.a,{sm:12,md:6,lg:11,children:["  ",Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}})]})]}),Object(d.jsx)(q.a,{responsive:P,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return"clips"===e.category})).map((function(e,t){return Object(d.jsxs)(f.a,{className:"text-dark m-4 mobile_res",children:[Object(d.jsx)(J,{className:"card-img",src:e.image}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(d.jsx)("div",{className:"h3 ",children:Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsxs)("div",{className:"m-3",children:[Object(d.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(d.jsxs)("div",{className:"align-items-right m-3",children:[Object(d.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(d.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(d.jsxs)(f.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(d.jsxs)("div",{className:"h5 ",children:[Object(d.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(e.link),children:e.heading}),Object(d.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(d.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(d.jsx)("div",{className:"align-items-right",children:Object(d.jsx)(y.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))}),Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(d.jsxs)(o.a,{className:"mt-5 mb-5",id:"joinUs",children:[Object(d.jsx)("p",{className:"text-white h1 mb-3",style:{textAlign:"center"},children:"Join us!"}),Object(d.jsxs)(v.a,{children:[Object(d.jsx)(w.a,{sm:12,md:6,lg:4,children:Object(d.jsxs)(f.a,{className:"mb-4",style:{backgroundColor:"black",height:"450px"},children:[Object(d.jsx)(E,{children:Object(d.jsx)(J,{className:"card-img-top card-img-bottom p-4 ",style:{borderRadius:"30px"},src:X})}),Object(d.jsxs)(f.a.Body,{children:[Object(d.jsx)(D,{tag:"h4",className:"weight-700 mb-4 text-white",children:"Learn"}),Object(d.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(d.jsxs)(D,{tag:"span",className:"weight-400 text-white font-size-20",children:["Free ",Object(d.jsx)("a",{href:l&&l.learnLink,children:" resources and toolkit "})," to create your own XR performance space."]})})]})]})}),Object(d.jsx)(w.a,{sm:12,md:6,lg:4,children:Object(d.jsxs)(f.a,{className:"mb-4",style:{backgroundColor:"black",height:"450px"},children:[Object(d.jsx)(E,{children:Object(d.jsx)(J,{className:"card-img-top card-img-bottom p-4 ",style:{borderRadius:"30px"},src:G})}),Object(d.jsxs)(f.a.Body,{children:[Object(d.jsx)(D,{tag:"h4",className:"weight-700 mb-4 text-white",children:"Submit"}),Object(d.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(d.jsxs)(D,{tag:"span",className:"weight-400 text-white font-size-20",children:[Object(d.jsx)("a",{href:l&&l.submitLink,children:"Send a proposal"})," for our next seasonal series to showcase and monetize your performance."]})})]})]})}),Object(d.jsx)(w.a,{sm:12,md:6,lg:4,children:Object(d.jsxs)(f.a,{className:"mb-4",style:{backgroundColor:"black",height:"450px"},children:[Object(d.jsx)(E,{children:Object(d.jsx)(J,{className:"card-img-top card-img-bottom p-4 ",style:{borderRadius:"30px"},src:M})}),Object(d.jsxs)(f.a.Body,{children:[Object(d.jsx)(D,{tag:"h4",className:"weight-700 mb-4 text-white",children:"Follow"}),Object(d.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(d.jsxs)(D,{tag:"span",className:"weight-400 text-white font-size-20",children:["Get the ",Object(d.jsx)("a",{href:l&&l.followLink,children:"latest news and updates "}),"about the community and industry."]})})]})]})})]})]}),Object(d.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(d.jsx)(K,{footer:l.footerIcons})]})})}var V=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(n.c,{children:[Object(d.jsx)(n.a,{exact:!0,path:"/docs",children:Object(d.jsx)(m,{})}),Object(d.jsx)(n.a,{exact:!0,path:"/",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(n.a,{children:"404 Not found!"})]})})},Y=c(44);l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Y.a,{children:Object(d.jsx)(V,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.0ef94f2b.chunk.js.map