(this.webpackJsonpmovie_app_v2=this.webpackJsonpmovie_app_v2||[]).push([[0],{25:function(e,t,c){},38:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(21),r=c.n(n),s=(c(48),c(49),c.p+"static/media/tv.0049bc70.png"),i=(c(25),[{title:"NOW PLAYING",url:"https://api.themoviedb.org/3/movie/now_playing"},{title:"TOP RATED",url:"https://api.themoviedb.org/3/movie/top_rated"},{title:"POPULAR",url:"https://api.themoviedb.org/3/movie/popular"}]),o=c(9),j=c.n(o),u=c(15),l=c(8),d=c(13),p=c(16),b=c.n(p),h=c(1);function O(e){var t=e.url,c=e.title,n=Object(a.useState)([]),r=Object(l.a)(n,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t,{params:{api_key:"aa612f293de8cfae23f3d56312b5f998"}});case 2:c=e.sent,a=c.data.results,i(a.filter((function(e){return null!==e.poster_path})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"movie-content",children:[Object(h.jsx)("h1",{children:c}),Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(d.b,{to:"/details/".concat(e.id),children:Object(h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:"movieImage"})},e.id)}))})]})}function m(){return console.log(i),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"home-banner",children:[Object(h.jsxs)("div",{className:"home-description",children:[Object(h.jsx)("h1",{children:"Enjoy Your TV."}),Object(h.jsxs)("p",{children:["Watch on Smart TVs, Playstation, Xbox,",Object(h.jsx)("span",{children:" Chromecast, Apple TV, Blu-ray players, and more."})]})]}),Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{src:s,alt:"tv"})})]}),i.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(O,{url:e.url,title:e.title})},t)}))]})}var f=c(3),v=c(18);function x(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),o=(i[0],i[1]),j=Object(f.f)(),u=Object(v.b)();Object(f.g)();return Object(h.jsx)("div",{className:"main",children:Object(h.jsx)("input",{placeholder:"Search...",onKeyDown:function(e){"Enter"===e.key&&n.length>0&&(o(n),u({type:"MOVIE_NAME",payload:n}),j.push("/search/query=".concat(n)),r(""))},onChange:function(e){e.target.value,r(e.target.value)},value:n})})}c(38);var g=c(20),y=c.n(g),N=c(43),w=c.n(N);function _(e){var t=e.url;return Object(h.jsx)("div",{className:"player-wrapper",children:Object(h.jsx)(w.a,{className:"react-player",url:t,width:"100%",height:"100%"})})}function k(e){var t=e.match,c=Object(a.useState)([]),n=Object(l.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),p=o[0],O=o[1],m="aa612f293de8cfae23f3d56312b5f998",f="https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat(m),v="https://api.themoviedb.org/3/movie/".concat(t.params.id,"/recommendations?api_key=").concat(m,"&language=en-US&page=1"),x="http://api.themoviedb.org/3/movie/".concat(t.params.id,"/videos?api_key=").concat(m),g=Object(a.useState)(0),N=Object(l.a)(g,2),w=N[0],k=N[1],E=Object(a.useState)([]),S=Object(l.a)(E,2),A=S[0],q=S[1],I=Object(a.useState)(""),P=Object(l.a)(I,2),R=P[0],T=P[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(f);case 2:t=e.sent,c=t.data,s(c),O(c.genres.map((function(e){return e}))),k((function(){return Number((c.vote_average/2).toFixed(1))}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(v);case 2:t=e.sent,c=t.data,q(c.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(x);case 2:t=e.sent,c=t.data.results,T("https://www.youtube.com/watch?v="+c[0].key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[R]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("div",{className:"trailer",style:{margin:"0",width:"100%",height:"100%",display:"flex"},children:Object(h.jsx)("div",{className:"",style:{width:"100%",height:"auto"},children:Object(h.jsx)(_,{url:R})})}),Object(h.jsxs)("div",{className:"movie-description",children:[Object(h.jsxs)("h3",{children:[r.title," "]}),Object(h.jsxs)("p",{children:[r.overview," "]}),Object(h.jsxs)("div",{className:"genres-container",children:[Object(h.jsx)("p",{children:"Genre:"}),Object(h.jsx)("div",{className:"genres",children:p.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"genres-name",children:e.name})},e.id)}))})]}),Object(h.jsx)("div",{className:"rating-year",children:Object(h.jsx)("div",{className:"rating",children:Object(h.jsx)("span",{children:Object(h.jsx)(y.a,{count:5,size:24,color2:"#ffd700",value:w,edit:!1})})})})]})]}),Object(h.jsxs)("div",{className:"recommended",children:[Object(h.jsx)("h1",{style:{margin:"60px 10% 0 10%"},children:"Recommended"}),Object(h.jsx)("div",{className:"search",children:A.map((function(e){return Object(h.jsxs)("div",{onClick:function(){return window.location.reload()},className:"search-info",children:[Object(h.jsx)(d.b,{to:"/details/".concat(e.id),children:Object(h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:"loading..."})}),Object(h.jsxs)("h3",{children:[e.title," "]}),Object(h.jsx)(y.a,{count:5,size:24,color2:"#ffd700",value:Number((e.vote_average/2).toFixed(1)),edit:!1})]},e.id)}))})]})]})}function E(e){var t="https://api.themoviedb.org/3/search/movie?",c="aa612f293de8cfae23f3d56312b5f998",n=Object(a.useState)([]),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(v.c)((function(e){return e.inputReducer})),p=Object(f.f)(),O=Object(f.g)(),m=Object(f.h)().query;return Object(a.useEffect)((function(){if(m)try{function e(){return(e=Object(u.a)(j.a.mark((function e(){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t,{params:{api_key:c,query:m}});case 2:a=e.sent,n=a.data.results,i(n.filter((function(e){return null!==e.poster_path})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}catch(a){console.log(a)}}),[o,m,O,p]),Object(h.jsx)("div",{className:"search",children:s.map((function(e){return Object(h.jsxs)("div",{className:"search-info",children:[Object(h.jsx)(d.b,{to:"/details/".concat(e.id),children:Object(h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:""})}),Object(h.jsxs)("h3",{children:[e.title," "]}),Object(h.jsx)(y.a,{count:5,size:24,color2:"#ffd700",value:Number((e.vote_average/2).toFixed(1)),edit:!1})]},e.id)}))})}var S=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{exact:!0,path:"/",component:m}),Object(h.jsx)(f.a,{path:"/search/query=:query",component:E}),Object(h.jsx)(f.a,{path:"/details/:id",component:k})]})]})})},A=c(17);var q=Object(A.b)({inputReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_NAME":return t.payload;default:return e}}}),I=Object(A.c)(q);r.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a,{store:I,children:Object(h.jsx)(S,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.966f5568.chunk.js.map