(this.webpackJsonptvmaze=this.webpackJsonptvmaze||[]).push([[0],{45:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),i=a(18),o=(a(45),a(2));var d=function(){return Object(o.jsxs)("div",{className:"nav flex-column nav-pills",children:[Object(o.jsx)(i.b,{to:"/shows",className:"nav-link",activeClassName:"active",children:"Shows"}),Object(o.jsx)(i.b,{to:"/favorites",className:"nav-link",activeClassName:"active",children:"Favorites"})]})},j=a(6),l=a(16);var b=function(){return Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("div",{className:"spinner-border text-primary",role:"status"})})};var u=function(){return Object(o.jsx)("h4",{className:"no-records text-muted mb-0",children:"No Records Found!"})},O={GET_SHOWS_START:"GET_SHOWS_START",GET_SHOWS_SUCCESS:"GET_SHOWS_SUCCESS",GET_SHOWS_FAILURE:"GET_SHOWS_FAILURE",SET_FAVORITE:"SET_FAVORITE"},v=function(e){return{type:O.SET_FAVORITE,payload:e}};var m=function(){var e=Object(l.c)((function(e){return e.shows})),t=e.favorites,a=void 0===t?[]:t,c=e.isLoading,n=void 0!==c&&c,s=Object(l.b)();return Object(o.jsx)("div",{className:"shows-grid",children:Object(o.jsx)("div",{className:"row",children:a&&a.length>0?a.map((function(e){return Object(o.jsx)("div",{className:"col-md-3 mb-4",children:Object(o.jsxs)("div",{className:"card h-100",children:[Object(o.jsx)("img",{src:e.image.medium,className:"card-img-top",alt:e.image.medium,loading:"lazy"}),Object(o.jsxs)("div",{className:"card-body bg-primary text-white",children:[Object(o.jsx)("h5",{className:"card-title",children:e.name}),Object(o.jsx)("div",{className:"text-center pt-2",children:Object(o.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){s(v(e))},children:"Unfavorite"})})]})]})},e.id)})):n?Object(o.jsx)(b,{}):Object(o.jsx)(u,{})})})};var h=function(){var e=Object(l.c)((function(e){return e.shows})),t=e.shows,a=void 0===t?[]:t,n=e.isLoading,s=void 0!==n&&n,r=Object(l.b)();return Object(c.useEffect)((function(){a&&a.length>0||r({type:O.GET_SHOWS_START})}),[]),Object(o.jsx)("div",{className:"shows-grid",children:Object(o.jsx)("div",{className:"row",children:a&&a.length>0?a.map((function(e){return Object(o.jsx)("div",{className:"col-md-3 mb-4",children:Object(o.jsxs)("div",{className:"card h-100",children:[Object(o.jsx)("img",{src:e.image.medium,className:"card-img-top",alt:e.image.medium,loading:"lazy"}),Object(o.jsxs)("div",{className:"card-body bg-primary text-white",children:[Object(o.jsx)("h5",{className:"card-title",children:e.name}),Object(o.jsxs)("div",{className:"d-flex justify-content-between pt-2",children:[Object(o.jsx)("i",{className:"bi bi-heart-fill ".concat(e.isFavorite?"text-warning favorite-active":""),role:"button",onClick:function(){return function(e){r(v(e))}(e)}}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{className:"bi bi-star-fill mr-1",role:"button"}),Object(o.jsxs)("span",{children:[" ",e.rating.average]})]})]})]})]})},e.id)})):s?Object(o.jsx)(b,{}):Object(o.jsx)(u,{})})})};var x=function(){return Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(o.jsx)(j.a,{exact:!0,path:"/shows",component:h}),Object(o.jsx)(j.a,{exact:!0,path:"/favorites",component:m})]})};var p=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("div",{className:"app-container",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"tab-content",children:Object(o.jsx)(x,{})})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},S=a(14),g=a(40),T=a(39),w=a(12),N={shows:[],favorites:[],isLoading:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.GET_SHOWS_START:return Object(w.a)(Object(w.a)({},e),{},{isLoading:!0});case O.GET_SHOWS_SUCCESS:var a=t.payload&&t.payload.length>0&&t.payload.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{isFavorite:!1})}));return Object(w.a)(Object(w.a)({},e),{},{shows:a,isLoading:!1});case O.SET_FAVORITE:var c=Object(w.a)(Object(w.a)({},t.payload),{},{isFavorite:!t.payload.isFavorite}),n=e.shows.map((function(e){return e.id===t.payload.id?c:e})),s=function(){return t.payload.isFavorite?e.favorites.filter((function(e){return e.id!==t.payload.id})):[].concat(Object(T.a)(e.favorites),[c])};return Object(w.a)(Object(w.a)({},e),{},{shows:n,favorites:s()});default:return Object(w.a)({},e)}},_=Object(S.c)({shows:E}),y=function(e,t){return _(e,t)},F=a(13),C=a.n(F),R=a(15),k=a(38),A=a.n(k).a.create({baseURL:"https://api.tvmaze.com",timeout:1e4}),G=C.a.mark(L),H=C.a.mark(I),W=C.a.mark(U);function L(){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.get("/shows");case 3:if(!(e=t.sent)||!e.data){t.next=7;break}return t.next=7,Object(R.c)((c=e.data,{type:O.GET_SHOWS_SUCCESS,payload:c}));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(R.c)((a=t.t0,{type:O.GET_SHOWS_FAILURE,payload:a}));case 13:case"end":return t.stop()}var a,c}),G,null,[[0,9]])}function I(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(O.GET_SHOWS_START,L);case 2:case"end":return e.stop()}}),H)}function U(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([Object(R.b)(I)]);case 2:case"end":return e.stop()}}),W)}var z=C.a.mark(V);function V(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([Object(R.b)(U)]);case 2:case"end":return e.stop()}}),z)}var B=Object(g.a)(),J=[B],P=Object(S.e)(y,S.a.apply(void 0,J));B.run(V);var D=P;r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l.a,{store:D,children:Object(o.jsx)(i.a,{children:Object(o.jsx)(p,{})})})}),document.getElementById("root")),f()}},[[75,1,2]]]);
//# sourceMappingURL=main.e5feffe6.chunk.js.map