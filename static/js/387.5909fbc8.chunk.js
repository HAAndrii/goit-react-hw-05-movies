"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{835:function(e,n,t){var r=t(861),c=t(757),a=t.n(c),s=t(243);function i(){return(i=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"05ccb66bc585d7c8c0c1ccd2edb23ebd",r=new URLSearchParams({api_key:"05ccb66bc585d7c8c0c1ccd2edb23ebd",query:t,language:"en - US",page:1}),e.next=5,s.Z.get("https://api.themoviedb.org/3/".concat(n,"?").concat(r));case 5:if(200!==!(c=e.sent).status){e.next=8;break}throw new Error(c.status);case 8:return e.next=10,c.data;case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(0),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}n.Z=function(e,n){return i.apply(this,arguments)}},387:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,c,a,s,i=t(439),u=t(835),o=t(791),p=t(689),d=t(168),l=t(444),f=l.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),h=l.ZP.li(c||(c=(0,d.Z)(["\n  /* padding: 8px 10px; */\n  margin-left: 20px;\n  list-style-type: disclosure-closed;\n  padding: 8px 10px;\n"]))),x=l.ZP.p(a||(a=(0,d.Z)(["\n  /* padding: 8px 10px; */\n"]))),g=l.ZP.p(s||(s=(0,d.Z)(["\n  /* padding: 8px 10px; */\n"]))),v=t(184),b=function(){var e=(0,o.useState)(null),n=(0,i.Z)(e,2),t=n[0],r=n[1],c=(0,p.UO)().movieId;return(0,o.useEffect)((function(){(0,u.Z)("movie/".concat(c,"/reviews")).then((function(e){r(e.results)}))}),[c]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(f,{children:t&&t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,v.jsxs)(h,{children:[(0,v.jsx)(x,{children:t}),(0,v.jsx)(g,{children:r})]},n)}))})})}}}]);
//# sourceMappingURL=387.5909fbc8.chunk.js.map