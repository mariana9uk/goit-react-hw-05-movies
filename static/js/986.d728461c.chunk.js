"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[986,729,364,910],{830:function(e,t,n){n.d(t,{Bt:function(){return v},LI:function(){return x},Tg:function(){return d},nX:function(){return f},y:function(){return h}});var r,a,i,s,c,u=n(165),o=n(861),l=n(243),p="1e066df6273043e937131fcc939211ac",d=function(){return(r=r||(0,o.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(p,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},f=function(e){return(a=a||(0,o.Z)((0,u.Z)().mark((function e(t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(p,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},h=function(e){return(i=i||(0,o.Z)((0,u.Z)().mark((function e(t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(p,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},v=function(e){return(s=s||(0,o.Z)((0,u.Z)().mark((function e(t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(p,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},x=function(e){return(c=c||(0,o.Z)((0,u.Z)().mark((function e(t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(p,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},910:function(e,t,n){n.r(t);var r=n(165),a=n(861),i=n(439),s=n(791),c=n(689),u=n(830),o=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,s.useState)({}),n=(0,i.Z)(t,2),l=n[0],p=n[1];if((0,s.useEffect)((function(){var t;!function(){(t=t||(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.y)(e);case 3:n=t.sent,p(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}()}),[e]),!l||!l.cast)return null;var d=l.cast.map((function(e){var t="".concat("https://image.tmdb.org/t/p/w200").concat(e.profile_path);return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:e.name}),(0,o.jsxs)("p",{children:["Role: ",e.character]}),(0,o.jsx)("img",{src:t,alt:""})]},e.id)}));return(0,o.jsx)("ul",{children:d})}},364:function(e,t,n){n.r(t);var r=n(165),a=n(861),i=n(439),s=n(791),c=n(830),u=n(184),o=n(87).useParams;t.default=function(){var e=o().movieId,t=(0,s.useState)({}),n=(0,i.Z)(t,2),l=n[0],p=n[1];if((0,s.useEffect)((function(){var t;!function(){(t=t||(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.Bt)(e);case 3:n=t.sent,p(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}()}),[e]),!l||!l.results)return null;if(0===l.total_results)return"We dont have reviews for this movie.";var d=l.results.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h3",{children:["Author: ",e.author]}),(0,u.jsx)("article",{children:e.content})]},e.id)}));return(0,u.jsx)("ul",{children:d})}},729:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,i,s,c=n(165),u=n(861),o=n(439),l=n(830),p=n(910),d=n(364),f=n(791),h=n(689),v=n(87),x=n(168),m=n(867),Z=m.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: solid grey 1px;\n"]))),g=m.ZP.div(a||(a=(0,x.Z)(["\n  padding: 20px;\n"]))),j=(m.ZP.a(i||(i=(0,x.Z)(["\n  padding-left: 20px;\n"]))),m.ZP.div(s||(s=(0,x.Z)(["\n  padding-left: 20px;\n"])))),w=n(506),k=n(184),y=function(){var e,t,n=(0,h.TH)(),r=(0,f.useRef)(null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),a=(0,h.UO)().movieId,i=(0,f.useState)({}),s=(0,o.Z)(i,2),x=s[0],m=s[1];if((0,f.useEffect)((function(){var e;!function(){(e=e||(0,u.Z)((0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.nX)(a);case 3:t=e.sent,m(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w.Am.error("Error 404",{position:w.Am.POSITION.TOP_LEFT,autoClose:2e3});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}()}),[a]),!x||!x.genres)return null;var y="".concat(x.release_date).slice(0,4),b="".concat("https://image.tmdb.org/t/p/w300").concat(x.poster_path),_=10*Number(x.vote_average),S=Math.round(_),P=x.genres.map((function(e){return(0,k.jsx)("li",{children:e.name},e.id)}));return(0,k.jsxs)("div",{children:[(0,k.jsxs)(g,{children:[(0,k.jsx)(v.Link,{to:r.current,children:"Go Back"}),(0,k.jsx)("div",{children:(0,k.jsxs)(Z,{children:[(0,k.jsx)("img",{src:b,alt:x.original_title}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("h1",{children:[x.title," (",y,")"]}),(0,k.jsxs)("p",{children:["User Score: ",S,"%"]}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)("article",{children:x.overview}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("ul",{children:P})]})]})})]}),(0,k.jsxs)(j,{children:[(0,k.jsx)("p",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(v.Link,{to:"cast",element:(0,k.jsx)(p.default,{}),children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(v.Link,{to:"reviews",element:(0,k.jsx)(d.default,{}),children:"Reviews"})})]}),(0,k.jsx)(f.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(h.j3,{})})]})]})}},986:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,a=n(165),i=n(861),s=n(439),c=n(830),u=n(729),o=n(689),l=n(87),p=n(184),d=function(e){var t=e.searchedMoviesArr,n=(0,o.TH)();if(t){var r=t.map((function(e){var t=e.id;return(0,p.jsx)("li",{children:(0,p.jsx)(l.Link,{to:"".concat(t),element:(0,p.jsx)(u.default,{}),state:{from:n},children:e.title})},e.id)}));return(0,p.jsx)("ul",{children:r})}},f=n(791),h=n(168),v=n(867).ZP.div(r||(r=(0,h.Z)(["\n  padding: 20px;\n"]))),x=n(506),m=function(){var e,t=(0,l.useSearchParams)(),n=(0,s.Z)(t,2),r=n[0],u=n[1],o=null!==(e=r.get("query"))&&void 0!==e?e:"",h=(0,f.useState)({}),m=(0,s.Z)(h,2),Z=m[0],g=m[1];if((0,f.useEffect)((function(){var e;""!==o&&function(){(e=e||(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.LI)(o);case 3:(t=e.sent)&&0===t.total_results&&x.Am.warn("Sorry, we dont have this movie",{position:x.Am.POSITION.TOP_CENTER,autoClose:2e3}),g(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x.Am.error("Error",{position:x.Am.POSITION.TOP_LEFT,autoClose:2e3});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}()}),[o]),!Z)return null;var j=Z.results;return(0,p.jsx)("div",{children:(0,p.jsxs)(v,{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u({query:e.target.elements.query.value}),e.target.reset()},children:[(0,p.jsx)("input",{type:"text",name:"query"}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsx)(d,{searchedMoviesArr:j})]})})}}}]);
//# sourceMappingURL=986.d728461c.chunk.js.map