(this.webpackJsonpmetadrip=this.webpackJsonpmetadrip||[]).push([[5],{323:function(e,t,r){"use strict";r.r(t),r.d(t,"AlchemyProvider",(function(){return l}));var n=r(36),i=r(29),c=r(12),o=r(13),a=r(4),s=r(8),u=r(9),h=r(322),d=r(99),f=r(56),p=r(39),v=(r(145),function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;Object(s.a)(this,e),this.sendBatchFn=t,this.maxBatchSize=r,this.pendingBatch=[]}return Object(u.a)(e,[{key:"enqueueRequest",value:function(e){return Object(h.h)(this,void 0,void 0,Object(a.a)().mark((function t(){var r,n,i=this;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={request:e,resolve:void 0,reject:void 0},n=new Promise((function(e,t){r.resolve=e,r.reject=t})),this.pendingBatch.push(r),this.pendingBatch.length===this.maxBatchSize?this.sendBatchRequest():this.pendingBatchTimer||(this.pendingBatchTimer=setTimeout((function(){return i.sendBatchRequest()}),10)),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})))}},{key:"sendBatchRequest",value:function(){return Object(h.h)(this,void 0,void 0,Object(a.a)().mark((function e(){var t,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.pendingBatch,this.pendingBatch=[],this.pendingBatchTimer&&(clearTimeout(this.pendingBatchTimer),this.pendingBatchTimer=void 0),r=t.map((function(e){return e.request})),e.abrupt("return",this.sendBatchFn(r).then((function(e){t.forEach((function(t,r){var n=e[r];if(n.error){var i=new Error(n.error.message);i.code=n.error.code,i.data=n.error.data,t.reject(i)}else t.resolve(n.result)}))}),(function(e){t.forEach((function(t){t.reject(e)}))})));case 5:case"end":return e.stop()}}),e,this)})))}}]),e}()),l=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var n;Object(s.a)(this,r);var i=r.getApiKey(e.apiKey),c=r.getAlchemyNetwork(e.network),o=r.getAlchemyConnectionInfo(c,i,"http");void 0!==e.url&&(o.url=e.url),o.throttleLimit=e.maxRetries;var a=h.d[c];(n=t.call(this,o,a)).apiKey=e.apiKey,n.maxRetries=e.maxRetries,n.batchRequests=e.batchRequests;var u=Object.assign({},n.connection);u.headers["Alchemy-Ethers-Sdk-Method"]="batchSend";return n.batcher=new v((function(e){return Object(p.b)(u,JSON.stringify(e))})),n}return Object(u.a)(r,[{key:"detectNetwork",value:function(){var e=this,t=Object.create(null,{detectNetwork:{get:function(){return Object(n.a)(Object(i.a)(r.prototype),"detectNetwork",e)}}});return Object(h.h)(this,void 0,void 0,Object(a.a)().mark((function e(){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(r=this.network)){e.next=7;break}return e.next=4,t.detectNetwork.call(this);case 4:if(r=e.sent){e.next=7;break}throw new Error("No network detected");case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})))}},{key:"_startPending",value:function(){Object(h.t)("WARNING: Alchemy Provider does not support pending filters")}},{key:"isCommunityResource",value:function(){return this.apiKey===h.c}},{key:"send",value:function(e,t){return this._send(e,t,"send")}},{key:"_send",value:function(e,t,r){var n=this,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"},o=Object.assign({},this.connection);if(o.headers["Alchemy-Ethers-Sdk-Method"]=r,this.batchRequests||i)return this.batcher.enqueueRequest(c);this.emit("debug",{action:"request",request:Object(h.l)(c),provider:this});var a=["eth_chainId","eth_blockNumber"].indexOf(e)>=0;if(a&&this._cache[e])return this._cache[e];var s=Object(p.b)(this.connection,JSON.stringify(c),b).then((function(e){return n.emit("debug",{action:"response",request:c,response:e,provider:n}),e}),(function(e){throw n.emit("debug",{action:"response",error:e,request:c,provider:n}),e}));return a&&(this._cache[e]=s,setTimeout((function(){n._cache[e]=null}),0)),s}}],[{key:"getApiKey",value:function(e){if(null==e)return h.c;if(e&&"string"!==typeof e)throw new Error("Invalid apiKey '".concat(e,"' provided. apiKey must be a string."));return e}},{key:"getNetwork",value:function(e){return"string"===typeof e&&e in h.b?h.b[e]:Object(d.a)(e)}},{key:"getAlchemyNetwork",value:function(e){if(void 0===e)return h.i;if("number"===typeof e)throw new Error("Invalid network '".concat(e,"' provided. Network must be a string."));if(!Object.values(h.f).includes(e))throw new Error("Invalid network '".concat(e,"' provided. Network must be one of: ")+"".concat(Object.values(h.f).join(", "),"."));return e}},{key:"getAlchemyConnectionInfo",value:function(e,t,r){var n="http"===r?Object(h.o)(e,t):Object(h.j)(e,t);return{headers:h.e?{"Alchemy-Ethers-Sdk-Version":h.g}:{"Alchemy-Ethers-Sdk-Version":h.g,"Accept-Encoding":"gzip"},allowGzip:!0,url:n}}}]),r}(f.a);function b(e){if(e.error){var t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}}}]);
//# sourceMappingURL=5.7895ffb1.chunk.js.map