"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{573:function(e,t,n){n.d(t,{Hg:function(){return s},Jh:function(){return f},s_:function(){return o},xi:function(){return h},yO:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i="1deae1a36202e3ac8c29219a3d453e0f",s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i,"&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results.map((function(e){return{id:e.id,title:e.title,poster:e.poster_path}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast.map((function(e){return{avatar:e.profile_path,name:e.name,character:e.character,castId:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{author:e.author,content:e.content,reviewId:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,title:e.title,poster:e.poster_path}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},321:function(e,t,n){var r=n(643),a=n(184);t.Z=function(){return(0,a.jsx)(r.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}},733:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(573),s=n(791),o=n(689),p=n(321),f="Reviews_list__1iaAS",h="Reviews_item__YeOaw",l="Reviews_notification__y69PY",d=n(184);function v(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],u=t[1],v=(0,s.useState)(null),m=(0,a.Z)(v,2),w=m[0],g=m[1],x=(0,s.useState)([]),_=(0,a.Z)(x,2),k=_[0],y=_[1],b=(0,o.UO)().id;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,i.Jh)(b);case 4:t=e.sent,y(t),g(null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g("We don't have any review about this movie");case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),(0,d.jsxs)(d.Fragment,{children:[n&&(0,d.jsx)(p.Z,{}),w&&(0,d.jsx)("p",{children:w}),0===k.length?(0,d.jsx)("p",{className:l,children:"We don't have any reviews about this movie"}):(0,d.jsx)("ul",{className:f,children:k.map((function(e){return(0,d.jsxs)("li",{className:h,children:[(0,d.jsx)("h1",{children:e.author}),(0,d.jsx)("p",{children:e.content})]},e.reviewId)}))})]})}}}]);
//# sourceMappingURL=733.f8fdbf11.chunk.js.map