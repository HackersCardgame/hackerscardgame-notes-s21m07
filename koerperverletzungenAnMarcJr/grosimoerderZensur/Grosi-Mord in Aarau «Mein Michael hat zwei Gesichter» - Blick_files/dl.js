var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(1),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entryTypes=["first-input","largest-contentful-paint","paint","layout-shift"],this.stats=[],this._observer=null,this.config_seg_rand=parseInt("44"),this.processStats=this.processStats.bind(this)}var t,n,i;return t=e,(n=[{key:"init",value:function(){if(!o.check())try{this._observer=new window.PerformanceObserver(this.processStats),this._observer.observe({entryTypes:this.entryTypes})}catch(e){return}}},{key:"processStats",value:function(e){var t=this;e.getEntries().forEach((function(e){"paint"===e.entryType&&"first-contentful-paint"!==e.name||t.stats.push(e)}))}},{key:"hasObserver",value:function(){return null!==this._observer}},{key:"getStats",value:function(){var e=this.stats.slice();return this.stats=[],e}},{key:"destroy",value:function(){var e=this.getStats();return this.hasObserver()&&(this._observer.disconnect(),this._observer=null),e}},{key:"tossSegRand",value:function(e,t){return null===t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))}}])&&r(t.prototype,n),i&&r(t,i),e}();e.exports=new i},function(e,t){e.exports={check:function(){try{return window.self!==window.top}catch(e){return!0}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);!function(e){if(void 0!==e)if(void 0===e.AL){e.AL=1,e.seg_rand=o.a.tossSegRand(0,99),e.seg_rand==o.a.config_seg_rand&&(e.coreVitals=o.a,e.coreVitals.init()),e.adbCsrSubdomain="k266d5zsl",e.cmd=e.cmd||[],e.fncs=["addSlot","show","on","$remove","addKeyword","addCss","addCallback"];for(var t=function(t){e[e.fncs[t]]=function(){var n=arguments;e.cmd.push((function(e){e[e.fncs[t]].apply(e,n)}))}},n=0;n<e.fncs.length;n++)t(n);var r,i=document.getElementById("adsinit");i&&(r=i.getAttribute("data-original"));var s=document.createElement("script");s.async=!0,function(e){var t,n=[],r=function(e){var r;if(!t)for(t=[e,Date.now()-o];r=n.shift();)r.apply(null,t)},o=Date.now();e.isError=function(e){t?e.apply(null,t):n.push(e)},e.onload=function(){r(!1)},e.onerror=function(){r(!0)}}(e),s.onload=e.onload,s.onerror=e.onerror,s.src=r||"//web.archive.org/web/20210225063421/https://sgqcvfjvr.onet.pl/YnVpbGQvezlza2x0ZTc1fWRsQXBpL2RsLmxpYntOTWFzX0E3NX0ubWluLmpz",document.getElementsByTagName("head")[0].appendChild(s)}else console.error("dl.boot.min.js is already loaded!");else console.error("dlApi is undefined, Aborted!")}(window.dlApi||window.onetAds)}]);

}
/*
     FILE ARCHIVED ON 06:34:21 Feb 25, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:31 Jun 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2772.157
  exclusion.robots: 0.161
  exclusion.robots.policy: 0.149
  RedisCDXSource: 10.457
  esindex: 0.026
  LoadShardBlock: 1882.121 (3)
  PetaboxLoader3.datanode: 1978.694 (6)
  CDXLines.iter: 87.832 (3)
  load_resource: 2296.012 (2)
  PetaboxLoader3.resolve: 1612.805 (2)
  loaddict: 132.616
*/