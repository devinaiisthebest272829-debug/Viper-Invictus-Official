function pb(n,r){for(var i=0;i<r.length;i++){const s=r[i];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in n)){const d=Object.getOwnPropertyDescriptor(s,c);d&&Object.defineProperty(n,c,d.get?d:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function H0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vu={exports:{}},Wl={};var bp;function gb(){if(bp)return Wl;bp=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(s,c,d){var m=null;if(d!==void 0&&(m=""+d),c.key!==void 0&&(m=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:n,type:s,key:m,ref:c!==void 0?c:null,props:d}}return Wl.Fragment=r,Wl.jsx=i,Wl.jsxs=i,Wl}var wp;function xb(){return wp||(wp=1,vu.exports=gb()),vu.exports}var h=xb(),bu={exports:{}},Xl={},wu={exports:{}},Su={};var Sp;function yb(){return Sp||(Sp=1,(function(n){function r(M,W){var J=M.length;M.push(W);e:for(;0<J;){var pe=J-1>>>1,w=M[pe];if(0<c(w,W))M[pe]=W,M[J]=w,J=pe;else break e}}function i(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var W=M[0],J=M.pop();if(J!==W){M[0]=J;e:for(var pe=0,w=M.length,B=w>>>1;pe<B;){var Z=2*(pe+1)-1,te=M[Z],oe=Z+1,ie=M[oe];if(0>c(te,J))oe<w&&0>c(ie,te)?(M[pe]=ie,M[oe]=J,pe=oe):(M[pe]=te,M[Z]=J,pe=Z);else if(oe<w&&0>c(ie,J))M[pe]=ie,M[oe]=J,pe=oe;else break e}}return W}function c(M,W){var J=M.sortIndex-W.sortIndex;return J!==0?J:M.id-W.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var m=Date,p=m.now();n.unstable_now=function(){return m.now()-p}}var x=[],f=[],g=1,v=null,j=3,C=!1,E=!1,R=!1,k=!1,H=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function Q(M){for(var W=i(f);W!==null;){if(W.callback===null)s(f);else if(W.startTime<=M)s(f),W.sortIndex=W.expirationTime,r(x,W);else break;W=i(f)}}function V(M){if(R=!1,Q(M),!E)if(i(x)!==null)E=!0,F||(F=!0,ge());else{var W=i(f);W!==null&&ae(V,W.startTime-M)}}var F=!1,ee=-1,P=5,re=-1;function le(){return k?!0:!(n.unstable_now()-re<P)}function ve(){if(k=!1,F){var M=n.unstable_now();re=M;var W=!0;try{e:{E=!1,R&&(R=!1,q(ee),ee=-1),C=!0;var J=j;try{t:{for(Q(M),v=i(x);v!==null&&!(v.expirationTime>M&&le());){var pe=v.callback;if(typeof pe=="function"){v.callback=null,j=v.priorityLevel;var w=pe(v.expirationTime<=M);if(M=n.unstable_now(),typeof w=="function"){v.callback=w,Q(M),W=!0;break t}v===i(x)&&s(x),Q(M)}else s(x);v=i(x)}if(v!==null)W=!0;else{var B=i(f);B!==null&&ae(V,B.startTime-M),W=!1}}break e}finally{v=null,j=J,C=!1}W=void 0}}finally{W?ge():F=!1}}}var ge;if(typeof $=="function")ge=function(){$(ve)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,K=fe.port2;fe.port1.onmessage=ve,ge=function(){K.postMessage(null)}}else ge=function(){H(ve,0)};function ae(M,W){ee=H(function(){M(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(M){M.callback=null},n.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<M?Math.floor(1e3/M):5},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_next=function(M){switch(j){case 1:case 2:case 3:var W=3;break;default:W=j}var J=j;j=W;try{return M()}finally{j=J}},n.unstable_requestPaint=function(){k=!0},n.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var J=j;j=M;try{return W()}finally{j=J}},n.unstable_scheduleCallback=function(M,W,J){var pe=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,M){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=J+w,M={id:g++,callback:W,priorityLevel:M,startTime:J,expirationTime:w,sortIndex:-1},J>pe?(M.sortIndex=J,r(f,M),i(x)===null&&M===i(f)&&(R?(q(ee),ee=-1):R=!0,ae(V,J-pe))):(M.sortIndex=w,r(x,M),E||C||(E=!0,F||(F=!0,ge()))),M},n.unstable_shouldYield=le,n.unstable_wrapCallback=function(M){var W=j;return function(){var J=j;j=W;try{return M.apply(this,arguments)}finally{j=J}}}})(Su)),Su}var Np;function vb(){return Np||(Np=1,wu.exports=yb()),wu.exports}var Nu={exports:{}},Ce={};var jp;function bb(){if(jp)return Ce;jp=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function j(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function k(w,B,Z){this.props=w,this.context=B,this.refs=R,this.updater=Z||C}k.prototype.isReactComponent={},k.prototype.setState=function(w,B){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,B,"setState")},k.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function H(){}H.prototype=k.prototype;function q(w,B,Z){this.props=w,this.context=B,this.refs=R,this.updater=Z||C}var $=q.prototype=new H;$.constructor=q,E($,k.prototype),$.isPureReactComponent=!0;var Q=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function ee(w,B,Z,te,oe,ie){return Z=ie.ref,{$$typeof:n,type:w,key:B,ref:Z!==void 0?Z:null,props:ie}}function P(w,B){return ee(w.type,B,void 0,void 0,void 0,w.props)}function re(w){return typeof w=="object"&&w!==null&&w.$$typeof===n}function le(w){var B={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Z){return B[Z]})}var ve=/\/+/g;function ge(w,B){return typeof w=="object"&&w!==null&&w.key!=null?le(""+w.key):B.toString(36)}function fe(){}function K(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(fe,fe):(w.status="pending",w.then(function(B){w.status==="pending"&&(w.status="fulfilled",w.value=B)},function(B){w.status==="pending"&&(w.status="rejected",w.reason=B)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function ae(w,B,Z,te,oe){var ie=typeof w;(ie==="undefined"||ie==="boolean")&&(w=null);var ce=!1;if(w===null)ce=!0;else switch(ie){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(w.$$typeof){case n:case r:ce=!0;break;case g:return ce=w._init,ae(ce(w._payload),B,Z,te,oe)}}if(ce)return oe=oe(w),ce=te===""?"."+ge(w,0):te,Q(oe)?(Z="",ce!=null&&(Z=ce.replace(ve,"$&/")+"/"),ae(oe,B,Z,"",function(Ue){return Ue})):oe!=null&&(re(oe)&&(oe=P(oe,Z+(oe.key==null||w&&w.key===oe.key?"":(""+oe.key).replace(ve,"$&/")+"/")+ce)),B.push(oe)),1;ce=0;var Pe=te===""?".":te+":";if(Q(w))for(var ze=0;ze<w.length;ze++)te=w[ze],ie=Pe+ge(te,ze),ce+=ae(te,B,Z,ie,oe);else if(ze=j(w),typeof ze=="function")for(w=ze.call(w),ze=0;!(te=w.next()).done;)te=te.value,ie=Pe+ge(te,ze++),ce+=ae(te,B,Z,ie,oe);else if(ie==="object"){if(typeof w.then=="function")return ae(K(w),B,Z,te,oe);throw B=String(w),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ce}function M(w,B,Z){if(w==null)return w;var te=[],oe=0;return ae(w,te,"","",function(ie){return B.call(Z,ie,oe++)}),te}function W(w){if(w._status===-1){var B=w._result;B=B(),B.then(function(Z){(w._status===0||w._status===-1)&&(w._status=1,w._result=Z)},function(Z){(w._status===0||w._status===-1)&&(w._status=2,w._result=Z)}),w._status===-1&&(w._status=0,w._result=B)}if(w._status===1)return w._result.default;throw w._result}var J=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function pe(){}return Ce.Children={map:M,forEach:function(w,B,Z){M(w,function(){B.apply(this,arguments)},Z)},count:function(w){var B=0;return M(w,function(){B++}),B},toArray:function(w){return M(w,function(B){return B})||[]},only:function(w){if(!re(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Ce.Component=k,Ce.Fragment=i,Ce.Profiler=c,Ce.PureComponent=q,Ce.StrictMode=s,Ce.Suspense=x,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(w){return V.H.useMemoCache(w)}},Ce.cache=function(w){return function(){return w.apply(null,arguments)}},Ce.cloneElement=function(w,B,Z){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var te=E({},w.props),oe=w.key,ie=void 0;if(B!=null)for(ce in B.ref!==void 0&&(ie=void 0),B.key!==void 0&&(oe=""+B.key),B)!F.call(B,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&B.ref===void 0||(te[ce]=B[ce]);var ce=arguments.length-2;if(ce===1)te.children=Z;else if(1<ce){for(var Pe=Array(ce),ze=0;ze<ce;ze++)Pe[ze]=arguments[ze+2];te.children=Pe}return ee(w.type,oe,void 0,void 0,ie,te)},Ce.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},Ce.createElement=function(w,B,Z){var te,oe={},ie=null;if(B!=null)for(te in B.key!==void 0&&(ie=""+B.key),B)F.call(B,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(oe[te]=B[te]);var ce=arguments.length-2;if(ce===1)oe.children=Z;else if(1<ce){for(var Pe=Array(ce),ze=0;ze<ce;ze++)Pe[ze]=arguments[ze+2];oe.children=Pe}if(w&&w.defaultProps)for(te in ce=w.defaultProps,ce)oe[te]===void 0&&(oe[te]=ce[te]);return ee(w,ie,void 0,void 0,null,oe)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(w){return{$$typeof:p,render:w}},Ce.isValidElement=re,Ce.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:W}},Ce.memo=function(w,B){return{$$typeof:f,type:w,compare:B===void 0?null:B}},Ce.startTransition=function(w){var B=V.T,Z={};V.T=Z;try{var te=w(),oe=V.S;oe!==null&&oe(Z,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(pe,J)}catch(ie){J(ie)}finally{V.T=B}},Ce.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Ce.use=function(w){return V.H.use(w)},Ce.useActionState=function(w,B,Z){return V.H.useActionState(w,B,Z)},Ce.useCallback=function(w,B){return V.H.useCallback(w,B)},Ce.useContext=function(w){return V.H.useContext(w)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(w,B){return V.H.useDeferredValue(w,B)},Ce.useEffect=function(w,B,Z){var te=V.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(w,B)},Ce.useId=function(){return V.H.useId()},Ce.useImperativeHandle=function(w,B,Z){return V.H.useImperativeHandle(w,B,Z)},Ce.useInsertionEffect=function(w,B){return V.H.useInsertionEffect(w,B)},Ce.useLayoutEffect=function(w,B){return V.H.useLayoutEffect(w,B)},Ce.useMemo=function(w,B){return V.H.useMemo(w,B)},Ce.useOptimistic=function(w,B){return V.H.useOptimistic(w,B)},Ce.useReducer=function(w,B,Z){return V.H.useReducer(w,B,Z)},Ce.useRef=function(w){return V.H.useRef(w)},Ce.useState=function(w){return V.H.useState(w)},Ce.useSyncExternalStore=function(w,B,Z){return V.H.useSyncExternalStore(w,B,Z)},Ce.useTransition=function(){return V.H.useTransition()},Ce.version="19.1.0",Ce}var Cp;function $i(){return Cp||(Cp=1,Nu.exports=bb()),Nu.exports}var ju={exports:{}},St={};var Ep;function wb(){if(Ep)return St;Ep=1;var n=$i();function r(x){var f="https://react.dev/errors/"+x;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)f+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+x+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(x,f,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:x,containerInfo:f,implementation:g}}var m=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,f){if(x==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,St.createPortal=function(x,f){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(r(299));return d(x,f,null,g)},St.flushSync=function(x){var f=m.T,g=s.p;try{if(m.T=null,s.p=2,x)return x()}finally{m.T=f,s.p=g,s.d.f()}},St.preconnect=function(x,f){typeof x=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,s.d.C(x,f))},St.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},St.preinit=function(x,f){if(typeof x=="string"&&f&&typeof f.as=="string"){var g=f.as,v=p(g,f.crossOrigin),j=typeof f.integrity=="string"?f.integrity:void 0,C=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;g==="style"?s.d.S(x,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:v,integrity:j,fetchPriority:C}):g==="script"&&s.d.X(x,{crossOrigin:v,integrity:j,fetchPriority:C,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},St.preinitModule=function(x,f){if(typeof x=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var g=p(f.as,f.crossOrigin);s.d.M(x,{crossOrigin:g,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&s.d.M(x)},St.preload=function(x,f){if(typeof x=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var g=f.as,v=p(g,f.crossOrigin);s.d.L(x,g,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},St.preloadModule=function(x,f){if(typeof x=="string")if(f){var g=p(f.as,f.crossOrigin);s.d.m(x,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:g,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else s.d.m(x)},St.requestFormReset=function(x){s.d.r(x)},St.unstable_batchedUpdates=function(x,f){return x(f)},St.useFormState=function(x,f,g){return m.H.useFormState(x,f,g)},St.useFormStatus=function(){return m.H.useHostTransitionStatus()},St.version="19.1.0",St}var Ap;function B0(){if(Ap)return ju.exports;Ap=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),ju.exports=wb(),ju.exports}var Rp;function Sb(){if(Rp)return Xl;Rp=1;var n=vb(),r=$i(),i=B0();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(s(188))}function x(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var o=a.return;if(o===null)break;var u=o.alternate;if(u===null){if(l=o.return,l!==null){a=l;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===a)return p(o),e;if(u===l)return p(o),t;u=u.sibling}throw Error(s(188))}if(a.return!==l.return)a=o,l=u;else{for(var y=!1,b=o.child;b;){if(b===a){y=!0,a=o,l=u;break}if(b===l){y=!0,l=o,a=u;break}b=b.sibling}if(!y){for(b=u.child;b;){if(b===a){y=!0,a=u,l=o;break}if(b===l){y=!0,l=u,a=o;break}b=b.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),$=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case k:return"Profiler";case R:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case $:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:K(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return K(e(t))}catch{}}return null}var ae=Array.isArray,M=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],w=-1;function B(e){return{current:e}}function Z(e){0>w||(e.current=pe[w],pe[w]=null,w--)}function te(e,t){w++,pe[w]=e.current,e.current=t}var oe=B(null),ie=B(null),ce=B(null),Pe=B(null);function ze(e,t){switch(te(ce,t),te(ie,e),te(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qm(t),e=Fm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(oe),te(oe,e)}function Ue(){Z(oe),Z(ie),Z(ce)}function _(e){e.memoizedState!==null&&te(Pe,e);var t=oe.current,a=Fm(t,e.type);t!==a&&(te(ie,e),te(oe,a))}function ne(e){ie.current===e&&(Z(oe),Z(ie)),Pe.current===e&&(Z(Pe),Vl._currentValue=J)}var ue=Object.prototype.hasOwnProperty,ye=n.unstable_scheduleCallback,Ae=n.unstable_cancelCallback,Ct=n.unstable_shouldYield,vt=n.unstable_requestPaint,rt=n.unstable_now,Nn=n.unstable_getCurrentPriorityLevel,Yn=n.unstable_ImmediatePriority,Za=n.unstable_UserBlockingPriority,cs=n.unstable_NormalPriority,Kx=n.unstable_LowPriority,kf=n.unstable_IdlePriority,Ix=n.log,Zx=n.unstable_setDisableYieldValue,Fr=null,Bt=null;function Wn(e){if(typeof Ix=="function"&&Zx(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Fr,e)}catch{}}var Ut=Math.clz32?Math.clz32:ty,Jx=Math.log,ey=Math.LN2;function ty(e){return e>>>=0,e===0?32:31-(Jx(e)/ey|0)|0}var us=256,fs=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ds(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var o=0,u=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~u,l!==0?o=Ea(l):(y&=b,y!==0?o=Ea(y):a||(a=b&~e,a!==0&&(o=Ea(a))))):(b=l&~u,b!==0?o=Ea(b):y!==0?o=Ea(y):a||(a=l&~e,a!==0&&(o=Ea(a)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:o}function Kr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ny(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mf(){var e=us;return us<<=1,(us&4194048)===0&&(us=256),e}function Df(){var e=fs;return fs<<=1,(fs&62914560)===0&&(fs=4194304),e}function io(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ir(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ay(e,t,a,l,o,u){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,A=e.expirationTimes,z=e.hiddenUpdates;for(a=y&~a;0<a;){var G=31-Ut(a),X=1<<G;b[G]=0,A[G]=-1;var L=z[G];if(L!==null)for(z[G]=null,G=0;G<L.length;G++){var U=L[G];U!==null&&(U.lane&=-536870913)}a&=~X}l!==0&&Tf(e,l,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(y&~t))}function Tf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function _f(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ut(a),o=1<<l;o&t|e[l]&t&&(e[l]|=t),a&=~o}}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function co(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zf(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:mp(e.type))}function ry(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var Xn=Math.random().toString(36).slice(2),bt="__reactFiber$"+Xn,kt="__reactProps$"+Xn,Ja="__reactContainer$"+Xn,uo="__reactEvents$"+Xn,ly="__reactListeners$"+Xn,sy="__reactHandles$"+Xn,Lf="__reactResources$"+Xn,Zr="__reactMarker$"+Xn;function fo(e){delete e[bt],delete e[kt],delete e[uo],delete e[ly],delete e[sy]}function er(e){var t=e[bt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ja]||a[bt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Jm(e);e!==null;){if(a=e[bt])return a;e=Jm(e)}return t}e=a,a=e.parentNode}return null}function tr(e){if(e=e[bt]||e[Ja]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Jr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function nr(e){var t=e[Lf];return t||(t=e[Lf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[Zr]=!0}var Hf=new Set,Bf={};function Aa(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Bf[e]=t,e=0;e<t.length;e++)Hf.add(t[e])}var iy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uf={},qf={};function oy(e){return ue.call(qf,e)?!0:ue.call(Uf,e)?!1:iy.test(e)?qf[e]=!0:(Uf[e]=!0,!1)}function hs(e,t,a){if(oy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ms(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function jn(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var ho,Vf;function rr(e){if(ho===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ho=t&&t[1]||"",Vf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ho+e+Vf}var mo=!1;function po(e,t){if(!e||mo)return"";mo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(U){var L=U}Reflect.construct(e,[],X)}else{try{X.call()}catch(U){L=U}e.call(X.prototype)}}else{try{throw Error()}catch(U){L=U}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(U){if(U&&L&&typeof U.stack=="string")return[U.stack,L.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),y=u[0],b=u[1];if(y&&b){var A=y.split(`
`),z=b.split(`
`);for(o=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;if(l===A.length||o===z.length)for(l=A.length-1,o=z.length-1;1<=l&&0<=o&&A[l]!==z[o];)o--;for(;1<=l&&0<=o;l--,o--)if(A[l]!==z[o]){if(l!==1||o!==1)do if(l--,o--,0>o||A[l]!==z[o]){var G=`
`+A[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=o);break}}}finally{mo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rr(a):""}function cy(e){switch(e.tag){case 26:case 27:case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 15:return po(e.type,!1);case 11:return po(e.type.render,!1);case 1:return po(e.type,!0);case 31:return rr("Activity");default:return""}}function Pf(e){try{var t="";do t+=cy(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uy(e){var t=$f(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(y){l=""+y,u.call(this,y)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ps(e){e._valueTracker||(e._valueTracker=uy(e))}function Gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=$f(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fy=/[\n"\\]/g;function Zt(e){return e.replace(fy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function go(e,t,a,l,o,u,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+It(t)):e.value!==""+It(t)&&(e.value=""+It(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?xo(e,y,It(t)):a!=null?xo(e,y,It(a)):l!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+It(b):e.removeAttribute("name")}function Yf(e,t,a,l,o,u,y,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;a=a!=null?""+It(a):"",t=t!=null?""+It(t):a,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function xo(e,t,a){t==="number"&&gs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function lr(e,t,a,l){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&l&&(e[a].defaultSelected=!0)}else{for(a=""+It(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wf(e,t,a){if(t!=null&&(t=""+It(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+It(a):""}function Xf(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(ae(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=It(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function sr(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var dy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qf(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||dy.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ff(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&a[o]!==l&&Qf(e,o,l)}else for(var u in t)t.hasOwnProperty(u)&&Qf(e,u,t[u])}function yo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),my=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(e){return my.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vo=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ir=null,or=null;function Kf(e){var t=tr(e);if(t&&(e=t.stateNode)){var a=e[kt]||null;e:switch(e=t.stateNode,t.type){case"input":if(go(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var o=l[kt]||null;if(!o)throw Error(s(90));go(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Gf(l)}break e;case"textarea":Wf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&lr(e,!!a.multiple,t,!1)}}}var wo=!1;function If(e,t,a){if(wo)return e(t,a);wo=!0;try{var l=e(t);return l}finally{if(wo=!1,(ir!==null||or!==null)&&(ni(),ir&&(t=ir,e=or,or=ir=null,Kf(t),e)))for(t=0;t<e.length;t++)Kf(e[t])}}function el(e,t){var a=e.stateNode;if(a===null)return null;var l=a[kt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=!1;if(Cn)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){So=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{So=!1}var Qn=null,No=null,ys=null;function Zf(){if(ys)return ys;var e,t=No,a=t.length,l,o="value"in Qn?Qn.value:Qn.textContent,u=o.length;for(e=0;e<a&&t[e]===o[e];e++);var y=a-e;for(l=1;l<=y&&t[a-l]===o[u-l];l++);return ys=o.slice(e,1<l?1-l:void 0)}function vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function Jf(){return!1}function Mt(e){function t(a,l,o,u,y){this._reactName=a,this._targetInst=o,this.type=l,this.nativeEvent=u,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?bs:Jf,this.isPropagationStopped=Jf,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=Mt(Ra),nl=g({},Ra,{view:0,detail:0}),py=Mt(nl),jo,Co,al,Ss=g({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==al&&(al&&e.type==="mousemove"?(jo=e.screenX-al.screenX,Co=e.screenY-al.screenY):Co=jo=0,al=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),ed=Mt(Ss),gy=g({},Ss,{dataTransfer:0}),xy=Mt(gy),yy=g({},nl,{relatedTarget:0}),Eo=Mt(yy),vy=g({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),by=Mt(vy),wy=g({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sy=Mt(wy),Ny=g({},Ra,{data:0}),td=Mt(Ny),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ey[e])?!!t[e]:!1}function Ao(){return Ay}var Ry=g({},nl,{key:function(e){if(e.key){var t=jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oy=Mt(Ry),ky=g({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=Mt(ky),My=g({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),Dy=Mt(My),Ty=g({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Mt(Ty),zy=g({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Mt(zy),Hy=g({},Ra,{newState:0,oldState:0}),By=Mt(Hy),Uy=[9,13,27,32],Ro=Cn&&"CompositionEvent"in window,rl=null;Cn&&"documentMode"in document&&(rl=document.documentMode);var qy=Cn&&"TextEvent"in window&&!rl,ad=Cn&&(!Ro||rl&&8<rl&&11>=rl),rd=" ",ld=!1;function sd(e,t){switch(e){case"keyup":return Uy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function Vy(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(ld=!0,rd);case"textInput":return e=t.data,e===rd&&ld?null:e;default:return null}}function Py(e,t){if(cr)return e==="compositionend"||!Ro&&sd(e,t)?(e=Zf(),ys=No=Qn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ad&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function cd(e,t,a,l){ir?or?or.push(l):or=[l]:ir=l,t=oi(t,"onChange"),0<t.length&&(a=new ws("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ll=null,sl=null;function Gy(e){$m(e,0)}function Ns(e){var t=Jr(e);if(Gf(t))return e}function ud(e,t){if(e==="change")return t}var fd=!1;if(Cn){var Oo;if(Cn){var ko="oninput"in document;if(!ko){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),ko=typeof dd.oninput=="function"}Oo=ko}else Oo=!1;fd=Oo&&(!document.documentMode||9<document.documentMode)}function hd(){ll&&(ll.detachEvent("onpropertychange",md),sl=ll=null)}function md(e){if(e.propertyName==="value"&&Ns(sl)){var t=[];cd(t,sl,e,bo(e)),If(Gy,t)}}function Yy(e,t,a){e==="focusin"?(hd(),ll=t,sl=a,ll.attachEvent("onpropertychange",md)):e==="focusout"&&hd()}function Wy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(sl)}function Xy(e,t){if(e==="click")return Ns(t)}function Qy(e,t){if(e==="input"||e==="change")return Ns(t)}function Fy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Fy;function il(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var o=a[l];if(!ue.call(t,o)||!qt(e[o],t[o]))return!1}return!0}function pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gd(e,t){var a=pd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pd(a)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gs(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=gs(e.document)}return t}function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ky=Cn&&"documentMode"in document&&11>=document.documentMode,ur=null,Do=null,ol=null,To=!1;function vd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;To||ur==null||ur!==gs(l)||(l=ur,"selectionStart"in l&&Mo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ol&&il(ol,l)||(ol=l,l=oi(Do,"onSelect"),0<l.length&&(t=new ws("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ur)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var fr={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},_o={},bd={};Cn&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function ka(e){if(_o[e])return _o[e];if(!fr[e])return e;var t=fr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in bd)return _o[e]=t[a];return e}var wd=ka("animationend"),Sd=ka("animationiteration"),Nd=ka("animationstart"),Iy=ka("transitionrun"),Zy=ka("transitionstart"),Jy=ka("transitioncancel"),jd=ka("transitionend"),Cd=new Map,zo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zo.push("scrollEnd");function sn(e,t){Cd.set(e,t),Aa(t,[e])}var Ed=new WeakMap;function Jt(e,t){if(typeof e=="object"&&e!==null){var a=Ed.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Pf(t)},Ed.set(e,t),t)}return{value:e,source:t,stack:Pf(t)}}var en=[],dr=0,Lo=0;function js(){for(var e=dr,t=Lo=dr=0;t<e;){var a=en[t];en[t++]=null;var l=en[t];en[t++]=null;var o=en[t];en[t++]=null;var u=en[t];if(en[t++]=null,l!==null&&o!==null){var y=l.pending;y===null?o.next=o:(o.next=y.next,y.next=o),l.pending=o}u!==0&&Ad(a,o,u)}}function Cs(e,t,a,l){en[dr++]=e,en[dr++]=t,en[dr++]=a,en[dr++]=l,Lo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ho(e,t,a,l){return Cs(e,t,a,l),Es(e)}function hr(e,t){return Cs(e,null,null,t),Es(e)}function Ad(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var o=!1,u=e.return;u!==null;)u.childLanes|=a,l=u.alternate,l!==null&&(l.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-Ut(a),e=u.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=a|536870912),u):null}function Es(e){if(50<Tl)throw Tl=0,$c=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mr={};function ev(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,a,l){return new ev(e,t,a,l)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function En(e,t){var a=e.alternate;return a===null?(a=Vt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function As(e,t,a,l,o,u){var y=0;if(l=e,typeof e=="function")Bo(e)&&(y=1);else if(typeof e=="string")y=nb(e,a,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=Vt(31,a,t,o),e.elementType=re,e.lanes=u,e;case E:return Ma(a.children,o,u,t);case R:y=8,o|=24;break;case k:return e=Vt(12,a,t,o|2),e.elementType=k,e.lanes=u,e;case V:return e=Vt(13,a,t,o),e.elementType=V,e.lanes=u,e;case F:return e=Vt(19,a,t,o),e.elementType=F,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case $:y=10;break e;case q:y=9;break e;case Q:y=11;break e;case ee:y=14;break e;case P:y=16,l=null;break e}y=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=Vt(y,a,t,o),t.elementType=e,t.type=l,t.lanes=u,t}function Ma(e,t,a,l){return e=Vt(7,e,l,t),e.lanes=a,e}function Uo(e,t,a){return e=Vt(6,e,null,t),e.lanes=a,e}function qo(e,t,a){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pr=[],gr=0,Rs=null,Os=0,tn=[],nn=0,Da=null,An=1,Rn="";function Ta(e,t){pr[gr++]=Os,pr[gr++]=Rs,Rs=e,Os=t}function Od(e,t,a){tn[nn++]=An,tn[nn++]=Rn,tn[nn++]=Da,Da=e;var l=An;e=Rn;var o=32-Ut(l)-1;l&=~(1<<o),a+=1;var u=32-Ut(t)+o;if(30<u){var y=o-o%5;u=(l&(1<<y)-1).toString(32),l>>=y,o-=y,An=1<<32-Ut(t)+o|a<<o|l,Rn=u+e}else An=1<<u|a<<o|l,Rn=e}function Vo(e){e.return!==null&&(Ta(e,1),Od(e,1,0))}function Po(e){for(;e===Rs;)Rs=pr[--gr],pr[gr]=null,Os=pr[--gr],pr[gr]=null;for(;e===Da;)Da=tn[--nn],tn[nn]=null,Rn=tn[--nn],tn[nn]=null,An=tn[--nn],tn[nn]=null}var Et=null,Je=null,Be=!1,_a=null,mn=!1,$o=Error(s(519));function za(e){var t=Error(s(418,""));throw fl(Jt(t,e)),$o}function kd(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[bt]=e,t[kt]=l,a){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(a=0;a<zl.length;a++)De(zl[a],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),Yf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ps(t);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),Xf(t,l.value,l.defaultValue,l.children),ps(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Xm(t.textContent,a)?(l.popover!=null&&(De("beforetoggle",t),De("toggle",t)),l.onScroll!=null&&De("scroll",t),l.onScrollEnd!=null&&De("scrollend",t),l.onClick!=null&&(t.onclick=ci),t=!0):t=!1,t||za(e)}function Md(e){for(Et=e.return;Et;)switch(Et.tag){case 5:case 13:mn=!1;return;case 27:case 3:mn=!0;return;default:Et=Et.return}}function cl(e){if(e!==Et)return!1;if(!Be)return Md(e),Be=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lu(e.type,e.memoizedProps)),a=!a),a&&Je&&za(e),Md(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Je=cn(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Je=null}}else t===27?(t=Je,ua(e.type)?(e=cu,cu=null,Je=e):Je=t):Je=Et?cn(e.stateNode.nextSibling):null;return!0}function ul(){Je=Et=null,Be=!1}function Dd(){var e=_a;return e!==null&&(_t===null?_t=e:_t.push.apply(_t,e),_a=null),e}function fl(e){_a===null?_a=[e]:_a.push(e)}var Go=B(null),La=null,On=null;function Fn(e,t,a){te(Go,t._currentValue),t._currentValue=a}function kn(e){e._currentValue=Go.current,Z(Go)}function Yo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Wo(e,t,a,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var y=o.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=o;for(var A=0;A<t.length;A++)if(b.context===t[A]){u.lanes|=a,b=u.alternate,b!==null&&(b.lanes|=a),Yo(u.return,a,e),l||(y=null);break e}u=b.next}}else if(o.tag===18){if(y=o.return,y===null)throw Error(s(341));y.lanes|=a,u=y.alternate,u!==null&&(u.lanes|=a),Yo(y,a,e),y=null}else y=o.child;if(y!==null)y.return=o;else for(y=o;y!==null;){if(y===e){y=null;break}if(o=y.sibling,o!==null){o.return=y.return,y=o;break}y=y.return}o=y}}function dl(e,t,a,l){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var y=o.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var b=o.type;qt(o.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(o===Pe.current){if(y=o.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Vl):e=[Vl])}o=o.return}e!==null&&Wo(t,e,a,l),t.flags|=262144}function ks(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){La=e,On=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wt(e){return Td(La,e)}function Ms(e,t){return La===null&&Ha(e),Td(e,t)}function Td(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},On===null){if(e===null)throw Error(s(308));On=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else On=On.next=t;return a}var tv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},nv=n.unstable_scheduleCallback,av=n.unstable_NormalPriority,it={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xo(){return{controller:new tv,data:new Map,refCount:0}}function hl(e){e.refCount--,e.refCount===0&&nv(av,function(){e.controller.abort()})}var ml=null,Qo=0,xr=0,yr=null;function rv(e,t){if(ml===null){var a=ml=[];Qo=0,xr=Kc(),yr={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Qo++,t.then(_d,_d),t}function _d(){if(--Qo===0&&ml!==null){yr!==null&&(yr.status="fulfilled");var e=ml;ml=null,xr=0,yr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lv(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),l}var zd=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&rv(e,t),zd!==null&&zd(e,t)};var Ba=B(null);function Fo(){var e=Ba.current;return e!==null?e:Xe.pooledCache}function Ds(e,t){t===null?te(Ba,Ba.current):te(Ba,t.pool)}function Ld(){var e=Fo();return e===null?null:{parent:it._currentValue,pool:e}}var pl=Error(s(460)),Hd=Error(s(474)),Ts=Error(s(542)),Ko={then:function(){}};function Bd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _s(){}function Ud(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(_s,_s),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vd(e),e;default:if(typeof t.status=="string")t.then(_s,_s);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vd(e),e}throw gl=t,pl}}var gl=null;function qd(){if(gl===null)throw Error(s(459));var e=gl;return gl=null,e}function Vd(e){if(e===pl||e===Ts)throw Error(s(483))}var Kn=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function In(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=Es(e),Ad(e,null,a),t}return Cs(e,l,t,a),Es(e)}function xl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,_f(e,a)}}function Jo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var o=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?o=u=y:u=u.next=y,a=a.next}while(a!==null);u===null?o=u=t:u=u.next=t}else o=u=t;a={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ec=!1;function yl(){if(ec){var e=yr;if(e!==null)throw e}}function vl(e,t,a,l){ec=!1;var o=e.updateQueue;Kn=!1;var u=o.firstBaseUpdate,y=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var A=b,z=A.next;A.next=null,y===null?u=z:y.next=z,y=A;var G=e.alternate;G!==null&&(G=G.updateQueue,b=G.lastBaseUpdate,b!==y&&(b===null?G.firstBaseUpdate=z:b.next=z,G.lastBaseUpdate=A))}if(u!==null){var X=o.baseState;y=0,G=z=A=null,b=u;do{var L=b.lane&-536870913,U=L!==b.lane;if(U?(_e&L)===L:(l&L)===L){L!==0&&L===xr&&(ec=!0),G!==null&&(G=G.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Se=e,be=b;L=t;var Ye=a;switch(be.tag){case 1:if(Se=be.payload,typeof Se=="function"){X=Se.call(Ye,X,L);break e}X=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=be.payload,L=typeof Se=="function"?Se.call(Ye,X,L):Se,L==null)break e;X=g({},X,L);break e;case 2:Kn=!0}}L=b.callback,L!==null&&(e.flags|=64,U&&(e.flags|=8192),U=o.callbacks,U===null?o.callbacks=[L]:U.push(L))}else U={lane:L,tag:b.tag,payload:b.payload,callback:b.callback,next:null},G===null?(z=G=U,A=X):G=G.next=U,y|=L;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;U=b,b=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);G===null&&(A=X),o.baseState=A,o.firstBaseUpdate=z,o.lastBaseUpdate=G,u===null&&(o.shared.lanes=0),sa|=y,e.lanes=y,e.memoizedState=X}}function Pd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function $d(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pd(a[e],t)}var vr=B(null),zs=B(0);function Gd(e,t){e=Hn,te(zs,e),te(vr,t),Hn=e|t.baseLanes}function tc(){te(zs,Hn),te(vr,vr.current)}function nc(){Hn=zs.current,Z(vr),Z(zs)}var Jn=0,Re=null,$e=null,lt=null,Ls=!1,br=!1,Ua=!1,Hs=0,bl=0,wr=null,sv=0;function nt(){throw Error(s(321))}function ac(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!qt(e[a],t[a]))return!1;return!0}function rc(e,t,a,l,o,u){return Jn=u,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ah:Rh,Ua=!1,u=a(l,o),Ua=!1,br&&(u=Wd(t,a,l,o)),Yd(e),u}function Yd(e){M.H=$s;var t=$e!==null&&$e.next!==null;if(Jn=0,lt=$e=Re=null,Ls=!1,bl=0,wr=null,t)throw Error(s(300));e===null||dt||(e=e.dependencies,e!==null&&ks(e)&&(dt=!0))}function Wd(e,t,a,l){Re=e;var o=0;do{if(br&&(wr=null),bl=0,br=!1,25<=o)throw Error(s(301));if(o+=1,lt=$e=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}M.H=hv,u=t(a,l)}while(br);return u}function iv(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?wl(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Re.flags|=1024),t}function lc(){var e=Hs!==0;return Hs=0,e}function sc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ic(e){if(Ls){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ls=!1}Jn=0,lt=$e=Re=null,br=!1,bl=Hs=0,wr=null}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Re.memoizedState=lt=e:lt=lt.next=e,lt}function st(){if($e===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=lt===null?Re.memoizedState:lt.next;if(t!==null)lt=t,$e=e;else{if(e===null)throw Re.alternate===null?Error(s(467)):Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},lt===null?Re.memoizedState=lt=e:lt=lt.next=e}return lt}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(e){var t=bl;return bl+=1,wr===null&&(wr=[]),e=Ud(wr,e,t),t=Re,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ah:Rh),e}function Bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wl(e);if(e.$$typeof===$)return wt(e)}throw Error(s(438,String(e)))}function cc(e){var t=null,a=Re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=oc(),Re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=le;return t.index++,a}function Mn(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=st();return uc(t,$e,e)}function uc(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var o=e.baseQueue,u=l.pending;if(u!==null){if(o!==null){var y=o.next;o.next=u.next,u.next=y}t.baseQueue=o=u,l.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var b=y=null,A=null,z=t,G=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(_e&X)===X:(Jn&X)===X){var L=z.revertLane;if(L===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===xr&&(G=!0);else if((Jn&L)===L){z=z.next,L===xr&&(G=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(b=A=X,y=u):A=A.next=X,Re.lanes|=L,sa|=L;X=z.action,Ua&&a(u,X),u=z.hasEagerState?z.eagerState:a(u,X)}else L={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(b=A=L,y=u):A=A.next=L,Re.lanes|=X,sa|=X;z=z.next}while(z!==null&&z!==t);if(A===null?y=u:A.next=b,!qt(u,e.memoizedState)&&(dt=!0,G&&(a=yr,a!==null)))throw a;e.memoizedState=u,e.baseState=y,e.baseQueue=A,l.lastRenderedState=u}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fc(e){var t=st(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,o=a.pending,u=t.memoizedState;if(o!==null){a.pending=null;var y=o=o.next;do u=e(u,y.action),y=y.next;while(y!==o);qt(u,t.memoizedState)||(dt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,l]}function Xd(e,t,a){var l=Re,o=st(),u=Be;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=t();var y=!qt(($e||o).memoizedState,a);y&&(o.memoizedState=a,dt=!0),o=o.queue;var b=Kd.bind(null,l,o,e);if(Sl(2048,8,b,[e]),o.getSnapshot!==t||y||lt!==null&&lt.memoizedState.tag&1){if(l.flags|=2048,Sr(9,qs(),Fd.bind(null,l,o,a,t),null),Xe===null)throw Error(s(349));u||(Jn&124)!==0||Qd(l,t,a)}return a}function Qd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Re.updateQueue,t===null?(t=oc(),Re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Fd(e,t,a,l){t.value=a,t.getSnapshot=l,Id(t)&&Zd(e)}function Kd(e,t,a){return a(function(){Id(t)&&Zd(e)})}function Id(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!qt(e,a)}catch{return!0}}function Zd(e){var t=hr(e,2);t!==null&&Wt(t,e,2)}function dc(e){var t=Dt();if(typeof e=="function"){var a=e;if(e=a(),Ua){Wn(!0);try{a()}finally{Wn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function Jd(e,t,a,l){return e.baseState=a,uc(e,$e,typeof l=="function"?l:Mn)}function ov(e,t,a,l,o){if(Ps(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){u.listeners.push(y)}};M.T!==null?a(!0):u.isTransition=!1,l(u),a=t.pending,a===null?(u.next=t.pending=u,eh(t,u)):(u.next=a.next,t.pending=a.next=u)}}function eh(e,t){var a=t.action,l=t.payload,o=e.state;if(t.isTransition){var u=M.T,y={};M.T=y;try{var b=a(o,l),A=M.S;A!==null&&A(y,b),th(e,t,b)}catch(z){hc(e,t,z)}finally{M.T=u}}else try{u=a(o,l),th(e,t,u)}catch(z){hc(e,t,z)}}function th(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){nh(e,t,l)},function(l){return hc(e,t,l)}):nh(e,t,a)}function nh(e,t,a){t.status="fulfilled",t.value=a,ah(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,eh(e,a)))}function hc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ah(t),t=t.next;while(t!==l)}e.action=null}function ah(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rh(e,t){return t}function lh(e,t){if(Be){var a=Xe.formState;if(a!==null){e:{var l=Re;if(Be){if(Je){t:{for(var o=Je,u=mn;o.nodeType!==8;){if(!u){o=null;break t}if(o=cn(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Je=cn(o.nextSibling),l=o.data==="F!";break e}}za(l)}l=!1}l&&(t=a[0])}}return a=Dt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rh,lastRenderedState:t},a.queue=l,a=jh.bind(null,Re,l),l.dispatch=a,l=dc(!1),u=yc.bind(null,Re,!1,l.queue),l=Dt(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,a=ov.bind(null,Re,o,u,a),o.dispatch=a,l.memoizedState=e,[t,a,!1]}function sh(e){var t=st();return ih(t,$e,e)}function ih(e,t,a){if(t=uc(e,t,rh)[0],e=Us(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=wl(t)}catch(y){throw y===pl?Ts:y}else l=t;t=st();var o=t.queue,u=o.dispatch;return a!==t.memoizedState&&(Re.flags|=2048,Sr(9,qs(),cv.bind(null,o,a),null)),[l,u,e]}function cv(e,t){e.action=t}function oh(e){var t=st(),a=$e;if(a!==null)return ih(t,a,e);st(),t=t.memoizedState,a=st();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Sr(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=Re.updateQueue,t===null&&(t=oc(),Re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function qs(){return{destroy:void 0,resource:void 0}}function ch(){return st().memoizedState}function Vs(e,t,a,l){var o=Dt();l=l===void 0?null:l,Re.flags|=e,o.memoizedState=Sr(1|t,qs(),a,l)}function Sl(e,t,a,l){var o=st();l=l===void 0?null:l;var u=o.memoizedState.inst;$e!==null&&l!==null&&ac(l,$e.memoizedState.deps)?o.memoizedState=Sr(t,u,a,l):(Re.flags|=e,o.memoizedState=Sr(1|t,u,a,l))}function uh(e,t){Vs(8390656,8,e,t)}function fh(e,t){Sl(2048,8,e,t)}function dh(e,t){return Sl(4,2,e,t)}function hh(e,t){return Sl(4,4,e,t)}function mh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ph(e,t,a){a=a!=null?a.concat([e]):null,Sl(4,4,mh.bind(null,t,e),a)}function mc(){}function gh(e,t){var a=st();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ac(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function xh(e,t){var a=st();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ac(t,l[1]))return l[0];if(l=e(),Ua){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[l,t],l}function pc(e,t,a){return a===void 0||(Jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=bm(),Re.lanes|=e,sa|=e,a)}function yh(e,t,a,l){return qt(a,t)?a:vr.current!==null?(e=pc(e,a,l),qt(e,t)||(dt=!0),e):(Jn&42)===0?(dt=!0,e.memoizedState=a):(e=bm(),Re.lanes|=e,sa|=e,t)}function vh(e,t,a,l,o){var u=W.p;W.p=u!==0&&8>u?u:8;var y=M.T,b={};M.T=b,yc(e,!1,t,a);try{var A=o(),z=M.S;if(z!==null&&z(b,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var G=lv(A,l);Nl(e,t,G,Yt(e))}else Nl(e,t,l,Yt(e))}catch(X){Nl(e,t,{then:function(){},status:"rejected",reason:X},Yt())}finally{W.p=u,M.T=y}}function uv(){}function gc(e,t,a,l){if(e.tag!==5)throw Error(s(476));var o=bh(e).queue;vh(e,o,t,J,a===null?uv:function(){return wh(e),a(l)})}function bh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wh(e){var t=bh(e).next.queue;Nl(e,t,{},Yt())}function xc(){return wt(Vl)}function Sh(){return st().memoizedState}function Nh(){return st().memoizedState}function fv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Yt();e=In(a);var l=Zn(t,e,a);l!==null&&(Wt(l,t,a),xl(l,t,a)),t={cache:Xo()},e.payload=t;return}t=t.return}}function dv(e,t,a){var l=Yt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Ch(t,a):(a=Ho(e,t,a,l),a!==null&&(Wt(a,e,l),Eh(a,t,l)))}function jh(e,t,a){var l=Yt();Nl(e,t,a,l)}function Nl(e,t,a,l){var o={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Ch(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var y=t.lastRenderedState,b=u(y,a);if(o.hasEagerState=!0,o.eagerState=b,qt(b,y))return Cs(e,t,o,0),Xe===null&&js(),!1}catch{}if(a=Ho(e,t,o,l),a!==null)return Wt(a,e,l),Eh(a,t,l),!0}return!1}function yc(e,t,a,l){if(l={lane:2,revertLane:Kc(),action:l,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(s(479))}else t=Ho(e,a,l,2),t!==null&&Wt(t,e,2)}function Ps(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Ch(e,t){br=Ls=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Eh(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,_f(e,a)}}var $s={readContext:wt,use:Bs,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt},Ah={readContext:wt,use:Bs,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:uh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Vs(4194308,4,mh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){Vs(4,2,e,t)},useMemo:function(e,t){var a=Dt();t=t===void 0?null:t;var l=e();if(Ua){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Dt();if(a!==void 0){var o=a(t);if(Ua){Wn(!0);try{a(t)}finally{Wn(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=dv.bind(null,Re,e),[l.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:function(e){e=dc(e);var t=e.queue,a=jh.bind(null,Re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:mc,useDeferredValue:function(e,t){var a=Dt();return pc(a,e,t)},useTransition:function(){var e=dc(!1);return e=vh.bind(null,Re,e.queue,!0,!1),Dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=Re,o=Dt();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Xe===null)throw Error(s(349));(_e&124)!==0||Qd(l,t,a)}o.memoizedState=a;var u={value:a,getSnapshot:t};return o.queue=u,uh(Kd.bind(null,l,u,e),[e]),l.flags|=2048,Sr(9,qs(),Fd.bind(null,l,u,a,t),null),a},useId:function(){var e=Dt(),t=Xe.identifierPrefix;if(Be){var a=Rn,l=An;a=(l&~(1<<32-Ut(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=Hs++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=sv++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:xc,useFormState:lh,useActionState:lh,useOptimistic:function(e){var t=Dt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=yc.bind(null,Re,!0,a),a.dispatch=t,[e,t]},useMemoCache:cc,useCacheRefresh:function(){return Dt().memoizedState=fv.bind(null,Re)}},Rh={readContext:wt,use:Bs,useCallback:gh,useContext:wt,useEffect:fh,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:xh,useReducer:Us,useRef:ch,useState:function(){return Us(Mn)},useDebugValue:mc,useDeferredValue:function(e,t){var a=st();return yh(a,$e.memoizedState,e,t)},useTransition:function(){var e=Us(Mn)[0],t=st().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:Xd,useId:Sh,useHostTransitionStatus:xc,useFormState:sh,useActionState:sh,useOptimistic:function(e,t){var a=st();return Jd(a,$e,e,t)},useMemoCache:cc,useCacheRefresh:Nh},hv={readContext:wt,use:Bs,useCallback:gh,useContext:wt,useEffect:fh,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:xh,useReducer:fc,useRef:ch,useState:function(){return fc(Mn)},useDebugValue:mc,useDeferredValue:function(e,t){var a=st();return $e===null?pc(a,e,t):yh(a,$e.memoizedState,e,t)},useTransition:function(){var e=fc(Mn)[0],t=st().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:Xd,useId:Sh,useHostTransitionStatus:xc,useFormState:oh,useActionState:oh,useOptimistic:function(e,t){var a=st();return $e!==null?Jd(a,$e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cc,useCacheRefresh:Nh},Nr=null,jl=0;function Gs(e){var t=jl;return jl+=1,Nr===null&&(Nr=[]),Ud(Nr,e,t)}function Cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ys(e,t){throw t.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Oh(e){var t=e._init;return t(e._payload)}function kh(e){function t(D,O){if(e){var T=D.deletions;T===null?(D.deletions=[O],D.flags|=16):T.push(O)}}function a(D,O){if(!e)return null;for(;O!==null;)t(D,O),O=O.sibling;return null}function l(D){for(var O=new Map;D!==null;)D.key!==null?O.set(D.key,D):O.set(D.index,D),D=D.sibling;return O}function o(D,O){return D=En(D,O),D.index=0,D.sibling=null,D}function u(D,O,T){return D.index=T,e?(T=D.alternate,T!==null?(T=T.index,T<O?(D.flags|=67108866,O):T):(D.flags|=67108866,O)):(D.flags|=1048576,O)}function y(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function b(D,O,T,Y){return O===null||O.tag!==6?(O=Uo(T,D.mode,Y),O.return=D,O):(O=o(O,T),O.return=D,O)}function A(D,O,T,Y){var de=T.type;return de===E?G(D,O,T.props.children,Y,T.key):O!==null&&(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===P&&Oh(de)===O.type)?(O=o(O,T.props),Cl(O,T),O.return=D,O):(O=As(T.type,T.key,T.props,null,D.mode,Y),Cl(O,T),O.return=D,O)}function z(D,O,T,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==T.containerInfo||O.stateNode.implementation!==T.implementation?(O=qo(T,D.mode,Y),O.return=D,O):(O=o(O,T.children||[]),O.return=D,O)}function G(D,O,T,Y,de){return O===null||O.tag!==7?(O=Ma(T,D.mode,Y,de),O.return=D,O):(O=o(O,T),O.return=D,O)}function X(D,O,T){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Uo(""+O,D.mode,T),O.return=D,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case j:return T=As(O.type,O.key,O.props,null,D.mode,T),Cl(T,O),T.return=D,T;case C:return O=qo(O,D.mode,T),O.return=D,O;case P:var Y=O._init;return O=Y(O._payload),X(D,O,T)}if(ae(O)||ge(O))return O=Ma(O,D.mode,T,null),O.return=D,O;if(typeof O.then=="function")return X(D,Gs(O),T);if(O.$$typeof===$)return X(D,Ms(D,O),T);Ys(D,O)}return null}function L(D,O,T,Y){var de=O!==null?O.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return de!==null?null:b(D,O,""+T,Y);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case j:return T.key===de?A(D,O,T,Y):null;case C:return T.key===de?z(D,O,T,Y):null;case P:return de=T._init,T=de(T._payload),L(D,O,T,Y)}if(ae(T)||ge(T))return de!==null?null:G(D,O,T,Y,null);if(typeof T.then=="function")return L(D,O,Gs(T),Y);if(T.$$typeof===$)return L(D,O,Ms(D,T),Y);Ys(D,T)}return null}function U(D,O,T,Y,de){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return D=D.get(T)||null,b(O,D,""+Y,de);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case j:return D=D.get(Y.key===null?T:Y.key)||null,A(O,D,Y,de);case C:return D=D.get(Y.key===null?T:Y.key)||null,z(O,D,Y,de);case P:var ke=Y._init;return Y=ke(Y._payload),U(D,O,T,Y,de)}if(ae(Y)||ge(Y))return D=D.get(T)||null,G(O,D,Y,de,null);if(typeof Y.then=="function")return U(D,O,T,Gs(Y),de);if(Y.$$typeof===$)return U(D,O,T,Ms(O,Y),de);Ys(O,Y)}return null}function Se(D,O,T,Y){for(var de=null,ke=null,xe=O,we=O=0,mt=null;xe!==null&&we<T.length;we++){xe.index>we?(mt=xe,xe=null):mt=xe.sibling;var Le=L(D,xe,T[we],Y);if(Le===null){xe===null&&(xe=mt);break}e&&xe&&Le.alternate===null&&t(D,xe),O=u(Le,O,we),ke===null?de=Le:ke.sibling=Le,ke=Le,xe=mt}if(we===T.length)return a(D,xe),Be&&Ta(D,we),de;if(xe===null){for(;we<T.length;we++)xe=X(D,T[we],Y),xe!==null&&(O=u(xe,O,we),ke===null?de=xe:ke.sibling=xe,ke=xe);return Be&&Ta(D,we),de}for(xe=l(xe);we<T.length;we++)mt=U(xe,D,we,T[we],Y),mt!==null&&(e&&mt.alternate!==null&&xe.delete(mt.key===null?we:mt.key),O=u(mt,O,we),ke===null?de=mt:ke.sibling=mt,ke=mt);return e&&xe.forEach(function(pa){return t(D,pa)}),Be&&Ta(D,we),de}function be(D,O,T,Y){if(T==null)throw Error(s(151));for(var de=null,ke=null,xe=O,we=O=0,mt=null,Le=T.next();xe!==null&&!Le.done;we++,Le=T.next()){xe.index>we?(mt=xe,xe=null):mt=xe.sibling;var pa=L(D,xe,Le.value,Y);if(pa===null){xe===null&&(xe=mt);break}e&&xe&&pa.alternate===null&&t(D,xe),O=u(pa,O,we),ke===null?de=pa:ke.sibling=pa,ke=pa,xe=mt}if(Le.done)return a(D,xe),Be&&Ta(D,we),de;if(xe===null){for(;!Le.done;we++,Le=T.next())Le=X(D,Le.value,Y),Le!==null&&(O=u(Le,O,we),ke===null?de=Le:ke.sibling=Le,ke=Le);return Be&&Ta(D,we),de}for(xe=l(xe);!Le.done;we++,Le=T.next())Le=U(xe,D,we,Le.value,Y),Le!==null&&(e&&Le.alternate!==null&&xe.delete(Le.key===null?we:Le.key),O=u(Le,O,we),ke===null?de=Le:ke.sibling=Le,ke=Le);return e&&xe.forEach(function(mb){return t(D,mb)}),Be&&Ta(D,we),de}function Ye(D,O,T,Y){if(typeof T=="object"&&T!==null&&T.type===E&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case j:e:{for(var de=T.key;O!==null;){if(O.key===de){if(de=T.type,de===E){if(O.tag===7){a(D,O.sibling),Y=o(O,T.props.children),Y.return=D,D=Y;break e}}else if(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===P&&Oh(de)===O.type){a(D,O.sibling),Y=o(O,T.props),Cl(Y,T),Y.return=D,D=Y;break e}a(D,O);break}else t(D,O);O=O.sibling}T.type===E?(Y=Ma(T.props.children,D.mode,Y,T.key),Y.return=D,D=Y):(Y=As(T.type,T.key,T.props,null,D.mode,Y),Cl(Y,T),Y.return=D,D=Y)}return y(D);case C:e:{for(de=T.key;O!==null;){if(O.key===de)if(O.tag===4&&O.stateNode.containerInfo===T.containerInfo&&O.stateNode.implementation===T.implementation){a(D,O.sibling),Y=o(O,T.children||[]),Y.return=D,D=Y;break e}else{a(D,O);break}else t(D,O);O=O.sibling}Y=qo(T,D.mode,Y),Y.return=D,D=Y}return y(D);case P:return de=T._init,T=de(T._payload),Ye(D,O,T,Y)}if(ae(T))return Se(D,O,T,Y);if(ge(T)){if(de=ge(T),typeof de!="function")throw Error(s(150));return T=de.call(T),be(D,O,T,Y)}if(typeof T.then=="function")return Ye(D,O,Gs(T),Y);if(T.$$typeof===$)return Ye(D,O,Ms(D,T),Y);Ys(D,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,O!==null&&O.tag===6?(a(D,O.sibling),Y=o(O,T),Y.return=D,D=Y):(a(D,O),Y=Uo(T,D.mode,Y),Y.return=D,D=Y),y(D)):a(D,O)}return function(D,O,T,Y){try{jl=0;var de=Ye(D,O,T,Y);return Nr=null,de}catch(xe){if(xe===pl||xe===Ts)throw xe;var ke=Vt(29,xe,null,D.mode);return ke.lanes=Y,ke.return=D,ke}}}var jr=kh(!0),Mh=kh(!1),an=B(null),pn=null;function ea(e){var t=e.alternate;te(ot,ot.current&1),te(an,e),pn===null&&(t===null||vr.current!==null||t.memoizedState!==null)&&(pn=e)}function Dh(e){if(e.tag===22){if(te(ot,ot.current),te(an,e),pn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(pn=e)}}else ta()}function ta(){te(ot,ot.current),te(an,an.current)}function Dn(e){Z(an),pn===e&&(pn=null),Z(ot)}var ot=B(0);function Ws(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ou(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:g({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Yt(),o=In(l);o.payload=t,a!=null&&(o.callback=a),t=Zn(e,o,l),t!==null&&(Wt(t,e,l),xl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Yt(),o=In(l);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=Zn(e,o,l),t!==null&&(Wt(t,e,l),xl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Yt(),l=In(a);l.tag=2,t!=null&&(l.callback=t),t=Zn(e,l,a),t!==null&&(Wt(t,e,a),xl(t,e,a))}};function Th(e,t,a,l,o,u,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,y):t.prototype&&t.prototype.isPureReactComponent?!il(a,l)||!il(o,u):!0}function _h(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=g({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}var Xs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zh(e){Xs(e)}function Lh(e){console.error(e)}function Hh(e){Xs(e)}function Qs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Bh(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function wc(e,t,a){return a=In(a),a.tag=3,a.payload={element:null},a.callback=function(){Qs(e,t)},a}function Uh(e){return e=In(e),e.tag=3,e}function qh(e,t,a,l){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var u=l.value;e.payload=function(){return o(u)},e.callback=function(){Bh(t,a,l)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Bh(t,a,l),typeof o!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function mv(e,t,a,l,o){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&dl(t,a,o,!0),a=an.current,a!==null){switch(a.tag){case 13:return pn===null?Yc():a.alternate===null&&et===0&&(et=3),a.flags&=-257,a.flags|=65536,a.lanes=o,l===Ko?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Xc(e,l,o)),!1;case 22:return a.flags|=65536,l===Ko?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Xc(e,l,o)),!1}throw Error(s(435,a.tag))}return Xc(e,l,o),Yc(),!1}if(Be)return t=an.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==$o&&(e=Error(s(422),{cause:l}),fl(Jt(e,a)))):(l!==$o&&(t=Error(s(423),{cause:l}),fl(Jt(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=Jt(l,a),o=wc(e.stateNode,l,o),Jo(e,o),et!==4&&(et=2)),!1;var u=Error(s(520),{cause:l});if(u=Jt(u,a),Dl===null?Dl=[u]:Dl.push(u),et!==4&&(et=2),t===null)return!0;l=Jt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=wc(a.stateNode,l,e),Jo(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ia===null||!ia.has(u))))return a.flags|=65536,o&=-o,a.lanes|=o,o=Uh(o),qh(o,e,a,l),Jo(a,o),!1}a=a.return}while(a!==null);return!1}var Vh=Error(s(461)),dt=!1;function pt(e,t,a,l){t.child=e===null?Mh(t,null,a,l):jr(t,e.child,a,l)}function Ph(e,t,a,l,o){a=a.render;var u=t.ref;if("ref"in l){var y={};for(var b in l)b!=="ref"&&(y[b]=l[b])}else y=l;return Ha(t),l=rc(e,t,a,y,u,o),b=lc(),e!==null&&!dt?(sc(e,t,o),Tn(e,t,o)):(Be&&b&&Vo(t),t.flags|=1,pt(e,t,l,o),t.child)}function $h(e,t,a,l,o){if(e===null){var u=a.type;return typeof u=="function"&&!Bo(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Gh(e,t,u,l,o)):(e=As(a.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Oc(e,o)){var y=u.memoizedProps;if(a=a.compare,a=a!==null?a:il,a(y,l)&&e.ref===t.ref)return Tn(e,t,o)}return t.flags|=1,e=En(u,l),e.ref=t.ref,e.return=t,t.child=e}function Gh(e,t,a,l,o){if(e!==null){var u=e.memoizedProps;if(il(u,l)&&e.ref===t.ref)if(dt=!1,t.pendingProps=l=u,Oc(e,o))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,Tn(e,t,o)}return Sc(e,t,a,l,o)}function Yh(e,t,a){var l=t.pendingProps,o=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return Wh(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ds(t,u!==null?u.cachePool:null),u!==null?Gd(t,u):tc(),Dh(t);else return t.lanes=t.childLanes=536870912,Wh(e,t,u!==null?u.baseLanes|a:a,a)}else u!==null?(Ds(t,u.cachePool),Gd(t,u),ta(),t.memoizedState=null):(e!==null&&Ds(t,null),tc(),ta());return pt(e,t,o,a),t.child}function Wh(e,t,a,l){var o=Fo();return o=o===null?null:{parent:it._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&Ds(t,null),tc(),Dh(t),e!==null&&dl(e,t,l,!0),null}function Fs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Sc(e,t,a,l,o){return Ha(t),a=rc(e,t,a,l,void 0,o),l=lc(),e!==null&&!dt?(sc(e,t,o),Tn(e,t,o)):(Be&&l&&Vo(t),t.flags|=1,pt(e,t,a,o),t.child)}function Xh(e,t,a,l,o,u){return Ha(t),t.updateQueue=null,a=Wd(t,l,a,o),Yd(e),l=lc(),e!==null&&!dt?(sc(e,t,u),Tn(e,t,u)):(Be&&l&&Vo(t),t.flags|=1,pt(e,t,a,u),t.child)}function Qh(e,t,a,l,o){if(Ha(t),t.stateNode===null){var u=mr,y=a.contextType;typeof y=="object"&&y!==null&&(u=wt(y)),u=new a(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=bc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},Io(t),y=a.contextType,u.context=typeof y=="object"&&y!==null?wt(y):mr,u.state=t.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(vc(t,a,y,l),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(y=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),y!==u.state&&bc.enqueueReplaceState(u,u.state,null),vl(t,l,u,o),yl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,A=qa(a,b);u.props=A;var z=u.context,G=a.contextType;y=mr,typeof G=="object"&&G!==null&&(y=wt(G));var X=a.getDerivedStateFromProps;G=typeof X=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,G||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||z!==y)&&_h(t,u,l,y),Kn=!1;var L=t.memoizedState;u.state=L,vl(t,l,u,o),yl(),z=t.memoizedState,b||L!==z||Kn?(typeof X=="function"&&(vc(t,a,X,l),z=t.memoizedState),(A=Kn||Th(t,a,A,l,L,z,y))?(G||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),u.props=l,u.state=z,u.context=y,l=A):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Zo(e,t),y=t.memoizedProps,G=qa(a,y),u.props=G,X=t.pendingProps,L=u.context,z=a.contextType,A=mr,typeof z=="object"&&z!==null&&(A=wt(z)),b=a.getDerivedStateFromProps,(z=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y!==X||L!==A)&&_h(t,u,l,A),Kn=!1,L=t.memoizedState,u.state=L,vl(t,l,u,o),yl();var U=t.memoizedState;y!==X||L!==U||Kn||e!==null&&e.dependencies!==null&&ks(e.dependencies)?(typeof b=="function"&&(vc(t,a,b,l),U=t.memoizedState),(G=Kn||Th(t,a,G,l,L,U,A)||e!==null&&e.dependencies!==null&&ks(e.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,U,A),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,U,A)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=U),u.props=l,u.state=U,u.context=A,l=G):(typeof u.componentDidUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,Fs(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=jr(t,e.child,null,o),t.child=jr(t,null,a,o)):pt(e,t,a,o),t.memoizedState=u.state,e=t.child):e=Tn(e,t,o),e}function Fh(e,t,a,l){return ul(),t.flags|=256,pt(e,t,a,l),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(e){return{baseLanes:e,cachePool:Ld()}}function Cc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=rn),e}function Kh(e,t,a){var l=t.pendingProps,o=!1,u=(t.flags&128)!==0,y;if((y=u)||(y=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),y&&(o=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Be){if(o?ea(t):ta(),Be){var b=Je,A;if(A=b){e:{for(A=b,b=mn;A.nodeType!==8;){if(!b){b=null;break e}if(A=cn(A.nextSibling),A===null){b=null;break e}}b=A}b!==null?(t.memoizedState={dehydrated:b,treeContext:Da!==null?{id:An,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},A=Vt(18,null,null,0),A.stateNode=b,A.return=t,t.child=A,Et=t,Je=null,A=!0):A=!1}A||za(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return ou(b)?t.lanes=32:t.lanes=536870912,null;Dn(t)}return b=l.children,l=l.fallback,o?(ta(),o=t.mode,b=Ks({mode:"hidden",children:b},o),l=Ma(l,o,a,null),b.return=t,l.return=t,b.sibling=l,t.child=b,o=t.child,o.memoizedState=jc(a),o.childLanes=Cc(e,y,a),t.memoizedState=Nc,l):(ea(t),Ec(t,b))}if(A=e.memoizedState,A!==null&&(b=A.dehydrated,b!==null)){if(u)t.flags&256?(ea(t),t.flags&=-257,t=Ac(e,t,a)):t.memoizedState!==null?(ta(),t.child=e.child,t.flags|=128,t=null):(ta(),o=l.fallback,b=t.mode,l=Ks({mode:"visible",children:l.children},b),o=Ma(o,b,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,jr(t,e.child,null,a),l=t.child,l.memoizedState=jc(a),l.childLanes=Cc(e,y,a),t.memoizedState=Nc,t=o);else if(ea(t),ou(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var z=y.dgst;y=z,l=Error(s(419)),l.stack="",l.digest=y,fl({value:l,source:null,stack:null}),t=Ac(e,t,a)}else if(dt||dl(e,t,a,!1),y=(a&e.childLanes)!==0,dt||y){if(y=Xe,y!==null&&(l=a&-a,l=(l&42)!==0?1:oo(l),l=(l&(y.suspendedLanes|a))!==0?0:l,l!==0&&l!==A.retryLane))throw A.retryLane=l,hr(e,l),Wt(y,e,l),Vh;b.data==="$?"||Yc(),t=Ac(e,t,a)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Je=cn(b.nextSibling),Et=t,Be=!0,_a=null,mn=!1,e!==null&&(tn[nn++]=An,tn[nn++]=Rn,tn[nn++]=Da,An=e.id,Rn=e.overflow,Da=t),t=Ec(t,l.children),t.flags|=4096);return t}return o?(ta(),o=l.fallback,b=t.mode,A=e.child,z=A.sibling,l=En(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&65011712,z!==null?o=En(z,o):(o=Ma(o,b,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,l=o,o=t.child,b=e.child.memoizedState,b===null?b=jc(a):(A=b.cachePool,A!==null?(z=it._currentValue,A=A.parent!==z?{parent:z,pool:z}:A):A=Ld(),b={baseLanes:b.baseLanes|a,cachePool:A}),o.memoizedState=b,o.childLanes=Cc(e,y,a),t.memoizedState=Nc,l):(ea(t),a=e.child,e=a.sibling,a=En(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=a,t.memoizedState=null,a)}function Ec(e,t){return t=Ks({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ks(e,t){return e=Vt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ac(e,t,a){return jr(t,e.child,null,a),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ih(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Yo(e.return,t,a)}function Rc(e,t,a,l,o){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:o}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=o)}function Zh(e,t,a){var l=t.pendingProps,o=l.revealOrder,u=l.tail;if(pt(e,t,l.children,a),l=ot.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ih(e,a,t);else if(e.tag===19)Ih(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(te(ot,l),o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&Ws(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Rc(t,!1,o,a,u);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ws(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Rc(t,!0,a,null,u);break;case"together":Rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(dl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=En(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=En(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ks(e)))}function pv(e,t,a){switch(t.tag){case 3:ze(t,t.stateNode.containerInfo),Fn(t,it,e.memoizedState.cache),ul();break;case 27:case 5:_(t);break;case 4:ze(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Kh(e,t,a):(ea(t),e=Tn(e,t,a),e!==null?e.sibling:null);ea(t);break;case 19:var o=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(dl(e,t,a,!1),l=(a&t.childLanes)!==0),o){if(l)return Zh(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ot,ot.current),l)break;return null;case 22:case 23:return t.lanes=0,Yh(e,t,a);case 24:Fn(t,it,e.memoizedState.cache)}return Tn(e,t,a)}function Jh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!Oc(e,a)&&(t.flags&128)===0)return dt=!1,pv(e,t,a);dt=(e.flags&131072)!==0}else dt=!1,Be&&(t.flags&1048576)!==0&&Od(t,Os,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,o=l._init;if(l=o(l._payload),t.type=l,typeof l=="function")Bo(l)?(e=qa(l,e),t.tag=1,t=Qh(null,t,l,e,a)):(t.tag=0,t=Sc(null,t,l,e,a));else{if(l!=null){if(o=l.$$typeof,o===Q){t.tag=11,t=Ph(null,t,l,e,a);break e}else if(o===ee){t.tag=14,t=$h(null,t,l,e,a);break e}}throw t=K(l)||l,Error(s(306,t,""))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,o=qa(l,t.pendingProps),Qh(e,t,l,o,a);case 3:e:{if(ze(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var u=t.memoizedState;o=u.element,Zo(e,t),vl(t,l,null,a);var y=t.memoizedState;if(l=y.cache,Fn(t,it,l),l!==u.cache&&Wo(t,[it],a,!0),yl(),l=y.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Fh(e,t,l,a);break e}else if(l!==o){o=Jt(Error(s(424)),t),fl(o),t=Fh(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=cn(e.firstChild),Et=t,Be=!0,_a=null,mn=!0,a=Mh(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ul(),l===o){t=Tn(e,t,a);break e}pt(e,t,l,a)}t=t.child}return t;case 26:return Fs(e,t),e===null?(a=ap(t.type,null,t.pendingProps,null))?t.memoizedState=a:Be||(a=t.type,e=t.pendingProps,l=ui(ce.current).createElement(a),l[bt]=t,l[kt]=e,xt(l,a,e),ft(l),t.stateNode=l):t.memoizedState=ap(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _(t),e===null&&Be&&(l=t.stateNode=ep(t.type,t.pendingProps,ce.current),Et=t,mn=!0,o=Je,ua(t.type)?(cu=o,Je=cn(l.firstChild)):Je=o),pt(e,t,t.pendingProps.children,a),Fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Be&&((o=l=Je)&&(l=$v(l,t.type,t.pendingProps,mn),l!==null?(t.stateNode=l,Et=t,Je=cn(l.firstChild),mn=!1,o=!0):o=!1),o||za(t)),_(t),o=t.type,u=t.pendingProps,y=e!==null?e.memoizedProps:null,l=u.children,lu(o,u)?l=null:y!==null&&lu(o,y)&&(t.flags|=32),t.memoizedState!==null&&(o=rc(e,t,iv,null,null,a),Vl._currentValue=o),Fs(e,t),pt(e,t,l,a),t.child;case 6:return e===null&&Be&&((e=a=Je)&&(a=Gv(a,t.pendingProps,mn),a!==null?(t.stateNode=a,Et=t,Je=null,e=!0):e=!1),e||za(t)),null;case 13:return Kh(e,t,a);case 4:return ze(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=jr(t,null,l,a):pt(e,t,l,a),t.child;case 11:return Ph(e,t,t.type,t.pendingProps,a);case 7:return pt(e,t,t.pendingProps,a),t.child;case 8:return pt(e,t,t.pendingProps.children,a),t.child;case 12:return pt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Fn(t,t.type,l.value),pt(e,t,l.children,a),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,Ha(t),o=wt(o),l=l(o),t.flags|=1,pt(e,t,l,a),t.child;case 14:return $h(e,t,t.type,t.pendingProps,a);case 15:return Gh(e,t,t.type,t.pendingProps,a);case 19:return Zh(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ks(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=En(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Yh(e,t,a);case 24:return Ha(t),l=wt(it),e===null?(o=Fo(),o===null&&(o=Xe,u=Xo(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=a),o=u),t.memoizedState={parent:l,cache:o},Io(t),Fn(t,it,o)):((e.lanes&a)!==0&&(Zo(e,t),vl(t,null,null,a),yl()),o=e.memoizedState,u=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Fn(t,it,l)):(l=u.cache,Fn(t,it,l),l!==o.cache&&Wo(t,[it],a,!0))),pt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function _n(e){e.flags|=4}function em(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!op(t)){if(t=an.current,t!==null&&((_e&4194048)===_e?pn!==null:(_e&62914560)!==_e&&(_e&536870912)===0||t!==pn))throw gl=Ko,Hd;e.flags|=8192}}function Is(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Df():536870912,e.lanes|=t,Rr|=t)}function El(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function gv(e,t,a){var l=t.pendingProps;switch(Po(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),kn(it),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cl(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dd())),Ke(t),null;case 26:return a=t.memoizedState,e===null?(_n(t),a!==null?(Ke(t),em(t,a)):(Ke(t),t.flags&=-16777217)):a?a!==e.memoizedState?(_n(t),Ke(t),em(t,a)):(Ke(t),t.flags&=-16777217):(e.memoizedProps!==l&&_n(t),Ke(t),t.flags&=-16777217),null;case 27:ne(t),a=ce.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}e=oe.current,cl(t)?kd(t):(e=ep(o,l,a),t.stateNode=e,_n(t))}return Ke(t),null;case 5:if(ne(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(e=oe.current,cl(t))kd(t);else{switch(o=ui(ce.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?o.createElement(a,{is:l.is}):o.createElement(a)}}e[bt]=t,e[kt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(xt(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&_n(t)}}return Ke(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=ce.current,cl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,o=Et,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[bt]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Xm(e.nodeValue,a)),e||za(t)}else e=ui(e).createTextNode(l),e[bt]=t,t.stateNode=e}return Ke(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=cl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[bt]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else o=Dd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Dn(t),t):(Dn(t),null)}if(Dn(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==o&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Is(t,t.updateQueue),Ke(t),null;case 4:return Ue(),e===null&&eu(t.stateNode.containerInfo),Ke(t),null;case 10:return kn(t.type),Ke(t),null;case 19:if(Z(ot),o=t.memoizedState,o===null)return Ke(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)El(o,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ws(e),u!==null){for(t.flags|=128,El(o,!1),e=u.updateQueue,t.updateQueue=e,Is(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Rd(a,e),a=a.sibling;return te(ot,ot.current&1|2),t.child}e=e.sibling}o.tail!==null&&rt()>ei&&(t.flags|=128,l=!0,El(o,!1),t.lanes=4194304)}else{if(!l)if(e=Ws(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Is(t,e),El(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Be)return Ke(t),null}else 2*rt()-o.renderingStartTime>ei&&a!==536870912&&(t.flags|=128,l=!0,El(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=rt(),t.sibling=null,e=ot.current,te(ot,l?e&1|2:e&1),t):(Ke(t),null);case 22:case 23:return Dn(t),nc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),a=t.updateQueue,a!==null&&Is(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Z(Ba),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kn(it),Ke(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function xv(e,t){switch(Po(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(it),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ne(t),null;case 13:if(Dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ot),null;case 4:return Ue(),null;case 10:return kn(t.type),null;case 22:case 23:return Dn(t),nc(),e!==null&&Z(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(it),null;case 25:return null;default:return null}}function tm(e,t){switch(Po(t),t.tag){case 3:kn(it),Ue();break;case 26:case 27:case 5:ne(t);break;case 4:Ue();break;case 13:Dn(t);break;case 19:Z(ot);break;case 10:kn(t.type);break;case 22:case 23:Dn(t),nc(),e!==null&&Z(Ba);break;case 24:kn(it)}}function Al(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){l=void 0;var u=a.create,y=a.inst;l=u(),y.destroy=l}a=a.next}while(a!==o)}}catch(b){We(t,t.return,b)}}function na(e,t,a){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var u=o.next;l=u;do{if((l.tag&e)===e){var y=l.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,o=t;var A=a,z=b;try{z()}catch(G){We(o,A,G)}}}l=l.next}while(l!==u)}}catch(G){We(t,t.return,G)}}function nm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{$d(t,a)}catch(l){We(e,e.return,l)}}}function am(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){We(e,t,l)}}function Rl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(o){We(e,t,o)}}function gn(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(o){We(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){We(e,t,o)}else a.current=null}function rm(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(o){We(e,e.return,o)}}function kc(e,t,a){try{var l=e.stateNode;Bv(l,e.type,a,t),l[kt]=t}catch(o){We(e,e.return,o)}}function lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ua(e.type)||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ci));else if(l!==4&&(l===27&&ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Dc(e,t,a),e=e.sibling;e!==null;)Dc(e,t,a),e=e.sibling}function Zs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zs(e,t,a),e=e.sibling;e!==null;)Zs(e,t,a),e=e.sibling}function sm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);xt(t,l,a),t[bt]=e,t[kt]=a}catch(u){We(e,e.return,u)}}var zn=!1,at=!1,Tc=!1,im=typeof WeakSet=="function"?WeakSet:Set,ht=null;function yv(e,t){if(e=e.containerInfo,au=gi,e=yd(e),Mo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var o=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var y=0,b=-1,A=-1,z=0,G=0,X=e,L=null;t:for(;;){for(var U;X!==a||o!==0&&X.nodeType!==3||(b=y+o),X!==u||l!==0&&X.nodeType!==3||(A=y+l),X.nodeType===3&&(y+=X.nodeValue.length),(U=X.firstChild)!==null;)L=X,X=U;for(;;){if(X===e)break t;if(L===a&&++z===o&&(b=y),L===u&&++G===l&&(A=y),(U=X.nextSibling)!==null)break;X=L,L=X.parentNode}X=U}a=b===-1||A===-1?null:{start:b,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(ru={focusedElem:e,selectionRange:a},gi=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,o=u.memoizedProps,u=u.memoizedState,l=a.stateNode;try{var Se=qa(a.type,o,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Se,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(be){We(a,a.return,be)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)iu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":iu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function om(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),l&4&&Al(5,a);break;case 1:if(aa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){We(a,a.return,y)}else{var o=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){We(a,a.return,y)}}l&64&&nm(a),l&512&&Rl(a,a.return);break;case 3:if(aa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$d(e,t)}catch(y){We(a,a.return,y)}}break;case 27:t===null&&l&4&&sm(a);case 26:case 5:aa(e,a),t===null&&l&4&&rm(a),l&512&&Rl(a,a.return);break;case 12:aa(e,a);break;case 13:aa(e,a),l&4&&fm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Av.bind(null,a),Yv(e,a))));break;case 22:if(l=a.memoizedState!==null||zn,!l){t=t!==null&&t.memoizedState!==null||at,o=zn;var u=at;zn=l,(at=t)&&!u?ra(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),zn=o,at=u}break;case 30:break;default:aa(e,a)}}function cm(e){var t=e.alternate;t!==null&&(e.alternate=null,cm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,Tt=!1;function Ln(e,t,a){for(a=a.child;a!==null;)um(e,t,a),a=a.sibling}function um(e,t,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Fr,a)}catch{}switch(a.tag){case 26:at||gn(a,t),Ln(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||gn(a,t);var l=Fe,o=Tt;ua(a.type)&&(Fe=a.stateNode,Tt=!1),Ln(e,t,a),Hl(a.stateNode),Fe=l,Tt=o;break;case 5:at||gn(a,t);case 6:if(l=Fe,o=Tt,Fe=null,Ln(e,t,a),Fe=l,Tt=o,Fe!==null)if(Tt)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(a.stateNode)}catch(u){We(a,t,u)}else try{Fe.removeChild(a.stateNode)}catch(u){We(a,t,u)}break;case 18:Fe!==null&&(Tt?(e=Fe,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Zm(Fe,a.stateNode));break;case 4:l=Fe,o=Tt,Fe=a.stateNode.containerInfo,Tt=!0,Ln(e,t,a),Fe=l,Tt=o;break;case 0:case 11:case 14:case 15:at||na(2,a,t),at||na(4,a,t),Ln(e,t,a);break;case 1:at||(gn(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&am(a,t,l)),Ln(e,t,a);break;case 21:Ln(e,t,a);break;case 22:at=(l=at)||a.memoizedState!==null,Ln(e,t,a),at=l;break;default:Ln(e,t,a)}}function fm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){We(t,t.return,a)}}function vv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new im),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new im),t;default:throw Error(s(435,e.tag))}}function _c(e,t){var a=vv(e);t.forEach(function(l){var o=Rv.bind(null,e,l);a.has(l)||(a.add(l),l.then(o,o))})}function Pt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var o=a[l],u=e,y=t,b=y;e:for(;b!==null;){switch(b.tag){case 27:if(ua(b.type)){Fe=b.stateNode,Tt=!1;break e}break;case 5:Fe=b.stateNode,Tt=!1;break e;case 3:case 4:Fe=b.stateNode.containerInfo,Tt=!0;break e}b=b.return}if(Fe===null)throw Error(s(160));um(u,y,o),Fe=null,Tt=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)dm(t,e),t=t.sibling}var on=null;function dm(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pt(t,e),$t(e),l&4&&(na(3,e,e.return),Al(3,e),na(5,e,e.return));break;case 1:Pt(t,e),$t(e),l&512&&(at||a===null||gn(a,a.return)),l&64&&zn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var o=on;if(Pt(t,e),$t(e),l&512&&(at||a===null||gn(a,a.return)),l&4){var u=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":u=o.getElementsByTagName("title")[0],(!u||u[Zr]||u[bt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(l),o.head.insertBefore(u,o.querySelector("head > title"))),xt(u,l,a),u[bt]=e,ft(u),l=u;break e;case"link":var y=sp("link","href",o).get(l+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(u=y[b],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break t}}u=o.createElement(l),xt(u,l,a),o.head.appendChild(u);break;case"meta":if(y=sp("meta","content",o).get(l+(a.content||""))){for(b=0;b<y.length;b++)if(u=y[b],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break t}}u=o.createElement(l),xt(u,l,a),o.head.appendChild(u);break;default:throw Error(s(468,l))}u[bt]=e,ft(u),l=u}e.stateNode=l}else ip(o,e.type,e.stateNode);else e.stateNode=lp(o,l,e.memoizedProps);else u!==l?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,l===null?ip(o,e.type,e.stateNode):lp(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pt(t,e),$t(e),l&512&&(at||a===null||gn(a,a.return)),a!==null&&l&4&&kc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pt(t,e),$t(e),l&512&&(at||a===null||gn(a,a.return)),e.flags&32){o=e.stateNode;try{sr(o,"")}catch(U){We(e,e.return,U)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,kc(e,o,a!==null?a.memoizedProps:o)),l&1024&&(Tc=!0);break;case 6:if(Pt(t,e),$t(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(U){We(e,e.return,U)}}break;case 3:if(hi=null,o=on,on=fi(t.containerInfo),Pt(t,e),on=o,$t(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(U){We(e,e.return,U)}Tc&&(Tc=!1,hm(e));break;case 4:l=on,on=fi(e.stateNode.containerInfo),Pt(t,e),$t(e),on=l;break;case 12:Pt(t,e),$t(e);break;case 13:Pt(t,e),$t(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qc=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_c(e,l)));break;case 22:o=e.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,z=zn,G=at;if(zn=z||o,at=G||A,Pt(t,e),at=G,zn=z,$t(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||A||zn||at||Va(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){A=a=t;try{if(u=A.stateNode,o)y=u.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=A.stateNode;var X=A.memoizedProps.style,L=X!=null&&X.hasOwnProperty("display")?X.display:null;b.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(U){We(A,A.return,U)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=o?"":A.memoizedProps}catch(U){We(A,A.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_c(e,a))));break;case 19:Pt(t,e),$t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_c(e,l)));break;case 30:break;case 21:break;default:Pt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(lm(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var o=a.stateNode,u=Mc(e);Zs(e,u,o);break;case 5:var y=a.stateNode;a.flags&32&&(sr(y,""),a.flags&=-33);var b=Mc(e);Zs(e,b,y);break;case 3:case 4:var A=a.stateNode.containerInfo,z=Mc(e);Dc(e,z,A);break;default:throw Error(s(161))}}catch(G){We(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)om(e,t.alternate,t),t=t.sibling}function Va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:na(4,t,t.return),Va(t);break;case 1:gn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&am(t,t.return,a),Va(t);break;case 27:Hl(t.stateNode);case 26:case 5:gn(t,t.return),Va(t);break;case 22:t.memoizedState===null&&Va(t);break;case 30:Va(t);break;default:Va(t)}e=e.sibling}}function ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,u=t,y=u.flags;switch(u.tag){case 0:case 11:case 15:ra(o,u,a),Al(4,u);break;case 1:if(ra(o,u,a),l=u,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(z){We(l,l.return,z)}if(l=u,o=l.updateQueue,o!==null){var b=l.stateNode;try{var A=o.shared.hiddenCallbacks;if(A!==null)for(o.shared.hiddenCallbacks=null,o=0;o<A.length;o++)Pd(A[o],b)}catch(z){We(l,l.return,z)}}a&&y&64&&nm(u),Rl(u,u.return);break;case 27:sm(u);case 26:case 5:ra(o,u,a),a&&l===null&&y&4&&rm(u),Rl(u,u.return);break;case 12:ra(o,u,a);break;case 13:ra(o,u,a),a&&y&4&&fm(o,u);break;case 22:u.memoizedState===null&&ra(o,u,a),Rl(u,u.return);break;case 30:break;default:ra(o,u,a)}t=t.sibling}}function zc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&hl(a))}function Lc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e))}function xn(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mm(e,t,a,l),t=t.sibling}function mm(e,t,a,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,a,l),o&2048&&Al(9,t);break;case 1:xn(e,t,a,l);break;case 3:xn(e,t,a,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e)));break;case 12:if(o&2048){xn(e,t,a,l),e=t.stateNode;try{var u=t.memoizedProps,y=u.id,b=u.onPostCommit;typeof b=="function"&&b(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){We(t,t.return,A)}}else xn(e,t,a,l);break;case 13:xn(e,t,a,l);break;case 23:break;case 22:u=t.stateNode,y=t.alternate,t.memoizedState!==null?u._visibility&2?xn(e,t,a,l):Ol(e,t):u._visibility&2?xn(e,t,a,l):(u._visibility|=2,Cr(e,t,a,l,(t.subtreeFlags&10256)!==0)),o&2048&&zc(y,t);break;case 24:xn(e,t,a,l),o&2048&&Lc(t.alternate,t);break;default:xn(e,t,a,l)}}function Cr(e,t,a,l,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,y=t,b=a,A=l,z=y.flags;switch(y.tag){case 0:case 11:case 15:Cr(u,y,b,A,o),Al(8,y);break;case 23:break;case 22:var G=y.stateNode;y.memoizedState!==null?G._visibility&2?Cr(u,y,b,A,o):Ol(u,y):(G._visibility|=2,Cr(u,y,b,A,o)),o&&z&2048&&zc(y.alternate,y);break;case 24:Cr(u,y,b,A,o),o&&z&2048&&Lc(y.alternate,y);break;default:Cr(u,y,b,A,o)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,o=l.flags;switch(l.tag){case 22:Ol(a,l),o&2048&&zc(l.alternate,l);break;case 24:Ol(a,l),o&2048&&Lc(l.alternate,l);break;default:Ol(a,l)}t=t.sibling}}var kl=8192;function Er(e){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)pm(e),e=e.sibling}function pm(e){switch(e.tag){case 26:Er(e),e.flags&kl&&e.memoizedState!==null&&rb(on,e.memoizedState,e.memoizedProps);break;case 5:Er(e);break;case 3:case 4:var t=on;on=fi(e.stateNode.containerInfo),Er(e),on=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=kl,kl=16777216,Er(e),kl=t):Er(e));break;default:Er(e)}}function gm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ht=l,ym(l,e)}gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xm(e),e=e.sibling}function xm(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&na(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Js(e)):Ml(e);break;default:Ml(e)}}function Js(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];ht=l,ym(l,e)}gm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:na(8,t,t.return),Js(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Js(t));break;default:Js(t)}e=e.sibling}}function ym(e,t){for(;ht!==null;){var a=ht;switch(a.tag){case 0:case 11:case 15:na(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:hl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ht=l;else e:for(a=e;ht!==null;){l=ht;var o=l.sibling,u=l.return;if(cm(l),l===a){ht=null;break e}if(o!==null){o.return=u,ht=o;break e}ht=u}}}var bv={getCacheForType:function(e){var t=wt(it),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},wv=typeof WeakMap=="function"?WeakMap:Map,qe=0,Xe=null,Me=null,_e=0,Ve=0,Gt=null,la=!1,Ar=!1,Hc=!1,Hn=0,et=0,sa=0,Pa=0,Bc=0,rn=0,Rr=0,Dl=null,_t=null,Uc=!1,qc=0,ei=1/0,ti=null,ia=null,gt=0,oa=null,Or=null,kr=0,Vc=0,Pc=null,vm=null,Tl=0,$c=null;function Yt(){if((qe&2)!==0&&_e!==0)return _e&-_e;if(M.T!==null){var e=xr;return e!==0?e:Kc()}return zf()}function bm(){rn===0&&(rn=(_e&536870912)===0||Be?Mf():536870912);var e=an.current;return e!==null&&(e.flags|=32),rn}function Wt(e,t,a){(e===Xe&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Mr(e,0),ca(e,_e,rn,!1)),Ir(e,a),((qe&2)===0||e!==Xe)&&(e===Xe&&((qe&2)===0&&(Pa|=a),et===4&&ca(e,_e,rn,!1)),yn(e))}function wm(e,t,a){if((qe&6)!==0)throw Error(s(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Kr(e,t),o=l?jv(e,t):Wc(e,t,!0),u=l;do{if(o===0){Ar&&!l&&ca(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Sv(a)){o=Wc(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var b=e;o=Dl;var A=b.current.memoizedState.isDehydrated;if(A&&(Mr(b,y).flags|=256),y=Wc(b,y,!1),y!==2){if(Hc&&!A){b.errorRecoveryDisabledLanes|=u,Pa|=u,o=4;break e}u=_t,_t=o,u!==null&&(_t===null?_t=u:_t.push.apply(_t,u))}o=y}if(u=!1,o!==2)continue}}if(o===1){Mr(e,0),ca(e,t,0,!0);break}e:{switch(l=e,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ca(l,t,rn,!la);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=qc+300-rt(),10<o)){if(ca(l,t,rn,!la),ds(l,0,!0)!==0)break e;l.timeoutHandle=Km(Sm.bind(null,l,a,_t,ti,Uc,t,rn,Pa,Rr,la,u,2,-0,0),o);break e}Sm(l,a,_t,ti,Uc,t,rn,Pa,Rr,la,u,0,-0,0)}}break}while(!0);yn(e)}function Sm(e,t,a,l,o,u,y,b,A,z,G,X,L,U){if(e.timeoutHandle=-1,X=t.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(ql={stylesheets:null,count:0,unsuspend:ab},pm(t),X=lb(),X!==null)){e.cancelPendingCommit=X(Om.bind(null,e,t,u,a,l,o,y,b,A,G,1,L,U)),ca(e,u,y,!z);return}Om(e,t,u,a,l,o,y,b,A)}function Sv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var o=a[l],u=o.getSnapshot;o=o.value;try{if(!qt(u(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ca(e,t,a,l){t&=~Bc,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var u=31-Ut(o),y=1<<u;l[u]=-1,o&=~y}a!==0&&Tf(e,a,t)}function ni(){return(qe&6)===0?(_l(0),!1):!0}function Gc(){if(Me!==null){if(Ve===0)var e=Me.return;else e=Me,On=La=null,ic(e),Nr=null,jl=0,e=Me;for(;e!==null;)tm(e.alternate,e),e=e.return;Me=null}}function Mr(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,qv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gc(),Xe=e,Me=a=En(e.current,null),_e=t,Ve=0,Gt=null,la=!1,Ar=Kr(e,t),Hc=!1,Rr=rn=Bc=Pa=sa=et=0,_t=Dl=null,Uc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-Ut(l),u=1<<o;t|=e[o],l&=~u}return Hn=t,js(),a}function Nm(e,t){Re=null,M.H=$s,t===pl||t===Ts?(t=qd(),Ve=3):t===Hd?(t=qd(),Ve=4):Ve=t===Vh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,Me===null&&(et=1,Qs(e,Jt(t,e.current)))}function jm(){var e=M.H;return M.H=$s,e===null?$s:e}function Cm(){var e=M.A;return M.A=bv,e}function Yc(){et=4,la||(_e&4194048)!==_e&&an.current!==null||(Ar=!0),(sa&134217727)===0&&(Pa&134217727)===0||Xe===null||ca(Xe,_e,rn,!1)}function Wc(e,t,a){var l=qe;qe|=2;var o=jm(),u=Cm();(Xe!==e||_e!==t)&&(ti=null,Mr(e,t)),t=!1;var y=et;e:do try{if(Ve!==0&&Me!==null){var b=Me,A=Gt;switch(Ve){case 8:Gc(),y=6;break e;case 3:case 2:case 9:case 6:an.current===null&&(t=!0);var z=Ve;if(Ve=0,Gt=null,Dr(e,b,A,z),a&&Ar){y=0;break e}break;default:z=Ve,Ve=0,Gt=null,Dr(e,b,A,z)}}Nv(),y=et;break}catch(G){Nm(e,G)}while(!0);return t&&e.shellSuspendCounter++,On=La=null,qe=l,M.H=o,M.A=u,Me===null&&(Xe=null,_e=0,js()),y}function Nv(){for(;Me!==null;)Em(Me)}function jv(e,t){var a=qe;qe|=2;var l=jm(),o=Cm();Xe!==e||_e!==t?(ti=null,ei=rt()+500,Mr(e,t)):Ar=Kr(e,t);e:do try{if(Ve!==0&&Me!==null){t=Me;var u=Gt;t:switch(Ve){case 1:Ve=0,Gt=null,Dr(e,t,u,1);break;case 2:case 9:if(Bd(u)){Ve=0,Gt=null,Am(t);break}t=function(){Ve!==2&&Ve!==9||Xe!==e||(Ve=7),yn(e)},u.then(t,t);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:Bd(u)?(Ve=0,Gt=null,Am(t)):(Ve=0,Gt=null,Dr(e,t,u,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var b=Me;if(!y||op(y)){Ve=0,Gt=null;var A=b.sibling;if(A!==null)Me=A;else{var z=b.return;z!==null?(Me=z,ai(z)):Me=null}break t}}Ve=0,Gt=null,Dr(e,t,u,5);break;case 6:Ve=0,Gt=null,Dr(e,t,u,6);break;case 8:Gc(),et=6;break e;default:throw Error(s(462))}}Cv();break}catch(G){Nm(e,G)}while(!0);return On=La=null,M.H=l,M.A=o,qe=a,Me!==null?0:(Xe=null,_e=0,js(),et)}function Cv(){for(;Me!==null&&!Ct();)Em(Me)}function Em(e){var t=Jh(e.alternate,e,Hn);e.memoizedProps=e.pendingProps,t===null?ai(e):Me=t}function Am(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Xh(a,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=Xh(a,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:ic(t);default:tm(a,t),t=Me=Rd(t,Hn),t=Jh(a,t,Hn)}e.memoizedProps=e.pendingProps,t===null?ai(e):Me=t}function Dr(e,t,a,l){On=La=null,ic(t),Nr=null,jl=0;var o=t.return;try{if(mv(e,o,t,a,_e)){et=1,Qs(e,Jt(a,e.current)),Me=null;return}}catch(u){if(o!==null)throw Me=o,u;et=1,Qs(e,Jt(a,e.current)),Me=null;return}t.flags&32768?(Be||l===1?e=!0:Ar||(_e&536870912)!==0?e=!1:(la=e=!0,(l===2||l===9||l===3||l===6)&&(l=an.current,l!==null&&l.tag===13&&(l.flags|=16384))),Rm(t,e)):ai(t)}function ai(e){var t=e;do{if((t.flags&32768)!==0){Rm(t,la);return}e=t.return;var a=gv(t.alternate,t,Hn);if(a!==null){Me=a;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);et===0&&(et=5)}function Rm(e,t){do{var a=xv(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);et=6,Me=null}function Om(e,t,a,l,o,u,y,b,A){e.cancelPendingCommit=null;do ri();while(gt!==0);if((qe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Lo,ay(e,a,u,y,b,A),e===Xe&&(Me=Xe=null,_e=0),Or=t,oa=e,kr=a,Vc=u,Pc=o,vm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ov(cs,function(){return _m(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,o=W.p,W.p=2,y=qe,qe|=4;try{yv(e,t,a)}finally{qe=y,W.p=o,M.T=l}}gt=1,km(),Mm(),Dm()}}function km(){if(gt===1){gt=0;var e=oa,t=Or,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=W.p;W.p=2;var o=qe;qe|=4;try{dm(t,e);var u=ru,y=yd(e.containerInfo),b=u.focusedElem,A=u.selectionRange;if(y!==b&&b&&b.ownerDocument&&xd(b.ownerDocument.documentElement,b)){if(A!==null&&Mo(b)){var z=A.start,G=A.end;if(G===void 0&&(G=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(G,b.value.length);else{var X=b.ownerDocument||document,L=X&&X.defaultView||window;if(L.getSelection){var U=L.getSelection(),Se=b.textContent.length,be=Math.min(A.start,Se),Ye=A.end===void 0?be:Math.min(A.end,Se);!U.extend&&be>Ye&&(y=Ye,Ye=be,be=y);var D=gd(b,be),O=gd(b,Ye);if(D&&O&&(U.rangeCount!==1||U.anchorNode!==D.node||U.anchorOffset!==D.offset||U.focusNode!==O.node||U.focusOffset!==O.offset)){var T=X.createRange();T.setStart(D.node,D.offset),U.removeAllRanges(),be>Ye?(U.addRange(T),U.extend(O.node,O.offset)):(T.setEnd(O.node,O.offset),U.addRange(T))}}}}for(X=[],U=b;U=U.parentNode;)U.nodeType===1&&X.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<X.length;b++){var Y=X[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}gi=!!au,ru=au=null}finally{qe=o,W.p=l,M.T=a}}e.current=t,gt=2}}function Mm(){if(gt===2){gt=0;var e=oa,t=Or,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=W.p;W.p=2;var o=qe;qe|=4;try{om(e,t.alternate,t)}finally{qe=o,W.p=l,M.T=a}}gt=3}}function Dm(){if(gt===4||gt===3){gt=0,vt();var e=oa,t=Or,a=kr,l=vm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?gt=5:(gt=0,Or=oa=null,Tm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ia=null),co(a),t=t.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Fr,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,o=W.p,W.p=2,M.T=null;try{for(var u=e.onRecoverableError,y=0;y<l.length;y++){var b=l[y];u(b.value,{componentStack:b.stack})}}finally{M.T=t,W.p=o}}(kr&3)!==0&&ri(),yn(e),o=e.pendingLanes,(a&4194090)!==0&&(o&42)!==0?e===$c?Tl++:(Tl=0,$c=e):Tl=0,_l(0)}}function Tm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hl(t)))}function ri(e){return km(),Mm(),Dm(),_m()}function _m(){if(gt!==5)return!1;var e=oa,t=Vc;Vc=0;var a=co(kr),l=M.T,o=W.p;try{W.p=32>a?32:a,M.T=null,a=Pc,Pc=null;var u=oa,y=kr;if(gt=0,Or=oa=null,kr=0,(qe&6)!==0)throw Error(s(331));var b=qe;if(qe|=4,xm(u.current),mm(u,u.current,y,a),qe=b,_l(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Fr,u)}catch{}return!0}finally{W.p=o,M.T=l,Tm(e,t)}}function zm(e,t,a){t=Jt(a,t),t=wc(e.stateNode,t,2),e=Zn(e,t,2),e!==null&&(Ir(e,2),yn(e))}function We(e,t,a){if(e.tag===3)zm(e,e,a);else for(;t!==null;){if(t.tag===3){zm(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ia===null||!ia.has(l))){e=Jt(a,e),a=Uh(2),l=Zn(t,a,2),l!==null&&(qh(a,l,t,e),Ir(l,2),yn(l));break}}t=t.return}}function Xc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new wv;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(a)||(Hc=!0,o.add(a),e=Ev.bind(null,e,t,a),t.then(e,e))}function Ev(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(_e&a)===a&&(et===4||et===3&&(_e&62914560)===_e&&300>rt()-qc?(qe&2)===0&&Mr(e,0):Bc|=a,Rr===_e&&(Rr=0)),yn(e)}function Lm(e,t){t===0&&(t=Df()),e=hr(e,t),e!==null&&(Ir(e,t),yn(e))}function Av(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Lm(e,a)}function Rv(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Lm(e,a)}function Ov(e,t){return ye(e,t)}var li=null,Tr=null,Qc=!1,si=!1,Fc=!1,$a=0;function yn(e){e!==Tr&&e.next===null&&(Tr===null?li=Tr=e:Tr=Tr.next=e),si=!0,Qc||(Qc=!0,Mv())}function _l(e,t){if(!Fc&&si){Fc=!0;do for(var a=!1,l=li;l!==null;){if(e!==0){var o=l.pendingLanes;if(o===0)var u=0;else{var y=l.suspendedLanes,b=l.pingedLanes;u=(1<<31-Ut(42|e)+1)-1,u&=o&~(y&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,qm(l,u))}else u=_e,u=ds(l,l===Xe?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Kr(l,u)||(a=!0,qm(l,u));l=l.next}while(a);Fc=!1}}function kv(){Hm()}function Hm(){si=Qc=!1;var e=0;$a!==0&&(Uv()&&(e=$a),$a=0);for(var t=rt(),a=null,l=li;l!==null;){var o=l.next,u=Bm(l,t);u===0?(l.next=null,a===null?li=o:a.next=o,o===null&&(Tr=a)):(a=l,(e!==0||(u&3)!==0)&&(si=!0)),l=o}_l(e)}function Bm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var y=31-Ut(u),b=1<<y,A=o[y];A===-1?((b&a)===0||(b&l)!==0)&&(o[y]=ny(b,t)):A<=t&&(e.expiredLanes|=b),u&=~b}if(t=Xe,a=_e,a=ds(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ae(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kr(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ae(l),co(a)){case 2:case 8:a=Za;break;case 32:a=cs;break;case 268435456:a=kf;break;default:a=cs}return l=Um.bind(null,e),a=ye(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ae(l),e.callbackPriority=2,e.callbackNode=null,2}function Um(e,t){if(gt!==0&&gt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ri()&&e.callbackNode!==a)return null;var l=_e;return l=ds(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(wm(e,l,t),Bm(e,rt()),e.callbackNode!=null&&e.callbackNode===a?Um.bind(null,e):null)}function qm(e,t){if(ri())return null;wm(e,t,!0)}function Mv(){Vv(function(){(qe&6)!==0?ye(Yn,kv):Hm()})}function Kc(){return $a===0&&($a=Mf()),$a}function Vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xs(""+e)}function Pm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dv(e,t,a,l,o){if(t==="submit"&&a&&a.stateNode===o){var u=Vm((o[kt]||null).action),y=l.submitter;y&&(t=(t=y[kt]||null)?Vm(t.formAction):y.getAttribute("formAction"),t!==null&&(u=t,y=null));var b=new ws("action","action",null,l,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($a!==0){var A=y?Pm(o,y):new FormData(o);gc(a,{pending:!0,data:A,method:o.method,action:u},null,A)}}else typeof u=="function"&&(b.preventDefault(),A=y?Pm(o,y):new FormData(o),gc(a,{pending:!0,data:A,method:o.method,action:u},u,A))},currentTarget:o}]})}}for(var Ic=0;Ic<zo.length;Ic++){var Zc=zo[Ic],Tv=Zc.toLowerCase(),_v=Zc[0].toUpperCase()+Zc.slice(1);sn(Tv,"on"+_v)}sn(wd,"onAnimationEnd"),sn(Sd,"onAnimationIteration"),sn(Nd,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(Iy,"onTransitionRun"),sn(Zy,"onTransitionStart"),sn(Jy,"onTransitionCancel"),sn(jd,"onTransitionEnd"),ar("onMouseEnter",["mouseout","mouseover"]),ar("onMouseLeave",["mouseout","mouseover"]),ar("onPointerEnter",["pointerout","pointerover"]),ar("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function $m(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],o=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var y=l.length-1;0<=y;y--){var b=l[y],A=b.instance,z=b.currentTarget;if(b=b.listener,A!==u&&o.isPropagationStopped())break e;u=b,o.currentTarget=z;try{u(o)}catch(G){Xs(G)}o.currentTarget=null,u=A}else for(y=0;y<l.length;y++){if(b=l[y],A=b.instance,z=b.currentTarget,b=b.listener,A!==u&&o.isPropagationStopped())break e;u=b,o.currentTarget=z;try{u(o)}catch(G){Xs(G)}o.currentTarget=null,u=A}}}}function De(e,t){var a=t[uo];a===void 0&&(a=t[uo]=new Set);var l=e+"__bubble";a.has(l)||(Gm(t,e,2,!1),a.add(l))}function Jc(e,t,a){var l=0;t&&(l|=4),Gm(a,e,l,t)}var ii="_reactListening"+Math.random().toString(36).slice(2);function eu(e){if(!e[ii]){e[ii]=!0,Hf.forEach(function(a){a!=="selectionchange"&&(zv.has(a)||Jc(a,!1,e),Jc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ii]||(t[ii]=!0,Jc("selectionchange",!1,t))}}function Gm(e,t,a,l){switch(mp(t)){case 2:var o=ob;break;case 8:o=cb;break;default:o=mu}a=o.bind(null,t,a,e),o=void 0,!So||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function tu(e,t,a,l,o){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var b=l.stateNode.containerInfo;if(b===o)break;if(y===4)for(y=l.return;y!==null;){var A=y.tag;if((A===3||A===4)&&y.stateNode.containerInfo===o)return;y=y.return}for(;b!==null;){if(y=er(b),y===null)return;if(A=y.tag,A===5||A===6||A===26||A===27){l=u=y;continue e}b=b.parentNode}}l=l.return}If(function(){var z=u,G=bo(a),X=[];e:{var L=Cd.get(e);if(L!==void 0){var U=ws,Se=e;switch(e){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":U=Oy;break;case"focusin":Se="focus",U=Eo;break;case"focusout":Se="blur",U=Eo;break;case"beforeblur":case"afterblur":U=Eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Dy;break;case wd:case Sd:case Nd:U=by;break;case jd:U=_y;break;case"scroll":case"scrollend":U=py;break;case"wheel":U=Ly;break;case"copy":case"cut":case"paste":U=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=nd;break;case"toggle":case"beforetoggle":U=By}var be=(t&4)!==0,Ye=!be&&(e==="scroll"||e==="scrollend"),D=be?L!==null?L+"Capture":null:L;be=[];for(var O=z,T;O!==null;){var Y=O;if(T=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||T===null||D===null||(Y=el(O,D),Y!=null&&be.push(Ll(O,Y,T))),Ye)break;O=O.return}0<be.length&&(L=new U(L,Se,null,a,G),X.push({event:L,listeners:be}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",L&&a!==vo&&(Se=a.relatedTarget||a.fromElement)&&(er(Se)||Se[Ja]))break e;if((U||L)&&(L=G.window===G?G:(L=G.ownerDocument)?L.defaultView||L.parentWindow:window,U?(Se=a.relatedTarget||a.toElement,U=z,Se=Se?er(Se):null,Se!==null&&(Ye=d(Se),be=Se.tag,Se!==Ye||be!==5&&be!==27&&be!==6)&&(Se=null)):(U=null,Se=z),U!==Se)){if(be=ed,Y="onMouseLeave",D="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(be=nd,Y="onPointerLeave",D="onPointerEnter",O="pointer"),Ye=U==null?L:Jr(U),T=Se==null?L:Jr(Se),L=new be(Y,O+"leave",U,a,G),L.target=Ye,L.relatedTarget=T,Y=null,er(G)===z&&(be=new be(D,O+"enter",Se,a,G),be.target=T,be.relatedTarget=Ye,Y=be),Ye=Y,U&&Se)t:{for(be=U,D=Se,O=0,T=be;T;T=_r(T))O++;for(T=0,Y=D;Y;Y=_r(Y))T++;for(;0<O-T;)be=_r(be),O--;for(;0<T-O;)D=_r(D),T--;for(;O--;){if(be===D||D!==null&&be===D.alternate)break t;be=_r(be),D=_r(D)}be=null}else be=null;U!==null&&Ym(X,L,U,be,!1),Se!==null&&Ye!==null&&Ym(X,Ye,Se,be,!0)}}e:{if(L=z?Jr(z):window,U=L.nodeName&&L.nodeName.toLowerCase(),U==="select"||U==="input"&&L.type==="file")var de=ud;else if(od(L))if(fd)de=Qy;else{de=Wy;var ke=Yy}else U=L.nodeName,!U||U.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?z&&yo(z.elementType)&&(de=ud):de=Xy;if(de&&(de=de(e,z))){cd(X,de,a,G);break e}ke&&ke(e,L,z),e==="focusout"&&z&&L.type==="number"&&z.memoizedProps.value!=null&&xo(L,"number",L.value)}switch(ke=z?Jr(z):window,e){case"focusin":(od(ke)||ke.contentEditable==="true")&&(ur=ke,Do=z,ol=null);break;case"focusout":ol=Do=ur=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,vd(X,a,G);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":vd(X,a,G)}var xe;if(Ro)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else cr?sd(e,a)&&(we="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(ad&&a.locale!=="ko"&&(cr||we!=="onCompositionStart"?we==="onCompositionEnd"&&cr&&(xe=Zf()):(Qn=G,No="value"in Qn?Qn.value:Qn.textContent,cr=!0)),ke=oi(z,we),0<ke.length&&(we=new td(we,e,null,a,G),X.push({event:we,listeners:ke}),xe?we.data=xe:(xe=id(a),xe!==null&&(we.data=xe)))),(xe=qy?Vy(e,a):Py(e,a))&&(we=oi(z,"onBeforeInput"),0<we.length&&(ke=new td("onBeforeInput","beforeinput",null,a,G),X.push({event:ke,listeners:we}),ke.data=xe)),Dv(X,e,z,a,G)}$m(X,t)})}function Ll(e,t,a){return{instance:e,listener:t,currentTarget:a}}function oi(e,t){for(var a=t+"Capture",l=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=el(e,a),o!=null&&l.unshift(Ll(e,o,u)),o=el(e,t),o!=null&&l.push(Ll(e,o,u))),e.tag===3)return l;e=e.return}return[]}function _r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ym(e,t,a,l,o){for(var u=t._reactName,y=[];a!==null&&a!==l;){var b=a,A=b.alternate,z=b.stateNode;if(b=b.tag,A!==null&&A===l)break;b!==5&&b!==26&&b!==27||z===null||(A=z,o?(z=el(a,u),z!=null&&y.unshift(Ll(a,z,A))):o||(z=el(a,u),z!=null&&y.push(Ll(a,z,A)))),a=a.return}y.length!==0&&e.push({event:t,listeners:y})}var Lv=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function Wm(e){return(typeof e=="string"?e:""+e).replace(Lv,`
`).replace(Hv,"")}function Xm(e,t){return t=Wm(t),Wm(e)===t}function ci(){}function Ge(e,t,a,l,o,u){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||sr(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&sr(e,""+l);break;case"className":ms(e,"class",l);break;case"tabIndex":ms(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(e,a,l);break;case"style":Ff(e,l,u);break;case"data":if(t!=="object"){ms(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=xs(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Ge(e,t,"name",o.name,o,null),Ge(e,t,"formEncType",o.formEncType,o,null),Ge(e,t,"formMethod",o.formMethod,o,null),Ge(e,t,"formTarget",o.formTarget,o,null)):(Ge(e,t,"encType",o.encType,o,null),Ge(e,t,"method",o.method,o,null),Ge(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=xs(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ci);break;case"onScroll":l!=null&&De("scroll",e);break;case"onScrollEnd":l!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=xs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":De("beforetoggle",e),De("toggle",e),hs(e,"popover",l);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hy.get(a)||a,hs(e,a,l))}}function nu(e,t,a,l,o,u){switch(a){case"style":Ff(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?sr(e,l):(typeof l=="number"||typeof l=="bigint")&&sr(e,""+l);break;case"onScroll":l!=null&&De("scroll",e);break;case"onScrollEnd":l!=null&&De("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),u=e[kt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof l=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,o);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):hs(e,a,l)}}}function xt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var l=!1,o=!1,u;for(u in a)if(a.hasOwnProperty(u)){var y=a[u];if(y!=null)switch(u){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ge(e,t,u,y,a,null)}}o&&Ge(e,t,"srcSet",a.srcSet,a,null),l&&Ge(e,t,"src",a.src,a,null);return;case"input":De("invalid",e);var b=u=y=o=null,A=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":o=G;break;case"type":y=G;break;case"checked":A=G;break;case"defaultChecked":z=G;break;case"value":u=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,t));break;default:Ge(e,t,l,G,a,null)}}Yf(e,u,b,A,z,y,o,!1),ps(e);return;case"select":De("invalid",e),l=y=u=null;for(o in a)if(a.hasOwnProperty(o)&&(b=a[o],b!=null))switch(o){case"value":u=b;break;case"defaultValue":y=b;break;case"multiple":l=b;default:Ge(e,t,o,b,a,null)}t=u,a=y,e.multiple=!!l,t!=null?lr(e,!!l,t,!1):a!=null&&lr(e,!!l,a,!0);return;case"textarea":De("invalid",e),u=o=l=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":l=b;break;case"defaultValue":o=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ge(e,t,y,b,a,null)}Xf(e,l,o,u),ps(e);return;case"option":for(A in a)a.hasOwnProperty(A)&&(l=a[A],l!=null)&&(A==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ge(e,t,A,l,a,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(l=0;l<zl.length;l++)De(zl[l],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ge(e,t,z,l,a,null)}return;default:if(yo(t)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&nu(e,t,G,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Ge(e,t,b,l,a,null))}function Bv(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,y=null,b=null,A=null,z=null,G=null;for(U in a){var X=a[U];if(a.hasOwnProperty(U)&&X!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":A=X;default:l.hasOwnProperty(U)||Ge(e,t,U,null,l,X)}}for(var L in l){var U=l[L];if(X=a[L],l.hasOwnProperty(L)&&(U!=null||X!=null))switch(L){case"type":u=U;break;case"name":o=U;break;case"checked":z=U;break;case"defaultChecked":G=U;break;case"value":y=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:U!==X&&Ge(e,t,L,U,l,X)}}go(e,y,b,A,z,G,u,o);return;case"select":U=y=b=L=null;for(u in a)if(A=a[u],a.hasOwnProperty(u)&&A!=null)switch(u){case"value":break;case"multiple":U=A;default:l.hasOwnProperty(u)||Ge(e,t,u,null,l,A)}for(o in l)if(u=l[o],A=a[o],l.hasOwnProperty(o)&&(u!=null||A!=null))switch(o){case"value":L=u;break;case"defaultValue":b=u;break;case"multiple":y=u;default:u!==A&&Ge(e,t,o,u,l,A)}t=b,a=y,l=U,L!=null?lr(e,!!a,L,!1):!!l!=!!a&&(t!=null?lr(e,!!a,t,!0):lr(e,!!a,a?[]:"",!1));return;case"textarea":U=L=null;for(b in a)if(o=a[b],a.hasOwnProperty(b)&&o!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(e,t,b,null,l,o)}for(y in l)if(o=l[y],u=a[y],l.hasOwnProperty(y)&&(o!=null||u!=null))switch(y){case"value":L=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&Ge(e,t,y,o,l,u)}Wf(e,L,U);return;case"option":for(var Se in a)L=a[Se],a.hasOwnProperty(Se)&&L!=null&&!l.hasOwnProperty(Se)&&(Se==="selected"?e.selected=!1:Ge(e,t,Se,null,l,L));for(A in l)L=l[A],U=a[A],l.hasOwnProperty(A)&&L!==U&&(L!=null||U!=null)&&(A==="selected"?e.selected=L&&typeof L!="function"&&typeof L!="symbol":Ge(e,t,A,L,l,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in a)L=a[be],a.hasOwnProperty(be)&&L!=null&&!l.hasOwnProperty(be)&&Ge(e,t,be,null,l,L);for(z in l)if(L=l[z],U=a[z],l.hasOwnProperty(z)&&L!==U&&(L!=null||U!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:Ge(e,t,z,L,l,U)}return;default:if(yo(t)){for(var Ye in a)L=a[Ye],a.hasOwnProperty(Ye)&&L!==void 0&&!l.hasOwnProperty(Ye)&&nu(e,t,Ye,void 0,l,L);for(G in l)L=l[G],U=a[G],!l.hasOwnProperty(G)||L===U||L===void 0&&U===void 0||nu(e,t,G,L,l,U);return}}for(var D in a)L=a[D],a.hasOwnProperty(D)&&L!=null&&!l.hasOwnProperty(D)&&Ge(e,t,D,null,l,L);for(X in l)L=l[X],U=a[X],!l.hasOwnProperty(X)||L===U||L==null&&U==null||Ge(e,t,X,L,l,U)}var au=null,ru=null;function ui(e){return e.nodeType===9?e:e.ownerDocument}function Qm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=null;function Uv(){var e=window.event;return e&&e.type==="popstate"?e===su?!1:(su=e,!0):(su=null,!1)}var Km=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(e){return Im.resolve(null).then(e).catch(Pv)}:Km;function Pv(e){setTimeout(function(){throw e})}function ua(e){return e==="head"}function Zm(e,t){var a=t,l=0,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<l&&8>l){a=l;var y=e.ownerDocument;if(a&1&&Hl(y.documentElement),a&2&&Hl(y.body),a&4)for(a=y.head,Hl(a),y=a.firstChild;y;){var b=y.nextSibling,A=y.nodeName;y[Zr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(o===0){e.removeChild(u),Yl(t);return}o--}else a==="$"||a==="$?"||a==="$!"?o++:l=a.charCodeAt(0)-48;else l=0;a=u}while(a);Yl(t)}function iu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":iu(a),fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $v(e,t,a,l){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=cn(e.nextSibling),e===null)break}return null}function Gv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=cn(e.nextSibling),e===null))return null;return e}function ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Yv(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var cu=null;function Jm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ep(e,t,a){switch(t=ui(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fo(e)}var ln=new Map,tp=new Set;function fi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Bn=W.d;W.d={f:Wv,r:Xv,D:Qv,C:Fv,L:Kv,m:Iv,X:Jv,S:Zv,M:eb};function Wv(){var e=Bn.f(),t=ni();return e||t}function Xv(e){var t=tr(e);t!==null&&t.tag===5&&t.type==="form"?wh(t):Bn.r(e)}var zr=typeof document>"u"?null:document;function np(e,t,a){var l=zr;if(l&&typeof t=="string"&&t){var o=Zt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),tp.has(o)||(tp.add(o),e={rel:e,crossOrigin:a,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),xt(t,"link",e),ft(t),l.head.appendChild(t)))}}function Qv(e){Bn.D(e),np("dns-prefetch",e,null)}function Fv(e,t){Bn.C(e,t),np("preconnect",e,t)}function Kv(e,t,a){Bn.L(e,t,a);var l=zr;if(l&&e&&t){var o='link[rel="preload"][as="'+Zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Zt(a.imageSizes)+'"]')):o+='[href="'+Zt(e)+'"]';var u=o;switch(t){case"style":u=Lr(e);break;case"script":u=Hr(e)}ln.has(u)||(e=g({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ln.set(u,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(Bl(u))||t==="script"&&l.querySelector(Ul(u))||(t=l.createElement("link"),xt(t,"link",e),ft(t),l.head.appendChild(t)))}}function Iv(e,t){Bn.m(e,t);var a=zr;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Zt(l)+'"][href="'+Zt(e)+'"]',u=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hr(e)}if(!ln.has(u)&&(e=g({rel:"modulepreload",href:e},t),ln.set(u,e),a.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ul(u)))return}l=a.createElement("link"),xt(l,"link",e),ft(l),a.head.appendChild(l)}}}function Zv(e,t,a){Bn.S(e,t,a);var l=zr;if(l&&e){var o=nr(l).hoistableStyles,u=Lr(e);t=t||"default";var y=o.get(u);if(!y){var b={loading:0,preload:null};if(y=l.querySelector(Bl(u)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ln.get(u))&&uu(e,a);var A=y=l.createElement("link");ft(A),xt(A,"link",e),A._p=new Promise(function(z,G){A.onload=z,A.onerror=G}),A.addEventListener("load",function(){b.loading|=1}),A.addEventListener("error",function(){b.loading|=2}),b.loading|=4,di(y,t,l)}y={type:"stylesheet",instance:y,count:1,state:b},o.set(u,y)}}}function Jv(e,t){Bn.X(e,t);var a=zr;if(a&&e){var l=nr(a).hoistableScripts,o=Hr(e),u=l.get(o);u||(u=a.querySelector(Ul(o)),u||(e=g({src:e,async:!0},t),(t=ln.get(o))&&fu(e,t),u=a.createElement("script"),ft(u),xt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(o,u))}}function eb(e,t){Bn.M(e,t);var a=zr;if(a&&e){var l=nr(a).hoistableScripts,o=Hr(e),u=l.get(o);u||(u=a.querySelector(Ul(o)),u||(e=g({src:e,async:!0,type:"module"},t),(t=ln.get(o))&&fu(e,t),u=a.createElement("script"),ft(u),xt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(o,u))}}function ap(e,t,a,l){var o=(o=ce.current)?fi(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Lr(a.href),a=nr(o).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Lr(a.href);var u=nr(o).hoistableStyles,y=u.get(e);if(y||(o=o.ownerDocument||o,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,y),(u=o.querySelector(Bl(e)))&&!u._p&&(y.instance=u,y.state.loading=5),ln.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ln.set(e,a),u||tb(o,e,a,y.state))),t&&l===null)throw Error(s(528,""));return y}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hr(a),a=nr(o).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Lr(e){return'href="'+Zt(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function rp(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function tb(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),xt(t,"link",a),ft(t),e.head.appendChild(t))}function Hr(e){return'[src="'+Zt(e)+'"]'}function Ul(e){return"script[async]"+e}function lp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(l)return t.instance=l,ft(l),l;var o=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ft(l),xt(l,"style",o),di(l,a.precedence,e),t.instance=l;case"stylesheet":o=Lr(a.href);var u=e.querySelector(Bl(o));if(u)return t.state.loading|=4,t.instance=u,ft(u),u;l=rp(a),(o=ln.get(o))&&uu(l,o),u=(e.ownerDocument||e).createElement("link"),ft(u);var y=u;return y._p=new Promise(function(b,A){y.onload=b,y.onerror=A}),xt(u,"link",l),t.state.loading|=4,di(u,a.precedence,e),t.instance=u;case"script":return u=Hr(a.src),(o=e.querySelector(Ul(u)))?(t.instance=o,ft(o),o):(l=a,(o=ln.get(u))&&(l=g({},a),fu(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),ft(o),xt(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,di(l,a.precedence,e));return t.instance}function di(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,u=o,y=0;y<l.length;y++){var b=l[y];if(b.dataset.precedence===t)u=b;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hi=null;function sp(e,t,a){if(hi===null){var l=new Map,o=hi=new Map;o.set(a,l)}else o=hi,l=o.get(a),l||(l=new Map,o.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var u=a[o];if(!(u[Zr]||u[bt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var y=u.getAttribute(t)||"";y=e+y;var b=l.get(y);b?b.push(u):l.set(y,[u])}}return l}function ip(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function nb(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function op(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ql=null;function ab(){}function rb(e,t,a){if(ql===null)throw Error(s(475));var l=ql;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Lr(a.href),u=e.querySelector(Bl(o));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=mi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,ft(u);return}u=e.ownerDocument||e,a=rp(a),(o=ln.get(o))&&uu(a,o),u=u.createElement("link"),ft(u);var y=u;y._p=new Promise(function(b,A){y.onload=b,y.onerror=A}),xt(u,"link",a),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=mi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function lb(){if(ql===null)throw Error(s(475));var e=ql;return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function mi(){if(this.count--,this.count===0){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pi=null;function du(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pi=new Map,t.forEach(sb,e),pi=null,mi.call(e))}function sb(e,t){if(!(t.state.loading&4)){var a=pi.get(e);if(a)var l=a.get(null);else{a=new Map,pi.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var y=o[u];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),l=y)}l&&a.set(null,l)}o=t.instance,y=o.getAttribute("data-precedence"),u=a.get(y)||l,u===l&&a.set(null,o),a.set(y,o),this.count++,l=mi.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Vl={$$typeof:$,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function ib(e,t,a,l,o,u,y,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=io(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.hiddenUpdates=io(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function cp(e,t,a,l,o,u,y,b,A,z,G,X){return e=new ib(e,t,a,y,b,A,z,X),t=1,u===!0&&(t|=24),u=Vt(3,null,null,t),e.current=u,u.stateNode=e,t=Xo(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:a,cache:t},Io(u),e}function up(e){return e?(e=mr,e):mr}function fp(e,t,a,l,o,u){o=up(o),l.context===null?l.context=o:l.pendingContext=o,l=In(t),l.payload={element:a},u=u===void 0?null:u,u!==null&&(l.callback=u),a=Zn(e,l,t),a!==null&&(Wt(a,e,t),xl(a,e,t))}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function hu(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}function hp(e){if(e.tag===13){var t=hr(e,67108864);t!==null&&Wt(t,e,67108864),hu(e,67108864)}}var gi=!0;function ob(e,t,a,l){var o=M.T;M.T=null;var u=W.p;try{W.p=2,mu(e,t,a,l)}finally{W.p=u,M.T=o}}function cb(e,t,a,l){var o=M.T;M.T=null;var u=W.p;try{W.p=8,mu(e,t,a,l)}finally{W.p=u,M.T=o}}function mu(e,t,a,l){if(gi){var o=pu(l);if(o===null)tu(e,t,l,xi,a),pp(e,l);else if(fb(o,e,t,a,l))l.stopPropagation();else if(pp(e,l),t&4&&-1<ub.indexOf(e)){for(;o!==null;){var u=tr(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var y=Ea(u.pendingLanes);if(y!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var A=1<<31-Ut(y);b.entanglements[1]|=A,y&=~A}yn(u),(qe&6)===0&&(ei=rt()+500,_l(0))}}break;case 13:b=hr(u,2),b!==null&&Wt(b,u,2),ni(),hu(u,2)}if(u=pu(l),u===null&&tu(e,t,l,xi,a),u===o)break;o=u}o!==null&&l.stopPropagation()}else tu(e,t,l,null,a)}}function pu(e){return e=bo(e),gu(e)}var xi=null;function gu(e){if(xi=null,e=er(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=m(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xi=e,null}function mp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nn()){case Yn:return 2;case Za:return 8;case cs:case Kx:return 32;case kf:return 268435456;default:return 32}default:return 32}}var xu=!1,fa=null,da=null,ha=null,Pl=new Map,$l=new Map,ma=[],ub="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pp(e,t){switch(e){case"focusin":case"focusout":fa=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":Pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(t.pointerId)}}function Gl(e,t,a,l,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:u,targetContainers:[o]},t!==null&&(t=tr(t),t!==null&&hp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function fb(e,t,a,l,o){switch(t){case"focusin":return fa=Gl(fa,e,t,a,l,o),!0;case"dragenter":return da=Gl(da,e,t,a,l,o),!0;case"mouseover":return ha=Gl(ha,e,t,a,l,o),!0;case"pointerover":var u=o.pointerId;return Pl.set(u,Gl(Pl.get(u)||null,e,t,a,l,o)),!0;case"gotpointercapture":return u=o.pointerId,$l.set(u,Gl($l.get(u)||null,e,t,a,l,o)),!0}return!1}function gp(e){var t=er(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=m(a),t!==null){e.blockedOn=t,ry(e.priority,function(){if(a.tag===13){var l=Yt();l=oo(l);var o=hr(a,l);o!==null&&Wt(o,a,l),hu(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);vo=l,a.target.dispatchEvent(l),vo=null}else return t=tr(a),t!==null&&hp(t),e.blockedOn=a,!1;t.shift()}return!0}function xp(e,t,a){yi(e)&&a.delete(t)}function db(){xu=!1,fa!==null&&yi(fa)&&(fa=null),da!==null&&yi(da)&&(da=null),ha!==null&&yi(ha)&&(ha=null),Pl.forEach(xp),$l.forEach(xp)}function vi(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,db)))}var bi=null;function yp(e){bi!==e&&(bi=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){bi===e&&(bi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(gu(l||a)===null)continue;break}var u=tr(a);u!==null&&(e.splice(t,3),t-=3,gc(u,{pending:!0,data:o,method:a.method,action:l},l,o))}}))}function Yl(e){function t(A){return vi(A,e)}fa!==null&&vi(fa,e),da!==null&&vi(da,e),ha!==null&&vi(ha,e),Pl.forEach(t),$l.forEach(t);for(var a=0;a<ma.length;a++){var l=ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ma.length&&(a=ma[0],a.blockedOn===null);)gp(a),a.blockedOn===null&&ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var o=a[l],u=a[l+1],y=o[kt]||null;if(typeof u=="function")y||yp(a);else if(y){var b=null;if(u&&u.hasAttribute("formAction")){if(o=u,y=u[kt]||null)b=y.formAction;else if(gu(o)!==null)continue}else b=y.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),yp(a)}}}function yu(e){this._internalRoot=e}wi.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=Yt();fp(a,l,e,t,null,null)},wi.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fp(e.current,2,null,e,null,null),ni(),t[Ja]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=zf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ma.length&&t!==0&&t<ma[a].priority;a++);ma.splice(a,0,e),a===0&&gp(e)}};var vp=r.version;if(vp!=="19.1.0")throw Error(s(527,vp,"19.1.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=x(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var hb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{Fr=Si.inject(hb),Bt=Si}catch{}}return Xl.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,l="",o=zh,u=Lh,y=Hh,b=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=cp(e,1,!1,null,null,a,l,o,u,y,b,null),e[Ja]=t.current,eu(e),new yu(t)},Xl.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var l=!1,o="",u=zh,y=Lh,b=Hh,A=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),t=cp(e,1,!0,t,a??null,l,o,u,y,b,A,z),t.context=up(null),a=t.current,l=Yt(),l=oo(l),o=In(l),o.callback=null,Zn(a,o,l),a=l,t.current.lanes=a,Ir(t,a),yn(t),e[Ja]=t.current,eu(e),new wi(t)},Xl.version="19.1.0",Xl}var Op;function Nb(){if(Op)return bu.exports;Op=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),bu.exports=Sb(),bu.exports}var jb=Nb();function Cb(n,r){if(n instanceof RegExp)return{keys:!1,pattern:n};var i,s,c,d,m=[],p="",x=n.split("/");for(x[0]||x.shift();c=x.shift();)i=c[0],i==="*"?(m.push(i),p+=c[1]==="?"?"(?:/(.*))?":"/(.*)"):i===":"?(s=c.indexOf("?",1),d=c.indexOf(".",1),m.push(c.substring(1,~s?s:~d?d:c.length)),p+=~s&&!~d?"(?:/([^/]+?))?":"/([^/]+?)",~d&&(p+=(~s?"?":"")+"\\"+c.substring(d))):p+="/"+c;return{keys:m,pattern:new RegExp("^"+p+(r?"(?=$|/)":"/?$"),"i")}}var S=$i();const Lt=H0(S),U0=pb({__proto__:null,default:Lt},[S]);var Cu={exports:{}},Eu={};var kp;function Eb(){if(kp)return Eu;kp=1;var n=$i();function r(v,j){return v===j&&(v!==0||1/v===1/j)||v!==v&&j!==j}var i=typeof Object.is=="function"?Object.is:r,s=n.useState,c=n.useEffect,d=n.useLayoutEffect,m=n.useDebugValue;function p(v,j){var C=j(),E=s({inst:{value:C,getSnapshot:j}}),R=E[0].inst,k=E[1];return d(function(){R.value=C,R.getSnapshot=j,x(R)&&k({inst:R})},[v,C,j]),c(function(){return x(R)&&k({inst:R}),v(function(){x(R)&&k({inst:R})})},[v]),m(C),C}function x(v){var j=v.getSnapshot;v=v.value;try{var C=j();return!i(v,C)}catch{return!0}}function f(v,j){return j()}var g=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:p;return Eu.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:g,Eu}var Mp;function Ab(){return Mp||(Mp=1,Cu.exports=Eb()),Cu.exports}var q0=Ab();const Rb=U0.useInsertionEffect,Ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kb=Ob?S.useLayoutEffect:S.useEffect,Mb=Rb||kb,V0=n=>{const r=S.useRef([n,(...i)=>r[0](...i)]).current;return Mb(()=>{r[0]=n}),r[1]},Db="popstate",af="pushState",rf="replaceState",Tb="hashchange",Dp=[Db,af,rf,Tb],_b=n=>{for(const r of Dp)addEventListener(r,n);return()=>{for(const r of Dp)removeEventListener(r,n)}},P0=(n,r)=>q0.useSyncExternalStore(_b,n,r),Tp=()=>location.search,zb=({ssrSearch:n}={})=>P0(Tp,n!=null?()=>n:Tp),_p=()=>location.pathname,Lb=({ssrPath:n}={})=>P0(_p,n!=null?()=>n:_p),Hb=(n,{replace:r=!1,state:i=null}={})=>history[r?rf:af](i,"",n),Bb=(n={})=>[Lb(n),Hb],zp=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[zp]>"u"){for(const n of[af,rf]){const r=history[n];history[n]=function(){const i=r.apply(this,arguments),s=new Event(n);return s.arguments=arguments,dispatchEvent(s),i}}Object.defineProperty(window,zp,{value:!0})}const Ub=(n,r)=>r.toLowerCase().indexOf(n.toLowerCase())?"~"+r:r.slice(n.length)||"/",$0=(n="")=>n==="/"?"":n,qb=(n,r)=>n[0]==="~"?n.slice(1):$0(r)+n,Vb=(n="",r)=>Ub(Lp($0(n)),Lp(r)),Lp=n=>{try{return decodeURI(n)}catch{return n}},G0={hook:Bb,searchHook:zb,parser:Cb,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:n=>n,aroundNav:(n,r,i)=>n(r,i)},Y0=S.createContext(G0),Wr=()=>S.useContext(Y0),W0={},X0=S.createContext(W0),Pb=()=>S.useContext(X0),Gi=n=>{const[r,i]=n.hook(n);return[Vb(n.base,r),V0((s,c)=>n.aroundNav(i,qb(s,n.base),c))]},Yi=()=>Gi(Wr()),lf=(n,r,i,s)=>{const{pattern:c,keys:d}=r instanceof RegExp?{keys:!1,pattern:r}:n(r||"*",s),m=c.exec(i)||[],[p,...x]=m;return p!==void 0?[!0,(()=>{const f=d!==!1?Object.fromEntries(d.map((v,j)=>[v,x[j]])):m.groups;let g={...x};return f&&Object.assign(g,f),g})(),...s?[p]:[]]:[!1,null]},$b=n=>lf(Wr().parser,n,Yi()[0]),Q0=({children:n,...r})=>{const i=Wr(),s=r.hook?G0:i;let c=s;const[d,m=r.ssrSearch??""]=r.ssrPath?.split("?")??[];d&&(r.ssrSearch=m,r.ssrPath=d),r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let p=S.useRef({}),x=p.current,f=x;for(let g in s){const v=g==="base"?s[g]+(r[g]??""):r[g]??s[g];x===f&&v!==f[g]&&(p.current=f={...f}),f[g]=v,(v!==s[g]||v!==c[g])&&(c=f)}return S.createElement(Y0.Provider,{value:c,children:n})},Hp=({children:n,component:r},i)=>r?S.createElement(r,{params:i}):typeof n=="function"?n(i):n,Gb=n=>{let r=S.useRef(W0);const i=r.current;return r.current=Object.keys(n).length!==Object.keys(i).length||Object.entries(n).some(([s,c])=>c!==i[s])?n:i},At=({path:n,nest:r,match:i,...s})=>{const c=Wr(),[d]=Gi(c),[m,p,x]=i??lf(c.parser,n,d,r),f=Gb({...Pb(),...p});if(!m)return null;const g=x?S.createElement(Q0,{base:x},Hp(s,f)):Hp(s,f);return S.createElement(X0.Provider,{value:f,children:g})},Qe=S.forwardRef((n,r)=>{const i=Wr(),[s,c]=Gi(i),{to:d="",href:m=d,onClick:p,asChild:x,children:f,className:g,replace:v,state:j,transition:C,...E}=n,R=V0(H=>{H.ctrlKey||H.metaKey||H.altKey||H.shiftKey||H.button!==0||(p?.(H),H.defaultPrevented||(H.preventDefault(),c(m,n)))}),k=i.hrefs(m[0]==="~"?m.slice(1):i.base+m,i);return x&&S.isValidElement(f)?S.cloneElement(f,{onClick:R,href:k}):S.createElement("a",{...E,onClick:R,href:k,className:g?.call?g(s===m):g,children:f,ref:r})}),F0=n=>Array.isArray(n)?n.flatMap(r=>F0(r&&r.type===S.Fragment?r.props.children:r)):[n],Yb=({children:n,location:r})=>{const i=Wr(),[s]=Gi(i);for(const c of F0(n)){let d=0;if(S.isValidElement(c)&&(d=lf(i.parser,c.props.path,r||s,c.props.nest))[0])return S.cloneElement(c,{match:d})}return null},Fl={v:[]},Bp=()=>Fl.v.forEach(n=>n()),Wb=n=>(Fl.v.push(n)===1&&addEventListener("hashchange",Bp),()=>{Fl.v=Fl.v.filter(r=>r!==n),Fl.v.length||removeEventListener("hashchange",Bp)}),Xb=()=>"/"+location.hash.replace(/^#?\/?/,""),Qb=(n,{state:r=null,replace:i=!1}={})=>{const s=location.href,[c,d]=n.replace(/^#?\/?/,"").split("?"),m=new URL(location.href);m.hash=`/${c}`,d&&(m.search=d);const p=m.href;i?history.replaceState(r,"",p):history.pushState(r,"",p);const x=typeof HashChangeEvent<"u"?new HashChangeEvent("hashchange",{oldURL:s,newURL:p}):new Event("hashchange",{detail:{oldURL:s,newURL:p}});dispatchEvent(x)},K0=({ssrPath:n="/"}={})=>[q0.useSyncExternalStore(Wb,Xb,()=>n),Qb];K0.hrefs=n=>"#"+n;var Wi=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Fb=class extends Wi{#e;#t;#n;constructor(){super(),this.#n=n=>{if(typeof window<"u"&&window.addEventListener){const r=()=>n();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#n=n,this.#t?.(),this.#t=n(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(n){this.#e!==n&&(this.#e=n,this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(r=>{r(n)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},I0=new Fb,Kb={setTimeout:(n,r)=>setTimeout(n,r),clearTimeout:n=>clearTimeout(n),setInterval:(n,r)=>setInterval(n,r),clearInterval:n=>clearInterval(n)},Ib=class{#e=Kb;#t=!1;setTimeoutProvider(n){this.#e=n}setTimeout(n,r){return this.#e.setTimeout(n,r)}clearTimeout(n){this.#e.clearTimeout(n)}setInterval(n,r){return this.#e.setInterval(n,r)}clearInterval(n){this.#e.clearInterval(n)}},qu=new Ib;function Zb(n){setTimeout(n,0)}var Jb=typeof window>"u"||"Deno"in globalThis;function un(){}function e1(n,r){return typeof n=="function"?n(r):n}function t1(n){return typeof n=="number"&&n>=0&&n!==1/0}function n1(n,r){return Math.max(n+(r||0)-Date.now(),0)}function Vu(n,r){return typeof n=="function"?n(r):n}function a1(n,r){return typeof n=="function"?n(r):n}function Up(n,r){const{type:i="all",exact:s,fetchStatus:c,predicate:d,queryKey:m,stale:p}=n;if(m){if(s){if(r.queryHash!==sf(m,r.options))return!1}else if(!ts(r.queryKey,m))return!1}if(i!=="all"){const x=r.isActive();if(i==="active"&&!x||i==="inactive"&&x)return!1}return!(typeof p=="boolean"&&r.isStale()!==p||c&&c!==r.state.fetchStatus||d&&!d(r))}function qp(n,r){const{exact:i,status:s,predicate:c,mutationKey:d}=n;if(d){if(!r.options.mutationKey)return!1;if(i){if(es(r.options.mutationKey)!==es(d))return!1}else if(!ts(r.options.mutationKey,d))return!1}return!(s&&r.state.status!==s||c&&!c(r))}function sf(n,r){return(r?.queryKeyHashFn||es)(n)}function es(n){return JSON.stringify(n,(r,i)=>Pu(i)?Object.keys(i).sort().reduce((s,c)=>(s[c]=i[c],s),{}):i)}function ts(n,r){return n===r?!0:typeof n!=typeof r?!1:n&&r&&typeof n=="object"&&typeof r=="object"?Object.keys(r).every(i=>ts(n[i],r[i])):!1}var r1=Object.prototype.hasOwnProperty;function Z0(n,r,i=0){if(n===r)return n;if(i>500)return r;const s=Vp(n)&&Vp(r);if(!s&&!(Pu(n)&&Pu(r)))return r;const d=(s?n:Object.keys(n)).length,m=s?r:Object.keys(r),p=m.length,x=s?new Array(p):{};let f=0;for(let g=0;g<p;g++){const v=s?g:m[g],j=n[v],C=r[v];if(j===C){x[v]=j,(s?g<d:r1.call(n,v))&&f++;continue}if(j===null||C===null||typeof j!="object"||typeof C!="object"){x[v]=C;continue}const E=Z0(j,C,i+1);x[v]=E,E===j&&f++}return d===p&&f===d?n:x}function Vp(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Pu(n){if(!Pp(n))return!1;const r=n.constructor;if(r===void 0)return!0;const i=r.prototype;return!(!Pp(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function Pp(n){return Object.prototype.toString.call(n)==="[object Object]"}function l1(n){return new Promise(r=>{qu.setTimeout(r,n)})}function s1(n,r,i){return typeof i.structuralSharing=="function"?i.structuralSharing(n,r):i.structuralSharing!==!1?Z0(n,r):r}function i1(n,r,i=0){const s=[...n,r];return i&&s.length>i?s.slice(1):s}function o1(n,r,i=0){const s=[r,...n];return i&&s.length>i?s.slice(0,-1):s}var of=Symbol();function J0(n,r){return!n.queryFn&&r?.initialPromise?()=>r.initialPromise:!n.queryFn||n.queryFn===of?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function c1(n,r,i){let s=!1,c;return Object.defineProperty(n,"signal",{enumerable:!0,get:()=>(c??=r(),s||(s=!0,c.aborted?i():c.addEventListener("abort",i,{once:!0})),c)}),n}var eg=(()=>{let n=()=>Jb;return{isServer(){return n()},setIsServer(r){n=r}}})();function u1(){let n,r;const i=new Promise((c,d)=>{n=c,r=d});i.status="pending",i.catch(()=>{});function s(c){Object.assign(i,c),delete i.resolve,delete i.reject}return i.resolve=c=>{s({status:"fulfilled",value:c}),n(c)},i.reject=c=>{s({status:"rejected",reason:c}),r(c)},i}var f1=Zb;function d1(){let n=[],r=0,i=p=>{p()},s=p=>{p()},c=f1;const d=p=>{r?n.push(p):c(()=>{i(p)})},m=()=>{const p=n;n=[],p.length&&c(()=>{s(()=>{p.forEach(x=>{i(x)})})})};return{batch:p=>{let x;r++;try{x=p()}finally{r--,r||m()}return x},batchCalls:p=>(...x)=>{d(()=>{p(...x)})},schedule:d,setNotifyFunction:p=>{i=p},setBatchNotifyFunction:p=>{s=p},setScheduler:p=>{c=p}}}var Ot=d1(),h1=class extends Wi{#e=!0;#t;#n;constructor(){super(),this.#n=n=>{if(typeof window<"u"&&window.addEventListener){const r=()=>n(!0),i=()=>n(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#n=n,this.#t?.(),this.#t=n(this.setOnline.bind(this))}setOnline(n){this.#e!==n&&(this.#e=n,this.listeners.forEach(i=>{i(n)}))}isOnline(){return this.#e}},zi=new h1;function m1(n){return Math.min(1e3*2**n,3e4)}function tg(n){return(n??"online")==="online"?zi.isOnline():!0}var $u=class extends Error{constructor(n){super("CancelledError"),this.revert=n?.revert,this.silent=n?.silent}};function ng(n){let r=!1,i=0,s;const c=u1(),d=()=>c.status!=="pending",m=R=>{if(!d()){const k=new $u(R);j(k),n.onCancel?.(k)}},p=()=>{r=!0},x=()=>{r=!1},f=()=>I0.isFocused()&&(n.networkMode==="always"||zi.isOnline())&&n.canRun(),g=()=>tg(n.networkMode)&&n.canRun(),v=R=>{d()||(s?.(),c.resolve(R))},j=R=>{d()||(s?.(),c.reject(R))},C=()=>new Promise(R=>{s=k=>{(d()||f())&&R(k)},n.onPause?.()}).then(()=>{s=void 0,d()||n.onContinue?.()}),E=()=>{if(d())return;let R;const k=i===0?n.initialPromise:void 0;try{R=k??n.fn()}catch(H){R=Promise.reject(H)}Promise.resolve(R).then(v).catch(H=>{if(d())return;const q=n.retry??(eg.isServer()?0:3),$=n.retryDelay??m1,Q=typeof $=="function"?$(i,H):$,V=q===!0||typeof q=="number"&&i<q||typeof q=="function"&&q(i,H);if(r||!V){j(H);return}i++,n.onFail?.(i,H),l1(Q).then(()=>f()?void 0:C()).then(()=>{r?j(H):E()})})};return{promise:c,status:()=>c.status,cancel:m,continue:()=>(s?.(),c),cancelRetry:p,continueRetry:x,canStart:g,start:()=>(g()?E():C().then(E),c)}}var ag=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),t1(this.gcTime)&&(this.#e=qu.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(eg.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e!==void 0&&(qu.clearTimeout(this.#e),this.#e=void 0)}};function p1(n){return{onFetch:(r,i)=>{const s=r.options,c=r.fetchOptions?.meta?.fetchMore?.direction,d=r.state.data?.pages||[],m=r.state.data?.pageParams||[];let p={pages:[],pageParams:[]},x=0;const f=async()=>{let g=!1;const v=E=>{c1(E,()=>r.signal,()=>g=!0)},j=J0(r.options,r.fetchOptions),C=async(E,R,k)=>{if(g)return Promise.reject(r.signal.reason);if(R==null&&E.pages.length)return Promise.resolve(E);const q=(()=>{const F={client:r.client,queryKey:r.queryKey,pageParam:R,direction:k?"backward":"forward",meta:r.options.meta};return v(F),F})(),$=await j(q),{maxPages:Q}=r.options,V=k?o1:i1;return{pages:V(E.pages,$,Q),pageParams:V(E.pageParams,R,Q)}};if(c&&d.length){const E=c==="backward",R=E?g1:$p,k={pages:d,pageParams:m},H=R(s,k);p=await C(k,H,E)}else{const E=n??d.length;do{const R=x===0?m[0]??s.initialPageParam:$p(s,p);if(x>0&&R==null)break;p=await C(p,R),x++}while(x<E)}return p};r.options.persister?r.fetchFn=()=>r.options.persister?.(f,{client:r.client,queryKey:r.queryKey,meta:r.options.meta,signal:r.signal},i):r.fetchFn=f}}}function $p(n,{pages:r,pageParams:i}){const s=r.length-1;return r.length>0?n.getNextPageParam(r[s],r,i[s],i):void 0}function g1(n,{pages:r,pageParams:i}){return r.length>0?n.getPreviousPageParam?.(r[0],r,i[0],i):void 0}var x1=class extends ag{#e;#t;#n;#r;#l;#a;#o;#s;constructor(n){super(),this.#s=!1,this.#o=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.#l=n.client,this.#r=this.#l.getQueryCache(),this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.#t=Yp(this.options),this.state=n.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#a?.promise}setOptions(n){if(this.options={...this.#o,...n},n?._type&&(this.#e=n._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=Yp(this.options);r.data!==void 0&&(this.setState(Gp(r.data,r.dataUpdatedAt)),this.#t=r)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#r.remove(this)}setData(n,r){const i=s1(this.state.data,n,this.options);return this.#i({data:i,type:"success",dataUpdatedAt:r?.updatedAt,manual:r?.manual}),i}setState(n){this.#i({type:"setState",state:n})}cancel(n){const r=this.#a?.promise;return this.#a?.cancel(n),r?r.then(un).catch(un):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(n=>a1(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===of||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>Vu(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!n1(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(r=>r.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(r=>r.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(r=>r!==n),this.observers.length||(this.#a&&(this.#s||this.#c()?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}#c(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"}invalidate(){this.state.isInvalidated||this.#i({type:"invalidate"})}async fetch(n,r){if(this.state.fetchStatus!=="idle"&&this.#a?.status()!=="rejected"){if(this.state.data!==void 0&&r?.cancelRefetch)this.cancel({silent:!0});else if(this.#a)return this.#a.continueRetry(),this.#a.promise}if(n&&this.setOptions(n),!this.options.queryFn){const x=this.observers.find(f=>f.options.queryFn);x&&this.setOptions(x.options)}const i=new AbortController,s=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(this.#s=!0,i.signal)})},c=()=>{const x=J0(this.options,r),g=(()=>{const v={client:this.#l,queryKey:this.queryKey,meta:this.meta};return s(v),v})();return this.#s=!1,this.options.persister?this.options.persister(x,g,this):x(g)},m=(()=>{const x={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:this.#l,state:this.state,fetchFn:c};return s(x),x})();(this.#e==="infinite"?p1(this.options.pages):this.options.behavior)?.onFetch(m,this),this.#n=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==m.fetchOptions?.meta)&&this.#i({type:"fetch",meta:m.fetchOptions?.meta}),this.#a=ng({initialPromise:r?.initialPromise,fn:m.fetchFn,onCancel:x=>{x instanceof $u&&x.revert&&this.setState({...this.#n,fetchStatus:"idle"}),i.abort()},onFail:(x,f)=>{this.#i({type:"failed",failureCount:x,error:f})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay,networkMode:m.options.networkMode,canRun:()=>!0});try{const x=await this.#a.start();if(x===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(x),this.#r.config.onSuccess?.(x,this),this.#r.config.onSettled?.(x,this.state.error,this),x}catch(x){if(x instanceof $u){if(x.silent)return this.#a.promise;if(x.revert){if(this.state.data===void 0)throw x;return this.state.data}}throw this.#i({type:"error",error:x}),this.#r.config.onError?.(x,this),this.#r.config.onSettled?.(this.state.data,x,this),x}finally{this.scheduleGc()}}#i(n){const r=i=>{switch(n.type){case"failed":return{...i,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...y1(i.data,this.options),fetchMeta:n.meta??null};case"success":const s={...i,...Gp(n.data,n.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#n=n.manual?s:void 0,s;case"error":const c=n.error;return{...i,error:c,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...n.state}}};this.state=r(this.state),Ot.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:n})})}};function y1(n,r){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:tg(r.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function Gp(n,r){return{data:n,dataUpdatedAt:r??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Yp(n){const r=typeof n.initialData=="function"?n.initialData():n.initialData,i=r!==void 0,s=i?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:r,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var v1=class extends ag{#e;#t;#n;#r;constructor(n){super(),this.#e=n.client,this.mutationId=n.mutationId,this.#n=n.mutationCache,this.#t=[],this.state=n.state||b1(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){this.#t.includes(n)||(this.#t.push(n),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){this.#t=this.#t.filter(r=>r!==n),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(n){const r=()=>{this.#l({type:"continue"})},i={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=ng({fn:()=>this.options.mutationFn?this.options.mutationFn(n,i):Promise.reject(new Error("No mutationFn found")),onFail:(d,m)=>{this.#l({type:"failed",failureCount:d,error:m})},onPause:()=>{this.#l({type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});const s=this.state.status==="pending",c=!this.#r.canStart();try{if(s)r();else{this.#l({type:"pending",variables:n,isPaused:c}),this.#n.config.onMutate&&await this.#n.config.onMutate(n,this,i);const m=await this.options.onMutate?.(n,i);m!==this.state.context&&this.#l({type:"pending",context:m,variables:n,isPaused:c})}const d=await this.#r.start();return await this.#n.config.onSuccess?.(d,n,this.state.context,this,i),await this.options.onSuccess?.(d,n,this.state.context,i),await this.#n.config.onSettled?.(d,null,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(d,null,n,this.state.context,i),this.#l({type:"success",data:d}),d}catch(d){try{await this.#n.config.onError?.(d,n,this.state.context,this,i)}catch(m){Promise.reject(m)}try{await this.options.onError?.(d,n,this.state.context,i)}catch(m){Promise.reject(m)}try{await this.#n.config.onSettled?.(void 0,d,this.state.variables,this.state.context,this,i)}catch(m){Promise.reject(m)}try{await this.options.onSettled?.(void 0,d,n,this.state.context,i)}catch(m){Promise.reject(m)}throw this.#l({type:"error",error:d}),d}finally{this.#n.runNext(this)}}#l(n){const r=i=>{switch(n.type){case"failed":return{...i,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...i,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:n.error,failureCount:i.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Ot.batch(()=>{this.#t.forEach(i=>{i.onMutationUpdate(n)}),this.#n.notify({mutation:this,type:"updated",action:n})})}};function b1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var w1=class extends Wi{constructor(n={}){super(),this.config=n,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(n,r,i){const s=new v1({client:n,mutationCache:this,mutationId:++this.#n,options:n.defaultMutationOptions(r),state:i});return this.add(s),s}add(n){this.#e.add(n);const r=Ni(n);if(typeof r=="string"){const i=this.#t.get(r);i?i.push(n):this.#t.set(r,[n])}this.notify({type:"added",mutation:n})}remove(n){if(this.#e.delete(n)){const r=Ni(n);if(typeof r=="string"){const i=this.#t.get(r);if(i)if(i.length>1){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}else i[0]===n&&this.#t.delete(r)}}this.notify({type:"removed",mutation:n})}canRun(n){const r=Ni(n);if(typeof r=="string"){const s=this.#t.get(r)?.find(c=>c.state.status==="pending");return!s||s===n}else return!0}runNext(n){const r=Ni(n);return typeof r=="string"?this.#t.get(r)?.find(s=>s!==n&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Ot.batch(()=>{this.#e.forEach(n=>{this.notify({type:"removed",mutation:n})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(n){const r={exact:!0,...n};return this.getAll().find(i=>qp(r,i))}findAll(n={}){return this.getAll().filter(r=>qp(n,r))}notify(n){Ot.batch(()=>{this.listeners.forEach(r=>{r(n)})})}resumePausedMutations(){const n=this.getAll().filter(r=>r.state.isPaused);return Ot.batch(()=>Promise.all(n.map(r=>r.continue().catch(un))))}};function Ni(n){return n.options.scope?.id}var S1=class extends Wi{constructor(n={}){super(),this.config=n,this.#e=new Map}#e;build(n,r,i){const s=r.queryKey,c=r.queryHash??sf(s,r);let d=this.get(c);return d||(d=new x1({client:n,queryKey:s,queryHash:c,options:n.defaultQueryOptions(r),state:i,defaultOptions:n.getQueryDefaults(s)}),this.add(d)),d}add(n){this.#e.has(n.queryHash)||(this.#e.set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const r=this.#e.get(n.queryHash);r&&(n.destroy(),r===n&&this.#e.delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Ot.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return this.#e.get(n)}getAll(){return[...this.#e.values()]}find(n){const r={exact:!0,...n};return this.getAll().find(i=>Up(r,i))}findAll(n={}){const r=this.getAll();return Object.keys(n).length>0?r.filter(i=>Up(n,i)):r}notify(n){Ot.batch(()=>{this.listeners.forEach(r=>{r(n)})})}onFocus(){Ot.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Ot.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},N1=class{#e;#t;#n;#r;#l;#a;#o;#s;constructor(n={}){this.#e=n.queryCache||new S1,this.#t=n.mutationCache||new w1,this.#n=n.defaultOptions||{},this.#r=new Map,this.#l=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=I0.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=zi.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(n){return this.#e.findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return this.#t.findAll({...n,status:"pending"}).length}getQueryData(n){const r=this.defaultQueryOptions({queryKey:n});return this.#e.get(r.queryHash)?.state.data}ensureQueryData(n){const r=this.defaultQueryOptions(n),i=this.#e.build(this,r),s=i.state.data;return s===void 0?this.fetchQuery(n):(n.revalidateIfStale&&i.isStaleByTime(Vu(r.staleTime,i))&&this.prefetchQuery(r),Promise.resolve(s))}getQueriesData(n){return this.#e.findAll(n).map(({queryKey:r,state:i})=>{const s=i.data;return[r,s]})}setQueryData(n,r,i){const s=this.defaultQueryOptions({queryKey:n}),d=this.#e.get(s.queryHash)?.state.data,m=e1(r,d);if(m!==void 0)return this.#e.build(this,s).setData(m,{...i,manual:!0})}setQueriesData(n,r,i){return Ot.batch(()=>this.#e.findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,r,i)]))}getQueryState(n){const r=this.defaultQueryOptions({queryKey:n});return this.#e.get(r.queryHash)?.state}removeQueries(n){const r=this.#e;Ot.batch(()=>{r.findAll(n).forEach(i=>{r.remove(i)})})}resetQueries(n,r){const i=this.#e;return Ot.batch(()=>(i.findAll(n).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...n},r)))}cancelQueries(n,r={}){const i={revert:!0,...r},s=Ot.batch(()=>this.#e.findAll(n).map(c=>c.cancel(i)));return Promise.all(s).then(un).catch(un)}invalidateQueries(n,r={}){return Ot.batch(()=>(this.#e.findAll(n).forEach(i=>{i.invalidate()}),n?.refetchType==="none"?Promise.resolve():this.refetchQueries({...n,type:n?.refetchType??n?.type??"active"},r)))}refetchQueries(n,r={}){const i={...r,cancelRefetch:r.cancelRefetch??!0},s=Ot.batch(()=>this.#e.findAll(n).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let d=c.fetch(void 0,i);return i.throwOnError||(d=d.catch(un)),c.state.fetchStatus==="paused"?Promise.resolve():d}));return Promise.all(s).then(un)}fetchQuery(n){const r=this.defaultQueryOptions(n);r.retry===void 0&&(r.retry=!1);const i=this.#e.build(this,r);return i.isStaleByTime(Vu(r.staleTime,i))?i.fetch(r):Promise.resolve(i.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(un).catch(un)}fetchInfiniteQuery(n){return n._type="infinite",this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(un).catch(un)}ensureInfiniteQueryData(n){return n._type="infinite",this.ensureQueryData(n)}resumePausedMutations(){return zi.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(n){this.#n=n}setQueryDefaults(n,r){this.#r.set(es(n),{queryKey:n,defaultOptions:r})}getQueryDefaults(n){const r=[...this.#r.values()],i={};return r.forEach(s=>{ts(n,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(n,r){this.#l.set(es(n),{mutationKey:n,defaultOptions:r})}getMutationDefaults(n){const r=[...this.#l.values()],i={};return r.forEach(s=>{ts(n,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(n){if(n._defaulted)return n;const r={...this.#n.queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return r.queryHash||(r.queryHash=sf(r.queryKey,r)),r.refetchOnReconnect===void 0&&(r.refetchOnReconnect=r.networkMode!=="always"),r.throwOnError===void 0&&(r.throwOnError=!!r.suspense),!r.networkMode&&r.persister&&(r.networkMode="offlineFirst"),r.queryFn===of&&(r.enabled=!1),r}defaultMutationOptions(n){return n?._defaulted?n:{...this.#n.mutations,...n?.mutationKey&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},j1=S.createContext(void 0),C1=({client:n,children:r})=>(S.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),h.jsx(j1.Provider,{value:n,children:r}));const E1=1,A1=1e6;let Au=0;function R1(){return Au=(Au+1)%Number.MAX_SAFE_INTEGER,Au.toString()}const Ru=new Map,Wp=n=>{if(Ru.has(n))return;const r=setTimeout(()=>{Ru.delete(n),Il({type:"REMOVE_TOAST",toastId:n})},A1);Ru.set(n,r)},O1=(n,r)=>{switch(r.type){case"ADD_TOAST":return{...n,toasts:[r.toast,...n.toasts].slice(0,E1)};case"UPDATE_TOAST":return{...n,toasts:n.toasts.map(i=>i.id===r.toast.id?{...i,...r.toast}:i)};case"DISMISS_TOAST":{const{toastId:i}=r;return i?Wp(i):n.toasts.forEach(s=>{Wp(s.id)}),{...n,toasts:n.toasts.map(s=>s.id===i||i===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return r.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(i=>i.id!==r.toastId)}}},Di=[];let Ti={toasts:[]};function Il(n){Ti=O1(Ti,n),Di.forEach(r=>{r(Ti)})}function k1({...n}){const r=R1(),i=c=>Il({type:"UPDATE_TOAST",toast:{...c,id:r}}),s=()=>Il({type:"DISMISS_TOAST",toastId:r});return Il({type:"ADD_TOAST",toast:{...n,id:r,open:!0,onOpenChange:c=>{c||s()}}}),{id:r,dismiss:s,update:i}}function M1(){const[n,r]=S.useState(Ti);return S.useEffect(()=>(Di.push(r),()=>{const i=Di.indexOf(r);i>-1&&Di.splice(i,1)}),[n]),{...n,toast:k1,dismiss:i=>Il({type:"DISMISS_TOAST",toastId:i})}}var Xi=B0();const D1=H0(Xi);function ut(n,r,{checkForDefaultPrevented:i=!0}={}){return function(c){if(n?.(c),i===!1||!c.defaultPrevented)return r?.(c)}}function Xp(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function rg(...n){return r=>{let i=!1;const s=n.map(c=>{const d=Xp(c,r);return!i&&typeof d=="function"&&(i=!0),d});if(i)return()=>{for(let c=0;c<s.length;c++){const d=s[c];typeof d=="function"?d():Xp(n[c],null)}}}}function fn(...n){return S.useCallback(rg(...n),n)}function Qi(n,r=[]){let i=[];function s(d,m){const p=S.createContext(m),x=i.length;i=[...i,m];const f=v=>{const{scope:j,children:C,...E}=v,R=j?.[n]?.[x]||p,k=S.useMemo(()=>E,Object.values(E));return h.jsx(R.Provider,{value:k,children:C})};f.displayName=d+"Provider";function g(v,j){const C=j?.[n]?.[x]||p,E=S.useContext(C);if(E)return E;if(m!==void 0)return m;throw new Error(`\`${v}\` must be used within \`${d}\``)}return[f,g]}const c=()=>{const d=i.map(m=>S.createContext(m));return function(p){const x=p?.[n]||d;return S.useMemo(()=>({[`__scope${n}`]:{...p,[n]:x}}),[p,x])}};return c.scopeName=n,[s,T1(c,...r)]}function T1(...n){const r=n[0];if(n.length===1)return r;const i=()=>{const s=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(d){const m=s.reduce((p,{useScope:x,scopeName:f})=>{const v=x(d)[`__scope${f}`];return{...p,...v}},{});return S.useMemo(()=>({[`__scope${r.scopeName}`]:m}),[m])}};return i.scopeName=r.scopeName,i}function Gu(n){const r=_1(n),i=S.forwardRef((s,c)=>{const{children:d,...m}=s,p=S.Children.toArray(d),x=p.find(L1);if(x){const f=x.props.children,g=p.map(v=>v===x?S.Children.count(f)>1?S.Children.only(null):S.isValidElement(f)?f.props.children:null:v);return h.jsx(r,{...m,ref:c,children:S.isValidElement(f)?S.cloneElement(f,void 0,g):null})}return h.jsx(r,{...m,ref:c,children:d})});return i.displayName=`${n}.Slot`,i}function _1(n){const r=S.forwardRef((i,s)=>{const{children:c,...d}=i;if(S.isValidElement(c)){const m=B1(c),p=H1(d,c.props);return c.type!==S.Fragment&&(p.ref=s?rg(s,m):m),S.cloneElement(c,p)}return S.Children.count(c)>1?S.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var lg=Symbol("radix.slottable");function z1(n){const r=({children:i})=>h.jsx(h.Fragment,{children:i});return r.displayName=`${n}.Slottable`,r.__radixId=lg,r}function L1(n){return S.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===lg}function H1(n,r){const i={...r};for(const s in r){const c=n[s],d=r[s];/^on[A-Z]/.test(s)?c&&d?i[s]=(...p)=>{const x=d(...p);return c(...p),x}:c&&(i[s]=c):s==="style"?i[s]={...c,...d}:s==="className"&&(i[s]=[c,d].filter(Boolean).join(" "))}return{...n,...i}}function B1(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}function U1(n){const r=n+"CollectionProvider",[i,s]=Qi(r),[c,d]=i(r,{collectionRef:{current:null},itemMap:new Map}),m=R=>{const{scope:k,children:H}=R,q=Lt.useRef(null),$=Lt.useRef(new Map).current;return h.jsx(c,{scope:k,itemMap:$,collectionRef:q,children:H})};m.displayName=r;const p=n+"CollectionSlot",x=Gu(p),f=Lt.forwardRef((R,k)=>{const{scope:H,children:q}=R,$=d(p,H),Q=fn(k,$.collectionRef);return h.jsx(x,{ref:Q,children:q})});f.displayName=p;const g=n+"CollectionItemSlot",v="data-radix-collection-item",j=Gu(g),C=Lt.forwardRef((R,k)=>{const{scope:H,children:q,...$}=R,Q=Lt.useRef(null),V=fn(k,Q),F=d(g,H);return Lt.useEffect(()=>(F.itemMap.set(Q,{ref:Q,...$}),()=>{F.itemMap.delete(Q)})),h.jsx(j,{[v]:"",ref:V,children:q})});C.displayName=g;function E(R){const k=d(n+"CollectionConsumer",R);return Lt.useCallback(()=>{const q=k.collectionRef.current;if(!q)return[];const $=Array.from(q.querySelectorAll(`[${v}]`));return Array.from(k.itemMap.values()).sort((F,ee)=>$.indexOf(F.ref.current)-$.indexOf(ee.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:m,Slot:f,ItemSlot:C},E,s]}var q1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ht=q1.reduce((n,r)=>{const i=Gu(`Primitive.${r}`),s=S.forwardRef((c,d)=>{const{asChild:m,...p}=c,x=m?i:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),h.jsx(x,{...p,ref:d})});return s.displayName=`Primitive.${r}`,{...n,[r]:s}},{});function sg(n,r){n&&Xi.flushSync(()=>n.dispatchEvent(r))}function va(n){const r=S.useRef(n);return S.useEffect(()=>{r.current=n}),S.useMemo(()=>(...i)=>r.current?.(...i),[])}function V1(n,r=globalThis?.document){const i=va(n);S.useEffect(()=>{const s=c=>{c.key==="Escape"&&i(c)};return r.addEventListener("keydown",s,{capture:!0}),()=>r.removeEventListener("keydown",s,{capture:!0})},[i,r])}var P1="DismissableLayer",Yu="dismissableLayer.update",$1="dismissableLayer.pointerDownOutside",G1="dismissableLayer.focusOutside",Qp,ig=S.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),cf=S.forwardRef((n,r)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:m,onDismiss:p,...x}=n,f=S.useContext(ig),[g,v]=S.useState(null),j=g?.ownerDocument??globalThis?.document,[,C]=S.useState({}),E=fn(r,ee=>v(ee)),R=Array.from(f.layers),[k]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),H=R.indexOf(k),q=g?R.indexOf(g):-1,$=f.layersWithOutsidePointerEventsDisabled.size>0,Q=q>=H,V=W1(ee=>{const P=ee.target,re=[...f.branches].some(le=>le.contains(P));!Q||re||(c?.(ee),m?.(ee),ee.defaultPrevented||p?.())},j),F=X1(ee=>{const P=ee.target;[...f.branches].some(le=>le.contains(P))||(d?.(ee),m?.(ee),ee.defaultPrevented||p?.())},j);return V1(ee=>{q===f.layers.size-1&&(s?.(ee),!ee.defaultPrevented&&p&&(ee.preventDefault(),p()))},j),S.useEffect(()=>{if(g)return i&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Qp=j.body.style.pointerEvents,j.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(g)),f.layers.add(g),Fp(),()=>{i&&f.layersWithOutsidePointerEventsDisabled.size===1&&(j.body.style.pointerEvents=Qp)}},[g,j,i,f]),S.useEffect(()=>()=>{g&&(f.layers.delete(g),f.layersWithOutsidePointerEventsDisabled.delete(g),Fp())},[g,f]),S.useEffect(()=>{const ee=()=>C({});return document.addEventListener(Yu,ee),()=>document.removeEventListener(Yu,ee)},[]),h.jsx(Ht.div,{...x,ref:E,style:{pointerEvents:$?Q?"auto":"none":void 0,...n.style},onFocusCapture:ut(n.onFocusCapture,F.onFocusCapture),onBlurCapture:ut(n.onBlurCapture,F.onBlurCapture),onPointerDownCapture:ut(n.onPointerDownCapture,V.onPointerDownCapture)})});cf.displayName=P1;var Y1="DismissableLayerBranch",og=S.forwardRef((n,r)=>{const i=S.useContext(ig),s=S.useRef(null),c=fn(r,s);return S.useEffect(()=>{const d=s.current;if(d)return i.branches.add(d),()=>{i.branches.delete(d)}},[i.branches]),h.jsx(Ht.div,{...n,ref:c})});og.displayName=Y1;function W1(n,r=globalThis?.document){const i=va(n),s=S.useRef(!1),c=S.useRef(()=>{});return S.useEffect(()=>{const d=p=>{if(p.target&&!s.current){let x=function(){cg($1,i,f,{discrete:!0})};const f={originalEvent:p};p.pointerType==="touch"?(r.removeEventListener("click",c.current),c.current=x,r.addEventListener("click",c.current,{once:!0})):x()}else r.removeEventListener("click",c.current);s.current=!1},m=window.setTimeout(()=>{r.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(m),r.removeEventListener("pointerdown",d),r.removeEventListener("click",c.current)}},[r,i]),{onPointerDownCapture:()=>s.current=!0}}function X1(n,r=globalThis?.document){const i=va(n),s=S.useRef(!1);return S.useEffect(()=>{const c=d=>{d.target&&!s.current&&cg(G1,i,{originalEvent:d},{discrete:!1})};return r.addEventListener("focusin",c),()=>r.removeEventListener("focusin",c)},[r,i]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function Fp(){const n=new CustomEvent(Yu);document.dispatchEvent(n)}function cg(n,r,i,{discrete:s}){const c=i.originalEvent.target,d=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:i});r&&c.addEventListener(n,r,{once:!0}),s?sg(c,d):c.dispatchEvent(d)}var Q1=cf,F1=og,ba=globalThis?.document?S.useLayoutEffect:()=>{},K1="Portal",uf=S.forwardRef((n,r)=>{const{container:i,...s}=n,[c,d]=S.useState(!1);ba(()=>d(!0),[]);const m=i||c&&globalThis?.document?.body;return m?D1.createPortal(h.jsx(Ht.div,{...s,ref:r}),m):null});uf.displayName=K1;function I1(n,r){return S.useReducer((i,s)=>r[i][s]??i,n)}var Fi=n=>{const{present:r,children:i}=n,s=Z1(r),c=typeof i=="function"?i({present:s.isPresent}):S.Children.only(i),d=fn(s.ref,J1(c));return typeof i=="function"||s.isPresent?S.cloneElement(c,{ref:d}):null};Fi.displayName="Presence";function Z1(n){const[r,i]=S.useState(),s=S.useRef(null),c=S.useRef(n),d=S.useRef("none"),m=n?"mounted":"unmounted",[p,x]=I1(m,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return S.useEffect(()=>{const f=ji(s.current);d.current=p==="mounted"?f:"none"},[p]),ba(()=>{const f=s.current,g=c.current;if(g!==n){const j=d.current,C=ji(f);n?x("MOUNT"):C==="none"||f?.display==="none"?x("UNMOUNT"):x(g&&j!==C?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,x]),ba(()=>{if(r){let f;const g=r.ownerDocument.defaultView??window,v=C=>{const R=ji(s.current).includes(CSS.escape(C.animationName));if(C.target===r&&R&&(x("ANIMATION_END"),!c.current)){const k=r.style.animationFillMode;r.style.animationFillMode="forwards",f=g.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=k)})}},j=C=>{C.target===r&&(d.current=ji(s.current))};return r.addEventListener("animationstart",j),r.addEventListener("animationcancel",v),r.addEventListener("animationend",v),()=>{g.clearTimeout(f),r.removeEventListener("animationstart",j),r.removeEventListener("animationcancel",v),r.removeEventListener("animationend",v)}}else x("ANIMATION_END")},[r,x]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:S.useCallback(f=>{s.current=f?getComputedStyle(f):null,i(f)},[])}}function ji(n){return n?.animationName||"none"}function J1(n){let r=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?n.ref:(r=Object.getOwnPropertyDescriptor(n,"ref")?.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}var ew=U0[" useInsertionEffect ".trim().toString()]||ba;function tw({prop:n,defaultProp:r,onChange:i=()=>{},caller:s}){const[c,d,m]=nw({defaultProp:r,onChange:i}),p=n!==void 0,x=p?n:c;{const g=S.useRef(n!==void 0);S.useEffect(()=>{const v=g.current;v!==p&&console.warn(`${s} is changing from ${v?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),g.current=p},[p,s])}const f=S.useCallback(g=>{if(p){const v=aw(g)?g(n):g;v!==n&&m.current?.(v)}else d(g)},[p,n,d,m]);return[x,f]}function nw({defaultProp:n,onChange:r}){const[i,s]=S.useState(n),c=S.useRef(i),d=S.useRef(r);return ew(()=>{d.current=r},[r]),S.useEffect(()=>{c.current!==i&&(d.current?.(i),c.current=i)},[i,c]),[i,s,d]}function aw(n){return typeof n=="function"}var rw=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),lw="VisuallyHidden",Ki=S.forwardRef((n,r)=>h.jsx(Ht.span,{...n,ref:r,style:{...rw,...n.style}}));Ki.displayName=lw;var sw=Ki,ff="ToastProvider",[df,iw,ow]=U1("Toast"),[ug]=Qi("Toast",[ow]),[cw,Ii]=ug(ff),fg=n=>{const{__scopeToast:r,label:i="Notification",duration:s=5e3,swipeDirection:c="right",swipeThreshold:d=50,children:m}=n,[p,x]=S.useState(null),[f,g]=S.useState(0),v=S.useRef(!1),j=S.useRef(!1);return i.trim()||console.error(`Invalid prop \`label\` supplied to \`${ff}\`. Expected non-empty \`string\`.`),h.jsx(df.Provider,{scope:r,children:h.jsx(cw,{scope:r,label:i,duration:s,swipeDirection:c,swipeThreshold:d,toastCount:f,viewport:p,onViewportChange:x,onToastAdd:S.useCallback(()=>g(C=>C+1),[]),onToastRemove:S.useCallback(()=>g(C=>C-1),[]),isFocusedToastEscapeKeyDownRef:v,isClosePausedRef:j,children:m})})};fg.displayName=ff;var dg="ToastViewport",uw=["F8"],Wu="toast.viewportPause",Xu="toast.viewportResume",hg=S.forwardRef((n,r)=>{const{__scopeToast:i,hotkey:s=uw,label:c="Notifications ({hotkey})",...d}=n,m=Ii(dg,i),p=iw(i),x=S.useRef(null),f=S.useRef(null),g=S.useRef(null),v=S.useRef(null),j=fn(r,v,m.onViewportChange),C=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=m.toastCount>0;S.useEffect(()=>{const k=H=>{s.length!==0&&s.every($=>H[$]||H.code===$)&&v.current?.focus()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[s]),S.useEffect(()=>{const k=x.current,H=v.current;if(E&&k&&H){const q=()=>{if(!m.isClosePausedRef.current){const F=new CustomEvent(Wu);H.dispatchEvent(F),m.isClosePausedRef.current=!0}},$=()=>{if(m.isClosePausedRef.current){const F=new CustomEvent(Xu);H.dispatchEvent(F),m.isClosePausedRef.current=!1}},Q=F=>{!k.contains(F.relatedTarget)&&$()},V=()=>{k.contains(document.activeElement)||$()};return k.addEventListener("focusin",q),k.addEventListener("focusout",Q),k.addEventListener("pointermove",q),k.addEventListener("pointerleave",V),window.addEventListener("blur",q),window.addEventListener("focus",$),()=>{k.removeEventListener("focusin",q),k.removeEventListener("focusout",Q),k.removeEventListener("pointermove",q),k.removeEventListener("pointerleave",V),window.removeEventListener("blur",q),window.removeEventListener("focus",$)}}},[E,m.isClosePausedRef]);const R=S.useCallback(({tabbingDirection:k})=>{const q=p().map($=>{const Q=$.ref.current,V=[Q,...Nw(Q)];return k==="forwards"?V:V.reverse()});return(k==="forwards"?q.reverse():q).flat()},[p]);return S.useEffect(()=>{const k=v.current;if(k){const H=q=>{const $=q.altKey||q.ctrlKey||q.metaKey;if(q.key==="Tab"&&!$){const V=document.activeElement,F=q.shiftKey;if(q.target===k&&F){f.current?.focus();return}const re=R({tabbingDirection:F?"backwards":"forwards"}),le=re.findIndex(ve=>ve===V);Ou(re.slice(le+1))?q.preventDefault():F?f.current?.focus():g.current?.focus()}};return k.addEventListener("keydown",H),()=>k.removeEventListener("keydown",H)}},[p,R]),h.jsxs(F1,{ref:x,role:"region","aria-label":c.replace("{hotkey}",C),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&h.jsx(Qu,{ref:f,onFocusFromOutsideViewport:()=>{const k=R({tabbingDirection:"forwards"});Ou(k)}}),h.jsx(df.Slot,{scope:i,children:h.jsx(Ht.ol,{tabIndex:-1,...d,ref:j})}),E&&h.jsx(Qu,{ref:g,onFocusFromOutsideViewport:()=>{const k=R({tabbingDirection:"backwards"});Ou(k)}})]})});hg.displayName=dg;var mg="ToastFocusProxy",Qu=S.forwardRef((n,r)=>{const{__scopeToast:i,onFocusFromOutsideViewport:s,...c}=n,d=Ii(mg,i);return h.jsx(Ki,{tabIndex:0,...c,ref:r,style:{position:"fixed"},onFocus:m=>{const p=m.relatedTarget;!d.viewport?.contains(p)&&s()}})});Qu.displayName=mg;var ls="Toast",fw="toast.swipeStart",dw="toast.swipeMove",hw="toast.swipeCancel",mw="toast.swipeEnd",pg=S.forwardRef((n,r)=>{const{forceMount:i,open:s,defaultOpen:c,onOpenChange:d,...m}=n,[p,x]=tw({prop:s,defaultProp:c??!0,onChange:d,caller:ls});return h.jsx(Fi,{present:i||p,children:h.jsx(xw,{open:p,...m,ref:r,onClose:()=>x(!1),onPause:va(n.onPause),onResume:va(n.onResume),onSwipeStart:ut(n.onSwipeStart,f=>{f.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ut(n.onSwipeMove,f=>{const{x:g,y:v}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","move"),f.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${g}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${v}px`)}),onSwipeCancel:ut(n.onSwipeCancel,f=>{f.currentTarget.setAttribute("data-swipe","cancel"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ut(n.onSwipeEnd,f=>{const{x:g,y:v}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","end"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${g}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${v}px`),x(!1)})})})});pg.displayName=ls;var[pw,gw]=ug(ls,{onClose(){}}),xw=S.forwardRef((n,r)=>{const{__scopeToast:i,type:s="foreground",duration:c,open:d,onClose:m,onEscapeKeyDown:p,onPause:x,onResume:f,onSwipeStart:g,onSwipeMove:v,onSwipeCancel:j,onSwipeEnd:C,...E}=n,R=Ii(ls,i),[k,H]=S.useState(null),q=fn(r,K=>H(K)),$=S.useRef(null),Q=S.useRef(null),V=c||R.duration,F=S.useRef(0),ee=S.useRef(V),P=S.useRef(0),{onToastAdd:re,onToastRemove:le}=R,ve=va(()=>{k?.contains(document.activeElement)&&R.viewport?.focus(),m()}),ge=S.useCallback(K=>{!K||K===1/0||(window.clearTimeout(P.current),F.current=new Date().getTime(),P.current=window.setTimeout(ve,K))},[ve]);S.useEffect(()=>{const K=R.viewport;if(K){const ae=()=>{ge(ee.current),f?.()},M=()=>{const W=new Date().getTime()-F.current;ee.current=ee.current-W,window.clearTimeout(P.current),x?.()};return K.addEventListener(Wu,M),K.addEventListener(Xu,ae),()=>{K.removeEventListener(Wu,M),K.removeEventListener(Xu,ae)}}},[R.viewport,V,x,f,ge]),S.useEffect(()=>{d&&!R.isClosePausedRef.current&&ge(V)},[d,V,R.isClosePausedRef,ge]),S.useEffect(()=>(re(),()=>le()),[re,le]);const fe=S.useMemo(()=>k?Sg(k):null,[k]);return R.viewport?h.jsxs(h.Fragment,{children:[fe&&h.jsx(yw,{__scopeToast:i,role:"status","aria-live":s==="foreground"?"assertive":"polite",children:fe}),h.jsx(pw,{scope:i,onClose:ve,children:Xi.createPortal(h.jsx(df.ItemSlot,{scope:i,children:h.jsx(Q1,{asChild:!0,onEscapeKeyDown:ut(p,()=>{R.isFocusedToastEscapeKeyDownRef.current||ve(),R.isFocusedToastEscapeKeyDownRef.current=!1}),children:h.jsx(Ht.li,{tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":R.swipeDirection,...E,ref:q,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:ut(n.onKeyDown,K=>{K.key==="Escape"&&(p?.(K.nativeEvent),K.nativeEvent.defaultPrevented||(R.isFocusedToastEscapeKeyDownRef.current=!0,ve()))}),onPointerDown:ut(n.onPointerDown,K=>{K.button===0&&($.current={x:K.clientX,y:K.clientY})}),onPointerMove:ut(n.onPointerMove,K=>{if(!$.current)return;const ae=K.clientX-$.current.x,M=K.clientY-$.current.y,W=!!Q.current,J=["left","right"].includes(R.swipeDirection),pe=["left","up"].includes(R.swipeDirection)?Math.min:Math.max,w=J?pe(0,ae):0,B=J?0:pe(0,M),Z=K.pointerType==="touch"?10:2,te={x:w,y:B},oe={originalEvent:K,delta:te};W?(Q.current=te,Ci(dw,v,oe,{discrete:!1})):Kp(te,R.swipeDirection,Z)?(Q.current=te,Ci(fw,g,oe,{discrete:!1}),K.target.setPointerCapture(K.pointerId)):(Math.abs(ae)>Z||Math.abs(M)>Z)&&($.current=null)}),onPointerUp:ut(n.onPointerUp,K=>{const ae=Q.current,M=K.target;if(M.hasPointerCapture(K.pointerId)&&M.releasePointerCapture(K.pointerId),Q.current=null,$.current=null,ae){const W=K.currentTarget,J={originalEvent:K,delta:ae};Kp(ae,R.swipeDirection,R.swipeThreshold)?Ci(mw,C,J,{discrete:!0}):Ci(hw,j,J,{discrete:!0}),W.addEventListener("click",pe=>pe.preventDefault(),{once:!0})}})})})}),R.viewport)})]}):null}),yw=n=>{const{__scopeToast:r,children:i,...s}=n,c=Ii(ls,r),[d,m]=S.useState(!1),[p,x]=S.useState(!1);return ww(()=>m(!0)),S.useEffect(()=>{const f=window.setTimeout(()=>x(!0),1e3);return()=>window.clearTimeout(f)},[]),p?null:h.jsx(uf,{asChild:!0,children:h.jsx(Ki,{...s,children:d&&h.jsxs(h.Fragment,{children:[c.label," ",i]})})})},vw="ToastTitle",gg=S.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n;return h.jsx(Ht.div,{...s,ref:r})});gg.displayName=vw;var bw="ToastDescription",xg=S.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n;return h.jsx(Ht.div,{...s,ref:r})});xg.displayName=bw;var yg="ToastAction",vg=S.forwardRef((n,r)=>{const{altText:i,...s}=n;return i.trim()?h.jsx(wg,{altText:i,asChild:!0,children:h.jsx(hf,{...s,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${yg}\`. Expected non-empty \`string\`.`),null)});vg.displayName=yg;var bg="ToastClose",hf=S.forwardRef((n,r)=>{const{__scopeToast:i,...s}=n,c=gw(bg,i);return h.jsx(wg,{asChild:!0,children:h.jsx(Ht.button,{type:"button",...s,ref:r,onClick:ut(n.onClick,c.onClose)})})});hf.displayName=bg;var wg=S.forwardRef((n,r)=>{const{__scopeToast:i,altText:s,...c}=n;return h.jsx(Ht.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...c,ref:r})});function Sg(n){const r=[];return Array.from(n.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&r.push(s.textContent),Sw(s)){const c=s.ariaHidden||s.hidden||s.style.display==="none",d=s.dataset.radixToastAnnounceExclude==="";if(!c)if(d){const m=s.dataset.radixToastAnnounceAlt;m&&r.push(m)}else r.push(...Sg(s))}}),r}function Ci(n,r,i,{discrete:s}){const c=i.originalEvent.currentTarget,d=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:i});r&&c.addEventListener(n,r,{once:!0}),s?sg(c,d):c.dispatchEvent(d)}var Kp=(n,r,i=0)=>{const s=Math.abs(n.x),c=Math.abs(n.y),d=s>c;return r==="left"||r==="right"?d&&s>i:!d&&c>i};function ww(n=()=>{}){const r=va(n);ba(()=>{let i=0,s=0;return i=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(r)),()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(s)}},[r])}function Sw(n){return n.nodeType===n.ELEMENT_NODE}function Nw(n){const r=[],i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const c=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||c?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)r.push(i.currentNode);return r}function Ou(n){const r=document.activeElement;return n.some(i=>i===r?!0:(i.focus(),document.activeElement!==r))}var jw=fg,Ng=hg,jg=pg,Cg=gg,Eg=xg,Ag=vg,Rg=hf;function Og(n){var r,i,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(r=0;r<c;r++)n[r]&&(i=Og(n[r]))&&(s&&(s+=" "),s+=i)}else for(i in n)n[i]&&(s&&(s+=" "),s+=i);return s}function kg(){for(var n,r,i=0,s="",c=arguments.length;i<c;i++)(n=arguments[i])&&(r=Og(n))&&(s&&(s+=" "),s+=r);return s}const Ip=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Zp=kg,Cw=(n,r)=>i=>{var s;if(r?.variants==null)return Zp(n,i?.class,i?.className);const{variants:c,defaultVariants:d}=r,m=Object.keys(c).map(f=>{const g=i?.[f],v=d?.[f];if(g===null)return null;const j=Ip(g)||Ip(v);return c[f][j]}),p=i&&Object.entries(i).reduce((f,g)=>{let[v,j]=g;return j===void 0||(f[v]=j),f},{}),x=r==null||(s=r.compoundVariants)===null||s===void 0?void 0:s.reduce((f,g)=>{let{class:v,className:j,...C}=g;return Object.entries(C).every(E=>{let[R,k]=E;return Array.isArray(k)?k.includes({...d,...p}[R]):{...d,...p}[R]===k})?[...f,v,j]:f},[]);return Zp(n,m,x,i?.class,i?.className)};const Ew=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Aw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,s)=>s?s.toUpperCase():i.toLowerCase()),Jp=n=>{const r=Aw(n);return r.charAt(0).toUpperCase()+r.slice(1)},Mg=(...n)=>n.filter((r,i,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===i).join(" ").trim(),Rw=n=>{for(const r in n)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Ow={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const kw=S.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:m,...p},x)=>S.createElement("svg",{ref:x,...Ow,width:r,height:r,stroke:n,strokeWidth:s?Number(i)*24/Number(r):i,className:Mg("lucide",c),...!d&&!Rw(p)&&{"aria-hidden":"true"},...p},[...m.map(([f,g])=>S.createElement(f,g)),...Array.isArray(d)?d:[d]]));const je=(n,r)=>{const i=S.forwardRef(({className:s,...c},d)=>S.createElement(kw,{ref:d,iconNode:r,className:Mg(`lucide-${Ew(Jp(n))}`,`lucide-${n}`,s),...c}));return i.displayName=Jp(n),i};const Mw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Dg=je("arrow-right",Mw);const Dw=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Tw=je("arrow-up",Dw);const _w=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Qa=je("book-open",_w);const zw=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Lw=je("box",zw);const Hw=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Bw=je("braces",Hw);const Uw=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],qw=je("bug",Uw);const Vw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zi=je("check",Vw);const Pw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$w=je("chevron-down",Pw);const Gw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Pr=je("chevron-right",Gw);const Yw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ww=je("circle-alert",Yw);const Xw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],qr=je("circle-check-big",Xw);const Qw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fu=je("circle",Qw);const Fw=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tg=je("clock",Fw);const Kw=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],$r=je("code-xml",Kw);const Iw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ji=je("copy",Iw);const Zw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Jw=je("download",Zw);const e2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],_g=je("external-link",e2);const t2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],e0=je("eye",t2);const n2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],t0=je("file-text",n2);const a2=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],r2=je("git-commit-horizontal",a2);const l2=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],zg=je("github",l2);const s2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Li=je("globe",s2);const i2=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],o2=je("hash",i2);const c2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Lg=je("heart",c2);const u2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],f2=je("info",u2);const d2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],h2=je("layers",d2);const m2=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Hg=je("lightbulb",m2);const p2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Bg=je("menu",p2);const g2=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],mf=je("monitor",g2);const x2=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],y2=je("package",x2);const v2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],b2=je("palette",v2);const w2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bn=je("play",w2);const S2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],N2=je("plus",S2);const j2=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],eo=je("rotate-ccw",j2);const C2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pf=je("search",C2);const E2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ug=je("shield",E2);const A2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],qg=je("square",A2);const R2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gf=je("star",R2);const O2=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],k2=je("tag",O2);const M2=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],wa=je("terminal",M2);const D2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],T2=je("trash-2",D2);const _2=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],z2=je("triangle-alert",_2);const L2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ns=je("x",L2);const H2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],B2=je("zap",H2),U2=(n,r)=>{const i=new Array(n.length+r.length);for(let s=0;s<n.length;s++)i[s]=n[s];for(let s=0;s<r.length;s++)i[n.length+s]=r[s];return i},q2=(n,r)=>({classGroupId:n,validator:r}),Vg=(n=new Map,r=null,i)=>({nextPart:n,validators:r,classGroupId:i}),Hi="-",n0=[],V2="arbitrary..",P2=n=>{const r=G2(n),{conflictingClassGroups:i,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:m=>{if(m.startsWith("[")&&m.endsWith("]"))return $2(m);const p=m.split(Hi),x=p[0]===""&&p.length>1?1:0;return Pg(p,x,r)},getConflictingClassGroupIds:(m,p)=>{if(p){const x=s[m],f=i[m];return x?f?U2(f,x):x:f||n0}return i[m]||n0}}},Pg=(n,r,i)=>{if(n.length-r===0)return i.classGroupId;const c=n[r],d=i.nextPart.get(c);if(d){const f=Pg(n,r+1,d);if(f)return f}const m=i.validators;if(m===null)return;const p=r===0?n.join(Hi):n.slice(r).join(Hi),x=m.length;for(let f=0;f<x;f++){const g=m[f];if(g.validator(p))return g.classGroupId}},$2=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=n.slice(1,-1),i=r.indexOf(":"),s=r.slice(0,i);return s?V2+s:void 0})(),G2=n=>{const{theme:r,classGroups:i}=n;return Y2(i,r)},Y2=(n,r)=>{const i=Vg();for(const s in n){const c=n[s];xf(c,i,s,r)}return i},xf=(n,r,i,s)=>{const c=n.length;for(let d=0;d<c;d++){const m=n[d];W2(m,r,i,s)}},W2=(n,r,i,s)=>{if(typeof n=="string"){X2(n,r,i);return}if(typeof n=="function"){Q2(n,r,i,s);return}F2(n,r,i,s)},X2=(n,r,i)=>{const s=n===""?r:$g(r,n);s.classGroupId=i},Q2=(n,r,i,s)=>{if(K2(n)){xf(n(s),r,i,s);return}r.validators===null&&(r.validators=[]),r.validators.push(q2(i,n))},F2=(n,r,i,s)=>{const c=Object.entries(n),d=c.length;for(let m=0;m<d;m++){const[p,x]=c[m];xf(x,$g(r,p),i,s)}},$g=(n,r)=>{let i=n;const s=r.split(Hi),c=s.length;for(let d=0;d<c;d++){const m=s[d];let p=i.nextPart.get(m);p||(p=Vg(),i.nextPart.set(m,p)),i=p}return i},K2=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,I2=n=>{if(n<1)return{get:()=>{},set:()=>{}};let r=0,i=Object.create(null),s=Object.create(null);const c=(d,m)=>{i[d]=m,r++,r>n&&(r=0,s=i,i=Object.create(null))};return{get(d){let m=i[d];if(m!==void 0)return m;if((m=s[d])!==void 0)return c(d,m),m},set(d,m){d in i?i[d]=m:c(d,m)}}},Ku="!",a0=":",Z2=[],r0=(n,r,i,s,c)=>({modifiers:n,hasImportantModifier:r,baseClassName:i,maybePostfixModifierPosition:s,isExternal:c}),J2=n=>{const{prefix:r,experimentalParseClassName:i}=n;let s=c=>{const d=[];let m=0,p=0,x=0,f;const g=c.length;for(let R=0;R<g;R++){const k=c[R];if(m===0&&p===0){if(k===a0){d.push(c.slice(x,R)),x=R+1;continue}if(k==="/"){f=R;continue}}k==="["?m++:k==="]"?m--:k==="("?p++:k===")"&&p--}const v=d.length===0?c:c.slice(x);let j=v,C=!1;v.endsWith(Ku)?(j=v.slice(0,-1),C=!0):v.startsWith(Ku)&&(j=v.slice(1),C=!0);const E=f&&f>x?f-x:void 0;return r0(d,C,j,E)};if(r){const c=r+a0,d=s;s=m=>m.startsWith(c)?d(m.slice(c.length)):r0(Z2,!1,m,void 0,!0)}if(i){const c=s;s=d=>i({className:d,parseClassName:c})}return s},eS=n=>{const r=new Map;return n.orderSensitiveModifiers.forEach((i,s)=>{r.set(i,1e6+s)}),i=>{const s=[];let c=[];for(let d=0;d<i.length;d++){const m=i[d],p=m[0]==="[",x=r.has(m);p||x?(c.length>0&&(c.sort(),s.push(...c),c=[]),s.push(m)):c.push(m)}return c.length>0&&(c.sort(),s.push(...c)),s}},tS=n=>({cache:I2(n.cacheSize),parseClassName:J2(n),sortModifiers:eS(n),...P2(n)}),nS=/\s+/,aS=(n,r)=>{const{parseClassName:i,getClassGroupId:s,getConflictingClassGroupIds:c,sortModifiers:d}=r,m=[],p=n.trim().split(nS);let x="";for(let f=p.length-1;f>=0;f-=1){const g=p[f],{isExternal:v,modifiers:j,hasImportantModifier:C,baseClassName:E,maybePostfixModifierPosition:R}=i(g);if(v){x=g+(x.length>0?" "+x:x);continue}let k=!!R,H=s(k?E.substring(0,R):E);if(!H){if(!k){x=g+(x.length>0?" "+x:x);continue}if(H=s(E),!H){x=g+(x.length>0?" "+x:x);continue}k=!1}const q=j.length===0?"":j.length===1?j[0]:d(j).join(":"),$=C?q+Ku:q,Q=$+H;if(m.indexOf(Q)>-1)continue;m.push(Q);const V=c(H,k);for(let F=0;F<V.length;++F){const ee=V[F];m.push($+ee)}x=g+(x.length>0?" "+x:x)}return x},rS=(...n)=>{let r=0,i,s,c="";for(;r<n.length;)(i=n[r++])&&(s=Gg(i))&&(c&&(c+=" "),c+=s);return c},Gg=n=>{if(typeof n=="string")return n;let r,i="";for(let s=0;s<n.length;s++)n[s]&&(r=Gg(n[s]))&&(i&&(i+=" "),i+=r);return i},lS=(n,...r)=>{let i,s,c,d;const m=x=>{const f=r.reduce((g,v)=>v(g),n());return i=tS(f),s=i.cache.get,c=i.cache.set,d=p,p(x)},p=x=>{const f=s(x);if(f)return f;const g=aS(x,i);return c(x,g),g};return d=m,(...x)=>d(rS(...x))},sS=[],ct=n=>{const r=i=>i[n]||sS;return r.isThemeGetter=!0,r},Yg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Wg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,iS=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,oS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,cS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,uS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,fS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,dS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ga=n=>iS.test(n),Oe=n=>!!n&&!Number.isNaN(Number(n)),xa=n=>!!n&&Number.isInteger(Number(n)),ku=n=>n.endsWith("%")&&Oe(n.slice(0,-1)),Un=n=>oS.test(n),Xg=()=>!0,hS=n=>cS.test(n)&&!uS.test(n),yf=()=>!1,mS=n=>fS.test(n),pS=n=>dS.test(n),gS=n=>!he(n)&&!me(n),xS=n=>Ca(n,Kg,yf),he=n=>Yg.test(n),Ga=n=>Ca(n,Ig,hS),l0=n=>Ca(n,CS,Oe),yS=n=>Ca(n,Jg,Xg),vS=n=>Ca(n,Zg,yf),s0=n=>Ca(n,Qg,yf),bS=n=>Ca(n,Fg,pS),Ei=n=>Ca(n,ex,mS),me=n=>Wg.test(n),Ql=n=>Ka(n,Ig),wS=n=>Ka(n,Zg),i0=n=>Ka(n,Qg),SS=n=>Ka(n,Kg),NS=n=>Ka(n,Fg),Ai=n=>Ka(n,ex,!0),jS=n=>Ka(n,Jg,!0),Ca=(n,r,i)=>{const s=Yg.exec(n);return s?s[1]?r(s[1]):i(s[2]):!1},Ka=(n,r,i=!1)=>{const s=Wg.exec(n);return s?s[1]?r(s[1]):i:!1},Qg=n=>n==="position"||n==="percentage",Fg=n=>n==="image"||n==="url",Kg=n=>n==="length"||n==="size"||n==="bg-size",Ig=n=>n==="length",CS=n=>n==="number",Zg=n=>n==="family-name",Jg=n=>n==="number"||n==="weight",ex=n=>n==="shadow",ES=()=>{const n=ct("color"),r=ct("font"),i=ct("text"),s=ct("font-weight"),c=ct("tracking"),d=ct("leading"),m=ct("breakpoint"),p=ct("container"),x=ct("spacing"),f=ct("radius"),g=ct("shadow"),v=ct("inset-shadow"),j=ct("text-shadow"),C=ct("drop-shadow"),E=ct("blur"),R=ct("perspective"),k=ct("aspect"),H=ct("ease"),q=ct("animate"),$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],V=()=>[...Q(),me,he],F=()=>["auto","hidden","clip","visible","scroll"],ee=()=>["auto","contain","none"],P=()=>[me,he,x],re=()=>[ga,"full","auto",...P()],le=()=>[xa,"none","subgrid",me,he],ve=()=>["auto",{span:["full",xa,me,he]},xa,me,he],ge=()=>[xa,"auto",me,he],fe=()=>["auto","min","max","fr",me,he],K=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ae=()=>["start","end","center","stretch","center-safe","end-safe"],M=()=>["auto",...P()],W=()=>[ga,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],J=()=>[ga,"screen","full","dvw","lvw","svw","min","max","fit",...P()],pe=()=>[ga,"screen","full","lh","dvh","lvh","svh","min","max","fit",...P()],w=()=>[n,me,he],B=()=>[...Q(),i0,s0,{position:[me,he]}],Z=()=>["no-repeat",{repeat:["","x","y","space","round"]}],te=()=>["auto","cover","contain",SS,xS,{size:[me,he]}],oe=()=>[ku,Ql,Ga],ie=()=>["","none","full",f,me,he],ce=()=>["",Oe,Ql,Ga],Pe=()=>["solid","dashed","dotted","double"],ze=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ue=()=>[Oe,ku,i0,s0],_=()=>["","none",E,me,he],ne=()=>["none",Oe,me,he],ue=()=>["none",Oe,me,he],ye=()=>[Oe,me,he],Ae=()=>[ga,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Un],breakpoint:[Un],color:[Xg],container:[Un],"drop-shadow":[Un],ease:["in","out","in-out"],font:[gS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Un],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Un],shadow:[Un],spacing:["px",Oe],text:[Un],"text-shadow":[Un],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ga,he,me,k]}],container:["container"],columns:[{columns:[Oe,he,me,p]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:V()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:ee()}],"overscroll-x":[{"overscroll-x":ee()}],"overscroll-y":[{"overscroll-y":ee()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:re()}],"inset-x":[{"inset-x":re()}],"inset-y":[{"inset-y":re()}],start:[{"inset-s":re(),start:re()}],end:[{"inset-e":re(),end:re()}],"inset-bs":[{"inset-bs":re()}],"inset-be":[{"inset-be":re()}],top:[{top:re()}],right:[{right:re()}],bottom:[{bottom:re()}],left:[{left:re()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",me,he]}],basis:[{basis:[ga,"full","auto",p,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Oe,ga,"auto","initial","none",he]}],grow:[{grow:["",Oe,me,he]}],shrink:[{shrink:["",Oe,me,he]}],order:[{order:[xa,"first","last","none",me,he]}],"grid-cols":[{"grid-cols":le()}],"col-start-end":[{col:ve()}],"col-start":[{"col-start":ge()}],"col-end":[{"col-end":ge()}],"grid-rows":[{"grid-rows":le()}],"row-start-end":[{row:ve()}],"row-start":[{"row-start":ge()}],"row-end":[{"row-end":ge()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":fe()}],"auto-rows":[{"auto-rows":fe()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...K(),"normal"]}],"justify-items":[{"justify-items":[...ae(),"normal"]}],"justify-self":[{"justify-self":["auto",...ae()]}],"align-content":[{content:["normal",...K()]}],"align-items":[{items:[...ae(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ae(),{baseline:["","last"]}]}],"place-content":[{"place-content":K()}],"place-items":[{"place-items":[...ae(),"baseline"]}],"place-self":[{"place-self":["auto",...ae()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pbs:[{pbs:P()}],pbe:[{pbe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mbs:[{mbs:M()}],mbe:[{mbe:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],"inline-size":[{inline:["auto",...J()]}],"min-inline-size":[{"min-inline":["auto",...J()]}],"max-inline-size":[{"max-inline":["none",...J()]}],"block-size":[{block:["auto",...pe()]}],"min-block-size":[{"min-block":["auto",...pe()]}],"max-block-size":[{"max-block":["none",...pe()]}],w:[{w:[p,"screen",...W()]}],"min-w":[{"min-w":[p,"screen","none",...W()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[m]},...W()]}],h:[{h:["screen","lh",...W()]}],"min-h":[{"min-h":["screen","lh","none",...W()]}],"max-h":[{"max-h":["screen","lh",...W()]}],"font-size":[{text:["base",i,Ql,Ga]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,jS,yS]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ku,he]}],"font-family":[{font:[wS,vS,r]}],"font-features":[{"font-features":[he]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,me,he]}],"line-clamp":[{"line-clamp":[Oe,"none",me,l0]}],leading:[{leading:[d,...P()]}],"list-image":[{"list-image":["none",me,he]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",me,he]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:w()}],"text-color":[{text:w()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[Oe,"from-font","auto",me,Ga]}],"text-decoration-color":[{decoration:w()}],"underline-offset":[{"underline-offset":[Oe,"auto",me,he]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",me,he]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",me,he]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:B()}],"bg-repeat":[{bg:Z()}],"bg-size":[{bg:te()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,me,he],radial:["",me,he],conic:[xa,me,he]},NS,bS]}],"bg-color":[{bg:w()}],"gradient-from-pos":[{from:oe()}],"gradient-via-pos":[{via:oe()}],"gradient-to-pos":[{to:oe()}],"gradient-from":[{from:w()}],"gradient-via":[{via:w()}],"gradient-to":[{to:w()}],rounded:[{rounded:ie()}],"rounded-s":[{"rounded-s":ie()}],"rounded-e":[{"rounded-e":ie()}],"rounded-t":[{"rounded-t":ie()}],"rounded-r":[{"rounded-r":ie()}],"rounded-b":[{"rounded-b":ie()}],"rounded-l":[{"rounded-l":ie()}],"rounded-ss":[{"rounded-ss":ie()}],"rounded-se":[{"rounded-se":ie()}],"rounded-ee":[{"rounded-ee":ie()}],"rounded-es":[{"rounded-es":ie()}],"rounded-tl":[{"rounded-tl":ie()}],"rounded-tr":[{"rounded-tr":ie()}],"rounded-br":[{"rounded-br":ie()}],"rounded-bl":[{"rounded-bl":ie()}],"border-w":[{border:ce()}],"border-w-x":[{"border-x":ce()}],"border-w-y":[{"border-y":ce()}],"border-w-s":[{"border-s":ce()}],"border-w-e":[{"border-e":ce()}],"border-w-bs":[{"border-bs":ce()}],"border-w-be":[{"border-be":ce()}],"border-w-t":[{"border-t":ce()}],"border-w-r":[{"border-r":ce()}],"border-w-b":[{"border-b":ce()}],"border-w-l":[{"border-l":ce()}],"divide-x":[{"divide-x":ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Pe(),"hidden","none"]}],"divide-style":[{divide:[...Pe(),"hidden","none"]}],"border-color":[{border:w()}],"border-color-x":[{"border-x":w()}],"border-color-y":[{"border-y":w()}],"border-color-s":[{"border-s":w()}],"border-color-e":[{"border-e":w()}],"border-color-bs":[{"border-bs":w()}],"border-color-be":[{"border-be":w()}],"border-color-t":[{"border-t":w()}],"border-color-r":[{"border-r":w()}],"border-color-b":[{"border-b":w()}],"border-color-l":[{"border-l":w()}],"divide-color":[{divide:w()}],"outline-style":[{outline:[...Pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Oe,me,he]}],"outline-w":[{outline:["",Oe,Ql,Ga]}],"outline-color":[{outline:w()}],shadow:[{shadow:["","none",g,Ai,Ei]}],"shadow-color":[{shadow:w()}],"inset-shadow":[{"inset-shadow":["none",v,Ai,Ei]}],"inset-shadow-color":[{"inset-shadow":w()}],"ring-w":[{ring:ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:w()}],"ring-offset-w":[{"ring-offset":[Oe,Ga]}],"ring-offset-color":[{"ring-offset":w()}],"inset-ring-w":[{"inset-ring":ce()}],"inset-ring-color":[{"inset-ring":w()}],"text-shadow":[{"text-shadow":["none",j,Ai,Ei]}],"text-shadow-color":[{"text-shadow":w()}],opacity:[{opacity:[Oe,me,he]}],"mix-blend":[{"mix-blend":[...ze(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ze()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Oe]}],"mask-image-linear-from-pos":[{"mask-linear-from":Ue()}],"mask-image-linear-to-pos":[{"mask-linear-to":Ue()}],"mask-image-linear-from-color":[{"mask-linear-from":w()}],"mask-image-linear-to-color":[{"mask-linear-to":w()}],"mask-image-t-from-pos":[{"mask-t-from":Ue()}],"mask-image-t-to-pos":[{"mask-t-to":Ue()}],"mask-image-t-from-color":[{"mask-t-from":w()}],"mask-image-t-to-color":[{"mask-t-to":w()}],"mask-image-r-from-pos":[{"mask-r-from":Ue()}],"mask-image-r-to-pos":[{"mask-r-to":Ue()}],"mask-image-r-from-color":[{"mask-r-from":w()}],"mask-image-r-to-color":[{"mask-r-to":w()}],"mask-image-b-from-pos":[{"mask-b-from":Ue()}],"mask-image-b-to-pos":[{"mask-b-to":Ue()}],"mask-image-b-from-color":[{"mask-b-from":w()}],"mask-image-b-to-color":[{"mask-b-to":w()}],"mask-image-l-from-pos":[{"mask-l-from":Ue()}],"mask-image-l-to-pos":[{"mask-l-to":Ue()}],"mask-image-l-from-color":[{"mask-l-from":w()}],"mask-image-l-to-color":[{"mask-l-to":w()}],"mask-image-x-from-pos":[{"mask-x-from":Ue()}],"mask-image-x-to-pos":[{"mask-x-to":Ue()}],"mask-image-x-from-color":[{"mask-x-from":w()}],"mask-image-x-to-color":[{"mask-x-to":w()}],"mask-image-y-from-pos":[{"mask-y-from":Ue()}],"mask-image-y-to-pos":[{"mask-y-to":Ue()}],"mask-image-y-from-color":[{"mask-y-from":w()}],"mask-image-y-to-color":[{"mask-y-to":w()}],"mask-image-radial":[{"mask-radial":[me,he]}],"mask-image-radial-from-pos":[{"mask-radial-from":Ue()}],"mask-image-radial-to-pos":[{"mask-radial-to":Ue()}],"mask-image-radial-from-color":[{"mask-radial-from":w()}],"mask-image-radial-to-color":[{"mask-radial-to":w()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Q()}],"mask-image-conic-pos":[{"mask-conic":[Oe]}],"mask-image-conic-from-pos":[{"mask-conic-from":Ue()}],"mask-image-conic-to-pos":[{"mask-conic-to":Ue()}],"mask-image-conic-from-color":[{"mask-conic-from":w()}],"mask-image-conic-to-color":[{"mask-conic-to":w()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:B()}],"mask-repeat":[{mask:Z()}],"mask-size":[{mask:te()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",me,he]}],filter:[{filter:["","none",me,he]}],blur:[{blur:_()}],brightness:[{brightness:[Oe,me,he]}],contrast:[{contrast:[Oe,me,he]}],"drop-shadow":[{"drop-shadow":["","none",C,Ai,Ei]}],"drop-shadow-color":[{"drop-shadow":w()}],grayscale:[{grayscale:["",Oe,me,he]}],"hue-rotate":[{"hue-rotate":[Oe,me,he]}],invert:[{invert:["",Oe,me,he]}],saturate:[{saturate:[Oe,me,he]}],sepia:[{sepia:["",Oe,me,he]}],"backdrop-filter":[{"backdrop-filter":["","none",me,he]}],"backdrop-blur":[{"backdrop-blur":_()}],"backdrop-brightness":[{"backdrop-brightness":[Oe,me,he]}],"backdrop-contrast":[{"backdrop-contrast":[Oe,me,he]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Oe,me,he]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Oe,me,he]}],"backdrop-invert":[{"backdrop-invert":["",Oe,me,he]}],"backdrop-opacity":[{"backdrop-opacity":[Oe,me,he]}],"backdrop-saturate":[{"backdrop-saturate":[Oe,me,he]}],"backdrop-sepia":[{"backdrop-sepia":["",Oe,me,he]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",me,he]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Oe,"initial",me,he]}],ease:[{ease:["linear","initial",H,me,he]}],delay:[{delay:[Oe,me,he]}],animate:[{animate:["none",q,me,he]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[R,me,he]}],"perspective-origin":[{"perspective-origin":V()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:ue()}],"scale-x":[{"scale-x":ue()}],"scale-y":[{"scale-y":ue()}],"scale-z":[{"scale-z":ue()}],"scale-3d":["scale-3d"],skew:[{skew:ye()}],"skew-x":[{"skew-x":ye()}],"skew-y":[{"skew-y":ye()}],transform:[{transform:[me,he,"","none","gpu","cpu"]}],"transform-origin":[{origin:V()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ae()}],"translate-x":[{"translate-x":Ae()}],"translate-y":[{"translate-y":Ae()}],"translate-z":[{"translate-z":Ae()}],"translate-none":["translate-none"],accent:[{accent:w()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:w()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",me,he]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mbs":[{"scroll-mbs":P()}],"scroll-mbe":[{"scroll-mbe":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pbs":[{"scroll-pbs":P()}],"scroll-pbe":[{"scroll-pbe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",me,he]}],fill:[{fill:["none",...w()]}],"stroke-w":[{stroke:[Oe,Ql,Ga,l0]}],stroke:[{stroke:["none",...w()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},AS=lS(ES);function Ia(...n){return AS(kg(n))}const RS=jw,tx=S.forwardRef(({className:n,...r},i)=>h.jsx(Ng,{ref:i,className:Ia("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...r}));tx.displayName=Ng.displayName;const OS=Cw("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),nx=S.forwardRef(({className:n,variant:r,...i},s)=>h.jsx(jg,{ref:s,className:Ia(OS({variant:r}),n),...i}));nx.displayName=jg.displayName;const kS=S.forwardRef(({className:n,...r},i)=>h.jsx(Ag,{ref:i,className:Ia("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...r}));kS.displayName=Ag.displayName;const ax=S.forwardRef(({className:n,...r},i)=>h.jsx(Rg,{ref:i,className:Ia("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...r,children:h.jsx(ns,{className:"h-4 w-4"})}));ax.displayName=Rg.displayName;const rx=S.forwardRef(({className:n,...r},i)=>h.jsx(Cg,{ref:i,className:Ia("text-sm font-semibold",n),...r}));rx.displayName=Cg.displayName;const lx=S.forwardRef(({className:n,...r},i)=>h.jsx(Eg,{ref:i,className:Ia("text-sm opacity-90",n),...r}));lx.displayName=Eg.displayName;function MS(){const{toasts:n}=M1();return h.jsxs(RS,{children:[n.map(function({id:r,title:i,description:s,action:c,...d}){return h.jsxs(nx,{...d,children:[h.jsxs("div",{className:"grid gap-1",children:[i&&h.jsx(rx,{children:i}),s&&h.jsx(lx,{children:s})]}),c,h.jsx(ax,{})]},r)}),h.jsx(tx,{})]})}const DS=["top","right","bottom","left"],Sa=Math.min,Qt=Math.max,Bi=Math.round,Ri=Math.floor,wn=n=>({x:n,y:n}),TS={left:"right",right:"left",bottom:"top",top:"bottom"};function Iu(n,r,i){return Qt(n,Sa(r,i))}function Pn(n,r){return typeof n=="function"?n(r):n}function $n(n){return n.split("-")[0]}function Xr(n){return n.split("-")[1]}function vf(n){return n==="x"?"y":"x"}function bf(n){return n==="y"?"height":"width"}function vn(n){const r=n[0];return r==="t"||r==="b"?"y":"x"}function wf(n){return vf(vn(n))}function _S(n,r,i){i===void 0&&(i=!1);const s=Xr(n),c=wf(n),d=bf(c);let m=c==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return r.reference[d]>r.floating[d]&&(m=Ui(m)),[m,Ui(m)]}function zS(n){const r=Ui(n);return[Zu(n),r,Zu(r)]}function Zu(n){return n.includes("start")?n.replace("start","end"):n.replace("end","start")}const o0=["left","right"],c0=["right","left"],LS=["top","bottom"],HS=["bottom","top"];function BS(n,r,i){switch(n){case"top":case"bottom":return i?r?c0:o0:r?o0:c0;case"left":case"right":return r?LS:HS;default:return[]}}function US(n,r,i,s){const c=Xr(n);let d=BS($n(n),i==="start",s);return c&&(d=d.map(m=>m+"-"+c),r&&(d=d.concat(d.map(Zu)))),d}function Ui(n){const r=$n(n);return TS[r]+n.slice(r.length)}function qS(n){return{top:0,right:0,bottom:0,left:0,...n}}function sx(n){return typeof n!="number"?qS(n):{top:n,right:n,bottom:n,left:n}}function qi(n){const{x:r,y:i,width:s,height:c}=n;return{width:s,height:c,top:i,left:r,right:r+s,bottom:i+c,x:r,y:i}}function u0(n,r,i){let{reference:s,floating:c}=n;const d=vn(r),m=wf(r),p=bf(m),x=$n(r),f=d==="y",g=s.x+s.width/2-c.width/2,v=s.y+s.height/2-c.height/2,j=s[p]/2-c[p]/2;let C;switch(x){case"top":C={x:g,y:s.y-c.height};break;case"bottom":C={x:g,y:s.y+s.height};break;case"right":C={x:s.x+s.width,y:v};break;case"left":C={x:s.x-c.width,y:v};break;default:C={x:s.x,y:s.y}}switch(Xr(r)){case"start":C[m]-=j*(i&&f?-1:1);break;case"end":C[m]+=j*(i&&f?-1:1);break}return C}async function VS(n,r){var i;r===void 0&&(r={});const{x:s,y:c,platform:d,rects:m,elements:p,strategy:x}=n,{boundary:f="clippingAncestors",rootBoundary:g="viewport",elementContext:v="floating",altBoundary:j=!1,padding:C=0}=Pn(r,n),E=sx(C),k=p[j?v==="floating"?"reference":"floating":v],H=qi(await d.getClippingRect({element:(i=await(d.isElement==null?void 0:d.isElement(k)))==null||i?k:k.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(p.floating)),boundary:f,rootBoundary:g,strategy:x})),q=v==="floating"?{x:s,y:c,width:m.floating.width,height:m.floating.height}:m.reference,$=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p.floating)),Q=await(d.isElement==null?void 0:d.isElement($))?await(d.getScale==null?void 0:d.getScale($))||{x:1,y:1}:{x:1,y:1},V=qi(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:q,offsetParent:$,strategy:x}):q);return{top:(H.top-V.top+E.top)/Q.y,bottom:(V.bottom-H.bottom+E.bottom)/Q.y,left:(H.left-V.left+E.left)/Q.x,right:(V.right-H.right+E.right)/Q.x}}const PS=50,$S=async(n,r,i)=>{const{placement:s="bottom",strategy:c="absolute",middleware:d=[],platform:m}=i,p=m.detectOverflow?m:{...m,detectOverflow:VS},x=await(m.isRTL==null?void 0:m.isRTL(r));let f=await m.getElementRects({reference:n,floating:r,strategy:c}),{x:g,y:v}=u0(f,s,x),j=s,C=0;const E={};for(let R=0;R<d.length;R++){const k=d[R];if(!k)continue;const{name:H,fn:q}=k,{x:$,y:Q,data:V,reset:F}=await q({x:g,y:v,initialPlacement:s,placement:j,strategy:c,middlewareData:E,rects:f,platform:p,elements:{reference:n,floating:r}});g=$??g,v=Q??v,E[H]={...E[H],...V},F&&C<PS&&(C++,typeof F=="object"&&(F.placement&&(j=F.placement),F.rects&&(f=F.rects===!0?await m.getElementRects({reference:n,floating:r,strategy:c}):F.rects),{x:g,y:v}=u0(f,j,x)),R=-1)}return{x:g,y:v,placement:j,strategy:c,middlewareData:E}},GS=n=>({name:"arrow",options:n,async fn(r){const{x:i,y:s,placement:c,rects:d,platform:m,elements:p,middlewareData:x}=r,{element:f,padding:g=0}=Pn(n,r)||{};if(f==null)return{};const v=sx(g),j={x:i,y:s},C=wf(c),E=bf(C),R=await m.getDimensions(f),k=C==="y",H=k?"top":"left",q=k?"bottom":"right",$=k?"clientHeight":"clientWidth",Q=d.reference[E]+d.reference[C]-j[C]-d.floating[E],V=j[C]-d.reference[C],F=await(m.getOffsetParent==null?void 0:m.getOffsetParent(f));let ee=F?F[$]:0;(!ee||!await(m.isElement==null?void 0:m.isElement(F)))&&(ee=p.floating[$]||d.floating[E]);const P=Q/2-V/2,re=ee/2-R[E]/2-1,le=Sa(v[H],re),ve=Sa(v[q],re),ge=le,fe=ee-R[E]-ve,K=ee/2-R[E]/2+P,ae=Iu(ge,K,fe),M=!x.arrow&&Xr(c)!=null&&K!==ae&&d.reference[E]/2-(K<ge?le:ve)-R[E]/2<0,W=M?K<ge?K-ge:K-fe:0;return{[C]:j[C]+W,data:{[C]:ae,centerOffset:K-ae-W,...M&&{alignmentOffset:W}},reset:M}}}),YS=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(r){var i,s;const{placement:c,middlewareData:d,rects:m,initialPlacement:p,platform:x,elements:f}=r,{mainAxis:g=!0,crossAxis:v=!0,fallbackPlacements:j,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:R=!0,...k}=Pn(n,r);if((i=d.arrow)!=null&&i.alignmentOffset)return{};const H=$n(c),q=vn(p),$=$n(p)===p,Q=await(x.isRTL==null?void 0:x.isRTL(f.floating)),V=j||($||!R?[Ui(p)]:zS(p)),F=E!=="none";!j&&F&&V.push(...US(p,R,E,Q));const ee=[p,...V],P=await x.detectOverflow(r,k),re=[];let le=((s=d.flip)==null?void 0:s.overflows)||[];if(g&&re.push(P[H]),v){const K=_S(c,m,Q);re.push(P[K[0]],P[K[1]])}if(le=[...le,{placement:c,overflows:re}],!re.every(K=>K<=0)){var ve,ge;const K=(((ve=d.flip)==null?void 0:ve.index)||0)+1,ae=ee[K];if(ae&&(!(v==="alignment"?q!==vn(ae):!1)||le.every(J=>vn(J.placement)===q?J.overflows[0]>0:!0)))return{data:{index:K,overflows:le},reset:{placement:ae}};let M=(ge=le.filter(W=>W.overflows[0]<=0).sort((W,J)=>W.overflows[1]-J.overflows[1])[0])==null?void 0:ge.placement;if(!M)switch(C){case"bestFit":{var fe;const W=(fe=le.filter(J=>{if(F){const pe=vn(J.placement);return pe===q||pe==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(pe=>pe>0).reduce((pe,w)=>pe+w,0)]).sort((J,pe)=>J[1]-pe[1])[0])==null?void 0:fe[0];W&&(M=W);break}case"initialPlacement":M=p;break}if(c!==M)return{reset:{placement:M}}}return{}}}};function f0(n,r){return{top:n.top-r.height,right:n.right-r.width,bottom:n.bottom-r.height,left:n.left-r.width}}function d0(n){return DS.some(r=>n[r]>=0)}const WS=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(r){const{rects:i,platform:s}=r,{strategy:c="referenceHidden",...d}=Pn(n,r);switch(c){case"referenceHidden":{const m=await s.detectOverflow(r,{...d,elementContext:"reference"}),p=f0(m,i.reference);return{data:{referenceHiddenOffsets:p,referenceHidden:d0(p)}}}case"escaped":{const m=await s.detectOverflow(r,{...d,altBoundary:!0}),p=f0(m,i.floating);return{data:{escapedOffsets:p,escaped:d0(p)}}}default:return{}}}}},ix=new Set(["left","top"]);async function XS(n,r){const{placement:i,platform:s,elements:c}=n,d=await(s.isRTL==null?void 0:s.isRTL(c.floating)),m=$n(i),p=Xr(i),x=vn(i)==="y",f=ix.has(m)?-1:1,g=d&&x?-1:1,v=Pn(r,n);let{mainAxis:j,crossAxis:C,alignmentAxis:E}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return p&&typeof E=="number"&&(C=p==="end"?E*-1:E),x?{x:C*g,y:j*f}:{x:j*f,y:C*g}}const QS=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(r){var i,s;const{x:c,y:d,placement:m,middlewareData:p}=r,x=await XS(r,n);return m===((i=p.offset)==null?void 0:i.placement)&&(s=p.arrow)!=null&&s.alignmentOffset?{}:{x:c+x.x,y:d+x.y,data:{...x,placement:m}}}}},FS=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(r){const{x:i,y:s,placement:c,platform:d}=r,{mainAxis:m=!0,crossAxis:p=!1,limiter:x={fn:H=>{let{x:q,y:$}=H;return{x:q,y:$}}},...f}=Pn(n,r),g={x:i,y:s},v=await d.detectOverflow(r,f),j=vn($n(c)),C=vf(j);let E=g[C],R=g[j];if(m){const H=C==="y"?"top":"left",q=C==="y"?"bottom":"right",$=E+v[H],Q=E-v[q];E=Iu($,E,Q)}if(p){const H=j==="y"?"top":"left",q=j==="y"?"bottom":"right",$=R+v[H],Q=R-v[q];R=Iu($,R,Q)}const k=x.fn({...r,[C]:E,[j]:R});return{...k,data:{x:k.x-i,y:k.y-s,enabled:{[C]:m,[j]:p}}}}}},KS=function(n){return n===void 0&&(n={}),{options:n,fn(r){const{x:i,y:s,placement:c,rects:d,middlewareData:m}=r,{offset:p=0,mainAxis:x=!0,crossAxis:f=!0}=Pn(n,r),g={x:i,y:s},v=vn(c),j=vf(v);let C=g[j],E=g[v];const R=Pn(p,r),k=typeof R=="number"?{mainAxis:R,crossAxis:0}:{mainAxis:0,crossAxis:0,...R};if(x){const $=j==="y"?"height":"width",Q=d.reference[j]-d.floating[$]+k.mainAxis,V=d.reference[j]+d.reference[$]-k.mainAxis;C<Q?C=Q:C>V&&(C=V)}if(f){var H,q;const $=j==="y"?"width":"height",Q=ix.has($n(c)),V=d.reference[v]-d.floating[$]+(Q&&((H=m.offset)==null?void 0:H[v])||0)+(Q?0:k.crossAxis),F=d.reference[v]+d.reference[$]+(Q?0:((q=m.offset)==null?void 0:q[v])||0)-(Q?k.crossAxis:0);E<V?E=V:E>F&&(E=F)}return{[j]:C,[v]:E}}}},IS=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(r){var i,s;const{placement:c,rects:d,platform:m,elements:p}=r,{apply:x=()=>{},...f}=Pn(n,r),g=await m.detectOverflow(r,f),v=$n(c),j=Xr(c),C=vn(c)==="y",{width:E,height:R}=d.floating;let k,H;v==="top"||v==="bottom"?(k=v,H=j===(await(m.isRTL==null?void 0:m.isRTL(p.floating))?"start":"end")?"left":"right"):(H=v,k=j==="end"?"top":"bottom");const q=R-g.top-g.bottom,$=E-g.left-g.right,Q=Sa(R-g[k],q),V=Sa(E-g[H],$),F=!r.middlewareData.shift;let ee=Q,P=V;if((i=r.middlewareData.shift)!=null&&i.enabled.x&&(P=$),(s=r.middlewareData.shift)!=null&&s.enabled.y&&(ee=q),F&&!j){const le=Qt(g.left,0),ve=Qt(g.right,0),ge=Qt(g.top,0),fe=Qt(g.bottom,0);C?P=E-2*(le!==0||ve!==0?le+ve:Qt(g.left,g.right)):ee=R-2*(ge!==0||fe!==0?ge+fe:Qt(g.top,g.bottom))}await x({...r,availableWidth:P,availableHeight:ee});const re=await m.getDimensions(p.floating);return E!==re.width||R!==re.height?{reset:{rects:!0}}:{}}}};function to(){return typeof window<"u"}function Qr(n){return ox(n)?(n.nodeName||"").toLowerCase():"#document"}function Ft(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function Sn(n){var r;return(r=(ox(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function ox(n){return to()?n instanceof Node||n instanceof Ft(n).Node:!1}function dn(n){return to()?n instanceof Element||n instanceof Ft(n).Element:!1}function Gn(n){return to()?n instanceof HTMLElement||n instanceof Ft(n).HTMLElement:!1}function h0(n){return!to()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ft(n).ShadowRoot}function ss(n){const{overflow:r,overflowX:i,overflowY:s,display:c}=hn(n);return/auto|scroll|overlay|hidden|clip/.test(r+s+i)&&c!=="inline"&&c!=="contents"}function ZS(n){return/^(table|td|th)$/.test(Qr(n))}function no(n){try{if(n.matches(":popover-open"))return!0}catch{}try{return n.matches(":modal")}catch{return!1}}const JS=/transform|translate|scale|rotate|perspective|filter/,e5=/paint|layout|strict|content/,Ya=n=>!!n&&n!=="none";let Mu;function Sf(n){const r=dn(n)?hn(n):n;return Ya(r.transform)||Ya(r.translate)||Ya(r.scale)||Ya(r.rotate)||Ya(r.perspective)||!Nf()&&(Ya(r.backdropFilter)||Ya(r.filter))||JS.test(r.willChange||"")||e5.test(r.contain||"")}function t5(n){let r=Na(n);for(;Gn(r)&&!Gr(r);){if(Sf(r))return r;if(no(r))return null;r=Na(r)}return null}function Nf(){return Mu==null&&(Mu=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Mu}function Gr(n){return/^(html|body|#document)$/.test(Qr(n))}function hn(n){return Ft(n).getComputedStyle(n)}function ao(n){return dn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Na(n){if(Qr(n)==="html")return n;const r=n.assignedSlot||n.parentNode||h0(n)&&n.host||Sn(n);return h0(r)?r.host:r}function cx(n){const r=Na(n);return Gr(r)?n.ownerDocument?n.ownerDocument.body:n.body:Gn(r)&&ss(r)?r:cx(r)}function as(n,r,i){var s;r===void 0&&(r=[]),i===void 0&&(i=!0);const c=cx(n),d=c===((s=n.ownerDocument)==null?void 0:s.body),m=Ft(c);if(d){const p=Ju(m);return r.concat(m,m.visualViewport||[],ss(c)?c:[],p&&i?as(p):[])}else return r.concat(c,as(c,[],i))}function Ju(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function ux(n){const r=hn(n);let i=parseFloat(r.width)||0,s=parseFloat(r.height)||0;const c=Gn(n),d=c?n.offsetWidth:i,m=c?n.offsetHeight:s,p=Bi(i)!==d||Bi(s)!==m;return p&&(i=d,s=m),{width:i,height:s,$:p}}function jf(n){return dn(n)?n:n.contextElement}function Vr(n){const r=jf(n);if(!Gn(r))return wn(1);const i=r.getBoundingClientRect(),{width:s,height:c,$:d}=ux(r);let m=(d?Bi(i.width):i.width)/s,p=(d?Bi(i.height):i.height)/c;return(!m||!Number.isFinite(m))&&(m=1),(!p||!Number.isFinite(p))&&(p=1),{x:m,y:p}}const n5=wn(0);function fx(n){const r=Ft(n);return!Nf()||!r.visualViewport?n5:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function a5(n,r,i){return r===void 0&&(r=!1),!i||r&&i!==Ft(n)?!1:r}function Fa(n,r,i,s){r===void 0&&(r=!1),i===void 0&&(i=!1);const c=n.getBoundingClientRect(),d=jf(n);let m=wn(1);r&&(s?dn(s)&&(m=Vr(s)):m=Vr(n));const p=a5(d,i,s)?fx(d):wn(0);let x=(c.left+p.x)/m.x,f=(c.top+p.y)/m.y,g=c.width/m.x,v=c.height/m.y;if(d){const j=Ft(d),C=s&&dn(s)?Ft(s):s;let E=j,R=Ju(E);for(;R&&s&&C!==E;){const k=Vr(R),H=R.getBoundingClientRect(),q=hn(R),$=H.left+(R.clientLeft+parseFloat(q.paddingLeft))*k.x,Q=H.top+(R.clientTop+parseFloat(q.paddingTop))*k.y;x*=k.x,f*=k.y,g*=k.x,v*=k.y,x+=$,f+=Q,E=Ft(R),R=Ju(E)}}return qi({width:g,height:v,x,y:f})}function ro(n,r){const i=ao(n).scrollLeft;return r?r.left+i:Fa(Sn(n)).left+i}function dx(n,r){const i=n.getBoundingClientRect(),s=i.left+r.scrollLeft-ro(n,i),c=i.top+r.scrollTop;return{x:s,y:c}}function r5(n){let{elements:r,rect:i,offsetParent:s,strategy:c}=n;const d=c==="fixed",m=Sn(s),p=r?no(r.floating):!1;if(s===m||p&&d)return i;let x={scrollLeft:0,scrollTop:0},f=wn(1);const g=wn(0),v=Gn(s);if((v||!v&&!d)&&((Qr(s)!=="body"||ss(m))&&(x=ao(s)),v)){const C=Fa(s);f=Vr(s),g.x=C.x+s.clientLeft,g.y=C.y+s.clientTop}const j=m&&!v&&!d?dx(m,x):wn(0);return{width:i.width*f.x,height:i.height*f.y,x:i.x*f.x-x.scrollLeft*f.x+g.x+j.x,y:i.y*f.y-x.scrollTop*f.y+g.y+j.y}}function l5(n){return Array.from(n.getClientRects())}function s5(n){const r=Sn(n),i=ao(n),s=n.ownerDocument.body,c=Qt(r.scrollWidth,r.clientWidth,s.scrollWidth,s.clientWidth),d=Qt(r.scrollHeight,r.clientHeight,s.scrollHeight,s.clientHeight);let m=-i.scrollLeft+ro(n);const p=-i.scrollTop;return hn(s).direction==="rtl"&&(m+=Qt(r.clientWidth,s.clientWidth)-c),{width:c,height:d,x:m,y:p}}const m0=25;function i5(n,r){const i=Ft(n),s=Sn(n),c=i.visualViewport;let d=s.clientWidth,m=s.clientHeight,p=0,x=0;if(c){d=c.width,m=c.height;const g=Nf();(!g||g&&r==="fixed")&&(p=c.offsetLeft,x=c.offsetTop)}const f=ro(s);if(f<=0){const g=s.ownerDocument,v=g.body,j=getComputedStyle(v),C=g.compatMode==="CSS1Compat"&&parseFloat(j.marginLeft)+parseFloat(j.marginRight)||0,E=Math.abs(s.clientWidth-v.clientWidth-C);E<=m0&&(d-=E)}else f<=m0&&(d+=f);return{width:d,height:m,x:p,y:x}}function o5(n,r){const i=Fa(n,!0,r==="fixed"),s=i.top+n.clientTop,c=i.left+n.clientLeft,d=Gn(n)?Vr(n):wn(1),m=n.clientWidth*d.x,p=n.clientHeight*d.y,x=c*d.x,f=s*d.y;return{width:m,height:p,x,y:f}}function p0(n,r,i){let s;if(r==="viewport")s=i5(n,i);else if(r==="document")s=s5(Sn(n));else if(dn(r))s=o5(r,i);else{const c=fx(n);s={x:r.x-c.x,y:r.y-c.y,width:r.width,height:r.height}}return qi(s)}function hx(n,r){const i=Na(n);return i===r||!dn(i)||Gr(i)?!1:hn(i).position==="fixed"||hx(i,r)}function c5(n,r){const i=r.get(n);if(i)return i;let s=as(n,[],!1).filter(p=>dn(p)&&Qr(p)!=="body"),c=null;const d=hn(n).position==="fixed";let m=d?Na(n):n;for(;dn(m)&&!Gr(m);){const p=hn(m),x=Sf(m);!x&&p.position==="fixed"&&(c=null),(d?!x&&!c:!x&&p.position==="static"&&!!c&&(c.position==="absolute"||c.position==="fixed")||ss(m)&&!x&&hx(n,m))?s=s.filter(g=>g!==m):c=p,m=Na(m)}return r.set(n,s),s}function u5(n){let{element:r,boundary:i,rootBoundary:s,strategy:c}=n;const m=[...i==="clippingAncestors"?no(r)?[]:c5(r,this._c):[].concat(i),s],p=p0(r,m[0],c);let x=p.top,f=p.right,g=p.bottom,v=p.left;for(let j=1;j<m.length;j++){const C=p0(r,m[j],c);x=Qt(C.top,x),f=Sa(C.right,f),g=Sa(C.bottom,g),v=Qt(C.left,v)}return{width:f-v,height:g-x,x:v,y:x}}function f5(n){const{width:r,height:i}=ux(n);return{width:r,height:i}}function d5(n,r,i){const s=Gn(r),c=Sn(r),d=i==="fixed",m=Fa(n,!0,d,r);let p={scrollLeft:0,scrollTop:0};const x=wn(0);function f(){x.x=ro(c)}if(s||!s&&!d)if((Qr(r)!=="body"||ss(c))&&(p=ao(r)),s){const C=Fa(r,!0,d,r);x.x=C.x+r.clientLeft,x.y=C.y+r.clientTop}else c&&f();d&&!s&&c&&f();const g=c&&!s&&!d?dx(c,p):wn(0),v=m.left+p.scrollLeft-x.x-g.x,j=m.top+p.scrollTop-x.y-g.y;return{x:v,y:j,width:m.width,height:m.height}}function Du(n){return hn(n).position==="static"}function g0(n,r){if(!Gn(n)||hn(n).position==="fixed")return null;if(r)return r(n);let i=n.offsetParent;return Sn(n)===i&&(i=i.ownerDocument.body),i}function mx(n,r){const i=Ft(n);if(no(n))return i;if(!Gn(n)){let c=Na(n);for(;c&&!Gr(c);){if(dn(c)&&!Du(c))return c;c=Na(c)}return i}let s=g0(n,r);for(;s&&ZS(s)&&Du(s);)s=g0(s,r);return s&&Gr(s)&&Du(s)&&!Sf(s)?i:s||t5(n)||i}const h5=async function(n){const r=this.getOffsetParent||mx,i=this.getDimensions,s=await i(n.floating);return{reference:d5(n.reference,await r(n.floating),n.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function m5(n){return hn(n).direction==="rtl"}const p5={convertOffsetParentRelativeRectToViewportRelativeRect:r5,getDocumentElement:Sn,getClippingRect:u5,getOffsetParent:mx,getElementRects:h5,getClientRects:l5,getDimensions:f5,getScale:Vr,isElement:dn,isRTL:m5};function px(n,r){return n.x===r.x&&n.y===r.y&&n.width===r.width&&n.height===r.height}function g5(n,r){let i=null,s;const c=Sn(n);function d(){var p;clearTimeout(s),(p=i)==null||p.disconnect(),i=null}function m(p,x){p===void 0&&(p=!1),x===void 0&&(x=1),d();const f=n.getBoundingClientRect(),{left:g,top:v,width:j,height:C}=f;if(p||r(),!j||!C)return;const E=Ri(v),R=Ri(c.clientWidth-(g+j)),k=Ri(c.clientHeight-(v+C)),H=Ri(g),$={rootMargin:-E+"px "+-R+"px "+-k+"px "+-H+"px",threshold:Qt(0,Sa(1,x))||1};let Q=!0;function V(F){const ee=F[0].intersectionRatio;if(ee!==x){if(!Q)return m();ee?m(!1,ee):s=setTimeout(()=>{m(!1,1e-7)},1e3)}ee===1&&!px(f,n.getBoundingClientRect())&&m(),Q=!1}try{i=new IntersectionObserver(V,{...$,root:c.ownerDocument})}catch{i=new IntersectionObserver(V,$)}i.observe(n)}return m(!0),d}function x5(n,r,i,s){s===void 0&&(s={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:m=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:x=!1}=s,f=jf(n),g=c||d?[...f?as(f):[],...r?as(r):[]]:[];g.forEach(H=>{c&&H.addEventListener("scroll",i,{passive:!0}),d&&H.addEventListener("resize",i)});const v=f&&p?g5(f,i):null;let j=-1,C=null;m&&(C=new ResizeObserver(H=>{let[q]=H;q&&q.target===f&&C&&r&&(C.unobserve(r),cancelAnimationFrame(j),j=requestAnimationFrame(()=>{var $;($=C)==null||$.observe(r)})),i()}),f&&!x&&C.observe(f),r&&C.observe(r));let E,R=x?Fa(n):null;x&&k();function k(){const H=Fa(n);R&&!px(R,H)&&i(),R=H,E=requestAnimationFrame(k)}return i(),()=>{var H;g.forEach(q=>{c&&q.removeEventListener("scroll",i),d&&q.removeEventListener("resize",i)}),v?.(),(H=C)==null||H.disconnect(),C=null,x&&cancelAnimationFrame(E)}}const y5=QS,v5=FS,b5=YS,w5=IS,S5=WS,x0=GS,N5=KS,j5=(n,r,i)=>{const s=new Map,c={platform:p5,...i},d={...c.platform,_c:s};return $S(n,r,{...c,platform:d})};var C5=typeof document<"u",E5=function(){},_i=C5?S.useLayoutEffect:E5;function Vi(n,r){if(n===r)return!0;if(typeof n!=typeof r)return!1;if(typeof n=="function"&&n.toString()===r.toString())return!0;let i,s,c;if(n&&r&&typeof n=="object"){if(Array.isArray(n)){if(i=n.length,i!==r.length)return!1;for(s=i;s--!==0;)if(!Vi(n[s],r[s]))return!1;return!0}if(c=Object.keys(n),i=c.length,i!==Object.keys(r).length)return!1;for(s=i;s--!==0;)if(!{}.hasOwnProperty.call(r,c[s]))return!1;for(s=i;s--!==0;){const d=c[s];if(!(d==="_owner"&&n.$$typeof)&&!Vi(n[d],r[d]))return!1}return!0}return n!==n&&r!==r}function gx(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function y0(n,r){const i=gx(n);return Math.round(r*i)/i}function Tu(n){const r=S.useRef(n);return _i(()=>{r.current=n}),r}function A5(n){n===void 0&&(n={});const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:c,elements:{reference:d,floating:m}={},transform:p=!0,whileElementsMounted:x,open:f}=n,[g,v]=S.useState({x:0,y:0,strategy:i,placement:r,middlewareData:{},isPositioned:!1}),[j,C]=S.useState(s);Vi(j,s)||C(s);const[E,R]=S.useState(null),[k,H]=S.useState(null),q=S.useCallback(J=>{J!==F.current&&(F.current=J,R(J))},[]),$=S.useCallback(J=>{J!==ee.current&&(ee.current=J,H(J))},[]),Q=d||E,V=m||k,F=S.useRef(null),ee=S.useRef(null),P=S.useRef(g),re=x!=null,le=Tu(x),ve=Tu(c),ge=Tu(f),fe=S.useCallback(()=>{if(!F.current||!ee.current)return;const J={placement:r,strategy:i,middleware:j};ve.current&&(J.platform=ve.current),j5(F.current,ee.current,J).then(pe=>{const w={...pe,isPositioned:ge.current!==!1};K.current&&!Vi(P.current,w)&&(P.current=w,Xi.flushSync(()=>{v(w)}))})},[j,r,i,ve,ge]);_i(()=>{f===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,v(J=>({...J,isPositioned:!1})))},[f]);const K=S.useRef(!1);_i(()=>(K.current=!0,()=>{K.current=!1}),[]),_i(()=>{if(Q&&(F.current=Q),V&&(ee.current=V),Q&&V){if(le.current)return le.current(Q,V,fe);fe()}},[Q,V,fe,le,re]);const ae=S.useMemo(()=>({reference:F,floating:ee,setReference:q,setFloating:$}),[q,$]),M=S.useMemo(()=>({reference:Q,floating:V}),[Q,V]),W=S.useMemo(()=>{const J={position:i,left:0,top:0};if(!M.floating)return J;const pe=y0(M.floating,g.x),w=y0(M.floating,g.y);return p?{...J,transform:"translate("+pe+"px, "+w+"px)",...gx(M.floating)>=1.5&&{willChange:"transform"}}:{position:i,left:pe,top:w}},[i,p,M.floating,g.x,g.y]);return S.useMemo(()=>({...g,update:fe,refs:ae,elements:M,floatingStyles:W}),[g,fe,ae,M,W])}const R5=n=>{function r(i){return{}.hasOwnProperty.call(i,"current")}return{name:"arrow",options:n,fn(i){const{element:s,padding:c}=typeof n=="function"?n(i):n;return s&&r(s)?s.current!=null?x0({element:s.current,padding:c}).fn(i):{}:s?x0({element:s,padding:c}).fn(i):{}}}},O5=(n,r)=>{const i=y5(n);return{name:i.name,fn:i.fn,options:[n,r]}},k5=(n,r)=>{const i=v5(n);return{name:i.name,fn:i.fn,options:[n,r]}},M5=(n,r)=>({fn:N5(n).fn,options:[n,r]}),D5=(n,r)=>{const i=b5(n);return{name:i.name,fn:i.fn,options:[n,r]}},T5=(n,r)=>{const i=w5(n);return{name:i.name,fn:i.fn,options:[n,r]}},_5=(n,r)=>{const i=S5(n);return{name:i.name,fn:i.fn,options:[n,r]}},z5=(n,r)=>{const i=R5(n);return{name:i.name,fn:i.fn,options:[n,r]}};var L5="Arrow",xx=S.forwardRef((n,r)=>{const{children:i,width:s=10,height:c=5,...d}=n;return h.jsx(Ht.svg,{...d,ref:r,width:s,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?i:h.jsx("polygon",{points:"0,0 30,0 15,10"})})});xx.displayName=L5;var H5=xx;function B5(n){const[r,i]=S.useState(void 0);return ba(()=>{if(n){i({width:n.offsetWidth,height:n.offsetHeight});const s=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const d=c[0];let m,p;if("borderBoxSize"in d){const x=d.borderBoxSize,f=Array.isArray(x)?x[0]:x;m=f.inlineSize,p=f.blockSize}else m=n.offsetWidth,p=n.offsetHeight;i({width:m,height:p})});return s.observe(n,{box:"border-box"}),()=>s.unobserve(n)}else i(void 0)},[n]),r}var yx="Popper",[vx,bx]=Qi(yx),[O3,wx]=vx(yx),Sx="PopperAnchor",Nx=S.forwardRef((n,r)=>{const{__scopePopper:i,virtualRef:s,...c}=n,d=wx(Sx,i),m=S.useRef(null),p=fn(r,m),x=S.useRef(null);return S.useEffect(()=>{const f=x.current;x.current=s?.current||m.current,f!==x.current&&d.onAnchorChange(x.current)}),s?null:h.jsx(Ht.div,{...c,ref:p})});Nx.displayName=Sx;var Cf="PopperContent",[U5,q5]=vx(Cf),jx=S.forwardRef((n,r)=>{const{__scopePopper:i,side:s="bottom",sideOffset:c=0,align:d="center",alignOffset:m=0,arrowPadding:p=0,avoidCollisions:x=!0,collisionBoundary:f=[],collisionPadding:g=0,sticky:v="partial",hideWhenDetached:j=!1,updatePositionStrategy:C="optimized",onPlaced:E,...R}=n,k=wx(Cf,i),[H,q]=S.useState(null),$=fn(r,Pe=>q(Pe)),[Q,V]=S.useState(null),F=B5(Q),ee=F?.width??0,P=F?.height??0,re=s+(d!=="center"?"-"+d:""),le=typeof g=="number"?g:{top:0,right:0,bottom:0,left:0,...g},ve=Array.isArray(f)?f:[f],ge=ve.length>0,fe={padding:le,boundary:ve.filter(P5),altBoundary:ge},{refs:K,floatingStyles:ae,placement:M,isPositioned:W,middlewareData:J}=A5({strategy:"fixed",placement:re,whileElementsMounted:(...Pe)=>x5(...Pe,{animationFrame:C==="always"}),elements:{reference:k.anchor},middleware:[O5({mainAxis:c+P,alignmentAxis:m}),x&&k5({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?M5():void 0,...fe}),x&&D5({...fe}),T5({...fe,apply:({elements:Pe,rects:ze,availableWidth:Ue,availableHeight:_})=>{const{width:ne,height:ue}=ze.reference,ye=Pe.floating.style;ye.setProperty("--radix-popper-available-width",`${Ue}px`),ye.setProperty("--radix-popper-available-height",`${_}px`),ye.setProperty("--radix-popper-anchor-width",`${ne}px`),ye.setProperty("--radix-popper-anchor-height",`${ue}px`)}}),Q&&z5({element:Q,padding:p}),$5({arrowWidth:ee,arrowHeight:P}),j&&_5({strategy:"referenceHidden",...fe})]}),[pe,w]=Ax(M),B=va(E);ba(()=>{W&&B?.()},[W,B]);const Z=J.arrow?.x,te=J.arrow?.y,oe=J.arrow?.centerOffset!==0,[ie,ce]=S.useState();return ba(()=>{H&&ce(window.getComputedStyle(H).zIndex)},[H]),h.jsx("div",{ref:K.setFloating,"data-radix-popper-content-wrapper":"",style:{...ae,transform:W?ae.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ie,"--radix-popper-transform-origin":[J.transformOrigin?.x,J.transformOrigin?.y].join(" "),...J.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:h.jsx(U5,{scope:i,placedSide:pe,onArrowChange:V,arrowX:Z,arrowY:te,shouldHideArrow:oe,children:h.jsx(Ht.div,{"data-side":pe,"data-align":w,...R,ref:$,style:{...R.style,animation:W?void 0:"none"}})})})});jx.displayName=Cf;var Cx="PopperArrow",V5={top:"bottom",right:"left",bottom:"top",left:"right"},Ex=S.forwardRef(function(r,i){const{__scopePopper:s,...c}=r,d=q5(Cx,s),m=V5[d.placedSide];return h.jsx("span",{ref:d.onArrowChange,style:{position:"absolute",left:d.arrowX,top:d.arrowY,[m]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[d.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[d.placedSide],visibility:d.shouldHideArrow?"hidden":void 0},children:h.jsx(H5,{...c,ref:i,style:{...c.style,display:"block"}})})});Ex.displayName=Cx;function P5(n){return n!==null}var $5=n=>({name:"transformOrigin",options:n,fn(r){const{placement:i,rects:s,middlewareData:c}=r,m=c.arrow?.centerOffset!==0,p=m?0:n.arrowWidth,x=m?0:n.arrowHeight,[f,g]=Ax(i),v={start:"0%",center:"50%",end:"100%"}[g],j=(c.arrow?.x??0)+p/2,C=(c.arrow?.y??0)+x/2;let E="",R="";return f==="bottom"?(E=m?v:`${j}px`,R=`${-x}px`):f==="top"?(E=m?v:`${j}px`,R=`${s.floating.height+x}px`):f==="right"?(E=`${-x}px`,R=m?v:`${C}px`):f==="left"&&(E=`${s.floating.width+x}px`,R=m?v:`${C}px`),{data:{x:E,y:R}}}});function Ax(n){const[r,i="center"]=n.split("-");return[r,i]}var G5=Nx,Y5=jx,W5=Ex,[lo]=Qi("Tooltip",[bx]),Ef=bx(),Rx="TooltipProvider",X5=700,v0="tooltip.open",[Q5,Ox]=lo(Rx),kx=n=>{const{__scopeTooltip:r,delayDuration:i=X5,skipDelayDuration:s=300,disableHoverableContent:c=!1,children:d}=n,m=S.useRef(!0),p=S.useRef(!1),x=S.useRef(0);return S.useEffect(()=>{const f=x.current;return()=>window.clearTimeout(f)},[]),h.jsx(Q5,{scope:r,isOpenDelayedRef:m,delayDuration:i,onOpen:S.useCallback(()=>{window.clearTimeout(x.current),m.current=!1},[]),onClose:S.useCallback(()=>{window.clearTimeout(x.current),x.current=window.setTimeout(()=>m.current=!0,s)},[s]),isPointerInTransitRef:p,onPointerInTransitChange:S.useCallback(f=>{p.current=f},[]),disableHoverableContent:c,children:d})};kx.displayName=Rx;var Mx="Tooltip",[k3,is]=lo(Mx),ef="TooltipTrigger",F5=S.forwardRef((n,r)=>{const{__scopeTooltip:i,...s}=n,c=is(ef,i),d=Ox(ef,i),m=Ef(i),p=S.useRef(null),x=fn(r,p,c.onTriggerChange),f=S.useRef(!1),g=S.useRef(!1),v=S.useCallback(()=>f.current=!1,[]);return S.useEffect(()=>()=>document.removeEventListener("pointerup",v),[v]),h.jsx(G5,{asChild:!0,...m,children:h.jsx(Ht.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...s,ref:x,onPointerMove:ut(n.onPointerMove,j=>{j.pointerType!=="touch"&&!g.current&&!d.isPointerInTransitRef.current&&(c.onTriggerEnter(),g.current=!0)}),onPointerLeave:ut(n.onPointerLeave,()=>{c.onTriggerLeave(),g.current=!1}),onPointerDown:ut(n.onPointerDown,()=>{c.open&&c.onClose(),f.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:ut(n.onFocus,()=>{f.current||c.onOpen()}),onBlur:ut(n.onBlur,c.onClose),onClick:ut(n.onClick,c.onClose)})})});F5.displayName=ef;var Af="TooltipPortal",[K5,I5]=lo(Af,{forceMount:void 0}),Dx=n=>{const{__scopeTooltip:r,forceMount:i,children:s,container:c}=n,d=is(Af,r);return h.jsx(K5,{scope:r,forceMount:i,children:h.jsx(Fi,{present:i||d.open,children:h.jsx(uf,{asChild:!0,container:c,children:s})})})};Dx.displayName=Af;var Yr="TooltipContent",Tx=S.forwardRef((n,r)=>{const i=I5(Yr,n.__scopeTooltip),{forceMount:s=i.forceMount,side:c="top",...d}=n,m=is(Yr,n.__scopeTooltip);return h.jsx(Fi,{present:s||m.open,children:m.disableHoverableContent?h.jsx(_x,{side:c,...d,ref:r}):h.jsx(Z5,{side:c,...d,ref:r})})}),Z5=S.forwardRef((n,r)=>{const i=is(Yr,n.__scopeTooltip),s=Ox(Yr,n.__scopeTooltip),c=S.useRef(null),d=fn(r,c),[m,p]=S.useState(null),{trigger:x,onClose:f}=i,g=c.current,{onPointerInTransitChange:v}=s,j=S.useCallback(()=>{p(null),v(!1)},[v]),C=S.useCallback((E,R)=>{const k=E.currentTarget,H={x:E.clientX,y:E.clientY},q=a4(H,k.getBoundingClientRect()),$=r4(H,q),Q=l4(R.getBoundingClientRect()),V=i4([...$,...Q]);p(V),v(!0)},[v]);return S.useEffect(()=>()=>j(),[j]),S.useEffect(()=>{if(x&&g){const E=k=>C(k,g),R=k=>C(k,x);return x.addEventListener("pointerleave",E),g.addEventListener("pointerleave",R),()=>{x.removeEventListener("pointerleave",E),g.removeEventListener("pointerleave",R)}}},[x,g,C,j]),S.useEffect(()=>{if(m){const E=R=>{const k=R.target,H={x:R.clientX,y:R.clientY},q=x?.contains(k)||g?.contains(k),$=!s4(H,m);q?j():$&&(j(),f())};return document.addEventListener("pointermove",E),()=>document.removeEventListener("pointermove",E)}},[x,g,m,f,j]),h.jsx(_x,{...n,ref:d})}),[J5,e4]=lo(Mx,{isInside:!1}),t4=z1("TooltipContent"),_x=S.forwardRef((n,r)=>{const{__scopeTooltip:i,children:s,"aria-label":c,onEscapeKeyDown:d,onPointerDownOutside:m,...p}=n,x=is(Yr,i),f=Ef(i),{onClose:g}=x;return S.useEffect(()=>(document.addEventListener(v0,g),()=>document.removeEventListener(v0,g)),[g]),S.useEffect(()=>{if(x.trigger){const v=j=>{j.target?.contains(x.trigger)&&g()};return window.addEventListener("scroll",v,{capture:!0}),()=>window.removeEventListener("scroll",v,{capture:!0})}},[x.trigger,g]),h.jsx(cf,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:d,onPointerDownOutside:m,onFocusOutside:v=>v.preventDefault(),onDismiss:g,children:h.jsxs(Y5,{"data-state":x.stateAttribute,...f,...p,ref:r,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[h.jsx(t4,{children:s}),h.jsx(J5,{scope:i,isInside:!0,children:h.jsx(sw,{id:x.contentId,role:"tooltip",children:c||s})})]})})});Tx.displayName=Yr;var zx="TooltipArrow",n4=S.forwardRef((n,r)=>{const{__scopeTooltip:i,...s}=n,c=Ef(i);return e4(zx,i).isInside?null:h.jsx(W5,{...c,...s,ref:r})});n4.displayName=zx;function a4(n,r){const i=Math.abs(r.top-n.y),s=Math.abs(r.bottom-n.y),c=Math.abs(r.right-n.x),d=Math.abs(r.left-n.x);switch(Math.min(i,s,c,d)){case d:return"left";case c:return"right";case i:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function r4(n,r,i=5){const s=[];switch(r){case"top":s.push({x:n.x-i,y:n.y+i},{x:n.x+i,y:n.y+i});break;case"bottom":s.push({x:n.x-i,y:n.y-i},{x:n.x+i,y:n.y-i});break;case"left":s.push({x:n.x+i,y:n.y-i},{x:n.x+i,y:n.y+i});break;case"right":s.push({x:n.x-i,y:n.y-i},{x:n.x-i,y:n.y+i});break}return s}function l4(n){const{top:r,right:i,bottom:s,left:c}=n;return[{x:c,y:r},{x:i,y:r},{x:i,y:s},{x:c,y:s}]}function s4(n,r){const{x:i,y:s}=n;let c=!1;for(let d=0,m=r.length-1;d<r.length;m=d++){const p=r[d],x=r[m],f=p.x,g=p.y,v=x.x,j=x.y;g>s!=j>s&&i<(v-f)*(s-g)/(j-g)+f&&(c=!c)}return c}function i4(n){const r=n.slice();return r.sort((i,s)=>i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0),o4(r)}function o4(n){if(n.length<=1)return n.slice();const r=[];for(let s=0;s<n.length;s++){const c=n[s];for(;r.length>=2;){const d=r[r.length-1],m=r[r.length-2];if((d.x-m.x)*(c.y-m.y)>=(d.y-m.y)*(c.x-m.x))r.pop();else break}r.push(c)}r.pop();const i=[];for(let s=n.length-1;s>=0;s--){const c=n[s];for(;i.length>=2;){const d=i[i.length-1],m=i[i.length-2];if((d.x-m.x)*(c.y-m.y)>=(d.y-m.y)*(c.x-m.x))i.pop();else break}i.push(c)}return i.pop(),r.length===1&&i.length===1&&r[0].x===i[0].x&&r[0].y===i[0].y?r:r.concat(i)}var c4=kx,u4=Dx,Lx=Tx;const f4=c4,d4=S.forwardRef(({className:n,sideOffset:r=4,...i},s)=>h.jsx(u4,{children:h.jsx(Lx,{ref:s,sideOffset:r,className:Ia("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",n),...i})}));d4.displayName=Lx.displayName;const b0=[{path:"/",label:"IDE"},{path:"/learn",label:"Learn"},{path:"/docs",label:"Docs"},{path:"/examples",label:"Examples"},{path:"/cheatsheet",label:"Cheatsheet"},{path:"/tutorials",label:"Tutorials"},{path:"/playground",label:"Playground"},{path:"/showcase",label:"Showcase"},{path:"/resources",label:"Resources"},{path:"/changelog",label:"Changelog"},{path:"/about",label:"About"}];function Rt({children:n,fullWidth:r=!1}){const[i]=Yi(),[s,c]=S.useState(!1);return h.jsxs("div",{className:"min-h-screen bg-[#08081a] text-white flex flex-col",children:[h.jsxs("nav",{className:"border-b border-white/10 bg-[#09091a]/90 backdrop-blur-md sticky top-0 z-50 shadow-[0_1px_12px_rgba(0,0,0,0.4)]",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex items-center h-14",children:[h.jsxs(Qe,{href:"/",className:"flex items-center gap-1 mr-8 shrink-0",children:[h.jsx("img",{src:"/viper-logo.png",alt:"Viper Invictus",className:"w-8 h-8 rounded-lg"}),h.jsx("span",{className:"font-bold text-sm hidden sm:block",children:"Viper Invictus"})]}),h.jsx("div",{className:"hidden md:flex items-center gap-1",children:b0.map(d=>{const m=i===d.path||i.startsWith(d.path+"/");return h.jsx(Qe,{href:d.path,className:`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${m?"bg-[#7c6af7]/15 text-[#b8b0fc]":"text-white/50 hover:text-white/80 hover:bg-white/5"}`,children:d.label},d.path)})}),h.jsx("div",{className:"flex-1"}),h.jsx("button",{onClick:()=>c(!s),className:"md:hidden p-2 text-white/50 hover:text-white/80",children:s?h.jsx(ns,{className:"w-5 h-5"}):h.jsx(Bg,{className:"w-5 h-5"})})]}),s&&h.jsx("div",{className:"md:hidden border-t border-white/10 px-4 py-3 space-y-1",children:b0.map(d=>{const m=i===d.path||i.startsWith(d.path+"/");return h.jsxs(Qe,{href:d.path,onClick:()=>c(!1),className:`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${m?"bg-[#7c6af7]/15 text-[#b8b0fc]":"text-white/50 hover:text-white/80 hover:bg-white/5"}`,children:[d.label,m&&h.jsx(Pr,{className:"w-3 h-3 ml-auto"})]},d.path)})})]}),h.jsx("main",{className:`flex-1 ${r?"":"max-w-7xl mx-auto w-full px-4 py-8"}`,children:n}),h.jsx("footer",{className:"border-t border-white/10 bg-[#060614] py-8 px-4",children:h.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:"/viper-logo.png",alt:"Viper Invictus",className:"w-6 h-6 rounded-md"}),h.jsx("span",{className:"font-semibold text-white/70",children:"Viper Invictus 2.0"})]}),h.jsx("p",{className:"text-xs text-white/30 leading-relaxed",children:"A scripting language for games, art, and interactive programs. Runs in the browser IDE or via the CLI."})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-x-6 gap-y-1",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-medium text-white/40 uppercase tracking-wider mb-2",children:"Learn"}),h.jsxs("div",{className:"space-y-1",children:[h.jsx(Qe,{href:"/learn",className:"block text-xs text-white/30 hover:text-white/60 transition-colors",children:"Learn"}),h.jsx(Qe,{href:"/docs",className:"block text-xs text-white/30 hover:text-white/60 transition-colors",children:"Docs"}),h.jsx(Qe,{href:"/tutorials",className:"block text-xs text-white/30 hover:text-white/60 transition-colors",children:"Tutorials"})]})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-medium text-white/40 uppercase tracking-wider mb-2",children:"Reference"}),h.jsxs("div",{className:"space-y-1",children:[h.jsx(Qe,{href:"/cheatsheet",className:"block text-xs text-white/30 hover:text-white/60 transition-colors",children:"Cheatsheet"}),h.jsx(Qe,{href:"/examples",className:"block text-xs text-white/30 hover:text-white/60 transition-colors",children:"Examples"}),h.jsx(Qe,{href:"/playground",className:"block text-xs text-white/30 hover:text-white/60 transition-colors",children:"Playground"})]})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("p",{className:"text-xs font-medium text-white/40 uppercase tracking-wider mb-2",children:"Community"}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("a",{href:"https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official",target:"_blank",rel:"noopener noreferrer",className:"text-xs text-white/30 hover:text-white/60 transition-colors",children:"GitHub"}),h.jsx(Qe,{href:"/showcase",className:"text-xs text-white/30 hover:text-white/60 transition-colors",children:"Showcase"}),h.jsx(Qe,{href:"/resources",className:"text-xs text-white/30 hover:text-white/60 transition-colors",children:"Resources"})]}),h.jsx("a",{href:"https://discord.gg/P4XDWvGgmt",target:"_blank",rel:"noopener noreferrer",className:"text-xs text-white/30 hover:text-white/60 transition-colors pt-2",children:"Discord"})]})]})})]})}function w0(n,r){(r==null||r>n.length)&&(r=n.length);for(var i=0,s=Array(r);i<r;i++)s[i]=n[i];return s}function h4(n){if(Array.isArray(n))return n}function m4(n,r,i){return(r=w4(r))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n}function p4(n,r){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var s,c,d,m,p=[],x=!0,f=!1;try{if(d=(i=i.call(n)).next,r!==0)for(;!(x=(s=d.call(i)).done)&&(p.push(s.value),p.length!==r);x=!0);}catch(g){f=!0,c=g}finally{try{if(!x&&i.return!=null&&(m=i.return(),Object(m)!==m))return}finally{if(f)throw c}}return p}}function g4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S0(n,r){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);r&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),i.push.apply(i,s)}return i}function N0(n){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?S0(Object(i),!0).forEach(function(s){m4(n,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):S0(Object(i)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(i,s))})}return n}function x4(n,r){if(n==null)return{};var i,s,c=y4(n,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(s=0;s<d.length;s++)i=d[s],r.indexOf(i)===-1&&{}.propertyIsEnumerable.call(n,i)&&(c[i]=n[i])}return c}function y4(n,r){if(n==null)return{};var i={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(r.indexOf(s)!==-1)continue;i[s]=n[s]}return i}function v4(n,r){return h4(n)||p4(n,r)||S4(n,r)||g4()}function b4(n,r){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var s=i.call(n,r);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function w4(n){var r=b4(n,"string");return typeof r=="symbol"?r:r+""}function S4(n,r){if(n){if(typeof n=="string")return w0(n,r);var i={}.toString.call(n).slice(8,-1);return i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set"?Array.from(n):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?w0(n,r):void 0}}function N4(n,r,i){return r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n}function j0(n,r){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);r&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),i.push.apply(i,s)}return i}function C0(n){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?j0(Object(i),!0).forEach(function(s){N4(n,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):j0(Object(i)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(i,s))})}return n}function j4(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return function(s){return r.reduceRight(function(c,d){return d(c)},s)}}function Kl(n){return function r(){for(var i=this,s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return c.length>=n.length?n.apply(this,c):function(){for(var m=arguments.length,p=new Array(m),x=0;x<m;x++)p[x]=arguments[x];return r.apply(i,[].concat(c,p))}}}function Pi(n){return{}.toString.call(n).includes("Object")}function C4(n){return!Object.keys(n).length}function rs(n){return typeof n=="function"}function E4(n,r){return Object.prototype.hasOwnProperty.call(n,r)}function A4(n,r){return Pi(r)||ya("changeType"),Object.keys(r).some(function(i){return!E4(n,i)})&&ya("changeField"),r}function R4(n){rs(n)||ya("selectorType")}function O4(n){rs(n)||Pi(n)||ya("handlerType"),Pi(n)&&Object.values(n).some(function(r){return!rs(r)})&&ya("handlersType")}function k4(n){n||ya("initialIsRequired"),Pi(n)||ya("initialType"),C4(n)&&ya("initialContent")}function M4(n,r){throw new Error(n[r]||n.default)}var D4={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ya=Kl(M4)(D4),Oi={changes:A4,selector:R4,handler:O4,initial:k4};function T4(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Oi.initial(n),Oi.handler(r);var i={current:n},s=Kl(L4)(i,r),c=Kl(z4)(i),d=Kl(Oi.changes)(n),m=Kl(_4)(i);function p(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return Oi.selector(f),f(i.current)}function x(f){j4(s,c,d,m)(f)}return[p,x]}function _4(n,r){return rs(r)?r(n.current):r}function z4(n,r){return n.current=C0(C0({},n.current),r),r}function L4(n,r,i){return rs(r)?r(n.current):Object.keys(i).forEach(function(s){var c;return(c=r[s])===null||c===void 0?void 0:c.call(r,n.current[s])}),i}var H4={create:T4},B4={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function U4(n){return function r(){for(var i=this,s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return c.length>=n.length?n.apply(this,c):function(){for(var m=arguments.length,p=new Array(m),x=0;x<m;x++)p[x]=arguments[x];return r.apply(i,[].concat(c,p))}}}function q4(n){return{}.toString.call(n).includes("Object")}function V4(n){return n||E0("configIsRequired"),q4(n)||E0("configType"),n.urls?(P4(),{paths:{vs:n.urls.monacoBase}}):n}function P4(){console.warn(Hx.deprecation)}function $4(n,r){throw new Error(n[r]||n.default)}var Hx={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},E0=U4($4)(Hx),G4={config:V4},Y4=function(){for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return function(c){return i.reduceRight(function(d,m){return m(d)},c)}};function Bx(n,r){return Object.keys(r).forEach(function(i){r[i]instanceof Object&&n[i]&&Object.assign(r[i],Bx(n[i],r[i]))}),N0(N0({},n),r)}var W4={type:"cancelation",msg:"operation is manually canceled"};function _u(n){var r=!1,i=new Promise(function(s,c){n.then(function(d){return r?c(W4):s(d)}),n.catch(c)});return i.cancel=function(){return r=!0},i}var X4=["monaco"],Q4=H4.create({config:B4,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ux=v4(Q4,2),os=Ux[0],so=Ux[1];function F4(n){var r=G4.config(n),i=r.monaco,s=x4(r,X4);so(function(c){return{config:Bx(c.config,s),monaco:i}})}function K4(){var n=os(function(r){var i=r.monaco,s=r.isInitialized,c=r.resolve;return{monaco:i,isInitialized:s,resolve:c}});if(!n.isInitialized){if(so({isInitialized:!0}),n.monaco)return n.resolve(n.monaco),_u(zu);if(window.monaco&&window.monaco.editor)return qx(window.monaco),n.resolve(window.monaco),_u(zu);Y4(I4,J4)(eN)}return _u(zu)}function I4(n){return document.body.appendChild(n)}function Z4(n){var r=document.createElement("script");return n&&(r.src=n),r}function J4(n){var r=os(function(s){var c=s.config,d=s.reject;return{config:c,reject:d}}),i=Z4("".concat(r.config.paths.vs,"/loader.js"));return i.onload=function(){return n()},i.onerror=r.reject,i}function eN(){var n=os(function(i){var s=i.config,c=i.resolve,d=i.reject;return{config:s,resolve:c,reject:d}}),r=window.require;r.config(n.config),r(["vs/editor/editor.main"],function(i){var s=i.m||i;qx(s),n.resolve(s)},function(i){n.reject(i)})}function qx(n){os().monaco||so({monaco:n})}function tN(){return os(function(n){var r=n.monaco;return r})}var zu=new Promise(function(n,r){return so({resolve:n,reject:r})}),Vx={config:F4,init:K4,__getMonacoInstance:tN},nN={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Lu=nN,aN={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},rN=aN;function lN({children:n}){return Lt.createElement("div",{style:rN.container},n)}var sN=lN,iN=sN;function oN({width:n,height:r,isEditorReady:i,loading:s,_ref:c,className:d,wrapperProps:m}){return Lt.createElement("section",{style:{...Lu.wrapper,width:n,height:r},...m},!i&&Lt.createElement(iN,null,s),Lt.createElement("div",{ref:c,style:{...Lu.fullWidth,...!i&&Lu.hide},className:d}))}var cN=oN,Px=S.memo(cN);function uN(n){S.useEffect(n,[])}var $x=uN;function fN(n,r,i=!0){let s=S.useRef(!0);S.useEffect(s.current||!i?()=>{s.current=!1}:n,r)}var Xt=fN;function Zl(){}function Ur(n,r,i,s){return dN(n,s)||hN(n,r,i,s)}function dN(n,r){return n.editor.getModel(Gx(n,r))}function hN(n,r,i,s){return n.editor.createModel(r,i,s?Gx(n,s):void 0)}function Gx(n,r){return n.Uri.parse(r)}function mN({original:n,modified:r,language:i,originalLanguage:s,modifiedLanguage:c,originalModelPath:d,modifiedModelPath:m,keepCurrentOriginalModel:p=!1,keepCurrentModifiedModel:x=!1,theme:f="light",loading:g="Loading...",options:v={},height:j="100%",width:C="100%",className:E,wrapperProps:R={},beforeMount:k=Zl,onMount:H=Zl}){let[q,$]=S.useState(!1),[Q,V]=S.useState(!0),F=S.useRef(null),ee=S.useRef(null),P=S.useRef(null),re=S.useRef(H),le=S.useRef(k),ve=S.useRef(!1);$x(()=>{let ae=Vx.init();return ae.then(M=>(ee.current=M)&&V(!1)).catch(M=>M?.type!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>F.current?K():ae.cancel()}),Xt(()=>{if(F.current&&ee.current){let ae=F.current.getOriginalEditor(),M=Ur(ee.current,n||"",s||i||"text",d||"");M!==ae.getModel()&&ae.setModel(M)}},[d],q),Xt(()=>{if(F.current&&ee.current){let ae=F.current.getModifiedEditor(),M=Ur(ee.current,r||"",c||i||"text",m||"");M!==ae.getModel()&&ae.setModel(M)}},[m],q),Xt(()=>{let ae=F.current.getModifiedEditor();ae.getOption(ee.current.editor.EditorOption.readOnly)?ae.setValue(r||""):r!==ae.getValue()&&(ae.executeEdits("",[{range:ae.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),ae.pushUndoStop())},[r],q),Xt(()=>{F.current?.getModel()?.original.setValue(n||"")},[n],q),Xt(()=>{let{original:ae,modified:M}=F.current.getModel();ee.current.editor.setModelLanguage(ae,s||i||"text"),ee.current.editor.setModelLanguage(M,c||i||"text")},[i,s,c],q),Xt(()=>{ee.current?.editor.setTheme(f)},[f],q),Xt(()=>{F.current?.updateOptions(v)},[v],q);let ge=S.useCallback(()=>{if(!ee.current)return;le.current(ee.current);let ae=Ur(ee.current,n||"",s||i||"text",d||""),M=Ur(ee.current,r||"",c||i||"text",m||"");F.current?.setModel({original:ae,modified:M})},[i,r,c,n,s,d,m]),fe=S.useCallback(()=>{!ve.current&&P.current&&(F.current=ee.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...v}),ge(),ee.current?.editor.setTheme(f),$(!0),ve.current=!0)},[v,f,ge]);S.useEffect(()=>{q&&re.current(F.current,ee.current)},[q]),S.useEffect(()=>{!Q&&!q&&fe()},[Q,q,fe]);function K(){let ae=F.current?.getModel();p||ae?.original?.dispose(),x||ae?.modified?.dispose(),F.current?.dispose()}return Lt.createElement(Px,{width:C,height:j,isEditorReady:q,loading:g,_ref:P,className:E,wrapperProps:R})}var pN=mN;S.memo(pN);function gN(n){let r=S.useRef();return S.useEffect(()=>{r.current=n},[n]),r.current}var xN=gN,ki=new Map;function yN({defaultValue:n,defaultLanguage:r,defaultPath:i,value:s,language:c,path:d,theme:m="light",line:p,loading:x="Loading...",options:f={},overrideServices:g={},saveViewState:v=!0,keepCurrentModel:j=!1,width:C="100%",height:E="100%",className:R,wrapperProps:k={},beforeMount:H=Zl,onMount:q=Zl,onChange:$,onValidate:Q=Zl}){let[V,F]=S.useState(!1),[ee,P]=S.useState(!0),re=S.useRef(null),le=S.useRef(null),ve=S.useRef(null),ge=S.useRef(q),fe=S.useRef(H),K=S.useRef(),ae=S.useRef(s),M=xN(d),W=S.useRef(!1),J=S.useRef(!1);$x(()=>{let B=Vx.init();return B.then(Z=>(re.current=Z)&&P(!1)).catch(Z=>Z?.type!=="cancelation"&&console.error("Monaco initialization: error:",Z)),()=>le.current?w():B.cancel()}),Xt(()=>{let B=Ur(re.current,n||s||"",r||c||"",d||i||"");B!==le.current?.getModel()&&(v&&ki.set(M,le.current?.saveViewState()),le.current?.setModel(B),v&&le.current?.restoreViewState(ki.get(d)))},[d],V),Xt(()=>{le.current?.updateOptions(f)},[f],V),Xt(()=>{!le.current||s===void 0||(le.current.getOption(re.current.editor.EditorOption.readOnly)?le.current.setValue(s):s!==le.current.getValue()&&(J.current=!0,le.current.executeEdits("",[{range:le.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),le.current.pushUndoStop(),J.current=!1))},[s],V),Xt(()=>{let B=le.current?.getModel();B&&c&&re.current?.editor.setModelLanguage(B,c)},[c],V),Xt(()=>{p!==void 0&&le.current?.revealLine(p)},[p],V),Xt(()=>{re.current?.editor.setTheme(m)},[m],V);let pe=S.useCallback(()=>{if(!(!ve.current||!re.current)&&!W.current){fe.current(re.current);let B=d||i,Z=Ur(re.current,s||n||"",r||c||"",B||"");le.current=re.current?.editor.create(ve.current,{model:Z,automaticLayout:!0,...f},g),v&&le.current.restoreViewState(ki.get(B)),re.current.editor.setTheme(m),p!==void 0&&le.current.revealLine(p),F(!0),W.current=!0}},[n,r,i,s,c,d,f,g,v,m,p]);S.useEffect(()=>{V&&ge.current(le.current,re.current)},[V]),S.useEffect(()=>{!ee&&!V&&pe()},[ee,V,pe]),ae.current=s,S.useEffect(()=>{V&&$&&(K.current?.dispose(),K.current=le.current?.onDidChangeModelContent(B=>{J.current||$(le.current.getValue(),B)}))},[V,$]),S.useEffect(()=>{if(V){let B=re.current.editor.onDidChangeMarkers(Z=>{let te=le.current.getModel()?.uri;if(te&&Z.find(oe=>oe.path===te.path)){let oe=re.current.editor.getModelMarkers({resource:te});Q?.(oe)}});return()=>{B?.dispose()}}return()=>{}},[V,Q]);function w(){K.current?.dispose(),j?v&&ki.set(d,le.current.saveViewState()):le.current.getModel()?.dispose(),le.current.dispose()}return Lt.createElement(Px,{width:C,height:E,isEditorReady:V,loading:x,_ref:ve,className:R,wrapperProps:k})}var vN=yN,bN=S.memo(vN),wN=bN,N=(n=>(n[n.Number=0]="Number",n[n.String=1]="String",n[n.TemplateString=2]="TemplateString",n[n.Identifier=3]="Identifier",n[n.Let=4]="Let",n[n.Var=5]="Var",n[n.Const=6]="Const",n[n.Fn=7]="Fn",n[n.Class=8]="Class",n[n.If=9]="If",n[n.Else=10]="Else",n[n.Elif=11]="Elif",n[n.While=12]="While",n[n.For=13]="For",n[n.In=14]="In",n[n.Of=15]="Of",n[n.Return=16]="Return",n[n.Break=17]="Break",n[n.Continue=18]="Continue",n[n.True=19]="True",n[n.False=20]="False",n[n.Null=21]="Null",n[n.Self=22]="Self",n[n.New=23]="New",n[n.Try=24]="Try",n[n.Catch=25]="Catch",n[n.Throw=26]="Throw",n[n.Switch=27]="Switch",n[n.Case=28]="Case",n[n.Default=29]="Default",n[n.Do=30]="Do",n[n.Pass=31]="Pass",n[n.Def=32]="Def",n[n.Function=33]="Function",n[n.And=34]="And",n[n.Or=35]="Or",n[n.Not=36]="Not",n[n.Is=37]="Is",n[n.None=38]="None",n[n.This=39]="This",n[n.Undefined=40]="Undefined",n[n.Plus=41]="Plus",n[n.Minus=42]="Minus",n[n.Star=43]="Star",n[n.Slash=44]="Slash",n[n.Percent=45]="Percent",n[n.StarStar=46]="StarStar",n[n.Eq=47]="Eq",n[n.NotEq=48]="NotEq",n[n.StrictEq=49]="StrictEq",n[n.StrictNotEq=50]="StrictNotEq",n[n.Lt=51]="Lt",n[n.Gt=52]="Gt",n[n.LtEq=53]="LtEq",n[n.GtEq=54]="GtEq",n[n.Assign=55]="Assign",n[n.PlusAssign=56]="PlusAssign",n[n.MinusAssign=57]="MinusAssign",n[n.StarAssign=58]="StarAssign",n[n.SlashAssign=59]="SlashAssign",n[n.PercentAssign=60]="PercentAssign",n[n.PlusPlus=61]="PlusPlus",n[n.MinusMinus=62]="MinusMinus",n[n.QuestionDot=63]="QuestionDot",n[n.Spread=64]="Spread",n[n.Range=65]="Range",n[n.Arrow=66]="Arrow",n[n.LParen=67]="LParen",n[n.RParen=68]="RParen",n[n.LBrace=69]="LBrace",n[n.RBrace=70]="RBrace",n[n.LBracket=71]="LBracket",n[n.RBracket=72]="RBracket",n[n.Semicolon=73]="Semicolon",n[n.Comma=74]="Comma",n[n.Dot=75]="Dot",n[n.Colon=76]="Colon",n[n.Question=77]="Question",n[n.EOF=78]="EOF",n))(N||{});class Rf{constructor(r){this.parent=r,r&&(this.depth=r.depth+1)}vars=new Map;consts=new Set;depth=0;get(r,i){let s=this;for(;s;){const c=s.vars.get(r);if(c!==void 0)return c;s=s.parent}throw new Nt(`Undefined variable '${r}'`,i)}set(r,i,s){let c=this;for(;c;){if(c.vars.has(r)){if(c.consts.has(r))throw new Nt(`Cannot reassign const '${r}'`,s);c.vars.set(r,i);return}c=c.parent}throw new Nt(`Undefined variable '${r}'`,s)}define(r,i,s=!1){this.vars.set(r,i),s&&this.consts.add(r)}child(){return new Rf(this)}getKeys(){const r=[];let i=this;for(;i;){for(const s of i.vars.keys())r.includes(s)||r.push(s);i=i.parent}return r}getLocalVars(){return this.vars}}class Nt extends Error{constructor(r,i){super(r),this.line=i,this.name="ViperError"}}class Mi{constructor(r){this.value=r}}class qn{}class Vn{}const SN={let:N.Let,var:N.Var,const:N.Const,fn:N.Fn,def:N.Def,function:N.Function,class:N.Class,if:N.If,else:N.Else,elif:N.Elif,while:N.While,for:N.For,in:N.In,of:N.Of,return:N.Return,break:N.Break,continue:N.Continue,true:N.True,false:N.False,null:N.Null,True:N.True,False:N.False,None:N.None,self:N.Self,this:N.This,new:N.New,try:N.Try,catch:N.Catch,throw:N.Throw,switch:N.Switch,case:N.Case,default:N.Default,do:N.Do,pass:N.Pass,and:N.And,or:N.Or,not:N.Not,is:N.Is,undefined:N.Undefined};function Yx(n){const r=[],i=[];let s=0,c=1,d=1;function m(g=0){return n[s+g]??""}function p(){const g=n[s++];return g===`
`?(c++,d=1):d++,g}function x(g,v,j=c,C=d){return{type:g,value:v,line:j,col:C}}function f(g){return n[s]===g?(s++,d++,!0):!1}for(;s<n.length;){const g=c,v=d,j=p();if(j==="/"&&m()==="/"){for(;s<n.length&&m()!==`
`;)p();continue}if(j==="/"&&m()==="*"){for(p();s<n.length&&!(m()==="*"&&m(1)==="/");)p();p(),p();continue}if(!(j===" "||j==="	"||j==="\r"||j===`
`)){if(j==="`"){let C="";for(;s<n.length&&m()!=="`";){if(m()==="\\"&&m(1)==="`"){p(),C+="`",p();continue}C+=p()}p(),r.push(x(N.TemplateString,C,g,v));continue}if(j==='"'||j==="'"){let C="";for(;s<n.length&&m()!==j;)if(m()==="\\"){p();const E=p();switch(E){case"n":C+=`
`;break;case"t":C+="	";break;case"r":C+="\r";break;case"\\":C+="\\";break;default:C+=E}}else C+=p();p(),r.push(x(N.String,C,g,v));continue}if(j>="0"&&j<="9"||j==="."&&m()>="0"&&m()<="9"){let C=j;for(;s<n.length&&(m()>="0"&&m()<="9"||m()===".");)C+=p();if(m()==="e"||m()==="E")for(C+=p(),(m()==="+"||m()==="-")&&(C+=p());s<n.length&&m()>="0"&&m()<="9";)C+=p();r.push(x(N.Number,C,g,v));continue}if(j==="_"||j>="a"&&j<="z"||j>="A"&&j<="Z"){let C=j;for(;s<n.length&&(m()==="_"||m()>="a"&&m()<="z"||m()>="A"&&m()<="Z"||m()>="0"&&m()<="9");)C+=p();const E=SN[C];r.push(x(E!==void 0?E:N.Identifier,C,g,v));continue}switch(j){case"+":r.push(f("+")?x(N.PlusPlus,"++",g,v):f("=")?x(N.PlusAssign,"+=",g,v):x(N.Plus,"+",g,v));break;case"-":r.push(f("-")?x(N.MinusMinus,"--",g,v):f("=")?x(N.MinusAssign,"-=",g,v):x(N.Minus,"-",g,v));break;case"*":r.push(f("*")?x(N.StarStar,"**",g,v):f("=")?x(N.StarAssign,"*=",g,v):x(N.Star,"*",g,v));break;case"/":r.push(f("=")?x(N.SlashAssign,"/=",g,v):x(N.Slash,"/",g,v));break;case"%":r.push(f("=")?x(N.PercentAssign,"%=",g,v):x(N.Percent,"%",g,v));break;case"=":r.push(f("=")?f("=")?x(N.StrictEq,"===",g,v):x(N.Eq,"==",g,v):f(">")?x(N.Arrow,"=>",g,v):x(N.Assign,"=",g,v));break;case"!":r.push(f("=")?f("=")?x(N.StrictNotEq,"!==",g,v):x(N.NotEq,"!=",g,v):x(N.Not,"!",g,v));break;case"<":r.push(f("=")?x(N.LtEq,"<=",g,v):x(N.Lt,"<",g,v));break;case">":r.push(f("=")?x(N.GtEq,">=",g,v):x(N.Gt,">",g,v));break;case"&":if(f("&")){r.push(x(N.And,"&&",g,v));break}else{i.push({message:"Unexpected '&'",line:g});continue}case"|":if(f("|")){r.push(x(N.Or,"||",g,v));break}else{i.push({message:"Unexpected '|'",line:g});continue}case"?":r.push(f(".")?x(N.QuestionDot,"?.",g,v):x(N.Question,"?",g,v));break;case".":r.push(f(".")?f(".")?x(N.Spread,"...",g,v):x(N.Range,"..",g,v):x(N.Dot,".",g,v));break;case"(":r.push(x(N.LParen,"(",g,v));break;case")":r.push(x(N.RParen,")",g,v));break;case"{":r.push(x(N.LBrace,"{",g,v));break;case"}":r.push(x(N.RBrace,"}",g,v));break;case"[":r.push(x(N.LBracket,"[",g,v));break;case"]":r.push(x(N.RBracket,"]",g,v));break;case";":r.push(x(N.Semicolon,";",g,v));break;case",":r.push(x(N.Comma,",",g,v));break;case":":r.push(x(N.Colon,":",g,v));break;default:i.push({message:`Unexpected character '${j}'`,line:g});continue}}}return r.push({type:N.EOF,value:"",line:c,col:d}),{tokens:r,errors:i}}function Wx(n){let r=0;const i=[];function s(_=0){return n[r+_]??n[n.length-1]}function c(){return n[r++]}function d(_){return s().type===_}function m(_,ne){if(!d(_)){const ue={message:ne??`Expected ${N[_]}, got '${s().value}'`,line:s().line};for(i.push(ue);!d(_)&&!d(N.EOF)&&!d(N.Semicolon)&&!d(N.RBrace);)c();return d(_)?c():s()}return c()}function p(_){return d(_)?(c(),!0):!1}function x(){const _=[];for(;!d(N.EOF);)_.push(g());return{type:"Program",body:_}}function f(){const _=s().line;m(N.LBrace);const ne=[];for(;!d(N.RBrace)&&!d(N.EOF);)ne.push(g());return m(N.RBrace,"Expected '}' to close block"),{type:"Block",body:ne,line:_}}function g(){const _=s();switch(_.type){case N.Let:return v("let");case N.Var:return v("var");case N.Const:return v("const");case N.Fn:case N.Def:case N.Function:return n[r+1]?.type===N.Identifier?j():ee();case N.Class:return E();case N.If:return R();case N.While:return k();case N.Do:return H();case N.For:return V();case N.Try:return q();case N.Throw:return $();case N.Switch:return Q();case N.Return:return F();case N.Break:return c(),p(N.Semicolon),{type:"Break",line:_.line};case N.Continue:return c(),p(N.Semicolon),{type:"Continue",line:_.line};case N.Pass:return c(),p(N.Semicolon),{type:"Block",body:[],line:_.line};case N.LBrace:return f();default:return ee()}}function v(_){const ne=s().line;c();const ue=m(N.Identifier).value;let ye;return p(N.Assign)&&(ye=P()),p(N.Semicolon),{type:_==="let"?"LetDecl":_==="var"?"VarDecl":"ConstDecl",name:ue,init:ye,line:ne}}function j(){const _=s().line,ne=s().type;(ne===N.Fn||ne===N.Def||ne===N.Function)&&c();let ue="";d(N.Identifier)&&(ue=c().value);const ye=C(),Ae=f();return{type:"FnDecl",name:ue,params:ye,body:Ae,line:_}}function C(){m(N.LParen);const _=[];for(;!d(N.RParen)&&!d(N.EOF)&&(d(N.Spread)&&c(),_.push(m(N.Identifier).value),!!p(N.Comma)););return m(N.RParen,"Expected ')' after parameters"),_}function E(){const _=s().line;m(N.Class);const ne=m(N.Identifier).value;let ue;p(N.Lt)&&(ue=m(N.Identifier).value),m(N.LBrace);const ye=[];for(;!d(N.RBrace)&&!d(N.EOF);){const Ae=s().line,Ct=m(N.Identifier).value,vt=C(),rt=f();ye.push({type:"Method",name:Ct,params:vt,body:rt,line:Ae})}return m(N.RBrace),{type:"ClassDecl",name:ne,superName:ue,methods:ye,line:_}}function R(){const _=s().line;m(N.If),m(N.LParen,"Expected '(' after 'if'");const ne=P();m(N.RParen,"Expected ')' after if condition");const ue=f();let ye;if(p(N.Else))ye=d(N.If)||d(N.Elif)?R():f();else if(p(N.Elif)){m(N.LParen,"Expected '(' after 'elif'");const Ae=P();m(N.RParen,"Expected ')' after elif condition");const Ct=f();let vt;if(p(N.Else))vt=d(N.If)||d(N.Elif)?R():f();else if(p(N.Elif)){m(N.LParen,"Expected '(' after 'elif'");const rt=P();m(N.RParen,"Expected ')' after elif condition");const Nn=f();vt={type:"If",cond:rt,then:Nn,els:void 0,line:s().line}}ye={type:"If",cond:Ae,then:Ct,els:vt,line:_}}return{type:"If",cond:ne,then:ue,els:ye,line:_}}function k(){const _=s().line;m(N.While),m(N.LParen,"Expected '(' after 'while'");const ne=P();m(N.RParen,"Expected ')' after while condition");const ue=f();return{type:"While",cond:ne,body:ue,line:_}}function H(){const _=s().line;m(N.Do);const ne=f();m(N.While,"Expected 'while' after 'do' block"),m(N.LParen,"Expected '(' after 'while'");const ue=P();return m(N.RParen,"Expected ')' after while condition"),p(N.Semicolon),{type:"DoWhile",cond:ue,body:ne,line:_}}function q(){const _=s().line;m(N.Try);const ne=f();m(N.Catch,"Expected 'catch' after 'try' block"),m(N.LParen,"Expected '(' after 'catch'");const ue=m(N.Identifier,"Expected error variable name in catch").value;m(N.RParen,"Expected ')' after catch variable");const ye=f();return{type:"Try",body:ne,errName:ue,catchBody:ye,line:_}}function $(){const _=s().line;m(N.Throw);const ne=P();return p(N.Semicolon),{type:"Throw",value:ne,line:_}}function Q(){const _=s().line;m(N.Switch),m(N.LParen,"Expected '(' after 'switch'");const ne=P();m(N.RParen,"Expected ')' after switch expression"),m(N.LBrace,"Expected '{' to start switch cases");const ue=[];for(;!d(N.RBrace)&&!d(N.EOF);)if(p(N.Case)){const ye=P();m(N.Colon,"Expected ':' after case expression");const Ae=[];for(;!d(N.Case)&&!d(N.Default)&&!d(N.RBrace)&&!d(N.EOF);)Ae.push(g());ue.push({cond:ye,body:Ae})}else if(p(N.Default)){m(N.Colon,"Expected ':' after 'default'");const ye=[];for(;!d(N.RBrace)&&!d(N.EOF);)ye.push(g());ue.push({cond:null,body:ye})}else i.push({message:"Expected 'case' or 'default' in switch",line:s().line}),c();return m(N.RBrace,"Expected '}' to close switch"),{type:"Switch",cond:ne,cases:ue,line:_}}function V(){const _=s().line;if(m(N.For),m(N.LParen,"Expected '(' after 'for'"),(d(N.Let)||d(N.Var)||d(N.Const))&&(s(2).type===N.Of||s(2).type===N.In)){c();const vt=m(N.Identifier).value,rt=d(N.Of);c();const Nn=P();m(N.RParen);const Yn=f();return{type:rt?"ForOf":"ForIn",varName:vt,iter:Nn,body:Yn,line:_}}let ue;if(!d(N.Semicolon))if(d(N.Let)||d(N.Var)||d(N.Const)){const vt=c().value,rt=m(N.Identifier).value;let Nn;p(N.Assign)&&(Nn=P()),ue={type:vt==="let"?"LetDecl":vt==="var"?"VarDecl":"ConstDecl",name:rt,init:Nn}}else ue={type:"ExprStmt",expr:P()};m(N.Semicolon);let ye;d(N.Semicolon)||(ye=P()),m(N.Semicolon);let Ae;d(N.RParen)||(Ae=P()),m(N.RParen);const Ct=f();return{type:"For",init:ue,cond:ye,update:Ae,body:Ct,line:_}}function F(){const _=s().line;m(N.Return);let ne;return!d(N.Semicolon)&&!d(N.RBrace)&&!d(N.EOF)&&(ne=P()),p(N.Semicolon),{type:"Return",value:ne,line:_}}function ee(){const _=s().line,ne=P();return p(N.Semicolon),{type:"ExprStmt",expr:ne,line:_}}function P(){return re()}function re(){const _=le(),ne=s();if([N.Assign,N.PlusAssign,N.MinusAssign,N.StarAssign,N.SlashAssign,N.PercentAssign].includes(ne.type)){c();const ye=re();return{type:"Assign",op:ne.value,left:_,right:ye,line:ne.line}}return _}function le(){let _=ve();if(d(N.Question)){const ne=s().line;c();const ue=P();m(N.Colon,"Expected ':' in ternary");const ye=P();return{type:"Ternary",cond:_,then:ue,els:ye,line:ne}}return _}function ve(){let _=ge();for(;d(N.Or);){const ne=s().line;_={type:"Binary",op:c().value,left:_,right:ge(),line:ne}}return _}function ge(){let _=fe();for(;d(N.And);){const ne=s().line;_={type:"Binary",op:c().value,left:_,right:fe(),line:ne}}return _}function fe(){let _=K();for(;d(N.Eq)||d(N.NotEq)||d(N.StrictEq)||d(N.StrictNotEq);){const ne=s().line;_={type:"Binary",op:c().value,left:_,right:K(),line:ne}}return _}function K(){let _=ae();for(;d(N.In)||d(N.Is);){const ne=s().line;_={type:"Binary",op:c().value,left:_,right:ae(),line:ne}}return _}function ae(){let _=M();for(;[N.Lt,N.Gt,N.LtEq,N.GtEq].includes(s().type);){const ne=s().line;_={type:"Binary",op:c().value,left:_,right:M(),line:ne}}return _}function M(){let _=W();for(;d(N.Plus)||d(N.Minus);){const ne=s().line;_={type:"Binary",op:c().value,left:_,right:W(),line:ne}}return _}function W(){let _=J();for(;[N.Star,N.Slash,N.Percent].includes(s().type);){const ne=s().line;_={type:"Binary",op:c().value,left:_,right:J(),line:ne}}return _}function J(){const _=pe();if(d(N.StarStar)){const ne=s().line;return{type:"Binary",op:c().value,left:_,right:J(),line:ne}}return _}function pe(){const _=s();return _.type===N.Not||_.type===N.Minus||_.type===N.Plus?(c(),{type:"Unary",op:_.value,expr:pe(),line:_.line}):_.type===N.PlusPlus||_.type===N.MinusMinus?(c(),{type:"Unary",op:_.value,prefix:!0,expr:w(),line:_.line}):w()}function w(){let _=B();for(;d(N.PlusPlus)||d(N.MinusMinus);){const ne=s().line;_={type:"Postfix",op:c().value,expr:_,line:ne}}return _}function B(){let _=oe();for(;;){const ne=s();if(ne.type===N.Dot||ne.type===N.QuestionDot){c();const ue=m(N.Identifier,"Expected property name after '.'").value;_={type:"Member",obj:_,prop:ue,optional:ne.type===N.QuestionDot,line:ne.line}}else if(ne.type===N.LBracket){c();const ue=P();m(N.RBracket,"Expected ']'"),_={type:"Index",obj:_,idx:ue,line:ne.line}}else if(ne.type===N.LParen){const ue=Z();_={type:"Call",callee:_,args:ue,line:ne.line}}else break}return _}function Z(){m(N.LParen);const _=[];for(;!d(N.RParen)&&!d(N.EOF);){if(d(N.Spread)){const ne=s().line;c(),_.push({type:"Spread",expr:P(),line:ne})}else _.push(P());if(!p(N.Comma))break}return m(N.RParen,"Expected ')' after arguments"),_}function te(_,ne){const ue=[];let ye=0,Ae="";for(;ye<_.length;)if(_[ye]==="$"&&_[ye+1]==="{"){Ae&&(ue.push({type:"Str",value:Ae}),Ae=""),ye+=2;let Ct=1,vt="";for(;ye<_.length&&Ct>0;){if(_[ye]==="{")Ct++;else if(_[ye]==="}"&&(Ct--,Ct===0)){ye++;break}vt+=_[ye++]}try{const rt=Yx(vt),Yn=Wx(rt.tokens).ast.body;if(Yn.length>0){const Za=Yn[0];ue.push(Za.type==="ExprStmt"?Za.expr:Za)}}catch{ue.push({type:"Str",value:`\${${vt}}`})}}else if(_[ye]==="\\"){ye++;const Ct=_[ye++];switch(Ct){case"n":Ae+=`
`;break;case"t":Ae+="	";break;case"r":Ae+="\r";break;case"\\":Ae+="\\";break;case'"':Ae+='"';break;case"'":Ae+="'";break;case"0":Ae+="\0";break;case"b":Ae+="\b";break;case"f":Ae+="\f";break;case"v":Ae+="\v";break;default:Ae+=Ct}}else Ae+=_[ye++];return Ae&&ue.push({type:"Str",value:Ae}),{type:"Template",parts:ue,line:ne}}function oe(){const _=s();switch(_.type){case N.Number:return c(),{type:"Num",value:parseFloat(_.value),line:_.line};case N.String:return c(),{type:"Str",value:_.value,line:_.line};case N.TemplateString:return c(),te(_.value,_.line);case N.True:return c(),{type:"Bool",value:!0,line:_.line};case N.False:return c(),{type:"Bool",value:!1,line:_.line};case N.Null:return c(),{type:"Null",line:_.line};case N.None:return c(),{type:"Null",line:_.line};case N.Undefined:return c(),{type:"Null",line:_.line};case N.Self:return c(),{type:"Self",line:_.line};case N.This:return c(),{type:"Self",line:_.line};case N.Identifier:return c(),{type:"Ident",name:_.value,line:_.line};case N.Fn:case N.Def:case N.Function:return ie();case N.New:return ce();case N.LParen:{c();const ne=P();return m(N.RParen,"Expected ')'"),ne}case N.LBracket:return Pe();case N.LBrace:return ze();default:throw new Nt(`Unexpected token '${_.value}'`,_.line)}}function ie(){const _=s().line,ne=s().type;(ne===N.Fn||ne===N.Def||ne===N.Function)&&c();const ue=C(),ye=f();return{type:"FnExpr",params:ue,body:ye,line:_}}function ce(){const _=s().line;m(N.New);const ne=m(N.Identifier).value,ue=d(N.LParen)?Z():[];return{type:"New",cls:ne,args:ue,line:_}}function Pe(){const _=s().line;m(N.LBracket);const ne=[];for(;!d(N.RBracket)&&!d(N.EOF);){if(d(N.Spread)){const ue=s().line;c(),ne.push({type:"Spread",expr:P(),line:ue})}else ne.push(P());if(!p(N.Comma))break}return m(N.RBracket,"Expected ']'"),{type:"Array",items:ne,line:_}}function ze(){const _=s().line;m(N.LBrace);const ne=[];for(;!d(N.RBrace)&&!d(N.EOF);){let ue;if(d(N.Identifier)||d(N.String)||d(N.Number))ue=c().value;else throw new Nt(`Invalid object key '${s().value}'`,s().line);if(p(N.Colon)?ne.push({key:ue,value:P()}):ne.push({key:ue,value:{type:"Ident",name:ue}}),!p(N.Comma))break}return m(N.RBrace,"Expected '}'"),{type:"Object",props:ne,line:_}}return{ast:x(),errors:i}}function NN(n){try{return{success:!0,js:`${Ne(n)}`}}catch(r){return{success:!1,error:String(r)}}}function Ne(n){if(!n)return"undefined";switch(n.type){case"Program":return ja(n.body,!0);case"Block":return ja(n.body,!1);case"ExprStmt":return Ne(n.expr)+";";case"LetDecl":return Hu(n,"let");case"VarDecl":return Hu(n,"var");case"ConstDecl":return Hu(n,"const");case"FnDecl":return jN(n);case"FnExpr":return CN(n);case"ArrowFn":return EN(n);case"ClassDecl":return AN(n);case"Method":return Xx(n);case"If":return RN(n);case"While":return ON(n);case"DoWhile":return kN(n);case"For":return MN(n);case"ForOf":return DN(n);case"ForIn":return TN(n);case"Return":return _N(n);case"Break":return"break;";case"Continue":return"continue;";case"Try":return zN(n);case"Throw":return LN(n);case"Switch":return HN(n);case"Case":return BN(n);case"DefaultCase":return"default:";case"Assign":return UN(n);case"Binary":return qN(n);case"Unary":return VN(n);case"Postfix":return PN(n);case"Call":return $N(n);case"Member":return GN(n);case"Index":return YN(n);case"New":return WN(n);case"Array":return XN(n);case"Object":return QN(n);case"Spread":return FN(n);case"Ternary":return KN(n);case"Template":return IN(n);case"Ident":return Kt(n.name);case"Num":return String(n.value);case"Str":return JSON.stringify(n.value);case"Bool":return String(n.value);case"Null":return"null";case"Self":return"this";default:return"/* unknown: "+n.type+" */"}}function ja(n,r=!1){if(!n||n.length===0)return r?"":"{}";const i=n.map(s=>Ne(s)).filter(s=>s!==";"&&s!=="");return r?i.join(" "):"{ "+i.join(" ")+" }"}function Hu(n,r){const i=Kt(n.name),s=n.init?Ne(n.init):"undefined";return`${r} ${i} = ${s};`}function jN(n){const r=Kt(n.name),i=(n.params||[]).map(Kt).join(", "),s=ja(n.body);return`function ${r}(${i}) ${s}`}function CN(n){const r=(n.params||[]).map(Kt).join(", "),i=ja(n.body);return`function(${r}) ${i}`}function EN(n){const r=(n.params||[]).map(Kt).join(", "),i=n.body;if(i.type==="Block"){const s=ja(i.body);return`(${r}) => ${s}`}return`(${r}) => ${Ne(i)}`}function AN(n){const r=Kt(n.name),i=n.superName?Kt(n.superName):null,s=n.methods;let c=`class ${r}`;i&&(c+=` extends ${i}`),c+=" { ";const d=s?.find(m=>m.name==="init");if(d){const m=(d.params||[]).map(Kt).join(", "),p=ja(d.body);c+=`constructor(${m}) ${p} `}for(const m of s||[])m.name!=="init"&&(c+=Xx(m));return c+=" }",c}function Xx(n){const r=n.name,i=(n.params||[]).map(Kt).join(", "),s=ja(n.body);return`${r}(${i}) ${s} `}function RN(n){const r=Ne(n.cond),i=Ne(n.then),s=n.els?Ne(n.els):"";let c=`if (${r}) ${i}`;return s&&(c+=` else ${s}`),c}function ON(n){const r=Ne(n.cond),i=Ne(n.body);return`while (${r}) ${i}`}function kN(n){const r=Ne(n.cond);return`do ${Ne(n.body)} while (${r});`}function MN(n){const r=n.init,i=n.cond,s=n.update,c=Ne(n.body),d=r?Ne(r).replace(/;$/,""):"",m=i?Ne(i):"true",p=s?Ne(s).replace(/;$/,""):"";return`for (${d}; ${m}; ${p}) ${c}`}function DN(n){const r=Kt(n.varName),i=Ne(n.iter),s=Ne(n.body);return`for (const ${r} of ${i}) ${s}`}function TN(n){const r=Kt(n.varName),i=Ne(n.iter),s=Ne(n.body);return`for (const ${r} in ${i}) ${s}`}function _N(n){return`return ${n.value?Ne(n.value):""};`}function zN(n){const r=Ne(n.body),i=n.catchBody?Ne(n.catchBody):"{}",s=Kt(n.errName);return`try ${r} catch (${s}) ${i}`}function LN(n){return`throw new Error(${Ne(n.value)});`}function HN(n){const r=Ne(n.cond),i=n.cases;let s=`switch (${r}) {`;for(const c of i||[])s+=" "+Ne(c);return s+=" }",s}function BN(n){const r=n.cond?"case "+Ne(n.cond)+":":"default:",i=ja(n.body);return`${r} ${i}`}function UN(n){const r=Ne(n.left),i=Ne(n.right),s=n.op;if(s==="=")return`${r} = ${i};`;const c=s.replace("=","");return`${r} ${c}= ${i};`}function qN(n){const r=Ne(n.left),i=Ne(n.right),s=n.op,c=s==="==="?"===":s==="!=="?"!==":s==="=="?"==":s==="!="?"!=":s==="and"?"&&":s==="or"?"||":s==="is"?"===":s==="**"?"**":s;if(s==="in")return`__viper_in(${r}, ${i})`;const d=n.left,m=n.right;if(A0(d)&&A0(m)){const p=d.value,x=m.value;switch(s){case"+":return String(p+x);case"-":return String(p-x);case"*":return String(p*x);case"/":return String(x===0?1/0:p/x);case"%":return String(p%x);case"**":return String(Math.pow(p,x));case"==":case"===":return String(p===x);case"!=":case"!==":return String(p!==x);case"<":return String(p<x);case">":return String(p>x);case"<=":return String(p<=x);case">=":return String(p>=x)}}return`(${r} ${c} ${i})`}function A0(n){const r=n;return!!r&&r.type==="Num"&&typeof r.value=="number"}function VN(n){const r=Ne(n.expr),i=n.op;return i==="++"||i==="--"?n.prefix?`${i}${r}`:`${r}${i}`:i==="not"?`(!${r})`:`(${i}${r})`}function PN(n){return`${Ne(n.expr)}${n.op}`}function $N(n){const r=Ne(n.callee),i=(n.args||[]).map(Ne).join(", ");return`${r}(${i})`}function GN(n){const r=Ne(n.obj),i=n.prop;return i.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)?`${r}.${i}`:`${r}[${JSON.stringify(i)}]`}function YN(n){const r=Ne(n.obj),i=Ne(n.idx);return`${r}[${i}]`}function WN(n){const r=Ne(n.callee),i=(n.args||[]).map(Ne).join(", ");return`new ${r}(${i})`}function XN(n){return`[${(n.items||[]).map(Ne).join(", ")}]`}function QN(n){return`{${(n.props||[]).map(s=>`${s.key.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)?s.key:JSON.stringify(s.key)}: ${Ne(s.value)}`).join(", ")}}`}function FN(n){return`...${Ne(n.expr)}`}function KN(n){const r=Ne(n.cond),i=Ne(n.then),s=Ne(n.els);return`(${r} ? ${i} : ${s})`}function IN(n){const r=(n.parts||[]).map(i=>typeof i=="string"?JSON.stringify(i):"String("+Ne(i)+")");return r.length===1?r[0]:r.join(" + ")}const ZN=new Map([["print","__print"],["log","__print"],["warn","__warn"],["error","__error"],["clear","__clear"],["str","__str"],["num","__num"],["bool","__bool"],["type","__type"],["len","__len"],["keys","__keys"],["values","__values"],["range","__range"],["math","__math"],["timer","__timer"],["canvas","__canvas"],["JSON","__JSON"],["input","__input"],["PI","Math.PI"]]),JN=new Set(["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","false","finally","for","function","if","import","in","instanceof","new","null","return","super","switch","this","throw","true","try","typeof","var","void","while","with","yield","let","static","await","enum","implements","interface","package","private","protected","public","abstract","byte","char","double","final","float","goto","int","long","native","short","synchronized","throws","transient","volatile","arguments","eval"]);function Kt(n){const r=ZN.get(n);return r||(JN.has(n)?"__viper_"+n:n.replace(/[^a-zA-Z0-9_$]/g,"_"))}const se=n=>({kind:"number",value:n}),He=n=>({kind:"string",value:n}),jt=n=>({kind:"bool",value:n}),Ee={kind:"null"},yt=n=>({kind:"array",items:n}),Wa=n=>({kind:"object",props:n??new Map}),I=(n,r)=>({kind:"native",name:n,call:r});function zt(n){const r=n.kind;if(r==="null")return!1;if(r==="bool")return n.value;if(r==="number"){const i=n.value;return i!==0&&i===i}return r==="string"?n.value.length>0:!0}function tf(n){switch(n.kind){case"number":return n.value;case"string":return n.value;case"bool":return n.value;case"null":return null;case"array":return n.items.map(tf);case"object":{const r={};return n.props.forEach((i,s)=>{r[s]=tf(i)}),r}case"function":return`<fn ${n.name}>`;case"native":return`<native ${n.name}>`;case"class":return`<class ${n.name}>`;case"instance":return`<instance of ${n.cls.name}>`}}function Te(n){switch(n.kind){case"null":return"null";case"bool":return n.value?"true":"false";case"number":return String(n.value);case"string":return n.value;case"array":return`[${n.items.map(Te).join(", ")}]`;case"object":{const r=[];return n.props.forEach((i,s)=>r.push(`${s}: ${Te(i)}`)),`{ ${r.join(", ")} }`}case"function":return`<fn ${n.name||"anonymous"}>`;case"native":return`<native ${n.name}>`;case"class":return`<class ${n.name}>`;case"instance":return`<${n.cls.name} { ${Array.from(n.fields.entries()).map(([r,i])=>`${r}: ${Te(i)}`).join(", ")} }>`}}function nf(n){if(n==null)return Ee;if(typeof n=="number")return se(n);if(typeof n=="string")return He(n);if(typeof n=="boolean")return jt(n);if(Array.isArray(n))return yt(n.map(nf));if(typeof n=="object"){const r=new Map;for(const[i,s]of Object.entries(n))r.set(i,nf(s));return Wa(r)}return Ee}function e3(n,r,i){switch(r){case"length":return se(n.items.length);case"push":return I("push",s=>(n.items.push(...s),se(n.items.length)));case"pop":return I("pop",()=>n.items.pop()??Ee);case"shift":return I("shift",()=>n.items.shift()??Ee);case"unshift":return I("unshift",s=>(n.items.unshift(...s),se(n.items.length)));case"reverse":return I("reverse",()=>(n.items.reverse(),n));case"join":return I("join",s=>He(n.items.map(Te).join(s[0]?Te(s[0]):",")));case"indexOf":return I("indexOf",s=>se(n.items.findIndex(c=>Te(c)===Te(s[0]))));case"includes":return I("includes",s=>jt(n.items.some(c=>Te(c)===Te(s[0]))));case"slice":return I("slice",s=>{const c=s[0]?.kind==="number"?s[0].value:0,d=s[1]?.kind==="number"?s[1].value:void 0;return yt(n.items.slice(c,d))});case"splice":return I("splice",s=>{const c=s[0]?.kind==="number"?s[0].value:0,d=s[1]?.kind==="number"?s[1].value:n.items.length,m=s.slice(2),p=n.items.splice(c,d,...m);return yt(p)});case"concat":return I("concat",s=>{const c=[...n.items];for(const d of s)d.kind==="array"?c.push(...d.items):c.push(d);return yt(c)});case"map":return I("map",s=>{const c=s[0];return yt(n.items.map((d,m)=>i.callValue(c,[d,se(m)],void 0)))});case"filter":return I("filter",s=>{const c=s[0];return yt(n.items.filter((d,m)=>zt(i.callValue(c,[d,se(m)],void 0))))});case"reduce":return I("reduce",s=>{const c=s[0];let d=s[1]??n.items[0];const m=s[1]!==void 0?0:1;for(let p=m;p<n.items.length;p++)d=i.callValue(c,[d,n.items[p],se(p)],void 0);return d});case"forEach":return I("forEach",s=>{const c=s[0];return n.items.forEach((d,m)=>i.callValue(c,[d,se(m)],void 0)),Ee});case"find":return I("find",s=>{const c=s[0];return n.items.find(d=>zt(i.callValue(c,[d],void 0)))??Ee});case"findIndex":return I("findIndex",s=>{const c=s[0];return se(n.items.findIndex(d=>zt(i.callValue(c,[d],void 0))))});case"some":return I("some",s=>jt(n.items.some(c=>zt(i.callValue(s[0],[c],void 0)))));case"every":return I("every",s=>jt(n.items.every(c=>zt(i.callValue(s[0],[c],void 0)))));case"flat":return I("flat",()=>yt(n.items.flatMap(s=>s.kind==="array"?s.items:[s])));case"sort":return I("sort",s=>{const c=s[0],d=[...n.items];return c?d.sort((m,p)=>{const x=i.callValue(c,[m,p],void 0);return x.kind==="number"?x.value:0}):d.sort((m,p)=>Te(m).localeCompare(Te(p))),n.items.splice(0,n.items.length,...d),n});default:return Ee}}function t3(n,r){const i=n.value;switch(r){case"length":return se(i.length);case"upper":return I("upper",()=>He(i.toUpperCase()));case"lower":return I("lower",()=>He(i.toLowerCase()));case"trim":return I("trim",()=>He(i.trim()));case"trimStart":return I("trimStart",()=>He(i.trimStart()));case"trimEnd":return I("trimEnd",()=>He(i.trimEnd()));case"split":return I("split",s=>{const c=s[0]?.kind==="string"?s[0].value:"";return yt(i.split(c).map(He))});case"join":return I("join",s=>s[0]?.kind==="array"?He(s[0].items.map(Te).join(i)):He(i));case"replace":return I("replace",s=>{const c=s[0]?.kind==="string"?s[0].value:Te(s[0]),d=s[1]?.kind==="string"?s[1].value:Te(s[1]);return He(i.replaceAll(c,d))});case"contains":return I("contains",s=>jt(i.includes(s[0]?.kind==="string"?s[0].value:Te(s[0]))));case"startsWith":return I("startsWith",s=>jt(i.startsWith(s[0]?.kind==="string"?s[0].value:"")));case"endsWith":return I("endsWith",s=>jt(i.endsWith(s[0]?.kind==="string"?s[0].value:"")));case"indexOf":return I("indexOf",s=>se(i.indexOf(s[0]?.kind==="string"?s[0].value:"")));case"slice":return I("slice",s=>{const c=s[0]?.kind==="number"?s[0].value:0,d=s[1]?.kind==="number"?s[1].value:void 0;return He(i.slice(c,d))});case"substring":return I("substring",s=>{const c=s[0]?.kind==="number"?s[0].value:0,d=s[1]?.kind==="number"?s[1].value:i.length;return He(i.substring(c,d))});case"repeat":return I("repeat",s=>He(i.repeat(s[0]?.kind==="number"?s[0].value:1)));case"padStart":return I("padStart",s=>{const c=s[0]?.kind==="number"?s[0].value:0,d=s[1]?.kind==="string"?s[1].value:" ";return He(i.padStart(c,d))});case"padEnd":return I("padEnd",s=>{const c=s[0]?.kind==="number"?s[0].value:0,d=s[1]?.kind==="string"?s[1].value:" ";return He(i.padEnd(c,d))});case"char":return I("char",s=>He(i[s[0]?.kind==="number"?s[0].value:0]??""));case"charCode":return I("charCode",s=>se(i.charCodeAt(s[0]?.kind==="number"?s[0].value:0)));case"toNumber":return I("toNumber",()=>se(parseFloat(i)));case"toBool":return I("toBool",()=>jt(i!==""&&i!=="false"&&i!=="0"));default:return Ee}}const Ie=Ee,tt=jt(!0),Ze=jt(!1),n3=`
const __print = (...args) => { ctx.output(args.join(" "), "log"); };
const __warn = (...args) => { ctx.output(args.join(" "), "warn"); };
const __error = (...args) => { ctx.output(args.join(" "), "error"); };
const __clear = () => { ctx.clearConsole(); };
const __str = (v) => String(v);
const __num = (v) => {
  if (typeof v === "number") return v;
  if (typeof v === "string") return parseFloat(v) || 0;
  if (typeof v === "boolean") return v ? 1 : 0;
  return 0;
};
const __bool = (v) => {
  if (v === null || v === undefined) return false;
  if (typeof v === "boolean") return v;
  if (typeof v === "number") return v !== 0 && v === v;
  if (typeof v === "string") return v.length > 0;
  return true;
};
const __type = (v) => {
  if (v === null || v === undefined) return "null";
  return typeof v;
};
const __len = (v) => {
  if (Array.isArray(v)) return v.length;
  if (typeof v === "string") return v.length;
  if (v && typeof v === "object") return Object.keys(v).length;
  return 0;
};
const __keys = (v) => {
  if (v && typeof v === "object" && !Array.isArray(v)) return Object.keys(v);
  if (Array.isArray(v)) return v.map((_, i) => i);
  return [];
};
const __values = (v) => {
  if (Array.isArray(v)) return [...v];
  if (v && typeof v === "object") return Object.values(v);
  return [];
};
const __range = (a, b, step = 1) => {
  const start = b !== undefined ? a : 0;
  const end = b !== undefined ? b : a;
  const s = step || 1;
  const result = [];
  for (let i = start; i < end; i += s) result.push(i);
  return result;
};
const __math = {
  PI: Math.PI, E: Math.E,
  sqrt: Math.sqrt, abs: Math.abs, floor: Math.floor, ceil: Math.ceil, round: Math.round,
  sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
  atan2: Math.atan2, pow: Math.pow, log: Math.log, log2: Math.log2, log10: Math.log10,
  max: Math.max, min: Math.min, hypot: Math.hypot, sign: Math.sign, trunc: Math.trunc,
  clamp: (v, lo, hi) => Math.min(Math.max(v, lo), hi),
  lerp: (x, y, t) => x + (y - x) * t,
  random: () => Math.random(),
  randInt: (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo,
};
const __timer = {
  now: () => performance.now(),
  date: () => {
    const d = new Date();
    return { hours: d.getHours(), minutes: d.getMinutes(), seconds: d.getSeconds(), ms: d.getMilliseconds(), day: d.getDate(), month: d.getMonth() + 1, year: d.getFullYear(), weekday: d.getDay() };
  },
  loop: (fn) => { __loop(fn); },
};
const __canvas = {
  setSize: (w, h) => { setSize(w, h); ctx.draw({ cmd: "setSize", args: [w, h] }); },
  clear: (color) => ctx.draw({ cmd: "clear", args: [color] }),
  rect: (x, y, w, h, color) => ctx.draw({ cmd: "rect", args: [x, y, w, h, color] }),
  roundRect: (x, y, w, h, r, color) => ctx.draw({ cmd: "roundRect", args: [x, y, w, h, r, color] }),
  circle: (x, y, r, color) => ctx.draw({ cmd: "circle", args: [x, y, r, color] }),
  ellipse: (x, y, rx, ry, color) => ctx.draw({ cmd: "ellipse", args: [x, y, rx, ry, color] }),
  line: (x1, y1, x2, y2, lw, color) => ctx.draw({ cmd: "line", args: [x1, y1, x2, y2, lw, color] }),
  text: (x, y, txt, size, color, align) => ctx.draw({ cmd: "text", args: [x, y, String(txt), size || 16, color || "#fff", align || "left"] }),
  arc: (x, y, r, start, end, color) => ctx.draw({ cmd: "arc", args: [x, y, r, start, end, color] }),
  ringArc: (x, y, inner, outer, start, end, color) => ctx.draw({ cmd: "ringArc", args: [x, y, inner, outer, start, end, color] }),
  polygon: (pts, color) => ctx.draw({ cmd: "polygon", args: [pts, color] }),
  image: (src, x, y, w, h) => ctx.draw({ cmd: "image", args: [src, x, y, w, h] }),
  save: () => ctx.draw({ cmd: "save", args: [] }),
  restore: () => ctx.draw({ cmd: "restore", args: [] }),
  translate: (x, y) => ctx.draw({ cmd: "translate", args: [x, y] }),
  rotate: (a) => ctx.draw({ cmd: "rotate", args: [a] }),
  scale: (x, y) => ctx.draw({ cmd: "scale", args: [x, y] }),
  alpha: (a) => ctx.draw({ cmd: "alpha", args: [a] }),
  getWidth: () => size.w,
  getHeight: () => size.h,
  onKey: (fn) => { __onKey(fn); },
  onClick: (fn) => { __onClick(fn); },
};
const __JSON = {
  stringify: (v, indent) => JSON.stringify(v, null, indent),
  parse: (s) => { try { return JSON.parse(s); } catch { return null; } },
};
const __input = (prompt) => window.prompt(prompt) || "";
function __viper_in(left, right) {
  if (Array.isArray(right)) return right.includes(left);
  if (typeof right === "string") return right.includes(String(left));
  if (right && typeof right === "object") return left in right;
  return false;
}
`;class Qx{ctx;globalEnv;frameLimit=5e5;frameCount=0;stopped=!1;loopCallbacks=[];animFrameId=null;keyHandlers=[];clickHandlers=[];canvasSize={w:400,h:400};isTrusted=!1;compiledFn=null;lastCompiledCode=null;constructor(r,i=!1){this.ctx=r,this.isTrusted=i,this.globalEnv=new Rf,this.setupGlobals()}setGlobal(r,i){this.globalEnv.define(r,i)}stop(){this.stopped=!0,this.ctx.cancelFrames(),this.loopCallbacks=[],this.keyHandlers=[],this.clickHandlers=[]}getKeyHandlers(){return this.keyHandlers}getClickHandlers(){return this.clickHandlers}getCanvasSize(){return this.canvasSize}setupGlobals(){const r=this.globalEnv;r.define("print",I("print",f=>(this.ctx.output(f.map(Te).join(" "),"log"),Ee))),r.define("log",I("log",f=>(this.ctx.output(f.map(Te).join(" "),"log"),Ee))),r.define("warn",I("warn",f=>(this.ctx.output(f.map(Te).join(" "),"warn"),Ee))),r.define("error",I("error",f=>(this.ctx.output(f.map(Te).join(" "),"error"),Ee))),r.define("clear",I("clear",()=>(this.ctx.clearConsole(),Ee))),r.define("str",I("str",f=>He(Te(f[0]??Ee)))),r.define("num",I("num",f=>{const g=f[0];return g?.kind==="number"?g:g?.kind==="string"?se(parseFloat(g.value)||0):g?.kind==="bool"?se(g.value?1:0):se(0)})),r.define("bool",I("bool",f=>jt(zt(f[0]??Ee)))),r.define("type",I("type",f=>He(f[0]?.kind??"null"))),r.define("len",I("len",f=>{const g=f[0];return g?.kind==="array"?se(g.items.length):g?.kind==="string"?se(g.value.length):g?.kind==="object"?se(g.props.size):se(0)})),r.define("keys",I("keys",f=>{const g=f[0];return g?.kind==="object"?yt(Array.from(g.props.keys()).map(He)):g?.kind==="array"?yt(g.items.map((v,j)=>se(j))):yt([])})),r.define("values",I("values",f=>{const g=f[0];return g?.kind==="object"?yt(Array.from(g.props.values())):g?.kind==="array"?yt([...g.items]):yt([])})),r.define("range",I("range",f=>{const g=f[0]?.kind==="number"?f[0].value:0,v=f[1]?.kind==="number"?f[1].value:g,j=f[2]?.kind==="number"?f[2].value:1,C=f[1]!==void 0?g:0,E=f[1]!==void 0?v:g,R=[];for(let k=C;k<E;k+=j)R.push(se(k));return yt(R)})),r.define("JSON",(()=>{const f=Wa();return f.props.set("stringify",I("stringify",g=>He(JSON.stringify(tf(g[0]),null,g[1]?.kind==="number"?g[1].value:void 0)))),f.props.set("parse",I("parse",g=>{try{return nf(JSON.parse(g[0]?.kind==="string"?g[0].value:""))}catch{return Ee}})),f})());const i=Wa(),s=i.props;s.set("PI",se(Math.PI)),s.set("E",se(Math.E)),s.set("sqrt",I("sqrt",f=>se(Math.sqrt(f[0]?.kind==="number"?f[0].value:0)))),s.set("abs",I("abs",f=>se(Math.abs(f[0]?.kind==="number"?f[0].value:0)))),s.set("floor",I("floor",f=>se(Math.floor(f[0]?.kind==="number"?f[0].value:0)))),s.set("ceil",I("ceil",f=>se(Math.ceil(f[0]?.kind==="number"?f[0].value:0)))),s.set("round",I("round",f=>se(Math.round(f[0]?.kind==="number"?f[0].value:0)))),s.set("sin",I("sin",f=>se(Math.sin(f[0]?.kind==="number"?f[0].value:0)))),s.set("cos",I("cos",f=>se(Math.cos(f[0]?.kind==="number"?f[0].value:0)))),s.set("tan",I("tan",f=>se(Math.tan(f[0]?.kind==="number"?f[0].value:0)))),s.set("asin",I("asin",f=>se(Math.asin(f[0]?.kind==="number"?f[0].value:0)))),s.set("acos",I("acos",f=>se(Math.acos(f[0]?.kind==="number"?f[0].value:0)))),s.set("atan",I("atan",f=>se(Math.atan(f[0]?.kind==="number"?f[0].value:0)))),s.set("atan2",I("atan2",f=>se(Math.atan2(f[0]?.kind==="number"?f[0].value:0,f[1]?.kind==="number"?f[1].value:0)))),s.set("pow",I("pow",f=>se(Math.pow(f[0]?.kind==="number"?f[0].value:0,f[1]?.kind==="number"?f[1].value:1)))),s.set("log",I("log",f=>se(Math.log(f[0]?.kind==="number"?f[0].value:1)))),s.set("log2",I("log2",f=>se(Math.log2(f[0]?.kind==="number"?f[0].value:1)))),s.set("log10",I("log10",f=>se(Math.log10(f[0]?.kind==="number"?f[0].value:1)))),s.set("max",I("max",f=>se(Math.max(...f.filter(g=>g.kind==="number").map(g=>g.value))))),s.set("min",I("min",f=>se(Math.min(...f.filter(g=>g.kind==="number").map(g=>g.value))))),s.set("hypot",I("hypot",f=>se(Math.hypot(...f.filter(g=>g.kind==="number").map(g=>g.value))))),s.set("sign",I("sign",f=>se(Math.sign(f[0]?.kind==="number"?f[0].value:0)))),s.set("trunc",I("trunc",f=>se(Math.trunc(f[0]?.kind==="number"?f[0].value:0)))),s.set("clamp",I("clamp",f=>{const[g,v,j]=f.map(C=>C?.kind==="number"?C.value:0);return se(Math.min(Math.max(g,v),j))})),s.set("lerp",I("lerp",f=>{const[g,v,j]=f.map(C=>C?.kind==="number"?C.value:0);return se(g+(v-g)*j)})),s.set("random",I("random",()=>se(this.ctx.random()))),s.set("randInt",I("randInt",f=>{const g=f[0]?.kind==="number"?f[0].value:0,v=f[1]?.kind==="number"?f[1].value:1;return se(Math.floor(this.ctx.random()*(v-g+1))+g)})),r.define("math",i);const c=Wa(),d=c.props;d.set("now",I("now",()=>se(this.ctx.getTime()))),d.set("date",I("date",()=>{const f=new Date,g=Wa();return g.props.set("hours",se(f.getHours())),g.props.set("minutes",se(f.getMinutes())),g.props.set("seconds",se(f.getSeconds())),g.props.set("ms",se(f.getMilliseconds())),g.props.set("day",se(f.getDate())),g.props.set("month",se(f.getMonth()+1)),g.props.set("year",se(f.getFullYear())),g.props.set("weekday",se(f.getDay())),g})),d.set("loop",I("loop",f=>{const g=f[0];return this.loopCallbacks.push(()=>this.callValue(g,[],void 0)),this.loopCallbacks.length===1&&this.startLoop(),Ee})),r.define("timer",c);const m=Wa(),p=m.props,x=(f,...g)=>this.ctx.draw({cmd:f,args:g});p.set("setSize",I("setSize",f=>{const g=f[0]?.kind==="number"?f[0].value:400,v=f[1]?.kind==="number"?f[1].value:400;return this.canvasSize={w:g,h:v},x("setSize",g,v),Ee})),p.set("clear",I("clear",f=>{const g=f[0]?.kind==="string"?f[0].value:"#000000";return x("clear",g),Ee})),p.set("rect",I("rect",f=>{const[g,v,j,C]=f.slice(0,4).map(R=>R?.kind==="number"?R.value:0),E=f[4]?.kind==="string"?f[4].value:"#ffffff";return x("rect",g,v,j,C,E),Ee})),p.set("roundRect",I("roundRect",f=>{const[g,v,j,C,E]=f.slice(0,5).map(k=>k?.kind==="number"?k.value:0),R=f[5]?.kind==="string"?f[5].value:"#ffffff";return x("roundRect",g,v,j,C,E,R),Ee})),p.set("circle",I("circle",f=>{const[g,v,j]=f.slice(0,3).map(E=>E?.kind==="number"?E.value:0),C=f[3]?.kind==="string"?f[3].value:"#ffffff";return x("circle",g,v,j,C),Ee})),p.set("ellipse",I("ellipse",f=>{const[g,v,j,C]=f.slice(0,4).map(R=>R?.kind==="number"?R.value:0),E=f[4]?.kind==="string"?f[4].value:"#ffffff";return x("ellipse",g,v,j,C,E),Ee})),p.set("line",I("line",f=>{const[g,v,j,C,E]=f.slice(0,5).map(k=>k?.kind==="number"?k.value:0),R=f[5]?.kind==="string"?f[5].value:"#ffffff";return x("line",g,v,j,C,E,R),Ee})),p.set("text",I("text",f=>{const g=f[0]?.kind==="number"?f[0].value:0,v=f[1]?.kind==="number"?f[1].value:0,j=f[2]?Te(f[2]):"",C=f[3]?.kind==="number"?f[3].value:16,E=f[4]?.kind==="string"?f[4].value:"#ffffff",R=f[5]?.kind==="string"?f[5].value:"left";return x("text",g,v,j,C,E,R),Ee})),p.set("arc",I("arc",f=>{const[g,v,j,C,E]=f.slice(0,5).map(k=>k?.kind==="number"?k.value:0),R=f[5]?.kind==="string"?f[5].value:"#ffffff";return x("arc",g,v,j,C,E,R),Ee})),p.set("ringArc",I("ringArc",f=>{const[g,v,j,C,E,R]=f.slice(0,6).map(H=>H?.kind==="number"?H.value:0),k=f[6]?.kind==="string"?f[6].value:"#ffffff";return x("ringArc",g,v,j,C,E,R,k),Ee})),p.set("polygon",I("polygon",f=>{const g=f[0]?.kind==="array"?f[0].items.map(j=>{if(j.kind==="object"){const C=j.props.get("x"),E=j.props.get("y");return`${C?.kind==="number"?C.value:0},${E?.kind==="number"?E.value:0}`}return"0,0"}).join("|"):"",v=f[1]?.kind==="string"?f[1].value:"#ffffff";return x("polygon",g,v),Ee})),p.set("image",I("image",f=>{const g=f[0]?.kind==="string"?f[0].value:"",[v,j,C,E]=f.slice(1,5).map(R=>R?.kind==="number"?R.value:0);return x("image",g,v,j,C,E),Ee})),p.set("save",I("save",()=>(x("save"),Ee))),p.set("restore",I("restore",()=>(x("restore"),Ee))),p.set("translate",I("translate",f=>{const[g,v]=f.map(j=>j?.kind==="number"?j.value:0);return x("translate",g,v),Ee})),p.set("rotate",I("rotate",f=>(x("rotate",f[0]?.kind==="number"?f[0].value:0),Ee))),p.set("scale",I("scale",f=>{const[g,v]=f.map(j=>j?.kind==="number"?j.value:1);return x("scale",g,v),Ee})),p.set("alpha",I("alpha",f=>(x("alpha",f[0]?.kind==="number"?f[0].value:1),Ee))),p.set("onKey",I("onKey",f=>{const g=f[0];return this.keyHandlers.push(v=>(this.frameCount=0,this.callValue(g,[He(v)],void 0))),Ee})),p.set("onClick",I("onClick",f=>{const g=f[0];return this.clickHandlers.push((v,j)=>(this.frameCount=0,this.callValue(g,[se(v),se(j)],void 0))),Ee})),p.set("getWidth",I("getWidth",()=>se(this.canvasSize.w))),p.set("getHeight",I("getHeight",()=>se(this.canvasSize.h))),r.define("canvas",m),r.define("PI",se(Math.PI))}startLoop(){const r=()=>{if(!(this.stopped||this.loopCallbacks.length===0)){this.frameCount=0;try{for(const i of this.loopCallbacks)i()}catch(i){if(!(i instanceof qn)&&!(i instanceof Vn)){const s=i instanceof Nt?i.message:String(i);this.ctx.output(`Runtime error: ${s}`,"error"),this.stopped=!0;return}}this.ctx.scheduleFrame(r)}};this.ctx.scheduleFrame(r)}execute(r){this.stopped=!1,this.loopCallbacks=[],this.keyHandlers=[],this.clickHandlers=[],this.frameCount=0;try{if(this.compiledFn&&this.lastCompiledCode===r)return this.runCompiledFn(this.compiledFn),{success:!0};const i=Yx(r),s=Wx(i.tokens),c=[...i.errors.map(m=>({message:m.message,line:m.line})),...s.errors.map(m=>({message:m.message,line:m.line}))];if(c.length>0)return{success:!1,errors:c};const d=NN(s.ast);if(d.success&&d.js)try{const m=this.buildCompiledFn(d.js);return this.runCompiledFn(m),this.compiledFn=m,this.lastCompiledCode=r,{success:!0}}catch{}return this.execNode(s.ast,this.globalEnv.child()),{success:!0}}catch(i){return i instanceof Nt?{success:!1,error:i.message,errorLine:i.line}:i instanceof Mi?{success:!0}:{success:!1,error:String(i)}}}buildCompiledFn(r){return new Function("ctx","setSize","size","__loop","__onKey","__onClick",n3+" "+r)}runCompiledFn(r){const i=this,s=this.canvasSize;r(this.ctx,(c,d)=>{this.canvasSize={w:c,h:d}},s,c=>{i.loopCallbacks.push(c),i.loopCallbacks.length===1&&i.startLoop()},c=>i.keyHandlers.push(c),c=>i.clickHandlers.push(c))}execNode(r,i){if((++this.frameCount&1023)===0&&!this.isTrusted&&this.frameCount>this.frameLimit)throw new Nt("Maximum execution depth exceeded (infinite loop?)");switch(r.type){case"Program":{const s=r.body;let c=Ie;for(const d of s)c=this.execNode(d,i);return c}case"Block":{const s=r.body;let c=Ie;for(const d of s)c=this.execNode(d,i);return c}case"LetDecl":case"VarDecl":case"ConstDecl":{const s=r.init?this.execNode(r.init,i):Ie;return i.define(r.name,s,r.type==="ConstDecl"),s}case"FnDecl":{const s={kind:"function",name:r.name,params:r.params,body:r.body,closure:i};return i.define(r.name,s),s}case"ClassDecl":{const s=new Map;for(const m of r.methods)s.set(m.name,{kind:"function",name:m.name,params:m.params,body:m.body,closure:i});let c;if(r.superName){const m=i.get(r.superName,r.line);if(m.kind!=="class")throw new Nt(`'${r.superName}' is not a class`,r.line);c=m}const d={kind:"class",name:r.name,methods:s,superClass:c};return i.define(r.name,d),d}case"If":{const s=this.execNode(r.cond,i);return zt(s)?this.execNode(r.then,i.child()):r.els?this.execNode(r.els,i.child()):Ie}case"While":{let s=Ie;const c=r.body,d=r.cond;for(;zt(this.execNode(d,i));)try{s=this.execNode(c,i)}catch(m){if(m instanceof qn)break;if(m instanceof Vn)continue;throw m}return s}case"For":{const s=i.child();r.init&&this.execNode(r.init,s);let c=Ie;const d=r.cond,m=r.update,p=r.body;for(;!d||zt(this.execNode(d,s));){try{c=this.execNode(p,s)}catch(x){if(x instanceof qn)break;if(x instanceof Vn){m&&this.execNode(m,s);continue}throw x}m&&this.execNode(m,s)}return c}case"ForOf":{const s=this.execNode(r.iter,i),c=s.kind==="array"?s.items:s.kind==="string"?s.value.split("").map(He):[];let d=Ie;const m=r.varName,p=i.child();for(const x of c){p.define(m,x);try{d=this.execNode(r.body,p)}catch(f){if(f instanceof qn)break;if(f instanceof Vn)continue;throw f}}return d}case"ForIn":{const s=this.execNode(r.iter,i),c=s.kind==="object"?Array.from(s.props.keys()):s.kind==="array"?s.items.map((x,f)=>String(f)):[];let d=Ie;const m=r.varName,p=i.child();for(const x of c){p.define(m,He(x));try{d=this.execNode(r.body,p)}catch(f){if(f instanceof qn)break;if(f instanceof Vn)continue;throw f}}return d}case"DoWhile":{let s=Ie;const c=r.body,d=r.cond;do try{s=this.execNode(c,i)}catch(m){if(m instanceof qn)break;if(m instanceof Vn)continue;throw m}while(zt(this.execNode(d,i)));return s}case"Try":try{return this.execNode(r.body,i)}catch(s){const c=i.child();let d;if(s instanceof Nt)d=He(s.message);else{if(s instanceof Mi||s instanceof qn||s instanceof Vn)throw s;d=He(String(s))}return c.define(r.errName,d),this.execNode(r.catchBody,c)}case"Throw":{const s=this.execNode(r.value,i);throw new Nt(Te(s),r.line)}case"Switch":{const s=this.execNode(r.cond,i),c=Te(s),d=r.cases;let m=!1,p=Ie;for(const x of d){if(!m)if(x.cond===null)m=!0;else{const f=this.execNode(x.cond,i);Te(f)===c&&(m=!0)}if(m)for(const f of x.body)try{p=this.execNode(f,i)}catch(g){if(g instanceof qn){m=!1;break}if(g instanceof Vn)continue;throw g}}return p}case"Return":throw new Mi(r.value?this.execNode(r.value,i):Ie);case"Break":throw new qn;case"Continue":throw new Vn;case"ExprStmt":return this.execNode(r.expr,i);case"Assign":return this.computeAssign(r.op,r.left,r.right,i);case"Binary":{const s=r.op;if(s==="&&"||s==="and"){const m=this.execNode(r.left,i);return zt(m)?this.execNode(r.right,i):Ze}if(s==="||"||s==="or"){const m=this.execNode(r.left,i);return zt(m)?tt:this.execNode(r.right,i)}const c=this.execNode(r.left,i),d=this.execNode(r.right,i);return this.applyBinary(s,c,d,r.line)}case"Unary":{if(r.op==="++"||r.op==="--"){const c=r.op==="++"?1:-1,d=this.execNode(r.expr,i),m=se((d.kind==="number"?d.value:0)+c);return this.assignTo(r.expr,m,i),r.prefix?m:d}const s=this.execNode(r.expr,i);return r.op==="!"||r.op==="not"?jt(!zt(s)):r.op==="-"?se(-(s.kind==="number"?s.value:0)):r.op==="+"?se(+(s.kind==="number"?s.value:0)):s}case"Postfix":{const s=this.execNode(r.expr,i),c=r.op==="++"?1:-1,d=se((s.kind==="number"?s.value:0)+c);return this.assignTo(r.expr,d,i),s}case"Call":{const s=r.callee;let c,d;if(s.type==="Member"){c=this.execNode(s.obj,i);const p=s.prop;d=this.getMember(c,p)}else if(s.type==="Index"){c=this.execNode(s.obj,i);const p=this.execNode(s.idx,i);d=this.getIndex(c,p)}else d=this.execNode(s,i);const m=[];for(const p of r.args)if(p.type==="Spread"){const x=this.execNode(p.expr,i);x.kind==="array"&&m.push(...x.items)}else m.push(this.execNode(p,i));return this.callValue(d,m,c,r.line)}case"Member":{const s=this.execNode(r.obj,i);return r.optional&&s.kind==="null"?Ie:this.getMember(s,r.prop)}case"Index":{const s=this.execNode(r.obj,i),c=this.execNode(r.idx,i);return this.getIndex(s,c)}case"New":{const s=i.get(r.cls,r.line);if(s.kind!=="class")throw new Nt(`'${r.cls}' is not a class`,r.line);const c={kind:"instance",cls:s,fields:new Map},d=r.args.map(p=>this.execNode(p,i)),m=this.lookupMethod(s,"init");return m&&this.callValue(m,d,c),c}case"Ternary":{const s=this.execNode(r.cond,i);return zt(s)?this.execNode(r.then,i):this.execNode(r.els,i)}case"Template":{const s=r.parts.map(c=>typeof c=="string"?c:Te(this.execNode(c,i)));return He(s.join(""))}case"Array":{const s=[];for(const c of r.items)if(c.type==="Spread"){const d=this.execNode(c.expr,i);d.kind==="array"&&s.push(...d.items)}else s.push(this.execNode(c,i));return yt(s)}case"Object":{const s=new Map;for(const c of r.props)s.set(c.key,this.execNode(c.value,i));return Wa(s)}case"FnExpr":return{kind:"function",name:"anonymous",params:r.params,body:r.body,closure:i};case"Ident":return i.get(r.name,r.line);case"Num":return se(r.value);case"Str":return He(r.value);case"Bool":return jt(r.value);case"Null":return Ee;case"Self":try{return i.get("self",r.line)}catch{return Ee}default:throw new Nt(`Unknown node type: ${r.type}`,r.line)}}applyBinary(r,i,s,c){const d=i.kind,m=s.kind;if(r==="+")return d==="string"||m==="string"?He(Te(i)+Te(s)):d==="number"&&m==="number"?se(i.value+s.value):d==="array"&&m==="array"?yt([...i.items,...s.items]):He(Te(i)+Te(s));if(d==="number"&&m==="number"){const f=i.value,g=s.value;switch(r){case"-":return se(f-g);case"*":return se(f*g);case"/":return se(g===0?1/0:f/g);case"%":return se(f%g);case"**":return se(Math.pow(f,g));case"<":return f<g?tt:Ze;case">":return f>g?tt:Ze;case"<=":return f<=g?tt:Ze;case">=":return f>=g?tt:Ze;case"==":return f===g?tt:Ze;case"!=":return f!==g?tt:Ze;case"===":return f===g?tt:Ze;case"!==":return f!==g?tt:Ze}}const p=Te(i),x=Te(s);switch(r){case"==":return p===x?tt:Ze;case"!=":return p!==x?tt:Ze;case"===":return d===m&&p===x?tt:Ze;case"!==":return d!==m||p!==x?tt:Ze;case"<":return p<x?tt:Ze;case">":return p>x?tt:Ze;case"<=":return p<=x?tt:Ze;case">=":return p>=x?tt:Ze;case"in":return m==="array"?jt(s.items.some(f=>Te(f)===p)):m==="string"?jt(x.includes(p)):m==="object"?jt(s.props.has(p)):Ze;case"is":return d!==m?Ze:d==="number"||d==="string"||d==="bool"?i.value===s.value?tt:Ze:d==="null"||i===s?tt:Ze}throw new Nt(`Cannot apply '${r}' to ${d} and ${m}`,c)}getMember(r,i){const s=r.kind;if(s==="array")return e3(r,i,this);if(s==="string")return t3(r,i);if(s==="object")return r.props.get(i)??Ie;if(s==="instance"){const c=r,d=c.fields.get(i);if(d!==void 0)return d;const m=this.lookupMethod(c.cls,i);return m?m.kind==="native"?m:this.bindMethod(m,c):Ie}if(s==="class"){const c=r.methods.get(i);if(c)return c}return Ie}bindMethod(r,i){const s=r.closure.child();return s.define("self",i),{kind:"function",name:r.name,params:r.params,body:r.body,closure:s}}getIndex(r,i){const s=r.kind;if(s==="array"){if(i.kind!=="number")return Ie;const c=i.value,d=r.items,m=c<0?d.length+c:c;return d[m]??Ie}if(s==="object")return r.props.get(Te(i))??Ie;if(s==="string"){if(i.kind!=="number")return Ie;const c=i.value,d=r.value,m=c<0?d.length+c:c;return d[m]?He(d[m]):Ie}return Ie}assignTo(r,i,s){if(r.type==="Ident")s.set(r.name,i,r.line);else if(r.type==="Member"){const c=this.execNode(r.obj,s),d=r.prop;if(c.kind==="object")c.props.set(d,i);else if(c.kind==="instance")c.fields.set(d,i);else if(c.kind==="array"&&d==="length")i.kind==="number"&&(c.items.length=i.value);else throw new Nt(`Cannot set property '${d}' on ${c.kind}`)}else if(r.type==="Index"){const c=this.execNode(r.obj,s),d=this.execNode(r.idx,s);c.kind==="array"&&d.kind==="number"?c.items[d.value]=i:c.kind==="object"&&c.props.set(Te(d),i)}}computeAssign(r,i,s,c){const d=this.execNode(s,c);if(r==="=")return this.assignTo(i,d,c),d;const m=this.execNode(i,c);let p;switch(r){case"+=":p=m.kind==="number"&&d.kind==="number"?se(m.value+d.value):He(Te(m)+Te(d));break;case"-=":p=se((m.kind==="number"?m.value:0)-(d.kind==="number"?d.value:0));break;case"*=":p=se((m.kind==="number"?m.value:0)*(d.kind==="number"?d.value:0));break;case"/=":p=se((m.kind==="number"?m.value:0)/(d.kind==="number"?d.value:1));break;case"%=":p=se((m.kind==="number"?m.value:0)%(d.kind==="number"?d.value:1));break;default:p=d}return this.assignTo(i,p,c),p}callValue(r,i,s,c){const d=r.kind;if(d==="native")return r.call(i,s);if(d==="function"){const m=r,p=m.closure.child(),x=m.params;for(let f=0;f<x.length;f++)p.define(x[f],i[f]??Ie);s!==void 0&&p.define("self",s);try{return this.execNode(m.body,p),Ie}catch(f){if(f instanceof Mi)return f.value;throw f}}throw new Nt(`'${Te(r)}' is not callable`,c)}callMethod(r,i,s){return this.callValue(r,i,s)}lookupMethod(r,i){let s=r;for(;s;){if(s.methods.has(i))return s.methods.get(i);s=s.superClass}}}const Of=S.forwardRef(({commands:n,onReady:r},i)=>{const s=S.useRef(null),c=S.useRef([]),d=S.useRef([]);return S.useImperativeHandle(i,()=>({handleKey:m=>{for(const p of c.current)p(m)},handleClick:(m,p)=>{for(const x of d.current)x(m,p)},setSize:(m,p)=>{s.current&&(s.current.width=m,s.current.height=p)}})),S.useEffect(()=>{r?.()},[]),S.useEffect(()=>{const m=s.current;if(!m)return;const p=m.getContext("2d");if(p)for(const x of n){const f=x.args;try{switch(x.cmd){case"setSize":m.width=f[0],m.height=f[1];break;case"clear":p.clearRect(0,0,m.width,m.height),f[0]&&(p.fillStyle=f[0],p.fillRect(0,0,m.width,m.height));break;case"rect":p.fillStyle=f[4],p.fillRect(f[0],f[1],f[2],f[3]);break;case"roundRect":p.fillStyle=f[5],p.beginPath(),p.roundRect?.(f[0],f[1],f[2],f[3],f[4])??p.rect(f[0],f[1],f[2],f[3]),p.fill();break;case"circle":p.fillStyle=f[3],p.beginPath(),p.arc(f[0],f[1],Math.max(0,f[2]),0,Math.PI*2),p.fill();break;case"ellipse":p.fillStyle=f[4],p.beginPath(),p.ellipse(f[0],f[1],Math.max(0,f[2]),Math.max(0,f[3]),0,0,Math.PI*2),p.fill();break;case"line":{const g=f[4];p.strokeStyle=f[5],p.lineWidth=g||1,p.beginPath(),p.moveTo(f[0],f[1]),p.lineTo(f[2],f[3]),p.stroke();break}case"text":{const g=f[3],v=f[4],j=f[5]||"left";p.font=`${g}px 'JetBrains Mono', monospace`,p.fillStyle=v,p.textAlign=j,p.textBaseline="alphabetic",p.fillText(String(f[2]),f[0],f[1]),p.textAlign="left";break}case"arc":p.strokeStyle=f[5],p.lineWidth=2,p.beginPath(),p.arc(f[0],f[1],f[2],f[3],f[4]),p.stroke();break;case"ringArc":{const[g,v,j,C,E,R]=f,k=f[6];p.fillStyle=k,p.beginPath(),p.arc(g,v,C,E,R),p.arc(g,v,j,R,E,!0),p.closePath(),p.fill();break}case"polygon":{const g=f[0].split("|").map(v=>v.split(",").map(Number));if(p.fillStyle=f[1],p.beginPath(),g.length>0){p.moveTo(g[0][0],g[0][1]);for(let v=1;v<g.length;v++)p.lineTo(g[v][0],g[v][1]);p.closePath()}p.fill();break}case"image":{const g=new Image;g.src=f[0],g.onload=()=>p.drawImage(g,f[1],f[2],f[3],f[4]);break}case"save":p.save();break;case"restore":p.restore();break;case"translate":p.translate(f[0],f[1]);break;case"rotate":p.rotate(f[0]);break;case"scale":p.scale(f[0],f[1]);break;case"alpha":p.globalAlpha=f[0];break}}catch{}}},[n]),h.jsx("div",{className:"flex items-center justify-center w-full h-full bg-[#050510]",children:h.jsx("canvas",{ref:s,width:400,height:400,style:{maxWidth:"100%",maxHeight:"100%",imageRendering:"pixelated"},className:"border border-white/10",tabIndex:0})})});Of.displayName="ViperCanvas";function Fx({lines:n}){const r=S.useRef(null);return S.useEffect(()=>{r.current?.scrollIntoView({behavior:"smooth"})},[n]),h.jsxs("div",{className:"flex flex-col h-full bg-[#0a0a12] font-mono text-sm overflow-hidden",children:[h.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-[#0f0f1a] shrink-0",children:[h.jsx(wa,{className:"w-3.5 h-3.5 text-[#7c6af7]"}),h.jsx("span",{className:"text-xs text-white/50 uppercase tracking-widest font-sans",children:"Console"}),h.jsxs("span",{className:"ml-auto text-[10px] text-white/20",children:[n.filter(i=>i.kind!=="system").length," lines"]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-3 space-y-0.5 scrollbar-thin",children:[n.length===0&&h.jsxs("div",{className:"flex flex-col items-center justify-center h-32 text-white/20 text-xs font-sans",children:[h.jsx(wa,{className:"w-6 h-6 mb-2"}),h.jsx("p",{children:"Run your code to see output here"})]}),n.map(i=>h.jsxs("div",{className:`flex gap-2 items-start leading-relaxed py-0.5 ${i.kind==="error"?"text-red-400":i.kind==="warn"?"text-yellow-400":i.kind==="info"?"text-blue-400":i.kind==="system"?"text-[#7c6af7]/70 text-xs":"text-emerald-300"}`,children:[h.jsx("span",{className:"shrink-0 mt-0.5",children:i.kind==="error"?h.jsx(Ww,{className:"w-3 h-3"}):i.kind==="warn"?h.jsx(z2,{className:"w-3 h-3"}):i.kind==="info"?h.jsx(f2,{className:"w-3 h-3"}):i.kind==="system"?h.jsx("span",{className:"text-[10px]",children:"›"}):h.jsx("span",{className:"text-white/20 text-[10px]",children:"›"})}),h.jsx("pre",{className:"whitespace-pre-wrap break-all text-[13px] leading-relaxed",children:i.text})]},i.id)),h.jsx("div",{ref:r})]})]})}const Jl=[{id:"hello",category:"Basics",name:"Hello, World!",description:"Your first Viper Invictus program",code:`// Welcome to Viper Invictus!
// A language for everything: games, apps, art, and more.

print("Hello, World!")
print("Welcome to Viper Invictus!")

let name = "Developer"
print(\`Hey there, \${name}! Let's build something amazing.\`)
`},{id:"variables",category:"Basics",name:"Variables & Types",description:"Working with different data types",code:`// Variables
let age = 25
var name = "Viper"
const PI = 3.14159

// Types: number, string, bool, null, array, object
let isAwesome = true
let nothing = null
let scores = [95, 87, 92, 78, 100]
let person = { name: "Ada", age: 36, job: "Programmer" }

print(\`Name: \${name}, Age: \${age}\`)
print(\`Pi is approximately \${PI}\`)
print(\`Is awesome: \${isAwesome}\`)
print(\`Scores: \${scores}\`)
print(\`Person: \${person.name}, job: \${person.job}\`)

// String operations
let greeting = "Hello"
print(greeting.length)
print(greeting.upper())
print(greeting.lower())
print(greeting.contains("ell"))
`},{id:"functions",category:"Basics",name:"Functions & Closures",description:"Functions as first-class values",code:`// Basic function
fn greet(name) {
  return \`Hello, \${name}!\`
}

print(greet("World"))

// Functions are first-class
fn apply(func, value) {
  return func(value)
}

fn double(x) { return x * 2 }
fn square(x) { return x * x }

print(apply(double, 5))   // 10
print(apply(square, 4))   // 16

// Closures
fn makeCounter(start) {
  let count = start
  return fn() {
    count = count + 1
    return count
  }
}

let counter = makeCounter(0)
print(counter())  // 1
print(counter())  // 2
print(counter())  // 3

// Recursion
fn fibonacci(n) {
  if (n <= 1) { return n }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

for (let i = 0; i <= 10; i++) {
  print(\`fib(\${i}) = \${fibonacci(i)}\`)
}
`},{id:"classes",category:"Basics",name:"Classes & Objects",description:"Object-oriented programming in Viper Invictus",code:`class Animal {
  init(name, sound) {
    self.name = name
    self.sound = sound
    self.energy = 100
  }

  speak() {
    print(\`\${self.name} says: \${self.sound}!\`)
  }

  eat(amount) {
    self.energy = self.energy + amount
    print(\`\${self.name} ate. Energy: \${self.energy}\`)
  }

  status() {
    return \`\${self.name} (energy: \${self.energy})\`
  }
}

class Dog < Animal {
  init(name) {
    self.name = name
    self.sound = "Woof"
    self.energy = 100
    self.tricks = []
  }

  learnTrick(trick) {
    self.tricks.push(trick)
    print(\`\${self.name} learned: \${trick}!\`)
  }

  perform() {
    if (self.tricks.length == 0) {
      print(\`\${self.name} doesn't know any tricks yet.\`)
      return
    }
    for (let trick of self.tricks) {
      print(\`\${self.name} performs: \${trick}!\`)
    }
  }
}

let rex = new Dog("Rex")
rex.speak()
rex.eat(20)
rex.learnTrick("sit")
rex.learnTrick("shake")
rex.learnTrick("roll over")
rex.perform()
print(rex.status())
`},{id:"arrays",category:"Basics",name:"Arrays & Iteration",description:"Working with lists of data",code:`// Arrays
let fruits = ["apple", "banana", "cherry", "date", "elderberry"]

// Iteration
for (let fruit of fruits) {
  print(\`  - \${fruit}\`)
}

// Array methods
fruits.push("fig")
print(\`After push: \${fruits.length} items\`)

let first = fruits.shift()
print(\`Shifted: \${first}\`)

// find, filter, map, reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evens = numbers.filter(fn(n) { return n % 2 == 0 })
print(\`Evens: \${evens}\`)

let doubled = numbers.map(fn(n) { return n * 2 })
print(\`Doubled: \${doubled}\`)

let sum = numbers.reduce(fn(acc, n) { return acc + n }, 0)
print(\`Sum: \${sum}\`)

// Sorting
let unsorted = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
let sorted = unsorted.sort()
print(\`Sorted: \${sorted}\`)

// Slicing
print(\`First 3: \${sorted.slice(0, 3)}\`)
`},{id:"snake",category:"Games",name:"Snake Game",description:"Classic snake game on the canvas",code:`// SNAKE GAME
// Use arrow keys to control the snake!

let W = 400
let H = 400
let CELL = 20
let COLS = W / CELL
let ROWS = H / CELL

let snake = [{ x: 10, y: 10 }]
let dir = { x: 1, y: 0 }
let nextDir = { x: 1, y: 0 }
let food = { x: 15, y: 15 }
let score = 0
let gameOver = false
let speed = 150

canvas.setSize(W, H)
canvas.onKey(fn(key) {
  if (key == "ArrowUp" && dir.y == 0)    { nextDir = { x: 0, y: -1 } }
  if (key == "ArrowDown" && dir.y == 0)  { nextDir = { x: 0, y: 1 } }
  if (key == "ArrowLeft" && dir.x == 0)  { nextDir = { x: -1, y: 0 } }
  if (key == "ArrowRight" && dir.x == 0) { nextDir = { x: 1, y: 0 } }
  if (key == "r" || key == "R") { restart() }
})

fn placeFood() {
  food.x = math.floor(math.random() * COLS)
  food.y = math.floor(math.random() * ROWS)
}

fn restart() {
  snake = [{ x: 10, y: 10 }]
  dir = { x: 1, y: 0 }
  nextDir = { x: 1, y: 0 }
  placeFood()
  score = 0
  gameOver = false
}

fn update() {
  if (gameOver) { return }

  dir = nextDir
  let head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y }

  // Wrap around walls
  if (head.x < 0) { head.x = COLS - 1 }
  if (head.x >= COLS) { head.x = 0 }
  if (head.y < 0) { head.y = ROWS - 1 }
  if (head.y >= ROWS) { head.y = 0 }

  // Self collision
  for (let seg of snake) {
    if (head.x == seg.x && head.y == seg.y) {
      gameOver = true
      return
    }
  }

  snake.unshift(head)

  if (head.x == food.x && head.y == food.y) {
    score = score + 10
    speed = math.max(60, speed - 2)
    placeFood()
  } else {
    snake.pop()
  }
}

fn draw() {
  canvas.clear("#0f172a")

  // Grid dots
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      canvas.circle(x * CELL + CELL/2, y * CELL + CELL/2, 1, "#1e293b")
    }
  }

  // Food
  canvas.circle(food.x * CELL + CELL/2, food.y * CELL + CELL/2, CELL/2 - 2, "#ef4444")
  canvas.circle(food.x * CELL + CELL/2 - 2, food.y * CELL + 3, 3, "#86efac")

  // Snake
  for (let i = 0; i < snake.length; i++) {
    let seg = snake[i]
    let color = i == 0 ? "#22c55e" : "#16a34a"
    canvas.roundRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, 4, color)
  }

  // Score
  canvas.text(8, 20, \`Score: \${score}\`, 14, "#f1f5f9")

  if (gameOver) {
    canvas.rect(80, 150, 240, 100, "rgba(0,0,0,0.8)")
    canvas.text(W/2, 190, "GAME OVER", 28, "#ef4444", "center")
    canvas.text(W/2, 220, \`Score: \${score}\`, 18, "#f1f5f9", "center")
    canvas.text(W/2, 245, "Press R to restart", 14, "#94a3b8", "center")
  }
}

let lastTime = 0
fn gameLoop() {
  let now = timer.now()
  if (now - lastTime > speed) {
    update()
    lastTime = now
  }
  draw()
}

timer.loop(gameLoop)
`},{id:"bouncing",category:"Games",name:"Bouncing Balls",description:"Physics simulation with bouncing balls",code:`// Bouncing Balls Physics Demo
let W = 500
let H = 400
canvas.setSize(W, H)

let balls = []
let gravity = 0.4
let friction = 0.98
let COLORS = ["#f87171", "#fb923c", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#f472b6"]

fn makeBall() {
  return {
    x: math.random() * (W - 40) + 20,
    y: math.random() * (H / 2),
    r: math.random() * 15 + 8,
    vx: (math.random() - 0.5) * 6,
    vy: math.random() * 3,
    color: COLORS[math.floor(math.random() * COLORS.length)]
  }
}

for (let i = 0; i < 12; i++) {
  balls.push(makeBall())
}

canvas.onClick(fn(x, y) {
  balls.push({
    x: x, y: y, r: math.random() * 20 + 10,
    vx: (math.random() - 0.5) * 8,
    vy: -math.random() * 5,
    color: COLORS[math.floor(math.random() * COLORS.length)]
  })
})

fn update() {
  for (let b of balls) {
    b.vy = b.vy + gravity
    b.vx = b.vx * friction
    b.x = b.x + b.vx
    b.y = b.y + b.vy

    if (b.y + b.r > H) {
      b.y = H - b.r
      b.vy = -b.vy * 0.75
    }
    if (b.y - b.r < 0) { b.y = b.r; b.vy = -b.vy * 0.6 }
    if (b.x + b.r > W) { b.x = W - b.r; b.vx = -b.vx * 0.8 }
    if (b.x - b.r < 0) { b.x = b.r; b.vx = -b.vx * 0.8 }
  }
}

fn draw() {
  canvas.clear("#0f172a")
  canvas.rect(0, H - 4, W, 4, "#334155")

  for (let b of balls) {
    // Shadow
    canvas.ellipse(b.x, H - 4, b.r * 0.8, 4, "rgba(0,0,0,0.3)")
    // Ball
    canvas.circle(b.x, b.y, b.r, b.color)
    // Shine
    canvas.circle(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, "rgba(255,255,255,0.4)")
  }

  canvas.text(8, 20, \`Balls: \${balls.length}  (click to add more)\`, 13, "#94a3b8")
}

timer.loop(fn() { update(); draw() })
`},{id:"art",category:"Art",name:"Generative Art",description:"Beautiful procedural art",code:`// Generative Spiral Art
let W = 500
let H = 500
canvas.setSize(W, H)
canvas.clear("#050510")

let cx = W / 2
let cy = H / 2
let t = 0

fn hsl(h, s, l) {
  return \`hsl(\${h}, \${s}%, \${l}%)\`
}

fn drawSpiral() {
  canvas.clear("#050510")

  for (let i = 0; i < 800; i++) {
    let angle = i * 0.15 + t
    let radius = i * 0.28
    let x = cx + math.cos(angle) * radius
    let y = cy + math.sin(angle) * radius
    let hue = (i * 0.45 + t * 30) % 360
    let size = 2 + math.sin(i * 0.1 + t) * 1.5
    canvas.circle(x, y, size, hsl(hue, 90, 65))
  }

  // Center glow
  for (let r = 30; r > 0; r = r - 2) {
    let alpha = (30 - r) / 30
    canvas.circle(cx, cy, r, \`rgba(150, 100, 255, \${alpha * 0.15})\`)
  }

  t = t + 0.015
}

timer.loop(drawSpiral)
`},{id:"clock",category:"Art",name:"Analog Clock",description:"A live analog clock",code:`// Analog Clock
let W = 400
let H = 400
canvas.setSize(W, H)
let cx = W / 2
let cy = H / 2
let R = 160

fn drawClock() {
  canvas.clear("#0f172a")

  // Face
  canvas.circle(cx, cy, R, "#1e293b")
  canvas.ringArc(cx, cy, R - 2, R, 0, math.PI * 2, "#334155")

  // Hour markers
  for (let i = 0; i < 12; i++) {
    let angle = (i / 12) * math.PI * 2 - math.PI / 2
    let outer = R - 8
    let inner = i % 3 == 0 ? R - 24 : R - 16
    let x1 = cx + math.cos(angle) * inner
    let y1 = cy + math.sin(angle) * inner
    let x2 = cx + math.cos(angle) * outer
    let y2 = cy + math.sin(angle) * outer
    let w = i % 3 == 0 ? 3 : 1.5
    canvas.line(x1, y1, x2, y2, w, i % 3 == 0 ? "#f1f5f9" : "#64748b")
  }

  // Numbers
  for (let i = 1; i <= 12; i++) {
    let angle = (i / 12) * math.PI * 2 - math.PI / 2
    let nx = cx + math.cos(angle) * (R - 40)
    let ny = cy + math.sin(angle) * (R - 40) + 5
    canvas.text(nx, ny, \`\${i}\`, 14, "#94a3b8", "center")
  }

  // Get time
  let now = timer.date()
  let hours = now.hours % 12
  let minutes = now.minutes
  let seconds = now.seconds

  // Hour hand
  let hAngle = ((hours + minutes / 60) / 12) * math.PI * 2 - math.PI / 2
  canvas.line(cx, cy,
    cx + math.cos(hAngle) * (R * 0.5),
    cy + math.sin(hAngle) * (R * 0.5), 5, "#f1f5f9")

  // Minute hand
  let mAngle = ((minutes + seconds / 60) / 60) * math.PI * 2 - math.PI / 2
  canvas.line(cx, cy,
    cx + math.cos(mAngle) * (R * 0.72),
    cy + math.sin(mAngle) * (R * 0.72), 3, "#94a3b8")

  // Second hand
  let sAngle = (seconds / 60) * math.PI * 2 - math.PI / 2
  canvas.line(cx, cy,
    cx + math.cos(sAngle) * (R * 0.82),
    cy + math.sin(sAngle) * (R * 0.82), 1.5, "#ef4444")

  // Center dot
  canvas.circle(cx, cy, 5, "#f1f5f9")
  canvas.circle(cx, cy, 3, "#0f172a")

  // Digital time
  let h = now.hours
  let m = minutes < 10 ? \`0\${minutes}\` : \`\${minutes}\`
  let s = seconds < 10 ? \`0\${seconds}\` : \`\${seconds}\`
  canvas.text(cx, cy + R - 50, \`\${h}:\${m}:\${s}\`, 16, "#64748b", "center")
}

timer.loop(drawClock)
`},{id:"portfolio",category:"Art",name:"Portfolio Website",description:"A full multi-page website rendered entirely on canvas",code:`// PORTFOLIO WEBSITE
// A complete website rendered entirely on the Viper Invictus canvas
// Click the nav tabs to switch pages!

let W = 900
let H = 650
canvas.setSize(W, H)

// ============== COLORS ==============
let C = {
  bg: "#0f172a",
  card: "#1e293b",
  accent: "#7c6af7",
  accent2: "#e94560",
  text: "#f1f5f9",
  textDim: "#94a3b8",
  textDark: "#64748b",
  border: "#334155",
  hover: "#334155",
  white: "#ffffff",
}

// ============== STATE ==============
let currentPage = "home"
let navHover = ""
let btnHover = ""
let cardHover = -1
let scrollY = 0
let particles = []
let t = 0

// ============== PARTICLES ==============
for (let i = 0; i < 40; i++) {
  particles.push({
    x: math.random() * W,
    y: math.random() * H,
    r: math.random() * 2 + 1,
    vx: (math.random() - 0.5) * 0.5,
    vy: (math.random() - 0.5) * 0.5,
    alpha: math.random() * 0.5 + 0.2,
  })
}

// ============== NAV TABS ==============
let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

let tabWidth = 100
let tabHeight = 44
let tabStartX = W / 2 - (tabs.length * tabWidth) / 2
let tabY = 10

// ============== CLICK HANDLER ==============
canvas.onClick(fn(mx, my) {
  // Nav tabs
  for (let i = 0; i < tabs.length; i++) {
    let tx = tabStartX + i * tabWidth
    if (mx > tx && mx < tx + tabWidth && my > tabY && my < tabY + tabHeight) {
      currentPage = tabs[i].id
      scrollY = 0
      return
    }
  }
  
  // Home CTA button
  if (currentPage == "home") {
    let bx = W / 2 - 80
    let by = 320
    if (mx > bx && mx < bx + 160 && my > by && my < by + 44) {
      currentPage = "projects"
      scrollY = 0
      return
    }
  }
  
  // Contact send button
  if (currentPage == "contact") {
    let bx = W / 2 - 60
    let by = 500
    if (mx > bx && mx < bx + 120 && my > by && my < by + 40) {
      return
    }
  }
})

// ============== HELPERS ==============
fn drawTextCentered(x, y, text, size, color) {
  canvas.text(x, y, text, size, color, "center")
}

fn drawCard(x, y, w, h, r, color, borderColor) {
  canvas.roundRect(x, y, w, h, r, color)
  if (borderColor) {
    canvas.roundRect(x, y, w, h, r, borderColor)
    canvas.roundRect(x + 1, y + 1, w - 2, h - 2, r - 1, color)
  }
}

fn drawButton(x, y, w, h, text, isHover, isActive) {
  let bg = isActive ? C.accent : (isHover ? C.hover : C.card)
  let r = 8
  canvas.roundRect(x, y, w, h, r, bg)
  if (isActive) {
    canvas.roundRect(x, y, w, h, r, C.accent)
  } else if (isHover) {
    canvas.roundRect(x, y, w, h, r, C.border)
  }
  canvas.text(x + w / 2, y + h / 2 + 5, text, 14, isActive ? C.white : C.textDim, "center")
}

fn drawNavTab(i, tab, isActive, isHover) {
  let x = tabStartX + i * tabWidth
  let y = tabY
  let bg = isActive ? C.accent : (isHover ? C.hover : "")
  if (bg) {
    canvas.roundRect(x + 2, y + 2, tabWidth - 4, tabHeight - 4, 6, bg)
  }
  canvas.text(x + tabWidth / 2, y + tabHeight / 2 + 5, tab.label, 14, isActive ? C.white : C.textDim, "center")
}

fn drawNavBar() {
  canvas.rect(0, 0, W, 64, C.bg)
  canvas.roundRect(20, 12, 36, 36, 8, C.accent)
  canvas.text(38, 36, "V", 18, C.white, "center")
  canvas.text(66, 36, "Viper", 16, C.text, "left")
  
  for (let i = 0; i < tabs.length; i++) {
    let isActive = tabs[i].id == currentPage
    let isHover = tabs[i].id == navHover
    drawNavTab(i, tabs[i], isActive, isHover)
  }
  
  canvas.line(0, 64, W, 64, 1, C.border)
}

// ============== PARTICLES ==============
fn updateParticles() {
  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy
    if (p.x < 0) { p.x = W }
    if (p.x > W) { p.x = 0 }
    if (p.y < 0) { p.y = H }
    if (p.y > H) { p.y = 0 }
  }
}

fn drawParticles() {
  for (let p of particles) {
    let a = p.alpha + math.sin(t * 2 + p.x) * 0.1
    let color = \`rgba(124, 106, 247, \${math.max(0.1, a)})\`
    canvas.circle(p.x, p.y, p.r, color)
  }
}

// ============== HOME PAGE ==============
fn drawHome() {
  canvas.clear(C.bg)
  drawParticles()
  
  let orb1x = W / 2 + math.sin(t * 0.5) * 100
  let orb1y = 200 + math.cos(t * 0.3) * 50
  for (let r = 80; r > 0; r = r - 5) {
    let a = (80 - r) / 80 * 0.15
    canvas.circle(orb1x, orb1y, r, \`rgba(124, 106, 247, \${a})\`)
  }
  
  let orb2x = W / 2 + math.cos(t * 0.4) * 120
  let orb2y = 300 + math.sin(t * 0.6) * 60
  for (let r = 60; r > 0; r = r - 5) {
    let a = (60 - r) / 60 * 0.1
    canvas.circle(orb2x, orb2y, r, \`rgba(233, 69, 96, \${a})\`)
  }
  
  let titleY = 180
  canvas.text(W / 2, titleY, "Welcome to My Portfolio", 32, C.text, "center")
  canvas.text(W / 2, titleY + 35, "Built entirely with Viper Invictus", 16, C.textDim, "center")
  canvas.text(W / 2, titleY + 70, "A complete website rendered on the canvas", 14, C.textDark, "center")
  canvas.text(W / 2, titleY + 90, "No HTML. No CSS. Just code.", 14, C.textDark, "center")
  
  let btnW = 160
  let btnH = 44
  let btnX = W / 2 - btnW / 2
  let btnY = 320
  let isHover = btnHover == "cta"
  
  canvas.roundRect(btnX + 2, btnY + 2, btnW, btnH, 8, "rgba(124,106,247,0.3)")
  canvas.roundRect(btnX, btnY, btnW, btnH, 8, C.accent)
  if (isHover) {
    canvas.roundRect(btnX, btnY, btnW, btnH, 8, "rgba(255,255,255,0.1)")
  }
  canvas.text(btnX + btnW / 2, btnY + btnH / 2 + 5, "View Projects", 15, C.white, "center")
  
  let stats = [
    { num: "10+", label: "Projects" },
    { num: "5+", label: "Years Exp" },
    { num: "100%", label: "Canvas" },
  ]
  let cardW = 140
  let cardH = 80
  let startX = W / 2 - (stats.length * cardW + (stats.length - 1) * 20) / 2
  
  for (let i = 0; i < stats.length; i++) {
    let cx = startX + i * (cardW + 20)
    let cy = 420
    canvas.roundRect(cx, cy, cardW, cardH, 10, C.card)
    canvas.roundRect(cx, cy, cardW, cardH, 10, C.border)
    canvas.roundRect(cx + 1, cy + 1, cardW - 2, cardH - 2, 9, C.card)
    canvas.text(cx + cardW / 2, cy + 30, stats[i].num, 22, C.accent, "center")
    canvas.text(cx + cardW / 2, cy + 55, stats[i].label, 12, C.textDim, "center")
  }
}

// ============== ABOUT PAGE ==============
fn drawAbout() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "About Me", 28, C.text, "center")
  canvas.line(W / 2 - 40, 120, W / 2 + 40, 120, 2, C.accent)
  
  let cardX = W / 2 - 300
  let cardY = 160
  let cardW = 600
  let cardH = 360
  
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.card)
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.border)
  canvas.roundRect(cardX + 1, cardY + 1, cardW - 2, cardH - 2, 11, C.card)
  
  canvas.circle(cardX + 70, cardY + 70, 40, C.accent)
  canvas.text(cardX + 70, cardY + 75, "JD", 18, C.white, "center")
  
  canvas.text(cardX + 130, cardY + 55, "John Doe", 20, C.text, "left")
  canvas.text(cardX + 130, cardY + 80, "Full-Stack Developer", 14, C.textDim, "left")
  canvas.text(cardX + 130, cardY + 100, "Creative Coder & Designer", 12, C.textDark, "left")
  
  let bioLines = [
    "I build things that live on the web.",
    "Passionate about creative coding, game development,",
    "and pushing the boundaries of what browsers can do.",
    "This entire website is rendered on a canvas using",
    "Viper Invictus - a language built from scratch.",
  ]
  for (let i = 0; i < bioLines.length; i++) {
    canvas.text(cardX + 40, cardY + 160 + i * 22, bioLines[i], 13, C.textDim, "left")
  }
  
  let badges = ["GitHub", "Twitter", "LinkedIn", "Dribbble"]
  let badgeX = cardX + 40
  let badgeY = cardY + 300
  for (let i = 0; i < badges.length; i++) {
    let bw = 80
    let bh = 28
    canvas.roundRect(badgeX + i * 90, badgeY, bw, bh, 6, C.border)
    canvas.text(badgeX + i * 90 + bw / 2, badgeY + bh / 2 + 4, badges[i], 11, C.textDim, "center")
  }
}

// ============== PROJECTS PAGE ==============
fn drawProjects() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "My Projects", 28, C.text, "center")
  canvas.line(W / 2 - 50, 120, W / 2 + 50, 120, 2, C.accent)
  
  let projects = [
    { title: "Snake Game", desc: "Classic snake with canvas rendering", color: "#22c55e" },
    { title: "Generative Art", desc: "Procedural spiral patterns", color: "#8b5cf6" },
    { title: "Physics Sim", desc: "Bouncing balls with gravity", color: "#3b82f6" },
    { title: "Analog Clock", desc: "Live time with canvas drawing", color: "#ef4444" },
    { title: "Sorting Visualizer", desc: "Bubble sort animation", color: "#f59e0b" },
    { title: "Portfolio Site", desc: "This website you're viewing", color: "#7c6af7" },
  ]
  
  let cols = 3
  let cardW = 260
  let cardH = 140
  let gapX = 20
  let gapY = 20
  let startX = W / 2 - (cols * cardW + (cols - 1) * gapX) / 2
  let startY = 160
  
  for (let i = 0; i < projects.length; i++) {
    let col = i % cols
    let row = math.floor(i / cols)
    let cx = startX + col * (cardW + gapX)
    let cy = startY + row * (cardH + gapY) - scrollY
    
    if (cy < 60 || cy > H) { continue }
    
    let isHover = cardHover == i
    let bg = isHover ? C.hover : C.card
    
    canvas.roundRect(cx, cy, cardW, cardH, 10, bg)
    canvas.roundRect(cx, cy, cardW, cardH, 10, C.border)
    canvas.roundRect(cx + 1, cy + 1, cardW - 2, cardH - 2, 9, bg)
    
    canvas.rect(cx + 10, cy + 10, cardW - 20, 4, projects[i].color)
    canvas.text(cx + 15, cy + 40, projects[i].title, 16, C.text, "left")
    canvas.text(cx + 15, cy + 65, projects[i].desc, 12, C.textDim, "left")
    
    canvas.roundRect(cx + 15, cy + cardH - 30, 60, 20, 4, projects[i].color + "30")
    canvas.text(cx + 45, cy + cardH - 19, "Viper", 10, projects[i].color, "center")
  }
}

// ============== SKILLS PAGE ==============
fn drawSkills() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "Skills", 28, C.text, "center")
  canvas.line(W / 2 - 30, 120, W / 2 + 30, 120, 2, C.accent)
  
  let skills = [
    { name: "Viper Invictus", level: 95, color: "#7c6af7" },
    { name: "JavaScript", level: 90, color: "#f7df1e" },
    { name: "Python", level: 85, color: "#3b82f6" },
    { name: "Canvas API", level: 88, color: "#22c55e" },
    { name: "Game Dev", level: 80, color: "#ef4444" },
    { name: "Generative Art", level: 75, color: "#8b5cf6" },
    { name: "Algorithms", level: 82, color: "#f59e0b" },
    { name: "UI Design", level: 78, color: "#ec4899" },
  ]
  
  let barW = 400
  let barH = 16
  let startX = W / 2 - barW / 2
  let startY = 170
  let gap = 40
  
  for (let i = 0; i < skills.length; i++) {
    let y = startY + i * gap
    let skill = skills[i]
    
    canvas.text(startX, y - 8, skill.name, 13, C.text, "left")
    canvas.text(startX + barW, y - 8, \`\${skill.level}%\`, 12, C.textDim, "right")
    
    canvas.roundRect(startX, y + 5, barW, barH, 8, C.border)
    
    let fillW = skill.level / 100 * barW
    let animW = fillW * math.min(1, t * 0.5 + 0.1)
    canvas.roundRect(startX + 2, y + 7, animW - 4, barH - 4, 6, skill.color)
  }
  
  let cx = W / 2
  let cy = 520
  let r = 60
  
  canvas.circle(cx, cy, r, C.border)
  canvas.circle(cx, cy, r - 2, C.card)
  canvas.text(cx, cy - 8, "Viper", 14, C.text, "center")
  canvas.text(cx, cy + 10, "Expert", 12, C.accent, "center")
}

// ============== CONTACT PAGE ==============
fn drawContact() {
  canvas.clear(C.bg)
  drawParticles()
  
  canvas.text(W / 2, 100, "Get In Touch", 28, C.text, "center")
  canvas.line(W / 2 - 55, 120, W / 2 + 55, 120, 2, C.accent)
  
  let cardX = W / 2 - 250
  let cardY = 160
  let cardW = 500
  let cardH = 340
  
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.card)
  canvas.roundRect(cardX, cardY, cardW, cardH, 12, C.border)
  canvas.roundRect(cardX + 1, cardY + 1, cardW - 2, cardH - 2, 11, C.card)
  
  let fields = [
    { label: "Name", y: 210, value: "John Doe" },
    { label: "Email", y: 270, value: "john@example.com" },
    { label: "Message", y: 330, value: "Hello, I love your work!" },
  ]
  
  for (let field of fields) {
    canvas.text(cardX + 40, field.y, field.label, 12, C.textDark, "left")
    canvas.roundRect(cardX + 40, field.y + 8, cardW - 80, 36, 6, C.border)
    canvas.roundRect(cardX + 41, field.y + 9, cardW - 82, 34, 5, C.card)
    canvas.text(cardX + 55, field.y + 28, field.value, 13, C.textDim, "left")
  }
  
  let btnX = W / 2 - 60
  let btnY = 500
  let btnW = 120
  let btnH = 40
  let isHover = btnHover == "send"
  
  canvas.roundRect(btnX, btnY, btnW, btnH, 8, isHover ? C.accent2 : C.accent)
  canvas.text(btnX + btnW / 2, btnY + btnH / 2 + 5, "Send Message", 13, C.white, "center")
  
  let socials = [
    { name: "github.com/johndoe", y: 560 },
    { name: "twitter.com/johndoe", y: 585 },
    { name: "linkedin.com/in/johndoe", y: 610 },
  ]
  
  for (let s of socials) {
    canvas.text(W / 2, s.y, s.name, 12, C.textDim, "center")
  }
}

// ============== FOOTER ==============
fn drawFooter() {
  canvas.rect(0, H - 36, W, 36, C.card)
  canvas.line(0, H - 36, W, H - 36, 1, C.border)
  canvas.text(W / 2, H - 16, \`2026 Portfolio - Built with Viper Invictus - Page: \${currentPage}\`, 11, C.textDark, "center")
}

// ============== MAIN DRAW ==============
fn draw() {
  t = t + 0.016
  
  drawNavBar()
  
  if (currentPage == "home") { drawHome() }
  else if (currentPage == "about") { drawAbout() }
  else if (currentPage == "projects") { drawProjects() }
  else if (currentPage == "skills") { drawSkills() }
  else if (currentPage == "contact") { drawContact() }
  
  drawFooter()
  
  updateParticles()
}

// Start the loop
timer.loop(draw)
`},{id:"fibonacci",category:"Algorithms",name:"Sorting Algorithms",description:"Visualize sorting in action",code:`// Sorting Algorithm Visualizer
let W = 500
let H = 350
canvas.setSize(W, H)

let N = 60
let arr = []
let sorting = false
let comparisons = 0
let swaps = 0
let highlight = []

fn reset() {
  arr = []
  for (let i = 0; i < N; i++) {
    arr.push(math.floor(math.random() * (H - 40) + 10))
  }
  comparisons = 0
  swaps = 0
  highlight = []
  sorting = false
}

reset()

fn drawBars() {
  canvas.clear("#0f172a")
  let bw = W / N

  for (let i = 0; i < arr.length; i++) {
    let color = "#3b82f6"
    if (highlight.length > 0) {
      if (i == highlight[0]) { color = "#ef4444" }
      else if (i == highlight[1]) { color = "#22c55e" }
    }
    let x = i * bw
    let h = arr[i]
    canvas.rect(x + 1, H - 30 - h, bw - 2, h, color)
  }

  canvas.rect(0, H - 28, W, 28, "#1e293b")
  canvas.text(8, H - 10, \`Comparisons: \${comparisons}  Swaps: \${swaps}\`, 12, "#94a3b8")
  canvas.text(W - 8, H - 10, sorting ? "Sorting..." : "Press S to sort, R to reset", 12, "#64748b", "right")
}

fn bubbleSort() {
  sorting = true
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons = comparisons + 1
      highlight = [j, j + 1]
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        swaps = swaps + 1
      }
    }
  }
  highlight = []
  sorting = false
}

canvas.onKey(fn(key) {
  if (key == "s" || key == "S") { bubbleSort() }
  if (key == "r" || key == "R") { reset() }
})

timer.loop(drawBars)
`},{id:"math-demo",category:"Algorithms",name:"Math & Algorithms",description:"Mathematical functions and algorithms",code:`// Math & Algorithms

// Prime checker
fn isPrime(n) {
  if (n < 2) { return false }
  if (n == 2) { return true }
  if (n % 2 == 0) { return false }
  let i = 3
  while (i * i <= n) {
    if (n % i == 0) { return false }
    i = i + 2
  }
  return true
}

print("Primes up to 50:")
let primes = []
for (let i = 2; i <= 50; i++) {
  if (isPrime(i)) { primes.push(i) }
}
print(primes)

// Binary search
fn binarySearch(arr, target) {
  let lo = 0
  let hi = arr.length - 1
  while (lo <= hi) {
    let mid = math.floor((lo + hi) / 2)
    if (arr[mid] == target) { return mid }
    if (arr[mid] < target) { lo = mid + 1 }
    else { hi = mid - 1 }
  }
  return -1
}

let sorted = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(\`
Binary search for 23: index \${binarySearch(sorted, 23)}\`)
print(\`Binary search for 99: index \${binarySearch(sorted, 99)}\`)

// Factorial
fn factorial(n) {
  if (n <= 1) { return 1 }
  return n * factorial(n - 1)
}

print("
Factorials:")
for (let i = 0; i <= 10; i++) {
  print(\`  \${i}! = \${factorial(i)}\`)
}

// Math functions
print(\`
math.sqrt(144) = \${math.sqrt(144)}\`)
print(\`math.abs(-42) = \${math.abs(-42)}\`)
print(\`math.pow(2, 10) = \${math.pow(2, 10)}\`)
print(\`math.round(3.7) = \${math.round(3.7)}\`)
print(\`math.PI = \${math.PI}\`)
print(\`math.E = \${math.E}\`)
`},{id:"wireframe",category:"Advanced",name:"3D Wireframe Cube",description:"Real-time 3D cube projection with rotation, rendered entirely on canvas",code:`// 3D WIREFRAME CUBE
// Rotating 3D cube with perspective projection using only math

let W = 500
let H = 400
canvas.setSize(W, H)

let angleX = 0
let angleY = 0
let angleZ = 0

let cube = [
  { x: -60, y: -60, z: -60 },
  { x:  60, y: -60, z: -60 },
  { x:  60, y:  60, z: -60 },
  { x: -60, y:  60, z: -60 },
  { x: -60, y: -60, z:  60 },
  { x:  60, y: -60, z:  60 },
  { x:  60, y:  60, z:  60 },
  { x: -60, y:  60, z:  60 },
]

let edges = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
]

fn rotateX(p, a) {
  let y = p.y * math.cos(a) - p.z * math.sin(a)
  let z = p.y * math.sin(a) + p.z * math.cos(a)
  return { x: p.x, y: y, z: z }
}

fn rotateY(p, a) {
  let x = p.x * math.cos(a) + p.z * math.sin(a)
  let z = -p.x * math.sin(a) + p.z * math.cos(a)
  return { x: x, y: p.y, z: z }
}

fn rotateZ(p, a) {
  let x = p.x * math.cos(a) - p.y * math.sin(a)
  let y = p.x * math.sin(a) + p.y * math.cos(a)
  return { x: x, y: y, z: p.z }
}

fn project(p) {
  let fov = 300
  let dist = 200
  let scale = fov / (p.z + dist)
  return {
    x: p.x * scale + W / 2,
    y: p.y * scale + H / 2,
  }
}

fn draw() {
  canvas.clear("#050510")

  let rotated = []
  for (let p of cube) {
    let r = rotateX(p, angleX)
    r = rotateY(r, angleY)
    r = rotateZ(r, angleZ)
    rotated.push(r)
  }

  let projected = []
  for (let p of rotated) {
    projected.push(project(p))
  }

  // Draw edges
  for (let e of edges) {
    let a = projected[e[0]]
    let b = projected[e[1]]
    let depth = (rotated[e[0]].z + rotated[e[1]].z) / 2
    let brightness = math.max(0.3, (depth + 60) / 120)
    let r = math.floor(124 * brightness)
    let g = math.floor(106 * brightness)
    let bVal = math.floor(247 * brightness)
    let color = \`rgb(\${r}, \${g}, \${bVal})\`
    canvas.line(a.x, a.y, b.x, b.y, 2, color)
  }

  // Draw vertices
  for (let p of projected) {
    canvas.circle(p.x, p.y, 3, "#e94560")
  }

  // Info
  canvas.text(W / 2, 20, "3D Wireframe Cube", 16, "#f1f5f9", "center")
  canvas.text(10, H - 10, "Pure math projection + 60fps rotation", 12, "#64748b")

  angleX = angleX + 0.012
  angleY = angleY + 0.018
  angleZ = angleZ + 0.006
}

timer.loop(draw)
`},{id:"game-of-life",category:"Advanced",name:"Conway's Game of Life",description:"Cellular automaton with randomized seed, step counter, and live cell count",code:`// CONWAY'S GAME OF LIFE
// Cellular automaton on the canvas

let W = 500
let H = 400
let CELL = 8
let COLS = math.floor(W / CELL)
let ROWS = math.floor(H / CELL)
canvas.setSize(W, H)

let grid = []
let next = []
let steps = 0
let running = true

fn initGrid() {
  grid = []
  next = []
  for (let y = 0; y < ROWS; y++) {
    let row = []
    let nRow = []
    for (let x = 0; x < COLS; x++) {
      row.push(math.random() > 0.85 ? 1 : 0)
      nRow.push(0)
    }
    grid.push(row)
    next.push(nRow)
  }
  steps = 0
}

initGrid()

fn countNeighbors(x, y) {
  let sum = 0
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx == 0 && dy == 0) { continue }
      let nx = (x + dx + COLS) % COLS
      let ny = (y + dy + ROWS) % ROWS
      sum = sum + grid[ny][nx]
    }
  }
  return sum
}

fn update() {
  if (!running) { return }
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      let state = grid[y][x]
      let neighbors = countNeighbors(x, y)
      if (state == 0 && neighbors == 3) {
        next[y][x] = 1
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[y][x] = 0
      } else {
        next[y][x] = state
      }
    }
  }
  let tmp = grid
  grid = next
  next = tmp
  steps = steps + 1
}

fn draw() {
  canvas.clear("#0a0a15")
  let alive = 0
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] == 1) {
        alive = alive + 1
        let cx = x * CELL + CELL / 2
        let cy = y * CELL + CELL / 2
        canvas.circle(cx, cy, CELL / 2 - 1, "#34d399")
      }
    }
  }
  canvas.rect(0, H - 28, W, 28, "#1e293b")
  canvas.text(8, H - 8, \`Step: \${steps}  Alive: \${alive}\`, 12, "#94a3b8")
  canvas.text(W - 8, H - 8, "Click to pause, R to reset", 11, "#64748b", "right")
  if (steps % 5 == 0) { update() }
}

canvas.onClick(fn() {
  running = !running
})

canvas.onKey(fn(key) {
  if (key == "r" || key == "R") { initGrid() }
})

timer.loop(draw)
`},{id:"fractal-tree",category:"Advanced",name:"Fractal Tree",description:"Recursive fractal tree with wind animation and color gradients",code:`// FRACTAL TREE
// Recursive tree with animated wind sway

let W = 500
let H = 450
canvas.setSize(W, H)

let t = 0
let wind = 0

fn drawBranch(x, y, len, angle, depth, maxDepth) {
  if (depth > maxDepth) { return }

  let x2 = x + math.cos(angle) * len
  let y2 = y + math.sin(angle) * len

  let thickness = math.max(1, (maxDepth - depth) * 1.5)
  let green = math.floor(100 + (depth / maxDepth) * 100)
  let red = math.floor(139 + (depth / maxDepth) * 60)
  let color = \`rgb(\${red}, \${green}, 50)\`

  canvas.line(x, y, x2, y2, thickness, color)

  let sway = wind * (depth * 0.02)
  let branchLen = len * 0.7
  let angleSpread = math.PI / 5

  if (depth < maxDepth) {
    drawBranch(x2, y2, branchLen, angle - angleSpread + sway, depth + 1, maxDepth)
    drawBranch(x2, y2, branchLen, angle + angleSpread + sway, depth + 1, maxDepth)
  } else {
    // Leaves
    canvas.circle(x2, y2, 4 + math.sin(t + x) * 1.5, "#22c55e")
    canvas.circle(x2 + 3, y2 - 2, 3, "#34d399")
  }
}

fn draw() {
  canvas.clear("#0a0a15")

  wind = math.sin(t) * 0.15

  // Ground
  canvas.rect(0, H - 20, W, 20, "#1e293b")

  // Tree
  drawBranch(W / 2, H - 20, 80, -math.PI / 2, 0, 9)

  // Info
  canvas.text(10, 20, "Fractal Tree", 16, "#f1f5f9")
  canvas.text(10, 40, "Recursive drawing + animated wind", 12, "#64748b")

  t = t + 0.02
}

timer.loop(draw)
`},{id:"fireworks",category:"Games",name:"Fireworks",description:"Particle physics simulation with gravity, trails, explosions, and color cycling",code:`// FIREWORKS
// Click anywhere to launch a firework!

let W = 500
let H = 400
canvas.setSize(W, H)

let particles = []
let rockets = []
let t = 0

fn makeRocket(x, y, targetY) {
  return {
    x: x,
    y: y,
    vy: -math.random() * 3 - 5,
    vx: (math.random() - 0.5) * 2,
    targetY: targetY,
    color: \`hsl(\${math.random() * 360}, 90%, 60%)\`,
    dead: false,
  }
}

fn explode(x, y, color) {
  let count = math.floor(math.random() * 30 + 40)
  for (let i = 0; i < count; i++) {
    let angle = math.random() * math.PI * 2
    let speed = math.random() * 4 + 1
    particles.push({
      x: x,
      y: y,
      vx: math.cos(angle) * speed,
      vy: math.sin(angle) * speed,
      life: math.random() * 40 + 30,
      maxLife: math.random() * 40 + 30,
      color: color,
      size: math.random() * 2 + 1,
    })
  }
}

fn update() {
  // Update rockets
  for (let r of rockets) {
    if (r.dead) { continue }
    r.y = r.y + r.vy
    r.x = r.x + r.vx
    r.vy = r.vy + 0.05
    if (r.vy > 0 || r.y < r.targetY) {
      r.dead = true
      explode(r.x, r.y, r.color)
    }
  }

  // Update particles
  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy
    p.vy = p.vy + 0.08
    p.vx = p.vx * 0.98
    p.life = p.life - 1
  }

  // Remove dead
  let aliveParticles = []
  for (let p of particles) {
    if (p.life > 0) { aliveParticles.push(p) }
  }
  particles = aliveParticles

  let aliveRockets = []
  for (let r of rockets) {
    if (!r.dead) { aliveRockets.push(r) }
  }
  rockets = aliveRockets

  // Auto launch
  if (math.random() < 0.02 && rockets.length < 3) {
    let rx = math.random() * (W - 100) + 50
    let ry = math.random() * (H * 0.4) + 50
    rockets.push(makeRocket(rx, H, ry))
  }
}

fn draw() {
  canvas.clear("#050510")

  // Draw rockets
  for (let r of rockets) {
    if (!r.dead) {
      canvas.circle(r.x, r.y, 3, r.color)
      canvas.line(r.x, r.y, r.x - r.vx * 3, r.y - r.vy * 3, 1, r.color)
    }
  }

  // Draw particles
  for (let p of particles) {
    let alpha = p.life / p.maxLife
    let color = p.color.replace("hsl", "hsla").replace(")", \`, \${alpha})\`)
    canvas.circle(p.x, p.y, p.size * alpha, color)
  }

  canvas.text(10, 20, "Click to launch fireworks!", 14, "#f1f5f9")
  canvas.text(10, 40, \`Particles: \${particles.length}\`, 11, "#64748b")
}

canvas.onClick(fn(x, y) {
  rockets.push(makeRocket(x, H, y))
})

timer.loop(fn() { update(); draw() })
`},{id:"pong",category:"Games",name:"Pong",description:"Classic Pong with 2-player controls, ball physics, score tracking, and AI option",code:`// PONG
// Classic Pong - W/S for left, Arrow Up/Down for right

let W = 500
let H = 350
canvas.setSize(W, H)

let paddleH = 70
let paddleW = 10
let ballR = 8

let p1 = { y: H / 2 - paddleH / 2, score: 0 }
let p2 = { y: H / 2 - paddleH / 2, score: 0 }
let ball = { x: W / 2, y: H / 2, dx: 4, dy: 3 }
let p1Up = false
let p1Down = false
let p2Up = false
let p2Down = false

let trail = []

fn resetBall() {
  ball.x = W / 2
  ball.y = H / 2
  ball.dx = (math.random() > 0.5 ? 1 : -1) * 4
  ball.dy = (math.random() - 0.5) * 6
  trail = []
}

fn update() {
  // Paddle movement
  if (p1Up && p1.y > 0) { p1.y = p1.y - 5 }
  if (p1Down && p1.y < H - paddleH) { p1.y = p1.y + 5 }
  if (p2Up && p2.y > 0) { p2.y = p2.y - 5 }
  if (p2Down && p2.y < H - paddleH) { p2.y = p2.y + 5 }

  // Ball movement
  ball.x = ball.x + ball.dx
  ball.y = ball.y + ball.dy

  // Trail
  trail.push({ x: ball.x, y: ball.y, alpha: 1.0 })
  if (trail.length > 15) { trail.shift() }
  for (let t of trail) { t.alpha = t.alpha - 0.06 }

  // Wall bounce
  if (ball.y - ballR < 0 || ball.y + ballR > H) { ball.dy = -ball.dy }

  // Paddle collision
  if (ball.x - ballR < 20 + paddleW && ball.y > p1.y && ball.y < p1.y + paddleH) {
    ball.dx = math.abs(ball.dx) + 0.2
    ball.dy = ball.dy + (ball.y - (p1.y + paddleH / 2)) * 0.1
  }
  if (ball.x + ballR > W - 20 - paddleW && ball.y > p2.y && ball.y < p2.y + paddleH) {
    ball.dx = -math.abs(ball.dx) - 0.2
    ball.dy = ball.dy + (ball.y - (p2.y + paddleH / 2)) * 0.1
  }

  // Score
  if (ball.x < 0) { p2.score = p2.score + 1; resetBall() }
  if (ball.x > W) { p1.score = p1.score + 1; resetBall() }
}

fn draw() {
  canvas.clear("#0f172a")

  // Center line
  for (let y = 0; y < H; y = y + 20) {
    canvas.rect(W / 2 - 1, y, 2, 10, "#334155")
  }

  // Trail
  for (let t of trail) {
    if (t.alpha > 0) {
      let a = math.floor(t.alpha * 255)
      canvas.circle(t.x, t.y, ballR * 0.6, \`rgba(124, 106, 247, \${t.alpha})\`)
    }
  }

  // Paddles
  canvas.roundRect(20, p1.y, paddleW, paddleH, 4, "#7c6af7")
  canvas.roundRect(W - 20 - paddleW, p2.y, paddleW, paddleH, 4, "#e94560")

  // Ball
  canvas.circle(ball.x, ball.y, ballR, "#f1f5f9")
  canvas.circle(ball.x - 2, ball.y - 2, ballR * 0.4, "#ffffff")

  // Scores
  canvas.text(W / 2 - 40, 40, p1.score, 28, "#7c6af7", "center")
  canvas.text(W / 2 + 40, 40, p2.score, 28, "#e94560", "center")

  // Instructions
  canvas.text(W / 2, H - 15, "W/S  vs  Up/Down", 11, "#64748b", "center")
}

canvas.onKey(fn(key) {
  if (key == "w" || key == "W") { p1Up = true }
  if (key == "s" || key == "S") { p1Down = true }
  if (key == "ArrowUp") { p2Up = true }
  if (key == "ArrowDown") { p2Down = true }
})

canvas.onKey(fn(key) {
  if (key == "w" || key == "W") { p1Up = false }
  if (key == "s" || key == "S") { p1Down = false }
  if (key == "ArrowUp") { p2Up = false }
  if (key == "ArrowDown") { p2Down = false }
})

resetBall()
timer.loop(fn() { update(); draw() })
`},{id:"mandelbrot",category:"Advanced",name:"Mandelbrot Explorer",description:"Real-time Mandelbrot set rendering with color mapping and zoom indicator",code:`// MANDELBROT SET
// Fractal rendering with smooth color mapping
// Optimized with JS compiler for real-time performance

let W = 400
let H = 320
canvas.setSize(W, H)

let maxIter = 40
let t = 0

fn mandelbrot(cx, cy) {
  let x = 0
  let y = 0
  let iter = 0
  while (x * x + y * y <= 4 && iter < maxIter) {
    let xtemp = x * x - y * y + cx
    y = 2 * x * y + cy
    x = xtemp
    iter = iter + 1
  }
  return iter
}

fn getColor(iter) {
  if (iter == maxIter) { return "#000000" }
  let hue = (iter * 5 + t * 30) % 360
  let sat = 80 + math.sin(iter * 0.1) * 20
  let light = 30 + math.min(1, iter / maxIter) * 40
  return \`hsl(\${hue}, \${sat}%, \${light}%)\`
}

fn draw() {
  let zoom = 1.0
  let cx = -0.7
  let cy = 0.0

  for (let py = 0; py < H; py = py + 2) {
    for (let px = 0; px < W; px = px + 2) {
      let x = (px - W / 2) * 3.5 / (W * zoom) + cx
      let y = (py - H / 2) * 2.0 / (H * zoom) + cy
      let iter = mandelbrot(x, y)
      canvas.rect(px, py, 2, 2, getColor(iter))
    }
  }

  canvas.rect(0, 0, W, 28, "#0f172a")
  canvas.text(10, 18, "Mandelbrot Set", 16, "#f1f5f9")
  canvas.text(W - 10, 18, \`maxIter: \${maxIter}\`, 12, "#64748b", "right")
}

timer.loop(draw)
`},{id:"particles-advanced",category:"Advanced",name:"Particle Constellations",description:"Interactive particles that connect with lines when close, creating constellation patterns",code:`// PARTICLE CONSTELLATIONS
// Particles connect with lines when close, creating organic patterns

let W = 500
let H = 400
canvas.setSize(W, H)

let particles = []
let mouseX = W / 2
let mouseY = H / 2

for (let i = 0; i < 60; i++) {
  particles.push({
    x: math.random() * W,
    y: math.random() * H,
    vx: (math.random() - 0.5) * 1.5,
    vy: (math.random() - 0.5) * 1.5,
    r: math.random() * 2 + 1,
  })
}

fn draw() {
  canvas.clear("#0a0a15")

  // Connect nearby particles
  let dist = 120
  for (let i = 0; i < particles.length; i++) {
    let p1 = particles[i]
    for (let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j]
      let dx = p1.x - p2.x
      let dy = p1.y - p2.y
      let d = math.sqrt(dx * dx + dy * dy)
      if (d < dist) {
        let alpha = (dist - d) / dist
        let a = math.floor(alpha * 100)
        canvas.line(p1.x, p1.y, p2.x, p2.y, 1, \`rgba(124, 106, 247, \${alpha})\`)
      }
    }
  }

  // Connect to mouse
  for (let p of particles) {
    let dx = p.x - mouseX
    let dy = p.y - mouseY
    let d = math.sqrt(dx * dx + dy * dy)
    if (d < 150) {
      let alpha = (150 - d) / 150
      canvas.line(p.x, p.y, mouseX, mouseY, 1, \`rgba(233, 69, 96, \${alpha})\`)
    }
  }

  // Draw particles
  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy
    if (p.x < 0) { p.x = W; p.vx = -math.abs(p.vx) }
    if (p.x > W) { p.x = 0; p.vx = math.abs(p.vx) }
    if (p.y < 0) { p.y = H; p.vy = -math.abs(p.vy) }
    if (p.y > H) { p.y = 0; p.vy = math.abs(p.vy) }
    canvas.circle(p.x, p.y, p.r, "#7c6af7")
  }

  canvas.text(10, 20, "Particle Constellations", 14, "#f1f5f9")
  canvas.text(10, 38, "Click to attract particles", 11, "#64748b")
}

canvas.onClick(fn(x, y) {
  mouseX = x
  mouseY = y
  for (let p of particles) {
    let dx = mouseX - p.x
    let dy = mouseY - p.y
    let d = math.sqrt(dx * dx + dy * dy)
    if (d > 0) {
      p.vx = p.vx + (dx / d) * 3
      p.vy = p.vy + (dy / d) * 3
    }
  }
})

timer.loop(draw)
`},{id:"matrix-rain",category:"Advanced",name:"Matrix Digital Rain",description:"Classic falling character effect with fading trails, inspired by The Matrix",code:`// MATRIX DIGITAL RAIN
// Falling characters with fading trails

let W = 500
let H = 400
canvas.setSize(W, H)

let cols = 25
let colW = W / cols
let drops = []
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (let i = 0; i < cols; i++) {
  drops.push({
    y: math.random() * -H,
    speed: math.random() * 2 + 1,
    length: math.floor(math.random() * 10 + 5),
  })
}

fn draw() {
  // Fade effect
  canvas.rect(0, 0, W, H, "rgba(5, 5, 10, 0.15)")

  for (let i = 0; i < cols; i++) {
    let drop = drops[i]
    let x = i * colW + colW / 2

    for (let j = 0; j < drop.length; j++) {
      let y = drop.y - j * 14
      if (y < 0 || y > H) { continue }
      let alpha = 1 - j / drop.length
      let char = chars[math.floor(math.random() * chars.length)]
      let color = j == 0 ? "#f0fdf4" : \`rgba(34, 197, 94, \${alpha})\`
      canvas.text(x, y, char, 12, color, "center")
    }

    drop.y = drop.y + drop.speed
    if (drop.y > H + drop.length * 14) {
      drop.y = -drop.length * 14
      drop.speed = math.random() * 2 + 1
      drop.length = math.floor(math.random() * 10 + 5)
    }
  }
}

timer.loop(draw)
`},{id:"synthwave",category:"Advanced",name:"Synthwave Sunset",description:"Procedural retro scene with animated grid, sun, and mountains",code:`// SYNTHWAVE SUNSET
// Procedural retro scene with animated grid and sun

let W = 500
let H = 400
canvas.setSize(W, H)

let t = 0
let sunY = 200

fn draw() {
  canvas.clear("#0a0a1a")

  // Sky gradient
  for (let y = 0; y < H / 2; y = y + 2) {
    let r = math.floor(10 + y * 0.3)
    let g = math.floor(10 + y * 0.1)
    let b = math.floor(26 + y * 0.3)
    canvas.rect(0, y, W, 2, \`rgb(\${r}, \${g}, \${b})\`)
  }

  // Sun
  let sunGlow = 120 + math.sin(t * 0.5) * 10
  for (let r = sunGlow; r > 0; r = r - 5) {
    let a = (sunGlow - r) / sunGlow * 0.3
    let color = \`rgba(255, 100, 100, \${a})\`
    canvas.circle(W / 2, sunY, r, color)
  }
  canvas.circle(W / 2, sunY, 50, "#ff6b6b")
  canvas.circle(W / 2, sunY, 45, "#ff8e8e")
  canvas.circle(W / 2, sunY, 30, "#ffb4b4")

  // Mountains
  let mountainColor = "#1a1a3e"
  for (let x = 0; x < W; x = x + 2) {
    let h1 = 60 + math.sin(x * 0.02) * 30 + math.sin(x * 0.05) * 15
    let h2 = 40 + math.sin(x * 0.03 + 1) * 20 + math.sin(x * 0.08) * 10
    let h3 = 20 + math.sin(x * 0.04 + 2) * 15
    canvas.rect(x, H - h1, 2, h1, mountainColor)
    canvas.rect(x, H - h2, 2, h2, "#16213e")
    canvas.rect(x, H - h3, 2, h3, "#0f3460")
  }

  // Grid floor
  let horizon = H / 2
  for (let y = horizon; y < H; y = y + 4) {
    let alpha = (y - horizon) / (H - horizon) * 0.3
    canvas.rect(0, y, W, 1, \`rgba(124, 106, 247, \${alpha})\`)
  }
  for (let i = -5; i <= 5; i++) {
    let x = W / 2 + i * 40 + math.sin(t * 2) * i * 5
    let alpha = 0.2 + math.abs(i) * 0.05
    canvas.line(x, horizon, W / 2 + i * 200, H, 1, \`rgba(124, 106, 247, \${alpha})\`)
  }

  t = t + 0.015
}

timer.loop(draw)
`},{id:"breathing",category:"Art",name:"Harmonic Breathing",description:"Relaxing animated breathing guide with pulsing circles and color waves",code:`// HARMONIC BREATHING
// Animated breathing guide with pulsing circles

let W = 400
let H = 400
canvas.setSize(W, H)

let t = 0

fn draw() {
  canvas.clear("#0a0a1a")

  let cx = W / 2
  let cy = H / 2

  // Outer rings
  for (let i = 5; i > 0; i--) {
    let breath = math.sin(t * 0.5) * 0.5 + 0.5
    let r = 40 + i * 25 + breath * 30
    let alpha = (1 - i / 6) * 0.15 + breath * 0.05
    let hue = (t * 20 + i * 60) % 360
    canvas.circle(cx, cy, r, \`hsla(\${hue}, 80%, 60%, \${alpha})\`)
  }

  // Center orb
  let breath = math.sin(t * 0.5) * 0.5 + 0.5
  let r = 30 + breath * 25
  let hue = (t * 30) % 360

  for (let i = 20; i > 0; i = i - 2) {
    let a = (20 - i) / 20 * 0.2
    canvas.circle(cx, cy, r - i * 0.5, \`hsla(\${hue}, 80%, 60%, \${a})\`)
  }

  canvas.circle(cx, cy, r, \`hsl(\${hue}, 80%, 60%)\`)
  canvas.circle(cx, cy, r * 0.7, \`hsl(\${hue}, 90%, 75%)\`)
  canvas.circle(cx - r * 0.2, cy - r * 0.2, r * 0.15, "#ffffff")

  // Text
  let phase = ""
  let phaseTime = (t * 0.5) % (math.PI * 2)
  if (math.sin(phaseTime) > 0) {
    phase = "Breathe In..."
  } else {
    phase = "Breathe Out..."
  }
  canvas.text(cx, cy + 120, phase, 18, "#f1f5f9", "center")
  canvas.text(cx, cy + 145, "Follow the circle's rhythm", 12, "#64748b", "center")

  t = t + 0.02
}

timer.loop(draw)
`},{id:"asteroids",category:"Games",name:"Asteroid Field",description:"Flying through an asteroid field with 3D depth effect and parallax scrolling",code:`// ASTEROID FIELD
// Fly through a 3D asteroid field with depth effect

let W = 500
let H = 400
canvas.setSize(W, H)

let stars = []
let t = 0

for (let i = 0; i < 100; i++) {
  stars.push({
    x: (math.random() - 0.5) * W * 2,
    y: (math.random() - 0.5) * H * 2,
    z: math.random() * 1000,
    size: math.random() * 3 + 1,
  })
}

fn draw() {
  canvas.clear("#000000")

  // Sort by depth
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      if (stars[j].z > stars[i].z) {
        let tmp = stars[i]
        stars[i] = stars[j]
        stars[j] = tmp
      }
    }
  }

  for (let s of stars) {
    s.z = s.z - 4
    if (s.z < 1) {
      s.z = 1000
      s.x = (math.random() - 0.5) * W * 2
      s.y = (math.random() - 0.5) * H * 2
    }

    let scale = 200 / s.z
    let sx = s.x * scale + W / 2
    let sy = s.y * scale + H / 2
    let r = s.size * scale
    let alpha = math.min(1, 200 / s.z)

    if (sx > 0 && sx < W && sy > 0 && sy < H) {
      let color = s.size > 3 ? \`rgba(200, 180, 140, \${alpha})\` : \`rgba(200, 200, 255, \${alpha})\`
      if (s.size > 3) {
        canvas.circle(sx, sy, r, color)
        canvas.circle(sx - r * 0.3, sy - r * 0.3, r * 0.4, \`rgba(160, 140, 100, \${alpha})\`)
      } else {
        canvas.circle(sx, sy, r, color)
      }
    }
  }

  // HUD
  canvas.rect(0, 0, W, 30, "#000000")
  canvas.text(10, 20, "ASTEROID FIELD", 14, "#f1f5f9")
  canvas.text(W - 10, 20, \`Speed: \${math.floor(4 + t * 0.01)}\`, 12, "#64748b", "right")

  t = t + 1
}

timer.loop(draw)
`}],R0=`// Welcome to Viper Invictus!
// A powerful language for games, art, apps, and more.

fn greet(name) {
  return \`Hello, \${name}!\`
}

let languages = ["Python", "JavaScript", "Rust", "Viper Invictus"]

for (let lang of languages) {
  print(greet(lang))
}

// Try exploring the examples in the sidebar!
`;function a3(){const[n,r]=S.useState(!1);return S.useEffect(()=>{const i=()=>r(window.innerWidth<768||"ontouchstart"in window);return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),n}function r3(n){const r={};for(const i of n)r[i.category]||(r[i.category]=[]),r[i.category].push(i);return r}function O0({onSelect:n,activeId:r,onDocsOpen:i,mobile:s,onClose:c}){const d=r3(Jl),[m,p]=S.useState({});return h.jsxs("div",{className:`${s?"w-64":"w-56"} shrink-0 border-r border-white/8 bg-[#09091a] flex flex-col h-full overflow-hidden z-40`,children:[h.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 border-b border-white/8",children:[h.jsx("span",{className:"text-sm font-semibold text-white/90",children:"Examples"}),s&&h.jsx("button",{onClick:c,className:"ml-auto text-white/40 hover:text-white/70",children:h.jsx(ns,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto py-2 overscroll-contain",children:Object.entries(d).map(([x,f])=>h.jsxs("div",{children:[h.jsxs("button",{onClick:()=>p(g=>({...g,[x]:!g[x]})),className:"w-full flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-widest text-white/30 hover:text-white/50 transition-colors",children:[m[x]?h.jsx(Pr,{className:"w-3 h-3"}):h.jsx($w,{className:"w-3 h-3"}),x]}),!m[x]&&f.map(g=>h.jsx("button",{onClick:()=>{n(g),c&&c()},className:`w-full text-left px-4 py-2 text-xs transition-all flex items-start gap-2 ${r===g.id?"bg-[#7c6af7]/15 text-[#b8b0fc] border-r-2 border-[#7c6af7]":"text-white/50 hover:text-white/80 hover:bg-white/5"}`,children:h.jsx("span",{className:"leading-relaxed",children:g.name})},g.id))]},x))}),h.jsx("div",{className:"border-t border-white/8 p-3",children:h.jsxs("button",{onClick:()=>{i(),c&&c()},className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/50 hover:text-white/80 hover:bg-white/8 transition-all",children:[h.jsx(Qa,{className:"w-3.5 h-3.5"}),"Language Docs"]})})]})}function l3(){const[n,r]=S.useState(R0),[i,s]=S.useState(""),[c,d]=S.useState(!1),[m,p]=S.useState([]),[x,f]=S.useState([]),[g,v]=S.useState("console"),[j,C]=S.useState(!1),[E,R]=S.useState(),[k,H]=S.useState(!1),[q,$]=S.useState(!1),[Q,V]=S.useState(!1),[F,ee]=S.useState(!1),P=a3(),re=S.useRef(0),le=S.useRef(null),ve=S.useRef(null),ge=S.useRef(null),fe=S.useCallback((w,B="log")=>{p(Z=>[...Z.slice(-500),{id:re.current++,text:w,kind:B}])},[]),K=S.useCallback(()=>{le.current?.stop(),le.current=null,ge.current!==null&&(cancelAnimationFrame(ge.current),ge.current=null),C(!1)},[]),ae=S.useCallback(()=>{if(F){M();return}K(),p([]),f([{cmd:"clear",args:["#050510"]}]),R(void 0),$(!1);const w=[];let B=!1;const Z=()=>{if(w.length>0){const ie=[...w];w.length=0,f(ie)}B=!1},te={output:(ie,ce)=>fe(ie,ce??"log"),draw:ie=>{if(w.push(ie),ie.cmd==="setSize"){$(!0),v("canvas");const ce=ie.args[0],Pe=ie.args[1];ve.current?.setSize(ce,Pe)}B||(B=!0,requestAnimationFrame(Z))},clearCanvas:()=>f([{cmd:"clear",args:["#050510"]}]),clearConsole:()=>p([]),getInput:ie=>window.prompt(ie)??"",setTitle:()=>{},getTime:()=>performance.now(),random:()=>Math.random(),scheduleFrame:ie=>{ge.current=requestAnimationFrame(ie)},cancelFrames:()=>{ge.current!==null&&(cancelAnimationFrame(ge.current),ge.current=null)}},oe=new Qx(te,c);le.current=oe,C(!0),fe("▶ Running...","system"),setTimeout(()=>{const ie=oe.execute(n);if(ie.success)oe.getKeyHandlers().length>0||q||(fe("✓ Done","system"),C(!1));else{if(ie.errors&&ie.errors.length>0){fe("═══════════════════════════════════════","system"),fe(`  Found ${ie.errors.length} error${ie.errors.length>1?"s":""}`,"error"),fe("═══════════════════════════════════════","system");for(const ce of ie.errors)fe(`  ${ce.message}${ce.line?` (line ${ce.line})`:""}`,"error");fe("═══════════════════════════════════════","system"),R(ie.errors[0].line)}else fe(`Error: ${ie.error}${ie.errorLine?` (line ${ie.errorLine})`:""}`,"error"),R(ie.errorLine);C(!1),le.current=null}},10)},[n,fe,K,q,F]),M=S.useCallback(async()=>{K(),p([]),f([]),R(void 0),$(!1),C(!0),fe("▶ Running on backend...","system");try{const w=window.location.origin,B=await fetch(`${w}/api/viper/run`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,trusted:c})});if(!B.ok){fe(`Backend error: ${B.status} ${B.statusText}`,"error"),C(!1);return}const Z=await B.json();if(Z.success){for(const te of Z.output||[]){const oe=te.match(/^\[(\w+)\]\s(.+)$/);oe?fe(oe[2],oe[1]):fe(te,"log")}fe("✓ Done (backend)","system")}else if(Z.errors&&Z.errors.length>0)for(const te of Z.errors)fe(`  ${te.message}${te.line?` (line ${te.line})`:""}`,"error");else fe(`Error: ${Z.error}${Z.errorLine?` (line ${Z.errorLine})`:""}`,"error");C(!1)}catch(w){fe(`Network error: ${w instanceof Error?w.message:String(w)}`,"error"),C(!1)}},[n,fe,K,c]),W=S.useCallback(w=>{if(!le.current)return;const B=w.currentTarget.querySelector("canvas");if(!B)return;const Z=B.getBoundingClientRect(),te=w.clientX-Z.left,oe=w.clientY-Z.top;for(const ie of le.current.getClickHandlers())ie(te,oe)},[]);S.useEffect(()=>{const w=B=>{if(le.current)for(const Z of le.current.getKeyHandlers())Z(B.key)};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]),S.useEffect(()=>()=>K(),[K]);const J=w=>{K(),r(w.code),s(w.id),d(!0),p([]),f([]),$(!1),R(void 0)},pe={fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",fontLigatures:!0,minimap:{enabled:!1},lineNumbers:"on",glyphMargin:!0,folding:!0,lineDecorationsWidth:8,renderLineHighlight:"all",scrollBeyondLastLine:!1,padding:{top:16,bottom:16},cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on",smoothScrolling:!0,bracketPairColorization:{enabled:!0},wordWrap:"on",tabSize:2,automaticLayout:!0,theme:"viper-dark",scrollbar:{alwaysConsumeMouseWheel:!1,vertical:"visible",horizontal:"visible",verticalScrollbarSize:8,horizontalScrollbarSize:8}};return h.jsxs("div",{className:"flex min-h-screen bg-[#08081a] text-white md:flex-row flex-col max-md:min-h-[100dvh]",children:[h.jsx("div",{className:"hidden md:flex",children:h.jsx(O0,{onSelect:J,activeId:i,onDocsOpen:()=>H(!0)})}),Q&&h.jsx("div",{className:"md:hidden fixed inset-0 z-50 flex",onClick:()=>V(!1),children:h.jsx("div",{className:"flex",onClick:w=>w.stopPropagation(),children:h.jsx(O0,{onSelect:J,activeId:i,onDocsOpen:()=>H(!0),mobile:!0,onClose:()=>V(!1)})})}),h.jsxs("div",{className:"flex flex-col flex-1 overflow-hidden",children:[h.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-[#09091a] shrink-0 flex-wrap",children:[h.jsx("button",{onClick:()=>V(!0),className:"md:hidden text-white/50 hover:text-white/80 p-1 -ml-1",children:h.jsx(Bg,{className:"w-5 h-5"})}),h.jsx("div",{className:"flex-1"}),h.jsxs("a",{href:"https://github.com/devinaiisthebest272829-debug/viper-invictus/archive/refs/heads/main.zip",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border bg-white/5 text-white/40 border-white/10 hover:bg-white/8 hover:text-white/60",title:"Download Viper CLI — run Viper scripts, build to FPGA/HDL, and use vpm",children:[h.jsx(Jw,{className:"w-3.5 h-3.5"}),"CLI"]}),h.jsxs("button",{onClick:()=>ee(!F),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${F?"bg-[#7c6af7]/20 text-[#b8b0fc] border-[#7c6af7]/40":"bg-white/5 text-white/40 border-white/10 hover:bg-white/8 hover:text-white/60"}`,title:F?"Running on backend server":"Running in browser",children:[F?h.jsx(Li,{className:"w-3.5 h-3.5"}):h.jsx(y2,{className:"w-3.5 h-3.5"}),F?"Backend":"Browser"]}),h.jsxs("button",{onClick:ae,disabled:j,className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#7c6af7] hover:bg-[#8d7ff8] text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[h.jsx(bn,{className:"w-3.5 h-3.5"}),"Run"]}),j&&h.jsxs("button",{onClick:K,className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm font-medium transition-all border border-red-500/30",children:[h.jsx(qg,{className:"w-3.5 h-3.5"}),"Stop"]}),h.jsx("button",{onClick:()=>{r(R0),s(""),d(!1),K(),p([]),f([]),R(void 0),$(!1)},className:"p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/8 transition-all",title:"Reset",children:h.jsx(eo,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"flex flex-1 overflow-hidden flex-col md:flex-row",children:[h.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden border-b md:border-b-0 md:border-r border-white/8 min-h-0 md:min-h-0 max-md:min-h-[50vh]",children:[h.jsxs("div",{className:"flex items-center px-4 py-1.5 border-b border-white/8 bg-[#09091a] shrink-0",children:[h.jsx("span",{className:"text-xs text-white/30 font-mono",children:"main.vi"}),j&&h.jsxs("div",{className:"ml-3 flex items-center gap-1.5",children:[h.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),h.jsx("span",{className:"text-xs text-emerald-400",children:"Running"})]})]}),h.jsx("div",{className:"flex-1 overflow-hidden min-h-0",children:P?h.jsx("textarea",{value:n,onChange:w=>{r(w.target.value),d(!1)},className:"w-full h-full bg-[#09091a] text-[#e2e8f0] font-mono text-sm p-4 resize-none border-none outline-none",style:{fontFamily:"'JetBrains Mono', monospace",lineHeight:1.6,fontSize:13}}):h.jsx("div",{className:"h-full overflow-hidden",children:h.jsx(wN,{language:"javascript",value:n,onChange:w=>{r(w??""),d(!1)},options:pe,beforeMount:w=>{w.editor.defineTheme("viper-dark",{base:"vs-dark",inherit:!0,rules:[{token:"keyword",foreground:"a78bfa"},{token:"string",foreground:"86efac"},{token:"number",foreground:"fbbf24"},{token:"comment",foreground:"4a5568",fontStyle:"italic"},{token:"identifier",foreground:"e2e8f0"}],colors:{"editor.background":"#09091a","editor.foreground":"#e2e8f0","editor.lineHighlightBackground":"#ffffff08","editorLineNumber.foreground":"#334155","editorLineNumber.activeForeground":"#7c6af7","editor.selectionBackground":"#7c6af720","editor.findMatchBackground":"#7c6af740","editorCursor.foreground":"#7c6af7","editorWidget.background":"#0f0f1e","editorSuggestWidget.background":"#0f0f1e","editorSuggestWidget.border":"#ffffff15","scrollbarSlider.background":"#ffffff10","scrollbarSlider.hoverBackground":"#ffffff18"}})},onMount:(w,B)=>{B.editor.setTheme("viper-dark"),w.addCommand(B.KeyMod.CtrlCmd|B.KeyCode.Enter,()=>ae())}})})}),E&&h.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-red-900/20 border-t border-red-500/30 text-xs text-red-400 shrink-0",children:[h.jsx(ns,{className:"w-3.5 h-3.5 cursor-pointer",onClick:()=>R(void 0)}),"Error on line ",E]})]}),h.jsxs("div",{className:"w-full md:w-96 flex flex-col shrink-0 overflow-hidden h-48 md:h-auto max-md:overflow-y-auto max-md:min-h-[40vh]",children:[h.jsxs("div",{className:"flex border-b border-white/8 bg-[#09091a] shrink-0",children:[h.jsxs("button",{onClick:()=>v("console"),className:`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${g==="console"?"text-[#b8b0fc] border-[#7c6af7]":"text-white/40 border-transparent hover:text-white/60"}`,children:[h.jsx(wa,{className:"w-3.5 h-3.5"}),"Console"]}),h.jsxs("button",{onClick:()=>v("canvas"),className:`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${g==="canvas"?"text-[#b8b0fc] border-[#7c6af7]":"text-white/40 border-transparent hover:text-white/60"}`,children:[h.jsx(mf,{className:"w-3.5 h-3.5"}),"Canvas",q&&h.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1"})]})]}),h.jsx("div",{className:`flex-1 overflow-hidden ${g!=="console"?"hidden":""}`,children:h.jsx(Fx,{lines:m})}),h.jsx("div",{className:`flex-1 overflow-hidden ${g!=="canvas"?"hidden":""}`,onClick:W,children:h.jsx(Of,{ref:ve,commands:x})})]})]})]}),k&&h.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-8",onClick:()=>H(!1),children:h.jsxs("div",{className:"bg-[#08081a] rounded-2xl border border-white/15 w-full max-w-2xl max-h-[80vh] overflow-y-auto",onClick:w=>w.stopPropagation(),children:[h.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-white/10",children:[h.jsx("h2",{className:"font-bold text-lg",children:"Language Docs"}),h.jsx("button",{onClick:()=>H(!1),className:"text-white/40 hover:text-white/70 transition-colors",children:h.jsx(ns,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"p-6 text-sm text-white/60 leading-relaxed",children:[h.jsx("p",{className:"mb-4",children:"Use the sidebar examples to explore the language, or open the full documentation by clicking the link below."}),h.jsx(Qe,{href:"/docs",className:"text-[#b8b0fc] hover:underline",children:"Open Full Docs"})]})]})})]})}const Br=[{id:"hello",title:"Hello, World!",description:"Your very first Viper Invictus program",difficulty:"Beginner",content:"Every programming journey starts with a simple greeting. In Viper Invictus, we use `print()` to display text. The text goes inside double quotes. Try changing the message to say your name!",code:`print("Hello, World!")
print("Welcome to Viper Invictus!")

let name = "Learner"
print("Hello, " + name + "!")`,expectedOutput:`Hello, World!
Welcome to Viper Invictus!
Hello, Learner!`,tips:["Text inside quotes is called a ‘string’","You can combine strings with the + operator","Try changing the name variable to your own name"],nextLesson:"variables"},{id:"variables",title:"Variables & Types",description:"Storing and using data",difficulty:"Beginner",content:"Variables are like labeled boxes that store information. Use `let` for values that change, `const` for values that never change, and `var` for function-scoped variables. Viper Invictus has six types: numbers, strings, booleans, null, arrays, and objects.",code:`let age = 25
const NAME = "Viper"
let isFun = true
let scores = [85, 92, 78]
let person = { name: "Ada", role: "Developer" }

print("Name: " + NAME)
print("Age: " + age)
print("Scores: " + scores)
print("Role: " + person.role)`,expectedOutput:`Name: Viper
Age: 25
Scores: [85,92,78]
Role: Developer`,tips:["const means the value cannot be reassigned","Arrays are ordered lists of values","Objects store data as key-value pairs"],nextLesson:"math"},{id:"math",title:"Math Operations",description:"Numbers, calculations, and the math library",difficulty:"Beginner",content:"Viper Invictus supports all standard math: +, -, *, /, and % (modulo). The `math` object gives you access to constants like PI and E, plus functions like sqrt, sin, cos, and random. Try generating a random number!",code:`let a = 10
let b = 3

print("Addition: " + (a + b))
print("Subtraction: " + (a - b))
print("Multiplication: " + (a * b))
print("Division: " + (a / b))
print("Modulo: " + (a % b))

print("Square root: " + math.sqrt(16))
print("Random: " + math.random())
print("PI: " + math.PI)`,expectedOutput:`Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3.333...
Modulo: 1
Square root: 4
Random: (random number)
PI: 3.14159...`,tips:["Use parentheses around math inside string concatenation","math.random() gives a number between 0 and 1","math.floor() rounds down to the nearest integer"],nextLesson:"strings"},{id:"strings",title:"String Magic",description:"Working with text",difficulty:"Beginner",content:"Strings are more than just text. You can transform them, search inside them, split them apart, and combine them with template literals. Template literals use backticks and can embed variables with ${}.",code:`let greeting = "Hello, Viper Invictus!"

print("Length: " + greeting.length)
print("Upper: " + greeting.upper())
print("Lower: " + greeting.lower())
print("Contains 'Viper': " + greeting.contains("Viper"))
print("Slice: " + greeting.slice(7, 12))

let name = "World"
let fancy = \`Hello, ${name}! 2 + 2 = 4\`
print(fancy)`,expectedOutput:`Length: 22
Upper: HELLO, VIPER INVICTUS!
Lower: hello, viper invictus!
Contains 'Viper': true
Slice: Viper
Hello, World! 2 + 2 = 4`,tips:["Template literals use backticks (`) not quotes","${expression} inside templates evaluates the expression","slice(start, end) extracts a portion of the string"],nextLesson:"functions"},{id:"functions",title:"Functions",description:"Reusable blocks of code",difficulty:"Beginner",content:"Functions let you package code into reusable blocks. Define them with `fn`, give them parameters, and return values. Functions are first-class: you can store them in variables, pass them to other functions, and return them from functions.",code:`fn greet(name) {
  return "Hello, " + name + "!"
}

print(greet("Alice"))
print(greet("Bob"))

fn double(x) { return x * 2 }
fn triple(x) { return x * 3 }

fn apply(fn, value) {
  return fn(value)
}

print(apply(double, 5))
print(apply(triple, 5))

fn makeAdder(n) {
  return fn(x) { return x + n }
}
let add10 = makeAdder(10)
print(add10(7))`,expectedOutput:`Hello, Alice!
Hello, Bob!
10
15
17`,tips:["Functions are values - you can pass them around","A function that returns another function is called a factory","Keep functions small and focused on one task"],nextLesson:"control"},{id:"control",title:"Control Flow",description:"Making decisions and repeating actions",difficulty:"Beginner",content:"Programs need to make decisions. Use `if` for conditions, `while` for loops that keep going while a condition is true, and `for` for counting loops. `for..of` iterates arrays, and `for..in` iterates object keys.",code:`let score = 85

if (score >= 90) {
  print("Grade: A")
} else if (score >= 80) {
  print("Grade: B")
} else {
  print("Keep practicing!")
}

let i = 0
while (i < 3) {
  print("While: " + i)
  i++
}

for (let j = 0; j < 3; j++) {
  print("For: " + j)
}

let fruits = ["apple", "banana", "cherry"]
for (let fruit of fruits) {
  print("Fruit: " + fruit)
}`,expectedOutput:`Grade: B
While: 0
While: 1
While: 2
For: 0
For: 1
For: 2
Fruit: apple
Fruit: banana
Fruit: cherry`,tips:["i++ is shorthand for i = i + 1","for..of is the easiest way to loop through arrays","for..in loops through the keys of an object"],nextLesson:"arrays"},{id:"arrays",title:"Arrays & Methods",description:"Lists of data and transformations",difficulty:"Intermediate",content:"Arrays are ordered lists. You can add/remove items, transform them with `map`, filter with `filter`, reduce to a single value with `reduce`, and more. These methods are powerful tools for data processing.",code:`let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let doubled = nums.map(fn(x) { return x * 2 })
print("Doubled: " + doubled)

let evens = nums.filter(fn(x) { return x % 2 == 0 })
print("Evens: " + evens)

let sum = nums.reduce(fn(acc, x) { return acc + x }, 0)
print("Sum: " + sum)

let firstBig = nums.find(fn(x) { return x > 5 })
print("First > 5: " + firstBig)

let sorted = [3, 1, 4, 1, 5].sort()
print("Sorted: " + sorted)

nums.push(11)
print("After push: " + nums.length + " items")`,expectedOutput:`Doubled: [2,4,6,8,10,12,14,16,18,20]
Evens: [2,4,6,8,10]
Sum: 55
First > 5: 6
Sorted: [1,1,3,4,5]
After push: 11 items`,tips:["map transforms each element and returns a new array","filter returns only elements that pass the test","reduce combines all elements into a single value"],nextLesson:"classes"},{id:"classes",title:"Classes & Objects",description:"Object-oriented programming",difficulty:"Intermediate",content:"Classes are blueprints for objects. Use `class` to define one, `init` as the constructor, and `self` to refer to the current object. Inheritance with `<` lets you create specialized versions of existing classes.",code:`class Animal {
  init(name) {
    self.name = name
    self.energy = 100
  }
  speak() {
    return self.name + " makes a sound"
  }
}

class Dog < Animal {
  init(name) {
    self.name = name
    self.energy = 100
    self.tricks = []
  }
  speak() {
    return self.name + " says Woof!"
  }
  learn(trick) {
    self.tricks.push(trick)
  }
}

let buddy = new Dog("Buddy")
print(buddy.speak())
buddy.learn("sit")
buddy.learn("fetch")
print("Tricks: " + buddy.tricks)`,expectedOutput:`Buddy says Woof!
Tricks: [sit,fetch]`,tips:["Use < for inheritance: class Child < Parent","self always refers to the current object instance","override parent methods by defining them again"],nextLesson:"canvas"},{id:"canvas",title:"Canvas Graphics",description:"Drawing and visual output",difficulty:"Intermediate",content:"The canvas is your visual playground. Set its size, draw shapes, add text, and handle clicks. Combine canvas with timer.loop() to create animations and games.",code:`canvas.setSize(400, 300)
canvas.clear("#0f172a")

// Draw a house
canvas.rect(100, 150, 200, 120, "#8b5cf6")
canvas.triangle(100, 150, 300, 150, 200, 80, "#ef4444")
canvas.rect(180, 200, 40, 70, "#1e293b")
canvas.circle(120, 180, 15, "#fbbf24")
canvas.circle(280, 180, 15, "#fbbf24")

// Text
canvas.text(200, 260, "My First Drawing", 16, "#fff", "center")

// Handle clicks
canvas.onClick(fn(x, y) {
  print("Clicked at: " + x + ", " + y)
})`,expectedOutput:`(canvas drawing)
Clicked at: (coordinates)`,tips:["canvas.clear() fills the entire canvas with a color","Coordinates start at (0,0) in the top-left corner","onClick gives you the (x,y) position of the click"],nextLesson:"animation"},{id:"animation",title:"Animation & Games",description:"Bringing things to life",difficulty:"Advanced",content:"Use `timer.loop()` to run a function every frame (~60 times per second). This is the heart of animation and game development. Update state, then draw it. The canvas handles the rest.",code:`canvas.setSize(400, 300)
let x = 0
let speed = 3

fn draw() {
  canvas.clear("#0f172a")
  canvas.circle(x, 150, 20, "#7c6af7")
  canvas.text(10, 20, "Bouncing Ball", 14, "#fff")

  x = x + speed
  if (x > 380 || x < 20) {
    speed = -speed
  }
}

timer.loop(draw)`,expectedOutput:"(animated bouncing ball)",tips:["timer.loop runs your function about 60 times per second","Always clear the canvas before drawing each frame","Use math.sin() and math.cos() for circular motion"],nextLesson:null}];function s3(n){return Br.find(r=>r.id===n)}function i3(n){switch(n){case"Beginner":return"bg-emerald-500/20 text-emerald-400 border-emerald-500/30";case"Intermediate":return"bg-yellow-500/20 text-yellow-400 border-yellow-500/30";case"Advanced":return"bg-red-500/20 text-red-400 border-red-500/30";default:return"bg-white/10 text-white/60 border-white/20"}}function k0(){const[n,r]=Yi(),[i,s]=S.useState(new Set),[c,d]=S.useState(!1),[m,p]=S.useState("code"),x=n.split("/learn/")[1]||"hello",f=s3(x),g=Br.findIndex(E=>E.id===x),v=(i.size/Br.length*100).toFixed(0),j=()=>{s(E=>new Set([...E,x])),d(!0)},C=E=>{r(`/learn/${E}`),d(!1),p("code")};return h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"mb-8",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsxs("h1",{className:"text-2xl font-bold flex items-center gap-2",children:[h.jsx("img",{src:"/viper-logo.png",alt:"Viper Invictus",className:"w-7 h-7 rounded-lg"}),"Learn Viper Invictus"]}),h.jsxs("span",{className:"text-sm text-white/40",children:[i.size," / ",Br.length," lessons completed"]})]}),h.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-[#7c6af7] transition-all duration-500",style:{width:`${v}%`}})})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[h.jsxs("div",{className:"lg:col-span-3 space-y-2",children:[h.jsx("div",{className:"text-xs text-white/30 uppercase tracking-wider font-medium mb-2",children:"Lessons"}),Br.map((E,R)=>{const k=E.id===x,H=i.has(E.id);return h.jsxs("button",{onClick:()=>C(E.id),className:`w-full text-left flex items-start gap-3 px-3 py-3 rounded-lg transition-all text-sm ${k?"bg-[#7c6af7]/15 border border-[#7c6af7]/30 text-white":"bg-white/5 border border-transparent hover:bg-white/8 text-white/60"}`,children:[h.jsx("span",{className:"shrink-0 mt-0.5",children:H?h.jsx(qr,{className:"w-4 h-4 text-emerald-400"}):k?h.jsx(Fu,{className:"w-4 h-4 text-[#b8b0fc]"}):h.jsx(Fu,{className:"w-4 h-4 text-white/20"})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("div",{className:"font-medium text-xs",children:E.title}),h.jsx("div",{className:"text-[10px] text-white/30 mt-0.5",children:E.difficulty})]}),k&&h.jsx(Pr,{className:"w-3 h-3 shrink-0 mt-0.5"})]},E.id)})]}),h.jsx("div",{className:"lg:col-span-9 space-y-6",children:f?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"flex items-start justify-between gap-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[h.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded border ${i3(f.difficulty)}`,children:f.difficulty}),h.jsxs("span",{className:"text-xs text-white/30",children:["Lesson ",g+1," of ",Br.length]})]}),h.jsx("h2",{className:"text-xl font-bold",children:f.title}),h.jsx("p",{className:"text-sm text-white/50 mt-1",children:f.description})]}),i.has(f.id)&&h.jsxs("span",{className:"flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20",children:[h.jsx(qr,{className:"w-3 h-3"})," Completed"]})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-5",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[h.jsx(Qa,{className:"w-4 h-4 text-[#7c6af7]"}),h.jsx("span",{className:"text-sm font-medium text-white/80",children:"Explanation"})]}),h.jsx("p",{className:"text-sm text-white/60 leading-relaxed",children:f.content})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl overflow-hidden",children:[h.jsxs("div",{className:"flex border-b border-white/10",children:[h.jsxs("button",{onClick:()=>p("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all ${m==="code"?"text-[#b8b0fc] border-b-2 border-[#7c6af7]":"text-white/40 hover:text-white/60"}`,children:[h.jsx(o3,{className:"w-4 h-4"})," Code"]}),h.jsxs("button",{onClick:()=>p("output"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all ${m==="output"?"text-[#b8b0fc] border-b-2 border-[#7c6af7]":"text-white/40 hover:text-white/60"}`,children:[h.jsx(bn,{className:"w-4 h-4"})," Expected Output"]})]}),h.jsx("div",{className:"p-4",children:m==="code"?h.jsx("pre",{className:"text-sm font-mono text-emerald-300 leading-relaxed overflow-x-auto",children:f.code}):h.jsx("div",{className:"text-sm font-mono text-white/60 leading-relaxed whitespace-pre-wrap",children:f.expectedOutput})})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-5",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[h.jsx(Hg,{className:"w-4 h-4 text-yellow-400"}),h.jsx("span",{className:"text-sm font-medium text-white/80",children:"Pro Tips"})]}),h.jsx("ul",{className:"space-y-2",children:f.tips.map((E,R)=>h.jsxs("li",{className:"flex items-start gap-2 text-sm text-white/60",children:[h.jsx("span",{className:"text-[#7c6af7] mt-0.5",children:"•"}),E]},R))})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[i.has(f.id)?h.jsxs("button",{onClick:()=>s(E=>{const R=new Set(E);return R.delete(f.id),R}),className:"flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all",children:[h.jsx(eo,{className:"w-4 h-4"})," Reset"]}):h.jsxs("button",{onClick:j,className:"flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#7c6af7] hover:bg-[#8d7ff8] text-white text-sm font-medium transition-colors",children:[h.jsx(qr,{className:"w-4 h-4"})," Mark Complete"]}),h.jsxs(Qe,{href:"/",className:"flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all border border-white/10",children:[h.jsx(bn,{className:"w-4 h-4"})," Try in IDE"]}),f.nextLesson&&h.jsxs("button",{onClick:()=>C(f.nextLesson),className:"flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-sm transition-all border border-white/10 ml-auto",children:["Next Lesson ",h.jsx(Dg,{className:"w-4 h-4"})]})]})]}):h.jsx("div",{className:"text-center py-12",children:h.jsx("p",{className:"text-white/40",children:"Lesson not found"})})})]})]})}function o3({className:n}){return h.jsxs("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("polyline",{points:"16 18 22 12 16 6"}),h.jsx("polyline",{points:"8 6 2 12 8 18"})]})}const Xa=[{id:"intro",title:"Getting Started",category:"Basics",content:"Viper Invictus is a browser-based programming language. Everything runs in the IDE, no installation needed. The language is designed to be familiar: it looks like JavaScript but with cleaner syntax and built-in features for graphics and animation.",code:`// Your first program
print("Hello, World!")

let name = "Developer"
print(\`Welcome, \${name}!\`)`},{id:"variables",title:"Variables & Types",category:"Basics",content:"Three ways to declare variables: `let` (mutable), `const` (immutable), and `var` (function-scoped). Six built-in types: number, string, boolean, null, array, and object.",code:`let count = 0          // mutable
const MAX = 100        // immutable
var name = "Viper"     // function-scoped

// Types
let n = 42             // number
let s = "hello"        // string
let b = true           // boolean
let nothing = null     // null
let arr = [1, 2, 3]    // array
let obj = { x: 10 }    // object`,apiReference:[{name:"typeof",signature:"typeof(value)",desc:"Returns the type as a string: 'number', 'string', 'boolean', 'null', 'array', 'object', or 'function'"}]},{id:"operators",title:"Operators",category:"Basics",content:"Standard arithmetic, comparison, and logical operators. All the ones you expect from JavaScript work here too.",code:`// Arithmetic
let a = 10 + 5   // 15
let b = 10 - 5   // 5
let c = 10 * 5   // 50
let d = 10 / 5   // 2
let e = 10 % 3   // 1
let f = 2 ** 3   // 8 (power)

// Comparison
a == b    // equal
a != b    // not equal
a > b     // greater than
a < b     // less than
a >= b    // greater or equal
a <= b    // less or equal

// Logical
true && false   // false
true || false   // true
!true           // false

// Compound assignment
a += 5
a -= 5
a *= 2
a /= 2
a++
a--`},{id:"functions",title:"Functions",category:"Basics",content:"Functions are first-class values. Define them with `fn`, pass them around, return them from other functions, and store them in variables.",code:`// Named function
fn add(a, b) {
  return a + b
}

// Anonymous / stored
let square = fn(x) { return x * x }

// Higher-order
fn applyTwice(f, x) {
  return f(f(x))
}

// Closure
fn makeCounter(start) {
  let count = start
  return fn() {
    count = count + 1
    return count
  }
}`,apiReference:[{name:"fn",signature:"fn name(params) { ... }",desc:"Define a function. The `fn` keyword starts the declaration."},{name:"return",signature:"return value",desc:"Exit the function and return a value."}]},{id:"control",title:"Control Flow",category:"Basics",content:"If/else for decisions, while/for for loops, for..of for arrays, for..in for objects. Standard ternary operator too.",code:`// if / else
if (x > 20) {
  print("big")
} else if (x > 10) {
  print("medium")
} else {
  print("small")
}

// while loop
let i = 0
while (i < 5) {
  print(i)
  i++
}

// for loop
for (let j = 0; j < 5; j++) {
  print(j)
}

// for..of (array)
let arr = ["a", "b", "c"]
for (let item of arr) {
  print(item)
}

// for..in (object keys)
let obj = { x: 1, y: 2 }
for (let key in obj) {
  print(key + ": " + obj[key])
}

// Ternary
let result = x > 10 ? "big" : "small"`},{id:"classes",title:"Classes & OOP",category:"Basics",content:"Object-oriented programming with classes, constructors (init), and inheritance using `<`. Use `self` to refer to the current instance.",code:`class Shape {
  init(color) {
    self.color = color
  }
  describe() {
    return \`A \${self.color} shape\`
  }
}

// Inheritance
class Circle < Shape {
  init(color, radius) {
    self.color = color
    self.radius = radius
  }
  area() {
    return math.PI * self.radius ** 2
  }
}

let c = new Circle("red", 5)
print(c.describe())
print(c.area())`,apiReference:[{name:"class",signature:"class Name { ... }",desc:"Define a class."},{name:"init",signature:"init(params) { ... }",desc:"Constructor called when using `new`."},{name:"new",signature:"new ClassName(args)",desc:"Create an instance of a class."},{name:"self",signature:"self.property",desc:"Reference to the current instance."},{name:"<",signature:"class Child < Parent { ... }",desc:"Inheritance operator."}]},{id:"arrays",title:"Arrays",category:"Collections",content:"Dynamic arrays with a rich set of methods for transformation, searching, and iteration.",code:`let arr = [1, 2, 3, 4, 5]

// Mutation
arr.push(6)       // add to end
arr.pop()         // remove from end
arr.unshift(0)    // add to front
arr.shift()       // remove from front
arr.reverse()

// Transformation
arr.map(fn(x) { return x * 2 })      // transform each
arr.filter(fn(x) { return x > 2 })   // keep matching
arr.reduce(fn(a, b) { return a + b }, 0)  // combine to one
arr.find(fn(x) { return x > 3 })   // first match
arr.sort()                           // sort ascending
arr.slice(1, 4)                      // extract subarray

// Query
arr.indexOf(3)       // first index
arr.includes(3)      // true/false
arr.some(fn(x) { return x > 4 })   // any match?
arr.every(fn(x) { return x > 0 })  // all match?
arr.length           // number of elements`,apiReference:[{name:"push",signature:"array.push(value)",desc:"Add value to the end."},{name:"pop",signature:"array.pop()",desc:"Remove and return the last element."},{name:"shift",signature:"array.shift()",desc:"Remove and return the first element."},{name:"unshift",signature:"array.unshift(value)",desc:"Add value to the beginning."},{name:"map",signature:"array.map(fn)",desc:"Transform each element, return new array."},{name:"filter",signature:"array.filter(fn)",desc:"Keep only elements where fn returns true."},{name:"reduce",signature:"array.reduce(fn, initial)",desc:"Combine all elements into a single value."},{name:"find",signature:"array.find(fn)",desc:"Return first element where fn returns true."},{name:"sort",signature:"array.sort()",desc:"Sort in ascending order."},{name:"slice",signature:"array.slice(start, end)",desc:"Extract a portion of the array."},{name:"splice",signature:"array.splice(start, count)",desc:"Remove or replace elements at index."},{name:"concat",signature:"array.concat(other)",desc:"Join two arrays."},{name:"flat",signature:"array.flat()",desc:"Flatten nested arrays by one level."},{name:"forEach",signature:"array.forEach(fn)",desc:"Execute fn for each element."},{name:"findIndex",signature:"array.findIndex(fn)",desc:"Return first index where fn returns true."},{name:"reverse",signature:"array.reverse()",desc:"Reverse the array in place."},{name:"join",signature:"array.join(separator)",desc:"Join elements into a string."},{name:"indexOf",signature:"array.indexOf(value)",desc:"Return first index of value, or -1."},{name:"includes",signature:"array.includes(value)",desc:"Return true if value exists."},{name:"some",signature:"array.some(fn)",desc:"Return true if any element passes."},{name:"every",signature:"array.every(fn)",desc:"Return true if all elements pass."},{name:"length",signature:"array.length",desc:"Number of elements."}]},{id:"strings",title:"Strings",category:"Collections",content:"String manipulation with methods for transformation, searching, and extraction. Template literals with backticks.",code:`let s = "Hello, Viper!"

// Properties
s.length              // 15

// Methods
s.upper()             // "HELLO, VIPER!"
s.lower()             // "hello, viper!"
s.trim()              // removes whitespace
s.contains("Viper")   // true
s.startsWith("Hello")   // true
s.endsWith("!")        // true
s.replace("Hello", "Hi")  // "Hi, Viper!"
s.split(", ")          // ["Hello", "Viper!"]
s.slice(7, 12)        // "Viper"
s.indexOf("V")         // 0

// Template literals
let name = "World"
let msg = \`Hello, \${name}! 2 + 2 = \${2 + 2}\``,apiReference:[{name:"length",signature:"string.length",desc:"Number of characters."},{name:"upper",signature:"string.upper()",desc:"Convert to uppercase."},{name:"lower",signature:"string.lower()",desc:"Convert to lowercase."},{name:"trim",signature:"string.trim()",desc:"Remove leading/trailing whitespace."},{name:"trimStart",signature:"string.trimStart()",desc:"Remove leading whitespace."},{name:"trimEnd",signature:"string.trimEnd()",desc:"Remove trailing whitespace."},{name:"contains",signature:"string.contains(substring)",desc:"Return true if substring is found."},{name:"startsWith",signature:"string.startsWith(substring)",desc:"Return true if string starts with substring."},{name:"endsWith",signature:"string.endsWith(substring)",desc:"Return true if string ends with substring."},{name:"replace",signature:"string.replace(old, new)",desc:"Replace first occurrence of old with new."},{name:"split",signature:"string.split(separator)",desc:"Split into array by separator."},{name:"slice",signature:"string.slice(start, end)",desc:"Extract substring from start to end."},{name:"substring",signature:"string.substring(start, end)",desc:"Extract substring from start to end."},{name:"repeat",signature:"string.repeat(count)",desc:"Repeat string count times."},{name:"padStart",signature:"string.padStart(len, pad)",desc:"Pad string to length from start."},{name:"padEnd",signature:"string.padEnd(len, pad)",desc:"Pad string to length from end."},{name:"char",signature:"string.char(index)",desc:"Return character at index."},{name:"charCode",signature:"string.charCode(index)",desc:"Return character code at index."},{name:"toNumber",signature:"string.toNumber()",desc:"Convert string to number."},{name:"toBool",signature:"string.toBool()",desc:"Convert string to boolean."},{name:"indexOf",signature:"string.indexOf(substring)",desc:"Return first index of substring, or -1."}]},{id:"math",title:"Math Library",category:"Standard Library",content:"The `math` object provides constants and functions for mathematical operations.",code:`math.PI              // 3.14159...
math.E               // 2.71828...
math.sqrt(16)        // 4
math.abs(-5)         // 5
math.floor(3.7)      // 3
math.ceil(3.2)       // 4
math.round(3.5)      // 4
math.pow(2, 10)      // 1024
math.log(2.718)      // ~1
math.sin(math.PI/2)  // 1
math.cos(0)          // 1
math.tan(0)          // 0
math.random()        // 0.0 to 1.0
math.randInt(1, 6)   // 1 to 6 (inclusive)
math.max(1, 5, 3)    // 5
math.min(1, 5, 3)    // 1
math.clamp(15, 0, 10) // 10 (constrain to range)
math.lerp(0, 100, 0.5) // 50 (linear interpolation)
math.floor(math.random() * 10)  // 0 to 9`,apiReference:[{name:"PI",signature:"math.PI",desc:"The ratio of a circle's circumference to its diameter."},{name:"E",signature:"math.E",desc:"Euler's number, the base of natural logarithms."},{name:"sqrt",signature:"math.sqrt(x)",desc:"Square root of x."},{name:"abs",signature:"math.abs(x)",desc:"Absolute value of x."},{name:"floor",signature:"math.floor(x)",desc:"Round down to nearest integer."},{name:"ceil",signature:"math.ceil(x)",desc:"Round up to nearest integer."},{name:"round",signature:"math.round(x)",desc:"Round to nearest integer."},{name:"pow",signature:"math.pow(base, exp)",desc:"Raise base to the power of exp."},{name:"log",signature:"math.log(x)",desc:"Natural logarithm of x."},{name:"log2",signature:"math.log2(x)",desc:"Base-2 logarithm of x."},{name:"log10",signature:"math.log10(x)",desc:"Base-10 logarithm of x."},{name:"sin",signature:"math.sin(x)",desc:"Sine of x (radians)."},{name:"cos",signature:"math.cos(x)",desc:"Cosine of x (radians)."},{name:"tan",signature:"math.tan(x)",desc:"Tangent of x (radians)."},{name:"asin",signature:"math.asin(x)",desc:"Arc sine of x."},{name:"acos",signature:"math.acos(x)",desc:"Arc cosine of x."},{name:"atan",signature:"math.atan(x)",desc:"Arc tangent of x."},{name:"atan2",signature:"math.atan2(y, x)",desc:"Arc tangent of y/x, returns angle in radians."},{name:"random",signature:"math.random()",desc:"Random number between 0 and 1."},{name:"randInt",signature:"math.randInt(min, max)",desc:"Random integer between min and max (inclusive)."},{name:"max",signature:"math.max(a, b, ...)",desc:"Maximum of given values."},{name:"min",signature:"math.min(a, b, ...)",desc:"Minimum of given values."},{name:"hypot",signature:"math.hypot(a, b)",desc:"Hypotenuse sqrt(a^2 + b^2)."},{name:"sign",signature:"math.sign(x)",desc:"Sign of x (-1, 0, or 1)."},{name:"trunc",signature:"math.trunc(x)",desc:"Remove decimal part."},{name:"clamp",signature:"math.clamp(val, min, max)",desc:"Constrain val to [min, max]."},{name:"lerp",signature:"math.lerp(a, b, t)",desc:"Linear interpolation from a to b at t (0..1)."}]},{id:"canvas",title:"Canvas API",category:"Graphics",content:"Draw directly to the canvas. All drawing commands are buffered and rendered to the output panel.",code:`canvas.setSize(400, 300)
canvas.clear("#1a1a2e")

// Shapes
canvas.rect(x, y, w, h, color)
canvas.roundRect(x, y, w, h, radius, color)
canvas.circle(x, y, radius, color)
canvas.ellipse(x, y, rx, ry, color)
canvas.line(x1, y1, x2, y2, width, color)

// Text
canvas.text(x, y, text, size, color, align)

// Transforms
canvas.save()
canvas.restore()
canvas.translate(x, y)
canvas.rotate(angle)
canvas.scale(sx, sy)

// Events
canvas.onClick(fn(x, y) { ... })
canvas.onKey(fn(key) { ... })`,apiReference:[{name:"setSize",signature:"canvas.setSize(w, h)",desc:"Set canvas dimensions."},{name:"clear",signature:"canvas.clear(color)",desc:"Fill the entire canvas with color."},{name:"rect",signature:"canvas.rect(x, y, w, h, color)",desc:"Draw a filled rectangle."},{name:"roundRect",signature:"canvas.roundRect(x, y, w, h, r, color)",desc:"Draw a filled rectangle with rounded corners."},{name:"circle",signature:"canvas.circle(x, y, r, color)",desc:"Draw a filled circle."},{name:"ellipse",signature:"canvas.ellipse(x, y, rx, ry, color)",desc:"Draw a filled ellipse."},{name:"arc",signature:"canvas.arc(x, y, r, start, end, color)",desc:"Draw a circular arc from start to end angle (radians)."},{name:"ringArc",signature:"canvas.ringArc(x, y, r, start, end, w, color)",desc:"Draw a ring arc (arc with stroke width)."},{name:"polygon",signature:"canvas.polygon(x, y, r, sides, color)",desc:"Draw a regular polygon centered at (x, y) with radius r."},{name:"line",signature:"canvas.line(x1, y1, x2, y2, w, color)",desc:"Draw a line segment."},{name:"text",signature:"canvas.text(x, y, text, size, color, align)",desc:"Draw text. align: 'left', 'center', or 'right'."},{name:"image",signature:"canvas.image(url, x, y, w, h)",desc:"Draw an image from URL."},{name:"alpha",signature:"canvas.alpha(value)",desc:"Set global alpha (0-1)."},{name:"getWidth",signature:"canvas.getWidth()",desc:"Get canvas width."},{name:"getHeight",signature:"canvas.getHeight()",desc:"Get canvas height."},{name:"save",signature:"canvas.save()",desc:"Push the current transform state."},{name:"restore",signature:"canvas.restore()",desc:"Pop the last saved transform state."},{name:"translate",signature:"canvas.translate(x, y)",desc:"Move the origin."},{name:"rotate",signature:"canvas.rotate(angle)",desc:"Rotate by angle in radians."},{name:"scale",signature:"canvas.scale(sx, sy)",desc:"Scale by sx and sy."},{name:"onClick",signature:"canvas.onClick(fn(x, y) { ... })",desc:"Register a click handler."},{name:"onKey",signature:"canvas.onKey(fn(key) { ... })",desc:"Register a key press handler."}]},{id:"timer",title:"Timer & Animation",category:"Graphics",content:"Animation is driven by `timer.loop()`, which calls your function at ~60 frames per second.",code:`canvas.setSize(400, 300)
let angle = 0

timer.loop(fn() {
  canvas.clear("#0a0a1a")
  canvas.rect(150, 150, 100, 100, "#7c6af7")
  angle += 0.02
})

// Time utilities
let t = timer.now()          // current time in ms
let d = timer.date()         // { year, month, day, hours, minutes, seconds }`,apiReference:[{name:"loop",signature:"timer.loop(fn)",desc:"Call fn every animation frame (~60fps)."},{name:"now",signature:"timer.now()",desc:"Return current time in milliseconds."},{name:"date",signature:"timer.date()",desc:"Return current date object with year, month, day, hours, minutes, seconds."}]},{id:"print",title:"print()",category:"I/O",content:"The main output function. Sends text to the console panel.",code:'print("Hello")\nprint("Multiple", "values", 42)\nprint(`Result: ${2 + 2}`)',apiReference:[{name:"print",signature:"print(value, ...)",desc:"Output values to the console. Multiple values are separated by spaces."}]},{id:"input",title:"input()",category:"I/O",content:"Prompt the user for input. Returns a string.",code:`let name = input("What is your name?")
print("Hello, " + name)`,apiReference:[{name:"input",signature:"input(prompt)",desc:"Show a prompt dialog and return the user's input as a string."}]},{id:"objects",title:"Objects",category:"Collections",content:"Objects are collections of key-value pairs. Create them with literal syntax or add properties dynamically.",code:`let person = {
  name: "Ada",
  age: 36,
  skills: ["coding", "math", "art"]
}

// Access
print(person.name)
print(person["age"])

// Add / modify
person.job = "Developer"
person["city"] = "London"

// Delete
delete person.city

// Check
print(person.hasOwnProperty("name"))`,apiReference:[{name:"hasOwnProperty",signature:"obj.hasOwnProperty(key)",desc:"Return true if key exists on the object."}]},{id:"errors",title:"Error Handling",category:"Basics",content:"Viper Invictus reports all syntax errors at once during parsing. Runtime errors are thrown immediately with a clear message. Use try/catch for error recovery and throw for custom errors.",code:`// Syntax errors (all reported at once)
let x =        // missing value
fn() { print("hi" }  // missing closing paren

// Runtime errors
let arr = [1, 2, 3]
print(arr[10])  // index out of bounds

let obj = {}
print(obj.nonexistent)  // undefined property

// Try / Catch
fn divide(a, b) {
  if (b == 0) { throw "Cannot divide by zero" }
  return a / b
}

try {
  let result = divide(10, 0)
  print("Result: " + result)
} catch (err) {
  print("Error: " + err)
}

// Do-while loop
let i = 0
do {
  print("At least once: " + i)
  i = i + 1
} while (i < 0)

// Switch statement
let score = 85
switch (score) {
  case 100: print("Perfect!"); break
  case 90:  print("Excellent"); break
  case 80:  print("Great"); break
  case 70:  print("Good"); break
  default:  print("Keep trying")
}`}],c3=Array.from(new Set(Xa.map(n=>n.category)));function M0(){const[n,r]=$b("/docs/:topic"),[i,s]=S.useState(""),[c,d]=S.useState(new Set(["intro"])),[m,p]=S.useState("All"),[x,f]=S.useState(null),g=n?r?.topic:null,v=Xa.find(E=>E.id===g)||Xa[0],j=Xa.filter(E=>{const R=E.title.toLowerCase().includes(i.toLowerCase())||E.content.toLowerCase().includes(i.toLowerCase()),k=m==="All"||E.category===m;return R&&k}),C=E=>{navigator.clipboard.writeText(E),f(E.slice(0,20)),setTimeout(()=>f(null),2e3)};return h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Documentation"}),h.jsx("p",{className:"text-sm text-white/50",children:"Complete reference for the Viper Invictus language"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[h.jsxs("div",{className:"lg:col-span-3 space-y-4",children:[h.jsxs("div",{className:"relative",children:[h.jsx(pf,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"}),h.jsx("input",{type:"text",value:i,onChange:E=>s(E.target.value),placeholder:"Search docs...",className:"w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af7]/50"})]}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:["All",...c3].map(E=>h.jsx("button",{onClick:()=>p(E),className:`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${m===E?"bg-[#7c6af7]/15 text-[#b8b0fc] border border-[#7c6af7]/30":"bg-white/5 text-white/40 hover:text-white/60 border border-transparent"}`,children:E},E))}),h.jsx("div",{className:"space-y-1",children:j.map(E=>{const R=E.id===v.id;return h.jsx("a",{href:`/docs/${E.id}`,className:`block px-3 py-2 rounded-lg text-sm transition-all ${R?"bg-[#7c6af7]/15 text-[#b8b0fc] border border-[#7c6af7]/20":"text-white/50 hover:text-white/70 hover:bg-white/5"}`,children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"truncate",children:E.title}),h.jsx("span",{className:"text-[10px] text-white/20 shrink-0 ml-2",children:E.category})]})},E.id)})})]}),h.jsx("div",{className:"lg:col-span-9",children:h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/50 uppercase tracking-wider",children:v.category}),h.jsx("h2",{className:"text-xl font-bold",children:v.title})]}),h.jsx("p",{className:"text-sm text-white/60 leading-relaxed mb-6",children:v.content}),v.code&&h.jsxs("div",{className:"relative mb-6",children:[h.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-white/5 border border-white/10 border-b-0 rounded-t-lg",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(wa,{className:"w-3.5 h-3.5 text-[#7c6af7]"}),h.jsx("span",{className:"text-xs text-white/30",children:"Example"})]}),h.jsx("button",{onClick:()=>C(v.code),className:"flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-xs text-white/40 hover:text-white/60 transition-all",children:x===v.code.slice(0,20)?h.jsxs(h.Fragment,{children:[h.jsx(Zi,{className:"w-3 h-3 text-emerald-400"})," Copied"]}):h.jsxs(h.Fragment,{children:[h.jsx(Ji,{className:"w-3 h-3"})," Copy"]})})]}),h.jsx("pre",{className:"p-4 bg-[#0a0a15] border border-white/10 rounded-b-lg text-sm font-mono text-emerald-300 leading-relaxed overflow-x-auto",children:v.code})]}),v.apiReference&&v.apiReference.length>0&&h.jsxs("div",{className:"mb-4",children:[h.jsx("h3",{className:"text-sm font-semibold text-white/80 mb-3",children:"API Reference"}),h.jsx("div",{className:"space-y-2",children:v.apiReference.map(E=>h.jsx("div",{className:"bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-all",children:h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx("code",{className:"text-xs font-mono text-[#b8b0fc] bg-[#7c6af7]/10 px-2 py-0.5 rounded shrink-0",children:E.name}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("code",{className:"text-xs font-mono text-emerald-300 block mb-1",children:E.signature}),h.jsx("p",{className:"text-xs text-white/40",children:E.desc})]})]})},E.name))})]}),h.jsx("div",{className:"flex items-center justify-between pt-4 border-t border-white/10",children:(()=>{const E=Xa.findIndex(H=>H.id===v.id),R=Xa[E-1],k=Xa[E+1];return h.jsxs(h.Fragment,{children:[R?h.jsxs(Qe,{href:`/docs/${R.id}`,className:"flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-all",children:[h.jsx(Pr,{className:"w-4 h-4 rotate-180"})," ",R.title]}):h.jsx("div",{}),k?h.jsxs(Qe,{href:`/docs/${k.id}`,className:"flex items-center gap-2 text-sm text-[#b8b0fc] hover:text-[#d0c8ff] transition-all",children:[k.title," ",h.jsx(Pr,{className:"w-4 h-4"})]}):h.jsx("div",{})]})})()})]})})]})]})}const u3=Array.from(new Set(Jl.map(n=>n.category)));function f3(){const[n,r]=S.useState(""),[i,s]=S.useState("All"),[c,d]=S.useState(null),[m,p]=S.useState(null),x=Jl.filter(g=>{const v=g.name.toLowerCase().includes(n.toLowerCase())||g.description.toLowerCase().includes(n.toLowerCase()),j=i==="All"||g.category===i;return v&&j}),f=(g,v)=>{navigator.clipboard.writeText(g),d(v),setTimeout(()=>d(null),2e3)};return h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Example Gallery"}),h.jsxs("p",{className:"text-sm text-white/50",children:["Explore ",Jl.length," ready-to-run examples. Click any to see the code, then copy it to the IDE to try it yourself."]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-6",children:[h.jsxs("div",{className:"relative flex-1",children:[h.jsx(pf,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"}),h.jsx("input",{type:"text",value:n,onChange:g=>r(g.target.value),placeholder:"Search examples...",className:"w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af7]/50"})]}),h.jsx("div",{className:"flex gap-2 flex-wrap",children:["All",...u3].map(g=>h.jsx("button",{onClick:()=>s(g),className:`px-3 py-2 rounded-lg text-xs font-medium transition-all border ${i===g?"bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30":"bg-white/5 text-white/40 border-white/10 hover:bg-white/8 hover:text-white/60"}`,children:g},g))})]}),h.jsxs("div",{className:"text-xs text-white/30 mb-4",children:["Showing ",x.length," of ",Jl.length," examples"]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:x.map(g=>h.jsx(d3,{example:g,isExpanded:m===g.id,onToggle:()=>p(m===g.id?null:g.id),onCopy:()=>f(g.code,g.id),copied:c===g.id},g.id))}),x.length===0&&h.jsx("div",{className:"text-center py-12",children:h.jsx("p",{className:"text-white/30",children:"No examples match your search"})})]})}function d3({example:n,isExpanded:r,onToggle:i,onCopy:s,copied:c}){const[d,m]=S.useState(!1);return h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all",children:[h.jsxs("div",{className:"p-4",children:[h.jsxs("div",{className:"flex items-start justify-between mb-2",children:[h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/50 uppercase tracking-wider",children:n.category})}),h.jsx("button",{onClick:()=>m(!d),className:`transition-colors ${d?"text-yellow-400":"text-white/20 hover:text-white/40"}`,children:h.jsx(gf,{className:"w-4 h-4",fill:d?"currentColor":"none"})})]}),h.jsx("h3",{className:"font-medium text-sm text-white/90 mb-1",children:n.name}),h.jsx("p",{className:"text-xs text-white/40 mb-3",children:n.description}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:i,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/50 hover:text-white/70 transition-all",children:[h.jsx(k2,{className:"w-3 h-3"})," ",r?"Hide":"Show"," Code"]}),h.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/50 hover:text-white/70 transition-all",children:[c?h.jsx(Zi,{className:"w-3 h-3 text-emerald-400"}):h.jsx(Ji,{className:"w-3 h-3"}),c?"Copied!":"Copy"]}),h.jsxs(Qe,{href:"/",className:"ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/25 text-xs text-[#b8b0fc] transition-all",children:[h.jsx(bn,{className:"w-3 h-3"})," Try"]})]})]}),r&&h.jsx("div",{className:"border-t border-white/10",children:h.jsx("pre",{className:"p-4 text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto max-h-80 overflow-y-auto",children:n.code})})]})}function h3(){return h.jsxs("div",{className:"max-w-3xl mx-auto",children:[h.jsxs("div",{className:"text-center mb-10 mt-6",children:[h.jsx("img",{src:"/viper-logo.png",alt:"Viper Invictus",className:"w-20 h-20 rounded-2xl mx-auto mb-5"}),h.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Viper Invictus"}),h.jsx("p",{className:"text-white/50",children:"A scripting language for games, art, and interactive programs."})]}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:[h.jsxs("h2",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[h.jsx($r,{className:"w-5 h-5 text-[#7c6af7]"})," What is Viper Invictus?"]}),h.jsx("p",{className:"text-sm text-white/60 leading-relaxed",children:"Viper Invictus is a dynamically-typed scripting language that compiles to JavaScript. Use the browser IDE for instant creative coding, or run scripts locally with the CLI. The syntax sits between Python's readability and JavaScript's expressiveness - no install needed for the IDE, `npm install` for the CLI."})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:[h.jsx("h2",{className:"text-lg font-semibold mb-4",children:"What it includes"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{title:"Runs in the browser",desc:"Compiles to JS and executes via V8. No install needed."},{title:"Canvas API",desc:"rect, circle, line, text, arc, polygon - full 2D drawing."},{title:"Animation loop",desc:"timer.loop() runs at ~60fps. Build games and simulations."},{title:"First-class functions",desc:"Pass functions as values, return them, use closures."},{title:"Classes and inheritance",desc:"OOP with class, self, init, and the < extends syntax."},{title:"Rich arrays",desc:"map, filter, reduce, find, sort, slice, push, pop."},{title:"Math library",desc:"sin, cos, sqrt, random, randInt, PI, floor, abs, and more."},{title:"Batch error reporting",desc:"Shows all parse errors at once, not just the first one."},{title:"Backend execution",desc:"Send code to the Node.js server for server-side runs."},{title:"Monaco editor",desc:"Syntax highlighting, line numbers, keyboard shortcuts."}].map(n=>h.jsxs("div",{className:"bg-white/5 rounded-lg p-3 border border-white/5",children:[h.jsx("div",{className:"font-medium text-sm text-white/80 mb-1",children:n.title}),h.jsx("div",{className:"text-xs text-white/40",children:n.desc})]},n.title))})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:[h.jsx("h2",{className:"text-lg font-semibold mb-3",children:"Why it exists"}),h.jsx("p",{className:"text-sm text-white/60 leading-relaxed",children:"Most creative coding tools either require a full development environment or are too limited to do anything interesting. Viper Invictus sits in the middle: it's a real language with closures, classes, and a canvas API, and it runs instantly in any browser tab. The goal is to go from an idea to something visual in under a minute."})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:[h.jsx("h2",{className:"text-lg font-semibold mb-3",children:"Built with"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript","Vite","Tailwind CSS","Monaco Editor","Wouter","pnpm","Express"].map(n=>h.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50",children:n},n))})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:[h.jsx("h2",{className:"text-lg font-semibold mb-3",children:"Links"}),h.jsxs("div",{className:"flex flex-wrap gap-3",children:[h.jsxs("a",{href:"https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/60 hover:text-white/80 transition-all",children:[h.jsx(zg,{className:"w-4 h-4"})," GitHub"]}),h.jsx("a",{href:"https://discord.gg/P4XDWvGgmt",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/20 border border-[#7c6af7]/20 text-sm text-[#b8b0fc] transition-all",children:"Discord"}),h.jsxs(Qe,{href:"/",className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/20 border border-[#7c6af7]/20 text-sm text-[#b8b0fc] transition-all",children:[h.jsx(_g,{className:"w-4 h-4"})," Open IDE"]})]})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:[h.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Made by"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{name:"soulboundfist",role:"Chief Executive Officer"},{name:"themcleanson",role:"Chief Operation Officer"},{name:"2wt_clixer",role:"Chief Marketing Officer"}].map(n=>h.jsxs("div",{className:"flex items-center gap-3 bg-white/[0.03] rounded-lg p-3 border border-white/5",children:[h.jsx("div",{className:"w-9 h-9 rounded-full bg-[#7c6af7]/20 flex items-center justify-center text-[#b8b0fc] font-bold text-sm shrink-0",children:n.name.charAt(0).toUpperCase()}),h.jsxs("div",{children:[h.jsx("div",{className:"text-sm text-white/70 font-medium",children:n.name}),h.jsx("div",{className:"text-[11px] text-white/30",children:n.role})]})]},n.name))})]}),h.jsx("div",{className:"text-center py-6",children:h.jsxs("p",{className:"text-xs text-white/20 flex items-center justify-center gap-1",children:["Built with ",h.jsx(Lg,{className:"w-3 h-3 text-red-400 fill-current"})," by the Viper team"]})})]})]})}const D0=[{title:"Variables & Types",icon:h.jsx(o2,{className:"w-4 h-4"}),items:[{label:"let",code:"let x = 10",desc:"Mutable variable"},{label:"const",code:"const PI = 3.14",desc:"Immutable variable"},{label:"var",code:'var name = "Viper"',desc:"Function-scoped"},{label:"number",code:"42, 3.14, -7",desc:"Numeric values"},{label:"string",code:'"hello", `template`',desc:"Text values"},{label:"boolean",code:"true, false",desc:"Logical values"},{label:"null",code:"let x = null",desc:"Empty value"},{label:"array",code:"[1, 2, 3]",desc:"Ordered list"},{label:"object",code:"{a: 1, b: 2}",desc:"Key-value pairs"}]},{title:"Operators",icon:h.jsx(B2,{className:"w-4 h-4"}),items:[{label:"Arithmetic",code:"+, -, *, /, %, **",desc:"Math operations"},{label:"Comparison",code:"==, !=, >, <, >=, <=",desc:"Compare values"},{label:"Logical",code:"&&, ||, !",desc:"And, or, not"},{label:"Increment",code:"x++, x--",desc:"Add or subtract 1"},{label:"Compound",code:"+=, -=, *=, /=",desc:"Update and assign"},{label:"Ternary",code:'x > 0 ? "yes" : "no"',desc:"Inline if/else"}]},{title:"Control Flow",icon:h.jsx(Lw,{className:"w-4 h-4"}),items:[{label:"if",code:"if (x > 0) { ... }",desc:"Conditional block"},{label:"else if",code:"else if (x < 0) { ... }",desc:"Another condition"},{label:"else",code:"else { ... }",desc:"Fallback block"},{label:"while",code:"while (x < 5) { x++ }",desc:"Loop while true"},{label:"do-while",code:"do { ... } while (x < 5)",desc:"Run at least once"},{label:"for",code:"for (let i=0; i<5; i++) { ... }",desc:"Counting loop"},{label:"for..of",code:"for (let v of arr) { ... }",desc:"Iterate array"},{label:"for..in",code:"for (let k in obj) { ... }",desc:"Iterate keys"},{label:"switch",code:"switch (x) { case 1: ... default: ... }",desc:"Multi-way branch"},{label:"break",code:"break",desc:"Exit loop early"},{label:"continue",code:"continue",desc:"Skip to next iteration"}]},{title:"Error Handling",icon:h.jsx(Ug,{className:"w-4 h-4"}),items:[{label:"try/catch",code:"try { ... } catch (err) { ... }",desc:"Handle errors"},{label:"throw",code:'throw "error!"',desc:"Raise error"}]},{title:"Functions",icon:h.jsx(Bw,{className:"w-4 h-4"}),items:[{label:"define",code:"fn add(a, b) { return a + b }",desc:"Create a function"},{label:"anonymous",code:"fn(x) { return x * 2 }",desc:"No name function"},{label:"call",code:"add(3, 4)",desc:"Invoke a function"},{label:"return",code:"return value",desc:"Exit with value"},{label:"closure",code:"fn make() { let x = 0; return fn() { x++ } }",desc:"Captures scope"},{label:"higher-order",code:"fn apply(f, x) { return f(x) }",desc:"Function as argument"}]},{title:"Classes & OOP",icon:h.jsx(h2,{className:"w-4 h-4"}),items:[{label:"class",code:"class Dog { ... }",desc:"Define a class"},{label:"init",code:"init(name) { self.name = name }",desc:"Constructor"},{label:"new",code:'let d = new Dog("Rex")',desc:"Create instance"},{label:"self",code:"self.name",desc:"Current instance"},{label:"inheritance",code:"class Pup < Dog { ... }",desc:"Extend class"}]},{title:"Arrays",icon:h.jsx(Qa,{className:"w-4 h-4"}),items:[{label:"push",code:"arr.push(5)",desc:"Add to end"},{label:"pop",code:"arr.pop()",desc:"Remove from end"},{label:"shift",code:"arr.shift()",desc:"Remove from start"},{label:"unshift",code:"arr.unshift(0)",desc:"Add to start"},{label:"map",code:"arr.map(fn(x) { return x*2 })",desc:"Transform each"},{label:"filter",code:"arr.filter(fn(x) { return x > 0 })",desc:"Keep matching"},{label:"reduce",code:"arr.reduce(fn(a,b) { return a+b }, 0)",desc:"Combine to one"},{label:"find",code:"arr.find(fn(x) { return x > 5 })",desc:"First match"},{label:"sort",code:"arr.sort()",desc:"Sort ascending"},{label:"slice",code:"arr.slice(1, 4)",desc:"Extract subarray"},{label:"splice",code:"arr.splice(1, 2)",desc:"Remove/insert items"},{label:"concat",code:"arr.concat([4, 5])",desc:"Join arrays"},{label:"flat",code:"arr.flat()",desc:"Flatten nested arrays"},{label:"forEach",code:"arr.forEach(fn(x) { print(x) })",desc:"Run for each item"},{label:"findIndex",code:"arr.findIndex(fn(x) { return x > 5 })",desc:"First match index"},{label:"reverse",code:"arr.reverse()",desc:"Reverse order"},{label:"join",code:'arr.join(", ")',desc:"Join to string"},{label:"includes",code:"arr.includes(3)",desc:"Has value?"},{label:"length",code:"arr.length",desc:"Number of items"}]},{title:"Strings",icon:h.jsx(wa,{className:"w-4 h-4"}),items:[{label:"length",code:"s.length",desc:"Character count"},{label:"upper",code:"s.upper()",desc:"To uppercase"},{label:"lower",code:"s.lower()",desc:"To lowercase"},{label:"trim",code:"s.trim()",desc:"Remove whitespace"},{label:"contains",code:'s.contains("hi")',desc:"Includes substring?"},{label:"startsWith",code:'s.startsWith("hi")',desc:"Starts with?"},{label:"endsWith",code:'s.endsWith("hi")',desc:"Ends with?"},{label:"split",code:'s.split(",")',desc:"Split to array"},{label:"replace",code:'s.replace("a", "b")',desc:"Replace all"},{label:"slice",code:"s.slice(0, 5)",desc:"Extract substring"},{label:"indexOf",code:'s.indexOf("a")',desc:"Find position"},{label:"substring",code:"s.substring(0, 5)",desc:"Extract substring"},{label:"repeat",code:"s.repeat(3)",desc:"Repeat string"},{label:"padStart",code:'s.padStart(5, "0")',desc:"Pad from start"},{label:"padEnd",code:'s.padEnd(5, "0")',desc:"Pad from end"},{label:"char",code:"s.char(0)",desc:"Character at index"},{label:"charCode",code:"s.charCode(0)",desc:"Character code"},{label:"toNumber",code:"s.toNumber()",desc:"Convert to number"},{label:"toBool",code:"s.toBool()",desc:"Convert to boolean"},{label:"template",code:"`Hello ${name}!`",desc:"Embed variables"}]},{title:"Math",icon:h.jsx(Li,{className:"w-4 h-4"}),items:[{label:"PI",code:"math.PI",desc:"3.14159..."},{label:"sqrt",code:"math.sqrt(16)",desc:"Square root"},{label:"abs",code:"math.abs(-5)",desc:"Absolute value"},{label:"floor",code:"math.floor(3.7)",desc:"Round down"},{label:"ceil",code:"math.ceil(3.2)",desc:"Round up"},{label:"round",code:"math.round(3.5)",desc:"Round nearest"},{label:"pow",code:"math.pow(2, 10)",desc:"Exponent"},{label:"sin/cos/tan",code:"math.sin(0), math.cos(0)",desc:"Trigonometry"},{label:"asin/acos/atan",code:"math.asin(1), math.acos(0)",desc:"Inverse trig"},{label:"atan2",code:"math.atan2(y, x)",desc:"Angle from coordinates"},{label:"random",code:"math.random()",desc:"0 to 1"},{label:"randInt",code:"math.randInt(1, 6)",desc:"Random integer"},{label:"pow",code:"math.pow(2, 10)",desc:"Exponent"},{label:"log/log2/log10",code:"math.log(2), math.log2(8)",desc:"Logarithms"},{label:"hypot",code:"math.hypot(3, 4)",desc:"Hypotenuse"},{label:"sign",code:"math.sign(-5)",desc:"Sign of number"},{label:"trunc",code:"math.trunc(3.7)",desc:"Remove decimals"},{label:"clamp",code:"math.clamp(15, 0, 10)",desc:"Constrain range"},{label:"lerp",code:"math.lerp(0, 100, 0.5)",desc:"Interpolate"}]},{title:"Canvas",icon:h.jsx(b2,{className:"w-4 h-4"}),items:[{label:"setSize",code:"canvas.setSize(400, 300)",desc:"Set dimensions"},{label:"clear",code:'canvas.clear("#000")',desc:"Fill with color"},{label:"rect",code:"canvas.rect(x, y, w, h, color)",desc:"Rectangle"},{label:"roundRect",code:"canvas.roundRect(x, y, w, h, r, color)",desc:"Rounded rectangle"},{label:"circle",code:"canvas.circle(x, y, r, color)",desc:"Circle"},{label:"ellipse",code:"canvas.ellipse(x, y, rx, ry, color)",desc:"Ellipse"},{label:"arc",code:"canvas.arc(x, y, r, start, end, color)",desc:"Arc segment"},{label:"ringArc",code:"canvas.ringArc(x, y, r, start, end, w, color)",desc:"Ring arc"},{label:"polygon",code:"canvas.polygon(x, y, r, sides, color)",desc:"Regular polygon"},{label:"line",code:"canvas.line(x1, y1, x2, y2, w, color)",desc:"Line segment"},{label:"text",code:"canvas.text(x, y, txt, size, color, align)",desc:"Draw text"},{label:"image",code:"canvas.image(url, x, y, w, h)",desc:"Draw image"},{label:"alpha",code:"canvas.alpha(0.5)",desc:"Set global alpha"},{label:"getWidth",code:"canvas.getWidth()",desc:"Canvas width"},{label:"getHeight",code:"canvas.getHeight()",desc:"Canvas height"},{label:"onKey",code:"canvas.onKey(fn(key) { ... })",desc:"Key press handler"},{label:"onClick",code:"canvas.onClick(fn(x, y) { ... })",desc:"Click handler"},{label:"translate",code:"canvas.translate(x, y)",desc:"Move origin"},{label:"rotate",code:"canvas.rotate(angle)",desc:"Rotate canvas"},{label:"scale",code:"canvas.scale(sx, sy)",desc:"Scale canvas"},{label:"save",code:"canvas.save()",desc:"Push state"},{label:"restore",code:"canvas.restore()",desc:"Pop state"}]},{title:"Timer & Animation",icon:h.jsx(Tg,{className:"w-4 h-4"}),items:[{label:"loop",code:"timer.loop(fn() { ... })",desc:"Run every frame (~60fps)"},{label:"now",code:"timer.now()",desc:"Current time in ms"},{label:"date",code:"timer.date()",desc:"Date object"}]},{title:"I/O",icon:h.jsx(mf,{className:"w-4 h-4"}),items:[{label:"print",code:'print("hello")',desc:"Output to console"},{label:"log",code:'log("info")',desc:"Log to console"},{label:"warn",code:'warn("caution")',desc:"Warning output"},{label:"error",code:'error("oops")',desc:"Error output"},{label:"clear",code:"clear()",desc:"Clear console"},{label:"input",code:'input("Name?")',desc:"Prompt dialog"},{label:"str",code:"str(42)",desc:"Convert to string"},{label:"num",code:'num("3.14")',desc:"Convert to number"},{label:"bool",code:"bool(1)",desc:"Convert to boolean"},{label:"type",code:"type(x)",desc:"Get type name"},{label:"len",code:"len(arr)",desc:"Get length"},{label:"range",code:"range(0, 5)",desc:"Generate numbers"},{label:"JSON",code:"JSON.stringify(obj)",desc:"Serialize JSON"}]}];function m3(){const[n,r]=S.useState(""),[i,s]=S.useState(null),[c,d]=S.useState(null),m=D0.filter(x=>x.items.some(f=>f.label.toLowerCase().includes(n.toLowerCase())||f.code.toLowerCase().includes(n.toLowerCase())||f.desc.toLowerCase().includes(n.toLowerCase()))||x.title.toLowerCase().includes(n.toLowerCase())).map(x=>({...x,items:n?x.items.filter(f=>f.label.toLowerCase().includes(n.toLowerCase())||f.code.toLowerCase().includes(n.toLowerCase())||f.desc.toLowerCase().includes(n.toLowerCase())):x.items})),p=x=>{navigator.clipboard.writeText(x),s(x),setTimeout(()=>s(null),1500)};return h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("h1",{className:"text-2xl font-bold mb-1",children:"Quick Reference"}),h.jsx("p",{className:"text-sm text-white/50",children:"Everything you need to know at a glance"})]}),h.jsxs("div",{className:"relative mb-6",children:[h.jsx(pf,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"}),h.jsx("input",{type:"text",value:n,onChange:x=>r(x.target.value),placeholder:"Search for a keyword, function, or concept...",className:"w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af7]/50"})]}),h.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:D0.map(x=>h.jsxs("button",{onClick:()=>d(c===x.title?null:x.title),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${c===x.title?"bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30":"bg-white/5 text-white/50 hover:text-white/70 border-transparent"}`,children:[x.icon,x.title]},x.title))}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:m.map(x=>h.jsxs("div",{className:`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all ${c&&c!==x.title?"opacity-40":""}`,children:[h.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]",children:[h.jsx("span",{className:"text-[#7c6af7]",children:x.icon}),h.jsx("span",{className:"text-sm font-semibold text-white/80",children:x.title}),h.jsxs("span",{className:"ml-auto text-[10px] text-white/30 px-2 py-0.5 rounded-full bg-white/5",children:[x.items.length," items"]})]}),h.jsx("div",{className:"divide-y divide-white/5",children:x.items.map((f,g)=>h.jsx("div",{className:"group px-4 py-2.5 hover:bg-white/[0.02] transition-colors",children:h.jsxs("div",{className:"flex items-start justify-between gap-2",children:[h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("span",{className:"text-xs font-medium text-[#b8b0fc]",children:f.label}),h.jsx("span",{className:"text-[10px] text-white/30",children:f.desc})]}),h.jsx("code",{className:"block text-xs font-mono text-emerald-300/80 bg-[#0a0a15] rounded px-2 py-1 truncate",children:f.code})]}),h.jsx("button",{onClick:()=>p(f.code),className:"shrink-0 p-1 rounded text-white/20 hover:text-white/50 hover:bg-white/5 transition-all opacity-0 group-hover:opacity-100",children:i===f.code?h.jsx(Zi,{className:"w-3 h-3 text-emerald-400"}):h.jsx(Ji,{className:"w-3 h-3"})})]})},g))})]},x.title))}),m.length===0&&h.jsx("div",{className:"text-center py-12",children:h.jsxs("p",{className:"text-white/30",children:['No results found for "',n,'"']})})]})}const T0=[{id:"first-program",title:"Your First Program",description:"Learn the basics of Viper Invictus by building a simple greeting program",difficulty:"Beginner",duration:"5 min",tags:["variables","print","strings"],steps:[{title:"Say Hello",content:"The simplest program uses print() to show text. Try changing the message to say your own name!",code:`print("Hello, World!")
print("I am learning Viper Invictus!")`,hint:"Text inside quotes is called a string. You can change it to anything you want."},{title:"Use Variables",content:"Variables store values so you can reuse them. Use let to create a variable.",code:`let name = "Alex"
let age = 12

print("My name is " + name)
print("I am " + age + " years old")`,hint:"The + operator joins strings together. Try changing the name and age values."},{title:"Template Strings",content:"Template literals (backticks) make combining text and variables easier with ${}.",code:'let name = "Alex"\nlet hobby = "coding"\n\nprint(`Hello, my name is ${name}!`)\nprint(`I love ${hobby}!`)',hint:"Use backticks (`) instead of quotes. Put any variable inside ${}."}]},{id:"drawing-shapes",title:"Drawing with Canvas",description:"Create colorful shapes on the canvas and learn the graphics API",difficulty:"Beginner",duration:"10 min",tags:["canvas","graphics","shapes"],steps:[{title:"Set Up Canvas",content:"First, set the canvas size and clear it with a background color.",code:`canvas.setSize(400, 300)
canvas.clear("#0f172a")

// Draw a rectangle
canvas.rect(50, 50, 100, 80, "#7c6af7")

// Draw a circle
canvas.circle(250, 150, 60, "#e94560")

// Draw text
canvas.text(200, 280, "My First Drawing", 16, "#fff", "center")`,hint:"Coordinates start at (0,0) in the top-left corner. x goes right, y goes down."},{title:"Add More Shapes",content:"Combine rectangles, circles, and lines to create a simple scene.",code:`canvas.setSize(400, 300)
canvas.clear("#87ceeb")

// Ground
canvas.rect(0, 250, 400, 50, "#22c55e")

// Sun
canvas.circle(350, 50, 30, "#fbbf24")

// House body
canvas.rect(100, 150, 120, 100, "#8b5cf6")
// House roof
canvas.triangle(90, 150, 230, 150, 160, 100, "#ef4444")
// Door
canvas.rect(140, 190, 40, 60, "#5b21b6")
// Window
canvas.circle(180, 170, 15, "#fbbf24")

// Text
canvas.text(200, 280, "My House", 14, "#fff", "center")`,hint:"Think in layers: background first, then big shapes, then details."},{title:"Colors and Styles",content:"Experiment with different colors. You can use hex codes, rgb(), or color names.",code:`canvas.setSize(400, 300)
canvas.clear("#1a1a2e")

// Gradient-like effect with circles
for (let i = 0; i < 20; i++) {
  let x = math.random() * 400
  let y = math.random() * 300
  let r = math.random() * 30 + 10
  let colors = ["#e94560", "#7c6af7", "#fbbf24", "#34d399", "#60a5fa"]
  let color = colors[math.floor(math.random() * colors.length)]
  canvas.circle(x, y, r, color)
}

canvas.text(200, 20, "Random Art", 14, "#fff", "center")`,hint:"math.random() gives a number between 0 and 1. math.floor() rounds down."}]},{id:"interactive-game",title:"Build a Click Game",description:"Make an interactive game where you click targets to score points",difficulty:"Intermediate",duration:"15 min",tags:["canvas","events","game","animation"],steps:[{title:"Game Setup",content:"Set up the canvas, game state, and a click handler.",code:`canvas.setSize(400, 300)

let score = 0
let target = { x: 200, y: 150, r: 25 }
let colors = ["#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#8b5cf6"]

fn moveTarget() {
  target.x = math.random() * 350 + 25
  target.y = math.random() * 250 + 25
  target.color = colors[math.floor(math.random() * colors.length)]
}

moveTarget()

canvas.onClick(fn(x, y) {
  let dx = x - target.x
  let dy = y - target.y
  let dist = math.sqrt(dx * dx + dy * dy)

  if (dist < target.r) {
    score = score + 10
    moveTarget()
  }
})

fn draw() {
  canvas.clear("#0f172a")
  canvas.circle(target.x, target.y, target.r, target.color)
  canvas.text(10, 20, "Score: " + score, 16, "#fff")
}

timer.loop(draw)`,hint:"The distance formula tells you if the click is inside the circle."},{title:"Add Timer",content:"Add a countdown timer to make the game more exciting.",code:`canvas.setSize(400, 300)

let score = 0
let timeLeft = 30
let target = { x: 200, y: 150, r: 25, color: "#ef4444" }
let gameOver = false
let lastTime = timer.now()

fn moveTarget() {
  target.x = math.random() * 350 + 25
  target.y = math.random() * 250 + 25
  let colors = ["#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#8b5cf6"]
  target.color = colors[math.floor(math.random() * colors.length)]
}

moveTarget()

canvas.onClick(fn(x, y) {
  if (gameOver) { return }
  let dx = x - target.x
  let dy = y - target.y
  let dist = math.sqrt(dx * dx + dy * dy)
  if (dist < target.r) {
    score = score + 10
    moveTarget()
  }
})

fn draw() {
  if (!gameOver) {
    let now = timer.now()
    if (now - lastTime > 1000) {
      timeLeft = timeLeft - 1
      lastTime = now
    }
    if (timeLeft <= 0) {
      gameOver = true
    }
  }

  canvas.clear("#0f172a")
  if (!gameOver) {
    canvas.circle(target.x, target.y, target.r, target.color)
  }
  canvas.text(10, 20, "Score: " + score, 16, "#fff")
  canvas.text(10, 40, "Time: " + timeLeft, 14, "#fbbf24")

  if (gameOver) {
    canvas.text(200, 150, "GAME OVER!", 28, "#ef4444", "center")
    canvas.text(200, 180, "Score: " + score, 18, "#fff", "center")
  }
}

timer.loop(draw)`,hint:"timer.now() gives milliseconds. Check if 1000ms (1 second) have passed."},{title:"Add Difficulty",content:"Make the target shrink over time and increase speed as the score grows.",code:`canvas.setSize(400, 300)

let score = 0
let timeLeft = 30
let target = { x: 200, y: 150, r: 30, color: "#ef4444" }
let gameOver = false
let lastTime = timer.now()
let lastMove = timer.now()

fn moveTarget() {
  target.x = math.random() * 350 + 25
  target.y = math.random() * 250 + 25
  let colors = ["#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#8b5cf6"]
  target.color = colors[math.floor(math.random() * colors.length)]
  target.r = math.max(10, 30 - math.floor(score / 50) * 3)
}

moveTarget()

canvas.onClick(fn(x, y) {
  if (gameOver) { return }
  let dx = x - target.x
  let dy = y - target.y
  let dist = math.sqrt(dx * dx + dy * dy)
  if (dist < target.r) {
    score = score + 10
    moveTarget()
    lastMove = timer.now()
  }
})

fn draw() {
  let now = timer.now()
  if (!gameOver) {
    if (now - lastTime > 1000) {
      timeLeft = timeLeft - 1
      lastTime = now
    }
    if (now - lastMove > 2000) {
      moveTarget()
      lastMove = now
    }
    if (timeLeft <= 0) {
      gameOver = true
    }
  }

  canvas.clear("#0f172a")
  if (!gameOver) {
    canvas.circle(target.x, target.y, target.r, target.color)
  }
  canvas.text(10, 20, "Score: " + score, 16, "#fff")
  canvas.text(10, 40, "Time: " + timeLeft, 14, "#fbbf24")
  canvas.text(10, 60, "Size: " + target.r, 12, "#94a3b8")

  if (gameOver) {
    canvas.text(200, 140, "GAME OVER!", 28, "#ef4444", "center")
    canvas.text(200, 175, "Score: " + score, 18, "#fff", "center")
    let msg = score > 200 ? "Amazing!" : (score > 100 ? "Great job!" : "Keep practicing!")
    canvas.text(200, 200, msg, 14, "#fbbf24", "center")
  }
}

timer.loop(draw)`,hint:"The target shrinks every 50 points. It also auto-moves if you don't click it for 2 seconds."}]},{id:"data-processing",title:"Working with Data",description:"Learn to filter, sort, and transform data using array methods",difficulty:"Intermediate",duration:"12 min",tags:["arrays","filter","map","reduce"],steps:[{title:"Create a Dataset",content:"Start with an array of objects representing real data.",code:`let students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 72, subject: "Math" },
  { name: "Carol", grade: 95, subject: "Science" },
  { name: "David", grade: 68, subject: "Science" },
  { name: "Eve", grade: 91, subject: "Math" },
]

// Print all students
for (let s of students) {
  print(\`\${s.name}: \${s.grade} in \${s.subject}\`)
}`,hint:"Arrays of objects are very common in real programs. Each object is one record."},{title:"Filter and Sort",content:"Find students with high grades and sort them.",code:`let students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 72, subject: "Math" },
  { name: "Carol", grade: 95, subject: "Science" },
  { name: "David", grade: 68, subject: "Science" },
  { name: "Eve", grade: 91, subject: "Math" },
]

// Students with grade >= 80
let passing = students.filter(fn(s) { return s.grade >= 80 })
print("Passing students:")
for (let s of passing) {
  print("  " + s.name)
}

// Math students only
let mathStudents = students.filter(fn(s) { return s.subject == "Math" })
print("Math students: " + mathStudents.length)

// Average grade
let avg = students.reduce(fn(sum, s) { return sum + s.grade }, 0) / students.length
print("Average grade: " + avg)`,hint:"filter() returns a new array with only matching items. reduce() combines everything."},{title:"Transform Data",content:"Use map() to transform the data into a new format.",code:`let students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 72, subject: "Math" },
  { name: "Carol", grade: 95, subject: "Science" },
  { name: "David", grade: 68, subject: "Science" },
  { name: "Eve", grade: 91, subject: "Math" },
]

// Add letter grades
let withLetters = students.map(fn(s) {
  let letter = "F"
  if (s.grade >= 90) { letter = "A" }
  else if (s.grade >= 80) { letter = "B" }
  else if (s.grade >= 70) { letter = "C" }
  else if (s.grade >= 60) { letter = "D" }

  return {
    name: s.name,
    grade: s.grade,
    letter: letter,
    subject: s.subject
  }
})

print("Grade Report:")
for (let s of withLetters) {
  print(\`  \${s.name}: \${s.grade} (\${s.letter})\`)
}

// Best student
let best = students.reduce(fn(a, b) {
  return a.grade > b.grade ? a : b
})
print("Top student: " + best.name + " with " + best.grade)`,hint:"map() returns a new array where each element is transformed by your function."}]},{id:"animation-patterns",title:"Animation Patterns",description:"Learn common animation techniques used in games and visual art",difficulty:"Advanced",duration:"20 min",tags:["animation","canvas","math","loop"],steps:[{title:"Smooth Movement",content:"Use linear interpolation (lerp) to make objects move smoothly.",code:`canvas.setSize(400, 300)

let pos = { x: 50, y: 150 }
let target = { x: 350, y: 150 }
let t = 0
let speed = 0.02

fn draw() {
  canvas.clear("#0f172a")

  // lerp between current position and target
  pos.x = math.lerp(pos.x, target.x, speed)
  pos.y = math.lerp(pos.y, target.y, speed)

  // Draw ball
  canvas.circle(pos.x, pos.y, 15, "#7c6af7")
  // Draw target
  canvas.circle(target.x, target.y, 8, "#e94560")
  // Draw line
  canvas.line(pos.x, pos.y, target.x, target.y, 1, "#ffffff20")

  // Draw text
  canvas.text(10, 20, "Click to set target", 14, "#fff")
}

canvas.onClick(fn(x, y) {
  target.x = x
  target.y = y
})

timer.loop(draw)`,hint:"lerp(a, b, t) moves a closer to b by fraction t. Smaller t = smoother, slower."},{title:"Particle System",content:"Create multiple moving particles with physics.",code:`canvas.setSize(400, 300)

let particles = []

for (let i = 0; i < 50; i++) {
  particles.push({
    x: math.random() * 400,
    y: math.random() * 300,
    vx: (math.random() - 0.5) * 2,
    vy: (math.random() - 0.5) * 2,
    r: math.random() * 3 + 1,
    color: math.random() > 0.5 ? "#7c6af7" : "#e94560"
  })
}

fn draw() {
  canvas.clear("#050510")

  for (let p of particles) {
    p.x = p.x + p.vx
    p.y = p.y + p.vy

    if (p.x < 0) { p.x = 400 }
    if (p.x > 400) { p.x = 0 }
    if (p.y < 0) { p.y = 300 }
    if (p.y > 300) { p.y = 0 }

    canvas.circle(p.x, p.y, p.r, p.color)
  }

  canvas.text(10, 20, "Particles: " + particles.length, 14, "#fff")
}

timer.loop(draw)`,hint:"Each particle has its own position and velocity. Update them every frame."},{title:"Wave Animation",content:"Use sine waves to create flowing motion.",code:`canvas.setSize(500, 300)

let t = 0
let waveCount = 3

fn draw() {
  canvas.clear("#0f172a")

  for (let w = 0; w < waveCount; w++) {
    let baseY = 80 + w * 70
    let colors = ["#7c6af7", "#e94560", "#34d399"]

    for (let x = 0; x < 500; x = x + 5) {
      let y = baseY + math.sin(x * 0.02 + t + w) * 30
      let r = 3 + math.sin(x * 0.05 + t) * 2
      canvas.circle(x, y, r, colors[w])
    }
  }

  t = t + 0.05
  canvas.text(10, 20, "Sine Wave Animation", 14, "#fff")
}

timer.loop(draw)`,hint:"math.sin() gives a wave between -1 and 1. Add time (t) to make it move."}]}];function _0(n){switch(n){case"Beginner":return"bg-emerald-500/15 text-emerald-400 border-emerald-500/20";case"Intermediate":return"bg-yellow-500/15 text-yellow-400 border-yellow-500/20";case"Advanced":return"bg-red-500/15 text-red-400 border-red-500/20";default:return"bg-white/10 text-white/60 border-white/20"}}function z0(){const[n,r]=Yi(),[i,s]=S.useState(new Set),[c,d]=S.useState(null),[m,p]=S.useState(0),[x,f]=S.useState(!1),g=c||n.split("/tutorials/")[1],v=T0.find(H=>H.id===g),j=H=>{d(H),p(0),f(!1),r(`/tutorials/${H}`)},C=()=>{p(0),f(!1)},E=()=>{v&&m<v.steps.length-1?(p(m+1),f(!1)):v&&(s(H=>new Set([...H,v.id])),d(null),r("/tutorials"))};if(!v)return h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Tutorials"}),h.jsx("p",{className:"text-sm text-white/50",children:"Step-by-step guided projects to master Viper Invictus"})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:T0.map(H=>h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all group",children:[h.jsxs("div",{className:"flex items-start justify-between mb-3",children:[h.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded border ${_0(H.difficulty)}`,children:H.difficulty}),h.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-white/30",children:[h.jsx(Tg,{className:"w-3 h-3"}),H.duration]})]}),h.jsx("h3",{className:"font-semibold text-sm text-white/90 mb-1",children:H.title}),h.jsx("p",{className:"text-xs text-white/40 mb-3",children:H.description}),h.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:H.tags.map(q=>h.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40",children:q},q))}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:()=>j(H.id),className:"flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c6af7] to-[#6b5de4] hover:from-[#8d7ff8] hover:to-[#7c6af7] text-white text-xs font-medium transition-all",children:[h.jsx(bn,{className:"w-3 h-3"})," Start"]}),i.has(H.id)&&h.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-emerald-400",children:[h.jsx(qr,{className:"w-3 h-3"})," Completed"]}),h.jsx("div",{className:"ml-auto flex items-center gap-0.5",children:H.steps.map((q,$)=>h.jsx(Fu,{className:"w-2 h-2 text-white/10"},$))})]})]},H.id))})]});const R=v.steps[m],k=(m+1)/v.steps.length*100;return h.jsxs("div",{className:"max-w-5xl mx-auto",children:[h.jsxs("div",{className:"mb-6",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[h.jsx("button",{onClick:()=>{d(null),r("/tutorials")},className:"text-xs text-white/40 hover:text-white/60 transition-colors",children:"Tutorials"}),h.jsx(Pr,{className:"w-3 h-3 text-white/20"}),h.jsx("span",{className:"text-xs text-white/60",children:v.title})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("h1",{className:"text-xl font-bold",children:v.title}),h.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded border ${_0(v.difficulty)}`,children:v.difficulty})]}),h.jsx("p",{className:"text-sm text-white/50 mt-1",children:v.description})]}),h.jsxs("div",{className:"mb-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2 text-xs text-white/40",children:[h.jsxs("span",{children:["Step ",m+1," of ",v.steps.length]}),h.jsxs("span",{children:[Math.round(k),"% complete"]})]}),h.jsx("div",{className:"h-1.5 bg-white/10 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-gradient-to-r from-[#7c6af7] to-[#e94560] transition-all duration-500",style:{width:`${k}%`}})}),h.jsx("div",{className:"flex gap-1 mt-2",children:v.steps.map((H,q)=>h.jsx("button",{onClick:()=>{p(q),f(!1)},className:`w-6 h-6 rounded flex items-center justify-center text-[10px] transition-all ${q===m?"bg-[#7c6af7]/20 text-[#b8b0fc] border border-[#7c6af7]/30":q<m?"bg-emerald-500/10 text-emerald-400":"bg-white/5 text-white/20"}`,children:q<m?h.jsx(qr,{className:"w-3 h-3"}):q+1},q))})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-6",children:[h.jsxs("div",{className:"p-5 border-b border-white/10",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[h.jsx(Qa,{className:"w-4 h-4 text-[#7c6af7]"}),h.jsx("h2",{className:"text-sm font-semibold text-white/80",children:R.title})]}),h.jsx("p",{className:"text-sm text-white/60 leading-relaxed",children:R.content})]}),h.jsxs("div",{className:"p-4 bg-[#0a0a15]",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"text-[10px] text-white/30 uppercase tracking-wider",children:"Code"}),h.jsxs(Qe,{href:"/",className:"text-[10px] text-[#b8b0fc] hover:underline flex items-center gap-1",children:[h.jsx(bn,{className:"w-3 h-3"})," Try in IDE"]})]}),h.jsx("pre",{className:"text-sm font-mono text-emerald-300 leading-relaxed overflow-x-auto",children:R.code})]})]}),h.jsxs("div",{className:"mb-6",children:[h.jsxs("button",{onClick:()=>f(!x),className:"flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors",children:[h.jsx(Hg,{className:"w-3.5 h-3.5"}),x?"Hide hint":"Need a hint?"]}),x&&h.jsx("div",{className:"mt-2 p-3 bg-yellow-500/5 border border-yellow-500/10 rounded-lg text-sm text-white/50",children:R.hint})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("button",{onClick:E,className:"flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#7c6af7] to-[#6b5de4] hover:from-[#8d7ff8] hover:to-[#7c6af7] text-white text-sm font-medium transition-all shadow-lg shadow-[#7c6af7]/20",children:[h.jsx(qr,{className:"w-4 h-4"}),m<v.steps.length-1?"Next Step":"Complete Tutorial"]}),h.jsxs("button",{onClick:C,className:"flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 text-sm transition-all",children:[h.jsx(eo,{className:"w-4 h-4"})," Restart"]}),h.jsxs(Qe,{href:"/",className:"ml-auto flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 text-sm transition-all border border-white/10",children:[h.jsx(bn,{className:"w-4 h-4"})," Try in IDE"]})]})]})}const L0=[{name:"Hello World",code:`print("Hello, World!")
print("Welcome to Viper Invictus!")

let name = "Developer"
print(\`Hey, \${name}!\`)`},{name:"Math Tricks",code:`print("Math Fun:")
print("PI = " + math.PI)
print("sqrt(16) = " + math.sqrt(16))
print("random() = " + math.random())
print("randInt(1,6) = " + math.randInt(1, 6))

let nums = [3, 1, 4, 1, 5, 9]
print("Sorted: " + nums.sort())`},{name:"Loop Pattern",code:`print("Counting:")
for (let i = 1; i <= 5; i++) {
  print("  " + i)
}

print("Even numbers:")
for (let i = 0; i <= 10; i = i + 2) {
  print("  " + i)
}

print("Array iteration:")
let colors = ["red", "green", "blue"]
for (let c of colors) {
  print("  - " + c)
}`},{name:"Bouncing Circle",code:`canvas.setSize(300, 200)
let x = 20
let y = 100
let dx = 3
let dy = 2

fn draw() {
  canvas.clear("#0f172a")
  canvas.circle(x, y, 15, "#7c6af7")
  canvas.text(10, 20, "Bouncing Circle", 14, "#fff")

  x = x + dx
  y = y + dy

  if (x > 280 || x < 20) { dx = -dx }
  if (y > 180 || y < 20) { dy = -dy }
}

timer.loop(draw)`},{name:"Rainbow Grid",code:`canvas.setSize(400, 300)
let t = 0

fn draw() {
  canvas.clear("#050510")
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      let hue = (x + y) * 30 + t * 50
      let color = \`hsl(\${hue % 360}, 80%, 60%)\`
      canvas.rect(x * 40 + 2, y * 30 + 2, 36, 26, color)
    }
  }
  t = t + 0.01
}

timer.loop(draw)`},{name:"3D Wireframe",code:`canvas.setSize(500, 400)
let angle = 0
let vertices = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
]
let edges = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7]
]

fn project(v) {
  let s = 120
  let cx = 250
  let cy = 200
  let x = v[0] * math.cos(angle) - v[2] * math.sin(angle)
  let z = v[0] * math.sin(angle) + v[2] * math.cos(angle)
  let y = v[1]
  let dist = 3.5
  let scale = s / (z + dist)
  return [cx + x * scale, cy + y * scale]
}

fn draw() {
  canvas.clear("#0a0a15")
  for (let e of edges) {
    let a = project(vertices[e[0]])
    let b = project(vertices[e[1]])
    canvas.line(a[0], a[1], b[0], b[1], 2, "#7c6af7")
  }
  angle += 0.02
  canvas.text(250, 30, "3D Wireframe Cube", 18, "#fff", "center")
}

timer.loop(draw)`},{name:"Particle Fire",code:`canvas.setSize(400, 300)
let particles = []

fn spawn() {
  for (let i = 0; i < 3; i++) {
    particles.push({
      x: 200,
      y: 280,
      vx: (math.random() - 0.5) * 4,
      vy: -math.random() * 5 - 2,
      life: 1.0,
      r: math.random() * 5 + 2,
      color: math.random() > 0.5 ? "#ff6b35" : "#f7c948"
    })
  }
}

fn draw() {
  canvas.clear("#1a0a00")
  spawn()
  let i = 0
  while (i < particles.length) {
    let p = particles[i]
    p.x += p.vx
    p.y += p.vy
    p.vy += 0.1
    p.life -= 0.02
    p.r *= 0.96
    if (p.life <= 0) {
      particles.splice(i, 1)
    } else {
      canvas.alpha(p.life)
      canvas.circle(p.x, p.y, p.r, p.color)
      i += 1
    }
  }
  canvas.alpha(1)
  canvas.text(10, 20, "Particles: " + particles.length, 14, "#fff")
}

timer.loop(draw)`},{name:"Fractal Tree",code:`canvas.setSize(500, 400)
let t = 0

fn branch(x, y, len, angle, depth) {
  if (depth <= 0) {
    canvas.circle(x, y, 3, "#34d399")
    return
  }
  let x2 = x + math.cos(angle) * len
  let y2 = y + math.sin(angle) * len
  let w = math.max(1, depth * 0.8)
  canvas.line(x, y, x2, y2, w, depth > 5 ? "#8b5a2b" : "#a06c35")
  let sway = math.sin(t * 0.02 + depth) * 0.05
  branch(x2, y2, len * 0.7, angle - 0.45 + sway, depth - 1)
  branch(x2, y2, len * 0.7, angle + 0.45 + sway, depth - 1)
}

fn draw() {
  canvas.clear("#0f172a")
  t = t + 1
  branch(250, 380, 80, -math.PI / 2, 9)
  canvas.text(250, 20, "Recursive Fractal Tree", 16, "#fff", "center")
}

timer.loop(draw)`},{name:"Dice Roll",code:`canvas.setSize(300, 200)

fn drawDot(x, y) {
  canvas.circle(x, y, 8, "#333")
}

fn drawDice(x, y, size, value) {
  let r = size / 2
  canvas.roundRect(x - r, y - r, size, size, 8, "#fff")
  let cx = x
  let cy = y
  let off = size / 4

  if (value == 1) { drawDot(cx, cy) }
  else if (value == 2) { drawDot(cx - off, cy - off); drawDot(cx + off, cy + off) }
  else if (value == 3) { drawDot(cx, cy); drawDot(cx - off, cy - off); drawDot(cx + off, cy + off) }
  else if (value == 4) { drawDot(cx - off, cy - off); drawDot(cx + off, cy - off); drawDot(cx - off, cy + off); drawDot(cx + off, cy + off) }
  else if (value == 5) { drawDot(cx, cy); drawDot(cx - off, cy - off); drawDot(cx + off, cy - off); drawDot(cx - off, cy + off); drawDot(cx + off, cy + off) }
  else if (value == 6) { drawDot(cx - off, cy - off); drawDot(cx + off, cy - off); drawDot(cx - off, cy); drawDot(cx + off, cy); drawDot(cx - off, cy + off); drawDot(cx + off, cy + off) }
}

fn draw() {
  canvas.clear("#2d3748")
  let d1 = math.randInt(1, 6)
  let d2 = math.randInt(1, 6)
  drawDice(100, 100, 80, d1)
  drawDice(210, 100, 80, d2)
  canvas.text(150, 180, "Total: " + (d1 + d2), 16, "#fff", "center")
}

draw()

canvas.onClick(fn(x, y) { draw() })`},{name:"Matrix Rain",code:`canvas.setSize(400, 300)
let cols = 40
let drops = []
for (let i = 0; i < cols; i++) { drops.push(math.random() * 300) }
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let t = 0

fn draw() {
  canvas.alpha(0.15)
  canvas.rect(0, 0, 400, 300, "#000")
  canvas.alpha(1)

  for (let i = 0; i < cols; i++) {
    let x = i * 10 + 5
    let y = drops[i]
    let char = chars.char(math.floor(math.random() * chars.length))
    let green = math.floor(100 + math.random() * 155)
    let color = \`rgb(0, \${green}, 0)\`
    canvas.text(x, y, char, 10, color, "center")
    drops[i] += 10
    if (drops[i] > 300) {
      drops[i] = -10
    }
  }
  t += 1
  canvas.text(200, 290, "Matrix Digital Rain", 12, "#0f0", "center")
}

timer.loop(draw)`}];function p3(){const[n,r]=S.useState(L0[0].code),[i,s]=S.useState(!0),[c,d]=S.useState([]),[m,p]=S.useState([]),[x,f]=S.useState(!1),[g,v]=S.useState(!1),[j,C]=S.useState("console"),[E,R]=S.useState(!1),k=S.useRef(0),H=S.useRef(null),q=S.useRef(null),$=S.useRef(null),Q=S.useCallback((re,le="log")=>{d(ve=>[...ve.slice(-200),{id:k.current++,text:re,kind:le}])},[]),V=S.useCallback(()=>{H.current?.stop(),H.current=null,$.current!==null&&(cancelAnimationFrame($.current),$.current=null),f(!1)},[]),F=S.useCallback(()=>{V(),d([]),p([{cmd:"clear",args:["#050510"]}]),v(!1);const re=[];let le=!1;const ve=()=>{if(re.length>0){const K=[...re];re.length=0,p(K)}le=!1},ge={output:(K,ae)=>Q(K,ae??"log"),draw:K=>{if(re.push(K),K.cmd==="setSize"){v(!0),C("canvas");const ae=K.args[0],M=K.args[1];q.current?.setSize(ae,M)}le||(le=!0,requestAnimationFrame(ve))},clearCanvas:()=>p([{cmd:"clear",args:["#050510"]}]),clearConsole:()=>d([]),getInput:K=>window.prompt(K)??"",setTitle:()=>{},getTime:()=>performance.now(),random:()=>Math.random(),scheduleFrame:K=>{$.current=requestAnimationFrame(K)},cancelFrames:()=>{$.current!==null&&(cancelAnimationFrame($.current),$.current=null)}},fe=new Qx(ge,i);H.current=fe,f(!0),Q("Running...","system"),setTimeout(()=>{const K=fe.execute(n);if(K.success)fe.getKeyHandlers().length>0||g||(Q("Done","system"),f(!1));else{if(K.errors&&K.errors.length>0){Q("Found "+K.errors.length+" error(s):","error");for(const ae of K.errors)Q("  "+ae.message+(ae.line?" (line "+ae.line+")":""),"error")}else Q("Error: "+K.error+(K.errorLine?" (line "+K.errorLine+")":""),"error");f(!1),H.current=null}},10)},[n,Q,V,g]),ee=re=>{V(),r(re.code),s(!0),d([]),p([]),v(!1)},P=()=>{navigator.clipboard.writeText(n),R(!0),setTimeout(()=>R(!1),1500)};return h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("h1",{className:"text-2xl font-bold mb-1",children:"Quick Playground"}),h.jsx("p",{className:"text-sm text-white/50",children:"Experiment with code instantly. Pick a snippet or write your own."})]}),h.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide",children:L0.map(re=>h.jsx("button",{onClick:()=>ee(re),className:"px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs text-white/60 hover:text-white/80 transition-all shrink-0",children:re.name},re.name))}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col min-h-[400px]",children:[h.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02] shrink-0",children:[h.jsx("span",{className:"text-xs text-white/30 font-mono",children:"playground.vi"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:P,className:"p-1.5 rounded text-white/30 hover:text-white/60 hover:bg-white/5 transition-all",title:"Copy code",children:E?h.jsx(Zi,{className:"w-3.5 h-3.5 text-emerald-400"}):h.jsx(Ji,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:()=>{r(""),V()},className:"p-1.5 rounded text-white/30 hover:text-white/60 hover:bg-white/5 transition-all",title:"Clear",children:h.jsx(T2,{className:"w-3.5 h-3.5"})})]})]}),h.jsx("textarea",{value:n,onChange:re=>{r(re.target.value),s(!1)},className:"flex-1 w-full bg-[#0a0a15] text-[#e2e8f0] font-mono text-sm p-4 resize-none border-none outline-none min-h-[300px]",style:{fontFamily:"'JetBrains Mono', monospace",lineHeight:1.6,fontSize:13},spellCheck:!1}),h.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-t border-white/10 bg-white/[0.02] shrink-0",children:[h.jsxs("button",{onClick:F,disabled:x,className:"flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#7c6af7] hover:bg-[#8d7ff8] text-white text-xs font-medium transition-colors disabled:opacity-50",children:[h.jsx(bn,{className:"w-3 h-3"})," Run"]}),x&&h.jsxs("button",{onClick:V,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-xs font-medium transition-all border border-red-500/20",children:[h.jsx(qg,{className:"w-3 h-3"})," Stop"]}),h.jsx("button",{onClick:()=>{r(""),d([]),p([]),v(!1),V()},className:"ml-auto p-1.5 rounded text-white/20 hover:text-white/40 hover:bg-white/5 transition-all",title:"Reset",children:h.jsx(eo,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col min-h-[400px]",children:[h.jsxs("div",{className:"flex border-b border-white/10 bg-white/[0.02] shrink-0",children:[h.jsxs("button",{onClick:()=>C("console"),className:`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${j==="console"?"text-[#b8b0fc] border-[#7c6af7]":"text-white/40 border-transparent hover:text-white/60"}`,children:[h.jsx(wa,{className:"w-3.5 h-3.5"})," Console"]}),h.jsxs("button",{onClick:()=>C("canvas"),className:`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${j==="canvas"?"text-[#b8b0fc] border-[#7c6af7]":"text-white/40 border-transparent hover:text-white/60"}`,children:[h.jsx(mf,{className:"w-3.5 h-3.5"})," Canvas",g&&h.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1"})]})]}),h.jsx("div",{className:`flex-1 overflow-hidden ${j!=="console"?"hidden":""}`,children:h.jsx(Fx,{lines:c})}),h.jsx("div",{className:`flex-1 overflow-hidden ${j!=="canvas"?"hidden":""}`,children:h.jsx(Of,{ref:q,commands:m})})]})]})]})}const Bu=[{id:"snake",title:"Classic Snake",description:"The iconic snake game with smooth controls, score tracking, and game over screen. Use arrow keys to play!",category:"Game",code:"snake",tags:["canvas","keyboard","game loop"],likes:42,featured:!0},{id:"bouncing",title:"Bouncing Balls",description:"Physics-based ball simulation with gravity, friction, and click-to-spawn interaction.",category:"Simulation",code:"bouncing",tags:["physics","canvas","interaction"],likes:35,featured:!0},{id:"clock",title:"Analog Clock",description:"A real-time analog clock showing hours, minutes, and seconds with smooth hand movement.",category:"Art",code:"clock",tags:["time","canvas","real-time"],likes:28},{id:"art",title:"Generative Spiral",description:"Beautiful procedural art generated with sine waves and dynamic color cycling.",category:"Art",code:"art",tags:["generative","math","animation"],likes:31,featured:!0},{id:"portfolio",title:"Portfolio Website",description:"A full multi-page website rendered entirely on canvas with navigation, particles, and interactive elements.",category:"App",code:"portfolio",tags:["UI","canvas","multi-page"],likes:25},{id:"particles",title:"Particle Field",description:"Interactive particle system with mouse-following behavior and color trails.",category:"Simulation",code:"particles",tags:["particles","canvas","animation"],likes:19},{id:"rainbow",title:"Rainbow Grid",description:"Animated color grid that cycles through the spectrum with perlin-noise-like movement.",category:"Art",code:"rainbow",tags:["colors","grid","animation"],likes:22},{id:"sorting",title:"Sorting Visualizer",description:"Watch bubble sort and quick sort in action with color-coded bars and speed control.",category:"Algorithm",code:"sorting",tags:["algorithms","canvas","education"],likes:17}],g3=["All","Game","Art","Simulation","App","Algorithm"];function x3(){const[n,r]=S.useState("All"),[i,s]=S.useState(new Set),[c,d]=S.useState(null),m=n==="All"?Bu:Bu.filter(f=>f.category===n),p=Bu.filter(f=>f.featured),x=f=>{s(g=>{const v=new Set(g);return v.has(f)?v.delete(f):v.add(f),v})};return h.jsxs("div",{className:"max-w-7xl mx-auto",children:[h.jsx("div",{className:"mb-8",children:h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold mb-1",children:"Showcase"}),h.jsx("p",{className:"text-sm text-white/50",children:"Projects built with Viper Invictus"})]})}),h.jsxs("div",{className:"mb-8",children:[h.jsx("h2",{className:"text-sm font-semibold text-white/60 uppercase tracking-wider mb-4",children:"Featured Projects"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:p.map(f=>h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#7c6af7]/30 transition-all group",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-[#7c6af7]/15 text-[#b8b0fc] uppercase tracking-wider",children:f.category}),h.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-white/30",children:[h.jsx(gf,{className:"w-3 h-3 text-yellow-400",fill:"currentColor"}),f.likes]})]}),h.jsx("h3",{className:"font-semibold text-sm text-white/90 mb-1",children:f.title}),h.jsx("p",{className:"text-xs text-white/40 mb-3 line-clamp-2",children:f.description}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs(Qe,{href:"/",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/25 text-xs text-[#b8b0fc] transition-all",children:[h.jsx(bn,{className:"w-3 h-3"})," Try it"]}),h.jsx("div",{className:"flex flex-wrap gap-1 ml-auto",children:f.tags.slice(0,2).map(g=>h.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/30",children:g},g))})]})]},f.id))})]}),h.jsx("div",{className:"flex items-center gap-2 mb-6",children:g3.map(f=>h.jsx("button",{onClick:()=>r(f),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${n===f?"bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30":"bg-white/5 text-white/40 border-transparent hover:text-white/60 hover:bg-white/8"}`,children:f},f))}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:m.map(f=>h.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all group",children:[h.jsxs("div",{className:"p-4",children:[h.jsxs("div",{className:"flex items-start justify-between mb-2",children:[h.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/50 uppercase tracking-wider",children:f.category}),h.jsx("button",{onClick:()=>x(f.id),className:`transition-colors ${i.has(f.id)?"text-red-400":"text-white/20 hover:text-white/40"}`,children:h.jsx(Lg,{className:"w-4 h-4",fill:i.has(f.id)?"currentColor":"none"})})]}),h.jsx("h3",{className:"font-medium text-sm text-white/90 mb-1",children:f.title}),h.jsx("p",{className:"text-xs text-white/40 mb-3",children:f.description}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs(Qe,{href:"/",className:"flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-white/50 hover:text-white/70 transition-all",children:[h.jsx(bn,{className:"w-3 h-3"})," Run"]}),h.jsxs("button",{onClick:()=>d(c===f.id?null:f.id),className:"flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-white/50 hover:text-white/70 transition-all",children:[h.jsx(e0,{className:"w-3 h-3"})," ",c===f.id?"Hide":"Preview"]}),h.jsxs("div",{className:"flex items-center gap-1 ml-auto text-[10px] text-white/20",children:[h.jsx(e0,{className:"w-3 h-3"})," ",f.likes]})]})]}),c===f.id&&h.jsxs("div",{className:"border-t border-white/10 px-4 py-3 bg-[#0a0a15]",children:[h.jsx("div",{className:"flex flex-wrap gap-1 mb-2",children:f.tags.map(g=>h.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/30",children:g},g))}),h.jsxs(Qe,{href:"/",className:"inline-flex items-center gap-1 text-[10px] text-[#b8b0fc] hover:underline",children:["Open in IDE ",h.jsx(Dg,{className:"w-3 h-3"})]})]})]},f.id))})]})}const Uu=[{title:"GitHub Repository",url:"https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official",description:"Source code, issues, and contributions",icon:h.jsx(zg,{className:"w-4 h-4"}),type:"Code"},{title:"Language Reference",url:"/docs",description:"Complete documentation for all language features",icon:h.jsx(Qa,{className:"w-4 h-4"}),type:"Docs"},{title:"Interactive IDE",url:"/",description:"Write and run code instantly in the browser",icon:h.jsx($r,{className:"w-4 h-4"}),type:"Tool"},{title:"Quick Reference",url:"/cheatsheet",description:"Fast lookup for all syntax and APIs",icon:h.jsx(t0,{className:"w-4 h-4"}),type:"Docs"},{title:"Learn Page",url:"/learn",description:"Guided lessons from beginner to advanced",icon:h.jsx(Qa,{className:"w-4 h-4"}),type:"Learning"},{title:"Tutorials",url:"/tutorials",description:"Step-by-step projects you can build",icon:h.jsx(t0,{className:"w-4 h-4"}),type:"Learning"},{title:"Showcase",url:"/showcase",description:"Examples of what you can build",icon:h.jsx(gf,{className:"w-4 h-4"}),type:"Inspiration"},{title:"Playground",url:"/playground",description:"Quick experimentation space",icon:h.jsx($r,{className:"w-4 h-4"}),type:"Tool"}],y3=[{title:"print() is your debugger",content:"Print intermediate values at each step. It's the fastest way to understand what your code is actually doing."},{title:"Read the full error list",content:"Viper shows all parse errors at once. Fix them top to bottom — earlier errors often cause the ones below them."},{title:"Start from an example",content:"Pick the sidebar example closest to what you want, then modify it. It's faster than building from scratch."},{title:"Use the canvas tab",content:"Any code that calls canvas.setSize() will switch the output panel to Canvas automatically. You don't need to click."},{title:"Ctrl+Enter to run",content:"You don't need to reach for the Run button. Ctrl+Enter (or Cmd+Enter on Mac) runs the current code immediately."},{title:"Save your code locally",content:"The browser doesn't persist editor content between sessions. Copy your code into a local file when you want to keep it."}];function v3(){const[n,r]=S.useState("All"),i=["All",...Array.from(new Set(Uu.map(c=>c.type)))],s=n==="All"?Uu:Uu.filter(c=>c.type===n);return h.jsxs("div",{className:"max-w-5xl mx-auto",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Resources"}),h.jsx("p",{className:"text-sm text-white/50",children:"Links and tips for learning and building with Viper Invictus"})]}),h.jsx("div",{className:"flex gap-2 mb-6",children:i.map(c=>h.jsx("button",{onClick:()=>r(c),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${n===c?"bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30":"bg-white/5 text-white/40 border-transparent hover:text-white/60"}`,children:c},c))}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-10",children:s.map((c,d)=>h.jsxs("a",{href:c.url,target:c.url.startsWith("http")?"_blank":void 0,rel:c.url.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.07] hover:border-white/15 transition-all group",children:[h.jsx("div",{className:"w-9 h-9 rounded-lg bg-[#7c6af7]/10 flex items-center justify-center text-[#7c6af7] group-hover:bg-[#7c6af7]/15 transition-all",children:c.icon}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-sm font-medium text-white/80 group-hover:text-white/90 transition-colors",children:c.title}),c.url.startsWith("http")&&h.jsx(_g,{className:"w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors"})]}),h.jsx("p",{className:"text-xs text-white/40 mt-0.5",children:c.description})]}),h.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/30 uppercase tracking-wider shrink-0",children:c.type})]},d))}),h.jsxs("div",{className:"mb-6",children:[h.jsx("h2",{className:"text-sm font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Tips"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:y3.map((c,d)=>h.jsxs("div",{className:"p-4 bg-white/5 border border-white/10 rounded-xl",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[h.jsx("div",{className:"w-6 h-6 rounded bg-[#7c6af7]/10 flex items-center justify-center text-[#7c6af7] text-[10px] font-bold",children:d+1}),h.jsx("span",{className:"text-sm font-medium text-white/80",children:c.title})]}),h.jsx("p",{className:"text-xs text-white/40 leading-relaxed",children:c.content})]},d))})]}),h.jsx("div",{className:"bg-white/5 border border-white/10 rounded-xl p-6",children:h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#7c6af7]/10 flex items-center justify-center shrink-0",children:h.jsx($r,{className:"w-5 h-5 text-[#7c6af7]"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-semibold text-white/90 mb-1",children:"Open the IDE"}),h.jsx("p",{className:"text-xs text-white/50 mb-3 leading-relaxed",children:"The best way to learn is by running code and seeing what happens. Pick an example from the sidebar and start changing things."}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs(Qe,{href:"/",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c6af7] hover:bg-[#8d7ff8] text-white text-xs font-medium transition-colors",children:[h.jsx($r,{className:"w-3.5 h-3.5"})," Open IDE"]}),h.jsxs(Qe,{href:"/learn",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-xs transition-all border border-white/10",children:[h.jsx(Qa,{className:"w-3.5 h-3.5"})," Start Learning"]})]})]})]})})]})}const b3=[{version:"2.0",date:"June 2026",changes:[{type:"feature",text:"Compile cache: source is hashed on every execute() call — if the hash matches the last run, the lex/parse/compile pipeline is skipped entirely for a near-instant repeat run"},{type:"feature",text:"Frame count batching: the interpreter loop overhead check now fires every 512 frames instead of every frame, cutting animation loop overhead by roughly 500×"},{type:"feature",text:"Backend execution mode: send code to the Node.js API server instead of the browser VM — useful for code that uses fs, env, or http"},{type:"feature",text:"CLI download: grab the full Viper CLI package directly from the IDE toolbar"},{type:"feature",text:"Mobile layout: responsive sidebar and editor with touch-friendly controls and a full-screen editor on small screens"},{type:"improvement",text:"VM function calls now look up compiled bytecode from the program table and push proper call frames, fixing incorrect NULL returns"},{type:"improvement",text:"Error banner in the editor shows the exact line number of the first error and can be dismissed with one click"},{type:"improvement",text:"Backend/browser toggle in the toolbar lets you switch execution targets without leaving the editor"},{type:"improvement",text:"Console output is capped at 500 lines to keep the UI responsive during long or looping runs"},{type:"fix",text:"Canvas click handler now maps event coordinates correctly relative to canvas bounds"},{type:"fix",text:"Trusted mode bypass: the infinite loop guard is disabled for built-in examples and applied only to user-written code"}]},{version:"1.3",date:"June 2026",changes:[{type:"improvement",text:"Viper-to-JavaScript compiler for native execution speed via V8 TurboFan"},{type:"improvement",text:"Compiler handles all language constructs: variables, functions, classes, loops, conditionals, arrays, objects"},{type:"improvement",text:"Mandelbrot Explorer now renders in real-time with the compiled JS backend (was unusably slow with the tree-walker)"},{type:"improvement",text:"Automatic fallback to the tree-walker interpreter if the compiler hits an edge case"},{type:"improvement",text:"Compute-intensive examples now approach Python speed on loops, fractals, and sorting"}]},{version:"1.2",date:"June 2026",changes:[{type:"feature",text:"Python syntax support: def, elif, pass, True/False/None, and/or/not, is, in"},{type:"feature",text:"JavaScript syntax support: function, this, undefined, ===/!== operators"},{type:"feature",text:"Backend API server with /api/viper/run for server-side code execution"},{type:"feature",text:"fs module for file operations (read, write, exists, list) in backend mode"},{type:"feature",text:"env module for environment variables (get, set) in backend mode"},{type:"feature",text:"http module for web requests (get, post) in backend mode"},{type:"feature",text:"IDE mode toggle: run code in browser or send to backend server"},{type:"improvement",text:"Updated examples and cheatsheet with Python & JS syntax examples"}]},{version:"1.1",date:"June 2026",changes:[{type:"feature",text:"try/catch error handling with throw support"},{type:"feature",text:"switch/case/default multi-way branching"},{type:"feature",text:"do-while loops for at-least-once iteration"},{type:"feature",text:"Smart infinite loop protection: trusted examples bypass limit, user code strictly enforced"},{type:"improvement",text:"Added Error Handling section to cheatsheet and docs"}]},{version:"1.0",date:"June 2026",changes:[{type:"feature",text:"Initial release of Viper Invictus"},{type:"feature",text:"Browser-based IDE with Monaco editor and custom viper-dark theme"},{type:"feature",text:"Canvas graphics API: rect, roundRect, circle, ellipse, line, arc, ringArc, polygon, image, text, transforms"},{type:"feature",text:"Animation system with timer.loop() at ~60fps and timer.now() / timer.date()"},{type:"feature",text:"Full language support: let, const, var, functions, classes, arrays, objects, closures"},{type:"feature",text:"OOP with inheritance: class Child < Parent, init constructors, self keyword"},{type:"feature",text:"Interactive examples: Snake, Bouncing Balls, Generative Art, Clock, Sorting Visualizer, 3D Wireframe, Game of Life, Fractal Tree, Fireworks, Pong, Mandelbrot"},{type:"feature",text:"Learn page with 10 guided lessons and progress tracking"},{type:"feature",text:"Comprehensive documentation with search and copy-to-clipboard"},{type:"improvement",text:"Error reporting shows all parse errors at once, not just the first one"},{type:"improvement",text:"Syntax highlighting for the Viper language in Monaco editor"},{type:"fix",text:"Fixed keyboard input handling for canvas games with global key listener"}]}];function w3(n){switch(n){case"feature":return h.jsx(N2,{className:"w-3.5 h-3.5 text-[#7c6af7]"});case"fix":return h.jsx(qw,{className:"w-3.5 h-3.5 text-emerald-400"});case"improvement":return h.jsx(Tw,{className:"w-3.5 h-3.5 text-yellow-400"});case"security":return h.jsx(Ug,{className:"w-3.5 h-3.5 text-red-400"})}}function S3(n){switch(n){case"feature":return"bg-[#7c6af7]/10 text-[#b8b0fc] border-[#7c6af7]/20";case"fix":return"bg-emerald-500/10 text-emerald-400 border-emerald-500/20";case"improvement":return"bg-yellow-500/10 text-yellow-400 border-yellow-500/20";case"security":return"bg-red-500/10 text-red-400 border-red-500/20"}}function N3(n){return n==="2.0"?h.jsxs("div",{className:"ml-auto flex items-center gap-2 flex-wrap",children:[h.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20",children:[h.jsx(wa,{className:"w-3 h-3"})," Compiler"]}),h.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:[h.jsx(Li,{className:"w-3 h-3"})," Backend"]})]}):n==="1.3"?h.jsx("div",{className:"ml-auto",children:h.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20",children:[h.jsx(wa,{className:"w-3 h-3"})," JS Compiler"]})}):n==="1.2"?h.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[h.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:[h.jsx(Li,{className:"w-3 h-3"})," Frontend + Backend"]}),h.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-[#b8b0fc] bg-[#7c6af7]/10 px-2 py-0.5 rounded border border-[#7c6af7]/20",children:[h.jsx($r,{className:"w-3 h-3"})," Python + JS"]})]}):null}function j3(){return h.jsxs("div",{className:"max-w-3xl mx-auto",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Changelog"}),h.jsx("p",{className:"text-sm text-white/50",children:"Version history and release notes for Viper Invictus"})]}),h.jsx("div",{className:"space-y-6",children:b3.map(n=>h.jsxs("div",{className:`bg-white/5 border rounded-xl overflow-hidden ${n.version==="2.0"?"border-[#7c6af7]/30":"border-white/10"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02] flex-wrap gap-y-2",children:[h.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#7c6af7]/15 flex items-center justify-center shrink-0",children:h.jsx(r2,{className:"w-4 h-4 text-[#7c6af7]"})}),h.jsxs("div",{children:[h.jsxs("h2",{className:"text-sm font-semibold text-white/90 flex items-center gap-2",children:["v",n.version,n.version==="2.0"&&h.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-[#7c6af7]/20 text-[#b8b0fc] border border-[#7c6af7]/30 font-normal",children:"Latest"})]}),h.jsx("p",{className:"text-[11px] text-white/30",children:n.date})]}),N3(n.version)]}),h.jsx("div",{className:"p-5",children:h.jsx("ul",{className:"space-y-3",children:n.changes.map((r,i)=>h.jsxs("li",{className:"flex items-start gap-3",children:[h.jsx("span",{className:"shrink-0 mt-0.5",children:w3(r.type)}),h.jsxs("div",{className:"flex-1",children:[h.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded border mr-2 ${S3(r.type)}`,children:r.type}),h.jsx("span",{className:"text-sm text-white/60",children:r.text})]})]},i))})})]},n.version))})]})}const C3=new N1;function E3(){return h.jsx(Rt,{children:h.jsx("div",{className:"min-h-[60vh] flex items-center justify-center",children:h.jsxs("div",{className:"text-center",children:[h.jsx("p",{className:"text-6xl font-bold text-white/10 mb-4",children:"404"}),h.jsx("p",{className:"text-white/50 mb-6",children:"Page not found"}),h.jsx(Qe,{href:"/",className:"inline-block text-[#b8b0fc] hover:underline",children:"← Back to IDE"})]})})})}function A3(){return h.jsxs(Yb,{children:[h.jsx(At,{path:"/",component:()=>h.jsx(Rt,{fullWidth:!0,children:h.jsx(l3,{})})}),h.jsx(At,{path:"/learn",component:()=>h.jsx(Rt,{children:h.jsx(k0,{})})}),h.jsx(At,{path:"/learn/:topic",component:()=>h.jsx(Rt,{children:h.jsx(k0,{})})}),h.jsx(At,{path:"/docs",component:()=>h.jsx(Rt,{children:h.jsx(M0,{})})}),h.jsx(At,{path:"/docs/:topic",component:()=>h.jsx(Rt,{children:h.jsx(M0,{})})}),h.jsx(At,{path:"/examples",component:()=>h.jsx(Rt,{children:h.jsx(f3,{})})}),h.jsx(At,{path:"/cheatsheet",component:()=>h.jsx(Rt,{children:h.jsx(m3,{})})}),h.jsx(At,{path:"/tutorials",component:()=>h.jsx(Rt,{children:h.jsx(z0,{})})}),h.jsx(At,{path:"/tutorials/:id",component:()=>h.jsx(Rt,{children:h.jsx(z0,{})})}),h.jsx(At,{path:"/playground",component:()=>h.jsx(Rt,{children:h.jsx(p3,{})})}),h.jsx(At,{path:"/showcase",component:()=>h.jsx(Rt,{children:h.jsx(x3,{})})}),h.jsx(At,{path:"/resources",component:()=>h.jsx(Rt,{children:h.jsx(v3,{})})}),h.jsx(At,{path:"/changelog",component:()=>h.jsx(Rt,{children:h.jsx(j3,{})})}),h.jsx(At,{path:"/about",component:()=>h.jsx(Rt,{children:h.jsx(h3,{})})}),h.jsx(At,{component:E3})]})}function R3(){return h.jsx(C1,{client:C3,children:h.jsxs(f4,{children:[h.jsx(Q0,{hook:K0,children:h.jsx(A3,{})}),h.jsx(MS,{})]})})}jb.createRoot(document.getElementById("root")).render(h.jsx(R3,{}));
