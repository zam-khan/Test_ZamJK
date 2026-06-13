(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[59427],{

/***/ 309382:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(155880);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var WNc,XNc;WNc=function(a,b,c){return __c.y(a.bi).U9(b,c)};XNc=function(a,b){if(a===""||b.length===0)return[];const c=[];let d=0;for(const e of b)b=a.slice(d,d+e),c.push(b),d+=e;return c};
__c.yY=class{Jf({store:a,text:b,nb:c,textAlign:d,constraint:e}){var f=__c.TNc(a,b);a={fontSize:a.fontSize,fontFamily:a.oh,fontWeight:a.fontWeight,textAlign:d,textBaseline:"alphabetic"};if(c==null||b!==""&&c.length===0){switch(e.type){case "size":c=e.maxWidth;break;case "aspectRatio":c=this.Va.measureText({text:b,...a});if(c.width/c.height<=e.Sob)return{lines:[b],Jf:[c],lineHeight:c.fontBoundingBoxAscent+c.fontBoundingBoxDescent};c=Math.sqrt(c.width*c.height*e.eCb);break;default:throw new __c.z(e);
}c=WNc(this,f,c)}f=c.length;if(f===0)return{lines:[],Jf:[],lineHeight:0};b=f>1?XNc(b,c):[b];c=b.map(l=>l.trimEnd());d=this.Va.sj({Us:c,...a});const g=d[0].fontBoundingBoxAscent+d[0].fontBoundingBoxDescent;if(e.type!=="size"||e.maxHeight==null||f===1||g*f<=e.maxHeight)return{lines:c,Jf:d,lineHeight:g};f=Math.max(0,Math.floor(e.maxHeight/g)-1);const {text:h,...k}=this.Va.rg({text:`${b[f]}${c[f+1]}`,...a,maxWidth:e.maxWidth});return{lines:[...c.slice(0,f),h],Jf:[...d.slice(0,f),k],lineHeight:g}}constructor(a,
b){this.Va=a;this.bi=b}};
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/dbbf45c71a8f7457.js.map