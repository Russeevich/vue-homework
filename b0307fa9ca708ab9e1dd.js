(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{394:function(t,e,n){},424:function(t,e,n){"use strict";n(394)},456:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-component"},[n("div",{staticClass:"container container--header"},[n("div",{staticClass:"header__block--left"},[n("user",{attrs:{size:t.size,src:t.src,name:t.name}}),n("button",{staticClass:"header__exit header__exit--second"},[t._v(t._s(t.button))]),n("a",{staticClass:"header__title"},[t._v(t._s(t.title))])],1),n("div",{staticClass:"header__block--right"},[n("button",{staticClass:"header__exit",on:{click:t.logout}},[t._v(t._s(t.button))])])])])};r._withStripped=!0;var i=n(33),o=n(166);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={props:{size:{type:String,default:"3"},name:{type:String,default:"Иван Иванов"},src:{type:String,default:""},title:{type:String,default:""},button:{type:String,default:""}},components:{user:function(){return n.e(9).then(n.bind(null,468))}},methods:a(a({},Object(i.b)(["getLogout"])),{},{logout:function(){this.getLogout().then((function(){o.a.push({path:"/login"})}))}})},l=(n(424),n(15)),p=Object(l.a)(u,r,[],!1,null,"d563a222",null);p.options.__file="src/admin/components/header/header.vue";var d=p.exports}}]);