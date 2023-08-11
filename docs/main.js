(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>l});var o=n(81),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([t.id,"/* Change this *{} later. It's making the script and style appear on the page */\n/* Hiding them temporarily for now */\n\n\n* {\n display: flex;\n box-sizing: border-box;\n}\n\nscript {\n  display: none;\n}\n\nstyle {\n  display: none;\n}\n\n/* Hiding them temporarily for now */\n\nbody{\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.top, .middle{\n  padding: 20px;\n  width: 2000px;\n  justify-content: center;\n  color: white;\n  font-size: 60px;\n  font-weight: 900;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.top{\n  background-color: darkgray;\n  flex-direction: column;\n  flex-shrink: 0;\n  min-height: 100px;\n  justify-content: center;\n  align-items: center;\n}\n\n\nbutton{\n  justify-content: center;\n  background-color: lightslategray;\n  color: gold;\n  width: 20%;\n  padding: 20px, 100px;\n  margin: 30px;\n  border-radius: 12px;\n  font-size: 34px;\n }\n \n\n.slider {\n  -webkit-appearance: none;\n  width: 50%;\n  height: 10px;\n  background: #201e1e;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n  margin-top: 40px;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 25px; /* Set a specific slider handle width */\n  height: 55px; /* Slider handle height */\n  background: #04AA6D; /* Green background */\n  cursor: pointer; /* Cursor on hover */\n}\n\n.sliderText{\n  padding: 30px;\n  font-size: 40px;\n}\n\n\n.middle{\n  background-color: #1F2937;\n  min-height: 85%;\n  min-width: 85%;\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  grid-template-rows: 10% 80%;\n}\n\n#posContainer{\n  display: grid;\n  grid-column-start: 2;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n}\n\n#startPosContainer,#endPosContainer{\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  justify-items: center;\n}\n\n.posText{\n  font-size: 40px;\n}\n\n.grid{\n  display: inline-grid;\n  /* grid colums and rows defined in grid.js */\n  height: 800px;\n  width: 800px;\n  background-color: gray;\n  margin-top: 30px;\n}\n\n.cell{\n background-color: #ffffff;\n display: flex;\n justify-content: center;\n align-items: center;\n /* font-size: 10px; */\n}\n\n.footer{\n  justify-content: center;\n  align-items: center;\n  background: black;\n  color: white;\n  padding: 70px;\n  letter-spacing: 4px;\n  width: 2000px;\n}\n",""]);const l=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(s[c]=!0)}for(var a=0;a<t.length;a++){var d=[].concat(t[a]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},s=[],l=0;l<t.length;l++){var c=t[l],a=o.base?c[0]+o.base:c[0],d=i[a]||0,g="".concat(a," ").concat(d);i[a]=d+1;var p=n(g),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=r(u,o);o.byIndex=l,e.splice(l,0,{identifier:g,updater:h,references:1})}s.push(g)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var l=n(i[s]);e[l].references--}for(var c=o(t,r),a=0;a<i.length;a++){var d=n(i[a]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),i=n(569),s=n.n(i),l=n(565),c=n.n(l),a=n(216),d=n.n(a),g=n(589),p=n.n(g),u=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=class{constructor(t,e,n,o){this.size=n,this.grid=this.makeGrid(n,o),t&&(this.startpos=t),this.endpos=e,this.gridDiv=o}makeGrid(t,e){const n=[],o=e,r=700/t;for(let e=0;e<t;e+=1){n[e]=[];for(let r=0;r<t;r+=1){n[e][r]=document.createElement("div");const i=n[e][r];i.classList.add("cell"),i.style.border="2px solid darkgrey",i.style.fontSize=500/t+"px",i.class="cell",o.appendChild(i),i.addEventListener("click",I),i.setAttribute("data-position",`[${e}, ${r}]`)}}return o.style.gridColumnStart="2",o.style.gridRowStart="2",o.style.justifySelf="center",o.style.gridTemplateColumns=`repeat(${t}, 1fr)`,o.style.gridTemplateRows=`repeat(${t}, 1fr)`,o.style.width=t*(r+4)+"px",o.style.height=t*(r+4)+"px",console.log(n),n}darken(t){console.log("Darkening"),console.log(t);let e=t.style.backgroundColor;e=this.rgbToHex(e),""===e||void 0===e?e="0xFFFFFF":(e=e.slice(1),e=String.prototype.concat("0x",e));const n=e-2236962;t.style.backgroundColor=String.prototype.concat("#",n.toString(16))}color_path(t){console.log(t.length);const e=document.getElementById("grid");let n,o,r,i;const s=this.lerpColor(10070681,2250018,t.length);let l=0;t.forEach((c=>{[r,i]=c,o=r*this.size+i,n=e.childNodes[o],n.style.backgroundColor=String.prototype.concat("#",s[l].toString(16)),0!==l&&(n.textContent=`${l}`),0===l&&(n.style.borderColor="#fbfc8d",n.style.borderWidth="4px"),l===t.length-1&&(n.style.borderColor="red",n.style.borderWidth="4px"),l+=1}))}lerpColor(t,e,n){const o=t>>15&255,r=t>>8&255,i=255&t,s=e>>16&255,l=e>>8&255,c=255&e,a=1/(n-1),d=[];for(let t=0;t<n;t+=1){const e=Math.round(o+t*a*(s-o))<<16|Math.round(r+t*a*(l-r))<<8|Math.round(i+t*a*(c-i));d.push(e)}return d}rgbToHex(t){if("r"===t.charAt(0)){const e=t.replace("rgb(","").replace(")","").split(",");let n=parseInt(e[0],10).toString(16),o=parseInt(e[1],10).toString(16),r=parseInt(e[2],10).toString(16);return n=1===n.length?`0${n}`:n,o=1===o.length?`0${o}`:o,r=1===r.length?`0${r}`:r,`#${n}${o}${r}`}return"#000000"}},m=n.p+"7996733f152d2c4a1dec.svg",y=class{constructor(t){this.grid=t,this.setup()}setup(){if(-1===this.grid.startpos[0])return;console.log("starting setup"),console.log(this.grid);const t=this.grid.gridDiv,e=new Image,n=`${Math.floor(600/this.grid.size*.9)}px`;console.log(n),console.log(t),e.src=m,e.style.width=n,e.style.height=n;let[o,r]=this.grid.startpos,i=o*this.grid.size+r,s=t.childNodes[i];s.style.backgroundColor="black",s.appendChild(e),e.style.pointerEvents="none",[o,r]=this.grid.endpos,i=o*this.grid.size+r,s=t.childNodes[i]}knight_moves(){const t=new class{constructor(t){this.noOfVertices=t,this.AdjList=new Map}addVertex(t){this.AdjList.set(t,[]),this.noOfVertices+=1}addEdge(t,e){this.AdjList.get(t).push(e),this.AdjList.get(e).push(t)}printGraph(){const t=this.AdjList.keys();for(const e of t){const t=this.AdjList.get(e);let n="";for(const e of t)n+=`${e} `;console.log(`${e} -> ${n}`)}}findPathToRoot(t,e,n){console.log(`Searching for path to root from ${n} to ${e}`);const o=new Set,r=new Map;if(!function e(i,s){if(console.log(`Searching for ${i} From parent ${s}`),o.add(i.toString()),s?r.set(i.toString(),s.toString()):r.set(i.toString(),s),console.log(i),console.log(n),console.log(i===n),i.toString()===n.toString())return console.log(`${i} is the endpoint!`),!0;console.log(`Adj list .get = ${t.AdjList.get(i)}`),console.log(t.AdjList.get(i));for(const n of t.AdjList.get(i))if(console.log(`Checking neighbor ${n}`),!o.has(n.toString())&&(console.log(`Adding ${n} to visitedpath`),e(n,i)))return console.log(`Found! We found ${n}!`),!0;return!1}(e,null))return null;const i=[n];let s=n;for(r.forEach(((t,e)=>{console.log(`${e}: ${t}`)})),console.log(`Current is ${s}`),console.log(`Current is ${s.toString()}`),console.log(s!==e);s!==e&&null!==s;){console.log(`This shouldn't read if currentNode is null ${s}`),console.log(`Drawing path to root. Currently at ${i}`);const t=JSON.stringify(s);if(console.log(t),console.log(r.get(t)),s=r.get(s.toString()),null===s)break;console.log(s),i.unshift(JSON.parse(`[${s}]`)),console.log(s)}return console.log(i),i}};t.addVertex(this.grid.startpos);const e=[],n=[];let o=this.grid.startpos,r=[];const i=document.getElementById("grid");let s,l,c,a;for(e.push(o);null!=o;){if(console.log("################STARTING LOOP#####################"),console.log(e.length),console.log(`Curpos is ${o}`),o.toString()===this.grid.endpos.toString()){console.log("!!!!!!!!!!!!!!!Endpoint found!!!!!!!!!!!!!!!!!!!!!!!!");const e=t.findPathToRoot(t,this.grid.startpos,this.grid.endpos);return console.log(`Path to the endpoint is: ${e}`),this.grid.color_path(e),e}r=this.all_possible_moves(o),console.log(`Confirming possible moves ${r}`);for(let d=0;d<r.length;d+=1)console.log(`The list of visited nodes is now: ${n}`),console.log(n),console.log(`Is ${r[d].toString()} in the visited`),n.find((t=>this.arraycompare(t,r[d])))?console.log(!0):console.log(!1),n.find((t=>this.arraycompare(t,r[d])))||(console.log(`Adding ${r[d]} to the queue`),t.addVertex(r[d]),t.addEdge(r[d],o),e.push(r[d]),n.push(r[d]),[a,c]=r[d],l=a*this.grid.size+c,s=i.childNodes[l],this.grid.darken(s));console.log(`Removing ${e[0]} from the queue`),o=e.shift(),console.log(`The queue is now ${e}`),console.log(`The list of visited nodes is now ${n}`),console.log("/////////////////////END LOOP////////////////////////")}return null}arraycompare(t,e){return t[0]===e[0]&&t[1]===e[1]}all_possible_moves(t){const e=[[-1,-2],[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[1,-2],[2,-1]],n=[];for(let o=0;o<e.length;o+=1)this.check_validity([t[0]+e[o][0],t[1]+e[o][1]])&&(console.log(this.check_validity([t[0]+e[o][0],t[1]+e[o][1]])),n.push([t[0]+e[o][0],t[1]+e[o][1]]));return console.log(`Possible hops are: ${n}`),n}check_validity(t){return console.log(t[0]),console.log(t[1]),!(t[0]<0||t[0]>this.grid.size-1||t[1]<0||t[1]>this.grid.size-1)}},v=document.getElementById("sliderText"),x=document.getElementById("slider"),b=document.getElementById("grid"),w=document.getElementById("startPos"),$=document.getElementById("endPos"),S=[-1,0];let C=S,k=[0,0],T=8,E="placeKnight";function j(){T=x.value,v.textContent=`${x.value} x ${x.value} Grid`}function A(){j(),function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(b),E="placeKnight";const t=new f(C,k,T,b),e=new y(t);C!==S&&e.knight_moves()}function I(t){const e=t.target,n=e.dataset.position,o=JSON.parse(n);return console.log(o),console.log(E),"placeKnight"===E?(C=o,e.style.backgroundColor="#e4e665",w.textContent=`[${o[0]}, ${o[1]}]`,E="placeEnd"):(k=o,$.textContent=`[${o[0]}, ${o[1]}]`,E="placeKnight",A()),!0}v.textContent=`${x.value} x ${x.value} Grid`,x.addEventListener("input",j),x.addEventListener("input",A),A()})()})();