(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{79895:function(t,e,n){"use strict";var r=n(781253),i=n(722122),o=n(667294),u=(n(45697),n(386010)),s=n(14670),c=o.forwardRef((function(t,e){var n=t.classes,s=t.className,c=t.component,a=void 0===c?"div":c,l=t.square,f=void 0!==l&&l,h=t.elevation,d=void 0===h?1:h,v=t.variant,p=void 0===v?"elevation":v,y=(0,r.Z)(t,["classes","className","component","square","elevation","variant"]);return o.createElement(a,(0,i.Z)({className:(0,u.Z)(n.root,s,"outlined"===p?n.outlined:n["elevation".concat(d)],!f&&n.rounded),ref:e},y))}));e.Z=(0,s.Z)((function(t){var e={};return t.shadows.forEach((function(t,n){e["elevation".concat(n)]={boxShadow:t}})),(0,i.Z)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(c)},725209:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(722122),i=n(667294),o=n(781253),u=(n(45697),n(386010)),s=n(14670),c=n(693871),a=i.forwardRef((function(t,e){var n=t.children,s=t.classes,a=t.className,l=t.color,f=void 0===l?"inherit":l,h=t.component,d=void 0===h?"svg":h,v=t.fontSize,p=void 0===v?"default":v,y=t.htmlColor,m=t.titleAccess,b=t.viewBox,R=void 0===b?"0 0 24 24":b,S=(0,o.Z)(t,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(d,(0,r.Z)({className:(0,u.Z)(s.root,a,"inherit"!==f&&s["color".concat((0,c.Z)(f))],"default"!==p&&s["fontSize".concat((0,c.Z)(p))]),focusable:"false",viewBox:R,color:y,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:e},S),n,m?i.createElement("title",null,m):null)}));a.muiName="SvgIcon";var l=(0,s.Z)((function(t){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:t.typography.pxToRem(24),transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter})},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorAction:{color:t.palette.action.active},colorError:{color:t.palette.error.main},colorDisabled:{color:t.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:t.typography.pxToRem(20)},fontSizeLarge:{fontSize:t.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(a);function f(t,e){var n=function(e,n){return i.createElement(l,(0,r.Z)({ref:n},e),t)};return n.muiName=l.muiName,i.memo(i.forwardRef(n))}},659852:function(t,e,n){"use strict";n.d(e,{j:function(){return u}});var r=n(841788),i=n(452943),o=n(852288),u=new(function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.onSubscribe=function(){this.removeEventListener||this.setDefaultEventListener()},n.setEventListener=function(t){var e=this;this.removeEventListener&&this.removeEventListener(),this.removeEventListener=t((function(t){"boolean"===typeof t?e.setFocused(t):e.onFocus()}))},n.setFocused=function(t){this.focused=t,t&&this.onFocus()},n.onFocus=function(){this.listeners.forEach((function(t){t()}))},n.isFocused=function(){return"boolean"===typeof this.focused?this.focused:"undefined"===typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)},n.setDefaultEventListener=function(){var t;!o.sk&&(null==(t=window)?void 0:t.addEventListener)&&this.setEventListener((function(t){return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),function(){window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}))},e}(i.l))},846747:function(t,e,n){"use strict";var r=n(186755);n.o(r,"QueryClientProvider")&&n.d(e,{QueryClientProvider:function(){return r.QueryClientProvider}}),n.o(r,"useMutation")&&n.d(e,{useMutation:function(){return r.useMutation}}),n.o(r,"useQuery")&&n.d(e,{useQuery:function(){return r.useQuery}})},541909:function(t,e,n){"use strict";n.d(e,{j:function(){return o},E:function(){return u}});var r=n(852288),i=console||{error:r.ZT,warn:r.ZT,log:r.ZT};function o(){return i}function u(t){i=t}},981262:function(t,e,n){"use strict";n.d(e,{m:function(){return c},R:function(){return a}});var r=n(722122),i=n(541909),o=n(100101),u=n(121216),s=n(852288),c=function(){function t(t){this.options=(0,r.Z)({},t.defaultOptions,t.options),this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.observers=[],this.state=t.state||a()}var e=t.prototype;return e.setState=function(t){this.dispatch({type:"setState",state:t})},e.addObserver=function(t){-1===this.observers.indexOf(t)&&this.observers.push(t)},e.removeObserver=function(t){this.observers=this.observers.filter((function(e){return e!==t}))},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(s.ZT).catch(s.ZT)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var t,e=this,n="loading"===this.state.status,r=Promise.resolve();return n||(this.dispatch({type:"loading",variables:this.options.variables}),r=r.then((function(){return null==e.options.onMutate?void 0:e.options.onMutate(e.state.variables)})).then((function(t){t!==e.state.context&&e.dispatch({type:"loading",context:t,variables:e.state.variables})}))),r.then((function(){return e.executeMutation()})).then((function(e){t=e})).then((function(){return null==e.options.onSuccess?void 0:e.options.onSuccess(t,e.state.variables,e.state.context)})).then((function(){return null==e.options.onSettled?void 0:e.options.onSettled(t,null,e.state.variables,e.state.context)})).then((function(){return e.dispatch({type:"success",data:t}),t})).catch((function(t){return e.mutationCache.config.onError&&e.mutationCache.config.onError(t,e.state.variables,e.state.context,e),(0,i.j)().error(t),Promise.resolve().then((function(){return null==e.options.onError?void 0:e.options.onError(t,e.state.variables,e.state.context)})).then((function(){return null==e.options.onSettled?void 0:e.options.onSettled(void 0,t,e.state.variables,e.state.context)})).then((function(){throw e.dispatch({type:"error",error:t}),t}))}))},e.executeMutation=function(){var t,e=this;return this.retryer=new u.m4({fn:function(){return e.options.mutationFn?e.options.mutationFn(e.state.variables):Promise.reject("No mutationFn found")},onFail:function(){e.dispatch({type:"failed"})},onPause:function(){e.dispatch({type:"pause"})},onContinue:function(){e.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(t){var e=this;this.state=function(t,e){switch(e.type){case"failed":return(0,r.Z)({},t,{failureCount:t.failureCount+1});case"pause":return(0,r.Z)({},t,{isPaused:!0});case"continue":return(0,r.Z)({},t,{isPaused:!1});case"loading":return(0,r.Z)({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return(0,r.Z)({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return(0,r.Z)({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return(0,r.Z)({},t,e.state);default:return t}}(this.state,t),o.V.batch((function(){e.observers.forEach((function(e){e.onMutationUpdate(t)})),e.mutationCache.notify(e)}))},t}();function a(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}},100101:function(t,e,n){"use strict";n.d(e,{V:function(){return i}});var r=n(852288),i=new(function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(t){t()},this.batchNotifyFn=function(t){t()}}var e=t.prototype;return e.batch=function(t){this.transactions++;var e=t();return this.transactions--,this.transactions||this.flush(),e},e.schedule=function(t){var e=this;this.transactions?this.queue.push(t):(0,r.A4)((function(){e.notifyFn(t)}))},e.batchCalls=function(t){var e=this;return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.schedule((function(){t.apply(void 0,r)}))}},e.flush=function(){var t=this,e=this.queue;this.queue=[],e.length&&(0,r.A4)((function(){t.batchNotifyFn((function(){e.forEach((function(e){t.notifyFn(e)}))}))}))},e.setNotifyFunction=function(t){this.notifyFn=t},e.setBatchNotifyFunction=function(t){this.batchNotifyFn=t},t}())},840068:function(t,e,n){"use strict";n.d(e,{N:function(){return u}});var r=n(841788),i=n(452943),o=n(852288),u=new(function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.onSubscribe=function(){this.removeEventListener||this.setDefaultEventListener()},n.setEventListener=function(t){var e=this;this.removeEventListener&&this.removeEventListener(),this.removeEventListener=t((function(t){"boolean"===typeof t?e.setOnline(t):e.onOnline()}))},n.setOnline=function(t){this.online=t,t&&this.onOnline()},n.onOnline=function(){this.listeners.forEach((function(t){t()}))},n.isOnline=function(){return"boolean"===typeof this.online?this.online:"undefined"===typeof navigator||"undefined"===typeof navigator.onLine||navigator.onLine},n.setDefaultEventListener=function(){var t;!o.sk&&(null==(t=window)?void 0:t.addEventListener)&&this.setEventListener((function(t){return window.addEventListener("online",t,!1),window.addEventListener("offline",t,!1),function(){window.removeEventListener("online",t),window.removeEventListener("offline",t)}}))},e}(i.l))},121216:function(t,e,n){"use strict";n.d(e,{LE:function(){return s},DV:function(){return a},m4:function(){return l}});var r=n(659852),i=n(840068),o=n(852288);function u(t){return Math.min(1e3*Math.pow(2,t),3e4)}function s(t){return"function"===typeof(null==t?void 0:t.cancel)}var c=function(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent};function a(t){return t instanceof c}var l=function(t){var e,n,a,l,f=this,h=!1;this.cancel=function(t){return null==e?void 0:e(t)},this.cancelRetry=function(){h=!0},this.continue=function(){return null==n?void 0:n()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise((function(t,e){a=t,l=e}));var d=function(e){f.isResolved||(f.isResolved=!0,null==t.onSuccess||t.onSuccess(e),null==n||n(),a(e))},v=function(e){f.isResolved||(f.isResolved=!0,null==t.onError||t.onError(e),null==n||n(),l(e))};!function a(){if(!f.isResolved){var l;try{l=t.fn()}catch(p){l=Promise.reject(p)}e=function(t){if(!f.isResolved&&(v(new c(t)),s(l)))try{l.cancel()}catch(e){}},f.isTransportCancelable=s(l),Promise.resolve(l).then(d).catch((function(e){var s,c;if(!f.isResolved){var l=null!=(s=t.retry)?s:3,d=null!=(c=t.retryDelay)?c:u,p="function"===typeof d?d(f.failureCount,e):d,y=!0===l||"number"===typeof l&&f.failureCount<l||"function"===typeof l&&l(f.failureCount,e);!h&&y?(f.failureCount++,null==t.onFail||t.onFail(f.failureCount,e),(0,o.Gh)(p).then((function(){if(!r.j.isFocused()||!i.N.isOnline())return new Promise((function(e){n=e,f.isPaused=!0,null==t.onPause||t.onPause()})).then((function(){n=void 0,f.isPaused=!1,null==t.onContinue||t.onContinue()}))})).then((function(){h?v(e):a()}))):v(e)}}))}}()}},452943:function(t,e,n){"use strict";n.d(e,{l:function(){return r}});var r=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(t){var e=this,n=t||function(){};return this.listeners.push(n),this.onSubscribe(),function(){e.listeners=e.listeners.filter((function(t){return t!==n})),e.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}()},186755:function(){},852288:function(t,e,n){"use strict";n.d(e,{sk:function(){return i},ZT:function(){return o},SE:function(){return u},PN:function(){return s},rY:function(){return c},Kp:function(){return a},_v:function(){return l},lV:function(){return f},I6:function(){return h},_x:function(){return d},X7:function(){return v},Rm:function(){return p},yF:function(){return y},to:function(){return m},Q$:function(){return R},VS:function(){return S},Gh:function(){return O},A4:function(){return g}});var r=n(722122),i="undefined"===typeof window;function o(){}function u(t,e){return"function"===typeof t?t(e):t}function s(t){return"number"===typeof t&&t>=0&&t!==1/0}function c(t){return Array.isArray(t)?t:[t]}function a(t,e){return Math.max(t+(e||0)-Date.now(),0)}function l(t,e,n){return C(t)?"function"===typeof e?(0,r.Z)({},n,{queryKey:t,queryFn:e}):(0,r.Z)({},e,{queryKey:t}):t}function f(t,e,n){return C(t)?"function"===typeof e?(0,r.Z)({},n,{mutationKey:t,mutationFn:e}):(0,r.Z)({},e,{mutationKey:t}):"function"===typeof t?(0,r.Z)({},e,{mutationFn:t}):(0,r.Z)({},t)}function h(t,e,n){return C(t)?[(0,r.Z)({},e,{queryKey:t}),n]:[t||{},e]}function d(t,e){var n,r=t.active,i=t.exact,o=t.fetching,u=t.inactive,s=t.predicate,c=t.queryKey,a=t.stale;if(C(c))if(i){if(e.queryHash!==p(c,e.options))return!1}else if(!m(e.queryKey,c))return!1;return!1===u||r&&!u?n=!0:(!1===r||u&&!r)&&(n=!1),("boolean"!==typeof n||e.isActive()===n)&&(("boolean"!==typeof a||e.isStale()===a)&&(("boolean"!==typeof o||e.isFetching()===o)&&!(s&&!s(e))))}function v(t,e){var n=t.exact,r=t.fetching,i=t.predicate,o=t.mutationKey;if(C(o)){if(!e.options.mutationKey)return!1;if(n){if(y(e.options.mutationKey)!==y(o))return!1}else if(!m(e.options.mutationKey,o))return!1}return("boolean"!==typeof r||"loading"===e.state.status===r)&&!(i&&!i(e))}function p(t,e){return((null==e?void 0:e.queryKeyHashFn)||y)(t)}function y(t){var e,n=Array.isArray(t)?t:[t];return e=n,JSON.stringify(e,(function(t,e){return E(e)?Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t}),{}):e}))}function m(t,e){return b(c(t),c(e))}function b(t,e){return t===e||typeof t===typeof e&&(!(!t||!e||"object"!==typeof t||"object"!==typeof e)&&!Object.keys(e).some((function(n){return!b(t[n],e[n])})))}function R(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||E(t)&&E(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),o=i.length,u=n?[]:{},s=0,c=0;c<o;c++){var a=n?c:i[c];u[a]=R(t[a],e[a]),u[a]===t[a]&&s++}return r===o&&s===r?t:u}return e}function S(t,e){if(t&&!e||e&&!t)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}function E(t){if(!w(t))return!1;var e=t.constructor;if("undefined"===typeof e)return!0;var n=e.prototype;return!!w(n)&&!!n.hasOwnProperty("isPrototypeOf")}function w(t){return"[object Object]"===Object.prototype.toString.call(t)}function C(t){return"string"===typeof t||Array.isArray(t)}function O(t){return new Promise((function(e){setTimeout(e,t)}))}function g(t){Promise.resolve().then(t).catch((function(t){return setTimeout((function(){throw t}))}))}},388767:function(t,e,n){"use strict";n.d(e,{QueryClientProvider:function(){return i.aH},useMutation:function(){return i.Db},useQuery:function(){return i.aM}});var r=n(846747);n.o(r,"QueryClientProvider")&&n.d(e,{QueryClientProvider:function(){return r.QueryClientProvider}}),n.o(r,"useMutation")&&n.d(e,{useMutation:function(){return r.useMutation}}),n.o(r,"useQuery")&&n.d(e,{useQuery:function(){return r.useQuery}});var i=n(991938)},991938:function(t,e,n){"use strict";n.d(e,{aH:function(){return h},Db:function(){return R},aM:function(){return P}});var r=n(100101),i=n(973935).unstable_batchedUpdates;r.V.setBatchNotifyFunction(i);var o=n(541909),u=console;u&&(0,o.E)(u);var s=n(667294),c=s.createContext(void 0),a=s.createContext(!1);function l(t){return t&&"undefined"!==typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=c),window.ReactQueryClientContext):c}var f=function(){var t=s.useContext(l(s.useContext(a)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},h=function(t){var e=t.client,n=t.contextSharing,r=void 0!==n&&n,i=t.children;s.useEffect((function(){return e.mount(),function(){e.unmount()}}),[e]);var o=l(r);return s.createElement(a.Provider,{value:r},s.createElement(o.Provider,{value:e},i))},d=n(722122),v=n(852288),p=n(841788),y=n(981262),m=n(452943),b=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}(0,p.Z)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,(0,d.Z)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:(0,y.R)();this.currentResult=(0,d.Z)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;r.V.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(m.l);function R(t,e,n){var i=s.useRef(!1),o=s.useState(0)[1],u=(0,v.lV)(t,e,n),c=f(),a=s.useRef();a.current?a.current.setOptions(u):a.current=new b(c,u);var l=a.current.getCurrentResult();s.useEffect((function(){i.current=!0;var t=a.current.subscribe(r.V.batchCalls((function(){i.current&&o((function(t){return t+1}))})));return function(){i.current=!1,t()}}),[]);var h=s.useCallback((function(t,e){a.current.mutate(t,e).catch(v.ZT)}),[]);if(l.error&&a.current.options.useErrorBoundary)throw l.error;return(0,d.Z)({},l,{mutate:h,mutateAsync:l.mutate})}var S=n(659852),E=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.options=n,r.trackedProps=[],r.previousSelectError=null,r.bindMethods(),r.setOptions(n),r}(0,p.Z)(e,t);var n=e.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),w(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&O(t,e));var t,e},n.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&O(t,e));var t,e},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(t,e){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var i=this.hasListeners();i&&C(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,e);return this.createResult(n,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(t){var e=this,n={};return Object.keys(t).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return e.trackedProps.includes(n)||e.trackedProps.push(n),t[n]}})})),n},n.getNextResult=function(t){var e=this;return new Promise((function(n,r){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?r(e.error):n(e))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(t){return this.fetch(t)},n.fetchOptimistic=function(t){var e=this,n=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return e.createResult(r,n)}))},n.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},n.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(v.ZT)),e},n.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!v.sk&&!this.currentResult.isStale&&(0,v.PN)(this.options.staleTime)){var e=(0,v.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},n.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!v.sk&&!1!==this.options.enabled&&(0,v.PN)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||S.j.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(t,e){var n,r,i=this.currentQuery,u=this.options,s=this.currentResult,c=this.currentResultState,a=this.currentResultOptions,l=t!==i,f=l?t.state:this.currentQueryInitialState,h=l?this.currentResult:this.previousQueryResult,d=t.state,p=d.dataUpdatedAt,y=d.error,m=d.errorUpdatedAt,b=d.isFetching,R=d.status,S=!1,E=!1;if(e.optimisticResults){var g=this.hasListeners(),Q=!g&&w(t,e),x=g&&C(t,i,e,u);(Q||x)&&(b=!0,p||(R="loading"))}if(e.keepPreviousData&&!d.dataUpdateCount&&(null==h?void 0:h.isSuccess)&&"error"!==R)n=h.data,p=h.dataUpdatedAt,R=h.status,S=!0;else if(e.select&&"undefined"!==typeof d.data)if(s&&d.data===(null==c?void 0:c.data)&&e.select===(null==a?void 0:a.select)&&!this.previousSelectError)n=s.data;else try{n=e.select(d.data),!1!==e.structuralSharing&&(n=(0,v.Q$)(null==s?void 0:s.data,n)),this.previousSelectError=null}catch(P){(0,o.j)().error(P),y=P,this.previousSelectError=P,m=Date.now(),R="error"}else n=d.data;"undefined"!==typeof e.placeholderData&&"undefined"===typeof n&&"loading"===R&&("undefined"!==typeof(r=(null==s?void 0:s.isPlaceholderData)&&e.placeholderData===(null==a?void 0:a.placeholderData)?s.data:"function"===typeof e.placeholderData?e.placeholderData():e.placeholderData)&&(R="success",n=r,E=!0));return{status:R,isLoading:"loading"===R,isSuccess:"success"===R,isError:"error"===R,isIdle:"idle"===R,data:n,dataUpdatedAt:p,error:y,errorUpdatedAt:m,failureCount:d.fetchFailureCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>f.dataUpdateCount||d.errorUpdateCount>f.errorUpdateCount,isFetching:b,isLoadingError:"error"===R&&0===d.dataUpdatedAt,isPlaceholderData:E,isPreviousData:S,isRefetchError:"error"===R&&0!==d.dataUpdatedAt,isStale:O(t,e),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var n=this.options,r=n.notifyOnChangeProps,i=n.notifyOnChangePropsExclusions;if(!r&&!i)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var o="tracked"===r?this.trackedProps:r;return Object.keys(t).some((function(n){var r=n,u=t[r]!==e[r],s=null==o?void 0:o.some((function(t){return t===n})),c=null==i?void 0:i.some((function(t){return t===n}));return u&&!c&&(!o||s)}))},n.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!(0,v.VS)(this.currentResult,e)){var n={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(n.listeners=!0),this.notify((0,d.Z)({},n,t))}},n.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},n.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(t){var e=this;r.V.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(m.l);function w(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&O(t,e))}(t,e)}function C(t,e,n,r){return!1!==n.enabled&&(t!==e||!1===r.enabled)&&O(t,n)}function O(t,e){return t.isStaleByTime(e.staleTime)}function g(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var Q=s.createContext(g());function x(t,e){var n=s.useRef(!1),i=s.useState(0)[1],o=f(),u=s.useContext(Q),c=o.defaultQueryObserverOptions(t);c.optimisticResults=!0,c.onError&&(c.onError=r.V.batchCalls(c.onError)),c.onSuccess&&(c.onSuccess=r.V.batchCalls(c.onSuccess)),c.onSettled&&(c.onSettled=r.V.batchCalls(c.onSettled)),c.suspense&&"number"!==typeof c.staleTime&&(c.staleTime=1e3),(c.suspense||c.useErrorBoundary)&&(u.isReset()||(c.retryOnMount=!1));var a=s.useRef();a.current||(a.current=new e(o,c));var l=a.current.getOptimisticResult(c);if(s.useEffect((function(){n.current=!0,u.clearReset();var t=a.current.subscribe(r.V.batchCalls((function(){n.current&&i((function(t){return t+1}))})));return a.current.updateResult(),function(){n.current=!1,t()}}),[u]),s.useEffect((function(){a.current.setOptions(c,{listeners:!1})}),[c]),c.suspense&&l.isLoading)throw a.current.fetchOptimistic(c).then((function(t){var e=t.data;null==c.onSuccess||c.onSuccess(e),null==c.onSettled||c.onSettled(e,null)})).catch((function(t){u.clearReset(),null==c.onError||c.onError(t),null==c.onSettled||c.onSettled(void 0,t)}));if((c.suspense||c.useErrorBoundary)&&l.isError)throw l.error;return"tracked"===c.notifyOnChangeProps&&(l=a.current.trackResult(l)),l}function P(t,e,n){return x((0,v._v)(t,e,n),E)}}}]);