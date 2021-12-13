(function(e){function t(t){for(var c,o,u=t[0],i=t[1],s=t[2],v=0,d=[];v<u.length;v++)o=u[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue3-event-app /";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"348c":function(e,t,n){"use strict";n("7115")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"app"},a={id:"nav"},o=Object(c["f"])("Events"),u=Object(c["f"])(" | "),i=Object(c["f"])("About");function s(e,t){var n=Object(c["w"])("router-link"),s=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",r,[Object(c["g"])("div",a,[Object(c["g"])(n,{to:{name:"EventList"}},{default:Object(c["C"])((function(){return[o]})),_:1}),u,Object(c["g"])(n,{to:{name:"About"}},{default:Object(c["C"])((function(){return[i]})),_:1})]),Object(c["g"])(s)])}n("348c");var b=n("d959"),v=n.n(b);const d={},l=v()(d,[["render",s]]);var p=l,f=n("8c4f"),j=Object(c["D"])("data-v-ca9a56ca");Object(c["s"])("data-v-ca9a56ca");var O={class:"events"};Object(c["q"])();var h=j((function(e,t,n,r,a,o){var u=Object(c["w"])("EventCard");return Object(c["p"])(),Object(c["d"])("div",O,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.events,(function(e){return Object(c["p"])(),Object(c["d"])(u,{key:e.id,event:e},null,8,["event"])})),128))])})),y=Object(c["D"])("data-v-1ae79de6");Object(c["s"])("data-v-1ae79de6");var g={class:"event-card"};Object(c["q"])();var m=y((function(e,t,n,r,a,o){var u=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:y((function(){return[Object(c["g"])("div",g,[Object(c["g"])("span",null,"@"+Object(c["y"])(n.event.time)+" on "+Object(c["y"])(n.event.date),1),Object(c["g"])("h4",null,Object(c["y"])(n.event.title),1)])]})),_:1},8,["to"])})),w={props:{event:{type:Object,required:!0}}};n("e23a");const _=v()(w,[["render",m],["__scopeId","data-v-1ae79de6"]]);var E=_,k=n("bc3a"),P=n.n(k),C=P.a.create({baseURL:"https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),x={getEvents:function(){return C.get("/events")},getEvent:function(e){return C.get("/events/"+e)}},A={name:"EventList",components:{EventCard:E},data:function(){return{events:null}},created:function(){var e=this;x.getEvents().then((function(t){e.events=t.data})).catch((function(e){console.log(e)}))}};n("bbaa");const S=v()(A,[["render",h],["__scopeId","data-v-ca9a56ca"]]);var D=S,L={class:"about"},M=Object(c["g"])("p",null,"A site for events to better the world.",-1);function q(e,t){return Object(c["p"])(),Object(c["d"])("div",L,[M])}const T={},I=v()(T,[["render",q]]);var J=I,R=(n("a4d3"),n("e01a"),{key:0});function U(e,t,n,r,a,o){return a.event?(Object(c["p"])(),Object(c["d"])("div",R,[Object(c["g"])("h1",null,Object(c["y"])(a.event.title),1),Object(c["g"])("p",null,Object(c["y"])(a.event.time)+" on "+Object(c["y"])(a.event.date)+" @"+Object(c["y"])(a.event.location),1),Object(c["g"])("p",null,Object(c["y"])(a.event.description),1)])):Object(c["e"])("",!0)}var V={props:["id"],data:function(){return{event:null}},created:function(){var e=this;x.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(e){console.log(e)}))}};const W=v()(V,[["render",U]]);var z=W,B=[{path:"/",name:"EventList",component:D},{path:"/about",name:"About",component:J},{path:"/event/:id",name:"EventDetails",props:!0,component:z}],F=Object(f["a"])({history:Object(f["b"])("/vue3-event-app /"),routes:B}),G=F,H=n("5502"),K=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(p).use(K).use(G).mount("#app")},"6fae":function(e,t,n){},7115:function(e,t,n){},bbaa:function(e,t,n){"use strict";n("6fae")},e23a:function(e,t,n){"use strict";n("ebb9")},ebb9:function(e,t,n){}});
//# sourceMappingURL=app.e4bd7c6b.js.map