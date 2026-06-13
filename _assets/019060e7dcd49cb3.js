(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[77828],{

/***/ 931917:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(270977);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var oYc=async function(a,b,c){const d=nYc()();try{const e=__c.y(a.uj.context),f=d.r(await d.s(a.fetch(b.url,{signal:c}))),g=d.r(await d.s(f.arrayBuffer()));return e.decodeAudioData(g)}finally{d.s()}},qYc=function(a,b,c,d){if(d){var e=a.cache.get(b);e||(e={buffer:c,w2:new Set},c.catch(pYc.wrap(()=>{a.cache.delete(b)})),a.cache.set(b,e));e.w2.add(d);d.addEventListener("abort",()=>{e?.w2.delete(d);e&&e.w2.size===0&&a.cache.delete(b);e=void 0},{once:!0})}},pYc=__webpack_require__(815703).F;var nYc=__webpack_require__(929846)._;var rYc;
rYc=class{async yc(a,b,c){const d=nYc()();try{__c.u(b.ba>=0&&b.L>=0);const m=__c.xr(this.Zk,a);if(m){var e=this.cache.get(a)?.buffer||oYc(this,m,c);qYc(this,a,e,c);var f=d.r(await d.s(e)),g=b.L-f.duration*1E6;if(b.ba===0&&(g>=0||Math.abs(g)<=100))return f;var h=b.L/1E6*f.sampleRate;if(h<=0)return f;var k=new AudioBuffer({length:h,numberOfChannels:f.numberOfChannels,sampleRate:f.sampleRate}),l=Math.floor(f.sampleRate*b.ba/1E6);for(a=0;a<f.numberOfChannels;a++){const n=f.getChannelData(a).subarray(l,l+
h);k.copyToChannel(n,a)}return k}}finally{d.s()}}constructor(a,b,c=__c.fVc){this.uj=a;this.Zk=b;this.fetch=c;this.cache=new Map}};__c.NCa={};__c.NCa.dIb=rYc;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/019060e7dcd49cb3.js.map