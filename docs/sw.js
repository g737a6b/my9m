!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}({28:function(e,t,n){"use strict";self.addEventListener("install",function(e){e.waitUntil(caches.open("my9m-v6").then(function(e){return e.addAll(["/","/?utm_source=homescreen","/index.html","/index.html?utm_source=homescreen","/img/icon-320.png","/img/icon-192.png","/css/default.css","/js/app.js","https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css","https://fonts.googleapis.com/css?family=Berkshire+Swash"])}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request).then(function(t){return caches.open("my9m-v6").then(function(n){return n.put(e.request,t.clone()),t})})}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if("my9m-v6"!==e)return caches.delete(e)}))}))})}});