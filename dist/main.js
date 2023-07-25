(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"/* Change this *{} later. It's making the script and style appear on the page */\n/* Hiding them temporarily for now */\n\n\n* {\n display: flex;\n box-sizing: border-box;\n}\n\nscript {\n  display: none;\n}\n\nstyle {\n  display: none;\n}\n\n/* Hiding them temporarily for now */\n\nbody{\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.top, .middle{\n  padding: 20px;\n  width: 2000px;\n  justify-content: center;\n  color: white;\n  font-size: 250px;\n  font-weight: 900;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.top{\n  background-color: darkgray;\n  flex-direction: column;\n  flex-shrink: 0;\n  min-height: 100px;\n  justify-content: center;\n  align-items: center;\n}\n\n\nbutton{\n  justify-content: center;\n  background-color: lightslategray;\n  color: gold;\n  width: 20%;\n  padding: 20px, 100px;\n  margin: 30px;\n  border-radius: 12px;\n  font-size: 34px;\n }\n \n\n.slider {\n  -webkit-appearance: none;\n  width: 50%;\n  height: 10px;\n  background: #201e1e;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 25px; /* Set a specific slider handle width */\n  height: 55px; /* Slider handle height */\n  background: #04AA6D; /* Green background */\n  cursor: pointer; /* Cursor on hover */\n}\n\n.sliderText{\n  padding: 30px;\n  font-size: 40px;\n}\n\n\n.middle{\n  background-color: #1F2937;\n  min-height: 85%;\n  min-width: 85%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.grid{\n  display: inline-grid;\n  /* grid colums and rows defined in grid.js */\n  height: 900px;\n  width: 900px;\n  background-color: gray;\n}\n\n.cell{\n background-color: #ffffff;\n display: flex;\n justify-content: center;\n align-items: center;\n}\n\n.footer{\n  justify-content: center;\n  align-items: center;\n  background: black;\n  color: white;\n  padding: 70px;\n  letter-spacing: 4px;\n  width: 2000px;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"7996733f152d2c4a1dec.svg";var e=t(379),r=t.n(e),o=t(795),i=t.n(o),a=t(569),s=t.n(a),c=t(565),l=t.n(c),d=t(216),p=t.n(d),u=t(589),f=t.n(u),h=t(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;let m=new class{constructor(){this.size=8,this.grid=this.makeGrid(this.size)}makeGrid(n){let e=[],t=document.querySelector(".grid"),r=900/n;for(let r=0;r<n;r++){e[r]=[];for(let o=0;o<n;o++)e[r][o]=document.createElement("div"),e[r][o].classList.add("cell"),e[r][o].style.border="2px solid darkgrey",t.appendChild(e[r][o])}return t.style.gridTemplateColumns=`repeat(${n}, 1fr)`,t.style.gridTemplateRows=`repeat(${n}, 1fr)`,t.style.width=n*(r+4)+"px",t.style.height=n*(r+4)+"px",console.log(e),e}darken(n){let e=n.target.style.backgroundColor;e=rgbToHex(e),console.log(e),""==e||null==e?e="0xFFFFFF":(e=e.slice(1),e=String.prototype.concat("0x",e));let t=e-3355443;console.log(t.toString(16)),n.target.style.backgroundColor=String.prototype.concat("#",t.toString(16))}};new class{constructor(n,e,t){this.startpos=n,this.endpos=e,this.grid=t,this.setup()}setup(){let e=document.getElementById("grid"),t=new Image,r=Math.floor(900/this.grid.size*.9)+"px";console.log(r),t.src=n,t.style.width=r,t.style.height=r;let o=this.startpos[0],i=this.startpos[1],a=o*this.grid.size+i-1,s=e.childNodes[a];s.style.backgroundColor="black",s.appendChild(t),o=this.endpos[0],i=this.endpos[1],a=o*this.grid.size+i-1,s=e.childNodes[a],s.style.backgroundColor="red"}}([4,3],[5,6],m),console.log(m)})()})();