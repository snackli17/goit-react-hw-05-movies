"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{573:function(t,e,r){r.d(e,{Hg:function(){return u},Jh:function(){return p},s_:function(){return s},xi:function(){return f},yO:function(){return l}});var n=r(861),a=r(757),c=r.n(a),i=r(243),o="1deae1a36202e3ac8c29219a3d453e0f",u=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(o,"&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title,poster:t.poster_path}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast.map((function(t){return{avatar:t.profile_path,name:t.name,character:t.character,castId:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results.map((function(t){return{author:t.author,content:t.content,reviewId:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(o,"&language=en-US&page=1&include_adult=false"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results.map((function(t){return{id:t.id,title:t.title,poster:t.poster_path}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},321:function(t,e,r){var n=r(643),a=r(184);e.Z=function(){return(0,a.jsx)(n.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}},881:function(t,e,r){r.d(e,{Z:function(){return s}});r(791);var n="MovieList_list__6L+fy",a="MovieList_item__-kK6P",c="MovieList_link__51DW1",i=r(87),o=r(689),u=r(184);function s(t){var e=t.films,r=(0,o.TH)();return(0,u.jsx)("ul",{className:n,children:e.map((function(t){return(0,u.jsxs)("li",{className:a,children:[t.poster?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(t.poster),alt:t.title,width:300}):(0,u.jsx)("img",{src:"https://img.freepik.com/premium-vector/photo-frame-icon-empty-photo-blank-vector-on-isolated-transparent-background-eps-10_399089-1290.jpg",alt:"film poster",width:300}),(0,u.jsx)(i.rU,{className:c,to:"/movies/".concat(t.id),state:{from:r},children:t.title})]},t.id)}))})}},437:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var n,a=r(861),c=r(439),i=r(757),o=r.n(i),u=r(791),s=r(87),l=r(573),p=r(881),f={form:"MovieForm_form__97o-j",button:"MovieForm_button__vBt-h",buttonLabel:"MovieForm_buttonLabel__s9a6F",input:"MovieForm_input__JEn9O"},h=["title","titleId"];function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},m.apply(this,arguments)}function d(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function v(t,e){var r=t.title,a=t.titleId,c=d(t,h);return u.createElement("svg",m({fill:"#000000",height:"800px",width:"800px",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 430 430",xmlSpace:"preserve",ref:e,"aria-labelledby":a},c),r?u.createElement("title",{id:a},r):null,n||(n=u.createElement("g",null,u.createElement("path",{d:"M230.39,255.512c-5.879-5.881-13.548-8.875-21.256-9c29.804-44.402,25.106-105.25-14.105-144.465 c-44.557-44.555-117.054-44.555-161.61,0c-44.558,44.557-44.558,117.059,0,161.613c39.212,39.213,100.059,43.908,144.463,14.105 c0.124,7.705,3.117,15.377,8.998,21.256l79.443,79.445c12.017,12.016,31.495,12.016,43.512,0c12.018-12.018,12.018-31.494,0-43.512 L230.39,255.512z M170.165,238.797c-30.845,30.848-81.039,30.848-111.884,0c-30.848-30.848-30.848-81.037,0-111.887 c30.845-30.846,81.039-30.846,111.884,0C201.013,157.76,201.013,207.949,170.165,238.797z"}),u.createElement("path",{d:"M225.549,112.678h39.852c4.603,0,9.014-1.826,12.266-5.08l30.385-30.383h104.603c9.58,0,17.347-7.766,17.347-17.348 c0-9.578-7.767-17.346-17.347-17.346H300.866c-4.603,0-9.015,1.826-12.267,5.082l-30.384,30.381h-64.435 c4.724,3.6,9.244,7.529,13.515,11.799C214.335,96.826,220.417,104.52,225.549,112.678z"}),u.createElement("path",{d:"M412.654,204.422h-70.152L315.68,189c-2.631-1.512-5.612-2.309-8.646-2.309h-61.325 c-0.329,11.684-2.198,23.355-5.652,34.691h62.345l26.822,15.424c2.633,1.512,5.614,2.309,8.647,2.309h74.783 c9.58,0,17.347-7.768,17.347-17.348C430,212.188,422.234,204.422,412.654,204.422z"}),u.createElement("path",{d:"M411.883,130.797H235.07c4.773,11.121,7.955,22.805,9.537,34.691h167.276c9.579,0,17.346-7.766,17.346-17.346 C429.229,138.563,421.462,130.797,411.883,130.797z"}))))}var g=u.forwardRef(v),x=(r.p,r(184)),b=function(){var t=(0,s.lr)(),e=(0,c.Z)(t,2)[1];return(0,x.jsx)("div",{className:f.searchbar,children:(0,x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({query:t.target.elements.query.value}),t.target.reset()},className:f.form,children:[(0,x.jsxs)("button",{type:"submit",className:f.button,children:[(0,x.jsx)("span",{className:f.buttonLabel}),(0,x.jsx)(g,{width:"20",height:"20",className:f.searchSvg})]}),(0,x.jsx)("input",{className:f.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",name:"query"})]})})},w=r(321),y={notify:"Movies_notify__mc9EU"};function _(){var t,e=(0,u.useState)(!1),r=(0,c.Z)(e,2),n=r[0],i=r[1],f=(0,u.useState)([]),h=(0,c.Z)(f,2),m=h[0],d=h[1],v=(0,u.useState)(null),g=(0,c.Z)(v,2),_=g[0],k=g[1],j=(0,s.lr)(),Z=null!==(t=(0,c.Z)(j,1)[0].get("query"))&&void 0!==t?t:"";return(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(!0),t.next=4,(0,l.xi)(Z);case 4:e=t.sent,d(e),k(null),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),k("Sorry, we can not get data.");case 12:return t.prev=12,i(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==Z&&function(){t.apply(this,arguments)}()}),[Z]),(0,x.jsxs)("div",{className:y.moviesWrapper,children:[(0,x.jsx)(b,{}),_&&(0,x.jsx)("p",{children:_}),n&&(0,x.jsx)(w.Z,{}),""!==Z&&0===m.length&&!n&&(0,x.jsx)("p",{className:y.notify,children:"We don't have this film. Try do other query"}),m.length>0&&(0,x.jsx)(p.Z,{films:m})]})}}}]);
//# sourceMappingURL=437.6aee98c1.chunk.js.map