(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[97668],{

/***/ 375443:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var RQc=__webpack_require__(1193).EW;__c.wZ=class{static G(a){__c.L(a,{step:RQc})}get kind(){return"point"}clone({qc:a=this.qc,yc:b=this.yc,hj:c=this.hj,Xd:d=this.Xd,inverse:e=this.inverse}){return new __c.wZ({qc:a,yc:b,hj:c,Xd:d,inverse:e})}snapshot(){const a=this.qc(),b=this.yc();return new __c.wZ({qc:()=>a,yc:()=>b,hj:this.hj,Xd:this.Xd,inverse:this.inverse})}get(a){const b=this.qc();var c=b.indexOf(a);c=this.inverse?b.length-1-c:c;__c.u(c!==-1,`value ${a} must exist in domain`);const [d,e]=this.yc();a=b.length===1?.5:this.hj();return d+
(a*this.step+c*this.step)*Math.sign(e-d)}get step(){const a=this.qc().length+2*this.hj(),[b,c]=this.yc();return Math.abs(c-b)/Math.max(a-1,1)}SS(a,b,c){__c.u(a.index!==b.index);const d=this.hj(),e=(b.center-a.center)/(b.index-a.index);return[a.center-(d+a.index)*e,b.center+(d+c-b.index-1)*e]}RS(a,b,c){const d=this.hj();return[b,a.center+(a.center-b)/(a.index+d)*(d+c-a.index-1)]}QS(a,b,c){const d=this.hj();return[a.center-(b-a.center)/(c-a.index-1+d)*(d+a.index),b]}constructor({qc:a,yc:b,hj:c,Xd:d,
inverse:e=!1}){__c.wZ.G(this);this.qc=a;this.yc=b;this.hj=c;this.Xd=d;this.inverse=e}};
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/00ef5fb6ba152c4f.js.map