(()=>{"use strict";var n,r,e,o,t,a,i,s,c,A,p,u,d,f,l={122:(n,r,e)=>{e.d(r,{Z:()=>s});var o=e(537),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap);"]),i.push([n.id,":root {\n    --primary-collor : rgb(28, 198, 204);\n    --primary-dark : rgb(3, 99, 102);\n    --primary-active : rgb(12, 152, 26);\n    --font-base : 'Roboto Condensed';\n    --font-base-2: 'Lato';\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n    \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-collor);\n    font-family: var(--font-base), sans-serif;\n    \n}\n\n.container {\n    max-width: 700px;\n    margin: 50px auto;\n    background: #ffff;\n    padding: 20px;\n}\n\n.form-base h1 {\n    align-items: center;\n}\n.form-base input, .form-base label {\n    display: block;\n    width: 50%;\n    margin-bottom: 15px;\n\n}\n\n.form-base input{\n    font-size: 16px;\n    height: 30px;\n    padding: 0 5px;\n}\n\n.form-base input:focus {\n    outline: 1px solid var(--primary-collor);\n\n}\n\n.form-base button{\n    border: none;\n    background: var(--primary-collor);\n    color: white;\n    width: 30%;\n    height: 30px;\n    font-size: 14px;\n    cursor: pointer;\n    margin-top: 30px;\n    margin-left: 35%;\n    \n}\n\n.form-base button:hover{\n    background: var(--primary-dark);\n}\n\n.form-base button:active{\n    background: var(--primary-active);\n}\n\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,mCAAmC;IACnC,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,UAAU;;AAEd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;IACjC,yCAAyC;;AAE7C;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,UAAU;IACV,mBAAmB;;AAEvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,wCAAwC;;AAE5C;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,gBAAgB;;AAEpB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,iCAAiC;AACrC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');\n:root {\n    --primary-collor : rgb(28, 198, 204);\n    --primary-dark : rgb(3, 99, 102);\n    --primary-active : rgb(12, 152, 26);\n    --font-base : 'Roboto Condensed';\n    --font-base-2: 'Lato';\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n    \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-collor);\n    font-family: var(--font-base), sans-serif;\n    \n}\n\n.container {\n    max-width: 700px;\n    margin: 50px auto;\n    background: #ffff;\n    padding: 20px;\n}\n\n.form-base h1 {\n    align-items: center;\n}\n.form-base input, .form-base label {\n    display: block;\n    width: 50%;\n    margin-bottom: 15px;\n\n}\n\n.form-base input{\n    font-size: 16px;\n    height: 30px;\n    padding: 0 5px;\n}\n\n.form-base input:focus {\n    outline: 1px solid var(--primary-collor);\n\n}\n\n.form-base button{\n    border: none;\n    background: var(--primary-collor);\n    color: white;\n    width: 30%;\n    height: 30px;\n    font-size: 14px;\n    cursor: pointer;\n    margin-top: 30px;\n    margin-left: 35%;\n    \n}\n\n.form-base button:hover{\n    background: var(--primary-dark);\n}\n\n.form-base button:active{\n    background: var(--primary-active);\n}\n\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<n.length;A++){var p=[].concat(n[A]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),r.push(p))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],A=o.base?c[0]+o.base:c[0],p=a[A]||0,u="".concat(A," ").concat(p);a[A]=p+1;var d=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var l=t(f,o);o.byIndex=s,r.splice(s,0,{identifier:u,updater:l,references:1})}i.push(u)}return i}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=o(n,t),A=0;A<a.length;A++){var p=e(a[A]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},m={};function b(n){var r=m[n];if(void 0!==r)return r.exports;var e=m[n]={id:n,exports:{}};return l[n](e,e.exports,b),e.exports}b.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return b.d(r,{a:r}),r},b.d=(n,r)=>{for(var e in r)b.o(r,e)&&!b.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},b.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),b.nc=void 0,n=b(379),r=b.n(n),e=b(795),o=b.n(e),t=b(569),a=b.n(t),i=b(565),s=b.n(i),c=b(216),A=b.n(c),p=b(589),u=b.n(p),d=b(122),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=A(),r()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();
//# sourceMappingURL=bundle.js.map