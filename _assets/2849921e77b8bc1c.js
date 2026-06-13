(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[37329],{

/***/ 172280:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var u=__c.u;var iCd,kCd,jCd,X7;iCd=function(a){return(Math.ceil(Math.sqrt(Math.max(1,Math.ceil(a/2))*4)/2)*2)**2};
kCd=function(a,b){const c=Math.ceil(b/1E6*200),d=Math.ceil(Math.ceil(b/1E6*a.sampleRate)/c),e=Array.from({length:a.numberOfChannels},(g,h)=>{g=Math.floor(0*a.sampleRate);const k=Math.min(Math.floor((0+b)/1E6*a.sampleRate),a.length);return a.getChannelData(h).subarray(g,k)}),f=new Float32Array(iCd(c));for(let g=0;g<c;g++){const h=jCd(e,g,d),k=g*2;f[k]=h.max;f[k+1]=h.min}return{buffer:f,f3:c}};
jCd=function(a,b,c){var d=Math.floor(b*c);b=Math.min(Math.floor((b+1)*c),a[0].length,d+500);c=Infinity;let e=-Infinity;for(;d<b;d++){let f=0;for(let g=0;g<a.length;++g)f+=a[g][d];c=Math.min(c,f);e=Math.max(e,f)}return{min:isFinite(c)?c/a.length:0,max:isFinite(e)?e/a.length:0}};
X7=class{static oXb(a){u(!0);u(!0);u(!0);const b=a.duration*1E6;u(a.duration*1E6>=b,"Duration of {}s exceeds audio length of {}s",b/1E6,a.duration);const {buffer:c,f3:d}=kCd(a,b);return new X7(c,0,d,200)}trim(a,b){u(a>=0&&b>=0);a=Math.floor(a/1E6*this.Wda);return new X7(this.buffer,this.Wwa+a,Math.min(Math.ceil(b/1E6*this.Wda),this.f3-a),this.Wda)}split(a){u(a>0);if(a<=1)return[this];const b=Math.ceil(this.f3/a);return Array.from({length:Math.ceil(a)},(c,d)=>{c=this.Wwa+d*b;return new X7(this.buffer,
c,Math.min(c+b,this.Wwa+this.f3)-c,this.Wda)})}repeat(a){u(a>0);if(a<=1)return this;const b=this.f3*a,c=new Float32Array(iCd(b));var d=this.Wwa*2;d=this.buffer.subarray(d,d+this.f3*2);for(let e=0;e<a;e++)c.set(d,e*d.length);return new X7(c,0,b,this.Wda)}constructor(a,b,c,d){this.buffer=a;this.Wwa=b;this.f3=c;this.Wda=d;u(c*2<=a.length)}};__c.GCa={};__c.GCa.OJb=X7;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/2849921e77b8bc1c.js.map