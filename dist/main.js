(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>l});var o=n(81),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([t.id,"/* Change this *{} later. It's making the script and style appear on the page */\n/* Hiding them temporarily for now */\n\n\n* {\n display: flex;\n box-sizing: border-box;\n}\n\nscript {\n  display: none;\n}\n\nstyle {\n  display: none;\n}\n\n/* Hiding them temporarily for now */\n\nbody{\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.top, .middle{\n  padding: 20px;\n  width: 2000px;\n  justify-content: center;\n  color: white;\n  font-size: 250px;\n  font-weight: 900;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.top{\n  background-color: darkgray;\n  flex-direction: column;\n  flex-shrink: 0;\n  min-height: 100px;\n  justify-content: center;\n  align-items: center;\n}\n\n\nbutton{\n  justify-content: center;\n  background-color: lightslategray;\n  color: gold;\n  width: 20%;\n  padding: 20px, 100px;\n  margin: 30px;\n  border-radius: 12px;\n  font-size: 34px;\n }\n \n\n.slider {\n  -webkit-appearance: none;\n  width: 50%;\n  height: 10px;\n  background: #201e1e;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 25px; /* Set a specific slider handle width */\n  height: 55px; /* Slider handle height */\n  background: #04AA6D; /* Green background */\n  cursor: pointer; /* Cursor on hover */\n}\n\n.sliderText{\n  padding: 30px;\n  font-size: 40px;\n}\n\n\n.middle{\n  background-color: #1F2937;\n  min-height: 85%;\n  min-width: 85%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.grid{\n  display: inline-grid;\n  /* grid colums and rows defined in grid.js */\n  height: 900px;\n  width: 900px;\n  background-color: gray;\n}\n\n.cell{\n background-color: #ffffff;\n display: flex;\n justify-content: center;\n align-items: center;\n}\n\n.footer{\n  justify-content: center;\n  align-items: center;\n  background: black;\n  color: white;\n  padding: 70px;\n  letter-spacing: 4px;\n  width: 2000px;\n}\n",""]);const l=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},s=[],l=0;l<t.length;l++){var a=t[l],c=o.base?a[0]+o.base:a[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=n(p),g={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var h=r(g,o);o.byIndex=l,e.splice(l,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var l=n(i[s]);e[l].references--}for(var a=o(t,r),c=0;c<i.length;c++){var d=n(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=a}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{const t=n.p+"7996733f152d2c4a1dec.svg";var e=n(379),o=n.n(e),r=n(795),i=n.n(r),s=n(569),l=n.n(s),a=n(565),c=n.n(a),d=n(216),p=n.n(d),u=n(589),g=n.n(u),h=n(426),f={};f.styleTagTransform=g(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),o()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;let m=new class{constructor(t,e){this.size=8,this.grid=this.makeGrid(this.size),t&&(this.startpos=t),this.endpos=e}makeGrid(t){let e=[],n=document.querySelector(".grid"),o=900/t;for(let o=0;o<t;o++){e[o]=[];for(let r=0;r<t;r++)e[o][r]=document.createElement("div"),e[o][r].classList.add("cell"),e[o][r].style.border="2px solid darkgrey",n.appendChild(e[o][r])}return n.style.gridTemplateColumns=`repeat(${t}, 1fr)`,n.style.gridTemplateRows=`repeat(${t}, 1fr)`,n.style.width=t*(o+4)+"px",n.style.height=t*(o+4)+"px",console.log(e),e}darken(t){let e=t.target.style.backgroundColor;e=rgbToHex(e),console.log(e),""==e||null==e?e="0xFFFFFF":(e=e.slice(1),e=String.prototype.concat("0x",e));let n=e-3355443;console.log(n.toString(16)),t.target.style.backgroundColor=String.prototype.concat("#",n.toString(16))}}([3,1],[4,1]);new class{constructor(t,e,n){this.startpos=t,this.endpos=e,this.grid=n,this.setup()}setup(){let e=document.getElementById("grid"),n=new Image,o=Math.floor(900/this.grid.size*.9)+"px";console.log(o),n.src=t,n.style.width=o,n.style.height=o;let r=this.startpos[0],i=this.startpos[1],s=r*this.grid.size+i,l=e.childNodes[s];l.style.backgroundColor="black",l.appendChild(n),r=this.endpos[0],i=this.endpos[1],s=r*this.grid.size+i,l=e.childNodes[s],l.style.backgroundColor="red"}knight_moves(){let t=new class{constructor(t){this.noOfVertices=t,this.AdjList=new Map}addVertex(t){this.AdjList.set(t,[]),this.noOfVertices++}addEdge(t,e){this.AdjList.get(t).push(e),this.AdjList.get(e).push(t)}printGraph(){var t=this.AdjList.keys();for(let e of t){let t=this.AdjList.get(e),n="";for(let e of t)n+=e+" ";console.log(e+" -> "+n)}}findPathToRoot(t,e,n){console.log("Searching for path to root from "+n+" to "+e);const o=new Set,r=new Map;if(!function e(i,s){if(console.log("Searching for "+i+" From parent "+s),o.add(i),s?r.set(i.toString(),s.toString()):r.set(i.toString(),s),console.log(i),console.log(n),console.log(i===n),i.toString()===n.toString())return console.log(i+" is the endpoint!"),!0;console.log("Adj list .get = "+t.AdjList.get(i)),console.log(t.AdjList.get(i));for(const n of t.AdjList.get(i))if(console.log("Checking neighbor "+n),!o.has(n)&&(console.log("Adding "+n+" to visited"),e(n,i)))return console.log("Found! We found "+n+"!"),!0;return!1}(e,null))return null;const i=[n];let s=n;for(new Map,r.forEach(((t,e)=>{console.log(`${e}: ${t}`)})),console.log("Current is "+s),console.log("Current is "+s.toString()),console.log("ASSSSSSSSSSSSSSSSSSSSSSSSs"),console.log(s!==e);s!==e&&null!==s;){console.log("This shouldn't read if currentNode is null "+s),console.log("Drawing path to root. Currently at "+i);let t=JSON.stringify(s);if(console.log(t),console.log(r.get(t)),s=r.get(s.toString()),null===s)break;console.log(s),i.unshift(JSON.parse("["+s+"]")),console.log(s)}return console.log(i),i}};t.addVertex(this.startpos);let e=[],n=[],o=this.all_possible_moves(this.startpos),r=this.startpos;for(let n=0;n<o.length;n++)t.addVertex(o[n]),t.addEdge(o[n],r),e.push(o[n]);var i=t.AdjList.keys();for(let e of i){let o=t.AdjList.get(e);for(let e of o)if(console.log("Comparing point "+e+" with endpos "+this.endpos),e.toString()===this.endpos.toString())return console.log("Endpoint found!"),n.push(e),t.findPathToRoot(t,this.startpos,this.endpos)}}all_possible_moves(t){const e=[[-1,-2],[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[1,-2],[2,-1]];let n=[];for(let o=0;o<8;o++)this.check_validity([t[0]+e[o][0],t[1]+e[o][1]])&&(console.log(this.check_validity([t[0]+e[o][0],t[1]+e[o][1]])),n.push([t[0]+e[o][0],t[1]+e[o][1]]));return console.log(n),n}check_validity(t){return!(t[0]<0||t[0]>this.grid.size||t[1]<0||t[1]>this.grid.size)}}([3,1],[4,3],m).knight_moves(),console.log(m)})()})();