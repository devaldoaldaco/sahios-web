function e(e,t,i,s){var a,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;class r{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new r(i,e,s)},o=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,s))(t)})(e):e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const d=window,c=d.trustedTypes,p=c?c.emptyScript:"",m=d.reactiveElementPolyfillSupport,u={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},h=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:h},f="finalized";class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const a=this[e];this[t]=s,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):s.forEach(i=>{const s=document.createElement("style"),a=t.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=i.cssText,e.appendChild(s)})})(s,this.constructor.elementStyles),s}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=g){var s;const a=this.constructor._$Ep(e,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(t,i.type);this._$El=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,a=s._$Ev.get(e);if(void 0!==a&&this._$El!==a){const e=s.getPropertyOptions(a),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:u;this._$El=a,this[a]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;v[f]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:v}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const x=window,w=x.trustedTypes,y=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,E="?"+T,A=`<${E}>`,k=document,C=()=>k.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,P="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,L=/>/g,I=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,O=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),G=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),j=new WeakMap,F=k.createTreeWalker(k,129,null,!1);function N(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(t):t}const V=(e,t)=>{const i=e.length-1,s=[];let a,r=2===t?"<svg>":"",n=_;for(let t=0;t<i;t++){const i=e[t];let o,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===_?"!--"===l[1]?n=z:void 0!==l[1]?n=L:void 0!==l[2]?(B.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=null!=a?a:_,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?I:'"'===l[3]?O:D):n===O||n===D?n=I:n===z||n===L?n=_:(n=I,a=void 0);const p=n===I&&e[t+1].startsWith("/>")?" ":"";r+=n===_?i+A:d>=0?(s.push(o),i.slice(0,d)+S+i.slice(d)+T+p):i+T+(-2===d?(s.push(void 0),t):p)}return[N(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),s]};class R{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,r=0;const n=e.length-1,o=this.parts,[l,d]=V(e,t);if(this.el=R.createElement(l,i),F.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=F.nextNode())&&o.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith(S)||t.startsWith(T)){const i=d[r++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+S).split(T),t=/([.?@])?(.*)/.exec(i);o.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?Q:"@"===t[1]?J:Y})}else o.push({type:6,index:a})}for(const t of e)s.removeAttribute(t)}if(B.test(s.tagName)){const e=s.textContent.split(T),t=e.length-1;if(t>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],C()),F.nextNode(),o.push({type:2,index:++a});s.append(e[t],C())}}}else if(8===s.nodeType)if(s.data===E)o.push({type:2,index:a});else{let e=-1;for(;-1!==(e=s.data.indexOf(T,e+1));)o.push({type:7,index:a}),e+=T.length-1}a++}}static createElement(e,t){const i=k.createElement("template");return i.innerHTML=e,i}}function U(e,t,i=e,s){var a,r,n,o;if(t===G)return t;let l=void 0!==s?null===(a=i._$Co)||void 0===a?void 0:a[s]:i._$Cl;const d=M(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,s)),void 0!==s?(null!==(n=(o=i)._$Co)&&void 0!==n?n:o._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(t=U(e,l._$AS(e,t.values),l,s)),t}class W{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:k).importNode(i,!0);F.currentNode=a;let r=F.nextNode(),n=0,o=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new X(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new ee(r,this,e)),this._$AV.push(t),l=s[++o]}n!==(null==l?void 0:l.index)&&(r=F.nextNode(),n++)}return F.currentNode=k,a}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{constructor(e,t,i,s){var a;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=null===(a=null==s?void 0:s.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),M(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>$(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&M(this._$AH)?this._$AA.nextSibling.data=e:this.$(k.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,a="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=R.createElement(N(s.h,s.h[0]),this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.v(i);else{const e=new W(a,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=j.get(e.strings);return void 0===t&&j.set(e.strings,t=new R(e)),t}T(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new X(this.k(C()),this.k(C()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,i,s,a){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const a=this.strings;let r=!1;if(void 0===a)e=U(this,e,t,0),r=!M(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const s=e;let n,o;for(e=a[0],n=0;n<a.length-1;n++)o=U(this,s[i+n],t,n),o===G&&(o=this._$AH[n]),r||(r=!M(o)||o!==this._$AH[n]),o===H?e=H:e!==H&&(e+=(null!=o?o:"")+a[n+1]),this._$AH[n]=o}r&&!s&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}const K=w?w.emptyScript:"";class Q extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class J extends Y{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=U(this,e,t,0))&&void 0!==i?i:H)===G)return;const s=this._$AH,a=e===H&&s!==H||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==H&&(s===H||a);a&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const te=x.litHtmlPolyfillSupport;null==te||te(R,X),(null!==(b=x.litHtmlVersions)&&void 0!==b?b:x.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ie,se;class ae extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var s,a;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let n=r._$litPart$;if(void 0===n){const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=n=new X(t.insertBefore(C(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return G}}ae.finalized=!0,ae._$litElement$=!0,null===(ie=globalThis.litElementHydrateSupport)||void 0===ie||ie.call(globalThis,{LitElement:ae});const re=globalThis.litElementPolyfillSupport;null==re||re({LitElement:ae}),(null!==(se=globalThis.litElementVersions)&&void 0!==se?se:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){customElements.define(e,t)}}})(e,t),oe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):oe(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var de;null===(de=window.HTMLSlotElement)||void 0===de||de.prototype.assignedElements;let ce=class extends ae{constructor(){super(...arguments),this.classAdd=[{id:"home",classToString:"active"},{id:"products",classToString:"false"},{id:"service",classToString:"false"},{id:"about",classToString:"false"}]}_handleMenuClicked(e){console.log("evento"),this.dispatchEvent(new CustomEvent("sahios-header-menu-clicked",{bubbles:!0,composed:!0,detail:!0}))}_changeActive(e){const t=e.target;this.classAdd=[{id:"home",classToString:"false"},{id:"products",classToString:"false"},{id:"service",classToString:"false"},{id:"about",classToString:"false"}],this.classAdd.forEach((e,i)=>{e.id===t.id?this.classAdd[i].classToString="active":this.classAdd[i].classToString="false"}),this.dispatchEvent(new CustomEvent("sahios-change-page-header",{bubbles:!0,composed:!0,detail:String(t.id)}))}render(){return q` <header> <img id="logo" src="../../../assets/logo-horizontal-blanco.svg" alt="Logo"> <nav class="nav-visible"> <ul> <li class="${this.classAdd.length>0?this.classAdd[0].classToString.toString():""}" @click="${this._changeActive}" id="home"> Inicio </li> <li class="${this.classAdd.length>0?this.classAdd[2].classToString.toString():""}" @click="${this._changeActive}" id="service"> Servicios </li> <li class="${this.classAdd.length>0?this.classAdd[3].classToString.toString():""}" @click="${this._changeActive}" id="about"> Acerca de nosotros </li> </ul> </nav> <button @click="${this._handleMenuClicked}"> <img id="menu" src="../../../assets/menu-hamburguesa.svg" alt="Menu hamburguesa"> </button> </header> `}};ce.styles=n`:host{display:block;height:80px;width:100%;background:#080d25;z-index:2}header{height:100%;width:calc(100% - 1rem);padding:0 .5rem;display:flex;justify-content:space-between;align-items:center;z-index:2}#logo{height:60px;width:150px}nav{display:none}li.active{color:#46f68a}li{font-size:.9rem;letter-spacing:.03rem}button{background:0 0;border:none;padding:0}#menu{height:12px;width:44px}@media screen and (min-width:562px){header{height:100%;width:calc(100% - 6rem);padding:0 3rem}}@media screen and (min-width:794px){nav{display:block;min-width:500px;color:#fff}ul{margin:0;padding:0;list-style:none;display:flex;justify-content:space-between}li{font-size:.9rem}button{display:none}}@media screen and (min-width:1024px){li{letter-spacing:.03rem}}@media screen and (min-width:1201px){header{width:calc(100% - 10rem);padding:0 5rem}nav{min-width:600px}li{font-size:1rem}}@media screen and (min-width:1400px){header{width:calc(100% - 20rem);padding:0 10rem}}`,e([le({type:Array})],ce.prototype,"classAdd",void 0),ce=e([ne("sahios-header")],ce);let pe=class extends ae{render(){return q` <section> <p>Describe tu problema, nosotros nos comunicamos contigo</p> <form> <input id="name" type="text" placeholder="Nombre"> <input id="phone" type="text" placeholder="Teléfono Movil"> <textarea name="description" id="description" cols="30" rows="10" placeholder="Cual es tu problema ?"></textarea> <select name="hour" id="hour"> <option value="0">En que horario te queda mejor ?</option> <option value="10">10:00</option> <option value="11">11:00</option> <option value="12">12:00</option> <option value="13">13:00</option> <option value="14">14:00</option> <option value="15">15:00</option> <option value="16">16:00</option> </select> <button class="primary">Agendar</button> </form> </section> `}};pe.styles=n`:host{display:block;height:calc(569px - 6rem);width:calc(450px - 6rem);color:#fff;background-color:rgba(255,255,255,.16);padding:3rem;backdrop-filter:blur(50px);-webkit-backdrop-filter:blur(50px);border-radius:1rem}section{height:100%;width:100%;display:flex;flex-direction:column}p{font-size:20px;margin-top:0;margin-bottom:1.5rem}form{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;align-content:space-between}input{height:53px;color:#fff;border-radius:1rem;background-color:rgba(255,255,255,.26);padding:0 1rem;border:none;font-family:'Sofia Pro'}textarea{height:70px;color:#fff;border-radius:1rem;background-color:rgba(255,255,255,.26);padding:1rem 1rem;border:none;font-family:'Sofia Pro'}select{height:53px;color:#fff;border-radius:1rem;background-color:rgba(255,255,255,.26);padding:0 1rem;border:none;font-family:'Sofia Pro'}.select-selected.select-arrow-active:after{border-color:transparent transparent #fff transparent;top:7px}button{height:55px;width:100%;border-radius:5px;letter-spacing:.02rem;padding:0;margin-top:1.5rem}button.primary{background:#46f68a;color:#080d25;border:none;opacity:1}::placeholder{color:#fff}`,pe=e([ne("sahios-form")],pe);let me=class extends ae{constructor(){super(...arguments),this.title="Home"}render(){return q` <main> <section class="left-section"> <h1> Sabemos como <b>tratar</b> a tu aliado del trabajo </h1> <p class="hilghlight"> Nuestro equipo de expertos también desarrolla soluciones digitales modernas que impulsan la eficiencia, la productividad y la transformación tecnológica de tu negocio. 🚀 </p> <div> <button class="primary">Empezar ahora</button> <button class="secundary"> <a></a> Contacto</button> </div> </section> <section class="right-section"> <sahios-form></sahios-form> </section> </main> <img class="first" src="../../../assets/background-home-desktop.svg" alt="Home image"> <img class="second" src="../../../assets/background-home-mobile.svg" alt="Home image"> `}};me.styles=n`:host{display:block;min-height:100vh;width:100%;overflow:hidden;position:relative}main{min-height:calc(100% - 5rem);background:#080b24;background:linear-gradient(150deg,#080b24 20%,#0b4a5d 73%);color:#fff;text-align:left;overflow:hidden;display:flex}h1{max-width:31.25rem;margin:0;font-size:2.188rem;padding:3rem 1rem 1rem}b{color:#46f68a}p{max-width:37.5rem;margin:0;font-size:1rem;padding:1rem;letter-spacing:.01rem;line-height:1.25rem}div{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:1rem}button{height:3.125rem;width:12.688rem;font-size:.9rem;font-weight:500;border-radius:.313rem;letter-spacing:.02rem;padding:0}button.primary{background:#46f68a;color:#080d25;border:none}button.secundary{background:0 0;color:#fff;border:.063rem solid #46f68a}img.first{width:65%;position:absolute;bottom:0;right:0;display:none}img.second{width:100%;position:absolute;bottom:0;right:0}.left-section,.right-section{z-index:1}.right-section{display:flex;justify-content:center;align-items:center}.hilghlight{background:rgba(0,0,0,.45);backdrop-filter:blur(4px);border-radius:12px;color:#fff}@media screen and (max-width:345px){div{flex-direction:column}button.secundary{margin-top:2rem}}@media screen and (min-width:346px){div{flex-direction:column}button.secundary{margin-top:2rem}}@media screen and (min-width:461px){div{width:25.5rem}}@media screen and (min-width:502px){div{width:26.5rem;flex-direction:row;margin:0 auto}button.secundary{margin-top:0}}@media screen and (min-width:562px){h1{max-width:35.25rem;font-size:2.813rem;padding:5rem 3rem 1.5rem}p{max-width:34.375rem;padding:1.5rem 3rem;font-size:1.563rem;letter-spacing:.05rem;line-height:1.563rem}div{padding:1.5rem 3rem}img.first{display:block;width:85%}img.second{display:none}}@media screen and (min-width:850px){div{margin:0}}@media screen and (min-width:932px){div{width:26.5rem;flex-direction:row}button.secundary{margin-top:0;margin-left:1rem}img.first{display:block;width:80%}}@media screen and (max-width:982px){sahios-form{display:none}}@media screen and (min-width:983px){img.second{display:none}}@media screen and (min-width:1024px){img.first{width:60%}.left-section,.right-section{width:50%}.left-section{display:flex;flex-direction:column;justify-content:center}h1{padding-top:0}}@media screen and (min-width:1201px){h1{padding:0 5rem 1.5rem}p{padding:1.5rem 5rem 1.5rem}div{padding:1.5rem 5rem 1.5rem}.left-section{width:50%}.right-section{width:50%}}@media screen and (min-width:1400px){div,h1,p{padding-left:10rem}h1{max-width:45rem}p{max-width:45rem}img.first{width:52%}.left-section{width:60%}.right-section{width:40%;justify-content:start}}`,e([le({type:String})],me.prototype,"title",void 0),me=e([ne("home-page")],me);let ue=class extends ae{render(){return q` <main> <section class="left-section"> <h1>Beneficios que obtienes al <b>trabajar con nosotros</b></h1> <p> Nos gusta ser el aliado tecnológico que impulsa tu productividad. Estas son algunas razones por las que puedes confiar en nosotros para cuidar tus equipos y ofrecerte soluciones digitales eficientes y personalizadas. ⚡ </p> <div class="reason"> <img class="icon" src="../../../assets/icon-checkmark.svg" alt="checkmark"> <div> <h3>Calidad</h3> <p> Nos comprometemos a brindarte un servicio excepcional, por lo que cada uno de nuestros procesos está basado en altos estándares de calidad y buenas prácticas profesionales. <br><br> Nuestro objetivo es ofrecerte una atención eficiente, confiable y personalizada, asegurando que cada solución cumpla con tus expectativas y contribuya a mejorar tu experiencia y resultados. </p> </div> </div> <div class="reason"> <img class="icon" src="../../../assets/icon-clock.svg" alt="checkmark"> <div> <h3>Velocidad</h3> <p> La rapidez es una de nuestras principales fortalezas, sin comprometer en ningún momento la calidad de nuestro trabajo. <br><br> Nos enfocamos en ofrecer soluciones eficientes y bien ejecutadas, optimizando cada proceso para que la respuesta a tu necesidad llegue en menos tiempo del que imaginas, siempre manteniendo altos estándares de desempeño y confiabilidad. </p> </div> </div> <div class="reason"> <img class="icon" src="../../../assets/icon-money.svg" alt="checkmark"> <div> <h3>Precio</h3> <p> Entendemos que encontrar el mejor equilibrio entre calidad y precio es fundamental. <br><br> Por ello, ofrecemos servicios con costos justos y competitivos, cuidadosamente definidos para brindarte soluciones de alto valor sin afectar tu presupuesto, asegurando que recibas un servicio confiable, eficiente y accesible que realmente cuide tu inversión. 💰 </p> </div> </div> </section> <section class="right-section"> <img src="../../../assets/background-home-razones.svg" alt="Engines image"> </section> </main> <div class="divider"> <span class="space"></span> <span class="left-rectangle green"></span> <span class="left-rectangle blue"></span> <span class="right-rectangle green"></span> <span class="right-rectangle blue"></span> </div> `}};function he(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function ge(e={},t={}){const i=["__proto__","constructor","prototype"];Object.keys(t).filter(e=>i.indexOf(e)<0).forEach(i=>{void 0===e[i]?e[i]=t[i]:he(t[i])&&he(e[i])&&Object.keys(t[i]).length>0&&ge(e[i],t[i])})}ue.styles=n`:host{width:100%;color:#fff;text-align:left;background:#090d2b;display:block;position:relative}main{width:100%;color:#fff;text-align:left;background:#090d2b;display:block}h1{max-width:31.25rem;margin:0;font-size:1.75rem;padding:3rem 1rem 2rem}b{color:#46f68a}p{max-width:37.5rem;margin:0;font-size:1rem;padding:0 1rem 1rem;letter-spacing:.01rem;line-height:1.25rem}img{width:70%}.right-section{padding-top:3rem;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.reason{border-radius:1rem;margin:2rem auto;position:relative;width:calc(85% - 2rem);padding:1rem;display:flex;flex-direction:column;justify-content:center;background:rgba(255,255,255,.06);max-width:44.75rem}.icon{position:absolute;top:-.75rem;left:calc(50% - .75rem);height:2rem;width:2rem;margin:0 auto}h3{font-size:1.3rem;margin:.8rem 0}.reason p{margin:0;font-size:.8rem;letter-spacing:.02rem;line-height:1rem;padding:0}.divider{position:relative;overflow:hidden;padding:0;display:block;height:7rem;width:100%;background:#2a2d45;background:linear-gradient(to right bottom,#090d2b 50%,#2a2d45 50%)}.left-rectangle,.right-rectangle{height:1.5rem;width:10rem;position:absolute;transform:rotateZ(165deg)}.left-rectangle.green{display:none}.left-rectangle.blue{display:none}.right-rectangle.green{background:#46f68a;bottom:4rem;right:-1rem}.right-rectangle.blue{background:#05f5ff;bottom:3rem;right:-5rem}@media screen and (min-width:461px){.reason p{line-height:1.25rem}}@media screen and (min-width:562px){h1{max-width:31.25rem;font-size:2.813rem;padding:5rem 3rem 1.5rem}p{max-width:34.375rem;padding:1.5rem 3rem;font-size:1.563rem;letter-spacing:.05rem;line-height:1.563rem}img{width:60%}.reason div{padding:0}.left-rectangle.green{display:block;background:#46f68a;bottom:2rem;left:-1rem}.left-rectangle.blue{display:block;background:#05f5ff;bottom:3rem;left:-5rem}}@media screen and (min-width:764px){img{width:45%}h3{margin:1rem 0;font-size:1.4rem}.reason p{margin-bottom:1rem}.icon{position:static;height:2.5rem;width:2.5rem}}@media screen and (min-width:983px){main{display:flex;padding-bottom:2rem}img{width:70%}}@media screen and (min-width:1054px){h1{max-width:35.25rem}p{max-width:42.5rem}.reason{height:130px;position:static;flex-direction:row;align-items:center;margin-left:2rem}.reason div{width:85%}}@media screen and (min-width:1201px){h1{padding:7rem 5rem 1.5rem}p{padding:1.5rem 5rem 1.5rem}.left-section{width:55%}.reason{margin-left:4rem}.right-section{width:45%}}@media screen and (min-width:1400px){div,h1,p{padding-left:10rem}h1{max-width:35.25rem}p{max-width:42.5rem}.reason{max-height:5rem;margin-top:1rem;margin-left:9rem;margin-bottom:1rem}h3{font-size:1.19rem}img{width:60%}}`,ue=e([ne("home-page-reasons")],ue);const fe={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ve(){const e="undefined"!=typeof document?document:{};return ge(e,fe),e}const be={document:fe,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function xe(){const e="undefined"!=typeof window?window:{};return ge(e,be),e}function we(e,t=0){return setTimeout(e,t)}function ye(){return Date.now()}function Se(e,t="x"){const i=xe();let s,a,r;const n=function(e){const t=xe();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}(e);return i.WebKitCSSMatrix?(a=n.transform||n.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(e=>e.replace(",",".")).join(", ")),r=new i.WebKitCSSMatrix("none"===a?"":a)):(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=r.toString().split(",")),"x"===t&&(a=i.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===t&&(a=i.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0}function Te(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function Ee(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function Ae(...e){const t=Object(e[0]);for(let i=1;i<e.length;i+=1){const s=e[i];if(null!=s&&!Ee(s)){const e=Object.keys(Object(s)).filter(e=>"__proto__"!==e&&"constructor"!==e&&"prototype"!==e);for(let i=0,a=e.length;i<a;i+=1){const a=e[i],r=Object.getOwnPropertyDescriptor(s,a);void 0!==r&&r.enumerable&&(Te(t[a])&&Te(s[a])?s[a].__swiper__?t[a]=s[a]:Ae(t[a],s[a]):!Te(t[a])&&Te(s[a])?(t[a]={},s[a].__swiper__?t[a]=s[a]:Ae(t[a],s[a])):t[a]=s[a])}}}return t}function ke(e,t,i){e.style.setProperty(t,i)}function Ce({swiper:e,targetPosition:t,side:i}){const s=xe(),a=-e.translate;let r,n=null;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const l=t>a?"next":"prev",d=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,c=()=>{r=(new Date).getTime(),null===n&&(n=r);const l=Math.max(Math.min((r-n)/o,1),0),p=.5-Math.cos(l*Math.PI)/2;let m=a+p*(t-a);if(d(m,t)&&(m=t),e.wrapperEl.scrollTo({[i]:m}),d(m,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:m})}),void s.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=s.requestAnimationFrame(c)};c()}function Me(e,t=""){const i=xe(),s=[...e.children];return i.HTMLSlotElement&&e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(e=>e.matches(t)):s}function $e(e){try{return void console.warn(e)}catch(e){}}function Pe(e,t=[]){const i=document.createElement(e);return i.classList.add(...Array.isArray(t)?t:function(e=""){return e.trim().split(" ").filter(e=>!!e.trim())}(t)),i}function _e(e,t){return xe().getComputedStyle(e,null).getPropertyValue(t)}function ze(e){let t,i=e;if(i){for(t=0;null!==(i=i.previousSibling);)1===i.nodeType&&(t+=1);return t}}function Le(e,t){const i=[];let s=e.parentElement;for(;s;)t?s.matches(t)&&i.push(s):i.push(s),s=s.parentElement;return i}function Ie(e,t,i){const s=xe();return i?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}function De(e){return(Array.isArray(e)?e:[e]).filter(e=>!!e)}function Oe(e,t=""){"undefined"!=typeof trustedTypes?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:e=>e}).createHTML(t):e.innerHTML=t}let Be,qe,Ge;function He(){return Be||(Be=function(){const e=xe(),t=ve();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),Be}function je(e={}){return qe||(qe=function({userAgent:e}={}){const t=He(),i=xe(),s=i.navigator.platform,a=e||i.navigator.userAgent,r={ios:!1,android:!1},n=i.screen.width,o=i.screen.height,l=a.match(/(Android);?[\s\/]+([\d.]+)?/);let d=a.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===s;let u="MacIntel"===s;return!d&&u&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${n}x${o}`)>=0&&(d=a.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),u=!1),l&&!m&&(r.os="android",r.android=!0),(d||p||c)&&(r.os="ios",r.ios=!0),r}(e)),qe}function Fe(){return Ge||(Ge=function(){const e=xe(),t=je();let i=!1;function s(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(s()){const t=String(e.navigator.userAgent);if(t.includes("Version/")){const[e,s]=t.split("Version/")[1].split(" ")[0].split(".").map(e=>Number(e));i=e<16||16===e&&s<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=s();return{isSafari:i||r,needPerspectiveFix:i,need3dFix:r||a&&t.ios,isWebView:a}}()),Ge}var Ne={on(e,t,i){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof t)return s;const a=i?"unshift":"push";return e.split(" ").forEach(e=>{s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)}),s},once(e,t,i){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof t)return s;function a(...i){s.off(e,a),a.__emitterProxy&&delete a.__emitterProxy,t.apply(s,i)}return a.__emitterProxy=t,s.on(e,a,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof e)return i;const s=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[s](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed?i:i.eventsListeners?(e.split(" ").forEach(e=>{void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].forEach((s,a)=>{(s===t||s.__emitterProxy&&s.__emitterProxy===t)&&i.eventsListeners[e].splice(a,1)})}),i):i},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let i,s,a;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=t):(i=e[0].events,s=e[0].data,a=e[0].context||t),s.unshift(a);return(Array.isArray(i)?i:i.split(" ")).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(a,[e,...s])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(a,s)})}),t}};const Ve=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};const Re=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};const Ue=(e,t)=>{if(!e||e.destroyed||!e.params)return;const i=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(i){let t=i.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(i.shadowRoot?t=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(t=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&!t.lazyPreloaderManaged&&t.remove())})),t&&!t.lazyPreloaderManaged&&t.remove()}},We=(e,t)=>{if(!e.slides[t])return;const i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},Xe=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);const s="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const i=a,r=[i-t];return r.push(...Array.from({length:t}).map((e,t)=>i+s+t)),void e.slides.forEach((t,i)=>{r.includes(t.column)&&We(e,i)})}const r=a+s-1;if(e.params.rewind||e.params.loop)for(let s=a-t;s<=r+t;s+=1){const t=(s%i+i)%i;(t<a||t>r)&&We(e,t)}else for(let s=Math.max(a-t,0);s<=Math.min(r+t,i-1);s+=1)s!==a&&(s>r||s<a)&&We(e,s)};var Ye={updateSize:function(){const e=this;let t,i;const s=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:s.clientWidth,i=void 0!==e.params.height&&null!==e.params.height?e.params.height:s.clientHeight,0===t&&e.isHorizontal()||0===i&&e.isVertical()||(t=t-parseInt(_e(s,"padding-left")||0,10)-parseInt(_e(s,"padding-right")||0,10),i=i-parseInt(_e(s,"padding-top")||0,10)-parseInt(_e(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))},updateSlides:function(){const e=this;function t(t,i){return parseFloat(t.getPropertyValue(e.getDirectionLabel(i))||0)}const i=e.params,{wrapperEl:s,slidesEl:a,rtlTranslate:r,wrongRTL:n}=e,o=e.virtual&&i.virtual.enabled,l=o?e.virtual.slides.length:e.slides.length,d=Me(a,`.${e.params.slideClass}, swiper-slide`),c=o?e.virtual.slides.length:d.length;let p=[];const m=[],u=[];let h=i.slidesOffsetBefore;"function"==typeof h&&(h=i.slidesOffsetBefore.call(e));let g=i.slidesOffsetAfter;"function"==typeof g&&(g=i.slidesOffsetAfter.call(e));const f=e.snapGrid.length,v=e.slidesGrid.length,b=e.size-h-g;let x=i.spaceBetween,w=-h,y=0,S=0;if(void 0===b)return;"string"==typeof x&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*b:"string"==typeof x&&(x=parseFloat(x)),e.virtualSize=-x-h-g,d.forEach(e=>{r?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(ke(s,"--swiper-centered-offset-before",""),ke(s,"--swiper-centered-offset-after","")),i.cssMode&&(ke(s,"--swiper-slides-offset-before",`${h}px`),ke(s,"--swiper-slides-offset-after",`${g}px`));const T=i.grid&&i.grid.rows>1&&e.grid;let E;T?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();const A="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter(e=>void 0!==i.breakpoints[e].slidesPerView).length>0;for(let s=0;s<c;s+=1){E=0;const a=d[s];if(!a||(T&&e.grid.updateSlide(s,a,d),"none"!==_e(a,"display"))){if(o&&"auto"===i.slidesPerView)i.virtual.slidesPerViewAutoSlideSize&&(E=i.virtual.slidesPerViewAutoSlideSize),E&&a&&(i.roundLengths&&(E=Math.floor(E)),a.style[e.getDirectionLabel("width")]=`${E}px`);else if("auto"===i.slidesPerView){A&&(a.style[e.getDirectionLabel("width")]="");const s=getComputedStyle(a),r=a.style.transform,n=a.style.webkitTransform;if(r&&(a.style.transform="none"),n&&(a.style.webkitTransform="none"),i.roundLengths)E=e.isHorizontal()?Ie(a,"width",!0):Ie(a,"height",!0);else{const e=t(s,"width"),i=t(s,"padding-left"),r=t(s,"padding-right"),n=t(s,"margin-left"),o=t(s,"margin-right"),l=s.getPropertyValue("box-sizing");if(l&&"border-box"===l)E=e+n+o;else{const{clientWidth:t,offsetWidth:s}=a;E=e+i+r+n+o+(s-t)}}r&&(a.style.transform=r),n&&(a.style.webkitTransform=n),i.roundLengths&&(E=Math.floor(E))}else E=(b-(i.slidesPerView-1)*x)/i.slidesPerView,i.roundLengths&&(E=Math.floor(E)),a&&(a.style[e.getDirectionLabel("width")]=`${E}px`);a&&(a.swiperSlideSize=E),u.push(E),i.centeredSlides?(w=w+E/2+y/2+x,0===y&&0!==s&&(w=w-b/2-x),0===s&&(w=w-b/2-x),Math.abs(w)<.001&&(w=0),i.roundLengths&&(w=Math.floor(w)),S%i.slidesPerGroup===0&&p.push(w),m.push(w)):(i.roundLengths&&(w=Math.floor(w)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&p.push(w),m.push(w),w=w+E+x),e.virtualSize+=E+x,y=E,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,b)+g,r&&n&&("slide"===i.effect||"coverflow"===i.effect)&&(s.style.width=`${e.virtualSize+x}px`),i.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),T&&e.grid.updateWrapperSize(E,p),!i.centeredSlides){const t="auto"!==i.slidesPerView&&i.slidesPerView%1!=0,s=i.snapToSlideEdge&&!i.loop&&("auto"===i.slidesPerView||t);let a=p.length;if(s){let e;if("auto"===i.slidesPerView){e=1;let t=0;for(let i=u.length-1;i>=0&&(t+=u[i]+(i<u.length-1?x:0),t<=b);i-=1)e=u.length-i}else e=Math.floor(i.slidesPerView);a=Math.max(c-e,0)}const r=[];for(let t=0;t<p.length;t+=1){let n=p[t];i.roundLengths&&(n=Math.floor(n)),s?t<=a&&r.push(n):p[t]<=e.virtualSize-b&&r.push(n)}p=r,Math.floor(e.virtualSize-b)-Math.floor(p[p.length-1])>1&&(s||p.push(e.virtualSize-b))}if(o&&i.loop){const t=u[0]+x;if(i.slidesPerGroup>1){const s=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),a=t*i.slidesPerGroup;for(let e=0;e<s;e+=1)p.push(p[p.length-1]+a)}for(let s=0;s<e.virtual.slidesBefore+e.virtual.slidesAfter;s+=1)1===i.slidesPerGroup&&p.push(p[p.length-1]+t),m.push(m[m.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==x){const t=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");d.filter((e,t)=>!(i.cssMode&&!i.loop)||t!==d.length-1).forEach(e=>{e.style[t]=`${x}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;u.forEach(t=>{e+=t+(x||0)}),e-=x;const t=e>b?e-b:0;p=p.map(e=>e<=0?-h:e>t?t+g:e)}if(i.centerInsufficientSlides){let e=0;if(u.forEach(t=>{e+=t+(x||0)}),e-=x,e<b){const t=(b-e)/2;p.forEach((e,i)=>{p[i]=e-t}),m.forEach((e,i)=>{m[i]=e+t})}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:m,slidesSizesGrid:u}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){ke(s,"--swiper-centered-offset-before",-p[0]+"px"),ke(s,"--swiper-centered-offset-after",e.size/2-u[u.length-1]/2+"px");const t=-e.snapGrid[0],i=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+i)}if(c!==l&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==v&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(o||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,s=e.el.classList.contains(t);c<=i.maxBackfaceHiddenSlides?s||e.el.classList.add(t):s&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,i=[],s=t.virtual&&t.params.virtual.enabled;let a,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>s?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{i.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const e=t.activeIndex+a;if(e>t.slides.length&&!s)break;i.push(n(e))}else i.push(n(t.activeIndex));for(a=0;a<i.length;a+=1)if(void 0!==i[a]){const e=i[a].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,i=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-i-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,i=t.params,{slides:s,rtlTranslate:a,snapGrid:r}=t;if(0===s.length)return;void 0===s[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;a&&(n=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=i.spaceBetween;"string"==typeof o&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:"string"==typeof o&&(o=parseFloat(o));for(let e=0;e<s.length;e+=1){const l=s[e];let d=l.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(d-=s[0].swiperSlideOffset);const c=(n+(i.centeredSlides?t.minTranslate():0)-d)/(l.swiperSlideSize+o),p=(n-r[0]+(i.centeredSlides?t.minTranslate():0)-d)/(l.swiperSlideSize+o),m=-(n-d),u=m+t.slidesSizesGrid[e],h=m>=0&&m<=t.size-t.slidesSizesGrid[e],g=m>=0&&m<t.size-1||u>1&&u<=t.size||m<=0&&u>=t.size;g&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e)),Ve(l,g,i.slideVisibleClass),Ve(l,h,i.slideFullyVisibleClass),l.progress=a?-c:c,l.originalProgress=a?-p:p}},updateProgress:function(e){const t=this;if(void 0===e){const i=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*i||0}const i=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:a,isBeginning:r,isEnd:n,progressLoop:o}=t;const l=r,d=n;if(0===s)a=0,r=!0,n=!0;else{a=(e-t.minTranslate())/s;const i=Math.abs(e-t.minTranslate())<1,o=Math.abs(e-t.maxTranslate())<1;r=i||a<=0,n=o||a>=1,i&&(a=0),o&&(a=1)}if(i.loop){const i=t.getSlideIndexByData(0),s=t.getSlideIndexByData(t.slides.length-1),a=t.slidesGrid[i],r=t.slidesGrid[s],n=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);o=l>=a?(l-a)/n:(l+n-r)/n,o>1&&(o-=1)}Object.assign(t,{progress:a,progressLoop:o,isBeginning:r,isEnd:n}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(l&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",a)},updateSlidesClasses:function(){const e=this,{slides:t,params:i,slidesEl:s,activeIndex:a}=e,r=e.virtual&&i.virtual.enabled,n=e.grid&&i.grid&&i.grid.rows>1,o=e=>Me(s,`.${i.slideClass}${e}, swiper-slide${e}`)[0];let l,d,c;if(r)if(i.loop){let t=a-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=o(`[data-swiper-slide-index="${t}"]`)}else l=o(`[data-swiper-slide-index="${a}"]`);else n?(l=t.find(e=>e.column===a),c=t.find(e=>e.column===a+1),d=t.find(e=>e.column===a-1)):l=t[a];l&&(n||(c=function(e,t){const i=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;t?s.matches(t)&&i.push(s):i.push(s),e=s}return i}(l,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!c&&(c=t[0]),d=function(e,t){const i=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;t?s.matches(t)&&i.push(s):i.push(s),e=s}return i}(l,`.${i.slideClass}, swiper-slide`)[0],i.loop&&0===!d&&(d=t[t.length-1]))),t.forEach(e=>{Re(e,e===l,i.slideActiveClass),Re(e,e===c,i.slideNextClass),Re(e,e===d,i.slidePrevClass)}),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:a,activeIndex:r,realIndex:n,snapIndex:o}=t;let l,d=e;const c=e=>{let i=e-t.virtual.slidesBefore;return i<0&&(i=t.virtual.slides.length+i),i>=t.virtual.slides.length&&(i-=t.virtual.slides.length),i};if(void 0===d&&(d=function(e){const{slidesGrid:t,params:i}=e,s=e.rtlTranslate?e.translate:-e.translate;let a;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?s>=t[e]&&s<t[e+1]-(t[e+1]-t[e])/2?a=e:s>=t[e]&&s<t[e+1]&&(a=e+1):s>=t[e]&&(a=e);return i.normalizeSlideIndex&&(a<0||void 0===a)&&(a=0),a}(t)),s.indexOf(i)>=0)l=s.indexOf(i);else{const e=Math.min(a.slidesPerGroupSkip,d);l=e+Math.floor((d-e)/a.slidesPerGroup)}if(l>=s.length&&(l=s.length-1),d===r&&!t.params.loop)return void(l!==o&&(t.snapIndex=l,t.emit("snapIndexChange")));if(d===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=c(d));const p=t.grid&&a.grid&&a.grid.rows>1;let m;if(t.virtual&&a.virtual.enabled)m=a.loop?c(d):d;else if(p){const e=t.slides.find(e=>e.column===d);let i=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(i)&&(i=Math.max(t.slides.indexOf(e),0)),m=Math.floor(i/a.grid.rows)}else if(t.slides[d]){const e=t.slides[d].getAttribute("data-swiper-slide-index");m=e?parseInt(e,10):d}else m=d;Object.assign(t,{previousSnapIndex:o,snapIndex:l,previousRealIndex:n,realIndex:m,previousIndex:r,activeIndex:d}),t.initialized&&Xe(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(n!==m&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const i=this,s=i.params;let a=e.closest(`.${s.slideClass}, swiper-slide`);!a&&i.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!a&&e.matches&&e.matches(`.${s.slideClass}, swiper-slide`)&&(a=e)});let r,n=!1;if(a)for(let e=0;e<i.slides.length;e+=1)if(i.slides[e]===a){n=!0,r=e;break}if(!a||!n)return i.clickedSlide=void 0,void(i.clickedIndex=void 0);i.clickedSlide=a,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=r,s.slideToClickedSlide&&void 0!==i.clickedIndex&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}};var Ze={getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:i,translate:s,wrapperEl:a}=this;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;let r=Se(a,e);return r+=this.cssOverflowAdjustment(),i&&(r=-r),r||0},setTranslate:function(e,t){const i=this,{rtlTranslate:s,params:a,wrapperEl:r,progress:n}=i;let o,l=0,d=0;i.isHorizontal()?l=s?-e:e:d=e,a.roundLengths&&(l=Math.floor(l),d=Math.floor(d)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?l:d,a.cssMode?r[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-l:-d:a.virtualTranslate||(i.isHorizontal()?l-=i.cssOverflowAdjustment():d-=i.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${d}px, 0px)`);const c=i.maxTranslate()-i.minTranslate();o=0===c?0:(e-i.minTranslate())/c,o!==n&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,i=!0,s=!0,a){const r=this,{params:n,wrapperEl:o}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const l=r.minTranslate(),d=r.maxTranslate();let c;if(c=s&&e>l?l:s&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)o[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return Ce({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;o.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,i&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function Ke({swiper:e,runCallbacks:t,direction:i,step:s}){const{activeIndex:a,previousIndex:r}=e;let n=i;n||(n=a>r?"next":a<r?"prev":"reset"),e.emit(`transition${s}`),t&&"reset"===n?e.emit(`slideResetTransition${s}`):t&&a!==r&&(e.emit(`slideChangeTransition${s}`),"next"===n?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}var Qe={slideTo:function(e=0,t,i=!0,s,a){"string"==typeof e&&(e=parseInt(e,10));const r=this;let n=e;n<0&&(n=0);const{params:o,snapGrid:l,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:m,wrapperEl:u,enabled:h}=r;if(!h&&!s&&!a||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;void 0===t&&(t=r.params.speed);const g=Math.min(r.params.slidesPerGroupSkip,n);let f=g+Math.floor((n-g)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1);const v=-l[f];if(o.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),i=Math.floor(100*d[e]),s=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=i&&t<s-(s-i)/2?n=e:t>=i&&t<s&&(n=e+1):t>=i&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&(m?v>r.translate&&v>r.minTranslate():v<r.translate&&v<r.minTranslate()))return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;n!==(c||0)&&i&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=n>p?"next":n<p?"prev":"reset";const x=r.virtual&&r.params.virtual.enabled;if(!(x&&a)&&(m&&-v===r.translate||!m&&v===r.translate))return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(i,b),r.transitionEnd(i,b)),!1;if(o.cssMode){const e=r.isHorizontal(),i=m?v:-v;if(0===t)x&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),x&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{u[e?"scrollLeft":"scrollTop"]=i})):u[e?"scrollLeft":"scrollTop"]=i,x&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Ce({swiper:r,targetPosition:i,side:e?"left":"top"}),!0;u.scrollTo({[e?"left":"top"]:i,behavior:"smooth"})}return!0}const w=Fe().isSafari;return x&&!a&&w&&r.isElement&&r.virtual.update(!1,!1,n),r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,b),0===t?r.transitionEnd(i,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,b))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t,i=!0,s){if("string"==typeof e){e=parseInt(e,10)}const a=this;if(a.destroyed)return;void 0===t&&(t=a.params.speed);const r=a.grid&&a.params.grid&&a.params.grid.rows>1;let n=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)n+=a.virtual.slidesBefore;else{let e;if(r){const t=n*a.params.grid.rows;e=a.slides.find(e=>1*e.getAttribute("data-swiper-slide-index")===t).column}else e=a.getSlideIndexByData(n);const t=r?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:i,slidesOffsetBefore:o,slidesOffsetAfter:l}=a.params,d=i||!!o||!!l;let c=a.params.slidesPerView;"auto"===c?c=a.slidesPerViewDynamic():(c=Math.ceil(parseFloat(a.params.slidesPerView,10)),d&&c%2==0&&(c+=1));let p=t-e<c;if(d&&(p=p||e<Math.ceil(c/2)),s&&d&&"auto"!==a.params.slidesPerView&&!r&&(p=!1),p){const i=d?e<a.activeIndex?"prev":"next":e-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:i,slideTo:!0,activeSlideIndex:"next"===i?e+1:e-t+1,slideRealIndex:"next"===i?a.realIndex:void 0})}if(r){const e=n*a.params.grid.rows;n=a.slides.find(t=>1*t.getAttribute("data-swiper-slide-index")===e).column}else n=a.getSlideIndexByData(n)}return requestAnimationFrame(()=>{a.slideTo(n,t,i,s)}),a},slideNext:function(e,t=!0,i){const s=this,{enabled:a,params:r,animating:n}=s;if(!a||s.destroyed)return s;void 0===e&&(e=s.params.speed);let o=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(o=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<r.slidesPerGroupSkip?1:o,d=s.virtual&&r.virtual.enabled;if(r.loop){if(n&&!d&&r.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,e,t,i)}),!0}return r.rewind&&s.isEnd?s.slideTo(0,e,t,i):s.slideTo(s.activeIndex+l,e,t,i)},slidePrev:function(e,t=!0,i){const s=this,{params:a,snapGrid:r,slidesGrid:n,rtlTranslate:o,enabled:l,animating:d}=s;if(!l||s.destroyed)return s;void 0===e&&(e=s.params.speed);const c=s.virtual&&a.virtual.enabled;if(a.loop){if(d&&!c&&a.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const m=p(o?s.translate:-s.translate),u=r.map(e=>p(e)),h=a.freeMode&&a.freeMode.enabled;let g=r[u.indexOf(m)-1];if(void 0===g&&(a.cssMode||h)){let e;r.forEach((t,i)=>{m>=t&&(e=i)}),void 0!==e&&(g=h?r[e]:r[e>0?e-1:e])}let f=0;if(void 0!==g&&(f=n.indexOf(g),f<0&&(f=s.activeIndex-1),"auto"===a.slidesPerView&&1===a.slidesPerGroup&&a.slidesPerGroupAuto&&(f=f-s.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),a.rewind&&s.isBeginning){const a=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(a,e,t,i)}return a.loop&&0===s.activeIndex&&a.cssMode?(requestAnimationFrame(()=>{s.slideTo(f,e,t,i)}),!0):s.slideTo(f,e,t,i)},slideReset:function(e,t=!0,i){const s=this;if(!s.destroyed)return void 0===e&&(e=s.params.speed),s.slideTo(s.activeIndex,e,t,i)},slideToClosest:function(e,t=!0,i,s=.5){const a=this;if(a.destroyed)return;void 0===e&&(e=a.params.speed);let r=a.activeIndex;const n=Math.min(a.params.slidesPerGroupSkip,r),o=n+Math.floor((r-n)/a.params.slidesPerGroup),l=a.rtlTranslate?a.translate:-a.translate;if(l>=a.snapGrid[o]){const e=a.snapGrid[o];l-e>(a.snapGrid[o+1]-e)*s&&(r+=a.params.slidesPerGroup)}else{const e=a.snapGrid[o-1];l-e<=(a.snapGrid[o]-e)*s&&(r-=a.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,a.slidesGrid.length-1),a.slideTo(r,e,t,i)},slideToClickedSlide:function(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:i}=e,s="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let a,r=e.getSlideIndexWhenGrid(e.clickedIndex);const n=e.isElement?"swiper-slide":`.${t.slideClass}`,o=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(a):r>(o?(e.slides.length-s)/2-(e.params.grid.rows-1):e.slides.length-s)?(e.loopFix(),r=e.getSlideIndex(Me(i,`${n}[data-swiper-slide-index="${a}"]`)[0]),we(()=>{e.slideTo(r)})):e.slideTo(r)}else e.slideTo(r)}};var Je={loopCreate:function(e,t){const i=this,{params:s,slidesEl:a}=i;if(!s.loop||i.virtual&&i.params.virtual.enabled)return;const r=()=>{Me(a,`.${s.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})},n=i.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||n)&&(()=>{const e=Me(a,`.${s.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(i.recalcSlides(),i.updateSlides())})();const o=s.slidesPerGroup*(n?s.grid.rows:1),l=i.slides.length%o!==0,d=n&&i.slides.length%s.grid.rows!==0,c=e=>{for(let t=0;t<e;t+=1){const e=i.isElement?Pe("swiper-slide",[s.slideBlankClass]):Pe("div",[s.slideClass,s.slideBlankClass]);i.slidesEl.append(e)}};if(l){if(s.loopAddBlankSlides){c(o-i.slides.length%o),i.recalcSlides(),i.updateSlides()}else $e("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(s.loopAddBlankSlides){c(s.grid.rows-i.slides.length%s.grid.rows),i.recalcSlides(),i.updateSlides()}else $e("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const p=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;i.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:s,activeSlideIndex:a,initial:r,byController:n,byMousewheel:o}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:p,slidesEl:m,params:u}=l,{centeredSlides:h,slidesOffsetBefore:g,slidesOffsetAfter:f,initialSlide:v}=u,b=h||!!g||!!f;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&u.virtual.enabled)return t&&(b||0!==l.snapIndex?b&&l.snapIndex<u.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=p,void l.emit("loopFix");let x=u.slidesPerView;"auto"===x?x=l.slidesPerViewDynamic():(x=Math.ceil(parseFloat(u.slidesPerView,10)),b&&x%2==0&&(x+=1));const w=u.slidesPerGroupAuto?x:u.slidesPerGroup;let y=b?Math.max(w,Math.ceil(x/2)):w;y%w!==0&&(y+=w-y%w),y+=u.loopAdditionalSlides,l.loopedSlides=y;const S=l.grid&&u.grid&&u.grid.rows>1;d.length<x+y||"cards"===l.params.effect&&d.length<x+2*y?$e("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&"row"===u.grid.fill&&$e("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const T=[],E=[],A=S?Math.ceil(d.length/u.grid.rows):d.length,k=r&&A-v<x&&!b;let C=k?v:l.activeIndex;void 0===a?a=l.getSlideIndex(d.find(e=>e.classList.contains(u.slideActiveClass))):C=a;const M="next"===i||!i,$="prev"===i||!i;let P=0,_=0;const z=(S?d[a].column:a)+(b&&void 0===s?-x/2+.5:0);if(z<y){P=Math.max(y-z,w);for(let e=0;e<y-z;e+=1){const t=e-Math.floor(e/A)*A;if(S){const e=A-t-1;for(let t=d.length-1;t>=0;t-=1)d[t].column===e&&T.push(t)}else T.push(A-t-1)}}else if(z+x>A-y){_=Math.max(z-(A-2*y),w),k&&(_=Math.max(_,x-A+v+1));for(let e=0;e<_;e+=1){const t=e-Math.floor(e/A)*A;S?d.forEach((e,i)=>{e.column===t&&E.push(i)}):E.push(t)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),"cards"===l.params.effect&&d.length<x+2*y&&(E.includes(a)&&E.splice(E.indexOf(a),1),T.includes(a)&&T.splice(T.indexOf(a),1)),$&&T.forEach(e=>{d[e].swiperLoopMoveDOM=!0,m.prepend(d[e]),d[e].swiperLoopMoveDOM=!1}),M&&E.forEach(e=>{d[e].swiperLoopMoveDOM=!0,m.append(d[e]),d[e].swiperLoopMoveDOM=!1}),l.recalcSlides(),"auto"===u.slidesPerView?l.updateSlides():S&&(T.length>0&&$||E.length>0&&M)&&l.slides.forEach((e,t)=>{l.grid.updateSlide(t,e,l.slides)}),u.watchSlidesProgress&&l.updateSlidesOffset(),t)if(T.length>0&&$){if(void 0===e){const e=l.slidesGrid[C],t=l.slidesGrid[C+P]-e;o?l.setTranslate(l.translate-t):(l.slideTo(C+Math.ceil(P),0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else if(s){const e=S?T.length/u.grid.rows:T.length;l.slideTo(l.activeIndex+e,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(E.length>0&&M)if(void 0===e){const e=l.slidesGrid[C],t=l.slidesGrid[C-_]-e;o?l.setTranslate(l.translate-t):(l.slideTo(C-_,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else{const e=S?E.length/u.grid.rows:E.length;l.slideTo(l.activeIndex-e,0,!1,!0)}if(l.allowSlidePrev=c,l.allowSlideNext=p,l.controller&&l.controller.control&&!n){const r={slideRealIndex:e,direction:i,setTranslate:s,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...r,slideTo:e.params.slidesPerView===u.slidesPerView&&t})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...r,slideTo:l.controller.control.params.slidesPerView===u.slidesPerView&&t})}l.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||!i||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach(e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;s[t]=e}),e.slides.forEach(e=>{e.removeAttribute("data-swiper-slide-index")}),s.forEach(e=>{i.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}};function et(e,t,i){const s=xe(),{params:a}=e,r=a.edgeSwipeDetection,n=a.edgeSwipeThreshold;return!r||!(i<=n||i>=s.innerWidth-n)||"prevent"===r&&(t.preventDefault(),!0)}function tt(e){const t=this,i=ve();let s=e;s.originalEvent&&(s=s.originalEvent);const a=t.touchEventsData;if("pointerdown"===s.type){if(null!==a.pointerId&&a.pointerId!==s.pointerId)return;a.pointerId=s.pointerId}else"touchstart"===s.type&&1===s.targetTouches.length&&(a.touchId=s.targetTouches[0].identifier);if("touchstart"===s.type)return void et(t,s,s.targetTouches[0].pageX);const{params:r,touches:n,enabled:o}=t;if(!o)return;if(!r.simulateTouch&&"mouse"===s.pointerType)return;if(t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=s.target;if("wrapper"===r.touchEventsTarget&&!function(e,t){const i=xe();let s=t.contains(e);!s&&i.HTMLSlotElement&&t instanceof HTMLSlotElement&&(s=[...t.assignedElements()].includes(e),s||(s=function(e,t){const i=[t];for(;i.length>0;){const t=i.shift();if(e===t)return!0;i.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}(e,t)));return s}(l,t.wrapperEl))return;if("which"in s&&3===s.which)return;if("button"in s&&s.button>0)return;if(a.isTouched&&a.isMoved)return;const d=!!r.noSwipingClass&&""!==r.noSwipingClass,c=s.composedPath?s.composedPath():s.path;d&&s.target&&s.target.shadowRoot&&c&&(l=c[0]);const p=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,m=!(!s.target||!s.target.shadowRoot);if(r.noSwiping&&(m?function(e,t=this){return function t(i){if(!i||i===ve()||i===xe())return null;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(e);return s||i.getRootNode?s||t(i.getRootNode().host):null}(t)}(p,l):l.closest(p)))return void(t.allowClick=!0);if(r.swipeHandler&&!l.closest(r.swipeHandler))return;n.currentX=s.pageX,n.currentY=s.pageY;const u=n.currentX,h=n.currentY;if(!et(t,s,u))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=u,n.startY=h,a.touchStartTime=ye(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1);let g=!0;l.matches(a.focusableElements)&&(g=!1,"SELECT"===l.nodeName&&(a.isTouched=!1)),i.activeElement&&i.activeElement.matches(a.focusableElements)&&i.activeElement!==l&&("mouse"===s.pointerType||"mouse"!==s.pointerType&&!l.matches(a.focusableElements))&&i.activeElement.blur();const f=g&&t.allowTouchMove&&r.touchStartPreventDefault;!r.touchStartForcePreventDefault&&!f||l.isContentEditable||s.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function it(e){const t=ve(),i=this,s=i.touchEventsData,{params:a,touches:r,rtlTranslate:n,enabled:o}=i;if(!o)return;if(!a.simulateTouch&&"mouse"===e.pointerType)return;let l,d=e;if(d.originalEvent&&(d=d.originalEvent),"pointermove"===d.type){if(null!==s.touchId)return;if(d.pointerId!==s.pointerId)return}if("touchmove"===d.type){if(l=[...d.changedTouches].find(e=>e.identifier===s.touchId),!l||l.identifier!==s.touchId)return}else l=d;if(!s.isTouched)return void(s.startMoving&&s.isScrolling&&i.emit("touchMoveOpposite",d));const c=l.pageX,p=l.pageY;if(d.preventedByNestedSwiper)return r.startX=c,void(r.startY=p);if(!i.allowTouchMove)return d.target.matches(s.focusableElements)||(i.allowClick=!1),void(s.isTouched&&(Object.assign(r,{startX:c,startY:p,currentX:c,currentY:p}),s.touchStartTime=ye()));if(a.touchReleaseOnEdges&&!a.loop)if(i.isVertical()){if(p<r.startY&&i.translate<=i.maxTranslate()||p>r.startY&&i.translate>=i.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else{if(n&&(c>r.startX&&-i.translate<=i.maxTranslate()||c<r.startX&&-i.translate>=i.minTranslate()))return;if(!n&&(c<r.startX&&i.translate<=i.maxTranslate()||c>r.startX&&i.translate>=i.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==d.target&&"mouse"!==d.pointerType&&t.activeElement.blur(),t.activeElement&&d.target===t.activeElement&&d.target.matches(s.focusableElements))return s.isMoved=!0,void(i.allowClick=!1);s.allowTouchCallbacks&&i.emit("touchMove",d),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=c,r.currentY=p;const m=r.currentX-r.startX,u=r.currentY-r.startY;if(i.params.threshold&&Math.sqrt(m**2+u**2)<i.params.threshold)return;if(void 0===s.isScrolling){let e;i.isHorizontal()&&r.currentY===r.startY||i.isVertical()&&r.currentX===r.startX?s.isScrolling=!1:m*m+u*u>=25&&(e=180*Math.atan2(Math.abs(u),Math.abs(m))/Math.PI,s.isScrolling=i.isHorizontal()?e>a.touchAngle:90-e>a.touchAngle)}if(s.isScrolling&&i.emit("touchMoveOpposite",d),void 0===s.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(s.startMoving=!0)),s.isScrolling||"touchmove"===d.type&&s.preventTouchMoveFromPointerMove)return void(s.isTouched=!1);if(!s.startMoving)return;i.allowClick=!1,!a.cssMode&&d.cancelable&&d.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&d.stopPropagation();let h=i.isHorizontal()?m:u,g=i.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;a.oneWayMovement&&(h=Math.abs(h)*(n?1:-1),g=Math.abs(g)*(n?1:-1)),r.diff=h,h*=a.touchRatio,n&&(h=-h,g=-g);const f=i.touchesDirection;i.swipeDirection=h>0?"prev":"next",i.touchesDirection=g>0?"prev":"next";const v=i.params.loop&&!a.cssMode,b="next"===i.touchesDirection&&i.allowSlideNext||"prev"===i.touchesDirection&&i.allowSlidePrev;if(!s.isMoved){if(v&&b&&i.loopFix({direction:i.swipeDirection}),s.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(e)}s.allowMomentumBounce=!1,!a.grabCursor||!0!==i.allowSlideNext&&!0!==i.allowSlidePrev||i.setGrabCursor(!0),i.emit("sliderFirstMove",d)}if((new Date).getTime(),!1!==a._loopSwapReset&&s.isMoved&&s.allowThresholdMove&&f!==i.touchesDirection&&v&&b&&Math.abs(h)>=1)return Object.assign(r,{startX:c,startY:p,currentX:c,currentY:p,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,void(s.startTranslate=s.currentTranslate);i.emit("sliderMove",d),s.isMoved=!0,s.currentTranslate=h+s.startTranslate;let x=!0,w=a.resistanceRatio;if(a.touchReleaseOnEdges&&(w=0),h>0?(v&&b&&s.allowThresholdMove&&s.currentTranslate>(a.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-("auto"!==a.slidesPerView&&i.slides.length-a.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>i.minTranslate()&&(x=!1,a.resistance&&(s.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+s.startTranslate+h)**w))):h<0&&(v&&b&&s.allowThresholdMove&&s.currentTranslate<(a.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+("auto"!==a.slidesPerView&&i.slides.length-a.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-("auto"===a.slidesPerView?i.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),s.currentTranslate<i.maxTranslate()&&(x=!1,a.resistance&&(s.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-s.startTranslate-h)**w))),x&&(d.preventedByNestedSwiper=!0),!i.allowSlideNext&&"next"===i.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!i.allowSlidePrev&&"prev"===i.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),i.allowSlidePrev||i.allowSlideNext||(s.currentTranslate=s.startTranslate),a.threshold>0){if(!(Math.abs(h)>a.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,s.currentTranslate=s.startTranslate,void(r.diff=i.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode&&a.freeMode.enabled&&i.freeMode||a.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(s.currentTranslate),i.setTranslate(s.currentTranslate))}function st(e){const t=this,i=t.touchEventsData;let s,a=e;a.originalEvent&&(a=a.originalEvent);if("touchend"===a.type||"touchcancel"===a.type){if(s=[...a.changedTouches].find(e=>e.identifier===i.touchId),!s||s.identifier!==i.touchId)return}else{if(null!==i.touchId)return;if(a.pointerId!==i.pointerId)return;s=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)){if(!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return}i.pointerId=null,i.touchId=null;const{params:r,touches:n,rtlTranslate:o,slidesGrid:l,enabled:d}=t;if(!d)return;if(!r.simulateTouch&&"mouse"===a.pointerType)return;if(i.allowTouchCallbacks&&t.emit("touchEnd",a),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&r.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);r.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const c=ye(),p=c-i.touchStartTime;if(t.allowClick){const e=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(e&&e[0]||a.target,e),t.emit("tap click",a),p<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(i.lastClickTime=ye(),we(()=>{t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||0===n.diff&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);let m;if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,m=r.followFinger?o?t.translate:-t.translate:-i.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:m});const u=m>=-t.maxTranslate()&&!t.params.loop;let h=0,g=t.slidesSizesGrid[0];for(let e=0;e<l.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==l[e+t]?(u||m>=l[e]&&m<l[e+t])&&(h=e,g=l[e+t]-l[e]):(u||m>=l[e])&&(h=e,g=l[l.length-1]-l[l.length-2])}let f=null,v=null;r.rewind&&(t.isBeginning?v=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const b=(m-l[h])/g,x=h<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(p>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(b>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?f:h+x):t.slideTo(h)),"prev"===t.swipeDirection&&(b>1-r.longSwipesRatio?t.slideTo(h+x):null!==v&&b<0&&Math.abs(b)>r.longSwipesRatio?t.slideTo(v):t.slideTo(h))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(h+x):t.slideTo(h):("next"===t.swipeDirection&&t.slideTo(null!==f?f:h+x),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:h))}}function at(){const e=this,{params:t,el:i}=e;if(i&&0===i.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:a,snapGrid:r}=e,n=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=n&&t.loop;if(!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||o)e.params.loop&&!n?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);else{const t=n?e.virtual.slides:e.slides;e.slideTo(t.length-1,0,!1,!0)}e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=s,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function rt(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function nt(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:s}=e;if(!s)return;let a;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();a=0===r?0:(e.translate-e.minTranslate())/r,a!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ot(e){const t=this;Ue(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function lt(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const dt=(e,t)=>{const i=ve(),{params:s,el:a,wrapperEl:r,device:n}=e,o=!!s.nested,l="on"===t?"addEventListener":"removeEventListener",d=t;a&&"string"!=typeof a&&(i[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),a[l]("touchstart",e.onTouchStart,{passive:!1}),a[l]("pointerdown",e.onTouchStart,{passive:!1}),i[l]("touchmove",e.onTouchMove,{passive:!1,capture:o}),i[l]("pointermove",e.onTouchMove,{passive:!1,capture:o}),i[l]("touchend",e.onTouchEnd,{passive:!0}),i[l]("pointerup",e.onTouchEnd,{passive:!0}),i[l]("pointercancel",e.onTouchEnd,{passive:!0}),i[l]("touchcancel",e.onTouchEnd,{passive:!0}),i[l]("pointerout",e.onTouchEnd,{passive:!0}),i[l]("pointerleave",e.onTouchEnd,{passive:!0}),i[l]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&a[l]("click",e.onClick,!0),s.cssMode&&r[l]("scroll",e.onScroll),s.updateOnWindowResize?e[d](n.ios||n.android?"resize orientationchange observerUpdate":"resize observerUpdate",at,!0):e[d]("observerUpdate",at,!0),a[l]("load",e.onLoad,{capture:!0}))};const ct=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var pt={setBreakpoint:function(){const e=this,{realIndex:t,initialized:i,params:s,el:a}=e,r=s.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const n=ve(),o="window"!==s.breakpointsBase&&s.breakpointsBase?"container":s.breakpointsBase,l=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?e.el:n.querySelector(s.breakpointsBase),d=e.getBreakpoint(r,o,l);if(!d||e.currentBreakpoint===d)return;const c=(d in r?r[d]:void 0)||e.originalParams,p=ct(e,s),m=ct(e,c),u=e.params.grabCursor,h=c.grabCursor,g=s.enabled;p&&!m?(a.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&m&&(a.classList.add(`${s.containerModifierClass}grid`),(c.grid.fill&&"column"===c.grid.fill||!c.grid.fill&&"column"===s.grid.fill)&&a.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),u&&!h?e.unsetGrabCursor():!u&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(t=>{if(void 0===c[t])return;const i=s[t]&&s[t].enabled,a=c[t]&&c[t].enabled;i&&!a&&e[t].disable(),!i&&a&&e[t].enable()});const f=c.direction&&c.direction!==s.direction,v=s.loop&&(c.slidesPerView!==s.slidesPerView||f),b=s.loop;f&&i&&e.changeDirection(),Ae(e.params,c);const x=e.params.enabled,w=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!x?e.disable():!g&&x&&e.enable(),e.currentBreakpoint=d,e.emit("_beforeBreakpoint",c),i&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&w?(e.loopCreate(t),e.updateSlides()):b&&!w&&e.loopDestroy()),e.emit("breakpoint",c)},getBreakpoint:function(e,t="window",i){if(!e||"container"===t&&!i)return;let s=!1;const a=xe(),r="window"===t?a.innerHeight:i.clientHeight,n=Object.keys(e).map(e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}});n.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<n.length;e+=1){const{point:r,value:o}=n[e];"window"===t?a.matchMedia(`(min-width: ${o}px)`).matches&&(s=r):o<=i.clientWidth&&(s=r)}return s||"max"}};var mt={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ut(e,t){return function(i={}){const s=Object.keys(i)[0],a=i[s];"object"==typeof a&&null!==a?(!0===e[s]&&(e[s]={enabled:!0}),"navigation"===s&&e[s]&&e[s].enabled&&!e[s].prevEl&&!e[s].nextEl&&(e[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&e[s]&&e[s].enabled&&!e[s].el&&(e[s].auto=!0),s in e&&"enabled"in a?("object"!=typeof e[s]||"enabled"in e[s]||(e[s].enabled=!0),e[s]||(e[s]={enabled:!1}),Ae(t,i)):Ae(t,i)):Ae(t,i)}}const ht={eventsEmitter:Ne,update:Ye,translate:Ze,transition:{setTransition:function(e,t){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${e}ms`,i.wrapperEl.style.transitionDelay=0===e?"0ms":""),i.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const i=this,{params:s}=i;s.cssMode||(s.autoHeight&&i.updateAutoHeight(),Ke({swiper:i,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const i=this,{params:s}=i;i.animating=!1,s.cssMode||(i.setTransition(0),Ke({swiper:i,runCallbacks:e,direction:t,step:"End"}))}},slide:Qe,loop:Je,grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}},events:{attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=tt.bind(e),e.onTouchMove=it.bind(e),e.onTouchEnd=st.bind(e),e.onDocumentTouchStart=lt.bind(e),t.cssMode&&(e.onScroll=nt.bind(e)),e.onClick=rt.bind(e),e.onLoad=ot.bind(e),dt(e,"on")},detachEvents:function(){dt(this,"off")}},breakpoints:pt,checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:s}=i;if(s){const t=e.slides.length-1,i=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*s;e.isLocked=e.size>i}else e.isLocked=1===e.snapGrid.length;!0===i.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===i.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:i,rtl:s,el:a,device:r}=e,n=function(e,t){const i=[];return e.forEach(e=>{"object"==typeof e?Object.keys(e).forEach(s=>{e[s]&&i.push(t+s)}):"string"==typeof e&&i.push(t+e)}),i}(["initialized",i.direction,{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:s},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&"column"===i.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...n),a.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e&&"string"!=typeof e&&(e.classList.remove(...t),this.emitContainerClasses())}}},gt={};class ft{constructor(...e){let t,i;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?i=e[0]:[t,i]=e,i||(i={}),i=Ae({},i),t&&!i.el&&(i.el=t);const s=ve();if(i.el&&"string"==typeof i.el&&s.querySelectorAll(i.el).length>1){const e=[];return s.querySelectorAll(i.el).forEach(t=>{const s=Ae({},i,{el:t});e.push(new ft(s))}),e}const a=this;a.__swiper__=!0,a.support=He(),a.device=je({userAgent:i.userAgent}),a.browser=Fe(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(e=>{"function"==typeof e&&a.modules.indexOf(e)<0&&a.modules.push(e)});const r={};a.modules.forEach(e=>{e({params:i,swiper:a,extendParams:ut(i,r),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const n=Ae({},mt,r);return a.params=Ae({},n,gt,i),a.originalParams=Ae({},a.params),a.passedParams=Ae({},i),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,s=ze(Me(t,`.${i.slideClass}, swiper-slide`)[0]);return ze(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>1*t.getAttribute("data-swiper-slide-index")===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&("column"===this.params.grid.fill?e=Math.floor(e/this.params.grid.rows):"row"===this.params.grid.fill&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=Me(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const s=i.minTranslate(),a=(i.maxTranslate()-s)*e+s;i.translateTo(a,void 0===t?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const s=e.getSlideClasses(i);t.push({slideEl:i,classNames:s}),e.emit("_slideClass",i,s)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:i,slides:s,slidesGrid:a,slidesSizesGrid:r,size:n,activeIndex:o}=this;let l=1;if("number"==typeof i.slidesPerView)return i.slidesPerView;if(i.centeredSlides){let e,t=s[o]?Math.ceil(s[o].swiperSlideSize):0;for(let i=o+1;i<s.length;i+=1)s[i]&&!e&&(t+=Math.ceil(s[i].swiperSlideSize),l+=1,t>n&&(e=!0));for(let i=o-1;i>=0;i-=1)s[i]&&!e&&(t+=s[i].swiperSlideSize,l+=1,t>n&&(e=!0))}else if("current"===e)for(let e=o+1;e<s.length;e+=1){(t?a[e]+r[e]-a[o]<n:a[e]-a[o]<n)&&(l+=1)}else for(let e=o-1;e>=0;e-=1){a[o]-a[e]<n&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;function s(){const t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}let a;if(i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(t=>{t.complete&&Ue(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),i.freeMode&&i.freeMode.enabled&&!i.cssMode)s(),i.autoHeight&&e.updateAutoHeight();else{if(("auto"===i.slidesPerView||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const t=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;a=e.slideTo(t.length-1,0,!1,!0)}else a=e.slideTo(e.activeIndex,0,!1,!0);a||s()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,s=i.params.direction;return e||(e="horizontal"===s?"vertical":"horizontal"),e===s||"horizontal"!==e&&"vertical"!==e||(i.el.classList.remove(`${i.params.containerModifierClass}${s}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(t=>{"vertical"===e?t.style.width="":t.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if("string"==typeof i&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>{if(i&&i.shadowRoot&&i.shadowRoot.querySelector){return i.shadowRoot.querySelector(s())}return Me(i,s())[0]})();return!a&&t.params.createElements&&(a=Pe("div",t.params.wrapperClass),i.append(a),Me(i,`.${t.params.slideClass}`).forEach(e=>{a.append(e)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:"rtl"===i.dir.toLowerCase()||"rtl"===_e(i,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===i.dir.toLowerCase()||"rtl"===_e(i,"direction")),wrongRTL:"-webkit-box"===_e(a,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(e=>{e.complete?Ue(t,e):e.addEventListener("load",e=>{Ue(t,e.target)})}),Xe(t),t.initialized=!0,Xe(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const i=this,{params:s,el:a,wrapperEl:r,slides:n}=i;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a&&"string"!=typeof a&&a.removeAttribute("style"),r&&r.removeAttribute("style"),n&&n.length&&n.forEach(e=>{e.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(e=>{i.off(e)}),!1!==e&&(i.el&&"string"!=typeof i.el&&(i.el.swiper=null),function(e){const t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})}(i)),i.destroyed=!0),null}static extendDefaults(e){Ae(gt,e)}static get extendedDefaults(){return gt}static get defaults(){return mt}static installModule(e){ft.prototype.__modules__||(ft.prototype.__modules__=[]);const t=ft.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(e=>ft.installModule(e)),ft):(ft.installModule(e),ft)}}function vt(e,t,i,s){return e.params.createElements&&Object.keys(s).forEach(a=>{if(!i[a]&&!0===i.auto){let r=Me(e.el,`.${s[a]}`)[0];r||(r=Pe("div",s[a]),r.className=s[a],e.el.append(r)),i[a]=r,t[a]=r}}),i}Object.keys(ht).forEach(e=>{Object.keys(ht[e]).forEach(t=>{ft.prototype[t]=ht[e][t]})}),ft.use([function({swiper:e,on:t,emit:i}){const s=xe();let a=null,r=null;const n=()=>{e&&!e.destroyed&&e.initialized&&(i("beforeResize"),i("resize"))},o=()=>{e&&!e.destroyed&&e.initialized&&i("orientationchange")};t("init",()=>{e.params.resizeObserver&&void 0!==s.ResizeObserver?e&&!e.destroyed&&e.initialized&&(a=new ResizeObserver(t=>{r=s.requestAnimationFrame(()=>{const{width:i,height:s}=e;let a=i,r=s;t.forEach(({contentBoxSize:t,contentRect:i,target:s})=>{s&&s!==e.el||(a=i?i.width:(t[0]||t).inlineSize,r=i?i.height:(t[0]||t).blockSize)}),a===i&&r===s||n()})}),a.observe(e.el)):(s.addEventListener("resize",n),s.addEventListener("orientationchange",o))}),t("destroy",()=>{r&&s.cancelAnimationFrame(r),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null),s.removeEventListener("resize",n),s.removeEventListener("orientationchange",o)})},function({swiper:e,extendParams:t,on:i,emit:s}){const a=[],r=xe(),n=(t,i={})=>{const n=new(r.MutationObserver||r.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(1===t.length)return void s("observerUpdate",t[0]);const i=function(){s("observerUpdate",t[0])};r.requestAnimationFrame?r.requestAnimationFrame(i):r.setTimeout(i,0)});n.observe(t,{attributes:void 0===i.attributes||i.attributes,childList:e.isElement||(void 0===i.childList||i).childList,characterData:void 0===i.characterData||i.characterData}),a.push(n)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",()=>{if(e.params.observer){if(e.params.observeParents){const t=Le(e.hostEl);for(let e=0;e<t.length;e+=1)n(t[e])}n(e.hostEl,{childList:e.params.observeSlideChildren}),n(e.wrapperEl,{attributes:!1})}}),i("destroy",()=>{a.forEach(e=>{e.disconnect()}),a.splice(0,a.length)})}]);const bt='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function xt({swiper:e,extendParams:t,on:i,emit:s}){function a(t){let i;return t&&"string"==typeof t&&e.isElement&&(i=e.el.querySelector(t)||e.hostEl.querySelector(t),i)?i:(t&&("string"==typeof t&&(i=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&i&&i.length>1&&1===e.el.querySelectorAll(t).length?i=e.el.querySelector(t):i&&1===i.length&&(i=i[0])),t&&!i?t:i)}function r(t,i){const s=e.params.navigation;(t=De(t)).forEach(t=>{t&&(t.classList[i?"add":"remove"](...s.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=i),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](s.lockClass))})}function n(){const{nextEl:t,prevEl:i}=e.navigation;if(e.params.loop)return r(i,!1),void r(t,!1);r(i,e.isBeginning&&!e.params.rewind),r(t,e.isEnd&&!e.params.rewind)}function o(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function l(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function d(){const t=e.params.navigation;if(e.params.navigation=vt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let i=a(t.nextEl),s=a(t.prevEl);Object.assign(e.navigation,{nextEl:i,prevEl:s}),i=De(i),s=De(s);const r=(i,s)=>{if(i){if(t.addIcons&&i.matches(".swiper-button-next,.swiper-button-prev")&&!i.querySelector("svg")){const e=document.createElement("div");Oe(e,bt),i.appendChild(e.querySelector("svg")),e.remove()}i.addEventListener("click","next"===s?l:o)}!e.enabled&&i&&i.classList.add(...t.lockClass.split(" "))};i.forEach(e=>r(e,"next")),s.forEach(e=>r(e,"prev"))}function c(){let{nextEl:t,prevEl:i}=e.navigation;t=De(t),i=De(i);const s=(t,i)=>{t.removeEventListener("click","next"===i?l:o),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach(e=>s(e,"next")),i.forEach(e=>s(e,"prev"))}t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:bt},i("init",()=>{!1===e.params.navigation.enabled?p():(d(),n())}),i("toEdge fromEdge lock unlock",()=>{n()}),i("destroy",()=>{c()}),i("enable disable",()=>{let{nextEl:t,prevEl:i}=e.navigation;t=De(t),i=De(i),e.enabled?n():[...t,...i].filter(e=>!!e).forEach(t=>t.classList.add(e.params.navigation.lockClass))}),i("click",(t,i)=>{let{nextEl:a,prevEl:r}=e.navigation;a=De(a),r=De(r);const n=i.target;let o=r.includes(n)||a.includes(n);if(e.isElement&&!o){const e=i.path||i.composedPath&&i.composedPath();e&&(o=e.find(e=>a.includes(e)||r.includes(e)))}if(e.params.navigation.hideOnClick&&!o){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let t;a.length?t=a[0].classList.contains(e.params.navigation.hiddenClass):r.length&&(t=r[0].classList.contains(e.params.navigation.hiddenClass)),s(!0===t?"navigationShow":"navigationHide"),[...a,...r].filter(e=>!!e).forEach(t=>t.classList.toggle(e.params.navigation.hiddenClass))}});const p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),n()},disable:p,update:n,init:d,destroy:c})}function wt(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function yt({swiper:e,extendParams:t,on:i,emit:s}){const a="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let n=0;function o(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&0===e.pagination.el.length}function l(t,i){const{bulletActiveClass:s}=e.params.pagination;t&&(t=t[("prev"===i?"previous":"next")+"ElementSibling"])&&(t.classList.add(`${s}-${i}`),(t=t[("prev"===i?"previous":"next")+"ElementSibling"])&&t.classList.add(`${s}-${i}-${i}`))}function d(t){const i=t.target.closest(wt(e.params.pagination.bulletClass));if(!i)return;t.preventDefault();const s=ze(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===s)return;const t=(a=e.realIndex,r=s,n=e.slides.length,(r%=n)===1+(a%=n)?"next":r===a-1?"previous":void 0);"next"===t?e.slideNext():"previous"===t?e.slidePrev():e.slideToLoop(s)}else e.slideTo(s);var a,r,n}function c(){const t=e.rtl,i=e.params.pagination;if(o())return;let a,d,c=e.pagination.el;c=De(c);const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,m=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(d=e.previousRealIndex||0,a=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):void 0!==e.snapIndex?(a=e.snapIndex,d=e.previousSnapIndex):(d=e.previousIndex||0,a=e.activeIndex||0),"bullets"===i.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const s=e.pagination.bullets;let o,p,m;if(i.dynamicBullets&&(r=Ie(s[0],e.isHorizontal()?"width":"height",!0),c.forEach(t=>{t.style[e.isHorizontal()?"width":"height"]=r*(i.dynamicMainBullets+4)+"px"}),i.dynamicMainBullets>1&&void 0!==d&&(n+=a-(d||0),n>i.dynamicMainBullets-1?n=i.dynamicMainBullets-1:n<0&&(n=0)),o=Math.max(a-n,0),p=o+(Math.min(s.length,i.dynamicMainBullets)-1),m=(p+o)/2),s.forEach(e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(e=>`${i.bulletActiveClass}${e}`)].map(e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e).flat();e.classList.remove(...t)}),c.length>1)s.forEach(t=>{const s=ze(t);s===a?t.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&t.setAttribute("part","bullet"),i.dynamicBullets&&(s>=o&&s<=p&&t.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),s===o&&l(t,"prev"),s===p&&l(t,"next"))});else{const t=s[a];if(t&&t.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&s.forEach((e,t)=>{e.setAttribute("part",t===a?"bullet-active":"bullet")}),i.dynamicBullets){const e=s[o],t=s[p];for(let e=o;e<=p;e+=1)s[e]&&s[e].classList.add(...`${i.bulletActiveClass}-main`.split(" "));l(e,"prev"),l(t,"next")}}if(i.dynamicBullets){const a=Math.min(s.length,i.dynamicMainBullets+4),n=(r*a-r)/2-m*r,o=t?"right":"left";s.forEach(t=>{t.style[e.isHorizontal()?o:"top"]=`${n}px`})}}c.forEach((t,r)=>{if("fraction"===i.type&&(t.querySelectorAll(wt(i.currentClass)).forEach(e=>{e.textContent=i.formatFractionCurrent(a+1)}),t.querySelectorAll(wt(i.totalClass)).forEach(e=>{e.textContent=i.formatFractionTotal(m)})),"progressbar"===i.type){let s;s=i.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const r=(a+1)/m;let n=1,o=1;"horizontal"===s?n=r:o=r,t.querySelectorAll(wt(i.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`,t.style.transitionDuration=`${e.params.speed}ms`})}"custom"===i.type&&i.renderCustom?(Oe(t,i.renderCustom(e,a+1,m)),0===r&&s("paginationRender",t)):(0===r&&s("paginationRender",t),s("paginationUpdate",t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass)})}function p(){const t=e.params.pagination;if(o())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let a=e.pagination.el;a=De(a);let r="";if("bullets"===t.type){let s=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&s>i&&(s=i);for(let i=0;i<s;i+=1)t.renderBullet?r+=t.renderBullet.call(e,i,t.bulletClass):r+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],a.forEach(i=>{"custom"!==t.type&&Oe(i,r||""),"bullets"===t.type&&e.pagination.bullets.push(...i.querySelectorAll(wt(t.bulletClass)))}),"custom"!==t.type&&s("paginationRender",a[0])}function m(){e.params.pagination=vt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i;"string"==typeof t.el&&e.isElement&&(i=e.el.querySelector(t.el)),i||"string"!=typeof t.el||(i=[...document.querySelectorAll(t.el)]),i||(i=t.el),i&&0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(t.el)],i.length>1&&(i=i.find(t=>Le(t,".swiper")[0]===e.el))),Array.isArray(i)&&1===i.length&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=De(i),i.forEach(i=>{"bullets"===t.type&&t.clickable&&i.classList.add(...(t.clickableClass||"").split(" ")),i.classList.add(t.modifierClass+t.type),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(i.classList.add(`${t.modifierClass}${t.type}-dynamic`),n=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.classList.add(t.progressbarOppositeClass),t.clickable&&i.addEventListener("click",d),e.enabled||i.classList.add(t.lockClass)}))}function u(){const t=e.params.pagination;if(o())return;let i=e.pagination.el;i&&(i=De(i),i.forEach(i=>{i.classList.remove(t.hiddenClass),i.classList.remove(t.modifierClass+t.type),i.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(i.classList.remove(...(t.clickableClass||"").split(" ")),i.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:i}=e.pagination;i=De(i),i.forEach(i=>{i.classList.remove(t.horizontalClass,t.verticalClass),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),i("init",()=>{!1===e.params.pagination.enabled?h():(m(),p(),c())}),i("activeIndexChange",()=>{void 0===e.snapIndex&&c()}),i("snapIndexChange",()=>{c()}),i("snapGridLengthChange",()=>{p(),c()}),i("destroy",()=>{u()}),i("enable disable",()=>{let{el:t}=e.pagination;t&&(t=De(t),t.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{c()}),i("click",(t,i)=>{const a=i.target,r=De(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!a.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&a===e.navigation.nextEl||e.navigation.prevEl&&a===e.navigation.prevEl))return;const t=r[0].classList.contains(e.params.pagination.hiddenClass);s(!0===t?"paginationShow":"paginationHide"),r.forEach(t=>t.classList.toggle(e.params.pagination.hiddenClass))}});const h=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=De(t),t.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),u()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=De(t),t.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),m(),p(),c()},disable:h,render:p,update:c,init:m,destroy:u})}let St=class extends ae{firstUpdated(e){super.firstUpdated(e),console.log("asdasdsa");const t=this.shadowRoot.querySelector(".swiper");new ft(t,{modules:[xt,yt]})}render(){return q` <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"> <h1>Productos <b>originales</b> y con garantía, te damos la <b>calidad</b> que necesitas</h1> <main class="swiper"> <div class="swiper-wrapper"> <article class="swiper-slide"> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> <article class="swiper-slide"> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> <article class="swiper-slide"> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> <article class="swiper-slide"> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> </div> </main> <main class="no-swiper"> <article> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> <article> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> <article> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> <article> <img src="../../../assets/producto.png" alt="Producto"> <p>Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p> <span>Disponible</span> </article> </main> <button class="secundary">Ver todos los productos</button> <div class="divider"> <span class="space"></span> <span class="left-rectangle green"></span> <span class="left-rectangle blue"></span> <span class="right-rectangle green"></span> <span class="right-rectangle blue"></span> </div> `}};St.styles=n`:host{display:block;height:auto;width:100%;background:#2a2d45;color:#fff;position:relative}h1{text-align:left;max-width:60rem;margin:0;font-size:1.75rem;letter-spacing:.05rem;padding:3rem 1rem 3rem}b{color:#46f68a}p{margin:0 auto;font-size:.9rem;padding:0 1rem;letter-spacing:.02rem;line-height:1.1rem}main.no-swiper{height:auto;width:100%;margin:0 0 2rem 0;display:none;flex-wrap:wrap;justify-content:center}img{height:352px;width:325px;align-self:center}article.swiper-slide{display:flex;flex-direction:column;justify-content:center;align-items:start}article:not(.swiper-slide){padding:1rem;display:flex;flex-direction:column;justify-content:center;align-items:start}article p{margin:.8rem auto 0;padding:0;min-width:calc(320px - 2rem);max-width:calc(320px - 2rem);width:100%;text-align:left}article span{text-align:left;display:inline-block;margin:.8rem auto 0;min-width:calc(320px - 2rem);max-width:calc(320px - 2rem);width:100%;color:#46f68a;font-size:.8rem}button{height:3.125rem;max-width:calc(320px - 2rem);width:calc(320px - 2rem);font-size:.9rem;font-weight:500;border-radius:.313rem;letter-spacing:.02rem;padding:0;margin:3rem 0}button.secundary{background:0 0;color:#fff;border:.063rem solid #46f68a}.divider{position:relative;overflow:hidden;padding:0;display:block;height:7rem;width:100%;background:linear-gradient(to right bottom,#2a2d45 50%,#080b24 50%)}.left-rectangle{height:1.5rem;width:10rem;position:absolute;transform:rotateZ(165deg)}.left-rectangle.green{display:block;background:#46f68a;bottom:2rem;left:-1rem}.left-rectangle.blue{display:block;background:#05f5ff;bottom:3rem;left:-5rem}@media screen and (min-width:562px){h1{padding:5rem 3rem 1.5rem}}@media screen and (min-width:764px){.swiper{display:none}main.no-swiper{display:flex}}@media screen and (min-width:1201px){h1{padding:5rem 5rem 3rem}}@media screen and (min-width:1400px){h1{padding:5rem 9rem 3rem}article:not(.swiper-slide){max-width:320px;min-width:calc(320px - 2rem);width:320px;padding:1rem}}`,St=e([ne("home-page-products")],St);let Tt=class extends ae{render(){return q` <h1> Testimonio de nuestros clientes </h1> <p> Creemos que la mejor forma de medir el éxito es escuchar la opinión de quienes han confiado en nosotros, ya que sus experiencias reflejan el impacto real de nuestro trabajo, la calidad de nuestro servicio y el compromiso que ponemos en cada proyecto. Sus testimonios nos inspiran a seguir mejorando, innovando y ofreciendo soluciones personalizadas que realmente aporten valor, generen confianza y contribuyan al crecimiento de cada cliente que decide trabajar con nuestro equipo. ✨ </p> <main class="container"> <article> <img src="../../../assets/aldo.jpg" alt="Aldo"> <div> <h3>Alberto Aldaco</h3> <span>Desarrollo de software a la medida</span> </div> <p>El servicio fue completamente personalizado desde el primer contacto. El equipo entendió perfectamente nuestras necesidades y transformó nuestra idea en una solución digital moderna, rápida y enfocada en resultados.</p> </article> </main> <p class="legend">* información obtenida de <b>Google Maps</b></p> `}};Tt.styles=n`:host{display:block;height:auto;width:100%;color:#fff}img{border-radius:50%;height:5.5rem;width:5.5rem}h1{max-width:31.25rem;margin:0 auto;font-size:1.75rem;padding:3rem 1rem 2rem}p{max-width:50.25rem;margin:0 auto 2rem;font-size:1rem;padding:0 1rem;letter-spacing:.01rem;line-height:1.25rem}main.container{display:flex;flex-direction:column;align-items:center;justify-content:center;flex-wrap:wrap;max-width:70rem;margin:0 auto;padding-bottom:2rem}article{border-radius:2rem;color:#fff;height:256px;width:256px;min-width:256px;background:linear-gradient(to bottom,#1b6890,#0e092b);padding:1rem;margin:1rem;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}article:nth-child(2),article:nth-child(3){background:#0f1330}article h3{margin:0;font-size:1.2rem;letter-spacing:.02rem;font-weight:500}article span{color:#46f68a;font-size:.7rem}article p{margin:.5rem 0 0;padding:0;font-size:.8rem;font-weight:300;line-height:.9rem;letter-spacing:.01rem}.legend{font-size:.8rem;margin-bottom:2rem}.legend b{font-size:.9rem;color:#05f5ff}@media screen and (min-width:562px){main.container{padding:0 2rem;flex-direction:row;gap:2rem}article{margin:0}}@media screen and (min-width:764px){main.container{margin-top:3rem;margin-bottom:3rem}}@media screen and (min-width:1054px){main.container{gap:3rem}}@media screen and (min-width:1201px){main.container{margin-top:5rem;margin-bottom:5rem;gap:4rem}}@media screen and (min-width:1400px){main.container{gap:6rem}}`,Tt=e([ne("home-page-testimonials")],Tt);let Et=class extends ae{render(){return q` <section class="left-section"> <h1>Contactanos y recibe tu servicio personalizado</h1> <p>Contáctanos hoy y recibe un servicio completamente personalizado, diseñado para adaptarse a las necesidades específicas de tu proyecto, tus objetivos y tu visión. Analizamos cada detalle para ofrecerte una solución estratégica, moderna y efectiva que te ayude a destacar, optimizar resultados y llevar tu presencia digital al siguiente nivel con el respaldo de un equipo comprometido con tu éxito.</p> <div> <a class="primary"> <a class="anchor" href="https://wa.me/5531139589?text=Hola%20quiero%20información"> Enviar WhatsApp</a>  <button class="secondary" aria-label="Llamar al número 2411260175"> <a class="anchor" href="tel: 2411260175"> Comunicate vía llamada</a> </button> </a></div> </section> <section class="right-section"> <img src="../../../assets/laidy-contact.svg" alt="Imagen de operadora telefonica"> </section> `}};Et.styles=n`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #9BA0AA;
      width: 100%;
      color: white;
    }

    h1 {
      max-width: 31.25rem;
      margin: 0;
      font-size: 1.75rem;
      padding: 3rem 1rem 2rem;
      text-align: left;
    }

    p {
      max-width: 37.5rem;
      margin: 0;
      font-size: 1rem;
      padding: 0 1rem 1rem;
      letter-spacing: 0.01rem;
      line-height: 1.25rem;
      text-align: left;
    }

    div {
      margin: 1rem 0 2rem;
    }

    button {
      min-width: calc(100% - 2rem);
      min-height: 3.5rem;
      border-radius: 5px;
      font-size: 0.9rem;
      font-weight: 500;
      margin: 1rem 0;
    }

    button.primary {
      background: white;
      color: #090D2B;
      border: none;
      .anchor {
        text-decoration: none;
      }
    }

    button.primary a {
     color: #090D2B; 
    }

    button.secondary {
      background: transparent;
      color: white;
      border: 1px solid white;
    }

    button.secondary a {
      color: white; 
    }

    .left-section {
      margin-left:10px;
      display: block;
    }

    .anchor {
      text-decoration: none;
      outline: none;
    }

    .right-section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 261px;
      overflow: hidden;
    }

    img {
      height: 260px;
    }

    

    @media screen and (max-width: 345px) {
    }

    @media screen and (min-width: 380px) {
    }

    @media screen and (min-width: 461px) {
    }

    @media screen and (min-width: 562px) {
      h1 {
        padding: 5rem 3rem 1.5rem;
      }

      p {
        max-width: 34.375rem;
        padding: 0.5rem 3rem;
      }

      button {
        min-width: calc(300px - 2rem);
      }

      button.primary {
        margin-right: 0.5rem;
      }

      button.secondary {
        margin-left: 0.5rem;
      }

    }

    @media screen and (min-width: 764px) {
    }

    @media screen and (max-width: 982px) {
    }

    @media screen and (min-width: 983px) {
      :host {
        flex-direction: row;
      }

      .left-section {
        width: 65%;
      }

      .right-section {
        height: 100%;
        width: 35%;
        align-items: center;
      }

      p {
        max-width: 42.5rem;
      }

      button {
        min-width: calc(310px - 2rem);
      }

      button.primary {
        margin-right: 0.5rem;
      }

      button.secondary {
        margin-left: 0.5rem;
      }
    }

    @media screen and (max-width: 1053px) {
    }

    @media screen and (min-width: 1054px) {
      p {
        max-width: 42.5rem;
      }

      div {
        display: flex;
        justify-content: start;
        margin: 0;
        padding: 0 3rem 3rem;
      }

      img {
        height: 280px;
      }
    }

    @media screen and (min-width: 1201px) {
      h1 {
        padding: 5rem 5rem 3rem;
      }

      p {
        padding: 0 5rem 1.5rem 5rem;
      }

      div {
        display: flex;
        justify-content: start;
        margin: 0;
        padding: 0 5rem 3rem;
      }

    }

    @media screen and (min-width: 1400px) {
      h1 {
        padding: 5rem 9rem 2rem;
      }

      p {
        padding: 0 9rem 2rem;
      }

      div {
        display: flex;
        justify-content: start;
        margin: 0;
        padding: 0 9rem 3rem;
      }

      .left-section {
        width: 50%;
      }

    }
  `,Et=e([ne("home-page-contact")],Et);let At=class extends ae{render(){return q` <footer> <section class="top-section"> <img class="logo" src="../../../assets/logo-horizontal-blanco.svg" alt="Logo sahios"> <p class="text">Quieres saber mas de nosotros y nuestros servicios, checa nuestras redes sociales.</p> <div class="icons"> <div tabindex="0" class="icon"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 20"> <path id="_" data-name="" d="M9,6.491l-.355,3.52h-2.7V20H1.906V10.011H0V6.491H1.906V4.206A5.079,5.079,0,0,1,2.217,2.4,3.5,3.5,0,0,1,3.436.731,4.162,4.162,0,0,1,5.963,0L8.956.023V3.451H6.783a.842.842,0,0,0-.554.183.978.978,0,0,0-.288.777v2.08Z" fill="#fff"/> </svg> </div> <div tabindex="0" class="icon"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 20"> <path id="_" data-name="" d="M25,2.363a10.678,10.678,0,0,1-2.568,2.644v.647a14.435,14.435,0,0,1-.942,5.063,15.047,15.047,0,0,1-2.8,4.613,13.854,13.854,0,0,1-4.566,3.376A15.084,15.084,0,0,1,7.877,20a14.811,14.811,0,0,1-4.167-.591A14.286,14.286,0,0,1,0,17.75q.6.056,1.227.056a10.317,10.317,0,0,0,3.4-.563,10.691,10.691,0,0,0,2.968-1.575,5.175,5.175,0,0,1-2.968-1.027,4.876,4.876,0,0,1-1.8-2.489,5.172,5.172,0,0,0,.942.084,5.365,5.365,0,0,0,1.341-.169A5.1,5.1,0,0,1,1.555,9.353,5.218,5.218,0,0,1,1,7.117V7.032a4.87,4.87,0,0,0,2.34.647A5.127,5.127,0,0,1,1.67,5.865,4.895,4.895,0,0,1,1.056,3.46,4.965,4.965,0,0,1,1.741.928,14.576,14.576,0,0,0,6.393,4.641,14.633,14.633,0,0,0,12.3,6.217a5.785,5.785,0,0,1-.114-1.153,4.867,4.867,0,0,1,.685-2.532A5.142,5.142,0,0,1,14.74.689,4.993,4.993,0,0,1,17.295,0a5.1,5.1,0,0,1,2.055.422A5.044,5.044,0,0,1,21.033,1.6,10.057,10.057,0,0,0,24.287.366a4.856,4.856,0,0,1-.87,1.617,5.253,5.253,0,0,1-1.384,1.2A10.531,10.531,0,0,0,25,2.363Z" fill="#fff"/> </svg> </div> <div tabindex="0" class="icon"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="_" data-name="" d="M3.834,20a3.607,3.607,0,0,1-1.861-.5A4.04,4.04,0,0,1,.539,18.079,3.714,3.714,0,0,1,0,16.136V7.177H5.8a5.033,5.033,0,0,0-.643,4.617A4.922,4.922,0,0,0,7.2,14.353a4.9,4.9,0,0,0,2.075.789,5.093,5.093,0,0,0,.7.047,5.261,5.261,0,0,0,1.49-.219A5.043,5.043,0,0,0,13.395,13.9a4.88,4.88,0,0,0,1.284-1.829,5.159,5.159,0,0,0,.39-2.377,5.541,5.541,0,0,0-.895-2.537h5.8v8.982a3.767,3.767,0,0,1-.527,1.943A3.891,3.891,0,0,1,16.078,20H3.834ZM10,14.011A4.027,4.027,0,0,1,8,13.5,3.9,3.9,0,0,1,6.559,8.149,3.967,3.967,0,0,1,8,6.709a3.879,3.879,0,0,1,1.984-.537,3.817,3.817,0,0,1,1.973.537,4.005,4.005,0,0,1,1.434,1.44A3.892,3.892,0,0,1,11.961,13.5,3.917,3.917,0,0,1,10,14.011ZM9.988,7.2a2.856,2.856,0,0,0-1.456.388A2.919,2.919,0,0,0,7.477,8.64a2.9,2.9,0,0,0,0,2.9,3.014,3.014,0,0,0,1.055,1.063,2.789,2.789,0,0,0,1.456.4,2.85,2.85,0,0,0,1.457-.389A2.914,2.914,0,0,0,12.5,11.565a2.919,2.919,0,0,0,0-2.914,2.9,2.9,0,0,0-1.055-1.063A2.858,2.858,0,0,0,9.988,7.2Zm9.991-.662H13.83a.4.4,0,0,1-.321-.137,5.292,5.292,0,0,0-2.271-1.235,4.98,4.98,0,0,0-2.523.012A5.436,5.436,0,0,0,6.445,6.422a.332.332,0,0,1-.23.114H.138L.022,6.514V5.646c0,.033,0,.044-.007.047S0,5.283,0,4.595A10.184,10.184,0,0,1,.046,3.542,3.718,3.718,0,0,1,1.582.777L1.674.754V4.937h.8V.617A.613.613,0,0,1,2.523.309.866.866,0,0,1,2.844.16L3.05.114V4.937h.826V.023H4.4V4.937h.825V0H16.078a3.753,3.753,0,0,1,1.915.514A4.071,4.071,0,0,1,19.415,1.9a3.658,3.658,0,0,1,.563,1.874c.015.367.022.816.022,1.372l-.007.477c-.008.547-.012.816-.014.917ZM16.485,1.657c-.341,0-.692,0-1.073.012a.581.581,0,0,0-.458.183.7.7,0,0,0-.161.48v2.1a.635.635,0,0,0,.172.468.611.611,0,0,0,.447.172h2.111a.594.594,0,0,0,.642-.64V2.309a.634.634,0,0,0-.172-.469.607.607,0,0,0-.447-.171C17.173,1.661,16.826,1.657,16.485,1.657Z" fill="#fff"/> </svg> </div> <div tabindex="0" class="icon"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <g id="Social" transform="translate(-143)"> <path id="_" data-name="" d="M10,20a9.934,9.934,0,0,1-8.64-4.936A10.053,10.053,0,0,1,0,10.012,9.754,9.754,0,0,1,1.36,4.96,9.928,9.928,0,0,1,4.948,1.372,10.137,10.137,0,0,1,10,0V.023A9.937,9.937,0,0,1,18.64,4.96,9.745,9.745,0,0,1,20,10.012a10.043,10.043,0,0,1-1.36,5.052A9.934,9.934,0,0,1,10,20ZM12.845,7.269c.054,0,.081.031.081.091l-.138.205-4.754,4.3v.046l1.554,1.234,2.56,1.943a.822.822,0,0,0,.341.082.612.612,0,0,0,.208-.036.627.627,0,0,0,.3-.206,1.5,1.5,0,0,1,.092-.16L14.869,5.76c0-.182-.069-.29-.206-.32a.534.534,0,0,0-.142-.018,1.035,1.035,0,0,0-.269.041l-.206.068L3.9,9.509a.912.912,0,0,0-.239.172.26.26,0,0,0-.08.239.456.456,0,0,0,.229.32l.205.114,2.515.845L12.583,7.36l.16-.068A.3.3,0,0,1,12.845,7.269Z" transform="translate(143)" fill="#fff"/> </g> </svg> </div> </div> </section> <section class="bottom-section"> <section class="left-section"> <h3>Empezar</h3> <ul> <li tabindex="0">Productos</li> <li tabindex="0">Servicios</li> <li tabindex="0">Acerca de nosotros</li> <li tabindex="0"></li> </ul> </section> <section class="middle-section"> <h3>Compañia</h3> <ul> <li tabindex="0">Blog</li> <li tabindex="0">Contact</li> <li></li> <li></li> </ul> </section> <section class="right-section"> <h3>Ayuda</h3> <ul> <li tabindex="0">FAQS</li> <li tabindex="0">Term & Conditions</li> <li tabindex="0">Policy & Privacy</li> <li></li> </ul> </section> </section> </footer> <p class="foot">&copy; Copyright 2022, sahios</p> `}};At.styles=n`:host{width:100%;display:block;color:#fff;background:#1c1f3b}footer{width:100%;display:flex;flex-direction:column}.logo{margin:2rem auto 0;height:3.5rem}p.text{padding:2rem 1rem 1rem;font-size:.9rem;font-weight:300;letter-spacing:.03rem;line-height:1.1rem}p{min-width:calc(100% - 2rem);font-size:.8rem;font-weight:500;margin:0 auto;padding:1rem}.icons{margin:1rem auto 2rem;width:calc(320px - 2rem);max-width:calc(320px - 2rem);min-width:calc(320px - 2rem);width:calc(320px - 2rem);display:flex;justify-content:space-evenly}.icon{height:3rem;width:3rem;background:#090d2b;border-radius:50%;display:flex;justify-content:center;align-items:center}h3{font-size:.9rem;text-align:left;margin:0;padding:0 1rem}.bottom-section{display:flex;justify-content:space-around}.middle-section{display:none}ul{margin:0;padding:.5rem 1rem 1rem;list-style:none;text-align:left}li{height:25px;font-size:.79rem;font-weight:300;letter-spacing:.03rem;line-height:1.5rem}.foot{background:#090d2b}@media screen and (min-width:562px){.bottom-section{display:flex;justify-content:space-evenly;align-items:center}.bottom-section>section{width:150px}h3{text-align:center}p.text{padding:2rem 1rem 1rem;font-size:1rem}ul{max-width:calc(100% - 2rem);min-width:calc(100% - 2rem);width:calc(100% - 2rem);text-align:center}.left-section{width:50%}.middle-section{display:block}.right-section{width:50%}}@media screen and (min-width:764px){.icons{margin:1rem auto 2rem}.bottom-section{padding-bottom:1rem}}@media screen and (min-width:1024px){.logo{height:4.5rem}footer{width:calc(100% - 6rem);flex-direction:row;padding:0 3rem}p.text{width:30rem;margin:0;padding:2rem 0 2.3rem .5rem}.top-section{width:50%;text-align:left}.bottom-section{padding-bottom:0}.icons{justify-content:space-between;padding:0 0 2rem .5rem;margin:0;min-width:16rem}}@media screen and (min-width:1201px){footer{width:calc(100% - 20rem);flex-direction:row;padding:1rem 10rem}.bottom-section{width:50%}}`,At=e([ne("sahios-footer")],At);let kt=class extends ae{constructor(){super(),this.itemsCards=[],this.filterData=[],this.imageButtonShare="",this.imageButtonShare="../../assets/shared-button.svg"}get convertSrc(){return`${this.itemsCards[0].image}`}changeImage(e){console.log(e.type),"mouseover"===e.type?this.imageButtonShare="../../assets/shared-button-focus.svg":this.imageButtonShare="../../assets/shared-button.svg"}checkStorage(e){let t=q``;return t=e>0?q` <p class="enable-products"> Disponible </p> `:q` <p class="not-enable-products"> No disponible </p> `,t}get allCards(){return this.filterData=this.itemsCards.filter(e=>"computo"===e.categoryStyle),q` ${this.filterData.map(e=>q` <div class="container"> <section class="all-description"> <a type="button" class="button-card" @mouseover="${this.changeImage}" @mouseleave="${this.changeImage}"> <img src="${this.imageButtonShare.toString()}" alt="x"> </a> <img src="${e.image}" alt="x"> <p class="category-card"><img class="icon-left-category" src="../../assets/card-icon-category.svg" alt="x"> ${e.category}</p> <p class="description-card">${e.description}</p> </section> <section class="footer-description"> ${this.checkStorage(e.quantities)} <p class="quantitis">Quedan ${e.quantities} unidades</p> </section> </div> `)} `}render(){return q` ${this.allCards} `}};kt.styles=n`
    .container {
      height:602px;
      width: 393px;
      background-color: #111532;
      border-radius: 20px;
      margin: 15px 22px;
      .all-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        .button-card {
          align-self: end;
          background: none;
        }
        .button-card {
          background-color: #111532;
          margin: 25.3px 25.3px 27.7px 0px; 
        }
        .category-card{
          align-self: flex-start;
          margin: 0;
          padding: 22px 0 0 28px;
          font-size: 14px;
        }
        .description-card {
          margin: 12px 32px 0px 27px;
          align-self: flex-start;
          font-size: 16px;
          text-align: justify;
          font-weight: bold;
        }
        .icon-left-category{
          padding: 0 8px 0 0;
        }
      }

      .footer-description{
        display:flex;
        justify-content: space-between;

        .enable-products{
          margin: 20px 0 0 28px;
          font-size: 22px;
          color: #46F68A
        }
        .not-enable-products{
          margin: 20px 0 0 28px;
          font-size: 22px;
          color: gray
        }
        .quantitis{
          margin: 25px 28px 0 0;
          font-size:12px;
          color: #8C96B7
        }
      }
    }
   `,e([le({type:Array})],kt.prototype,"itemsCards",void 0),e([le({type:Array})],kt.prototype,"filterData",void 0),e([le({type:String})],kt.prototype,"imageButtonShare",void 0),kt=e([ne("sahios-card")],kt);const Ct=[{name:"Cómputo (Hardware)",category:"computo"},{name:"PC Gaming",category:"computo"},{name:"Componentes",category:"components"},{name:"Discos Duros / SSD / NAS",category:"computo"},{name:"Memorias Ram y Flash",category:"memoryRam"},{name:"Monitores",category:"monitors"},{name:"Dispositivos de Entrada",category:"inputDevices"},{name:"Audifonos Gamer",category:"gamerHeadPhones"},{name:"Redes",category:"web"},{name:"Servidores",category:"servers"},{name:"Adaptadores",category:"adapters"},{name:"Unidades de Disco Industrial y cientifica",category:"industrialScientificDiskDrivers"},{name:"Mature",category:"mature"},{name:"Instrumentos musicales",category:"musicalInstruments"},{name:"Productos de oficina",category:"officeProducts"},{name:"Patio, cesped y jardineria",category:"patioLawnGarden"},{name:"Mascotas",category:"petSupplies"},{name:"Articulos Deportivos",category:"sportingGoods"},{name:"Suplementos",category:"supplements"},{name:"Herramientas y mejoras para el hogar",category:"toolsAndHomeImprovement"},{name:"Juegos y juguetes",category:"toysAndGames"}];let Mt=class extends ae{constructor(){super(),this.itemsList=[],this.itemsList=Ct}get gettingItemsList(){return q` ${this.itemsList.map(e=>q` <div class="separationCheckbox"> <label class="custom-checkbox"> <input type="checkbox"> <span class="checkmark"></span> </label> <span class="checkbox-label">${e.name}</span> </div> `)} `}render(){return q` <div class="box-list"> <p>Filtrar por</p> <input class="search-by-text" placeholder="Buscar Producto"> <p>Categoria</p> <scroll-container class="list"> ${this.gettingItemsList} </scroll-container> </div> `}};Mt.styles=n`
    .box-list {
      display: flex;
      flex-direction: column;
      width: 320px;
      height: 600px;
      margin: 0 32px 0 140px;
      align-items: flex-start;
      .font-styles {
        font-size: 14px;
        margin-top: 15px;
      }
      .list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: auto;
        height: auto;
        overflow-y: scroll;
      }
      .style-boxes {
        margin-right: 10px;
      }
      .list::-webkit-scrollbar {
        width: 12px;
      }

      .list::-webkit-scrollbar-track {
        background: none;
      }

      .list::-webkit-scrollbar-thumb {
        background-color: #46F68A;
        border-radius: 20px;
      }
      p {
        font-weight: bold;
        font-size: 20px;
      }
      .separationCheckbox{
        margin-top: 14px;
      }
      .checkbox-label {
        font-size: 14px;
      }
      .search-by-text {
        height: 100px;
        width: 315px;
        background: #3D4056;
        border-radius: 31px;
        border: none;
      }
      .search-by-text::placeholder {
        font-size: 16px;
        padding: 0 0 0 33px;
      }
      .custom-checkbox {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: white;
        border: 2px solid #ccc;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        input[type="checkbox"] {
          display:none;
        } 
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          justify-content: center;
          align-items:center;
          font-size:12px;
          color: white;
        }
        input[type="checkbox"]:checked + .checkmark{
          background-color: #46F68A;
          border:2px solid #46F68A;
          border-radius: 4px;
          height:16px;
          width:16px;
          margin: -2px 0 0 -2px;
          display:flex;
        }
        input[type="checkbox"]:checked + .checkmark::before {
          content: '✓'
        }
      }
    }
  `,e([le({type:Array})],Mt.prototype,"itemsList",void 0),Mt=e([ne("sahios-search-items")],Mt);let $t=class extends ae{constructor(){super(),this.title="Home",this.hidden=!1,this.itemsCards=[{categoryStyle:"componente",image:"../../assets/cardsImage/mother-board-atx.svg",category:"Electronica",description:"Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD",state:"disponible",quantities:4},{categoryStyle:"componente",image:"../../assets/cardsImage/mother-board-atx-2.svg",category:"Electronica",description:"Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,",state:"disponible",quantities:3},{categoryStyle:"computo",image:"../../assets/cardsImage/procesador-i5.svg",category:"Electronica",description:"Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,",state:"disponible",quantities:0},{categoryStyle:"yuli",image:"../../assets/cardsImage/procesador-i5.svg",category:"yolete",description:"Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,",state:"disponible",quantities:2},{categoryStyle:"computo",image:"../../assets/cardsImage/procesador-i5.svg",category:"Electronica",description:"Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,",state:"disponible",quantities:2},{categoryStyle:"computo",image:"../../assets/cardsImage/procesador-i5.svg",category:"Electronica",description:"Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,",state:"disponible",quantities:2},{categoryStyle:"computo",image:"../../assets/cardsImage/procesador-i5.svg",category:"Electronica",description:"Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,",state:"disponible",quantities:2}]}render(){return q` <main> <div class="principal"> <section class="sub-title-text"> <p class="products-title">Los productos de la mas alta <font color="#46F68A">calidad</font></p> <p class="subtext-title"> Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales </p> </section> <img class="image-products-lap" src="../../../assets/products-laptop.svg" alt="Imagen de operadora telefonica"> </div> <div class="sub-header"> <p>este es el menu </p> </div> <div class="second"> <sahios-search-items class="search-list"></sahios-search-items> <sahios-card class="cards" .itemsCards="${this.itemsCards}"></sahios-card> </div> <sahios-footer></sahios-footer> </main> `}};$t.styles=n`
    .principal{
      margin:100px 180px 0 180px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      .subtext-title{
        color:'#FFFFFF';
        font-size: 1rem;
      }
    }
    .products-title {
      font-size: 4.688rem;
      font-weight: 600;
      margin: 0 0 32px 0;
      color: '#FFFFFF';
    }
    .sub-title-text{
      text-align: left;
      margin-right: 56.9px
    }

    .image-products-lap {
      height: 685px;
      width: 750px;
    }
    .cards {
      display: flex;
      flex-wrap: wrap
    }
    .search-list {
      margin: 0 0 0 0;
    }
    .second {
      display:flex;
      background-color: #2A2D45;
    }

    .sub-header{
      position: absolute;
      width: calc(100% - 5rem);
      background-color: #383B55;
      height: 104px;
      margin: 0 102px 0 102px;
      border-radius: 16px;
    }
    
    main {
      min-height: calc(100% - 5rem);
      background: rgb(8,11,36);
      color: white;
      text-align: left;
      overflow: hidden;
      position: relative
    }
    :host {
      width: 100%;
    }
  `,e([le({type:String})],$t.prototype,"title",void 0),e([le({type:Boolean})],$t.prototype,"hidden",void 0),e([le({type:Array})],$t.prototype,"itemsCards",void 0),$t=e([ne("product-page")],$t);let Pt=class extends ae{constructor(){super(...arguments),this.active="inicio",this.classAdd=[{id:"home",classToString:"active"},{id:"products",classToString:"false"},{id:"service",classToString:"false"},{id:"about",classToString:"false"}]}_handleCloseMenu(){this.dispatchEvent(new CustomEvent("sahios-sidebar-close-clicked",{bubbles:!0,composed:!0,detail:!0}))}_changeActive(e){const t=e.target;this.classAdd=[{id:"home",classToString:"false"},{id:"products",classToString:"false"},{id:"service",classToString:"false"},{id:"about",classToString:"false"}],this.classAdd.forEach((e,i)=>{e.id===t.id?this.classAdd[i].classToString="active":this.classAdd[i].classToString="false"}),this.dispatchEvent(new CustomEvent("sahios-change-page-header",{bubbles:!0,composed:!0,detail:String(t.id)}))}render(){return q` <section class="bottom-section"> <nav> <ul> <li class="${this.classAdd.length>0?this.classAdd[0].classToString.toString():""}" @click="${this._changeActive}" id="home"> Inicio </li> <li class="${this.classAdd.length>0?this.classAdd[3].classToString.toString():""}" @click="${this._changeActive}" id="about"> Acerca de nosotros </li> </ul> </nav> </section> `}};Pt.styles=n`:host{width:100%;height:100vh;margin:5rem 0 0 0;position:absolute;top:0;right:0;z-index:1;background:var(--sahios-web-background-color,#080b24);color:#fff}.top-section{display:flex;justify-content:flex-end;align-items:center;width:calc(100% - 2rem);padding:0 1rem;height:80px}#logo{height:60px;width:150px}button{background:0 0;border:none;padding:0}img{height:20px;width:20px}ul{margin:0;padding:0;list-style:none}li{padding:1rem 0;font-size:1.3rem;letter-spacing:.1rem;line-height:1.3rem}li:hover{color:#46f68a;cursor:pointer}@media screen and (min-width:562px){.top-section{width:calc(100% - 8rem);padding:0 4rem}}@media screen and (min-width:794px){li{font-size:.9rem}}@media screen and (min-width:1024px){li{letter-spacing:.03rem}}@media screen and (min-width:1201px){.top-section{width:calc(100% - 12rem);padding:0 6rem}}@media screen and (min-width:1400px){.top-section{width:calc(100% - 22rem);padding:0 11rem}}`,e([le({type:String})],Pt.prototype,"active",void 0),e([le({type:Array})],Pt.prototype,"classAdd",void 0),Pt=e([ne("sahios-sidebar")],Pt);let _t=class extends ae{constructor(){super(),this.icon="",this.title="",this.text="",this.classBaner="",this.greenLetter=""}render(){return q` <div class="${this.classBaner}"> <img class="icons" src="${this.icon}" alt="checkmark"> <div> <h3>${this.title} <span>${this.greenLetter}</span></h3> <p>${this.text}</p> </div> </div> `}};_t.styles=n`
      *{
        margin: 0;
        padding: 0;
      }

      .reason {
        border-radius: 1rem;
        margin: 2rem auto;
        position: relative;
        width: calc(85% - 2rem);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(255,255,255,0.06);
        max-width: 44.75rem;
      }

      @media(min-width: 500px){
        .reason {
          height: 177px;
          width: 460px;
          position: static;
          flex-direction: row;
          align-items: center;
          margin-left: 2rem;
          text-align: left;
          img {
            height: 2rem;
            width: 2rem;
            margin: 0 40px 0 30px;
          }
          h3 {
            font-size: 20px;
          }
          p {
            margin-top: 15px;
            font-size: 16px;
          }
        }
        .reason-inside-container {
          border-radius: 1rem;
          margin: 16px 12px;
          text-align: left;
          position: relative;
          padding: 1rem;
          display: flex;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          max-width: 500px;
          img {
            height: 2rem;
            width: 2rem;
            margin: 0 40px 0 30px;
          }
          h3 {
            font-size: 20px;
          }
          p {
            margin-top: 15px;
            font-size: 16px;
          }
        }
        .reason-care-computer {
          margin: 2rem auto;
          position: relative;
          width: calc(90% - 1rem);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 698px;
          h3 {
            margin: 60px 0;
            margin-right: 5rem;
            font-size: 40px;
          }
          div {
            text-align: left;
          }
          span {
            color:  #46F68A;
          }
          p {
            font-size: 18px;
          }
        }

        .about-us-banner {
          margin: 2rem auto;
          padding: 1rem;
          display: flex;
          justify-content: center;
          max-width: 44.75rem;
          height: 177px;
          position: static;
          flex-direction: row;
          align-items: center;
          text-align: left;
          border-radius: 1rem;
          background: rgba(255,255,255,0.06);
          img {
            height: 2rem;
            width: 2rem;
            margin: 0 40px 0 30px;
          }
          h3 {
            font-size: 20px;
          }
          p {
            margin-top: 15px;
            font-size: 16px;
          }
        }
      }
      @media(max-width: 500px){
        .reason {
          img {
            position: absolute;
            top: -0.75rem;
            left: calc(50% - 0.75rem);
            height: 2rem;
            width: 2rem;
            margin: 0px auto;
          }
          div {
            display: block;
            unicode-bidi: isolate;
            h3 {
              font-size: 1.3rem;
              margin: 0.8rem 0px;
            }
            p {
              margin: 0px;
              font-size: 0.8rem;
              letter-spacing: 0.02rem;
              line-height: 1rem;
              padding: 0px;
            }
          }
        }
        .reason-inside-container {
          border-radius: 1rem;
          margin: 2rem auto;
          position: relative;
          width: calc(85% - 2rem);
          padding: 1rem;
          display: flex;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          max-width: 44.75rem;
          .icons {
            position: static;
            height: 22px;
            width: 22px;
          }
          div {
            margin-left: 1rem;
            text-align: left;
            h3 {
              margin-bottom: 14px;
            }
          }
        }

        .reason-care-computer {
          margin: 2rem auto;
          position: relative;
          width: calc(90% - 1rem);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 44.75rem;
          h3 {
            margin: 2rem 0;
            font-size: 28px;
          }
          div {
            text-align: left;
          }
          span {
            color:  #46F68A;
          }
        }

        .about-us-banner {
          border-radius: 1rem;
          margin: 2rem auto;
          position: relative;
          width: calc(85% - 2rem);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          max-width: 44.75rem;
          img {
              position: absolute;
              top: -0.75rem;
              left: calc(50% - 0.75rem);
              height: 2rem;
              width: 2rem;
              margin: 0px auto;
            }
          div {
            display: block;
            unicode-bidi: isolate;
            h3 {
              font-size: 1.3rem;
              margin: 0.8rem 0px;
            }
            p {
              margin: 0px;
              font-size: 0.8rem;
              letter-spacing: 0.02rem;
              line-height: 1rem;
              padding: 0px;
            }
          }
        }
      }
  `,e([le()],_t.prototype,"icon",void 0),e([le({type:String,attribute:"green-letter"})],_t.prototype,"greenLetter",void 0),e([le({type:String,attribute:"class-banner"})],_t.prototype,"classBaner",void 0),_t=e([ne("banner-composition")],_t);let zt=class extends ae{constructor(){super(),this.dataInfo=[{icon:"../../../assets/icon-checkmark.svg",title:"garantia",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-clock.svg",title:"Servicio Rapido",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-money.svg",title:"No cobramos por cotizacion ",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"}],this.listInfoServices=[{icon:"../../../assets/icon-checkmark.svg",title:"Windows",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Apple IOS",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Tablets",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Smartphones",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Android",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"PC components",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"}],this.careComputerEquipment=[{image:"../../../assets/care-computer-equipment.svg",title:"conoce todos nuestros servicios",greenLetter:"especializados",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{image:"../../../assets/care-computer-equipment.svg",title:"conoce todos nuestros servicios",greenLetter:"especializados",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"}]}render(){return console.log(this.dataInfo),q` <section class="title-section"> <div class="left-service-page"> <h1 class="title-service-page"> <span class="span-without-color">Conoce</span> todos <br calss="hide-br">nuestros <br>servicios <span>especializados</span> </h1> <p class="text-title-service-page">Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales</p> </div> </section> <section class="second-section"> <div class="card-container"> ${this.dataInfo.map(e=>q` <banner-composition class-banner="reason" .icon="${e.icon}" .title="${e.title}" .text="${e.description}"> </banner-composition> `)} </div> <h1 class="title-section-two">Tenemos todo tipo de soluciones para tu equipo</h1> <div class="card-container"> ${this.listInfoServices.map(e=>q` <banner-composition class-banner="reason-inside-container" .icon="${e.icon}" .title="${e.title}" .text="${e.description}"> </banner-composition> `)} </div> <div class="ask-for-a-quote"> <h2>¿Tu teléfono roto necesita una reparación?</h2> <p>Somos especialistas en pantallas touch</p> <button>Pedir cotización</button> </div> <div class="care-your-pc"> <h2>Cuidamos de tu equipo como tu cuidarías de el</h2> <div class="card-container-footer"> ${this.careComputerEquipment.map(e=>q` <banner-composition class-banner="reason-care-computer" .icon="${e.image}" .title="${e.title}" .text="${e.description}" green-letter="${e.greenLetter}"> </banner-composition> `)} </div> </div> <home-page-contact></home-page-contact> <sahios-footer></sahios-footer> </section> `}};zt.styles=n`
      *{
        margin: 0;
        padding: 0;
      }

      @media(min-width: 500px) {
        .title-section {
          max-width: 100%;
          padding-top: 3rem;
          background: radial-gradient(closest-side at 55% 55%, #0B4A5D, #080B24);
          .left-service-page {
            height: 35rem;
            padding: 0rem 50% 0 8%;
            background-image: url(../../assets/service-image.svg);
            background-repeat: no-repeat;
            background-position-x: 100%;
            background-size: 50%;
            flex-direction: column;
            text-align: left;
            .title-service-page {
              font-size: 60px;
              font-weight: bold;
              letter-spacing: -3px;
              br:nth-child(2){
                display: none;
              }
              span:nth-child(4) {
                color: #46F68A;
              }
            }
            p {
              margin-top: 16px;
              padding-right: 33%;
              font-size: 16px;
            }
          }
        }
        .second-section {
          .card-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
          .card-container-footer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 100px 0 300px 0;
          }
          .title-section-two {
            text-align: left;
            font-size: 35px;
            margin: 107px 50% 80px 8%;
            margin-left: 8%;
            margin-right: 50%
          }
          .ask-for-a-quote {
            background-color:#2B3055;
            display: flex;
            margin: 121px 7% 134px 7%;
            height: 359px;
            flex-direction: column;
            border-radius: 8px;
            justify-content: center;
            align-items: center;
            p {
              margin: 8px 35px 0 35px;
            } 
            h2 {
              margin: 68px 20px 0 35px;
            }
            button {
              height: 60px;
              width: 400px;
              border-radius: 8px;
              background-color: #46F68A;
              margin: 60px 35px 65px 35px;
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
      }
      @media(max-width: 500px) {
         .title-section {
            max-width: 100%;
            height: 80vh;
            padding-top: 3rem;
            text-align: left;
            background: radial-gradient(circle at 80rem 92rem,#0B4A5D, #080B24);
            .left-service-page {
              background-image: url("../../assets/service-image.svg");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              background-position-y: 18rem;
              height:100%
            }
            .text-title-service-page {
              margin: 0 31px 0 41px;
            }
            .title-service-page {
              font-size: 40px;
              font-weight: bold;
              letter-spacing: -3px;
              margin: 0 31px 35px 41px;
              br:nth-child(3){
                display: none;
              }
              span {
                color: #46F68A;
              }
            }
            .container {
              width: 100vw;
              height: 45vh;
              display: flex;
              overflow: hidden;
              flex-direction: column;
              align-items: center;
              margin-top: 4rem;
              img {
                width: auto;
                height: auto; 
              }
            }
          }

          .second-section{
            .title-section-two{
              font-size: 40px;
              margin: 55px 35px 45px 25px;
              text-align: left;
              line-height: 1.0;
              font-family: arial;
              font-weight: bold;
              letter-spacing: -2px;
            }
            .ask-for-a-quote {
              background-color:#2B3055;
              height: 421px;
              display: flex;
              flex-direction: column;
              text-align: left;
              justify-content: space-between;
              border-radius: 8px;
              p {
                margin: 0px 35px 0 35px;
              } 
              h2 {
                margin: 68px 20px 0 35px;
              }
              button {
                height: 60px;
                border-radius: 8px;
                background-color: #46F68A;
                margin: 0 35px 73px 35px;
                font-size: 18px;
                font-weight: bold;
              }
            }
            .care-your-pc {
              h2 {
                margin: 2.8rem 42px 0 42px;
              }
            }
          }
      }
  `,e([le({type:Array})],zt.prototype,"dataInfo",void 0),e([le({type:Array})],zt.prototype,"listInfoServices",void 0),e([le({type:Array})],zt.prototype,"careComputerEquipment",void 0),zt=e([ne("service-page")],zt);let Lt=class extends ae{constructor(){super(),this.dataInfo=[{icon:"../../../assets/icon-checkmark.svg",title:"Garantia",description:"Nuestra garantía está diseñada para ofrecer confianza y respaldo a nuestros clientes, al mismo tiempo que establece condiciones claras y justas que permitan una relación profesional transparente y equilibrada para ambas partes."},{icon:"../../../assets/icon-clock.svg",title:"Servicio Rapido",description:"Nos comprometemos a desarrollar soluciones de software optimizadas para ofrecer tiempos de carga adecuados y un funcionamiento ágil, considerando las buenas prácticas de desarrollo, optimización de recursos y estándares actuales de la industria. Nuestro objetivo es brindar aplicaciones y sitios web que ofrezcan una experiencia fluida, eficiente y confiable para los usuarios finales."},{icon:"../../../assets/icon-money.svg",title:"Cotización",description:"Todas nuestras cotizaciones se elaboran con base en el análisis de los requerimientos proporcionados por el cliente, considerando el alcance del proyecto, nivel de complejidad, tiempo estimado de desarrollo, tecnologías a utilizar y recursos necesarios para ofrecer una solución funcional, estable y de calidad."}],this.listInfoServices=[{icon:"../../../assets/icon-checkmark.svg",title:"Windows",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Apple IOS",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Tablets",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Smartphones",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"Android",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{icon:"../../../assets/icon-checkmark.svg",title:"PC components",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"}],this.careComputerEquipment=[{image:"../../../assets/care-computer-equipment.svg",title:"conoce todos nuestros servicios",greenLetter:"especializados",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"},{image:"../../../assets/care-computer-equipment.svg",title:"conoce todos nuestros servicios",greenLetter:"especializados",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"}]}render(){return q` <section class="title-section"> <div class="left-more-about"> <h1 class="title-more-about"> Nos caracterizamos por <span class="break-word">ser un gran <span class="title-more-about-color">equipo de trabajo</span></span> </h1> <p class="text-title-more-about">Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales</p> </div> </section> <section class="second-section"> <div class="left-second-section"> <h1> 3 cosas nos caracterizan del resto de especialistas</h1> <p class="paragraph-second-section"> Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitale</p> <div class="card-container"> ${this.dataInfo.map(e=>q` <banner-composition class-banner="about-us-banner" .icon="${e.icon}" .title="${e.title}" .text="${e.description}"> </banner-composition> `)} </div> <p class="second-section-link-text">*esta información se obtuvo de opiniones de <a href="" class="link-to-google">Google Maps</a></p> </div> <div class="image-second-section-background"></div> </section> <section class="who-is-about"> <div class="text-who-is-about"> <h1>Quienes somos?</h1> <p>Somos un equipo de profesionales apasionados por la tecnología y comprometidos con ofrecer soluciones confiables, prácticas y adaptadas a las necesidades de cada cliente. Nos especializamos en el cuidado, mantenimiento y optimización de equipos de cómputo y telefonía móvil, así como en el desarrollo de soluciones digitales que ayudan a personas y empresas a mejorar su productividad y aprovechar al máximo sus herramientas tecnológicas.</p> </div> <div class="decorative-image"> <img src="../../assets/more-about-who-we-are.svg"> </div> </section> <section class="meet-our-team"> <h1>Nuestro equipo</h1> <div class="team-image"> <div class="image-our-team"> <img src="../../assets/more-about-who-we-are.svg"> </div> <div class="image-our-team"> <img src="../../assets/more-about-who-we-are.svg"> </div> </div> </section> <sahios-footer></sahios-footer> `}};Lt.styles=n`
      *{
        margin: 0;
        padding: 0;
      }

      @media(min-width: 500px) {
        .title-section {
          max-width: 100%;
          padding-top:3rem;
          background: radial-gradient(closest-side at 55% 55%, #0B4A5D, #080B24);
          .left-more-about {
            height: 35rem;
            padding: 13% 32% 0 8%;
            background-image: url(../../assets/more-about-background-desktop.svg);
            background-repeat: no-repeat;
            background-position-x: 100%;
            background-size: 100%;
            flex-direction: column;
            text-align: left;
            .title-more-about {
              font-size: clamp(16px, 5vw, 75px);
              font-weight: bold;
              letter-spacing: -3px;
              .break-word {
                white-space: nowrap;
                .title-more-about-color {
                  color: #46F68A;
                  white-space: break-spaces;
                }
              }
            }
            p {
              margin-top: 16px;
              padding-right: 33%;
              font-size: 16px;
            }
          }
        }
        .second-section {
          display:flex;
          flex-direction: row;
          margin: 10% 0rem 0 8%;
          .left-second-section {
            padding: 0 4rem 0 0;
          }
          h1 {
            font-size: 40px;
            text-align: left;
            margin: 0 0 43px 0;
          }

          .paragraph-second-section{
            text-align: left;
            margin-bottom: 100px;
            font-size: 16px;
          }
          .title-section-two{
            font-size: 40px;
            margin: 55px 35px 45px 0;
            text-align: left;
            line-height: 1.0;
            font-family: arial;
            font-weight: bold;
            letter-spacing: -2px;
          }
          .link-to-google{
            color: #05F5FF;
            text-decoration: none;
          }
          .second-section-link-text {
            margin: 0 5% 3rem 0;
          }
          .image-second-section-background {
            background-image: url("../../assets/more-about-second-section.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-position-x: left;
            background-size: 150%;
            width: 100%;
          }
        }
        .who-is-about {
          display: flex;
          margin: 168px 0 0 8%;
          .text-who-is-about{
            width: 45%;
            h1 {
              text-align: left;
              font-size: 40px;
              margin-bottom: 63px;
            }
            p {
              text-align: left;
              margin: 2rem 0rem 1rem 0;
              font-size: 1rem;
            }
          }
          .decorative-image {
            height:100%;
            width:55%;
            img {
              width: 75%;
            }
          }
        }
        .meet-our-team {
          display:flex;
          flex-direction: column;
          margin: 130px 0 248px 8%;
          h1 { 
            text-align: left;
          }
          .team-image {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .image-our-team {
              margin: 78px 1.5rem 0 0;
            }
          }
        }
      }
      @media(max-width: 500px) {
         .title-section {
            max-width: 100%;
            height: 90vh;
            padding-top: 3rem;
            text-align: left;
            background: radial-gradient(circle at 80rem 92rem,#0B4A5D, #080B24);
            .left-more-about {
              background-image: url("../../assets/more-about-background.svg");
              background-repeat: no-repeat;
              background-position: bottom;
              background-position-x: 100%;
              background-position-y: 150%;
              height:100%;
              .title-more-about {
                font-size: 38px;
                font-weight: bold;
                letter-spacing: -3px;
                margin: 0 31px 35px 41px;
                br:nth-child(3){
                    display: none;
                }
                .title-more-about-color {
                  color: #46F68A;
                }
              }
              .text-title-more-about {
                margin: 0 31px 0 41px;
              }
            }
          }

          .second-section {
            h1 {
              font-size: 2.5rem;
              text-align: left;
              margin: 41px 5% 15px 5%;
            }

            .paragraph-second-section{
              margin: 2rem 5% 6rem 5%;
              text-align: left;
            }
            .title-section-two{
              font-size: 40px;
              margin: 55px 35px 45px 25px;
              text-align: left;
              line-height: 1.0;
              font-family: arial;
              font-weight: bold;
              letter-spacing: -2px;
            }
            .link-to-google{
              color: #05F5FF;
              text-decoration: none;
            }
            .second-section-link-text {
              margin: 0 5% 3rem 5%;
            }
            .image-second-section-background {
              background-image: url("../../assets/more-about-second-section.svg");
              background-repeat: no-repeat;
              width: 100%;
              height: 26rem;;
            }
          }
          .who-is-about {
            .who-is-about-image {
              background-image: url("../../assets/more-about-second-section.svg");
              background-repeat: no-repeat;
              width: 100%;
              height: 26rem;
            }
            .text-who-is-about {
              h1 {
                margin: 0 5% 3rem 5%;
                font-size: 36px;
                text-align: left;
              }
              p {
                margin: 0 5% 2rem 5%;
                text-align: left;
              }
            }
            .decorative-image {
              margin: 25% 5% 10% 5%;
              img {
                height: 100%; 
                width: 100%;
              }
            }
          }
          .meet-our-team {
            margin-bottom: 5  rem;
            h1 {
              font-size: 2rem;
              text-align: left;
              margin: 0 5% 46px 5%;
            }
            .image-our-team {
              margin: 5% 5% 5% 5%;
              img {
                height: 100%; 
                width: 100%;
              } 
            }
          }

      }
  `,e([le({type:Array})],Lt.prototype,"dataInfo",void 0),e([le({type:Array})],Lt.prototype,"listInfoServices",void 0),e([le({type:Array})],Lt.prototype,"careComputerEquipment",void 0),Lt=e([ne("more-about")],Lt),new URL(new URL("9529ee57.svg",import.meta.url).href,import.meta.url).href;class It extends ae{constructor(){super(...arguments),this.title="My app",this.sidebarOpen=!1,this.changeState=!1,this.renderProperty=!1,this.pageActive=[{id:"home",active:!0},{id:"products",active:!1},{id:"service",active:!1},{id:"about",active:!1}]}_handleShowMenu(e){console.log("hola mundo"),this.sidebarOpen=!0,this.style.overflow="hidden"}_handleHideMenu(e){this.sidebarOpen=!1,this.style.overflow="scroll",this._changePage(e)}_changePage(e){this.renderProperty=!this.renderProperty;const t=String(e.detail);this.pageActive.forEach(e=>{t===e.id?e.active=!0:e.active=!1})}get tplHomePage(){return this.pageActive[0].active?q` <home-page></home-page> <home-page-reasons></home-page-reasons> <home-page-testimonials></home-page-testimonials> <home-page-contact></home-page-contact> <sahios-footer></sahios-footer> ${this.sidebarOpen?q`<sahios-sidebar .open="${this.sidebarOpen}" @sahios-change-page-header="${this._handleHideMenu}" @sahios-sidebar-close-clicked="${this._handleHideMenu}"></sahios-sidebar>`:H} `:""}get tplProductsPage(){return this.pageActive[1].active?q` <product-page></product-page>`:H}get tplServicePage(){return this.pageActive[2].active?q` <service-page class="service-page"></service-page> ${this.sidebarOpen?q`<sahios-sidebar .open="${this.sidebarOpen}" @sahios-change-page-header="${this._handleHideMenu}" @sahios-sidebar-close-clicked="${this._handleHideMenu}"></sahios-sidebar>`:H}`:H}get tplMoreAbout(){return this.pageActive[3].active?q` <more-about></more-about> ${this.sidebarOpen?q`<sahios-sidebar .open="${this.sidebarOpen}" @sahios-change-page-header="${this._handleHideMenu}" @sahios-sidebar-close-clicked="${this._handleHideMenu}"></sahios-sidebar>`:H}`:H}render(){return q` <sahios-header class="header-main" @sahios-header-menu-clicked="${this._handleShowMenu}" @sahios-change-page-header="${this._changePage}"></sahios-header> <div class="body-content"> ${this.tplHomePage} ${this.tplServicePage} ${this.tplMoreAbout} </div> `}}It.styles=n`:host{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;font-size:calc(10px + 2vmin);margin:0 auto;text-align:center;background-color:var(--sahios-web-background-color)}.header-main{position:fixed}.body-content{margin:5rem 0 0 0}`,e([le({type:String})],It.prototype,"title",void 0),e([le({type:Boolean})],It.prototype,"sidebarOpen",void 0),e([le({type:Boolean})],It.prototype,"changeState",void 0),e([le({type:Boolean})],It.prototype,"renderProperty",void 0),e([le({type:Array})],It.prototype,"pageActive",void 0),customElements.define("sahios-web",It);
