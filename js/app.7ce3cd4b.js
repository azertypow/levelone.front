(function(e){function t(t){for(var o,r,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-3c0383ce":"1d3eaaee","chunk-49e79169":"bfc3fd6a","chunk-c1ded1b6":"7b7eaa53"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-3c0383ce":1,"chunk-49e79169":1,"chunk-c1ded1b6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-3c0383ce":"d5f42b3a","chunk-49e79169":"e0287f5b","chunk-c1ded1b6":"f9911431"}[e]+".css",c=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===c))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===o||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://commergnat.com/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var o=n("1da1"),r=(n("96cf"),n("a4d3"),n("e01a"),n("d3b7"),n("5502")),c=n("cd84"),a=n("afbc"),i=Symbol(),u=Object(r["a"])({state:{appUnlocked:null,componentUnlocked:null,homeData:null},mutations:{changeCertificationConnection:function(e,t){e.componentUnlocked=t},changeAppConnection:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.appUnlocked=t,n.next=3,Object(c["a"])("home",{id:(null===(o=e.appUnlocked)||void 0===o?void 0:o.id)||"",password:(null===(r=e.appUnlocked)||void 0===r?void 0:r.password)||""});case 3:if(e.homeData=n.sent,null!==e.homeData&&(e.homeData,0)){n.next=7;break}return n.next=7,a["a"].push({name:"Home"});case 7:case"end":return n.stop()}}),n)})))()}},actions:{},modules:{},getters:{appLockStatus:function(e){return null===e.homeData?"waiting":"pageLocked"in e.homeData?"lock":"unlock"}}})},"0bfb":function(e,t,n){"use strict";n("b9ee")},"20d9":function(e,t,n){"use strict";n("e066")},"32c2":function(e,t,n){},"4dbc":function(e,t,n){"use strict";n("f6d4")},afbc:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var o=n("6c02"),r=[{path:"/",name:"Home",component:function(){return n.e("chunk-3c0383ce").then(n.bind(null,"bb51"))}},{path:"/login",name:"Log",component:function(){return n.e("chunk-c1ded1b6").then(n.bind(null,"f836"))}},{path:"/certification",name:"Certification",component:function(){return n.e("chunk-49e79169").then(n.bind(null,"6cbe"))}}],c=Object(o["a"])({history:Object(o["b"])(),routes:r,scrollBehavior:function(e,t,n){if(e.hash)return{el:e.hash,behavior:"smooth",top:"#v-home__main"===e.hash?200:100}}});t["a"]=c},b9ee:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var o=n("7a23"),r={key:0,class:"v-app v-app__loader"},c={key:1,class:"v-app"},a={key:0,class:"v-app__nav"};function i(e,t,n,i,u,s){var l=Object(o["C"])("navigation-app"),p=Object(o["C"])("router-view"),f=Object(o["C"])("app-footer");return"waiting"===e.store.getters.appLockStatus?(Object(o["u"])(),Object(o["f"])("div",r)):(Object(o["u"])(),Object(o["f"])("div",c,[e.isLogView?Object(o["e"])("",!0):(Object(o["u"])(),Object(o["f"])("div",a,[Object(o["j"])(l)])),Object(o["j"])(p),e.isLogView?Object(o["e"])("",!0):(Object(o["u"])(),Object(o["d"])(f,{key:1}))]))}var u=function(e){return Object(o["x"])("data-v-2982faf6"),e=e(),Object(o["v"])(),e},s={class:"v-navigation-app"},l={class:"v-navigation-app__top lo-g-row"},p={class:"v-navigation-app__top__date lo-g-gutter"},f=u((function(){return Object(o["g"])("img",{class:"v-navigation-app__top__logo",src:"/img/NC_logo.svg",alt:"logo"},null,-1)})),d={class:"v-navigation-app__bottom lo-g-box lo-g-box--centred lo-g-row"},b=Object(o["i"])("Level One"),h=Object(o["i"])("Biographie"),g=Object(o["i"])("Spécifications"),m=Object(o["i"])("Talents"),v=Object(o["i"])("Pré-commande"),j=Object(o["i"])("Certificats");function O(e,t,n,r,c,a){var i=Object(o["C"])("router-link");return Object(o["u"])(),Object(o["f"])("nav",s,[Object(o["g"])("div",l,[Object(o["g"])("div",p,Object(o["E"])(e.date),1),f]),Object(o["g"])("div",d,[Object(o["j"])(i,{class:"lo-g-gutter--half",to:{path:"/",hash:"#v-home__main"}},{default:Object(o["J"])((function(){return[b]})),_:1}),Object(o["j"])(i,{class:"lo-g-gutter--half",to:{path:"/",hash:"#v-home__bio"}},{default:Object(o["J"])((function(){return[h]})),_:1}),Object(o["j"])(i,{class:"lo-g-gutter--half",to:{path:"/",hash:"#v-home__specification"}},{default:Object(o["J"])((function(){return[g]})),_:1}),Object(o["j"])(i,{class:"lo-g-gutter--half",to:{path:"/",hash:"#v-home__talents"}},{default:Object(o["J"])((function(){return[m]})),_:1}),Object(o["j"])(i,{class:"lo-g-gutter--half",to:"/pre-order"},{default:Object(o["J"])((function(){return[v]})),_:1}),Object(o["j"])(i,{class:"lo-g-gutter--half",to:"/certification"},{default:Object(o["J"])((function(){return[j]})),_:1})])])}var k=Object(o["k"])({name:"NavigationApp",components:{},data:function(){return{date:function(){var e=new Date;return e.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}()}}}),_=(n("0bfb"),n("6b0d")),w=n.n(_);const y=w()(k,[["render",O],["__scopeId","data-v-2982faf6"]]);var x=y,C=function(e){return Object(o["x"])("data-v-02551946"),e=e(),Object(o["v"])(),e},A={class:"app-footer"},L=C((function(){return Object(o["g"])("div",{class:"app-footer__content"},[Object(o["g"])("div",null," Alliance Genève Sàrl "),Object(o["g"])("div",null," Rue des Alpes 15 – 1201 Genève "),Object(o["g"])("div",null,[Object(o["g"])("a",{href:"mailto:nicolas@commergnat.com?subject=Contact%20depuis%20le%20site%20commergnat.com"},"nicolas@commergnat.com")]),Object(o["g"])("div",null," © 2021 tous droits réservés. ")],-1)})),S=[L];function E(e,t,n,r,c,a){return Object(o["u"])(),Object(o["f"])("div",A,S)}var P=Object(o["k"])({name:"AppFooter",components:{}});n("4dbc");const N=w()(P,[["render",E],["__scopeId","data-v-02551946"]]);var D=N,T=n("5502"),J=n("0613"),R=Object(o["k"])({name:"App",data:function(){return{store:Object(T["b"])(J["a"])}},components:{AppFooter:D,NavigationApp:x},computed:{isLogView:function(){return"Log"===this.$route.name}}});n("20d9");const U=w()(R,[["render",i],["__scopeId","data-v-5965d11b"]]);var B=U,F=n("9483");Object(F["a"])("".concat("https://commergnat.com/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var I=n("afbc");n("32c2");I["a"].beforeEach((function(e,t,n){"unlock"===J["b"].getters.appLockStatus?n():"Log"!==e.name?I["a"].push({name:"Log"}):n()})),Object(o["c"])(B).use(I["a"]).use(J["b"],J["a"]).mount("#app"),J["b"].commit("changeAppConnection")},cd84:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("1da1"),r=(n("96cf"),n("99af"),n("d3b7"),"https://api.commergnat.com/");function c(e,t){return a.apply(this,arguments)}function a(){return a=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t,e.next="home"===e.t0?3:"certification"===e.t0?6:9;break;case 3:return e.next=5,i("/".concat(n?"".concat(n.id,"?password=").concat(n.password,"&"):"noIdPage"));case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,i("/certification/".concat(n?"".concat(n.id,"?password=").concat(n.password,"&"):"noIdPage"));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function i(e){return u.apply(this,arguments)}function u(){return u=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch(r+t,{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}},e066:function(e,t,n){},f6d4:function(e,t,n){}});
//# sourceMappingURL=app.7ce3cd4b.js.map