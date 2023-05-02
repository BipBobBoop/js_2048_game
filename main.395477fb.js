parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,c=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==o.return||o.return()}finally{if(i)throw a}}}}function t(e){return a(e)||o(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector("body"),s=document.createElement("div");function l(e){u(),d(),f(e)}function u(){s.insertAdjacentHTML("afterbegin",'\n    <div class="game-header">\n      <h1>2048</h1>\n      <div class="controls">\n        <p class="info">\n          Score: <span class="game-score">0</span>\n        </p>\n        <button class="button start">Start</button>\n      </div>\n    </div>\n  ')}function d(){var e=document.createElement("table"),t=document.createElement("tbody");e.classList.add("game-field"),e.append(t);for(var n=0;n<4;n++){var r=document.createElement("tr");r.classList.add('field-row"');for(var o=0;o<4;o++){var a=document.createElement("td");a.classList.add("field-cell"),r.append(a)}t.append(r)}e.append(t),s.append(e)}function f(e){s.insertAdjacentHTML("beforeend",'\n    <div class="message-container">\n    </div>\n  '),e&&(s.querySelectorAll(".message-container").forEach(function(e){return e.remove()}),s.insertAdjacentHTML("beforeend",'\n      <div class="message-container">\n        <p class="message message-'.concat(e,'">').concat({lose:"You lose! Restart the game?",win:"Winner! Congrats! You did it!",start:'Press "Start" to begin game. Good luck!'}[e],"</p>\n      </div>\n    ")))}function m(){var e=t(document.querySelectorAll(".game-field td:empty"));if(e.length){var n=e[Math.floor(Math.random()*e.length)];n.textContent=Math.random()<.9?2:4,n.classList.add("field-cell--".concat(n.textContent))}return e}function y(e){return e.map(function(e,t,n){return e===n[t+1]?(n[t+1]=null,h(2*e),2*e):e}).filter(function(e){return e})}function v(e,t){t.classList.remove("field-cell--".concat(t.textContent));var n=e.splice(0,1)[0];t.textContent=n,n&&t.classList.add("field-cell--".concat(n))}function p(e,n){var r;switch(n){case"ArrowLeft":case"ArrowRight":r=e.rows;break;case"ArrowUp":case"ArrowDown":r=e.columns}r.forEach(function(e){var r=t(e.map(function(e){return e.textContent})).filter(function(e){return e});"ArrowDown"!==n&&"ArrowRight"!==n||r.reverse();for(var o=y(r),a=0;a<e.length;a++){v(o,"ArrowUp"===n||"ArrowLeft"===n?e[a]:e[e.length-a-1])}}),A(e)}function w(e){var t=i.querySelector("table"),n={rows:Array.from(document.querySelectorAll("tr")).map(function(e){return Array.from(e.cells)}),columns:Array.from(t.rows[0].cells).map(function(e,n){return Array.from(t.rows).map(function(e){return e.cells[n]})})};switch(e.key){case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":p(n,e.key)}}function b(e){switch(e){case"add":window.addEventListener("keydown",w);break;case"delete":window.removeEventListener("keydown",w)}}function h(e){var t=s.querySelector(".game-score");t.textContent=parseInt(t.textContent)+parseInt(e)}function A(t){Array.from(document.querySelectorAll(".game-field td")).some(function(e){return"2048"===e.textContent})&&(f("win"),b("delete"));var n,r=!m().length,o=!0,a=e(t.rows.concat(t.columns));try{for(a.s();!(n=a.n()).done;)for(var c=n.value,i=0;i<c.length-1;i++)if(c[i].textContent===c[i+1].textContent){o=!1;break}}catch(s){a.e(s)}finally{a.f()}r&&o&&(f("lose"),b("delete"))}s.classList.add("container"),i.insertBefore(s,i.firstChild),l("start"),s.addEventListener("click",function(e){if(e.target.closest(".button")){s.innerHTML="",l(),m(),m(),b("add");var t=s.querySelector(".button");t.classList.remove("start"),t.classList.add("restart"),t.textContent="Restart"}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.395477fb.js.map