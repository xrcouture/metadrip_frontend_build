/*! For license information please see 4.82395fee.chunk.js.LICENSE.txt */
(this.webpackJsonpmetadrip=this.webpackJsonpmetadrip||[]).push([[4],{344:function(t,e,r){"use strict";r.r(e),r.d(e,"AlchemyProvider",(function(){return v}));var n=r(37),o=r(26),i=r(8),a=r(9),c=r(5),u=r(6),s=r(343),h=r(83),f=r(49),l=r(32);r(119);function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(B){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof l?e:l,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:j(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(B){return{type:"throw",arg:B}}}t.wrap=s;var f={};function l(){}function p(){}function v(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==e&&r.call(m,i)&&(y=m);var w=v.prototype=l.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var p=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;Object(c.a)(this,t),this.sendBatchFn=e,this.maxBatchSize=r,this.pendingBatch=[]}return Object(u.a)(t,[{key:"enqueueRequest",value:function(t){return Object(s.h)(this,void 0,void 0,d().mark((function e(){var r,n,o=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={request:t,resolve:void 0,reject:void 0},n=new Promise((function(t,e){r.resolve=t,r.reject=e})),this.pendingBatch.push(r),this.pendingBatch.length===this.maxBatchSize?this.sendBatchRequest():this.pendingBatchTimer||(this.pendingBatchTimer=setTimeout((function(){return o.sendBatchRequest()}),10)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"sendBatchRequest",value:function(){return Object(s.h)(this,void 0,void 0,d().mark((function t(){var e,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.pendingBatch,this.pendingBatch=[],this.pendingBatchTimer&&(clearTimeout(this.pendingBatchTimer),this.pendingBatchTimer=void 0),r=e.map((function(t){return t.request})),t.abrupt("return",this.sendBatchFn(r).then((function(t){e.forEach((function(e,r){var n=t[r];if(n.error){var o=new Error(n.error.message);o.code=n.error.code,o.data=n.error.data,e.reject(o)}else e.resolve(n.result)}))}),(function(t){e.forEach((function(e){e.reject(t)}))})));case 5:case"end":return t.stop()}}),t,this)})))}}]),t}(),v=function(t){Object(i.a)(r,t);var e=Object(a.a)(r);function r(t){var n;Object(c.a)(this,r);var o=r.getApiKey(t.apiKey),i=r.getAlchemyNetwork(t.network),a=r.getAlchemyConnectionInfo(i,o,"http");void 0!==t.url&&(a.url=t.url),a.throttleLimit=t.maxRetries;var u=s.d[i];(n=e.call(this,a,u)).apiKey=t.apiKey,n.maxRetries=t.maxRetries,n.batchRequests=t.batchRequests;var h=Object.assign({},n.connection);h.headers["Alchemy-Ethers-Sdk-Method"]="batchSend";return n.batcher=new p((function(t){return Object(l.b)(h,JSON.stringify(t))})),n}return Object(u.a)(r,[{key:"detectNetwork",value:function(){var t=this,e=Object.create(null,{detectNetwork:{get:function(){return Object(n.a)(Object(o.a)(r.prototype),"detectNetwork",t)}}});return Object(s.h)(this,void 0,void 0,d().mark((function t(){var r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=(r=this.network)){t.next=7;break}return t.next=4,e.detectNetwork.call(this);case 4:if(r=t.sent){t.next=7;break}throw new Error("No network detected");case 7:return t.abrupt("return",r);case 8:case"end":return t.stop()}}),t,this)})))}},{key:"_startPending",value:function(){Object(s.t)("WARNING: Alchemy Provider does not support pending filters")}},{key:"isCommunityResource",value:function(){return this.apiKey===s.c}},{key:"send",value:function(t,e){return this._send(t,e,"send")}},{key:"_send",value:function(t,e,r){var n=this,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={method:t,params:e,id:this._nextId++,jsonrpc:"2.0"},a=Object.assign({},this.connection);if(a.headers["Alchemy-Ethers-Sdk-Method"]=r,this.batchRequests||o)return this.batcher.enqueueRequest(i);this.emit("debug",{action:"request",request:Object(s.l)(i),provider:this});var c=["eth_chainId","eth_blockNumber"].indexOf(t)>=0;if(c&&this._cache[t])return this._cache[t];var u=Object(l.b)(this.connection,JSON.stringify(i),y).then((function(t){return n.emit("debug",{action:"response",request:i,response:t,provider:n}),t}),(function(t){throw n.emit("debug",{action:"response",error:t,request:i,provider:n}),t}));return c&&(this._cache[t]=u,setTimeout((function(){n._cache[t]=null}),0)),u}}],[{key:"getApiKey",value:function(t){if(null==t)return s.c;if(t&&"string"!==typeof t)throw new Error("Invalid apiKey '".concat(t,"' provided. apiKey must be a string."));return t}},{key:"getNetwork",value:function(t){return"string"===typeof t&&t in s.b?s.b[t]:Object(h.a)(t)}},{key:"getAlchemyNetwork",value:function(t){if(void 0===t)return s.i;if("number"===typeof t)throw new Error("Invalid network '".concat(t,"' provided. Network must be a string."));if(!Object.values(s.f).includes(t))throw new Error("Invalid network '".concat(t,"' provided. Network must be one of: ")+"".concat(Object.values(s.f).join(", "),"."));return t}},{key:"getAlchemyConnectionInfo",value:function(t,e,r){var n="http"===r?Object(s.o)(t,e):Object(s.j)(t,e);return{headers:s.e?{"Alchemy-Ethers-Sdk-Version":s.g}:{"Alchemy-Ethers-Sdk-Version":s.g,"Accept-Encoding":"gzip"},allowGzip:!0,url:n}}}]),r}(f.a);function y(t){if(t.error){var e=new Error(t.error.message);throw e.code=t.error.code,e.data=t.error.data,e}return t.result}}}]);
//# sourceMappingURL=4.82395fee.chunk.js.map