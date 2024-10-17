(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4474],{3943:function(e,t,r){"use strict";r.d(t,{BH:function(){return _},L:function(){return l},LL:function(){return T},P0:function(){return b},Pz:function(){return v},Sg:function(){return E},ZR:function(){return A},aH:function(){return m},b$:function(){return C},eu:function(){return S},hl:function(){return D},m9:function(){return F},ne:function(){return x},pd:function(){return P},q4:function(){return g},ru:function(){return I},tV:function(){return u},uI:function(){return w},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(N(n)&&N(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w1:function(){return O},xO:function(){return L},xb:function(){return R},z$:function(){return y},zd:function(){return B}});var n=r(357);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},s=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4,h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),n.push(r[l],r[u],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,c=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==c)throw new a;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==c){let e=o<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(e){let t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},b=e=>{let t=g(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},m=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function C(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function O(){let e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function D(){try{return"object"==typeof indexedDB}catch(e){return!1}}function S(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(k,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new A(n,o,r)}}let k=/\{\$([^}]+)}/g;function R(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function B(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function P(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function x(e,t){let r=new U(e,t);return r.subscribe.bind(r)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=M),void 0===n.error&&(n.error=M),void 0===n.complete&&(n.complete=M);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return e&&e._delegate?e._delegate:e}},357:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],l=!1,u=-1;function h(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||l||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},6452:function(e,t,r){"use strict";r.d(t,{Cp:function(){return d},F_:function(){return u},Gn:function(){return b},Kp:function(){return f},QJ:function(){return g},Rp:function(){return h}});var n=r(5186),i=r(2265);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function s(e,t,r,n){return new(r||(r=Promise))(function(i,s){function o(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,a)}c((n=n.apply(e,t||[])).next())})}function o(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=function(e){return{loading:null==e,value:e}},l=function(e){var t=e?e():void 0,r=(0,i.useReducer)(function(e,t){switch(t.type){case"error":return a(a({},e),{error:t.error,loading:!1,value:void 0});case"reset":return c(t.defaultValue);case"value":return a(a({},e),{error:void 0,loading:!1,value:t.value});default:return e}},c(t)),n=r[0],s=r[1],o=(0,i.useCallback)(function(){s({type:"reset",defaultValue:e?e():void 0})},[e]),l=(0,i.useCallback)(function(e){s({type:"error",error:e})},[]),u=(0,i.useCallback)(function(e){s({type:"value",value:e})},[]);return(0,i.useMemo)(function(){return{error:n.error,loading:n.loading,reset:o,setError:l,setValue:u,value:n.value}},[n.error,n.loading,o,l,u,n.value])},u=function(e,t){var r=l(function(){return e.currentUser}),a=r.error,c=r.loading,u=r.setError,h=r.setValue,d=r.value;return(0,i.useEffect)(function(){var r=(0,n.Aj)(e,function(e){return s(void 0,void 0,void 0,function(){return o(this,function(r){switch(r.label){case 0:if(!(null==t?void 0:t.onUserChanged))return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.onUserChanged(e)];case 2:return r.sent(),[3,4];case 3:return u(r.sent()),[3,4];case 4:return h(e),[2]}})})},u);return function(){r()}},[e]),[d,c,a]},h=function(e,t){var r=(0,i.useState)(),a=r[0],c=r[1],l=(0,i.useState)(),u=l[0],h=l[1],d=(0,i.useState)(!1),f=d[0],p=d[1];return[(0,i.useCallback)(function(r,i){return s(void 0,void 0,void 0,function(){var s;return o(this,function(o){switch(o.label){case 0:p(!0),c(void 0),o.label=1;case 1:return o.trys.push([1,5,6,7]),[4,(0,n.Xb)(e,r,i)];case 2:if(s=o.sent(),!(t&&t.sendEmailVerification&&s.user))return[3,4];return[4,(0,n.w$)(s.user,t.emailVerificationOptions)];case 3:o.sent(),o.label=4;case 4:return h(s),[2,s];case 5:return c(o.sent()),[3,7];case 6:return p(!1),[7];case 7:return[2]}})})},[e,t]),u,f,a]},d=function(e){var t=(0,i.useState)(),r=t[0],a=t[1],c=(0,i.useState)(),l=c[0],u=c[1],h=(0,i.useState)(!1),d=h[0],f=h[1];return[(0,i.useCallback)(function(t,r){return s(void 0,void 0,void 0,function(){var i;return o(this,function(s){switch(s.label){case 0:f(!0),a(void 0),s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,(0,n.e5)(e,t,r)];case 2:return u(i=s.sent()),[2,i];case 3:return a(s.sent()),[3,5];case 4:return f(!1),[7];case 5:return[2]}})})},[e]),l,d,r]},f=function(e){return p(e,(0,i.useCallback)(function(e,t){var r=new n.hJ;return e&&e.forEach(function(e){return r.addScope(e)}),t&&r.setCustomParameters(t),r},[]))},p=function(e,t){var r=(0,i.useState)(),a=r[0],c=r[1],l=(0,i.useState)(),u=l[0],h=l[1],d=(0,i.useState)(!1),f=d[0],p=d[1];return[(0,i.useCallback)(function(r,i){return s(void 0,void 0,void 0,function(){var s,a;return o(this,function(o){switch(o.label){case 0:p(!0),c(void 0),o.label=1;case 1:return o.trys.push([1,3,4,5]),s=t(r,i),[4,(0,n.rh)(e,s)];case 2:return h(a=o.sent()),[2,a];case 3:return c(o.sent()),[3,5];case 4:return p(!1),[7];case 5:return[2]}})})},[e,t]),u,f,a]},g=function(e){var t=(0,i.useState)(),r=t[0],n=t[1],a=(0,i.useState)(!1),c=a[0],l=a[1];return[(0,i.useCallback)(function(){return s(void 0,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:l(!0),n(void 0),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,e.signOut()];case 2:return t.sent(),[2,!0];case 3:return n(t.sent()),[2,!1];case 4:return l(!1),[7];case 5:return[2]}})})},[e]),c,r]},b=function(e){var t=(0,i.useState)(),r=t[0],a=t[1],c=(0,i.useState)(!1),l=c[0],u=c[1];return[(0,i.useCallback)(function(t){return s(void 0,void 0,void 0,function(){return o(this,function(r){switch(r.label){case 0:u(!0),a(void 0),r.label=1;case 1:if(r.trys.push([1,5,6,7]),!e.currentUser)return[3,3];return[4,(0,n.ck)(e.currentUser,t)];case 2:return r.sent(),[2,!0];case 3:throw Error("No user is logged in");case 4:return[3,7];case 5:return a(r.sent()),[2,!1];case 6:return u(!1),[7];case 7:return[2]}})})},[e]),l,r]}},9279:function(e,t,r){"use strict";let n,i,s;r.d(t,{Jn:function(){return U},qX:function(){return L},rh:function(){return B},Xd:function(){return N},Mq:function(){return F},ZF:function(){return M},KN:function(){return $}});var o=r(2680),a=r(9053),c=r(3943);let l=(e,t)=>t.some(t=>e instanceof t),u=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return b(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function b(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(b(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&u.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(m(this),e),b(u.get(this))}:function(...e){return b(t.apply(m(this),e))}:function(e,...r){let n=t.call(m(this),e,...r);return d.set(n,e.sort?e.sort():[e]),b(n)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),l(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let m=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],E=new Map;function y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(E.get(t))return E.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=_.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return E.set(t,s),s}g={...s=g,get:(e,t,r)=>y(e,t)||s.get(e,t,r),has:(e,t)=>!!y(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",C="0.10.10",O=new a.Yd("@firebase/app"),D="[DEFAULT]",S={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,T=new Map,k=new Map;function R(e,t){try{e.container.addComponent(t)}catch(r){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function N(e){let t=e.name;if(k.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(k.set(t,e),A.values()))R(r,e);for(let t of T.values())R(t,e);return!0}function L(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function B(e){return void 0!==e.settings}let P=new c.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U="10.13.1";function M(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw P.create("bad-app-name",{appName:String(i)});if(r||(r=(0,c.aH)()),!r)throw P.create("no-options");let s=A.get(i);if(s){if((0,c.vZ)(r,s.options)&&(0,c.vZ)(n,s.config))return s;throw P.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of k.values())a.addComponent(e);let l=new x(r,n,a);return A.set(i,l),l}function F(e=D){let t=A.get(e);if(!t&&e===D&&(0,c.aH)())return M();if(!t)throw P.create("no-app",{appName:e});return t}function $(e,t,r){var n;let i=null!==(n=S[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),O.warn(e.join(" "));return}N(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let V="firebase-heartbeat-store",j=null;function H(){return j||(j=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=b(o);return n&&o.addEventListener("upgradeneeded",e=>{n(b(o.result),e.oldVersion,e.newVersion,b(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(V)}catch(e){console.warn(e)}}}).catch(e=>{throw P.create("idb-open",{originalErrorMessage:e.message})})),j}async function z(e){try{let t=(await H()).transaction(V),r=await t.objectStore(V).get(q(e));return await t.done,r}catch(e){if(e instanceof c.ZR)O.warn(e.message);else{let t=P.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});O.warn(t.message)}}}async function W(e,t){try{let r=(await H()).transaction(V,"readwrite"),n=r.objectStore(V);await n.put(t,q(e)),await r.done}catch(e){if(e instanceof c.ZR)O.warn(e.message);else{let t=P.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});O.warn(t.message)}}}function q(e){return`${e.name}!${e.options.appId}`}class K{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new G(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Z();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){O.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=Z(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),J(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),J(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,c.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return O.warn(e),""}}}function Z(){return new Date().toISOString().substring(0,10)}class G{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,c.hl)()&&(0,c.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await z(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function J(e){return(0,c.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new o.wA("platform-logger",e=>new w(e),"PRIVATE")),N(new o.wA("heartbeat",e=>new K(e),"PRIVATE")),$(I,C,""),$(I,C,"esm2017"),$("fire-js","")},2680:function(e,t,r){"use strict";r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(3943);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9053:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return u},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,c={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},l=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=c[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},5236:function(e,t,r){"use strict";r.d(t,{ZF:function(){return n.ZF}});var n=r(9279);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.13.1","app")},5186:function(e,t,r){"use strict";r.d(t,{hJ:function(){return n.X},Xb:function(){return n.aa},v0:function(){return n.o},Aj:function(){return n.y},w$:function(){return n.ag},e5:function(){return n.ab},rh:function(){return n.c},ck:function(){return n.ak}});var n=r(2080);r(9279),r(3943),r(9053),r(2680)},9854:function(e,t,r){"use strict";r.d(t,{cF:function(){return D}});var n,i,s,o,a=r(9279),c=r(3943),l=r(2680);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="firebasestorage.googleapis.com";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends c.ZR{constructor(e,t,r=0){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function f(e){return new h(s.INVALID_ARGUMENT,e)}function p(){return new h(s.APP_DELETED,"The Firebase app was deleted.")}(n=s||(s={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=g.makeFromUrl(e,t)}catch(t){return new g(e,"")}if(""===r.path)return r;throw new h(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),c=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:RegExp(`^https?://${t===u?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<c.length;t++){let n=c[t],i=n.regex.exec(e);if(i){let e=i[n.indices.bucket],t=i[n.indices.path];t||(t=""),r=new g(e,t),n.postModify(r);break}}if(null==r)throw new h(s.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class b{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function m(e,t,r,n){if(n<t)throw f(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw f(`Invalid value for '${e}'. Expected ${r} or less.`)}(i=o||(o={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t,r,n,i,s,o,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==i){let e=new h(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,e):e)}else n(t.canceled?this.appDelete_?p():new h(s.CANCELED,"User canceled the upload/download."):new h(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))};this.canceled_?e(!1,new _(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){let n=1,i=null,s=null,o=!1,a=0,c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function u(t){i=setTimeout(()=>{i=null,e(d,2===a)},t)}function h(){s&&clearTimeout(s)}function d(e,...t){let r;if(c){h();return}if(e||2===a||o){h(),l.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,u(r)}let f=!1;function p(e){!f&&(f=!0,h(),!c&&(null!==i?(e||(a=2),clearTimeout(i),u(0)):e||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,p(!0)},r),p}((e,t)=>{if(t){e(!1,new _(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===o.NO_ERROR,i=r.getStatus();if(!t||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i,this.additionalRetryCodes_)&&this.retry){e(!1,new _(!1,null,r.getErrorCode()===o.ABORT));return}e(!0,new _(-1!==this.successCodes_.indexOf(i),r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class _{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this._service=e,t instanceof g?this._location=t:this._location=g.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new E(e,t)}get root(){let e=new g(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new g(this._location.bucket,e);return new E(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new h(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function y(e,t){let r=null==t?void 0:t.storageBucket;return null==r?null:g.makeFromBucketSpec(r,e)}class w{constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=u,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=g.makeFromBucketSpec(n,this._host):this._bucket=y(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=g.makeFromBucketSpec(this._url,e):this._bucket=y(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){m("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){m("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new E(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new b(p());{let s=function(e,t,r,n,i,s,o=!0){let a=function(e){let t=encodeURIComponent,r="?";for(let n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r.slice(0,-1)}(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return t&&(l["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(l.Authorization="Firebase "+r),l["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==n&&(l["X-Firebase-AppCheck"]=n),new v(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let I="@firebase/storage",C="0.13.1",O="storage";function D(e=(0,a.Mq)(),t){e=(0,c.m9)(e);let r=(0,a.qX)(e,O).getImmediate({identifier:t}),n=(0,c.P0)("storage");return n&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:(0,c.Sg)(i,e.app.options.projectId))}(e,t,r,n)}(r,...n),r}(0,a.Xd)(new l.wA(O,function(e,{instanceIdentifier:t}){return new w(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(I,C,""),(0,a.KN)(I,C,"esm2017")}}]);