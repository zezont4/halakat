/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
    return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
    void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
    // Custom Easing
    jQuery.extend( jQuery.easing,
    {
      easeInOutMaterial: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return c/4*((t-=2)*t*t + 2) + b;
      }
    });


/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));

!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));

// Required for Meteor package, the use of window prevents export by Meteor
(function(window){
  if(window.Package){
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);


// Unique ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};

// Velocity has conflicts when loaded with jQuery, this will check for it
var Vel;
if ($) {
  Vel = $.Velocity;
}
else {
  Vel = Velocity;
}

(function ($) {
  $(document).ready(function() {

    // jQuery reverse
    $.fn.reverse = [].reverse;

    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {
      var $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {
      var $this = $(this);
      closeFABMenu($this);
    });

    // Toggle-on-click behaviour.
    $(document).on('click.fixedActionBtn', '.fixed-action-btn.click-to-toggle > a', function(e) {
      var $this = $(this);
      var $menu = $this.parent();
      if ($menu.hasClass('active')) {
        closeFABMenu($menu);
      } else {
        openFABMenu($menu);
      }
    });

  });

  $.fn.extend({
    openFAB: function() {
      var $this = $(this);
      openFABMenu($this);
    },
    closeFAB: function() {
      closeFABMenu($this);
    }
  });


  var openFABMenu = function (btn) {
    $this = btn;
    if ($this.hasClass('active') === false) {

      // Get direction option
      var horizontal = $this.hasClass('horizontal');
      var offsetY, offsetX;

      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }

      $this.addClass('active');
      $this.find('ul .btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
        { duration: 0 });

      var time = 0;
      $this.find('ul .btn-floating').reverse().each( function () {
        $(this).velocity(
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},
          { duration: 80, delay: time });
        time += 40;
      });
    }
  };

  var closeFABMenu = function (btn) {
    $this = btn;
    // Get direction option
    var horizontal = $this.hasClass('horizontal');
    var offsetY, offsetX;

    if (horizontal === true) {
      offsetX = 40;
    } else {
      offsetY = 40;
    }

    $this.removeClass('active');
    var time = 0;
    $this.find('ul .btn-floating').velocity("stop", true);
    $this.find('ul .btn-floating').velocity(
      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
      { duration: 80 }
    );
  };


}( jQuery ));

(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }


    });

  });
}( jQuery ));
(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (option) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left'
    };

    this.each(function(){
    var origin = $(this);
    var options = $.extend({}, defaults, option);
    var isFocused = false;

    // Dropdown menu
    var activates = $("#"+ origin.attr('data-activates'));

    function updateOptions() {
      if (origin.data('induration') !== undefined)
        options.inDuration = origin.data('inDuration');
      if (origin.data('outduration') !== undefined)
        options.outDuration = origin.data('outDuration');
      if (origin.data('constrainwidth') !== undefined)
        options.constrain_width = origin.data('constrainwidth');
      if (origin.data('hover') !== undefined)
        options.hover = origin.data('hover');
      if (origin.data('gutter') !== undefined)
        options.gutter = origin.data('gutter');
      if (origin.data('beloworigin') !== undefined)
        options.belowOrigin = origin.data('beloworigin');
      if (origin.data('alignment') !== undefined)
        options.alignment = origin.data('alignment');
    }

    updateOptions();

    // Attach dropdown to its activator
    origin.after(activates);

    /*
      Helper function to position and resize dropdown.
      Used in hover and click handler.
    */
    function placeDropdown(eventType) {
      // Check for simultaneous focus and click events.
      if (eventType === 'focus') {
        isFocused = true;
      }

      // Check html data attributes
      updateOptions();

      // Set Dropdown state
      activates.addClass('active');
      origin.addClass('active');

      // Constrain width
      if (options.constrain_width === true) {
        activates.css('width', origin.outerWidth());

      } else {
        activates.css('white-space', 'nowrap');
      }

      // Below Origin
      var verticalOffset = 0;
      if (options.belowOrigin === true) {
        verticalOffset = origin.height();
      }

      // Offscreen detection
      var offsetLeft = origin.offset().left;
      var offsetTop = origin.offset().top - $(window).scrollTop();
      var currAlignment = options.alignment;
      var activatesLeft, gutterSpacing;
      if (offsetLeft + activates.innerWidth() > $(window).width()) {
        // Dropdown goes past screen on right, force right alignment
        currAlignment = 'right';

      } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
        // Dropdown goes past screen on left, force left alignment
        currAlignment = 'left';
      }
      // Vertical bottom offscreen detection
      if (offsetTop + activates.innerHeight() > window.innerHeight) {
        if (!verticalOffset) {
          verticalOffset += origin.innerHeight();
        }
        verticalOffset -= activates.innerHeight();
      }

      // Handle edge alignment
      if (currAlignment === 'left') {
        gutterSpacing = options.gutter;
        leftPosition = origin.position().left + gutterSpacing;
      }
      else if (currAlignment === 'right') {
        var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
        gutterSpacing = -options.gutter;
        leftPosition =  offsetRight + gutterSpacing;
      }

      // Position dropdown
      activates.css({
        position: 'absolute',
        top: origin.position().top + verticalOffset,
        left: leftPosition
      });


      // Show dropdown
      activates.stop(true, true).css('opacity', 0)
        .slideDown({
        queue: false,
        duration: options.inDuration,
        easing: 'easeOutCubic',
        complete: function() {
          $(this).css('height', '');
        }
      })
        .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});
    }

    function hideDropdown() {
      // Check for simultaneous focus and click events.
      isFocused = false;
      activates.fadeOut(options.outDuration);
      activates.removeClass('active');
      origin.removeClass('active');
    }

    // Hover
    if (options.hover) {
      var open = false;
      origin.unbind('click.' + origin.attr('id'));
      // Hover handler to show dropdown
      origin.on('mouseenter', function(e){ // Mouse over
        if (open === false) {
          placeDropdown();
          open = true;
        }
      });
      origin.on('mouseleave', function(e){
        // If hover on origin then to something other than dropdown content, then close
        var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
        if(!$(toEl).closest('.dropdown-content').is(activates)) {
          activates.stop(true, true);
          hideDropdown();
          open = false;
        }
      });

      activates.on('mouseleave', function(e){ // Mouse out
        var toEl = e.toElement || e.relatedTarget;
        if(!$(toEl).closest('.dropdown-button').is(origin)) {
          activates.stop(true, true);
          hideDropdown();
          open = false;
        }
      });

    // Click
    } else {
      // Click handler to show dropdown
      origin.unbind('click.' + origin.attr('id'));
      origin.bind('click.'+origin.attr('id'), function(e){
        if (!isFocused) {
          if ( origin[0] == e.currentTarget &&
               !origin.hasClass('active') &&
               ($(e.target).closest('.dropdown-content').length === 0)) {
            e.preventDefault(); // Prevents button click from moving window
            placeDropdown('click');
          }
          // If origin is clicked and menu is open, close menu
          else if (origin.hasClass('active')) {
            hideDropdown();
            $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));
          }
          // If menu open, add click close handler to document
          if (activates.hasClass('active')) {
            $(document).bind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e) {
              if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length) ) {
                hideDropdown();
                $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));
              }
            });
          }
        }
      });

    } // End else

    // Listen to open and close event - useful for select component
    origin.on('open', function(e, eventType) {
      placeDropdown(eventType);
    });
    origin.on('close', hideDropdown);


   });
  }; // End dropdown plugin

  $(document).ready(function(){
    $('.dropdown-button').dropdown();
  });
}( jQuery ));
(function ($) {
  var $body = $('body');
  $(document).ready(function() {

    // Function to update labels of text fields
    Materialize.updateTextFields = function() {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {
        if ($(element).val().length > 0 || $(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
          $(this).siblings('label').addClass('active');
        }
        else {
          $(this).siblings('label, i').removeClass('active');
        }
      });
    };

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Handle HTML5 autofocus
    $('input[autofocus]').siblings('label, i').addClass('active');

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function(e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label, i').removeClass('active');
          }
        });

        // Reset select
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, i').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this);
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        $inputElement.siblings('label, i').removeClass('active');
      }

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') !== undefined) {
        $inputElement.siblings('i').removeClass('active');
      }
      validate_field($inputElement);
    });

    window.validate_field = function(object) {
      var hasLength = object.attr('length') !== undefined;
      var lenAttr = parseInt(object.attr('length'));
      var len = object.val().length;

      if (object.val().length === 0 && object[0].validity.badInput === false) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      }
      else {
        if (object.hasClass('validate')) {
          // Check for character counter attributes
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
            object.removeClass('invalid');
            object.addClass('valid');
          }
          else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    };


    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $body.append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');

      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }

      if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal")
                 .css('white-space', "pre");
      }

      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);


      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      }
      else {
        hiddenDiv.css('width', $(window).width()/2);
      }

      $textarea.css('height', hiddenDiv.height());
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      if ($textarea.val().length) {
        textareaAutoResize($textarea);
      }
    });

    $body.on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files      = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]';
    var range_mousedown = false;
    var left;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var range_wrapper = '.range-field';
    $(document).on('change', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');
      thumb.find('.value').html($(this).val());
    });

    $(document).on('input mousedown touchstart', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');
      var width = $(this).outerWidth();

      // If thumb indicator does not exist yet, create it
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).append(thumb);
      }

      // Set indicator value
      thumb.find('.value').html($(this).val());

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }

      if (e.type !== 'input') {
        if(e.pageX === undefined || e.pageX === null){//mobile
           left = e.originalEvent.touches[0].pageX - $(this).offset().left;
        }
        else{ // desktop
           left = e.pageX - $(this).offset().left;
        }
        if (left < 0) {
          left = 0;
        }
        else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
      }

      thumb.find('.value').html($(this).val());
    });

    $(document).on('mouseup touchend', range_wrapper, function() {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on('mousemove touchmove', range_wrapper, function(e) {
      var thumb = $(this).children('.thumb');
      var left;
      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' });
        }
        if (e.pageX === undefined || e.pageX === null) { //mobile
          left = e.originalEvent.touches[0].pageX - $(this).offset().left;
        }
        else{ // desktop
          left = e.pageX - $(this).offset().left;
        }
        var width = $(this).outerWidth();

        if (left < 0) {
          left = 0;
        }
        else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
        thumb.find('.value').html(thumb.siblings(range_type).val());
      }
    });

    $(document).on('mouseout touchleave', range_wrapper, function() {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });
  }); // End of $(document).ready

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function(){
      var $select = $(this);

      if ($select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      var multiple = $select.attr('multiple') ? true : false,
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt

      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-'+lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if(callback === 'destroy') {
        $select.data('select-id', null).removeClass('initialized');
        return;
      }

      var uniqueID = Materialize.guid();
      $select.data('select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>');
      var selectOptions = $select.children('option');
      var selectOptGroups = $select.children('optgroup');

      var valuesSelected = [],
          optionsHover = false;

      if ($select.find('option:selected').length > 0) {
        label = $select.find('option:selected');
      } else {
        label = selectOptions.first();
      }

      /* Create dropdown structure. */
      if (selectOptGroups.length) {
        // Check for optgroup
        selectOptGroups.each(function() {
          selectOptions = $(this).children('option');
          options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

          selectOptions.each(function() {
            var disabledClass = ($(this).is(':disabled')) ? 'disabled ' : '';

            // Add icons
            if ($select.hasClass('icons')) {
              var icon_url = $(this).data('icon');
              var classes = $(this).attr('class');
              if (!!icon_url) {
                options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '" class="' + classes + '"><span>' + $(this).html() + '</span></li>'));
                return true;
              }
            }
            options.append($('<li class="' + disabledClass + '"><span>' + $(this).html() + '</span></li>'));
          });
        });
      } else {
        selectOptions.each(function () {
          // Add disabled attr if disabled
          var disabledClass = ($(this).is(':disabled')) ? 'disabled ' : '';
          if (multiple) {
            options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + $(this).html() + '</span></li>'));
          } else {
            // Add icons
            if ($select.hasClass('icons')) {
              var icon_url = $(this).data('icon');
              var classes = $(this).attr('class');
              if (!!icon_url) {
                options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '" class="' + classes + '"><span>' + $(this).html() + '</span></li>'));
                return true;
              }
            }
            options.append($('<li class="' + disabledClass + '"><span>' + $(this).html() + '</span></li>'));
          }
        });
      }


      options.find('li:not(.optgroup)').each(function (i) {
        var $curr_select = $select;
        $(this).click(function (e) {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });
              toggleEntryFromArray(valuesSelected, $(this).index(), $curr_select);
              $newSelect.trigger('focus');

            } else {
              options.find('li').removeClass('active');
              $(this).toggleClass('active');
              $curr_select.siblings('input.select-dropdown').val($(this).text());
            }

            activateOption(options, $(this));
            $curr_select.find('option').eq(i).prop('selected', true);
            // Trigger onchange() event
            $curr_select.trigger('change');
            if (typeof callback !== 'undefined') callback();
          }

          e.stopPropagation();
        });
      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<span class="caret">&#9660;</span>');
      if ($select.is(':disabled'))
        dropdownIcon.addClass('disabled');

      // escape double quotes
      var sanitizedLabelHtml = label.html() && label.html().replace(/"/g, '&quot;');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $body.append(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({'hover': false, 'closeOnClick': false});
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on({
        'focus': function (){
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close');
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus']);
            var label = $(this).val();
            var selectedOption = options.find('li').filter(function() {
              return $(this).text().toLowerCase() === label.toLowerCase();
            })[0];
            activateOption(options, selectedOption);
          }
        },
        'click': function (e){
          e.stopPropagation();
        }
      });

      $newSelect.on('blur', function() {
        if (!multiple) {
          $(this).trigger('close');
        }
        options.find('li.selected').removeClass('selected');
      });

      options.hover(function() {
        optionsHover = true;
      }, function () {
        optionsHover = false;
      });

      $(window).on({
        'click': function (e){
          multiple && (optionsHover || $newSelect.trigger('close'));
        }
      });

      // Make option as selected and scroll to selected position
      activateOption = function(collection, newOption) {
        collection.find('li.selected').removeClass('selected');
        $(newOption).addClass('selected');
      };

      // Allow user to search by typing
      // this array is cleared after 1 second
      var filterQuery = [],
          onKeyDown = function(e){
            // TAB - switch to another input
            if(e.which == 9){
              $newSelect.trigger('close');
              return;
            }

            // ARROW DOWN WHEN SELECT IS CLOSED - open select options
            if(e.which == 40 && !options.is(':visible')){
              $newSelect.trigger('open');
              return;
            }

            // ENTER WHEN SELECT IS CLOSED - submit form
            if(e.which == 13 && !options.is(':visible')){
              return;
            }

            e.preventDefault();

            // CASE WHEN USER TYPE LETTERS
            var letter = String.fromCharCode(e.which).toLowerCase(),
                nonLetters = [9,13,27,38,40];
            if (letter && (nonLetters.indexOf(e.which) === -1)) {
              filterQuery.push(letter);

              var string = filterQuery.join(''),
                  newOption = options.find('li').filter(function() {
                    return $(this).text().toLowerCase().indexOf(string) === 0;
                  })[0];

              if (newOption) {
                activateOption(options, newOption);
              }
            }

            // ENTER - select option and close when select options are opened
            if (e.which == 13) {
              var activeOption = options.find('li.selected:not(.disabled)')[0];
              if(activeOption){
                $(activeOption).trigger('click');
                if (!multiple) {
                  $newSelect.trigger('close');
                }
              }
            }

            // ARROW DOWN - move to next not disabled option
            if (e.which == 40) {
              if (options.find('li.selected').length) {
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];
              } else {
                newOption = options.find('li:not(.disabled)')[0];
              }
              activateOption(options, newOption);
            }

            // ESC - close options
            if (e.which == 27) {
              $newSelect.trigger('close');
            }

            // ARROW UP - move to previous not disabled option
            if (e.which == 38) {
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
              if(newOption)
                activateOption(options, newOption);
            }

            // Automaticaly clean filter query so user can search again by starting letters
            setTimeout(function(){ filterQuery = []; }, 1000);
          };

      $newSelect.on('keydown', onKeyDown);
    });

    function toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex);

      if (index === -1) {
        entriesArray.push(entryIndex);
      } else {
        entriesArray.splice(index, 1);
      }

      select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');
      select.find('option').eq(entryIndex).prop('selected', true);
      setValueToInput(entriesArray, select);
    }

    function setValueToInput(entriesArray, select) {
      var value = '';

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text();

        i === 0 ? value += text : value += ', ' + text;
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text();
      }

      select.siblings('input.select-dropdown').val(value);
    }
  };

}( jQuery ));

(function($) {
    var _stack = 0,
    _lastID = 0,
    _generateID = function() {
      _lastID++;
      return 'materialize-lean-overlay-' + _lastID;
    };

  $.fn.extend({
    openModal: function(options) {

      $('body').css('overflow', 'hidden');

      var defaults = {
        opacity: 0.5,
        in_duration: 350,
        out_duration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        starting_top: '4%'
      },
      overlayID = _generateID(),
      $modal = $(this),
      $overlay = $('<div class="lean-overlay"></div>'),
      lStack = (++_stack);

      // Store a reference of the overlay
      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);

      $("body").append($overlay);

      // Override defaults
      options = $.extend(defaults, options);

      if (options.dismissible) {
        $overlay.click(function() {
          $modal.closeModal(options);
        });
        // Return on ESC
        $(document).on('keyup.leanModal' + overlayID, function(e) {
          if (e.keyCode === 27) {   // ESC key
            $modal.closeModal(options);
          }
        });
      }

      $modal.find(".modal-close").on('click.close', function(e) {
        $modal.closeModal(options);
      });

      $overlay.css({ display : "block", opacity : 0 });

      $modal.css({
        display : "block",
        opacity: 0
      });

      $overlay.velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});
      $modal.data('associated-overlay', $overlay[0]);

      // Define Bottom Sheet animation
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({bottom: "0", opacity: 1}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }
      else {
        $.Velocity.hook($modal, "scaleX", 0.7);
        $modal.css({ top: options.starting_top });
        $modal.velocity({top: "10%", opacity: 1, scaleX: '1'}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }


    }
  });

  $.fn.extend({
    closeModal: function(options) {
      var defaults = {
        out_duration: 250,
        complete: undefined
      },
      $modal = $(this),
      overlayID = $modal.data('overlay-id'),
      $overlay = $('#' + overlayID);

      options = $.extend(defaults, options);

      // Disable scrolling
      $('body').css('overflow', '');

      $modal.find('.modal-close').off('click.close');
      $(document).off('keyup.leanModal' + overlayID);

      $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});


      // Define Bottom Sheet animation
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({bottom: "-100%", opacity: 0}, {
          duration: options.out_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            $overlay.css({display:"none"});

            // Call complete callback
            if (typeof(options.complete) === "function") {
              options.complete();
            }
            $overlay.remove();
            _stack--;
          }
        });
      }
      else {
        $modal.velocity(
          { top: options.starting_top, opacity: 0, scaleX: 0.7}, {
          duration: options.out_duration,
          complete:
            function() {

              $(this).css('display', 'none');
              // Call complete callback
              if (typeof(options.complete) === "function") {
                options.complete();
              }
              $overlay.remove();
              _stack--;
            }
          }
        );
      }
    }
  });

  $.fn.extend({
    leanModal: function(option) {
      return this.each(function() {

        var defaults = {
          starting_top: '4%'
        },
        // Override defaults
        options = $.extend(defaults, option);

        // Close Handlers
        $(this).click(function(e) {
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) /1.15;
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          $(modal_id).openModal(options);
          e.preventDefault();
        }); // done set on click
      }); // done return
    }
  });
})(jQuery);

Materialize.toast = function (message, displayLength, className, completeCallback) {
    className = className || "";

    var container = document.getElementById('toast-container');

    // Create toast container if it does not exist
    if (container === null) {
        // create notification container
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    // Select and append toast
    var newToast = createToast(message);

    // only append toast if message is not undefined
    if(message){
        container.appendChild(newToast);
    }

    newToast.style.top = '35px';
    newToast.style.opacity = 0;

    // Animate toast in
    Vel(newToast, { "top" : "0px", opacity: 1 }, {duration: 300,
      easing: 'easeOutCubic',
      queue: false});

    // Allows timer to be pause while being panned
    var timeLeft = displayLength;
    var counterInterval = setInterval (function(){


      if (newToast.parentNode === null)
        window.clearInterval(counterInterval);

      // If toast is not being dragged, decrease its time remaining
      if (!newToast.classList.contains('panning')) {
        timeLeft -= 20;
      }

      if (timeLeft <= 0) {
        // Animate toast out
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,
            easing: 'easeOutExpo',
            queue: false,
            complete: function(){
              // Call the optional callback
              if(typeof(completeCallback) === "function")
                completeCallback();
              // Remove toast after it times out
              this[0].parentNode.removeChild(this[0]);
            }
          });
        window.clearInterval(counterInterval);
      }
    }, 20);



    function createToast(html) {

        // Create toast
        var toast = document.createElement('div');
        toast.classList.add('toast');
        if (className) {
            var classes = className.split(' ');

            for (var i = 0, count = classes.length; i < count; i++) {
                toast.classList.add(classes[i]);
            }
        }
        // If type of parameter is HTML Element
        if ( typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName==="string"
) {
          toast.appendChild(html);
        }
        else if (html instanceof jQuery) {
          // Check if it is jQuery object
          toast.appendChild(html[0]);
        }
        else {
          // Insert as text;
          toast.innerHTML = html; 
        }
        // Bind hammer
        var hammerHandler = new Hammer(toast, {prevent_default: false});
        hammerHandler.on('pan', function(e) {
          var deltaX = e.deltaX;
          var activationDistance = 80;

          // Change toast state
          if (!toast.classList.contains('panning')){
            toast.classList.add('panning');
          }

          var opacityPercent = 1-Math.abs(deltaX / activationDistance);
          if (opacityPercent < 0)
            opacityPercent = 0;

          Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});

        });

        hammerHandler.on('panend', function(e) {
          var deltaX = e.deltaX;
          var activationDistance = 80;

          // If toast dragged past activation point
          if (Math.abs(deltaX) > activationDistance) {
            Vel(toast, {marginTop: '-40px'}, { duration: 375,
                easing: 'easeOutExpo',
                queue: false,
                complete: function(){
                  if(typeof(completeCallback) === "function") {
                    completeCallback();
                  }
                  toast.parentNode.removeChild(toast);
                }
            });

          } else {
            toast.classList.remove('panning');
            // Put toast back into original position
            Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
              easing: 'easeOutExpo',
              queue: false
            });

          }
        });

        return toast;
    }
};

(function ($) {
    $.fn.tooltip = function (options) {
        var timeout = null,
        counter = null,
        started = false,
        counterInterval = null,
        margin = 5;

      // Defaults
      var defaults = {
        delay: 350
      };

      // Remove tooltip from the activator
      if (options === "remove") {
        this.each(function(){
          $('#' + $(this).attr('data-tooltip-id')).remove();
        });
        return false;
      }

      options = $.extend(defaults, options);


      return this.each(function(){
        var tooltipId = Materialize.guid();
        var origin = $(this);
        origin.attr('data-tooltip-id', tooltipId);

        // Create Text span
        var tooltip_text = $('<span></span>').text(origin.attr('data-tooltip'));

        // Create tooltip
        var newTooltip = $('<div></div>');
        newTooltip.addClass('material-tooltip').append(tooltip_text)
          .appendTo($('body'))
          .attr('id', tooltipId);

        var backdrop = $('<div></div>').addClass('backdrop');
        backdrop.appendTo(newTooltip);
        backdrop.css({ top: 0, left:0 });


       //Destroy previously binded events
      origin.off('mouseenter.tooltip mouseleave.tooltip');
        // Mouse In
      origin.on({
        'mouseenter.tooltip': function(e) {
          var tooltip_delay = origin.data("delay");
          tooltip_delay = (tooltip_delay === undefined || tooltip_delay === '') ? options.delay : tooltip_delay;
          counter = 0;
          counterInterval = setInterval(function(){
            counter += 10;
            if (counter >= tooltip_delay && started === false) {
              started = true;
              newTooltip.css({ display: 'block', left: '0px', top: '0px' });

              // Set Tooltip text
              newTooltip.children('span').text(origin.attr('data-tooltip'));

              // Tooltip positioning
              var originWidth = origin.outerWidth();
              var originHeight = origin.outerHeight();
              var tooltipPosition =  origin.attr('data-position');
              var tooltipHeight = newTooltip.outerHeight();
              var tooltipWidth = newTooltip.outerWidth();
              var tooltipVerticalMovement = '0px';
              var tooltipHorizontalMovement = '0px';
              var scale_factor = 8;
              var targetTop, targetLeft, newCoordinates;

              if (tooltipPosition === "top") {
                // Top Position
                targetTop = origin.offset().top - tooltipHeight - margin;
                targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                tooltipVerticalMovement = '-10px';
                backdrop.css({
                  borderRadius: '14px 14px 0 0',
                  transformOrigin: '50% 90%',
                  marginTop: tooltipHeight,
                  marginLeft: (tooltipWidth/2) - (backdrop.width()/2)
                });
              }
              // Left Position
              else if (tooltipPosition === "left") {
                targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
                targetLeft =  origin.offset().left - tooltipWidth - margin;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                tooltipHorizontalMovement = '-10px';
                backdrop.css({
                  width: '14px',
                  height: '14px',
                  borderRadius: '14px 0 0 14px',
                  transformOrigin: '95% 50%',
                  marginTop: tooltipHeight/2,
                  marginLeft: tooltipWidth
                });
              }
              // Right Position
              else if (tooltipPosition === "right") {
                targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
                targetLeft = origin.offset().left + originWidth + margin;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                tooltipHorizontalMovement = '+10px';
                backdrop.css({
                  width: '14px',
                  height: '14px',
                  borderRadius: '0 14px 14px 0',
                  transformOrigin: '5% 50%',
                  marginTop: tooltipHeight/2,
                  marginLeft: '0px'
                });
              }
              else {
                // Bottom Position
                targetTop = origin.offset().top + origin.outerHeight() + margin;
                targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                tooltipVerticalMovement = '+10px';
                backdrop.css({
                  marginLeft: (tooltipWidth/2) - (backdrop.width()/2)
                });
              }

              // Set tooptip css placement
              newTooltip.css({
                top: newCoordinates.y,
                left: newCoordinates.x
              });

              // Calculate Scale to fill
              scale_factor = tooltipWidth / 8;
              if (scale_factor < 8) {
                scale_factor = 8;
              }
              if (tooltipPosition === "right" || tooltipPosition === "left") {
                scale_factor = tooltipWidth / 10;
                if (scale_factor < 6)
                  scale_factor = 6;
              }

              newTooltip.velocity({ marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false })
                .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});
              backdrop.css({ display: 'block' })
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
              .velocity({scale: scale_factor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});

            }
          }, 10); // End Interval

        // Mouse Out
        },
        'mouseleave.tooltip': function(){
          // Reset State
          clearInterval(counterInterval);
          counter = 0;

          // Animate back
          newTooltip.velocity({
            opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false, delay: 225 }
          );
          backdrop.velocity({opacity: 0, scale: 1}, {
            duration:225,
            delay: 275, queue: false,
            complete: function(){
              backdrop.css('display', 'none');
              newTooltip.css('display', 'none');
              started = false;}
          });
        }
        });
    });
  };

  var repositionWithinScreen = function(x, y, width, height) {
    var newX = x
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return {x: newX, y: newY};
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));

/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);

function getCharCountJs(sura1, aya1, sura2, aya2) {
    var totalChars = 0;
    quran_char_count.forEach(function (sura) {
        if (sura.s >= sura1 && sura.s <= sura2) {
            if ((sura.s == sura1 && sura.a < aya1) || (sura.s == sura2 && sura.a > aya2)) {
                return;
            }
            totalChars += sura.c;
        }
    });

    return totalChars;
}

random_phrases = [
    'سبحان الله وبحمده',
    'استغفر الله',
    'وَعَسَى أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ',
    'وَعَسَى أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ',
    'وَاسْتَعِينُواْ بِالصَّبْرِ وَالصَّلاَةِ'

];

function getDataFromObject(source) {
    var tmp_arr = {};
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            tmp_arr[key] = source[key];
        }
    }
    return tmp_arr;
}

function reloadMaterializeDOM() {
    $('.material-tooltip').remove();
    $('.tooltipped').tooltip('remove');
    $('.tooltipped').tooltip({delay: 100});
    $('select').material_select();
}

function reactToAjaxSuccess(data) {
    if (typeof data == 'object') {
        myAlert(data.msg);
    } else if (typeof data == 'string') {
        myAlert(data);
    }

}

function reactToAjaxError(data, status, request, response) {
    if (status == 422) {/*أخطاء التخقق من الحقول*/
        myAlert('[ ' + status + ' ] ' + firstJsonError(data), 'error');
        content.ajax_errors = data;
    } else if (status == 403) {/* عدم وجود صلاحية ان عدم وجود Token*/
        myAlert('[ ' + status + ' ] ' + firstJsonError(data), 'error');
    } else if (status == 0) {
        myAlert('عفوا.. انقطع الإتصال بالإنترنت', 'error')
    } else {
        myAlert('[ ' + status + ' ] ' + 'عفوا.. حدث خطأ', 'error');
    }
    console.log('request : ' + request);
    console.log('status : ' + status);
    console.log('data : ' + data);
    console.log('data : ' + JSON.stringify(data));
}
function firstJsonError(obj) {
    for (var a in obj) return obj[a];
}

function myAlert(msg, type, duration) {
    var msgType = type ? type : 'success';
    var typeColorArray = {
        'success': 'green lighten-1',
        'error': 'red lighten-2',
        'info': 'blue lighten-1'
    };
    duration = duration ? duration : 5000;
    Materialize.toast(msg, duration, typeColorArray[msgType])
}
var s=[];
function getHijriYearArray(g_date) {
    g = g_date;
switch (true) {
/* تقويم أم القرى - صادرة من مدينة الملك عبدالعزيز للعلوم والتقنية معهد بحوث الحاسب والإلكترونيات بجدة*/
case(g>=19990417&&g<20000406):s=[19990417,1420,0,1,0,0,1,0,1,1,1,1,0,1];break;
case(g>=20000406&&g<20010326):s=[20000406,1421,0,0,1,0,0,0,1,1,1,1,0,1];break;
case(g>=20010326&&g<20020315):s=[20010326,1422,1,0,0,1,0,0,0,1,1,1,0,1];break;
case(g>=20020315&&g<20030304):s=[20020315,1423,1,0,1,0,1,0,0,1,0,1,0,1];break;
case(g>=20030304&&g<20040221):s=[20030304,1424,1,0,1,1,0,1,0,0,1,0,1,0];break;
case(g>=20040221&&g<20050210):s=[20040221,1425,1,0,1,1,0,1,0,1,1,0,1,0];break;
case(g>=20050210&&g<20060131):s=[20050210,1426,0,1,0,1,0,1,1,0,1,1,0,1];break;
case(g>=20060131&&g<20070120):s=[20060131,1427,0,0,1,0,1,0,1,1,0,1,1,0];break;
case(g>=20070120&&g<20080110):s=[20070120,1428,1,0,0,1,0,0,1,1,1,0,1,1];break;
case(g>=20080110&&g<20081229):s=[20080110,1429,0,1,0,0,1,0,0,1,1,0,1,1];break;
case(g>=20081229&&g<20091218):s=[20081229,1430,0,1,1,0,0,1,0,1,0,1,0,1];break;
case(g>=20091218&&g<20101207):s=[20091218,1431,0,1,1,0,1,0,1,0,1,0,0,1];break;
case(g>=20101207&&g<20111126):s=[20101207,1432,0,1,1,1,0,1,0,1,0,1,0,0];break;
case(g>=20111126&&g<20121115):s=[20111126,1433,1,0,1,1,0,1,1,0,1,0,1,0];break;
case(g>=20121115&&g<20131104):s=[20121115,1434,0,1,0,1,0,1,1,0,1,1,0,0];break;
case(g>=20131104&&g<20141025):s=[20131104,1435,1,0,1,0,1,0,1,0,1,1,0,1];break;
case(g>=20141025&&g<20151014):s=[20141025,1436,0,1,0,1,0,1,0,1,0,1,0,1];break;
case(g>=20151014&&g<20161002):s=[20151014,1437,1,0,1,1,0,0,1,0,1,0,0,1];break;
case(g>=20161002&&g<20170921):s=[20161002,1438,1,0,1,1,1,0,0,1,0,0,1,0];break;
case(g>=20170921&&g<20180911):s=[20170921,1439,1,0,1,1,1,0,1,0,1,0,0,1];break;
case(g>=20180911&&g<20190831):s=[20180911,1440,0,1,0,1,1,1,0,1,0,1,0,0];break;
case(g>=20190831&&g<20200820):s=[20190831,1441,1,0,1,0,1,1,0,1,1,0,1,0];break;
case(g>=20200820&&g<20210809):s=[20200820,1442,0,1,0,1,0,1,0,1,1,0,1,0];break;
case(g>=20210809&&g<20220730):s=[20210809,1443,1,0,1,0,1,0,1,0,1,0,1,1];break;
case(g>=20220730&&g<20230719):s=[20220730,1444,0,1,0,1,1,0,0,1,0,1,0,1];break;
case(g>=20230719&&g<20240707):s=[20230719,1445,0,1,1,1,0,1,0,0,1,0,0,1];break;
case(g>=20240707&&g<20250626):s=[20240707,1446,0,1,1,1,0,1,1,0,0,1,0,0];break;
case(g>=20250626&&g<20260616):s=[20250626,1447,1,0,1,1,1,0,1,0,1,0,1,0];break;
case(g>=20260616&&g<20270606):s=[20260616,1448,0,1,0,1,1,0,1,1,0,1,0,1];break;
case(g>=20270606&&g<20280525):s=[20270606,1449,0,0,1,0,1,0,1,1,0,1,1,0];break;
case(g>=20280525&&g<20290514):s=[20280525,1450,1,0,1,0,0,1,0,1,0,1,1,0];break;
/*السنوات من 1451 حتى 1500 من تقويم أبو هادي الفلكي حسب مكة المكرمةوقد تحتوي على اختلافات ضئيلة قد تصل إلى خمسة شهور من أصل ستمائة شهر*/
case(g>=20290514&&g<20300504):s=[20290514,1451,1,1,0,1,0,0,1,0,1,0,1,1];break;
case(g>=20300504&&g<20310423):s=[20300504,1452,0,1,1,0,1,0,0,1,0,1,0,1];break;
case(g>=20310423&&g<20320411):s=[20310423,1453,0,1,1,1,0,1,0,0,1,0,1,0];break;
case(g>=20320411&&g<20330401):s=[20320411,1454,0,1,1,1,0,1,0,1,0,1,0,1];break;
case(g>=20330401&&g<20340321):s=[20330401,1455,0,0,1,1,0,1,0,1,1,0,1,0];break;
case(g>=20340321&&g<20350311):s=[20340321,1456,1,0,0,1,0,1,0,1,1,1,0,1];break;
case(g>=20350311&&g<20360228):s=[20350311,1457,0,1,0,0,1,0,0,1,1,0,1,1];break;
case(g>=20360228&&g<20370216):s=[20360228,1458,1,0,1,0,0,1,0,0,1,1,0,1];break;
case(g>=20370216&&g<20380205):s=[20370216,1459,1,1,0,1,0,0,1,0,0,1,1,0];break;
case(g>=20380205&&g<20390126):s=[20380205,1460,1,1,0,1,0,1,0,1,0,0,1,1];break;
case(g>=20390126&&g<20400115):s=[20390126,1461,0,1,0,1,1,0,1,0,1,0,1,0];break;
case(g>=20400115&&g<20410104):s=[20400115,1462,1,0,1,0,1,0,1,0,1,1,0,1];break;
case(g>=20410104&&g<20411224):s=[20410104,1463,0,1,0,0,1,0,1,1,0,1,1,0];break;
case(g>=20411224&&g<20421214):s=[20411224,1464,1,0,1,0,0,1,0,1,0,1,1,1];break;
case(g>=20421214&&g<20431203):s=[20421214,1465,0,1,0,1,0,0,1,0,0,1,1,1];break;
case(g>=20431203&&g<20441121):s=[20431203,1466,1,0,1,0,1,0,0,1,0,1,0,1];break;
case(g>=20441121&&g<20451110):s=[20441121,1467,1,0,1,1,0,1,0,0,1,0,1,0];break;
case(g>=20451110&&g<20461031):s=[20451110,1468,1,0,1,1,0,1,0,1,0,1,0,1];break;
case(g>=20461031&&g<20471020):s=[20461031,1469,0,0,1,1,0,1,1,0,1,1,0,0];break;
case(g>=20471020&&g<20481009):s=[20471020,1470,1,0,0,1,1,0,1,0,1,1,1,0];break;
case(g>=20481009&&g<20490928):s=[20481009,1471,0,1,0,0,1,0,1,1,0,1,1,0];break;
case(g>=20490928&&g<20500917):s=[20490928,1472,1,0,1,0,1,0,0,1,0,1,1,0];break;
case(g>=20500917&&g<20510906):s=[20500917,1473,1,0,1,1,0,1,0,0,1,0,1,0];break;
case(g>=20510906&&g<20520826):s=[20510906,1474,1,1,0,1,1,0,1,0,0,1,0,1];break;
case(g>=20520826&&g<20530815):s=[20520826,1475,0,1,0,1,1,1,0,1,0,0,1,0];break;
case(g>=20530815&&g<20540805):s=[20530815,1476,0,1,0,1,1,1,0,1,1,0,0,1];break;
case(g>=20540805&&g<20550725):s=[20540805,1477,0,0,1,0,1,1,0,1,1,1,0,0];break;
case(g>=20550725&&g<20560714):s=[20550725,1478,1,0,0,1,0,1,1,0,1,1,0,1];break;
case(g>=20560714&&g<20570703):s=[20560714,1479,0,1,0,0,1,0,1,0,1,1,0,1];break;
case(g>=20570703&&g<20580622):s=[20570703,1480,0,1,1,0,1,0,0,1,0,1,0,1];break;
case(g>=20580622&&g<20590611):s=[20580622,1481,0,1,1,0,1,1,0,1,0,0,1,0];break;
case(g>=20590611&&g<20600531):s=[20590611,1482,1,0,1,1,0,1,1,0,1,0,0,1];break;
case(g>=20600531&&g<20610520):s=[20600531,1483,0,0,1,1,0,1,1,1,0,1,0,0];break;
case(g>=20610520&&g<20620510):s=[20610520,1484,1,0,0,1,1,0,1,1,0,1,1,0];break;
case(g>=20620510&&g<20630430):s=[20620510,1485,0,1,0,0,1,1,0,1,0,1,1,1];break;
case(g>=20630430&&g<20640418):s=[20630430,1486,0,0,1,0,1,0,1,0,1,0,1,1];break;
case(g>=20640418&&g<20650407):s=[20640418,1487,0,1,0,1,0,1,0,0,1,0,1,1];break;
case(g>=20650407&&g<20660327):s=[20650407,1488,0,1,1,0,1,0,1,0,0,1,0,1];break;
case(g>=20660327&&g<20670317):s=[20660327,1489,0,1,1,0,1,1,0,1,0,0,1,1];break;
case(g>=20670317&&g<20680305):s=[20670317,1490,0,0,1,1,0,1,1,0,1,0,0,1];break;
case(g>=20680305&&g<20690223):s=[20680305,1491,0,1,0,1,0,1,1,0,1,0,1,1];break;
case(g>=20690223&&g<20700212):s=[20690223,1492,0,0,1,0,1,0,1,0,1,1,0,1];break;
case(g>=20700212&&g<20710201):s=[20700212,1493,1,0,0,1,0,1,0,0,1,1,0,1];break;
case(g>=20710201&&g<20720121):s=[20710201,1494,1,1,0,0,1,0,0,1,0,1,0,1];break;
case(g>=20720121&&g<20730109):s=[20720121,1495,1,1,0,1,0,1,0,0,1,0,1,0];break;
case(g>=20730109&&g<20731230):s=[20730109,1496,1,1,1,0,1,0,1,0,0,1,0,1];break;
case(g>=20731230&&g<20741219):s=[20731230,1497,0,1,0,1,1,1,0,0,1,0,1,0];break;
case(g>=20741219&&g<20751209):s=[20741219,1498,1,0,1,0,1,1,0,1,0,1,0,1];break;
case(g>=20751209&&g<20761127):s=[20751209,1499,0,1,0,1,0,1,0,1,0,1,1,0];break;
/* تقويم أم القرى المقارن - صادر من وزارة المالية والاقتصاد الوطني  تنفيذ وطبع  مصلحة مطابع الحكومة - الرياض 1413هـ*/
case(g>=18821111&&g<18831031):s=[18821111,1300,1,1,0,1,0,0,1,0,1,0,1,0];break;
case(g>=18831031&&g<18841020):s=[18831031,1301,1,1,1,0,1,0,0,1,0,0,1,1];break;
case(g>=18841020&&g<18851009):s=[18841020,1302,0,1,1,1,0,1,0,0,1,0,0,1];break;
case(g>=18851009&&g<18860928):s=[18851009,1303,0,1,1,1,0,1,1,0,0,1,0,0];break;
case(g>=18860928&&g<18870918):s=[18860928,1304,1,0,1,1,0,1,1,0,1,0,1,0];break;
case(g>=18870918&&g<18880907):s=[18870918,1305,0,1,0,1,0,1,1,1,0,1,0,1];break;
case(g>=18880907&&g<18890827):s=[18880907,1306,0,1,0,0,1,0,1,1,0,1,1,0];break;
case(g>=18890827&&g<18900816):s=[18890827,1307,1,0,1,0,0,1,0,1,0,1,1,0];break;
case(g>=18900816&&g<18910805):s=[18900816,1308,1,0,1,1,0,1,0,0,1,0,1,0];break;
case(g>=18910805&&g<18920724):s=[18910805,1309,1,1,0,1,1,0,1,0,0,1,0,0];break;
case(g>=18920724&&g<18930714):s=[18920724,1310,1,1,0,1,1,1,0,1,0,0,1,0];break;
case(g>=18930714&&g<18940704):s=[18930714,1311,0,1,0,1,1,1,0,1,1,0,0,1];break;
case(g>=18940704&&g<18950623):s=[18940704,1312,0,0,1,0,1,1,0,1,1,1,0,0];break;
case(g>=18950623&&g<18960612):s=[18950623,1313,1,0,0,1,0,1,0,1,1,1,0,1];break;
case(g>=18960612&&g<18970601):s=[18960612,1314,0,1,0,0,1,0,1,0,1,1,0,1];break;
case(g>=18970601&&g<18980521):s=[18970601,1315,1,0,1,0,0,1,0,1,0,1,0,1];break;
case(g>=18980521&&g<18990510):s=[18980521,1316,1,0,1,1,0,1,0,0,1,0,1,0];break;
case(g>=18990510&&g<19000430):s=[18990510,1317,1,0,1,1,0,1,1,0,1,0,0,1];break;
case(g>=19000430&&g<19010419):s=[19000430,1318,0,1,0,1,0,1,1,1,0,1,0,0];break;
case(g>=19010419&&g<19020409):s=[19010419,1319,1,0,0,1,0,1,1,1,0,1,1,0];break;
case(g>=19020409&&g<19030330):s=[19020409,1320,0,1,0,0,1,0,1,1,0,1,1,1];break;
case(g>=19030330&&g<19040318):s=[19030330,1321,0,0,1,0,0,1,0,1,0,1,1,1];break;
case(g>=19040318&&g<19050307):s=[19040318,1322,0,1,0,1,0,0,1,0,1,0,1,1];break;
case(g>=19050307&&g<19060224):s=[19050307,1323,0,1,1,0,1,0,0,1,0,1,0,1];break;
case(g>=19060224&&g<19070213):s=[19060224,1324,0,1,1,0,1,1,0,0,1,0,1,0];break;
case(g>=19070213&&g<19080203):s=[19070213,1325,1,0,1,0,1,1,0,1,0,1,0,1];break;
case(g>=19080203&&g<19090123):s=[19080203,1326,0,1,0,1,0,1,0,1,1,0,1,1];break;
case(g>=19090123&&g<19100112):s=[19090123,1327,0,0,1,0,0,1,0,1,1,1,0,1];break;
case(g>=19100112&&g<19110101):s=[19100112,1328,1,0,0,1,0,0,1,0,1,1,0,1];break;
case(g>=19110101&&g<19111221):s=[19110101,1329,1,1,0,0,1,0,0,1,0,1,0,1];break;
case(g>=19111221&&g<19121209):s=[19111221,1330,1,1,0,1,0,1,0,0,1,0,1,0];break;
case(g>=19121209&&g<19131129):s=[19121209,1331,1,1,1,0,1,0,1,0,0,1,0,1];break;
case(g>=19131129&&g<19141118):s=[19131129,1332,0,1,1,0,1,1,0,1,0,0,1,0];break;
case(g>=19141118&&g<19151108):s=[19141118,1333,1,0,1,0,1,1,0,1,0,1,0,1];break;
case(g>=19151108&&g<19161027):s=[19151108,1334,0,1,0,1,0,1,0,1,1,0,1,0];break;
case(g>=19161027&&g<19171017):s=[19161027,1335,1,0,1,0,1,0,1,0,1,0,1,1];break;
case(g>=19171017&&g<19181006):s=[19171017,1336,0,1,0,1,0,1,0,0,1,0,1,1];break;
case(g>=19181006&&g<19190925):s=[19181006,1337,0,1,1,0,1,0,1,0,0,1,0,1];break;
case(g>=19190925&&g<19200913):s=[19190925,1338,0,1,1,1,0,1,0,1,0,0,1,0];break;
case(g>=19200913&&g<19210903):s=[19200913,1339,1,0,1,1,1,0,1,0,1,0,0,1];break;
case(g>=19210903&&g<19220823):s=[19210903,1340,0,0,1,1,0,1,1,1,0,1,0,0];break;
case(g>=19220823&&g<19230813):s=[19220823,1341,1,0,1,0,1,0,1,1,0,1,1,0];break;
case(g>=19230813&&g<19240801):s=[19230813,1342,0,1,0,1,0,1,0,1,0,1,1,0];break;
case(g>=19240801&&g<19250721):s=[19240801,1343,1,0,1,0,1,0,1,0,1,0,1,0];break;
case(g>=19250721&&g<19260710):s=[19250721,1344,1,1,0,1,0,1,0,1,0,0,1,0];break;
case(g>=19260710&&g<19270630):s=[19260710,1345,1,1,0,1,1,0,1,0,1,0,0,1];break;
case(g>=19270630&&g<19280618):s=[19270630,1346,0,1,0,1,1,1,0,1,0,1,0,0];break;
case(g>=19280618&&g<19290608):s=[19280618,1347,1,0,1,0,1,1,1,0,1,0,1,0];break;
case(g>=19290608&&g<19300529):s=[19290608,1348,0,1,0,0,1,1,0,1,1,1,0,1];break;
case(g>=19300529&&g<19310518):s=[19300529,1349,0,0,1,0,0,1,1,0,1,1,1,0];break;
case(g>=19310518&&g<19320506):s=[19310518,1350,1,0,0,1,0,0,1,0,1,1,1,0];break;
case(g>=19320506&&g<19330425):s=[19320506,1351,1,0,1,0,1,0,1,0,0,1,1,0];break;
case(g>=19330425&&g<19340414):s=[19330425,1352,1,1,0,1,0,1,0,1,0,1,0,0];break;
case(g>=19340414&&g<19350404):s=[19340414,1353,1,1,0,1,1,0,1,0,1,0,1,0];break;
case(g>=19350404&&g<19360324):s=[19350404,1354,0,1,0,1,1,0,1,1,0,1,0,1];break;
case(g>=19360324&&g<19370313):s=[19360324,1355,0,0,1,0,1,0,1,1,0,1,1,0];break;
case(g>=19370313&&g<19380303):s=[19370313,1356,1,0,0,1,0,0,1,1,0,1,1,1];break;
case(g>=19380303&&g<19390220):s=[19380303,1357,0,1,0,0,1,0,0,1,1,0,1,1];break;
case(g>=19390220&&g<19400209):s=[19390220,1358,1,0,1,0,0,1,0,0,1,0,1,1];break;
case(g>=19400209&&g<19410128):s=[19400209,1359,1,0,1,1,0,0,1,0,0,1,0,1];break;
case(g>=19410128&&g<19420117):s=[19410128,1360,1,0,1,1,0,1,0,1,0,1,0,0];break;
case(g>=19420117&&g<19430107):s=[19420117,1361,1,0,1,1,0,1,1,0,1,0,1,0];break;
case(g>=19430107&&g<19431228):s=[19430107,1362,0,1,0,1,0,1,1,0,1,1,0,1];break;
case(g>=19431228&&g<19441216):s=[19431228,1363,0,1,0,0,1,0,1,0,1,1,0,1];break;
case(g>=19441216&&g<19451205):s=[19441216,1364,1,0,1,0,0,1,0,1,0,1,0,1];break;
case(g>=19451205&&g<19461124):s=[19451205,1365,1,1,0,1,0,0,1,0,0,1,0,1];break;
case(g>=19461124&&g<19471113):s=[19461124,1366,1,1,1,0,1,0,0,1,0,0,1,0];break;
case(g>=19471113&&g<19481102):s=[19471113,1367,1,1,1,0,1,1,0,0,1,0,0,1];break;
case(g>=19481102&&g<19491022):s=[19481102,1368,0,1,1,0,1,1,0,1,0,1,0,0];break;
case(g>=19491022&&g<19501012):s=[19491022,1369,1,0,1,0,1,1,1,0,1,0,1,0];break;
case(g>=19501012&&g<19511002):s=[19501012,1370,0,1,0,1,0,1,1,0,1,0,1,1];break;
case(g>=19511002&&g<19520920):s=[19511002,1371,0,1,0,0,1,0,1,0,1,0,1,1];break;
case(g>=19520920&&g<19530909):s=[19520920,1372,0,1,1,0,1,0,0,1,0,1,0,1];break;
case(g>=19530909&&g<19540829):s=[19530909,1373,1,0,1,1,0,1,0,0,1,0,0,1];break;
case(g>=19540829&&g<19550818):s=[19540829,1374,1,0,1,1,1,0,1,0,0,1,0,0];break;
case(g>=19550818&&g<19560807):s=[19550818,1375,1,0,1,1,1,0,1,1,0,0,1,0];break;
case(g>=19560807&&g<19570728):s=[19560807,1376,0,1,0,1,1,0,1,1,0,1,0,1];break;
case(g>=19570728&&g<19580717):s=[19570728,1377,0,0,1,0,1,0,1,1,1,0,1,0];break;
case(g>=19580717&&g<19590707):s=[19580717,1378,1,0,0,1,0,1,0,1,1,0,1,1];break;
case(g>=19590707&&g<19600625):s=[19590707,1379,0,1,0,0,1,0,1,0,1,0,1,1];break;
case(g>=19600625&&g<19610614):s=[19600625,1380,0,1,0,1,0,1,0,1,0,1,0,1];break;
case(g>=19610614&&g<19620603):s=[19610614,1381,0,1,1,0,1,0,1,1,0,0,1,0];break;
case(g>=19620603&&g<19630524):s=[19620603,1382,0,1,1,0,1,1,0,1,1,0,0,1];break;
case(g>=19630524&&g<19640512):s=[19630524,1383,0,0,1,0,1,1,1,0,1,1,0,0];break;
case(g>=19640512&&g<19650502):s=[19640512,1384,1,0,0,1,0,1,1,0,1,1,1,0];break;
case(g>=19650502&&g<19660421):s=[19650502,1385,0,1,0,0,1,0,1,0,1,1,1,0];break;
case(g>=19660421&&g<19670410):s=[19660421,1386,1,0,1,0,0,1,0,1,0,1,1,0];break;
case(g>=19670410&&g<19680329):s=[19670410,1387,1,1,0,1,0,0,1,0,1,0,1,0];break;
case(g>=19680329&&g<19690319):s=[19680329,1388,1,1,0,1,0,1,0,1,0,1,0,1];break;
case(g>=19690319&&g<19700308):s=[19690319,1389,0,1,0,1,1,0,1,0,1,0,1,0];break;
case(g>=19700308&&g<19710226):s=[19700308,1390,1,0,1,0,1,0,1,1,0,1,0,1];break;
case(g>=19710226&&g<19720216):s=[19710226,1391,0,1,0,0,1,0,1,1,1,0,1,1];break;
case(g>=19720216&&g<19730204):s=[19720216,1392,0,0,1,0,0,1,0,1,1,0,1,1];break;
case(g>=19730204&&g<19740124):s=[19730204,1393,1,0,0,1,0,0,1,0,1,0,1,1];break;
case(g>=19740124&&g<19750113):s=[19740124,1394,1,0,1,0,1,0,0,1,0,1,0,1];break;
case(g>=19750113&&g<19760102):s=[19750113,1395,1,0,1,1,0,1,0,0,1,0,1,0];break;
case(g>=19760102&&g<19761222):s=[19760102,1396,1,0,1,1,1,0,1,0,0,1,0,1];break;
case(g>=19761222&&g<19771211):s=[19761222,1397,0,1,0,1,1,0,1,0,1,0,1,0];break;
case(g>=19771211&&g<19781201):s=[19771211,1398,1,0,1,0,1,0,1,1,0,1,0,1];break;
case(g>=19781201&&g<19791120):s=[19781201,1399,0,1,0,1,0,1,0,1,0,1,1,0];break;
case(g>=19791120&&g<19801108):s=[19791120,1400,1,0,1,0,1,0,0,1,0,1,1,0];break;
case(g>=19801108&&g<19811028):s=[19801108,1401,1,1,0,1,0,1,0,0,1,0,1,0];break;
case(g>=19811028&&g<19821018):s=[19811028,1402,1,1,1,0,1,0,1,0,0,1,0,1];break;
case(g>=19821018&&g<19831007):s=[19821018,1403,0,1,1,1,0,1,0,1,0,0,1,0];break;
case(g>=19831007&&g<19840926):s=[19831007,1404,0,1,1,0,1,1,1,0,1,0,0,1];break;
case(g>=19840926&&g<19850915):s=[19840926,1405,0,0,1,1,0,1,1,0,1,0,1,0];break;
case(g>=19850915&&g<19860905):s=[19850915,1406,1,0,1,0,1,0,1,0,1,1,0,1];break;
case(g>=19860905&&g<19870825):s=[19860905,1407,0,1,0,1,0,1,0,1,0,1,0,1];break;
case(g>=19870825&&g<19880813):s=[19870825,1408,1,0,1,0,1,0,1,0,0,1,0,1];break;
case(g>=19880813&&g<19890802):s=[19880813,1409,1,0,1,1,0,1,0,1,0,0,1,0];break;
case(g>=19890802&&g<19900723):s=[19890802,1410,1,0,1,1,1,0,1,0,1,0,0,1];break;
case(g>=19900723&&g<19910712):s=[19900723,1411,0,1,0,1,1,0,1,1,0,1,0,0];break;
case(g>=19910712&&g<19920701):s=[19910712,1412,1,0,0,1,1,0,1,1,1,0,1,0];break;
case(g>=19920701&&g<19930621):s=[19920701,1413,0,1,0,0,1,1,0,1,1,0,1,1];break;
case(g>=19930621&&g<19940610):s=[19930621,1414,0,0,1,0,0,1,0,1,1,1,0,1];break;
case(g>=19940610&&g<19950530):s=[19940610,1415,0,1,0,1,0,0,1,0,1,1,0,1];break;
case(g>=19950530&&g<19960518):s=[19950530,1416,1,0,1,0,1,0,1,0,0,1,0,1];break;
case(g>=19960518&&g<19970507):s=[19960518,1417,1,0,1,0,1,1,0,1,0,1,0,0];break;
case(g>=19970507&&g<19980427):s=[19970507,1418,1,0,1,0,1,1,1,0,1,0,1,0];break;
case(g>=19980427&&g<19990417):s=[19980427,1419,0,1,0,1,0,1,1,0,1,1,0,1];break;
}return s;}

function getGregorianYearArray(source_year) {
    var cases = {
        1420: [19990417, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        1421: [20000406, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        1422: [20010326, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
        1423: [20020315, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1424: [20030304, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1425: [20040221, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        1426: [20050210, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        1427: [20060131, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        1428: [20070120, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1],
        1429: [20080110, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
        1430: [20081229, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        1431: [20091218, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        1432: [20101207, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        1433: [20111126, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        1434: [20121115, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        1435: [20131104, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        1436: [20141025, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        1437: [20151014, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
        1438: [20161002, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0],
        1439: [20170921, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        1440: [20180911, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
        1441: [20190831, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
        1442: [20200820, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        1443: [20210809, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        1444: [20220730, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
        1445: [20230719, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
        1446: [20240707, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
        1447: [20250626, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        1448: [20260616, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        1449: [20270606, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        1450: [20280525, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        1451: [20290514, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        1452: [20300504, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1453: [20310423, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1454: [20320411, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        1455: [20330401, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        1456: [20340321, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        1457: [20350311, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
        1458: [20360228, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
        1459: [20370216, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
        1460: [20380205, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        1461: [20390126, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        1462: [20400115, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        1463: [20410104, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        1464: [20411224, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
        1465: [20421214, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
        1466: [20431203, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1467: [20441121, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1468: [20451110, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        1469: [20461031, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        1470: [20471020, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        1471: [20481009, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        1472: [20490928, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
        1473: [20500917, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1474: [20510906, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
        1475: [20520826, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
        1476: [20530815, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
        1477: [20540805, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
        1478: [20550725, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        1479: [20560714, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        1480: [20570703, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1481: [20580622, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
        1482: [20590611, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
        1483: [20600531, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
        1484: [20610520, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
        1485: [20620510, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1],
        1486: [20630430, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        1487: [20640418, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
        1488: [20650407, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        1489: [20660327, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1],
        1490: [20670317, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
        1491: [20680305, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        1492: [20690223, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        1493: [20700212, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
        1494: [20710201, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1495: [20720121, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1496: [20730109, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        1497: [20731230, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
        1498: [20741219, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        1499: [20751209, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        1500: [20761127, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
        1300: [18821111, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        1301: [18831031, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
        1302: [18841020, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
        1303: [18851009, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
        1304: [18860928, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        1305: [18870918, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        1306: [18880907, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        1307: [18890827, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        1308: [18900816, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1309: [18910805, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
        1310: [18920724, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
        1311: [18930714, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
        1312: [18940704, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
        1313: [18950623, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        1314: [18960612, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        1315: [18970601, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        1316: [18980521, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1317: [18990510, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
        1318: [19000430, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
        1319: [19010419, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        1320: [19020409, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
        1321: [19030330, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
        1322: [19040318, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        1323: [19050307, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1324: [19060224, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
        1325: [19070213, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        1326: [19080203, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        1327: [19090123, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
        1328: [19100112, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
        1329: [19110101, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1330: [19111221, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1331: [19121209, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        1332: [19131129, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
        1333: [19141118, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        1334: [19151108, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        1335: [19161027, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        1336: [19171017, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
        1337: [19181006, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        1338: [19190925, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        1339: [19200913, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        1340: [19210903, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
        1341: [19220823, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        1342: [19230813, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        1343: [19240801, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        1344: [19250721, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        1345: [19260710, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        1346: [19270630, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
        1347: [19280618, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        1348: [19290608, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
        1349: [19300529, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
        1350: [19310518, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0],
        1351: [19320506, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
        1352: [19330425, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        1353: [19340414, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        1354: [19350404, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        1355: [19360324, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
        1356: [19370313, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1],
        1357: [19380303, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
        1358: [19390220, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
        1359: [19400209, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
        1360: [19410128, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        1361: [19420117, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        1362: [19430107, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        1363: [19431228, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        1364: [19441216, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        1365: [19451205, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
        1366: [19461124, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        1367: [19471113, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
        1368: [19481102, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
        1369: [19491022, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        1370: [19501012, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        1371: [19511002, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        1372: [19520920, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1373: [19530909, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
        1374: [19540829, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
        1375: [19550818, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
        1376: [19560807, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        1377: [19570728, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        1378: [19580717, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        1379: [19590707, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        1380: [19600625, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        1381: [19610614, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
        1382: [19620603, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
        1383: [19630524, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
        1384: [19640512, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
        1385: [19650502, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        1386: [19660421, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        1387: [19670410, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        1388: [19680329, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        1389: [19690319, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        1390: [19700308, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        1391: [19710226, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        1392: [19720216, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1],
        1393: [19730204, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        1394: [19740124, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        1395: [19750113, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1396: [19760102, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
        1397: [19761222, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        1398: [19771211, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        1399: [19781201, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        1400: [19791120, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
        1401: [19801108, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        1402: [19811028, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        1403: [19821018, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        1404: [19831007, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
        1405: [19840926, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        1406: [19850915, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        1407: [19860905, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        1408: [19870825, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        1409: [19880813, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        1410: [19890802, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        1411: [19900723, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
        1412: [19910712, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        1413: [19920701, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
        1414: [19930621, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
        1415: [19940610, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
        1416: [19950530, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        1417: [19960518, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
        1418: [19970507, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        1419: [19980427, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1]
    };
    if (cases[source_year]) {
        return cases[source_year];
    }
}
//Examples:
//$('#RDate').val(getFormattedHijriDateFromArray(getHijriDate('now')));
//**************************************************//
//get formated date
function rawToFormattedDate(rawDate) {
    rawDate = String(rawDate);
    return String(rawDate.substring(0, 4) + '/' + rawDate.substring(4, 6) + '/' + rawDate.substring(6, 8));
}

function addDays(rawDate, daysCount) {
    var sourceDate = new Date(rawToFormattedDate(rawDate));
    sourceDate.setDate(sourceDate.getDate() + daysCount);
    var year = sourceDate.getFullYear();
    var month = ((parseInt(sourceDate.getMonth() + 1, 10) < 10) ? ('0' + (parseInt(sourceDate.getMonth() + 1, 10))) : (parseInt(sourceDate.getMonth(), 10) + 1));
    var day = (sourceDate.getDate() < 10) ? ('0' + sourceDate.getDate()) : sourceDate.getDate();
    var d_day_no = sourceDate.getDay();
    return [String(year), String(month), String(day), d_day_no];
}

function getGregorianDate(rawHijriDate) {
    var selectedYearArray = getGregorianYearArray(rawHijriDate.substr(0, 4));
    var selectedMonth = parseInt(rawHijriDate.substr(4, 2), 10);
    var selectedDays = parseInt(rawHijriDate.substr(6, 2), 10);
    var totalDays = 0;
    for (var i = 1; i < selectedMonth; i++) {
        totalDays = selectedYearArray[i] == 1 ? totalDays += 30 : totalDays + 29;
    }
    var dateData = addDays(selectedYearArray[0], (totalDays + selectedDays - 1));
    var dayNo = dateData[3];
    var rawDate = dateData[0] + dateData[1] + dateData[2];
    return {
        rawDate: rawDate,
        dayNo: dayNo
    };
}
//get the number of days in a hijri month
function getHijriMonthDaysCount(hijriYear, hijriMonth) {
    var selectedYear = getGregorianYearArray(hijriYear);
    return selectedYear[parseInt(hijriMonth, 10)] === 1 ? 30 : 29;
}
//##########################################
var d, g_date, d_day_no, g_date_diff;
//get row hijri date like: 14350606 from date array
function getRawHijriDateFromArray(hijri) {
    var year = hijri[0];
    var month = (hijri[1] < 10) ? ('0' + hijri[1]) : hijri[1];
    var day = (hijri[2] < 10) ? ('0' + hijri[2]) : hijri[2];
    return String(year) + String(month) + String(day);
}

//get formated hijri date like: 1435/06/06 from date array
//        function getFormattedHijriDateFromArray(hijriDateArray) {
//            var year = hijriDateArray[0];
//            var month = (hijriDateArray[1] < 10) ? ('0' + hijriDateArray[1]) : hijriDateArray[1];
//            var day = (hijriDateArray[2] < 10) ? ('0' + hijriDateArray[2]) : hijriDateArray[2];
//            return String(year) + '/' + String(month) + '/' + String(day);
//        }

//        function get_hijri_day_no(hijri_array_date) {
//            //console.log(hijri_array_date);
//            return hijri_array_date[3];
//        }

//get deffrence between to grogorian days
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDifferentInDays(a, b) {
    // Discard the time and time-zone information.
    a = new Date(a);
    b = new Date(b);
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}

//after we get the wanted "selected_year",we do some calculation to get (year,month,day)
function calculate_hijri_days(hijri_array) {
    var total_h_days = 0;
    var h_year = hijri_array[1];
    var h_month = 0;
    var h_day = 0;
    for (var i = 2; i < 14; i++) {
        h_day = (g_date_diff + 1) - total_h_days;
        total_h_days = (hijri_array[i] == 1) ? total_h_days += 30 : total_h_days += 29;
        if (total_h_days > g_date_diff) {
            h_month = i - 1;
            break;
        }
    }
    return ([h_year, h_month, h_day, d_day_no]);
}

function getHijriDate(source_g_date) {
    if (source_g_date == 'now') {
        d = new Date();
    } else {
        d = new Date(rawToFormattedDate(source_g_date));
    }
    var year = d.getFullYear();
    var month = ((parseInt(d.getMonth() + 1, 10) < 10) ? ('0' + (parseInt(d.getMonth() + 1, 10))) : (parseInt(d.getMonth(), 10) + 1));
    var day = (d.getDate() < 10) ? ('0' + d.getDate()) : d.getDate();
    d_day_no = d.getDay();
    g_date = String(year) + String(month) + String(day);
    s = getHijriYearArray(g_date);
    g_date_diff = (dateDifferentInDays(rawToFormattedDate(g_date), rawToFormattedDate(s[0])));
    return calculate_hijri_days(s);
}

function date_to_no(formattedDate) {
    if (!formattedDate) return;
    if (typeof (formattedDate) != 'string') {
        console.log('تأكد من أن التاريخ المرسل أنه على شكل نصي');
        return;
    }
    var re = new RegExp("/", 'g');
    return parseInt(formattedDate.replace(re, ''));
}
var monthsNames = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الثاني', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
//var weekDayShort = ['أح', 'اث', 'ث', 'أر', 'خ', 'ج', 'س'];
var weekDayShort = ['أحد', 'اثن', 'ثلا', 'أرب', 'خم', 'جم', 'سبت'];
//var weekDayShort = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
var weekDayName = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
$(document).ready(function () {
    var text_id_name;
    //if you change the class name,then you should change it in the css file.
    var main_class_name = '.zezo_date.picker__box';
    var main_class_name_no_dot = 'zezo_date picker__box';
    var text_position;
    //get today hijri date and store it
    //default date is the date that was in the text field and the chosen date
    var z_default_year;
    var z_default_month;
    var z_default_day;

    var hijri_date = getRawHijriDateFromArray(getHijriDate('now'));
    var day_no = getGregorianDate(getRawHijriDateFromArray(getHijriDate('now'))).dayNo;

    var today_day = hijri_date.substring(6, 8);
    var today_month = hijri_date.substring(4, 6);
    var today_year = hijri_date.substring(0, 4);
    //make the UI only one time
    make_ui();
    //create event handlers
    load_click_events();
    //make text field read only
    var dateInput = $('input[zezo_date=true]');
    dateInput.attr('readonly', 'readonly');
    //if the user clicked another fields
    $('input:not([zezo_date=true])').focus(function () {
        z_hide();
    });
    //trigger focus event for only the zezo_date fields
    dateInput.focus(function () {
        //get the date from the text field
        if ($(this).val().length > 0) {
            //store the date that was in the text field
            var date_array = $(this).val().split('/');
            z_default_year = (date_array[0]);
            z_default_month = (date_array[1]);
            z_default_day = (date_array[2]);
        } else {
            //get today date
            z_default_day = today_day;
            z_default_month = today_month;
            z_default_year = today_year;
        }
        //store focused text field id and positoin,so they will be used later
        text_id_name = (this);
        text_position = $(this).position();

        show_cal();
    });

    function z_hide() {
        $('.picker').removeClass('picker--opened picker--focused');
        //$(main_class_name).slideUp(200);

    }

    function load_days() {
        var mm, yyyy, yyyymmdd;
        mm = ((z_default_month < 10) ? '0' + parseInt(z_default_month, 10) : z_default_month);
        yyyy = z_default_year;
        yyyymmdd = String(yyyy) + String(mm) + '01';
        var first_day_no = getGregorianDate(yyyymmdd).dayNo;
        month_days = getHijriMonthDaysCount(z_default_year, z_default_month);
        $(main_class_name + ' .d').html('');
        $(main_class_name + ' .d').removeClass('picker__day--outfocus');
        $(main_class_name + ' .d').removeAttr('id');
        var corrected_day;
        for (var i1 = 1; i1 < 43; i1++) {
            var dayBlock = $('.d_' + i1);
            corrected_day = (i1 - parseInt(first_day_no, 10));
            if (i1 > first_day_no && corrected_day <= month_days) {
                dayBlock.html(corrected_day);
                dayBlock.attr('id', 'd_' + corrected_day);
                dayBlock.addClass('picker__day--infocus');
            } else {
                dayBlock.addClass('picker__day--outfocus');
            }
            //weekends
            if ((i1 + 1) % 7 === 0 || i1 % 7 === 0) {
                dayBlock.addClass('picker__day--weekend');
            }
        }
        var first_year = z_default_year - 32;
        for (var i8 = 1; i8 < 37; i8++) {
            $(main_class_name + ' .choose_y[y_order=' + parseInt(i8, 10) + ']').html(first_year);
            $(main_class_name + ' .choose_y[y_order=' + parseInt(i8, 10) + ']').attr('year_no', first_year);
            first_year++;
        }
        $(main_class_name + ' .d').removeClass('picker__day--today');
        $(main_class_name + ' .choose_m').removeClass('today');
        $(main_class_name + ' .d').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_m').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_y').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_y').removeClass('today');

        $(main_class_name + ' .choose_y[y_order=33]').addClass('picker__day--selected');
        $(main_class_name + ' .choose_y[year_no=' + today_year + ']').addClass('today');
        if (parseInt(today_year, 10) == parseInt(z_default_year, 10)) {

            //if the selected month equal today month then >>>
            if (parseInt(today_month, 10) == parseInt(z_default_month, 10)) {
                $(main_class_name + ' #d_' + parseInt(today_day, 10)).addClass('picker__day--today');
            }

            $(main_class_name + ' .choose_m[m_no=' + parseInt(today_month, 10) + ']').addClass('today');
        }
        $(main_class_name + ' .d').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_m').removeClass('picker__day--selected');
        $(main_class_name + ' #d_' + parseInt(z_default_day, 10)).addClass('picker__day--selected');
        $(main_class_name + ' .choose_m[m_no=' + parseInt(z_default_month, 10) + ']').addClass('picker__day--selected');

        $(main_class_name + ' .picker__month-display').attr('id', 'm_' + parseInt(z_default_month, 10));
        $(main_class_name + ' .picker__month-display').html(monthsNames[parseInt(z_default_month, 10) - 1]);

        $(main_class_name + ' .picker__year-display').html(z_default_year);

    }

    //create divs and numbers
    function make_ui() {
        $("body").append('' +
            '<div class="picker">' +
            '<div class="picker__holder">' +
            '<div class="picker__frame">' +
            '<div class="picker__wrap">' +
            '<div class="' + main_class_name_no_dot + '">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
        //Years ##########################
        $(main_class_name).append('<div class="picker__date-display"></div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__weekday-display">' + weekDayName[day_no] + '</div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__month-display"></div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__day-display">' + today_day + '</div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__year-display"></div>');

        $(main_class_name + " .picker__date-display").append('<span class="top_icon" id="z_previous"><i class="material-icons white-text">keyboard_arrow_right</i></span>');
        $(main_class_name + " .picker__date-display").append('<span class="top_icon" id="z_next"><i class="material-icons white-text">keyboard_arrow_left</i></span>');

        $(main_class_name + " .picker__date-display").append('<div class="year_slider"></div>');
        $(main_class_name + " .year_slider").css('display', 'none');
        $(main_class_name + " .year_slider").append('<table class="picker__table"><tbody></tbody></table>');
        for (var i7 = 1; i7 < 13; i7++) {
            $(main_class_name + " .year_slider table.picker__table tbody").append('<tr>' +
                '<td><div class="choose_y" y_order="' + i7 + '"></div></td>' +
                '<td><div class="choose_y" y_order="' + (i7 + 12) + '"></div></td>' +
                '<td><div class="choose_y" y_order="' + (i7 + 24) + '"></div></td>' +
                '</tr>');
        }
        $(main_class_name + "[y_order='1']").html('سنوات سابقة');
        //months slider
        $(main_class_name + " .picker__date-display").append('<div class="month_slider"></div>');

        $(main_class_name + " .month_slider").css('display', 'none');
        $(main_class_name + " .month_slider").append('<table class="picker__table"><tbody></tbody></table>');
        for (var i6 = 1; i6 < 7; i6++) {
            $(main_class_name + " .month_slider table.picker__table tbody").append('<tr>' +
                '<td><div class="choose_m" m_no="' + i6 + '">' + '(' + i6 + ') ' + monthsNames[i6 - 1] + '</div></td>' +
                '<td><div class="choose_m" m_no="' + (i6 + 6) + '">' + '(' + (i6 + 6) + ') ' + monthsNames[(i6 - 1) + 6] + '</div></td>' +
                '</tr>');
        }

        //Days (only the div container) ##########################
        $(main_class_name).append('<div class="picker__calendar-container"></div>');
        $('.picker__calendar-container').append('<div class="z_day_names"></div>');
        $('.picker__calendar-container').append('<table class="picker__table"></table>');
        $('.picker__calendar-container').append('<div class="z_day_no"></div>');
        $(main_class_name).append('<div class="picker__footer"></div>');

        $(main_class_name + " .picker__footer").append('<button class="btn-flat picker__close">إغلاق</button>');
        //$(main_class_name + " .picker__date-display").append('<div class="z_cancel"></div>');
        $(main_class_name + " .picker__footer").append('<button class="btn-flat picker__clear">مسح</button>');

        $(main_class_name + " .picker__footer").append('<button class="btn-flat picker__today">اليوم</button>');

        //for (var i5 = 0; i5 < 7; i5++) {
        //    $(main_class_name + " .z_day_names").append('<div class="c_day_name">' + weekDayShort[i5] + '</div>');
        //}

        //var last_row = $('.d_36').attr('id');
        //var max_row = 0
        //if (typeof (last_row) === 'undefined') {
        //    max_row = 36;
        //} else {
        //    max_row = 44;
        //}

        //var i1, j1, chunk = 7;
        //for (i1 = 0, j1 = max_row; i1 < j1; i1 += chunk) {
        //$(main_class_name + " .z_day_no").append('<div class="d d_' + j1 + '"></div>');
        //}
        var chunk = 7;
        $(main_class_name + " .picker__calendar-container .picker__table").append('<thead><tr>');
        for (var w = 0; w < chunk; w++) {
            $(main_class_name + " .picker__calendar-container .picker__table thead").append('<th class="picker__weekday" title="' + weekDayName[w] + '">' + weekDayShort[w] + '</th>');
        }
        $(main_class_name + " .picker__calendar-container .picker__table").append('</tr></thead>');

        $(main_class_name + " .picker__calendar-container .picker__table").append('<tbody>');
        for (var j1 = 1; j1 < 43; j1 += chunk) {
            //console.info(j1);
            $(main_class_name + " .picker__calendar-container .picker__table tbody").append('<tr>');
            for (var i1 = j1; i1 < j1 + chunk; i1++) {
                $(main_class_name + " .picker__calendar-container .picker__table tbody").append('<td><div class="picker__day d d_' + i1 + '"></div></td>');
                //console.log(i1);
            }
            $(main_class_name + " .picker__calendar-container .picker__table").append('</tr>');
            //$(main_class_name + " .z_day_no").append('<div class="d d_' + i1 + '"></div>');
        }
        $(main_class_name + " .picker__calendar-container .picker__table").append('</tbody>');
    }

    //show zezo calender
    function show_cal() {
        $('.picker').addClass('picker--opened picker--focused');
        $(main_class_name).css('display', 'block');
        //$(main_class_name).css('top', text_position.top + 25);
        //$(main_class_name).css('left', text_position.left);

        $(main_class_name + ' .y').val(z_default_year);
        load_days();

        $(main_class_name).slideDown(200);
        set_weekday_class(day_no);
    }

    //function set_titles() {
    //$(main_class_name + ' .d').removeAttr('title');
    //$(main_class_name + ' .m').removeAttr('title');
    //$(main_class_name + ' .y').removeAttr('title');
    //$(main_class_name + ' .today').attr('title','تاريخ اليوم');
    //$(main_class_name + ' .d .picker__day--selected').attr('title','اليوم المحدد');
    //$(main_class_name + ' .z_months .picker__day--selected').attr('title','الشهر المحدد');
    //$(main_class_name + ' .picker__calendar-container .picker__day--selected').attr('title','اليوم المحدد');
    //}
    //make_ui('.t1');
    //call this every time a calender is shown
    function load_click_events() {
        $('#z_previous').click(function () {
            change_month(-1);
        });
        $('#z_next').click(function () {
            change_month(1);
        });
        //***********************************************
        //day click function
        function day_click(day_no) {
            $(main_class_name + ' .d').removeClass('picker__day--selected');
            $(day_no).addClass('picker__day--selected');
            z_default_day = $(day_no).html();

            z_show_full_date();
        }

        //Day click
        $(main_class_name + ' .d').click(function () {
            day_click(this);
            //z_hide();
            load_days();
            if (!$(this).hasClass('picker__day--weekend')) {
            }
        });

        $('.picker').click(function () {
            z_hide();
        });
        //background picker
        $('.picker__box').click(function (event) {
            event.stopPropagation();
        });

        //$('.picker__day--weekend').click(function (event) {
        //    event.stopPropagation();
        //});
        //Day double click
        $(main_class_name + ' .d').dblclick(function () {
            day_click(this);
            z_hide();
        });
        //***********************************************

        function change_month(number) {
            $('.month_slider').slideUp(100);
            z_default_month = parseInt(z_default_month, 10) + parseInt(number, 10);
            if (z_default_month == 13) {
                z_default_month = 1;
                z_default_year++;
            }
            if (z_default_month === 0) {
                z_default_month = 12;
                z_default_year--;
            }
            $(main_class_name + ' .picker__month-display').html(monthsNames[parseInt(z_default_month, 10) - 1]);
            $(main_class_name + ' .picker__year-display').html(z_default_year);
            load_days();
            remove_selected_day_class();
            //z_show_full_date();
        }


        $(main_class_name + ' .choose_m').click(function () {
            z_default_month = parseInt($(this).attr('m_no'), 10);
            $(main_class_name + ' .picker__month-display').html(monthsNames[z_default_month]);
            $(main_class_name + ' .month_slider').slideUp(200);
            load_days();
            remove_selected_day_class();
            //z_show_full_date();
        });
        $(main_class_name + ' .choose_y').click(function () {
            z_default_year = $(this).html();
            $(main_class_name + ' .picker__year-display').html(z_default_year);
            $(main_class_name + ' .year_slider').slideUp(200);
            load_days();
            remove_selected_day_class();
            //z_show_full_date();
        });

        function remove_selected_day_class() {
            $('.picker__day').removeClass('picker__day--selected');
            $('.picker__weekday-display').removeClass('red lighten-1');
        }

        $('.picker__year-display').click(function () {
            $('.month_slider').slideUp(200);
            $('.year_slider').slideToggle(200);
        });
        $('.picker__month-display').click(function () {
            $('.year_slider').slideUp(200);
            $('.month_slider').slideToggle(200);
        });

        //***********************************************
        // OK click
        $(main_class_name + ' .picker__close').click(function () {
            //z_show_full_date();
            z_hide();
        });
        //set today date
        $(main_class_name + ' .picker__today').click(function () {
            hijri_date = getRawHijriDateFromArray(getHijriDate('now'));
            today_day = hijri_date.substring(6, 8);
            today_month = hijri_date.substring(4, 6);
            today_year = hijri_date.substring(0, 4);
            z_default_day = today_day;
            z_default_month = today_month;
            z_default_year = today_year;
            //$(text_id_name).val(today_full_date);
            z_show_full_date();
            //day_click(this);
            //z_hide();
            load_days();
            //z_hide();
        });

        // Cancel click
        $(main_class_name + ' .z_cancel').click(function () {
            //restore the previous date that was in the text field
            if (date_array.length > 0) {
                $(text_id_name).val(date_array[0] + '/' + date_array[1] + '/' + date_array[2]);
            } else {
                $(text_id_name).val('');
            }
            z_hide();
            z_show_full_date();
        });

        //Clear click
        $(main_class_name + ' .picker__clear').click(function () {
            $(text_id_name).val('');
            z_hide();
            $(text_id_name).trigger('change');
            //z_show_full_date()
        });
        //***********************************************
    }

    //fill date in text box
    function z_show_full_date() {
        //alert('sdf');
        var dd, mm, yyyy, yyyymmdd;
        dd = ((z_default_day < 10) ? '0' + parseInt(z_default_day, 10) : z_default_day);
        mm = ((z_default_month < 10) ? '0' + parseInt(z_default_month, 10) : z_default_month);
        yyyy = z_default_year;
        yyyymmdd = String(yyyy) + String(mm) + String(dd);
        $(text_id_name).val(yyyy + '/' + mm + '/' + dd);
        $(text_id_name).trigger('change');
        $('.picker__day-display').html(z_default_day);
        day_no = getGregorianDate(yyyymmdd).dayNo;
        $('.picker__weekday-display').html(weekDayName[day_no]);
        set_weekday_class(day_no);
        //set_titles();
    }

    function set_weekday_class(day_no) {
        if (day_no > 4) {
            $('.picker__weekday-display').addClass('red lighten-1');
        } else {
            $('.picker__weekday-display').removeClass('red lighten-1');
        }
    }
});
var quran = [
    [
        1,
        "الفاتحة",
        7
    ], [
        2,
        "البقرة",
        286
    ], [
        3,
        "آل عمران",
        200
    ], [
        4,
        "النساء",
        176
    ], [
        5,
        "المآئدة",
        120
    ], [
        6,
        "الأنعام",
        165
    ], [
        7,
        "الأعراف",
        206
    ], [
        8,
        "الأنفال",
        75
    ], [
        9,
        "التوبة",
        129
    ], [
        10,
        "يونس",
        109
    ], [
        11,
        "هود",
        123
    ], [
        12,
        "يوسف",
        111
    ], [
        13,
        "الرعد",
        43
    ], [
        14,
        "إبراهيم",
        52
    ], [
        15,
        "الحجر",
        99
    ], [
        16,
        "النحل",
        128
    ], [
        17,
        "الإسراء",
        111
    ], [
        18,
        "الكهف",
        110
    ], [
        19,
        "مريم",
        98
    ], [
        20,
        "طـه",
        135
    ], [
        21,
        "الأنبياء",
        112
    ], [
        22,
        "الحج",
        78
    ], [
        23,
        "المؤمنون",
        118
    ], [
        24,
        "النور",
        64
    ], [
        25,
        "الفرقان",
        77
    ], [
        26,
        "الشعراء",
        227
    ], [
        27,
        "النمل",
        93
    ], [
        28,
        "القصص",
        88
    ], [
        29,
        "العنكبوت",
        69
    ], [
        30,
        "الروم",
        60
    ], [
        31,
        "لقمان",
        34
    ], [
        32,
        "السجدة",
        30
    ], [
        33,
        "الأحزاب",
        73
    ], [
        34,
        "سبأ",
        54
    ], [
        35,
        "فاطر",
        45
    ], [
        36,
        "يس",
        83
    ], [
        37,
        "الصافات",
        182
    ], [
        38,
        "ص",
        88
    ], [
        39,
        "الزمر",
        75
    ], [
        40,
        "غافر",
        85
    ], [
        41,
        "فصلت",
        54
    ], [
        42,
        "الشورى",
        53
    ], [
        43,
        "الزخرف",
        89
    ], [
        44,
        "الدخان",
        59
    ], [
        45,
        "الجاثية",
        37
    ], [
        46,
        "الأحقاف",
        35
    ], [
        47,
        "محمد",
        38
    ], [
        48,
        "الفتح",
        29
    ], [
        49,
        "الحجرات",
        18
    ], [
        50,
        "ق",
        45
    ], [
        51,
        "الذاريات",
        60
    ], [
        52,
        "الطور",
        49
    ], [
        53,
        "النجم",
        62
    ], [
        54,
        "القمر",
        55
    ], [
        55,
        "الرحمن",
        78
    ], [
        56,
        "الواقعة",
        96
    ], [
        57,
        "الحديد",
        29
    ], [
        58,
        "المجادلة",
        22
    ], [
        59,
        "الحشر",
        24
    ], [
        60,
        "الممتحنة",
        13
    ], [
        61,
        "الصف",
        14
    ], [
        62,
        "الجمعة",
        11
    ], [
        63,
        "المنافقون",
        11
    ], [
        64,
        "التغابن",
        18
    ], [
        65,
        "الطلاق",
        12
    ], [
        66,
        "التحريم",
        12
    ], [
        67,
        "الملك",
        30
    ], [
        68,
        "القلم",
        52
    ], [
        69,
        "الحاقة",
        52
    ], [
        70,
        "المعارج",
        44
    ], [
        71,
        "نوح",
        28
    ], [
        72,
        "الجن",
        28
    ], [
        73,
        "المزمل",
        20
    ], [
        74,
        "المدثر",
        56
    ], [
        75,
        "القيامة",
        40
    ], [
        76,
        "الإنسان",
        31
    ], [
        77,
        "المرسلات",
        50
    ], [
        78,
        "النبأ",
        40
    ], [
        79,
        "النازعات",
        46
    ], [
        80,
        "عبس",
        42
    ], [
        81,
        "التكوير",
        29
    ], [
        82,
        "الإنفطار",
        19
    ], [
        83,
        "المطففين",
        36
    ], [
        84,
        "الإنشقاق",
        25
    ], [
        85,
        "البرج",
        22
    ], [
        86,
        "الطارق",
        17
    ], [
        87,
        "الأعلى",
        19
    ], [
        88,
        "الغاشية",
        26
    ], [
        89,
        "الفجر",
        30
    ], [
        90,
        "البلد",
        20
    ], [
        91,
        "الشمس",
        15
    ], [
        92,
        "الليل",
        21
    ], [
        93,
        "الضحى",
        11
    ], [
        94,
        "الشرح",
        8
    ], [
        95,
        "التين",
        8
    ], [
        96,
        "العلق",
        19
    ], [
        97,
        "القدر",
        5
    ], [
        98,
        "البيِّنة",
        8
    ], [
        99,
        "الزلزلة",
        8
    ], [
        100,
        "العاديات",
        11
    ], [
        101,
        "القارعة",
        11
    ], [
        102,
        "التكاثر",
        8
    ], [
        103,
        "العصر",
        3
    ], [
        104,
        "الهمزة",
        9
    ], [
        105,
        "الفيل",
        5
    ], [
        106,
        "قريش",
        4
    ], [
        107,
        "الماعون",
        7
    ], [
        108,
        "الكوثر",
        3
    ], [
        109,
        "الكافرون",
        6
    ], [
        110,
        "النصر",
        3
    ], [
        111,
        "المسد",
        5
    ], [
        112,
        "الإخلاص",
        4
    ], [
        113,
        "الفلق",
        5
    ], [
        114,
        "الناس",
        6
    ]];
var quran_char_count = [
    [
        1,
        1,
        19
    ], [
        1,
        2,
        18
    ], [
        1,
        3,
        12
    ], [
        1,
        4,
        12
    ], [
        1,
        5,
        19
    ], [
        1,
        6,
        19
    ], [
        1,
        7,
        44
    ], [
        2,
        1,
        3
    ], [
        2,
        2,
        27
    ], [
        2,
        3,
        47
    ], [
        2,
        4,
        52
    ], [
        2,
        5,
        33
    ], [
        2,
        6,
        47
    ], [
        2,
        7,
        53
    ], [
        2,
        8,
        47
    ], [
        2,
        9,
        49
    ], [
        2,
        10,
        51
    ], [
        2,
        11,
        43
    ], [
        2,
        12,
        29
    ], [
        2,
        13,
        77
    ], [
        2,
        14,
        73
    ], [
        2,
        15,
        34
    ], [
        2,
        16,
        57
    ], [
        2,
        17,
        72
    ], [
        2,
        18,
        19
    ], [
        2,
        19,
        86
    ], [
        2,
        20,
        102
    ], [
        2,
        21,
        53
    ], [
        2,
        22,
        99
    ], [
        2,
        23,
        78
    ], [
        2,
        24,
        66
    ], [
        2,
        25,
        145
    ], [
        2,
        26,
        155
    ], [
        2,
        27,
        82
    ], [
        2,
        28,
        60
    ], [
        2,
        29,
        70
    ], [
        2,
        30,
        111
    ], [
        2,
        31,
        70
    ], [
        2,
        32,
        48
    ], [
        2,
        33,
        101
    ], [
        2,
        34,
        63
    ], [
        2,
        35,
        80
    ], [
        2,
        36,
        86
    ], [
        2,
        37,
        43
    ], [
        2,
        38,
        68
    ], [
        2,
        39,
        51
    ], [
        2,
        40,
        69
    ], [
        2,
        41,
        79
    ], [
        2,
        42,
        42
    ], [
        2,
        43,
        41
    ], [
        2,
        44,
        55
    ], [
        2,
        45,
        47
    ], [
        2,
        46,
        38
    ], [
        2,
        47,
        58
    ], [
        2,
        48,
        69
    ], [
        2,
        49,
        84
    ], [
        2,
        50,
        50
    ], [
        2,
        51,
        53
    ], [
        2,
        52,
        30
    ], [
        2,
        53,
        37
    ], [
        2,
        54,
        121
    ], [
        2,
        55,
        60
    ], [
        2,
        56,
        30
    ], [
        2,
        57,
        90
    ], [
        2,
        58,
        95
    ], [
        2,
        59,
        77
    ], [
        2,
        60,
        118
    ], [
        2,
        61,
        257
    ], [
        2,
        62,
        108
    ], [
        2,
        63,
        70
    ], [
        2,
        64,
        54
    ], [
        2,
        65,
        54
    ], [
        2,
        66,
        45
    ], [
        2,
        67,
        83
    ], [
        2,
        68,
        80
    ], [
        2,
        69,
        71
    ], [
        2,
        70,
        62
    ], [
        2,
        71,
        97
    ], [
        2,
        72,
        45
    ], [
        2,
        73,
        57
    ], [
        2,
        74,
        141
    ], [
        2,
        75,
        77
    ], [
        2,
        76,
        101
    ], [
        2,
        77,
        36
    ], [
        2,
        78,
        45
    ], [
        2,
        79,
        102
    ], [
        2,
        80,
        91
    ], [
        2,
        81,
        54
    ], [
        2,
        82,
        52
    ], [
        2,
        83,
        150
    ], [
        2,
        84,
        71
    ], [
        2,
        85,
        231
    ], [
        2,
        86,
        63
    ], [
        2,
        87,
        138
    ], [
        2,
        88,
        46
    ], [
        2,
        89,
        108
    ], [
        2,
        90,
        107
    ], [
        2,
        91,
        119
    ], [
        2,
        92,
        51
    ], [
        2,
        93,
        131
    ], [
        2,
        94,
        67
    ], [
        2,
        95,
        44
    ], [
        2,
        96,
        102
    ], [
        2,
        97,
        72
    ], [
        2,
        98,
        55
    ], [
        2,
        99,
        44
    ], [
        2,
        100,
        44
    ], [
        2,
        101,
        89
    ], [
        2,
        102,
        308
    ], [
        2,
        103,
        49
    ], [
        2,
        104,
        65
    ], [
        2,
        105,
        98
    ], [
        2,
        106,
        61
    ], [
        2,
        107,
        59
    ], [
        2,
        108,
        73
    ], [
        2,
        109,
        123
    ], [
        2,
        110,
        76
    ], [
        2,
        111,
        72
    ], [
        2,
        112,
        58
    ], [
        2,
        113,
        141
    ], [
        2,
        114,
        113
    ], [
        2,
        115,
        52
    ], [
        2,
        116,
        56
    ], [
        2,
        117,
        47
    ], [
        2,
        118,
        103
    ], [
        2,
        119,
        46
    ], [
        2,
        120,
        112
    ], [
        2,
        121,
        70
    ], [
        2,
        122,
        58
    ], [
        2,
        123,
        67
    ], [
        2,
        124,
        83
    ], [
        2,
        125,
        115
    ], [
        2,
        126,
        122
    ], [
        2,
        127,
        65
    ], [
        2,
        128,
        76
    ], [
        2,
        129,
        81
    ], [
        2,
        130,
        74
    ], [
        2,
        131,
        33
    ], [
        2,
        132,
        70
    ], [
        2,
        133,
        114
    ], [
        2,
        134,
        54
    ], [
        2,
        135,
        63
    ], [
        2,
        136,
        135
    ], [
        2,
        137,
        79
    ], [
        2,
        138,
        37
    ], [
        2,
        139,
        63
    ], [
        2,
        140,
        127
    ], [
        2,
        141,
        54
    ], [
        2,
        142,
        89
    ], [
        2,
        143,
        196
    ], [
        2,
        144,
        146
    ], [
        2,
        145,
        130
    ], [
        2,
        146,
        73
    ], [
        2,
        147,
        27
    ], [
        2,
        148,
        75
    ], [
        2,
        149,
        66
    ], [
        2,
        150,
        138
    ], [
        2,
        151,
        87
    ], [
        2,
        152,
        32
    ], [
        2,
        153,
        53
    ], [
        2,
        154,
        50
    ], [
        2,
        155,
        66
    ], [
        2,
        156,
        45
    ], [
        2,
        157,
        42
    ], [
        2,
        158,
        89
    ], [
        2,
        159,
        91
    ], [
        2,
        160,
        57
    ], [
        2,
        161,
        64
    ], [
        2,
        162,
        37
    ], [
        2,
        163,
        35
    ], [
        2,
        164,
        187
    ], [
        2,
        165,
        123
    ], [
        2,
        166,
        57
    ], [
        2,
        167,
        96
    ], [
        2,
        168,
        68
    ], [
        2,
        169,
        50
    ], [
        2,
        170,
        89
    ], [
        2,
        171,
        66
    ], [
        2,
        172,
        62
    ], [
        2,
        173,
        93
    ], [
        2,
        174,
        122
    ], [
        2,
        175,
        61
    ], [
        2,
        176,
        58
    ], [
        2,
        177,
        266
    ], [
        2,
        178,
        163
    ], [
        2,
        179,
        39
    ], [
        2,
        180,
        77
    ], [
        2,
        181,
        54
    ], [
        2,
        182,
        55
    ], [
        2,
        183,
        61
    ], [
        2,
        184,
        123
    ], [
        2,
        185,
        185
    ], [
        2,
        186,
        77
    ], [
        2,
        187,
        286
    ], [
        2,
        188,
        87
    ], [
        2,
        189,
        120
    ], [
        2,
        190,
        59
    ], [
        2,
        191,
        130
    ], [
        2,
        192,
        24
    ], [
        2,
        193,
        65
    ], [
        2,
        194,
        107
    ], [
        2,
        195,
        66
    ], [
        2,
        196,
        290
    ], [
        2,
        197,
        121
    ], [
        2,
        198,
        110
    ], [
        2,
        199,
        49
    ], [
        2,
        200,
        97
    ], [
        2,
        201,
        57
    ], [
        2,
        202,
        35
    ], [
        2,
        203,
        103
    ], [
        2,
        204,
        65
    ], [
        2,
        205,
        59
    ], [
        2,
        206,
        52
    ], [
        2,
        207,
        49
    ], [
        2,
        208,
        67
    ], [
        2,
        209,
        49
    ], [
        2,
        210,
        72
    ], [
        2,
        211,
        74
    ], [
        2,
        212,
        93
    ], [
        2,
        213,
        214
    ], [
        2,
        214,
        127
    ], [
        2,
        215,
        104
    ], [
        2,
        216,
        93
    ], [
        2,
        217,
        247
    ], [
        2,
        218,
        72
    ], [
        2,
        219,
        123
    ], [
        2,
        220,
        118
    ], [
        2,
        221,
        182
    ], [
        2,
        222,
        122
    ], [
        2,
        223,
        81
    ], [
        2,
        224,
        66
    ], [
        2,
        225,
        65
    ], [
        2,
        226,
        54
    ], [
        2,
        227,
        29
    ], [
        2,
        228,
        177
    ], [
        2,
        229,
        193
    ], [
        2,
        230,
        114
    ], [
        2,
        231,
        203
    ], [
        2,
        232,
        147
    ], [
        2,
        233,
        288
    ], [
        2,
        234,
        122
    ], [
        2,
        235,
        200
    ], [
        2,
        236,
        111
    ], [
        2,
        237,
        140
    ], [
        2,
        238,
        44
    ], [
        2,
        239,
        65
    ], [
        2,
        240,
        116
    ], [
        2,
        241,
        34
    ], [
        2,
        242,
        31
    ], [
        2,
        243,
        106
    ], [
        2,
        244,
        38
    ], [
        2,
        245,
        69
    ], [
        2,
        246,
        217
    ], [
        2,
        247,
        165
    ], [
        2,
        248,
        114
    ], [
        2,
        249,
        240
    ], [
        2,
        250,
        77
    ], [
        2,
        251,
        122
    ], [
        2,
        252,
        41
    ], [
        2,
        253,
        208
    ], [
        2,
        254,
        87
    ], [
        2,
        255,
        189
    ], [
        2,
        256,
        102
    ], [
        2,
        257,
        118
    ], [
        2,
        258,
        169
    ], [
        2,
        259,
        249
    ], [
        2,
        260,
        148
    ], [
        2,
        261,
        97
    ], [
        2,
        262,
        92
    ], [
        2,
        263,
        44
    ], [
        2,
        264,
        174
    ], [
        2,
        265,
        123
    ], [
        2,
        266,
        148
    ], [
        2,
        267,
        125
    ], [
        2,
        268,
        68
    ], [
        2,
        269,
        65
    ], [
        2,
        270,
        57
    ], [
        2,
        271,
        89
    ], [
        2,
        272,
        112
    ], [
        2,
        273,
        134
    ], [
        2,
        274,
        79
    ], [
        2,
        275,
        186
    ], [
        2,
        276,
        45
    ], [
        2,
        277,
        87
    ], [
        2,
        278,
        54
    ], [
        2,
        279,
        72
    ], [
        2,
        280,
        52
    ], [
        2,
        281,
        54
    ], [
        2,
        282,
        551
    ], [
        2,
        283,
        138
    ], [
        2,
        284,
        103
    ], [
        2,
        285,
        118
    ], [
        2,
        286,
        196
    ], [
        3,
        1,
        3
    ], [
        3,
        2,
        24
    ], [
        3,
        3,
        53
    ], [
        3,
        4,
        74
    ], [
        3,
        5,
        37
    ], [
        3,
        6,
        50
    ], [
        3,
        7,
        197
    ], [
        3,
        8,
        54
    ], [
        3,
        9,
        47
    ], [
        3,
        10,
        66
    ], [
        3,
        11,
        68
    ], [
        3,
        12,
        43
    ], [
        3,
        13,
        116
    ], [
        3,
        14,
        125
    ], [
        3,
        15,
        107
    ], [
        3,
        16,
        50
    ], [
        3,
        17,
        54
    ], [
        3,
        18,
        72
    ], [
        3,
        19,
        107
    ], [
        3,
        20,
        122
    ], [
        3,
        21,
        88
    ], [
        3,
        22,
        50
    ], [
        3,
        23,
        81
    ], [
        3,
        24,
        65
    ], [
        3,
        25,
        53
    ], [
        3,
        26,
        92
    ], [
        3,
        27,
        86
    ], [
        3,
        28,
        113
    ], [
        3,
        29,
        79
    ], [
        3,
        30,
        96
    ], [
        3,
        31,
        62
    ], [
        3,
        32,
        47
    ], [
        3,
        33,
        48
    ], [
        3,
        34,
        27
    ], [
        3,
        35,
        66
    ], [
        3,
        36,
        109
    ], [
        3,
        37,
        138
    ], [
        3,
        38,
        52
    ], [
        3,
        39,
        92
    ], [
        3,
        40,
        63
    ], [
        3,
        41,
        80
    ], [
        3,
        42,
        60
    ], [
        3,
        43,
        37
    ], [
        3,
        44,
        81
    ], [
        3,
        45,
        91
    ], [
        3,
        46,
        33
    ], [
        3,
        47,
        79
    ], [
        3,
        48,
        35
    ], [
        3,
        49,
        187
    ], [
        3,
        50,
        80
    ], [
        3,
        51,
        34
    ], [
        3,
        52,
        86
    ], [
        3,
        53,
        46
    ], [
        3,
        54,
        30
    ], [
        3,
        55,
        132
    ], [
        3,
        56,
        60
    ], [
        3,
        57,
        59
    ], [
        3,
        58,
        32
    ], [
        3,
        59,
        47
    ], [
        3,
        60,
        25
    ], [
        3,
        61,
        114
    ], [
        3,
        62,
        54
    ], [
        3,
        63,
        28
    ], [
        3,
        64,
        129
    ], [
        3,
        65,
        70
    ], [
        3,
        66,
        75
    ], [
        3,
        67,
        61
    ], [
        3,
        68,
        66
    ], [
        3,
        69,
        54
    ], [
        3,
        70,
        39
    ], [
        3,
        71,
        52
    ], [
        3,
        72,
        79
    ], [
        3,
        73,
        115
    ], [
        3,
        74,
        34
    ], [
        3,
        75,
        144
    ], [
        3,
        76,
        36
    ], [
        3,
        77,
        116
    ], [
        3,
        78,
        120
    ], [
        3,
        79,
        120
    ], [
        3,
        80,
        67
    ], [
        3,
        81,
        146
    ], [
        3,
        82,
        29
    ], [
        3,
        83,
        62
    ], [
        3,
        84,
        126
    ], [
        3,
        85,
        52
    ], [
        3,
        86,
        83
    ], [
        3,
        87,
        47
    ], [
        3,
        88,
        37
    ], [
        3,
        89,
        43
    ], [
        3,
        90,
        62
    ], [
        3,
        91,
        91
    ], [
        3,
        92,
        56
    ], [
        3,
        93,
        99
    ], [
        3,
        94,
        44
    ], [
        3,
        95,
        47
    ], [
        3,
        96,
        42
    ], [
        3,
        97,
        99
    ], [
        3,
        98,
        50
    ], [
        3,
        99,
        77
    ], [
        3,
        100,
        69
    ], [
        3,
        101,
        74
    ], [
        3,
        102,
        54
    ], [
        3,
        103,
        157
    ], [
        3,
        104,
        70
    ], [
        3,
        105,
        65
    ], [
        3,
        106,
        81
    ], [
        3,
        107,
        43
    ], [
        3,
        108,
        49
    ], [
        3,
        109,
        44
    ], [
        3,
        110,
        113
    ], [
        3,
        111,
        48
    ], [
        3,
        112,
        152
    ], [
        3,
        113,
        59
    ], [
        3,
        114,
        84
    ], [
        3,
        115,
        40
    ], [
        3,
        116,
        77
    ], [
        3,
        117,
        98
    ], [
        3,
        118,
        125
    ], [
        3,
        119,
        127
    ], [
        3,
        120,
        88
    ], [
        3,
        121,
        49
    ], [
        3,
        122,
        57
    ], [
        3,
        123,
        47
    ], [
        3,
        124,
        60
    ], [
        3,
        125,
        69
    ], [
        3,
        126,
        68
    ], [
        3,
        127,
        43
    ], [
        3,
        128,
        45
    ], [
        3,
        129,
        61
    ], [
        3,
        130,
        62
    ], [
        3,
        131,
        27
    ], [
        3,
        132,
        29
    ], [
        3,
        133,
        55
    ], [
        3,
        134,
        71
    ], [
        3,
        135,
        104
    ], [
        3,
        136,
        70
    ], [
        3,
        137,
        54
    ], [
        3,
        138,
        29
    ], [
        3,
        139,
        41
    ], [
        3,
        140,
        105
    ], [
        3,
        141,
        33
    ], [
        3,
        142,
        60
    ], [
        3,
        143,
        51
    ], [
        3,
        144,
        107
    ], [
        3,
        145,
        99
    ], [
        3,
        146,
        88
    ], [
        3,
        147,
        87
    ], [
        3,
        148,
        50
    ], [
        3,
        149,
        64
    ], [
        3,
        150,
        26
    ], [
        3,
        151,
        84
    ], [
        3,
        152,
        166
    ], [
        3,
        153,
        106
    ], [
        3,
        154,
        291
    ], [
        3,
        155,
        89
    ], [
        3,
        156,
        157
    ], [
        3,
        157,
        53
    ], [
        3,
        158,
        28
    ], [
        3,
        159,
        121
    ], [
        3,
        160,
        75
    ], [
        3,
        161,
        68
    ], [
        3,
        162,
        53
    ], [
        3,
        163,
        32
    ], [
        3,
        164,
        107
    ], [
        3,
        165,
        73
    ], [
        3,
        166,
        47
    ], [
        3,
        167,
        151
    ], [
        3,
        168,
        74
    ], [
        3,
        169,
        54
    ], [
        3,
        170,
        78
    ], [
        3,
        171,
        47
    ], [
        3,
        172,
        69
    ], [
        3,
        173,
        77
    ], [
        3,
        174,
        64
    ], [
        3,
        175,
        54
    ], [
        3,
        176,
        87
    ], [
        3,
        177,
        53
    ], [
        3,
        178,
        74
    ], [
        3,
        179,
        146
    ], [
        3,
        180,
        122
    ], [
        3,
        181,
        95
    ], [
        3,
        182,
        37
    ], [
        3,
        183,
        120
    ], [
        3,
        184,
        55
    ], [
        3,
        185,
        99
    ], [
        3,
        186,
        108
    ], [
        3,
        187,
        99
    ], [
        3,
        188,
        86
    ], [
        3,
        189,
        38
    ], [
        3,
        190,
        57
    ], [
        3,
        191,
        100
    ], [
        3,
        192,
        45
    ], [
        3,
        193,
        95
    ], [
        3,
        194,
        58
    ], [
        3,
        195,
        188
    ], [
        3,
        196,
        29
    ], [
        3,
        197,
        30
    ], [
        3,
        198,
        85
    ], [
        3,
        199,
        121
    ], [
        3,
        200,
        57
    ], [
        4,
        1,
        125
    ], [
        4,
        2,
        82
    ], [
        4,
        3,
        115
    ], [
        4,
        4,
        58
    ], [
        4,
        5,
        79
    ], [
        4,
        6,
        186
    ], [
        4,
        7,
        91
    ], [
        4,
        8,
        70
    ], [
        4,
        9,
        71
    ], [
        4,
        10,
        63
    ], [
        4,
        11,
        271
    ], [
        4,
        12,
        299
    ], [
        4,
        13,
        79
    ], [
        4,
        14,
        55
    ], [
        4,
        15,
        107
    ], [
        4,
        16,
        70
    ], [
        4,
        17,
        90
    ], [
        4,
        18,
        106
    ], [
        4,
        19,
        157
    ], [
        4,
        20,
        83
    ], [
        4,
        21,
        49
    ], [
        4,
        22,
        63
    ], [
        4,
        23,
        265
    ], [
        4,
        24,
        185
    ], [
        4,
        25,
        264
    ], [
        4,
        26,
        61
    ], [
        4,
        27,
        60
    ], [
        4,
        28,
        34
    ], [
        4,
        29,
        99
    ], [
        4,
        30,
        53
    ], [
        4,
        31,
        56
    ], [
        4,
        32,
        108
    ], [
        4,
        33,
        88
    ], [
        4,
        34,
        192
    ], [
        4,
        35,
        92
    ], [
        4,
        36,
        158
    ], [
        4,
        37,
        78
    ], [
        4,
        38,
        85
    ], [
        4,
        39,
        68
    ], [
        4,
        40,
        55
    ], [
        4,
        41,
        43
    ], [
        4,
        42,
        61
    ], [
        4,
        43,
        205
    ], [
        4,
        44,
        64
    ], [
        4,
        45,
        44
    ], [
        4,
        46,
        177
    ], [
        4,
        47,
        121
    ], [
        4,
        48,
        69
    ], [
        4,
        49,
        54
    ], [
        4,
        50,
        40
    ], [
        4,
        51,
        94
    ], [
        4,
        52,
        43
    ], [
        4,
        53,
        37
    ], [
        4,
        54,
        80
    ], [
        4,
        55,
        38
    ], [
        4,
        56,
        95
    ], [
        4,
        57,
        100
    ], [
        4,
        58,
        102
    ], [
        4,
        59,
        132
    ], [
        4,
        60,
        125
    ], [
        4,
        61,
        65
    ], [
        4,
        62,
        73
    ], [
        4,
        63,
        65
    ], [
        4,
        64,
        105
    ], [
        4,
        65,
        77
    ], [
        4,
        66,
        107
    ], [
        4,
        67,
        27
    ], [
        4,
        68,
        21
    ], [
        4,
        69,
        92
    ], [
        4,
        70,
        28
    ], [
        4,
        71,
        49
    ], [
        4,
        72,
        63
    ], [
        4,
        73,
        75
    ], [
        4,
        74,
        93
    ], [
        4,
        75,
        139
    ], [
        4,
        76,
        98
    ], [
        4,
        77,
        204
    ], [
        4,
        78,
        143
    ], [
        4,
        79,
        73
    ], [
        4,
        80,
        49
    ], [
        4,
        81,
        101
    ], [
        4,
        82,
        56
    ], [
        4,
        83,
        135
    ], [
        4,
        84,
        87
    ], [
        4,
        85,
        77
    ], [
        4,
        86,
        57
    ], [
        4,
        87,
        61
    ], [
        4,
        88,
        88
    ], [
        4,
        89,
        128
    ], [
        4,
        90,
        168
    ], [
        4,
        91,
        162
    ], [
        4,
        92,
        235
    ], [
        4,
        93,
        70
    ], [
        4,
        94,
        170
    ], [
        4,
        95,
        172
    ], [
        4,
        96,
        37
    ], [
        4,
        97,
        128
    ], [
        4,
        98,
        64
    ], [
        4,
        99,
        40
    ], [
        4,
        100,
        122
    ], [
        4,
        101,
        96
    ], [
        4,
        102,
        281
    ], [
        4,
        103,
        106
    ], [
        4,
        104,
        94
    ], [
        4,
        105,
        67
    ], [
        4,
        106,
        30
    ], [
        4,
        107,
        54
    ], [
        4,
        108,
        82
    ], [
        4,
        109,
        79
    ], [
        4,
        110,
        50
    ], [
        4,
        111,
        46
    ], [
        4,
        112,
        54
    ], [
        4,
        113,
        135
    ], [
        4,
        114,
        97
    ], [
        4,
        115,
        81
    ], [
        4,
        116,
        67
    ], [
        4,
        117,
        43
    ], [
        4,
        118,
        36
    ], [
        4,
        119,
        109
    ], [
        4,
        120,
        35
    ], [
        4,
        121,
        32
    ], [
        4,
        122,
        95
    ], [
        4,
        123,
        72
    ], [
        4,
        124,
        66
    ], [
        4,
        125,
        73
    ], [
        4,
        126,
        45
    ], [
        4,
        127,
        178
    ], [
        4,
        128,
        126
    ], [
        4,
        129,
        102
    ], [
        4,
        130,
        43
    ], [
        4,
        131,
        129
    ], [
        4,
        132,
        40
    ], [
        4,
        133,
        49
    ], [
        4,
        134,
        62
    ], [
        4,
        135,
        163
    ], [
        4,
        136,
        130
    ], [
        4,
        137,
        78
    ], [
        4,
        138,
        28
    ], [
        4,
        139,
        71
    ], [
        4,
        140,
        137
    ], [
        4,
        141,
        161
    ], [
        4,
        142,
        91
    ], [
        4,
        143,
        58
    ], [
        4,
        144,
        85
    ], [
        4,
        145,
        45
    ], [
        4,
        146,
        92
    ], [
        4,
        147,
        48
    ], [
        4,
        148,
        53
    ], [
        4,
        149,
        49
    ], [
        4,
        150,
        100
    ], [
        4,
        151,
        43
    ], [
        4,
        152,
        78
    ], [
        4,
        153,
        162
    ], [
        4,
        154,
        90
    ], [
        4,
        155,
        103
    ], [
        4,
        156,
        31
    ], [
        4,
        157,
        128
    ], [
        4,
        158,
        32
    ], [
        4,
        159,
        57
    ], [
        4,
        160,
        60
    ], [
        4,
        161,
        73
    ], [
        4,
        162,
        136
    ], [
        4,
        163,
        131
    ], [
        4,
        164,
        58
    ], [
        4,
        165,
        66
    ], [
        4,
        166,
        61
    ], [
        4,
        167,
        43
    ], [
        4,
        168,
        50
    ], [
        4,
        169,
        44
    ], [
        4,
        170,
        99
    ], [
        4,
        171,
        216
    ], [
        4,
        172,
        87
    ], [
        4,
        173,
        129
    ], [
        4,
        174,
        50
    ], [
        4,
        175,
        73
    ], [
        4,
        176,
        191
    ], [
        5,
        1,
        97
    ], [
        5,
        2,
        242
    ], [
        5,
        3,
        278
    ], [
        5,
        4,
        137
    ], [
        5,
        5,
        201
    ], [
        5,
        6,
        281
    ], [
        5,
        7,
        86
    ], [
        5,
        8,
        117
    ], [
        5,
        9,
        47
    ], [
        5,
        10,
        40
    ], [
        5,
        11,
        107
    ], [
        5,
        12,
        207
    ], [
        5,
        13,
        141
    ], [
        5,
        14,
        119
    ], [
        5,
        15,
        92
    ], [
        5,
        16,
        80
    ], [
        5,
        17,
        157
    ], [
        5,
        18,
        134
    ], [
        5,
        19,
        107
    ], [
        5,
        20,
        92
    ], [
        5,
        21,
        70
    ], [
        5,
        22,
        75
    ], [
        5,
        23,
        100
    ], [
        5,
        24,
        69
    ], [
        5,
        25,
        52
    ], [
        5,
        26,
        62
    ], [
        5,
        27,
        99
    ], [
        5,
        28,
        64
    ], [
        5,
        29,
        56
    ], [
        5,
        30,
        38
    ], [
        5,
        31,
        106
    ], [
        5,
        32,
        162
    ], [
        5,
        33,
        140
    ], [
        5,
        34,
        52
    ], [
        5,
        35,
        68
    ], [
        5,
        36,
        88
    ], [
        5,
        37,
        49
    ], [
        5,
        38,
        64
    ], [
        5,
        39,
        49
    ], [
        5,
        40,
        71
    ], [
        5,
        41,
        281
    ], [
        5,
        42,
        113
    ], [
        5,
        43,
        68
    ], [
        5,
        44,
        195
    ], [
        5,
        45,
        140
    ], [
        5,
        46,
        117
    ], [
        5,
        47,
        66
    ], [
        5,
        48,
        228
    ], [
        5,
        49,
        136
    ], [
        5,
        50,
        45
    ], [
        5,
        51,
        104
    ], [
        5,
        52,
        116
    ], [
        5,
        53,
        80
    ], [
        5,
        54,
        158
    ], [
        5,
        55,
        68
    ], [
        5,
        56,
        48
    ], [
        5,
        57,
        109
    ], [
        5,
        58,
        54
    ], [
        5,
        59,
        77
    ], [
        5,
        60,
        110
    ], [
        5,
        61,
        68
    ], [
        5,
        62,
        63
    ], [
        5,
        63,
        67
    ], [
        5,
        64,
        218
    ], [
        5,
        65,
        62
    ], [
        5,
        66,
        104
    ], [
        5,
        67,
        94
    ], [
        5,
        68,
        129
    ], [
        5,
        69,
        92
    ], [
        5,
        70,
        89
    ], [
        5,
        71,
        78
    ], [
        5,
        72,
        139
    ], [
        5,
        73,
        96
    ], [
        5,
        74,
        40
    ], [
        5,
        75,
        98
    ], [
        5,
        76,
        58
    ], [
        5,
        77,
        90
    ], [
        5,
        78,
        71
    ], [
        5,
        79,
        42
    ], [
        5,
        80,
        78
    ], [
        5,
        81,
        70
    ], [
        5,
        82,
        128
    ], [
        5,
        83,
        89
    ], [
        5,
        84,
        63
    ], [
        5,
        85,
        67
    ], [
        5,
        86,
        40
    ], [
        5,
        87,
        69
    ], [
        5,
        88,
        52
    ], [
        5,
        89,
        205
    ], [
        5,
        90,
        82
    ], [
        5,
        91,
        92
    ], [
        5,
        92,
        72
    ], [
        5,
        93,
        116
    ], [
        5,
        94,
        104
    ], [
        5,
        95,
        196
    ], [
        5,
        96,
        86
    ], [
        5,
        97,
        119
    ], [
        5,
        98,
        37
    ], [
        5,
        99,
        45
    ], [
        5,
        100,
        73
    ], [
        5,
        101,
        100
    ], [
        5,
        102,
        34
    ], [
        5,
        103,
        85
    ], [
        5,
        104,
        100
    ], [
        5,
        105,
        86
    ], [
        5,
        106,
        213
    ], [
        5,
        107,
        128
    ], [
        5,
        108,
        99
    ], [
        5,
        109,
        59
    ], [
        5,
        110,
        280
    ], [
        5,
        111,
        61
    ], [
        5,
        112,
        86
    ], [
        5,
        113,
        66
    ], [
        5,
        114,
        97
    ], [
        5,
        115,
        70
    ], [
        5,
        116,
        153
    ], [
        5,
        117,
        108
    ], [
        5,
        118,
        47
    ], [
        5,
        119,
        102
    ], [
        5,
        120,
        42
    ], [
        6,
        1,
        69
    ], [
        6,
        2,
        49
    ], [
        6,
        3,
        52
    ], [
        6,
        4,
        42
    ], [
        6,
        5,
        53
    ], [
        6,
        6,
        138
    ], [
        6,
        7,
        66
    ], [
        6,
        8,
        53
    ], [
        6,
        9,
        44
    ], [
        6,
        10,
        56
    ], [
        6,
        11,
        41
    ], [
        6,
        12,
        100
    ], [
        6,
        13,
        37
    ], [
        6,
        14,
        92
    ], [
        6,
        15,
        29
    ], [
        6,
        16,
        36
    ], [
        6,
        17,
        56
    ], [
        6,
        18,
        32
    ], [
        6,
        19,
        137
    ], [
        6,
        20,
        68
    ], [
        6,
        21,
        54
    ], [
        6,
        22,
        57
    ], [
        6,
        23,
        43
    ], [
        6,
        24,
        41
    ], [
        6,
        25,
        133
    ], [
        6,
        26,
        47
    ], [
        6,
        27,
        68
    ], [
        6,
        28,
        60
    ], [
        6,
        29,
        39
    ], [
        6,
        30,
        76
    ], [
        6,
        31,
        111
    ], [
        6,
        32,
        60
    ], [
        6,
        33,
        66
    ], [
        6,
        34,
        90
    ], [
        6,
        35,
        114
    ], [
        6,
        36,
        50
    ], [
        6,
        37,
        67
    ], [
        6,
        38,
        82
    ], [
        6,
        39,
        71
    ], [
        6,
        40,
        62
    ], [
        6,
        41,
        46
    ], [
        6,
        42,
        57
    ], [
        6,
        43,
        63
    ], [
        6,
        44,
        79
    ], [
        6,
        45,
        42
    ], [
        6,
        46,
        90
    ], [
        6,
        47,
        56
    ], [
        6,
        48,
        64
    ], [
        6,
        49,
        43
    ], [
        6,
        50,
        103
    ], [
        6,
        51,
        65
    ], [
        6,
        52,
        105
    ], [
        6,
        53,
        71
    ], [
        6,
        54,
        108
    ], [
        6,
        55,
        35
    ], [
        6,
        56,
        74
    ], [
        6,
        57,
        77
    ], [
        6,
        58,
        59
    ], [
        6,
        59,
        113
    ], [
        6,
        60,
        95
    ], [
        6,
        61,
        71
    ], [
        6,
        62,
        48
    ], [
        6,
        63,
        73
    ], [
        6,
        64,
        36
    ], [
        6,
        65,
        105
    ], [
        6,
        66,
        32
    ], [
        6,
        67,
        21
    ], [
        6,
        68,
        103
    ], [
        6,
        69,
        47
    ], [
        6,
        70,
        175
    ], [
        6,
        71,
        160
    ], [
        6,
        72,
        38
    ], [
        6,
        73,
        106
    ], [
        6,
        74,
        58
    ], [
        6,
        75,
        50
    ], [
        6,
        76,
        54
    ], [
        6,
        77,
        69
    ], [
        6,
        78,
        65
    ], [
        6,
        79,
        53
    ], [
        6,
        80,
        92
    ], [
        6,
        81,
        93
    ], [
        6,
        82,
        52
    ], [
        6,
        83,
        58
    ], [
        6,
        84,
        100
    ], [
        6,
        85,
        34
    ], [
        6,
        86,
        44
    ], [
        6,
        87,
        56
    ], [
        6,
        88,
        59
    ], [
        6,
        89,
        81
    ], [
        6,
        90,
        66
    ], [
        6,
        91,
        171
    ], [
        6,
        92,
        102
    ], [
        6,
        93,
        201
    ], [
        6,
        94,
        128
    ], [
        6,
        95,
        69
    ], [
        6,
        96,
        62
    ], [
        6,
        97,
        69
    ], [
        6,
        98,
        59
    ], [
        6,
        99,
        187
    ], [
        6,
        100,
        68
    ], [
        6,
        101,
        65
    ], [
        6,
        102,
        53
    ], [
        6,
        103,
        43
    ], [
        6,
        104,
        59
    ], [
        6,
        105,
        44
    ], [
        6,
        106,
        44
    ], [
        6,
        107,
        53
    ], [
        6,
        108,
        103
    ], [
        6,
        109,
        90
    ], [
        6,
        110,
        60
    ], [
        6,
        111,
        100
    ], [
        6,
        112,
        95
    ], [
        6,
        113,
        62
    ], [
        6,
        114,
        105
    ], [
        6,
        115,
        48
    ], [
        6,
        116,
        63
    ], [
        6,
        117,
        39
    ], [
        6,
        118,
        40
    ], [
        6,
        119,
        116
    ], [
        6,
        120,
        59
    ], [
        6,
        121,
        96
    ], [
        6,
        122,
        100
    ], [
        6,
        123,
        69
    ], [
        6,
        124,
        118
    ], [
        6,
        125,
        110
    ], [
        6,
        126,
        41
    ], [
        6,
        127,
        41
    ], [
        6,
        128,
        151
    ], [
        6,
        129,
        38
    ], [
        6,
        130,
        134
    ], [
        6,
        131,
        38
    ], [
        6,
        132,
        37
    ], [
        6,
        133,
        71
    ], [
        6,
        134,
        27
    ], [
        6,
        135,
        75
    ], [
        6,
        136,
        128
    ], [
        6,
        137,
        96
    ], [
        6,
        138,
        117
    ], [
        6,
        139,
        95
    ], [
        6,
        140,
        83
    ], [
        6,
        141,
        145
    ], [
        6,
        142,
        70
    ], [
        6,
        143,
        106
    ], [
        6,
        144,
        167
    ], [
        6,
        145,
        128
    ], [
        6,
        146,
        122
    ], [
        6,
        147,
        51
    ], [
        6,
        148,
        142
    ], [
        6,
        149,
        36
    ], [
        6,
        150,
        118
    ], [
        6,
        151,
        180
    ], [
        6,
        152,
        149
    ], [
        6,
        153,
        75
    ], [
        6,
        154,
        75
    ], [
        6,
        155,
        44
    ], [
        6,
        156,
        61
    ], [
        6,
        157,
        144
    ], [
        6,
        158,
        138
    ], [
        6,
        159,
        77
    ], [
        6,
        160,
        64
    ], [
        6,
        161,
        66
    ], [
        6,
        162,
        39
    ], [
        6,
        163,
        32
    ], [
        6,
        164,
        104
    ], [
        6,
        165,
        86
    ], [
        7,
        1,
        4
    ], [
        7,
        2,
        50
    ], [
        7,
        3,
        57
    ], [
        7,
        4,
        43
    ], [
        7,
        5,
        46
    ], [
        7,
        6,
        36
    ], [
        7,
        7,
        27
    ], [
        7,
        8,
        45
    ], [
        7,
        9,
        56
    ], [
        7,
        10,
        48
    ], [
        7,
        11,
        73
    ], [
        7,
        12,
        57
    ], [
        7,
        13,
        50
    ], [
        7,
        14,
        21
    ], [
        7,
        15,
        16
    ], [
        7,
        16,
        36
    ], [
        7,
        17,
        66
    ], [
        7,
        18,
        54
    ], [
        7,
        19,
        70
    ], [
        7,
        20,
        105
    ], [
        7,
        21,
        26
    ], [
        7,
        22,
        130
    ], [
        7,
        23,
        54
    ], [
        7,
        24,
        48
    ], [
        7,
        25,
        34
    ], [
        7,
        26,
        83
    ], [
        7,
        27,
        138
    ], [
        7,
        28,
        94
    ], [
        7,
        29,
        69
    ], [
        7,
        30,
        78
    ], [
        7,
        31,
        64
    ], [
        7,
        32,
        111
    ], [
        7,
        33,
        110
    ], [
        7,
        34,
        47
    ], [
        7,
        35,
        74
    ], [
        7,
        36,
        58
    ], [
        7,
        37,
        157
    ], [
        7,
        38,
        161
    ], [
        7,
        39,
        62
    ], [
        7,
        40,
        104
    ], [
        7,
        41,
        42
    ], [
        7,
        42,
        70
    ], [
        7,
        43,
        150
    ], [
        7,
        44,
        110
    ], [
        7,
        45,
        48
    ], [
        7,
        46,
        87
    ], [
        7,
        47,
        62
    ], [
        7,
        48,
        72
    ], [
        7,
        49,
        68
    ], [
        7,
        50,
        87
    ], [
        7,
        51,
        95
    ], [
        7,
        52,
        45
    ], [
        7,
        53,
        146
    ], [
        7,
        54,
        145
    ], [
        7,
        55,
        35
    ], [
        7,
        56,
        65
    ], [
        7,
        57,
        123
    ], [
        7,
        58,
        72
    ], [
        7,
        59,
        76
    ], [
        7,
        60,
        32
    ], [
        7,
        61,
        39
    ], [
        7,
        62,
        44
    ], [
        7,
        63,
        59
    ], [
        7,
        64,
        71
    ], [
        7,
        65,
        57
    ], [
        7,
        66,
        58
    ], [
        7,
        67,
        39
    ], [
        7,
        68,
        30
    ], [
        7,
        69,
        113
    ], [
        7,
        70,
        71
    ], [
        7,
        71,
        107
    ], [
        7,
        72,
        66
    ], [
        7,
        73,
        132
    ], [
        7,
        74,
        113
    ], [
        7,
        75,
        96
    ], [
        7,
        76,
        37
    ], [
        7,
        77,
        66
    ], [
        7,
        78,
        33
    ], [
        7,
        79,
        63
    ], [
        7,
        80,
        53
    ], [
        7,
        81,
        46
    ], [
        7,
        82,
        54
    ], [
        7,
        83,
        36
    ], [
        7,
        84,
        40
    ], [
        7,
        85,
        156
    ], [
        7,
        86,
        107
    ], [
        7,
        87,
        83
    ], [
        7,
        88,
        93
    ], [
        7,
        89,
        159
    ], [
        7,
        90,
        53
    ], [
        7,
        91,
        33
    ], [
        7,
        92,
        59
    ], [
        7,
        93,
        64
    ], [
        7,
        94,
        59
    ], [
        7,
        95,
        82
    ], [
        7,
        96,
        85
    ], [
        7,
        97,
        40
    ], [
        7,
        98,
        38
    ], [
        7,
        99,
        44
    ], [
        7,
        100,
        79
    ], [
        7,
        101,
        102
    ], [
        7,
        102,
        41
    ], [
        7,
        103,
        71
    ], [
        7,
        104,
        34
    ], [
        7,
        105,
        65
    ], [
        7,
        106,
        36
    ], [
        7,
        107,
        24
    ], [
        7,
        108,
        26
    ], [
        7,
        109,
        32
    ], [
        7,
        110,
        30
    ], [
        7,
        111,
        34
    ], [
        7,
        112,
        16
    ], [
        7,
        113,
        46
    ], [
        7,
        114,
        22
    ], [
        7,
        115,
        40
    ], [
        7,
        116,
        55
    ], [
        7,
        117,
        41
    ], [
        7,
        118,
        25
    ], [
        7,
        119,
        25
    ], [
        7,
        120,
        17
    ], [
        7,
        121,
        20
    ], [
        7,
        122,
        12
    ], [
        7,
        123,
        77
    ], [
        7,
        124,
        41
    ], [
        7,
        125,
        22
    ], [
        7,
        126,
        66
    ], [
        7,
        127,
        100
    ], [
        7,
        128,
        76
    ], [
        7,
        129,
        88
    ], [
        7,
        130,
        47
    ], [
        7,
        131,
        94
    ], [
        7,
        132,
        47
    ], [
        7,
        133,
        80
    ], [
        7,
        134,
        90
    ], [
        7,
        135,
        43
    ], [
        7,
        136,
        60
    ], [
        7,
        137,
        139
    ], [
        7,
        138,
        99
    ], [
        7,
        139,
        36
    ], [
        7,
        140,
        40
    ], [
        7,
        141,
        85
    ], [
        7,
        142,
        109
    ], [
        7,
        143,
        165
    ], [
        7,
        144,
        65
    ], [
        7,
        145,
        89
    ], [
        7,
        146,
        153
    ], [
        7,
        147,
        63
    ], [
        7,
        148,
        89
    ], [
        7,
        149,
        74
    ], [
        7,
        150,
        172
    ], [
        7,
        151,
        46
    ], [
        7,
        152,
        69
    ], [
        7,
        153,
        59
    ], [
        7,
        154,
        63
    ], [
        7,
        155,
        170
    ], [
        7,
        156,
        129
    ], [
        7,
        157,
        222
    ], [
        7,
        158,
        141
    ], [
        7,
        159,
        32
    ], [
        7,
        160,
        200
    ], [
        7,
        161,
        93
    ], [
        7,
        162,
        73
    ], [
        7,
        163,
        118
    ], [
        7,
        164,
        81
    ], [
        7,
        165,
        79
    ], [
        7,
        166,
        41
    ], [
        7,
        167,
        80
    ], [
        7,
        168,
        77
    ], [
        7,
        169,
        172
    ], [
        7,
        170,
        52
    ], [
        7,
        171,
        79
    ], [
        7,
        172,
        104
    ], [
        7,
        173,
        64
    ], [
        7,
        174,
        27
    ], [
        7,
        175,
        64
    ], [
        7,
        176,
        132
    ], [
        7,
        177,
        47
    ], [
        7,
        178,
        42
    ], [
        7,
        179,
        122
    ], [
        7,
        180,
        69
    ], [
        7,
        181,
        31
    ], [
        7,
        182,
        40
    ], [
        7,
        183,
        18
    ], [
        7,
        184,
        40
    ], [
        7,
        185,
        88
    ], [
        7,
        186,
        40
    ], [
        7,
        187,
        153
    ], [
        7,
        188,
        104
    ], [
        7,
        189,
        125
    ], [
        7,
        190,
        55
    ], [
        7,
        191,
        28
    ], [
        7,
        192,
        33
    ], [
        7,
        193,
        56
    ], [
        7,
        194,
        64
    ], [
        7,
        195,
        99
    ], [
        7,
        196,
        39
    ], [
        7,
        197,
        47
    ], [
        7,
        198,
        52
    ], [
        7,
        199,
        32
    ], [
        7,
        200,
        44
    ], [
        7,
        201,
        50
    ], [
        7,
        202,
        31
    ], [
        7,
        203,
        89
    ], [
        7,
        204,
        41
    ], [
        7,
        205,
        69
    ], [
        7,
        206,
        48
    ], [
        8,
        1,
        89
    ], [
        8,
        2,
        82
    ], [
        8,
        3,
        34
    ], [
        8,
        4,
        47
    ], [
        8,
        5,
        47
    ], [
        8,
        6,
        51
    ], [
        8,
        7,
        101
    ], [
        8,
        8,
        33
    ], [
        8,
        9,
        52
    ], [
        8,
        10,
        67
    ], [
        8,
        11,
        99
    ], [
        8,
        12,
        103
    ], [
        8,
        13,
        58
    ], [
        8,
        14,
        30
    ], [
        8,
        15,
        54
    ], [
        8,
        16,
        81
    ], [
        8,
        17,
        86
    ], [
        8,
        18,
        26
    ], [
        8,
        19,
        97
    ], [
        8,
        20,
        54
    ], [
        8,
        21,
        36
    ], [
        8,
        22,
        39
    ], [
        8,
        23,
        49
    ], [
        8,
        24,
        95
    ], [
        8,
        25,
        58
    ], [
        8,
        26,
        95
    ], [
        8,
        27,
        61
    ], [
        8,
        28,
        48
    ], [
        8,
        29,
        82
    ], [
        8,
        30,
        74
    ], [
        8,
        31,
        69
    ], [
        8,
        32,
        72
    ], [
        8,
        33,
        52
    ], [
        8,
        34,
        93
    ], [
        8,
        35,
        58
    ], [
        8,
        36,
        98
    ], [
        8,
        37,
        81
    ], [
        8,
        38,
        59
    ], [
        8,
        39,
        66
    ], [
        8,
        40,
        46
    ], [
        8,
        41,
        150
    ], [
        8,
        42,
        149
    ], [
        8,
        43,
        88
    ], [
        8,
        44,
        88
    ], [
        8,
        45,
        61
    ], [
        8,
        46,
        67
    ], [
        8,
        47,
        76
    ], [
        8,
        48,
        140
    ], [
        8,
        49,
        74
    ], [
        8,
        50,
        67
    ], [
        8,
        51,
        37
    ], [
        8,
        52,
        74
    ], [
        8,
        53,
        68
    ], [
        8,
        54,
        82
    ], [
        8,
        55,
        38
    ], [
        8,
        56,
        44
    ], [
        8,
        57,
        43
    ], [
        8,
        58,
        55
    ], [
        8,
        59,
        35
    ], [
        8,
        60,
        134
    ], [
        8,
        61,
        50
    ], [
        8,
        62,
        53
    ], [
        8,
        63,
        76
    ], [
        8,
        64,
        37
    ], [
        8,
        65,
        115
    ], [
        8,
        66,
        107
    ], [
        8,
        67,
        78
    ], [
        8,
        68,
        39
    ], [
        8,
        69,
        46
    ], [
        8,
        70,
        94
    ], [
        8,
        71,
        54
    ], [
        8,
        72,
        209
    ], [
        8,
        73,
        57
    ], [
        8,
        74,
        85
    ], [
        8,
        75,
        95
    ], [
        9,
        1,
        41
    ], [
        9,
        2,
        64
    ], [
        9,
        3,
        135
    ], [
        9,
        4,
        98
    ], [
        9,
        5,
        133
    ], [
        9,
        6,
        74
    ], [
        9,
        7,
        105
    ], [
        9,
        8,
        77
    ], [
        9,
        9,
        56
    ], [
        9,
        10,
        39
    ], [
        9,
        11,
        68
    ], [
        9,
        12,
        79
    ], [
        9,
        13,
        93
    ], [
        9,
        14,
        59
    ], [
        9,
        15,
        45
    ], [
        9,
        16,
        102
    ], [
        9,
        17,
        83
    ], [
        9,
        18,
        99
    ], [
        9,
        19,
        110
    ], [
        9,
        20,
        80
    ], [
        9,
        21,
        44
    ], [
        9,
        22,
        31
    ], [
        9,
        23,
        97
    ], [
        9,
        24,
        170
    ], [
        9,
        25,
        96
    ], [
        9,
        26,
        83
    ], [
        9,
        27,
        40
    ], [
        9,
        28,
        113
    ], [
        9,
        29,
        123
    ], [
        9,
        30,
        107
    ], [
        9,
        31,
        102
    ], [
        9,
        32,
        64
    ], [
        9,
        33,
        60
    ], [
        9,
        34,
        139
    ], [
        9,
        35,
        84
    ], [
        9,
        36,
        160
    ], [
        9,
        37,
        134
    ], [
        9,
        38,
        122
    ], [
        9,
        39,
        70
    ], [
        9,
        40,
        176
    ], [
        9,
        41,
        71
    ], [
        9,
        42,
        113
    ], [
        9,
        43,
        52
    ], [
        9,
        44,
        77
    ], [
        9,
        45,
        70
    ], [
        9,
        46,
        71
    ], [
        9,
        47,
        86
    ], [
        9,
        48,
        64
    ], [
        9,
        49,
        63
    ], [
        9,
        50,
        65
    ], [
        9,
        51,
        56
    ], [
        9,
        52,
        93
    ], [
        9,
        53,
        47
    ], [
        9,
        54,
        95
    ], [
        9,
        55,
        81
    ], [
        9,
        56,
        45
    ], [
        9,
        57,
        44
    ], [
        9,
        58,
        62
    ], [
        9,
        59,
        82
    ], [
        9,
        60,
        118
    ], [
        9,
        61,
        114
    ], [
        9,
        62,
        55
    ], [
        9,
        63,
        64
    ], [
        9,
        64,
        73
    ], [
        9,
        65,
        64
    ], [
        9,
        66,
        67
    ], [
        9,
        67,
        105
    ], [
        9,
        68,
        79
    ], [
        9,
        69,
        168
    ], [
        9,
        70,
        125
    ], [
        9,
        71,
        132
    ], [
        9,
        72,
        107
    ], [
        9,
        73,
        62
    ], [
        9,
        74,
        190
    ], [
        9,
        75,
        52
    ], [
        9,
        76,
        37
    ], [
        9,
        77,
        67
    ], [
        9,
        78,
        47
    ], [
        9,
        79,
        93
    ], [
        9,
        80,
        103
    ], [
        9,
        81,
        118
    ], [
        9,
        82,
        43
    ], [
        9,
        83,
        112
    ], [
        9,
        84,
        71
    ], [
        9,
        85,
        74
    ], [
        9,
        86,
        82
    ], [
        9,
        87,
        46
    ], [
        9,
        88,
        76
    ], [
        9,
        89,
        56
    ], [
        9,
        90,
        80
    ], [
        9,
        91,
        103
    ], [
        9,
        92,
        90
    ], [
        9,
        93,
        86
    ], [
        9,
        94,
        132
    ], [
        9,
        95,
        88
    ], [
        9,
        96,
        59
    ], [
        9,
        97,
        69
    ], [
        9,
        98,
        71
    ], [
        9,
        99,
        113
    ], [
        9,
        100,
        128
    ], [
        9,
        101,
        99
    ], [
        9,
        102,
        74
    ], [
        9,
        103,
        65
    ], [
        9,
        104,
        67
    ], [
        9,
        105,
        85
    ], [
        9,
        106,
        54
    ], [
        9,
        107,
        117
    ], [
        9,
        108,
        86
    ], [
        9,
        109,
        101
    ], [
        9,
        110,
        61
    ], [
        9,
        111,
        174
    ], [
        9,
        112,
        109
    ], [
        9,
        113,
        84
    ], [
        9,
        114,
        88
    ], [
        9,
        115,
        61
    ], [
        9,
        116,
        61
    ], [
        9,
        117,
        109
    ], [
        9,
        118,
        127
    ], [
        9,
        119,
        41
    ], [
        9,
        120,
        199
    ], [
        9,
        121,
        77
    ], [
        9,
        122,
        102
    ], [
        9,
        123,
        78
    ], [
        9,
        124,
        82
    ], [
        9,
        125,
        54
    ], [
        9,
        126,
        56
    ], [
        9,
        127,
        79
    ], [
        9,
        128,
        60
    ], [
        9,
        129,
        54
    ], [
        10,
        1,
        22
    ], [
        10,
        2,
        99
    ], [
        10,
        3,
        113
    ], [
        10,
        4,
        126
    ], [
        10,
        5,
        101
    ], [
        10,
        6,
        62
    ], [
        10,
        7,
        71
    ], [
        10,
        8,
        30
    ], [
        10,
        9,
        74
    ], [
        10,
        10,
        66
    ], [
        10,
        11,
        86
    ], [
        10,
        12,
        104
    ], [
        10,
        13,
        87
    ], [
        10,
        14,
        42
    ], [
        10,
        15,
        138
    ], [
        10,
        16,
        65
    ], [
        10,
        17,
        54
    ], [
        10,
        18,
        123
    ], [
        10,
        19,
        71
    ], [
        10,
        20,
        68
    ], [
        10,
        21,
        84
    ], [
        10,
        22,
        166
    ], [
        10,
        23,
        113
    ], [
        10,
        24,
        198
    ], [
        10,
        25,
        45
    ], [
        10,
        26,
        72
    ], [
        10,
        27,
        118
    ], [
        10,
        28,
        89
    ], [
        10,
        29,
        46
    ], [
        10,
        30,
        63
    ], [
        10,
        31,
        114
    ], [
        10,
        32,
        48
    ], [
        10,
        33,
        39
    ], [
        10,
        34,
        63
    ], [
        10,
        35,
        97
    ], [
        10,
        36,
        60
    ], [
        10,
        37,
        83
    ], [
        10,
        38,
        66
    ], [
        10,
        39,
        81
    ], [
        10,
        40,
        45
    ], [
        10,
        41,
        60
    ], [
        10,
        42,
        47
    ], [
        10,
        43,
        45
    ], [
        10,
        44,
        42
    ], [
        10,
        45,
        87
    ], [
        10,
        46,
        63
    ], [
        10,
        47,
        49
    ], [
        10,
        48,
        30
    ], [
        10,
        49,
        81
    ], [
        10,
        50,
        53
    ], [
        10,
        51,
        39
    ], [
        10,
        52,
        52
    ], [
        10,
        53,
        43
    ], [
        10,
        54,
        84
    ], [
        10,
        55,
        58
    ], [
        10,
        56,
        22
    ], [
        10,
        57,
        63
    ], [
        10,
        58,
        44
    ], [
        10,
        59,
        73
    ], [
        10,
        60,
        76
    ], [
        10,
        61,
        141
    ], [
        10,
        62,
        36
    ], [
        10,
        63,
        21
    ], [
        10,
        64,
        65
    ], [
        10,
        65,
        42
    ], [
        10,
        66,
        90
    ], [
        10,
        67,
        61
    ], [
        10,
        68,
        96
    ], [
        10,
        69,
        35
    ], [
        10,
        70,
        59
    ], [
        10,
        71,
        136
    ], [
        10,
        72,
        60
    ], [
        10,
        73,
        87
    ], [
        10,
        74,
        93
    ], [
        10,
        75,
        69
    ], [
        10,
        76,
        38
    ], [
        10,
        77,
        48
    ], [
        10,
        78,
        77
    ], [
        10,
        79,
        26
    ], [
        10,
        80,
        39
    ], [
        10,
        81,
        64
    ], [
        10,
        82,
        33
    ], [
        10,
        83,
        85
    ], [
        10,
        84,
        52
    ], [
        10,
        85,
        48
    ], [
        10,
        86,
        26
    ], [
        10,
        87,
        83
    ], [
        10,
        88,
        131
    ], [
        10,
        89,
        51
    ], [
        10,
        90,
        118
    ], [
        10,
        91,
        28
    ], [
        10,
        92,
        61
    ], [
        10,
        93,
        109
    ], [
        10,
        94,
        85
    ], [
        10,
        95,
        44
    ], [
        10,
        96,
        30
    ], [
        10,
        97,
        33
    ], [
        10,
        98,
        94
    ], [
        10,
        99,
        60
    ], [
        10,
        100,
        53
    ], [
        10,
        101,
        60
    ], [
        10,
        102,
        64
    ], [
        10,
        103,
        45
    ], [
        10,
        104,
        100
    ], [
        10,
        105,
        38
    ], [
        10,
        106,
        55
    ], [
        10,
        107,
        85
    ], [
        10,
        108,
        87
    ], [
        10,
        109,
        45
    ], [
        11,
        1,
        36
    ], [
        11,
        2,
        35
    ], [
        11,
        3,
        98
    ], [
        11,
        4,
        28
    ], [
        11,
        5,
        85
    ], [
        11,
        6,
        64
    ], [
        11,
        7,
        127
    ], [
        11,
        8,
        93
    ], [
        11,
        9,
        47
    ], [
        11,
        10,
        56
    ], [
        11,
        11,
        48
    ], [
        11,
        12,
        95
    ], [
        11,
        13,
        75
    ], [
        11,
        14,
        64
    ], [
        11,
        15,
        62
    ], [
        11,
        16,
        65
    ], [
        11,
        17,
        146
    ], [
        11,
        18,
        100
    ], [
        11,
        19,
        50
    ], [
        11,
        20,
        100
    ], [
        11,
        21,
        41
    ], [
        11,
        22,
        27
    ], [
        11,
        23,
        67
    ], [
        11,
        24,
        61
    ], [
        11,
        25,
        35
    ], [
        11,
        26,
        40
    ], [
        11,
        27,
        113
    ], [
        11,
        28,
        81
    ], [
        11,
        29,
        92
    ], [
        11,
        30,
        38
    ], [
        11,
        31,
        123
    ], [
        11,
        32,
        59
    ], [
        11,
        33,
        38
    ], [
        11,
        34,
        66
    ], [
        11,
        35,
        52
    ], [
        11,
        36,
        58
    ], [
        11,
        37,
        55
    ], [
        11,
        38,
        73
    ], [
        11,
        39,
        42
    ], [
        11,
        40,
        94
    ], [
        11,
        41,
        48
    ], [
        11,
        42,
        73
    ], [
        11,
        43,
        86
    ], [
        11,
        44,
        84
    ], [
        11,
        45,
        56
    ], [
        11,
        46,
        76
    ], [
        11,
        47,
        63
    ], [
        11,
        48,
        72
    ], [
        11,
        49,
        75
    ], [
        11,
        50,
        63
    ], [
        11,
        51,
        52
    ], [
        11,
        52,
        82
    ], [
        11,
        53,
        61
    ], [
        11,
        54,
        65
    ], [
        11,
        55,
        28
    ], [
        11,
        56,
        65
    ], [
        11,
        57,
        81
    ], [
        11,
        58,
        61
    ], [
        11,
        59,
        50
    ], [
        11,
        60,
        68
    ], [
        11,
        61,
        111
    ], [
        11,
        62,
        83
    ], [
        11,
        63,
        85
    ], [
        11,
        64,
        70
    ], [
        11,
        65,
        47
    ], [
        11,
        66,
        73
    ], [
        11,
        67,
        41
    ], [
        11,
        68,
        44
    ], [
        11,
        69,
        63
    ], [
        11,
        70,
        68
    ], [
        11,
        71,
        48
    ], [
        11,
        72,
        48
    ], [
        11,
        73,
        60
    ], [
        11,
        74,
        48
    ], [
        11,
        75,
        22
    ], [
        11,
        76,
        54
    ], [
        11,
        77,
        48
    ], [
        11,
        78,
        109
    ], [
        11,
        79,
        43
    ], [
        11,
        80,
        30
    ], [
        11,
        81,
        118
    ], [
        11,
        82,
        57
    ], [
        11,
        83,
        31
    ], [
        11,
        84,
        110
    ], [
        11,
        85,
        74
    ], [
        11,
        86,
        42
    ], [
        11,
        87,
        82
    ], [
        11,
        88,
        137
    ], [
        11,
        89,
        78
    ], [
        11,
        90,
        37
    ], [
        11,
        91,
        79
    ], [
        11,
        92,
        65
    ], [
        11,
        93,
        82
    ], [
        11,
        94,
        86
    ], [
        11,
        95,
        37
    ], [
        11,
        96,
        31
    ], [
        11,
        97,
        44
    ], [
        11,
        98,
        46
    ], [
        11,
        99,
        42
    ], [
        11,
        100,
        36
    ], [
        11,
        101,
        94
    ], [
        11,
        102,
        44
    ], [
        11,
        103,
        57
    ], [
        11,
        104,
        20
    ], [
        11,
        105,
        36
    ], [
        11,
        106,
        37
    ], [
        11,
        107,
        57
    ], [
        11,
        108,
        75
    ], [
        11,
        109,
        77
    ], [
        11,
        110,
        72
    ], [
        11,
        111,
        43
    ], [
        11,
        112,
        46
    ], [
        11,
        113,
        66
    ], [
        11,
        114,
        68
    ], [
        11,
        115,
        29
    ], [
        11,
        116,
        110
    ], [
        11,
        117,
        35
    ], [
        11,
        118,
        42
    ], [
        11,
        119,
        61
    ], [
        11,
        120,
        69
    ], [
        11,
        121,
        41
    ], [
        11,
        122,
        18
    ], [
        11,
        123,
        73
    ], [
        12,
        1,
        22
    ], [
        12,
        2,
        31
    ], [
        12,
        3,
        64
    ], [
        12,
        4,
        63
    ], [
        12,
        5,
        63
    ], [
        12,
        6,
        106
    ], [
        12,
        7,
        30
    ], [
        12,
        8,
        57
    ], [
        12,
        9,
        59
    ], [
        12,
        10,
        68
    ], [
        12,
        11,
        43
    ], [
        12,
        12,
        34
    ], [
        12,
        13,
        54
    ], [
        12,
        14,
        38
    ], [
        12,
        15,
        76
    ], [
        12,
        16,
        20
    ], [
        12,
        17,
        80
    ], [
        12,
        18,
        73
    ], [
        12,
        19,
        77
    ], [
        12,
        20,
        42
    ], [
        12,
        21,
        138
    ], [
        12,
        22,
        43
    ], [
        12,
        23,
        91
    ], [
        12,
        24,
        76
    ], [
        12,
        25,
        89
    ], [
        12,
        26,
        68
    ], [
        12,
        27,
        36
    ], [
        12,
        28,
        43
    ], [
        12,
        29,
        42
    ], [
        12,
        30,
        73
    ], [
        12,
        31,
        131
    ], [
        12,
        32,
        84
    ], [
        12,
        33,
        68
    ], [
        12,
        34,
        41
    ], [
        12,
        35,
        38
    ], [
        12,
        36,
        115
    ], [
        12,
        37,
        112
    ], [
        12,
        38,
        104
    ], [
        12,
        39,
        46
    ], [
        12,
        40,
        127
    ], [
        12,
        41,
        86
    ], [
        12,
        42,
        70
    ], [
        12,
        43,
        105
    ], [
        12,
        44,
        41
    ], [
        12,
        45,
        50
    ], [
        12,
        46,
        96
    ], [
        12,
        47,
        57
    ], [
        12,
        48,
        53
    ], [
        12,
        49,
        39
    ], [
        12,
        50,
        92
    ], [
        12,
        51,
        110
    ], [
        12,
        52,
        47
    ], [
        12,
        53,
        54
    ], [
        12,
        54,
        61
    ], [
        12,
        55,
        33
    ], [
        12,
        56,
        72
    ], [
        12,
        57,
        35
    ], [
        12,
        58,
        39
    ], [
        12,
        59,
        72
    ], [
        12,
        60,
        35
    ], [
        12,
        61,
        29
    ], [
        12,
        62,
        74
    ], [
        12,
        63,
        71
    ], [
        12,
        64,
        66
    ], [
        12,
        65,
        114
    ], [
        12,
        66,
        88
    ], [
        12,
        67,
        111
    ], [
        12,
        68,
        110
    ], [
        12,
        69,
        62
    ], [
        12,
        70,
        65
    ], [
        12,
        71,
        27
    ], [
        12,
        72,
        44
    ], [
        12,
        73,
        48
    ], [
        12,
        74,
        25
    ], [
        12,
        75,
        45
    ], [
        12,
        76,
        123
    ], [
        12,
        77,
        84
    ], [
        12,
        78,
        63
    ], [
        12,
        79,
        50
    ], [
        12,
        80,
        139
    ], [
        12,
        81,
        72
    ], [
        12,
        82,
        53
    ], [
        12,
        83,
        70
    ], [
        12,
        84,
        51
    ], [
        12,
        85,
        49
    ], [
        12,
        86,
        47
    ], [
        12,
        87,
        81
    ], [
        12,
        88,
        101
    ], [
        12,
        89,
        39
    ], [
        12,
        90,
        84
    ], [
        12,
        91,
        39
    ], [
        12,
        92,
        46
    ], [
        12,
        93,
        56
    ], [
        12,
        94,
        47
    ], [
        12,
        95,
        27
    ], [
        12,
        96,
        72
    ], [
        12,
        97,
        39
    ], [
        12,
        98,
        35
    ], [
        12,
        99,
        55
    ], [
        12,
        100,
        169
    ], [
        12,
        101,
        105
    ], [
        12,
        102,
        57
    ], [
        12,
        103,
        26
    ], [
        12,
        104,
        36
    ], [
        12,
        105,
        49
    ], [
        12,
        106,
        30
    ], [
        12,
        107,
        59
    ], [
        12,
        108,
        67
    ], [
        12,
        109,
        123
    ], [
        12,
        110,
        79
    ], [
        12,
        111,
        94
    ], [
        13,
        1,
        60
    ], [
        13,
        2,
        115
    ], [
        13,
        3,
        101
    ], [
        13,
        4,
        111
    ], [
        13,
        5,
        112
    ], [
        13,
        6,
        90
    ], [
        13,
        7,
        56
    ], [
        13,
        8,
        58
    ], [
        13,
        9,
        30
    ], [
        13,
        10,
        54
    ], [
        13,
        11,
        121
    ], [
        13,
        12,
        42
    ], [
        13,
        13,
        86
    ], [
        13,
        14,
        107
    ], [
        13,
        15,
        55
    ], [
        13,
        16,
        188
    ], [
        13,
        17,
        182
    ], [
        13,
        18,
        118
    ], [
        13,
        19,
        58
    ], [
        13,
        20,
        34
    ], [
        13,
        21,
        54
    ], [
        13,
        22,
        101
    ], [
        13,
        23,
        72
    ], [
        13,
        24,
        30
    ], [
        13,
        25,
        94
    ], [
        13,
        26,
        74
    ], [
        13,
        27,
        67
    ], [
        13,
        28,
        52
    ], [
        13,
        29,
        38
    ], [
        13,
        30,
        106
    ], [
        13,
        31,
        193
    ], [
        13,
        32,
        55
    ], [
        13,
        33,
        139
    ], [
        13,
        34,
        53
    ], [
        13,
        35,
        89
    ], [
        13,
        36,
        101
    ], [
        13,
        37,
        74
    ], [
        13,
        38,
        82
    ], [
        13,
        39,
        32
    ], [
        13,
        40,
        58
    ], [
        13,
        41,
        68
    ], [
        13,
        42,
        71
    ], [
        13,
        43,
        64
    ], [
        14,
        1,
        72
    ], [
        14,
        2,
        54
    ], [
        14,
        3,
        76
    ], [
        14,
        4,
        75
    ], [
        14,
        5,
        86
    ], [
        14,
        6,
        117
    ], [
        14,
        7,
        48
    ], [
        14,
        8,
        50
    ], [
        14,
        9,
        157
    ], [
        14,
        10,
        143
    ], [
        14,
        11,
        112
    ], [
        14,
        12,
        78
    ], [
        14,
        13,
        78
    ], [
        14,
        14,
        43
    ], [
        14,
        15,
        23
    ], [
        14,
        16,
        25
    ], [
        14,
        17,
        62
    ], [
        14,
        18,
        90
    ], [
        14,
        19,
        56
    ], [
        14,
        20,
        18
    ], [
        14,
        21,
        138
    ], [
        14,
        22,
        187
    ], [
        14,
        23,
        83
    ], [
        14,
        24,
        59
    ], [
        14,
        25,
        55
    ], [
        14,
        26,
        49
    ], [
        14,
        27,
        84
    ], [
        14,
        28,
        50
    ], [
        14,
        29,
        21
    ], [
        14,
        30,
        53
    ], [
        14,
        31,
        86
    ], [
        14,
        32,
        107
    ], [
        14,
        33,
        43
    ], [
        14,
        34,
        61
    ], [
        14,
        35,
        55
    ], [
        14,
        36,
        58
    ], [
        14,
        37,
        114
    ], [
        14,
        38,
        61
    ], [
        14,
        39,
        54
    ], [
        14,
        40,
        39
    ], [
        14,
        41,
        39
    ], [
        14,
        42,
        60
    ], [
        14,
        43,
        45
    ], [
        14,
        44,
        109
    ], [
        14,
        45,
        64
    ], [
        14,
        46,
        51
    ], [
        14,
        47,
        42
    ], [
        14,
        48,
        50
    ], [
        14,
        49,
        32
    ], [
        14,
        50,
        31
    ], [
        14,
        51,
        36
    ], [
        14,
        52,
        60
    ], [
        15,
        1,
        25
    ], [
        15,
        2,
        30
    ], [
        15,
        3,
        39
    ], [
        15,
        4,
        31
    ], [
        15,
        5,
        27
    ], [
        15,
        6,
        37
    ], [
        15,
        7,
        34
    ], [
        15,
        8,
        39
    ], [
        15,
        9,
        29
    ], [
        15,
        10,
        28
    ], [
        15,
        11,
        33
    ], [
        15,
        12,
        23
    ], [
        15,
        13,
        26
    ], [
        15,
        14,
        39
    ], [
        15,
        15,
        36
    ], [
        15,
        16,
        37
    ], [
        15,
        17,
        21
    ], [
        15,
        18,
        29
    ], [
        15,
        19,
        52
    ], [
        15,
        20,
        34
    ], [
        15,
        21,
        42
    ], [
        15,
        22,
        63
    ], [
        15,
        23,
        29
    ], [
        15,
        24,
        42
    ], [
        15,
        25,
        25
    ], [
        15,
        26,
        33
    ], [
        15,
        27,
        28
    ], [
        15,
        28,
        45
    ], [
        15,
        29,
        36
    ], [
        15,
        30,
        22
    ], [
        15,
        31,
        27
    ], [
        15,
        32,
        31
    ], [
        15,
        33,
        39
    ], [
        15,
        34,
        20
    ], [
        15,
        35,
        24
    ], [
        15,
        36,
        24
    ], [
        15,
        37,
        17
    ], [
        15,
        38,
        18
    ], [
        15,
        39,
        46
    ], [
        15,
        40,
        20
    ], [
        15,
        41,
        19
    ], [
        15,
        42,
        41
    ], [
        15,
        43,
        20
    ], [
        15,
        44,
        30
    ], [
        15,
        45,
        20
    ], [
        15,
        46,
        17
    ], [
        15,
        47,
        40
    ], [
        15,
        48,
        30
    ], [
        15,
        49,
        26
    ], [
        15,
        50,
        22
    ], [
        15,
        51,
        18
    ], [
        15,
        52,
        37
    ], [
        15,
        53,
        28
    ], [
        15,
        54,
        35
    ], [
        15,
        55,
        32
    ], [
        15,
        56,
        29
    ], [
        15,
        57,
        23
    ], [
        15,
        58,
        26
    ], [
        15,
        59,
        24
    ], [
        15,
        60,
        29
    ], [
        15,
        61,
        20
    ], [
        15,
        62,
        16
    ], [
        15,
        63,
        29
    ], [
        15,
        64,
        23
    ], [
        15,
        65,
        62
    ], [
        15,
        66,
        40
    ], [
        15,
        67,
        22
    ], [
        15,
        68,
        23
    ], [
        15,
        69,
        18
    ], [
        15,
        70,
        23
    ], [
        15,
        71,
        25
    ], [
        15,
        72,
        24
    ], [
        15,
        73,
        19
    ], [
        15,
        74,
        41
    ], [
        15,
        75,
        21
    ], [
        15,
        76,
        15
    ], [
        15,
        77,
        19
    ], [
        15,
        78,
        24
    ], [
        15,
        79,
        28
    ], [
        15,
        80,
        25
    ], [
        15,
        81,
        30
    ], [
        15,
        82,
        30
    ], [
        15,
        83,
        19
    ], [
        15,
        84,
        24
    ], [
        15,
        85,
        69
    ], [
        15,
        86,
        19
    ], [
        15,
        87,
        36
    ], [
        15,
        88,
        63
    ], [
        15,
        89,
        21
    ], [
        15,
        90,
        21
    ], [
        15,
        91,
        20
    ], [
        15,
        92,
        19
    ], [
        15,
        93,
        14
    ], [
        15,
        94,
        27
    ], [
        15,
        95,
        19
    ], [
        15,
        96,
        34
    ], [
        15,
        97,
        28
    ], [
        15,
        98,
        24
    ], [
        15,
        99,
        22
    ], [
        16,
        1,
        42
    ], [
        16,
        2,
        68
    ], [
        16,
        3,
        36
    ], [
        16,
        4,
        30
    ], [
        16,
        5,
        40
    ], [
        16,
        6,
        31
    ], [
        16,
        7,
        59
    ], [
        16,
        8,
        48
    ], [
        16,
        9,
        44
    ], [
        16,
        10,
        47
    ], [
        16,
        11,
        71
    ], [
        16,
        12,
        71
    ], [
        16,
        13,
        49
    ], [
        16,
        14,
        100
    ], [
        16,
        15,
        49
    ], [
        16,
        16,
        22
    ], [
        16,
        17,
        27
    ], [
        16,
        18,
        39
    ], [
        16,
        19,
        25
    ], [
        16,
        20,
        41
    ], [
        16,
        21,
        32
    ], [
        16,
        22,
        55
    ], [
        16,
        23,
        49
    ], [
        16,
        24,
        40
    ], [
        16,
        25,
        69
    ], [
        16,
        26,
        86
    ], [
        16,
        27,
        98
    ], [
        16,
        28,
        82
    ], [
        16,
        29,
        44
    ], [
        16,
        30,
        90
    ], [
        16,
        31,
        67
    ], [
        16,
        32,
        64
    ], [
        16,
        33,
        91
    ], [
        16,
        34,
        43
    ], [
        16,
        35,
        118
    ], [
        16,
        36,
        122
    ], [
        16,
        37,
        46
    ], [
        16,
        38,
        73
    ], [
        16,
        39,
        53
    ], [
        16,
        40,
        37
    ], [
        16,
        41,
        78
    ], [
        16,
        42,
        25
    ], [
        16,
        43,
        61
    ], [
        16,
        44,
        63
    ], [
        16,
        45,
        67
    ], [
        16,
        46,
        28
    ], [
        16,
        47,
        31
    ], [
        16,
        48,
        67
    ], [
        16,
        49,
        58
    ], [
        16,
        50,
        32
    ], [
        16,
        51,
        51
    ], [
        16,
        52,
        48
    ], [
        16,
        53,
        43
    ], [
        16,
        54,
        38
    ], [
        16,
        55,
        34
    ], [
        16,
        56,
        57
    ], [
        16,
        57,
        34
    ], [
        16,
        58,
        37
    ], [
        16,
        59,
        65
    ], [
        16,
        60,
        58
    ], [
        16,
        61,
        96
    ], [
        16,
        62,
        71
    ], [
        16,
        63,
        72
    ], [
        16,
        64,
        63
    ], [
        16,
        65,
        61
    ], [
        16,
        66,
        69
    ], [
        16,
        67,
        65
    ], [
        16,
        68,
        54
    ], [
        16,
        69,
        93
    ], [
        16,
        70,
        74
    ], [
        16,
        71,
        92
    ], [
        16,
        72,
        98
    ], [
        16,
        73,
        62
    ], [
        16,
        74,
        42
    ], [
        16,
        75,
        103
    ], [
        16,
        76,
        109
    ], [
        16,
        77,
        71
    ], [
        16,
        78,
        75
    ], [
        16,
        79,
        68
    ], [
        16,
        80,
        119
    ], [
        16,
        81,
        110
    ], [
        16,
        82,
        29
    ], [
        16,
        83,
        39
    ], [
        16,
        84,
        51
    ], [
        16,
        85,
        45
    ], [
        16,
        86,
        91
    ], [
        16,
        87,
        43
    ], [
        16,
        88,
        59
    ], [
        16,
        89,
        103
    ], [
        16,
        90,
        81
    ], [
        16,
        91,
        89
    ], [
        16,
        92,
        131
    ], [
        16,
        93,
        68
    ], [
        16,
        94,
        83
    ], [
        16,
        95,
        57
    ], [
        16,
        96,
        64
    ], [
        16,
        97,
        76
    ], [
        16,
        98,
        40
    ], [
        16,
        99,
        41
    ], [
        16,
        100,
        41
    ], [
        16,
        101,
        67
    ], [
        16,
        102,
        56
    ], [
        16,
        103,
        69
    ], [
        16,
        104,
        48
    ], [
        16,
        105,
        52
    ], [
        16,
        106,
        94
    ], [
        16,
        107,
        62
    ], [
        16,
        108,
        56
    ], [
        16,
        109,
        27
    ], [
        16,
        110,
        65
    ], [
        16,
        111,
        51
    ], [
        16,
        112,
        107
    ], [
        16,
        113,
        44
    ], [
        16,
        114,
        57
    ], [
        16,
        115,
        84
    ], [
        16,
        116,
        94
    ], [
        16,
        117,
        20
    ], [
        16,
        118,
        66
    ], [
        16,
        119,
        71
    ], [
        16,
        120,
        43
    ], [
        16,
        121,
        35
    ], [
        16,
        122,
        42
    ], [
        16,
        123,
        49
    ], [
        16,
        124,
        75
    ], [
        16,
        125,
        91
    ], [
        16,
        126,
        53
    ], [
        16,
        127,
        51
    ], [
        16,
        128,
        32
    ], [
        17,
        1,
        95
    ], [
        17,
        2,
        57
    ], [
        17,
        3,
        31
    ], [
        17,
        4,
        60
    ], [
        17,
        5,
        76
    ], [
        17,
        6,
        57
    ], [
        17,
        7,
        110
    ], [
        17,
        8,
        49
    ], [
        17,
        9,
        71
    ], [
        17,
        10,
        42
    ], [
        17,
        11,
        43
    ], [
        17,
        12,
        116
    ], [
        17,
        13,
        59
    ], [
        17,
        14,
        31
    ], [
        17,
        15,
        82
    ], [
        17,
        16,
        68
    ], [
        17,
        17,
        53
    ], [
        17,
        18,
        71
    ], [
        17,
        19,
        52
    ], [
        17,
        20,
        45
    ], [
        17,
        21,
        50
    ], [
        17,
        22,
        36
    ], [
        17,
        23,
        108
    ], [
        17,
        24,
        51
    ], [
        17,
        25,
        53
    ], [
        17,
        26,
        45
    ], [
        17,
        27,
        48
    ], [
        17,
        28,
        50
    ], [
        17,
        29,
        55
    ], [
        17,
        30,
        48
    ], [
        17,
        31,
        59
    ], [
        17,
        32,
        34
    ], [
        17,
        33,
        90
    ], [
        17,
        34,
        71
    ], [
        17,
        35,
        56
    ], [
        17,
        36,
        57
    ], [
        17,
        37,
        48
    ], [
        17,
        38,
        24
    ], [
        17,
        39,
        67
    ], [
        17,
        40,
        59
    ], [
        17,
        41,
        44
    ], [
        17,
        42,
        48
    ], [
        17,
        43,
        30
    ], [
        17,
        44,
        87
    ], [
        17,
        45,
        58
    ], [
        17,
        46,
        82
    ], [
        17,
        47,
        76
    ], [
        17,
        48,
        42
    ], [
        17,
        49,
        45
    ], [
        17,
        50,
        19
    ], [
        17,
        51,
        100
    ], [
        17,
        52,
        44
    ], [
        17,
        53,
        71
    ], [
        17,
        54,
        55
    ], [
        17,
        55,
        68
    ], [
        17,
        56,
        52
    ], [
        17,
        57,
        84
    ], [
        17,
        58,
        74
    ], [
        17,
        59,
        92
    ], [
        17,
        60,
        113
    ], [
        17,
        61,
        58
    ], [
        17,
        62,
        64
    ], [
        17,
        63,
        41
    ], [
        17,
        64,
        96
    ], [
        17,
        65,
        35
    ], [
        17,
        66,
        54
    ], [
        17,
        67,
        73
    ], [
        17,
        68,
        57
    ], [
        17,
        69,
        87
    ], [
        17,
        70,
        81
    ], [
        17,
        71,
        70
    ], [
        17,
        72,
        39
    ], [
        17,
        73,
        63
    ], [
        17,
        74,
        37
    ], [
        17,
        75,
        48
    ], [
        17,
        76,
        60
    ], [
        17,
        77,
        42
    ], [
        17,
        78,
        60
    ], [
        17,
        79,
        46
    ], [
        17,
        80,
        56
    ], [
        17,
        81,
        36
    ], [
        17,
        82,
        57
    ], [
        17,
        83,
        53
    ], [
        17,
        84,
        40
    ], [
        17,
        85,
        54
    ], [
        17,
        86,
        50
    ], [
        17,
        87,
        30
    ], [
        17,
        88,
        76
    ], [
        17,
        89,
        53
    ], [
        17,
        90,
        37
    ], [
        17,
        91,
        45
    ], [
        17,
        92,
        53
    ], [
        17,
        93,
        92
    ], [
        17,
        94,
        58
    ], [
        17,
        95,
        60
    ], [
        17,
        96,
        47
    ], [
        17,
        97,
        114
    ], [
        17,
        98,
        71
    ], [
        17,
        99,
        92
    ], [
        17,
        100,
        63
    ], [
        17,
        101,
        78
    ], [
        17,
        102,
        67
    ], [
        17,
        103,
        40
    ], [
        17,
        104,
        61
    ], [
        17,
        105,
        46
    ], [
        17,
        106,
        45
    ], [
        17,
        107,
        70
    ], [
        17,
        108,
        35
    ], [
        17,
        109,
        30
    ], [
        17,
        110,
        90
    ], [
        17,
        111,
        72
    ], [
        18,
        1,
        42
    ], [
        18,
        2,
        69
    ], [
        18,
        3,
        13
    ], [
        18,
        4,
        27
    ], [
        18,
        5,
        58
    ], [
        18,
        6,
        46
    ], [
        18,
        7,
        44
    ], [
        18,
        8,
        27
    ], [
        18,
        9,
        42
    ], [
        18,
        10,
        61
    ], [
        18,
        11,
        30
    ], [
        18,
        12,
        39
    ], [
        18,
        13,
        48
    ], [
        18,
        14,
        78
    ], [
        18,
        15,
        75
    ], [
        18,
        16,
        80
    ], [
        18,
        17,
        127
    ], [
        18,
        18,
        109
    ], [
        18,
        19,
        173
    ], [
        18,
        20,
        56
    ], [
        18,
        21,
        142
    ], [
        18,
        22,
        151
    ], [
        18,
        23,
        25
    ], [
        18,
        24,
        58
    ], [
        18,
        25,
        37
    ], [
        18,
        26,
        81
    ], [
        18,
        27,
        54
    ], [
        18,
        28,
        129
    ], [
        18,
        29,
        129
    ], [
        18,
        30,
        48
    ], [
        18,
        31,
        123
    ], [
        18,
        32,
        70
    ], [
        18,
        33,
        50
    ], [
        18,
        34,
        50
    ], [
        18,
        35,
        41
    ], [
        18,
        36,
        50
    ], [
        18,
        37,
        57
    ], [
        18,
        38,
        28
    ], [
        18,
        39,
        63
    ], [
        18,
        40,
        62
    ], [
        18,
        41,
        30
    ], [
        18,
        42,
        79
    ], [
        18,
        43,
        39
    ], [
        18,
        44,
        37
    ], [
        18,
        45,
        102
    ], [
        18,
        46,
        67
    ], [
        18,
        47,
        52
    ], [
        18,
        48,
        63
    ], [
        18,
        49,
        122
    ], [
        18,
        50,
        111
    ], [
        18,
        51,
        59
    ], [
        18,
        52,
        65
    ], [
        18,
        53,
        51
    ], [
        18,
        54,
        54
    ], [
        18,
        55,
        83
    ], [
        18,
        56,
        92
    ], [
        18,
        57,
        118
    ], [
        18,
        58,
        75
    ], [
        18,
        59,
        43
    ], [
        18,
        60,
        49
    ], [
        18,
        61,
        49
    ], [
        18,
        62,
        49
    ], [
        18,
        63,
        85
    ], [
        18,
        64,
        34
    ], [
        18,
        65,
        51
    ], [
        18,
        66,
        37
    ], [
        18,
        67,
        21
    ], [
        18,
        68,
        24
    ], [
        18,
        69,
        36
    ], [
        18,
        70,
        43
    ], [
        18,
        71,
        65
    ], [
        18,
        72,
        27
    ], [
        18,
        73,
        38
    ], [
        18,
        74,
        64
    ], [
        18,
        75,
        29
    ], [
        18,
        76,
        46
    ], [
        18,
        77,
        103
    ], [
        18,
        78,
        48
    ], [
        18,
        79,
        76
    ], [
        18,
        80,
        51
    ], [
        18,
        81,
        40
    ], [
        18,
        82,
        148
    ], [
        18,
        83,
        38
    ], [
        18,
        84,
        34
    ], [
        18,
        85,
        9
    ], [
        18,
        86,
        91
    ], [
        18,
        87,
        46
    ], [
        18,
        88,
        50
    ], [
        18,
        89,
        10
    ], [
        18,
        90,
        53
    ], [
        18,
        91,
        23
    ], [
        18,
        92,
        10
    ], [
        18,
        93,
        51
    ], [
        18,
        94,
        78
    ], [
        18,
        95,
        49
    ], [
        18,
        96,
        77
    ], [
        18,
        97,
        35
    ], [
        18,
        98,
        49
    ], [
        18,
        99,
        48
    ], [
        18,
        100,
        27
    ], [
        18,
        101,
        47
    ], [
        18,
        102,
        65
    ], [
        18,
        103,
        25
    ], [
        18,
        104,
        49
    ], [
        18,
        105,
        66
    ], [
        18,
        106,
        42
    ], [
        18,
        107,
        48
    ], [
        18,
        108,
        25
    ], [
        18,
        109,
        68
    ], [
        18,
        110,
        92
    ], [
        19,
        1,
        5
    ], [
        19,
        2,
        19
    ], [
        19,
        3,
        17
    ], [
        19,
        4,
        52
    ], [
        19,
        5,
        52
    ], [
        19,
        6,
        30
    ], [
        19,
        7,
        45
    ], [
        19,
        8,
        52
    ], [
        19,
        9,
        43
    ], [
        19,
        10,
        45
    ], [
        19,
        11,
        46
    ], [
        19,
        12,
        34
    ], [
        19,
        13,
        25
    ], [
        19,
        14,
        26
    ], [
        19,
        15,
        34
    ], [
        19,
        16,
        42
    ], [
        19,
        17,
        51
    ], [
        19,
        18,
        30
    ], [
        19,
        19,
        32
    ], [
        19,
        20,
        38
    ], [
        19,
        21,
        57
    ], [
        19,
        22,
        24
    ], [
        19,
        23,
        57
    ], [
        19,
        24,
        38
    ], [
        19,
        25,
        35
    ], [
        19,
        26,
        76
    ], [
        19,
        27,
        41
    ], [
        19,
        28,
        40
    ], [
        19,
        29,
        38
    ], [
        19,
        30,
        34
    ], [
        19,
        31,
        49
    ], [
        19,
        32,
        29
    ], [
        19,
        33,
        36
    ], [
        19,
        34,
        34
    ], [
        19,
        35,
        53
    ], [
        19,
        36,
        35
    ], [
        19,
        37,
        47
    ], [
        19,
        38,
        48
    ], [
        19,
        39,
        46
    ], [
        19,
        40,
        34
    ], [
        19,
        41,
        35
    ], [
        19,
        42,
        50
    ], [
        19,
        43,
        50
    ], [
        19,
        44,
        40
    ], [
        19,
        45,
        46
    ], [
        19,
        46,
        54
    ], [
        19,
        47,
        35
    ], [
        19,
        48,
        55
    ], [
        19,
        49,
        60
    ], [
        19,
        50,
        37
    ], [
        19,
        51,
        41
    ], [
        19,
        52,
        36
    ], [
        19,
        53,
        29
    ], [
        19,
        54,
        48
    ], [
        19,
        55,
        41
    ], [
        19,
        56,
        33
    ], [
        19,
        57,
        16
    ], [
        19,
        58,
        129
    ], [
        19,
        59,
        52
    ], [
        19,
        60,
        51
    ], [
        19,
        61,
        46
    ], [
        19,
        62,
        46
    ], [
        19,
        63,
        33
    ], [
        19,
        64,
        61
    ], [
        19,
        65,
        56
    ], [
        19,
        66,
        31
    ], [
        19,
        67,
        38
    ], [
        19,
        68,
        43
    ], [
        19,
        69,
        36
    ], [
        19,
        70,
        29
    ], [
        19,
        71,
        34
    ], [
        19,
        72,
        36
    ], [
        19,
        73,
        74
    ], [
        19,
        74,
        35
    ], [
        19,
        75,
        98
    ], [
        19,
        76,
        62
    ], [
        19,
        77,
        39
    ], [
        19,
        78,
        28
    ], [
        19,
        79,
        31
    ], [
        19,
        80,
        22
    ], [
        19,
        81,
        33
    ], [
        19,
        82,
        33
    ], [
        19,
        83,
        41
    ], [
        19,
        84,
        25
    ], [
        19,
        85,
        27
    ], [
        19,
        86,
        24
    ], [
        19,
        87,
        37
    ], [
        19,
        88,
        20
    ], [
        19,
        89,
        14
    ], [
        19,
        90,
        44
    ], [
        19,
        91,
        16
    ], [
        19,
        92,
        24
    ], [
        19,
        93,
        38
    ], [
        19,
        94,
        17
    ], [
        19,
        95,
        23
    ], [
        19,
        96,
        43
    ], [
        19,
        97,
        45
    ], [
        19,
        98,
        46
    ], [
        20,
        1,
        2
    ], [
        20,
        2,
        23
    ], [
        20,
        3,
        15
    ], [
        20,
        4,
        31
    ], [
        20,
        5,
        19
    ], [
        20,
        6,
        44
    ], [
        20,
        7,
        30
    ], [
        20,
        8,
        29
    ], [
        20,
        9,
        15
    ], [
        20,
        10,
        68
    ], [
        20,
        11,
        19
    ], [
        20,
        12,
        37
    ], [
        20,
        13,
        23
    ], [
        20,
        14,
        44
    ], [
        20,
        15,
        39
    ], [
        20,
        16,
        37
    ], [
        20,
        17,
        18
    ], [
        20,
        18,
        48
    ], [
        20,
        19,
        14
    ], [
        20,
        20,
        20
    ], [
        20,
        21,
        32
    ], [
        20,
        22,
        40
    ], [
        20,
        23,
        19
    ], [
        20,
        24,
        18
    ], [
        20,
        25,
        15
    ], [
        20,
        26,
        10
    ], [
        20,
        27,
        16
    ], [
        20,
        28,
        10
    ], [
        20,
        29,
        18
    ], [
        20,
        30,
        8
    ], [
        20,
        31,
        10
    ], [
        20,
        32,
        12
    ], [
        20,
        33,
        12
    ], [
        20,
        34,
        11
    ], [
        20,
        35,
        14
    ], [
        20,
        36,
        20
    ], [
        20,
        37,
        19
    ], [
        20,
        38,
        20
    ], [
        20,
        39,
        93
    ], [
        20,
        40,
        130
    ], [
        20,
        41,
        13
    ], [
        20,
        42,
        31
    ], [
        20,
        43,
        19
    ], [
        20,
        44,
        30
    ], [
        20,
        45,
        35
    ], [
        20,
        46,
        27
    ], [
        20,
        47,
        87
    ], [
        20,
        48,
        35
    ], [
        20,
        49,
        17
    ], [
        20,
        50,
        29
    ], [
        20,
        51,
        21
    ], [
        20,
        52,
        35
    ], [
        20,
        53,
        74
    ], [
        20,
        54,
        39
    ], [
        20,
        55,
        41
    ], [
        20,
        56,
        28
    ], [
        20,
        57,
        34
    ], [
        20,
        58,
        60
    ], [
        20,
        59,
        33
    ], [
        20,
        60,
        23
    ], [
        20,
        61,
        59
    ], [
        20,
        62,
        30
    ], [
        20,
        63,
        67
    ], [
        20,
        64,
        42
    ], [
        20,
        65,
        39
    ], [
        20,
        66,
        49
    ], [
        20,
        67,
        19
    ], [
        20,
        68,
        21
    ], [
        20,
        69,
        59
    ], [
        20,
        70,
        37
    ], [
        20,
        71,
        115
    ], [
        20,
        72,
        76
    ], [
        20,
        73,
        61
    ], [
        20,
        74,
        42
    ], [
        20,
        75,
        46
    ], [
        20,
        76,
        49
    ], [
        20,
        77,
        69
    ], [
        20,
        78,
        37
    ], [
        20,
        79,
        19
    ], [
        20,
        80,
        75
    ], [
        20,
        81,
        65
    ], [
        20,
        82,
        35
    ], [
        20,
        83,
        20
    ], [
        20,
        84,
        33
    ], [
        20,
        85,
        36
    ], [
        20,
        86,
        105
    ], [
        20,
        87,
        75
    ], [
        20,
        88,
        48
    ], [
        20,
        89,
        44
    ], [
        20,
        90,
        68
    ], [
        20,
        91,
        37
    ], [
        20,
        92,
        28
    ], [
        20,
        93,
        18
    ], [
        20,
        94,
        71
    ], [
        20,
        95,
        17
    ], [
        20,
        96,
        62
    ], [
        20,
        97,
        104
    ], [
        20,
        98,
        39
    ], [
        20,
        99,
        44
    ], [
        20,
        100,
        31
    ], [
        20,
        101,
        30
    ], [
        20,
        102,
        36
    ], [
        20,
        103,
        27
    ], [
        20,
        104,
        47
    ], [
        20,
        105,
        32
    ], [
        20,
        106,
        15
    ], [
        20,
        107,
        20
    ], [
        20,
        108,
        56
    ], [
        20,
        109,
        44
    ], [
        20,
        110,
        38
    ], [
        20,
        111,
        35
    ], [
        20,
        112,
        42
    ], [
        20,
        113,
        62
    ], [
        20,
        114,
        65
    ], [
        20,
        115,
        36
    ], [
        20,
        116,
        42
    ], [
        20,
        117,
        49
    ], [
        20,
        118,
        22
    ], [
        20,
        119,
        21
    ], [
        20,
        120,
        52
    ], [
        20,
        121,
        65
    ], [
        20,
        122,
        23
    ], [
        20,
        123,
        70
    ], [
        20,
        124,
        47
    ], [
        20,
        125,
        28
    ], [
        20,
        126,
        38
    ], [
        20,
        127,
        50
    ], [
        20,
        128,
        67
    ], [
        20,
        129,
        35
    ], [
        20,
        130,
        85
    ], [
        20,
        131,
        75
    ], [
        20,
        132,
        59
    ], [
        20,
        133,
        53
    ], [
        20,
        134,
        79
    ], [
        20,
        135,
        50
    ], [
        21,
        1,
        31
    ], [
        21,
        2,
        42
    ], [
        21,
        3,
        72
    ], [
        21,
        4,
        44
    ], [
        21,
        5,
        58
    ], [
        21,
        6,
        35
    ], [
        21,
        7,
        59
    ], [
        21,
        8,
        42
    ], [
        21,
        9,
        45
    ], [
        21,
        10,
        37
    ], [
        21,
        11,
        44
    ], [
        21,
        12,
        29
    ], [
        21,
        13,
        48
    ], [
        21,
        14,
        24
    ], [
        21,
        15,
        37
    ], [
        21,
        16,
        35
    ], [
        21,
        17,
        42
    ], [
        21,
        18,
        53
    ], [
        21,
        19,
        57
    ], [
        21,
        20,
        26
    ], [
        21,
        21,
        27
    ], [
        21,
        22,
        52
    ], [
        21,
        23,
        22
    ], [
        21,
        24,
        82
    ], [
        21,
        25,
        53
    ], [
        21,
        26,
        38
    ], [
        21,
        27,
        29
    ], [
        21,
        28,
        59
    ], [
        21,
        29,
        51
    ], [
        21,
        30,
        80
    ], [
        21,
        31,
        57
    ], [
        21,
        32,
        39
    ], [
        21,
        33,
        47
    ], [
        21,
        34,
        40
    ], [
        21,
        35,
        49
    ], [
        21,
        36,
        72
    ], [
        21,
        37,
        37
    ], [
        21,
        38,
        30
    ], [
        21,
        39,
        61
    ], [
        21,
        40,
        45
    ], [
        21,
        41,
        56
    ], [
        21,
        42,
        50
    ], [
        21,
        43,
        55
    ], [
        21,
        44,
        82
    ], [
        21,
        45,
        46
    ], [
        21,
        46,
        47
    ], [
        21,
        47,
        83
    ], [
        21,
        48,
        43
    ], [
        21,
        49,
        37
    ], [
        21,
        50,
        33
    ], [
        21,
        51,
        37
    ], [
        21,
        52,
        45
    ], [
        21,
        53,
        25
    ], [
        21,
        54,
        31
    ], [
        21,
        55,
        31
    ], [
        21,
        56,
        55
    ], [
        21,
        57,
        35
    ], [
        21,
        58,
        37
    ], [
        21,
        59,
        34
    ], [
        21,
        60,
        32
    ], [
        21,
        61,
        35
    ], [
        21,
        62,
        32
    ], [
        21,
        63,
        39
    ], [
        21,
        64,
        37
    ], [
        21,
        65,
        36
    ], [
        21,
        66,
        42
    ], [
        21,
        67,
        34
    ], [
        21,
        68,
        35
    ], [
        21,
        69,
        33
    ], [
        21,
        70,
        29
    ], [
        21,
        71,
        42
    ], [
        21,
        72,
        39
    ], [
        21,
        73,
        83
    ], [
        21,
        74,
        75
    ], [
        21,
        75,
        29
    ], [
        21,
        76,
        51
    ], [
        21,
        77,
        61
    ], [
        21,
        78,
        61
    ], [
        21,
        79,
        72
    ], [
        21,
        80,
        45
    ], [
        21,
        81,
        65
    ], [
        21,
        82,
        51
    ], [
        21,
        83,
        41
    ], [
        21,
        84,
        69
    ], [
        21,
        85,
        34
    ], [
        21,
        86,
        31
    ], [
        21,
        87,
        83
    ], [
        21,
        88,
        40
    ], [
        21,
        89,
        43
    ], [
        21,
        90,
        92
    ], [
        21,
        91,
        57
    ], [
        21,
        92,
        33
    ], [
        21,
        93,
        30
    ], [
        21,
        94,
        49
    ], [
        21,
        95,
        32
    ], [
        21,
        96,
        37
    ], [
        21,
        97,
        75
    ], [
        21,
        98,
        42
    ], [
        21,
        99,
        35
    ], [
        21,
        100,
        26
    ], [
        21,
        101,
        38
    ], [
        21,
        102,
        38
    ], [
        21,
        103,
        57
    ], [
        21,
        104,
        66
    ], [
        21,
        105,
        52
    ], [
        21,
        106,
        23
    ], [
        21,
        107,
        25
    ], [
        21,
        108,
        42
    ], [
        21,
        109,
        50
    ], [
        21,
        110,
        32
    ], [
        21,
        111,
        29
    ], [
        21,
        112,
        43
    ], [
        22,
        1,
        40
    ], [
        22,
        2,
        86
    ], [
        22,
        3,
        44
    ], [
        22,
        4,
        44
    ], [
        22,
        5,
        262
    ], [
        22,
        6,
        46
    ], [
        22,
        7,
        43
    ], [
        22,
        8,
        45
    ], [
        22,
        9,
        61
    ], [
        22,
        10,
        35
    ], [
        22,
        11,
        101
    ], [
        22,
        12,
        48
    ], [
        22,
        13,
        41
    ], [
        22,
        14,
        72
    ], [
        22,
        15,
        85
    ], [
        22,
        16,
        38
    ], [
        22,
        17,
        102
    ], [
        22,
        18,
        144
    ], [
        22,
        19,
        69
    ], [
        22,
        20,
        23
    ], [
        22,
        21,
        15
    ], [
        22,
        22,
        52
    ], [
        22,
        23,
        98
    ], [
        22,
        24,
        38
    ], [
        22,
        25,
        108
    ], [
        22,
        26,
        76
    ], [
        22,
        27,
        51
    ], [
        22,
        28,
        94
    ], [
        22,
        29,
        46
    ], [
        22,
        30,
        100
    ], [
        22,
        31,
        81
    ], [
        22,
        32,
        36
    ], [
        22,
        33,
        43
    ], [
        22,
        34,
        89
    ], [
        22,
        35,
        76
    ], [
        22,
        36,
        128
    ], [
        22,
        37,
        89
    ], [
        22,
        38,
        44
    ], [
        22,
        39,
        45
    ], [
        22,
        40,
        148
    ], [
        22,
        41,
        85
    ], [
        22,
        42,
        36
    ], [
        22,
        43,
        18
    ], [
        22,
        44,
        51
    ], [
        22,
        45,
        61
    ], [
        22,
        46,
        97
    ], [
        22,
        47,
        60
    ], [
        22,
        48,
        45
    ], [
        22,
        49,
        31
    ], [
        22,
        50,
        41
    ], [
        22,
        51,
        41
    ], [
        22,
        52,
        106
    ], [
        22,
        53,
        74
    ], [
        22,
        54,
        89
    ], [
        22,
        55,
        64
    ], [
        22,
        56,
        59
    ], [
        22,
        57,
        41
    ], [
        22,
        58,
        77
    ], [
        22,
        59,
        35
    ], [
        22,
        60,
        56
    ], [
        22,
        61,
        60
    ], [
        22,
        62,
        60
    ], [
        22,
        63,
        55
    ], [
        22,
        64,
        45
    ], [
        22,
        65,
        101
    ], [
        22,
        66,
        43
    ], [
        22,
        67,
        67
    ], [
        22,
        68,
        29
    ], [
        22,
        69,
        41
    ], [
        22,
        70,
        60
    ], [
        22,
        71,
        63
    ], [
        22,
        72,
        136
    ], [
        22,
        73,
        122
    ], [
        22,
        74,
        31
    ], [
        22,
        75,
        45
    ], [
        22,
        76,
        41
    ], [
        22,
        77,
        63
    ], [
        22,
        78,
        199
    ], [
        23,
        1,
        14
    ], [
        23,
        2,
        21
    ], [
        23,
        3,
        21
    ], [
        23,
        4,
        20
    ], [
        23,
        5,
        21
    ], [
        23,
        6,
        42
    ], [
        23,
        7,
        30
    ], [
        23,
        8,
        28
    ], [
        23,
        9,
        25
    ], [
        23,
        10,
        15
    ], [
        23,
        11,
        29
    ], [
        23,
        12,
        28
    ], [
        23,
        13,
        22
    ], [
        23,
        14,
        104
    ], [
        23,
        15,
        18
    ], [
        23,
        16,
        22
    ], [
        23,
        17,
        41
    ], [
        23,
        18,
        56
    ], [
        23,
        19,
        56
    ], [
        23,
        20,
        40
    ], [
        23,
        21,
        66
    ], [
        23,
        22,
        21
    ], [
        23,
        23,
        63
    ], [
        23,
        24,
        104
    ], [
        23,
        25,
        30
    ], [
        23,
        26,
        19
    ], [
        23,
        27,
        138
    ], [
        23,
        28,
        62
    ], [
        23,
        29,
        37
    ], [
        23,
        30,
        25
    ], [
        23,
        31,
        24
    ], [
        23,
        32,
        55
    ], [
        23,
        33,
        111
    ], [
        23,
        34,
        32
    ], [
        23,
        35,
        42
    ], [
        23,
        36,
        19
    ], [
        23,
        37,
        42
    ], [
        23,
        38,
        41
    ], [
        23,
        39,
        19
    ], [
        23,
        40,
        22
    ], [
        23,
        41,
        48
    ], [
        23,
        42,
        25
    ], [
        23,
        43,
        27
    ], [
        23,
        44,
        85
    ], [
        23,
        45,
        39
    ], [
        23,
        46,
        37
    ], [
        23,
        47,
        38
    ], [
        23,
        48,
        24
    ], [
        23,
        49,
        30
    ], [
        23,
        50,
        48
    ], [
        23,
        51,
        52
    ], [
        23,
        52,
        33
    ], [
        23,
        53,
        39
    ], [
        23,
        54,
        19
    ], [
        23,
        55,
        28
    ], [
        23,
        56,
        27
    ], [
        23,
        57,
        25
    ], [
        23,
        58,
        23
    ], [
        23,
        59,
        21
    ], [
        23,
        60,
        45
    ], [
        23,
        61,
        33
    ], [
        23,
        62,
        49
    ], [
        23,
        63,
        47
    ], [
        23,
        64,
        36
    ], [
        23,
        65,
        28
    ], [
        23,
        66,
        41
    ], [
        23,
        67,
        21
    ], [
        23,
        68,
        42
    ], [
        23,
        69,
        27
    ], [
        23,
        70,
        42
    ], [
        23,
        71,
        75
    ], [
        23,
        72,
        37
    ], [
        23,
        73,
        24
    ], [
        23,
        74,
        38
    ], [
        23,
        75,
        45
    ], [
        23,
        76,
        44
    ], [
        23,
        77,
        44
    ], [
        23,
        78,
        48
    ], [
        23,
        79,
        30
    ], [
        23,
        80,
        47
    ], [
        23,
        81,
        22
    ], [
        23,
        82,
        40
    ], [
        23,
        83,
        47
    ], [
        23,
        84,
        29
    ], [
        23,
        85,
        22
    ], [
        23,
        86,
        33
    ], [
        23,
        87,
        21
    ], [
        23,
        88,
        48
    ], [
        23,
        89,
        22
    ], [
        23,
        90,
        26
    ], [
        23,
        91,
        80
    ], [
        23,
        92,
        32
    ], [
        23,
        93,
        20
    ], [
        23,
        94,
        26
    ], [
        23,
        95,
        27
    ], [
        23,
        96,
        36
    ], [
        23,
        97,
        26
    ], [
        23,
        98,
        17
    ], [
        23,
        99,
        30
    ], [
        23,
        100,
        65
    ], [
        23,
        101,
        43
    ], [
        23,
        102,
        30
    ], [
        23,
        103,
        47
    ], [
        23,
        104,
        28
    ], [
        23,
        105,
        34
    ], [
        23,
        106,
        37
    ], [
        23,
        107,
        31
    ], [
        23,
        108,
        22
    ], [
        23,
        109,
        61
    ], [
        23,
        110,
        43
    ], [
        23,
        111,
        36
    ], [
        23,
        112,
        24
    ], [
        23,
        113,
        34
    ], [
        23,
        114,
        34
    ], [
        23,
        115,
        40
    ], [
        23,
        116,
        42
    ], [
        23,
        117,
        63
    ], [
        23,
        118,
        29
    ], [
        24,
        1,
        51
    ], [
        24,
        2,
        122
    ], [
        24,
        3,
        73
    ], [
        24,
        4,
        94
    ], [
        24,
        5,
        43
    ], [
        24,
        6,
        81
    ], [
        24,
        7,
        37
    ], [
        24,
        8,
        50
    ], [
        24,
        9,
        37
    ], [
        24,
        10,
        38
    ], [
        24,
        11,
        102
    ], [
        24,
        12,
        59
    ], [
        24,
        13,
        65
    ], [
        24,
        14,
        63
    ], [
        24,
        15,
        70
    ], [
        24,
        16,
        56
    ], [
        24,
        17,
        38
    ], [
        24,
        18,
        31
    ], [
        24,
        19,
        85
    ], [
        24,
        20,
        38
    ], [
        24,
        21,
        150
    ], [
        24,
        22,
        121
    ], [
        24,
        23,
        68
    ], [
        24,
        24,
        47
    ], [
        24,
        25,
        49
    ], [
        24,
        26,
        99
    ], [
        24,
        27,
        85
    ], [
        24,
        28,
        87
    ], [
        24,
        29,
        70
    ], [
        24,
        30,
        66
    ], [
        24,
        31,
        350
    ], [
        24,
        32,
        83
    ], [
        24,
        33,
        217
    ], [
        24,
        34,
        61
    ], [
        24,
        35,
        203
    ], [
        24,
        36,
        55
    ], [
        24,
        37,
        87
    ], [
        24,
        38,
        58
    ], [
        24,
        39,
        99
    ], [
        24,
        40,
        108
    ], [
        24,
        41,
        83
    ], [
        24,
        42,
        35
    ], [
        24,
        43,
        140
    ], [
        24,
        44,
        44
    ], [
        24,
        45,
        106
    ], [
        24,
        46,
        47
    ], [
        24,
        47,
        70
    ], [
        24,
        48,
        48
    ], [
        24,
        49,
        28
    ], [
        24,
        50,
        67
    ], [
        24,
        51,
        83
    ], [
        24,
        52,
        45
    ], [
        24,
        53,
        76
    ], [
        24,
        54,
        102
    ], [
        24,
        55,
        173
    ], [
        24,
        56,
        48
    ], [
        24,
        57,
        53
    ], [
        24,
        58,
        219
    ], [
        24,
        59,
        87
    ], [
        24,
        60,
        103
    ], [
        24,
        61,
        315
    ], [
        24,
        62,
        180
    ], [
        24,
        63,
        120
    ], [
        24,
        64,
        86
    ], [
        25,
        1,
        44
    ], [
        25,
        2,
        73
    ], [
        25,
        3,
        92
    ], [
        25,
        4,
        66
    ], [
        25,
        5,
        47
    ], [
        25,
        6,
        51
    ], [
        25,
        7,
        70
    ], [
        25,
        8,
        65
    ], [
        25,
        9,
        42
    ], [
        25,
        10,
        62
    ], [
        25,
        11,
        39
    ], [
        25,
        12,
        37
    ], [
        25,
        13,
        42
    ], [
        25,
        14,
        38
    ], [
        25,
        15,
        50
    ], [
        25,
        16,
        40
    ], [
        25,
        17,
        68
    ], [
        25,
        18,
        87
    ], [
        25,
        19,
        65
    ], [
        25,
        20,
        96
    ], [
        25,
        21,
        85
    ], [
        25,
        22,
        51
    ], [
        25,
        23,
        38
    ], [
        25,
        24,
        34
    ], [
        25,
        25,
        39
    ], [
        25,
        26,
        44
    ], [
        25,
        27,
        49
    ], [
        25,
        28,
        28
    ], [
        25,
        29,
        48
    ], [
        25,
        30,
        41
    ], [
        25,
        31,
        49
    ], [
        25,
        32,
        69
    ], [
        25,
        33,
        37
    ], [
        25,
        34,
        48
    ], [
        25,
        35,
        42
    ], [
        25,
        36,
        49
    ], [
        25,
        37,
        69
    ], [
        25,
        38,
        37
    ], [
        25,
        39,
        33
    ], [
        25,
        40,
        69
    ], [
        25,
        41,
        44
    ], [
        25,
        42,
        68
    ], [
        25,
        43,
        37
    ], [
        25,
        44,
        55
    ], [
        25,
        45,
        57
    ], [
        25,
        46,
        22
    ], [
        25,
        47,
        49
    ], [
        25,
        48,
        55
    ], [
        25,
        49,
        46
    ], [
        25,
        50,
        43
    ], [
        25,
        51,
        26
    ], [
        25,
        52,
        33
    ], [
        25,
        53,
        64
    ], [
        25,
        54,
        47
    ], [
        25,
        55,
        55
    ], [
        25,
        56,
        24
    ], [
        25,
        57,
        44
    ], [
        25,
        58,
        52
    ], [
        25,
        59,
        72
    ], [
        25,
        60,
        61
    ], [
        25,
        61,
        48
    ], [
        25,
        62,
        50
    ], [
        25,
        63,
        61
    ], [
        25,
        64,
        27
    ], [
        25,
        65,
        47
    ], [
        25,
        66,
        20
    ], [
        25,
        67,
        47
    ], [
        25,
        68,
        85
    ], [
        25,
        69,
        36
    ], [
        25,
        70,
        69
    ], [
        25,
        71,
        35
    ], [
        25,
        72,
        42
    ], [
        25,
        73,
        45
    ], [
        25,
        74,
        64
    ], [
        25,
        75,
        44
    ], [
        25,
        76,
        26
    ], [
        25,
        77,
        45
    ], [
        26,
        1,
        3
    ], [
        26,
        2,
        19
    ], [
        26,
        3,
        27
    ], [
        26,
        4,
        45
    ], [
        26,
        5,
        43
    ], [
        26,
        6,
        38
    ], [
        26,
        7,
        39
    ], [
        26,
        8,
        29
    ], [
        26,
        9,
        21
    ], [
        26,
        10,
        32
    ], [
        26,
        11,
        16
    ], [
        26,
        12,
        20
    ], [
        26,
        13,
        35
    ], [
        26,
        14,
        23
    ], [
        26,
        15,
        33
    ], [
        26,
        16,
        32
    ], [
        26,
        17,
        20
    ], [
        26,
        18,
        38
    ], [
        26,
        19,
        32
    ], [
        26,
        20,
        25
    ], [
        26,
        21,
        46
    ], [
        26,
        22,
        32
    ], [
        26,
        23,
        21
    ], [
        26,
        24,
        40
    ], [
        26,
        25,
        20
    ], [
        26,
        26,
        23
    ], [
        26,
        27,
        30
    ], [
        26,
        28,
        39
    ], [
        26,
        29,
        37
    ], [
        26,
        30,
        19
    ], [
        26,
        31,
        23
    ], [
        26,
        32,
        24
    ], [
        26,
        33,
        26
    ], [
        26,
        34,
        26
    ], [
        26,
        35,
        35
    ], [
        26,
        36,
        34
    ], [
        26,
        37,
        16
    ], [
        26,
        38,
        24
    ], [
        26,
        39,
        22
    ], [
        26,
        40,
        32
    ], [
        26,
        41,
        51
    ], [
        26,
        42,
        25
    ], [
        26,
        43,
        26
    ], [
        26,
        44,
        48
    ], [
        26,
        45,
        31
    ], [
        26,
        46,
        17
    ], [
        26,
        47,
        20
    ], [
        26,
        48,
        12
    ], [
        26,
        49,
        96
    ], [
        26,
        50,
        27
    ], [
        26,
        51,
        43
    ], [
        26,
        52,
        35
    ], [
        26,
        53,
        25
    ], [
        26,
        54,
        19
    ], [
        26,
        55,
        15
    ], [
        26,
        56,
        15
    ], [
        26,
        57,
        20
    ], [
        26,
        58,
        14
    ], [
        26,
        59,
        23
    ], [
        26,
        60,
        14
    ], [
        26,
        61,
        38
    ], [
        26,
        62,
        20
    ], [
        26,
        63,
        57
    ], [
        26,
        64,
        16
    ], [
        26,
        65,
        23
    ], [
        26,
        66,
        15
    ], [
        26,
        67,
        29
    ], [
        26,
        68,
        21
    ], [
        26,
        69,
        19
    ], [
        26,
        70,
        23
    ], [
        26,
        71,
        28
    ], [
        26,
        72,
        20
    ], [
        26,
        73,
        17
    ], [
        26,
        74,
        28
    ], [
        26,
        75,
        22
    ], [
        26,
        76,
        19
    ], [
        26,
        77,
        23
    ], [
        26,
        78,
        17
    ], [
        26,
        79,
        19
    ], [
        26,
        80,
        16
    ], [
        26,
        81,
        18
    ], [
        26,
        82,
        31
    ], [
        26,
        83,
        26
    ], [
        26,
        84,
        23
    ], [
        26,
        85,
        22
    ], [
        26,
        86,
        24
    ], [
        26,
        87,
        17
    ], [
        26,
        88,
        19
    ], [
        26,
        89,
        20
    ], [
        26,
        90,
        18
    ], [
        26,
        91,
        18
    ], [
        26,
        92,
        22
    ], [
        26,
        93,
        28
    ], [
        26,
        94,
        21
    ], [
        26,
        95,
        16
    ], [
        26,
        96,
        19
    ], [
        26,
        97,
        21
    ], [
        26,
        98,
        19
    ], [
        26,
        99,
        19
    ], [
        26,
        100,
        14
    ], [
        26,
        101,
        11
    ], [
        26,
        102,
        26
    ], [
        26,
        103,
        29
    ], [
        26,
        104,
        21
    ], [
        26,
        105,
        18
    ], [
        26,
        106,
        24
    ], [
        26,
        107,
        14
    ], [
        26,
        108,
        17
    ], [
        26,
        109,
        40
    ], [
        26,
        110,
        17
    ], [
        26,
        111,
        26
    ], [
        26,
        112,
        24
    ], [
        26,
        113,
        25
    ], [
        26,
        114,
        19
    ], [
        26,
        115,
        16
    ], [
        26,
        116,
        36
    ], [
        26,
        117,
        16
    ], [
        26,
        118,
        40
    ], [
        26,
        119,
        28
    ], [
        26,
        120,
        18
    ], [
        26,
        121,
        29
    ], [
        26,
        122,
        21
    ], [
        26,
        123,
        15
    ], [
        26,
        124,
        24
    ], [
        26,
        125,
        14
    ], [
        26,
        126,
        17
    ], [
        26,
        127,
        40
    ], [
        26,
        128,
        21
    ], [
        26,
        129,
        23
    ], [
        26,
        130,
        20
    ], [
        26,
        131,
        17
    ], [
        26,
        132,
        24
    ], [
        26,
        133,
        16
    ], [
        26,
        134,
        10
    ], [
        26,
        135,
        23
    ], [
        26,
        136,
        36
    ], [
        26,
        137,
        18
    ], [
        26,
        138,
        13
    ], [
        26,
        139,
        44
    ], [
        26,
        140,
        21
    ], [
        26,
        141,
        16
    ], [
        26,
        142,
        25
    ], [
        26,
        143,
        14
    ], [
        26,
        144,
        17
    ], [
        26,
        145,
        40
    ], [
        26,
        146,
        21
    ], [
        26,
        147,
        11
    ], [
        26,
        148,
        18
    ], [
        26,
        149,
        26
    ], [
        26,
        150,
        17
    ], [
        26,
        151,
        20
    ], [
        26,
        152,
        27
    ], [
        26,
        153,
        22
    ], [
        26,
        154,
        38
    ], [
        26,
        155,
        31
    ], [
        26,
        156,
        31
    ], [
        26,
        157,
        20
    ], [
        26,
        158,
        41
    ], [
        26,
        159,
        21
    ], [
        26,
        160,
        18
    ], [
        26,
        161,
        24
    ], [
        26,
        162,
        14
    ], [
        26,
        163,
        17
    ], [
        26,
        164,
        40
    ], [
        26,
        165,
        23
    ], [
        26,
        166,
        41
    ], [
        26,
        167,
        35
    ], [
        26,
        168,
        21
    ], [
        26,
        169,
        20
    ], [
        26,
        170,
        18
    ], [
        26,
        171,
        18
    ], [
        26,
        172,
        14
    ], [
        26,
        173,
        31
    ], [
        26,
        174,
        29
    ], [
        26,
        175,
        21
    ], [
        26,
        176,
        22
    ], [
        26,
        177,
        20
    ], [
        26,
        178,
        14
    ], [
        26,
        179,
        17
    ], [
        26,
        180,
        40
    ], [
        26,
        181,
        29
    ], [
        26,
        182,
        21
    ], [
        26,
        183,
        42
    ], [
        26,
        184,
        29
    ], [
        26,
        185,
        22
    ], [
        26,
        186,
        35
    ], [
        26,
        187,
        37
    ], [
        26,
        188,
        19
    ], [
        26,
        189,
        41
    ], [
        26,
        190,
        29
    ], [
        26,
        191,
        21
    ], [
        26,
        192,
        20
    ], [
        26,
        193,
        16
    ], [
        26,
        194,
        22
    ], [
        26,
        195,
        13
    ], [
        26,
        196,
        17
    ], [
        26,
        197,
        35
    ], [
        26,
        198,
        23
    ], [
        26,
        199,
        25
    ], [
        26,
        200,
        24
    ], [
        26,
        201,
        29
    ], [
        26,
        202,
        22
    ], [
        26,
        203,
        18
    ], [
        26,
        204,
        17
    ], [
        26,
        205,
        19
    ], [
        26,
        206,
        20
    ], [
        26,
        207,
        23
    ], [
        26,
        208,
        27
    ], [
        26,
        209,
        16
    ], [
        26,
        210,
        18
    ], [
        26,
        211,
        22
    ], [
        26,
        212,
        19
    ], [
        26,
        213,
        34
    ], [
        26,
        214,
        19
    ], [
        26,
        215,
        28
    ], [
        26,
        216,
        26
    ], [
        26,
        217,
        20
    ], [
        26,
        218,
        15
    ], [
        26,
        219,
        16
    ], [
        26,
        220,
        17
    ], [
        26,
        221,
        25
    ], [
        26,
        222,
        17
    ], [
        26,
        223,
        23
    ], [
        26,
        224,
        21
    ], [
        26,
        225,
        22
    ], [
        26,
        226,
        21
    ], [
        26,
        227,
        92
    ], [
        27,
        1,
        24
    ], [
        27,
        2,
        16
    ], [
        27,
        3,
        47
    ], [
        27,
        4,
        45
    ], [
        27,
        5,
        43
    ], [
        27,
        6,
        28
    ], [
        27,
        7,
        65
    ], [
        27,
        8,
        56
    ], [
        27,
        9,
        28
    ], [
        27,
        10,
        74
    ], [
        27,
        11,
        35
    ], [
        27,
        12,
        72
    ], [
        27,
        13,
        36
    ], [
        27,
        14,
        58
    ], [
        27,
        15,
        69
    ], [
        27,
        16,
        77
    ], [
        27,
        17,
        43
    ], [
        27,
        18,
        85
    ], [
        27,
        19,
        106
    ], [
        27,
        20,
        44
    ], [
        27,
        21,
        45
    ], [
        27,
        22,
        47
    ], [
        27,
        23,
        42
    ], [
        27,
        24,
        77
    ], [
        27,
        25,
        62
    ], [
        27,
        26,
        27
    ], [
        27,
        27,
        28
    ], [
        27,
        28,
        47
    ], [
        27,
        29,
        33
    ], [
        27,
        30,
        15
    ], [
        27,
        31,
        23
    ], [
        27,
        32,
        50
    ], [
        27,
        33,
        53
    ], [
        27,
        34,
        61
    ], [
        27,
        35,
        39
    ], [
        27,
        36,
        69
    ], [
        27,
        37,
        60
    ], [
        27,
        38,
        47
    ], [
        27,
        39,
        55
    ], [
        27,
        40,
        136
    ], [
        27,
        41,
        47
    ], [
        27,
        42,
        59
    ], [
        27,
        43,
        43
    ], [
        27,
        44,
        110
    ], [
        27,
        45,
        58
    ], [
        27,
        46,
        61
    ], [
        27,
        47,
        51
    ], [
        27,
        48,
        42
    ], [
        27,
        49,
        68
    ], [
        27,
        50,
        31
    ], [
        27,
        51,
        43
    ], [
        27,
        52,
        44
    ], [
        27,
        53,
        28
    ], [
        27,
        54,
        39
    ], [
        27,
        55,
        47
    ], [
        27,
        56,
        58
    ], [
        27,
        57,
        39
    ], [
        27,
        58,
        31
    ], [
        27,
        59,
        49
    ], [
        27,
        60,
        104
    ], [
        27,
        61,
        89
    ], [
        27,
        62,
        70
    ], [
        27,
        63,
        82
    ], [
        27,
        64,
        78
    ], [
        27,
        65,
        57
    ], [
        27,
        66,
        44
    ], [
        27,
        67,
        44
    ], [
        27,
        68,
        47
    ], [
        27,
        69,
        40
    ], [
        27,
        70,
        32
    ], [
        27,
        71,
        30
    ], [
        27,
        72,
        32
    ], [
        27,
        73,
        38
    ], [
        27,
        74,
        31
    ], [
        27,
        75,
        37
    ], [
        27,
        76,
        47
    ], [
        27,
        77,
        21
    ], [
        27,
        78,
        34
    ], [
        27,
        79,
        28
    ], [
        27,
        80,
        45
    ], [
        27,
        81,
        56
    ], [
        27,
        82,
        70
    ], [
        27,
        83,
        42
    ], [
        27,
        84,
        57
    ], [
        27,
        85,
        33
    ], [
        27,
        86,
        64
    ], [
        27,
        87,
        66
    ], [
        27,
        88,
        71
    ], [
        27,
        89,
        40
    ], [
        27,
        90,
        52
    ], [
        27,
        91,
        63
    ], [
        27,
        92,
        61
    ], [
        27,
        93,
        51
    ], [
        28,
        1,
        3
    ], [
        28,
        2,
        19
    ], [
        28,
        3,
        38
    ], [
        28,
        4,
        85
    ], [
        28,
        5,
        59
    ], [
        28,
        6,
        55
    ], [
        28,
        7,
        92
    ], [
        28,
        8,
        63
    ], [
        28,
        9,
        67
    ], [
        28,
        10,
        67
    ], [
        28,
        11,
        37
    ], [
        28,
        12,
        64
    ], [
        28,
        13,
        65
    ], [
        28,
        14,
        49
    ], [
        28,
        15,
        148
    ], [
        28,
        16,
        46
    ], [
        28,
        17,
        36
    ], [
        28,
        18,
        72
    ], [
        28,
        19,
        119
    ], [
        28,
        20,
        76
    ], [
        28,
        21,
        42
    ], [
        28,
        22,
        44
    ], [
        28,
        23,
        108
    ], [
        28,
        24,
        50
    ], [
        28,
        25,
        106
    ], [
        28,
        26,
        48
    ], [
        28,
        27,
        110
    ], [
        28,
        28,
        59
    ], [
        28,
        29,
        109
    ], [
        28,
        30,
        82
    ], [
        28,
        31,
        73
    ], [
        28,
        32,
        100
    ], [
        28,
        33,
        33
    ], [
        28,
        34,
        57
    ], [
        28,
        35,
        75
    ], [
        28,
        36,
        73
    ], [
        28,
        37,
        69
    ], [
        28,
        38,
        108
    ], [
        28,
        39,
        52
    ], [
        28,
        40,
        51
    ], [
        28,
        41,
        44
    ], [
        28,
        42,
        48
    ], [
        28,
        43,
        75
    ], [
        28,
        44,
        52
    ], [
        28,
        45,
        81
    ], [
        28,
        46,
        77
    ], [
        28,
        47,
        86
    ], [
        28,
        48,
        106
    ], [
        28,
        49,
        49
    ], [
        28,
        50,
        92
    ], [
        28,
        51,
        29
    ], [
        28,
        52,
        34
    ], [
        28,
        53,
        55
    ], [
        28,
        54,
        65
    ], [
        28,
        55,
        74
    ], [
        28,
        56,
        50
    ], [
        28,
        57,
        97
    ], [
        28,
        58,
        73
    ], [
        28,
        59,
        82
    ], [
        28,
        60,
        66
    ], [
        28,
        61,
        75
    ], [
        28,
        62,
        40
    ], [
        28,
        63,
        84
    ], [
        28,
        64,
        64
    ], [
        28,
        65,
        33
    ], [
        28,
        66,
        35
    ], [
        28,
        67,
        42
    ], [
        28,
        68,
        58
    ], [
        28,
        69,
        28
    ], [
        28,
        70,
        58
    ], [
        28,
        71,
        78
    ], [
        28,
        72,
        87
    ], [
        28,
        73,
        62
    ], [
        28,
        74,
        40
    ], [
        28,
        75,
        70
    ], [
        28,
        76,
        109
    ], [
        28,
        77,
        105
    ], [
        28,
        78,
        102
    ], [
        28,
        79,
        78
    ], [
        28,
        80,
        70
    ], [
        28,
        81,
        65
    ], [
        28,
        82,
        113
    ], [
        28,
        83,
        67
    ], [
        28,
        84,
        75
    ], [
        28,
        85,
        66
    ], [
        28,
        86,
        59
    ], [
        28,
        87,
        60
    ], [
        28,
        88,
        63
    ], [
        29,
        1,
        3
    ], [
        29,
        2,
        40
    ], [
        29,
        3,
        56
    ], [
        29,
        4,
        43
    ], [
        29,
        5,
        45
    ], [
        29,
        6,
        42
    ], [
        29,
        7,
        70
    ], [
        29,
        8,
        90
    ], [
        29,
        9,
        43
    ], [
        29,
        10,
        120
    ], [
        29,
        11,
        37
    ], [
        29,
        12,
        86
    ], [
        29,
        13,
        61
    ], [
        29,
        14,
        69
    ], [
        29,
        15,
        40
    ], [
        29,
        16,
        56
    ], [
        29,
        17,
        118
    ], [
        29,
        18,
        52
    ], [
        29,
        19,
        47
    ], [
        29,
        20,
        72
    ], [
        29,
        21,
        32
    ], [
        29,
        22,
        59
    ], [
        29,
        23,
        60
    ], [
        29,
        24,
        76
    ], [
        29,
        25,
        117
    ], [
        29,
        26,
        44
    ], [
        29,
        27,
        87
    ], [
        29,
        28,
        57
    ], [
        29,
        29,
        103
    ], [
        29,
        30,
        27
    ], [
        29,
        31,
        70
    ], [
        29,
        32,
        67
    ], [
        29,
        33,
        90
    ], [
        29,
        34,
        50
    ], [
        29,
        35,
        30
    ], [
        29,
        36,
        74
    ], [
        29,
        37,
        39
    ], [
        29,
        38,
        77
    ], [
        29,
        39,
        69
    ], [
        29,
        40,
        124
    ], [
        29,
        41,
        88
    ], [
        29,
        42,
        43
    ], [
        29,
        43,
        42
    ], [
        29,
        44,
        45
    ], [
        29,
        45,
        89
    ], [
        29,
        46,
        112
    ], [
        29,
        47,
        89
    ], [
        29,
        48,
        52
    ], [
        29,
        49,
        59
    ], [
        29,
        50,
        62
    ], [
        29,
        51,
        64
    ], [
        29,
        52,
        91
    ], [
        29,
        53,
        65
    ], [
        29,
        54,
        38
    ], [
        29,
        55,
        56
    ], [
        29,
        56,
        40
    ], [
        29,
        57,
        28
    ], [
        29,
        58,
        86
    ], [
        29,
        59,
        25
    ], [
        29,
        60,
        53
    ], [
        29,
        61,
        64
    ], [
        29,
        62,
        50
    ], [
        29,
        63,
        84
    ], [
        29,
        64,
        65
    ], [
        29,
        65,
        64
    ], [
        29,
        66,
        36
    ], [
        29,
        67,
        73
    ], [
        29,
        68,
        65
    ], [
        29,
        69,
        47
    ], [
        30,
        1,
        3
    ], [
        30,
        2,
        9
    ], [
        30,
        3,
        31
    ], [
        30,
        4,
        46
    ], [
        30,
        5,
        33
    ], [
        30,
        6,
        42
    ], [
        30,
        7,
        44
    ], [
        30,
        8,
        98
    ], [
        30,
        9,
        152
    ], [
        30,
        10,
        60
    ], [
        30,
        11,
        32
    ], [
        30,
        12,
        26
    ], [
        30,
        13,
        43
    ], [
        30,
        14,
        26
    ], [
        30,
        15,
        43
    ], [
        30,
        16,
        58
    ], [
        30,
        17,
        28
    ], [
        30,
        18,
        39
    ], [
        30,
        19,
        60
    ], [
        30,
        20,
        40
    ], [
        30,
        21,
        83
    ], [
        30,
        22,
        67
    ], [
        30,
        23,
        64
    ], [
        30,
        24,
        85
    ], [
        30,
        25,
        65
    ], [
        30,
        26,
        31
    ], [
        30,
        27,
        79
    ], [
        30,
        28,
        113
    ], [
        30,
        29,
        60
    ], [
        30,
        30,
        92
    ], [
        30,
        31,
        48
    ], [
        30,
        32,
        45
    ], [
        30,
        33,
        71
    ], [
        30,
        34,
        34
    ], [
        30,
        35,
        43
    ], [
        30,
        36,
        62
    ], [
        30,
        37,
        57
    ], [
        30,
        38,
        72
    ], [
        30,
        39,
        87
    ], [
        30,
        40,
        85
    ], [
        30,
        41,
        67
    ], [
        30,
        42,
        57
    ], [
        30,
        43,
        56
    ], [
        30,
        44,
        39
    ], [
        30,
        45,
        51
    ], [
        30,
        46,
        83
    ], [
        30,
        47,
        87
    ], [
        30,
        48,
        115
    ], [
        30,
        49,
        37
    ], [
        30,
        50,
        71
    ], [
        30,
        51,
        41
    ], [
        30,
        52,
        46
    ], [
        30,
        53,
        55
    ], [
        30,
        54,
        81
    ], [
        30,
        55,
        55
    ], [
        30,
        56,
        86
    ], [
        30,
        57,
        42
    ], [
        30,
        58,
        76
    ], [
        30,
        59,
        32
    ], [
        30,
        60,
        39
    ], [
        31,
        1,
        3
    ], [
        31,
        2,
        19
    ], [
        31,
        3,
        16
    ], [
        31,
        4,
        47
    ], [
        31,
        5,
        33
    ], [
        31,
        6,
        72
    ], [
        31,
        7,
        67
    ], [
        31,
        8,
        39
    ], [
        31,
        9,
        35
    ], [
        31,
        10,
        105
    ], [
        31,
        11,
        54
    ], [
        31,
        12,
        70
    ], [
        31,
        13,
        54
    ], [
        31,
        14,
        76
    ], [
        31,
        15,
        112
    ], [
        31,
        16,
        82
    ], [
        31,
        17,
        69
    ], [
        31,
        18,
        54
    ], [
        31,
        19,
        45
    ], [
        31,
        20,
        111
    ], [
        31,
        21,
        87
    ], [
        31,
        22,
        66
    ], [
        31,
        23,
        64
    ], [
        31,
        24,
        30
    ], [
        31,
        25,
        65
    ], [
        31,
        26,
        40
    ], [
        31,
        27,
        78
    ], [
        31,
        28,
        41
    ], [
        31,
        29,
        97
    ], [
        31,
        30,
        58
    ], [
        31,
        31,
        68
    ], [
        31,
        32,
        92
    ], [
        31,
        33,
        122
    ], [
        31,
        34,
        100
    ], [
        32,
        1,
        3
    ], [
        32,
        2,
        31
    ], [
        32,
        3,
        66
    ], [
        32,
        4,
        92
    ], [
        32,
        5,
        63
    ], [
        32,
        6,
        32
    ], [
        32,
        7,
        36
    ], [
        32,
        8,
        25
    ], [
        32,
        9,
        60
    ], [
        32,
        10,
        55
    ], [
        32,
        11,
        42
    ], [
        32,
        12,
        75
    ], [
        32,
        13,
        66
    ], [
        32,
        14,
        64
    ], [
        32,
        15,
        66
    ], [
        32,
        16,
        56
    ], [
        32,
        17,
        46
    ], [
        32,
        18,
        31
    ], [
        32,
        19,
        59
    ], [
        32,
        20,
        95
    ], [
        32,
        21,
        49
    ], [
        32,
        22,
        51
    ], [
        32,
        23,
        59
    ], [
        32,
        24,
        52
    ], [
        32,
        25,
        45
    ], [
        32,
        26,
        69
    ], [
        32,
        27,
        75
    ], [
        32,
        28,
        30
    ], [
        32,
        29,
        44
    ], [
        32,
        30,
        26
    ], [
        33,
        1,
        61
    ], [
        33,
        2,
        43
    ], [
        33,
        3,
        26
    ], [
        33,
        4,
        127
    ], [
        33,
        5,
        126
    ], [
        33,
        6,
        143
    ], [
        33,
        7,
        80
    ], [
        33,
        8,
        42
    ], [
        33,
        9,
        98
    ], [
        33,
        10,
        76
    ], [
        33,
        11,
        36
    ], [
        33,
        12,
        58
    ], [
        33,
        13,
        105
    ], [
        33,
        14,
        60
    ], [
        33,
        15,
        55
    ], [
        33,
        16,
        57
    ], [
        33,
        17,
        80
    ], [
        33,
        18,
        68
    ], [
        33,
        19,
        155
    ], [
        33,
        20,
        102
    ], [
        33,
        21,
        65
    ], [
        33,
        22,
        85
    ], [
        33,
        23,
        75
    ], [
        33,
        24,
        72
    ], [
        33,
        25,
        74
    ], [
        33,
        26,
        77
    ], [
        33,
        27,
        61
    ], [
        33,
        28,
        79
    ], [
        33,
        29,
        64
    ], [
        33,
        30,
        69
    ], [
        33,
        31,
        64
    ], [
        33,
        32,
        81
    ], [
        33,
        33,
        122
    ], [
        33,
        34,
        56
    ], [
        33,
        35,
        223
    ], [
        33,
        36,
        92
    ], [
        33,
        37,
        196
    ], [
        33,
        38,
        75
    ], [
        33,
        39,
        61
    ], [
        33,
        40,
        66
    ], [
        33,
        41,
        35
    ], [
        33,
        42,
        16
    ], [
        33,
        43,
        65
    ], [
        33,
        44,
        35
    ], [
        33,
        45,
        38
    ], [
        33,
        46,
        29
    ], [
        33,
        47,
        33
    ], [
        33,
        48,
        58
    ], [
        33,
        49,
        103
    ], [
        33,
        50,
        267
    ], [
        33,
        51,
        137
    ], [
        33,
        52,
        85
    ], [
        33,
        53,
        294
    ], [
        33,
        54,
        39
    ], [
        33,
        55,
        126
    ], [
        33,
        56,
        63
    ], [
        33,
        57,
        63
    ], [
        33,
        58,
        67
    ], [
        33,
        59,
        99
    ], [
        33,
        60,
        87
    ], [
        33,
        61,
        34
    ], [
        33,
        62,
        43
    ], [
        33,
        63,
        62
    ], [
        33,
        64,
        29
    ], [
        33,
        65,
        33
    ], [
        33,
        66,
        55
    ], [
        33,
        67,
        46
    ], [
        33,
        68,
        37
    ], [
        33,
        69,
        71
    ], [
        33,
        70,
        40
    ], [
        33,
        71,
        59
    ], [
        33,
        72,
        92
    ], [
        33,
        73,
        93
    ], [
        34,
        1,
        67
    ], [
        34,
        2,
        68
    ], [
        34,
        3,
        123
    ], [
        34,
        4,
        50
    ], [
        34,
        5,
        46
    ], [
        34,
        6,
        66
    ], [
        34,
        7,
        61
    ], [
        34,
        8,
        66
    ], [
        34,
        9,
        105
    ], [
        34,
        10,
        53
    ], [
        34,
        11,
        51
    ], [
        34,
        12,
        107
    ], [
        34,
        13,
        87
    ], [
        34,
        14,
        109
    ], [
        34,
        15,
        74
    ], [
        34,
        16,
        75
    ], [
        34,
        17,
        35
    ], [
        34,
        18,
        82
    ], [
        34,
        19,
        87
    ], [
        34,
        20,
        45
    ], [
        34,
        21,
        70
    ], [
        34,
        22,
        93
    ], [
        34,
        23,
        85
    ], [
        34,
        24,
        62
    ], [
        34,
        25,
        35
    ], [
        34,
        26,
        46
    ], [
        34,
        27,
        48
    ], [
        34,
        28,
        54
    ], [
        34,
        29,
        30
    ], [
        34,
        30,
        41
    ], [
        34,
        31,
        143
    ], [
        34,
        32,
        69
    ], [
        34,
        33,
        160
    ], [
        34,
        34,
        54
    ], [
        34,
        35,
        39
    ], [
        34,
        36,
        49
    ], [
        34,
        37,
        100
    ], [
        34,
        38,
        45
    ], [
        34,
        39,
        73
    ], [
        34,
        40,
        51
    ], [
        34,
        41,
        58
    ], [
        34,
        42,
        77
    ], [
        34,
        43,
        130
    ], [
        34,
        44,
        47
    ], [
        34,
        45,
        59
    ], [
        34,
        46,
        89
    ], [
        34,
        47,
        52
    ], [
        34,
        48,
        26
    ], [
        34,
        49,
        29
    ], [
        34,
        50,
        57
    ], [
        34,
        51,
        35
    ], [
        34,
        52,
        36
    ], [
        34,
        53,
        38
    ], [
        34,
        54,
        57
    ], [
        35,
        1,
        100
    ], [
        35,
        2,
        68
    ], [
        35,
        3,
        85
    ], [
        35,
        4,
        43
    ], [
        35,
        5,
        63
    ], [
        35,
        6,
        58
    ], [
        35,
        7,
        62
    ], [
        35,
        8,
        91
    ], [
        35,
        9,
        76
    ], [
        35,
        10,
        108
    ], [
        35,
        11,
        115
    ], [
        35,
        12,
        127
    ], [
        35,
        13,
        115
    ], [
        35,
        14,
        81
    ], [
        35,
        15,
        47
    ], [
        35,
        16,
        23
    ], [
        35,
        17,
        18
    ], [
        35,
        18,
        138
    ], [
        35,
        19,
        21
    ], [
        35,
        20,
        18
    ], [
        35,
        21,
        16
    ], [
        35,
        22,
        62
    ], [
        35,
        23,
        12
    ], [
        35,
        24,
        48
    ], [
        35,
        25,
        67
    ], [
        35,
        26,
        27
    ], [
        35,
        27,
        94
    ], [
        35,
        28,
        78
    ], [
        35,
        29,
        76
    ], [
        35,
        30,
        37
    ], [
        35,
        31,
        65
    ], [
        35,
        32,
        99
    ], [
        35,
        33,
        57
    ], [
        35,
        34,
        45
    ], [
        35,
        35,
        55
    ], [
        35,
        36,
        72
    ], [
        35,
        37,
        108
    ], [
        35,
        38,
        44
    ], [
        35,
        39,
        100
    ], [
        35,
        40,
        132
    ], [
        35,
        41,
        76
    ], [
        35,
        42,
        83
    ], [
        35,
        43,
        111
    ], [
        35,
        44,
        120
    ], [
        35,
        45,
        97
    ], [
        36,
        1,
        2
    ], [
        36,
        2,
        13
    ], [
        36,
        3,
        14
    ], [
        36,
        4,
        13
    ], [
        36,
        5,
        17
    ], [
        36,
        6,
        30
    ], [
        36,
        7,
        30
    ], [
        36,
        8,
        45
    ], [
        36,
        9,
        51
    ], [
        36,
        10,
        36
    ], [
        36,
        11,
        54
    ], [
        36,
        12,
        58
    ], [
        36,
        13,
        38
    ], [
        36,
        14,
        57
    ], [
        36,
        15,
        55
    ], [
        36,
        16,
        28
    ], [
        36,
        17,
        23
    ], [
        36,
        18,
        55
    ], [
        36,
        19,
        38
    ], [
        36,
        20,
        46
    ], [
        36,
        21,
        29
    ], [
        36,
        22,
        31
    ], [
        36,
        23,
        58
    ], [
        36,
        24,
        17
    ], [
        36,
        25,
        19
    ], [
        36,
        26,
        30
    ], [
        36,
        27,
        27
    ], [
        36,
        28,
        47
    ], [
        36,
        29,
        30
    ], [
        36,
        30,
        47
    ], [
        36,
        31,
        45
    ], [
        36,
        32,
        23
    ], [
        36,
        33,
        50
    ], [
        36,
        34,
        44
    ], [
        36,
        35,
        37
    ], [
        36,
        36,
        56
    ], [
        36,
        37,
        37
    ], [
        36,
        38,
        39
    ], [
        36,
        39,
        37
    ], [
        36,
        40,
        58
    ], [
        36,
        41,
        35
    ], [
        36,
        42,
        23
    ], [
        36,
        43,
        33
    ], [
        36,
        44,
        22
    ], [
        36,
        45,
        45
    ], [
        36,
        46,
        42
    ], [
        36,
        47,
        92
    ], [
        36,
        48,
        30
    ], [
        36,
        49,
        35
    ], [
        36,
        50,
        33
    ], [
        36,
        51,
        39
    ], [
        36,
        52,
        53
    ], [
        36,
        53,
        39
    ], [
        36,
        54,
        42
    ], [
        36,
        55,
        28
    ], [
        36,
        56,
        32
    ], [
        36,
        57,
        23
    ], [
        36,
        58,
        16
    ], [
        36,
        59,
        25
    ], [
        36,
        60,
        50
    ], [
        36,
        61,
        23
    ], [
        36,
        62,
        36
    ], [
        36,
        63,
        21
    ], [
        36,
        64,
        24
    ], [
        36,
        65,
        57
    ], [
        36,
        66,
        46
    ], [
        36,
        67,
        49
    ], [
        36,
        68,
        30
    ], [
        36,
        69,
        43
    ], [
        36,
        70,
        33
    ], [
        36,
        71,
        50
    ], [
        36,
        72,
        33
    ], [
        36,
        73,
        29
    ], [
        36,
        74,
        31
    ], [
        36,
        75,
        30
    ], [
        36,
        76,
        36
    ], [
        36,
        77,
        42
    ], [
        36,
        78,
        41
    ], [
        36,
        79,
        37
    ], [
        36,
        80,
        44
    ], [
        36,
        81,
        63
    ], [
        36,
        82,
        34
    ], [
        36,
        83,
        35
    ], [
        37,
        1,
        11
    ], [
        37,
        2,
        13
    ], [
        37,
        3,
        13
    ], [
        37,
        4,
        12
    ], [
        37,
        5,
        35
    ], [
        37,
        6,
        31
    ], [
        37,
        7,
        18
    ], [
        37,
        8,
        37
    ], [
        37,
        9,
        17
    ], [
        37,
        10,
        28
    ], [
        37,
        11,
        46
    ], [
        37,
        12,
        13
    ], [
        37,
        13,
        17
    ], [
        37,
        14,
        19
    ], [
        37,
        15,
        21
    ], [
        37,
        16,
        35
    ], [
        37,
        17,
        15
    ], [
        37,
        18,
        16
    ], [
        37,
        19,
        28
    ], [
        37,
        20,
        24
    ], [
        37,
        21,
        27
    ], [
        37,
        22,
        38
    ], [
        37,
        23,
        29
    ], [
        37,
        24,
        17
    ], [
        37,
        25,
        14
    ], [
        37,
        26,
        17
    ], [
        37,
        27,
        24
    ], [
        37,
        28,
        28
    ], [
        37,
        29,
        21
    ], [
        37,
        30,
        36
    ], [
        37,
        31,
        25
    ], [
        37,
        32,
        20
    ], [
        37,
        33,
        25
    ], [
        37,
        34,
        20
    ], [
        37,
        35,
        38
    ], [
        37,
        36,
        33
    ], [
        37,
        37,
        22
    ], [
        37,
        38,
        22
    ], [
        37,
        39,
        23
    ], [
        37,
        40,
        19
    ], [
        37,
        41,
        16
    ], [
        37,
        42,
        14
    ], [
        37,
        43,
        12
    ], [
        37,
        44,
        14
    ], [
        37,
        45,
        19
    ], [
        37,
        46,
        16
    ], [
        37,
        47,
        24
    ], [
        37,
        48,
        20
    ], [
        37,
        49,
        13
    ], [
        37,
        50,
        24
    ], [
        37,
        51,
        23
    ], [
        37,
        52,
        19
    ], [
        37,
        53,
        34
    ], [
        37,
        54,
        15
    ], [
        37,
        55,
        21
    ], [
        37,
        56,
        19
    ], [
        37,
        57,
        26
    ], [
        37,
        58,
        13
    ], [
        37,
        59,
        28
    ], [
        37,
        60,
        19
    ], [
        37,
        61,
        21
    ], [
        37,
        62,
        23
    ], [
        37,
        63,
        22
    ], [
        37,
        64,
        23
    ], [
        37,
        65,
        21
    ], [
        37,
        66,
        32
    ], [
        37,
        67,
        23
    ], [
        37,
        68,
        20
    ], [
        37,
        69,
        20
    ], [
        37,
        70,
        18
    ], [
        37,
        71,
        22
    ], [
        37,
        72,
        20
    ], [
        37,
        73,
        24
    ], [
        37,
        74,
        19
    ], [
        37,
        75,
        26
    ], [
        37,
        76,
        25
    ], [
        37,
        77,
        20
    ], [
        37,
        78,
        19
    ], [
        37,
        79,
        20
    ], [
        37,
        80,
        19
    ], [
        37,
        81,
        19
    ], [
        37,
        82,
        15
    ], [
        37,
        83,
        18
    ], [
        37,
        84,
        16
    ], [
        37,
        85,
        25
    ], [
        37,
        86,
        22
    ], [
        37,
        87,
        18
    ], [
        37,
        88,
        16
    ], [
        37,
        89,
        11
    ], [
        37,
        90,
        15
    ], [
        37,
        91,
        26
    ], [
        37,
        92,
        13
    ], [
        37,
        93,
        20
    ], [
        37,
        94,
        16
    ], [
        37,
        95,
        18
    ], [
        37,
        96,
        19
    ], [
        37,
        97,
        32
    ], [
        37,
        98,
        29
    ], [
        37,
        99,
        23
    ], [
        37,
        100,
        16
    ], [
        37,
        101,
        16
    ], [
        37,
        102,
        100
    ], [
        37,
        103,
        19
    ], [
        37,
        104,
        19
    ], [
        37,
        105,
        31
    ], [
        37,
        106,
        20
    ], [
        37,
        107,
        15
    ], [
        37,
        108,
        19
    ], [
        37,
        109,
        14
    ], [
        37,
        110,
        16
    ], [
        37,
        111,
        19
    ], [
        37,
        112,
        27
    ], [
        37,
        113,
        48
    ], [
        37,
        114,
        21
    ], [
        37,
        115,
        29
    ], [
        37,
        116,
        24
    ], [
        37,
        117,
        23
    ], [
        37,
        118,
        23
    ], [
        37,
        119,
        21
    ], [
        37,
        120,
        17
    ], [
        37,
        121,
        19
    ], [
        37,
        122,
        21
    ], [
        37,
        123,
        19
    ], [
        37,
        124,
        18
    ], [
        37,
        125,
        28
    ], [
        37,
        126,
        24
    ], [
        37,
        127,
        18
    ], [
        37,
        128,
        19
    ], [
        37,
        129,
        19
    ], [
        37,
        130,
        14
    ], [
        37,
        131,
        19
    ], [
        37,
        132,
        19
    ], [
        37,
        133,
        18
    ], [
        37,
        134,
        19
    ], [
        37,
        135,
        18
    ], [
        37,
        136,
        14
    ], [
        37,
        137,
        22
    ], [
        37,
        138,
        17
    ], [
        37,
        139,
        18
    ], [
        37,
        140,
        20
    ], [
        37,
        141,
        19
    ], [
        37,
        142,
        19
    ], [
        37,
        143,
        21
    ], [
        37,
        144,
        22
    ], [
        37,
        145,
        21
    ], [
        37,
        146,
        22
    ], [
        37,
        147,
        26
    ], [
        37,
        148,
        20
    ], [
        37,
        149,
        29
    ], [
        37,
        150,
        29
    ], [
        37,
        151,
        21
    ], [
        37,
        152,
        19
    ], [
        37,
        153,
        20
    ], [
        37,
        154,
        14
    ], [
        37,
        155,
        10
    ], [
        37,
        156,
        14
    ], [
        37,
        157,
        24
    ], [
        37,
        158,
        47
    ], [
        37,
        159,
        17
    ], [
        37,
        160,
        19
    ], [
        37,
        161,
        14
    ], [
        37,
        162,
        17
    ], [
        37,
        163,
        16
    ], [
        37,
        164,
        20
    ], [
        37,
        165,
        15
    ], [
        37,
        166,
        16
    ], [
        37,
        167,
        15
    ], [
        37,
        168,
        22
    ], [
        37,
        169,
        20
    ], [
        37,
        170,
        18
    ], [
        37,
        171,
        29
    ], [
        37,
        172,
        16
    ], [
        37,
        173,
        19
    ], [
        37,
        174,
        14
    ], [
        37,
        175,
        17
    ], [
        37,
        176,
        17
    ], [
        37,
        177,
        30
    ], [
        37,
        178,
        14
    ], [
        37,
        179,
        15
    ], [
        37,
        180,
        23
    ], [
        37,
        181,
        16
    ], [
        37,
        182,
        19
    ], [
        38,
        1,
        15
    ], [
        38,
        2,
        22
    ], [
        38,
        3,
        37
    ], [
        38,
        4,
        44
    ], [
        38,
        5,
        32
    ], [
        38,
        6,
        51
    ], [
        38,
        7,
        38
    ], [
        38,
        8,
        50
    ], [
        38,
        9,
        31
    ], [
        38,
        10,
        48
    ], [
        38,
        11,
        24
    ], [
        38,
        12,
        34
    ], [
        38,
        13,
        36
    ], [
        38,
        14,
        22
    ], [
        38,
        15,
        35
    ], [
        38,
        16,
        32
    ], [
        38,
        17,
        44
    ], [
        38,
        18,
        36
    ], [
        38,
        19,
        20
    ], [
        38,
        20,
        33
    ], [
        38,
        21,
        30
    ], [
        38,
        22,
        93
    ], [
        38,
        23,
        60
    ], [
        38,
        24,
        137
    ], [
        38,
        25,
        33
    ], [
        38,
        26,
        122
    ], [
        38,
        27,
        70
    ], [
        38,
        28,
        66
    ], [
        38,
        29,
        50
    ], [
        38,
        30,
        33
    ], [
        38,
        31,
        29
    ], [
        38,
        32,
        42
    ], [
        38,
        33,
        30
    ], [
        38,
        34,
        39
    ], [
        38,
        35,
        49
    ], [
        38,
        36,
        33
    ], [
        38,
        37,
        20
    ], [
        38,
        38,
        21
    ], [
        38,
        39,
        28
    ], [
        38,
        40,
        22
    ], [
        38,
        41,
        46
    ], [
        38,
        42,
        26
    ], [
        38,
        43,
        46
    ], [
        38,
        44,
        54
    ], [
        38,
        45,
        48
    ], [
        38,
        46,
        26
    ], [
        38,
        47,
        28
    ], [
        38,
        48,
        38
    ], [
        38,
        49,
        23
    ], [
        38,
        50,
        22
    ], [
        38,
        51,
        35
    ], [
        38,
        52,
        22
    ], [
        38,
        53,
        21
    ], [
        38,
        54,
        21
    ], [
        38,
        55,
        19
    ], [
        38,
        56,
        21
    ], [
        38,
        57,
        20
    ], [
        38,
        58,
        15
    ], [
        38,
        59,
        38
    ], [
        38,
        60,
        45
    ], [
        38,
        61,
        40
    ], [
        38,
        62,
        38
    ], [
        38,
        63,
        30
    ], [
        38,
        64,
        21
    ], [
        38,
        65,
        40
    ], [
        38,
        66,
        37
    ], [
        38,
        67,
        11
    ], [
        38,
        68,
        13
    ], [
        38,
        69,
        33
    ], [
        38,
        70,
        27
    ], [
        38,
        71,
        32
    ], [
        38,
        72,
        36
    ], [
        38,
        73,
        22
    ], [
        38,
        74,
        28
    ], [
        38,
        75,
        54
    ], [
        38,
        76,
        34
    ], [
        38,
        77,
        20
    ], [
        38,
        78,
        23
    ], [
        38,
        79,
        24
    ], [
        38,
        80,
        17
    ], [
        38,
        81,
        18
    ], [
        38,
        82,
        23
    ], [
        38,
        83,
        20
    ], [
        38,
        84,
        17
    ], [
        38,
        85,
        31
    ], [
        38,
        86,
        36
    ], [
        38,
        87,
        18
    ], [
        38,
        88,
        17
    ], [
        39,
        1,
        29
    ], [
        39,
        2,
        45
    ], [
        39,
        3,
        126
    ], [
        39,
        4,
        63
    ], [
        39,
        5,
        105
    ], [
        39,
        6,
        138
    ], [
        39,
        7,
        126
    ], [
        39,
        8,
        122
    ], [
        39,
        9,
        105
    ], [
        39,
        10,
        95
    ], [
        39,
        11,
        31
    ], [
        39,
        12,
        23
    ], [
        39,
        13,
        29
    ], [
        39,
        14,
        21
    ], [
        39,
        15,
        85
    ], [
        39,
        16,
        61
    ], [
        39,
        17,
        60
    ], [
        39,
        18,
        67
    ], [
        39,
        19,
        38
    ], [
        39,
        20,
        80
    ], [
        39,
        21,
        120
    ], [
        39,
        22,
        77
    ], [
        39,
        23,
        132
    ], [
        39,
        24,
        61
    ], [
        39,
        25,
        40
    ], [
        39,
        26,
        59
    ], [
        39,
        27,
        44
    ], [
        39,
        28,
        28
    ], [
        39,
        29,
        81
    ], [
        39,
        30,
        16
    ], [
        39,
        31,
        30
    ], [
        39,
        32,
        58
    ], [
        39,
        33,
        34
    ], [
        39,
        34,
        33
    ], [
        39,
        35,
        58
    ], [
        39,
        36,
        57
    ], [
        39,
        37,
        41
    ], [
        39,
        38,
        148
    ], [
        39,
        39,
        40
    ], [
        39,
        40,
        32
    ], [
        39,
        41,
        77
    ], [
        39,
        42,
        107
    ], [
        39,
        43,
        54
    ], [
        39,
        44,
        48
    ], [
        39,
        45,
        76
    ], [
        39,
        46,
        76
    ], [
        39,
        47,
        97
    ], [
        39,
        48,
        43
    ], [
        39,
        49,
        83
    ], [
        39,
        50,
        43
    ], [
        39,
        51,
        68
    ], [
        39,
        52,
        59
    ], [
        39,
        53,
        85
    ], [
        39,
        54,
        52
    ], [
        39,
        55,
        64
    ], [
        39,
        56,
        51
    ], [
        39,
        57,
        32
    ], [
        39,
        58,
        42
    ], [
        39,
        59,
        45
    ], [
        39,
        60,
        65
    ], [
        39,
        61,
        50
    ], [
        39,
        62,
        28
    ], [
        39,
        63,
        57
    ], [
        39,
        64,
        34
    ], [
        39,
        65,
        62
    ], [
        39,
        66,
        24
    ], [
        39,
        67,
        86
    ], [
        39,
        68,
        77
    ], [
        39,
        69,
        74
    ], [
        39,
        70,
        32
    ], [
        39,
        71,
        151
    ], [
        39,
        72,
        45
    ], [
        39,
        73,
        94
    ], [
        39,
        74,
        73
    ], [
        39,
        75,
        77
    ], [
        40,
        1,
        2
    ], [
        40,
        2,
        29
    ], [
        40,
        3,
        56
    ], [
        40,
        4,
        52
    ], [
        40,
        5,
        98
    ], [
        40,
        6,
        42
    ], [
        40,
        7,
        128
    ], [
        40,
        8,
        76
    ], [
        40,
        9,
        53
    ], [
        40,
        10,
        67
    ], [
        40,
        11,
        65
    ], [
        40,
        12,
        62
    ], [
        40,
        13,
        53
    ], [
        40,
        14,
        37
    ], [
        40,
        15,
        63
    ], [
        40,
        16,
        59
    ], [
        40,
        17,
        47
    ], [
        40,
        18,
        67
    ], [
        40,
        19,
        28
    ], [
        40,
        20,
        62
    ], [
        40,
        21,
        119
    ], [
        40,
        22,
        63
    ], [
        40,
        23,
        31
    ], [
        40,
        24,
        34
    ], [
        40,
        25,
        87
    ], [
        40,
        26,
        69
    ], [
        40,
        27,
        48
    ], [
        40,
        28,
        146
    ], [
        40,
        29,
        101
    ], [
        40,
        30,
        41
    ], [
        40,
        31,
        55
    ], [
        40,
        32,
        27
    ], [
        40,
        33,
        52
    ], [
        40,
        34,
        105
    ], [
        40,
        35,
        93
    ], [
        40,
        36,
        40
    ], [
        40,
        37,
        94
    ], [
        40,
        38,
        37
    ], [
        40,
        39,
        48
    ], [
        40,
        40,
        88
    ], [
        40,
        41,
        41
    ], [
        40,
        42,
        61
    ], [
        40,
        43,
        86
    ], [
        40,
        44,
        50
    ], [
        40,
        45,
        42
    ], [
        40,
        46,
        61
    ], [
        40,
        47,
        82
    ], [
        40,
        48,
        45
    ], [
        40,
        49,
        53
    ], [
        40,
        50,
        73
    ], [
        40,
        51,
        53
    ], [
        40,
        52,
        46
    ], [
        40,
        53,
        41
    ], [
        40,
        54,
        20
    ], [
        40,
        55,
        53
    ], [
        40,
        56,
        93
    ], [
        40,
        57,
        53
    ], [
        40,
        58,
        69
    ], [
        40,
        59,
        43
    ], [
        40,
        60,
        62
    ], [
        40,
        61,
        82
    ], [
        40,
        62,
        41
    ], [
        40,
        63,
        33
    ], [
        40,
        64,
        98
    ], [
        40,
        65,
        53
    ], [
        40,
        66,
        76
    ], [
        40,
        67,
        118
    ], [
        40,
        68,
        44
    ], [
        40,
        69,
        39
    ], [
        40,
        70,
        44
    ], [
        40,
        71,
        32
    ], [
        40,
        72,
        23
    ], [
        40,
        73,
        23
    ], [
        40,
        74,
        60
    ], [
        40,
        75,
        46
    ], [
        40,
        76,
        42
    ], [
        40,
        77,
        58
    ], [
        40,
        78,
        123
    ], [
        40,
        79,
        43
    ], [
        40,
        80,
        59
    ], [
        40,
        81,
        28
    ], [
        40,
        82,
        104
    ], [
        40,
        83,
        67
    ], [
        40,
        84,
        51
    ], [
        40,
        85,
        70
    ], [
        41,
        1,
        2
    ], [
        41,
        2,
        19
    ], [
        41,
        3,
        33
    ], [
        41,
        4,
        33
    ], [
        41,
        5,
        75
    ], [
        41,
        6,
        74
    ], [
        41,
        7,
        36
    ], [
        41,
        8,
        40
    ], [
        41,
        9,
        62
    ], [
        41,
        10,
        67
    ], [
        41,
        11,
        67
    ], [
        41,
        12,
        89
    ], [
        41,
        13,
        40
    ], [
        41,
        14,
        94
    ], [
        41,
        15,
        102
    ], [
        41,
        16,
        89
    ], [
        41,
        17,
        74
    ], [
        41,
        18,
        27
    ], [
        41,
        19,
        34
    ], [
        41,
        20,
        56
    ], [
        41,
        21,
        78
    ], [
        41,
        22,
        84
    ], [
        41,
        23,
        46
    ], [
        41,
        24,
        48
    ], [
        41,
        25,
        99
    ], [
        41,
        26,
        52
    ], [
        41,
        27,
        55
    ], [
        41,
        28,
        61
    ], [
        41,
        29,
        79
    ], [
        41,
        30,
        93
    ], [
        41,
        31,
        70
    ], [
        41,
        32,
        14
    ], [
        41,
        33,
        51
    ], [
        41,
        34,
        71
    ], [
        41,
        35,
        42
    ], [
        41,
        36,
        50
    ], [
        41,
        37,
        88
    ], [
        41,
        38,
        55
    ], [
        41,
        39,
        91
    ], [
        41,
        40,
        101
    ], [
        41,
        41,
        39
    ], [
        41,
        42,
        46
    ], [
        41,
        43,
        53
    ], [
        41,
        44,
        129
    ], [
        41,
        45,
        72
    ], [
        41,
        46,
        46
    ], [
        41,
        47,
        107
    ], [
        41,
        48,
        40
    ], [
        41,
        49,
        43
    ], [
        41,
        50,
        130
    ], [
        41,
        51,
        56
    ], [
        41,
        52,
        51
    ], [
        41,
        53,
        73
    ], [
        41,
        54,
        39
    ], [
        42,
        1,
        2
    ], [
        42,
        2,
        3
    ], [
        42,
        3,
        43
    ], [
        42,
        4,
        38
    ], [
        42,
        5,
        90
    ], [
        42,
        6,
        53
    ], [
        42,
        7,
        90
    ], [
        42,
        8,
        71
    ], [
        42,
        9,
        60
    ], [
        42,
        10,
        59
    ], [
        42,
        11,
        89
    ], [
        42,
        12,
        56
    ], [
        42,
        13,
        152
    ], [
        42,
        14,
        114
    ], [
        42,
        15,
        149
    ], [
        42,
        16,
        71
    ], [
        42,
        17,
        52
    ], [
        42,
        18,
        96
    ], [
        42,
        19,
        38
    ], [
        42,
        20,
        75
    ], [
        42,
        21,
        84
    ], [
        42,
        22,
        107
    ], [
        42,
        23,
        118
    ], [
        42,
        24,
        91
    ], [
        42,
        25,
        51
    ], [
        42,
        26,
        64
    ], [
        42,
        27,
        68
    ], [
        42,
        28,
        52
    ], [
        42,
        29,
        63
    ], [
        42,
        30,
        41
    ], [
        42,
        31,
        48
    ], [
        42,
        32,
        29
    ], [
        42,
        33,
        55
    ], [
        42,
        34,
        26
    ], [
        42,
        35,
        36
    ], [
        42,
        36,
        74
    ], [
        42,
        37,
        50
    ], [
        42,
        38,
        64
    ], [
        42,
        39,
        29
    ], [
        42,
        40,
        57
    ], [
        42,
        41,
        35
    ], [
        42,
        42,
        66
    ], [
        42,
        43,
        28
    ], [
        42,
        44,
        72
    ], [
        42,
        45,
        123
    ], [
        42,
        46,
        56
    ], [
        42,
        47,
        68
    ], [
        42,
        48,
        115
    ], [
        42,
        49,
        62
    ], [
        42,
        50,
        47
    ], [
        42,
        51,
        77
    ], [
        42,
        52,
        109
    ], [
        42,
        53,
        56
    ], [
        43,
        1,
        2
    ], [
        43,
        2,
        13
    ], [
        43,
        3,
        30
    ], [
        43,
        4,
        27
    ], [
        43,
        5,
        35
    ], [
        43,
        6,
        23
    ], [
        43,
        7,
        32
    ], [
        43,
        8,
        32
    ], [
        43,
        9,
        52
    ], [
        43,
        10,
        45
    ], [
        43,
        11,
        50
    ], [
        43,
        12,
        49
    ], [
        43,
        13,
        84
    ], [
        43,
        14,
        19
    ], [
        43,
        15,
        37
    ], [
        43,
        16,
        31
    ], [
        43,
        17,
        46
    ], [
        43,
        18,
        34
    ], [
        43,
        19,
        66
    ], [
        43,
        20,
        53
    ], [
        43,
        21,
        33
    ], [
        43,
        22,
        46
    ], [
        43,
        23,
        83
    ], [
        43,
        24,
        60
    ], [
        43,
        25,
        36
    ], [
        43,
        26,
        40
    ], [
        43,
        27,
        22
    ], [
        43,
        28,
        32
    ], [
        43,
        29,
        39
    ], [
        43,
        30,
        36
    ], [
        43,
        31,
        42
    ], [
        43,
        32,
        111
    ], [
        43,
        33,
        77
    ], [
        43,
        34,
        30
    ], [
        43,
        35,
        53
    ], [
        43,
        36,
        38
    ], [
        43,
        37,
        38
    ], [
        43,
        38,
        49
    ], [
        43,
        39,
        40
    ], [
        43,
        40,
        40
    ], [
        43,
        41,
        26
    ], [
        43,
        42,
        34
    ], [
        43,
        43,
        36
    ], [
        43,
        44,
        26
    ], [
        43,
        45,
        53
    ], [
        43,
        46,
        55
    ], [
        43,
        47,
        31
    ], [
        43,
        48,
        55
    ], [
        43,
        49,
        47
    ], [
        43,
        50,
        30
    ], [
        43,
        51,
        67
    ], [
        43,
        52,
        34
    ], [
        43,
        53,
        46
    ], [
        43,
        54,
        36
    ], [
        43,
        55,
        36
    ], [
        43,
        56,
        24
    ], [
        43,
        57,
        33
    ], [
        43,
        58,
        48
    ], [
        43,
        59,
        42
    ], [
        43,
        60,
        36
    ], [
        43,
        61,
        45
    ], [
        43,
        62,
        29
    ], [
        43,
        63,
        79
    ], [
        43,
        64,
        36
    ], [
        43,
        65,
        47
    ], [
        43,
        66,
        40
    ], [
        43,
        67,
        34
    ], [
        43,
        68,
        34
    ], [
        43,
        69,
        29
    ], [
        43,
        70,
        29
    ], [
        43,
        71,
        69
    ], [
        43,
        72,
        35
    ], [
        43,
        73,
        27
    ], [
        43,
        74,
        26
    ], [
        43,
        75,
        22
    ], [
        43,
        76,
        29
    ], [
        43,
        77,
        37
    ], [
        43,
        78,
        34
    ], [
        43,
        79,
        22
    ], [
        43,
        80,
        48
    ], [
        43,
        81,
        31
    ], [
        43,
        82,
        36
    ], [
        43,
        83,
        42
    ], [
        43,
        84,
        44
    ], [
        43,
        85,
        63
    ], [
        43,
        86,
        52
    ], [
        43,
        87,
        37
    ], [
        43,
        88,
        27
    ], [
        43,
        89,
        26
    ], [
        44,
        1,
        2
    ], [
        44,
        2,
        13
    ], [
        44,
        3,
        34
    ], [
        44,
        4,
        17
    ], [
        44,
        5,
        23
    ], [
        44,
        6,
        26
    ], [
        44,
        7,
        37
    ], [
        44,
        8,
        39
    ], [
        44,
        9,
        14
    ], [
        44,
        10,
        28
    ], [
        44,
        11,
        20
    ], [
        44,
        12,
        26
    ], [
        44,
        13,
        28
    ], [
        44,
        14,
        25
    ], [
        44,
        15,
        29
    ], [
        44,
        16,
        29
    ], [
        44,
        17,
        35
    ], [
        44,
        18,
        31
    ], [
        44,
        19,
        35
    ], [
        44,
        20,
        24
    ], [
        44,
        21,
        21
    ], [
        44,
        22,
        23
    ], [
        44,
        23,
        24
    ], [
        44,
        24,
        27
    ], [
        44,
        25,
        18
    ], [
        44,
        26,
        14
    ], [
        44,
        27,
        20
    ], [
        44,
        28,
        22
    ], [
        44,
        29,
        37
    ], [
        44,
        30,
        33
    ], [
        44,
        31,
        28
    ], [
        44,
        32,
        29
    ], [
        44,
        33,
        29
    ], [
        44,
        34,
        14
    ], [
        44,
        35,
        32
    ], [
        44,
        36,
        24
    ], [
        44,
        37,
        50
    ], [
        44,
        38,
        37
    ], [
        44,
        39,
        36
    ], [
        44,
        40,
        23
    ], [
        44,
        41,
        34
    ], [
        44,
        42,
        29
    ], [
        44,
        43,
        12
    ], [
        44,
        44,
        10
    ], [
        44,
        45,
        18
    ], [
        44,
        46,
        10
    ], [
        44,
        47,
        24
    ], [
        44,
        48,
        25
    ], [
        44,
        49,
        20
    ], [
        44,
        50,
        19
    ], [
        44,
        51,
        19
    ], [
        44,
        52,
        11
    ], [
        44,
        53,
        27
    ], [
        44,
        54,
        19
    ], [
        44,
        55,
        22
    ], [
        44,
        56,
        48
    ], [
        44,
        57,
        25
    ], [
        44,
        58,
        29
    ], [
        44,
        59,
        17
    ], [
        45,
        1,
        2
    ], [
        45,
        2,
        29
    ], [
        45,
        3,
        31
    ], [
        45,
        4,
        34
    ], [
        45,
        5,
        89
    ], [
        45,
        6,
        53
    ], [
        45,
        7,
        14
    ], [
        45,
        8,
        57
    ], [
        45,
        9,
        45
    ], [
        45,
        10,
        72
    ], [
        45,
        11,
        42
    ], [
        45,
        12,
        63
    ], [
        45,
        13,
        60
    ], [
        45,
        14,
        61
    ], [
        45,
        15,
        44
    ], [
        45,
        16,
        74
    ], [
        45,
        17,
        102
    ], [
        45,
        18,
        55
    ], [
        45,
        19,
        64
    ], [
        45,
        20,
        32
    ], [
        45,
        21,
        85
    ], [
        45,
        22,
        56
    ], [
        45,
        23,
        94
    ], [
        45,
        24,
        78
    ], [
        45,
        25,
        68
    ], [
        45,
        26,
        70
    ], [
        45,
        27,
        52
    ], [
        45,
        28,
        54
    ], [
        45,
        29,
        47
    ], [
        45,
        30,
        62
    ], [
        45,
        31,
        59
    ], [
        45,
        32,
        78
    ], [
        45,
        33,
        43
    ], [
        45,
        34,
        61
    ], [
        45,
        35,
        76
    ], [
        45,
        36,
        37
    ], [
        45,
        37,
        42
    ], [
        46,
        1,
        2
    ], [
        46,
        2,
        29
    ], [
        46,
        3,
        72
    ], [
        46,
        4,
        106
    ], [
        46,
        5,
        64
    ], [
        46,
        6,
        45
    ], [
        46,
        7,
        59
    ], [
        46,
        8,
        99
    ], [
        46,
        9,
        74
    ], [
        46,
        10,
        95
    ], [
        46,
        11,
        76
    ], [
        46,
        12,
        75
    ], [
        46,
        13,
        52
    ], [
        46,
        14,
        43
    ], [
        46,
        15,
        193
    ], [
        46,
        16,
        81
    ], [
        46,
        17,
        113
    ], [
        46,
        18,
        66
    ], [
        46,
        19,
        43
    ], [
        46,
        20,
        129
    ], [
        46,
        21,
        95
    ], [
        46,
        22,
        54
    ], [
        46,
        23,
        55
    ], [
        46,
        24,
        75
    ], [
        46,
        25,
        60
    ], [
        46,
        26,
        138
    ], [
        46,
        27,
        47
    ], [
        46,
        28,
        73
    ], [
        46,
        29,
        80
    ], [
        46,
        30,
        78
    ], [
        46,
        31,
        60
    ], [
        46,
        32,
        65
    ], [
        46,
        33,
        85
    ], [
        46,
        34,
        79
    ], [
        46,
        35,
        107
    ], [
        47,
        1,
        35
    ], [
        47,
        2,
        81
    ], [
        47,
        3,
        81
    ], [
        47,
        4,
        167
    ], [
        47,
        5,
        17
    ], [
        47,
        6,
        20
    ], [
        47,
        7,
        46
    ], [
        47,
        8,
        30
    ], [
        47,
        9,
        35
    ], [
        47,
        10,
        75
    ], [
        47,
        11,
        44
    ], [
        47,
        12,
        108
    ], [
        47,
        13,
        54
    ], [
        47,
        14,
        48
    ], [
        47,
        15,
        172
    ], [
        47,
        16,
        104
    ], [
        47,
        17,
        32
    ], [
        47,
        18,
        65
    ], [
        47,
        19,
        73
    ], [
        47,
        20,
        117
    ], [
        47,
        21,
        48
    ], [
        47,
        22,
        45
    ], [
        47,
        23,
        37
    ], [
        47,
        24,
        33
    ], [
        47,
        25,
        63
    ], [
        47,
        26,
        65
    ], [
        47,
        27,
        41
    ], [
        47,
        28,
        48
    ], [
        47,
        29,
        40
    ], [
        47,
        30,
        66
    ], [
        47,
        31,
        50
    ], [
        47,
        32,
        86
    ], [
        47,
        33,
        55
    ], [
        47,
        34,
        55
    ], [
        47,
        35,
        58
    ], [
        47,
        36,
        65
    ], [
        47,
        37,
        35
    ], [
        47,
        38,
        129
    ], [
        48,
        1,
        19
    ], [
        48,
        2,
        61
    ], [
        48,
        3,
        19
    ], [
        48,
        4,
        94
    ], [
        48,
        5,
        93
    ], [
        48,
        6,
        116
    ], [
        48,
        7,
        40
    ], [
        48,
        8,
        27
    ], [
        48,
        9,
        49
    ], [
        48,
        10,
        105
    ], [
        48,
        11,
        151
    ], [
        48,
        12,
        85
    ], [
        48,
        13,
        43
    ], [
        48,
        14,
        61
    ], [
        48,
        15,
        141
    ], [
        48,
        16,
        124
    ], [
        48,
        17,
        110
    ], [
        48,
        18,
        86
    ], [
        48,
        19,
        37
    ], [
        48,
        20,
        89
    ], [
        48,
        21,
        52
    ], [
        48,
        22,
        52
    ], [
        48,
        23,
        41
    ], [
        48,
        24,
        77
    ], [
        48,
        25,
        179
    ], [
        48,
        26,
        130
    ], [
        48,
        27,
        120
    ], [
        48,
        28,
        60
    ], [
        48,
        29,
        249
    ], [
        49,
        1,
        64
    ], [
        49,
        2,
        98
    ], [
        49,
        3,
        77
    ], [
        49,
        4,
        41
    ], [
        49,
        5,
        48
    ], [
        49,
        6,
        79
    ], [
        49,
        7,
        127
    ], [
        49,
        8,
        28
    ], [
        49,
        9,
        144
    ], [
        49,
        10,
        53
    ], [
        49,
        11,
        159
    ], [
        49,
        12,
        129
    ], [
        49,
        13,
        93
    ], [
        49,
        14,
        116
    ], [
        49,
        15,
        91
    ], [
        49,
        16,
        65
    ], [
        49,
        17,
        76
    ], [
        49,
        18,
        45
    ], [
        50,
        1,
        14
    ], [
        50,
        2,
        44
    ], [
        50,
        3,
        27
    ], [
        50,
        4,
        36
    ], [
        50,
        5,
        32
    ], [
        50,
        6,
        53
    ], [
        50,
        7,
        51
    ], [
        50,
        8,
        20
    ], [
        50,
        9,
        45
    ], [
        50,
        10,
        22
    ], [
        50,
        11,
        37
    ], [
        50,
        12,
        30
    ], [
        50,
        13,
        19
    ], [
        50,
        14,
        36
    ], [
        50,
        15,
        36
    ], [
        50,
        16,
        57
    ], [
        50,
        17,
        37
    ], [
        50,
        18,
        26
    ], [
        50,
        19,
        34
    ], [
        50,
        20,
        23
    ], [
        50,
        21,
        23
    ], [
        50,
        22,
        45
    ], [
        50,
        23,
        21
    ], [
        50,
        24,
        21
    ], [
        50,
        25,
        17
    ], [
        50,
        26,
        41
    ], [
        50,
        27,
        37
    ], [
        50,
        28,
        34
    ], [
        50,
        29,
        31
    ], [
        50,
        30,
        33
    ], [
        50,
        31,
        25
    ], [
        50,
        32,
        22
    ], [
        50,
        33,
        29
    ], [
        50,
        34,
        24
    ], [
        50,
        35,
        25
    ], [
        50,
        36,
        54
    ], [
        50,
        37,
        41
    ], [
        50,
        38,
        54
    ], [
        50,
        39,
        49
    ], [
        50,
        40,
        25
    ], [
        50,
        41,
        29
    ], [
        50,
        42,
        32
    ], [
        50,
        43,
        27
    ], [
        50,
        44,
        36
    ], [
        50,
        45,
        53
    ], [
        51,
        1,
        13
    ], [
        51,
        2,
        13
    ], [
        51,
        3,
        13
    ], [
        51,
        4,
        13
    ], [
        51,
        5,
        15
    ], [
        51,
        6,
        13
    ], [
        51,
        7,
        15
    ], [
        51,
        8,
        15
    ], [
        51,
        9,
        12
    ], [
        51,
        10,
        11
    ], [
        51,
        11,
        18
    ], [
        51,
        12,
        18
    ], [
        51,
        13,
        19
    ], [
        51,
        14,
        32
    ], [
        51,
        15,
        20
    ], [
        51,
        16,
        37
    ], [
        51,
        17,
        25
    ], [
        51,
        18,
        19
    ], [
        51,
        19,
        26
    ], [
        51,
        20,
        20
    ], [
        51,
        21,
        19
    ], [
        51,
        22,
        23
    ], [
        51,
        23,
        37
    ], [
        51,
        24,
        28
    ], [
        51,
        25,
        38
    ], [
        51,
        26,
        23
    ], [
        51,
        27,
        22
    ], [
        51,
        28,
        38
    ], [
        51,
        29,
        39
    ], [
        51,
        30,
        32
    ], [
        51,
        31,
        23
    ], [
        51,
        32,
        26
    ], [
        51,
        33,
        20
    ], [
        51,
        34,
        19
    ], [
        51,
        35,
        26
    ], [
        51,
        36,
        28
    ], [
        51,
        37,
        36
    ], [
        51,
        38,
        34
    ], [
        51,
        39,
        25
    ], [
        51,
        40,
        34
    ], [
        51,
        41,
        30
    ], [
        51,
        42,
        32
    ], [
        51,
        43,
        27
    ], [
        51,
        44,
        37
    ], [
        51,
        45,
        32
    ], [
        51,
        46,
        31
    ], [
        51,
        47,
        29
    ], [
        51,
        48,
        25
    ], [
        51,
        49,
        29
    ], [
        51,
        50,
        29
    ], [
        51,
        51,
        39
    ], [
        51,
        52,
        46
    ], [
        51,
        53,
        21
    ], [
        51,
        54,
        19
    ], [
        51,
        55,
        25
    ], [
        51,
        56,
        27
    ], [
        51,
        57,
        30
    ], [
        51,
        58,
        27
    ], [
        51,
        59,
        43
    ], [
        51,
        60,
        31
    ], [
        52,
        1,
        6
    ], [
        52,
        2,
        10
    ], [
        52,
        3,
        9
    ], [
        52,
        4,
        13
    ], [
        52,
        5,
        13
    ], [
        52,
        6,
        13
    ], [
        52,
        7,
        14
    ], [
        52,
        8,
        10
    ], [
        52,
        9,
        17
    ], [
        52,
        10,
        15
    ], [
        52,
        11,
        17
    ], [
        52,
        12,
        18
    ], [
        52,
        13,
        21
    ], [
        52,
        14,
        25
    ], [
        52,
        15,
        22
    ], [
        52,
        16,
        53
    ], [
        52,
        17,
        20
    ], [
        52,
        18,
        38
    ], [
        52,
        19,
        29
    ], [
        52,
        20,
        33
    ], [
        52,
        21,
        84
    ], [
        52,
        22,
        28
    ], [
        52,
        23,
        33
    ], [
        52,
        24,
        32
    ], [
        52,
        25,
        24
    ], [
        52,
        26,
        27
    ], [
        52,
        27,
        28
    ], [
        52,
        28,
        31
    ], [
        52,
        29,
        31
    ], [
        52,
        30,
        28
    ], [
        52,
        31,
        27
    ], [
        52,
        32,
        31
    ], [
        52,
        33,
        23
    ], [
        52,
        34,
        29
    ], [
        52,
        35,
        27
    ], [
        52,
        36,
        31
    ], [
        52,
        37,
        28
    ], [
        52,
        38,
        40
    ], [
        52,
        39,
        20
    ], [
        52,
        40,
        27
    ], [
        52,
        41,
        21
    ], [
        52,
        42,
        33
    ], [
        52,
        43,
        33
    ], [
        52,
        44,
        39
    ], [
        52,
        45,
        32
    ], [
        52,
        46,
        33
    ], [
        52,
        47,
        42
    ], [
        52,
        48,
        41
    ], [
        52,
        49,
        25
    ], [
        53,
        1,
        12
    ], [
        53,
        2,
        16
    ], [
        53,
        3,
        14
    ], [
        53,
        4,
        14
    ], [
        53,
        5,
        13
    ], [
        53,
        6,
        11
    ], [
        53,
        7,
        15
    ], [
        53,
        8,
        10
    ], [
        53,
        9,
        18
    ], [
        53,
        10,
        18
    ], [
        53,
        11,
        16
    ], [
        53,
        12,
        17
    ], [
        53,
        13,
        15
    ], [
        53,
        14,
        14
    ], [
        53,
        15,
        14
    ], [
        53,
        16,
        18
    ], [
        53,
        17,
        16
    ], [
        53,
        18,
        21
    ], [
        53,
        19,
        18
    ], [
        53,
        20,
        18
    ], [
        53,
        21,
        18
    ], [
        53,
        22,
        14
    ], [
        53,
        23,
        99
    ], [
        53,
        24,
        15
    ], [
        53,
        25,
        17
    ], [
        53,
        26,
        65
    ], [
        53,
        27,
        47
    ], [
        53,
        28,
        51
    ], [
        53,
        29,
        41
    ], [
        53,
        30,
        54
    ], [
        53,
        31,
        73
    ], [
        53,
        32,
        129
    ], [
        53,
        33,
        14
    ], [
        53,
        34,
        15
    ], [
        53,
        35,
        19
    ], [
        53,
        36,
        20
    ], [
        53,
        37,
        15
    ], [
        53,
        38,
        18
    ], [
        53,
        39,
        21
    ], [
        53,
        40,
        13
    ], [
        53,
        41,
        19
    ], [
        53,
        42,
        16
    ], [
        53,
        43,
        15
    ], [
        53,
        44,
        15
    ], [
        53,
        45,
        26
    ], [
        53,
        46,
        13
    ], [
        53,
        47,
        19
    ], [
        53,
        48,
        15
    ], [
        53,
        49,
        14
    ], [
        53,
        50,
        18
    ], [
        53,
        51,
        12
    ], [
        53,
        52,
        32
    ], [
        53,
        53,
        13
    ], [
        53,
        54,
        11
    ], [
        53,
        55,
        17
    ], [
        53,
        56,
        20
    ], [
        53,
        57,
        10
    ], [
        53,
        58,
        20
    ], [
        53,
        59,
        19
    ], [
        53,
        60,
        15
    ], [
        53,
        61,
        11
    ], [
        53,
        62,
        17
    ], [
        54,
        1,
        22
    ], [
        54,
        2,
        31
    ], [
        54,
        3,
        31
    ], [
        54,
        4,
        28
    ], [
        54,
        5,
        20
    ], [
        54,
        6,
        28
    ], [
        54,
        7,
        40
    ], [
        54,
        8,
        35
    ], [
        54,
        9,
        43
    ], [
        54,
        10,
        21
    ], [
        54,
        11,
        26
    ], [
        54,
        12,
        38
    ], [
        54,
        13,
        22
    ], [
        54,
        14,
        24
    ], [
        54,
        15,
        23
    ], [
        54,
        16,
        16
    ], [
        54,
        17,
        29
    ], [
        54,
        18,
        23
    ], [
        54,
        19,
        36
    ], [
        54,
        20,
        27
    ], [
        54,
        21,
        16
    ], [
        54,
        22,
        29
    ], [
        54,
        23,
        14
    ], [
        54,
        24,
        41
    ], [
        54,
        25,
        32
    ], [
        54,
        26,
        23
    ], [
        54,
        27,
        35
    ], [
        54,
        28,
        32
    ], [
        54,
        29,
        22
    ], [
        54,
        30,
        16
    ], [
        54,
        31,
        41
    ], [
        54,
        32,
        29
    ], [
        54,
        33,
        16
    ], [
        54,
        34,
        38
    ], [
        54,
        35,
        24
    ], [
        54,
        36,
        29
    ], [
        54,
        37,
        43
    ], [
        54,
        38,
        22
    ], [
        54,
        39,
        15
    ], [
        54,
        40,
        29
    ], [
        54,
        41,
        19
    ], [
        54,
        42,
        36
    ], [
        54,
        43,
        35
    ], [
        54,
        44,
        20
    ], [
        54,
        45,
        21
    ], [
        54,
        46,
        29
    ], [
        54,
        47,
        20
    ], [
        54,
        48,
        35
    ], [
        54,
        49,
        18
    ], [
        54,
        50,
        26
    ], [
        54,
        51,
        26
    ], [
        54,
        52,
        18
    ], [
        54,
        53,
        17
    ], [
        54,
        54,
        19
    ], [
        54,
        55,
        21
    ], [
        55,
        1,
        6
    ], [
        55,
        2,
        9
    ], [
        55,
        3,
        10
    ], [
        55,
        4,
        10
    ], [
        55,
        5,
        17
    ], [
        55,
        6,
        18
    ], [
        55,
        7,
        23
    ], [
        55,
        8,
        17
    ], [
        55,
        9,
        34
    ], [
        55,
        10,
        17
    ], [
        55,
        11,
        25
    ], [
        55,
        12,
        20
    ], [
        55,
        13,
        19
    ], [
        55,
        14,
        24
    ], [
        55,
        15,
        20
    ], [
        55,
        16,
        19
    ], [
        55,
        17,
        21
    ], [
        55,
        18,
        19
    ], [
        55,
        19,
        17
    ], [
        55,
        20,
        18
    ], [
        55,
        21,
        19
    ], [
        55,
        22,
        23
    ], [
        55,
        23,
        19
    ], [
        55,
        24,
        31
    ], [
        55,
        25,
        19
    ], [
        55,
        26,
        12
    ], [
        55,
        27,
        27
    ], [
        55,
        28,
        19
    ], [
        55,
        29,
        35
    ], [
        55,
        30,
        19
    ], [
        55,
        31,
        18
    ], [
        55,
        32,
        19
    ], [
        55,
        33,
        78
    ], [
        55,
        34,
        19
    ], [
        55,
        35,
        34
    ], [
        55,
        36,
        19
    ], [
        55,
        37,
        31
    ], [
        55,
        38,
        19
    ], [
        55,
        39,
        27
    ], [
        55,
        40,
        19
    ], [
        55,
        41,
        40
    ], [
        55,
        42,
        19
    ], [
        55,
        43,
        26
    ], [
        55,
        44,
        21
    ], [
        55,
        45,
        19
    ], [
        55,
        46,
        19
    ], [
        55,
        47,
        19
    ], [
        55,
        48,
        10
    ], [
        55,
        49,
        19
    ], [
        55,
        50,
        16
    ], [
        55,
        51,
        19
    ], [
        55,
        52,
        19
    ], [
        55,
        53,
        19
    ], [
        55,
        54,
        41
    ], [
        55,
        55,
        19
    ], [
        55,
        56,
        37
    ], [
        55,
        57,
        19
    ], [
        55,
        58,
        20
    ], [
        55,
        59,
        19
    ], [
        55,
        60,
        23
    ], [
        55,
        61,
        19
    ], [
        55,
        62,
        14
    ], [
        55,
        63,
        19
    ], [
        55,
        64,
        8
    ], [
        55,
        65,
        19
    ], [
        55,
        66,
        17
    ], [
        55,
        67,
        19
    ], [
        55,
        68,
        19
    ], [
        55,
        69,
        19
    ], [
        55,
        70,
        13
    ], [
        55,
        71,
        19
    ], [
        55,
        72,
        18
    ], [
        55,
        73,
        19
    ], [
        55,
        74,
        22
    ], [
        55,
        75,
        19
    ], [
        55,
        76,
        26
    ], [
        55,
        77,
        19
    ], [
        55,
        78,
        27
    ], [
        56,
        1,
        14
    ], [
        56,
        2,
        15
    ], [
        56,
        3,
        10
    ], [
        56,
        4,
        14
    ], [
        56,
        5,
        13
    ], [
        56,
        6,
        14
    ], [
        56,
        7,
        16
    ], [
        56,
        8,
        27
    ], [
        56,
        9,
        27
    ], [
        56,
        10,
        17
    ], [
        56,
        11,
        13
    ], [
        56,
        12,
        12
    ], [
        56,
        13,
        12
    ], [
        56,
        14,
        14
    ], [
        56,
        15,
        12
    ], [
        56,
        16,
        19
    ], [
        56,
        17,
        20
    ], [
        56,
        18,
        23
    ], [
        56,
        19,
        21
    ], [
        56,
        20,
        16
    ], [
        56,
        21,
        16
    ], [
        56,
        22,
        7
    ], [
        56,
        23,
        19
    ], [
        56,
        24,
        18
    ], [
        56,
        25,
        25
    ], [
        56,
        26,
        17
    ], [
        56,
        27,
        25
    ], [
        56,
        28,
        10
    ], [
        56,
        29,
        9
    ], [
        56,
        30,
        8
    ], [
        56,
        31,
        9
    ], [
        56,
        32,
        11
    ], [
        56,
        33,
        17
    ], [
        56,
        34,
        10
    ], [
        56,
        35,
        16
    ], [
        56,
        36,
        14
    ], [
        56,
        37,
        10
    ], [
        56,
        38,
        12
    ], [
        56,
        39,
        12
    ], [
        56,
        40,
        13
    ], [
        56,
        41,
        25
    ], [
        56,
        42,
        11
    ], [
        56,
        43,
        10
    ], [
        56,
        44,
        13
    ], [
        56,
        45,
        21
    ], [
        56,
        46,
        25
    ], [
        56,
        47,
        47
    ], [
        56,
        48,
        15
    ], [
        56,
        49,
        19
    ], [
        56,
        50,
        24
    ], [
        56,
        51,
        25
    ], [
        56,
        52,
        17
    ], [
        56,
        53,
        17
    ], [
        56,
        54,
        19
    ], [
        56,
        55,
        15
    ], [
        56,
        56,
        16
    ], [
        56,
        57,
        21
    ], [
        56,
        58,
        14
    ], [
        56,
        59,
        25
    ], [
        56,
        60,
        32
    ], [
        56,
        61,
        35
    ], [
        56,
        62,
        32
    ], [
        56,
        63,
        15
    ], [
        56,
        64,
        25
    ], [
        56,
        65,
        29
    ], [
        56,
        66,
        10
    ], [
        56,
        67,
        12
    ], [
        56,
        68,
        22
    ], [
        56,
        69,
        33
    ], [
        56,
        70,
        28
    ], [
        56,
        71,
        21
    ], [
        56,
        72,
        30
    ], [
        56,
        73,
        28
    ], [
        56,
        74,
        17
    ], [
        56,
        75,
        19
    ], [
        56,
        76,
        20
    ], [
        56,
        77,
        12
    ], [
        56,
        78,
        11
    ], [
        56,
        79,
        17
    ], [
        56,
        80,
        17
    ], [
        56,
        81,
        22
    ], [
        56,
        82,
        22
    ], [
        56,
        83,
        19
    ], [
        56,
        84,
        16
    ], [
        56,
        85,
        28
    ], [
        56,
        86,
        20
    ], [
        56,
        87,
        20
    ], [
        56,
        88,
        19
    ], [
        56,
        89,
        18
    ], [
        56,
        90,
        22
    ], [
        56,
        91,
        20
    ], [
        56,
        92,
        26
    ], [
        56,
        93,
        10
    ], [
        56,
        94,
        10
    ], [
        56,
        95,
        16
    ], [
        56,
        96,
        17
    ], [
        57,
        1,
        39
    ], [
        57,
        2,
        43
    ], [
        57,
        3,
        40
    ], [
        57,
        4,
        134
    ], [
        57,
        5,
        37
    ], [
        57,
        6,
        52
    ], [
        57,
        7,
        74
    ], [
        57,
        8,
        69
    ], [
        57,
        9,
        69
    ], [
        57,
        10,
        153
    ], [
        57,
        11,
        43
    ], [
        57,
        12,
        109
    ], [
        57,
        13,
        132
    ], [
        57,
        14,
        99
    ], [
        57,
        15,
        64
    ], [
        57,
        16,
        118
    ], [
        57,
        17,
        55
    ], [
        57,
        18,
        57
    ], [
        57,
        19,
        105
    ], [
        57,
        20,
        180
    ], [
        57,
        21,
        108
    ], [
        57,
        22,
        69
    ], [
        57,
        23,
        58
    ], [
        57,
        24,
        56
    ], [
        57,
        25,
        138
    ], [
        57,
        26,
        74
    ], [
        57,
        27,
        191
    ], [
        57,
        28,
        94
    ], [
        57,
        29,
        85
    ], [
        58,
        1,
        73
    ], [
        58,
        2,
        103
    ], [
        58,
        3,
        90
    ], [
        58,
        4,
        115
    ], [
        58,
        5,
        81
    ], [
        58,
        6,
        64
    ], [
        58,
        7,
        163
    ], [
        58,
        8,
        167
    ], [
        58,
        9,
        105
    ], [
        58,
        10,
        82
    ], [
        58,
        11,
        139
    ], [
        58,
        12,
        92
    ], [
        58,
        13,
        115
    ], [
        58,
        14,
        73
    ], [
        58,
        15,
        40
    ], [
        58,
        16,
        43
    ], [
        58,
        17,
        64
    ], [
        58,
        18,
        73
    ], [
        58,
        19,
        72
    ], [
        58,
        20,
        37
    ], [
        58,
        21,
        34
    ], [
        58,
        22,
        221
    ], [
        59,
        1,
        43
    ], [
        59,
        2,
        185
    ], [
        59,
        3,
        60
    ], [
        59,
        4,
        51
    ], [
        59,
        5,
        60
    ], [
        59,
        6,
        90
    ], [
        59,
        7,
        166
    ], [
        59,
        8,
        98
    ], [
        59,
        9,
        134
    ], [
        59,
        10,
        106
    ], [
        59,
        11,
        129
    ], [
        59,
        12,
        73
    ], [
        59,
        13,
        45
    ], [
        59,
        14,
        94
    ], [
        59,
        15,
        47
    ], [
        59,
        16,
        68
    ], [
        59,
        17,
        50
    ], [
        59,
        18,
        72
    ], [
        59,
        19,
        51
    ], [
        59,
        20,
        48
    ], [
        59,
        21,
        84
    ], [
        59,
        22,
        51
    ], [
        59,
        23,
        87
    ], [
        59,
        24,
        78
    ], [
        60,
        1,
        220
    ], [
        60,
        2,
        68
    ], [
        60,
        3,
        62
    ], [
        60,
        4,
        221
    ], [
        60,
        5,
        56
    ], [
        60,
        6,
        73
    ], [
        60,
        7,
        63
    ], [
        60,
        8,
        91
    ], [
        60,
        9,
        101
    ], [
        60,
        10,
        258
    ], [
        60,
        11,
        94
    ], [
        60,
        12,
        173
    ], [
        60,
        13,
        80
    ], [
        61,
        1,
        43
    ], [
        61,
        2,
        34
    ], [
        61,
        3,
        32
    ], [
        61,
        4,
        46
    ], [
        61,
        5,
        101
    ], [
        61,
        6,
        129
    ], [
        61,
        7,
        68
    ], [
        61,
        8,
        54
    ], [
        61,
        9,
        60
    ], [
        61,
        10,
        47
    ], [
        61,
        11,
        72
    ], [
        61,
        12,
        75
    ], [
        61,
        13,
        41
    ], [
        61,
        14,
        164
    ], [
        62,
        1,
        52
    ], [
        62,
        2,
        92
    ], [
        62,
        3,
        37
    ], [
        62,
        4,
        39
    ], [
        62,
        5,
        105
    ], [
        62,
        6,
        71
    ], [
        62,
        7,
        45
    ], [
        62,
        8,
        79
    ], [
        62,
        9,
        88
    ], [
        62,
        10,
        72
    ], [
        62,
        11,
        88
    ], [
        63,
        1,
        82
    ], [
        63,
        2,
        51
    ], [
        63,
        3,
        44
    ], [
        63,
        4,
        104
    ], [
        63,
        5,
        66
    ], [
        63,
        6,
        70
    ], [
        63,
        7,
        90
    ], [
        63,
        8,
        90
    ], [
        63,
        9,
        75
    ], [
        63,
        10,
        85
    ], [
        63,
        11,
        44
    ], [
        64,
        1,
        59
    ], [
        64,
        2,
        47
    ], [
        64,
        3,
        49
    ], [
        64,
        4,
        62
    ], [
        64,
        5,
        53
    ], [
        64,
        6,
        82
    ], [
        64,
        7,
        69
    ], [
        64,
        8,
        51
    ], [
        64,
        9,
        122
    ], [
        64,
        10,
        59
    ], [
        64,
        11,
        58
    ], [
        64,
        12,
        59
    ], [
        64,
        13,
        37
    ], [
        64,
        14,
        87
    ], [
        64,
        15,
        39
    ], [
        64,
        16,
        79
    ], [
        64,
        17,
        50
    ], [
        64,
        18,
        29
    ], [
        65,
        1,
        173
    ], [
        65,
        2,
        132
    ], [
        65,
        3,
        73
    ], [
        65,
        4,
        118
    ], [
        65,
        5,
        54
    ], [
        65,
        6,
        146
    ], [
        65,
        7,
        90
    ], [
        65,
        8,
        64
    ], [
        65,
        9,
        32
    ], [
        65,
        10,
        72
    ], [
        65,
        11,
        153
    ], [
        65,
        12,
        96
    ], [
        66,
        1,
        57
    ], [
        66,
        2,
        49
    ], [
        66,
        3,
        114
    ], [
        66,
        4,
        92
    ], [
        66,
        5,
        82
    ], [
        66,
        6,
        107
    ], [
        66,
        7,
        51
    ], [
        66,
        8,
        194
    ], [
        66,
        9,
        62
    ], [
        66,
        10,
        121
    ], [
        66,
        11,
        97
    ], [
        66,
        12,
        79
    ], [
        67,
        1,
        33
    ], [
        67,
        2,
        53
    ], [
        67,
        3,
        65
    ], [
        67,
        4,
        42
    ], [
        67,
        5,
        68
    ], [
        67,
        6,
        34
    ], [
        67,
        7,
        32
    ], [
        67,
        8,
        53
    ], [
        67,
        9,
        63
    ], [
        67,
        10,
        39
    ], [
        67,
        11,
        31
    ], [
        67,
        12,
        38
    ], [
        67,
        13,
        38
    ], [
        67,
        14,
        27
    ], [
        67,
        15,
        59
    ], [
        67,
        16,
        40
    ], [
        67,
        17,
        48
    ], [
        67,
        18,
        30
    ], [
        67,
        19,
        62
    ], [
        67,
        20,
        54
    ], [
        67,
        21,
        42
    ], [
        67,
        22,
        47
    ], [
        67,
        23,
        55
    ], [
        67,
        24,
        31
    ], [
        67,
        25,
        30
    ], [
        67,
        26,
        34
    ], [
        67,
        27,
        52
    ], [
        67,
        28,
        58
    ], [
        67,
        29,
        49
    ], [
        67,
        30,
        40
    ], [
        68,
        1,
        16
    ], [
        68,
        2,
        19
    ], [
        68,
        3,
        18
    ], [
        68,
        4,
        15
    ], [
        68,
        5,
        13
    ], [
        68,
        6,
        13
    ], [
        68,
        7,
        39
    ], [
        68,
        8,
        14
    ], [
        68,
        9,
        17
    ], [
        68,
        10,
        16
    ], [
        68,
        11,
        13
    ], [
        68,
        12,
        17
    ], [
        68,
        13,
        13
    ], [
        68,
        14,
        15
    ], [
        68,
        15,
        33
    ], [
        68,
        16,
        15
    ], [
        68,
        17,
        50
    ], [
        68,
        18,
        10
    ], [
        68,
        19,
        27
    ], [
        68,
        20,
        13
    ], [
        68,
        21,
        13
    ], [
        68,
        22,
        27
    ], [
        68,
        23,
        19
    ], [
        68,
        24,
        26
    ], [
        68,
        25,
        17
    ], [
        68,
        26,
        23
    ], [
        68,
        27,
        12
    ], [
        68,
        28,
        28
    ], [
        68,
        29,
        26
    ], [
        68,
        30,
        24
    ], [
        68,
        31,
        23
    ], [
        68,
        32,
        39
    ], [
        68,
        33,
        39
    ], [
        68,
        34,
        26
    ], [
        68,
        35,
        23
    ], [
        68,
        36,
        14
    ], [
        68,
        37,
        18
    ], [
        68,
        38,
        17
    ], [
        68,
        39,
        47
    ], [
        68,
        40,
        16
    ], [
        68,
        41,
        38
    ], [
        68,
        42,
        38
    ], [
        68,
        43,
        52
    ], [
        68,
        44,
        44
    ], [
        68,
        45,
        18
    ], [
        68,
        46,
        27
    ], [
        68,
        47,
        21
    ], [
        68,
        48,
        42
    ], [
        68,
        49,
        40
    ], [
        68,
        50,
        25
    ], [
        68,
        51,
        62
    ], [
        68,
        52,
        19
    ], [
        69,
        1,
        6
    ], [
        69,
        2,
        8
    ], [
        69,
        3,
        16
    ], [
        69,
        4,
        20
    ], [
        69,
        5,
        23
    ], [
        69,
        6,
        27
    ], [
        69,
        7,
        68
    ], [
        69,
        8,
        16
    ], [
        69,
        9,
        34
    ], [
        69,
        10,
        28
    ], [
        69,
        11,
        30
    ], [
        69,
        12,
        29
    ], [
        69,
        13,
        23
    ], [
        69,
        14,
        30
    ], [
        69,
        15,
        17
    ], [
        69,
        16,
        25
    ], [
        69,
        17,
        43
    ], [
        69,
        18,
        26
    ], [
        69,
        19,
        42
    ], [
        69,
        20,
        20
    ], [
        69,
        21,
        14
    ], [
        69,
        22,
        10
    ], [
        69,
        23,
        11
    ], [
        69,
        24,
        40
    ], [
        69,
        25,
        44
    ], [
        69,
        26,
        14
    ], [
        69,
        27,
        18
    ], [
        69,
        28,
        14
    ], [
        69,
        29,
        13
    ], [
        69,
        30,
        9
    ], [
        69,
        31,
        12
    ], [
        69,
        32,
        31
    ], [
        69,
        33,
        23
    ], [
        69,
        34,
        20
    ], [
        69,
        35,
        20
    ], [
        69,
        36,
        17
    ], [
        69,
        37,
        18
    ], [
        69,
        38,
        16
    ], [
        69,
        39,
        11
    ], [
        69,
        40,
        15
    ], [
        69,
        41,
        26
    ], [
        69,
        42,
        24
    ], [
        69,
        43,
        17
    ], [
        69,
        44,
        23
    ], [
        69,
        45,
        16
    ], [
        69,
        46,
        17
    ], [
        69,
        47,
        21
    ], [
        69,
        48,
        17
    ], [
        69,
        49,
        21
    ], [
        69,
        50,
        20
    ], [
        69,
        51,
        13
    ], [
        69,
        52,
        17
    ], [
        70,
        1,
        16
    ], [
        70,
        2,
        17
    ], [
        70,
        3,
        15
    ], [
        70,
        4,
        47
    ], [
        70,
        5,
        14
    ], [
        70,
        6,
        14
    ], [
        70,
        7,
        10
    ], [
        70,
        8,
        19
    ], [
        70,
        9,
        17
    ], [
        70,
        10,
        16
    ], [
        70,
        11,
        40
    ], [
        70,
        12,
        12
    ], [
        70,
        13,
        16
    ], [
        70,
        14,
        22
    ], [
        70,
        15,
        10
    ], [
        70,
        16,
        10
    ], [
        70,
        17,
        15
    ], [
        70,
        18,
        9
    ], [
        70,
        19,
        17
    ], [
        70,
        20,
        15
    ], [
        70,
        21,
        17
    ], [
        70,
        22,
        10
    ], [
        70,
        23,
        22
    ], [
        70,
        24,
        22
    ], [
        70,
        25,
        14
    ], [
        70,
        26,
        21
    ], [
        70,
        27,
        24
    ], [
        70,
        28,
        18
    ], [
        70,
        29,
        21
    ], [
        70,
        30,
        42
    ], [
        70,
        31,
        30
    ], [
        70,
        32,
        28
    ], [
        70,
        33,
        23
    ], [
        70,
        34,
        24
    ], [
        70,
        35,
        17
    ], [
        70,
        36,
        24
    ], [
        70,
        37,
        21
    ], [
        70,
        38,
        28
    ], [
        70,
        39,
        22
    ], [
        70,
        40,
        35
    ], [
        70,
        41,
        31
    ], [
        70,
        42,
        42
    ], [
        70,
        43,
        40
    ], [
        70,
        44,
        44
    ], [
        71,
        1,
        51
    ], [
        71,
        2,
        22
    ], [
        71,
        3,
        25
    ], [
        71,
        4,
        65
    ], [
        71,
        5,
        26
    ], [
        71,
        6,
        21
    ], [
        71,
        7,
        79
    ], [
        71,
        8,
        16
    ], [
        71,
        9,
        28
    ], [
        71,
        10,
        27
    ], [
        71,
        11,
        21
    ], [
        71,
        12,
        44
    ], [
        71,
        13,
        20
    ], [
        71,
        14,
        14
    ], [
        71,
        15,
        31
    ], [
        71,
        16,
        31
    ], [
        71,
        17,
        23
    ], [
        71,
        18,
        25
    ], [
        71,
        19,
        21
    ], [
        71,
        20,
        20
    ], [
        71,
        21,
        49
    ], [
        71,
        22,
        15
    ], [
        71,
        23,
        53
    ], [
        71,
        24,
        35
    ], [
        71,
        25,
        54
    ], [
        71,
        26,
        37
    ], [
        71,
        27,
        41
    ], [
        71,
        28,
        71
    ], [
        72,
        1,
        49
    ], [
        72,
        2,
        35
    ], [
        72,
        3,
        33
    ], [
        72,
        4,
        28
    ], [
        72,
        5,
        37
    ], [
        72,
        6,
        46
    ], [
        72,
        7,
        33
    ], [
        72,
        8,
        41
    ], [
        72,
        9,
        51
    ], [
        72,
        10,
        44
    ], [
        72,
        11,
        37
    ], [
        72,
        12,
        39
    ], [
        72,
        13,
        52
    ], [
        72,
        14,
        49
    ], [
        72,
        15,
        27
    ], [
        72,
        16,
        39
    ], [
        72,
        17,
        39
    ], [
        72,
        18,
        31
    ], [
        72,
        19,
        41
    ], [
        72,
        20,
        26
    ], [
        72,
        21,
        24
    ], [
        72,
        22,
        40
    ], [
        72,
        23,
        64
    ], [
        72,
        24,
        45
    ], [
        72,
        25,
        36
    ], [
        72,
        26,
        27
    ], [
        72,
        27,
        44
    ], [
        72,
        28,
        52
    ], [
        73,
        1,
        12
    ], [
        73,
        2,
        15
    ], [
        73,
        3,
        18
    ], [
        73,
        4,
        24
    ], [
        73,
        5,
        21
    ], [
        73,
        6,
        30
    ], [
        73,
        7,
        21
    ], [
        73,
        8,
        26
    ], [
        73,
        9,
        36
    ], [
        73,
        10,
        32
    ], [
        73,
        11,
        35
    ], [
        73,
        12,
        19
    ], [
        73,
        13,
        22
    ], [
        73,
        14,
        40
    ], [
        73,
        15,
        51
    ], [
        73,
        16,
        31
    ], [
        73,
        17,
        35
    ], [
        73,
        18,
        26
    ], [
        73,
        19,
        31
    ], [
        73,
        20,
        329
    ], [
        74,
        1,
        12
    ], [
        74,
        2,
        7
    ], [
        74,
        3,
        8
    ], [
        74,
        4,
        10
    ], [
        74,
        5,
        11
    ], [
        74,
        6,
        13
    ], [
        74,
        7,
        10
    ], [
        74,
        8,
        16
    ], [
        74,
        9,
        16
    ], [
        74,
        10,
        18
    ], [
        74,
        11,
        16
    ], [
        74,
        12,
        17
    ], [
        74,
        13,
        10
    ], [
        74,
        14,
        13
    ], [
        74,
        15,
        12
    ], [
        74,
        16,
        21
    ], [
        74,
        17,
        11
    ], [
        74,
        18,
        10
    ], [
        74,
        19,
        10
    ], [
        74,
        20,
        11
    ], [
        74,
        21,
        5
    ], [
        74,
        22,
        9
    ], [
        74,
        23,
        13
    ], [
        74,
        24,
        19
    ], [
        74,
        25,
        16
    ], [
        74,
        26,
        9
    ], [
        74,
        27,
        13
    ], [
        74,
        28,
        12
    ], [
        74,
        29,
        10
    ], [
        74,
        30,
        12
    ], [
        74,
        31,
        250
    ], [
        74,
        32,
        9
    ], [
        74,
        33,
        12
    ], [
        74,
        34,
        13
    ], [
        74,
        35,
        14
    ], [
        74,
        36,
        10
    ], [
        74,
        37,
        24
    ], [
        74,
        38,
        17
    ], [
        74,
        39,
        14
    ], [
        74,
        40,
        14
    ], [
        74,
        41,
        10
    ], [
        74,
        42,
        12
    ], [
        74,
        43,
        18
    ], [
        74,
        44,
        16
    ], [
        74,
        45,
        18
    ], [
        74,
        46,
        17
    ], [
        74,
        47,
        14
    ], [
        74,
        48,
        22
    ], [
        74,
        49,
        21
    ], [
        74,
        50,
        15
    ], [
        74,
        51,
        10
    ], [
        74,
        52,
        31
    ], [
        74,
        53,
        19
    ], [
        74,
        54,
        11
    ], [
        74,
        55,
        10
    ], [
        74,
        56,
        44
    ], [
        75,
        1,
        17
    ], [
        75,
        2,
        20
    ], [
        75,
        3,
        24
    ], [
        75,
        4,
        23
    ], [
        75,
        5,
        23
    ], [
        75,
        6,
        18
    ], [
        75,
        7,
        12
    ], [
        75,
        8,
        9
    ], [
        75,
        9,
        15
    ], [
        75,
        10,
        24
    ], [
        75,
        11,
        8
    ], [
        75,
        12,
        18
    ], [
        75,
        13,
        26
    ], [
        75,
        14,
        21
    ], [
        75,
        15,
        14
    ], [
        75,
        16,
        20
    ], [
        75,
        17,
        17
    ], [
        75,
        18,
        20
    ], [
        75,
        19,
        14
    ], [
        75,
        20,
        17
    ], [
        75,
        21,
        12
    ], [
        75,
        22,
        14
    ], [
        75,
        23,
        12
    ], [
        75,
        24,
        15
    ], [
        75,
        25,
        17
    ], [
        75,
        26,
        17
    ], [
        75,
        27,
        9
    ], [
        75,
        28,
        12
    ], [
        75,
        29,
        17
    ], [
        75,
        30,
        17
    ], [
        75,
        31,
        12
    ], [
        75,
        32,
        12
    ], [
        75,
        33,
        17
    ], [
        75,
        34,
        11
    ], [
        75,
        35,
        13
    ], [
        75,
        36,
        21
    ], [
        75,
        37,
        18
    ], [
        75,
        38,
        17
    ], [
        75,
        39,
        26
    ], [
        75,
        40,
        27
    ], [
        76,
        1,
        40
    ], [
        76,
        2,
        49
    ], [
        76,
        3,
        32
    ], [
        76,
        4,
        35
    ], [
        76,
        5,
        35
    ], [
        76,
        6,
        33
    ], [
        76,
        7,
        35
    ], [
        76,
        8,
        37
    ], [
        76,
        9,
        40
    ], [
        76,
        10,
        29
    ], [
        76,
        11,
        36
    ], [
        76,
        12,
        23
    ], [
        76,
        13,
        44
    ], [
        76,
        14,
        34
    ], [
        76,
        15,
        37
    ], [
        76,
        16,
        23
    ], [
        76,
        17,
        30
    ], [
        76,
        18,
        19
    ], [
        76,
        19,
        47
    ], [
        76,
        20,
        29
    ], [
        76,
        21,
        59
    ], [
        76,
        22,
        30
    ], [
        76,
        23,
        27
    ], [
        76,
        24,
        33
    ], [
        76,
        25,
        21
    ], [
        76,
        26,
        29
    ], [
        76,
        27,
        40
    ], [
        76,
        28,
        47
    ], [
        76,
        29,
        31
    ], [
        76,
        30,
        41
    ], [
        76,
        31,
        42
    ], [
        77,
        1,
        13
    ], [
        77,
        2,
        13
    ], [
        77,
        3,
        13
    ], [
        77,
        4,
        13
    ], [
        77,
        5,
        13
    ], [
        77,
        6,
        10
    ], [
        77,
        7,
        15
    ], [
        77,
        8,
        14
    ], [
        77,
        9,
        14
    ], [
        77,
        10,
        14
    ], [
        77,
        11,
        13
    ], [
        77,
        12,
        10
    ], [
        77,
        13,
        9
    ], [
        77,
        14,
        18
    ], [
        77,
        15,
        16
    ], [
        77,
        16,
        14
    ], [
        77,
        17,
        15
    ], [
        77,
        18,
        17
    ], [
        77,
        19,
        16
    ], [
        77,
        20,
        18
    ], [
        77,
        21,
        17
    ], [
        77,
        22,
        11
    ], [
        77,
        23,
        18
    ], [
        77,
        24,
        16
    ], [
        77,
        25,
        17
    ], [
        77,
        26,
        12
    ], [
        77,
        27,
        38
    ], [
        77,
        28,
        16
    ], [
        77,
        29,
        24
    ], [
        77,
        30,
        21
    ], [
        77,
        31,
        20
    ], [
        77,
        32,
        18
    ], [
        77,
        33,
        12
    ], [
        77,
        34,
        16
    ], [
        77,
        35,
        14
    ], [
        77,
        36,
        18
    ], [
        77,
        37,
        16
    ], [
        77,
        38,
        26
    ], [
        77,
        39,
        18
    ], [
        77,
        40,
        16
    ], [
        77,
        41,
        20
    ], [
        77,
        42,
        15
    ], [
        77,
        43,
        29
    ], [
        77,
        44,
        19
    ], [
        77,
        45,
        16
    ], [
        77,
        46,
        26
    ], [
        77,
        47,
        16
    ], [
        77,
        48,
        24
    ], [
        77,
        49,
        16
    ], [
        77,
        50,
        18
    ], [
        78,
        1,
        10
    ], [
        78,
        2,
        13
    ], [
        78,
        3,
        16
    ], [
        78,
        4,
        10
    ], [
        78,
        5,
        12
    ], [
        78,
        6,
        17
    ], [
        78,
        7,
        13
    ], [
        78,
        8,
        14
    ], [
        78,
        9,
        16
    ], [
        78,
        10,
        16
    ], [
        78,
        11,
        17
    ], [
        78,
        12,
        20
    ], [
        78,
        13,
        16
    ], [
        78,
        14,
        25
    ], [
        78,
        15,
        16
    ], [
        78,
        16,
        11
    ], [
        78,
        17,
        19
    ], [
        78,
        18,
        26
    ], [
        78,
        19,
        22
    ], [
        78,
        20,
        21
    ], [
        78,
        21,
        16
    ], [
        78,
        22,
        11
    ], [
        78,
        23,
        16
    ], [
        78,
        24,
        24
    ], [
        78,
        25,
        14
    ], [
        78,
        26,
        9
    ], [
        78,
        27,
        21
    ], [
        78,
        28,
        18
    ], [
        78,
        29,
        18
    ], [
        78,
        30,
        23
    ], [
        78,
        31,
        14
    ], [
        78,
        32,
        12
    ], [
        78,
        33,
        12
    ], [
        78,
        34,
        10
    ], [
        78,
        35,
        24
    ], [
        78,
        36,
        18
    ], [
        78,
        37,
        47
    ], [
        78,
        38,
        58
    ], [
        78,
        39,
        32
    ], [
        78,
        40,
        69
    ], [
        79,
        1,
        13
    ], [
        79,
        2,
        13
    ], [
        79,
        3,
        13
    ], [
        79,
        4,
        13
    ], [
        79,
        5,
        13
    ], [
        79,
        6,
        14
    ], [
        79,
        7,
        13
    ], [
        79,
        8,
        14
    ], [
        79,
        9,
        12
    ], [
        79,
        10,
        27
    ], [
        79,
        11,
        16
    ], [
        79,
        12,
        19
    ], [
        79,
        13,
        16
    ], [
        79,
        14,
        14
    ], [
        79,
        15,
        14
    ], [
        79,
        16,
        25
    ], [
        79,
        17,
        18
    ], [
        79,
        18,
        16
    ], [
        79,
        19,
        17
    ], [
        79,
        20,
        16
    ], [
        79,
        21,
        8
    ], [
        79,
        22,
        10
    ], [
        79,
        23,
        9
    ], [
        79,
        24,
        17
    ], [
        79,
        25,
        26
    ], [
        79,
        26,
        19
    ], [
        79,
        27,
        25
    ], [
        79,
        28,
        14
    ], [
        79,
        29,
        20
    ], [
        79,
        30,
        17
    ], [
        79,
        31,
        20
    ], [
        79,
        32,
        13
    ], [
        79,
        33,
        17
    ], [
        79,
        34,
        20
    ], [
        79,
        35,
        20
    ], [
        79,
        36,
        17
    ], [
        79,
        37,
        9
    ], [
        79,
        38,
        16
    ], [
        79,
        39,
        17
    ], [
        79,
        40,
        32
    ], [
        79,
        41,
        16
    ], [
        79,
        42,
        25
    ], [
        79,
        43,
        14
    ], [
        79,
        44,
        13
    ], [
        79,
        45,
        19
    ], [
        79,
        46,
        36
    ], [
        80,
        1,
        8
    ], [
        80,
        2,
        12
    ], [
        80,
        3,
        16
    ], [
        80,
        4,
        18
    ], [
        80,
        5,
        11
    ], [
        80,
        6,
        10
    ], [
        80,
        7,
        14
    ], [
        80,
        8,
        14
    ], [
        80,
        9,
        7
    ], [
        80,
        10,
        11
    ], [
        80,
        11,
        12
    ], [
        80,
        12,
        10
    ], [
        80,
        13,
        10
    ], [
        80,
        14,
        11
    ], [
        80,
        15,
        9
    ], [
        80,
        16,
        8
    ], [
        80,
        17,
        17
    ], [
        80,
        18,
        11
    ], [
        80,
        19,
        15
    ], [
        80,
        20,
        12
    ], [
        80,
        21,
        13
    ], [
        80,
        22,
        13
    ], [
        80,
        23,
        15
    ], [
        80,
        24,
        21
    ], [
        80,
        25,
        16
    ], [
        80,
        26,
        15
    ], [
        80,
        27,
        14
    ], [
        80,
        28,
        10
    ], [
        80,
        29,
        12
    ], [
        80,
        30,
        10
    ], [
        80,
        31,
        10
    ], [
        80,
        32,
        17
    ], [
        80,
        33,
        14
    ], [
        80,
        34,
        17
    ], [
        80,
        35,
        9
    ], [
        80,
        36,
        12
    ], [
        80,
        37,
        24
    ], [
        80,
        38,
        14
    ], [
        80,
        39,
        12
    ], [
        80,
        40,
        19
    ], [
        80,
        41,
        10
    ], [
        80,
        42,
        19
    ], [
        81,
        1,
        12
    ], [
        81,
        2,
        16
    ], [
        81,
        3,
        14
    ], [
        81,
        4,
        14
    ], [
        81,
        5,
        14
    ], [
        81,
        6,
        14
    ], [
        81,
        7,
        14
    ], [
        81,
        8,
        16
    ], [
        81,
        9,
        10
    ], [
        81,
        10,
        13
    ], [
        81,
        11,
        14
    ], [
        81,
        12,
        14
    ], [
        81,
        13,
        14
    ], [
        81,
        14,
        14
    ], [
        81,
        15,
        13
    ], [
        81,
        16,
        11
    ], [
        81,
        17,
        13
    ], [
        81,
        18,
        13
    ], [
        81,
        19,
        15
    ], [
        81,
        20,
        19
    ], [
        81,
        21,
        10
    ], [
        81,
        22,
        15
    ], [
        81,
        23,
        19
    ], [
        81,
        24,
        18
    ], [
        81,
        25,
        18
    ], [
        81,
        26,
        10
    ], [
        81,
        27,
        18
    ], [
        81,
        28,
        18
    ], [
        81,
        29,
        32
    ], [
        82,
        1,
        15
    ], [
        82,
        2,
        17
    ], [
        82,
        3,
        14
    ], [
        82,
        4,
        15
    ], [
        82,
        5,
        18
    ], [
        82,
        6,
        28
    ], [
        82,
        7,
        18
    ], [
        82,
        8,
        17
    ], [
        82,
        9,
        17
    ], [
        82,
        10,
        15
    ], [
        82,
        11,
        11
    ], [
        82,
        12,
        14
    ], [
        82,
        13,
        16
    ], [
        82,
        14,
        16
    ], [
        82,
        15,
        15
    ], [
        82,
        16,
        16
    ], [
        82,
        17,
        18
    ], [
        82,
        18,
        19
    ], [
        82,
        19,
        34
    ], [
        83,
        1,
        11
    ], [
        83,
        2,
        30
    ], [
        83,
        3,
        24
    ], [
        83,
        4,
        22
    ], [
        83,
        5,
        8
    ], [
        83,
        6,
        23
    ], [
        83,
        7,
        22
    ], [
        83,
        8,
        14
    ], [
        83,
        9,
        9
    ], [
        83,
        10,
        16
    ], [
        83,
        11,
        20
    ], [
        83,
        12,
        22
    ], [
        83,
        13,
        33
    ], [
        83,
        14,
        30
    ], [
        83,
        15,
        26
    ], [
        83,
        16,
        17
    ], [
        83,
        17,
        25
    ], [
        83,
        18,
        24
    ], [
        83,
        19,
        15
    ], [
        83,
        20,
        9
    ], [
        83,
        21,
        13
    ], [
        83,
        22,
        16
    ], [
        83,
        23,
        16
    ], [
        83,
        24,
        22
    ], [
        83,
        25,
        16
    ], [
        83,
        26,
        32
    ], [
        83,
        27,
        13
    ], [
        83,
        28,
        19
    ], [
        83,
        29,
        36
    ], [
        83,
        30,
        19
    ], [
        83,
        31,
        31
    ], [
        83,
        32,
        27
    ], [
        83,
        33,
        20
    ], [
        83,
        34,
        30
    ], [
        83,
        35,
        16
    ], [
        83,
        36,
        24
    ], [
        84,
        1,
        14
    ], [
        84,
        2,
        14
    ], [
        84,
        3,
        12
    ], [
        84,
        4,
        16
    ], [
        84,
        5,
        14
    ], [
        84,
        6,
        37
    ], [
        84,
        7,
        21
    ], [
        84,
        8,
        19
    ], [
        84,
        9,
        19
    ], [
        84,
        10,
        23
    ], [
        84,
        11,
        13
    ], [
        84,
        12,
        10
    ], [
        84,
        13,
        18
    ], [
        84,
        14,
        13
    ], [
        84,
        15,
        18
    ], [
        84,
        16,
        13
    ], [
        84,
        17,
        12
    ], [
        84,
        18,
        13
    ], [
        84,
        19,
        15
    ], [
        84,
        20,
        14
    ], [
        84,
        21,
        26
    ], [
        84,
        22,
        18
    ], [
        84,
        23,
        17
    ], [
        84,
        24,
        15
    ], [
        84,
        25,
        41
    ], [
        85,
        1,
        16
    ], [
        85,
        2,
        13
    ], [
        85,
        3,
        11
    ], [
        85,
        4,
        15
    ], [
        85,
        5,
        14
    ], [
        85,
        6,
        13
    ], [
        85,
        7,
        27
    ], [
        85,
        8,
        40
    ], [
        85,
        9,
        40
    ], [
        85,
        10,
        65
    ], [
        85,
        11,
        65
    ], [
        85,
        12,
        13
    ], [
        85,
        13,
        14
    ], [
        85,
        14,
        15
    ], [
        85,
        15,
        13
    ], [
        85,
        16,
        11
    ], [
        85,
        17,
        16
    ], [
        85,
        18,
        10
    ], [
        85,
        19,
        19
    ], [
        85,
        20,
        17
    ], [
        85,
        21,
        12
    ], [
        85,
        22,
        10
    ], [
        86,
        1,
        14
    ], [
        86,
        2,
        16
    ], [
        86,
        3,
        11
    ], [
        86,
        4,
        19
    ], [
        86,
        5,
        18
    ], [
        86,
        6,
        12
    ], [
        86,
        7,
        22
    ], [
        86,
        8,
        15
    ], [
        86,
        9,
        14
    ], [
        86,
        10,
        17
    ], [
        86,
        11,
        15
    ], [
        86,
        12,
        14
    ], [
        86,
        13,
        10
    ], [
        86,
        14,
        11
    ], [
        86,
        15,
        14
    ], [
        86,
        16,
        9
    ], [
        86,
        17,
        23
    ], [
        87,
        1,
        15
    ], [
        87,
        2,
        11
    ], [
        87,
        3,
        12
    ], [
        87,
        4,
        15
    ], [
        87,
        5,
        13
    ], [
        87,
        6,
        13
    ], [
        87,
        7,
        31
    ], [
        87,
        8,
        12
    ], [
        87,
        9,
        16
    ], [
        87,
        10,
        11
    ], [
        87,
        11,
        14
    ], [
        87,
        12,
        19
    ], [
        87,
        13,
        19
    ], [
        87,
        14,
        12
    ], [
        87,
        15,
        14
    ], [
        87,
        16,
        20
    ], [
        87,
        17,
        15
    ], [
        87,
        18,
        19
    ], [
        87,
        19,
        15
    ], [
        88,
        1,
        17
    ], [
        88,
        2,
        14
    ], [
        88,
        3,
        10
    ], [
        88,
        4,
        13
    ], [
        88,
        5,
        13
    ], [
        88,
        6,
        19
    ], [
        88,
        7,
        18
    ], [
        88,
        8,
        14
    ], [
        88,
        9,
        11
    ], [
        88,
        10,
        10
    ], [
        88,
        11,
        15
    ], [
        88,
        12,
        12
    ], [
        88,
        13,
        13
    ], [
        88,
        14,
        12
    ], [
        88,
        15,
        12
    ], [
        88,
        16,
        12
    ], [
        88,
        17,
        25
    ], [
        88,
        18,
        17
    ], [
        88,
        19,
        17
    ], [
        88,
        20,
        16
    ], [
        88,
        21,
        15
    ], [
        88,
        22,
        14
    ], [
        88,
        23,
        13
    ], [
        88,
        24,
        22
    ], [
        88,
        25,
        13
    ], [
        88,
        26,
        15
    ], [
        89,
        1,
        6
    ], [
        89,
        2,
        8
    ], [
        89,
        3,
        12
    ], [
        89,
        4,
        12
    ], [
        89,
        5,
        16
    ], [
        89,
        6,
        18
    ], [
        89,
        7,
        12
    ], [
        89,
        8,
        23
    ], [
        89,
        9,
        26
    ], [
        89,
        10,
        15
    ], [
        89,
        11,
        17
    ], [
        89,
        12,
        17
    ], [
        89,
        13,
        18
    ], [
        89,
        14,
        14
    ], [
        89,
        15,
        49
    ], [
        89,
        16,
        40
    ], [
        89,
        17,
        19
    ], [
        89,
        18,
        23
    ], [
        89,
        19,
        20
    ], [
        89,
        20,
        17
    ], [
        89,
        21,
        20
    ], [
        89,
        22,
        19
    ], [
        89,
        23,
        43
    ], [
        89,
        24,
        21
    ], [
        89,
        25,
        20
    ], [
        89,
        26,
        15
    ], [
        89,
        27,
        20
    ], [
        89,
        28,
        21
    ], [
        89,
        29,
        13
    ], [
        89,
        30,
        10
    ], [
        90,
        1,
        15
    ], [
        90,
        2,
        15
    ], [
        90,
        3,
        11
    ], [
        90,
        4,
        20
    ], [
        90,
        5,
        20
    ], [
        90,
        6,
        17
    ], [
        90,
        7,
        15
    ], [
        90,
        8,
        14
    ], [
        90,
        9,
        12
    ], [
        90,
        10,
        14
    ], [
        90,
        11,
        14
    ], [
        90,
        12,
        16
    ], [
        90,
        13,
        6
    ], [
        90,
        14,
        19
    ], [
        90,
        15,
        12
    ], [
        90,
        16,
        15
    ], [
        90,
        17,
        45
    ], [
        90,
        18,
        17
    ], [
        90,
        19,
        32
    ], [
        90,
        20,
        13
    ], [
        91,
        1,
        12
    ], [
        91,
        2,
        14
    ], [
        91,
        3,
        15
    ], [
        91,
        4,
        15
    ], [
        91,
        5,
        15
    ], [
        91,
        6,
        14
    ], [
        91,
        7,
        12
    ], [
        91,
        8,
        20
    ], [
        91,
        9,
        13
    ], [
        91,
        10,
        13
    ], [
        91,
        11,
        15
    ], [
        91,
        12,
        13
    ], [
        91,
        13,
        30
    ], [
        91,
        14,
        39
    ], [
        91,
        15,
        13
    ], [
        92,
        1,
        13
    ], [
        92,
        2,
        14
    ], [
        92,
        3,
        18
    ], [
        92,
        4,
        11
    ], [
        92,
        5,
        15
    ], [
        92,
        6,
        11
    ], [
        92,
        7,
        13
    ], [
        92,
        8,
        16
    ], [
        92,
        9,
        11
    ], [
        92,
        10,
        13
    ], [
        92,
        11,
        21
    ], [
        92,
        12,
        12
    ], [
        92,
        13,
        19
    ], [
        92,
        14,
        16
    ], [
        92,
        15,
        17
    ], [
        92,
        16,
        12
    ], [
        92,
        17,
        14
    ], [
        92,
        18,
        17
    ], [
        92,
        19,
        21
    ], [
        92,
        20,
        21
    ], [
        92,
        21,
        9
    ], [
        93,
        1,
        6
    ], [
        93,
        2,
        12
    ], [
        93,
        3,
        15
    ], [
        93,
        4,
        20
    ], [
        93,
        5,
        18
    ], [
        93,
        6,
        16
    ], [
        93,
        7,
        13
    ], [
        93,
        8,
        15
    ], [
        93,
        9,
        17
    ], [
        93,
        10,
        17
    ], [
        93,
        11,
        16
    ], [
        94,
        1,
        13
    ], [
        94,
        2,
        13
    ], [
        94,
        3,
        12
    ], [
        94,
        4,
        12
    ], [
        94,
        5,
        14
    ], [
        94,
        6,
        13
    ], [
        94,
        7,
        13
    ], [
        94,
        8,
        12
    ], [
        95,
        1,
        14
    ], [
        95,
        2,
        9
    ], [
        95,
        3,
        15
    ], [
        95,
        4,
        26
    ], [
        95,
        5,
        18
    ], [
        95,
        6,
        42
    ], [
        95,
        7,
        17
    ], [
        95,
        8,
        21
    ], [
        96,
        1,
        18
    ], [
        96,
        2,
        15
    ], [
        96,
        3,
        14
    ], [
        96,
        4,
        13
    ], [
        96,
        5,
        18
    ], [
        96,
        6,
        17
    ], [
        96,
        7,
        11
    ], [
        96,
        8,
        14
    ], [
        96,
        9,
        13
    ], [
        96,
        10,
        10
    ], [
        96,
        11,
        18
    ], [
        96,
        12,
        12
    ], [
        96,
        13,
        15
    ], [
        96,
        14,
        17
    ], [
        96,
        15,
        26
    ], [
        96,
        16,
        15
    ], [
        96,
        17,
        10
    ], [
        96,
        18,
        12
    ], [
        96,
        19,
        20
    ], [
        97,
        1,
        21
    ], [
        97,
        2,
        19
    ], [
        97,
        3,
        20
    ], [
        97,
        4,
        37
    ], [
        97,
        5,
        18
    ], [
        98,
        1,
        56
    ], [
        98,
        2,
        23
    ], [
        98,
        3,
        11
    ], [
        98,
        4,
        45
    ], [
        98,
        5,
        78
    ], [
        98,
        6,
        66
    ], [
        98,
        7,
        42
    ], [
        98,
        8,
        83
    ], [
        99,
        1,
        20
    ], [
        99,
        2,
        18
    ], [
        99,
        3,
        16
    ], [
        99,
        4,
        16
    ], [
        99,
        5,
        13
    ], [
        99,
        6,
        32
    ], [
        99,
        7,
        22
    ], [
        99,
        8,
        21
    ], [
        100,
        1,
        13
    ], [
        100,
        2,
        13
    ], [
        100,
        3,
        13
    ], [
        100,
        4,
        11
    ], [
        100,
        5,
        11
    ], [
        100,
        6,
        18
    ], [
        100,
        7,
        15
    ], [
        100,
        8,
        17
    ], [
        100,
        9,
        25
    ], [
        100,
        10,
        14
    ], [
        100,
        11,
        19
    ], [
        101,
        1,
        7
    ], [
        101,
        2,
        9
    ], [
        101,
        3,
        17
    ], [
        101,
        4,
        26
    ], [
        101,
        5,
        24
    ], [
        101,
        6,
        17
    ], [
        101,
        7,
        14
    ], [
        101,
        8,
        16
    ], [
        101,
        9,
        9
    ], [
        101,
        10,
        13
    ], [
        101,
        11,
        8
    ], [
        102,
        1,
        13
    ], [
        102,
        2,
        14
    ], [
        102,
        3,
        12
    ], [
        102,
        4,
        14
    ], [
        102,
        5,
        20
    ], [
        102,
        6,
        11
    ], [
        102,
        7,
        18
    ], [
        102,
        8,
        21
    ], [
        103,
        1,
        6
    ], [
        103,
        2,
        15
    ], [
        103,
        3,
        52
    ], [
        104,
        1,
        14
    ], [
        104,
        2,
        16
    ], [
        104,
        3,
        15
    ], [
        104,
        4,
        17
    ], [
        104,
        5,
        16
    ], [
        104,
        6,
        14
    ], [
        104,
        7,
        18
    ], [
        104,
        8,
        14
    ], [
        104,
        9,
        10
    ], [
        105,
        1,
        25
    ], [
        105,
        2,
        19
    ], [
        105,
        3,
        20
    ], [
        105,
        4,
        18
    ], [
        105,
        5,
        15
    ], [
        106,
        1,
        10
    ], [
        106,
        2,
        23
    ], [
        106,
        3,
        18
    ], [
        106,
        4,
        26
    ], [
        107,
        1,
        19
    ], [
        107,
        2,
        17
    ], [
        107,
        3,
        20
    ], [
        107,
        4,
        11
    ], [
        107,
        5,
        20
    ], [
        107,
        6,
        13
    ], [
        107,
        7,
        14
    ], [
        108,
        1,
        16
    ], [
        108,
        2,
        12
    ], [
        108,
        3,
        15
    ], [
        109,
        1,
        16
    ], [
        109,
        2,
        14
    ], [
        109,
        3,
        19
    ], [
        109,
        4,
        17
    ], [
        109,
        5,
        19
    ], [
        109,
        6,
        14
    ], [
        110,
        1,
        19
    ], [
        110,
        2,
        31
    ], [
        110,
        3,
        30
    ], [
        111,
        1,
        15
    ], [
        111,
        2,
        19
    ], [
        111,
        3,
        15
    ], [
        111,
        4,
        17
    ], [
        111,
        5,
        15
    ], [
        112,
        1,
        11
    ], [
        112,
        2,
        9
    ], [
        112,
        3,
        12
    ], [
        112,
        4,
        15
    ], [
        113,
        1,
        14
    ], [
        113,
        2,
        9
    ], [
        113,
        3,
        15
    ], [
        113,
        4,
        20
    ], [
        113,
        5,
        15
    ], [
        114,
        1,
        14
    ], [
        114,
        2,
        8
    ], [
        114,
        3,
        8
    ], [
        114,
        4,
        17
    ], [
        114,
        5,
        20
    ], [
        114,
        6,
        13
    ]];
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/*!
 * Vue.js v1.0.7
 * (c) 2015 Evan You
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue"] = factory();
	else
		root["Vue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var extend = _.extend

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue (options) {
	  this._init(options)
	}

	/**
	 * Mixin global API
	 */

	extend(Vue, __webpack_require__(13))

	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */

	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(16),
	  elementDirectives: __webpack_require__(50),
	  filters: __webpack_require__(53),
	  transitions: {},
	  components: {},
	  partials: {}
	}

	/**
	 * Build up the prototype
	 */

	var p = Vue.prototype

	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */

	Object.defineProperty(p, '$data', {
	  get: function () {
	    return this._data
	  },
	  set: function (newData) {
	    if (newData !== this._data) {
	      this._setData(newData)
	    }
	  }
	})

	/**
	 * Mixin internal instance methods
	 */

	extend(p, __webpack_require__(55))
	extend(p, __webpack_require__(56))
	extend(p, __webpack_require__(57))
	extend(p, __webpack_require__(60))
	extend(p, __webpack_require__(62))

	/**
	 * Mixin public API methods
	 */

	extend(p, __webpack_require__(63))
	extend(p, __webpack_require__(64))
	extend(p, __webpack_require__(65))
	extend(p, __webpack_require__(66))

	Vue.version = '1.0.7'
	module.exports = _.Vue = Vue

	/* istanbul ignore if */
	if (true) {
	  if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue)
	  }
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(2)
	var extend = lang.extend

	extend(exports, lang)
	extend(exports, __webpack_require__(3))
	extend(exports, __webpack_require__(4))
	extend(exports, __webpack_require__(10))
	extend(exports, __webpack_require__(11))
	extend(exports, __webpack_require__(12))


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	exports.set = function set (obj, key, val) {
	  if (obj.hasOwnProperty(key)) {
	    obj[key] = val
	    return
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val)
	    return
	  }
	  var ob = obj.__ob__
	  if (!ob) {
	    obj[key] = val
	    return
	  }
	  ob.convert(key, val)
	  ob.dep.notify()
	  if (ob.vms) {
	    var i = ob.vms.length
	    while (i--) {
	      var vm = ob.vms[i]
	      vm._proxy(key)
	      vm._digest()
	    }
	  }
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	exports.delete = function (obj, key) {
	  if (!obj.hasOwnProperty(key)) {
	    return
	  }
	  delete obj[key]
	  var ob = obj.__ob__
	  if (!ob) {
	    return
	  }
	  ob.dep.notify()
	  if (ob.vms) {
	    var i = ob.vms.length
	    while (i--) {
	      var vm = ob.vms[i]
	      vm._unproxy(key)
	      vm._digest()
	    }
	  }
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/
	exports.isLiteral = function (exp) {
	  return literalValueRE.test(exp)
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	exports.toString = function (value) {
	  return value == null
	    ? ''
	    : value.toString()
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value
	  } else {
	    var parsed = Number(value)
	    return isNaN(parsed)
	      ? value
	      : parsed
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	exports.toBoolean = function (value) {
	  return value === 'true'
	    ? true
	    : value === 'false'
	      ? false
	      : value
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0)
	  var b = str.charCodeAt(str.length - 1)
	  return a === b && (a === 0x22 || a === 0x27)
	    ? str.slice(1, -1)
	    : str
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g
	exports.camelize = function (str) {
	  return str.replace(camelizeRE, toUpper)
	}

	function toUpper (_, c) {
	  return c ? c.toUpperCase() : ''
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g
	exports.hyphenate = function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper)
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	exports.toArray = function (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	exports.extend = function (to, from) {
	  var keys = Object.keys(from)
	  var i = keys.length
	  while (i--) {
	    to[keys[i]] = from[keys[i]]
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString
	var OBJECT_STRING = '[object Object]'
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isArray = Array.isArray

	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function () {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function () {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	exports.indexOf = function (arr, obj) {
	  var i = arr.length
	  while (i--) {
	    if (arr[i] === obj) return i
	  }
	  return -1
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	exports.cancellable = function (fn) {
	  var cb = function () {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments)
	    }
	  }
	  cb.cancel = function () {
	    cb.cancelled = true
	  }
	  return cb
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	exports.looseEqual = function (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    exports.isObject(a) && exports.isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	// can we use __proto__?
	exports.hasProto = '__proto__' in {}

	// Browser environment sniffing
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'

	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0

	exports.isAndroid =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('android') > 0

	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans =
	    window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  var isWebkitAnim =
	    window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  exports.transitionProp = isWebkitTrans
	    ? 'WebkitTransition'
	    : 'transition'
	  exports.transitionEndEvent = isWebkitTrans
	    ? 'webkitTransitionEnd'
	    : 'transitionend'
	  exports.animationProp = isWebkitAnim
	    ? 'WebkitAnimation'
	    : 'animation'
	  exports.animationEndEvent = isWebkitAnim
	    ? 'webkitAnimationEnd'
	    : 'animationend'
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	exports.nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function nextTickHandler () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1
	    var observer = new MutationObserver(nextTickHandler)
	    var textNode = document.createTextNode(counter)
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = counter
	    }
	  } else {
	    timerFunc = setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(nextTickHandler, 0)
	  }
	})()


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(5)
	var transition = __webpack_require__(9)

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      ("development") !== 'production' && _.warn(
	        'Cannot find element: ' + selector
	      )
	    }
	  }
	  return el
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	exports.inDoc = function (node) {
	  var doc = document.documentElement
	  var parent = node && node.parentNode
	  return doc === node ||
	    doc === parent ||
	    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */

	exports.attr = function (node, attr) {
	  var val = node.getAttribute(attr)
	  if (val !== null) {
	    node.removeAttribute(attr)
	  }
	  return val
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	exports.getBindAttr = function (node, name) {
	  var val = exports.attr(node, ':' + name)
	  if (val === null) {
	    val = exports.attr(node, 'v-bind:' + name)
	  }
	  return val
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target)
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling)
	  } else {
	    target.parentNode.appendChild(el)
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	exports.remove = function (el) {
	  el.parentNode.removeChild(el)
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild)
	  } else {
	    target.appendChild(el)
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	exports.replace = function (target, el) {
	  var parent = target.parentNode
	  if (parent) {
	    parent.replaceChild(el, target)
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb)
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb)
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	  if (!el.className) {
	    el.removeAttribute('class')
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */

	exports.extractContent = function (el, asFragment) {
	  var child
	  var rawContent
	  /* istanbul ignore if */
	  if (
	    exports.isTemplate(el) &&
	    el.content instanceof DocumentFragment
	  ) {
	    el = el.content
	  }
	  if (el.hasChildNodes()) {
	    exports.trimNode(el)
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	    /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}

	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */

	exports.trimNode = function (node) {
	  trim(node, node.firstChild)
	  trim(node, node.lastChild)
	}

	function trim (parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node)
	  }
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	exports.isTemplate = function (el) {
	  return el.tagName &&
	    el.tagName.toLowerCase() === 'template'
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	exports.createAnchor = function (content, persist) {
	  return config.debug
	    ? document.createComment(content)
	    : document.createTextNode(persist ? ' ' : '')
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/
	exports.findRef = function (node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name
	      if (refRE.test(name)) {
	        node.removeAttribute(name)
	        return _.camelize(name.replace(refRE, ''))
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	exports.mapNodeRange = function (node, end, op) {
	  var next
	  while (node !== end) {
	    next = node.nextSibling
	    op(node)
	    node = next
	  }
	  op(end)
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	exports.removeNodeRange = function (start, end, vm, frag, cb) {
	  var done = false
	  var removed = 0
	  var nodes = []
	  exports.mapNodeRange(start, end, function (node) {
	    if (node === end) done = true
	    nodes.push(node)
	    transition.remove(node, vm, onRemoved)
	  })
	  function onRemoved () {
	    removed++
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i])
	      }
	      cb && cb()
	    }
	  }
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: [
	    'component',
	    'directive',
	    'elementDirective',
	    'filter',
	    'transition',
	    'partial'
	  ],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}

	/**
	 * Interpolation delimiters. Changing these would trigger
	 * the text parser to re-compile the regular expressions.
	 *
	 * @type {Array<String>}
	 */

	var delimiters = ['{{', '}}']
	var unsafeDelimiters = ['{{{', '}}}']
	var textParser = __webpack_require__(6)

	Object.defineProperty(module.exports, 'delimiters', {
	  get: function () {
	    return delimiters
	  },
	  set: function (val) {
	    delimiters = val
	    textParser.compileRegex()
	  }
	})

	Object.defineProperty(module.exports, 'unsafeDelimiters', {
	  get: function () {
	    return unsafeDelimiters
	  },
	  set: function (val) {
	    unsafeDelimiters = val
	    textParser.compileRegex()
	  }
	})


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(7)
	var config = __webpack_require__(5)
	var dirParser = __webpack_require__(8)
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
	var cache, tagRE, htmlRE

	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex (str) {
	  return str.replace(regexEscapeRE, '\\$&')
	}

	exports.compileRegex = function () {
	  var open = escapeRegex(config.delimiters[0])
	  var close = escapeRegex(config.delimiters[1])
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0])
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1])
	  tagRE = new RegExp(
	    unsafeOpen + '(.+?)' + unsafeClose + '|' +
	    open + '(.+?)' + close,
	    'g'
	  )
	  htmlRE = new RegExp(
	    '^' + unsafeOpen + '.*' + unsafeClose + '$'
	  )
	  // reset cache
	  cache = new Cache(1000)
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	exports.parse = function (text) {
	  if (!cache) {
	    exports.compileRegex()
	  }
	  var hit = cache.get(text)
	  if (hit) {
	    return hit
	  }
	  text = text.replace(/\n/g, '')
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, html, value, first, oneTime
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	  /* eslint-enable no-cond-assign */
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    html = htmlRE.test(match[0])
	    value = html ? match[1] : match[2]
	    first = value.charCodeAt(0)
	    oneTime = first === 42 // *
	    value = oneTime
	      ? value.slice(1)
	      : value
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    })
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    })
	  }
	  cache.put(text, tokens)
	  return tokens
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @return {String}
	 */

	exports.tokensToExp = function (tokens) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token)
	    }).join('+')
	  } else {
	    return formatToken(tokens[0], true)
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Boolean} single
	 * @return {String}
	 */

	function formatToken (token, single) {
	  return token.tag
	    ? inlineFilters(token.value, single)
	    : '"' + token.value + '"'
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp, single) {
	  if (!filterRE.test(exp)) {
	    return single
	      ? exp
	      : '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      return 'this._applyFilters(' +
	        dir.expression + // value
	        ',null,' +       // oldValue (null for read)
	        JSON.stringify(dir.filters) + // filter descriptors
	        ',false)'        // write?
	    }
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */

	function Cache (limit) {
	  this.size = 0
	  this.limit = limit
	  this.head = this.tail = undefined
	  this._keymap = Object.create(null)
	}

	var p = Cache.prototype

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  }
	  this._keymap[key] = entry
	  if (this.tail) {
	    this.tail.newer = entry
	    entry.older = this.tail
	  } else {
	    this.head = entry
	  }
	  this.tail = entry
	  if (this.size === this.limit) {
	    return this.shift()
	  } else {
	    this.size++
	  }
	}

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head
	  if (entry) {
	    this.head = this.head.newer
	    this.head.older = undefined
	    entry.newer = entry.older = undefined
	    this._keymap[entry.key] = undefined
	  }
	  return entry
	}

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key]
	  if (entry === undefined) return
	  if (entry === this.tail) {
	    return returnEntry
	      ? entry
	      : entry.value
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer
	    }
	    entry.newer.older = entry.older // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer // C. --> E
	  }
	  entry.newer = undefined // D --x
	  entry.older = this.tail // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry // E. <-- D
	  }
	  this.tail = entry
	  return returnEntry
	    ? entry
	    : entry.value
	}

	module.exports = Cache


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(7)
	var cache = new Cache(1000)
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g
	var reservedArgRE = /^in$|^-?\d+/

	/**
	 * Parser state
	 */

	var str, dir
	var c, i, l, lastFilterIndex
	var inSingle, inDouble, curly, square, paren

	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter () {
	  var exp = str.slice(lastFilterIndex, i).trim()
	  var filter
	  if (exp) {
	    filter = {}
	    var tokens = exp.match(filterTokenRE)
	    filter.name = tokens[0]
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg)
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg (arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: _.toNumber(arg),
	      dynamic: false
	    }
	  } else {
	    var stripped = _.stripQuotes(arg)
	    var dynamic = stripped === arg
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    }
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */

	exports.parse = function (s) {

	  var hit = cache.get(s)
	  if (hit) {
	    return hit
	  }

	  // reset parser state
	  str = s
	  inSingle = inDouble = false
	  curly = square = paren = 0
	  lastFilterIndex = 0
	  dir = {}

	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble
	    } else if (
	      c === 0x7C && // pipe
	      str.charCodeAt(i + 1) !== 0x7C &&
	      str.charCodeAt(i - 1) !== 0x7C
	    ) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        dir.expression = str.slice(0, i).trim()
	      } else {
	        // already has filter
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim()
	  } else if (lastFilterIndex !== 0) {
	    pushFilter()
	  }

	  cache.put(s, dir)
	  return dir
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target)
	  }, vm, cb)
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el)
	  }, vm, cb)
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans
	  if (
	    !transition ||
	    // skip if there are no js hooks and CSS transition is
	    // not supported
	    (!transition.hooks && !_.transitionEndEvent) ||
	    // skip transitions for initial compile
	    !vm._isCompiled ||
	    // if the vm is being manipulated by a parent directive
	    // during the parent's compilation phase, skip the
	    // animation.
	    (vm.$parent && !vm.$parent._isCompiled)
	  ) {
	    op()
	    if (cb) cb()
	    return
	  }
	  var action = direction > 0 ? 'enter' : 'leave'
	  transition[action](op, cb)
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(5)
	var extend = _.extend

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null)

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!to.hasOwnProperty(key)) {
	      _.set(to, key, fromVal)
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      ("development") !== 'production' && _.warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.'
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    ("development") !== 'production' && _.warn(
	      'The "el" option should be a function ' +
	      'that returns a per-instance value in component ' +
	      'definitions.'
	    )
	    return
	  }
	  var ret = childVal || parentVal
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function'
	    ? ret.call(vm)
	    : ret
	}

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init =
	strats.created =
	strats.ready =
	strats.attached =
	strats.detached =
	strats.beforeCompile =
	strats.compiled =
	strats.beforeDestroy =
	strats.destroyed = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	/**
	 * 0.11 deprecation warning
	 */

	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  ("development") !== 'production' && _.warn(
	    '"paramAttributes" option has been deprecated in 0.12. ' +
	    'Use "props" instead.'
	  )
	}

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal)
	  return childVal
	    ? extend(res, guardArrayAssets(childVal))
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch =
	strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !_.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}

	/**
	 * Other object hashes.
	 */

	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(null)
	  extend(ret, parentVal)
	  extend(ret, childVal)
	  return ret
	}

	/**
	 * Default strategy.
	 */

	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents (options) {
	  if (options.components) {
	    var components = options.components =
	      guardArrayAssets(options.components)
	    var def
	    var ids = Object.keys(components)
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i]
	      if (_.commonTagRE.test(key)) {
	        ("development") !== 'production' && _.warn(
	          'Do not use built-in HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        components[key] = _.Vue.extend(def)
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps (options) {
	  var props = options.props
	  var i
	  if (_.isArray(props)) {
	    options.props = {}
	    i = props.length
	    while (i--) {
	      options.props[props[i]] = null
	    }
	  } else if (_.isPlainObject(props)) {
	    var keys = Object.keys(props)
	    i = keys.length
	    while (i--) {
	      var val = props[keys[i]]
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val }
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets (assets) {
	  if (_.isArray(assets)) {
	    var res = {}
	    var i = assets.length
	    var asset
	    while (i--) {
	      asset = assets[i]
	      var id = typeof asset === 'function'
	        ? ((asset.options && asset.options.name) || asset.id)
	        : (asset.name || asset.id)
	      if (!id) {
	        ("development") !== 'production' && _.warn(
	          'Array-syntax assets must provide a "name" or "id" field.'
	        )
	      } else {
	        res[id] = asset
	      }
	    }
	    return res
	  }
	  return assets
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	exports.mergeOptions = function merge (parent, child, vm) {
	  guardComponents(child)
	  guardProps(child)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */

	exports.resolveAsset = function resolve (options, type, id) {
	  var assets = options[type]
	  var camelizedId
	  return assets[id] ||
	    // camelCase ID
	    assets[camelizedId = _.camelize(id)] ||
	    // Pascal Case ID
	    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)]
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	exports.commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase()
	  var hasAttrs = el.hasAttributes()
	  if (!exports.commonTagRE.test(tag) && tag !== 'component') {
	    if (_.resolveAsset(options, 'components', tag)) {
	      return { id: tag }
	    } else {
	      var is = hasAttrs && getIsBinding(el)
	      if (is) {
	        return is
	      } else if (true) {
	        if (
	          tag.indexOf('-') > -1 ||
	          (
	            /HTMLUnknownElement/.test(el.toString()) &&
	            // Chrome returns unknown for several HTML5 elements.
	            // https://code.google.com/p/chromium/issues/detail?id=540526
	            !/^(data|time|rtc|rb)$/.test(tag)
	          )
	        ) {
	          _.warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly?'
	          )
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el)
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */

	function getIsBinding (el) {
	  // dynamic syntax
	  var exp = _.attr(el, 'is')
	  if (exp != null) {
	    return { id: exp }
	  } else {
	    exp = _.getBindAttr(el, 'is')
	    if (exp != null) {
	      return { id: exp, dynamic: true }
	    }
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path
	    vm[key] = vm._data[key] = value
	  }
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true
	  }
	  var options = prop.options
	  var type = options.type
	  var valid = true
	  var expectedType
	  if (type) {
	    if (type === String) {
	      expectedType = 'string'
	      valid = typeof value === expectedType
	    } else if (type === Number) {
	      expectedType = 'number'
	      valid = typeof value === 'number'
	    } else if (type === Boolean) {
	      expectedType = 'boolean'
	      valid = typeof value === 'boolean'
	    } else if (type === Function) {
	      expectedType = 'function'
	      valid = typeof value === 'function'
	    } else if (type === Object) {
	      expectedType = 'object'
	      valid = _.isPlainObject(value)
	    } else if (type === Array) {
	      expectedType = 'array'
	      valid = _.isArray(value)
	    } else {
	      valid = value instanceof type
	    }
	  }
	  if (!valid) {
	    ("development") !== 'production' && _.warn(
	      'Invalid prop: type check failed for ' +
	      prop.path + '="' + prop.raw + '".' +
	      ' Expected ' + formatType(expectedType) +
	      ', got ' + formatValue(value) + '.'
	    )
	    return false
	  }
	  var validator = options.validator
	  if (validator) {
	    if (!validator.call(null, value)) {
	      ("development") !== 'production' && _.warn(
	        'Invalid prop: custom validator check failed for ' +
	        prop.path + '="' + prop.raw + '"'
	      )
	      return false
	    }
	  }
	  return true
	}

	function formatType (val) {
	  return val
	    ? val.charAt(0).toUpperCase() + val.slice(1)
	    : 'custom type'
	}

	function formatValue (val) {
	  return Object.prototype.toString.call(val).slice(8, -1)
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Enable debug utilities.
	 */

	if (true) {

	  var config = __webpack_require__(5)
	  var hasConsole = typeof console !== 'undefined'

	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */

	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg)
	    }
	  }

	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */

	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack)
	      }
	    }
	  }

	  /**
	   * Assert asset exists
	   */

	  exports.assertAsset = function (val, type, id) {
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(5)

	/**
	 * Expose useful internals
	 */

	exports.util = _
	exports.config = config
	exports.set = _.set
	exports.delete = _.delete
	exports.nextTick = _.nextTick

	/**
	 * The following are exposed for advanced usage / plugins
	 */

	exports.compiler = __webpack_require__(14)
	exports.FragmentFactory = __webpack_require__(21)
	exports.internalDirectives = __webpack_require__(36)
	exports.parsers = {
	  path: __webpack_require__(43),
	  text: __webpack_require__(6),
	  template: __webpack_require__(19),
	  directive: __webpack_require__(8),
	  expression: __webpack_require__(42)
	}

	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */

	exports.cid = 0
	var cid = 1

	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */

	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {}
	  var Super = this
	  var isFirstExtend = Super.cid === 0
	  if (isFirstExtend && extendOptions._Ctor) {
	    return extendOptions._Ctor
	  }
	  var name = extendOptions.name || Super.options.name
	  var Sub = createClass(name || 'VueComponent')
	  Sub.prototype = Object.create(Super.prototype)
	  Sub.prototype.constructor = Sub
	  Sub.cid = cid++
	  Sub.options = _.mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type]
	  })
	  // enable recursive self-lookup
	  if (name) {
	    Sub.options.components[name] = Sub
	  }
	  // cache constructor
	  if (isFirstExtend) {
	    extendOptions._Ctor = Sub
	  }
	  return Sub
	}

	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */

	function createClass (name) {
	  return new Function(
	    'return function ' + _.classify(name) +
	    ' (options) { this._init(options) }'
	  )()
	}

	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */

	exports.use = function (plugin) {
	  /* istanbul ignore if */
	  if (plugin.installed) {
	    return
	  }
	  // additional parameters
	  var args = _.toArray(arguments, 1)
	  args.unshift(this)
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args)
	  } else {
	    plugin.apply(null, args)
	  }
	  plugin.installed = true
	  return this
	}

	/**
	 * Apply a global mixin by merging it into the default
	 * options.
	 */

	exports.mixin = function (mixin) {
	  var Vue = _.Vue
	  Vue.options = _.mergeOptions(Vue.options, mixin)
	}

	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */

	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id]
	    } else {
	      /* istanbul ignore if */
	      if (true) {
	        if (type === 'component' && _.commonTagRE.test(id)) {
	          _.warn(
	            'Do not use built-in HTML elements as component ' +
	            'id: ' + id
	          )
	        }
	      }
	      if (
	        type === 'component' &&
	        _.isPlainObject(definition)
	      ) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options[type + 's'][id] = definition
	      return definition
	    }
	  }
	})


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	_.extend(exports, __webpack_require__(15))
	_.extend(exports, __webpack_require__(49))


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var publicDirectives = __webpack_require__(16)
	var internalDirectives = __webpack_require__(36)
	var compileProps = __webpack_require__(48)
	var textParser = __webpack_require__(6)
	var dirParser = __webpack_require__(8)
	var templateParser = __webpack_require__(19)
	var resolveAsset = _.resolveAsset

	// special binding prefixes
	var bindRE = /^v-bind:|^:/
	var onRE = /^v-on:|^@/
	var argRE = /:(.*)$/
	var modifierRE = /\.[^\.]+/g
	var transitionRE = /^(v-bind:|:)?transition$/

	// terminal directives
	var terminalDirectives = [
	  'for',
	  'if'
	]

	// default directive priority
	var DEFAULT_PRIORITY = 1000

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	exports.compile = function (el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent
	    ? compileNode(el, options)
	    : null
	  // link function for the childNodes
	  var childLinkFn =
	    !(nodeLinkFn && nodeLinkFn.terminal) &&
	    el.tagName !== 'SCRIPT' &&
	    el.hasChildNodes()
	      ? compileNodeList(el.childNodes, options)
	      : null

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn (vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag)
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag)
	    }, vm)
	    return makeUnlinkFn(vm, dirs)
	  }
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture (linker, vm) {
	  var originalDirCount = vm._directives.length
	  linker()
	  var dirs = vm._directives.slice(originalDirCount)
	  dirs.sort(directiveComparator)
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind()
	  }
	  return dirs
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator (a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY
	  return a > b ? -1 : a === b ? 0 : 1
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn (vm, dirs, context, contextDirs) {
	  return function unlink (destroying) {
	    teardownDirs(vm, dirs, destroying)
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs)
	    }
	  }
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs (vm, dirs, destroying) {
	  var i = dirs.length
	  while (i--) {
	    dirs[i]._teardown()
	    if (!destroying) {
	      vm._directives.$remove(dirs[i])
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	exports.compileAndLinkProps = function (vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props)
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope)
	  }, vm)
	  return makeUnlinkFn(vm, propDirs)
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	exports.compileRoot = function (el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs
	  var replacerAttrs = options._replacerAttrs
	  var contextLinkFn, replacerLinkFn

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions)
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options)
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options)
	    }
	  } else if (("development") !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs
	      .filter(function (attr) {
	        // allow vue-loader/vueify scoped css attributes
	        return attr.name.indexOf('_v-') < 0 &&
	          // allow event listeners
	          !onRE.test(attr.name) &&
	          // allow slots
	          attr.name !== 'slot'
	      })
	      .map(function (attr) {
	        return '"' + attr.name + '"'
	      })
	    if (names.length) {
	      var plural = names.length > 1
	      _.warn(
	        'Attribute' + (plural ? 's ' : ' ') + names.join(', ') +
	        (plural ? ' are' : ' is') + ' ignored on component ' +
	        '<' + options.el.tagName.toLowerCase() + '> because ' +
	        'the component is a fragment instance: ' +
	        'http://vuejs.org/guide/components.html#Fragment_Instance'
	      )
	    }
	  }

	  return function rootLinkFn (vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context
	    var contextDirs
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope)
	      }, context)
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el)
	    }, vm)

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
	  }
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode (node, options) {
	  var type = node.nodeType
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options)
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options)
	  } else {
	    return null
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement (el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = textParser.parse(el.value)
	    if (tokens) {
	      el.setAttribute(':value', textParser.tokensToExp(tokens))
	      el.value = ''
	    }
	  }
	  var linkFn
	  var hasAttrs = el.hasAttributes()
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options)
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options)
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options)
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options)
	  }
	  return linkFn
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode (node, options) {
	  var tokens = textParser.parse(node.data)
	  if (!tokens) {
	    return null
	  }
	  var frag = document.createDocumentFragment()
	  var el, token
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i]
	    el = token.tag
	      ? processTextToken(token, options)
	      : document.createTextNode(token.value)
	    frag.appendChild(el)
	  }
	  return makeTextNodeLinkFn(tokens, frag, options)
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken (token, options) {
	  var el
	  if (token.oneTime) {
	    el = document.createTextNode(token.value)
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html')
	      setTokenType('html')
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ')
	      setTokenType('text')
	    }
	  }
	  function setTokenType (type) {
	    if (token.descriptor) return
	    var parsed = dirParser.parse(token.value)
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    }
	  }
	  return el
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn (tokens, frag) {
	  return function textNodeLinkFn (vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true)
	    var childNodes = _.toArray(fragClone.childNodes)
	    var token, value, node
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i]
	      value = token.value
	      if (token.tag) {
	        node = childNodes[i]
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value)
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true))
	          } else {
	            node.data = value
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope)
	        }
	      }
	    }
	    _.replace(el, fragClone)
	  }
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList (nodeList, options) {
	  var linkFns = []
	  var nodeLinkFn, childLinkFn, node
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i]
	    nodeLinkFn = compileNode(node, options)
	    childLinkFn =
	      !(nodeLinkFn && nodeLinkFn.terminal) &&
	      node.tagName !== 'SCRIPT' &&
	      node.hasChildNodes()
	        ? compileNodeList(node.childNodes, options)
	        : null
	    linkFns.push(nodeLinkFn, childLinkFn)
	  }
	  return linkFns.length
	    ? makeChildLinkFn(linkFns)
	    : null
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn (linkFns) {
	  return function childLinkFn (vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n]
	      nodeLinkFn = linkFns[i++]
	      childrenLinkFn = linkFns[i++]
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes)
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag)
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag)
	      }
	    }
	  }
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (_.commonTagRE.test(tag)) return
	  var def = resolveAsset(options, 'elementDirectives', tag)
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent (el, options) {
	  var component = _.checkComponent(el, options)
	  if (component) {
	    var ref = _.findRef(el)
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    }
	    var componentLinkFn = function (vm, el, host, scope, frag) {
	      if (ref) {
	        _.defineReactive((scope || vm).$refs, ref, null)
	      }
	      vm._bindDir(descriptor, el, host, scope, frag)
	    }
	    componentLinkFn.terminal = true
	    return componentLinkFn
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives (el, options) {
	  // skip v-pre
	  if (_.attr(el, 'v-pre') !== null) {
	    return skip
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip
	    }
	  }
	  var value, dirName
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i]
	    /* eslint-disable no-cond-assign */
	    if (value = el.getAttribute('v-' + dirName)) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	    /* eslint-enable no-cond-assign */
	  }
	}

	function skip () {}
	skip.terminal = true

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
	  var parsed = dirParser.parse(value)
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  }
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = _.findRef(el)
	  }
	  var fn = function terminalNodeLinkFn (vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      _.defineReactive((scope || vm).$refs, descriptor.ref, null)
	    }
	    vm._bindDir(descriptor, el, host, scope, frag)
	  }
	  fn.terminal = true
	  return fn
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives (attrs, options) {
	  var i = attrs.length
	  var dirs = []
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens
	  while (i--) {
	    attr = attrs[i]
	    name = rawName = attr.name
	    value = rawValue = attr.value
	    tokens = textParser.parse(value)
	    // reset arg
	    arg = null
	    // check modifiers
	    modifiers = parseModifiers(name)
	    name = name.replace(modifierRE, '')

	    // attribute interpolations
	    if (tokens) {
	      value = textParser.tokensToExp(tokens)
	      arg = name
	      pushDir('bind', publicDirectives.bind, true)
	      // warn against mixing mustaches with v-bind
	      if (true) {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class'
	        })) {
	          _.warn(
	            'class="' + rawValue + '": Do not mix mustache interpolation ' +
	            'and v-bind for "class" on the same element. Use one or the other.'
	          )
	        }
	      }
	    } else

	    // special attribute: transition
	    if (transitionRE.test(name)) {
	      modifiers.literal = !bindRE.test(name)
	      pushDir('transition', internalDirectives.transition)
	    } else

	    // event handlers
	    if (onRE.test(name)) {
	      arg = name.replace(onRE, '')
	      pushDir('on', publicDirectives.on)
	    } else

	    // attribute bindings
	    if (bindRE.test(name)) {
	      dirName = name.replace(bindRE, '')
	      if (dirName === 'style' || dirName === 'class') {
	        pushDir(dirName, internalDirectives[dirName])
	      } else {
	        arg = dirName
	        pushDir('bind', publicDirectives.bind)
	      }
	    } else

	    // normal directives
	    if (name.indexOf('v-') === 0) {
	      // check arg
	      arg = (arg = name.match(argRE)) && arg[1]
	      if (arg) {
	        name = name.replace(argRE, '')
	      }
	      // extract directive name
	      dirName = name.slice(2)

	      // skip v-else (when used with v-show)
	      if (dirName === 'else') {
	        continue
	      }

	      dirDef = resolveAsset(options, 'directives', dirName)

	      if (true) {
	        _.assertAsset(dirDef, 'directive', dirName)
	      }

	      if (dirDef) {
	        pushDir(dirName, dirDef)
	      }
	    }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Boolean} [interp]
	   */

	  function pushDir (dirName, def, interp) {
	    var parsed = dirParser.parse(value)
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      expression: parsed.expression,
	      filters: parsed.filters,
	      interp: interp
	    })
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs)
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers (name) {
	  var res = Object.create(null)
	  var match = name.match(modifierRE)
	  if (match) {
	    var i = match.length
	    while (i--) {
	      res[match[i].slice(1)] = true
	    }
	  }
	  return res
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag)
	    }
	  }
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// text & html
	exports.text = __webpack_require__(17)
	exports.html = __webpack_require__(18)

	// logic control
	exports['for'] = __webpack_require__(20)
	exports['if'] = __webpack_require__(23)
	exports.show = __webpack_require__(24)

	// two-way binding
	exports.model = __webpack_require__(25)

	// event handling
	exports.on = __webpack_require__(30)

	// attributes
	exports.bind = __webpack_require__(31)

	// ref & el
	exports.el = __webpack_require__(33)
	exports.ref = __webpack_require__(34)

	// cloak
	exports.cloak = __webpack_require__(35)


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	module.exports = {

	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'data'
	      : 'textContent'
	  },

	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(19)

	module.exports = {

	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html')
	      _.replace(this.el, this.anchor)
	    }
	  },

	  update: function (value) {
	    value = _.toString(value)
	    if (this.nodes) {
	      this.swap(value)
	    } else {
	      this.el.innerHTML = value
	    }
	  },

	  swap: function (value) {
	    // remove old nodes
	    var i = this.nodes.length
	    while (i--) {
	      _.remove(this.nodes[i])
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true)
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes)
	    _.before(frag, this.anchor)
	  }
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(7)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)

	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [
	    2,
	    '<table><tbody></tbody><colgroup>',
	    '</colgroup></table>'
	  ]
	}

	map.td =
	map.th = [
	  3,
	  '<table><tbody><tr>',
	  '</tr></tbody></table>'
	]

	map.option =
	map.optgroup = [
	  1,
	  '<select multiple="multiple">',
	  '</select>'
	]

	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>']

	map.g =
	map.defs =
	map.symbol =
	map.use =
	map.image =
	map.text =
	map.circle =
	map.ellipse =
	map.line =
	map.path =
	map.polygon =
	map.polyline =
	map.rect = [
	  1,
	  '<svg ' +
	    'xmlns="http://www.w3.org/2000/svg" ' +
	    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
	    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
	    'version="1.1">',
	  '</svg>'
	]

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate (node) {
	  return _.isTemplate(node) &&
	    node.content instanceof DocumentFragment
	}

	var tagRE = /<([\w:]+)/
	var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */

	function stringToFragment (templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString)
	  if (hit) {
	    return hit
	  }

	  var frag = document.createDocumentFragment()
	  var tagMatch = templateString.match(tagRE)
	  var entityMatch = entityRE.test(templateString)

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(
	      document.createTextNode(templateString)
	    )
	  } else {

	    var tag = tagMatch && tagMatch[1]
	    var wrap = map[tag] || map._default
	    var depth = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node = document.createElement('div')

	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }

	    var child
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	    /* eslint-enable no-cond-assign */
	      frag.appendChild(child)
	    }
	  }

	  templateCache.put(templateString, frag)
	  return frag
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment (node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    _.trimNode(node.content)
	    return node.content
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	  /* eslint-enable no-cond-assign */
	    frag.appendChild(child)
	  }
	  _.trimNode(frag)
	  return frag
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var a = document.createElement('div')
	    a.innerHTML = '<template>1</template>'
	    return !a.cloneNode(true).firstChild.innerHTML
	  } else {
	    return false
	  }
	})()

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var t = document.createElement('textarea')
	    t.placeholder = 't'
	    return t.cloneNode(true).value === 't'
	  } else {
	    return false
	  }
	})()

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	exports.clone = function (node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode()
	  }
	  var res = node.cloneNode(true)
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var clone = res
	    if (isRealTemplate(node)) {
	      node = node.content
	      clone = res.content
	    }
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = clone.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          exports.clone(original[i]),
	          cloned[i]
	        )
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value
	    } else {
	      original = node.querySelectorAll('textarea')
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea')
	        i = cloned.length
	        while (i--) {
	          cloned[i].value = original[i].value
	        }
	      }
	    }
	  }
	  return res
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */

	exports.parse = function (template, clone, noSelector) {
	  var node, frag

	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    _.trimNode(template)
	    return clone
	      ? exports.clone(template)
	      : template
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template)
	      if (!frag) {
	        node = document.getElementById(template.slice(1))
	        if (node) {
	          frag = nodeToFragment(node)
	          // save selector to cache
	          idSelectorCache.put(template, frag)
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template)
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template)
	  }

	  return frag && clone
	    ? exports.clone(frag)
	    : frag
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(21)
	var isObject = _.isObject
	var uid = 0

	module.exports = {

	  priority: 2000,

	  params: [
	    'track-by',
	    'stagger',
	    'enter-stagger',
	    'leave-stagger'
	  ],

	  bind: function () {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/)
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/)
	      if (itMatch) {
	        this.iterator = itMatch[1].trim()
	        this.alias = itMatch[2].trim()
	      } else {
	        this.alias = inMatch[1].trim()
	      }
	      this.expression = inMatch[2]
	    }

	    if (!this.alias) {
	      ("development") !== 'production' && _.warn(
	        'Alias is required in v-for.'
	      )
	      return
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + (++uid)

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName
	    this.isOption =
	      (tag === 'OPTION' || tag === 'OPTGROUP') &&
	      this.el.parentNode.tagName === 'SELECT'

	    // setup anchor nodes
	    this.start = _.createAnchor('v-for-start')
	    this.end = _.createAnchor('v-for-end')
	    _.replace(this.el, this.end)
	    _.before(this.start, this.end)

	    // cache
	    this.cache = Object.create(null)

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el)
	  },

	  update: function (data) {
	    this.diff(data)
	    this.updateRef()
	    this.updateModel()
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function (data) {
	    // check if the Array was converted from an Object
	    var item = data[0]
	    var convertedFromObject = this.fromObject =
	      isObject(item) &&
	      item.hasOwnProperty('$key') &&
	      item.hasOwnProperty('$value')

	    var trackByKey = this.params.trackBy
	    var oldFrags = this.frags
	    var frags = this.frags = new Array(data.length)
	    var alias = this.alias
	    var iterator = this.iterator
	    var start = this.start
	    var end = this.end
	    var inDoc = _.inDoc(start)
	    var init = !oldFrags
	    var i, l, frag, key, value, primitive

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i]
	      key = convertedFromObject ? item.$key : null
	      value = convertedFromObject ? item.$value : item
	      primitive = !isObject(value)
	      frag = !init && this.getCachedFrag(value, i, key)
	      if (frag) { // reusable fragment
	        frag.reused = true
	        // update $index
	        frag.scope.$index = i
	        // update $key
	        if (key) {
	          frag.scope.$key = key
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value
	        }
	      } else { // new isntance
	        frag = this.create(value, alias, i, key)
	        frag.fresh = !init
	      }
	      frags[i] = frag
	      if (init) {
	        frag.before(end)
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0
	    var totalRemoved = oldFrags.length - frags.length
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i]
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag)
	        this.remove(frag, removalIndex++, totalRemoved, inDoc)
	      }
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev
	    var insertionIndex = 0
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i]
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1]
	      prevEl = targetPrev
	        ? targetPrev.staggerCb
	          ? targetPrev.staggerAnchor
	          : targetPrev.end || targetPrev.node
	        : start
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id)
	        if (currentPrev !== targetPrev) {
	          this.move(frag, prevEl)
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDoc)
	      }
	      frag.reused = frag.fresh = false
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function (value, alias, index, key) {
	    var host = this._host
	    // create iteration scope
	    var parentScope = this._scope || this.vm
	    var scope = Object.create(parentScope)
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs)
	    scope.$els = Object.create(parentScope.$els)
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope
	    // for two-way binding on alias
	    scope.$forContext = this
	    // define scope properties
	    _.defineReactive(scope, alias, value)
	    _.defineReactive(scope, '$index', index)
	    if (key) {
	      _.defineReactive(scope, '$key', key)
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      _.define(scope, '$key', null)
	    }
	    if (this.iterator) {
	      _.defineReactive(scope, this.iterator, key !== null ? key : index)
	    }
	    var frag = this.factory.create(host, scope, this._frag)
	    frag.forId = this.id
	    this.cacheFrag(value, frag, index, key)
	    return frag
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function () {
	    var ref = this.descriptor.ref
	    if (!ref) return
	    var hash = (this._scope || this.vm).$refs
	    var refs
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag)
	    } else {
	      refs = {}
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag)
	      })
	    }
	    hash[ref] = refs
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function () {
	    if (this.isOption) {
	      var parent = this.start.parentNode
	      var model = parent && parent.__v_model
	      if (model) {
	        model.forceUpdate()
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */

	  insert: function (frag, index, prevEl, inDoc) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel()
	      frag.staggerCb = null
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter')
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor
	      if (!anchor) {
	        anchor = frag.staggerAnchor = _.createAnchor('stagger-anchor')
	        anchor.__vfrag__ = frag
	      }
	      _.after(anchor, prevEl)
	      var op = frag.staggerCb = _.cancellable(function () {
	        frag.staggerCb = null
	        frag.before(anchor)
	        _.remove(anchor)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      frag.before(prevEl.nextSibling)
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDoc
	   */

	  remove: function (frag, index, total, inDoc) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel()
	      frag.staggerCb = null
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave')
	    if (inDoc && staggerAmount) {
	      var op = frag.staggerCb = _.cancellable(function () {
	        frag.staggerCb = null
	        frag.remove()
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      frag.remove()
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function (frag, prevEl) {
	    frag.before(prevEl.nextSibling, false)
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function (value, frag, index, key) {
	    var trackByKey = this.params.trackBy
	    var cache = this.cache
	    var primitive = !isObject(value)
	    var id
	    if (key || trackByKey || primitive) {
	      id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      if (!cache[id]) {
	        cache[id] = frag
	      } else if (trackByKey !== '$index') {
	        ("development") !== 'production' &&
	        this.warnDuplicate(value)
	      }
	    } else {
	      id = this.id
	      if (value.hasOwnProperty(id)) {
	        if (value[id] === null) {
	          value[id] = frag
	        } else {
	          ("development") !== 'production' &&
	          this.warnDuplicate(value)
	        }
	      } else {
	        _.define(value, id, frag)
	      }
	    }
	    frag.raw = value
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function (value, index, key) {
	    var trackByKey = this.params.trackBy
	    var primitive = !isObject(value)
	    var frag
	    if (key || trackByKey || primitive) {
	      var id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      frag = this.cache[id]
	    } else {
	      frag = value[this.id]
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      ("development") !== 'production' &&
	      this.warnDuplicate(value)
	    }
	    return frag
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function (frag) {
	    var value = frag.raw
	    var trackByKey = this.params.trackBy
	    var scope = frag.scope
	    var index = scope.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = scope.hasOwnProperty('$key') && scope.$key
	    var primitive = !isObject(value)
	    if (trackByKey || key || primitive) {
	      var id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      this.cache[id] = null
	    } else {
	      value[this.id] = null
	      frag.raw = null
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function (frag, index, total, type) {
	    type = type + 'Stagger'
	    var trans = frag.node.__v_trans
	    var hooks = trans && trans.hooks
	    var hook = hooks && (hooks[type] || hooks.stagger)
	    return hook
	      ? hook.call(frag, index, total)
	      : index * parseInt(this.params[type] || this.params.stagger, 10)
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function (value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value
	    return value
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function (value) {
	    if (_.isArray(value)) {
	      return value
	    } else if (_.isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value)
	      var i = keys.length
	      var res = new Array(i)
	      var key
	      while (i--) {
	        key = keys[i]
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        }
	      }
	      return res
	    } else {
	      if (typeof value === 'number') {
	        value = range(value)
	      }
	      return value || []
	    }
	  },

	  unbind: function () {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null
	    }
	    if (this.frags) {
	      var i = this.frags.length
	      var frag
	      while (i--) {
	        frag = this.frags[i]
	        this.deleteCachedFrag(frag)
	        frag.destroy()
	      }
	    }
	  }
	}

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag (frag, anchor, id) {
	  var el = frag.node.previousSibling
	  /* istanbul ignore if */
	  if (!el) return
	  frag = el.__vfrag__
	  while (
	    (!frag || frag.forId !== id || !frag.inserted) &&
	    el !== anchor
	  ) {
	    el = el.previousSibling
	    /* istanbul ignore if */
	    if (!el) return
	    frag = el.__vfrag__
	  }
	  return frag
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag (frag) {
	  return frag.node.__vue__ || frag.node.nextSibling.__vue__
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range (n) {
	  var i = -1
	  var ret = new Array(n)
	  while (++i < n) {
	    ret[i] = i
	  }
	  return ret
	}

	if (true) {
	  module.exports.warnDuplicate = function (value) {
	    _.warn(
	      'Duplicate value found in v-for="' + this.descriptor.raw + '": ' +
	      JSON.stringify(value) + '. Use track-by="$index" if ' +
	      'you are expecting duplicate values.'
	    )
	  }
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(14)
	var templateParser = __webpack_require__(19)
	var Fragment = __webpack_require__(22)
	var Cache = __webpack_require__(7)
	var linkerCache = new Cache(5000)

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */

	function FragmentFactory (vm, el) {
	  this.vm = vm
	  var template
	  var isString = typeof el === 'string'
	  if (isString || _.isTemplate(el)) {
	    template = templateParser.parse(el, true)
	  } else {
	    template = document.createDocumentFragment()
	    template.appendChild(el)
	  }
	  this.template = template
	  // linker can be cached, but only for components
	  var linker
	  var cid = vm.constructor.cid
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML)
	    linker = linkerCache.get(cacheId)
	    if (!linker) {
	      linker = compiler.compile(template, vm.$options, true)
	      linkerCache.put(cacheId, linker)
	    }
	  } else {
	    linker = compiler.compile(template, vm.$options, true)
	  }
	  this.linker = linker
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = templateParser.clone(this.template)
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag)
	}

	module.exports = FragmentFactory


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(9)

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */

	function Fragment (linker, vm, frag, host, scope, parentFrag) {
	  this.children = []
	  this.childFrags = []
	  this.vm = vm
	  this.scope = scope
	  this.inserted = false
	  this.parentFrag = parentFrag
	  if (parentFrag) {
	    parentFrag.childFrags.push(this)
	  }
	  this.unlink = linker(vm, frag, host, scope, this)
	  var single = this.single = frag.childNodes.length === 1
	  if (single) {
	    this.node = frag.childNodes[0]
	    this.before = singleBefore
	    this.remove = singleRemove
	  } else {
	    this.node = _.createAnchor('fragment-start')
	    this.end = _.createAnchor('fragment-end')
	    this.frag = frag
	    _.prepend(this.node, frag)
	    frag.appendChild(this.end)
	    this.before = multiBefore
	    this.remove = multiRemove
	  }
	  this.node.__vfrag__ = this
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i])
	  }
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook)
	  }
	}

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this)
	  }
	  this.unlink()
	}

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore (target, withTransition) {
	  this.inserted = true
	  var method = withTransition !== false
	    ? transition.before
	    : _.before
	  method(this.node, target, this.vm)
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove () {
	  this.inserted = false
	  var shouldCallRemove = _.inDoc(this.node)
	  var self = this
	  self.callHook(destroyChild)
	  transition.remove(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach)
	    }
	    self.destroy()
	  })
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore (target, withTransition) {
	  this.inserted = true
	  var vm = this.vm
	  var method = withTransition !== false
	    ? transition.before
	    : _.before
	  _.mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm)
	  })
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove () {
	  this.inserted = false
	  var self = this
	  var shouldCallRemove = _.inDoc(this.node)
	  self.callHook(destroyChild)
	  _.removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach)
	    }
	    self.destroy()
	  })
	}

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach (child) {
	  if (!child._isAttached) {
	    child._callHook('attached')
	  }
	}

	/**
	 * Call destroy for all contained instances,
	 * with remove:false and defer:true.
	 * Defer is necessary because we need to
	 * keep the children to call detach hooks
	 * on them.
	 *
	 * @param {Vue} child
	 */

	function destroyChild (child) {
	  child.$destroy(false, true)
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach (child) {
	  if (child._isAttached) {
	    child._callHook('detached')
	  }
	}

	module.exports = Fragment


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(21)

	module.exports = {

	  priority: 2000,

	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling
	      if (next && _.attr(next, 'v-else') !== null) {
	        _.remove(next)
	        this.elseFactory = new FragmentFactory(this.vm, next)
	      }
	      // check main block
	      this.anchor = _.createAnchor('v-if')
	      _.replace(el, this.anchor)
	      this.factory = new FragmentFactory(this.vm, el)
	    } else {
	      ("development") !== 'production' && _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an instance root element.'
	      )
	      this.invalid = true
	    }
	  },

	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      if (!this.frag) {
	        this.insert()
	      }
	    } else {
	      this.remove()
	    }
	  },

	  insert: function () {
	    if (this.elseFrag) {
	      this.elseFrag.remove()
	      this.elseFrag = null
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag)
	    this.frag.before(this.anchor)
	  },

	  remove: function () {
	    if (this.frag) {
	      this.frag.remove()
	      this.frag = null
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag)
	      this.elseFrag.before(this.anchor)
	    }
	  },

	  unbind: function () {
	    if (this.frag) {
	      this.frag.destroy()
	    }
	  }
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(9)

	module.exports = {

	  bind: function () {
	    // check else block
	    var next = this.el.nextElementSibling
	    if (next && _.attr(next, 'v-else') !== null) {
	      this.elseEl = next
	    }
	  },

	  update: function (value) {
	    this.apply(this.el, value)
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value)
	    }
	  },

	  apply: function (el, value) {
	    function done () {
	      el.style.display = value ? '' : 'none'
	    }
	    // do not apply transition if not in doc
	    if (_.inDoc(el)) {
	      transition.apply(el, value ? 1 : -1, done, this.vm)
	    } else {
	      done()
	    }
	  }
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	var handlers = {
	  text: __webpack_require__(26),
	  radio: __webpack_require__(27),
	  select: __webpack_require__(28),
	  checkbox: __webpack_require__(29)
	}

	module.exports = {

	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function () {
	    // friendly warning...
	    this.checkFilters()
	    if (this.hasRead && !this.hasWrite) {
	      ("development") !== 'production' && _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text
	    } else {
	      ("development") !== 'production' && _.warn(
	        'v-model does not support element type: ' + tag
	      )
	      return
	    }
	    el.__v_model = this
	    handler.bind.call(this)
	    this.update = handler.update
	    this._unbind = handler.unbind
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function () {
	    var filters = this.filters
	    if (!filters) return
	    var i = filters.length
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true
	      }
	      if (filter.write) {
	        this.hasWrite = true
	      }
	    }
	  },

	  unbind: function () {
	    this.el.__v_model = null
	    this._unbind && this._unbind()
	  }
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el
	    var isRange = el.type === 'range'
	    var lazy = this.params.lazy
	    var number = this.params.number
	    var debounce = this.params.debounce

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false
	    if (!_.isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true
	      })
	      this.on('compositionend', function () {
	        composing = false
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener()
	        }
	      })
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false
	    if (!isRange) {
	      this.on('focus', function () {
	        self.focused = true
	      })
	      this.on('blur', function () {
	        self.focused = false
	        self.listener()
	      })
	    }

	    // Now attach the main listener
	    this.listener = function () {
	      if (composing) return
	      var val = number || isRange
	        ? _.toNumber(el.value)
	        : el.value
	      self.set(val)
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      _.nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value)
	        }
	      })
	    }

	    // apply debounce
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function'
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener)
	      if (!lazy) {
	        jQuery(el).on('input', this.listener)
	      }
	    } else {
	      this.on('change', this.listener)
	      if (!lazy) {
	        this.on('input', this.listener)
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.on('cut', function () {
	        _.nextTick(self.listener)
	      })
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener()
	        }
	      })
	    }

	    // set initial value if present
	    if (
	      el.hasAttribute('value') ||
	      (el.tagName === 'TEXTAREA' && el.value.trim())
	    ) {
	      this.afterBind = this.listener
	    }
	  },

	  update: function (value) {
	    this.el.value = _.toString(value)
	  },

	  unbind: function () {
	    var el = this.el
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener)
	      jQuery(el).off('input', this.listener)
	    }
	  }
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value
	      }
	      var val = el.value
	      if (self.params.number) {
	        val = _.toNumber(val)
	      }
	      return val
	    }

	    this.listener = function () {
	      self.set(self.getValue())
	    }
	    this.on('change', this.listener)

	    if (el.checked) {
	      this.afterBind = this.listener
	    }
	  },

	  update: function (value) {
	    this.el.checked = _.looseEqual(value, this.getValue())
	  }
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get())
	      }
	    }

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple')

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple)
	      value = self.params.number
	        ? _.isArray(value)
	          ? value.map(_.toNumber)
	          : _.toNumber(value)
	        : value
	      self.set(value)
	    }
	    this.on('change', this.listener)

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true)
	    if ((multiple && initValue.length) ||
	        (!multiple && initValue !== null)) {
	      this.afterBind = this.listener
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate)
	  },

	  update: function (value) {
	    var el = this.el
	    el.selectedIndex = -1
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var op, val
	    while (i--) {
	      op = options[i]
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      /* eslint-disable eqeqeq */
	      op.selected = multi
	        ? indexOf(value, val) > -1
	        : _.looseEqual(value, val)
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function () {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate)
	  }
	}

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue (el, multi, init) {
	  var res = multi ? [] : null
	  var op, val, selected
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i]
	    selected = init
	      ? op.hasAttribute('selected')
	      : op.selected
	    if (selected) {
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      if (multi) {
	        res.push(val)
	      } else {
	        return val
	      }
	    }
	  }
	  return res
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf (arr, val) {
	  var i = arr.length
	  while (i--) {
	    if (_.looseEqual(arr[i], val)) {
	      return i
	    }
	  }
	  return -1
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el

	    this.getValue = function () {
	      return el.hasOwnProperty('_value')
	        ? el._value
	        : self.params.number
	          ? _.toNumber(el.value)
	          : el.value
	    }

	    function getBooleanValue () {
	      var val = el.checked
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue
	      }
	      return val
	    }

	    this.listener = function () {
	      var model = self._watcher.value
	      if (_.isArray(model)) {
	        var val = self.getValue()
	        if (el.checked) {
	          if (_.indexOf(model, val) < 0) {
	            model.push(val)
	          }
	        } else {
	          model.$remove(val)
	        }
	      } else {
	        self.set(getBooleanValue())
	      }
	    }

	    this.on('change', this.listener)
	    if (el.checked) {
	      this.afterBind = this.listener
	    }
	  },

	  update: function (value) {
	    var el = this.el
	    if (_.isArray(value)) {
	      el.checked = _.indexOf(value, this.getValue()) > -1
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = _.looseEqual(value, el._trueValue)
	      } else {
	        el.checked = !!value
	      }
	    }
	  }
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	}

	function keyFilter (handler, keys) {
	  var codes = keys.map(function (key) {
	    var code = keyCodes[key]
	    if (!code) {
	      code = parseInt(key, 10)
	    }
	    return code
	  })
	  return function keyHandler (e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e)
	    }
	  }
	}

	function stopFilter (handler) {
	  return function stopHandler (e) {
	    e.stopPropagation()
	    return handler.call(this, e)
	  }
	}

	function preventFilter (handler) {
	  return function preventHandler (e) {
	    e.preventDefault()
	    return handler.call(this, e)
	  }
	}

	module.exports = {

	  acceptStatement: true,
	  priority: 700,

	  bind: function () {
	    // deal with iframes
	    if (
	      this.el.tagName === 'IFRAME' &&
	      this.arg !== 'load'
	    ) {
	      var self = this
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler)
	      }
	      this.on('load', this.iframeBind)
	    }
	  },

	  update: function (handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {}
	    }

	    if (typeof handler !== 'function') {
	      ("development") !== 'production' && _.warn(
	        'v-on:' + this.arg + '="' +
	        this.expression + '" expects a function value, ' +
	        'got ' + handler
	      )
	      return
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler)
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler)
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers)
	      .filter(function (key) {
	        return key !== 'stop' && key !== 'prevent'
	      })
	    if (keys.length) {
	      handler = keyFilter(handler, keys)
	    }

	    this.reset()
	    var scope = this._scope || this.vm
	    this.handler = function (e) {
	      scope.$event = e
	      var res = handler(e)
	      scope.$event = null
	      return res
	    }
	    if (this.iframeBind) {
	      this.iframeBind()
	    } else {
	      _.on(this.el, this.arg, this.handler)
	    }
	  },

	  reset: function () {
	    var el = this.iframeBind
	      ? this.el.contentWindow
	      : this.el
	    if (this.handler) {
	      _.off(el, this.arg, this.handler)
	    }
	  },

	  unbind: function () {
	    this.reset()
	  }
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/

	// these input element attributes should also set their
	// corresponding properties
	var inputProps = {
	  value: 1,
	  checked: 1,
	  selected: 1
	}

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	}

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/

	module.exports = {

	  priority: 850,

	  bind: function () {
	    var attr = this.arg
	    var tag = this.el.tagName
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true
	    }
	    // handle interpolation bindings
	    if (this.descriptor.interp) {
	      // only allow binding on native attributes
	      if (
	        disallowedInterpAttrRE.test(attr) ||
	        (attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT'))
	      ) {
	        ("development") !== 'production' && _.warn(
	          attr + '="' + this.descriptor.raw + '": ' +
	          'attribute interpolation is not allowed in Vue.js ' +
	          'directives and special attributes.'
	        )
	        this.el.removeAttribute(attr)
	        this.invalid = true
	      }

	      /* istanbul ignore if */
	      if (true) {
	        var raw = attr + '="' + this.descriptor.raw + '": '
	        // warn src
	        if (attr === 'src') {
	          _.warn(
	            raw + 'interpolation in "src" attribute will cause ' +
	            'a 404 request. Use v-bind:src instead.'
	          )
	        }

	        // warn style
	        if (attr === 'style') {
	          _.warn(
	            raw + 'interpolation in "style" attribute will cause ' +
	            'the attribute to be discarded in Internet Explorer. ' +
	            'Use v-bind:style instead.'
	          )
	        }
	      }
	    }
	  },

	  update: function (value) {
	    if (this.invalid) {
	      return
	    }
	    var attr = this.arg
	    if (this.arg) {
	      this.handleSingle(attr, value)
	    } else {
	      this.handleObject(value || {})
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: __webpack_require__(32).handleObject,

	  handleSingle: function (attr, value) {
	    if (inputProps[attr] && attr in this.el) {
	      this.el[attr] = attr === 'value'
	        ? (value || '') // IE9 will set input.value to "null" for null...
	        : value
	    }
	    // set model props
	    var modelProp = modelProps[attr]
	    if (modelProp) {
	      this.el[modelProp] = value
	      // update v-model if present
	      var model = this.el.__v_model
	      if (model) {
	        model.listener()
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
	      this.el.removeAttribute(attr)
	      return
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value)
	      } else {
	        this.el.setAttribute(attr, value)
	      }
	    } else {
	      this.el.removeAttribute(attr)
	    }
	  }
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var testEl = null
	var propCache = {}

	module.exports = {

	  deep: true,

	  update: function (value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value
	    } else if (_.isArray(value)) {
	      this.handleObject(value.reduce(_.extend, {}))
	    } else {
	      this.handleObject(value || {})
	    }
	  },

	  handleObject: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var name, val
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null)
	        delete cache[name]
	      }
	    }
	    for (name in value) {
	      val = value[name]
	      if (val !== cache[name]) {
	        cache[name] = val
	        this.handleSingle(name, val)
	      }
	    }
	  },

	  handleSingle: function (prop, value) {
	    prop = normalize(prop)
	    if (!prop) return // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += ''
	    if (value) {
	      var isImportant = importantRE.test(value)
	        ? 'important'
	        : ''
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim()
	      }
	      this.el.style.setProperty(prop, value, isImportant)
	    } else {
	      this.el.style.removeProperty(prop)
	    }
	  }

	}

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop]
	  }
	  var res = prefix(prop)
	  propCache[prop] = propCache[res] = res
	  return res
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix (prop) {
	  prop = _.hyphenate(prop)
	  var camel = _.camelize(prop)
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
	  if (!testEl) {
	    testEl = document.createElement('div')
	  }
	  if (camel in testEl.style) {
	    return prop
	  }
	  var i = prefixes.length
	  var prefixed
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop
	    }
	  }
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	module.exports = {

	  priority: 1500,

	  bind: function () {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return
	    }
	    var id = this.id = _.camelize(this.arg)
	    var refs = (this._scope || this.vm).$els
	    if (refs.hasOwnProperty(id)) {
	      refs[id] = this.el
	    } else {
	      _.defineReactive(refs, id, this.el)
	    }
	  },

	  unbind: function () {
	    var refs = (this._scope || this.vm).$els
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null
	    }
	  }
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	if (true) {
	  module.exports = {
	    bind: function () {
	      __webpack_require__(1).warn(
	        'v-ref:' + this.arg + ' must be used on a child ' +
	        'component. Found on <' + this.el.tagName.toLowerCase() + '>.'
	      )
	    }
	  }
	}


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {
	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute('v-cloak')
	    })
	  }
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports.style = __webpack_require__(32)
	exports['class'] = __webpack_require__(37)
	exports.component = __webpack_require__(38)
	exports.prop = __webpack_require__(39)
	exports.transition = __webpack_require__(45)


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var addClass = _.addClass
	var removeClass = _.removeClass

	module.exports = {

	  deep: true,

	  update: function (value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value))
	    } else if (_.isPlainObject(value)) {
	      this.handleObject(value)
	    } else if (_.isArray(value)) {
	      this.handleArray(value)
	    } else {
	      this.cleanup()
	    }
	  },

	  handleObject: function (value) {
	    this.cleanup(value)
	    var keys = this.prevKeys = Object.keys(value)
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i]
	      if (value[key]) {
	        addClass(this.el, key)
	      } else {
	        removeClass(this.el, key)
	      }
	    }
	  },

	  handleArray: function (value) {
	    this.cleanup(value)
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i])
	      }
	    }
	    this.prevKeys = value.slice()
	  },

	  cleanup: function (value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        var key = this.prevKeys[i]
	        if (key && (!value || !contains(value, key))) {
	          removeClass(this.el, key)
	        }
	      }
	    }
	  }
	}

	function stringToObject (value) {
	  var res = {}
	  var keys = value.trim().split(/\s+/)
	  var i = keys.length
	  while (i--) {
	    res[keys[i]] = true
	  }
	  return res
	}

	function contains (value, key) {
	  return _.isArray(value)
	    ? value.indexOf(key) > -1
	    : value.hasOwnProperty(key)
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(19)

	module.exports = {

	  priority: 1500,

	  params: [
	    'keep-alive',
	    'transition-mode',
	    'inline-template'
	  ],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function () {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this.pendingComponentCb =
	      this.Component = null
	      // transition related state
	      this.pendingRemovals = 0
	      this.pendingRemovalCb = null
	      // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      // remove is attribute
	      this.el.removeAttribute('is')
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression)
	      }
	    } else {
	      ("development") !== 'production' && _.warn(
	        'cannot mount component "' + this.expression + '" ' +
	        'on already mounted element: ' + this.el
	      )
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function (value) {
	    if (!this.literal) {
	      this.setComponent(value)
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function (value, cb) {
	    this.invalidatePending()
	    if (!value) {
	      // just remove current
	      this.unbuild(true)
	      this.remove(this.childVM, cb)
	      this.childVM = null
	    } else {
	      var self = this
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb)
	      })
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */

	  resolveComponent: function (id, cb) {
	    var self = this
	    this.pendingComponentCb = _.cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id
	      self.Component = Component
	      cb()
	    })
	    this.vm._resolveComponent(id, this.pendingComponentCb)
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function (cb) {
	    // actual mount
	    this.unbuild(true)
	    var self = this
	    var activateHook = this.Component.options.activate
	    var cached = this.getCached()
	    var newComponent = this.build()
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent
	      activateHook.call(newComponent, function () {
	        self.waitingFor = null
	        self.transition(newComponent, cb)
	      })
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef()
	      }
	      this.transition(newComponent, cb)
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function () {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel()
	      this.pendingComponentCb = null
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function (extraOptions) {
	    var cached = this.getCached()
	    if (cached) {
	      return cached
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: templateParser.clone(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      }
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        _.extend(options, extraOptions)
	      }
	      var child = new this.Component(options)
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child
	      }
	      /* istanbul ignore if */
	      if (("development") !== 'production' &&
	          this.el.hasAttribute('transition') &&
	          child._isFragment) {
	        _.warn(
	          'Transitions will not work on a fragment instance. ' +
	          'Template: ' + child.$options.template
	        )
	      }
	      return child
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function () {
	    return this.keepAlive && this.cache[this.Component.cid]
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function (defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy()
	      this.waitingFor = null
	    }
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true)
	      }
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer)
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function (child, cb) {
	    var keepAlive = this.keepAlive
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++
	      this.pendingRemovalCb = cb
	      var self = this
	      child.$remove(function () {
	        self.pendingRemovals--
	        if (!keepAlive) child._cleanup()
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb()
	          self.pendingRemovalCb = null
	        }
	      })
	    } else if (cb) {
	      cb()
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function (target, cb) {
	    var self = this
	    var current = this.childVM
	    // for devtool inspection
	    if (true) {
	      if (current) current._inactive = true
	      target._inactive = false
	    }
	    this.childVM = target
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb)
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.anchor, cb)
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function () {
	    this.invalidatePending()
	    // Do not defer cleanup when unbinding
	    this.unbuild()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.

	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(40)
	var bindingModes = __webpack_require__(5)._propBindingModes

	module.exports = {

	  bind: function () {

	    var child = this.vm
	    var parent = child._context
	    // passed in from compiler directly
	    var prop = this.descriptor.prop
	    var childKey = prop.path
	    var parentKey = prop.parentPath
	    var twoWay = prop.mode === bindingModes.TWO_WAY

	    var parentWatcher = this.parentWatcher = new Watcher(
	      parent,
	      parentKey,
	      function (val) {
	        if (_.assertProp(prop, val)) {
	          child[childKey] = val
	        }
	      }, {
	        twoWay: twoWay,
	        filters: prop.filters,
	        // important: props need to be observed on the
	        // v-for scope if present
	        scope: this._scope
	      }
	    )

	    // set the child initial value.
	    _.initProp(child, prop, parentWatcher.value)

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(
	          child,
	          childKey,
	          function (val) {
	            parentWatcher.set(val)
	          }, {
	            // ensure sync upward before parent sync down.
	            // this is necessary in cases e.g. the child
	            // mutates a prop array, then replaces it. (#1683)
	            sync: true
	          }
	        )
	      })
	    }
	  },

	  unbind: function () {
	    this.parentWatcher.teardown()
	    if (this.childWatcher) {
	      this.childWatcher.teardown()
	    }
	  }
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(5)
	var Dep = __webpack_require__(41)
	var expParser = __webpack_require__(42)
	var batcher = __webpack_require__(44)
	var uid = 0

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */

	function Watcher (vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    _.extend(this, options)
	  }
	  var isFn = typeof expOrFn === 'function'
	  this.vm = vm
	  vm._watchers.push(this)
	  this.expression = isFn ? expOrFn.toString() : expOrFn
	  this.cb = cb
	  this.id = ++uid // uid for batching
	  this.active = true
	  this.dirty = this.lazy // for lazy watchers
	  this.deps = Object.create(null)
	  this.newDeps = null
	  this.prevError = null // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn
	    this.setter = undefined
	  } else {
	    var res = expParser.parse(expOrFn, this.twoWay)
	    this.getter = res.get
	    this.setter = res.set
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false
	}

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep
	    if (!this.deps[id]) {
	      this.deps[id] = dep
	      dep.addSub(this)
	    }
	  }
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet()
	  var scope = this.scope || this.vm
	  var value
	  try {
	    value = this.getter.call(scope, scope)
	  } catch (e) {
	    if (
	      ("development") !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '". ' +
	        (config.debug
	          ? ''
	          : 'Turn on debug mode to see stack trace.'
	        ), e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value)
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false)
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value)
	  }
	  this.afterGet()
	  return value
	}

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm
	  if (this.filters) {
	    value = scope._applyFilters(
	      value, this.value, this.filters, true)
	  }
	  try {
	    this.setter.call(scope, scope, value)
	  } catch (e) {
	    if (
	      ("development") !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '"', e
	      )
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext
	  if (true) {
	    if (
	      forContext &&
	      forContext.filters &&
	      (new RegExp(forContext.alias + '\\b')).test(this.expression)
	    ) {
	      _.warn(
	        'It seems you are using two-way binding on ' +
	        'a v-for alias (' + this.expression + '), and the ' +
	        'v-for has filters. This will not work properly. ' +
	        'Either remove the filters or use an array of ' +
	        'objects and bind to object properties instead.'
	      )
	    }
	  }
	  if (
	    forContext &&
	    forContext.alias === this.expression &&
	    !forContext.filters
	  ) {
	    if (scope.$key) { // original is an object
	      forContext.rawValue[scope.$key] = value
	    } else {
	      forContext.rawValue.$set(scope.$index, value)
	    }
	  }
	}

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this
	  this.newDeps = Object.create(null)
	}

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null
	  var ids = Object.keys(this.deps)
	  var i = ids.length
	  while (i--) {
	    var id = ids[i]
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	}

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true
	  } else if (this.sync || !config.async) {
	    this.run()
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued
	      ? shallow
	        ? this.shallow
	        : false
	      : !!shallow
	    this.queued = true
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (("development") !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace')
	    }
	    batcher.push(this)
	  }
	}

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get()
	    if (
	      value !== this.value ||
	      // Deep watchers and Array watchers should fire even
	      // when the value is the same, because the value may
	      // have mutated; but only do so if this is a
	      // non-shallow update (caused by a vm digest).
	      ((_.isArray(value) || this.deep) && !this.shallow)
	    ) {
	      // set new value
	      var oldValue = this.value
	      this.value = value
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError
	      /* istanbul ignore if */
	      if (("development") !== 'production' &&
	          config.debug && prevError) {
	        this.prevError = null
	        try {
	          this.cb.call(this.vm, value, oldValue)
	        } catch (e) {
	          _.nextTick(function () {
	            throw prevError
	          }, 0)
	          throw e
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue)
	      }
	    }
	    this.queued = this.shallow = false
	  }
	}

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target
	  this.value = this.get()
	  this.dirty = false
	  Dep.target = current
	}

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps)
	  var i = depIds.length
	  while (i--) {
	    this.deps[depIds[i]].depend()
	  }
	}

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this)
	    }
	    var depIds = Object.keys(this.deps)
	    var i = depIds.length
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cb = this.value = null
	  }
	}

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	function traverse (val) {
	  var i, keys
	  if (_.isArray(val)) {
	    i = val.length
	    while (i--) traverse(val[i])
	  } else if (_.isObject(val)) {
	    keys = Object.keys(val)
	    i = keys.length
	    while (i--) traverse(val[keys[i]])
	  }
	}

	module.exports = Watcher


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var uid = 0

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */

	function Dep () {
	  this.id = uid++
	  this.subs = []
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub)
	}

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub)
	}

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this)
	}

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs)
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	}

	module.exports = Dep


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Path = __webpack_require__(43)
	var Cache = __webpack_require__(7)
	var expressionCache = new Cache(1000)

	var allowedKeywords =
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
	  'encodeURIComponent,parseInt,parseFloat'
	var allowedKeywordsRE =
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')

	// keywords that don't make sense inside expressions
	var improperKeywords =
	  'break,case,class,catch,const,continue,debugger,default,' +
	  'delete,do,else,export,extends,finally,for,function,if,' +
	  'import,in,instanceof,let,return,super,switch,throw,try,' +
	  'var,while,with,yield,enum,await,implements,package,' +
	  'proctected,static,interface,private,public'
	var improperKeywordsRE =
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')

	var wsRE = /\s/g
	var newlineRE = /\n/g
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
	var restoreRE = /"(\d+)"/g
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
	var booleanLiteralRE = /^(true|false)$/

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = []

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save (str, isString) {
	  var i = saved.length
	  saved[i] = isString
	    ? str.replace(newlineRE, '\\n')
	    : str
	  return '"' + i + '"'
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite (raw) {
	  var c = raw.charAt(0)
	  var path = raw.slice(1)
	  if (allowedKeywordsRE.test(path)) {
	    return raw
	  } else {
	    path = path.indexOf('"') > -1
	      ? path.replace(restoreRE, restore)
	      : path
	    return c + 'scope.' + path
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore (str, i) {
	  return saved[i]
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function compileExpFns (exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    ("development") !== 'production' && _.warn(
	      'Avoid using reserved keywords in expression: ' + exp
	    )
	  }
	  // reset state
	  saved.length = 0
	  // save strings and object literal keys
	  var body = exp
	    .replace(saveRE, save)
	    .replace(wsRE, '')
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body)
	    .replace(pathReplaceRE, rewrite)
	    .replace(restoreRE, restore)
	  var getter = makeGetter(body)
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet
	        ? makeSetter(body)
	        : null
	    }
	  }
	}

	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compilePathFns (exp) {
	  var getter, path
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.')
	    path.raw = exp
	    getter = Path.compileGetter(path)
	  } else {
	    // do the real parsing
	    path = Path.parse(exp)
	    getter = path.get
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function (obj, val) {
	      Path.set(obj, path, val)
	    }
	  }
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetter (body) {
	  try {
	    return new Function('scope', 'return ' + body + ';')
	  } catch (e) {
	    ("development") !== 'production' && _.warn(
	      'Invalid expression. ' +
	      'Generated function body: ' + body
	    )
	  }
	}

	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeSetter (body) {
	  try {
	    return new Function('scope', 'value', body + '=value;')
	  } catch (e) {
	    ("development") !== 'production' && _.warn(
	      'Invalid setter function body: ' + body
	    )
	  }
	}

	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */

	function checkSetter (hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body)
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	exports.parse = function (exp, needSet) {
	  exp = exp.trim()
	  // try cache
	  var hit = expressionCache.get(exp)
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit)
	    }
	    return hit
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp)
	    ? compilePathFns(exp)
	    : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(7)
	var pathCache = new Cache(1000)
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/

	// actions
	var APPEND = 0
	var PUSH = 1

	// states
	var BEFORE_PATH = 0
	var IN_PATH = 1
	var BEFORE_IDENT = 2
	var IN_IDENT = 3
	var BEFORE_ELEMENT = 4
	var AFTER_ZERO = 5
	var IN_INDEX = 6
	var IN_SINGLE_QUOTE = 7
	var IN_DOUBLE_QUOTE = 8
	var IN_SUB_PATH = 9
	var AFTER_ELEMENT = 10
	var AFTER_PATH = 11
	var ERROR = 12

	var pathStateMachine = []

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	}

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	}

	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	}

	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	}

	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	}

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	}

	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}

	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType (ch) {
	  if (ch === undefined) {
	    return 'eof'
	  }

	  var code = ch.charCodeAt(0)

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return ch

	    case 0x5F: // _
	    case 0x24: // $
	      return 'ident'

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0:  // No-break space
	    case 0xFEFF:  // Byte Order Mark
	    case 0x2028:  // Line Separator
	    case 0x2029:  // Paragraph Separator
	      return 'ws'
	  }

	  // a-z, A-Z
	  if (
	    (code >= 0x61 && code <= 0x7A) ||
	    (code >= 0x41 && code <= 0x5A)
	  ) {
	    return 'ident'
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number'
	  }

	  return 'else'
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath (path) {
	  var keys = []
	  var index = -1
	  var mode = BEFORE_PATH
	  var c, newChar, key, type, transition, action, typeMap

	  var actions = []
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return
	    }
	    keys.push(key)
	    key = undefined
	  }
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar
	    } else {
	      key += newChar
	    }
	  }

	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
	        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions[APPEND]()
	      return true
	    }
	  }

	  while (mode != null) {
	    index++
	    c = path[index]

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }

	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || ERROR

	    if (transition === ERROR) {
	      return // parse error
	    }

	    mode = transition[0]
	    action = actions[transition[1]]
	    if (action) {
	      newChar = transition[2]
	      newChar = newChar === undefined
	        ? c
	        : newChar === '*'
	          ? newChar + c
	          : newChar
	      action()
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path
	      return keys
	    }
	  }
	}

	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */

	function formatAccessor (key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}

	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */

	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('')
	  return new Function('o', body)
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	exports.parse = function (path) {
	  var hit = pathCache.get(path)
	  if (!hit) {
	    hit = parsePath(path)
	    if (hit) {
	      hit.get = exports.compileGetter(hit)
	      pathCache.put(path, hit)
	    }
	  }
	  return hit
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	exports.get = function (obj, path) {
	  path = exports.parse(path)
	  if (path) {
	    return path.get(obj)
	  }
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent
	if (true) {
	  warnNonExistent = function (path) {
	    _.warn(
	      'You are setting a non-existent path "' + path.raw + '" ' +
	      'on a vm instance. Consider pre-initializing the property ' +
	      'with the "data" option for more reliable reactivity ' +
	      'and better performance.'
	    )
	  }
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	exports.set = function (obj, path, val) {
	  var original = obj
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj
	    key = path[i]
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)]
	    }
	    if (i < l - 1) {
	      obj = obj[key]
	      if (!_.isObject(obj)) {
	        obj = {}
	        if (("development") !== 'production' && last._isVue) {
	          warnNonExistent(path)
	        }
	        _.set(last, key, obj)
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val)
	      } else if (key in obj) {
	        obj[key] = val
	      } else {
	        if (("development") !== 'production' && obj._isVue) {
	          warnNonExistent(path)
	        }
	        _.set(obj, key, val)
	      }
	    }
	  }
	  return true
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(5)

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var circular = {}
	var waiting = false
	var internalQueueDepleted = false

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState () {
	  queue = []
	  userQueue = []
	  has = {}
	  circular = {}
	  waiting = internalQueueDepleted = false
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue () {
	  runBatcherQueue(queue)
	  internalQueueDepleted = true
	  runBatcherQueue(userQueue)
	  // dev tool hook
	  /* istanbul ignore if */
	  if (true) {
	    if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
	    }
	  }
	  resetBatcherState()
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue (queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (("development") !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1)
	        _.warn(
	          'You may have an infinite update loop for watcher ' +
	          'with expression: ' + watcher.expression
	        )
	      }
	    }
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	exports.push = function (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run()
	      return
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue
	    has[id] = q.length
	    q.push(watcher)
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flushBatcherQueue)
	    }
	  }
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Transition = __webpack_require__(46)

	module.exports = {

	  priority: 1100,

	  update: function (id, oldId) {
	    var el = this.el
	    // resolve on owner vm
	    var hooks = _.resolveAsset(this.vm.$options, 'transitions', id)
	    id = id || 'v'
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm)
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition')
	    }
	    _.addClass(el, id + '-transition')
	  }
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var queue = __webpack_require__(47)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transitionEndEvent = _.transitionEndEvent
	var animationEndEvent = _.animationEndEvent
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'

	var TYPE_TRANSITION = 1
	var TYPE_ANIMATION = 2

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */

	function Transition (el, id, hooks, vm) {
	  this.id = id
	  this.el = el
	  this.enterClass = id + '-enter'
	  this.leaveClass = id + '-leave'
	  this.hooks = hooks
	  this.vm = vm
	  // async state
	  this.pendingCssEvent =
	  this.pendingCssCb =
	  this.cancel =
	  this.pendingJsCb =
	  this.op =
	  this.cb = null
	  this.justEntered = false
	  this.entered = this.left = false
	  this.typeCache = {}
	  // bind
	  var self = this
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
	    .forEach(function (m) {
	      self[m] = _.bind(self[m], self)
	    })
	}

	var p = Transition.prototype

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p.enter = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeEnter')
	  this.cb = cb
	  addClass(this.el, this.enterClass)
	  op()
	  this.entered = false
	  this.callHookWithCb('enter')
	  if (this.entered) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  queue.push(this.enterNextTick)
	}

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p.enterNextTick = function () {

	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true
	  var self = this
	  setTimeout(function () {
	    self.justEntered = false
	  }, 17)

	  var enterDone = this.enterDone
	  var type = this.getCssTransitionType(this.enterClass)
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass)
	      this.setupCssCb(transitionEndEvent, enterDone)
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone)
	    } else {
	      enterDone()
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass)
	  }
	}

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p.enterDone = function () {
	  this.entered = true
	  this.cancel = this.pendingJsCb = null
	  removeClass(this.el, this.enterClass)
	  this.callHook('afterEnter')
	  if (this.cb) this.cb()
	}

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p.leave = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeLeave')
	  this.op = op
	  this.cb = cb
	  addClass(this.el, this.leaveClass)
	  this.left = false
	  this.callHookWithCb('leave')
	  if (this.left) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone()
	    } else {
	      queue.push(this.leaveNextTick)
	    }
	  }
	}

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass)
	  if (type) {
	    var event = type === TYPE_TRANSITION
	      ? transitionEndEvent
	      : animationEndEvent
	    this.setupCssCb(event, this.leaveDone)
	  } else {
	    this.leaveDone()
	  }
	}

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p.leaveDone = function () {
	  this.left = true
	  this.cancel = this.pendingJsCb = null
	  this.op()
	  removeClass(this.el, this.leaveClass)
	  this.callHook('afterLeave')
	  if (this.cb) this.cb()
	  this.op = null
	}

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p.cancelPending = function () {
	  this.op = this.cb = null
	  var hasPending = false
	  if (this.pendingCssCb) {
	    hasPending = true
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
	    this.pendingCssEvent = this.pendingCssCb = null
	  }
	  if (this.pendingJsCb) {
	    hasPending = true
	    this.pendingJsCb.cancel()
	    this.pendingJsCb = null
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass)
	    removeClass(this.el, this.leaveClass)
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el)
	    this.cancel = null
	  }
	}

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el)
	  }
	}

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type]
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done'])
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb)
	  }
	}

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (
	    !transitionEndEvent ||
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    document.hidden ||
	    // explicit js-only transition
	    (this.hooks && this.hooks.css === false) ||
	    // element is hidden
	    isHidden(this.el)
	  ) {
	    return
	  }
	  var type = this.typeCache[className]
	  if (type) return type
	  var inlineStyles = this.el.style
	  var computedStyles = window.getComputedStyle(this.el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type
	  }
	  return type
	}

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event
	  var self = this
	  var el = this.el
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd)
	      self.pendingCssEvent = self.pendingCssCb = null
	      if (!self.pendingJsCb && cb) {
	        cb()
	      }
	    }
	  }
	  _.on(el, event, onEnd)
	}

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden (el) {
	  return !(
	    el.offsetWidth &&
	    el.offsetHeight &&
	    el.getClientRects().length
	  )
	}

	module.exports = Transition


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var queue = []
	var queued = false

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	exports.push = function (job) {
	  queue.push(job)
	  if (!queued) {
	    queued = true
	    _.nextTick(flush)
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush () {
	  // Force layout
	  var f = document.documentElement.offsetHeight
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]()
	  }
	  queue = []
	  queued = false
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var dirParser = __webpack_require__(8)
	var propDef = __webpack_require__(39)
	var propBindingModes = __webpack_require__(5)._propBindingModes
	var empty = {}

	// regexes
	var identRE = __webpack_require__(43).identRE
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */

	module.exports = function compileProps (el, propOptions) {
	  var props = []
	  var names = Object.keys(propOptions)
	  var i = names.length
	  var options, name, attr, value, path, parsed, prop
	  while (i--) {
	    name = names[i]
	    options = propOptions[name] || empty

	    if (("development") !== 'production' && name === '$data') {
	      _.warn('Do not use $data as prop.')
	      continue
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name)
	    if (!identRE.test(path)) {
	      ("development") !== 'production' && _.warn(
	        'Invalid prop key: "' + name + '". Prop keys ' +
	        'must be valid identifiers.'
	      )
	      continue
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    }

	    attr = _.hyphenate(name)
	    // first check dynamic version
	    if ((value = _.getBindAttr(el, attr)) === null) {
	      if ((value = _.getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY
	      } else if ((value = _.getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value
	      parsed = dirParser.parse(value)
	      value = parsed.expression
	      prop.filters = parsed.filters
	      // check binding type
	      if (_.isLiteral(value)) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true
	      } else {
	        prop.dynamic = true
	        // check non-settable path for two-way bindings
	        if (("development") !== 'production' &&
	            prop.mode === propBindingModes.TWO_WAY &&
	            !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY
	          _.warn(
	            'Cannot bind two-way prop with non-settable ' +
	            'parent path: ' + value
	          )
	        }
	      }
	      prop.parentPath = value

	      // warn required two-way
	      if (
	        ("development") !== 'production' &&
	        options.twoWay &&
	        prop.mode !== propBindingModes.TWO_WAY
	      ) {
	        _.warn(
	          'Prop "' + name + '" expects a two-way binding type.'
	        )
	      }
	    } else if ((value = _.attr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value
	    } else if (options.required) {
	      // warn missing required
	      ("development") !== 'production' && _.warn(
	        'Missing required prop: ' + name
	      )
	    }
	    // push prop
	    props.push(prop)
	  }
	  return makePropsLinkFn(props)
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn (props) {
	  return function propsLinkFn (vm, scope) {
	    // store resolved props info
	    vm._props = {}
	    var i = props.length
	    var prop, path, options, value, raw
	    while (i--) {
	      prop = props[i]
	      raw = prop.raw
	      path = prop.path
	      options = prop.options
	      vm._props[path] = prop
	      if (raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(vm, options))
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath)
	            _.initProp(vm, prop, value)
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope) // el, host, scope
	          }
	        } else {
	          ("development") !== 'production' && _.warn(
	            'Cannot bind dynamic prop on a root instance' +
	            ' with no parent: ' + prop.name + '="' +
	            raw + '"'
	          )
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = _.stripQuotes(raw)
	        value = stripped === raw
	          ? _.toBoolean(_.toNumber(raw))
	          : stripped
	        _.initProp(vm, prop, value)
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === ''
	          ? true
	          : raw
	        _.initProp(vm, prop, value)
	      }
	    }
	  }
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */

	function getDefault (vm, options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean
	      ? false
	      : undefined
	  }
	  var def = options.default
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    ("development") !== 'production' && _.warn(
	      'Object/Array as default prop values will be shared ' +
	      'across multiple instances. Use a factory function ' +
	      'to return the default value instead.'
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function
	    ? def.call(vm)
	    : def
	}


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(19)
	var specialCharRE = /[^\w\-:\.]/

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el)
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el)
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>'
	    }
	    if (options.template) {
	      options._content = _.extractContent(el)
	      el = transcludeTemplate(el, options)
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el)
	    el.appendChild(_.createAnchor('v-end', true))
	  }
	  return el
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate (el, options) {
	  var template = options.template
	  var frag = templateParser.parse(template, true)
	  if (frag) {
	    var replacer = frag.firstChild
	    var tag = replacer.tagName && replacer.tagName.toLowerCase()
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        ("development") !== 'production' && _.warn(
	          'You are mounting an instance with a template to ' +
	          '<body>. This will replace <body> entirely. You ' +
	          'should probably use `replace: false` here.'
	        )
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	        // multi-children template
	        frag.childNodes.length > 1 ||
	        // non-element template
	        replacer.nodeType !== 1 ||
	        // single nested component
	        tag === 'component' ||
	        _.resolveAsset(options, 'components', tag) ||
	        replacer.hasAttribute('is') ||
	        replacer.hasAttribute(':is') ||
	        replacer.hasAttribute('v-bind:is') ||
	        // element directive
	        _.resolveAsset(options, 'elementDirectives', tag) ||
	        // for block
	        replacer.hasAttribute('v-for') ||
	        // if block
	        replacer.hasAttribute('v-if')
	      ) {
	        return frag
	      } else {
	        options._replacerAttrs = extractAttrs(replacer)
	        mergeAttrs(el, replacer)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      return el
	    }
	  } else {
	    ("development") !== 'production' && _.warn(
	      'Invalid template option: ' + template
	    )
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs (el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes)
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs (from, to) {
	  var attrs = from.attributes
	  var i = attrs.length
	  var name, value
	  while (i--) {
	    name = attrs[i].name
	    value = attrs[i].value
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value)
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value
	      to.setAttribute(name, value)
	    }
	  }
	}


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports.slot = __webpack_require__(51)
	exports.partial = __webpack_require__(52)


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(19)

	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.

	module.exports = {

	  priority: 1750,

	  params: ['name'],

	  bind: function () {
	    var host = this.vm
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var slotName = this.params.name
	    if (!slotName) {
	      // Default content
	      var self = this
	      var compileDefaultContent = function () {
	        self.compile(
	          extractFragment(raw.childNodes, raw, true),
	          context,
	          host
	        )
	      }
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent)
	      } else {
	        compileDefaultContent()
	      }
	    } else {
	      var selector = '[slot="' + slotName + '"]'
	      var nodes = raw.querySelectorAll(selector)
	      if (nodes.length) {
	        content = extractFragment(nodes, raw)
	        if (content.hasChildNodes()) {
	          this.compile(content, context, host)
	        } else {
	          this.fallback()
	        }
	      } else {
	        this.fallback()
	      }
	    }
	  },

	  fallback: function () {
	    this.compile(_.extractContent(this.el, true), this.vm)
	  },

	  compile: function (content, context, host) {
	    if (content && context) {
	      var scope = host
	        ? host._scope
	        : this._scope
	      this.unlink = context.$compile(
	        content, host, scope, this._frag
	      )
	    }
	    if (content) {
	      _.replace(this.el, content)
	    } else {
	      _.remove(this.el)
	    }
	  },

	  unbind: function () {
	    if (this.unlink) {
	      this.unlink()
	    }
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */

	function extractFragment (nodes, parent, main) {
	  var frag = document.createDocumentFragment()
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i]
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node)
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true
	      append(node)
	    }
	  }
	  return frag

	  function append (node) {
	    if (_.isTemplate(node) &&
	        !node.hasAttribute('v-if') &&
	        !node.hasAttribute('v-for')) {
	      node = templateParser.parse(node)
	    }
	    node = templateParser.clone(node)
	    frag.appendChild(node)
	  }
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var vIf = __webpack_require__(23)
	var FragmentFactory = __webpack_require__(21)

	module.exports = {

	  priority: 1750,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function (value) {
	      vIf.remove.call(this)
	      if (value) {
	        this.insert(value)
	      }
	    }
	  },

	  bind: function () {
	    this.anchor = _.createAnchor('v-partial')
	    _.replace(this.el, this.anchor)
	    this.insert(this.params.name)
	  },

	  insert: function (id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
	    if (true) {
	      _.assertAsset(partial, 'partial', id)
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial)
	      vIf.insert.call(this)
	    }
	  },

	  unbind: function () {
	    if (this.frag) {
	      this.frag.destroy()
	    }
	  }
	}


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */

	exports.json = {
	  read: function (value, indent) {
	    return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	  },
	  write: function (value) {
	    try {
	      return JSON.parse(value)
	    } catch (e) {
	      return value
	    }
	  }
	}

	/**
	 * 'abc' => 'Abc'
	 */

	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}

	/**
	 * 'abc' => 'ABC'
	 */

	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}

	/**
	 * 'AbC' => 'abc'
	 */

	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}

	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */

	var digitsRE = /(\d{3})(?=\d)/g
	exports.currency = function (value, currency) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  currency = currency != null ? currency : '$'
	  var stringified = Math.abs(value).toFixed(2)
	  var _int = stringified.slice(0, -3)
	  var i = _int.length % 3
	  var head = i > 0
	    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
	    : ''
	  var _float = stringified.slice(-3)
	  var sign = value < 0 ? '-' : ''
	  return currency + sign + head +
	    _int.slice(i).replace(digitsRE, '$1,') +
	    _float
	}

	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */

	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1)
	  return args.length > 1
	    ? (args[value % 10 - 1] || args[args.length - 1])
	    : (args[0] + (value === 1 ? '' : 's'))
	}

	/**
	 * Debounce a handler function.
	 *
	 * @param {Function} handler
	 * @param {Number} delay = 300
	 * @return {Function}
	 */

	exports.debounce = function (handler, delay) {
	  if (!handler) return
	  if (!delay) {
	    delay = 300
	  }
	  return _.debounce(handler, delay)
	}

	/**
	 * Install special array filters
	 */

	_.extend(exports, __webpack_require__(54))


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Path = __webpack_require__(43)
	var toArray = __webpack_require__(20)._postProcess

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	exports.limitBy = function (arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0
	  return typeof n === 'number'
	    ? arr.slice(offset, offset + n)
	    : arr
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	exports.filterBy = function (arr, search, delimiter) {
	  arr = toArray(arr)
	  if (search == null) {
	    return arr
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search)
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase()
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2
	  // extract and flatten keys
	  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur)
	  }, [])
	  var res = []
	  var item, key, val, j
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i]
	    val = (item && item.$value) || item
	    j = keys.length
	    if (j) {
	      while (j--) {
	        key = keys[j]
	        if ((key === '$key' && contains(item.$key, search)) ||
	            contains(Path.get(val, key), search)) {
	          res.push(item)
	          break
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item)
	    }
	  }
	  return res
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */

	exports.orderBy = function (arr, sortKey, reverse) {
	  arr = toArray(arr)
	  if (!sortKey) {
	    return arr
	  }
	  var order = (reverse && reverse < 0) ? -1 : 1
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (_.isObject(a) && '$value' in a) a = a.$value
	      if (_.isObject(b) && '$value' in b) b = b.$value
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a
	    b = _.isObject(b) ? Path.get(b, sortKey) : b
	    return a === b ? 0 : a > b ? order : -order
	  })
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains (val, search) {
	  var i
	  if (_.isPlainObject(val)) {
	    var keys = Object.keys(val)
	    i = keys.length
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true
	      }
	    }
	  } else if (_.isArray(val)) {
	    i = val.length
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(1).mergeOptions
	var uid = 0

	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */

	exports._init = function (options) {

	  options = options || {}

	  this.$el = null
	  this.$parent = options.parent
	  this.$root = this.$parent
	    ? this.$parent.$root
	    : this
	  this.$children = []
	  this.$refs = {}       // child vm references
	  this.$els = {}        // element references
	  this._watchers = []   // all watchers as an array
	  this._directives = [] // all directives

	  // a uid
	  this._uid = uid++

	  // a flag to avoid this being observed
	  this._isVue = true

	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._shouldPropagate = false // for event propagation

	  // fragment instance properties
	  this._isFragment = false
	  this._fragment =         // @type {DocumentFragment}
	  this._fragmentStart =    // @type {Text|Comment}
	  this._fragmentEnd = null // @type {Text|Comment}

	  // lifecycle state
	  this._isCompiled =
	  this._isDestroyed =
	  this._isReady =
	  this._isAttached =
	  this._isBeingDestroyed = false
	  this._unlinkFn = null

	  // context:
	  // if this is a transcluded component, context
	  // will be the common parent vm of this instance
	  // and its host.
	  this._context = options._context || this.$parent

	  // scope:
	  // if this is inside an inline v-for, the scope
	  // will be the intermediate scope created for this
	  // repeat fragment. this is used for linking props
	  // and container directives.
	  this._scope = options._scope

	  // fragment:
	  // if this instance is compiled inside a Fragment, it
	  // needs to reigster itself as a child of that fragment
	  // for attach/detach to work properly.
	  this._frag = options._frag
	  if (this._frag) {
	    this._frag.children.push(this)
	  }

	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this)
	  }

	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )

	  // set ref
	  this._updateRef()

	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {}

	  // call init hook
	  this._callHook('init')

	  // initialize data observation and scope inheritance.
	  this._initState()

	  // setup event system and option events.
	  this._initEvents()

	  // call created hook
	  this._callHook('created')

	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el)
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var inDoc = _.inDoc
	var eventRE = /^v-on:|^@/

	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */

	exports._initEvents = function () {
	  var options = this.$options
	  if (options._asComponent) {
	    registerComponentEvents(this, options.el)
	  }
	  registerCallbacks(this, '$on', options.events)
	  registerCallbacks(this, '$watch', options.watch)
	}

	/**
	 * Register v-on events on a child component
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 */

	function registerComponentEvents (vm, el) {
	  var attrs = el.attributes
	  var name, handler
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    name = attrs[i].name
	    if (eventRE.test(name)) {
	      name = name.replace(eventRE, '')
	      handler = (vm._scope || vm._context).$eval(attrs[i].value, true)
	      vm.$on(name.replace(eventRE), handler)
	    }
	  }
	}

	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */

	function registerCallbacks (vm, action, hash) {
	  if (!hash) return
	  var handlers, key, i, j
	  for (key in hash) {
	    handlers = hash[key]
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i])
	      }
	    } else {
	      register(vm, action, key, handlers)
	    }
	  }
	}

	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */

	function register (vm, action, key, handler, options) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler, options)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method, options)
	    } else {
	      ("development") !== 'production' && _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler)
	  }
	}

	/**
	 * Setup recursive attached/detached calls
	 */

	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached)
	  this.$on('hook:detached', onDetached)
	}

	/**
	 * Callback to recursively call attached hook on children
	 */

	function onAttached () {
	  if (!this._isAttached) {
	    this._isAttached = true
	    this.$children.forEach(callAttach)
	  }
	}

	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */

	function callAttach (child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached')
	  }
	}

	/**
	 * Callback to recursively call detached hook on children
	 */

	function onDetached () {
	  if (this._isAttached) {
	    this._isAttached = false
	    this.$children.forEach(callDetach)
	  }
	}

	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */

	function callDetach (child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached')
	  }
	}

	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */

	exports._callHook = function (hook) {
	  var handlers = this.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this)
	    }
	  }
	  this.$emit('hook:' + hook)
	}


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(14)
	var Observer = __webpack_require__(58)
	var Dep = __webpack_require__(41)
	var Watcher = __webpack_require__(40)

	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */

	exports._initState = function () {
	  this._initProps()
	  this._initMeta()
	  this._initMethods()
	  this._initData()
	  this._initComputed()
	}

	/**
	 * Initialize props.
	 */

	exports._initProps = function () {
	  var options = this.$options
	  var el = options.el
	  var props = options.props
	  if (props && !el) {
	    ("development") !== 'production' && _.warn(
	      'Props will not be compiled if no `el` option is ' +
	      'provided at instantiation.'
	    )
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el)
	  this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compiler.compileAndLinkProps(this, el, props, this._scope)
	    : null
	}

	/**
	 * Initialize the data.
	 */

	exports._initData = function () {
	  var propsData = this._data
	  var optionsDataFn = this.$options.data
	  var optionsData = optionsDataFn && optionsDataFn()
	  if (optionsData) {
	    this._data = optionsData
	    for (var prop in propsData) {
	      if (("development") !== 'production' &&
	          optionsData.hasOwnProperty(prop)) {
	        _.warn(
	          'Data field "' + prop + '" is already defined ' +
	          'as a prop. Use prop default value instead.'
	        )
	      }
	      if (this._props[prop].raw !== null ||
	          !optionsData.hasOwnProperty(prop)) {
	        _.set(optionsData, prop, propsData[prop])
	      }
	    }
	  }
	  var data = this._data
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var i, key
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    this._proxy(key)
	  }
	  // observe data
	  Observer.create(data, this)
	}

	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */

	exports._setData = function (newData) {
	  newData = newData || {}
	  var oldData = this._data
	  this._data = newData
	  var keys, key, i
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!(key in newData)) {
	      this._unproxy(key)
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!this.hasOwnProperty(key)) {
	      // new property
	      this._proxy(key)
	    }
	  }
	  oldData.__ob__.removeVm(this)
	  Observer.create(newData, this)
	  this._digest()
	}

	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */

	exports._proxy = function (key) {
	  if (!_.isReserved(key)) {
	    // need to store ref to self here
	    // because these getter/setters might
	    // be called by child scopes via
	    // prototype inheritance.
	    var self = this
	    Object.defineProperty(self, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return self._data[key]
	      },
	      set: function proxySetter (val) {
	        self._data[key] = val
	      }
	    })
	  }
	}

	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */

	exports._unproxy = function (key) {
	  if (!_.isReserved(key)) {
	    delete this[key]
	  }
	}

	/**
	 * Force update on every watcher in scope.
	 */

	exports._digest = function () {
	  for (var i = 0, l = this._watchers.length; i < l; i++) {
	    this._watchers[i].update(true) // shallow updates
	  }
	}

	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */

	function noop () {}
	exports._initComputed = function () {
	  var computed = this.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      var def = {
	        enumerable: true,
	        configurable: true
	      }
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, this)
	            : _.bind(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}

	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be passed down as a prop to
	 * child components.
	 */

	exports._initMethods = function () {
	  var methods = this.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this)
	    }
	  }
	}

	/**
	 * Initialize meta information like $index, $key & $value.
	 */

	exports._initMeta = function () {
	  var metas = this.$options._meta
	  if (metas) {
	    for (var key in metas) {
	      _.defineReactive(this, key, metas[key])
	    }
	  }
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Dep = __webpack_require__(41)
	var arrayMethods = __webpack_require__(59)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  _.define(value, '__ob__', this)
	  if (_.isArray(value)) {
	    var augment = _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	}

	// Static methods

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	Observer.create = function (value, vm) {
	  if (!value || typeof value !== 'object') {
	    return
	  }
	  var ob
	  if (
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    ob = value.__ob__
	  } else if (
	    (_.isArray(value) || _.isPlainObject(value)) &&
	    !Object.isFrozen(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  if (ob && vm) {
	    ob.addVm(vm)
	  }
	  return ob
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj)
	  var i = keys.length
	  while (i--) {
	    this.convert(keys[i], obj[keys[i]])
	  }
	}

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  var i = items.length
	  while (i--) {
	    Observer.create(items[i])
	  }
	}

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val)
	}

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm)
	}

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm)
	}

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function protoAugment (target, src) {
	  target.__proto__ = src
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment (target, src, keys) {
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    _.define(target, key, src[key])
	  }
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive (obj, key, val) {
	  var dep = new Dep()
	  var childOb = Observer.create(val)
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function metaGetter () {
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (_.isArray(val)) {
	          for (var e, i = 0, l = val.length; i < l; i++) {
	            e = val[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return val
	    },
	    set: function metaSetter (newVal) {
	      if (newVal === val) return
	      val = newVal
	      childOb = Observer.create(newVal)
	      dep.notify()
	    }
	  })
	}

	// Attach to the util object so it can be used elsewhere.
	_.defineReactive = defineReactive

	module.exports = Observer


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  _.define(arrayMethods, method, function mutator () {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	_.define(
	  arrayProto,
	  '$set',
	  function $set (index, val) {
	    if (index >= this.length) {
	      this.length = index + 1
	    }
	    return this.splice(index, 1, val)[0]
	  }
	)

	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */

	_.define(
	  arrayProto,
	  '$remove',
	  function $remove (item) {
	    /* istanbul ignore if */
	    if (!this.length) return
	    var index = _.indexOf(this, item)
	    if (index > -1) {
	      return this.splice(index, 1)
	    }
	  }
	)

	module.exports = arrayMethods


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Directive = __webpack_require__(61)
	var compiler = __webpack_require__(14)

	/**
	 * Update v-ref for component.
	 *
	 * @param {Boolean} remove
	 */

	exports._updateRef = function (remove) {
	  var ref = this.$options._ref
	  if (ref) {
	    var refs = (this._scope || this._context).$refs
	    if (remove) {
	      if (refs[ref] === this) {
	        refs[ref] = null
	      }
	    } else {
	      refs[ref] = this
	    }
	  }
	}

	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */

	exports._compile = function (el) {
	  var options = this.$options

	  // transclude and init element
	  // transclude can potentially replace original
	  // so we need to keep reference; this step also injects
	  // the template and caches the original attributes
	  // on the container node and replacer node.
	  var original = el
	  el = compiler.transclude(el, options)
	  this._initElement(el)

	  // root is always compiled per-instance, because
	  // container attrs and props can be different every time.
	  var contextOptions = this._context && this._context.$options
	  var rootLinker = compiler.compileRoot(el, options, contextOptions)

	  // compile and link the rest
	  var contentLinkFn
	  var ctor = this.constructor
	  // component compilation can be cached
	  // as long as it's not using inline-template
	  if (options._linkerCachable) {
	    contentLinkFn = ctor.linker
	    if (!contentLinkFn) {
	      contentLinkFn = ctor.linker = compiler.compile(el, options)
	    }
	  }

	  // link phase
	  // make sure to link root with prop scope!
	  var rootUnlinkFn = rootLinker(this, el, this._scope)
	  var contentUnlinkFn = contentLinkFn
	    ? contentLinkFn(this, el)
	    : compiler.compile(el, options)(this, el)

	  // register composite unlink function
	  // to be called during instance destruction
	  this._unlinkFn = function () {
	    rootUnlinkFn()
	    // passing destroying: true to avoid searching and
	    // splicing the directives
	    contentUnlinkFn(true)
	  }

	  // finally replace original
	  if (options.replace) {
	    _.replace(original, el)
	  }

	  this._isCompiled = true
	  this._callHook('compiled')
	  return el
	}

	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */

	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true
	    this.$el = this._fragmentStart = el.firstChild
	    this._fragmentEnd = el.lastChild
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = ''
	    }
	    this._fragment = el
	  } else {
	    this.$el = el
	  }
	  this.$el.__vue__ = this
	  this._callHook('beforeCompile')
	}

	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 */

	exports._bindDir = function (descriptor, node, host, scope, frag) {
	  this._directives.push(
	    new Directive(descriptor, this, node, host, scope, frag)
	  )
	}

	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */

	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    if (!deferCleanup) {
	      this._cleanup()
	    }
	    return
	  }
	  this._callHook('beforeDestroy')
	  this._isBeingDestroyed = true
	  var i
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this)
	    // unregister ref (remove: true)
	    this._updateRef(true)
	  }
	  // destroy all children.
	  i = this.$children.length
	  while (i--) {
	    this.$children[i].$destroy()
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn()
	  }
	  i = this._watchers.length
	  while (i--) {
	    this._watchers[i].teardown()
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null
	  }
	  // remove DOM element
	  var self = this
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup()
	    })
	  } else if (!deferCleanup) {
	    this._cleanup()
	  }
	}

	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */

	exports._cleanup = function () {
	  if (this._isDestroyed) {
	    return
	  }
	  // remove self from owner fragment
	  // do it in cleanup so that we can call $destroy with
	  // defer right when a fragment is about to be removed.
	  if (this._frag) {
	    this._frag.children.$remove(this)
	  }
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this)
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el =
	  this.$parent =
	  this.$root =
	  this.$children =
	  this._watchers =
	  this._context =
	  this._scope =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(40)
	var expParser = __webpack_require__(42)
	function noop () {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */

	function Directive (descriptor, vm, el, host, scope, frag) {
	  this.vm = vm
	  this.el = el
	  // copy descriptor properties
	  this.descriptor = descriptor
	  this.name = descriptor.name
	  this.expression = descriptor.expression
	  this.arg = descriptor.arg
	  this.modifiers = descriptor.modifiers
	  this.filters = descriptor.filters
	  this.literal = this.modifiers && this.modifiers.literal
	  // private
	  this._locked = false
	  this._bound = false
	  this._listeners = null
	  // link context
	  this._host = host
	  this._scope = scope
	  this._frag = frag
	  // store directives on node in dev mode
	  if (("development") !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || []
	    this.el._vue_directives.push(this)
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */

	Directive.prototype._bind = function () {
	  var name = this.name
	  var descriptor = this.descriptor

	  // remove attribute
	  if (
	    (name !== 'cloak' || this.vm._isCompiled) &&
	    this.el && this.el.removeAttribute
	  ) {
	    var attr = descriptor.attr || ('v-' + name)
	    this.el.removeAttribute(attr)
	  }

	  // copy def properties
	  var def = descriptor.def
	  if (typeof def === 'function') {
	    this.update = def
	  } else {
	    _.extend(this, def)
	  }

	  // setup directive params
	  this._setupParams()

	  // initial bind
	  if (this.bind) {
	    this.bind()
	  }

	  if (this.literal) {
	    this.update && this.update(descriptor.raw)
	  } else if (
	    (this.expression || this.modifiers) &&
	    (this.update || this.twoWay) &&
	    !this._checkStatement()
	  ) {
	    // wrapped updater for context
	    var dir = this
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal)
	        }
	      }
	    } else {
	      this._update = noop
	    }
	    var preProcess = this._preProcess
	      ? _.bind(this._preProcess, this)
	      : null
	    var postProcess = this._postProcess
	      ? _.bind(this._postProcess, this)
	      : null
	    var watcher = this._watcher = new Watcher(
	      this.vm,
	      this.expression,
	      this._update, // callback
	      {
	        filters: this.filters,
	        twoWay: this.twoWay,
	        deep: this.deep,
	        preProcess: preProcess,
	        postProcess: postProcess,
	        scope: this._scope
	      }
	    )
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind()
	    } else if (this.update) {
	      this.update(watcher.value)
	    }
	  }
	  this._bound = true
	}

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return
	  }
	  var params = this.params
	  // swap the params array with a fresh object.
	  this.params = Object.create(null)
	  var i = params.length
	  var key, val, mappedKey
	  while (i--) {
	    key = params[i]
	    mappedKey = _.camelize(key)
	    val = _.getBindAttr(this.el, key)
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val)
	    } else {
	      // static
	      val = _.attr(this.el, key)
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val
	      }
	    }
	  }
	}

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this
	  var called = false
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key]
	      if (cb) {
	        cb.call(self, val, oldVal)
	      }
	    } else {
	      called = true
	    }
	  }, {
	    immediate: true
	  })
	  ;(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch)
	}

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression
	  if (
	    expression && this.acceptStatement &&
	    !expParser.isSimplePath(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var scope = this._scope || this.vm
	    var handler = function () {
	      fn.call(scope, scope)
	    }
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value)
	    })
	  } else if (true) {
	    _.warn(
	      'Directive.set() can only be used inside twoWay' +
	      'directives.'
	    )
	  }
	}

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this
	  self._locked = true
	  fn.call(self)
	  _.nextTick(function () {
	    self._locked = false
	  })
	}

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */

	Directive.prototype.on = function (event, handler) {
	  _.on(this.el, event, handler)
	  ;(this._listeners || (this._listeners = []))
	    .push([event, handler])
	}

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false
	    if (this.unbind) {
	      this.unbind()
	    }
	    if (this._watcher) {
	      this._watcher.teardown()
	    }
	    var listeners = this._listeners
	    var i
	    if (listeners) {
	      i = listeners.length
	      while (i--) {
	        _.off(this.el, listeners[i][0], listeners[i][1])
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns
	    if (unwatchFns) {
	      i = unwatchFns.length
	      while (i--) {
	        unwatchFns[i]()
	      }
	    }
	    if (("development") !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this)
	    }
	    this.vm = this.el = this._watcher = this._listeners = null
	  }
	}

	module.exports = Directive


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */

	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i]
	    fn = _.resolveAsset(this.$options, 'filters', filter.name)
	    if (true) {
	      _.assertAsset(fn, 'filter', filter.name)
	    }
	    if (!fn) continue
	    fn = write ? fn.write : (fn.read || fn)
	    if (typeof fn !== 'function') continue
	    args = write ? [value, oldValue] : [value]
	    offset = write ? 2 : 1
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j]
	        args[j + offset] = arg.dynamic
	          ? this.$get(arg.value)
	          : arg.value
	      }
	    }
	    value = fn.apply(this, args)
	  }
	  return value
	}

	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */

	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id)
	  if (true) {
	    _.assertAsset(factory, 'component', id)
	  }
	  if (!factory) {
	    return
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved)
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb)
	    } else {
	      factory.requested = true
	      var cbs = factory.pendingCallbacks = [cb]
	      factory(function resolve (res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res)
	        }
	        // cache resolved
	        factory.resolved = res
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }, function reject (reason) {
	        ("development") !== 'production' && _.warn(
	          'Failed to resolve async component: ' + id + '. ' +
	          (reason ? '\nReason: ' + reason : '')
	        )
	      })
	    }
	  } else {
	    // normal component
	    cb(factory)
	  }
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(40)
	var Path = __webpack_require__(43)
	var textParser = __webpack_require__(6)
	var dirParser = __webpack_require__(8)
	var expParser = __webpack_require__(42)
	var filterRE = /[^|]\|[^|]/

	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @param {Boolean} [asStatement]
	 * @return {*}
	 */

	exports.$get = function (exp, asStatement) {
	  var res = expParser.parse(exp)
	  if (res) {
	    if (asStatement && !expParser.isSimplePath(exp)) {
	      var self = this
	      return function statementHandler () {
	        res.get.call(self, self)
	      }
	    } else {
	      try {
	        return res.get.call(this, this)
	      } catch (e) {}
	    }
	  }
	}

	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */

	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true)
	  if (res && res.set) {
	    res.set.call(this, this, val)
	  }
	}

	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */

	exports.$delete = function (key) {
	  _.delete(this._data, key)
	}

	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 * @return {Function} - unwatchFn
	 */

	exports.$watch = function (expOrFn, cb, options) {
	  var vm = this
	  var parsed
	  if (typeof expOrFn === 'string') {
	    parsed = dirParser.parse(expOrFn)
	    expOrFn = parsed.expression
	  }
	  var watcher = new Watcher(vm, expOrFn, cb, {
	    deep: options && options.deep,
	    filters: parsed && parsed.filters
	  })
	  if (options && options.immediate) {
	    cb.call(vm, watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.teardown()
	  }
	}

	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @param {Boolean} [asStatement]
	 * @return {String}
	 */

	exports.$eval = function (text, asStatement) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression, asStatement)
	    return dir.filters
	      ? this._applyFilters(val, null, dir.filters)
	      : val
	  } else {
	    // no filter
	    return this.$get(text, asStatement)
	  }
	}

	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */

	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text)
	  var vm = this
	  if (tokens) {
	    if (tokens.length === 1) {
	      return vm.$eval(tokens[0].value) + ''
	    } else {
	      return tokens.map(function (token) {
	        return token.tag
	          ? vm.$eval(token.value)
	          : token.value
	      }).join('')
	    }
	  } else {
	    return text
	  }
	}

	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */

	exports.$log = function (path) {
	  var data = path
	    ? Path.get(this._data, path)
	    : this._data
	  if (data) {
	    data = clean(data)
	  }
	  // include computed fields
	  if (!path) {
	    for (var key in this.$options.computed) {
	      data[key] = clean(this[key])
	    }
	  }
	  console.log(data)
	}

	/**
	 * "clean" a getter/setter converted object into a plain
	 * object copy.
	 *
	 * @param {Object} - obj
	 * @return {Object}
	 */

	function clean (obj) {
	  return JSON.parse(JSON.stringify(obj))
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(9)

	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */

	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this)
	}

	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    append, transition.append
	  )
	}

	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition)
	  } else {
	    this.$appendTo(target, cb, withTransition)
	  }
	  return this
	}

	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$before = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    before, transition.before
	  )
	}

	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$after = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition)
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition)
	  }
	  return this
	}

	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb()
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el)
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (this._isFragment) {
	    _.removeNodeRange(
	      this._fragmentStart,
	      this._fragmentEnd,
	      this, this._fragment, realCb
	    )
	  } else {
	    var op = withTransition === false
	      ? remove
	      : transition.remove
	    op(this.$el, this, realCb)
	  }
	  return this
	}

	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */

	function insert (vm, target, cb, withTransition, op1, op2) {
	  target = query(target)
	  var targetIsDetached = !_.inDoc(target)
	  var op = withTransition === false || targetIsDetached
	      ? op1
	      : op2
	  var shouldCallHook =
	    !targetIsDetached &&
	    !vm._isAttached &&
	    !_.inDoc(vm.$el)
	  if (vm._isFragment) {
	    _.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	      op(node, target, vm)
	    })
	    cb && cb()
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}

	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */

	function query (el) {
	  return typeof el === 'string'
	    ? document.querySelector(el)
	    : el
	}

	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function append (el, target, vm, cb) {
	  target.appendChild(el)
	  if (cb) cb()
	}

	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function before (el, target, vm, cb) {
	  _.before(el, target)
	  if (cb) cb()
	}

	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function remove (el, vm, cb) {
	  _.remove(el)
	  if (cb) cb()
	}


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = []))
	    .push(fn)
	  modifyListenerCount(this, event, 1)
	  return this
	}

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$once = function (event, fn) {
	  var self = this
	  function on () {
	    self.$off(event, on)
	    fn.apply(this, arguments)
	  }
	  on.fn = fn
	  this.$on(event, on)
	  return this
	}

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$off = function (event, fn) {
	  var cbs
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event]
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length)
	        }
	      }
	    }
	    this._events = {}
	    return this
	  }
	  // specific event
	  cbs = this._events[event]
	  if (!cbs) {
	    return this
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length)
	    this._events[event] = null
	    return this
	  }
	  // specific handler
	  var cb
	  var i = cbs.length
	  while (i--) {
	    cb = cbs[i]
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1)
	      cbs.splice(i, 1)
	      break
	    }
	  }
	  return this
	}

	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */

	exports.$emit = function (event) {
	  var cbs = this._events[event]
	  this._shouldPropagate = !cbs
	  if (cbs) {
	    cbs = cbs.length > 1
	      ? _.toArray(cbs)
	      : cbs
	    var args = _.toArray(arguments, 1)
	    for (var i = 0, l = cbs.length; i < l; i++) {
	      var res = cbs[i].apply(this, args)
	      if (res === true) {
	        this._shouldPropagate = true
	      }
	    }
	  }
	  return this
	}

	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return
	  var children = this.$children
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i]
	    child.$emit.apply(child, arguments)
	    if (child._shouldPropagate) {
	      child.$broadcast.apply(child, arguments)
	    }
	  }
	  return this
	}

	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$dispatch = function () {
	  this.$emit.apply(this, arguments)
	  var parent = this.$parent
	  while (parent) {
	    parent.$emit.apply(parent, arguments)
	    parent = parent._shouldPropagate
	      ? parent.$parent
	      : null
	  }
	  return this
	}

	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */

	var hookRE = /^hook:/
	function modifyListenerCount (vm, event, count) {
	  var parent = vm.$parent
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return
	  while (parent) {
	    parent._eventsCount[event] =
	      (parent._eventsCount[event] || 0) + count
	    parent = parent.$parent
	  }
	}


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(14)

	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */

	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    ("development") !== 'production' && _.warn(
	      '$mount() should be called only once.'
	    )
	    return
	  }
	  el = _.query(el)
	  if (!el) {
	    el = document.createElement('div')
	  }
	  this._compile(el)
	  this._initDOMHooks()
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    ready.call(this)
	  } else {
	    this.$once('hook:attached', ready)
	  }
	  return this
	}

	/**
	 * Mark an instance as ready.
	 */

	function ready () {
	  this._isAttached = true
	  this._isReady = true
	  this._callHook('ready')
	}

	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */

	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup)
	}

	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */

	exports.$compile = function (el, host, scope, frag) {
	  return compiler.compile(el, this.$options, true)(
	    this, el, host, scope, frag
	  )
	}


/***/ }
/******/ ])
});
;
/**
 * vue-resource v0.1.16
 * https://github.com/vuejs/vue-resource
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.VueResource=e():t.VueResource=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){var e=n(1)(t);t.url=n(2)(e),t.http=n(3)(e),t.resource=n(7)(e),Object.defineProperties(t.prototype,{$url:{get:function(){return this._url||(this._url=e.options(t.url,this,this.$options.url))}},$http:{get:function(){return this._http||(this._http=e.options(t.http,this,this.$options.http))}},$resource:{get:function(){return t.resource.bind(this)}}})}window.Vue&&Vue.use(r),t.exports=r},function(t,e){t.exports=function(t){function e(t,r,o){for(var a in r)o&&(n.isPlainObject(r[a])||n.isArray(r[a]))?(n.isPlainObject(r[a])&&!n.isPlainObject(t[a])&&(t[a]={}),n.isArray(r[a])&&!n.isArray(t[a])&&(t[a]=[]),e(t[a],r[a],o)):void 0!==r[a]&&(t[a]=r[a])}var n=t.util.extend({},t.util);return n.isString=function(t){return"string"==typeof t},n.isFunction=function(t){return"function"==typeof t},n.options=function(t,e,r){return r=r||{},n.isFunction(r)&&(r=r.call(e)),n.extend(t.bind({vm:e,options:r}),t,{options:r})},n.each=function(t,e){var r,o;if("number"==typeof t.length)for(r=0;r<t.length;r++)e.call(t[r],t[r],r);else if(n.isObject(t))for(o in t)t.hasOwnProperty(o)&&e.call(t[o],t[o],o);return t},n.extend=function(t){var n,r=[],o=r.slice.call(arguments,1);return"boolean"==typeof t&&(n=t,t=o.shift()),o.forEach(function(r){e(t,r,n)}),t},n}},function(t,e){var n=document.documentMode,r=document.createElement("a");t.exports=function(t){function e(n,r){var o,i={},s={},u=n;return t.isPlainObject(u)||(u={url:n,params:r}),u=t.extend(!0,{},e.options,this.options,u),n=u.url.replace(/(\/?):([a-z]\w*)/gi,function(t,e,n){return u.params[n]?(i[n]=!0,e+a(u.params[n])):""}),t.isString(u.root)&&!n.match(/^(https?:)?\//)&&(n=u.root+"/"+n),t.each(u.params,function(t,e){i[e]||(s[e]=t)}),o=e.params(s),o&&(n+=(-1==n.indexOf("?")?"?":"&")+o),n}function o(e,n,r){var a,i=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){a=t.isObject(n)||t.isArray(n),r&&(u=r+"["+(s||a?u:"")+"]"),!r&&i?e.add(n.name,n.value):a?o(e,n,u):e.add(u,n)})}function a(t){return i(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function i(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}return e.options={url:"",root:null,params:{}},e.params=function(e){var n=[];return n.add=function(e,n){t.isFunction(n)&&(n=n()),null===n&&(n=""),this.push(a(e)+"="+a(n))},o(n,e),n.join("&")},e.parse=function(t){return n&&(r.href=t,t=r.href),r.href=t,{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",port:r.port,host:r.host,hostname:r.hostname,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):""}},t.url=e}},function(t,e,n){var r=n(4),o=n(6),a=n(5);t.exports=function(t){function e(a,u){var c;return t.isPlainObject(a)&&(u=a,a=""),u=t.extend({url:a},u),u=t.extend(!0,{},e.options,this.options,u),null===u.crossOrigin&&(u.crossOrigin=s(u.url)),u.method=u.method.toUpperCase(),u.headers=t.extend({},e.headers.common,u.crossOrigin?{}:e.headers.custom,e.headers[u.method.toLowerCase()],u.headers),t.isPlainObject(u.data)&&/^(GET|JSONP)$/i.test(u.method)&&(t.extend(u.params,u.data),delete u.data),u.emulateHTTP&&!u.crossOrigin&&/^(PUT|PATCH|DELETE)$/i.test(u.method)&&(u.headers["X-HTTP-Method-Override"]=u.method,u.method="POST"),u.emulateJSON&&t.isPlainObject(u.data)&&(u.headers["Content-Type"]="application/x-www-form-urlencoded",u.data=t.url.params(u.data)),t.isObject(u.data)&&/FormData/i.test(u.data.toString())&&delete u.headers["Content-Type"],t.isPlainObject(u.data)&&(u.data=JSON.stringify(u.data)),c=("JSONP"==u.method?o:r).call(this.vm,t,u),c=n(c.then(i,i),this.vm),u.success&&(c=c.success(u.success)),u.error&&(c=c.error(u.error)),c}function n(t,e){return t.success=function(r){return n(t.then(function(t){return r.call(e,t.data,t.status,t)||t}),e)},t.error=function(r){return n(t.then(void 0,function(t){return r.call(e,t.data,t.status,t)||t}),e)},t.always=function(r){var o=function(t){return r.call(e,t.data,t.status,t)||t};return n(t.then(o,o),e)},t}function i(t){try{t.data=JSON.parse(t.responseText)}catch(e){t.data=t.responseText}return t.ok?t:a.reject(t)}function s(e){var n=t.url.parse(e);return n.protocol!==u.protocol||n.host!==u.host}var u=t.url.parse(location.href),c={"Content-Type":"application/json;charset=utf-8"};return e.options={method:"get",params:{},data:"",xhr:null,jsonp:"callback",beforeSend:null,crossOrigin:null,emulateHTTP:!1,emulateJSON:!1},e.headers={put:c,post:c,patch:c,"delete":c,common:{Accept:"application/json, text/plain, */*"},custom:{"X-Requested-With":"XMLHttpRequest"}},["get","put","post","patch","delete","jsonp"].forEach(function(n){e[n]=function(e,r,o,a){return t.isFunction(r)&&(a=o,o=r,r=void 0),this(e,t.extend({method:n,data:r,success:o},a))}}),t.http=e}},function(t,e,n){var r=n(5),o=window.XDomainRequest;t.exports=function(t,e){var n,a=new XMLHttpRequest;return o&&e.crossOrigin&&(a=new XDomainRequest,e.headers={}),t.isPlainObject(e.xhr)&&t.extend(a,e.xhr),t.isFunction(e.beforeSend)&&e.beforeSend.call(this,a,e),n=new r(function(n,r){a.open(e.method,t.url(e),!0),t.each(e.headers,function(t,e){a.setRequestHeader(e,t)});var o=function(t){a.ok="load"===t.type,a.ok&&a.status&&(a.ok=a.status>=200&&a.status<300),(a.ok?n:r)(a)};a.onload=o,a.onabort=o,a.onerror=o,a.send(e.data)})}},function(t,e){function n(t){this.state=a,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(n){e.reject(n)}}var r=0,o=1,a=2;n.reject=function(t){return new n(function(e,n){n(t)})},n.resolve=function(t){return new n(function(e,n){e(t)})},n.all=function(t){return new n(function(e,n){function r(n){return function(r){a[n]=r,o+=1,o===t.length&&e(a)}}var o=0,a=[];0===t.length&&e(a);for(var i=0;i<t.length;i+=1)t[i].then(r(i),n)})},n.race=function(t){return new n(function(e,n){for(var r=0;r<t.length;r+=1)t[r].then(e,n)})};var i=n.prototype;i.resolve=function(t){var e=this;if(e.state===a){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(i){return void(n||e.reject(i))}e.state=r,e.value=t,e.notify()}},i.reject=function(t){var e=this;if(e.state===a){if(t===e)throw new TypeError("Promise settled with itself.");e.state=o,e.value=t,e.notify()}},i.notify=function(){var t=this;u(function(){if(t.state!==a)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],i=e[1],s=e[2],u=e[3];try{t.state===r?s("function"==typeof n?n.call(void 0,t.value):t.value):t.state===o&&("function"==typeof i?s(i.call(void 0,t.value)):u(t.value))}catch(c){u(c)}}})},i["catch"]=function(t){return this.then(void 0,t)},i.then=function(t,e){var r=this;return new n(function(n,o){r.deferred.push([t,e,n,o]),r.notify()})};var s=[],u=function(t){s.push(t),1===s.length&&u.async()};if(u.run=function(){for(;s.length;)s[0](),s.shift()},window.MutationObserver){var c=document.createElement("div"),f=new MutationObserver(u.run);f.observe(c,{attributes:!0}),u.async=function(){c.setAttribute("x",0)}}else u.async=function(){setTimeout(u.run)};t.exports=window.Promise||n},function(t,e,n){var r=n(5);t.exports=function(t,e){var n,o,a="_jsonp"+Math.random().toString(36).substr(2),i={};return e.params[e.jsonp]=a,t.isFunction(e.beforeSend)&&e.beforeSend.call(this,{},e),new r(function(r,s){n=document.createElement("script"),n.src=t.url(e),n.type="text/javascript",n.async=!0,window[a]=function(t){o=t};var u=function(t){delete window[a],document.body.removeChild(n),"load"!==t.type||o||(t.type="error"),i.ok="error"!==t.type,i.status=i.ok?200:404,i.responseText=o?o:t.type,(i.ok?r:s)(i)};n.onload=u,n.onerror=u,document.body.appendChild(n)})}},function(t,e){t.exports=function(t){function e(r,o,a){var i=this,s={};return a=t.extend({},e.actions,a),t.each(a,function(e,a){e=t.extend(!0,{url:r,params:o||{}},e),s[a]=function(){return(i.$http||t.http)(n(e,arguments))}}),s}function n(e,n){var r,o,a,i=t.extend({},e),s={};switch(n.length){case 4:a=n[3],o=n[2];case 3:case 2:if(!t.isFunction(n[1])){s=n[0],r=n[1],o=n[2];break}if(t.isFunction(n[0])){o=n[0],a=n[1];break}o=n[1],a=n[2];case 1:t.isFunction(n[0])?o=n[0]:/^(POST|PUT|PATCH)$/i.test(i.method)?r=n[0]:s=n[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, data, success, error], got "+n.length+" arguments"}return i.data=r,i.params=t.extend({},i.params,s),o&&(i.success=o),a&&(i.error=a),i}return e.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},"delete":{method:"DELETE"}},t.resource=e}}])});
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.http.options.root = '';
Vue.config.debug = true;
Vue.config.strict = true;

var $vue_data = {
    show_no_result_found_msg: false,
    students: [],
    daily: [],
    daily_memorize: [],
    daily_behavior: [],
    halakah: [],
    halakah_id: 20,
    teacher: [],
    school: [],
    memorize_types: [],
    behavior_types: [],
    selected_student_behaviors: [],
    new_daily_behavior: {},
    old_daily_behavior: {},
    selected_day_daily: true,
    selected_date: null,
    previous_date: null,
    current_memorize_type_id: null,
    current_daily_id: null,
    new_daily_memorize: {},
    old_daily_memorize: {},
    previous_daily_memorize: {},
    selected_student_info: {},
    search: null,
    search_type: 'name',
    search_types: [
        {value: 'name', text: 'بحث بإسم الطالب'},
        {value: 'points', text: 'بحث بمجموع النقاط'},
        {value: 'mark', text: 'بحث بالتقدير'}
    ],
    sort_types: [
        {value: 'st_full_name_4', text: 'ترتيب حسب إسم الطالب'},
        {value: 'final_points', text: 'ترتيب حسب مجموع النقاط'}
    ],
    sort_type: 'st_full_name_4',
    sort_order: 1,
    mark_types: [
        {value: '', text: 'الجميع'},
        {value: 'success', text: 'ممتاز'},
        {value: 'info', text: 'جيد جدا'},
        {value: 'warning', text: 'جيد'},
        {value: 'danger', text: 'لم يحفظ'},
        {value: 'default', text: 'لم يسمِّع'}
    ],
    mark_type: null,
    sora_1_ayat: null,
    sora_1_ayat_array: [],
    sora_2_ayat: null,
    sora_2_ayat_array: [],
    errors_max_count: [],
    quran_id_and_name: [],
    quran_id_and_ayat: [],
    check_all: false,
    quran: quran,
    quran_char_count: quran_char_count,
    random_phrases: random_phrases,
    ajax_errors: {},
    msg_ok: false,
    msg_title: null,
    msg_body: null
};
var $vue_methods = {    getBasicData: function () {        this.$http.get('daily/basic_data/', function (data) {            this.behavior_types = data.behavior_types;            this.minimum_memorize = data.minimum_memorize;            /*this.memorize_types = data.memorize_types;*/        }.bind(this));    },    fillSoraAndAyahList: function () {        var x = 0;        this.errors_max_count = [];        while (x < 11) {            this.errors_max_count.push({'value': x, 'text': x});            x++;        }        this.quran_id_and_name = [{value: '', text: 'حدد السورة'}];        this.quran_id_and_ayat = [{value: '', text: 'حدد الآية'}];    },    getAllStudentsData: function () {        this.students.splice(0);        this.summaries.splice(0);        this.selected_day_daily = true;        var rowDate = date_to_no(this.selected_date);        if (!rowDate) return false;        this.$http.get('daily/allJson/' + rowDate + '/' + this.halakah_id, function (data) {            this.selected_day_daily = data.selected_day_daily;            this.students = data.students;            this.daily = data.daily;            this.daily_memorize = data.daily_memorize;            this.daily_behavior = data.daily_behavior;            this.teacher = data.teacher;            this.halakah = data.halakah;            this.halakah_type = data.halakah_type;            this.memorize_types = data.memorize_types;            this.minimum_memorize = data.minimum_memorize;            this.school = data.school;        }.bind(this));        setTimeout(reloadMaterializeDOM(), 2000);    },    findDailyMemorizeByDateTypeStudent: function ($memorizeDate, $memorize_type_id, $student_id) {        var a_point = this.findMemorizeType($memorize_type_id).max_point;        var student_daily = _.findWhere(this.daily, {st_id: $student_id, h_date: date_to_no($memorizeDate)}) || {};        return _.findWhere(this.daily_memorize, {memorize_type_id: $memorize_type_id, daily_id: student_daily.id}) || {                id: null, daily_id: null, memorize_type_id: $memorize_type_id,                start_sora: null, start_aya: null, end_sora: null, end_aya: null,                errors_count: 0, hesitations_count: 0,                points: a_point, notes: null, is_not_memorized: false,                applyToAllStudents: false, halakah_id: this.halakah.AutoNo, h_date: this.selected_date            };    },    findStudent: function (student_id) {        return _.findWhere(this.students, {st_no: student_id}) || {};    },    openMemorizeModal: function ($memorize_type_id, student_id) {        this.selected_student_info = this.findStudent(student_id);        this.current_memorize_type_id = $memorize_type_id;        this.previous_daily_memorize = {};        this.new_daily_memorize = this.findDailyMemorizeByDateTypeStudent(this.selected_date, $memorize_type_id, student_id);        this.$setWithoutBind('old_daily_memorize', this.new_daily_memorize);        this.daily.forEach(function (daily) {            if (date_to_no(this.selected_date) != daily.h_date && daily.st_id == student_id) {                this.daily_memorize.forEach(function (memorize) {                    if ($memorize_type_id == memorize.memorize_type_id && memorize.daily_id == daily.id) {                        this.previous_date = rawToFormattedDate(daily.h_date);                    }                }.bind(this));            } else if (date_to_no(this.selected_date) == daily.h_date && daily.st_id == student_id) {                this.current_daily_id = daily.id;            }        }.bind(this));        if (this.previous_date) {            this.previous_daily_memorize = this.findDailyMemorizeByDateTypeStudent(this.previous_date, $memorize_type_id, student_id);        }        if (!this.previous_daily_memorize.id && !this.new_daily_memorize.id) {            this.getPreviousMemorize(date_to_no(this.selected_date), $memorize_type_id, this.selected_student_info.st_no);        } else {            this.prepareNewDayMemorization();        }        setTimeout(reloadMaterializeDOM, 1000);        this.new_daily_memorize.end_aya = (!this.new_daily_memorize.end_aya ? this.new_daily_memorize.start_aya : this.new_daily_memorize.end_aya);        $('#daily_memorize_store').openModal({dismissible: false});    },    studentTotalBehaviors: function ($daily_id) {        return _.size(_.where(this.daily_behavior, {daily_id: $daily_id})) || null;    },    openBehaviorIndexModal: function (student_id) {        this.selected_student_info = this.findStudent(student_id);        var daily = _.findWhere(this.daily, {st_id: student_id, h_date: date_to_no(this.selected_date)}) || {};        this.current_daily_id = daily.id;        if (this.studentTotalBehaviors(this.current_daily_id)) {            $('#modal_behavior_index').openModal();        } else {            this.openBehaviorStoreModal();        }    },    openBehaviorStoreModal: function (daily_behavior_id) {        if (daily_behavior_id) {            var behavior = _.findWhere(this.daily_behavior, {id: daily_behavior_id}) || {};            this.new_daily_behavior = behavior;            this.$set('new_daily_behavior.is_positive', this.findBehaviorType(behavior.behavior_type_id).is_positive);            this.$setWithoutBind('old_daily_behavior', this.new_daily_behavior);        } else {            this.new_daily_behavior = {                "id": null,                "daily_id": this.current_daily_id,                "behavior_type_id": null,                "points": 0,                "notes": null,                "is_positive": 1            };        }        $('#modal_behavior_index').closeModal();        $('#modal_behavior_store').openModal({dismissible: false});    },    prepareNewDayMemorization: function () {        /*         إذا كان يوم جديد فيتم تجهيز بيانات اليوم كبداية التسميع         */        if (!this.new_daily_memorize.id && this.previous_daily_memorize.id) {            this.new_daily_memorize.daily_id = this.current_daily_id;            /*             إذا كانت نتيجة اليوم السابق هي حافظ             */            if (!this.previous_daily_memorize.is_not_memorized) {                var $last_aya = this.previous_daily_memorize.end_aya >= this.quran[this.previous_daily_memorize.end_sora - 1][2];                this.new_daily_memorize.start_sora = $last_aya ? this.previous_daily_memorize.end_sora - 1 : this.previous_daily_memorize.end_sora;                this.new_daily_memorize.start_aya = $last_aya ? 1 : this.previous_daily_memorize.end_aya + 1;                this.new_daily_memorize.end_sora = $last_aya ? this.previous_daily_memorize.end_sora - 1 : this.previous_daily_memorize.end_sora;                /*                 إذا كانت آخر سورة هي الناس                 */                this.new_daily_memorize.start_sora = (this.new_daily_memorize.start_sora >= 114) ? 114 : this.new_daily_memorize.start_sora;                this.new_daily_memorize.end_sora = (this.new_daily_memorize.end_sora >= 114) ? 114 : this.new_daily_memorize.end_sora;                this.new_daily_memorize.start_sora = (this.new_daily_memorize.start_sora <= 1) ? 1 : this.new_daily_memorize.start_sora;                this.new_daily_memorize.end_sora = (this.new_daily_memorize.end_sora <= 1) ? 1 : this.new_daily_memorize.end_sora;                /*                 إذا كان لم يحفظ في اليوم السابق                 */            } else {                console.log('not memorized');                this.new_daily_memorize.start_sora = this.previous_daily_memorize.start_sora;                this.new_daily_memorize.start_aya = this.previous_daily_memorize.start_aya;                this.new_daily_memorize.end_sora = this.previous_daily_memorize.end_sora;                this.new_daily_memorize.end_aya = this.previous_daily_memorize.end_aya;            }        }        this.getAyatCount();    },    getPreviousMemorize: function (h_date, memorize_type_id, student_id) {        this.$http.get('daily_memorize/getMemorizeData/' + h_date + '/' + memorize_type_id + '/' + student_id, function (data) {            this.previous_daily_memorize = data;            this.prepareNewDayMemorization();        }.bind(this));    },    getAyatCount: function () {        if (this.new_daily_memorize.start_sora) {            this.sora_1_ayat = this.quran[this.new_daily_memorize.start_sora - 1][2];            var x = 1;            this.sora_1_ayat_array = ([{value: '', text: 'حدد الآية'}]);            while (x <= this.sora_1_ayat) {                this.sora_1_ayat_array.push({value: x, text: x});                x++;            }        }        if (this.new_daily_memorize.end_sora) {            this.sora_2_ayat = this.quran[this.new_daily_memorize.end_sora - 1][2];            var y = 1;            this.sora_2_ayat_array = ([{value: '', text: 'حدد الآية'}]);            while (y <= this.sora_2_ayat) {                this.sora_2_ayat_array.push({value: y, text: y});                y++;            }        }    },    modelClass: function () {        if (this.new_daily_memorize.id > 0)            return this.mark(this.new_daily_memorize);    },    findMemorizeType: function ($memorize_type_id) {        return _.findWhere(this.memorize_types, {id: $memorize_type_id}) || {};    },    findBehaviorType: function ($behavior_type_id) {        return _.findWhere(this.behavior_types, {id: $behavior_type_id}) || {};    },    studentBehaviorsPoints: function ($student_no, $positive_or_negative) {        var student_daily = _.findWhere(this.daily, {st_id: $student_no, h_date: date_to_no(this.selected_date)}) || {};        var totalBehaviorsPoints = 0;        this.daily_behavior.forEach(function (behavior) {            if ($positive_or_negative == this.findBehaviorType(behavior.behavior_type_id).is_positive && behavior.daily_id == student_daily.id) {                totalBehaviorsPoints += parseFloat(behavior.points);            }        }.bind(this));        return totalBehaviorsPoints.toFixed(2) || false;    },    studentMemorizeData: function ($student, $memorize_type_id) {        var student_daily = _.findWhere(this.daily, {st_id: $student.st_no, h_date: date_to_no(this.selected_date)}) || {};        var memorize = getDataFromObject(_.findWhere(this.daily_memorize, {memorize_type_id: $memorize_type_id, daily_id: student_daily.id}));        memorize.my_class = _.size(memorize) ? this.mark(memorize.points, $memorize_type_id).mark_class : 'default';        memorize.points = _.size(memorize) ? memorize.points : 0;        memorize.is_not_memorized = _.size(memorize) ? memorize.is_not_memorized : 0;        return memorize;    },    changeLocalData: function ($type_of_change, $array_name) {        if ($type_of_change == 'store') {            this[$array_name].push(this['new_' + $array_name]);        } else if ($type_of_change == 'destroy') {            this[$array_name].forEach(function (item, i) {                if (item.id == this['new_' + $array_name].id) {                    this[$array_name].splice(i, 1);                }            }.bind(this));        }    },    setSortType: function () {        if (this.sort_type == 'st_full_name_4') this.sort_order = 1;        if (this.sort_type == 'final_points') this.sort_order = -1;    },    prepareNewMemorizeBeforeSaving: function () {        this.new_daily_memorize.is_not_memorized = this.new_daily_memorize.is_not_memorized ? this.new_daily_memorize.is_not_memorized : 0;        this.new_daily_memorize.errors_count = this.new_daily_memorize.errors_count ? this.new_daily_memorize.errors_count : 0;        this.new_daily_memorize.hesitations_count = this.new_daily_memorize.hesitations_count ? this.new_daily_memorize.hesitations_count : 0;    },    storeMemorize: function () {        this.prepareNewMemorizeBeforeSaving();        if (this.new_daily_memorize.id) {            this.$http.put('daily_memorize/update/', this.new_daily_memorize,                function (data) {                    $('#daily_memorize_store').closeModal();                    reactToAjaxSuccess(data);                }.bind(this))                .error(function (data, status, request) {                    reactToAjaxError(data, status, request);                });        } else {            this.new_daily_memorize.daily_id = this.current_daily_id;            this.new_daily_memorize.memorize_type_id = this.current_memorize_type_id;            this.$http.post('daily_memorize/store/', this.new_daily_memorize,                function (data) {                    if (data.data.id == 'Refresh') {                        this.getAllStudentsData();                    } else {                        this.new_daily_memorize.id = data.data.id;                        this.daily_memorize.push(this.new_daily_memorize);                    }                    $('#daily_memorize_store').closeModal();                    reactToAjaxSuccess(data);                }.bind(this))                .error(function (data, status, request) {                    reactToAjaxError(data, status, request);                });        }    },    destroyMemorize: function () {        this.msg_title = 'تأكيد الحذف';        this.msg_body = 'هل تريد حذف بيانات الحفظ الحالية؟';        $('#msg_modal').openModal({            dismissible: false,            complete: function () {                this.$http.delete('daily_memorize/destroy/' + this.new_daily_memorize.id, null,                    function (data) {                        $('#daily_memorize_store').closeModal();                        reactToAjaxSuccess(data);                        this.changeLocalData('destroy', 'daily_memorize');                    }.bind(this))                    .error(function (data, status, request) {                        reactToAjaxError(data, status, request);                    });            }.bind(this)        });    },    destroyBehavior: function (behavior_id) {        this.new_daily_behavior = _.findWhere(this.daily_behavior, {id: behavior_id}) || {};        var _behavior_id = behavior_id ? behavior_id : this.new_daily_behavior.id;        this.msg_title = 'تأكيد الحذف';        this.msg_body = 'هل تريد حذف السلوك الحالي ؟';        $('#msg_modal').openModal({            dismissible: false,            complete: function () {                this.$http.delete('daily_behavior/destroy/' + _behavior_id, null,                    function (data) {                        reactToAjaxSuccess(data);                        this.changeLocalData('destroy', 'daily_behavior');                    }.bind(this))                    .error(function (data, status, request) {                        reactToAjaxError(data, status, request);                    });            }.bind(this)        });    },    storeBehavior: function () {        /* update*/        if (this.new_daily_behavior.id) {            this.$http.put('daily_behavior/update/', this.new_daily_behavior,                function (data) {                    reactToAjaxSuccess(data);                    $('#modal_behavior_store').closeModal();                    $('#modal_behavior_index').openModal();                }.bind(this))                .error(function (data, status, request) {                    reactToAjaxError(data, status, request);                });        } else {            /*new*/            this.$http.post('daily_behavior/store/', this.new_daily_behavior,                function (data) {                    this.new_daily_behavior.id = data.data.id;                    this.daily_behavior.push(this.new_daily_behavior);                    reactToAjaxSuccess(data);                    $('#modal_behavior_store').closeModal();                    this.openBehaviorIndexModal(this.selected_student_info.st_no);                }.bind(this))                .error(function (data, status, request) {                    reactToAjaxError(data, status, request);                });        }    },    prepareNewDailyForHalakah: function () {        this.selected_day_daily = true;        this.$http.post('daily/prepareForHalakah/', {'h_date': date_to_no(this.selected_date), 'StHalaqah': this.halakah_id},            function (data) {                reactToAjaxSuccess(data);                this.getAllStudentsData();            }.bind(this))            .error(function (data, status, request) {                reactToAjaxError(data, status, request);            });    },    randomPhrase: function () {        return _.sample(random_phrases);    },    mark: function ($points, $memorize_type_id) {        var memorize_type = this.findMemorizeType($memorize_type_id);        var a_point = memorize_type.a_point;        var b_point = memorize_type.b_point;        var c_point = memorize_type.c_point;        var mark_label = '';        var mark_class = 'success';        if ($points >= a_point) {            mark_label = 'ممتاز';            mark_class = 'success';        } else if ($points >= b_point) {            mark_label = 'جيد جدا';            mark_class = 'info';        } else if ($points >= c_point) {            mark_label = 'جيد';            mark_class = 'warning';        } else if ($points < c_point) {            mark_label = 'لم يحفظ';            mark_class = 'danger';        }        return {            mark_class: mark_class,            mark_label: mark_label        };    },    calculatePoints: function () {        var memorize_type = this.findMemorizeType(this.current_memorize_type_id);        var max_point = memorize_type.max_point;        var c_point = memorize_type.c_point;        var not_accepted_errors = memorize_type.not_accepted_errors;        var not_accepted_hesitations = memorize_type.not_accepted_hesitations;        var one_error_point = parseFloat(max_point) / parseInt(not_accepted_errors, 10);        var one_hesitation_point = parseFloat(max_point) / parseInt(not_accepted_hesitations, 10);        this.new_daily_memorize.points = (            parseFloat(max_point) -            (parseFloat(this.new_daily_memorize.errors_count) * one_error_point ) -            (parseFloat(this.new_daily_memorize.hesitations_count) * one_hesitation_point)        );        /*console.log(this.new_daily_memorize.points);         console.info(getCharCountJs(this.new_daily_memorize.start_sora, this.new_daily_memorize.start_aya, this.new_daily_memorize.end_sora, this.new_daily_memorize.end_aya));         */        if (this.new_daily_memorize.points < c_point) {            this.new_daily_memorize.is_not_memorized = 1;        }        if (this.new_daily_memorize.points < 0) {            this.new_daily_memorize.points = 0;            this.new_daily_memorize.is_not_memorized = 1;        } else {            this.new_daily_memorize.is_not_memorized = 0;        }        /*        this.$set('new_daily_memorize.my_class', this.mark(this.new_daily_memorize.points,this.current_memorize_type_id).mark_class);         console.log(this.new_daily_memorize.start_sora);         console.log(this.new_daily_memorize.start_aya);         console.log(this.new_daily_memorize.end_sora);         console.log(this.new_daily_memorize.end_aya);*/    },    close_modal: function () {        $('#msg_modal').closeModal();    },    $setWithoutBind: function (destination, source) {        for (var key in source) {            if (source.hasOwnProperty(key)) {                var string_key = destination + '.' + key;                this.$set(string_key, source[key]);            }        }    }};
var content = new Vue({

    el: '#content',

    data: $vue_data,

    methods: $vue_methods,

    filters: {
        multiFilter: function (summaries) {
            var result = summaries.filter(function (summaries) {
                switch (true) {
                    case (this.search_type === 'name'):
                        if (!this.search) return summaries;
                        return summaries.st_full_name_4.search(this.search) >= 0;
                    case (this.search_type === 'points'):
                        if (!this.search) return summaries;
                        return summaries.final_points >= this.search;
                    case (this.search_type === 'mark'):
                        if (!this.mark_type) return summaries;
                        return summaries.memorize_1_class.search(this.mark_type) >= 0
                            || summaries.memorize_2_class.search(this.mark_type) >= 0
                            || summaries.memorize_3_class.search(this.mark_type) >= 0;
                }
            }.bind(this));
            if (result.length) {
                this.show_no_result_found_msg = false;
                return result;
            }
            this.show_no_result_found_msg = true;
        }
    },
    ready: function () {
        /*var g_date = '20150620'; console.log('Selected Gregorian date : ' + g_date); var todayHijriDateArray = zezo_get_hijri_date(g_date); this.todayHijriDate = todayHijriDateArray; console.log('Converted from g to (H array) : ' + this.days.todayHijriDate); for (var i = 0; i < 5; i++) { var rowTodayHijriDate = get_row_hijri_date(todayHijriDateArray); console.log('converted from (H array) to (H row) : ' + rowTodayHijriDate); var g_date = get_g_date(rowTodayHijriDate); console.log('convert (H row) to (G row) : ' + g_date); var day_no = get_g_date(rowTodayHijriDate, 'yes'); console.log('get day No from H date : ' + day_no); var addDays = add_days(g_date, -7); console.log('Add days to (G date) : ' + addDays); }*/
        this.getAllStudentsData();
        this.getBasicData();
        this.fillSoraAndAyahList();
    },

    computed: {
        mark_class: function () {
            return this.mark(this.new_daily_memorize.points, this.new_daily_memorize.memorize_type_id).mark_class;
        },

        mark_label: function () {
            return this.mark(this.new_daily_memorize.points, this.new_daily_memorize.memorize_type_id).mark_label;
        },

        total_behavior_points_for_student: function () {
            return this.studentBehaviorsPoints(this.selected_student_info.st_no, 1) - this.studentBehaviorsPoints(this.selected_student_info.st_no, 0);
        },

        summaries: function () {
            var data = [];
            this.students.forEach(function (student, i) {
                var student_daily = _.findWhere(this.daily, {st_id: student.st_no, h_date: date_to_no(this.selected_date)}) || {};

                var daily_id, daily_h_date, attendance_status,
                    good_behaviors_points, bad_behaviors_points, total_behaviors,
                    memorize_1_Points, memorize_2_Points, memorize_3_Points, total_memorize, total_behaviors_class,
                    memorize_1_class, memorize_2_class, memorize_3_class,
                    memorize_1_is_not_memorized, memorize_2_is_not_memorized, memorize_3_is_not_memorized,
                    final_points;
                if (student_daily.id) {

                    /*Daily*/
                    daily_id = student_daily.id;
                    daily_h_date = student_daily.h_date;
                    attendance_status = student_daily.attendance_status;

                    /*Behaviors*/
                    good_behaviors_points = parseFloat(this.studentBehaviorsPoints(student.st_no, 1)) || 0;
                    bad_behaviors_points = parseFloat(this.studentBehaviorsPoints(student.st_no, 0)) || 0;

                    total_behaviors = parseFloat(good_behaviors_points) - parseFloat(bad_behaviors_points);

                    if (parseFloat(total_behaviors) == 0) {
                        total_behaviors_class = 'default';
                    } else if (parseFloat(total_behaviors) > 0) {
                        total_behaviors_class = 'success';
                    } else if (parseFloat(total_behaviors) < 0) {
                        total_behaviors_class = 'danger';
                    }

                    this.students[i].total_behaviors = total_behaviors;

                    /*Memorize*/
                    memorize_1_Points = parseFloat(this.studentMemorizeData(student, 1).points) || 0;
                    memorize_2_Points = parseFloat(this.studentMemorizeData(student, 2).points) || 0;
                    memorize_3_Points = parseFloat(this.studentMemorizeData(student, 3).points) || 0;

                    total_memorize = parseFloat(memorize_1_Points) + parseFloat(memorize_2_Points) + parseFloat(memorize_3_Points);

                    memorize_1_class = this.studentMemorizeData(student, 1).my_class;
                    memorize_2_class = this.studentMemorizeData(student, 2).my_class;
                    memorize_3_class = this.studentMemorizeData(student, 3).my_class;

                    memorize_1_is_not_memorized = this.studentMemorizeData(student, 1).is_not_memorized;
                    memorize_2_is_not_memorized = this.studentMemorizeData(student, 2).is_not_memorized;
                    memorize_3_is_not_memorized = this.studentMemorizeData(student, 3).is_not_memorized;

                    final_points = total_behaviors + total_memorize;

                }
                var st_row = {
                    st_no: student.st_no,
                    st_full_name_4: student.st_full_name_4,
                    st_full_name_3: student.st_full_name_3,
                    father_mobile_no: student.FatherMobileNo,
                    daily_id: daily_id || null,
                    daily_h_date: daily_h_date || null,
                    attendance_status: attendance_status || null,
                    good_behaviors_points: good_behaviors_points ? parseFloat(good_behaviors_points.toFixed(2)) : 0,
                    bad_behaviors_points: bad_behaviors_points ? parseFloat(bad_behaviors_points.toFixed(2)) : 0,

                    total_behaviors: total_behaviors ? parseFloat(total_behaviors.toFixed(2)) : 0,
                    total_behaviors_class: total_behaviors_class,

                    memorize_1_Points: memorize_1_Points ? parseFloat(memorize_1_Points.toFixed(2)) : 0,
                    memorize_2_Points: memorize_2_Points ? parseFloat(memorize_2_Points.toFixed(2)) : 0,
                    memorize_3_Points: memorize_3_Points ? parseFloat(memorize_3_Points.toFixed(2)) : 0,

                    total_memorize: total_memorize ? parseFloat(total_memorize.toFixed(2)) : 0,

                    memorize_1_class: memorize_1_class || 'default',
                    memorize_2_class: memorize_2_class || 'default',
                    memorize_3_class: memorize_3_class || 'default',

                    memorize_1_is_not_memorized: memorize_1_is_not_memorized,
                    memorize_2_is_not_memorized: memorize_2_is_not_memorized,
                    memorize_3_is_not_memorized: memorize_3_is_not_memorized,

                    final_points: final_points ? parseFloat(final_points.toFixed(2)) : 0
                };

                data.push(st_row);

            }.bind(this));
            return data;
        }
    }
});
//# sourceMappingURL=main.js.map