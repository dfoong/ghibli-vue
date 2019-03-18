(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],p=0,h=[];p<s.length;p++)o=s[p],a[o]&&h.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4b89":function(e,t,r){e.exports=r.p+"assets/img/gb_2.71b13644.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("a026"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Mini Ghibli World")]),e._m(0),r("router-view")],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"navigation"}},[r("ul",[r("li",[r("a",{attrs:{href:"#/"}},[e._v("home")])]),r("li",[r("a",{attrs:{href:"#/music"}},[e._v("music")])]),r("li",[r("a",{attrs:{href:"#/recipes"}},[e._v("recipes")])]),r("li",[r("a",{attrs:{href:"#/about"}},[e._v("about")])])])])}],o={name:"app"},s=o,l=r("2877"),c=Object(l["a"])(s,a,i,!1,null,null,null),u=c.exports,p=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ghibli-vue"},[r("div",{staticClass:"container"},e._l(e.results,function(t){return r("div",{key:t.id,staticClass:"card"},[r("h1",[e._v(e._s(t.title))]),r("p",[e._v(e._s(t.description))])])}),0)])},d=[],f=r("bc3a"),b=r.n(f),v={name:"Ghibli",data(){return{results:[],errors:[]}},created:function(){b.a.get("https://ghibliapi.herokuapp.com/films",{}).then(e=>{this.results=e.data}).catch(e=>{this.errors.push(e)})}},m=v,_=Object(l["a"])(m,h,d,!1,null,"9148e15e",null),g=_.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("p",[r("b",[e._v("Hello! Welcome!")]),r("br"),e._v("\nThis is a small fan-made website dedicated to the colorful, magical, well-loved world of Studio Ghibli. For those of you who don't know, Studio Ghibli is the Japanese animation production studio responsible for movie titles such as: My Neighbour Totoro, Kiki's Delivery Service, Howl's Moving Castle, Spirited Away, and many more!\n")]),r("p",[e._v("\nThis project is built on the following:"),r("br"),r("a",{attrs:{href:"https://ghibliapi.herokuapp.com/",target:"_blank"}},[e._v("+ Studio Ghibli API")]),r("br"),r("a",{attrs:{href:"https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/",target:"_blank"}},[e._v("+ Tutorial by Tania Rascia")]),r("br"),e._v("\n+ Many hours of patience from my kind professor, Becky"),r("br"),e._v("\n= this capstone project for WATS4030"),r("br")]),r("p",[r("b",[e._v("About Me")]),r("br"),e._v("\nCurrently a UX designer for iOS and Android apps, Debbie has foundational skills in front-end web development (Javascript included)! Her specialties include design, corporate branding, and eating good food.\n"),r("br"),r("br"),e._v("\nWhat makes her stand out?"),r("br"),e._v("\nDebbie was born in Singapore and grew up around the world - South Africa, Japan, Canada, Hong Kong (SAR) and the United States, to name a few! With her Communications background and multicultural experiences, your team will never make a cultural faux pas in the global tech world again.\n"),r("br"),r("br"),e._v("\n你好，如果你在看我的网站，我好感谢！我是新加坡人，现住在西雅图。我的工作是UX设计师，在Pushpay。我平常做手机的应用。如果你也有计划想跟我说，请信息我！谢谢。"),r("br")])])}],k={name:"About",data(){return{}}},j=k,S=Object(l["a"])(j,w,y,!1,null,"2247a086",null),x=S.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ghibli-vue"},[r("div",{staticClass:"container"},e._l(e.results,function(t){return r("div",{key:t.id,staticClass:"card"},[r("h1",[e._v(e._s(t.title))]),r("p",[e._v(e._s(t.name)+"\n      "),r("br"),e._m(0,!0)])])}),0)])},C=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"https://www.youtube.com/watch?v=3jWRrafhO7M",target:"_blank"}},[r("b",[e._v("Soundtrack")])])}],M={name:"Music",data(){return{results:[],errors:[]}},created:function(){b.a.get("https://ghibliapi.herokuapp.com/locations",{}).then(e=>{this.results=e.data}).catch(e=>{this.errors.push(e)})}},A=M,E=Object(l["a"])(A,O,C,!1,null,"4fb09706",null),T=E.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipes"},[n("p",[e._v("\n    Chef: "),n("a",{attrs:{href:"https://www.instagram.com/en93kitchen/?hl=en",target:"_blank"}},[e._v("en93kitchen")]),n("br"),n("a",{attrs:{href:"https://www.boredpanda.com/anime-food-recreated-real-life-en93kitchen/?media_id=993452",target:"_blank"}},[e._v("Full recipe list here")]),n("br"),n("br"),n("i",[e._v("Dedicated to Cameron Forras.")])]),n("img",{attrs:{src:r("db77")}}),n("img",{attrs:{src:r("4b89")}}),n("img",{attrs:{src:r("ae7e")}})])}],G={name:"Recipes",data(){return{}}},W=G,J=Object(l["a"])(W,$,P,!1,null,"7c24e464",null),R=J.exports;n["a"].use(p["a"]);var D=new p["a"]({routes:[{path:"/",name:"Ghibli",component:g},{path:"/about",name:"About",component:x},{path:"/music",name:"Music",component:T},{path:"/recipes",name:"Recipes",component:R}]});n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:D,template:"<App/>",components:{App:u}})},ae7e:function(e,t,r){e.exports=r.p+"assets/img/gb_3.8ed6d7cc.jpg"},db77:function(e,t,r){e.exports=r.p+"assets/img/gb_1.05b277dc.jpg"}});
//# sourceMappingURL=app.8579387a.js.map