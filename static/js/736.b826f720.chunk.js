"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{835:function(e,n,t){var c=t(861),r=t(757),a=t.n(r),s=t(243);function u(){return(u=(0,c.Z)(a().mark((function e(n,t){var c,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"05ccb66bc585d7c8c0c1ccd2edb23ebd",c=new URLSearchParams({api_key:"05ccb66bc585d7c8c0c1ccd2edb23ebd",query:t,language:"en - US",page:1}),e.next=5,s.Z.get("https://api.themoviedb.org/3/".concat(n,"?").concat(c));case 5:if(200!==!(r=e.sent).status){e.next=8;break}throw new Error(r.status);case 8:return e.next=10,r.data;case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(0),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}n.Z=function(e,n){return u.apply(this,arguments)}},736:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var c,r,a=t(439),s=t(835),u=t(791),i=t(689),o=t(168),l=t(444),d=l.ZP.ul(c||(c=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),p=l.ZP.li(r||(r=(0,o.Z)(["\n  margin-left: 20px;\n  list-style-type: disclosure-closed;\n  padding: 8px 10px;\n"]))),f=t(184),h=function(){var e=(0,u.useState)(null),n=(0,a.Z)(e,2),t=n[0],c=n[1],r=(0,i.UO)().movieId;return(0,u.useEffect)((function(){setTimeout((function(){(0,s.Z)("movie/".concat(r,"/credits")).then((function(e){c(e.cast)}))}),2e3)}),[r]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(d,{children:t&&t.map((function(e){return(0,f.jsx)(p,{children:e.name},e.id)}))})})}}}]);
//# sourceMappingURL=736.b826f720.chunk.js.map