"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[55],{835:function(e,n,t){var r=t(861),i=t(757),c=t.n(i),s=t(243);function a(){return(a=(0,r.Z)(c().mark((function e(n,t){var r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"05ccb66bc585d7c8c0c1ccd2edb23ebd",r=new URLSearchParams({api_key:"05ccb66bc585d7c8c0c1ccd2edb23ebd",query:t,language:"en - US",page:1}),e.next=5,s.Z.get("https://api.themoviedb.org/3/".concat(n,"?").concat(r));case 5:if(200!==!(i=e.sent).status){e.next=8;break}throw new Error(i.status);case 8:return e.next=10,i.data;case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(0),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}n.Z=function(e,n){return a.apply(this,arguments)}},55:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r,i,c,s,a,o,l,d,u=t(439),p=t(835),x=t(791),h=t(168),f=t(444),v=f.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n"]))),g=f.ZP.div(i||(i=(0,h.Z)(["\n  margin-left: 30px;\n"]))),j=f.ZP.h3(c||(c=(0,h.Z)(["\n  margin-left: 30px;\n"]))),m=(f.ZP.ul(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),t(184)),Z=function(e){var n=e.film,t=n.title,r=n.poster_path,i=n.vote_average,c=n.overview,s=n.genres;return(0,m.jsxs)(v,{children:[(0,m.jsx)("img",{src:"".concat("http://image.tmdb.org/t/p/").concat("w342").concat(r),alt:t}),(0,m.jsxs)(g,{children:[(0,m.jsx)("h1",{children:t}),(0,m.jsxs)("p",{children:["Vote average: ",i]}),(0,m.jsxs)("p",{children:[(0,m.jsx)(j,{children:"Overview:"})," ",c]}),(0,m.jsx)("p",{children:(0,m.jsx)(j,{children:"Genres"})}),(0,m.jsx)("ul",{children:s.map((function(e){var n=e.id,t=e.name;return(0,m.jsx)("li",{children:t},n)}))})]})]})},b=t(689),w=t(87),_=f.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),k=f.ZP.li(o||(o=(0,h.Z)(["\n  padding: 5px 10px;\n  font-size: 20px;\n  font-weight: 600;\n"]))),y=(0,f.ZP)(w.OL)(l||(l=(0,h.Z)(["\n  padding: 8px 10px;\n"]))),P=(0,f.ZP)(w.OL)(d||(d=(0,h.Z)(["\n  display: inline-block;\n  margin: 10px;\n  padding: 5px;\n  text-decoration-line: none;\n  border-radius: 3px;\n  border-color: blue;\n  border-style: inset;\n  font-weight: 600;\n"]))),L=function(){var e=(0,x.useState)(null),n=(0,u.Z)(e,2),t=n[0],r=n[1],i=(0,b.UO)().movieId,c=(0,b.TH)();return(0,x.useEffect)((function(){(0,p.Z)("movie/".concat(i)).then((function(e){r(e)}))}),[i]),console.log("movie",t),(0,m.jsxs)("main",{children:[(0,m.jsx)(P,{to:c.state?c.state:"/",children:"Back to movies"}),t&&(0,m.jsx)(Z,{film:t}),(0,m.jsx)("h2",{children:"Additional information"}),(0,m.jsxs)(_,{children:[(0,m.jsx)(k,{children:(0,m.jsx)(y,{to:"cast",state:c.state,children:"Cast"})}),(0,m.jsx)(k,{children:(0,m.jsx)(y,{to:"reviews",state:c.state,children:"Reviews"})})]}),(0,m.jsx)(x.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading page..."}),children:(0,m.jsx)(b.j3,{})})]})}}}]);
//# sourceMappingURL=55.38a93978.chunk.js.map