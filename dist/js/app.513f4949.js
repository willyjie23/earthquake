(function(e){function t(t){for(var n,u,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={id:"app"},a=Object(n["c"])("h1",null,"地震快報",-1),u={class:"result"};function c(e,t,r,c,i,l){return Object(n["d"])(),Object(n["b"])("div",o,[a,Object(n["c"])("p",u,Object(n["e"])(i.result),1)])}var i={name:"App",data:function(){return{result:null,time:0}},created:function(){var e=this,t="https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=rdec-key-123-45678-011121314";e.time=setInterval((function(){e.result="",e.$http.get(t).then((function(t){e.result=t.data.records.earthquake[0].reportContent}))}),1e4)}};r("a5d6");i.render=c;var l=i,p=r("bc3a"),s=r.n(p),f=r("2106"),d=r.n(f),b=r("5118"),v=Object(n["a"])(l);v.use(d.a,s.a,b["setInterval"],b["clearInterval"]),v.mount("#app")},a3aa:function(e,t,r){},a5d6:function(e,t,r){"use strict";r("a3aa")}});
//# sourceMappingURL=app.513f4949.js.map