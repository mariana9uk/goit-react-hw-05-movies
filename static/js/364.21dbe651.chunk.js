"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[364],{830:function(e,t,n){n.d(t,{Bt:function(){return d},LI:function(){return m},Tg:function(){return h},nX:function(){return v},y:function(){return l}});var r,a,c,u,s,o=n(165),i=n(861),p=n(243),f="1e066df6273043e937131fcc939211ac",h=function(){return(r=r||(0,i.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(f,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},v=function(e){return(a=a||(0,i.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(f,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},l=function(e){return(c=c||(0,i.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(f,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},d=function(e){return(u=u||(0,i.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(f,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},m=function(e){return(s=s||(0,i.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(f,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},364:function(e,t,n){n.r(t);var r=n(165),a=n(861),c=n(439),u=n(791),s=n(830),o=n(184),i=n(87).useParams;t.default=function(){var e=i().movieId,t=(0,u.useState)({}),n=(0,c.Z)(t,2),p=n[0],f=n[1];if((0,u.useEffect)((function(){var t;!function(){(t=t||(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Bt)(e);case 3:n=t.sent,f(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}()}),[e]),!p||!p.results)return null;if(0===p.total_results)return"We dont have reviews for this movie.";var h=p.results.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",e.author]}),(0,o.jsx)("article",{children:e.content})]},e.id)}));return(0,o.jsx)("ul",{children:h})}}}]);
//# sourceMappingURL=364.21dbe651.chunk.js.map