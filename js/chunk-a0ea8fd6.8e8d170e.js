(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0ea8fd6"],{"00b4":function(t,e,n){"use strict";n("ac1f");var i=n("23e7"),r=n("da84"),o=n("c65b"),a=n("e330"),c=n("1626"),l=n("861d"),s=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=r.Error,f=a(/./.test);i({target:"RegExp",proto:!0,forced:!s},{test:function(t){var e=this.exec;if(!c(e))return f(this,t);var n=o(e,this,t);if(null!==n&&!l(n))throw new u("RegExp exec method returned something other than an Object or null");return!!n}})},"0f50":function(t,e,n){"use strict";n("e3ee")},"107c":function(t,e,n){var i=n("d039"),r=n("da84"),o=r.RegExp;t.exports=i((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"20e5":function(t,e,n){"use strict";n("3d34")},"228b":function(t,e,n){t.exports=n.p+"img/background-specification__top.82009d49.svg"},2812:function(t,e,n){},"2f94":function(t,e,n){"use strict";n("91f3")},3835:function(t,e,n){t.exports=n.p+"img/hour.2155cee7.png"},3861:function(t,e,n){t.exports=n.p+"img/counter--active.24d7ecff.svg"},"3d34":function(t,e,n){},"3f35":function(t,e,n){},"40f2":function(t,e,n){t.exports=n.p+"img/home-section_main-bottom-left.c44220fc.png"},"4b3c":function(t,e,n){t.exports=n.p+"img/counter--unactive.52f9c72e.svg"},"4df4":function(t,e,n){"use strict";var i=n("da84"),r=n("0366"),o=n("c65b"),a=n("7b0b"),c=n("9bdd"),l=n("e95a"),s=n("68ee"),u=n("07fa"),f=n("8418"),d=n("9a1f"),b=n("35a1"),g=i.Array;t.exports=function(t){var e=a(t),n=s(this),i=arguments.length,m=i>1?arguments[1]:void 0,v=void 0!==m;v&&(m=r(m,i>2?arguments[2]:void 0));var h,p,O,_,y,j,x=b(e),I=0;if(!x||this==g&&l(x))for(h=u(e),p=n?new this(h):g(h);h>I;I++)j=v?m(e[I],I):e[I],f(p,I,j);else for(_=d(e,x),y=_.next,p=n?new this:[];!(O=o(y,_)).done;I++)j=v?c(_,m,[O.value,I],!0):O.value,f(p,I,j);return p.length=I,p}},"50aa":function(t,e,n){},5461:function(t,e,n){t.exports=n.p+"img/home-section_main-bottom-right.dacbc348.png"},"55d4":function(t,e,n){t.exports=n.p+"img/gallery-arrow-right__unactive.69cfd285.svg"},6487:function(t,e,n){},"759b":function(t,e,n){t.exports=n.p+"img/background.cea9bf67.jpg"},"7fd8":function(t,e,n){t.exports=n.p+"img/home-section_main-top.dbfe6731.png"},"91f3":function(t,e,n){},9263:function(t,e,n){"use strict";var i=n("c65b"),r=n("e330"),o=n("577e"),a=n("ad6d"),c=n("9f7f"),l=n("5692"),s=n("7c73"),u=n("69f3").get,f=n("fce3"),d=n("107c"),b=l("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,m=g,v=r("".charAt),h=r("".indexOf),p=r("".replace),O=r("".slice),_=function(){var t=/a/,e=/b*/g;return i(g,t,"a"),i(g,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),y=c.BROKEN_CARET,j=void 0!==/()??/.exec("")[1],x=_||j||y||f||d;x&&(m=function(t){var e,n,r,c,l,f,d,x=this,I=u(x),k=o(t),w=I.raw;if(w)return w.lastIndex=x.lastIndex,e=i(m,w,k),x.lastIndex=w.lastIndex,e;var S=I.groups,E=y&&x.sticky,T=i(a,x),C=x.source,R=0,$=k;if(E&&(T=p(T,"y",""),-1===h(T,"g")&&(T+="g"),$=O(k,x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==v(k,x.lastIndex-1))&&(C="(?: "+C+")",$=" "+$,R++),n=new RegExp("^(?:"+C+")",T)),j&&(n=new RegExp("^"+C+"$(?!\\s)",T)),_&&(r=x.lastIndex),c=i(g,E?n:x,$),E?c?(c.input=O(c.input,R),c[0]=O(c[0],R),c.index=x.lastIndex,x.lastIndex+=c[0].length):x.lastIndex=0:_&&c&&(x.lastIndex=x.global?c.index+c[0].length:r),j&&c&&c.length>1&&i(b,c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c&&S)for(c.groups=f=s(null),l=0;l<S.length;l++)d=S[l],f[d[0]]=c[d[1]];return c}),t.exports=m},"9bdd":function(t,e,n){var i=n("825a"),r=n("2a62");t.exports=function(t,e,n,o){try{return o?e(i(n)[0],n[1]):e(n)}catch(a){r(t,"throw",a)}}},"9cb4":function(t,e,n){t.exports=n.p+"img/gallery-arrow-right__active.cb1216e9.svg"},"9d98":function(t,e,n){t.exports=n.p+"img/minute.a2a433aa.png"},"9f7f":function(t,e,n){var i=n("d039"),r=n("da84"),o=r.RegExp,a=i((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=a||i((function(){return!o("a","y").sticky})),l=a||i((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:l,MISSED_STICKY:c,UNSUPPORTED_Y:a}},a1e8:function(t,e,n){t.exports=n.p+"img/BUILDING_NC-21.1af1c87e.png"},a48d:function(t,e,n){t.exports=n.p+"img/gallery-arrow-left__unactive.63739d07.svg"},a630:function(t,e,n){var i=n("23e7"),r=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:r})},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b64b:function(t,e,n){var i=n("23e7"),r=n("7b0b"),o=n("df75"),a=n("d039"),c=a((function(){o(1)}));i({target:"Object",stat:!0,forced:c},{keys:function(t){return o(r(t))}})},bb51:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),r={class:"v-home"},o=["innerHTML"];function a(t,e,n,a,c,l){var s=Object(i["D"])("section-main"),u=Object(i["D"])("section-bio"),f=Object(i["D"])("section-talents");return Object(i["v"])(),Object(i["g"])("div",r,[t.intro?(Object(i["v"])(),Object(i["e"])(s,{key:0,id:"v-home__main"},{default:Object(i["K"])((function(){return[Object(i["h"])("div",{class:"lo-g-gutter--half",innerHTML:t.intro.content},null,8,o)]})),_:1})):Object(i["f"])("",!0),"specification"in t.store.state.homeData?(Object(i["v"])(),Object(i["e"])(u,{key:1,id:"v-home__specification",dataSlide:t.store.state.homeData.specification},null,8,["dataSlide"])):Object(i["f"])("",!0),"biographie"in t.store.state.homeData?(Object(i["v"])(),Object(i["e"])(u,{key:2,id:"v-home__bio",dataSlide:t.store.state.homeData.biographie},null,8,["dataSlide"])):Object(i["f"])("",!0),Object(i["k"])(f,{id:"v-home__talents"})])}var c=n("7fd8"),l=n.n(c),s=n("5461"),u=n.n(s),f=n("40f2"),d=n.n(f),b={class:"v-section-main"},g={class:"v-section-main__gallery v-section-main__gallery--intro"},m={class:"v-section-main__txt"},v={class:"v-section-main__txt__background"},h={class:"v-section-main__gallery"};function p(t,e,n,r,o,a){var c=Object(i["D"])("hour-animation"),s=Object(i["D"])("subsection"),f=Object(i["D"])("image-gallery");return Object(i["v"])(),Object(i["g"])("section",b,[Object(i["h"])("div",g,[Object(i["k"])(c)]),Object(i["h"])("div",m,[Object(i["h"])("div",v,[Object(i["h"])("img",{alt:"",ref:"top",style:Object(i["r"])(t.style.top),class:"v-section-main__txt__background__top lo-section-bg--top",src:l.a},null,4),Object(i["h"])("img",{alt:"",ref:"right",style:Object(i["r"])(t.style.right),class:"v-section-main__txt__background__bottom-right lo-section-bg--right",src:u.a},null,4),Object(i["h"])("img",{alt:"",ref:"left",style:Object(i["r"])(t.style.left),class:"v-section-main__txt__background__bottom-left lo-section-bg--left",src:d.a},null,4)]),Object(i["k"])(s,{style:{"text-align":"center"},styleOption:"regular",title:"Level One",arrowNav:!1},{default:Object(i["K"])((function(){return[Object(i["C"])(t.$slots,"default",{},void 0,!0)]})),_:3})]),Object(i["h"])("div",h,[t.imageGallery?(Object(i["v"])(),Object(i["e"])(f,{key:0,arrayOfImgData:t.imageGallery},null,8,["arrayOfImgData"])):Object(i["f"])("",!0)])])}n("b64b");var O=n("3861"),_=n.n(O),y=n("4b3c"),j=n.n(y),x={class:"v-image-gallery"},I=["src"],k={class:"v-image-gallery__counter"},w=["alt"],S=["alt"];function E(t,e,n,r,o,a){return Object(i["v"])(),Object(i["g"])("div",x,[Object(i["h"])("img",{class:"v-image-gallery__ui v-image-gallery__ui--left",src:"/img/NC-ui-arrow_2-left.svg",alt:"ui arrow left navigation",onClick:e[0]||(e[0]=function(e){return t.slideInGallery("toLeft")})}),Object(i["h"])("img",{class:"v-image-gallery__ui v-image-gallery__ui--right",src:"/img/NC-ui-arrow_2-right.svg",alt:"ui arrow right navigation",onClick:e[1]||(e[1]=function(e){return t.slideInGallery("toRight")})}),Object(i["h"])("div",{class:"v-image-gallery__imgs",ref:"imageGallery",onScroll:e[2]||(e[2]=function(){return t.onScrollInGallery&&t.onScrollInGallery.apply(t,arguments)})},[(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["B"])(t.arrayOfImgData,(function(t){return Object(i["v"])(),Object(i["g"])("img",{src:t.url,alt:""},null,8,I)})),256))],544),Object(i["h"])("div",k,[(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["B"])(Object.keys(t.arrayOfImgData).length,(function(e){return Object(i["v"])(),Object(i["g"])(i["a"],null,[e-1===t.currentIndex?(Object(i["v"])(),Object(i["g"])("img",{key:0,alt:e,src:_.a},null,8,w)):(Object(i["v"])(),Object(i["g"])("img",{key:1,alt:e,src:j.a},null,8,S))],64)})),256))])])}var T=Object(i["l"])({name:"ImageGallery",components:{},data:function(){return{currentIndex:0}},props:{arrayOfImgData:{required:!0,type:Object}},methods:{onScrollInGallery:function(t){if(this.$refs.imageGallery instanceof HTMLElement){var e=this.$refs.imageGallery.scrollLeft,n=this.$refs.imageGallery.getBoundingClientRect().width;this.currentIndex=Math.floor((e+n/2)/n)}},slideInGallery:function(t){if(this.$refs.imageGallery instanceof HTMLElement){var e=this.currentIndex;switch(t){case"toLeft":if(e--,e<0)break;this.$refs.imageGallery.scrollTo({left:e*this.$refs.imageGallery.getBoundingClientRect().width,behavior:"smooth"});break;case"toRight":if(e++,e>=Object.keys(this.arrayOfImgData).length)break;this.$refs.imageGallery.scrollTo({left:e*this.$refs.imageGallery.getBoundingClientRect().width,behavior:"smooth"}),console.log("right")}}}}}),C=(n("20e5"),n("6b0d")),R=n.n(C);const $=R()(T,[["render",E],["__scopeId","data-v-9fdafe68"]]);var A=$,D=n("759b"),L=n.n(D),G=n("3835"),M=n.n(G),H=n("9d98"),B=n.n(H),N=n("fc4b"),q=n.n(N),V={class:"v-hour-animation"},K={class:"v-hour-animation__container"},U={ref:"background",src:L.a,alt:"background"},z={ref:"hour",src:M.a,alt:"hour"},F={ref:"minute",src:B.a,alt:"minute"},J={ref:"second",src:q.a,alt:"second"};function P(t,e,n,r,o,a){return Object(i["v"])(),Object(i["g"])("div",V,[Object(i["h"])("div",K,[Object(i["h"])("img",U,null,512),Object(i["h"])("img",z,null,512),Object(i["h"])("img",F,null,512),Object(i["h"])("img",J,null,512)])])}var Y=Object(i["l"])({name:"HourAnimation",components:{},mounted:function(){var t=this,e=this.$refs.second,n=this.$refs.minute,i=this.$refs.hour;e instanceof HTMLElement&&n instanceof HTMLElement&&i instanceof HTMLElement&&(this.setElementRotation({element:e,value:30,incrementalAngleValue:6}),this.setElementRotation({element:n,value:10,incrementalAngleValue:6}),this.setElementRotation({element:i,value:10,incrementalAngleValue:30}),setTimeout((function(){t.startAnimation({second:e,minute:n,hour:i})}),5e3))},data:function(){return{frameCounter:0}},methods:{startAnimation:function(t){var e=this,n=t.second,i=t.minute,r=t.hour,o=3e3;n.style.transition="transform ".concat(o,"ms cubic-bezier(1, 0, .75, 1)"),i.style.transition="transform ".concat(o,"ms cubic-bezier(1, 0, .75, 1)"),r.style.transition="transform ".concat(o,"ms cubic-bezier(1, 0, .75, 1)");var a=new Date;this.setElementRotation({element:n,value:(a.getTime()+o)/1e3%60,incrementalAngleValue:6}),this.setElementRotation({element:i,value:(a.getTime()+o)/1e3/60%60,incrementalAngleValue:6}),this.setElementRotation({element:r,value:(a.getTime()+o)/1e3/60/60%24+1,incrementalAngleValue:30}),window.setTimeout((function(){n.style.transition="",i.style.transition="",r.style.transition="",e.animation({second:n,minute:i,hour:r})}),o)},animation:function(t){var e=this,n=new Date;this.setElementRotation({element:t.second,value:n.getTime(),incrementalAngleValue:.006}),this.setElementRotation({element:t.minute,value:n.getTime(),incrementalAngleValue:1e-4}),this.setElementRotation({element:t.hour,value:n.getTime()+36e5,incrementalAngleValue:1e-4/12}),window.requestAnimationFrame((function(){e.frameCounter++,e.animation({second:t.second,minute:t.minute,hour:t.hour})}))},setElementRotation:function(t){var e=t.value*t.incrementalAngleValue;t.element.style.transform="rotate(".concat(e,"deg)")}}});n("0f50");const Q=R()(Y,[["render",P],["__scopeId","data-v-06877c19"]]);var W=Q,X=n("ed5c"),Z=n.n(X),tt=n("a48d"),et=n.n(tt),nt=n("55d4"),it=n.n(nt),rt=n("9cb4"),ot=n.n(rt),at={class:"v-subsection__content v-subsection__content--centred lo-remove-child-margin lo-g-gutter--half"},ct={key:0,class:"v-subsection__ui-box"};function lt(t,e,n,r,o,a){return Object(i["v"])(),Object(i["g"])("section",{class:Object(i["q"])(["v-subsection",{"is-l":"large"===t.styleOption}])},[Object(i["h"])("div",at,[Object(i["h"])("h1",{class:Object(i["q"])(["v-subsection__content__title lo-g-gutter--half",{"title-variant":t.titleVariant}])},Object(i["F"])(t.title),3),Object(i["h"])("div",{class:"v-subsection__content__slot",ref:"scrollContent",onScroll:e[0]||(e[0]=function(){return t.onScrollInSlideContainer&&t.onScrollInSlideContainer.apply(t,arguments)})},[Object(i["C"])(t.$slots,"default")],544)]),t.arrowNav?(Object(i["v"])(),Object(i["g"])("div",ct,[t.currentIndex>0?(Object(i["v"])(),Object(i["g"])("img",{key:0,class:"v-subsection__ui--left",onClick:e[1]||(e[1]=function(e){return t.slideInGallery("toLeft")}),src:Z.a,alt:""})):(Object(i["v"])(),Object(i["g"])("img",{key:1,class:"v-subsection__ui--left",onClick:e[2]||(e[2]=function(e){return t.slideInGallery("toLeft")}),src:et.a,alt:""})),t.isLastSlide?(Object(i["v"])(),Object(i["g"])("img",{key:2,class:"v-subsection__ui--right",onClick:e[3]||(e[3]=function(e){return t.slideInGallery("toRight")}),src:it.a,alt:""})):(Object(i["v"])(),Object(i["g"])("img",{key:3,class:"v-subsection__ui--right",onClick:e[4]||(e[4]=function(e){return t.slideInGallery("toRight")}),src:ot.a,alt:""}))])):Object(i["f"])("",!0)],2)}var st=Object(i["l"])({name:"Subsection",components:{},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.scrollContent instanceof HTMLElement&&(t.slideNumber=t.$refs.scrollContent.childElementCount)}))},data:function(){return{currentIndex:0,slideNumber:1}},props:{styleOption:{type:String,require:!0,default:"regular"},title:{type:String,require:!0},arrowNav:{type:Boolean,require:!1,default:!0},titleVariant:{type:Boolean,require:!1,default:!1}},computed:{isLastSlide:function(){return this.currentIndex+1===this.slideNumber}},methods:{onScrollInSlideContainer:function(t){if(this.$refs.scrollContent instanceof HTMLElement){var e=this.$refs.scrollContent.scrollLeft,n=this.$refs.scrollContent.getBoundingClientRect().width;this.currentIndex=Math.floor((e+n/2)/n)}},slideInGallery:function(t){if(this.$refs.scrollContent instanceof HTMLElement){var e=this.currentIndex;switch(t){case"toLeft":if(e--,e<0)break;this.$refs.scrollContent.scrollTo({left:e*this.$refs.scrollContent.getBoundingClientRect().width,behavior:"smooth"});break;case"toRight":if(e++,e>=this.slideNumber)break;this.$refs.scrollContent.scrollTo({left:e*this.$refs.scrollContent.getBoundingClientRect().width,behavior:"smooth"})}}}}});n("d5da");const ut=R()(st,[["render",lt]]);var ft=ut,dt=n("5502"),bt=n("0613"),gt=Object(i["l"])({name:"SectionMain",components:{Subsection:ft,HourAnimation:W,ImageGallery:A},data:function(){return{store:Object(dt["b"])(bt["a"]),style:{top:{},right:{},left:{}}}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("scroll",(function(){t.style.top=t.computedStyle(t.$refs.top),t.style.right=t.computedStyle(t.$refs.right),t.style.left=t.computedStyle(t.$refs.left)}))}))},methods:{computedStyle:function(t){return t instanceof HTMLElement?{opacity:1-t.getBoundingClientRect().top/(window.innerHeight/2)}:{opacity:1}}},computed:{imageGallery:function(){return null===this.store.state.homeData||this.store.state.homeData,this.store.state.homeData.slider}}});n("bc9b");const mt=R()(gt,[["render",p],["__scopeId","data-v-b5439f14"]]);var vt=mt,ht=function(t){return Object(i["y"])("data-v-0f487e48"),t=t(),Object(i["w"])(),t},pt={class:"v-section-bio",ref:"componentElement"},Ot=ht((function(){return Object(i["h"])("h2",{class:"v-section-bio__slides__subtitle"},"subtitle",-1)})),_t=["src"],yt=["innerHTML"];function jt(t,e,n,r,o,a){var c=Object(i["D"])("subsection");return Object(i["v"])(),Object(i["g"])("section",pt,[Object(i["k"])(c,{title:t.dataSlide.title},{default:Object(i["K"])((function(){return[(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["B"])(t.dataSlide.slides,(function(t){return Object(i["v"])(),Object(i["g"])("div",{class:Object(i["q"])(["v-section-bio__slides",{half:Object.keys(t.image).length>0}])},[Ot,(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["B"])(t.image,(function(t){return Object(i["v"])(),Object(i["g"])("img",{class:"v-section-bio__slides__img",src:t.url,alt:""},null,8,_t)})),256)),Object(i["h"])("div",{class:"v-section-bio__slides__content lo-remove-child-margin",innerHTML:t.content},null,8,yt)],2)})),256))]})),_:1},8,["title"])],512)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630"),n("ac1f"),n("00b4");function xt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function It(t,e){if(t){if("string"===typeof t)return xt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xt(t,e):void 0}}function kt(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=It(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}var wt=Object(i["l"])({name:"SectionBio",components:{Subsection:ft},props:{dataSlide:{require:!0,type:Object}},computed:{},mounted:function(){var t=this;this.$nextTick((function(){if(t.$refs.componentElement instanceof HTMLElement){var e,n=t.$refs.componentElement.querySelectorAll(".v-section-bio__slides"),i=kt(n);try{for(i.s();!(e=i.n()).done;){var r,o=e.value,a=null===(r=o.querySelector(".v-section-bio__slides__content"))||void 0===r?void 0:r.querySelector("h1"),c=o.querySelector(".v-section-bio__slides__subtitle");a instanceof HTMLElement?(c.innerText=a.innerText,a.remove()):c.remove()}}catch(l){i.e(l)}finally{i.f()}}}))}});n("cf8c");const St=R()(wt,[["render",jt],["__scopeId","data-v-0f487e48"]]);var Et=St,Tt=n("228b"),Ct=n.n(Tt),Rt=n("a1e8"),$t=n.n(Rt),At={class:"v-section-talents",id:"v-section-talents"},Dt=Object(i["h"])("div",{class:"v-section-talents__background"},[Object(i["h"])("img",{alt:"",class:"v-section-talents__background__top lo-section-bg--top",src:Ct.a}),Object(i["h"])("img",{alt:"",class:"v-section-talents__background__bottom-background lo-section-bg--background",src:$t.a})],-1),Lt=["innerHTML"];function Gt(t,e,n,r,o,a){var c=Object(i["D"])("subsection");return Object(i["v"])(),Object(i["g"])("section",At,[Dt,null!==t.talents?(Object(i["v"])(),Object(i["e"])(c,{key:0,title:"Talents réunis",styleOption:"large",style:{"text-align":"center"},arrowNav:!1,titleVariant:!0},{default:Object(i["K"])((function(){return[Object(i["h"])("div",{class:"lo-g-gutter--half",innerHTML:t.talents.content},null,8,Lt)]})),_:1})):Object(i["f"])("",!0)])}var Mt=Object(i["l"])({name:"SectionTalents",components:{Subsection:ft},data:function(){return{store:Object(dt["b"])(bt["a"])}},computed:{talents:function(){return null===this.store.state.homeData?null:"talents"in this.store.state.homeData?this.store.state.homeData.talents:null}}});n("2f94");const Ht=R()(Mt,[["render",Gt]]);var Bt=Ht,Nt=Object(i["l"])({name:"Home",components:{SectionTalents:Bt,SectionBio:Et,SectionMain:vt},data:function(){return{store:Object(dt["b"])(bt["a"])}},computed:{intro:function(){return null===this.store.state.homeData?null:"intro"in this.store.state.homeData?this.store.state.homeData.intro:null}}});n("e803");const qt=R()(Nt,[["render",a],["__scopeId","data-v-2aa0fd7c"]]);e["default"]=qt},bc9b:function(t,e,n){"use strict";n("3f35")},cf8c:function(t,e,n){"use strict";n("50aa")},d28b:function(t,e,n){var i=n("746f");i("iterator")},d5da:function(t,e,n){"use strict";n("2812")},e3ee:function(t,e,n){},e803:function(t,e,n){"use strict";n("6487")},ed5c:function(t,e,n){t.exports=n.p+"img/gallery-arrow-left__active.4b95bfa0.svg"},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("e8b5"),a=n("68ee"),c=n("861d"),l=n("23cb"),s=n("07fa"),u=n("fc6a"),f=n("8418"),d=n("b622"),b=n("1dde"),g=n("f36a"),m=b("slice"),v=d("species"),h=r.Array,p=Math.max;i({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var n,i,r,d=u(this),b=s(d),m=l(t,b),O=l(void 0===e?b:e,b);if(o(d)&&(n=d.constructor,a(n)&&(n===h||o(n.prototype))?n=void 0:c(n)&&(n=n[v],null===n&&(n=void 0)),n===h||void 0===n))return g(d,m,O);for(i=new(void 0===n?h:n)(p(O-m,0)),r=0;m<O;m++,r++)m in d&&f(i,r,d[m]);return i.length=r,i}})},fc4b:function(t,e,n){t.exports=n.p+"img/second.da618c14.png"},fce3:function(t,e,n){var i=n("d039"),r=n("da84"),o=r.RegExp;t.exports=i((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-a0ea8fd6.8e8d170e.js.map