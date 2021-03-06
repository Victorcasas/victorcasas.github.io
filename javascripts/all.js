/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */

;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/*!
 *  Sharrre.com - Make your sharing widget!
 *  Version: beta 1.3.5
 *  Author: Julien Hany
 *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

;(function(g,i,j,b){var h="sharrre",f={className:"sharrre",share:{googlePlus:false,facebook:false,twitter:false,digg:false,delicious:false,stumbleupon:false,linkedin:false,pinterest:false},shareTotal:0,template:"",title:"",url:j.location.href,text:j.title,urlCurl:"sharrre.php",count:{},total:0,shorterTotal:true,enableHover:true,enableCounter:true,enableTracking:false,hover:function(){},hide:function(){},click:function(){},render:function(){},buttons:{googlePlus:{url:"",urlCount:false,size:"medium",lang:"en-US",annotation:""},facebook:{url:"",urlCount:false,action:"like",layout:"button_count",width:"",send:"false",faces:"false",colorscheme:"",font:"",lang:"en_US"},twitter:{url:"",urlCount:false,count:"horizontal",hashtags:"",via:"",related:"",lang:"en"},digg:{url:"",urlCount:false,type:"DiggCompact"},delicious:{url:"",urlCount:false,size:"medium"},stumbleupon:{url:"",urlCount:false,layout:"1"},linkedin:{url:"",urlCount:false,counter:""},pinterest:{url:"",media:"",description:"",layout:"horizontal"}}},c={googlePlus:"",facebook:"https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",twitter:"http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",digg:"http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",delicious:"http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",stumbleupon:"",linkedin:"http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",pinterest:"http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"},l={googlePlus:function(m){var n=m.options.buttons.googlePlus;g(m.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="'+n.size+'" data-href="'+(n.url!==""?n.url:m.options.url)+'" data-annotation="'+n.annotation+'"></div></div>');i.___gcfg={lang:m.options.buttons.googlePlus.lang};var o=0;if(typeof gapi==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//apis.google.com/js/plusone.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})()}else{gapi.plusone.go()}},facebook:function(m){var n=m.options.buttons.facebook;g(m.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="'+(n.url!==""?n.url:m.options.url)+'" data-send="'+n.send+'" data-layout="'+n.layout+'" data-width="'+n.width+'" data-show-faces="'+n.faces+'" data-action="'+n.action+'" data-colorscheme="'+n.colorscheme+'" data-font="'+n.font+'" data-via="'+n.via+'"></div></div>');var o=0;if(typeof FB==="undefined"&&o==0){o=1;(function(t,p,u){var r,q=t.getElementsByTagName(p)[0];if(t.getElementById(u)){return}r=t.createElement(p);r.id=u;r.src="//connect.facebook.net/"+n.lang+"/all.js#xfbml=1";q.parentNode.insertBefore(r,q)}(j,"script","facebook-jssdk"))}else{FB.XFBML.parse()}},twitter:function(m){var n=m.options.buttons.twitter;g(m.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+(n.url!==""?n.url:m.options.url)+'" data-count="'+n.count+'" data-text="'+m.options.text+'" data-via="'+n.via+'" data-hashtags="'+n.hashtags+'" data-related="'+n.related+'" data-lang="'+n.lang+'">Tweet</a></div>');var o=0;if(typeof twttr==="undefined"&&o==0){o=1;(function(){var q=j.createElement("script");q.type="text/javascript";q.async=true;q.src="//platform.twitter.com/widgets.js";var p=j.getElementsByTagName("script")[0];p.parentNode.insertBefore(q,p)})()}else{g.ajax({url:"//platform.twitter.com/widgets.js",dataType:"script",cache:true})}},digg:function(m){var n=m.options.buttons.digg;g(m.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton '+n.type+'" rel="nofollow external" href="http://digg.com/submit?url='+encodeURIComponent((n.url!==""?n.url:m.options.url))+'"></a></div>');var o=0;if(typeof __DBW==="undefined"&&o==0){o=1;(function(){var q=j.createElement("SCRIPT"),p=j.getElementsByTagName("SCRIPT")[0];q.type="text/javascript";q.async=true;q.src="//widgets.digg.com/buttons.js";p.parentNode.insertBefore(q,p)})()}},delicious:function(o){if(o.options.buttons.delicious.size=="tall"){var p="width:50px;",n="height:35px;width:50px;font-size:15px;line-height:35px;",m="height:18px;line-height:18px;margin-top:3px;"}else{var p="width:93px;",n="float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",m="float:left;height:20px;line-height:20px;"}var q=o.shorterTotal(o.options.count.delicious);if(typeof q==="undefined"){q=0}g(o.element).find(".buttons").append('<div class="button delicious"><div style="'+p+'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="'+n+'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">'+q+'</div><div style="'+m+'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>');g(o.element).find(".delicious").on("click",function(){o.openPopup("delicious")})},stumbleupon:function(m){var n=m.options.buttons.stumbleupon;g(m.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="'+n.layout+'" location="'+(n.url!==""?n.url:m.options.url)+'"></su:badge></div>');var o=0;if(typeof STMBLPN==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//platform.stumbleupon.com/1/widgets.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})();s=i.setTimeout(function(){if(typeof STMBLPN!=="undefined"){STMBLPN.processWidgets();clearInterval(s)}},500)}else{STMBLPN.processWidgets()}},linkedin:function(m){var n=m.options.buttons.linkedin;g(m.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="'+(n.url!==""?n.url:m.options.url)+'" data-counter="'+n.counter+'"><\/script></div>');var o=0;if(typeof i.IN==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//platform.linkedin.com/in.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})()}else{i.IN.init()}},pinterest:function(m){var n=m.options.buttons.pinterest;g(m.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url='+(n.url!==""?n.url:m.options.url)+"&media="+n.media+"&description="+n.description+'" class="pin-it-button" count-layout="'+n.layout+'">Pin It</a></div>');(function(){var o=j.createElement("script");o.type="text/javascript";o.async=true;o.src="//assets.pinterest.com/js/pinit.js";var p=j.getElementsByTagName("script")[0];p.parentNode.insertBefore(o,p)})()}},d={googlePlus:function(){},facebook:function(){fb=i.setInterval(function(){if(typeof FB!=="undefined"){FB.Event.subscribe("edge.create",function(m){_gaq.push(["_trackSocial","facebook","like",m])});FB.Event.subscribe("edge.remove",function(m){_gaq.push(["_trackSocial","facebook","unlike",m])});FB.Event.subscribe("message.send",function(m){_gaq.push(["_trackSocial","facebook","send",m])});clearInterval(fb)}},1000)},twitter:function(){tw=i.setInterval(function(){if(typeof twttr!=="undefined"){twttr.events.bind("tweet",function(m){if(m){_gaq.push(["_trackSocial","twitter","tweet"])}});clearInterval(tw)}},1000)},digg:function(){},delicious:function(){},stumbleupon:function(){},linkedin:function(){function m(){_gaq.push(["_trackSocial","linkedin","share"])}},pinterest:function(){}},a={googlePlus:function(m){i.open("https://plus.google.com/share?hl="+m.buttons.googlePlus.lang+"&url="+encodeURIComponent((m.buttons.googlePlus.url!==""?m.buttons.googlePlus.url:m.url)),"","toolbar=0, status=0, width=900, height=500")},facebook:function(m){i.open("http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent((m.buttons.facebook.url!==""?m.buttons.facebook.url:m.url))+"&t="+m.text+"","","toolbar=0, status=0, width=900, height=500")},twitter:function(m){i.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(m.text)+"&url="+encodeURIComponent((m.buttons.twitter.url!==""?m.buttons.twitter.url:m.url))+(m.buttons.twitter.via!==""?"&via="+m.buttons.twitter.via:""),"","toolbar=0, status=0, width=650, height=360")},digg:function(m){i.open("http://digg.com/tools/diggthis/submit?url="+encodeURIComponent((m.buttons.digg.url!==""?m.buttons.digg.url:m.url))+"&title="+m.text+"&related=true&style=true","","toolbar=0, status=0, width=650, height=360")},delicious:function(m){i.open("http://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url))+"&title="+m.text,"delicious","toolbar=no,width=550,height=550")},stumbleupon:function(m){i.open("http://www.stumbleupon.com/badge/?url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url)),"stumbleupon","toolbar=no,width=550,height=550")},linkedin:function(m){i.open("https://www.linkedin.com/cws/share?url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url))+"&token=&isFramed=true","linkedin","toolbar=no,width=550,height=550")},pinterest:function(m){i.open("http://pinterest.com/pin/create/button/?url="+encodeURIComponent((m.buttons.pinterest.url!==""?m.buttons.pinterest.url:m.url))+"&media="+encodeURIComponent(m.buttons.pinterest.media)+"&description="+m.buttons.pinterest.description,"pinterest","toolbar=no,width=700,height=300")}};function k(n,m){this.element=n;this.options=g.extend(true,{},f,m);this.options.share=m.share;this._defaults=f;this._name=h;this.init()}k.prototype.init=function(){var m=this;if(this.options.urlCurl!==""){c.googlePlus=this.options.urlCurl+"?url={url}&type=googlePlus";c.stumbleupon=this.options.urlCurl+"?url={url}&type=stumbleupon"}g(this.element).addClass(this.options.className);if(typeof g(this.element).data("title")!=="undefined"){this.options.title=g(this.element).attr("data-title")}if(typeof g(this.element).data("url")!=="undefined"){this.options.url=g(this.element).data("url")}if(typeof g(this.element).data("text")!=="undefined"){this.options.text=g(this.element).data("text")}g.each(this.options.share,function(n,o){if(o===true){m.options.shareTotal++}});if(m.options.enableCounter===true){g.each(this.options.share,function(n,p){if(p===true){try{m.getSocialJson(n)}catch(o){}}})}else{if(m.options.template!==""){this.options.render(this,this.options)}else{this.loadButtons()}}g(this.element).hover(function(){if(g(this).find(".buttons").length===0&&m.options.enableHover===true){m.loadButtons()}m.options.hover(m,m.options)},function(){m.options.hide(m,m.options)});g(this.element).click(function(){m.options.click(m,m.options);return false})};k.prototype.loadButtons=function(){var m=this;g(this.element).append('<div class="buttons"></div>');g.each(m.options.share,function(n,o){if(o==true){l[n](m);if(m.options.enableTracking===true){d[n]()}}})};k.prototype.getSocialJson=function(o){var m=this,p=0,n=c[o].replace("{url}",encodeURIComponent(this.options.url));if(this.options.buttons[o].urlCount===true&&this.options.buttons[o].url!==""){n=c[o].replace("{url}",this.options.buttons[o].url)}if(n!=""&&m.options.urlCurl!==""){g.getJSON(n,function(r){if(typeof r.count!=="undefined"){var q=r.count+"";q=q.replace("\u00c2\u00a0","");p+=parseInt(q,10)}else{if(r.data&&r.data.length>0&&typeof r.data[0].total_count!=="undefined"){p+=parseInt(r.data[0].total_count,10)}else{if(typeof r[0]!=="undefined"){p+=parseInt(r[0].total_posts,10)}else{if(typeof r[0]!=="undefined"){}}}}m.options.count[o]=p;m.options.total+=p;m.renderer();m.rendererPerso()}).error(function(){m.options.count[o]=0;m.rendererPerso()})}else{m.renderer();m.options.count[o]=0;m.rendererPerso()}};k.prototype.rendererPerso=function(){var m=0;for(e in this.options.count){m++}if(m===this.options.shareTotal){this.options.render(this,this.options)}};k.prototype.renderer=function(){var n=this.options.total,m=this.options.template;if(this.options.shorterTotal===true){n=this.shorterTotal(n)}if(m!==""){m=m.replace("{total}",n);g(this.element).html(m)}else{g(this.element).html('<div class="box"><a class="count" href="#">'+n+"</a>"+(this.options.title!==""?'<a class="share" href="#">'+this.options.title+"</a>":"")+"</div>")}};k.prototype.shorterTotal=function(m){if(m>=1000000){m=(m/1000000).toFixed(2)+"M"}else{if(m>=1000){m=(m/1000).toFixed(1)+"k"}}return m};k.prototype.openPopup=function(m){a[m](this.options);if(this.options.enableTracking===true){var n={googlePlus:{site:"Google",action:"+1"},facebook:{site:"facebook",action:"like"},twitter:{site:"twitter",action:"tweet"},digg:{site:"digg",action:"add"},delicious:{site:"delicious",action:"add"},stumbleupon:{site:"stumbleupon",action:"add"},linkedin:{site:"linkedin",action:"share"},pinterest:{site:"pinterest",action:"pin"}};_gaq.push(["_trackSocial",n[m].site,n[m].action])}};k.prototype.simulateClick=function(){var m=g(this.element).html();g(this.element).html(m.replace(this.options.total,this.options.total+1))};k.prototype.update=function(m,n){if(m!==""){this.options.url=m}if(n!==""){this.options.text=n}};g.fn[h]=function(n){var m=arguments;if(n===b||typeof n==="object"){return this.each(function(){if(!g.data(this,"plugin_"+h)){g.data(this,"plugin_"+h,new k(this,n))}})}else{if(typeof n==="string"&&n[0]!=="_"&&n!=="init"){return this.each(function(){var o=g.data(this,"plugin_"+h);if(o instanceof k&&typeof o[n]==="function"){o[n].apply(o,Array.prototype.slice.call(m,1))}})}}}})(jQuery,window,document);
/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*!
 * Masonry PACKAGED v3.1.3
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */


(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var f=u[o].apply(u,s);if(void 0!==f)return f}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){var e=document.documentElement,i=function(){};e.addEventListener?i=function(t,e,i){t.addEventListener(e,i,!1)}:e.attachEvent&&(i=function(e,i,n){e[i+n]=n.handleEvent?function(){var e=t.event;e.target=e.target||e.srcElement,n.handleEvent.call(n,e)}:function(){var i=t.event;i.target=i.target||i.srcElement,n.call(e,i)},e.attachEvent("on"+i,e[i+n])});var n=function(){};e.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:e.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var o={bind:i,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",o):t.eventie=o}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype;n.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=a.length;i>e;e++){var n=a[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=s(t);if("none"===n.display)return i();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var u=r.isBorderBox=!(!p||!n[p]||"border-box"!==n[p]),f=0,d=a.length;d>f;f++){var l=a[f],c=n[l];c=o(t,c);var m=parseFloat(c);r[l]=isNaN(m)?0:m}var y=r.paddingLeft+r.paddingRight,g=r.paddingTop+r.paddingBottom,v=r.marginLeft+r.marginRight,_=r.marginTop+r.marginBottom,b=r.borderLeftWidth+r.borderRightWidth,E=r.borderTopWidth+r.borderBottomWidth,L=u&&h,z=e(n.width);z!==!1&&(r.width=z+(L?0:y+b));var S=e(n.height);return S!==!1&&(r.height=S+(L?0:g+E)),r.innerWidth=r.width-(y+b),r.innerHeight=r.height-(g+E),r.outerWidth=r.width+v,r.outerHeight=r.height+_,r}}function o(t,e){if(r||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,o=t.runtimeStyle,s=o&&o.left;return s&&(o.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(o.left=s),e}var h,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=s(t);h=200===e(n.width),i.removeChild(t)}}(),n}var o=document.defaultView,r=o&&o.getComputedStyle,s=r?function(t){return o.getComputedStyle(t,null)}:function(t){return t.currentStyle},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):t.getSize=n(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var n=l[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transition={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=c[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=m(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transition;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transition,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return h&&h.error("Bad "+this.settings.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,_[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function g(t,i){t.prototype[i]=e({},y.prototype[i])}var v=0,_={};return y.prototype.settings={namespace:"outlayer",item:m},y.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,f.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.settings.item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=l(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):d(n)&&(i=n),this[t]=i?l(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){if(!t||!t.length)return this.emitEvent("layoutComplete",[this,t]),void 0;this._itemsOn(t,"layout",function(){this.emitEvent("layoutComplete",[this,t])});for(var i=[],n=0,o=t.length;o>n;n++){var r=t[n],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e,i.push(s)}this._processLayoutQueue(i)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},y.prototype._getContainerSize=u,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=u,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=l(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){var t=l(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},y.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.reveal()}},y.prototype.hide=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.settings.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&_[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return e(n.prototype,y.prototype),g(n,"options"),g(n,"settings"),e(n.prototype.options,i),n.prototype.settings.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,n.prototype.settings.item=n.Item,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var f,d=i[s],l=d.getAttribute(o);try{f=l&&JSON.parse(l)}catch(c){h&&h.error("Error parsing "+o+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var m=new n(d,f);p&&p.data(d,t,m)}}),p&&p.bridget&&p.bridget(t,n),n},y.Item=m,y}var a=t.document,h=t.console,p=t.jQuery,u=function(){},f=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),h={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,u=this.cols+1-r.length,f=0;u>f;f++)this.colYs[a+f]=p;return h},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a=Math.min(this.cols-1,a);for(var h=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(h,this.colYs[p])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth;this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

var PageTransitions = function() {

  var $main, $pages, pagesCount,
    isAnimating = false,
    endCurrPage = false,
    endNextPage = false,
    animEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'MozAnimation': 'animationend', // mozAnimationEnd
      'OAnimation': 'oAnimationEnd',
      'msAnimation': 'MSAnimationEnd',
      'animation': 'animationend'
    },
    // animation end event name
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    // support css animations
    support = Modernizr.cssanimations;

  function init(main) {
    $main = $(main);
    $pages = $main.children('.pt-page');
    pagesCount = $pages.length;

    $pages.removeClass('pt-page-current').each(function() {
      var $page = $(this);
      $page.data('originalClassList', $page.attr('class'));
    }).eq(0).addClass('pt-page-current');

    $main.get(0).className = $main.get(0).className.replace(/\s*pt-item-\d+\s*/ig, ' ');
    $main.addClass('pt-item-1');
    $main.addClass('pt-first');
    if (pagesCount == 1) {
      $main.addClass('pt-last');
    }
  }

  function gotoPage(animation, page) {
    if (isAnimating) {
      return false;
    }

    isAnimating = true;

    var $currPage = $pages.filter('.pt-page-current');

    if (page == 'prev') {
      page = $currPage.index() - 1;
    } else if (typeof(page) != 'number') {
      page = $currPage.index() + 1;
    }

    if (page < 0) {
      page = pagesCount - 1;
    } else if (page >= pagesCount) {
      page = 0;
    }

    $main.get(0).className = $main.get(0).className.replace(/\s?pt-item-\d+\s?/ig, ' ');
    $main.addClass('pt-item-'+(page+1));

    $main.removeClass('pt-first pt-last');
    if (page == 0) {
      $main.addClass('pt-first');
    }
    if (page == (pagesCount - 1)) {
      $main.addClass('pt-last');
    }

    var $nextPage = $pages.eq(page).addClass('pt-page-current'),
      outClass = '',
      inClass = '';

    switch (animation) {
    case 1:
      outClass = 'pt-page-moveToLeft';
      inClass = 'pt-page-moveFromRight';
      break;
    case 2:
      outClass = 'pt-page-moveToRight';
      inClass = 'pt-page-moveFromLeft';
      break;
    case 3:
      outClass = 'pt-page-moveToTop';
      inClass = 'pt-page-moveFromBottom';
      break;
    case 4:
      outClass = 'pt-page-moveToBottom';
      inClass = 'pt-page-moveFromTop';
      break;
    case 5:
      outClass = 'pt-page-fade';
      inClass = 'pt-page-moveFromRight pt-page-ontop';
      break;
    case 6:
      outClass = 'pt-page-fade';
      inClass = 'pt-page-moveFromLeft pt-page-ontop';
      break;
    case 7:
      outClass = 'pt-page-fade';
      inClass = 'pt-page-moveFromBottom pt-page-ontop';
      break;
    case 8:
      outClass = 'pt-page-fade';
      inClass = 'pt-page-moveFromTop pt-page-ontop';
      break;
    case 9:
      outClass = 'pt-page-moveToLeftFade';
      inClass = 'pt-page-moveFromRightFade';
      break;
    case 10:
      outClass = 'pt-page-moveToRightFade';
      inClass = 'pt-page-moveFromLeftFade';
      break;
    case 11:
      outClass = 'pt-page-moveToTopFade';
      inClass = 'pt-page-moveFromBottomFade';
      break;
    case 12:
      outClass = 'pt-page-moveToBottomFade';
      inClass = 'pt-page-moveFromTopFade';
      break;
    case 13:
      outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
      inClass = 'pt-page-moveFromRight';
      break;
    case 14:
      outClass = 'pt-page-moveToRightEasing pt-page-ontop';
      inClass = 'pt-page-moveFromLeft';
      break;
    case 15:
      outClass = 'pt-page-moveToTopEasing pt-page-ontop';
      inClass = 'pt-page-moveFromBottom';
      break;
    case 16:
      outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
      inClass = 'pt-page-moveFromTop';
      break;
    case 17:
      outClass = 'pt-page-scaleDown';
      inClass = 'pt-page-moveFromRight pt-page-ontop';
      break;
    case 18:
      outClass = 'pt-page-scaleDown';
      inClass = 'pt-page-moveFromLeft pt-page-ontop';
      break;
    case 19:
      outClass = 'pt-page-scaleDown';
      inClass = 'pt-page-moveFromBottom pt-page-ontop';
      break;
    case 20:
      outClass = 'pt-page-scaleDown';
      inClass = 'pt-page-moveFromTop pt-page-ontop';
      break;
    case 21:
      outClass = 'pt-page-scaleDown';
      inClass = 'pt-page-scaleUpDown pt-page-delay300';
      break;
    case 22:
      outClass = 'pt-page-scaleDownUp';
      inClass = 'pt-page-scaleUp pt-page-delay300';
      break;
    case 23:
      outClass = 'pt-page-moveToLeft pt-page-ontop';
      inClass = 'pt-page-scaleUp';
      break;
    case 24:
      outClass = 'pt-page-moveToRight pt-page-ontop';
      inClass = 'pt-page-scaleUp';
      break;
    case 25:
      outClass = 'pt-page-moveToTop pt-page-ontop';
      inClass = 'pt-page-scaleUp';
      break;
    case 26:
      outClass = 'pt-page-moveToBottom pt-page-ontop';
      inClass = 'pt-page-scaleUp';
      break;
    case 27:
      outClass = 'pt-page-scaleDownCenter';
      inClass = 'pt-page-scaleUpCenter pt-page-delay400';
      break;
    case 28:
      outClass = 'pt-page-rotateRightSideFirst';
      inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
      break;
    case 29:
      outClass = 'pt-page-rotateLeftSideFirst';
      inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
      break;
    case 30:
      outClass = 'pt-page-rotateTopSideFirst';
      inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
      break;
    case 31:
      outClass = 'pt-page-rotateBottomSideFirst';
      inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
      break;
    case 32:
      outClass = 'pt-page-flipOutRight';
      inClass = 'pt-page-flipInLeft pt-page-delay500';
      break;
    case 33:
      outClass = 'pt-page-flipOutLeft';
      inClass = 'pt-page-flipInRight pt-page-delay500';
      break;
    case 34:
      outClass = 'pt-page-flipOutTop';
      inClass = 'pt-page-flipInBottom pt-page-delay500';
      break;
    case 35:
      outClass = 'pt-page-flipOutBottom';
      inClass = 'pt-page-flipInTop pt-page-delay500';
      break;
    case 36:
      outClass = 'pt-page-rotateFall pt-page-ontop';
      inClass = 'pt-page-scaleUp';
      break;
    case 37:
      outClass = 'pt-page-rotateOutNewspaper';
      inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
      break;
    case 38:
      outClass = 'pt-page-rotatePushLeft';
      inClass = 'pt-page-moveFromRight';
      break;
    case 39:
      outClass = 'pt-page-rotatePushRight';
      inClass = 'pt-page-moveFromLeft';
      break;
    case 40:
      outClass = 'pt-page-rotatePushTop';
      inClass = 'pt-page-moveFromBottom';
      break;
    case 41:
      outClass = 'pt-page-rotatePushBottom';
      inClass = 'pt-page-moveFromTop';
      break;
    case 42:
      outClass = 'pt-page-rotatePushLeft';
      inClass = 'pt-page-rotatePullRight pt-page-delay180';
      break;
    case 43:
      outClass = 'pt-page-rotatePushRight';
      inClass = 'pt-page-rotatePullLeft pt-page-delay180';
      break;
    case 44:
      outClass = 'pt-page-rotatePushTop';
      inClass = 'pt-page-rotatePullBottom pt-page-delay180';
      break;
    case 45:
      outClass = 'pt-page-rotatePushBottom';
      inClass = 'pt-page-rotatePullTop pt-page-delay180';
      break;
    case 46:
      outClass = 'pt-page-rotateFoldLeft';
      inClass = 'pt-page-moveFromRightFade';
      break;
    case 47:
      outClass = 'pt-page-rotateFoldRight';
      inClass = 'pt-page-moveFromLeftFade';
      break;
    case 48:
      outClass = 'pt-page-rotateFoldTop';
      inClass = 'pt-page-moveFromBottomFade';
      break;
    case 49:
      outClass = 'pt-page-rotateFoldBottom';
      inClass = 'pt-page-moveFromTopFade';
      break;
    case 50:
      outClass = 'pt-page-moveToRightFade';
      inClass = 'pt-page-rotateUnfoldLeft';
      break;
    case 51:
      outClass = 'pt-page-moveToLeftFade';
      inClass = 'pt-page-rotateUnfoldRight';
      break;
    case 52:
      outClass = 'pt-page-moveToBottomFade';
      inClass = 'pt-page-rotateUnfoldTop';
      break;
    case 53:
      outClass = 'pt-page-moveToTopFade';
      inClass = 'pt-page-rotateUnfoldBottom';
      break;
    case 54:
      outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
      inClass = 'pt-page-rotateRoomLeftIn';
      break;
    case 55:
      outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
      inClass = 'pt-page-rotateRoomRightIn';
      break;
    case 56:
      outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
      inClass = 'pt-page-rotateRoomTopIn';
      break;
    case 57:
      outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
      inClass = 'pt-page-rotateRoomBottomIn';
      break;
    case 58:
      outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
      inClass = 'pt-page-rotateCubeLeftIn';
      break;
    case 59:
      outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
      inClass = 'pt-page-rotateCubeRightIn';
      break;
    case 60:
      outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
      inClass = 'pt-page-rotateCubeTopIn';
      break;
    case 61:
      outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
      inClass = 'pt-page-rotateCubeBottomIn';
      break;
    case 62:
      outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
      inClass = 'pt-page-rotateCarouselLeftIn';
      break;
    case 63:
      outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
      inClass = 'pt-page-rotateCarouselRightIn';
      break;
    case 64:
      outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
      inClass = 'pt-page-rotateCarouselTopIn';
      break;
    case 65:
      outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
      inClass = 'pt-page-rotateCarouselBottomIn';
      break;
    case 66:
      outClass = 'pt-page-rotateSidesOut';
      inClass = 'pt-page-rotateSidesIn pt-page-delay200';
      break;
    case 67:
      outClass = 'pt-page-rotateSlideOut';
      inClass = 'pt-page-rotateSlideIn';
      break;
    case 68:
        outClass = 'pt-page-fade-out';
        inClass = 'pt-page-fade-in pt-page-delay400';
        break;
    default:
      outClass = 'pt-page-moveToLeft';
      inClass = 'pt-page-moveFromRight';
      break;
    }

    $currPage.addClass(outClass).on(animEndEventName, function() {
      $currPage.off(animEndEventName);
      endCurrPage = true;
      if (endNextPage) {
        onEndAnimation($currPage, $nextPage);
      }
    });

    $nextPage.addClass(inClass).on(animEndEventName, function() {
      $nextPage.off(animEndEventName);
      endNextPage = true;
      if (endCurrPage) {
        onEndAnimation($currPage, $nextPage);
      }
    });

    if (!support) {
      onEndAnimation($currPage, $nextPage);
    }
  }

  function onEndAnimation($outpage, $inpage) {
    endCurrPage = false;
    endNextPage = false;
    resetPage($outpage, $inpage);
    isAnimating = false;
  }

  function resetPage($outpage, $inpage) {
    $outpage.attr('class', $outpage.data('originalClassList'));
    $inpage.attr('class', $inpage.data('originalClassList') + ' pt-page-current');
  }

  return {
    init: init,
    gotoPage: gotoPage
  };

};
/*! jQuery UI - v1.10.2 - 2013-03-27
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */


(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.2",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);
/* http://keith-wood.name/svg.html
   SVG for jQuery v1.4.5.
   Written by Keith Wood (kbwood{at}iinet.com.au) August 2007.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */


(function($) { // Hide scope, no $ conflict

/* SVG manager.
   Use the singleton instance of this class, $.svg, 
   to interact with the SVG functionality. */
function SVGManager() {
	this._settings = []; // Settings to be remembered per SVG object
	this._extensions = []; // List of SVG extensions added to SVGWrapper
		// for each entry [0] is extension name, [1] is extension class (function)
		// the function takes one parameter - the SVGWrapper instance
	this.regional = []; // Localisations, indexed by language, '' for default (English)
	this.regional[''] = {errorLoadingText: 'Error loading',
		notSupportedText: 'This browser does not support SVG'};
	this.local = this.regional['']; // Current localisation
	this._uuid = new Date().getTime();
	this._renesis = detectActiveX('RenesisX.RenesisCtrl');
}

/* Determine whether a given ActiveX control is available.
   @param  classId  (string) the ID for the ActiveX control
   @return  (boolean) true if found, false if not */
function detectActiveX(classId) {
	try {
		return !!(window.ActiveXObject && new ActiveXObject(classId));
	}
	catch (e) {
		return false;
	}
}

var PROP_NAME = 'svgwrapper';

$.extend(SVGManager.prototype, {
	/* Class name added to elements to indicate already configured with SVG. */
	markerClassName: 'hasSVG',

	/* SVG namespace. */
	svgNS: 'http://www.w3.org/2000/svg',
	/* XLink namespace. */
	xlinkNS: 'http://www.w3.org/1999/xlink',

	/* SVG wrapper class. */
	_wrapperClass: SVGWrapper,

	/* Camel-case versions of attribute names containing dashes or are reserved words. */
	_attrNames: {class_: 'class', in_: 'in',
		alignmentBaseline: 'alignment-baseline', baselineShift: 'baseline-shift',
		clipPath: 'clip-path', clipRule: 'clip-rule',
		colorInterpolation: 'color-interpolation',
		colorInterpolationFilters: 'color-interpolation-filters',
		colorRendering: 'color-rendering', dominantBaseline: 'dominant-baseline',
		enableBackground: 'enable-background', fillOpacity: 'fill-opacity',
		fillRule: 'fill-rule', floodColor: 'flood-color',
		floodOpacity: 'flood-opacity', fontFamily: 'font-family',
		fontSize: 'font-size', fontSizeAdjust: 'font-size-adjust',
		fontStretch: 'font-stretch', fontStyle: 'font-style',
		fontVariant: 'font-variant', fontWeight: 'font-weight',
		glyphOrientationHorizontal: 'glyph-orientation-horizontal',
		glyphOrientationVertical: 'glyph-orientation-vertical',
		horizAdvX: 'horiz-adv-x', horizOriginX: 'horiz-origin-x',
		imageRendering: 'image-rendering', letterSpacing: 'letter-spacing',
		lightingColor: 'lighting-color', markerEnd: 'marker-end',
		markerMid: 'marker-mid', markerStart: 'marker-start',
		stopColor: 'stop-color', stopOpacity: 'stop-opacity',
		strikethroughPosition: 'strikethrough-position',
		strikethroughThickness: 'strikethrough-thickness',
		strokeDashArray: 'stroke-dasharray', strokeDashOffset: 'stroke-dashoffset',
		strokeLineCap: 'stroke-linecap', strokeLineJoin: 'stroke-linejoin',
		strokeMiterLimit: 'stroke-miterlimit', strokeOpacity: 'stroke-opacity',
		strokeWidth: 'stroke-width', textAnchor: 'text-anchor',
		textDecoration: 'text-decoration', textRendering: 'text-rendering',
		underlinePosition: 'underline-position', underlineThickness: 'underline-thickness',
		vertAdvY: 'vert-adv-y', vertOriginY: 'vert-origin-y',
		wordSpacing: 'word-spacing', writingMode: 'writing-mode'},

	/* Add the SVG object to its container. */
	_attachSVG: function(container, settings) {
		var svg = (container.namespaceURI == this.svgNS ? container : null);
		var container = (svg ? null : container);
		if ($(container || svg).hasClass(this.markerClassName)) {
			return;
		}
		if (typeof settings == 'string') {
			settings = {loadURL: settings};
		}
		else if (typeof settings == 'function') {
			settings = {onLoad: settings};
		}
		$(container || svg).addClass(this.markerClassName);
		try {
			if (!svg) {
				svg = document.createElementNS(this.svgNS, 'svg');
				svg.setAttribute('version', '1.1');
				if (container.clientWidth > 0) {
					svg.setAttribute('width', container.clientWidth);
				}
				if (container.clientHeight > 0) {
					svg.setAttribute('height', container.clientHeight);
				}
				container.appendChild(svg);
			}
			this._afterLoad(container, svg, settings || {});
		}
		catch (e) {
			if ($.browser.msie) {
				if (!container.id) {
					container.id = 'svg' + (this._uuid++);
				}
				this._settings[container.id] = settings;
				container.innerHTML = '<embed type="image/svg+xml" width="100%" ' +
					'height="100%" src="' + (settings.initPath || '') + 'blank.svg" ' +
					'pluginspage="http://www.adobe.com/svg/viewer/install/main.html"/>';
			}
			else {
				container.innerHTML = '<p class="svg_error">' +
					this.local.notSupportedText + '</p>';
			}
		}
	},

	/* SVG callback after loading - register SVG root. */
	_registerSVG: function() {
		for (var i = 0; i < document.embeds.length; i++) { // Check all
			var container = document.embeds[i].parentNode;
			if (!$(container).hasClass($.svg.markerClassName) || // Not SVG
					$.data(container, PROP_NAME)) { // Already done
				continue;
			}
			var svg = null;
			try {
				svg = document.embeds[i].getSVGDocument();
			}
			catch(e) {
				setTimeout($.svg._registerSVG, 250); // Renesis takes longer to load
				return;
			}
			svg = (svg ? svg.documentElement : null);
			if (svg) {
				$.svg._afterLoad(container, svg);
			}
		}
	},

	/* Post-processing once loaded. */
	_afterLoad: function(container, svg, settings) {
		var settings = settings || this._settings[container.id];
		this._settings[container ? container.id : ''] = null;
		var wrapper = new this._wrapperClass(svg, container);
		$.data(container || svg, PROP_NAME, wrapper);
		try {
			if (settings.loadURL) { // Load URL
				wrapper.load(settings.loadURL, settings);
			}
			if (settings.settings) { // Additional settings
				wrapper.configure(settings.settings);
			}
			if (settings.onLoad && !settings.loadURL) { // Onload callback
				settings.onLoad.apply(container || svg, [wrapper]);
			}
		}
		catch (e) {
			alert(e);
		}
	},

	/* Return the SVG wrapper created for a given container.
	   @param  container  (string) selector for the container or
	                      (element) the container for the SVG object or
	                      jQuery collection - first entry is the container
	   @return  (SVGWrapper) the corresponding SVG wrapper element, or null if not attached */
	_getSVG: function(container) {
		container = (typeof container == 'string' ? $(container)[0] :
			(container.jquery ? container[0] : container));
		return $.data(container, PROP_NAME);
	},

	/* Remove the SVG functionality from a div.
	   @param  container  (element) the container for the SVG object */
	_destroySVG: function(container) {
		var $container = $(container);
		if (!$container.hasClass(this.markerClassName)) {
			return;
		}
		$container.removeClass(this.markerClassName);
		if (container.namespaceURI != this.svgNS) {
			$container.empty();
		}
		$.removeData(container, PROP_NAME);
	},

	/* Extend the SVGWrapper object with an embedded class.
	   The constructor function must take a single parameter that is
	   a reference to the owning SVG root object. This allows the 
	   extension to access the basic SVG functionality.
	   @param  name      (string) the name of the SVGWrapper attribute to access the new class
	   @param  extClass  (function) the extension class constructor */
	addExtension: function(name, extClass) {
		this._extensions.push([name, extClass]);
	},

	/* Does this node belong to SVG?
	   @param  node  (element) the node to be tested
	   @return  (boolean) true if an SVG node, false if not */
	isSVGElem: function(node) {
		return (node.nodeType == 1 && node.namespaceURI == $.svg.svgNS);
	}
});

/* The main SVG interface, which encapsulates the SVG element.
   Obtain a reference from $().svg('get') */
function SVGWrapper(svg, container) {
	this._svg = svg; // The SVG root node
	this._container = container; // The containing div
	for (var i = 0; i < $.svg._extensions.length; i++) {
		var extension = $.svg._extensions[i];
		this[extension[0]] = new extension[1](this);
	}
}

$.extend(SVGWrapper.prototype, {

	/* Retrieve the width of the SVG object. */
	_width: function() {
		return (this._container ? this._container.clientWidth : this._svg.width);
	},

	/* Retrieve the height of the SVG object. */
	_height: function() {
		return (this._container ? this._container.clientHeight : this._svg.height);
	},

	/* Retrieve the root SVG element.
	   @return  the top-level SVG element */
	root: function() {
		return this._svg;
	},

	/* Configure a SVG node.
	   @param  node      (element, optional) the node to configure
	   @param  settings  (object) additional settings for the root
	   @param  clear     (boolean) true to remove existing attributes first,
	                     false to add to what is already there (optional)
	   @return  (SVGWrapper) this root */
	configure: function(node, settings, clear) {
		if (!node.nodeName) {
			clear = settings;
			settings = node;
			node = this._svg;
		}
		if (clear) {
			for (var i = node.attributes.length - 1; i >= 0; i--) {
				var attr = node.attributes.item(i);
				if (!(attr.nodeName == 'onload' || attr.nodeName == 'version' || 
						attr.nodeName.substring(0, 5) == 'xmlns')) {
					node.attributes.removeNamedItem(attr.nodeName);
				}
			}
		}
		for (var attrName in settings) {
			node.setAttribute($.svg._attrNames[attrName] || attrName, settings[attrName]);
		}
		return this;
	},

	/* Locate a specific element in the SVG document.
	   @param  id  (string) the element's identifier
	   @return  (element) the element reference, or null if not found */
	getElementById: function(id) {
		return this._svg.ownerDocument.getElementById(id);
	},

	/* Change the attributes for a SVG node.
	   @param  element   (SVG element) the node to change
	   @param  settings  (object) the new settings
	   @return  (SVGWrapper) this root */
	change: function(element, settings) {
		if (element) {
			for (var name in settings) {
				if (settings[name] == null) {
					element.removeAttribute($.svg._attrNames[name] || name);
				}
				else {
					element.setAttribute($.svg._attrNames[name] || name, settings[name]);
				}
			}
		}
		return this;
	},

	/* Check for parent being absent and adjust arguments accordingly. */
	_args: function(values, names, optSettings) {
		names.splice(0, 0, 'parent');
		names.splice(names.length, 0, 'settings');
		var args = {};
		var offset = 0;
		if (values[0] != null && values[0].jquery) {
			values[0] = values[0][0];
		}
		if (values[0] != null && !(typeof values[0] == 'object' && values[0].nodeName)) {
			args['parent'] = null;
			offset = 1;
		}
		for (var i = 0; i < values.length; i++) {
			args[names[i + offset]] = values[i];
		}
		if (optSettings) {
			$.each(optSettings, function(i, value) {
				if (typeof args[value] == 'object') {
					args.settings = args[value];
					args[value] = null;
				}
			});
		}
		return args;
	},

	/* Add a title.
	   @param  parent    (element or jQuery) the parent node for the new title (optional)
	   @param  text      (string) the text of the title
	   @param  settings  (object) additional settings for the title (optional)
	   @return  (element) the new title node */
	title: function(parent, text, settings) {
		var args = this._args(arguments, ['text']);
		var node = this._makeNode(args.parent, 'title', args.settings || {});
		node.appendChild(this._svg.ownerDocument.createTextNode(args.text));
		return node;
	},

	/* Add a description.
	   @param  parent    (element or jQuery) the parent node for the new description (optional)
	   @param  text      (string) the text of the description
	   @param  settings  (object) additional settings for the description (optional)
	   @return  (element) the new description node */
	describe: function(parent, text, settings) {
		var args = this._args(arguments, ['text']);
		var node = this._makeNode(args.parent, 'desc', args.settings || {});
		node.appendChild(this._svg.ownerDocument.createTextNode(args.text));
		return node;
	},

	/* Add a definitions node.
	   @param  parent    (element or jQuery) the parent node for the new definitions (optional)
	   @param  id        (string) the ID of this definitions (optional)
	   @param  settings  (object) additional settings for the definitions (optional)
	   @return  (element) the new definitions node */
	defs: function(parent, id, settings) {
		var args = this._args(arguments, ['id'], ['id']);
		return this._makeNode(args.parent, 'defs', $.extend(
			(args.id ? {id: args.id} : {}), args.settings || {}));
	},

	/* Add a symbol definition.
	   @param  parent    (element or jQuery) the parent node for the new symbol (optional)
	   @param  id        (string) the ID of this symbol
	   @param  x1        (number) the left coordinate for this symbol
	   @param  y1        (number) the top coordinate for this symbol
	   @param  width     (number) the width of this symbol
	   @param  height    (number) the height of this symbol
	   @param  settings  (object) additional settings for the symbol (optional)
	   @return  (element) the new symbol node */
	symbol: function(parent, id, x1, y1, width, height, settings) {
		var args = this._args(arguments, ['id', 'x1', 'y1', 'width', 'height']);
		return this._makeNode(args.parent, 'symbol', $.extend({id: args.id,
			viewBox: args.x1 + ' ' + args.y1 + ' ' + args.width + ' ' + args.height},
			args.settings || {}));
	},

	/* Add a marker definition.
	   @param  parent    (element or jQuery) the parent node for the new marker (optional)
	   @param  id        (string) the ID of this marker
	   @param  refX      (number) the x-coordinate for the reference point
	   @param  refY      (number) the y-coordinate for the reference point
	   @param  mWidth    (number) the marker viewport width
	   @param  mHeight   (number) the marker viewport height
	   @param  orient    (string or int) 'auto' or angle (degrees) (optional)
	   @param  settings  (object) additional settings for the marker (optional)
	   @return  (element) the new marker node */
	marker: function(parent, id, refX, refY, mWidth, mHeight, orient, settings) {
		var args = this._args(arguments, ['id', 'refX', 'refY',
			'mWidth', 'mHeight', 'orient'], ['orient']);
		return this._makeNode(args.parent, 'marker', $.extend(
			{id: args.id, refX: args.refX, refY: args.refY, markerWidth: args.mWidth, 
			markerHeight: args.mHeight, orient: args.orient || 'auto'}, args.settings || {}));
	},

	/* Add a style node.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  styles    (string) the CSS styles
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new style node */
	style: function(parent, styles, settings) {
		var args = this._args(arguments, ['styles']);
		var node = this._makeNode(args.parent, 'style', $.extend(
			{type: 'text/css'}, args.settings || {}));
		node.appendChild(this._svg.ownerDocument.createTextNode(args.styles));
		if ($.browser.opera) {
			$('head').append('<style type="text/css">' + args.styles + '</style>');
		}
		return node;
	},

	/* Add a script node.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  script    (string) the JavaScript code
	   @param  type      (string) the MIME type for the code (optional, default 'text/javascript')
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new script node */
	script: function(parent, script, type, settings) {
		var args = this._args(arguments, ['script', 'type'], ['type']);
		var node = this._makeNode(args.parent, 'script', $.extend(
			{type: args.type || 'text/javascript'}, args.settings || {}));
		node.appendChild(this._svg.ownerDocument.createTextNode(args.script));
		if (!$.browser.mozilla) {
			$.globalEval(args.script);
		}
		return node;
	},

	/* Add a linear gradient definition.
	   Specify all of x1, y1, x2, y2 or none of them.
	   @param  parent    (element or jQuery) the parent node for the new gradient (optional)
	   @param  id        (string) the ID for this gradient
	   @param  stops     (string[][]) the gradient stops, each entry is
	                     [0] is offset (0.0-1.0 or 0%-100%), [1] is colour, 
						 [2] is opacity (optional)
	   @param  x1        (number) the x-coordinate of the gradient start (optional)
	   @param  y1        (number) the y-coordinate of the gradient start (optional)
	   @param  x2        (number) the x-coordinate of the gradient end (optional)
	   @param  y2        (number) the y-coordinate of the gradient end (optional)
	   @param  settings  (object) additional settings for the gradient (optional)
	   @return  (element) the new gradient node */
	linearGradient: function(parent, id, stops, x1, y1, x2, y2, settings) {
		var args = this._args(arguments,
			['id', 'stops', 'x1', 'y1', 'x2', 'y2'], ['x1']);
		var sets = $.extend({id: args.id}, 
			(args.x1 != null ? {x1: args.x1, y1: args.y1, x2: args.x2, y2: args.y2} : {}));
		return this._gradient(args.parent, 'linearGradient', 
			$.extend(sets, args.settings || {}), args.stops);
	},

	/* Add a radial gradient definition.
	   Specify all of cx, cy, r, fx, fy or none of them.
	   @param  parent    (element or jQuery) the parent node for the new gradient (optional)
	   @param  id        (string) the ID for this gradient
	   @param  stops     (string[][]) the gradient stops, each entry
	                     [0] is offset, [1] is colour, [2] is opacity (optional)
	   @param  cx        (number) the x-coordinate of the largest circle centre (optional)
	   @param  cy        (number) the y-coordinate of the largest circle centre (optional)
	   @param  r         (number) the radius of the largest circle (optional)
	   @param  fx        (number) the x-coordinate of the gradient focus (optional)
	   @param  fy        (number) the y-coordinate of the gradient focus (optional)
	   @param  settings  (object) additional settings for the gradient (optional)
	   @return  (element) the new gradient node */
	radialGradient: function(parent, id, stops, cx, cy, r, fx, fy, settings) {
		var args = this._args(arguments,
			['id', 'stops', 'cx', 'cy', 'r', 'fx', 'fy'], ['cx']);
		var sets = $.extend({id: args.id}, (args.cx != null ?
			{cx: args.cx, cy: args.cy, r: args.r, fx: args.fx, fy: args.fy} : {}));
		return this._gradient(args.parent, 'radialGradient', 
			$.extend(sets, args.settings || {}), args.stops);
	},

	/* Add a gradient node. */
	_gradient: function(parent, name, settings, stops) {
		var node = this._makeNode(parent, name, settings);
		for (var i = 0; i < stops.length; i++) {
			var stop = stops[i];
			this._makeNode(node, 'stop', $.extend(
				{offset: stop[0], stopColor: stop[1]}, 
				(stop[2] != null ? {stopOpacity: stop[2]} : {})));
		}
		return node;
	},

	/* Add a pattern definition.
	   Specify all of vx, vy, xwidth, vheight or none of them.
	   @param  parent    (element or jQuery) the parent node for the new pattern (optional)
	   @param  id        (string) the ID for this pattern
	   @param  x         (number) the x-coordinate for the left edge of the pattern
	   @param  y         (number) the y-coordinate for the top edge of the pattern
	   @param  width     (number) the width of the pattern
	   @param  height    (number) the height of the pattern
	   @param  vx        (number) the minimum x-coordinate for view box (optional)
	   @param  vy        (number) the minimum y-coordinate for the view box (optional)
	   @param  vwidth    (number) the width of the view box (optional)
	   @param  vheight   (number) the height of the view box (optional)
	   @param  settings  (object) additional settings for the pattern (optional)
	   @return  (element) the new pattern node */
	pattern: function(parent, id, x, y, width, height, vx, vy, vwidth, vheight, settings) {
		var args = this._args(arguments, ['id', 'x', 'y', 'width', 'height',
			'vx', 'vy', 'vwidth', 'vheight'], ['vx']);
		var sets = $.extend({id: args.id, x: args.x, y: args.y,
			width: args.width, height: args.height}, (args.vx != null ?
			{viewBox: args.vx + ' ' + args.vy + ' ' + args.vwidth + ' ' + args.vheight} : {}));
		return this._makeNode(args.parent, 'pattern', $.extend(sets, args.settings || {}));
	},

	/* Add a clip path definition.
	   @param  parent  (element) the parent node for the new element (optional)
	   @param  id      (string) the ID for this path
	   @param  units   (string) either 'userSpaceOnUse' (default) or 'objectBoundingBox' (optional)
	   @return  (element) the new clipPath node */
	clipPath: function(parent, id, units, settings) {
		var args = this._args(arguments, ['id', 'units']);
		args.units = args.units || 'userSpaceOnUse';
		return this._makeNode(args.parent, 'clipPath', $.extend(
			{id: args.id, clipPathUnits: args.units}, args.settings || {}));
	},

	/* Add a mask definition.
	   @param  parent    (element or jQuery) the parent node for the new mask (optional)
	   @param  id        (string) the ID for this mask
	   @param  x         (number) the x-coordinate for the left edge of the mask
	   @param  y         (number) the y-coordinate for the top edge of the mask
	   @param  width     (number) the width of the mask
	   @param  height    (number) the height of the mask
	   @param  settings  (object) additional settings for the mask (optional)
	   @return  (element) the new mask node */
	mask: function(parent, id, x, y, width, height, settings) {
		var args = this._args(arguments, ['id', 'x', 'y', 'width', 'height']);
		return this._makeNode(args.parent, 'mask', $.extend(
			{id: args.id, x: args.x, y: args.y, width: args.width, height: args.height},
			args.settings || {}));
	},

	/* Create a new path object.
	   @return  (SVGPath) a new path object */
	createPath: function() {
		return new SVGPath();
	},

	/* Create a new text object.
	   @return  (SVGText) a new text object */
	createText: function() {
		return new SVGText();
	},

	/* Add an embedded SVG element.
	   Specify all of vx, vy, vwidth, vheight or none of them.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  x         (number) the x-coordinate for the left edge of the node
	   @param  y         (number) the y-coordinate for the top edge of the node
	   @param  width     (number) the width of the node
	   @param  height    (number) the height of the node
	   @param  vx        (number) the minimum x-coordinate for view box (optional)
	   @param  vy        (number) the minimum y-coordinate for the view box (optional)
	   @param  vwidth    (number) the width of the view box (optional)
	   @param  vheight   (number) the height of the view box (optional)
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new node */
	svg: function(parent, x, y, width, height, vx, vy, vwidth, vheight, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height',
			'vx', 'vy', 'vwidth', 'vheight'], ['vx']);
		var sets = $.extend({x: args.x, y: args.y, width: args.width, height: args.height}, 
			(args.vx != null ? {viewBox: args.vx + ' ' + args.vy + ' ' +
			args.vwidth + ' ' + args.vheight} : {}));
		return this._makeNode(args.parent, 'svg', $.extend(sets, args.settings || {}));
	},

	/* Create a group.
	   @param  parent    (element or jQuery) the parent node for the new group (optional)
	   @param  id        (string) the ID of this group (optional)
	   @param  settings  (object) additional settings for the group (optional)
	   @return  (element) the new group node */
	group: function(parent, id, settings) {
		var args = this._args(arguments, ['id'], ['id']);
		return this._makeNode(args.parent, 'g', $.extend({id: args.id}, args.settings || {}));
	},

	/* Add a usage reference.
	   Specify all of x, y, width, height or none of them.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  x         (number) the x-coordinate for the left edge of the node (optional)
	   @param  y         (number) the y-coordinate for the top edge of the node (optional)
	   @param  width     (number) the width of the node (optional)
	   @param  height    (number) the height of the node (optional)
	   @param  ref       (string) the ID of the definition node
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new node */
	use: function(parent, x, y, width, height, ref, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height', 'ref']);
		if (typeof args.x == 'string') {
			args.ref = args.x;
			args.settings = args.y;
			args.x = args.y = args.width = args.height = null;
		}
		var node = this._makeNode(args.parent, 'use', $.extend(
			{x: args.x, y: args.y, width: args.width, height: args.height},
			args.settings || {}));
		node.setAttributeNS($.svg.xlinkNS, 'href', args.ref);
		return node;
	},

	/* Add a link, which applies to all child elements.
	   @param  parent    (element or jQuery) the parent node for the new link (optional)
	   @param  ref       (string) the target URL
	   @param  settings  (object) additional settings for the link (optional)
	   @return  (element) the new link node */
	link: function(parent, ref, settings) {
		var args = this._args(arguments, ['ref']);
		var node = this._makeNode(args.parent, 'a', args.settings);
		node.setAttributeNS($.svg.xlinkNS, 'href', args.ref);
		return node;
	},

	/* Add an image.
	   @param  parent    (element or jQuery) the parent node for the new image (optional)
	   @param  x         (number) the x-coordinate for the left edge of the image
	   @param  y         (number) the y-coordinate for the top edge of the image
	   @param  width     (number) the width of the image
	   @param  height    (number) the height of the image
	   @param  ref       (string) the path to the image
	   @param  settings  (object) additional settings for the image (optional)
	   @return  (element) the new image node */
	image: function(parent, x, y, width, height, ref, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height', 'ref']);
		var node = this._makeNode(args.parent, 'image', $.extend(
			{x: args.x, y: args.y, width: args.width, height: args.height},
			args.settings || {}));
		node.setAttributeNS($.svg.xlinkNS, 'href', args.ref);
		return node;
	},

	/* Draw a path.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  path      (string or SVGPath) the path to draw
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	path: function(parent, path, settings) {
		var args = this._args(arguments, ['path']);
		return this._makeNode(args.parent, 'path', $.extend(
			{d: (args.path.path ? args.path.path() : args.path)}, args.settings || {}));
	},

	/* Draw a rectangle.
	   Specify both of rx and ry or neither.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  x         (number) the x-coordinate for the left edge of the rectangle
	   @param  y         (number) the y-coordinate for the top edge of the rectangle
	   @param  width     (number) the width of the rectangle
	   @param  height    (number) the height of the rectangle
	   @param  rx        (number) the x-radius of the ellipse for the rounded corners (optional)
	   @param  ry        (number) the y-radius of the ellipse for the rounded corners (optional)
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	rect: function(parent, x, y, width, height, rx, ry, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height', 'rx', 'ry'], ['rx']);
		return this._makeNode(args.parent, 'rect', $.extend(
			{x: args.x, y: args.y, width: args.width, height: args.height},
			(args.rx ? {rx: args.rx, ry: args.ry} : {}), args.settings || {}));
	},

	/* Draw a circle.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  cx        (number) the x-coordinate for the centre of the circle
	   @param  cy        (number) the y-coordinate for the centre of the circle
	   @param  r         (number) the radius of the circle
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	circle: function(parent, cx, cy, r, settings) {
		var args = this._args(arguments, ['cx', 'cy', 'r']);
		return this._makeNode(args.parent, 'circle', $.extend(
			{cx: args.cx, cy: args.cy, r: args.r}, args.settings || {}));
	},

	/* Draw an ellipse.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  cx        (number) the x-coordinate for the centre of the ellipse
	   @param  cy        (number) the y-coordinate for the centre of the ellipse
	   @param  rx        (number) the x-radius of the ellipse
	   @param  ry        (number) the y-radius of the ellipse
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	ellipse: function(parent, cx, cy, rx, ry, settings) {
		var args = this._args(arguments, ['cx', 'cy', 'rx', 'ry']);
		return this._makeNode(args.parent, 'ellipse', $.extend(
			{cx: args.cx, cy: args.cy, rx: args.rx, ry: args.ry}, args.settings || {}));
	},

	/* Draw a line.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  x1        (number) the x-coordinate for the start of the line
	   @param  y1        (number) the y-coordinate for the start of the line
	   @param  x2        (number) the x-coordinate for the end of the line
	   @param  y2        (number) the y-coordinate for the end of the line
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	line: function(parent, x1, y1, x2, y2, settings) {
		var args = this._args(arguments, ['x1', 'y1', 'x2', 'y2']);
		return this._makeNode(args.parent, 'line', $.extend(
			{x1: args.x1, y1: args.y1, x2: args.x2, y2: args.y2}, args.settings || {}));
	},

	/* Draw a polygonal line.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  points    (number[][]) the x-/y-coordinates for the points on the line
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	polyline: function(parent, points, settings) {
		var args = this._args(arguments, ['points']);
		return this._poly(args.parent, 'polyline', args.points, args.settings);
	},

	/* Draw a polygonal shape.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  points    (number[][]) the x-/y-coordinates for the points on the shape
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	polygon: function(parent, points, settings) {
		var args = this._args(arguments, ['points']);
		return this._poly(args.parent, 'polygon', args.points, args.settings);
	},

	/* Draw a polygonal line or shape. */
	_poly: function(parent, name, points, settings) {
		var ps = '';
		for (var i = 0; i < points.length; i++) {
			ps += points[i].join() + ' ';
		}
		return this._makeNode(parent, name, $.extend(
			{points: $.trim(ps)}, settings || {}));
	},

	/* Draw text.
	   Specify both of x and y or neither of them.
	   @param  parent    (element or jQuery) the parent node for the text (optional)
	   @param  x         (number or number[]) the x-coordinate(s) for the text (optional)
	   @param  y         (number or number[]) the y-coordinate(s) for the text (optional)
	   @param  value     (string) the text content or
	                     (SVGText) text with spans and references
	   @param  settings  (object) additional settings for the text (optional)
	   @return  (element) the new text node */
	text: function(parent, x, y, value, settings) {
		var args = this._args(arguments, ['x', 'y', 'value']);
		if (typeof args.x == 'string' && arguments.length < 4) {
			args.value = args.x;
			args.settings = args.y;
			args.x = args.y = null;
		}
		return this._text(args.parent, 'text', args.value, $.extend(
			{x: (args.x && isArray(args.x) ? args.x.join(' ') : args.x),
			y: (args.y && isArray(args.y) ? args.y.join(' ') : args.y)}, 
			args.settings || {}));
	},

	/* Draw text along a path.
	   @param  parent    (element or jQuery) the parent node for the text (optional)
	   @param  path      (string) the ID of the path
	   @param  value     (string) the text content or
	                     (SVGText) text with spans and references
	   @param  settings  (object) additional settings for the text (optional)
	   @return  (element) the new text node */
	textpath: function(parent, path, value, settings) {
		var args = this._args(arguments, ['path', 'value']);
		var node = this._text(args.parent, 'textPath', args.value, args.settings || {});
		node.setAttributeNS($.svg.xlinkNS, 'href', args.path);
		return node;
	},

	/* Draw text. */
	_text: function(parent, name, value, settings) {
		var node = this._makeNode(parent, name, settings);
		if (typeof value == 'string') {
			node.appendChild(node.ownerDocument.createTextNode(value));
		}
		else {
			for (var i = 0; i < value._parts.length; i++) {
				var part = value._parts[i];
				if (part[0] == 'tspan') {
					var child = this._makeNode(node, part[0], part[2]);
					child.appendChild(node.ownerDocument.createTextNode(part[1]));
					node.appendChild(child);
				}
				else if (part[0] == 'tref') {
					var child = this._makeNode(node, part[0], part[2]);
					child.setAttributeNS($.svg.xlinkNS, 'href', part[1]);
					node.appendChild(child);
				}
				else if (part[0] == 'textpath') {
					var set = $.extend({}, part[2]);
					set.href = null;
					var child = this._makeNode(node, part[0], set);
					child.setAttributeNS($.svg.xlinkNS, 'href', part[2].href);
					child.appendChild(node.ownerDocument.createTextNode(part[1]));
					node.appendChild(child);
				}
				else { // straight text
					node.appendChild(node.ownerDocument.createTextNode(part[1]));
				}
			}
		}
		return node;
	},

	/* Add a custom SVG element.
	   @param  parent    (element or jQuery) the parent node for the new element (optional)
	   @param  name      (string) the name of the element
	   @param  settings  (object) additional settings for the element (optional)
	   @return  (element) the new custom node */
	other: function(parent, name, settings) {
		var args = this._args(arguments, ['name']);
		return this._makeNode(args.parent, args.name, args.settings || {});
	},

	/* Create a shape node with the given settings. */
	_makeNode: function(parent, name, settings) {
		parent = parent || this._svg;
		var node = this._svg.ownerDocument.createElementNS($.svg.svgNS, name);
		for (var name in settings) {
			var value = settings[name];
			if (value != null && value != null && 
					(typeof value != 'string' || value != '')) {
				node.setAttribute($.svg._attrNames[name] || name, value);
			}
		}
		parent.appendChild(node);
		return node;
	},

	/* Add an existing SVG node to the diagram.
	   @param  parent  (element or jQuery) the parent node for the new node (optional)
	   @param  node    (element) the new node to add or
	                   (string) the jQuery selector for the node or
	                   (jQuery collection) set of nodes to add
	   @return  (SVGWrapper) this wrapper */
	add: function(parent, node) {
		var args = this._args((arguments.length == 1 ? [null, parent] : arguments), ['node']);
		var svg = this;
		args.parent = args.parent || this._svg;
		args.node = (args.node.jquery ? args.node : $(args.node));
		try {
			if ($.svg._renesis) {
				throw 'Force traversal';
			}
			args.parent.appendChild(args.node.cloneNode(true));
		}
		catch (e) {
			args.node.each(function() {
				var child = svg._cloneAsSVG(this);
				if (child) {
					args.parent.appendChild(child);
				}
			});
		}
		return this;
	},

	/* Clone an existing SVG node and add it to the diagram.
	   @param  parent  (element or jQuery) the parent node for the new node (optional)
	   @param  node    (element) the new node to add or
	                   (string) the jQuery selector for the node or
	                   (jQuery collection) set of nodes to add
	   @return  (element[]) collection of new nodes */
	clone: function(parent, node) {
		var svg = this;
		var args = this._args((arguments.length == 1 ? [null, parent] : arguments), ['node']);
		args.parent = args.parent || this._svg;
		args.node = (args.node.jquery ? args.node : $(args.node));
		var newNodes = [];
		args.node.each(function() {
			var child = svg._cloneAsSVG(this);
			if (child) {
				child.id = '';
				args.parent.appendChild(child);
				newNodes.push(child);
			}
		});
		return newNodes;
	},

	/* SVG nodes must belong to the SVG namespace, so clone and ensure this is so.
	   @param  node  (element) the SVG node to clone
	   @return  (element) the cloned node */
	_cloneAsSVG: function(node) {
		var newNode = null;
		if (node.nodeType == 1) { // element
			newNode = this._svg.ownerDocument.createElementNS(
				$.svg.svgNS, this._checkName(node.nodeName));
			for (var i = 0; i < node.attributes.length; i++) {
				var attr = node.attributes.item(i);
				if (attr.nodeName != 'xmlns' && attr.nodeValue) {
					if (attr.prefix == 'xlink') {
						newNode.setAttributeNS($.svg.xlinkNS,
							attr.localName || attr.baseName, attr.nodeValue);
					}
					else {
						newNode.setAttribute(this._checkName(attr.nodeName), attr.nodeValue);
					}
				}
			}
			for (var i = 0; i < node.childNodes.length; i++) {
				var child = this._cloneAsSVG(node.childNodes[i]);
				if (child) {
					newNode.appendChild(child);
				}
			}
		}
		else if (node.nodeType == 3) { // text
			if ($.trim(node.nodeValue)) {
				newNode = this._svg.ownerDocument.createTextNode(node.nodeValue);
			}
		}
		else if (node.nodeType == 4) { // CDATA
			if ($.trim(node.nodeValue)) {
				try {
					newNode = this._svg.ownerDocument.createCDATASection(node.nodeValue);
				}
				catch (e) {
					newNode = this._svg.ownerDocument.createTextNode(
						node.nodeValue.replace(/&/g, '&amp;').
						replace(/</g, '&lt;').replace(/>/g, '&gt;'));
				}
			}
		}
		return newNode;
	},

	/* Node names must be lower case and without SVG namespace prefix. */
	_checkName: function(name) {
		name = (name.substring(0, 1) >= 'A' && name.substring(0, 1) <= 'Z' ?
			name.toLowerCase() : name);
		return (name.substring(0, 4) == 'svg:' ? name.substring(4) : name);
	},

	/* Load an external SVG document.
	   @param  url       (string) the location of the SVG document or
	                     the actual SVG content
	   @param  settings  (boolean) see addTo below or
	                     (function) see onLoad below or
	                     (object) additional settings for the load with attributes below:
	                       addTo       (boolean) true to add to what's already there,
	                                   or false to clear the canvas first
						   changeSize  (boolean) true to allow the canvas size to change,
	                                   or false to retain the original
	                       onLoad      (function) callback after the document has loaded,
	                                   'this' is the container, receives SVG object and
	                                   optional error message as a parameter
	                       parent      (string or element or jQuery) the parent to load
	                                   into, defaults to top-level svg element
	   @return  (SVGWrapper) this root */
	load: function(url, settings) {
		settings = (typeof settings == 'boolean' ? {addTo: settings} :
			(typeof settings == 'function' ? {onLoad: settings} :
			(typeof settings == 'string' ? {parent: settings} : 
			(typeof settings == 'object' && settings.nodeName ? {parent: settings} :
			(typeof settings == 'object' && settings.jquery ? {parent: settings} :
			settings || {})))));
		if (!settings.parent && !settings.addTo) {
			this.clear(false);
		}
		var size = [this._svg.getAttribute('width'), this._svg.getAttribute('height')];
		var wrapper = this;
		// Report a problem with the load
		var reportError = function(message) {
			message = $.svg.local.errorLoadingText + ': ' + message;
			if (settings.onLoad) {
				settings.onLoad.apply(wrapper._container || wrapper._svg, [wrapper, message]);
			}
			else {
				wrapper.text(null, 10, 20, message);
			}
		};
		// Create a DOM from SVG content
		var loadXML4IE = function(data) {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.validateOnParse = false;
			xml.resolveExternals = false;
			xml.async = false;
			xml.loadXML(data);
			if (xml.parseError.errorCode != 0) {
				reportError(xml.parseError.reason);
				return null;
			}
			return xml;
		};
		// Load the SVG DOM
		var loadSVG = function(data) {
			if (!data) {
				return;
			}
			if (data.documentElement.nodeName != 'svg') {
				var errors = data.getElementsByTagName('parsererror');
				var messages = (errors.length ? errors[0].getElementsByTagName('div') : []); // Safari
				reportError(!errors.length ? '???' :
					(messages.length ? messages[0] : errors[0]).firstChild.nodeValue);
				return;
			}
			var parent = (settings.parent ? $(settings.parent)[0] : wrapper._svg);
			var attrs = {};
			for (var i = 0; i < data.documentElement.attributes.length; i++) {
				var attr = data.documentElement.attributes.item(i);
				if (!(attr.nodeName == 'version' || attr.nodeName.substring(0, 5) == 'xmlns')) {
					attrs[attr.nodeName] = attr.nodeValue;
				}
			}
			wrapper.configure(parent, attrs, !settings.parent);
			var nodes = data.documentElement.childNodes;
			for (var i = 0; i < nodes.length; i++) {
				try {
					if ($.svg._renesis) {
						throw 'Force traversal';
					}
					parent.appendChild(wrapper._svg.ownerDocument.importNode(nodes[i], true));
					if (nodes[i].nodeName == 'script') {
						$.globalEval(nodes[i].textContent);
					}
				}
				catch (e) {
					wrapper.add(parent, nodes[i]);
				}
			}
			if (!settings.changeSize) {
				wrapper.configure(parent, {width: size[0], height: size[1]});
			}
			if (settings.onLoad) {
				settings.onLoad.apply(wrapper._container || wrapper._svg, [wrapper]);
			}
		};
		if (url.match('<svg')) { // Inline SVG
			loadSVG($.browser.msie ? loadXML4IE(url) :
				new DOMParser().parseFromString(url, 'text/xml'));
		}
		else { // Remote SVG
			$.ajax({url: url, dataType: ($.browser.msie ? 'text' : 'xml'),
				success: function(xml) {
					loadSVG($.browser.msie ? loadXML4IE(xml) : xml);
				}, error: function(http, message, exc) {
					reportError(message + (exc ? ' ' + exc.message : ''));
				}});
		}
		return this;
	},

	/* Delete a specified node.
	   @param  node  (element or jQuery) the drawing node to remove
	   @return  (SVGWrapper) this root */
	remove: function(node) {
		node = (node.jquery ? node[0] : node);
		node.parentNode.removeChild(node);
		return this;
	},

	/* Delete everything in the current document.
	   @param  attrsToo  (boolean) true to clear any root attributes as well,
	                     false to leave them (optional)
	   @return  (SVGWrapper) this root */
	clear: function(attrsToo) {
		if (attrsToo) {
			this.configure({}, true);
		}
		while (this._svg.firstChild) {
			this._svg.removeChild(this._svg.firstChild);
		}
		return this;
	},

	/* Serialise the current diagram into an SVG text document.
	   @param  node  (SVG element) the starting node (optional)
	   @return  (string) the SVG as text */
	toSVG: function(node) {
		node = node || this._svg;
		return (typeof XMLSerializer == 'undefined' ? this._toSVG(node) :
			new XMLSerializer().serializeToString(node));
	},

	/* Serialise one node in the SVG hierarchy. */
	_toSVG: function(node) {
		var svgDoc = '';
		if (!node) {
			return svgDoc;
		}
		if (node.nodeType == 3) { // Text
			svgDoc = node.nodeValue;
		}
		else if (node.nodeType == 4) { // CDATA
			svgDoc = '<![CDATA[' + node.nodeValue + ']]>';
		}
		else { // Element
			svgDoc = '<' + node.nodeName;
			if (node.attributes) {
				for (var i = 0; i < node.attributes.length; i++) {
					var attr = node.attributes.item(i);
					if (!($.trim(attr.nodeValue) == '' || attr.nodeValue.match(/^\[object/) ||
							attr.nodeValue.match(/^function/))) {
						svgDoc += ' ' + (attr.namespaceURI == $.svg.xlinkNS ? 'xlink:' : '') + 
							attr.nodeName + '="' + attr.nodeValue + '"';
					}
				}
			}	
			if (node.firstChild) {
				svgDoc += '>';
				var child = node.firstChild;
				while (child) {
					svgDoc += this._toSVG(child);
					child = child.nextSibling;
				}
				svgDoc += '</' + node.nodeName + '>';
			}
				else {
				svgDoc += '/>';
			}
		}
		return svgDoc;
	}
});

/* Helper to generate an SVG path.
   Obtain an instance from the SVGWrapper object.
   String calls together to generate the path and use its value:
   var path = root.createPath();
   root.path(null, path.move(100, 100).line(300, 100).line(200, 300).close(), {fill: 'red'});
   or
   root.path(null, path.move(100, 100).line([[300, 100], [200, 300]]).close(), {fill: 'red'}); */
function SVGPath() {
	this._path = '';
}

$.extend(SVGPath.prototype, {
	/* Prepare to create a new path.
	   @return  (SVGPath) this path */
	reset: function() {
		this._path = '';
		return this;
	},

	/* Move the pointer to a position.
	   @param  x         (number) x-coordinate to move to or
	                     (number[][]) x-/y-coordinates to move to
	   @param  y         (number) y-coordinate to move to (omitted if x is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	move: function(x, y, relative) {
		relative = (isArray(x) ? y : relative);
		return this._coords((relative ? 'm' : 'M'), x, y);
	},

	/* Draw a line to a position.
	   @param  x         (number) x-coordinate to move to or
	                     (number[][]) x-/y-coordinates to move to
	   @param  y         (number) y-coordinate to move to (omitted if x is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	line: function(x, y, relative) {
		relative = (isArray(x) ? y : relative);
		return this._coords((relative ? 'l' : 'L'), x, y);
	},

	/* Draw a horizontal line to a position.
	   @param  x         (number) x-coordinate to draw to or
	                     (number[]) x-coordinates to draw to
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	horiz: function(x, relative) {
		this._path += (relative ? 'h' : 'H') + (isArray(x) ? x.join(' ') : x);
		return this;
	},

	/* Draw a vertical line to a position.
	   @param  y         (number) y-coordinate to draw to or
	                     (number[]) y-coordinates to draw to
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	vert: function(y, relative) {
		this._path += (relative ? 'v' : 'V') + (isArray(y) ? y.join(' ') : y);
		return this;
	},

	/* Draw a cubic Bézier curve.
	   @param  x1        (number) x-coordinate of beginning control point or
	                     (number[][]) x-/y-coordinates of control and end points to draw to
	   @param  y1        (number) y-coordinate of beginning control point (omitted if x1 is array)
	   @param  x2        (number) x-coordinate of ending control point (omitted if x1 is array)
	   @param  y2        (number) y-coordinate of ending control point (omitted if x1 is array)
	   @param  x         (number) x-coordinate of curve end (omitted if x1 is array)
	   @param  y         (number) y-coordinate of curve end (omitted if x1 is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	curveC: function(x1, y1, x2, y2, x, y, relative) {
		relative = (isArray(x1) ? y1 : relative);
		return this._coords((relative ? 'c' : 'C'), x1, y1, x2, y2, x, y);
	},

	/* Continue a cubic Bézier curve.
	   Starting control point is the reflection of the previous end control point.
	   @param  x2        (number) x-coordinate of ending control point or
	                     (number[][]) x-/y-coordinates of control and end points to draw to
	   @param  y2        (number) y-coordinate of ending control point (omitted if x2 is array)
	   @param  x         (number) x-coordinate of curve end (omitted if x2 is array)
	   @param  y         (number) y-coordinate of curve end (omitted if x2 is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	smoothC: function(x2, y2, x, y, relative) {
		relative = (isArray(x2) ? y2 : relative);
		return this._coords((relative ? 's' : 'S'), x2, y2, x, y);
	},

	/* Draw a quadratic Bézier curve.
	   @param  x1        (number) x-coordinate of control point or
	                     (number[][]) x-/y-coordinates of control and end points to draw to
	   @param  y1        (number) y-coordinate of control point (omitted if x1 is array)
	   @param  x         (number) x-coordinate of curve end (omitted if x1 is array)
	   @param  y         (number) y-coordinate of curve end (omitted if x1 is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	curveQ: function(x1, y1, x, y, relative) {
		relative = (isArray(x1) ? y1 : relative);
		return this._coords((relative ? 'q' : 'Q'), x1, y1, x, y);
	},

	/* Continue a quadratic Bézier curve.
	   Control point is the reflection of the previous control point.
	   @param  x         (number) x-coordinate of curve end or
	                     (number[][]) x-/y-coordinates of points to draw to
	   @param  y         (number) y-coordinate of curve end (omitted if x is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	smoothQ: function(x, y, relative) {
		relative = (isArray(x) ? y : relative);
		return this._coords((relative ? 't' : 'T'), x, y);
	},

	/* Generate a path command with (a list of) coordinates. */
	_coords: function(cmd, x1, y1, x2, y2, x3, y3) {
		if (isArray(x1)) {
			for (var i = 0; i < x1.length; i++) {
				var cs = x1[i];
				this._path += (i == 0 ? cmd : ' ') + cs[0] + ',' + cs[1] +
					(cs.length < 4 ? '' : ' ' + cs[2] + ',' + cs[3] +
					(cs.length < 6 ? '': ' ' + cs[4] + ',' + cs[5]));
			}
		}
		else {
			this._path += cmd + x1 + ',' + y1 + 
				(x2 == null ? '' : ' ' + x2 + ',' + y2 +
				(x3 == null ? '' : ' ' + x3 + ',' + y3));
		}
		return this;
	},

	/* Draw an arc to a position.
	   @param  rx         (number) x-radius of arc or
	                      (number/boolean[][]) x-/y-coordinates and flags for points to draw to
	   @param  ry         (number) y-radius of arc (omitted if rx is array)
	   @param  xRotate    (number) x-axis rotation (degrees, clockwise) (omitted if rx is array)
	   @param  large      (boolean) true to draw the large part of the arc,
	                      false to draw the small part (omitted if rx is array)
	   @param  clockwise  (boolean) true to draw the clockwise arc,
	                      false to draw the anti-clockwise arc (omitted if rx is array)
	   @param  x          (number) x-coordinate of arc end (omitted if rx is array)
	   @param  y          (number) y-coordinate of arc end (omitted if rx is array)
	   @param  relative   (boolean) true for coordinates relative to the current point,
	                      false for coordinates being absolute
	   @return  (SVGPath) this path */
	arc: function(rx, ry, xRotate, large, clockwise, x, y, relative) {
		relative = (isArray(rx) ? ry : relative);
		this._path += (relative ? 'a' : 'A');
		if (isArray(rx)) {
			for (var i = 0; i < rx.length; i++) {
				var cs = rx[i];
				this._path += (i == 0 ? '' : ' ') + cs[0] + ',' + cs[1] + ' ' +
					cs[2] + ' ' + (cs[3] ? '1' : '0') + ',' +
					(cs[4] ? '1' : '0') + ' ' + cs[5] + ',' + cs[6];
			}
		}
		else {
			this._path += rx + ',' + ry + ' ' + xRotate + ' ' +
				(large ? '1' : '0') + ',' + (clockwise ? '1' : '0') + ' ' + x + ',' + y;
		}
		return this;
	},

	/* Close the current path.
	   @return  (SVGPath) this path */
	close: function() {
		this._path += 'z';
		return this;
	},

	/* Return the string rendering of the specified path.
	   @return  (string) stringified path */
	path: function() {
		return this._path;
	}
});

SVGPath.prototype.moveTo = SVGPath.prototype.move;
SVGPath.prototype.lineTo = SVGPath.prototype.line;
SVGPath.prototype.horizTo = SVGPath.prototype.horiz;
SVGPath.prototype.vertTo = SVGPath.prototype.vert;
SVGPath.prototype.curveCTo = SVGPath.prototype.curveC;
SVGPath.prototype.smoothCTo = SVGPath.prototype.smoothC;
SVGPath.prototype.curveQTo = SVGPath.prototype.curveQ;
SVGPath.prototype.smoothQTo = SVGPath.prototype.smoothQ;
SVGPath.prototype.arcTo = SVGPath.prototype.arc;

/* Helper to generate an SVG text object.
   Obtain an instance from the SVGWrapper object.
   String calls together to generate the text and use its value:
   var text = root.createText();
   root.text(null, x, y, text.string('This is ').
     span('red', {fill: 'red'}).string('!'), {fill: 'blue'}); */
function SVGText() {
	this._parts = []; // The components of the text object
}

$.extend(SVGText.prototype, {
	/* Prepare to create a new text object.
	   @return  (SVGText) this text */
	reset: function() {
		this._parts = [];
		return this;
	},

	/* Add a straight string value.
	   @param  value  (string) the actual text
	   @return  (SVGText) this text object */
	string: function(value) {
		this._parts[this._parts.length] = ['text', value];
		return this;
	},

	/* Add a separate text span that has its own settings.
	   @param  value     (string) the actual text
	   @param  settings  (object) the settings for this text
	   @return  (SVGText) this text object */
	span: function(value, settings) {
		this._parts[this._parts.length] = ['tspan', value, settings];
		return this;
	},

	/* Add a reference to a previously defined text string.
	   @param  id        (string) the ID of the actual text
	   @param  settings  (object) the settings for this text
	   @return  (SVGText) this text object */
	ref: function(id, settings) {
		this._parts[this._parts.length] = ['tref', id, settings];
		return this;
	},

	/* Add text drawn along a path.
	   @param  id        (string) the ID of the path
	   @param  value     (string) the actual text
	   @param  settings  (object) the settings for this text
	   @return  (SVGText) this text object */
	path: function(id, value, settings) {
		this._parts[this._parts.length] = ['textpath', value, 
			$.extend({href: id}, settings || {})];
		return this;
	}
});

/* Attach the SVG functionality to a jQuery selection.
   @param  command  (string) the command to run (optional, default 'attach')
   @param  options  (object) the new settings to use for these SVG instances
   @return jQuery (object) for chaining further calls */
$.fn.svg = function(options) {
	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && options == 'get') {
		return $.svg['_' + options + 'SVG'].apply($.svg, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		if (typeof options == 'string') {
			$.svg['_' + options + 'SVG'].apply($.svg, [this].concat(otherArgs));
		}
		else {
			$.svg._attachSVG(this, options || {});
		} 
	});
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && a.constructor == Array);
}

// Singleton primary SVG interface
$.svg = new SVGManager();

})(jQuery);
/* http://keith-wood.name/svg.html
   SVG attribute animations for jQuery v1.4.5.
   Written by Keith Wood (kbwood{at}iinet.com.au) June 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */


(function($) { // Hide scope, no $ conflict

// Enable animation for all of these SVG numeric attributes -
// named as svg-* or svg* (with first character upper case)
$.each(['x', 'y', 'width', 'height', 'rx', 'ry', 'cx', 'cy', 'r', 'x1', 'y1', 'x2', 'y2',
		'stroke-width', 'strokeWidth', 'opacity', 'fill-opacity', 'fillOpacity',
		'stroke-opacity', 'strokeOpacity', 'stroke-dashoffset', 'strokeDashOffset',
		'font-size', 'fontSize', 'font-weight', 'fontWeight',
		'letter-spacing', 'letterSpacing', 'word-spacing', 'wordSpacing'],
	function(i, attrName) {
		var ccName = attrName.charAt(0).toUpperCase() + attrName.substr(1);
		if ($.cssProps) {
			$.cssProps['svg' + ccName] = $.cssProps['svg-' + attrName] = attrName;
		}
		$.fx.step['svg' + ccName] = $.fx.step['svg-' + attrName] = function(fx) {
			var realAttrName = $.svg._attrNames[attrName] || attrName;
			var attr = fx.elem.attributes.getNamedItem(realAttrName);
			if (!fx.set) {
				fx.start = (attr ? parseFloat(attr.nodeValue) : 0);
				var offset = ($.fn.jquery >= '1.6' ? '' :
					fx.options.curAnim['svg' + ccName] || fx.options.curAnim['svg-' + attrName]);
				if (/^[+-]=/.exec(offset)) {
					fx.end = fx.start + parseFloat(offset.replace(/=/, ''));
				}
				$(fx.elem).css(realAttrName, '');
				fx.set = true;
			}
			var value = (fx.pos * (fx.end - fx.start) + fx.start) + (fx.unit == '%' ? '%' : '');
			(attr ? attr.nodeValue = value : fx.elem.setAttribute(realAttrName, value));
		};
	}
);

// Enable animation for the SVG strokeDashArray attribute
$.fx.step['svgStrokeDashArray'] = $.fx.step['svg-strokeDashArray'] =
$.fx.step['svgStroke-dasharray'] = $.fx.step['svg-stroke-dasharray'] = function(fx) {
	var attr = fx.elem.attributes.getNamedItem('stroke-dasharray');
	if (!fx.set) {
		fx.start = parseDashArray(attr ? attr.nodeValue : '');
		var offset = ($.fn.jquery >= '1.6' ? fx.end :
			fx.options.curAnim['svgStrokeDashArray'] || fx.options.curAnim['svg-strokeDashArray'] ||
			fx.options.curAnim['svgStroke-dasharray'] || fx.options.curAnim['svg-stroke-dasharray']);
		fx.end = parseDashArray(offset);
		if (/^[+-]=/.exec(offset)) {
			offset = offset.split(/[, ]+/);
			if (offset.length % 2 == 1) { // Must have an even number
				var len = offset.length;
				for (var i = 0; i < len; i++) { // So repeat
					offset.push(offset[i]);
				}
			}
			for (var i = 0; i < offset.length; i++) {
				if (/^[+-]=/.exec(offset[i])) {
					fx.end[i] = fx.start[i] + parseFloat(offset[i].replace(/=/, ''));
				}
			}
		}
		fx.set = true;
	}
	var value = $.map(fx.start, function(n, i) {
		return (fx.pos * (fx.end[i] - n) + n);
	}).join(',');
	(attr ? attr.nodeValue = value : fx.elem.setAttribute('stroke-dasharray', value));
};

/* Parse a strokeDashArray definition: dash, gap, ...
   @param  value  (string) the definition
   @return  (number[2n]) the extracted values */
function parseDashArray(value) {
	var dashArray = value.split(/[, ]+/);
	for (var i = 0; i < dashArray.length; i++) {
		dashArray[i] = parseFloat(dashArray[i]);
		if (isNaN(dashArray[i])) {
			dashArray[i] = 0;
		}
	}
	if (dashArray.length % 2 == 1) { // Must have an even number
		var len = dashArray.length;
		for (var i = 0; i < len; i++) { // So repeat
			dashArray.push(dashArray[i]);
		}
	}
	return dashArray;
}

// Enable animation for the SVG viewBox attribute
$.fx.step['svgViewBox'] = $.fx.step['svg-viewBox'] = function(fx) {
	var attr = fx.elem.attributes.getNamedItem('viewBox');
	if (!fx.set) {
		fx.start = parseViewBox(attr ? attr.nodeValue : '');
		var offset = ($.fn.jquery >= '1.6' ? fx.end :
			fx.options.curAnim['svgViewBox'] || fx.options.curAnim['svg-viewBox']);
		fx.end = parseViewBox(offset);
		if (/^[+-]=/.exec(offset)) {
			offset = offset.split(/[, ]+/);
			while (offset.length < 4) {
				offset.push('0');
			}
			for (var i = 0; i < 4; i++) {
				if (/^[+-]=/.exec(offset[i])) {
					fx.end[i] = fx.start[i] + parseFloat(offset[i].replace(/=/, ''));
				}
			}
		}
		fx.set = true;
	}
	var value = $.map(fx.start, function(n, i) {
		return (fx.pos * (fx.end[i] - n) + n);
	}).join(' ');
	(attr ? attr.nodeValue = value : fx.elem.setAttribute('viewBox', value));
};

/* Parse a viewBox definition: x, y, width, height.
   @param  value  (string) the definition
   @return  (number[4]) the extracted values */
function parseViewBox(value) {
	var viewBox = value.split(/[, ]+/);
	for (var i = 0; i < viewBox.length; i++) {
		viewBox[i] = parseFloat(viewBox[i]);
		if (isNaN(viewBox[i])) {
			viewBox[i] = 0;
		}
	}
	while (viewBox.length < 4) {
		viewBox.push(0);
	}
	return viewBox;
}

// Enable animation for the SVG transform attribute
$.fx.step['svgTransform'] = $.fx.step['svg-transform'] = function(fx) {
	var attr = fx.elem.attributes.getNamedItem('transform');
	if (!fx.set) {
		fx.start = parseTransform(attr ? attr.nodeValue : '');
		fx.end = parseTransform(fx.end, fx.start);
		fx.set = true;
	}
	var transform = '';
	for (var i = 0; i < fx.end.order.length; i++) {
		switch (fx.end.order.charAt(i)) {
			case 't':
				transform += ' translate(' +
					(fx.pos * (fx.end.translateX - fx.start.translateX) + fx.start.translateX) + ',' +
					(fx.pos * (fx.end.translateY - fx.start.translateY) + fx.start.translateY) + ')';
				break;
			case 's':
				transform += ' scale(' +
					(fx.pos * (fx.end.scaleX - fx.start.scaleX) + fx.start.scaleX) + ',' +
					(fx.pos * (fx.end.scaleY - fx.start.scaleY) + fx.start.scaleY) + ')';
				break;
			case 'r':
				transform += ' rotate(' +
					(fx.pos * (fx.end.rotateA - fx.start.rotateA) + fx.start.rotateA) + ',' +
					(fx.pos * (fx.end.rotateX - fx.start.rotateX) + fx.start.rotateX) + ',' +
					(fx.pos * (fx.end.rotateY - fx.start.rotateY) + fx.start.rotateY) + ')';
				break;
			case 'x':
				transform += ' skewX(' +
					(fx.pos * (fx.end.skewX - fx.start.skewX) + fx.start.skewX) + ')';
			case 'y':
				transform += ' skewY(' +
					(fx.pos * (fx.end.skewY - fx.start.skewY) + fx.start.skewY) + ')';
				break;
			case 'm':
				var matrix = '';
				for (var j = 0; j < 6; j++) {
					matrix += ',' + (fx.pos * (fx.end.matrix[j] - fx.start.matrix[j]) + fx.start.matrix[j]);
				}				
				transform += ' matrix(' + matrix.substr(1) + ')';
				break;
		}
	}
	(attr ? attr.nodeValue = transform : fx.elem.setAttribute('transform', transform));
};

/* Decode a transform string and extract component values.
   @param  value     (string) the transform string to parse
   @param  original  (object) the settings from the original node
   @return  (object) the combined transformation attributes */
function parseTransform(value, original) {
	value = value || '';
	if (typeof value == 'object') {
		value = value.nodeValue;
	}
	var transform = $.extend({translateX: 0, translateY: 0, scaleX: 0, scaleY: 0,
		rotateA: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0,
		matrix: [0, 0, 0, 0, 0, 0]}, original || {});
	transform.order = '';
	var pattern = /([a-zA-Z]+)\(\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*)?)?)?\)/g;
	var result = pattern.exec(value);
	while (result) {
		switch (result[1]) {
			case 'translate':
				transform.order += 't';
				transform.translateX = parseFloat(result[2]);
				transform.translateY = (result[3] ? parseFloat(result[3]) : 0);
				break;
			case 'scale':
				transform.order += 's';
				transform.scaleX = parseFloat(result[2]);
				transform.scaleY = (result[3] ? parseFloat(result[3]) : transform.scaleX);
				break;
			case 'rotate':
				transform.order += 'r';
				transform.rotateA = parseFloat(result[2]);
				transform.rotateX = (result[3] ? parseFloat(result[3]) : 0);
				transform.rotateY = (result[4] ? parseFloat(result[4]) : 0);
				break;
			case 'skewX':
				transform.order += 'x';
				transform.skewX = parseFloat(result[2]);
				break;
			case 'skewY':
				transform.order += 'y';
				transform.skewY = parseFloat(result[2]);
				break;
			case 'matrix':
				transform.order += 'm';
				transform.matrix = [parseFloat(result[2]), parseFloat(result[3]),
					parseFloat(result[4]), parseFloat(result[5]),
					parseFloat(result[6]), parseFloat(result[7])];
				break;
		}
		result = pattern.exec(value);
	}
	if (transform.order == 'm' && Math.abs(transform.matrix[0]) == Math.abs(transform.matrix[3]) &&
			transform.matrix[1] != 0 && Math.abs(transform.matrix[1]) == Math.abs(transform.matrix[2])) {
		// Simple rotate about origin and translate
		var angle = Math.acos(transform.matrix[0]) * 180 / Math.PI;
		angle = (transform.matrix[1] < 0 ? 360 - angle : angle);
		transform.order = 'rt';
		transform.rotateA = angle;
		transform.rotateX = transform.rotateY = 0;
		transform.translateX = transform.matrix[4];
		transform.translateY = transform.matrix[5];
	}
	return transform;
}

// Enable animation for all of these SVG colour properties - based on jquery.color.js
$.each(['fill', 'stroke'],
	function(i, attrName) {
		var ccName = attrName.charAt(0).toUpperCase() + attrName.substr(1);
		$.fx.step['svg' + ccName] = $.fx.step['svg-' + attrName] = function(fx) {
			if (!fx.set) {
				fx.start = $.svg._getColour(fx.elem, attrName);
				var toNone = (fx.end == 'none');
				fx.end = (toNone ? $.svg._getColour(fx.elem.parentNode, attrName) : $.svg._getRGB(fx.end));
				fx.end[3] = toNone;
				$(fx.elem).css(attrName, '');
				fx.set = true;
			}
			var attr = fx.elem.attributes.getNamedItem(attrName);
			var colour = 'rgb(' + [
				Math.min(Math.max(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 0), 255),
				Math.min(Math.max(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 0), 255),
				Math.min(Math.max(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 0), 255)
			].join(',') + ')';
			colour = (fx.end[3] && fx.state == 1 ? 'none' : colour);
			(attr ? attr.nodeValue = colour : fx.elem.setAttribute(attrName, colour));
		}
	}
);

/* Find this attribute value somewhere up the node hierarchy.
   @param  elem  (element) the starting element to find the attribute
   @param  attr  (string) the attribute name
   @return  (number[3]) RGB components for the attribute colour */
$.svg._getColour = function(elem, attr) {
	elem = $(elem);
	var colour;
	do {
		colour = elem.attr(attr) || elem.css(attr);
		// Keep going until we find an element that has colour, or exit SVG
		if ((colour != '' && colour != 'none') || elem.hasClass($.svg.markerClassName)) {
			break; 
		}
	} while (elem = elem.parent());
	return $.svg._getRGB(colour);
};

/* Parse strings looking for common colour formats.
   @param  colour  (string) colour description to parse
   @return  (number[3]) RGB components of this colour */
$.svg._getRGB = function(colour) {
	var result;
	// Check if we're already dealing with an array of colors
	if (colour && colour.constructor == Array) {
		return (colour.length == 3 || colour.length == 4 ? colour : colours['none']);
	}
	// Look for rgb(num,num,num)
	if (result = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(colour)) {
		return [parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10)];
	}
	// Look for rgb(num%,num%,num%)
	if (result = /^rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(colour)) {
		return [parseFloat(result[1]) * 2.55, parseFloat(result[2]) * 2.55,
			parseFloat(result[3]) * 2.55];
	}
	// Look for #a0b1c2
	if (result = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(colour)) {
		return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
	}
	// Look for #abc
	if (result = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(colour)) {
		return [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16),
			parseInt(result[3] + result[3], 16)];
	}
	// Otherwise, we're most likely dealing with a named color
	return colours[$.trim(colour).toLowerCase()] || colours['none'];
};

// The SVG named colours
var colours = {
	'':						[255, 255, 255, 1],
	none:					[255, 255, 255, 1],
	aliceblue:				[240, 248, 255],
	antiquewhite:			[250, 235, 215],
	aqua:					[0, 255, 255],
	aquamarine:				[127, 255, 212],
	azure:					[240, 255, 255],
	beige:					[245, 245, 220],
	bisque:					[255, 228, 196],
	black:					[0, 0, 0],
	blanchedalmond:			[255, 235, 205],
	blue:					[0, 0, 255],
	blueviolet:				[138, 43, 226],
	brown:					[165, 42, 42],
	burlywood:				[222, 184, 135],
	cadetblue:				[95, 158, 160],
	chartreuse:				[127, 255, 0],
	chocolate:				[210, 105, 30],
	coral:					[255, 127, 80],
	cornflowerblue:			[100, 149, 237],
	cornsilk:				[255, 248, 220],
	crimson:				[220, 20, 60],
	cyan:					[0, 255, 255],
	darkblue:				[0, 0, 139],
	darkcyan:				[0, 139, 139],
	darkgoldenrod:			[184, 134, 11],
	darkgray:				[169, 169, 169],
	darkgreen:				[0, 100, 0],
	darkgrey:				[169, 169, 169],
	darkkhaki:				[189, 183, 107],
	darkmagenta:			[139, 0, 139],
	darkolivegreen:			[85, 107, 47],
	darkorange:				[255, 140, 0],
	darkorchid:				[153, 50, 204],
	darkred:				[139, 0, 0],
	darksalmon:				[233, 150, 122],
	darkseagreen:			[143, 188, 143],
	darkslateblue:			[72, 61, 139],
	darkslategray:			[47, 79, 79],
	darkslategrey:			[47, 79, 79],
	darkturquoise:			[0, 206, 209],
	darkviolet:				[148, 0, 211],
	deeppink:				[255, 20, 147],
	deepskyblue:			[0, 191, 255],
	dimgray:				[105, 105, 105],
	dimgrey:				[105, 105, 105],
	dodgerblue:				[30, 144, 255],
	firebrick:				[178, 34, 34],
	floralwhite:			[255, 250, 240],
	forestgreen:			[34, 139, 34],
	fuchsia:				[255, 0, 255],
	gainsboro:				[220, 220, 220],
	ghostwhite:				[248, 248, 255],
	gold:					[255, 215, 0],
	goldenrod:				[218, 165, 32],
	gray:					[128, 128, 128],
	grey:					[128, 128, 128],
	green:					[0, 128, 0],
	greenyellow:			[173, 255, 47],
	honeydew:				[240, 255, 240],
	hotpink:				[255, 105, 180],
	indianred:				[205, 92, 92],
	indigo:					[75, 0, 130],
	ivory:					[255, 255, 240],
	khaki:					[240, 230, 140],
	lavender:				[230, 230, 250],
	lavenderblush:			[255, 240, 245],
	lawngreen:				[124, 252, 0],
	lemonchiffon:			[255, 250, 205],
	lightblue:				[173, 216, 230],
	lightcoral:				[240, 128, 128],
	lightcyan:				[224, 255, 255],
	lightgoldenrodyellow:	[250, 250, 210],
	lightgray:				[211, 211, 211],
	lightgreen:				[144, 238, 144],
	lightgrey:				[211, 211, 211],
	lightpink:				[255, 182, 193],
	lightsalmon:			[255, 160, 122],
	lightseagreen:			[32, 178, 170],
	lightskyblue:			[135, 206, 250],
	lightslategray:			[119, 136, 153],
	lightslategrey:			[119, 136, 153],
	lightsteelblue:			[176, 196, 222],
	lightyellow:			[255, 255, 224],
	lime:					[0, 255, 0],
	limegreen:				[50, 205, 50],
	linen:					[250, 240, 230],
	magenta:				[255, 0, 255],
	maroon:					[128, 0, 0],
	mediumaquamarine:		[102, 205, 170],
	mediumblue:				[0, 0, 205],
	mediumorchid:			[186, 85, 211],
	mediumpurple:			[147, 112, 219],
	mediumseagreen:			[60, 179, 113],
	mediumslateblue:		[123, 104, 238],
	mediumspringgreen:		[0, 250, 154],
	mediumturquoise:		[72, 209, 204],
	mediumvioletred:		[199, 21, 133],
	midnightblue:			[25, 25, 112],
	mintcream:				[245, 255, 250],
	mistyrose:				[255, 228, 225],
	moccasin:				[255, 228, 181],
	navajowhite:			[255, 222, 173],
	navy:					[0, 0, 128],
	oldlace:				[253, 245, 230],
	olive:					[128, 128, 0],
	olivedrab:				[107, 142, 35],
	orange:					[255, 165, 0],
	orangered:				[255, 69, 0],
	orchid:					[218, 112, 214],
	palegoldenrod:			[238, 232, 170],
	palegreen:				[152, 251, 152],
	paleturquoise:			[175, 238, 238],
	palevioletred:			[219, 112, 147],
	papayawhip:				[255, 239, 213],
	peachpuff:				[255, 218, 185],
	peru:					[205, 133, 63],
	pink:					[255, 192, 203],
	plum:					[221, 160, 221],
	powderblue:				[176, 224, 230],
	purple:					[128, 0, 128],
	red:					[255, 0, 0],
	rosybrown:				[188, 143, 143],
	royalblue:				[65, 105, 225],
	saddlebrown:			[139, 69, 19],
	salmon:					[250, 128, 114],
	sandybrown:				[244, 164, 96],
	seagreen:				[46, 139, 87],
	seashell:				[255, 245, 238],
	sienna:					[160, 82, 45],
	silver:					[192, 192, 192],
	skyblue:				[135, 206, 235],
	slateblue:				[106, 90, 205],
	slategray:				[112, 128, 144],
	slategrey:				[112, 128, 144],
	snow:					[255, 250, 250],
	springgreen:			[0, 255, 127],
	steelblue:				[70, 130, 180],
	tan:					[210, 180, 140],
	teal:					[0, 128, 128],
	thistle:				[216, 191, 216],
	tomato:					[255, 99, 71],
	turquoise:				[64, 224, 208],
	violet:					[238, 130, 238],
	wheat:					[245, 222, 179],
	white:					[255, 255, 255],
	whitesmoke:				[245, 245, 245],
	yellow:					[255, 255, 0],
	yellowgreen:			[154, 205, 50]
};

})(jQuery);
/*
* jQuery Background video plugin for jQuery
* ---
* Copyright 2011, Victor Coulon (http://victorcoulon.fr)
* Released under the MIT, BSD, and GPL Licenses.
* based on jQuery Plugin Boilerplate 1.3
*/


(function($) {

  $.backgroundVideo = function(el, options) {

    var defaults = {
      videoid: "video_background"
    }

    var plugin = this;

    plugin.settings = {}

    var init = function() {
      plugin.settings = $.extend({}, defaults, options);
      plugin.el = el;

      buildVideo();
    }

    var buildVideo = function () {
      var html = '';
      html += '<video id="'+plugin.settings.videoid+'" preload="auto" autoplay="autoplay" loop="loop"';

      if (plugin.settings.poster) {
        html += ' poster="' + plugin.settings.poster + '" ';
      }

      html += 'style="display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:-100;width:100%;height:100%;">';
      for(var i=0; i < plugin.settings.types.length; i++) {
        html += '<source src="'+plugin.settings.path+plugin.settings.filename+'.'+plugin.settings.types[i]+'" type="video/'+plugin.settings.types[i]+'" />';
      }
      html += 'bgvideo</video>';
      plugin.el.prepend(html);
      plugin.videoEl = document.getElementById(plugin.settings.videoid);
      plugin.$videoEl = $(plugin.videoEl);
      plugin.$videoEl.fadeIn(2000);
      setProportion();
    }

    var setProportion = function () {
      var proportion = getProportion();
      plugin.$videoEl.width(proportion*plugin.settings.width);
      plugin.$videoEl.height(proportion*plugin.settings.height);

      if (typeof plugin.settings.align !== 'undefined') {
        centerVideo();
      }
    }

    var getProportion = function () {
      var windowWidth = $(plugin.settings.holder).width();
      var windowHeight = $(plugin.settings.holder).height();
      var windowProportion = windowWidth / windowHeight;
      var origProportion = plugin.settings.width / plugin.settings.height;
      var proportion = windowHeight / plugin.settings.height;

      if (windowProportion >= origProportion) {
        proportion = windowWidth / plugin.settings.width;
      }

      return proportion;
    }

    var centerVideo = function() {
      var centerX = (($(plugin.settings.holder).width() >> 1) - (plugin.$videoEl.width() >> 1)) | 0;
      var centerY = (($(plugin.settings.holder).height() >> 1) - (plugin.$videoEl.height() >> 1)) | 0;

      if (plugin.settings.align == 'centerXY') {
        plugin.$videoEl.css({ 'left': centerX, 'top': centerY });
        return;
      }

      if (plugin.settings.align == 'centerX') {
        plugin.$videoEl.css('left', centerX);
        return;
      }

      if (plugin.settings.align == 'centerY') {
        plugin.$videoEl.css('top', centerY);
        return;
      }
    }

    init();

    $(window).resize(function() { setProportion(); });
    plugin.$videoEl.bind('ended', function(){ this.play(); });
  }
})(jQuery);
var Froogaloop=function(){function e(a){return new e.fn.init(a)}function h(a,c,b){if(!b.contentWindow.postMessage)return!1;var f=b.getAttribute("src").split("?")[0],a=JSON.stringify({method:a,value:c});"//"===f.substr(0,2)&&(f=window.location.protocol+f);b.contentWindow.postMessage(a,f)}function j(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(f){}"ready"==b&&!i&&(i=!0);if(a.origin!=k)return!1;var a=c.value,e=c.data,g=""===g?null:c.player_id;c=g?d[g][b]:d[b];b=[];if(!c)return!1;void 0!==
a&&b.push(a);e&&b.push(e);g&&b.push(g);return 0<b.length?c.apply(null,b):c.call()}function l(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},i=!1,k="";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;a=this.element.getAttribute("src");"//"===a.substr(0,2)&&(a=window.location.protocol+a);for(var a=a.split("/"),c="",b=0,f=a.length;b<f;b++){if(3>b)c+=a[b];else break;2>b&&(c+="/")}k=c;return this},api:function(a,c){if(!this.element||
!a)return!1;var b=this.element,f=""!==b.id?b.id:null,d=!c||!c.constructor||!c.call||!c.apply?c:null,e=c&&c.constructor&&c.call&&c.apply?c:null;e&&l(a,e,f);h(a,d,b);return this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;l(a,c,d);"ready"!=a?h("addEventListener",a,b):"ready"==a&&i&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b;a:{if((b=""!==c.id?c.id:null)&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=
!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&h("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent("onmessage",j);return window.Froogaloop=window.$f=e}();
/**
 * JavaScript code for all ui-kit components.
 * Use namespaces.
 */


window.isRetina = (function() {
    var root = ( typeof exports == 'undefined' ? window : exports);
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";
    if (root.devicePixelRatio > 1)
        return true;
    if (root.matchMedia && root.matchMedia(mediaQuery).matches)
        return true;
    return false;
})();
//nextOrFirst? prevOrLast?
jQuery.fn.nextOrFirst = function(selector) { var next = this.next(selector); return (next.length) ? next : this.prevAll(selector).last(); }
jQuery.fn.prevOrLast = function(selector){ var prev = this.prev(selector); return (prev.length) ? prev : this.nextAll(selector).last(); }

//preload images
$.fn.preload=function(){this.each(function(){$("<img/>")[0].src=this})}

window.startupKit = window.startupKit || {};

startupKit.hideCollapseMenu = function() {
    $('body > .navbar-collapse').css({
        'z-index': 1
    });
    $('html').removeClass('nav-visible');
    setTimeout(function() {
        $('body > .navbar-collapse').addClass('collapse');
        $('body > .colapsed-menu').removeClass('show-menu');
    }, 400)
}

$(function () {
    $('.page-wrapper, .navbar-fixed-top, .navbar-collapse a, .navbar-collapse button, .navbar-collapse input[type=submit]').on('click', function(e) {
        if($('html').hasClass('nav-visible')) {
            setTimeout(function(){
                startupKit.hideCollapseMenu();
            }, 200)
        }
    });
    $(window).resize(function() {
        if($(window).width() > 965) {
            startupKit.hideCollapseMenu();
        }
    });

    var menuCollapse = $('#header-dockbar > .colapsed-menu').clone(true);
    $('body').append(menuCollapse);

    $('#open-close-menu').on('click', function () {
        if($('html').hasClass('nav-visible')) {
            startupKit.hideCollapseMenu();
        } else {
            $('body > .colapsed-menu').addClass('show-menu');
            if($('#header-dockbar').length) {
                 $('body > .colapsed-menu').css({
                    top: $('#header-dockbar').height()
                });
            }
            setTimeout(function() {
                $('html').addClass('nav-visible');
            }, 1)
        }
    });
    if($('.social-btn-facebook').length){
        $('.social-btn-facebook').sharrre({
            share: {
                facebook: true
            },
            enableHover: false,
            enableCounter: false,
            click: function(api, options){
                api.simulateClick();
                api.openPopup('facebook');
            }
        });
    }

    if($('.social-btn-twitter').length){
        $('.social-btn-twitter').sharrre({
            share: {
                twitter: true
            },
            enableHover: false,
            enableCounter: false,
            buttons: {
                twitter: {
                    via: 'Designmodo',
                    url: false
                }
            },
            click: function(api, options){
                api.simulateClick();
                api.openPopup('twitter');
            }
        });
    }
});

/**
 *  Headers 
 * */
startupKit.uiKitHeader = startupKit.uiKitHeader || {};

startupKit.uiKitHeader._inFixedMode = function(headerClass) {
    var navCollapse = $(headerClass + ' .navbar-collapse').first().clone(true);
    navCollapse.attr('id', headerClass.substr(1));
    $('body').append(navCollapse);

    var fixedNavbar = $('.navbar-fixed-top');
        fixedNavbarHeader = fixedNavbar.closest('header');
        fixedNavbarHeaderClone = fixedNavbarHeader.clone(true);

    if(fixedNavbarHeader.hasClass('fake-header')) {
        var fakeHeader = $('<div class="fake-wrapper-header" style="width: 100%; height: ' + fixedNavbarHeader.outerHeight() + 'px;" />');
    }
    $('body').prepend(fakeHeader);
    $('body').prepend(fixedNavbarHeaderClone);
    fixedNavbarHeader.detach();

    $(headerClass + ' .navbar-toggle').on('click', function() {
        var $this = $(this);
        if($('html').hasClass('nav-visible')) {
            startupKit.hideCollapseMenu();
        } else {
            $('.navbar-collapse#' + headerClass.substr(1)).removeClass('collapse');
            if($('#header-dockbar').length) {
                $('.navbar-collapse#' + headerClass.substr(1)).css({
                    top: $('#header-dockbar').height()
                });
            }
            setTimeout(function() {
                $('html').addClass('nav-visible');
            }, 1)
            setTimeout(function() {
                $('body > .navbar-collapse').css({
                    'z-index': 101
                });
            }, 400)
        }
    });

    if ($(headerClass + ' .navbar').hasClass('navbar-fixed-top')) {
        var s1 = $(headerClass + '-sub'),
            s1StopScroll = s1.outerHeight() - 70,
            antiflickerStopScroll = 70;

        if($(headerClass).outerHeight()>0){
            var antiflickerColor = $(headerClass).css('background-color');
        }else if($(headerClass+'-sub').length > 0){
            var antiflickerColor = $(headerClass+'-sub').css('background-color');
        }else{
            var antiflickerColor='#fff';
        }

        var antiflicker = $('<div class="' + headerClass.slice(1) + '-startup-antiflicker header-antiflicker" style="opacity: 0.0001; position: fixed; z-index: 2; left: 0; top: 0; width: 100%; height: 70px; background-color: '+antiflickerColor+';" />');
        $('body').append(antiflicker);
        var s1FadedEls = $('.background, .caption, .controls > *', s1),
            header = $(headerClass);

        s1FadedEls.each(function() {
            $(this).data('origOpacity', $(this).css('opacity'));
        });

        var headerAniStartPos = s1.outerHeight() - 120, headerAniStopPos = s1StopScroll;

        $(window).scroll(function() {
            var opacity = (s1StopScroll - $(window).scrollTop()) / s1StopScroll;
            opacity = Math.max(0, opacity);

            if ($(window).scrollTop() > s1StopScroll - antiflickerStopScroll) {
                var opacityAntiflicker = (s1StopScroll - $(window).scrollTop()) / antiflickerStopScroll;
                opacityAntiflicker = Math.max(0, opacityAntiflicker);
            } else {
                opacityAntiflicker = 1
            }
            // 0..1

            s1FadedEls.each(function() {
                $(this).css('opacity', $(this).data('origOpacity') * opacity);
            });

            antiflicker.css({
                'background-color': $('.pt-page-current', s1).css('background-color'),
                'opacity': 1.0001 - opacityAntiflicker
            });
            
            var headerZoom = -(headerAniStartPos - $(window).scrollTop()) / (headerAniStopPos - headerAniStartPos);
            headerZoom = 1 - Math.min(1, Math.max(0, headerZoom));
            
            $(window).resize(function(){
               _navbarResize();
            });
            var _navbarResize = function(){
                if($(window).width()<767){
                    $('.navbar', header).css({
                        'top' : -6 + ((20 + 6) * headerZoom)
                    });
                } else if($(window).width()<480){
                    $('.navbar', header).css({
                        'top' : -6 + ((20 + 6) * headerZoom)
                    });
                } else{
                    $('.navbar', header).css({
                        'top' : -6 + ((45 + 6) * headerZoom)
                    });
                }
            };
            
            _navbarResize();
            
            $('.navbar .brand', header).css({
                'font-size' : 18 + ((25 - 18) * headerZoom),
                'padding-top' : 30 + ((23 - 30) * headerZoom)
            });
            $('.navbar .brand img', header).css({
                'width' : 'auto',
                'height' : 25 + ((50 - 25) * headerZoom),
                'margin-top' : -1 + ((-10 + 1) * headerZoom)
            });
            $('.navbar .btn-navbar', header).css({
                'margin-top' : 30 + ((28 - 30) * headerZoom)
            });

            if ($(window).width() > 979) {
                $(headerClass + '.navbar .nav > li > a', header).css({
                    'font-size' : 12 + ((14 - 12) * headerZoom)
                });
            } else {
                $(headerClass + '.navbar .nav > li > a', header).css({
                    'font-size' : ''
                });
            }

        });
    };
};

/* Header 1*/
startupKit.uiKitHeader.header1 = function() {
    var pt = PageTransitions();
    pt.init('#pt-main');
    $('#pt-main .control-prev').on('click', function() {
        pt.gotoPage(5, 'prev');
        return false;
    });
    $('#pt-main .control-next').on('click', function() {
        pt.gotoPage(6, 'next');
        return false;
    });

    startupKit.uiKitHeader._inFixedMode('.header-1');

};

/* Header 2*/
startupKit.uiKitHeader.header2 = function() {
    startupKit.uiKitHeader._inFixedMode('.header-2');
};

/* Header 3*/
startupKit.uiKitHeader.header3 = function() {
    if ($('.header-3 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-3').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-3');
};

/* Header 4*/
startupKit.uiKitHeader.header4 = function() {};

/* Header 5*/
startupKit.uiKitHeader.header5 = function() {

    startupKit.uiKitHeader._inFixedMode('.header-5');
    // PageTransitions
    $(window).resize(function() {
        var maxH = 0;
        $('.header-5-sub .pt-page').css('height', 'auto').each(function() {
            var h = $(this).outerHeight();
            if (h > maxH)
                maxH = h;
        }).css('height', maxH + 'px');
        $('.header-5-sub .page-transitions').css('height', maxH + 'px');
    });
    var pt1 = PageTransitions();
    pt1.init('#h-5-pt-1');

    $('#h-5-pt-1 .pt-control-prev').on('click', function() {
        pt1.gotoPage(5, 'prev');
        return false;
    });

    $('#h-5-pt-1 .pt-control-next').on('click', function() {
        pt1.gotoPage(6, 'next');
        return false;
    });

    var navbar = $('.header-5 .navbar');
    $('.search', navbar).click(function() {
        if (!navbar.hasClass('search-mode')) {
            navbar.addClass('search-mode');
            setTimeout(function() {
                $('header .navbar .navbar-search input[type="text"]').focus();
            }, 1000);
        } else {

        }
        return false;
    });

    $('.close-search', navbar).click(function() {
        navbar.removeClass('search-mode');
        return false;
    });
};

/* Header 6*/
startupKit.uiKitHeader.header6 = function() {
    startupKit.uiKitHeader._inFixedMode('.header-6');
};

/* Header 7*/
startupKit.uiKitHeader.header7 = function() {
    startupKit.uiKitHeader._inFixedMode('.header-7');
    $(window).resize(function() {
        var maxH = 0;
        $('.header-7-sub section').css('height', $(this).height() + 'px').each(function() {
            var h = $(this).outerHeight();
            if (h > maxH)
                maxH = h;
        }).css('height', maxH + 'px');
        $('.header-7-sub .page-transitions').css('height', maxH + 'px');
        var ctrlsHeight = $('.header-7-sub .pt-controls').height();
        $('.header-7-sub .pt-controls').css('margin-top', (-1) * (maxH) / 2 - ctrlsHeight + 'px');
        $('.header-7-sub .pt-controls').css('padding-bottom', (maxH) / 2 - ctrlsHeight + 'px');
    });


    // PageTransitions
    var pt = PageTransitions();
    pt.init('#h-7-pt-main');

    $('.header-7-sub .pt-controls .pt-indicators > *').on('click', function() {

        if ($(this).hasClass('active'))
            return false;

        var curPage = $(this).parent().children('.active').index();
        var nextPage = $(this).index();
        $('.header-7-sub').css('background-color',$('#h-7-pt-main').children('.pt-page').eq(nextPage).find('section').css('background-color'));
        var ani = 5;
        if (curPage < nextPage) {
            ani = 6;
        }

        pt.gotoPage(ani, nextPage);
        $(this).addClass('active').parent().children().not(this).removeClass('active');
        return false;


    });

};

/* Header 8*/
startupKit.uiKitHeader.header8 = function() {
    if ($('.header-8 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-8').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-8');
};

/* Header 9*/
startupKit.uiKitHeader.header9 = function() {

    startupKit.uiKitHeader._inFixedMode('.header-9');

    $(window).resize(function() {
        var h = 0;
        $('body > section:not(.header-9-sub)').each(function() {
            h += $(this).outerHeight();
        });
        $('.sidebar-content').css('height', h + 'px');
    });
};

/* Header 10*/
startupKit.uiKitHeader.header10 = function() {
    if ($('.header-10 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-10').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-10');

    $('.header-10-sub .control-btn').on('click', function() {
        $.scrollTo($(this).closest('section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });
};

/* Header 11*/
startupKit.uiKitHeader.header11 = function() {
    if ($('.header-11 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-11').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-11');

    $(window).resize(function() {
        
        var headerContainer = $('.header-11-sub').not('pre .header-11-sub');
        var player = headerContainer.find('.player');
        if ($(window).width() < 751) {
            headerContainer.find('.signup-form').before(player);
            headerContainer.find('.player-wrapper').hide();
        } else {
            headerContainer.find('.player-wrapper').append(player).show();
        }
    });

};

/* Header 12*/
startupKit.uiKitHeader.header12 = function() {};

/* Header 13*/
startupKit.uiKitHeader.header13 = function() {};

/* Header 14*/
startupKit.uiKitHeader.header14 = function() {};

/* Header 15*/
startupKit.uiKitHeader.header15 = function() {
    if ($('.header-15 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-15').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-15');
};

/* Header 16*/
startupKit.uiKitHeader.header16 = function() {
    startupKit.uiKitHeader._inFixedMode('.header-16');
    var pt = PageTransitions();
    pt.init('#h-16-pt-main');
    $('#h-16-pt-main .pt-control-prev').on('click', function() {
        pt.gotoPage(2, 'prev');
        return false;
    });
    $('#h-16-pt-main .pt-control-next').on('click', function() {
        pt.gotoPage(1, 'next');
        return false;
    });

    $('.header-16-sub .scroll-btn a').on('click', function(e) {
        e.preventDefault();
        $.scrollTo($(this).closest('section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });
    $(window).resize(function() {
        $('.header-16-sub').css('height', $(this).height() + 'px');
    });
    $(window).resize().scroll();
};

/* Header 17*/
startupKit.uiKitHeader.header17 = function() {
    if ($('.header-17 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-17').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-17');
    
    var pt = PageTransitions();
    pt.init('#h-17-pt-1');

    $('.pt-controls .pt-indicators > *').on('click', function() {
        if ($(this).hasClass('active'))
            return false;

        var curPage = $(this).parent().children('.active').index();
        var nextPage = $(this).index();
        var ani = 44;
        if (curPage < nextPage) {
            ani = 45;
        }

        pt.gotoPage(ani, nextPage);
        $(this).addClass('active').parent().children().not(this).removeClass('active');
        return false;
    });

    $(window).resize(function() {
        $('.header-17-sub .page-transitions').each(function() {
            var maxH = 0;
            $('.pt-page', this).css('height', 'auto').each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            }).css('height', maxH + 'px');
            $(this).css('height', maxH + 'px');
            if(!$(this).hasClass('calculated')){
                $(this).addClass('calculated');
            }
        });
    });

};

/* Header 18*/
startupKit.uiKitHeader.header18 = function() {
    $(window).resize(function() {
        maxH = $(window).height(); 
        $('.header-18 .page-transitions').css('height', maxH + 'px');
    });

    // PageTransitions
    var pt = PageTransitions();
    pt.init('#h-18-pt-main');

    $('.header-18 .pt-control-prev').on('click', function() {
        pt.gotoPage(5, 'prev');
        return false;
    });

    $('.header-18 .pt-control-next').on('click', function() {
        pt.gotoPage(6, 'next');
        return false;
    });

};

/* Header 19*/
startupKit.uiKitHeader.header19 = function() {
    startupKit.uiKitHeader._inFixedMode('.header-19');
};

/* Header 20*/
startupKit.uiKitHeader.header20 = function() {
    if ($('.header-20 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-20').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-20');
};

/* Header 21*/
startupKit.uiKitHeader.header21 = function() {
    startupKit.uiKitHeader._inFixedMode('.header-21');
    maxH = $(window).height();
    if($('.navbar-fixed-top').length!=0){
        maxH = maxH - $('.navbar-fixed-top').outerHeight();
    }
    if($('.header-21').length!=0){
        maxH = maxH - $('.header-21').outerHeight();
    }
    if((maxH / 90) < 3){
        $('.header-21-sub .control-btn').css('bottom', 0);
    }
    $('.header-21-sub').height(maxH);

    $('.header-21-sub .control-btn').on('click', function() {
        $.scrollTo($(this).closest('section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });

};

/* Header 22*/
startupKit.uiKitHeader.header22 = function() {
    if ($('.header-22 .navbar').hasClass('navbar-fixed-top')) {
        $('.header-22').css('position', 'fixed').addClass('fake-header');
    };
    startupKit.uiKitHeader._inFixedMode('.header-22');
};

/* Header 23*/
startupKit.uiKitHeader.header23 = function() {

    startupKit.attachBgVideo();
    startupKit.uiKitHeader._inFixedMode('.header-23');

    $('body').prepend($('.mask, .popup-video').not('pre .mask, pre .popup-video'));
    $('header-23 .mask, header-23 .popup-video').not('pre .mask, pre .popup-video').detach();

    var iframe = $('#pPlayer')[0];
    var player = $f(iframe);
    player.addEvent('ready', function() {});

    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }

    $('#play').on('click', function(evt) {
        evt.preventDefault();
        $('.popup-video').addClass('shown');
        $('.popup-video, .mask').fadeIn('slow', function() {
            player.api('play')
        });
        $('.mask').on('click', function() {
            player.api('pause');
            $('.popup-video, .mask').fadeOut('slow', function() {
                $('.popup-video').removeClass('shown');
            });
        });
    });
};

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/* Video background  */
startupKit.attachBgVideo = function() {
    var videBgDiv = $('#bgVideo');
    if (!isMobile.any() && videBgDiv) {
        var videobackground = new $.backgroundVideo(videBgDiv, {
            "holder": "#bgVideo",
            "align" : "centerXY",
            "path" : "video/",
            "width": 854,
            "height": 480,
            "filename" : "preview",
            "types" : ["mp4", "ogg", "webm"]
        });
    }
}


/**
 *  Contents 
 * */

startupKit.uiKitContent = startupKit.uiKitContent || {};


/* Content 1*/
startupKit.uiKitContent.content1 = function() {};

/* Content 2*/
startupKit.uiKitContent.content2 = function() {};

/* Content 3*/
startupKit.uiKitContent.content3 = function() {};

/* Content 4*/
startupKit.uiKitContent.content4 = function() {};

/* Content 5*/
startupKit.uiKitContent.content5 = function() {};

/* Content 6*/
startupKit.uiKitContent.content6 = function() {};

/* Content 7*/
startupKit.uiKitContent.content7 = function() {
    
    (function(el) {
        if (el.length != 0) {
            $('img:first-child', el).css('left', '-29.7%');
            $(window).resize(function() {
                if (!el.hasClass('ani-processed')) {
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                }
            }).scroll(function() {
                if (!el.hasClass('ani-processed')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        el.addClass('ani-processed');
                        $('img:first-child', el).animate({
                            left : 0
                        }, 500);
                    }
                }
            });

        }

    })($('.screen'));

    
    

};

/* Content 8*/
startupKit.uiKitContent.content8 = function() {};

/* Content 9*/
startupKit.uiKitContent.content9 = function() {};

/* Content 10*/
startupKit.uiKitContent.content10 = function() {};

/* Content 11*/
startupKit.uiKitContent.content11 = function() {};

/* Content 12*/
startupKit.uiKitContent.content12 = function() {};

/* Content 13*/
startupKit.uiKitContent.content13 = function() {};

/* Content 14*/
startupKit.uiKitContent.content14 = function() {};

/* Content 15*/
startupKit.uiKitContent.content15 = function() {};

/* Content 16*/
startupKit.uiKitContent.content16 = function() {
    
    $('.content-16 .control-btn').on('click', function() {
        $.scrollTo($(this).closest('section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });

};

/* Content 17*/
startupKit.uiKitContent.content17 = function() {

    // Carousel auto height
    $(window).resize(function() {
        $('#c-17_myCarousel').each(function() {
            var maxH = 0;
            $('.item', this).each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            });
            $('#c-17_myCarousel .carousel-inner', this).css('height', maxH + 'px');
        });
    });

    // Carousel start
    $('#c-17_myCarousel').carousel({
        interval : 4000
    });

};

/* Content 18*/
startupKit.uiKitContent.content18 = function() {

    // Carousel auto height
    $(window).resize(function() {
        $('#c-18_myCarousel').each(function() {
            var maxH = 0;
            $('.item', this).each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            });
            $('.carousel-inner', this).css('height', maxH + 'px');
        });
    });

    $('#c-18_myCarousel').bind('slid.bs.carousel', function() {
        $('.carousel-control', this).removeClass('disabled').attr('href', '#c-18_myCarousel');
        if ($('.item.active', this).index() == 0) {
            $('.carousel-control.left', this).addClass('disabled').attr('href', '#');
        } else if ($('.item.active', this).index() == ($('.item', this).length - 1)) {
            $('.carousel-control.right', this).addClass('disabled').attr('href', '#');
        }
    });

};

/* Content 19*/
startupKit.uiKitContent.content19 = function() {};

/* Content 20*/
startupKit.uiKitContent.content20 = function() {};

/* Content 21*/
startupKit.uiKitContent.content21 = function() {

    $(window).resize(function() {
        $('.content-21 .features').each(function() {
            var maxH = 0;
            $('.features-body', this).css('height', 'auto').each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            }).css('height', maxH + 'px');
            $('.features-bodies', this).css('height', maxH + 'px');
            if(!$('.features-bodies', this).hasClass('calculated')){
                $('.features-bodies', this).addClass('calculated');
            }
        });
    });

    $('.content-21 .features .features-header .box').click(function() {
        $(this).addClass('active').parent().children().not(this).removeClass('active');
        $(this).closest('.features').find('.features-body').removeClass('active').eq($(this).index()).addClass('active');
        return false;
    });

};

/* Content 22*/
startupKit.uiKitContent.content22 = function() {

    (function(el) {
        if (isRetina) {
            $('.img img', el).each(function() {
                $(this).attr('src', $(this).attr('src').replace(/.png/i, '@2x.png'));
            });
        }

        $(window).resize(function() {
            if (!el.hasClass('ani-processed')) {
                el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight() - parseInt(el.css('padding-bottom'), 10));
            }
        }).scroll(function() {
            if (!el.hasClass('ani-processed')) {
                if ($(window).scrollTop() >= el.data('scrollPos')) {
                    el.addClass('ani-processed');
                }
            }
        });
    })($('.content-22'));

};
/* Content 23*/
startupKit.uiKitContent.content23 = function() {

    $('.content-23 .control-btn').on('click', function() {
        $.scrollTo($(this).closest('section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });

};
/* Content 24*/
startupKit.uiKitContent.content24 = function() {

    $(window).resize(function() {
        $('.content-24 .features').each(function() {
            var maxH = 0;
            $('.features-body', this).css('height', 'auto').each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            }).css('height', maxH + 'px');
            $('.features-bodies', this).css('height', maxH + 'px');
        });
    });

    $('.content-24 .features .features-header .box').click(function() {
        $(this).addClass('active').parent().children().not(this).removeClass('active');
        $(this).closest('.features').find('.features-body').removeClass('active').eq($(this).index()).addClass('active');
        return false;
    });

};
/* Content 25*/
startupKit.uiKitContent.content25 = function() {

    if ((!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) || (window.mobile)) {
        $('.svg').remove();
        $('.nosvg').attr('style', 'display:block;');
    }

    (function(el) {
        el.css('opacity', 0);
        $svg = $('#spaceship', el);
        $('#rocket-raw', $svg).attr('transform', 'translate(-100,100)');
        $('#rocketmask1', $svg).attr('transform', 'translate(100,-100)');

        $(window).resize(function() {
            if (!el.hasClass('ani-processed')) {
                el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
            }
            var svg = $('.content-25 .svg');
            var nosvg = $('.content-25 .nosvg');
            $('.content-25 .col-sm-6:nth-child(2)').show();
            $('.content-25 .col-sm-6:nth-child(2)').append(nosvg);
        }).scroll(function() {
            if (!el.hasClass('ani-processed')) {
                if ($(window).scrollTop() >= el.data('scrollPos')) {
                    el.addClass('ani-processed');
                    el.animate({
                        opacity : 1
                    }, 600);
                    $('#rocket-raw, #rocketmask1', $svg).clearQueue().stop().animate({
                        svgTransform : 'translate(0,0)'
                    }, {
                        duration : 800,
                        easing : "easeInOutQuad"
                    });
                }
            }
        });
    })($('.content-25 .col-sm-6 + .col-sm-6'));

};
/* Content 26*/
startupKit.uiKitContent.content26 = function() {};

/* Content 27*/
startupKit.uiKitContent.content27 = function() {
    if ((!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) || (window.mobile)) {
        $('.svg').remove();
        $('.nosvg').attr('style', 'display:block;');
    }

    $(window).resize(function() {
        var svg = $('.content-27 .svg');
        var nosvg = $('.content-27 .nosvg');
        $('.content-27 .col-sm-4:first-child').show();
        $('.content-27 .col-sm-4:first-child').append(nosvg);
    });
};
/* Content 28*/
startupKit.uiKitContent.content28 = function() {};
/* Content 29*/
startupKit.uiKitContent.content29 = function() {};
/* Content 30*/
startupKit.uiKitContent.content30 = function() {

    $(window).resize(function() {
        var boxes = $('.content-30 .col-sm-3');
        for (var t = 0; t <= boxes.length; t++) {
            var descTop = $(boxes[t]).find('.description-top');
            if ($(window).width() <= 480) {
                $(boxes[t]).find('.img').after(descTop);

            } else {
                $(boxes[t]).find('.img').before(descTop);
            }
        }
    });

};
/* Content 31*/
startupKit.uiKitContent.content31 = function() {
    (function(el) {
        $(window).scroll(function() {
            if ($(window).width() > 480) {
                $('.row', el).each(function(idx) {
                    if ($(window).scrollTop() >= ($(this).offset().top - $(window).height() + $(window).height() / 2 + 100)) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                });
            }
        });
        $(window).resize(function() {
            $('.page-transitions', el).each(function() {
                var maxH = 0;
                $('.pt-page', this).css('height', 'auto').each(function() {
                    var h = $(this).outerHeight();
                    if (h > maxH)
                        maxH = h;
                }).css('height', maxH + 'px');
                $(this).css('height', maxH + 'px');
            });
        });
        $('.page-transitions', el).each(function() {
            var pt = PageTransitions();
            pt.init(this);

            $('.pt-control-prev', this).on('click', function() {
                pt.gotoPage(68, 'prev');
                return false;
            });

            $('.pt-control-next', this).on('click', function() {
                pt.gotoPage(68, 'next');
                return false;
            });
        });
    })($('.content-31'));
};

/* Content 32*/
startupKit.uiKitContent.content32 = function() {}

/* Content 33*/
startupKit.uiKitContent.content33 = function() {}

/* Content 34*/
startupKit.uiKitContent.content34 = function() {
    $(window).resize(function() {
        var maxH = 0;
        $('.content-34 section').each(function() {
            var h = $(this).outerHeight();
            if (h > maxH)
                maxH = h;
        });
        $('.content-34 .page-transitions').css('height', maxH + 'px');
        var ctrlsHeight = $('.content-34 .pt-controls').height();
        $('.content-34 .pt-controls').css('margin-top', (-1) * ctrlsHeight / 2 + 'px');
    });
    // PageTransitions
    var pt = PageTransitions();
    pt.init('#content-34-pt-main');
    $('.content-34 .pt-controls .pt-indicators > *').on('click', function() {
        if ($(this).hasClass('active'))
            return false;
        var curPage = $(this).parent().children('.active').index();
        var nextPage = $(this).index();
        var ani = 5;
        if (curPage < nextPage) {
            ani = 6;
        }
        pt.gotoPage(ani, nextPage);
        $(this).addClass('active').parent().children().not(this).removeClass('active');        
        return false;
    });
}

/* Content 35*/
startupKit.uiKitContent.content35 = function() {
    if($(".content-35-slider").length) {
        $('.content-35-slider').bxSlider({
            'controls': false,
            'pagerCustom': '.content-35-customPager',
            'adaptiveHeight': true,
            'infiniteLoop': false
        });
    }
    var pager = $('.content-35-customPager');
    pager.find($('.menuicon')).on('mouseenter', function(){
        $(this).parent().addClass('showmenu');
    })
    pager.on('mouseleave', function(){
        $(this).removeClass('showmenu');
    })
    pager.find($('.menuicon')).on('click', function(){
        var menu = $(this).parent();
        if(menu.hasClass('showmenu')) {
            menu.removeClass('showmenu');
        } else {
            menu.addClass('showmenu');
        }
    })
}

/* Content 36*/
startupKit.uiKitContent.content36 = function() {}
/* Content 37*/
startupKit.uiKitContent.content37 = function() {}
/* Content 38*/
startupKit.uiKitContent.content38 = function() {
    //samples grid
    var samplesGrid = $('.samples-grid');
    setTimeout(function () {
        samplesGrid.masonry({itemSelector: '.sample-box'});
    }, 3000);

    //show images on scroll
    if (!isMobile.any()) {
        $(document).scroll(function () {
            var samples = $('.samples-holder');
            var samplesCont = samples.offset();
            var scrollTop = $(document).scrollTop();
            if (scrollTop >= samplesCont.top - $(window).height() + 200) {
                samplesGrid.masonry({itemSelector: '.sample-box'})
            }

            //samples
            if ($(document).scrollTop() >= samplesCont.top - $(window).height() / 2) {
                if (!$('.samples-holder').hasClass('shown')) {
                    if (!isMobile.any()) {
                        addSamplesInt = setInterval(function () {
                            var elements = $('.sample-box:not(.visible)');
                            var random = Math.round(Math.random() * elements.size());
                            var el = elements.eq(random);
                            el.addClass('visible');
                            if (elements.size() == 0) {
                                clearInterval(addSamplesInt);
                            }
                        }, 50);
                    }
                    $('.samples-holder').addClass('shown');
                }
            }
        });
    }
    else{
        $('.samples-holder').addClass('shown');
        $('.sample-box').addClass('visible');
    }
    //can I see the real pixels?
    $('.samples-holder img').click(function () {
        var imgsrc = $(this).attr('src');
        var file = imgsrc.split('/');
        var filename = file[file.length - 1];
        var structure = $(this).data('structure');
        var path = imgsrc.split('/' + filename);
        path = path[0];
        showLargeImage(filename, path + '-large/', $(this), 'next', structure);
    });

    if (window.location.hash.indexOf(".samples-holder") != -1) {
        var id = window.location.hash;
        $(id).click();
    }

    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            $('.largeScreenshots .prev').click();
            return false;
        }
        if (e.keyCode == 39) {
            $('.largeScreenshots .next').click();
            return false;
        }
        if (e.keyCode == 38) {
            $('.largeScreenshots').clearQueue().animate({ scrollTop: $('.largeScreenshots').scrollTop() - 500 + "px"}, 250);
            return false;
        }
        if (e.keyCode == 40) {
            $('.largeScreenshots').clearQueue().animate({ scrollTop: $('.largeScreenshots').scrollTop() + 500 + "px"}, 250);
            return false;
        }
        if (e.keyCode == 27) {
            $('.close').click();
            return false;
        }
    });

    function showLargeImage(file, prefix, obj, direction, structure) {

        //dark screen, add elements
        if (!$('body').hasClass('largescreenshotsopened')) {
            $('body').addClass('noscroll').addClass('largescreenshotsopened').append('<div class="largeScreenshots"><div class="picHolder"><h1></h1><span></span><div class="imgHolder"><img/></div></div><div class="prev"></div><div class="next"></div><div class="close"></div></div>');
            $('.largeScreenshots .close, .largeScreenshots span').click(function (e) {
                $('body').removeClass('noscroll').removeClass('largescreenshotsopened');
                $('.largeScreenshots').remove();
                window.location.hash = "/";
            });
        }

        //show me the image
        $('.largeScreenshots .imgHolder img').attr('src', prefix + file);
        $('.largeScreenshots .imgHolder img').ready(function (e) {
            $('.largeScreenshots').scrollTop(0);
            $('.largeScreenshots .imgHolder img');
            $('.largeScreenshots h1').text(obj.attr('alt'));

            window.location.hash=obj.attr('id');

            var speed = '0.75s cubic-bezier(.27,1.64,.32,.95)';
            $('.picHolder, .picHolder h1').css('-webkit-animation', direction + " " + speed).css('-moz-animation', direction + " " + speed).css('-ms-animation', direction + " " + speed).css("-o-animation", direction + " " + speed).css("animation", direction + " " + speed);
            setTimeout(function () {
                $('.picHolder, .picHolder h1').removeAttr('style');
            }, 750);
        });

        //set nice position for arrows

        function setNicePosition(){
            var p = $(".largeScreenshots .picHolder");
            var position = p.position();
            var size = $('.largeScreenshots img').outerHeight();
            var scrolltop = $(".largeScreenshots").scrollTop()
            if (position.top+192> 0) {
                $('.largeScreenshots .prev, .largeScreenshots .next').css('top', position.top+192).css('height', $(window).height() - position.top  - 192);
            } else if (scrolltop + $(window).height() > size+192+36) {
                var posFromBottom = (scrolltop + $(window).height()) - (size+192+36);
                $('.largeScreenshots .prev, .largeScreenshots .next').css('top', 0).css('height', $(window).height()-posFromBottom);
            } else {
                $('.largeScreenshots .prev, .largeScreenshots .next').css('top', 0).css('height', $(window).height());
            }
        }
        setNicePosition()

        $('.largeScreenshots').scroll(function () {
            setNicePosition();
        });

        //preload pics
        var newObj = obj.parent().nextOrFirst('.samples-holder .sample-box').find('img');
        var imgsrc = newObj.attr('src');
        var file = imgsrc.split('/');
        var filename = file[file.length - 1];
        var path = imgsrc.split('/' + filename);
        path = path[0];
        $([path + '-large/' + filename]).preload();

        var newObj = obj.parent().prevOrLast('.samples-holder .sample-box').find('img');
        var imgsrc = newObj.attr('src');
        var file = imgsrc.split('/');
        var filename = file[file.length - 1];
        var path = imgsrc.split('/' + filename);
        path = path[0];
        $([path + '-large/' + filename]).preload();

        //get next picure and show next
        $('.largeScreenshots .prev,.largeScreenshots .next, .largeScreenshots .imgHolder img').unbind();
        setTimeout(function () {
            $('.largeScreenshots .prev').click(function () {
                var newObj = obj.parent().prevOrLast('.samples-holder .sample-box').find('img');
                var structure = obj.data('structure');
                var imgsrc = newObj.attr('src');
                var file = imgsrc.split('/');
                var filename = file[file.length - 1];
                var path = imgsrc.split('/' + filename);
                path = path[0];

                showLargeImage(filename, path + '-large/', newObj, "prev",structure);
            });

            $('.largeScreenshots .next, .largeScreenshots .imgHolder img').click(function () {

                var newObj = obj.parent().nextOrFirst('.samples-holder .sample-box').find('img');
                var structure = newObj.data('structure');
                var imgsrc = newObj.attr('src');
                var file = imgsrc.split('/');
                var filename = file[file.length - 1];
                var path = imgsrc.split('/' + filename);
                path = path[0];

                showLargeImage(filename, path + '-large/', newObj, "next",structure);
            });
        },750);

        //add swipe gesture for mobile
         if (isMobile.any()){
             $('.largeScreenshots .imgHolder img').touchwipe({
                  wipeLeft: function() { $('.largeScreenshots .next').click(); },
                 wipeRight: function(){ $('.largeScreenshots .prev').click(); },
                 min_move_x: 20,
                  min_move_y: 20,
                 preventDefaultEvents: false
             });
         }
    }
};


/**
 * Blogs 
 */

startupKit.uiKitBlog = startupKit.uiKitBlog || {};

/* Blog 1*/
startupKit.uiKitBlog.blog1 = function() {

    $(window).resize(function() {
        $('.page-transitions').each(function() {
            var maxH = 0;
            $('.pt-page', this).css('height', 'auto').each(function() {
                var h = $(this).outerHeight();
                if (h > maxH)
                    maxH = h;
            }).css('height', maxH + 'px');
            $(this).css('height', maxH + 'px');
        });
    });

    var pt1 = PageTransitions();
    pt1.init($('#b1-pt-1'));

    $('#b1-pt-1 .pt-control-prev').on('click', function() {
        pt1.gotoPage(28, 'prev');
        return false;
    });

    $('#b1-pt-1 .pt-control-next').on('click', function() {
        pt1.gotoPage(29, 'next');
        return false;
    });

};

/* Blog 2*/
startupKit.uiKitBlog.blog2 = function() {};
/* Blog 3*/
startupKit.uiKitBlog.blog3 = function() {};
/* Blog 4*/
startupKit.uiKitBlog.blog4 = function() {};
/* Blog 5*/
startupKit.uiKitBlog.blog5 = function() {

    var pt2 = PageTransitions();
    pt2.init($('#b5-pt-2'));

    $('#b5-pt-2 .pt-control-prev').on('click', function() {
        pt2.gotoPage(28, 'prev');
        return false;
    });

    $('#b5-pt-2 .pt-control-next').on('click', function() {
        pt2.gotoPage(29, 'next');
        return false;
    });

};

/**
 * Crews 
 */

startupKit.uiKitCrew = startupKit.uiKitCrew ||
function() {
    $('.member .photo img').each(function() {
        $(this).hide().parent().css('background-image', 'url("' + this.src + '")');
    });
};


/**
 * Projects 
 */
startupKit.uiKitProjects = startupKit.uiKitProjects || {};

/* project-1 */
startupKit.uiKitProjects.project1 = function() {};

/* project-2 */
startupKit.uiKitProjects.project2 = function() {};

/* project-3 */
startupKit.uiKitProjects.project3 = function() {};

/* project-4 */
startupKit.uiKitProjects.project4 = function() {
    $('.overlay').on('hover', function() {
        $(this).closest('.project').find('.name').toggleClass('hover');
    });
};



/**
 * Footers 
 */
startupKit.uiKitFooter = startupKit.uiKitFooter || {};

/* Footer 1*/
startupKit.uiKitFooter.footer1 = function() {};

/* Footer 2*/
startupKit.uiKitFooter.footer2 = function() {};

/* Footer 3*/
startupKit.uiKitFooter.footer3 = function() {};

/* Footer 4*/
startupKit.uiKitFooter.footer4 = function() {};

/* Footer 5*/
startupKit.uiKitFooter.footer5 = function() {};

/* Footer 6*/
startupKit.uiKitFooter.footer6 = function() {};

/* Footer 7*/
startupKit.uiKitFooter.footer7 = function() {};

/* Footer 8*/
startupKit.uiKitFooter.footer8 = function() {};

/* Footer 9*/
startupKit.uiKitFooter.footer9 = function() {};

/* Footer 10*/
startupKit.uiKitFooter.footer10 = function() {};

/* Footer 11*/
startupKit.uiKitFooter.footer11 = function() {};

/* Footer 12*/
startupKit.uiKitFooter.footer12 = function() {};

/* Footer 13*/
startupKit.uiKitFooter.footer13 = function() {};

/* Footer 14*/
startupKit.uiKitFooter.footer14 = function() {};

/* Footer 15*/
startupKit.uiKitFooter.footer15 = function() {};


/** 
 * Global part of startup-kit
 * */
(function($) {
    $(function() {
        /* implementing headers */
        for (header in startupKit.uiKitHeader) {
            headerNumber = header.slice(6);
            if (jQuery('.header-' + headerNumber).length != 0) {
                startupKit.uiKitHeader[header]();
            };
        }

        /* implementing contents */
        for (content in startupKit.uiKitContent) {
            contentNumber = content.slice(7);
            if (jQuery('.content-' + contentNumber).length != 0) {
                startupKit.uiKitContent[content]();
            };
        }
        
        /* implementing blogs */
        for (blog in startupKit.uiKitBlog) {
            blogNumber = blog.slice(4);
            if (jQuery('.blog-' + blogNumber).length != 0) {
                startupKit.uiKitBlog[blog]();
            };
        }
        
        /* implementing projects */
        for (project in startupKit.uiKitProjects) {
            projectNumber = project.slice(7);
            if (jQuery('.projects-' + projectNumber).length != 0) {
                startupKit.uiKitProjects[project]();
            };
        }

        /* implementing crew */
        startupKit.uiKitCrew();

        /* implementing footers */
        for (footer in startupKit.uiKitFooter) {
            footerNumber = footer.slice(6);
            if (jQuery('.footer-' + footerNumber).length != 0) {
                startupKit.uiKitFooter[footer]();
            };
        }
    
        /* function on load */
        $(window).load(function() {
            $('html').addClass('loaded');
            $(window).resize();
        });

        /* ie fix images */
        if (/msie/i.test(navigator.userAgent)) {
            $('img').each(function() {
                $(this).css({
                    width : $(this).attr('width') + 'px',
                    height : 'auto'
                });
            });
        }

        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });

        // replace project img to background-image
        $('.project .photo img').each(function() {
            $(this).hide().parent().css('background-image', 'url("' + this.src + '")');
        });

        // Tiles
        var tiles = $('.tiles');

        // Tiles phone mode
        $(window).resize(function() {
            if ($(this).width() < 768) {
                if (!tiles.hasClass('phone-mode')) {
                    $('td[class*="tile-"]', tiles).each(function() {
                        $('<div />').addClass(this.className).append($(this).contents()).appendTo(tiles);
                    });

                    tiles.addClass('phone-mode');
                }
            } else {
                if (tiles.hasClass('phone-mode')) {
                    $('> [class*="tile-"]', tiles).each(function(idx) {
                        $('td[class*="tile-"]', tiles).eq(idx).append($(this).contents());
                        $(this).remove();
                    });

                    tiles.removeClass('phone-mode');
                }
            }
        });

        tiles.on('mouseenter', '[class*="tile-"]', function() {
            $(this).removeClass('faded').closest('.tiles').find('[class*="tile-"]').not(this).addClass('faded');
        }).on('mouseleave', '[class*="tile-"]', function() {
            $(this).closest('.tiles').find('[class*="tile-"]').removeClass('faded');
        });
        
        
    });
    //add some smooth for scroll


})(jQuery);
//swipe
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft();e.preventDefault()}else{config.wipeRight();e.preventDefault()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);















