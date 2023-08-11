(()=>{"use strict";var t={426:(t,n,e)=>{e.d(n,{Z:()=>l});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,"/* Change this *{} later. It's making the script and style appear on the page */\n/* Hiding them temporarily for now */\n\n\n* {\n display: flex;\n box-sizing: border-box;\n}\n\nscript {\n  display: none;\n}\n\nstyle {\n  display: none;\n}\n\n/* Hiding them temporarily for now */\n\nbody{\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.top, .middle{\n  padding: 20px;\n  width: 2000px;\n  justify-content: center;\n  color: white;\n  font-size: 60px;\n  font-weight: 900;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.top{\n  background-color: darkgray;\n  flex-direction: column;\n  flex-shrink: 0;\n  min-height: 100px;\n  justify-content: center;\n  align-items: center;\n}\n\n\nbutton{\n  justify-content: center;\n  background-color: lightslategray;\n  color: gold;\n  width: 20%;\n  padding: 20px, 100px;\n  margin: 30px;\n  border-radius: 12px;\n  font-size: 34px;\n }\n \n\n.slider {\n  -webkit-appearance: none;\n  width: 50%;\n  height: 10px;\n  background: #201e1e;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n  margin-top: 40px;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 25px; /* Set a specific slider handle width */\n  height: 55px; /* Slider handle height */\n  background: #04AA6D; /* Green background */\n  cursor: pointer; /* Cursor on hover */\n}\n\n.sliderText{\n  padding: 30px;\n  font-size: 40px;\n}\n\n\n.middle{\n  background-color: #1F2937;\n  min-height: 85%;\n  min-width: 85%;\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  grid-template-rows: 10% 80%;\n}\n\n#posContainer{\n  display: grid;\n  grid-column-start: 2;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n}\n\n#startPosContainer,#endPosContainer{\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  justify-items: center;\n}\n\n.posText{\n  font-size: 40px;\n}\n\n.posText{\n  font-size: 60px;\n}\n\n.grid{\n  display: inline-grid;\n  /* grid colums and rows defined in grid.js */\n  height: 800px;\n  width: 800px;\n  background-color: gray;\n  margin-top: 30px;\n}\n\n.cell{\n background-color: #ffffff;\n display: flex;\n justify-content: center;\n align-items: center;\n /* font-size: 10px; */\n}\n\n.footer{\n  justify-content: center;\n  align-items: center;\n  background: black;\n  color: white;\n  padding: 70px;\n  letter-spacing: 4px;\n  width: 2000px;\n}\n",""]);const l=s},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(s[c]=!0)}for(var a=0;a<t.length;a++){var d=[].concat(t[a]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var i={},s=[],l=0;l<t.length;l++){var c=t[l],a=o.base?c[0]+o.base:c[0],d=i[a]||0,g="".concat(a," ").concat(d);i[a]=d+1;var p=e(g),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var h=r(u,o);o.byIndex=l,n.splice(l,0,{identifier:g,updater:h,references:1})}s.push(g)}return s}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var l=e(i[s]);n[l].references--}for(var c=o(t,r),a=0;a<i.length;a++){var d=e(i[a]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return t[o](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),o=e(795),r=e.n(o),i=e(569),s=e.n(i),l=e(565),c=e.n(l),a=e(216),d=e.n(a),g=e(589),p=e.n(g),u=e(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=class{constructor(t,n,e,o){this.size=e,this.grid=this.makeGrid(e,o),t&&(this.startpos=t),this.endpos=n,this.gridDiv=o}makeGrid(t,n){const e=[],o=n,r=700/t;for(let n=0;n<t;n+=1){e[n]=[];for(let r=0;r<t;r+=1){e[n][r]=document.createElement("div");const i=e[n][r];i.classList.add("cell"),i.style.border="2px solid darkgrey",i.style.fontSize=600/t+"px",i.class="cell",o.appendChild(i),i.addEventListener("click",I),i.setAttribute("data-position",`[${n}, ${r}]`)}}return o.style.gridColumnStart="2",o.style.gridRowStart="2",o.style.justifySelf="center",o.style.gridTemplateColumns=`repeat(${t}, 1fr)`,o.style.gridTemplateRows=`repeat(${t}, 1fr)`,o.style.width=t*(r+4)+"px",o.style.height=t*(r+4)+"px",console.log(e),e}darken(t){console.log("Darkening"),console.log(t);let n=t.style.backgroundColor;n=this.rgbToHex(n),""===n||void 0===n?n="0xFFFFFF":(n=n.slice(1),n=String.prototype.concat("0x",n));const e=n-2236962;t.style.backgroundColor=String.prototype.concat("#",e.toString(16))}color_path(t){console.log(t.length);const n=document.getElementById("grid");let e,o,r,i;const s=this.lerpColor(10070681,2250018,t.length);let l=0;t.forEach((c=>{[r,i]=c,o=r*this.size+i,e=n.childNodes[o],e.style.backgroundColor=String.prototype.concat("#",s[l].toString(16)),0!==l&&(e.textContent=`${l}`),0===l&&(e.style.borderColor="#fbfc8d",e.style.borderWidth="4px"),l===t.length-1&&(e.style.borderColor="red",e.style.borderWidth="4px"),l+=1}))}lerpColor(t,n,e){const o=t>>15&255,r=t>>8&255,i=255&t,s=n>>16&255,l=n>>8&255,c=255&n,a=1/(e-1),d=[];for(let t=0;t<e;t+=1){const n=Math.round(o+t*a*(s-o))<<16|Math.round(r+t*a*(l-r))<<8|Math.round(i+t*a*(c-i));d.push(n)}return d}rgbToHex(t){if("r"===t.charAt(0)){const n=t.replace("rgb(","").replace(")","").split(",");let e=parseInt(n[0],10).toString(16),o=parseInt(n[1],10).toString(16),r=parseInt(n[2],10).toString(16);return e=1===e.length?`0${e}`:e,o=1===o.length?`0${o}`:o,r=1===r.length?`0${r}`:r,`#${e}${o}${r}`}return"#000000"}},m=e.p+"7996733f152d2c4a1dec.svg",y=class{constructor(t){this.grid=t,this.setup()}setup(){if(-1===this.grid.startpos[0])return;console.log("starting setup"),console.log(this.grid);const t=this.grid.gridDiv,n=new Image,e=`${Math.floor(600/this.grid.size*.9)}px`;console.log(e),console.log(t),n.src=m,n.style.width=e,n.style.height=e;let[o,r]=this.grid.startpos,i=o*this.grid.size+r,s=t.childNodes[i];s.style.backgroundColor="black",s.appendChild(n),n.style.pointerEvents="none",[o,r]=this.grid.endpos,i=o*this.grid.size+r,s=t.childNodes[i]}knight_moves(){const t=new class{constructor(t){this.noOfVertices=t,this.AdjList=new Map}addVertex(t){this.AdjList.set(t,[]),this.noOfVertices+=1}addEdge(t,n){this.AdjList.get(t).push(n),this.AdjList.get(n).push(t)}printGraph(){const t=this.AdjList.keys();for(const n of t){const t=this.AdjList.get(n);let e="";for(const n of t)e+=`${n} `;console.log(`${n} -> ${e}`)}}findPathToRoot(t,n,e){console.log(`Searching for path to root from ${e} to ${n}`);const o=new Set,r=new Map;if(!function n(i,s){if(console.log(`Searching for ${i} From parent ${s}`),o.add(i.toString()),s?r.set(i.toString(),s.toString()):r.set(i.toString(),s),console.log(i),console.log(e),console.log(i===e),i.toString()===e.toString())return console.log(`${i} is the endpoint!`),!0;console.log(`Adj list .get = ${t.AdjList.get(i)}`),console.log(t.AdjList.get(i));for(const e of t.AdjList.get(i))if(console.log(`Checking neighbor ${e}`),!o.has(e.toString())&&(console.log(`Adding ${e} to visitedpath`),n(e,i)))return console.log(`Found! We found ${e}!`),!0;return!1}(n,null))return null;const i=[e];let s=e;for(r.forEach(((t,n)=>{console.log(`${n}: ${t}`)})),console.log(`Current is ${s}`),console.log(`Current is ${s.toString()}`),console.log(s!==n);s!==n&&null!==s;){console.log(`This shouldn't read if currentNode is null ${s}`),console.log(`Drawing path to root. Currently at ${i}`);const t=JSON.stringify(s);if(console.log(t),console.log(r.get(t)),s=r.get(s.toString()),null===s)break;console.log(s),i.unshift(JSON.parse(`[${s}]`)),console.log(s)}return console.log(i),i}};t.addVertex(this.grid.startpos);const n=[],e=[];let o=this.grid.startpos,r=[];const i=document.getElementById("grid");let s,l,c,a;for(n.push(o);null!=o;){if(console.log("################STARTING LOOP#####################"),console.log(n.length),console.log(`Curpos is ${o}`),o.toString()===this.grid.endpos.toString()){console.log("!!!!!!!!!!!!!!!Endpoint found!!!!!!!!!!!!!!!!!!!!!!!!");const n=t.findPathToRoot(t,this.grid.startpos,this.grid.endpos);return console.log(`Path to the endpoint is: ${n}`),this.grid.color_path(n),n}r=this.all_possible_moves(o),console.log(`Confirming possible moves ${r}`);for(let d=0;d<r.length;d+=1)console.log(`The list of visited nodes is now: ${e}`),console.log(e),console.log(`Is ${r[d].toString()} in the visited`),e.find((t=>this.arraycompare(t,r[d])))?console.log(!0):console.log(!1),e.find((t=>this.arraycompare(t,r[d])))||(console.log(`Adding ${r[d]} to the queue`),t.addVertex(r[d]),t.addEdge(r[d],o),n.push(r[d]),e.push(r[d]),[a,c]=r[d],l=a*this.grid.size+c,s=i.childNodes[l],this.grid.darken(s));console.log(`Removing ${n[0]} from the queue`),o=n.shift(),console.log(`The queue is now ${n}`),console.log(`The list of visited nodes is now ${e}`),console.log("/////////////////////END LOOP////////////////////////")}return null}arraycompare(t,n){return t[0]===n[0]&&t[1]===n[1]}all_possible_moves(t){const n=[[-1,-2],[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[1,-2],[2,-1]],e=[];for(let o=0;o<n.length;o+=1)this.check_validity([t[0]+n[o][0],t[1]+n[o][1]])&&(console.log(this.check_validity([t[0]+n[o][0],t[1]+n[o][1]])),e.push([t[0]+n[o][0],t[1]+n[o][1]]));return console.log(`Possible hops are: ${e}`),e}check_validity(t){return console.log(t[0]),console.log(t[1]),!(t[0]<0||t[0]>this.grid.size-1||t[1]<0||t[1]>this.grid.size-1)}},v=document.getElementById("sliderText"),x=document.getElementById("slider"),b=document.getElementById("grid"),w=document.getElementById("startPos"),$=document.getElementById("endPos"),S=[-1,0];let C=S,k=[0,0],T=8,E="placeKnight";function j(){T=x.value,v.textContent=`${x.value} x ${x.value} Grid`}function A(){j(),function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(b),E="placeKnight";const t=new f(C,k,T,b),n=new y(t);C!==S&&n.knight_moves()}function I(t){const n=t.target,e=n.dataset.position,o=JSON.parse(e);return console.log(o),console.log(E),"placeKnight"===E?(C=o,n.style.backgroundColor="#e4e665",w.textContent=`[${o[0]}, ${o[1]}]`,E="placeEnd"):(k=o,$.textContent=`[${o[0]}, ${o[1]}]`,E="placeKnight",A()),!0}v.textContent=`${x.value} x ${x.value} Grid`,x.addEventListener("input",j),x.addEventListener("input",A),A()})()})();