(this["webpackJsonpreact-bootstrap-layout-card"]=this["webpackJsonpreact-bootstrap-layout-card"]||[]).push([[0],{71:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(20),l=c.n(i),n=c(8),r=c(7),o=c(97),j=c(55),d=c.p+"static/media/welcome.1487583b.md",h=c(0);var x,b,m,O=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=(t[0],t[1],Object(s.useState)("")),a=Object(r.a)(c,2),i=(a[0],a[1],Object(s.useState)({md:""})),l=Object(r.a)(i,2),n=l[0],x=l[1];return Object(s.useEffect)((function(){fetch(d).then((function(e){return e.text()})).then((function(e){x({md:e})}))}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px"}}),n.md&&Object(h.jsx)(j.a,{children:n.md})]})})},g=c(102),p=c(101),u=c(100),f=c(62),y=c(103),w=c(98),v=c(99),N=c(63),k=c(64),C=(c(71),c(2)),_=c(6),L=c(4),S=c(3),T=c.n(S),E=["className"],I=function(e){var t=e.className,c=Object(L.a)(e,E),s=T()(Object(_.a)({"position-relative":!0},"".concat(t),t));return Object(h.jsx)("div",Object(C.a)(Object(C.a)({className:T()(s)},c),{},{children:c.children}))},R=["tag","color","className","children"],B={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",span:"span",div:"div",li:"li",b:"b",small:"small",strong:"strong",cite:"cite",del:"del"},D={primary:"primary",secondary:"secondary",success:"success",warning:"warning",danger:"danger",info:"info",muted:"muted",dark:"dark",white:"white"},W=function(e){var t,c=e.tag,s=e.color,a=e.className,i=e.children,l=Object(L.a)(e,R),n=c?B[c]:"p",r=s?D[s]:void 0,o=T()((t={},Object(_.a)(t,"".concat(a),a),Object(_.a)(t,"text-".concat(r),s),t));return Object(h.jsx)(n,Object(C.a)(Object(C.a)({className:"".concat(T()(o))},l),{},{children:i}))},z=c(38),A=c(39),J=A.b.img(x||(x=Object(z.a)(["\n  ","\n"])),(function(e){return e.bg&&Object(A.a)(b||(b=Object(z.a)(["\n      background-image: url(",");\n      background-size: cover;\n      height: ",";\n      width: 100%;\n    "])),(function(e){return e.bg?e.bg:""}),(function(e){return e.height}))||Object(A.a)(m||(m=Object(z.a)(["\n      max-width: 100%;\n      height: auto;\n    "])))})),F=function(e){var t=e.alt,c=e.src,s=e.className,a=e.bg,i=e.height,l=T()(Object(_.a)({"img-fluid":!0},"".concat(s),s));return Object(h.jsx)(J,{alt:t,src:c,className:T()(l),bg:a,height:i})},H=c.p+"static/media/danger.470ba2bd.png",X=(c.p,c.p+"static/media/brands.3173ddd3.png"),G=(c.p,c.p+"static/media/join1.46eb438f.jpeg"),M=c.p+"static/media/join2.c2139548.jpeg",U=c.p+"static/media/join3.483dbf92.jpeg",q=(c.p,c(74),c(30)),K=c.n(q),P=(c(87),c(88),c(89),function(e){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("p",{className:"",children:"\xa9 Copyright 2021 OnBoardXR / The Jigsaw Ensemble, LLC."}),Object(h.jsx)("p",{style:{marginBottom:".8rem"},children:" "}),Object(h.jsx)("div",{className:"footer-social",children:e.footer&&e.footer.map((function(e,t){return Object(h.jsx)("a",{href:e.url,target:"__blank",className:"footer-social-link",children:Object(h.jsx)("svg",{style:{width:"25px",height:"25px"},viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fill:"currentColor",d:e.icon})})},t)}))})]})}),Q={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}};function V(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=(t[1],Object(s.useState)(!1)),i=Object(r.a)(a,2),l=i[0],n=i[1],j=Object(s.useState)(!1),d=Object(r.a)(j,2),x=d[0],b=d[1],m=Object(s.useState)(""),O=Object(r.a)(m,2),C=O[0],_=O[1],L=Object(s.useState)([]),S=Object(r.a)(L,2);S[0],S[1];return Object(s.useEffect)((function(){document.body.classList.add("dark-theme"),fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})),console.log(l)}),[c]),Object(s.useEffect)((function(){0===C.length&&b(!1)}),[C]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.a,{fluid:"lg",children:[Object(h.jsxs)("div",{className:"header-example mb-5  justify-content-between align-items-center",children:[Object(h.jsx)(g.a,{expand:"lg",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(g.a.Brand,{href:"#home",children:Object(h.jsx)("img",{src:H,width:"50",height:"50",className:"d-inline-block align-top",alt:"React Bootstrap logo"})}),Object(h.jsx)(g.a.Toggle,{"aria-controls":"navbarScroll",style:{backgroundColor:"yellow"}}),Object(h.jsxs)(g.a.Collapse,{children:[Object(h.jsx)(p.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px",color:"yellow"},navbarScroll:!0,children:l&&l.navBar.map((function(e,t){return Object(h.jsx)(p.a.Link,{id:t,style:{color:"yellow"},href:e.link,children:e.name})}))}),Object(h.jsx)(u.a,{className:" d-flex",children:Object(h.jsx)(f.a,{style:{color:"yellow",backgroundColor:"black",borderColor:"yellow",borderWidth:"3px"},type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){_(e.target.value),b(!0),e.preventDefault(),console.log(e.nativeEvent.inputType)}})})]})]})}),Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}})]}),x?Object(h.jsxs)(o.a,{id:"main",children:[Object(h.jsxs)(k.a,{variant:"warning",children:["Showing Results to : ",C]}),Object(h.jsx)(K.a,{responsive:Q,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return e.name.includes(C)||e.heading.includes(C)||e.tags.includes(C)})).map((function(e,t){return Object(h.jsxs)(y.a,{className:"text-dark m-4 mobile_res",children:[Object(h.jsx)(F,{className:"card-img",src:e.image}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(h.jsx)("div",{className:"h3 ",children:Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsxs)("div",{className:"m-3",children:[Object(h.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(h.jsxs)("div",{className:"align-items-right m-3",children:[Object(h.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(h.jsxs)("div",{className:"h5 mb-3",children:[Object(h.jsx)("a",{className:"text-white text-decoration-none",href:"/".concat(e.link),children:e.heading}),Object(h.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(h.jsx)("div",{className:"align-items-right",children:Object(h.jsx)(w.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))})]}):Object(h.jsx)(o.a,{id:"main",children:Object(h.jsxs)(v.a,{children:[Object(h.jsxs)(N.a,{sm:12,md:6,lg:6,className:"col-md-offset-2 mb-2",children:[Object(h.jsx)("div",{className:"h3 ",style:{marginLeft:"20%",marginTop:"20%"},children:Object(h.jsx)("a",{className:"text-white text-decoration-none",href:"/#",children:"Enter a portal to access live xr performances across the metaverse"})}),Object(h.jsx)("div",{style:{marginLeft:"20%",marginTop:"10%"},children:Object(h.jsx)(w.a,{onClick:function(e){e.preventDefault(),window.location.href="".concat(l&&l.haveacodeLink)},children:"Have a code? "})})]}),Object(h.jsx)(N.a,{sm:12,md:6,lg:6,children:Object(h.jsxs)(y.a,{className:"text-dark m-4 mobile_res",children:[Object(h.jsx)(F,{className:"card-img",src:l&&l.masterCard.image}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(h.jsx)("div",{className:"h3 ",children:Object(h.jsx)("p",{className:"text-white text-decoration-none",children:l&&l.masterCard.title})}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsxs)("div",{className:"m-3",children:[Object(h.jsx)("img",{src:l&&l.masterCard.leftOverlay,height:"50px",width:"50px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:l&&l.masterCard.leftOverlayText})]}),Object(h.jsxs)("div",{className:"align-items-right m-3",children:[Object(h.jsx)("img",{src:l&&l.masterCard.rightOverlay,height:"50px",width:"50px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:l&&l.masterCard.rightOverlayText})]})]})]}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(h.jsxs)("div",{className:"h5 mb-3",children:[Object(h.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(l&&l.masterCard.link),children:l&&l.masterCard.heading}),Object(h.jsx)("br",{}),Object(h.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",l&&l.masterCard.name," "]})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between m-2",children:[Object(h.jsx)("img",{src:l&&l.masterCard.artist,width:"75px",height:"75px"}),Object(h.jsx)("div",{className:"m-2",style:{textAlign:"right"},children:Object(h.jsx)(w.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(e){e.preventDefault(),window.location.href="".concat(l&&l.masterCard.link)},children:"Enter"})})]})]})]})})]})}),Object(h.jsxs)(v.a,{className:"mb-4",children:[Object(h.jsxs)(N.a,{sm:12,md:6,lg:1,style:{color:"yellow"},children:[" ",Object(h.jsx)("h4",{children:"Shows"})]}),Object(h.jsxs)(N.a,{sm:12,md:6,lg:11,children:["  ",Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}})]})]}),Object(h.jsx)(K.a,{responsive:Q,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return"shows"===e.category})).map((function(e,t){return Object(h.jsxs)(y.a,{className:"text-dark m-4 mobile_res",children:[Object(h.jsx)(F,{className:"card-img",src:e.image}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(h.jsx)("div",{className:"h3 ",children:Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsxs)("div",{className:"m-3",children:[Object(h.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(h.jsxs)("div",{className:"align-items-right m-3",children:[Object(h.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(h.jsxs)("div",{className:"h5",children:[Object(h.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(e.link),children:e.heading}),Object(h.jsx)("br",{}),Object(h.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between m-2",children:[Object(h.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(h.jsx)("div",{className:"align-items-right m-2",children:Object(h.jsx)(w.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))}),Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(h.jsx)("img",{src:X,width:"90%"}),Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(h.jsxs)(o.a,{className:"mt-5 ",id:"about",children:[Object(h.jsx)("p",{className:"text-white h1",children:"About"}),Object(h.jsxs)("p",{className:"text-white text-decoration-none h3 mb-5",children:["  ",l&&l.about," "]})]}),Object(h.jsxs)(v.a,{className:"mb-4 mt-2",children:[Object(h.jsxs)(N.a,{sm:12,md:6,lg:1,style:{color:"yellow"},children:[" ",Object(h.jsx)("h4",{children:"Lobbies"})]}),Object(h.jsxs)(N.a,{sm:12,md:6,lg:11,children:["  ",Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}})]})]}),Object(h.jsx)(K.a,{responsive:Q,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return"lobbies"===e.category})).map((function(e,t){return Object(h.jsxs)(y.a,{className:"text-dark m-4 mobile_res",children:[Object(h.jsx)(F,{className:"card-img",src:e.image}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(h.jsx)("div",{className:"h3 ",children:Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsxs)("div",{className:"m-3",children:[Object(h.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(h.jsxs)("div",{className:"align-items-right m-3",children:[Object(h.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(h.jsxs)("div",{className:"h5",children:[Object(h.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(e.link),children:e.heading}),Object(h.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(h.jsx)("div",{className:"align-items-right",children:Object(h.jsx)(w.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))}),Object(h.jsxs)(v.a,{className:"mb-4",children:[Object(h.jsxs)(N.a,{sm:12,md:6,lg:1,style:{color:"yellow"},children:[" ",Object(h.jsx)("h4",{children:"Clips"})]}),Object(h.jsxs)(N.a,{sm:12,md:6,lg:11,children:["  ",Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}})]})]}),Object(h.jsx)(K.a,{responsive:Q,itemClass:"carousel-item-padding-40-px",children:l&&l.cardList&&l.cardList.filter((function(e){return"clips"===e.category})).map((function(e,t){return Object(h.jsxs)(y.a,{className:"text-dark m-4 mobile_res",children:[Object(h.jsx)(F,{className:"card-img",src:e.image}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3",children:[Object(h.jsx)("div",{className:"h3 ",children:Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.title})}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsxs)("div",{className:"m-3",children:[Object(h.jsx)("img",{src:e.leftOverlay,height:"60px",width:"60px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.leftOverlayText})]}),Object(h.jsxs)("div",{className:"align-items-right m-3",children:[Object(h.jsx)("img",{src:e.rightOverlay,height:"50px",width:"50px"}),Object(h.jsx)("p",{className:"text-white text-decoration-none",children:e.rightOverlayText})]})]})]}),Object(h.jsxs)(y.a.ImgOverlay,{className:"overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4",children:[Object(h.jsxs)("div",{className:"h5 ",children:[Object(h.jsx)("a",{className:"text-white text-decoration-none",href:"".concat(e.link),children:e.heading}),Object(h.jsxs)("h6",{className:"text-white text-decoration-none ",children:[" ",e.name," "]})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(h.jsx)("img",{src:e.artist,width:"75px",height:"75px"}),Object(h.jsx)("div",{className:"align-items-right",children:Object(h.jsx)(w.a,{style:{borderWidth:"0px",borderRadius:"35px",backgroundColor:"yellow",color:"black"},onClick:function(t){t.preventDefault(),window.location.href="".concat(e.link)},children:"Enter"})})]})]})]},t)}))}),Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(h.jsxs)(o.a,{className:"mt-5 mb-5",id:"joinUs",children:[Object(h.jsx)("p",{className:"text-white h1 mb-3",style:{textAlign:"center"},children:"Join us!"}),Object(h.jsxs)(v.a,{children:[Object(h.jsx)(N.a,{sm:12,md:6,lg:4,children:Object(h.jsxs)(y.a,{className:"mb-4",style:{backgroundColor:"black",height:"450px"},children:[Object(h.jsx)(I,{children:Object(h.jsx)(F,{className:"card-img-top card-img-bottom p-4 ",style:{borderRadius:"30px"},src:G})}),Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(W,{tag:"h4",className:"weight-700 mb-4 text-white",children:"Learn"}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsxs)(W,{tag:"span",className:"weight-400 text-white font-size-20",children:["Free ",Object(h.jsx)("a",{href:l&&l.learnLink,children:" resources and toolkit "})," to create your own XR performance space."]})})]})]})}),Object(h.jsx)(N.a,{sm:12,md:6,lg:4,children:Object(h.jsxs)(y.a,{className:"mb-4",style:{backgroundColor:"black",height:"450px"},children:[Object(h.jsx)(I,{children:Object(h.jsx)(F,{className:"card-img-top card-img-bottom p-4 ",style:{borderRadius:"30px"},src:M})}),Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(W,{tag:"h4",className:"weight-700 mb-4 text-white",children:"Submit"}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsxs)(W,{tag:"span",className:"weight-400 text-white font-size-20",children:[Object(h.jsx)("a",{href:l&&l.submitLink,children:"Send a proposal"})," for our next seasonal series to showcase and monetize your performance."]})})]})]})}),Object(h.jsx)(N.a,{sm:12,md:6,lg:4,children:Object(h.jsxs)(y.a,{className:"mb-4",style:{backgroundColor:"black",height:"450px"},children:[Object(h.jsx)(I,{children:Object(h.jsx)(F,{className:"card-img-top card-img-bottom p-4 ",style:{borderRadius:"30px"},src:U})}),Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(W,{tag:"h4",className:"weight-700 mb-4 text-white",children:"Follow"}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsxs)(W,{tag:"span",className:"weight-400 text-white font-size-20",children:["Get the ",Object(h.jsx)("a",{href:l&&l.followLink,children:"latest news and updates "}),"about the community and industry."]})})]})]})})]})]}),Object(h.jsx)("hr",{style:{color:"yellow",height:"2px"}}),Object(h.jsx)(P,{footer:l.footerIcons})]})})}var Y=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(n.c,{children:[Object(h.jsx)(n.a,{exact:!0,path:"/docs",children:Object(h.jsx)(O,{})}),Object(h.jsx)(n.a,{exact:!0,path:"/",children:Object(h.jsx)(V,{})}),Object(h.jsx)(n.a,{children:"404 Not found!"})]})})},Z=c(44);l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Z.a,{children:Object(h.jsx)(Y,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.3744a380.chunk.js.map