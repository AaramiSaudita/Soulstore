(function(t){function e(e){for(var a,n,s=e[0],i=e[1],l=e[2],u=0,f=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);b&&b(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o={app:0},c=[];function s(t){return i.p+"js/"+({about:"about",collections:"collections",contact:"contact"}[t]||t)+"."+{about:"d44221b2",collections:"d90bfee6",contact:"514c2263"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={collections:1,contact:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about",collections:"collections",contact:"contact"}[t]||t)+"."+{about:"31d6cfe0",collections:"ccb8ff09",contact:"59d1fa16"}[t]+".css",o=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete n[t],b.parentNode.removeChild(b),r(c)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(b);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}o[t]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Soulstore/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var b=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0298":function(t,e,r){t.exports=r.p+"img/DarkSouls.4fda23af.jpg"},"034f":function(t,e,r){"use strict";r("85ec")},1670:function(t,e,r){t.exports=r.p+"img/Juan.16a78287.jpg"},2365:function(t,e,r){t.exports=r.p+"img/imagotipo.13169a31.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var a=r("2b0e"),n=r("ecee"),o=r("c074"),c=r("ad3d");n["c"].add(o["a"]),a["default"].component("font-awesome-icon",c["a"]);var s=r("5f5b");r("ab8b"),r("2dd8");a["default"].use(s["a"]);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[r("Menu"),r("b-breadcrumb",{attrs:{items:t.items}}),r("router-view"),r("Footer")],1)])},l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-container",[a("b-img",{attrs:{center:"",src:r("2365"),fluid:"",alt:"SoulStore Bonfire Logo"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{attrs:{center:""}},[a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Products"}},[t._v("Products")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/About"}},[t._v("About Us")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Contact"}},[t._v("Contact Us")])],1)],1)],1)],1)},f=[],b={},p=b,d=(r("9008"),r("2877")),m=Object(d["a"])(p,u,f,!1,null,"4a108e12",null),v=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{attrs:{center:""}},[a("b-col",{attrs:{cols:"6",md:"4"}},[a("br"),a("br"),a("b-img",{attrs:{center:"",src:r("2365"),alt:"SoulStore Bonfire Logo"}}),a("br"),a("p",{attrs:{center:""}},[t._v("Copyright 2022 © SoulStore. The Souls-Borne Merch Brand")])],1),a("b-col",{attrs:{cols:"6",md:"4",center:""}},[a("br"),a("br"),a("strong",[t._v("Menu")]),t._v(" "),a("br"),a("br"),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Products"}},[t._v("Products")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/About"}},[t._v("About Us")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Contact"}},[t._v("Contact Us")])],1),a("b-col",{attrs:{cols:"6",md:"4",center:""}},[a("br"),a("br"),a("strong",[t._v("Social Media")]),t._v(" "),a("br"),a("br"),a("ul",{staticClass:"socialIcons"},[a("li",{staticClass:"facebook"},[a("a",{attrs:{href:"https://www.facebook.com/"}},[a("i",{staticClass:"fa fa-fw fa-facebook"}),t._v("Facebook")])]),a("li",{staticClass:"twitter"},[a("a",{attrs:{href:"https://twitter.com/"}},[a("i",{staticClass:"fa fa-fw fa-twitter"}),t._v("Twitter")])]),a("li",{staticClass:"instagram"},[a("a",{attrs:{href:"https://www.instagram.com/"}},[a("i",{staticClass:"fa fa-fw fa-instagram"}),t._v("Instagram")])]),a("li",{staticClass:"kickstarter"},[a("a",{attrs:{href:"https://www.kickstarter.com/"}},[a("i",{staticClass:"fa fa-fw fa-kickstarter-p"}),t._v("KickStarter")])]),a("li",{staticClass:"steam"},[a("a",{attrs:{href:"https://store.steampowered.com/"}},[a("i",{staticClass:"fa fa-fw fa-steam"}),t._v("Steam")])]),a("br")])])],1)},g=[],_={},w=_,C=(r("760c"),Object(d["a"])(w,h,g,!1,null,null,null)),S=C.exports,k={name:"App",components:{Menu:v,Footer:S},data:function(){return{items:[{text:"Home",href:"/home",to:"/home"},{text:"Actual Page",active:!0}]}}},y=k,x=(r("034f"),Object(d["a"])(y,i,l,!1,null,null,null)),O=x.exports,j=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("WELCOME TO SOULSTORE")]),r("br"),r("br"),r("Carrusel"),r("br"),r("br"),r("h2",[t._v("Our team")]),r("br"),r("p",[t._v("Here you can see the faces that are hidden behind SoulStore.")]),r("br"),r("Ourteam")],1)},P=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Our collections")]),a("br"),a("br"),a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},[a("b-carousel-slide",{attrs:{caption:"Dark Souls Collection","img-src":r("0298")}}),a("b-carousel-slide",{attrs:{caption:"Bloodborne Collection","img-src":r("6b45")}}),a("b-carousel-slide",{attrs:{caption:"Sekiro Collection","img-src":r("bba0")}}),a("b-carousel-slide",{attrs:{caption:"Elden Ring Collection","img-src":r("8c6d")}})],1)],1)},T=[],B={},M=B,L=Object(d["a"])(M,A,T,!1,null,null,null),$=L.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h3",[t._v("Joan")]),a("br"),a("br"),a("a",{attrs:{href:"#/About"}},[a("b-img",{attrs:{center:"",src:r("1670"),alt:"Picture of Joan creator of SoulStore"}})],1),a("br"),a("br")]),a("b-col",{attrs:{cols:"12"}},[a("h3",[t._v("Ivan")]),a("br"),a("br"),a("a",{attrs:{href:"#/About"}},[a("b-img",{attrs:{center:"",src:r("6702"),alt:"Picture of Ivan creator of SoulStore"}})],1),a("br"),a("br")])],1)},I=[],U={},J=U,N=Object(d["a"])(J,H,I,!1,null,null,null),D=N.exports,F={name:"home",components:{Carrusel:$,Ourteam:D}},R=F,q=Object(d["a"])(R,E,P,!1,null,null,null),K=q.exports;a["default"].use(j["a"]);var W=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/products",name:"Products",component:function(){return r.e("collections").then(r.bind(null,"e6dc"))}},{path:"/contact",name:"Contact",component:function(){return r.e("contact").then(r.bind(null,"b8fa"))}}],z=new j["a"]({routes:W}),G=z,Q=r("2f62");a["default"].use(Q["a"]);var V=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["default"].config.productionTip=!1,new a["default"]({router:G,store:V,render:function(t){return t(O)}}).$mount("#app")},6702:function(t,e,r){t.exports=r.p+"img/Ivan.c2e3f519.jpg"},"6b45":function(t,e,r){t.exports=r.p+"img/BloodBorne.b653a8f3.jpg"},"760c":function(t,e,r){"use strict";r("c3f5")},"85ec":function(t,e,r){},"8c6d":function(t,e,r){t.exports=r.p+"img/ElderRing.6f1b8a83.jpg"},9008:function(t,e,r){"use strict";r("c103")},bba0:function(t,e,r){t.exports=r.p+"img/Sekiro.872bef3b.jpg"},c103:function(t,e,r){},c3f5:function(t,e,r){}});
//# sourceMappingURL=app.aad50da1.js.map