(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{391:function(e,t,r){"use strict";t.a=r.p+"f0b0c1b4f173b3b32b1ab2f49a8d6fd5.png"},407:function(e,t,r){},437:function(e,t,r){"use strict";r(407)},467:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"reviews--item"},[r("card",{staticClass:"reviews--card"},[r("div",{staticClass:"reviews--header",attrs:{slot:"title"},slot:"title"},[r("user",{attrs:{size:"3.1",name:e.review.author,position:e.review.occ,src:e.getSrc}})],1),r("div",{staticClass:"reviews--edit",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"reviews--text"},[e._v(e._s(e.review.text))]),r("div",{staticClass:"reviews--btns"},[r("icon",{attrs:{title:"Править",symbol:"pencil"},on:{click:function(t){return e.$emit("changeReview",e.review)}}}),r("icon",{attrs:{title:"Удалить",symbol:"cross"},on:{click:e.removeReview}})],1)])])],1)};n._withStripped=!0;var i=r(33),c=r(391);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={props:{review:{type:Object,default:{}}},computed:{getSrc:function(){return this.review.photo?"https://webdev-api.loftschool.com/".concat(this.review.photo):c.a}},components:{card:function(){return r.e(2).then(r.bind(null,462))},user:function(){return r.e(9).then(r.bind(null,468))},icon:function(){return r.e(3).then(r.bind(null,478))}},methods:o(o({},Object(i.b)(["deleteReview"])),{},{removeReview:function(){this.deleteReview(this.review.id)}})},u=(r(437),r(15)),v=Object(u.a)(l,n,[],!1,null,"5f9d7a72",null);v.options.__file="src/admin/components/reviews/reviews.vue";var p=v.exports}}]);