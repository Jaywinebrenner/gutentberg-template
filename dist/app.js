/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothscroll */ \"./assets/js/smoothscroll.js\");\n// All code in this file will be injected globally\n\n//smooth scroll\n\n\n//# sourceURL=webpack://hc-theme/./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/smoothscroll.js":
/*!***********************************!*\
  !*** ./assets/js/smoothscroll.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //only load smooth scroll on front end\n  if (!document.body.classList.contains('wp-admin')) {\n    var raf = function raf(time) {\n      lenis.raf(time);\n      requestAnimationFrame(raf);\n    };\n    var lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    lenis.on('scroll', function (e) {\n      console.log(e);\n    });\n    requestAnimationFrame(raf);\n  }\n});\n\n//# sourceURL=webpack://hc-theme/./assets/js/smoothscroll.js?");

/***/ }),

/***/ "./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ r; }\n/* harmony export */ });\nfunction t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},t.apply(this,arguments)}function e(t,e,i){return Math.max(t,Math.min(e,i))}class i{advance(t){var i;if(!this.isRunning)return;let s=!1;if(this.lerp)this.value=(o=this.value,n=this.to,(1-(r=1-Math.exp(-60*this.lerp*t)))*o+r*n),Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;const i=e(0,this.currentTime/this.duration,1);s=i>=1;const o=s?1:this.easing(i);this.value=this.from+(this.to-this.from)*o}var o,n,r;null==(i=this.onUpdate)||i.call(this,this.value,{completed:s}),s&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:o=(t=>t),onUpdate:n}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,this.onUpdate=n}}class s{constructor({wrapper:t,content:e,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,i){const t=function(t,e){let i;return function(){let e=arguments,s=this;clearTimeout(i),i=setTimeout(function(){t.apply(s,e)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(t),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(t),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;null==(t=this.wrapperResizeObserver)||t.disconnect(),null==(e=this.contentResizeObserver)||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}let o=()=>({events:{},emit(t,...e){let i=this.events[t]||[];for(let t=0,s=i.length;t<s;t++)i[t](...e)},on(t,e){var i;return(null==(i=this.events[t])?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null==(i=this.events[t])?void 0:i.filter(t=>e!==t)}}});class n{constructor(t,{wheelMultiplier:i=1,touchMultiplier:s=2,normalizeWheel:n=!1}){this.onTouchStart=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0}},this.onTouchMove=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,o=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit(\"scroll\",{type:\"touch\",deltaX:s,deltaY:o,event:t})},this.onTouchEnd=t=>{this.emitter.emit(\"scroll\",{type:\"touch\",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:i,deltaY:s}=t;this.normalizeWheel&&(i=e(-100,i,100),s=e(-100,s,100)),i*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit(\"scroll\",{type:\"wheel\",deltaX:i,deltaY:s,event:t})},this.element=t,this.wheelMultiplier=i,this.touchMultiplier=s,this.normalizeWheel=n,this.touchStart={x:null,y:null},this.emitter=o(),this.element.addEventListener(\"wheel\",this.onWheel,{passive:!1}),this.element.addEventListener(\"touchstart\",this.onTouchStart,{passive:!1}),this.element.addEventListener(\"touchmove\",this.onTouchMove,{passive:!1}),this.element.addEventListener(\"touchend\",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.events={},this.element.removeEventListener(\"wheel\",this.onWheel,{passive:!1}),this.element.removeEventListener(\"touchstart\",this.onTouchStart,{passive:!1}),this.element.removeEventListener(\"touchmove\",this.onTouchMove,{passive:!1}),this.element.removeEventListener(\"touchend\",this.onTouchEnd,{passive:!1})}}class r{constructor({direction:e,gestureDirection:r,mouseMultiplier:l,smooth:h,wrapper:a=window,content:c=document.documentElement,wheelEventsTarget:u=a,smoothWheel:p=null==h||h,smoothTouch:m=!1,syncTouch:d=!1,syncTouchLerp:v=.1,touchInertiaMultiplier:g=35,duration:S,easing:w=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:f=(S?null:.1),infinite:y=!1,orientation:T=(null!=e?e:\"vertical\"),gestureOrientation:z=(null!=r?r:\"vertical\"),touchMultiplier:M=1,wheelMultiplier:L=(null!=l?l:1),normalizeWheel:E=!1,autoResize:b=!0}={}){this.onVirtualScroll=({type:e,inertia:i,deltaX:s,deltaY:o,event:n})=>{if(n.ctrlKey)return;const r=\"touch\"===e,l=\"wheel\"===e;if(\"vertical\"===this.options.gestureOrientation&&0===o||\"horizontal\"===this.options.gestureOrientation&&0===s||r&&\"vertical\"===this.options.gestureOrientation&&0===this.scroll&&!this.options.infinite&&o<=0)return;if(n.composedPath().find(t=>(null==t||null==t.hasAttribute?void 0:t.hasAttribute(\"data-lenis-prevent\"))||r&&(null==t||null==t.hasAttribute?void 0:t.hasAttribute(\"data-lenis-prevent-touch\"))||l&&(null==t||null==t.hasAttribute?void 0:t.hasAttribute(\"data-lenis-prevent-wheel\"))))return;if(this.isStopped||this.isLocked)return void n.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&r||this.options.smoothWheel&&l,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();n.preventDefault();let h=o;\"both\"===this.options.gestureOrientation?h=Math.abs(o)>Math.abs(s)?o:s:\"horizontal\"===this.options.gestureOrientation&&(h=s);const a=r&&this.options.syncTouch,c=r&&i&&Math.abs(h)>1;c&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,t({programmatic:!1},a&&{lerp:c?this.syncTouchLerp:.4}))},this.onScroll=()=>{if(!this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit()}},e&&console.warn(\"Lenis: `direction` option is deprecated, use `orientation` instead\"),r&&console.warn(\"Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead\"),l&&console.warn(\"Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead\"),h&&console.warn(\"Lenis: `smooth` option is deprecated, use `smoothWheel` instead\"),window.lenisVersion=\"1.0.15\",a!==document.documentElement&&a!==document.body||(a=window),this.options={wrapper:a,content:c,wheelEventsTarget:u,smoothWheel:p,smoothTouch:m,syncTouch:d,syncTouchLerp:v,touchInertiaMultiplier:g,duration:S,easing:w,lerp:f,infinite:y,gestureOrientation:z,orientation:T,touchMultiplier:M,wheelMultiplier:L,normalizeWheel:E,autoResize:b},this.dimensions=new s({wrapper:a,content:c,autoResize:b}),this.rootElement.classList.add(\"lenis\"),this.velocity=0,this.isStopped=!1,this.isSmooth=p||m,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new i,this.emitter=o(),this.options.wrapper.addEventListener(\"scroll\",this.onScroll,{passive:!1}),this.virtualScroll=new n(u,{touchMultiplier:M,wheelMultiplier:L,normalizeWheel:E}),this.virtualScroll.on(\"scroll\",this.onVirtualScroll)}destroy(){this.emitter.events={},this.options.wrapper.removeEventListener(\"scroll\",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove(\"lenis\"),this.rootElement.classList.remove(\"lenis-smooth\"),this.rootElement.classList.remove(\"lenis-scrolling\"),this.rootElement.classList.remove(\"lenis-stopped\")}on(t,e){return this.emitter.on(t,e)}off(t,e){var i;this.emitter.events[t]=null==(i=this.emitter.events[t])?void 0:i.filter(t=>e!==t)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit(\"scroll\",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:i=0,immediate:s=!1,lock:o=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:l=!n&&this.options.lerp,onComplete:h=null,force:a=!1,programmatic:c=!0}={}){if(!this.isStopped||a){if([\"top\",\"left\",\"start\"].includes(t))t=0;else if([\"bottom\",\"right\",\"end\"].includes(t))t=this.limit;else{var u;let e;if(\"string\"==typeof t?e=document.querySelector(t):null!=(u=t)&&u.nodeType&&(e=t),e){if(this.options.wrapper!==window){const t=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top}const s=e.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if(\"number\"==typeof t){if(t+=i,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=e(0,t,this.limit),s)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(null==h||h());if(!c){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:n,easing:r,lerp:l,onUpdate:(t,{completed:e})=>{o&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),e&&(o&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,null==h||h()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.isHorizontal?this.dimensions.limit.x:this.dimensions.limit.y}get isHorizontal(){return\"horizontal\"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle(\"lenis-smooth\",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle(\"lenis-scrolling\",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle(\"lenis-stopped\",t),this.__isStopped=t)}}\n//# sourceMappingURL=lenis.modern.mjs.map\n\n\n//# sourceURL=webpack://hc-theme/./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/app.js");
/******/ 	
/******/ })()
;