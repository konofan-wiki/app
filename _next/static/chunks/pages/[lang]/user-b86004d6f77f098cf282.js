(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{418463:function(e,t,r){"use strict";var n=r(722122),a=r(781253),o=r(667294),c=(r(45697),r(386010)),s=r(79895),i=r(14670),u=o.forwardRef((function(e,t){var r=e.classes,i=e.className,u=e.raised,l=void 0!==u&&u,p=(0,a.Z)(e,["classes","className","raised"]);return o.createElement(s.Z,(0,n.Z)({className:(0,c.Z)(r.root,i),elevation:l?8:1,ref:t},p))}));t.Z=(0,i.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},79895:function(e,t,r){"use strict";var n=r(781253),a=r(722122),o=r(667294),c=(r(45697),r(386010)),s=r(14670),i=o.forwardRef((function(e,t){var r=e.classes,s=e.className,i=e.component,u=void 0===i?"div":i,l=e.square,p=void 0!==l&&l,d=e.elevation,f=void 0===d?1:d,g=e.variant,b=void 0===g?"elevation":g,y=(0,n.Z)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(u,(0,a.Z)({className:(0,c.Z)(r.root,s,"outlined"===b?r.outlined:r["elevation".concat(f)],!p&&r.rounded),ref:t},y))}));t.Z=(0,s.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,a.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(i)},885515:function(e,t,r){"use strict";var n=r(785893),a=r(896156),o=r(781253),c=r(811163),s=r(390044);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.keyField,r=e.data,a=e.paginationDefaultPage,i=e.expandableRowExpanded,l=(0,o.Z)(e,["keyField","data","paginationDefaultPage","expandableRowExpanded"]),p=(0,c.useRouter)(),d=p.query,f=p.push,g=p.route,b=function(e){for(var t=d,r=0,n=Object.keys(e);r<n.length;r++){var a=n[r];e[a]?t[a]=e[a]:delete t[a]}f("".concat(g,"?").concat(Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&")),null,{shallow:!0})},y=r.map((function(e,t){return u(u({},e),{},{__id:t})}));return(0,n.jsx)(s.ZP,u({pagination:!0,expandableRowExpanded:i||function(e){return"string"===typeof d.row&&e.__id===parseInt(d.row)},paginationDefaultPage:a||("string"===typeof d.page&&y.length>0?parseInt(d.page):1),onRowExpandToggled:function(e,t){b({row:e?t.__id:null})},keyField:t,dense:!1,customStyles:{header:{style:{backgroundColor:"transparent"}},table:{style:{backgroundColor:"transparent"}},cells:{style:{backgroundColor:"transparent"}},tableWrapper:{style:{backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"},highlightOnHoverStyle:{backgroundColor:"#ffffff85"},stripedStyle:{backgroundColor:"#fafafa5c"}},contextMenu:{style:{backgroundColor:"transparent"},activeStyle:{backgroundColor:"#ffffff85"}},subHeader:{style:{backgroundColor:"transparent"}},pagination:{style:{backgroundColor:"transparent"}},head:{style:{backgroundColor:"transparent"}},headRow:{style:{backgroundColor:"transparent"}},expanderButton:{style:{backgroundColor:"transparent"}},expanderRow:{style:{backgroundColor:"#ffffff85"}},noData:{style:{backgroundColor:"#ffffff85"}},headCells:{style:{backgroundColor:"transparent"}},progress:{style:{backgroundColor:"transparent"}}},onSort:function(e,t){b({sort:"".concat(e.name,":").concat(t)})},striped:!0,onChangePage:function(e,t){y.length>0&&b({page:e})},onChangeRowsPerPage:function(e,t){b({page:t,rowsPerPage:e})},paginationRowsPerPageOptions:[20],paginationPerPage:20,data:y},l))}},271268:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h}});var n=r(785893),a=r(896156),o=r(887757),c=r.n(o),s=r(692137),i=r(418463),u=r(409669),l=r.n(u),p=r(667294),d=r(672679),f=r(388767),g=r(885515),b=r(126464);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=!0;t.default=function(){var e=(0,p.useState)({skip:0}),t=e[0],r=e[1],a=(0,b.Z)(),o=(0,f.useQuery)("users-".concat(t.skip),(0,s.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("https://test-vercel-thainq3127.vercel.app/api/user?skip=".concat(t.skip));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))),u=o.data,d=o.isLoading,y=(0,f.useQuery)("count",(0,s.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("https://test-vercel-thainq3127.vercel.app/api/user?count=true");case 2:return t=e.sent,r=t.data,e.abrupt("return",parseInt(r.count));case 5:case"end":return e.stop()}}),e)})))).data;return(0,n.jsx)(i.Z,{style:{height:"100%",width:"100%"},children:(0,n.jsx)(g.Z,{title:"Top 1000 Ranking",columns:w,data:u||[],progressPending:d,onRowClicked:function(e){return a.push("/user/detail?id=".concat(e._id))},pagination:!0,subHeader:!0,pointerOnHover:!0,highlightOnHover:!0,paginationServer:!0,paginationRowsPerPageOptions:[10],onChangePage:function(e){return r(v(v({},t),{},{skip:10*(e-1)}))},paginationTotalRows:y,paginationPerPage:10})})};var w=[{name:"Rank",selector:"rank",center:!0,width:"100px"},{selector:"icon",name:"Avatar",width:"80px",center:!0,hide:"sm",cell:function(e){return e.icon>0?(0,n.jsx)(d.LazyLoadImage,{src:r(664391)("./".concat(e.icon,".png")),width:"80",height:"80",effect:"opacity"}):(0,n.jsx)("div",{})}},{name:"Name",selector:"name"}]},163394:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/user",function(){return r(271268)}])}},function(e){e.O(0,[774,431,433,679,185,767,269,225],(function(){return t=163394,e(e.s=t);var t}));var t=e.O();_N_E=t}]);