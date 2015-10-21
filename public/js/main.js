/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * Materialize v0.97.1 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*e-f)*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=.3*e*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:
O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)}),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==ka&&define.amd?define(function(){return ea}):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],a):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),window.Materialize={},Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0}),d};var Vel;Vel=$?$.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0};return b=a.extend(c,b),this.each(function(){function c(b){h=g.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),h.not(b).removeClass("active").parent().removeClass("active"),h.not(b).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function e(a){var b=f(a);return b.length>0}function f(a){return a.closest("li > .collapsible-header")}var g=a(this),h=a(this).find("> li > .collapsible-header"),i=g.data("collapsible");g.off("click.collapse",".collapsible-header"),h.off("click.collapse"),b.accordion||"accordion"===i||void 0===i?(h=g.find("> li > .collapsible-header"),h.on("click.collapse",function(b){var d=a(b.target);e(d)&&(d=f(d)),d.toggleClass("active"),c(d)}),c(h.filter(".active").first())):h.each(function(){a(this).on("click.collapse",function(b){var c=a(b.target);e(c)&&(c=f(c)),c.toggleClass("active"),d(c)}),a(this).hasClass("active")&&d(a(this))})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function d(){void 0!==g.data("induration")&&(h.inDuration=g.data("inDuration")),void 0!==g.data("outduration")&&(h.outDuration=g.data("outDuration")),void 0!==g.data("constrainwidth")&&(h.constrain_width=g.data("constrainwidth")),void 0!==g.data("hover")&&(h.hover=g.data("hover")),void 0!==g.data("gutter")&&(h.gutter=g.data("gutter")),void 0!==g.data("beloworigin")&&(h.belowOrigin=g.data("beloworigin")),void 0!==g.data("alignment")&&(h.alignment=g.data("alignment"))}function e(){d(),i.addClass("active"),h.constrain_width===!0?i.css("width",g.outerWidth()):i.css("white-space","nowrap");var b=0;h.belowOrigin===!0&&(b=g.height());var c,e,f,j=g.offset().left;if(j+i.innerWidth()>a(window).width()?h.alignment="right":j-i.innerWidth()+g.innerWidth()<0&&(h.alignment="left"),"left"===h.alignment)e=0,f=h.gutter,c=g.position().left+e+f,i.css({left:c});else if("right"===h.alignment){a(window).width()-j-g.innerWidth();e=0,f=h.gutter,c=a(window).width()-g.position().left-g.innerWidth()+f,i.css({right:c})}i.css({position:"absolute",top:g.position().top+b}),i.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:h.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:h.inDuration,easing:"easeOutSine"})}function f(){i.fadeOut(h.outDuration),i.removeClass("active")}var g=a(this),h=a.extend({},c,b),i=a("#"+g.attr("data-activates"));if(d(),g.after(i),h.hover){var j=!1;g.unbind("click."+g.attr("id")),g.on("mouseenter",function(a){j===!1&&(e(),j=!0)}),g.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(i)||(i.stop(!0,!0),f(),j=!1)}),i.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(g)||(i.stop(!0,!0),f(),j=!1)})}else g.unbind("click."+g.attr("id")),g.bind("click."+g.attr("id"),function(b){g[0]==b.currentTarget&&0===a(b.target).closest(".dropdown-content").length?(b.preventDefault(),e()):g.hasClass("active")&&(f(),a(document).unbind("click."+i.attr("id"))),i.hasClass("active")&&a(document).bind("click."+i.attr("id"),function(b){!i.is(b.target)&&!g.is(b.target)&&!g.find(b.target).length>0&&(f(),a(document).unbind("click."+i.attr("id")))})});g.on("open",e),g.on("close",f)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){var b=0,c=0,d=function(){return c++,"materialize-lean-overlay-"+c};a.fn.extend({openModal:function(c){a("body").css("overflow","hidden");var e={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},f=d(),g=a(this),h=a('<div class="lean-overlay"></div>'),i=++b;h.attr("id",f).css("z-index",1e3+2*i),g.data("overlay-id",f).css("z-index",1e3+2*i+1),a("body").append(h),c=a.extend(e,c),c.dismissible&&(h.click(function(){g.closeModal(c)}),a(document).on("keyup.leanModal"+f,function(a){27===a.keyCode&&g.closeModal(c)})),g.find(".modal-close").on("click.close",function(a){g.closeModal(c)}),h.css({display:"block",opacity:0}),g.css({display:"block",opacity:0}),h.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),g.data("associated-overlay",h[0]),g.hasClass("bottom-sheet")?g.velocity({bottom:"0",opacity:1},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}):(a.Velocity.hook(g,"scaleX",.7),g.css({top:c.starting_top}),g.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}))}}),a.fn.extend({closeModal:function(c){var d={out_duration:250,complete:void 0},e=a(this),f=e.data("overlay-id"),g=a("#"+f);c=a.extend(d,c),a("body").css("overflow",""),e.find(".modal-close").off("click.close"),a(document).off("keyup.leanModal"+f),g.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"}),e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){g.css({display:"none"}),"function"==typeof c.complete&&c.complete(),g.remove(),b--}}):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},{duration:c.out_duration,complete:function(){a(this).css("display","none"),"function"==typeof c.complete&&c.complete(),g.remove(),b--}})}}),a.fn.extend({leanModal:function(b){return this.each(function(){var c={starting_top:"4%"},d=a.extend(c,b);a(this).click(function(b){d.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15;var c=a(this).attr("href")||"#"+a(this).data("target");a(c).openModal(d),b.preventDefault()})})}})}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){
d=!1;var b=g.parent(".material-placeholder"),e=(window.innerWidth,window.innerHeight,g.data("width")),h=g.data("height");g.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:f,queue:!1,easing:"easeOutQuad",complete:function(){c=!1,a(this).remove()}}),g.velocity({width:e,height:h,left:0,top:0},{duration:f,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:f,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),g.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),g.removeClass("active"),d=!0,a(this).remove()}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c=!1,d=!0,e=275,f=200,g=a(this),h=a("<div></div>").addClass("material-placeholder");g.wrap(h),g.on("click",function(){var f=g.parent(".material-placeholder"),h=window.innerWidth,i=window.innerHeight,j=g.width(),k=g.height();if(d===!1)return b(),!1;if(c&&d===!0)return b(),!1;d=!1,g.addClass("active"),c=!0,f.css({width:f[0].getBoundingClientRect().width,height:f[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),g.css({position:"absolute","z-index":1e3}).data("width",j).data("height",k);var l=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){d===!0&&b()});if(a("body").append(l),l.velocity({opacity:1},{duration:e,queue:!1,easing:"easeOutQuad"}),""!==g.data("caption")){var m=a('<div class="materialbox-caption"></div>');m.text(g.data("caption")),a("body").append(m),m.css({display:"inline"}),m.velocity({opacity:1},{duration:e,queue:!1,easing:"easeOutQuad"})}var n=0,o=j/h,p=k/i,q=0,r=0;o>p?(n=k/j,q=.9*h,r=.9*h*n):(n=j/k,q=.9*i*n,r=.9*i),g.hasClass("responsive-img")?g.velocity({"max-width":q,width:j},{duration:0,queue:!1,complete:function(){g.css({left:0,top:0}).velocity({height:r,width:q,left:a(document).scrollLeft()+h/2-g.parent(".material-placeholder").offset().left-q/2,top:a(document).scrollTop()+i/2-g.parent(".material-placeholder").offset().top-r/2},{duration:e,queue:!1,easing:"easeOutQuad",complete:function(){d=!0}})}}):g.css("left",0).css("top",0).velocity({height:r,width:q,left:a(document).scrollLeft()+h/2-g.parent(".material-placeholder").offset().left-q/2,top:a(document).scrollTop()+i/2-g.parent(".material-placeholder").offset().top-r/2},{duration:e,queue:!1,easing:"easeOutQuad",complete:function(){d=!0}})}),a(window).scroll(function(){c&&b()}),a(document).keyup(function(a){27===a.keyCode&&d===!0&&c&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).load()}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(){return this.each(function(){var b=a(this);a(window).width();b.width("100%");var c,d,e=b.find("li.tab a"),f=b.width(),g=b.find("li").first().outerWidth(),h=0;c=a(e.filter('[href="'+location.hash+'"]')),0===c.length&&(c=a(this).find("li.tab a.active").first()),0===c.length&&(c=a(this).find("li.tab a").first()),c.addClass("active"),h=e.index(c),0>h&&(h=0),d=a(c[0].hash),b.append('<div class="indicator"></div>');var i=b.find(".indicator");b.is(":visible")&&(i.css({right:f-(h+1)*g}),i.css({left:h*g})),a(window).resize(function(){f=b.width(),g=b.find("li").first().outerWidth(),0>h&&(h=0),0!==g&&0!==f&&(i.css({right:f-(h+1)*g}),i.css({left:h*g}))}),e.not(c).each(function(){a(this.hash).hide()}),b.on("click","a",function(j){if(a(this).parent().hasClass("disabled"))return void j.preventDefault();f=b.width(),g=b.find("li").first().outerWidth(),c.removeClass("active"),d.hide(),c=a(this),d=a(this.hash),e=b.find("li.tab a"),c.addClass("active");var k=h;h=e.index(a(this)),0>h&&(h=0),d.show(),h-k>=0?(i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),j.preventDefault()})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(b){var c=null,d=!1,e=null,f=5,g={delay:350};return"remove"===b?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove()}),!1):(b=a.extend(g,b),this.each(function(){var g=Materialize.guid(),h=a(this);h.attr("data-tooltip-id",g);var i=a("<span></span>").text(h.attr("data-tooltip")),j=a("<div></div>");j.addClass("material-tooltip").append(i).appendTo(a("body")).attr("id",g);var k=a("<div></div>").addClass("backdrop");k.appendTo(j),k.css({top:0,left:0}),h.off("mouseenter.tooltip mouseleave.tooltip"),h.on({"mouseenter.tooltip":function(a){var g=h.data("delay");g=void 0===g||""===g?b.delay:g,c=0,e=setInterval(function(){if(c+=10,c>=g&&d===!1){d=!0,j.css({display:"block",left:"0px",top:"0px"}),j.children("span").text(h.attr("data-tooltip"));var a=h.outerWidth(),b=h.outerHeight(),e=h.attr("data-position"),i=j.outerHeight(),l=j.outerWidth(),m="0px",n="0px",o=8;"top"===e?(j.css({top:h.offset().top-i-f,left:h.offset().left+a/2-l/2}),m="-10px",k.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:i,marginLeft:l/2-k.width()/2})):"left"===e?(j.css({top:h.offset().top+b/2-i/2,left:h.offset().left-l-f}),n="-10px",k.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:i/2,marginLeft:l})):"right"===e?(j.css({top:h.offset().top+b/2-i/2,left:h.offset().left+a+f}),n="+10px",k.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:i/2,marginLeft:"0px"})):(j.css({top:h.offset().top+h.outerHeight()+f,left:h.offset().left+a/2-l/2}),m="+10px",k.css({marginLeft:l/2-k.width()/2})),o=l/8,8>o&&(o=8),("right"===e||"left"===e)&&(o=l/10,6>o&&(o=6)),j.velocity({marginTop:m,marginLeft:n},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),k.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:o},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})}},10)},"mouseleave.tooltip":function(){clearInterval(e),c=0,j.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1,delay:225}),k.velocity({opacity:0,scale:1},{duration:225,delay:275,queue:!1,complete:function(){k.css("display","none"),j.css("display","none"),d=!1}})}})}))},a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h=b,i=setInterval(function(){null===g.parentNode&&window.clearInterval(i),g.classList.contains("panning")||(h-=20),0>=h&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(i))},20)},function(a){var b={init:function(b){var c={menuWidth:240,edge:"left",closeOnClick:!1};b=a.extend(c,b),a(this).each(function(){function c(c){g=!1,h=!1,a("body").css("overflow",""),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}})):(f.css({width:"",right:"0",left:""}),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}}))}var d=a(this),e=a("#"+d.attr("data-activates"));240!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('<div class="drag-target"></div>');a("body").append(f),"left"==b.edge?(e.css("left",-1*(b.menuWidth+10)),f.css({left:0})):(e.addClass("right-aligned").css("right",-1*(b.menuWidth+10)).css("left",""),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("left",0),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").css("opacity")&&h?c(!0):(e.removeAttr("style"),e.css("width",b.menuWidth)):h===!1&&("left"===b.edge?e.css("left",-1*(b.menuWidth+10)):e.css("right",-1*(b.menuWidth+10)))}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){c()});var g=!1,h=!1;f.on("click",function(){c()}),f.hammer({prevent_default:!1}).bind("pan",function(d){if("touch"==d.gesture.pointerType){var f=(d.gesture.direction,d.gesture.center.x);d.gesture.center.y,d.gesture.velocityX;if(a("body").css("overflow","hidden"),0===a("#sidenav-overlay").length){var g=a('<div id="sidenav-overlay"></div>');g.css("opacity",0).click(function(){c()}),a("body").append(g)}if("left"===b.edge&&(f>b.menuWidth?f=b.menuWidth:0>f&&(f=0)),"left"===b.edge)f<b.menuWidth/2?h=!1:f>=b.menuWidth/2&&(h=!0),e.css("left",f-b.menuWidth);else{f<window.innerWidth-b.menuWidth/2?h=!0:f>=window.innerWidth-b.menuWidth/2&&(h=!1);var i=-1*(f-b.menuWidth/2);i>0&&(i=0),e.css("right",i)}var j;"left"===b.edge?(j=f/b.menuWidth,a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"})):(j=Math.abs((f-window.innerWidth)/b.menuWidth),a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=c.gesture.velocityX;g=!1,"left"===b.edge?h&&.3>=d||-.5>d?(e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""})):(!h||d>.3)&&(a("body").css("overflow",""),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:"",left:0})):h&&d>=-.3||d>.5?(e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0})):(!h||-.3>d)&&(a("body").css("overflow",""),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:0,left:""}))}}),d.click(function(){if(h===!0)h=!1,g=!1,c();else{a("body").css("overflow","hidden"),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),e.css("left",""));var d=a('<div id="sidenav-overlay"></div>');d.css("opacity",0).click(function(){h=!1,g=!1,c(),d.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(d),d.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){h=!0,g=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g)}}),f}function c(){++j;var c=f.scrollTop(),d=f.scrollLeft(),e=d+f.width(),g=c+f.height(),i=b(c+k.top+200,e+k.right,g+k.bottom,d+k.left);a.each(i,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j)}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),h=i}function d(){f.trigger("scrollSpy:winSize")}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return(new Date).getTime()};a.scrollSpy=function(b,d){var h=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a("a[href=#"+a(c).attr("id")+"]").click(function(b){b.preventDefault();var c=a(this.hash).offset().top+1;a("html, body").animate({scrollTop:c-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),d=d||{throttle:100},k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var j=e(c,d.throttle||100),l=function(){a(document).ready(j)};return i||(f.on("scroll",l),f.on("resize",l),i=!0),setTimeout(l,0),b.on("scrollSpy:enter",function(){h=a.grep(h,function(a){return 0!=a.height()});var b=a(this);h[0]?(a("a[href=#"+h[0].attr("id")+"]").removeClass("active"),b.data("scrollSpy:id")<h[0].data("scrollSpy:id")?h.unshift(a(this)):h.push(a(this))):h.push(a(this)),a("a[href=#"+h[0].attr("id")+"]").addClass("active")}),b.on("scrollSpy:exit",function(){if(h=a.grep(h,function(a){return 0!=a.height()}),h[0]){a("a[href=#"+h[0].attr("id")+"]").removeClass("active");var b=a(this);h=a.grep(h,function(a){return a.attr("id")!=b.attr("id")}),h[0]&&a("a[href=#"+h[0].attr("id")+"]").addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),e=b.css("font-size");e&&d.css("font-size",e),c&&d.css("font-family",c),"off"===b.attr("wrap")&&d.css("overflow-wrap","normal").css("white-space","pre"),d.text(b.val()+"\n");var f=d.html().replace(/\n/g,"<br>");d.html(f),b.is(":visible")?d.css("width",b.width()):d.css("width",a(window).width()/2),b.css("height",d.height())}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label").addClass("active"):a(this).siblings("label, i").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a("input[autofocus]").siblings("label, i").addClass("active"),a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label, i").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, i").addClass("active")}),a(document).on("blur",c,function(){var b=a(this);0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&b.siblings("label, i").removeClass("active"),0===b.val().length&&b[0].validity.badInput!==!0&&void 0!==b.attr("placeholder")&&b.siblings("i").removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d=a(".hiddendiv").first();d.length||(d=a('<div class="hiddendiv common"></div>'),a("body").append(d));var e=".materialize-textarea";a(e).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown autoresize",e,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var f,g="input[type=range]",h=!1;a(g).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var i=".range-field";a(document).on("change",g,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val())}),a(document).on("input mousedown touchstart",g,function(b){var c=a(this).siblings(".thumb");c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).append(c)),c.find(".value").html(a(this).val()),h=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),f=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var d=a(this).outerWidth();0>f?f=0:f>d&&(f=d),c.addClass("active").css("left",f),c.find(".value").html(a(this).val())}),a(document).on("mouseup touchend",i,function(){h=!1,a(this).removeClass("active")}),a(document).on("mousemove touchmove",i,function(b){var c,d=a(this).children(".thumb");if(h){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(g).val())}}),a(document).on("mouseout touchleave",i,function(){if(!h){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active")}})}),a.fn.material_select=function(b){a(this).each(function(){if($select=a(this),!$select.hasClass("browser-default")){var c=$select.data("select-id");if(c&&($select.parent().find("span.caret").remove(),$select.parent().find("input").remove(),$select.unwrap(),a("ul#select-options-"+c).remove()),"destroy"===b)return void $select.data("select-id",null).removeClass("initialized");var d=Materialize.guid();$select.data("select-id",d);var e=a('<div class="select-wrapper"></div>');e.addClass($select.attr("class"));var f,g=a('<ul id="select-options-'+d+'" class="dropdown-content select-dropdown"></ul>'),h=$select.children("option");f=void 0!==$select.find("option:selected")?$select.find("option:selected"):g.first(),h.each(function(){g.append(a('<li class="'+(a(this).is(":disabled")?"disabled":"")+'"><span>'+a(this).html()+"</span></li>"))}),g.find("li").each(function(c){var d=$select;a(this).click(function(){a(this).hasClass("disabled")||(d.find("option").eq(c).prop("selected",!0),d.trigger("change"),d.siblings("input.select-dropdown").val(a(this).text()),"undefined"!=typeof b&&b())})}),$select.wrap(e);var i=a('<span class="caret">&#9660;</span>');$select.is(":disabled")&&i.addClass("disabled");var j=f.html().replace(/"/g,"&quot;"),k=a('<input type="text" class="select-dropdown" readonly="true" '+($select.is(":disabled")?"disabled":"")+' data-activates="select-options-'+d+'" value="'+j+'"/>');$select.before(k),k.before(i),a("body").append(g),$select.is(":disabled")||k.dropdown({hover:!1}),$select.attr("tabindex")&&a(k[0]).attr("tabindex",$select.attr("tabindex")),$select.addClass("initialized"),k.on("focus",function(){a(this).trigger("open"),f=a(this).val(),selectedOption=g.find("li").filter(function(){return a(this).text().toLowerCase()===f.toLowerCase()})[0],activateOption(g,selectedOption)}),k.on("blur",function(){a(this).trigger("close")}),activateOption=function(b,c){b.find("li.active").removeClass("active"),a(c).addClass("active"),b.scrollTo(c)},filterQuery=[],onKeyDown=function(b){if(9==b.which)return void k.trigger("close");if(40==b.which&&!g.is(":visible"))return void k.trigger("open");if(13!=b.which||g.is(":visible")){b.preventDefault(),letter=String.fromCharCode(b.which).toLowerCase();var c=[9,13,27,38,40];letter&&-1===c.indexOf(b.which)&&(filterQuery.push(letter),string=filterQuery.join(""),newOption=g.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(string)})[0],newOption&&activateOption(g,newOption)),13==b.which&&(activeOption=g.find("li.active:not(.disabled)")[0],activeOption&&(a(activeOption).trigger("click"),k.trigger("close"))),40==b.which&&(newOption=g.find("li.active").next("li:not(.disabled)")[0],newOption&&activateOption(g,newOption)),27==b.which&&k.trigger("close"),38==b.which&&(newOption=g.find("li.active").prev("li:not(.disabled)")[0],newOption&&activateOption(g,newOption)),setTimeout(function(){filterQuery=[]},1e3)}},k.on("keydown",onKeyDown)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1})}function d(a){a>=h.length?a=0:0>a&&(a=h.length-1),i=g.find(".active").index(),i!=a&&(e=h.eq(i),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){h.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&j.eq(i).removeClass("active"),h.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),h.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),h.eq(a).addClass("active"),b.indicators&&j.eq(a).addClass("active"))}var e,f=a(this),g=f.find("ul.slides").first(),h=g.find("li"),i=g.find(".active").index();if(-1!=i&&(e=h.eq(i)),f.hasClass("fullscreen")||(b.indicators?f.height(b.height+40):f.height(b.height),g.height(b.height)),h.find(".caption").each(function(){c(a(this),0)}),h.find("img").each(function(){a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src","data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")}),b.indicators){var j=a('<ul class="indicators"></ul>');h.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=g.parent(),e=c.find(a(this)).index();d(e),clearInterval($interval),$interval=setInterval(function(){i=g.find(".active").index(),h.length==i+1?i=0:i+=1,d(i)},b.transition+b.interval)}),j.append(e)}),f.append(j),j=f.find("ul.indicators").find("li.indicator-item")}e?e.show():(h.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),i=0,e=h.eq(i),b.indicators&&j.eq(i).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),$interval=setInterval(function(){i=g.find(".active").index(),d(i+1)},b.transition+b.interval);var k=!1,l=!1,m=!1;f.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval($interval);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=g.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>f.innerWidth()/2||-.65>d)?m=!0:2===b&&(c<-1*f.innerWidth()/2||d>.65)&&(l=!0);var e;l&&(e=$curr_slide.next(),0===e.length&&(e=h.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),m&&(e=$curr_slide.prev(),0===e.length&&(e=h.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=g.find(".active"),k=!1,curr_index=g.find(".active").index(),m||l?l?(d(curr_index+1),$curr_slide.velocity({translateX:-1*f.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):m&&(d(curr_index-1),$curr_slide.velocity({translateX:f.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}),l=!1,m=!1,clearInterval($interval),$interval=setInterval(function(){i=g.find(".active").index(),h.length==i+1?i=0:i+=1,d(i)},b.transition+b.interval))}),f.on("sliderPause",function(){clearInterval($interval)}),f.on("sliderStart",function(){clearInterval($interval),$interval=setInterval(function(){i=g.find(".active").index(),h.length==i+1?i=0:i+=1,d(i)},b.transition+b.interval)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments);
}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))})})}(jQuery),function(a){a(document).ready(function(){a(document).on("click.chip",".chip .material-icons",function(b){a(this).parent().remove()})})}(jQuery),function(a){a(document).ready(function(){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})})}})}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn",function(b){var d=a(this);c(d)})}),a.fn.extend({openFAB:function(){var c=a(this);b(c)},closeFAB:function(){c($this)}});var b=function(b){if($this=b,$this.hasClass("active")===!1){$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:"40px"},{duration:0});var c=0;$this.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0"},{duration:80,delay:c}),c+=40})}},c=function(a){$this=a,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:"40px"},{duration:80})}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c=a(b);c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c=0;a(b).find("li").velocity({translateX:"-100px"},{duration:0}),a(b).find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:c,easing:[60,10]}),c+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){var k=new Function(h);k(),e.done=!0}}}}},100)}}(jQuery),function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root[0].focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root[0].focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root[0].focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root[0].focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);b.parent().append(c)}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=void 0!==a(this).attr("length");e&&(a(this).on("input",b),a(this).on("focus",b),a(this).on("blur",d),c(a(this)))})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery);
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
    var sourcDate = new Date(rawToFormattedDate(rawDate));
    sourcDate.setDate(sourcDate.getDate() + daysCount);
    var year = sourcDate.getFullYear();
    var month = ((parseInt(sourcDate.getMonth() + 1, 10) < 10) ? ('0' + (parseInt(sourcDate.getMonth() + 1, 10))) : (parseInt(sourcDate.getMonth(), 10) + 1));
    var day = (sourcDate.getDate() < 10) ? ('0' + sourcDate.getDate()) : sourcDate.getDate();
    var d_day_no = sourcDate.getDay();
    return [String(year), String(month), String(day), d_day_no];
}

function getGregorianDate(rawHijriDate, only_day_no) {
    var selectedYearArray = getGregorianYearArray(rawHijriDate.substr(0, 4));
    var selectedMonth = parseInt(rawHijriDate.substr(4, 2), 10);
    var selectedDays = parseInt(rawHijriDate.substr(6, 2), 10);
    var totalDays = 0;
    for (var i in selectedMonth) {
        totalDays = selectedYearArray[i + 1] == 1 ? totalDays += 30 : totalDays + 29;
    }
    dateData = addDays(selectedYearArray[0], (totalDays + selectedDays - 1));
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
        total_h_days = (hijri_array[i] == 1) ? total_h_days += 30 :  total_h_days += 29;
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
    return formattedDate.replace(re, '');
}
var monthsNames = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الثاني', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
var weekDayShort = ['أح', 'اث', 'ث', 'أر', 'خ', 'ج', 'س'];
var weekDayName = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
$(document).ready(function () {
    var text_id_name;
    //if you change the class name,then you should change it in the css file.
    var main_class_name = '.zezo_date';
    var main_class_name_no_dot = 'zezo_date';
    var text_position;
    //get today hijri date and store it
    //default date is the date that was in the text field and the chosen date
    var z_default_year;
    var z_default_month;
    var z_default_day;

    var hijri_date = getRawHijriDateFromArray(getHijriDate('now'));

    var today_day = hijri_date.substring(6, 8);
    var today_month = hijri_date.substring(4, 6);
    var today_year = hijri_date.substring(0, 4);
    //make the UI only one time
    make_ui();
    //create event handlers
    load_click_events();
    //make text field read only
    var dateInput=$('input[zezo_date=true]');
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
        $(main_class_name).slideUp(200);
    }

    function load_days() {
        var mm, yyyy, yyyymmdd;
        mm = ((z_default_month < 10) ? '0' + parseInt(z_default_month, 10) : z_default_month);
        yyyy = z_default_year;
        yyyymmdd = String(yyyy) + String(mm) + '01';
        var first_day_no = getGregorianDate(yyyymmdd).dayNo;
        month_days = getHijriMonthDaysCount(z_default_year, z_default_month);
        $(main_class_name + ' .d').html('');
        $(main_class_name + ' .d').removeClass('hidden_day');
        $(main_class_name + ' .d').removeAttr('id');
        var corrected_day;

        for (var i1 = 1; i1 < 43; i1++) {
            var dayBlock=$('.d_' + i1);
            corrected_day = (i1 - parseInt(first_day_no, 10));
            if (i1 > first_day_no && corrected_day <= month_days) {
                dayBlock.html(corrected_day);
                dayBlock.attr('id', 'd_' + corrected_day);
            } else {
                dayBlock.addClass('hidden_day');
            }
            //weekends
            if ((i1 + 1) % 7 === 0 || i1 % 7 === 0) {
                dayBlock.addClass('weekend');
            }
        }
        var first_year = z_default_year - 13;
        for (var i8 = 1; i8 < 30; i8++) {
            $(main_class_name + ' .choose_y[y_order=' + parseInt(i8, 10) + ']').html(first_year);
            $(main_class_name + ' .choose_y[y_order=' + parseInt(i8, 10) + ']').attr('year_no', first_year);
            first_year++;
        }
        $(main_class_name + ' .d').removeClass('today');
        $(main_class_name + ' .choose_m').removeClass('today');
        $(main_class_name + ' .d').removeClass('d_s');
        $(main_class_name + ' .choose_m').removeClass('d_s');
        $(main_class_name + ' .choose_y').removeClass('d_s');
        $(main_class_name + ' .choose_y').removeClass('today');

        $(main_class_name + ' .choose_y[y_order=14]').addClass('d_s');
        $(main_class_name + ' .choose_y[year_no=' + today_year + ']').addClass('today');
        if (parseInt(today_year, 10) == parseInt(z_default_year, 10)) {

            //if the selected month equal today month then >>>
            if (parseInt(today_month, 10) == parseInt(z_default_month, 10)) {
                $(main_class_name + ' #d_' + parseInt(today_day, 10)).addClass('today');
            }

            $(main_class_name + ' .choose_m[m_no=' + parseInt(today_month, 10) + ']').addClass('today');
        }
        $(main_class_name + ' .d').removeClass('d_s');
        $(main_class_name + ' .choose_m').removeClass('d_s');
        $(main_class_name + ' #d_' + parseInt(z_default_day, 10)).addClass('d_s');
        $(main_class_name + ' .choose_m[m_no=' + parseInt(z_default_month, 10) + ']').addClass('d_s');

        $(main_class_name + ' .z_h_month').attr('id', 'm_' + parseInt(z_default_month, 10));
        $(main_class_name + ' .z_h_month').html(monthsNames[parseInt(z_default_month, 10) - 1]);

        $(main_class_name + ' .z_h_year').html(z_default_year);

        //change height if there is a day in the last row
        var last_row = $('.d_36').attr('id');
        if (typeof (last_row) === 'undefined') {
            $(main_class_name).css('height', '200px');
        } else {
            $(main_class_name).css('height', '220px');
        }
    }

    //create divs and numbers
    function make_ui() {
        $("body").append('<div class="' + main_class_name_no_dot + '"></div>');
        $(main_class_name).css('display', 'none');
        //Years ##########################
        $(main_class_name).append('<div class="z_head"></div>');
        $(main_class_name + " .z_head").append('<div class="z_ok">إغلاق</div>');
        //$(main_class_name + " .z_head").append('<div class="z_cancel"></div>');
        $(main_class_name + " .z_head").append('<div class="z_clear">مسح</div>');

        $(main_class_name + " .z_head").append('<span class="today_date">اليوم</span>');
        $(main_class_name + " .z_head").append('<span class="top_icon" id="z_previous"><i class="fa fa-lg fa-arrow-circle-right"></i></span>');

        $(main_class_name + " .z_head").append('<div class="year_month"></div>');
        $(main_class_name + " .year_month").append('<a class="z_h_year"></a><div class="clear_fix"></div>');
        $(main_class_name + " .year_month").append('<a class="z_h_month"></a>');

        $(main_class_name + " .z_head").append('<span class="top_icon" id="z_next"><i class="fa fa-lg fa-arrow-circle-left"></span>');

        $(main_class_name + " .z_head").append('<div class="year_slider"></div>');
        $(main_class_name + " .year_slider").css('display', 'none');
        $(main_class_name + " .year_slider").append('<div class="right_years"></div>');
        $(main_class_name + " .year_slider").append('<div class="middle_years"></div>');
        $(main_class_name + " .year_slider").append('<div class="left_years"></div>');
        for (var i7 = 1; i7 < 10; i7++) {
            $(main_class_name + " .right_years").append('<div class="choose_y" y_order="' + i7 + '"></div>');
            $(main_class_name + " .middle_years").append('<div class="choose_y" y_order="' + (i7 + 9) + '"></div>');
            $(main_class_name + " .left_years").append('<div class="choose_y" y_order="' + (i7 + 18) + '"></div>');
        }
        $(main_class_name + "[y_order='1']").html('سنوات سابقة');
        //months slider
        $(main_class_name + " .z_head").append('<div class="month_slider"></div>');

        $(main_class_name + " .month_slider").css('display', 'none');
        $(main_class_name + " .month_slider").append('<div class="right_months"></div>');
        $(main_class_name + " .month_slider").append('<div class="left_months"></div>');
        for (var i6 = 1; i6 < 7; i6++) {
            $(main_class_name + " .right_months").append('<div class="choose_m" m_no="' + i6 + '">' + '(' + i6 + ') ' + monthsNames[i6 - 1] + '</div>');
            $(main_class_name + " .left_months").append('<div class="choose_m" m_no="' + (i6 + 6) + '">' + '(' + (i6 + 6) + ') ' + monthsNames[(i6 - 1) + 6] + '</div>');
        }

        //Days (only the div container) ##########################
        $(main_class_name).append('<div class="z_days"></div>');

        $('.z_days').append('<div class="z_day_names"></div>');
        $('.z_days').append('<div class="z_day_no"></div>');

        for (var i5 = 0; i5 < 7; i5++) {
            $(main_class_name + " .z_day_names").append('<span class="c_day_name">' + weekDayShort[i5] + '</span>');
        }

        for (var i1 = 1; i1 < 43; i1++) {
            $(main_class_name + " .z_day_no").append('<span class="d d_' + i1 + '"></span>');
        }
    }

    //show zezo calender
    function show_cal() {
        $(main_class_name).css('top', text_position.top + 25);
        $(main_class_name).css('left', text_position.left);

        $(main_class_name + ' .y').val(z_default_year);
        load_days();

        $(main_class_name).slideDown(200);
    }

    //function set_titles() {
    //$(main_class_name + ' .d').removeAttr('title');
    //$(main_class_name + ' .m').removeAttr('title');
    //$(main_class_name + ' .y').removeAttr('title');
    //$(main_class_name + ' .today').attr('title','تاريخ اليوم');
    //$(main_class_name + ' .d .d_s').attr('title','اليوم المحدد');
    //$(main_class_name + ' .z_months .d_s').attr('title','الشهر المحدد');
    //$(main_class_name + ' .z_days .d_s').attr('title','اليوم المحدد');
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
            $(main_class_name + ' .d').removeClass('d_s');
            $(day_no).addClass('d_s');
            z_default_day = $(day_no).html();
            z_show_full_date();
        }

        //Day click
        $(main_class_name + ' .d').click(function () {
            day_click(this);
            z_hide();
        });
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
            $(main_class_name + ' .z_h_month').html(monthsNames[parseInt(z_default_month, 10) - 1]);
            $(main_class_name + ' .z_h_year').html(z_default_year);
            load_days();
            z_show_full_date();
        }


        $(main_class_name + ' .choose_m').click(function () {
            z_default_month = parseInt($(this).attr('m_no'), 10);
            $(main_class_name + ' .z_h_month').html(monthsNames[z_default_month]);
            $(main_class_name + ' .month_slider').slideUp(200);
            load_days();
            z_show_full_date();
        });
        $(main_class_name + ' .choose_y').click(function () {
            z_default_year = $(this).html();
            $(main_class_name + ' .z_h_year').html(z_default_year);
            $(main_class_name + ' .year_slider').slideUp(200);
            load_days();
            z_show_full_date();
        });


        $('.z_h_year').click(function () {
            $('.month_slider').slideUp(200);
            $('.year_slider').slideToggle(200);
        });
        $('.z_h_month').click(function () {
            $('.year_slider').slideUp(200);
            $('.month_slider').slideToggle(200);
        });

        //***********************************************
        // OK click
        $(main_class_name + ' .z_ok').click(function () {
            //z_show_full_date();
            z_hide();
        });
        //set today date
        $(main_class_name + ' .today_date').click(function () {
            hijri_date = getRawHijriDateFromArray(getHijriDate('now'));
            today_day = hijri_date.substring(6, 8);
            today_month = hijri_date.substring(4, 6);
            today_year = hijri_date.substring(0, 4);
            z_default_day = today_day;
            z_default_month = today_month;
            z_default_year = today_year;
            //$(text_id_name).val(today_full_date);
            z_show_full_date();
            z_hide();
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
        $(main_class_name + ' .z_clear').click(function () {
            $(text_id_name).val('');
            z_hide();
            $(text_id_name).trigger('change');
            //z_show_full_date()
        });
        //***********************************************
    }

    //fill date in text box
    function z_show_full_date() {
        var dd, mm, yyyy, yyyymmdd;
        dd = ((z_default_day < 10) ? '0' + parseInt(z_default_day, 10) : z_default_day);
        mm = ((z_default_month < 10) ? '0' + parseInt(z_default_month, 10) : z_default_month);
        yyyy = z_default_year;
        yyyymmdd = String(yyyy) + String(mm) + String(dd);
        $(text_id_name).val(yyyy + '/' + mm + '/' + dd);
        $(text_id_name).trigger('change');
        //set_titles();
    }
});
var quran = [
    {
        n: 1,
        t: "الفاتحة",
        a: 7
    }, {
        n: 2,
        t: "البقرة",
        a: 286
    }, {
        n: 3,
        t: "آل عمران",
        a: 200
    }, {
        n: 4,
        t: "النساء",
        a: 176
    }, {
        n: 5,
        t: "المآئدة",
        a: 120
    }, {
        n: 6,
        t: "الأنعام",
        a: 165
    }, {
        n: 7,
        t: "الأعراف",
        a: 206
    }, {
        n: 8,
        t: "الأنفال",
        a: 75
    }, {
        n: 9,
        t: "التوبة",
        a: 129
    }, {
        n: 10,
        t: "يونس",
        a: 109
    }, {
        n: 11,
        t: "هود",
        a: 123
    }, {
        n: 12,
        t: "يوسف",
        a: 111
    }, {
        n: 13,
        t: "الرعد",
        a: 43
    }, {
        n: 14,
        t: "إبراهيم",
        a: 52
    }, {
        n: 15,
        t: "الحجر",
        a: 99
    }, {
        n: 16,
        t: "النحل",
        a: 128
    }, {
        n: 17,
        t: "الإسراء",
        a: 111
    }, {
        n: 18,
        t: "الكهف",
        a: 110
    }, {
        n: 19,
        t: "مريم",
        a: 98
    }, {
        n: 20,
        t: "طـه",
        a: 135
    }, {
        n: 21,
        t: "الأنبياء",
        a: 112
    }, {
        n: 22,
        t: "الحج",
        a: 78
    }, {
        n: 23,
        t: "المؤمنون",
        a: 118
    }, {
        n: 24,
        t: "النور",
        a: 64
    }, {
        n: 25,
        t: "الفرقان",
        a: 77
    }, {
        n: 26,
        t: "الشعراء",
        a: 227
    }, {
        n: 27,
        t: "النمل",
        a: 93
    }, {
        n: 28,
        t: "القصص",
        a: 88
    }, {
        n: 29,
        t: "العنكبوت",
        a: 69
    }, {
        n: 30,
        t: "الروم",
        a: 60
    }, {
        n: 31,
        t: "لقمان",
        a: 34
    }, {
        n: 32,
        t: "السجدة",
        a: 30
    }, {
        n: 33,
        t: "الأحزاب",
        a: 73
    }, {
        n: 34,
        t: "سبأ",
        a: 54
    }, {
        n: 35,
        t: "فاطر",
        a: 45
    }, {
        n: 36,
        t: "يس",
        a: 83
    }, {
        n: 37,
        t: "الصافات",
        a: 182
    }, {
        n: 38,
        t: "ص",
        a: 88
    }, {
        n: 39,
        t: "الزمر",
        a: 75
    }, {
        n: 40,
        t: "غافر",
        a: 85
    }, {
        n: 41,
        t: "فصلت",
        a: 54
    }, {
        n: 42,
        t: "الشورى",
        a: 53
    }, {
        n: 43,
        t: "الزخرف",
        a: 89
    }, {
        n: 44,
        t: "الدخان",
        a: 59
    }, {
        n: 45,
        t: "الجاثية",
        a: 37
    }, {
        n: 46,
        t: "الأحقاف",
        a: 35
    }, {
        n: 47,
        t: "محمد",
        a: 38
    }, {
        n: 48,
        t: "الفتح",
        a: 29
    }, {
        n: 49,
        t: "الحجرات",
        a: 18
    }, {
        n: 50,
        t: "ق",
        a: 45
    }, {
        n: 51,
        t: "الذاريات",
        a: 60
    }, {
        n: 52,
        t: "الطور",
        a: 49
    }, {
        n: 53,
        t: "النجم",
        a: 62
    }, {
        n: 54,
        t: "القمر",
        a: 55
    }, {
        n: 55,
        t: "الرحمن",
        a: 78
    }, {
        n: 56,
        t: "الواقعة",
        a: 96
    }, {
        n: 57,
        t: "الحديد",
        a: 29
    }, {
        n: 58,
        t: "المجادلة",
        a: 22
    }, {
        n: 59,
        t: "الحشر",
        a: 24
    }, {
        n: 60,
        t: "الممتحنة",
        a: 13
    }, {
        n: 61,
        t: "الصف",
        a: 14
    }, {
        n: 62,
        t: "الجمعة",
        a: 11
    }, {
        n: 63,
        t: "المنافقون",
        a: 11
    }, {
        n: 64,
        t: "التغابن",
        a: 18
    }, {
        n: 65,
        t: "الطلاق",
        a: 12
    }, {
        n: 66,
        t: "التحريم",
        a: 12
    }, {
        n: 67,
        t: "الملك",
        a: 30
    }, {
        n: 68,
        t: "القلم",
        a: 52
    }, {
        n: 69,
        t: "الحاقة",
        a: 52
    }, {
        n: 70,
        t: "المعارج",
        a: 44
    }, {
        n: 71,
        t: "نوح",
        a: 28
    }, {
        n: 72,
        t: "الجن",
        a: 28
    }, {
        n: 73,
        t: "المزمل",
        a: 20
    }, {
        n: 74,
        t: "المدثر",
        a: 56
    }, {
        n: 75,
        t: "القيامة",
        a: 40
    }, {
        n: 76,
        t: "الإنسان",
        a: 31
    }, {
        n: 77,
        t: "المرسلات",
        a: 50
    }, {
        n: 78,
        t: "النبأ",
        a: 40
    }, {
        n: 79,
        t: "النازعات",
        a: 46
    }, {
        n: 80,
        t: "عبس",
        a: 42
    }, {
        n: 81,
        t: "التكوير",
        a: 29
    }, {
        n: 82,
        t: "الإنفطار",
        a: 19
    }, {
        n: 83,
        t: "المطففين",
        a: 36
    }, {
        n: 84,
        t: "الإنشقاق",
        a: 25
    }, {
        n: 85,
        t: "البرج",
        a: 22
    }, {
        n: 86,
        t: "الطارق",
        a: 17
    }, {
        n: 87,
        t: "الأعلى",
        a: 19
    }, {
        n: 88,
        t: "الغاشية",
        a: 26
    }, {
        n: 89,
        t: "الفجر",
        a: 30
    }, {
        n: 90,
        t: "البلد",
        a: 20
    }, {
        n: 91,
        t: "الشمس",
        a: 15
    }, {
        n: 92,
        t: "الليل",
        a: 21
    }, {
        n: 93,
        t: "الضحى",
        a: 11
    }, {
        n: 94,
        t: "الشرح",
        a: 8
    }, {
        n: 95,
        t: "التين",
        a: 8
    }, {
        n: 96,
        t: "العلق",
        a: 19
    }, {
        n: 97,
        t: "القدر",
        a: 5
    }, {
        n: 98,
        t: "البيِّنة",
        a: 8
    }, {
        n: 99,
        t: "الزلزلة",
        a: 8
    }, {
        n: 100,
        t: "العاديات",
        a: 11
    }, {
        n: 101,
        t: "القارعة",
        a: 11
    }, {
        n: 102,
        t: "التكاثر",
        a: 8
    }, {
        n: 103,
        t: "العصر",
        a: 3
    }, {
        n: 104,
        t: "الهمزة",
        a: 9
    }, {
        n: 105,
        t: "الفيل",
        a: 5
    }, {
        n: 106,
        t: "قريش",
        a: 4
    }, {
        n: 107,
        t: "الماعون",
        a: 7
    }, {
        n: 108,
        t: "الكوثر",
        a: 3
    }, {
        n: 109,
        t: "الكافرون",
        a: 6
    }, {
        n: 110,
        t: "النصر",
        a: 3
    }, {
        n: 111,
        t: "المسد",
        a: 5
    }, {
        n: 112,
        t: "الإخلاص",
        a: 4
    }, {
        n: 113,
        t: "الفلق",
        a: 5
    }, {
        n: 114,
        t: "الناس",
        a: 6
    }];
var quranCharCount = [
    {
        s: 1,
        a: 1,
        c: 19
    }, {
        s: 1,
        a: 2,
        c: 18
    }, {
        s: 1,
        a: 3,
        c: 12
    }, {
        s: 1,
        a: 4,
        c: 12
    }, {
        s: 1,
        a: 5,
        c: 19
    }, {
        s: 1,
        a: 6,
        c: 19
    }, {
        s: 1,
        a: 7,
        c: 44
    }, {
        s: 2,
        a: 1,
        c: 3
    }, {
        s: 2,
        a: 2,
        c: 27
    }, {
        s: 2,
        a: 3,
        c: 47
    }, {
        s: 2,
        a: 4,
        c: 52
    }, {
        s: 2,
        a: 5,
        c: 33
    }, {
        s: 2,
        a: 6,
        c: 47
    }, {
        s: 2,
        a: 7,
        c: 53
    }, {
        s: 2,
        a: 8,
        c: 47
    }, {
        s: 2,
        a: 9,
        c: 49
    }, {
        s: 2,
        a: 10,
        c: 51
    }, {
        s: 2,
        a: 11,
        c: 43
    }, {
        s: 2,
        a: 12,
        c: 29
    }, {
        s: 2,
        a: 13,
        c: 77
    }, {
        s: 2,
        a: 14,
        c: 73
    }, {
        s: 2,
        a: 15,
        c: 34
    }, {
        s: 2,
        a: 16,
        c: 57
    }, {
        s: 2,
        a: 17,
        c: 72
    }, {
        s: 2,
        a: 18,
        c: 19
    }, {
        s: 2,
        a: 19,
        c: 86
    }, {
        s: 2,
        a: 20,
        c: 102
    }, {
        s: 2,
        a: 21,
        c: 53
    }, {
        s: 2,
        a: 22,
        c: 99
    }, {
        s: 2,
        a: 23,
        c: 78
    }, {
        s: 2,
        a: 24,
        c: 66
    }, {
        s: 2,
        a: 25,
        c: 145
    }, {
        s: 2,
        a: 26,
        c: 155
    }, {
        s: 2,
        a: 27,
        c: 82
    }, {
        s: 2,
        a: 28,
        c: 60
    }, {
        s: 2,
        a: 29,
        c: 70
    }, {
        s: 2,
        a: 30,
        c: 111
    }, {
        s: 2,
        a: 31,
        c: 70
    }, {
        s: 2,
        a: 32,
        c: 48
    }, {
        s: 2,
        a: 33,
        c: 101
    }, {
        s: 2,
        a: 34,
        c: 63
    }, {
        s: 2,
        a: 35,
        c: 80
    }, {
        s: 2,
        a: 36,
        c: 86
    }, {
        s: 2,
        a: 37,
        c: 43
    }, {
        s: 2,
        a: 38,
        c: 68
    }, {
        s: 2,
        a: 39,
        c: 51
    }, {
        s: 2,
        a: 40,
        c: 69
    }, {
        s: 2,
        a: 41,
        c: 79
    }, {
        s: 2,
        a: 42,
        c: 42
    }, {
        s: 2,
        a: 43,
        c: 41
    }, {
        s: 2,
        a: 44,
        c: 55
    }, {
        s: 2,
        a: 45,
        c: 47
    }, {
        s: 2,
        a: 46,
        c: 38
    }, {
        s: 2,
        a: 47,
        c: 58
    }, {
        s: 2,
        a: 48,
        c: 69
    }, {
        s: 2,
        a: 49,
        c: 84
    }, {
        s: 2,
        a: 50,
        c: 50
    }, {
        s: 2,
        a: 51,
        c: 53
    }, {
        s: 2,
        a: 52,
        c: 30
    }, {
        s: 2,
        a: 53,
        c: 37
    }, {
        s: 2,
        a: 54,
        c: 121
    }, {
        s: 2,
        a: 55,
        c: 60
    }, {
        s: 2,
        a: 56,
        c: 30
    }, {
        s: 2,
        a: 57,
        c: 90
    }, {
        s: 2,
        a: 58,
        c: 95
    }, {
        s: 2,
        a: 59,
        c: 77
    }, {
        s: 2,
        a: 60,
        c: 118
    }, {
        s: 2,
        a: 61,
        c: 257
    }, {
        s: 2,
        a: 62,
        c: 108
    }, {
        s: 2,
        a: 63,
        c: 70
    }, {
        s: 2,
        a: 64,
        c: 54
    }, {
        s: 2,
        a: 65,
        c: 54
    }, {
        s: 2,
        a: 66,
        c: 45
    }, {
        s: 2,
        a: 67,
        c: 83
    }, {
        s: 2,
        a: 68,
        c: 80
    }, {
        s: 2,
        a: 69,
        c: 71
    }, {
        s: 2,
        a: 70,
        c: 62
    }, {
        s: 2,
        a: 71,
        c: 97
    }, {
        s: 2,
        a: 72,
        c: 45
    }, {
        s: 2,
        a: 73,
        c: 57
    }, {
        s: 2,
        a: 74,
        c: 141
    }, {
        s: 2,
        a: 75,
        c: 77
    }, {
        s: 2,
        a: 76,
        c: 101
    }, {
        s: 2,
        a: 77,
        c: 36
    }, {
        s: 2,
        a: 78,
        c: 45
    }, {
        s: 2,
        a: 79,
        c: 102
    }, {
        s: 2,
        a: 80,
        c: 91
    }, {
        s: 2,
        a: 81,
        c: 54
    }, {
        s: 2,
        a: 82,
        c: 52
    }, {
        s: 2,
        a: 83,
        c: 150
    }, {
        s: 2,
        a: 84,
        c: 71
    }, {
        s: 2,
        a: 85,
        c: 231
    }, {
        s: 2,
        a: 86,
        c: 63
    }, {
        s: 2,
        a: 87,
        c: 138
    }, {
        s: 2,
        a: 88,
        c: 46
    }, {
        s: 2,
        a: 89,
        c: 108
    }, {
        s: 2,
        a: 90,
        c: 107
    }, {
        s: 2,
        a: 91,
        c: 119
    }, {
        s: 2,
        a: 92,
        c: 51
    }, {
        s: 2,
        a: 93,
        c: 131
    }, {
        s: 2,
        a: 94,
        c: 67
    }, {
        s: 2,
        a: 95,
        c: 44
    }, {
        s: 2,
        a: 96,
        c: 102
    }, {
        s: 2,
        a: 97,
        c: 72
    }, {
        s: 2,
        a: 98,
        c: 55
    }, {
        s: 2,
        a: 99,
        c: 44
    }, {
        s: 2,
        a: 100,
        c: 44
    }, {
        s: 2,
        a: 101,
        c: 89
    }, {
        s: 2,
        a: 102,
        c: 308
    }, {
        s: 2,
        a: 103,
        c: 49
    }, {
        s: 2,
        a: 104,
        c: 65
    }, {
        s: 2,
        a: 105,
        c: 98
    }, {
        s: 2,
        a: 106,
        c: 61
    }, {
        s: 2,
        a: 107,
        c: 59
    }, {
        s: 2,
        a: 108,
        c: 73
    }, {
        s: 2,
        a: 109,
        c: 123
    }, {
        s: 2,
        a: 110,
        c: 76
    }, {
        s: 2,
        a: 111,
        c: 72
    }, {
        s: 2,
        a: 112,
        c: 58
    }, {
        s: 2,
        a: 113,
        c: 141
    }, {
        s: 2,
        a: 114,
        c: 113
    }, {
        s: 2,
        a: 115,
        c: 52
    }, {
        s: 2,
        a: 116,
        c: 56
    }, {
        s: 2,
        a: 117,
        c: 47
    }, {
        s: 2,
        a: 118,
        c: 103
    }, {
        s: 2,
        a: 119,
        c: 46
    }, {
        s: 2,
        a: 120,
        c: 112
    }, {
        s: 2,
        a: 121,
        c: 70
    }, {
        s: 2,
        a: 122,
        c: 58
    }, {
        s: 2,
        a: 123,
        c: 67
    }, {
        s: 2,
        a: 124,
        c: 83
    }, {
        s: 2,
        a: 125,
        c: 115
    }, {
        s: 2,
        a: 126,
        c: 122
    }, {
        s: 2,
        a: 127,
        c: 65
    }, {
        s: 2,
        a: 128,
        c: 76
    }, {
        s: 2,
        a: 129,
        c: 81
    }, {
        s: 2,
        a: 130,
        c: 74
    }, {
        s: 2,
        a: 131,
        c: 33
    }, {
        s: 2,
        a: 132,
        c: 70
    }, {
        s: 2,
        a: 133,
        c: 114
    }, {
        s: 2,
        a: 134,
        c: 54
    }, {
        s: 2,
        a: 135,
        c: 63
    }, {
        s: 2,
        a: 136,
        c: 135
    }, {
        s: 2,
        a: 137,
        c: 79
    }, {
        s: 2,
        a: 138,
        c: 37
    }, {
        s: 2,
        a: 139,
        c: 63
    }, {
        s: 2,
        a: 140,
        c: 127
    }, {
        s: 2,
        a: 141,
        c: 54
    }, {
        s: 2,
        a: 142,
        c: 89
    }, {
        s: 2,
        a: 143,
        c: 196
    }, {
        s: 2,
        a: 144,
        c: 146
    }, {
        s: 2,
        a: 145,
        c: 130
    }, {
        s: 2,
        a: 146,
        c: 73
    }, {
        s: 2,
        a: 147,
        c: 27
    }, {
        s: 2,
        a: 148,
        c: 75
    }, {
        s: 2,
        a: 149,
        c: 66
    }, {
        s: 2,
        a: 150,
        c: 138
    }, {
        s: 2,
        a: 151,
        c: 87
    }, {
        s: 2,
        a: 152,
        c: 32
    }, {
        s: 2,
        a: 153,
        c: 53
    }, {
        s: 2,
        a: 154,
        c: 50
    }, {
        s: 2,
        a: 155,
        c: 66
    }, {
        s: 2,
        a: 156,
        c: 45
    }, {
        s: 2,
        a: 157,
        c: 42
    }, {
        s: 2,
        a: 158,
        c: 89
    }, {
        s: 2,
        a: 159,
        c: 91
    }, {
        s: 2,
        a: 160,
        c: 57
    }, {
        s: 2,
        a: 161,
        c: 64
    }, {
        s: 2,
        a: 162,
        c: 37
    }, {
        s: 2,
        a: 163,
        c: 35
    }, {
        s: 2,
        a: 164,
        c: 187
    }, {
        s: 2,
        a: 165,
        c: 123
    }, {
        s: 2,
        a: 166,
        c: 57
    }, {
        s: 2,
        a: 167,
        c: 96
    }, {
        s: 2,
        a: 168,
        c: 68
    }, {
        s: 2,
        a: 169,
        c: 50
    }, {
        s: 2,
        a: 170,
        c: 89
    }, {
        s: 2,
        a: 171,
        c: 66
    }, {
        s: 2,
        a: 172,
        c: 62
    }, {
        s: 2,
        a: 173,
        c: 93
    }, {
        s: 2,
        a: 174,
        c: 122
    }, {
        s: 2,
        a: 175,
        c: 61
    }, {
        s: 2,
        a: 176,
        c: 58
    }, {
        s: 2,
        a: 177,
        c: 266
    }, {
        s: 2,
        a: 178,
        c: 163
    }, {
        s: 2,
        a: 179,
        c: 39
    }, {
        s: 2,
        a: 180,
        c: 77
    }, {
        s: 2,
        a: 181,
        c: 54
    }, {
        s: 2,
        a: 182,
        c: 55
    }, {
        s: 2,
        a: 183,
        c: 61
    }, {
        s: 2,
        a: 184,
        c: 123
    }, {
        s: 2,
        a: 185,
        c: 185
    }, {
        s: 2,
        a: 186,
        c: 77
    }, {
        s: 2,
        a: 187,
        c: 286
    }, {
        s: 2,
        a: 188,
        c: 87
    }, {
        s: 2,
        a: 189,
        c: 120
    }, {
        s: 2,
        a: 190,
        c: 59
    }, {
        s: 2,
        a: 191,
        c: 130
    }, {
        s: 2,
        a: 192,
        c: 24
    }, {
        s: 2,
        a: 193,
        c: 65
    }, {
        s: 2,
        a: 194,
        c: 107
    }, {
        s: 2,
        a: 195,
        c: 66
    }, {
        s: 2,
        a: 196,
        c: 290
    }, {
        s: 2,
        a: 197,
        c: 121
    }, {
        s: 2,
        a: 198,
        c: 110
    }, {
        s: 2,
        a: 199,
        c: 49
    }, {
        s: 2,
        a: 200,
        c: 97
    }, {
        s: 2,
        a: 201,
        c: 57
    }, {
        s: 2,
        a: 202,
        c: 35
    }, {
        s: 2,
        a: 203,
        c: 103
    }, {
        s: 2,
        a: 204,
        c: 65
    }, {
        s: 2,
        a: 205,
        c: 59
    }, {
        s: 2,
        a: 206,
        c: 52
    }, {
        s: 2,
        a: 207,
        c: 49
    }, {
        s: 2,
        a: 208,
        c: 67
    }, {
        s: 2,
        a: 209,
        c: 49
    }, {
        s: 2,
        a: 210,
        c: 72
    }, {
        s: 2,
        a: 211,
        c: 74
    }, {
        s: 2,
        a: 212,
        c: 93
    }, {
        s: 2,
        a: 213,
        c: 214
    }, {
        s: 2,
        a: 214,
        c: 127
    }, {
        s: 2,
        a: 215,
        c: 104
    }, {
        s: 2,
        a: 216,
        c: 93
    }, {
        s: 2,
        a: 217,
        c: 247
    }, {
        s: 2,
        a: 218,
        c: 72
    }, {
        s: 2,
        a: 219,
        c: 123
    }, {
        s: 2,
        a: 220,
        c: 118
    }, {
        s: 2,
        a: 221,
        c: 182
    }, {
        s: 2,
        a: 222,
        c: 122
    }, {
        s: 2,
        a: 223,
        c: 81
    }, {
        s: 2,
        a: 224,
        c: 66
    }, {
        s: 2,
        a: 225,
        c: 65
    }, {
        s: 2,
        a: 226,
        c: 54
    }, {
        s: 2,
        a: 227,
        c: 29
    }, {
        s: 2,
        a: 228,
        c: 177
    }, {
        s: 2,
        a: 229,
        c: 193
    }, {
        s: 2,
        a: 230,
        c: 114
    }, {
        s: 2,
        a: 231,
        c: 203
    }, {
        s: 2,
        a: 232,
        c: 147
    }, {
        s: 2,
        a: 233,
        c: 288
    }, {
        s: 2,
        a: 234,
        c: 122
    }, {
        s: 2,
        a: 235,
        c: 200
    }, {
        s: 2,
        a: 236,
        c: 111
    }, {
        s: 2,
        a: 237,
        c: 140
    }, {
        s: 2,
        a: 238,
        c: 44
    }, {
        s: 2,
        a: 239,
        c: 65
    }, {
        s: 2,
        a: 240,
        c: 116
    }, {
        s: 2,
        a: 241,
        c: 34
    }, {
        s: 2,
        a: 242,
        c: 31
    }, {
        s: 2,
        a: 243,
        c: 106
    }, {
        s: 2,
        a: 244,
        c: 38
    }, {
        s: 2,
        a: 245,
        c: 69
    }, {
        s: 2,
        a: 246,
        c: 217
    }, {
        s: 2,
        a: 247,
        c: 165
    }, {
        s: 2,
        a: 248,
        c: 114
    }, {
        s: 2,
        a: 249,
        c: 240
    }, {
        s: 2,
        a: 250,
        c: 77
    }, {
        s: 2,
        a: 251,
        c: 122
    }, {
        s: 2,
        a: 252,
        c: 41
    }, {
        s: 2,
        a: 253,
        c: 208
    }, {
        s: 2,
        a: 254,
        c: 87
    }, {
        s: 2,
        a: 255,
        c: 189
    }, {
        s: 2,
        a: 256,
        c: 102
    }, {
        s: 2,
        a: 257,
        c: 118
    }, {
        s: 2,
        a: 258,
        c: 169
    }, {
        s: 2,
        a: 259,
        c: 249
    }, {
        s: 2,
        a: 260,
        c: 148
    }, {
        s: 2,
        a: 261,
        c: 97
    }, {
        s: 2,
        a: 262,
        c: 92
    }, {
        s: 2,
        a: 263,
        c: 44
    }, {
        s: 2,
        a: 264,
        c: 174
    }, {
        s: 2,
        a: 265,
        c: 123
    }, {
        s: 2,
        a: 266,
        c: 148
    }, {
        s: 2,
        a: 267,
        c: 125
    }, {
        s: 2,
        a: 268,
        c: 68
    }, {
        s: 2,
        a: 269,
        c: 65
    }, {
        s: 2,
        a: 270,
        c: 57
    }, {
        s: 2,
        a: 271,
        c: 89
    }, {
        s: 2,
        a: 272,
        c: 112
    }, {
        s: 2,
        a: 273,
        c: 134
    }, {
        s: 2,
        a: 274,
        c: 79
    }, {
        s: 2,
        a: 275,
        c: 186
    }, {
        s: 2,
        a: 276,
        c: 45
    }, {
        s: 2,
        a: 277,
        c: 87
    }, {
        s: 2,
        a: 278,
        c: 54
    }, {
        s: 2,
        a: 279,
        c: 72
    }, {
        s: 2,
        a: 280,
        c: 52
    }, {
        s: 2,
        a: 281,
        c: 54
    }, {
        s: 2,
        a: 282,
        c: 551
    }, {
        s: 2,
        a: 283,
        c: 138
    }, {
        s: 2,
        a: 284,
        c: 103
    }, {
        s: 2,
        a: 285,
        c: 118
    }, {
        s: 2,
        a: 286,
        c: 196
    }, {
        s: 3,
        a: 1,
        c: 3
    }, {
        s: 3,
        a: 2,
        c: 24
    }, {
        s: 3,
        a: 3,
        c: 53
    }, {
        s: 3,
        a: 4,
        c: 74
    }, {
        s: 3,
        a: 5,
        c: 37
    }, {
        s: 3,
        a: 6,
        c: 50
    }, {
        s: 3,
        a: 7,
        c: 197
    }, {
        s: 3,
        a: 8,
        c: 54
    }, {
        s: 3,
        a: 9,
        c: 47
    }, {
        s: 3,
        a: 10,
        c: 66
    }, {
        s: 3,
        a: 11,
        c: 68
    }, {
        s: 3,
        a: 12,
        c: 43
    }, {
        s: 3,
        a: 13,
        c: 116
    }, {
        s: 3,
        a: 14,
        c: 125
    }, {
        s: 3,
        a: 15,
        c: 107
    }, {
        s: 3,
        a: 16,
        c: 50
    }, {
        s: 3,
        a: 17,
        c: 54
    }, {
        s: 3,
        a: 18,
        c: 72
    }, {
        s: 3,
        a: 19,
        c: 107
    }, {
        s: 3,
        a: 20,
        c: 122
    }, {
        s: 3,
        a: 21,
        c: 88
    }, {
        s: 3,
        a: 22,
        c: 50
    }, {
        s: 3,
        a: 23,
        c: 81
    }, {
        s: 3,
        a: 24,
        c: 65
    }, {
        s: 3,
        a: 25,
        c: 53
    }, {
        s: 3,
        a: 26,
        c: 92
    }, {
        s: 3,
        a: 27,
        c: 86
    }, {
        s: 3,
        a: 28,
        c: 113
    }, {
        s: 3,
        a: 29,
        c: 79
    }, {
        s: 3,
        a: 30,
        c: 96
    }, {
        s: 3,
        a: 31,
        c: 62
    }, {
        s: 3,
        a: 32,
        c: 47
    }, {
        s: 3,
        a: 33,
        c: 48
    }, {
        s: 3,
        a: 34,
        c: 27
    }, {
        s: 3,
        a: 35,
        c: 66
    }, {
        s: 3,
        a: 36,
        c: 109
    }, {
        s: 3,
        a: 37,
        c: 138
    }, {
        s: 3,
        a: 38,
        c: 52
    }, {
        s: 3,
        a: 39,
        c: 92
    }, {
        s: 3,
        a: 40,
        c: 63
    }, {
        s: 3,
        a: 41,
        c: 80
    }, {
        s: 3,
        a: 42,
        c: 60
    }, {
        s: 3,
        a: 43,
        c: 37
    }, {
        s: 3,
        a: 44,
        c: 81
    }, {
        s: 3,
        a: 45,
        c: 91
    }, {
        s: 3,
        a: 46,
        c: 33
    }, {
        s: 3,
        a: 47,
        c: 79
    }, {
        s: 3,
        a: 48,
        c: 35
    }, {
        s: 3,
        a: 49,
        c: 187
    }, {
        s: 3,
        a: 50,
        c: 80
    }, {
        s: 3,
        a: 51,
        c: 34
    }, {
        s: 3,
        a: 52,
        c: 86
    }, {
        s: 3,
        a: 53,
        c: 46
    }, {
        s: 3,
        a: 54,
        c: 30
    }, {
        s: 3,
        a: 55,
        c: 132
    }, {
        s: 3,
        a: 56,
        c: 60
    }, {
        s: 3,
        a: 57,
        c: 59
    }, {
        s: 3,
        a: 58,
        c: 32
    }, {
        s: 3,
        a: 59,
        c: 47
    }, {
        s: 3,
        a: 60,
        c: 25
    }, {
        s: 3,
        a: 61,
        c: 114
    }, {
        s: 3,
        a: 62,
        c: 54
    }, {
        s: 3,
        a: 63,
        c: 28
    }, {
        s: 3,
        a: 64,
        c: 129
    }, {
        s: 3,
        a: 65,
        c: 70
    }, {
        s: 3,
        a: 66,
        c: 75
    }, {
        s: 3,
        a: 67,
        c: 61
    }, {
        s: 3,
        a: 68,
        c: 66
    }, {
        s: 3,
        a: 69,
        c: 54
    }, {
        s: 3,
        a: 70,
        c: 39
    }, {
        s: 3,
        a: 71,
        c: 52
    }, {
        s: 3,
        a: 72,
        c: 79
    }, {
        s: 3,
        a: 73,
        c: 115
    }, {
        s: 3,
        a: 74,
        c: 34
    }, {
        s: 3,
        a: 75,
        c: 144
    }, {
        s: 3,
        a: 76,
        c: 36
    }, {
        s: 3,
        a: 77,
        c: 116
    }, {
        s: 3,
        a: 78,
        c: 120
    }, {
        s: 3,
        a: 79,
        c: 120
    }, {
        s: 3,
        a: 80,
        c: 67
    }, {
        s: 3,
        a: 81,
        c: 146
    }, {
        s: 3,
        a: 82,
        c: 29
    }, {
        s: 3,
        a: 83,
        c: 62
    }, {
        s: 3,
        a: 84,
        c: 126
    }, {
        s: 3,
        a: 85,
        c: 52
    }, {
        s: 3,
        a: 86,
        c: 83
    }, {
        s: 3,
        a: 87,
        c: 47
    }, {
        s: 3,
        a: 88,
        c: 37
    }, {
        s: 3,
        a: 89,
        c: 43
    }, {
        s: 3,
        a: 90,
        c: 62
    }, {
        s: 3,
        a: 91,
        c: 91
    }, {
        s: 3,
        a: 92,
        c: 56
    }, {
        s: 3,
        a: 93,
        c: 99
    }, {
        s: 3,
        a: 94,
        c: 44
    }, {
        s: 3,
        a: 95,
        c: 47
    }, {
        s: 3,
        a: 96,
        c: 42
    }, {
        s: 3,
        a: 97,
        c: 99
    }, {
        s: 3,
        a: 98,
        c: 50
    }, {
        s: 3,
        a: 99,
        c: 77
    }, {
        s: 3,
        a: 100,
        c: 69
    }, {
        s: 3,
        a: 101,
        c: 74
    }, {
        s: 3,
        a: 102,
        c: 54
    }, {
        s: 3,
        a: 103,
        c: 157
    }, {
        s: 3,
        a: 104,
        c: 70
    }, {
        s: 3,
        a: 105,
        c: 65
    }, {
        s: 3,
        a: 106,
        c: 81
    }, {
        s: 3,
        a: 107,
        c: 43
    }, {
        s: 3,
        a: 108,
        c: 49
    }, {
        s: 3,
        a: 109,
        c: 44
    }, {
        s: 3,
        a: 110,
        c: 113
    }, {
        s: 3,
        a: 111,
        c: 48
    }, {
        s: 3,
        a: 112,
        c: 152
    }, {
        s: 3,
        a: 113,
        c: 59
    }, {
        s: 3,
        a: 114,
        c: 84
    }, {
        s: 3,
        a: 115,
        c: 40
    }, {
        s: 3,
        a: 116,
        c: 77
    }, {
        s: 3,
        a: 117,
        c: 98
    }, {
        s: 3,
        a: 118,
        c: 125
    }, {
        s: 3,
        a: 119,
        c: 127
    }, {
        s: 3,
        a: 120,
        c: 88
    }, {
        s: 3,
        a: 121,
        c: 49
    }, {
        s: 3,
        a: 122,
        c: 57
    }, {
        s: 3,
        a: 123,
        c: 47
    }, {
        s: 3,
        a: 124,
        c: 60
    }, {
        s: 3,
        a: 125,
        c: 69
    }, {
        s: 3,
        a: 126,
        c: 68
    }, {
        s: 3,
        a: 127,
        c: 43
    }, {
        s: 3,
        a: 128,
        c: 45
    }, {
        s: 3,
        a: 129,
        c: 61
    }, {
        s: 3,
        a: 130,
        c: 62
    }, {
        s: 3,
        a: 131,
        c: 27
    }, {
        s: 3,
        a: 132,
        c: 29
    }, {
        s: 3,
        a: 133,
        c: 55
    }, {
        s: 3,
        a: 134,
        c: 71
    }, {
        s: 3,
        a: 135,
        c: 104
    }, {
        s: 3,
        a: 136,
        c: 70
    }, {
        s: 3,
        a: 137,
        c: 54
    }, {
        s: 3,
        a: 138,
        c: 29
    }, {
        s: 3,
        a: 139,
        c: 41
    }, {
        s: 3,
        a: 140,
        c: 105
    }, {
        s: 3,
        a: 141,
        c: 33
    }, {
        s: 3,
        a: 142,
        c: 60
    }, {
        s: 3,
        a: 143,
        c: 51
    }, {
        s: 3,
        a: 144,
        c: 107
    }, {
        s: 3,
        a: 145,
        c: 99
    }, {
        s: 3,
        a: 146,
        c: 88
    }, {
        s: 3,
        a: 147,
        c: 87
    }, {
        s: 3,
        a: 148,
        c: 50
    }, {
        s: 3,
        a: 149,
        c: 64
    }, {
        s: 3,
        a: 150,
        c: 26
    }, {
        s: 3,
        a: 151,
        c: 84
    }, {
        s: 3,
        a: 152,
        c: 166
    }, {
        s: 3,
        a: 153,
        c: 106
    }, {
        s: 3,
        a: 154,
        c: 291
    }, {
        s: 3,
        a: 155,
        c: 89
    }, {
        s: 3,
        a: 156,
        c: 157
    }, {
        s: 3,
        a: 157,
        c: 53
    }, {
        s: 3,
        a: 158,
        c: 28
    }, {
        s: 3,
        a: 159,
        c: 121
    }, {
        s: 3,
        a: 160,
        c: 75
    }, {
        s: 3,
        a: 161,
        c: 68
    }, {
        s: 3,
        a: 162,
        c: 53
    }, {
        s: 3,
        a: 163,
        c: 32
    }, {
        s: 3,
        a: 164,
        c: 107
    }, {
        s: 3,
        a: 165,
        c: 73
    }, {
        s: 3,
        a: 166,
        c: 47
    }, {
        s: 3,
        a: 167,
        c: 151
    }, {
        s: 3,
        a: 168,
        c: 74
    }, {
        s: 3,
        a: 169,
        c: 54
    }, {
        s: 3,
        a: 170,
        c: 78
    }, {
        s: 3,
        a: 171,
        c: 47
    }, {
        s: 3,
        a: 172,
        c: 69
    }, {
        s: 3,
        a: 173,
        c: 77
    }, {
        s: 3,
        a: 174,
        c: 64
    }, {
        s: 3,
        a: 175,
        c: 54
    }, {
        s: 3,
        a: 176,
        c: 87
    }, {
        s: 3,
        a: 177,
        c: 53
    }, {
        s: 3,
        a: 178,
        c: 74
    }, {
        s: 3,
        a: 179,
        c: 146
    }, {
        s: 3,
        a: 180,
        c: 122
    }, {
        s: 3,
        a: 181,
        c: 95
    }, {
        s: 3,
        a: 182,
        c: 37
    }, {
        s: 3,
        a: 183,
        c: 120
    }, {
        s: 3,
        a: 184,
        c: 55
    }, {
        s: 3,
        a: 185,
        c: 99
    }, {
        s: 3,
        a: 186,
        c: 108
    }, {
        s: 3,
        a: 187,
        c: 99
    }, {
        s: 3,
        a: 188,
        c: 86
    }, {
        s: 3,
        a: 189,
        c: 38
    }, {
        s: 3,
        a: 190,
        c: 57
    }, {
        s: 3,
        a: 191,
        c: 100
    }, {
        s: 3,
        a: 192,
        c: 45
    }, {
        s: 3,
        a: 193,
        c: 95
    }, {
        s: 3,
        a: 194,
        c: 58
    }, {
        s: 3,
        a: 195,
        c: 188
    }, {
        s: 3,
        a: 196,
        c: 29
    }, {
        s: 3,
        a: 197,
        c: 30
    }, {
        s: 3,
        a: 198,
        c: 85
    }, {
        s: 3,
        a: 199,
        c: 121
    }, {
        s: 3,
        a: 200,
        c: 57
    }, {
        s: 4,
        a: 1,
        c: 125
    }, {
        s: 4,
        a: 2,
        c: 82
    }, {
        s: 4,
        a: 3,
        c: 115
    }, {
        s: 4,
        a: 4,
        c: 58
    }, {
        s: 4,
        a: 5,
        c: 79
    }, {
        s: 4,
        a: 6,
        c: 186
    }, {
        s: 4,
        a: 7,
        c: 91
    }, {
        s: 4,
        a: 8,
        c: 70
    }, {
        s: 4,
        a: 9,
        c: 71
    }, {
        s: 4,
        a: 10,
        c: 63
    }, {
        s: 4,
        a: 11,
        c: 271
    }, {
        s: 4,
        a: 12,
        c: 299
    }, {
        s: 4,
        a: 13,
        c: 79
    }, {
        s: 4,
        a: 14,
        c: 55
    }, {
        s: 4,
        a: 15,
        c: 107
    }, {
        s: 4,
        a: 16,
        c: 70
    }, {
        s: 4,
        a: 17,
        c: 90
    }, {
        s: 4,
        a: 18,
        c: 106
    }, {
        s: 4,
        a: 19,
        c: 157
    }, {
        s: 4,
        a: 20,
        c: 83
    }, {
        s: 4,
        a: 21,
        c: 49
    }, {
        s: 4,
        a: 22,
        c: 63
    }, {
        s: 4,
        a: 23,
        c: 265
    }, {
        s: 4,
        a: 24,
        c: 185
    }, {
        s: 4,
        a: 25,
        c: 264
    }, {
        s: 4,
        a: 26,
        c: 61
    }, {
        s: 4,
        a: 27,
        c: 60
    }, {
        s: 4,
        a: 28,
        c: 34
    }, {
        s: 4,
        a: 29,
        c: 99
    }, {
        s: 4,
        a: 30,
        c: 53
    }, {
        s: 4,
        a: 31,
        c: 56
    }, {
        s: 4,
        a: 32,
        c: 108
    }, {
        s: 4,
        a: 33,
        c: 88
    }, {
        s: 4,
        a: 34,
        c: 192
    }, {
        s: 4,
        a: 35,
        c: 92
    }, {
        s: 4,
        a: 36,
        c: 158
    }, {
        s: 4,
        a: 37,
        c: 78
    }, {
        s: 4,
        a: 38,
        c: 85
    }, {
        s: 4,
        a: 39,
        c: 68
    }, {
        s: 4,
        a: 40,
        c: 55
    }, {
        s: 4,
        a: 41,
        c: 43
    }, {
        s: 4,
        a: 42,
        c: 61
    }, {
        s: 4,
        a: 43,
        c: 205
    }, {
        s: 4,
        a: 44,
        c: 64
    }, {
        s: 4,
        a: 45,
        c: 44
    }, {
        s: 4,
        a: 46,
        c: 177
    }, {
        s: 4,
        a: 47,
        c: 121
    }, {
        s: 4,
        a: 48,
        c: 69
    }, {
        s: 4,
        a: 49,
        c: 54
    }, {
        s: 4,
        a: 50,
        c: 40
    }, {
        s: 4,
        a: 51,
        c: 94
    }, {
        s: 4,
        a: 52,
        c: 43
    }, {
        s: 4,
        a: 53,
        c: 37
    }, {
        s: 4,
        a: 54,
        c: 80
    }, {
        s: 4,
        a: 55,
        c: 38
    }, {
        s: 4,
        a: 56,
        c: 95
    }, {
        s: 4,
        a: 57,
        c: 100
    }, {
        s: 4,
        a: 58,
        c: 102
    }, {
        s: 4,
        a: 59,
        c: 132
    }, {
        s: 4,
        a: 60,
        c: 125
    }, {
        s: 4,
        a: 61,
        c: 65
    }, {
        s: 4,
        a: 62,
        c: 73
    }, {
        s: 4,
        a: 63,
        c: 65
    }, {
        s: 4,
        a: 64,
        c: 105
    }, {
        s: 4,
        a: 65,
        c: 77
    }, {
        s: 4,
        a: 66,
        c: 107
    }, {
        s: 4,
        a: 67,
        c: 27
    }, {
        s: 4,
        a: 68,
        c: 21
    }, {
        s: 4,
        a: 69,
        c: 92
    }, {
        s: 4,
        a: 70,
        c: 28
    }, {
        s: 4,
        a: 71,
        c: 49
    }, {
        s: 4,
        a: 72,
        c: 63
    }, {
        s: 4,
        a: 73,
        c: 75
    }, {
        s: 4,
        a: 74,
        c: 93
    }, {
        s: 4,
        a: 75,
        c: 139
    }, {
        s: 4,
        a: 76,
        c: 98
    }, {
        s: 4,
        a: 77,
        c: 204
    }, {
        s: 4,
        a: 78,
        c: 143
    }, {
        s: 4,
        a: 79,
        c: 73
    }, {
        s: 4,
        a: 80,
        c: 49
    }, {
        s: 4,
        a: 81,
        c: 101
    }, {
        s: 4,
        a: 82,
        c: 56
    }, {
        s: 4,
        a: 83,
        c: 135
    }, {
        s: 4,
        a: 84,
        c: 87
    }, {
        s: 4,
        a: 85,
        c: 77
    }, {
        s: 4,
        a: 86,
        c: 57
    }, {
        s: 4,
        a: 87,
        c: 61
    }, {
        s: 4,
        a: 88,
        c: 88
    }, {
        s: 4,
        a: 89,
        c: 128
    }, {
        s: 4,
        a: 90,
        c: 168
    }, {
        s: 4,
        a: 91,
        c: 162
    }, {
        s: 4,
        a: 92,
        c: 235
    }, {
        s: 4,
        a: 93,
        c: 70
    }, {
        s: 4,
        a: 94,
        c: 170
    }, {
        s: 4,
        a: 95,
        c: 172
    }, {
        s: 4,
        a: 96,
        c: 37
    }, {
        s: 4,
        a: 97,
        c: 128
    }, {
        s: 4,
        a: 98,
        c: 64
    }, {
        s: 4,
        a: 99,
        c: 40
    }, {
        s: 4,
        a: 100,
        c: 122
    }, {
        s: 4,
        a: 101,
        c: 96
    }, {
        s: 4,
        a: 102,
        c: 281
    }, {
        s: 4,
        a: 103,
        c: 106
    }, {
        s: 4,
        a: 104,
        c: 94
    }, {
        s: 4,
        a: 105,
        c: 67
    }, {
        s: 4,
        a: 106,
        c: 30
    }, {
        s: 4,
        a: 107,
        c: 54
    }, {
        s: 4,
        a: 108,
        c: 82
    }, {
        s: 4,
        a: 109,
        c: 79
    }, {
        s: 4,
        a: 110,
        c: 50
    }, {
        s: 4,
        a: 111,
        c: 46
    }, {
        s: 4,
        a: 112,
        c: 54
    }, {
        s: 4,
        a: 113,
        c: 135
    }, {
        s: 4,
        a: 114,
        c: 97
    }, {
        s: 4,
        a: 115,
        c: 81
    }, {
        s: 4,
        a: 116,
        c: 67
    }, {
        s: 4,
        a: 117,
        c: 43
    }, {
        s: 4,
        a: 118,
        c: 36
    }, {
        s: 4,
        a: 119,
        c: 109
    }, {
        s: 4,
        a: 120,
        c: 35
    }, {
        s: 4,
        a: 121,
        c: 32
    }, {
        s: 4,
        a: 122,
        c: 95
    }, {
        s: 4,
        a: 123,
        c: 72
    }, {
        s: 4,
        a: 124,
        c: 66
    }, {
        s: 4,
        a: 125,
        c: 73
    }, {
        s: 4,
        a: 126,
        c: 45
    }, {
        s: 4,
        a: 127,
        c: 178
    }, {
        s: 4,
        a: 128,
        c: 126
    }, {
        s: 4,
        a: 129,
        c: 102
    }, {
        s: 4,
        a: 130,
        c: 43
    }, {
        s: 4,
        a: 131,
        c: 129
    }, {
        s: 4,
        a: 132,
        c: 40
    }, {
        s: 4,
        a: 133,
        c: 49
    }, {
        s: 4,
        a: 134,
        c: 62
    }, {
        s: 4,
        a: 135,
        c: 163
    }, {
        s: 4,
        a: 136,
        c: 130
    }, {
        s: 4,
        a: 137,
        c: 78
    }, {
        s: 4,
        a: 138,
        c: 28
    }, {
        s: 4,
        a: 139,
        c: 71
    }, {
        s: 4,
        a: 140,
        c: 137
    }, {
        s: 4,
        a: 141,
        c: 161
    }, {
        s: 4,
        a: 142,
        c: 91
    }, {
        s: 4,
        a: 143,
        c: 58
    }, {
        s: 4,
        a: 144,
        c: 85
    }, {
        s: 4,
        a: 145,
        c: 45
    }, {
        s: 4,
        a: 146,
        c: 92
    }, {
        s: 4,
        a: 147,
        c: 48
    }, {
        s: 4,
        a: 148,
        c: 53
    }, {
        s: 4,
        a: 149,
        c: 49
    }, {
        s: 4,
        a: 150,
        c: 100
    }, {
        s: 4,
        a: 151,
        c: 43
    }, {
        s: 4,
        a: 152,
        c: 78
    }, {
        s: 4,
        a: 153,
        c: 162
    }, {
        s: 4,
        a: 154,
        c: 90
    }, {
        s: 4,
        a: 155,
        c: 103
    }, {
        s: 4,
        a: 156,
        c: 31
    }, {
        s: 4,
        a: 157,
        c: 128
    }, {
        s: 4,
        a: 158,
        c: 32
    }, {
        s: 4,
        a: 159,
        c: 57
    }, {
        s: 4,
        a: 160,
        c: 60
    }, {
        s: 4,
        a: 161,
        c: 73
    }, {
        s: 4,
        a: 162,
        c: 136
    }, {
        s: 4,
        a: 163,
        c: 131
    }, {
        s: 4,
        a: 164,
        c: 58
    }, {
        s: 4,
        a: 165,
        c: 66
    }, {
        s: 4,
        a: 166,
        c: 61
    }, {
        s: 4,
        a: 167,
        c: 43
    }, {
        s: 4,
        a: 168,
        c: 50
    }, {
        s: 4,
        a: 169,
        c: 44
    }, {
        s: 4,
        a: 170,
        c: 99
    }, {
        s: 4,
        a: 171,
        c: 216
    }, {
        s: 4,
        a: 172,
        c: 87
    }, {
        s: 4,
        a: 173,
        c: 129
    }, {
        s: 4,
        a: 174,
        c: 50
    }, {
        s: 4,
        a: 175,
        c: 73
    }, {
        s: 4,
        a: 176,
        c: 191
    }, {
        s: 5,
        a: 1,
        c: 97
    }, {
        s: 5,
        a: 2,
        c: 242
    }, {
        s: 5,
        a: 3,
        c: 278
    }, {
        s: 5,
        a: 4,
        c: 137
    }, {
        s: 5,
        a: 5,
        c: 201
    }, {
        s: 5,
        a: 6,
        c: 281
    }, {
        s: 5,
        a: 7,
        c: 86
    }, {
        s: 5,
        a: 8,
        c: 117
    }, {
        s: 5,
        a: 9,
        c: 47
    }, {
        s: 5,
        a: 10,
        c: 40
    }, {
        s: 5,
        a: 11,
        c: 107
    }, {
        s: 5,
        a: 12,
        c: 207
    }, {
        s: 5,
        a: 13,
        c: 141
    }, {
        s: 5,
        a: 14,
        c: 119
    }, {
        s: 5,
        a: 15,
        c: 92
    }, {
        s: 5,
        a: 16,
        c: 80
    }, {
        s: 5,
        a: 17,
        c: 157
    }, {
        s: 5,
        a: 18,
        c: 134
    }, {
        s: 5,
        a: 19,
        c: 107
    }, {
        s: 5,
        a: 20,
        c: 92
    }, {
        s: 5,
        a: 21,
        c: 70
    }, {
        s: 5,
        a: 22,
        c: 75
    }, {
        s: 5,
        a: 23,
        c: 100
    }, {
        s: 5,
        a: 24,
        c: 69
    }, {
        s: 5,
        a: 25,
        c: 52
    }, {
        s: 5,
        a: 26,
        c: 62
    }, {
        s: 5,
        a: 27,
        c: 99
    }, {
        s: 5,
        a: 28,
        c: 64
    }, {
        s: 5,
        a: 29,
        c: 56
    }, {
        s: 5,
        a: 30,
        c: 38
    }, {
        s: 5,
        a: 31,
        c: 106
    }, {
        s: 5,
        a: 32,
        c: 162
    }, {
        s: 5,
        a: 33,
        c: 140
    }, {
        s: 5,
        a: 34,
        c: 52
    }, {
        s: 5,
        a: 35,
        c: 68
    }, {
        s: 5,
        a: 36,
        c: 88
    }, {
        s: 5,
        a: 37,
        c: 49
    }, {
        s: 5,
        a: 38,
        c: 64
    }, {
        s: 5,
        a: 39,
        c: 49
    }, {
        s: 5,
        a: 40,
        c: 71
    }, {
        s: 5,
        a: 41,
        c: 281
    }, {
        s: 5,
        a: 42,
        c: 113
    }, {
        s: 5,
        a: 43,
        c: 68
    }, {
        s: 5,
        a: 44,
        c: 195
    }, {
        s: 5,
        a: 45,
        c: 140
    }, {
        s: 5,
        a: 46,
        c: 117
    }, {
        s: 5,
        a: 47,
        c: 66
    }, {
        s: 5,
        a: 48,
        c: 228
    }, {
        s: 5,
        a: 49,
        c: 136
    }, {
        s: 5,
        a: 50,
        c: 45
    }, {
        s: 5,
        a: 51,
        c: 104
    }, {
        s: 5,
        a: 52,
        c: 116
    }, {
        s: 5,
        a: 53,
        c: 80
    }, {
        s: 5,
        a: 54,
        c: 158
    }, {
        s: 5,
        a: 55,
        c: 68
    }, {
        s: 5,
        a: 56,
        c: 48
    }, {
        s: 5,
        a: 57,
        c: 109
    }, {
        s: 5,
        a: 58,
        c: 54
    }, {
        s: 5,
        a: 59,
        c: 77
    }, {
        s: 5,
        a: 60,
        c: 110
    }, {
        s: 5,
        a: 61,
        c: 68
    }, {
        s: 5,
        a: 62,
        c: 63
    }, {
        s: 5,
        a: 63,
        c: 67
    }, {
        s: 5,
        a: 64,
        c: 218
    }, {
        s: 5,
        a: 65,
        c: 62
    }, {
        s: 5,
        a: 66,
        c: 104
    }, {
        s: 5,
        a: 67,
        c: 94
    }, {
        s: 5,
        a: 68,
        c: 129
    }, {
        s: 5,
        a: 69,
        c: 92
    }, {
        s: 5,
        a: 70,
        c: 89
    }, {
        s: 5,
        a: 71,
        c: 78
    }, {
        s: 5,
        a: 72,
        c: 139
    }, {
        s: 5,
        a: 73,
        c: 96
    }, {
        s: 5,
        a: 74,
        c: 40
    }, {
        s: 5,
        a: 75,
        c: 98
    }, {
        s: 5,
        a: 76,
        c: 58
    }, {
        s: 5,
        a: 77,
        c: 90
    }, {
        s: 5,
        a: 78,
        c: 71
    }, {
        s: 5,
        a: 79,
        c: 42
    }, {
        s: 5,
        a: 80,
        c: 78
    }, {
        s: 5,
        a: 81,
        c: 70
    }, {
        s: 5,
        a: 82,
        c: 128
    }, {
        s: 5,
        a: 83,
        c: 89
    }, {
        s: 5,
        a: 84,
        c: 63
    }, {
        s: 5,
        a: 85,
        c: 67
    }, {
        s: 5,
        a: 86,
        c: 40
    }, {
        s: 5,
        a: 87,
        c: 69
    }, {
        s: 5,
        a: 88,
        c: 52
    }, {
        s: 5,
        a: 89,
        c: 205
    }, {
        s: 5,
        a: 90,
        c: 82
    }, {
        s: 5,
        a: 91,
        c: 92
    }, {
        s: 5,
        a: 92,
        c: 72
    }, {
        s: 5,
        a: 93,
        c: 116
    }, {
        s: 5,
        a: 94,
        c: 104
    }, {
        s: 5,
        a: 95,
        c: 196
    }, {
        s: 5,
        a: 96,
        c: 86
    }, {
        s: 5,
        a: 97,
        c: 119
    }, {
        s: 5,
        a: 98,
        c: 37
    }, {
        s: 5,
        a: 99,
        c: 45
    }, {
        s: 5,
        a: 100,
        c: 73
    }, {
        s: 5,
        a: 101,
        c: 100
    }, {
        s: 5,
        a: 102,
        c: 34
    }, {
        s: 5,
        a: 103,
        c: 85
    }, {
        s: 5,
        a: 104,
        c: 100
    }, {
        s: 5,
        a: 105,
        c: 86
    }, {
        s: 5,
        a: 106,
        c: 213
    }, {
        s: 5,
        a: 107,
        c: 128
    }, {
        s: 5,
        a: 108,
        c: 99
    }, {
        s: 5,
        a: 109,
        c: 59
    }, {
        s: 5,
        a: 110,
        c: 280
    }, {
        s: 5,
        a: 111,
        c: 61
    }, {
        s: 5,
        a: 112,
        c: 86
    }, {
        s: 5,
        a: 113,
        c: 66
    }, {
        s: 5,
        a: 114,
        c: 97
    }, {
        s: 5,
        a: 115,
        c: 70
    }, {
        s: 5,
        a: 116,
        c: 153
    }, {
        s: 5,
        a: 117,
        c: 108
    }, {
        s: 5,
        a: 118,
        c: 47
    }, {
        s: 5,
        a: 119,
        c: 102
    }, {
        s: 5,
        a: 120,
        c: 42
    }, {
        s: 6,
        a: 1,
        c: 69
    }, {
        s: 6,
        a: 2,
        c: 49
    }, {
        s: 6,
        a: 3,
        c: 52
    }, {
        s: 6,
        a: 4,
        c: 42
    }, {
        s: 6,
        a: 5,
        c: 53
    }, {
        s: 6,
        a: 6,
        c: 138
    }, {
        s: 6,
        a: 7,
        c: 66
    }, {
        s: 6,
        a: 8,
        c: 53
    }, {
        s: 6,
        a: 9,
        c: 44
    }, {
        s: 6,
        a: 10,
        c: 56
    }, {
        s: 6,
        a: 11,
        c: 41
    }, {
        s: 6,
        a: 12,
        c: 100
    }, {
        s: 6,
        a: 13,
        c: 37
    }, {
        s: 6,
        a: 14,
        c: 92
    }, {
        s: 6,
        a: 15,
        c: 29
    }, {
        s: 6,
        a: 16,
        c: 36
    }, {
        s: 6,
        a: 17,
        c: 56
    }, {
        s: 6,
        a: 18,
        c: 32
    }, {
        s: 6,
        a: 19,
        c: 137
    }, {
        s: 6,
        a: 20,
        c: 68
    }, {
        s: 6,
        a: 21,
        c: 54
    }, {
        s: 6,
        a: 22,
        c: 57
    }, {
        s: 6,
        a: 23,
        c: 43
    }, {
        s: 6,
        a: 24,
        c: 41
    }, {
        s: 6,
        a: 25,
        c: 133
    }, {
        s: 6,
        a: 26,
        c: 47
    }, {
        s: 6,
        a: 27,
        c: 68
    }, {
        s: 6,
        a: 28,
        c: 60
    }, {
        s: 6,
        a: 29,
        c: 39
    }, {
        s: 6,
        a: 30,
        c: 76
    }, {
        s: 6,
        a: 31,
        c: 111
    }, {
        s: 6,
        a: 32,
        c: 60
    }, {
        s: 6,
        a: 33,
        c: 66
    }, {
        s: 6,
        a: 34,
        c: 90
    }, {
        s: 6,
        a: 35,
        c: 114
    }, {
        s: 6,
        a: 36,
        c: 50
    }, {
        s: 6,
        a: 37,
        c: 67
    }, {
        s: 6,
        a: 38,
        c: 82
    }, {
        s: 6,
        a: 39,
        c: 71
    }, {
        s: 6,
        a: 40,
        c: 62
    }, {
        s: 6,
        a: 41,
        c: 46
    }, {
        s: 6,
        a: 42,
        c: 57
    }, {
        s: 6,
        a: 43,
        c: 63
    }, {
        s: 6,
        a: 44,
        c: 79
    }, {
        s: 6,
        a: 45,
        c: 42
    }, {
        s: 6,
        a: 46,
        c: 90
    }, {
        s: 6,
        a: 47,
        c: 56
    }, {
        s: 6,
        a: 48,
        c: 64
    }, {
        s: 6,
        a: 49,
        c: 43
    }, {
        s: 6,
        a: 50,
        c: 103
    }, {
        s: 6,
        a: 51,
        c: 65
    }, {
        s: 6,
        a: 52,
        c: 105
    }, {
        s: 6,
        a: 53,
        c: 71
    }, {
        s: 6,
        a: 54,
        c: 108
    }, {
        s: 6,
        a: 55,
        c: 35
    }, {
        s: 6,
        a: 56,
        c: 74
    }, {
        s: 6,
        a: 57,
        c: 77
    }, {
        s: 6,
        a: 58,
        c: 59
    }, {
        s: 6,
        a: 59,
        c: 113
    }, {
        s: 6,
        a: 60,
        c: 95
    }, {
        s: 6,
        a: 61,
        c: 71
    }, {
        s: 6,
        a: 62,
        c: 48
    }, {
        s: 6,
        a: 63,
        c: 73
    }, {
        s: 6,
        a: 64,
        c: 36
    }, {
        s: 6,
        a: 65,
        c: 105
    }, {
        s: 6,
        a: 66,
        c: 32
    }, {
        s: 6,
        a: 67,
        c: 21
    }, {
        s: 6,
        a: 68,
        c: 103
    }, {
        s: 6,
        a: 69,
        c: 47
    }, {
        s: 6,
        a: 70,
        c: 175
    }, {
        s: 6,
        a: 71,
        c: 160
    }, {
        s: 6,
        a: 72,
        c: 38
    }, {
        s: 6,
        a: 73,
        c: 106
    }, {
        s: 6,
        a: 74,
        c: 58
    }, {
        s: 6,
        a: 75,
        c: 50
    }, {
        s: 6,
        a: 76,
        c: 54
    }, {
        s: 6,
        a: 77,
        c: 69
    }, {
        s: 6,
        a: 78,
        c: 65
    }, {
        s: 6,
        a: 79,
        c: 53
    }, {
        s: 6,
        a: 80,
        c: 92
    }, {
        s: 6,
        a: 81,
        c: 93
    }, {
        s: 6,
        a: 82,
        c: 52
    }, {
        s: 6,
        a: 83,
        c: 58
    }, {
        s: 6,
        a: 84,
        c: 100
    }, {
        s: 6,
        a: 85,
        c: 34
    }, {
        s: 6,
        a: 86,
        c: 44
    }, {
        s: 6,
        a: 87,
        c: 56
    }, {
        s: 6,
        a: 88,
        c: 59
    }, {
        s: 6,
        a: 89,
        c: 81
    }, {
        s: 6,
        a: 90,
        c: 66
    }, {
        s: 6,
        a: 91,
        c: 171
    }, {
        s: 6,
        a: 92,
        c: 102
    }, {
        s: 6,
        a: 93,
        c: 201
    }, {
        s: 6,
        a: 94,
        c: 128
    }, {
        s: 6,
        a: 95,
        c: 69
    }, {
        s: 6,
        a: 96,
        c: 62
    }, {
        s: 6,
        a: 97,
        c: 69
    }, {
        s: 6,
        a: 98,
        c: 59
    }, {
        s: 6,
        a: 99,
        c: 187
    }, {
        s: 6,
        a: 100,
        c: 68
    }, {
        s: 6,
        a: 101,
        c: 65
    }, {
        s: 6,
        a: 102,
        c: 53
    }, {
        s: 6,
        a: 103,
        c: 43
    }, {
        s: 6,
        a: 104,
        c: 59
    }, {
        s: 6,
        a: 105,
        c: 44
    }, {
        s: 6,
        a: 106,
        c: 44
    }, {
        s: 6,
        a: 107,
        c: 53
    }, {
        s: 6,
        a: 108,
        c: 103
    }, {
        s: 6,
        a: 109,
        c: 90
    }, {
        s: 6,
        a: 110,
        c: 60
    }, {
        s: 6,
        a: 111,
        c: 100
    }, {
        s: 6,
        a: 112,
        c: 95
    }, {
        s: 6,
        a: 113,
        c: 62
    }, {
        s: 6,
        a: 114,
        c: 105
    }, {
        s: 6,
        a: 115,
        c: 48
    }, {
        s: 6,
        a: 116,
        c: 63
    }, {
        s: 6,
        a: 117,
        c: 39
    }, {
        s: 6,
        a: 118,
        c: 40
    }, {
        s: 6,
        a: 119,
        c: 116
    }, {
        s: 6,
        a: 120,
        c: 59
    }, {
        s: 6,
        a: 121,
        c: 96
    }, {
        s: 6,
        a: 122,
        c: 100
    }, {
        s: 6,
        a: 123,
        c: 69
    }, {
        s: 6,
        a: 124,
        c: 118
    }, {
        s: 6,
        a: 125,
        c: 110
    }, {
        s: 6,
        a: 126,
        c: 41
    }, {
        s: 6,
        a: 127,
        c: 41
    }, {
        s: 6,
        a: 128,
        c: 151
    }, {
        s: 6,
        a: 129,
        c: 38
    }, {
        s: 6,
        a: 130,
        c: 134
    }, {
        s: 6,
        a: 131,
        c: 38
    }, {
        s: 6,
        a: 132,
        c: 37
    }, {
        s: 6,
        a: 133,
        c: 71
    }, {
        s: 6,
        a: 134,
        c: 27
    }, {
        s: 6,
        a: 135,
        c: 75
    }, {
        s: 6,
        a: 136,
        c: 128
    }, {
        s: 6,
        a: 137,
        c: 96
    }, {
        s: 6,
        a: 138,
        c: 117
    }, {
        s: 6,
        a: 139,
        c: 95
    }, {
        s: 6,
        a: 140,
        c: 83
    }, {
        s: 6,
        a: 141,
        c: 145
    }, {
        s: 6,
        a: 142,
        c: 70
    }, {
        s: 6,
        a: 143,
        c: 106
    }, {
        s: 6,
        a: 144,
        c: 167
    }, {
        s: 6,
        a: 145,
        c: 128
    }, {
        s: 6,
        a: 146,
        c: 122
    }, {
        s: 6,
        a: 147,
        c: 51
    }, {
        s: 6,
        a: 148,
        c: 142
    }, {
        s: 6,
        a: 149,
        c: 36
    }, {
        s: 6,
        a: 150,
        c: 118
    }, {
        s: 6,
        a: 151,
        c: 180
    }, {
        s: 6,
        a: 152,
        c: 149
    }, {
        s: 6,
        a: 153,
        c: 75
    }, {
        s: 6,
        a: 154,
        c: 75
    }, {
        s: 6,
        a: 155,
        c: 44
    }, {
        s: 6,
        a: 156,
        c: 61
    }, {
        s: 6,
        a: 157,
        c: 144
    }, {
        s: 6,
        a: 158,
        c: 138
    }, {
        s: 6,
        a: 159,
        c: 77
    }, {
        s: 6,
        a: 160,
        c: 64
    }, {
        s: 6,
        a: 161,
        c: 66
    }, {
        s: 6,
        a: 162,
        c: 39
    }, {
        s: 6,
        a: 163,
        c: 32
    }, {
        s: 6,
        a: 164,
        c: 104
    }, {
        s: 6,
        a: 165,
        c: 86
    }, {
        s: 7,
        a: 1,
        c: 4
    }, {
        s: 7,
        a: 2,
        c: 50
    }, {
        s: 7,
        a: 3,
        c: 57
    }, {
        s: 7,
        a: 4,
        c: 43
    }, {
        s: 7,
        a: 5,
        c: 46
    }, {
        s: 7,
        a: 6,
        c: 36
    }, {
        s: 7,
        a: 7,
        c: 27
    }, {
        s: 7,
        a: 8,
        c: 45
    }, {
        s: 7,
        a: 9,
        c: 56
    }, {
        s: 7,
        a: 10,
        c: 48
    }, {
        s: 7,
        a: 11,
        c: 73
    }, {
        s: 7,
        a: 12,
        c: 57
    }, {
        s: 7,
        a: 13,
        c: 50
    }, {
        s: 7,
        a: 14,
        c: 21
    }, {
        s: 7,
        a: 15,
        c: 16
    }, {
        s: 7,
        a: 16,
        c: 36
    }, {
        s: 7,
        a: 17,
        c: 66
    }, {
        s: 7,
        a: 18,
        c: 54
    }, {
        s: 7,
        a: 19,
        c: 70
    }, {
        s: 7,
        a: 20,
        c: 105
    }, {
        s: 7,
        a: 21,
        c: 26
    }, {
        s: 7,
        a: 22,
        c: 130
    }, {
        s: 7,
        a: 23,
        c: 54
    }, {
        s: 7,
        a: 24,
        c: 48
    }, {
        s: 7,
        a: 25,
        c: 34
    }, {
        s: 7,
        a: 26,
        c: 83
    }, {
        s: 7,
        a: 27,
        c: 138
    }, {
        s: 7,
        a: 28,
        c: 94
    }, {
        s: 7,
        a: 29,
        c: 69
    }, {
        s: 7,
        a: 30,
        c: 78
    }, {
        s: 7,
        a: 31,
        c: 64
    }, {
        s: 7,
        a: 32,
        c: 111
    }, {
        s: 7,
        a: 33,
        c: 110
    }, {
        s: 7,
        a: 34,
        c: 47
    }, {
        s: 7,
        a: 35,
        c: 74
    }, {
        s: 7,
        a: 36,
        c: 58
    }, {
        s: 7,
        a: 37,
        c: 157
    }, {
        s: 7,
        a: 38,
        c: 161
    }, {
        s: 7,
        a: 39,
        c: 62
    }, {
        s: 7,
        a: 40,
        c: 104
    }, {
        s: 7,
        a: 41,
        c: 42
    }, {
        s: 7,
        a: 42,
        c: 70
    }, {
        s: 7,
        a: 43,
        c: 150
    }, {
        s: 7,
        a: 44,
        c: 110
    }, {
        s: 7,
        a: 45,
        c: 48
    }, {
        s: 7,
        a: 46,
        c: 87
    }, {
        s: 7,
        a: 47,
        c: 62
    }, {
        s: 7,
        a: 48,
        c: 72
    }, {
        s: 7,
        a: 49,
        c: 68
    }, {
        s: 7,
        a: 50,
        c: 87
    }, {
        s: 7,
        a: 51,
        c: 95
    }, {
        s: 7,
        a: 52,
        c: 45
    }, {
        s: 7,
        a: 53,
        c: 146
    }, {
        s: 7,
        a: 54,
        c: 145
    }, {
        s: 7,
        a: 55,
        c: 35
    }, {
        s: 7,
        a: 56,
        c: 65
    }, {
        s: 7,
        a: 57,
        c: 123
    }, {
        s: 7,
        a: 58,
        c: 72
    }, {
        s: 7,
        a: 59,
        c: 76
    }, {
        s: 7,
        a: 60,
        c: 32
    }, {
        s: 7,
        a: 61,
        c: 39
    }, {
        s: 7,
        a: 62,
        c: 44
    }, {
        s: 7,
        a: 63,
        c: 59
    }, {
        s: 7,
        a: 64,
        c: 71
    }, {
        s: 7,
        a: 65,
        c: 57
    }, {
        s: 7,
        a: 66,
        c: 58
    }, {
        s: 7,
        a: 67,
        c: 39
    }, {
        s: 7,
        a: 68,
        c: 30
    }, {
        s: 7,
        a: 69,
        c: 113
    }, {
        s: 7,
        a: 70,
        c: 71
    }, {
        s: 7,
        a: 71,
        c: 107
    }, {
        s: 7,
        a: 72,
        c: 66
    }, {
        s: 7,
        a: 73,
        c: 132
    }, {
        s: 7,
        a: 74,
        c: 113
    }, {
        s: 7,
        a: 75,
        c: 96
    }, {
        s: 7,
        a: 76,
        c: 37
    }, {
        s: 7,
        a: 77,
        c: 66
    }, {
        s: 7,
        a: 78,
        c: 33
    }, {
        s: 7,
        a: 79,
        c: 63
    }, {
        s: 7,
        a: 80,
        c: 53
    }, {
        s: 7,
        a: 81,
        c: 46
    }, {
        s: 7,
        a: 82,
        c: 54
    }, {
        s: 7,
        a: 83,
        c: 36
    }, {
        s: 7,
        a: 84,
        c: 40
    }, {
        s: 7,
        a: 85,
        c: 156
    }, {
        s: 7,
        a: 86,
        c: 107
    }, {
        s: 7,
        a: 87,
        c: 83
    }, {
        s: 7,
        a: 88,
        c: 93
    }, {
        s: 7,
        a: 89,
        c: 159
    }, {
        s: 7,
        a: 90,
        c: 53
    }, {
        s: 7,
        a: 91,
        c: 33
    }, {
        s: 7,
        a: 92,
        c: 59
    }, {
        s: 7,
        a: 93,
        c: 64
    }, {
        s: 7,
        a: 94,
        c: 59
    }, {
        s: 7,
        a: 95,
        c: 82
    }, {
        s: 7,
        a: 96,
        c: 85
    }, {
        s: 7,
        a: 97,
        c: 40
    }, {
        s: 7,
        a: 98,
        c: 38
    }, {
        s: 7,
        a: 99,
        c: 44
    }, {
        s: 7,
        a: 100,
        c: 79
    }, {
        s: 7,
        a: 101,
        c: 102
    }, {
        s: 7,
        a: 102,
        c: 41
    }, {
        s: 7,
        a: 103,
        c: 71
    }, {
        s: 7,
        a: 104,
        c: 34
    }, {
        s: 7,
        a: 105,
        c: 65
    }, {
        s: 7,
        a: 106,
        c: 36
    }, {
        s: 7,
        a: 107,
        c: 24
    }, {
        s: 7,
        a: 108,
        c: 26
    }, {
        s: 7,
        a: 109,
        c: 32
    }, {
        s: 7,
        a: 110,
        c: 30
    }, {
        s: 7,
        a: 111,
        c: 34
    }, {
        s: 7,
        a: 112,
        c: 16
    }, {
        s: 7,
        a: 113,
        c: 46
    }, {
        s: 7,
        a: 114,
        c: 22
    }, {
        s: 7,
        a: 115,
        c: 40
    }, {
        s: 7,
        a: 116,
        c: 55
    }, {
        s: 7,
        a: 117,
        c: 41
    }, {
        s: 7,
        a: 118,
        c: 25
    }, {
        s: 7,
        a: 119,
        c: 25
    }, {
        s: 7,
        a: 120,
        c: 17
    }, {
        s: 7,
        a: 121,
        c: 20
    }, {
        s: 7,
        a: 122,
        c: 12
    }, {
        s: 7,
        a: 123,
        c: 77
    }, {
        s: 7,
        a: 124,
        c: 41
    }, {
        s: 7,
        a: 125,
        c: 22
    }, {
        s: 7,
        a: 126,
        c: 66
    }, {
        s: 7,
        a: 127,
        c: 100
    }, {
        s: 7,
        a: 128,
        c: 76
    }, {
        s: 7,
        a: 129,
        c: 88
    }, {
        s: 7,
        a: 130,
        c: 47
    }, {
        s: 7,
        a: 131,
        c: 94
    }, {
        s: 7,
        a: 132,
        c: 47
    }, {
        s: 7,
        a: 133,
        c: 80
    }, {
        s: 7,
        a: 134,
        c: 90
    }, {
        s: 7,
        a: 135,
        c: 43
    }, {
        s: 7,
        a: 136,
        c: 60
    }, {
        s: 7,
        a: 137,
        c: 139
    }, {
        s: 7,
        a: 138,
        c: 99
    }, {
        s: 7,
        a: 139,
        c: 36
    }, {
        s: 7,
        a: 140,
        c: 40
    }, {
        s: 7,
        a: 141,
        c: 85
    }, {
        s: 7,
        a: 142,
        c: 109
    }, {
        s: 7,
        a: 143,
        c: 165
    }, {
        s: 7,
        a: 144,
        c: 65
    }, {
        s: 7,
        a: 145,
        c: 89
    }, {
        s: 7,
        a: 146,
        c: 153
    }, {
        s: 7,
        a: 147,
        c: 63
    }, {
        s: 7,
        a: 148,
        c: 89
    }, {
        s: 7,
        a: 149,
        c: 74
    }, {
        s: 7,
        a: 150,
        c: 172
    }, {
        s: 7,
        a: 151,
        c: 46
    }, {
        s: 7,
        a: 152,
        c: 69
    }, {
        s: 7,
        a: 153,
        c: 59
    }, {
        s: 7,
        a: 154,
        c: 63
    }, {
        s: 7,
        a: 155,
        c: 170
    }, {
        s: 7,
        a: 156,
        c: 129
    }, {
        s: 7,
        a: 157,
        c: 222
    }, {
        s: 7,
        a: 158,
        c: 141
    }, {
        s: 7,
        a: 159,
        c: 32
    }, {
        s: 7,
        a: 160,
        c: 200
    }, {
        s: 7,
        a: 161,
        c: 93
    }, {
        s: 7,
        a: 162,
        c: 73
    }, {
        s: 7,
        a: 163,
        c: 118
    }, {
        s: 7,
        a: 164,
        c: 81
    }, {
        s: 7,
        a: 165,
        c: 79
    }, {
        s: 7,
        a: 166,
        c: 41
    }, {
        s: 7,
        a: 167,
        c: 80
    }, {
        s: 7,
        a: 168,
        c: 77
    }, {
        s: 7,
        a: 169,
        c: 172
    }, {
        s: 7,
        a: 170,
        c: 52
    }, {
        s: 7,
        a: 171,
        c: 79
    }, {
        s: 7,
        a: 172,
        c: 104
    }, {
        s: 7,
        a: 173,
        c: 64
    }, {
        s: 7,
        a: 174,
        c: 27
    }, {
        s: 7,
        a: 175,
        c: 64
    }, {
        s: 7,
        a: 176,
        c: 132
    }, {
        s: 7,
        a: 177,
        c: 47
    }, {
        s: 7,
        a: 178,
        c: 42
    }, {
        s: 7,
        a: 179,
        c: 122
    }, {
        s: 7,
        a: 180,
        c: 69
    }, {
        s: 7,
        a: 181,
        c: 31
    }, {
        s: 7,
        a: 182,
        c: 40
    }, {
        s: 7,
        a: 183,
        c: 18
    }, {
        s: 7,
        a: 184,
        c: 40
    }, {
        s: 7,
        a: 185,
        c: 88
    }, {
        s: 7,
        a: 186,
        c: 40
    }, {
        s: 7,
        a: 187,
        c: 153
    }, {
        s: 7,
        a: 188,
        c: 104
    }, {
        s: 7,
        a: 189,
        c: 125
    }, {
        s: 7,
        a: 190,
        c: 55
    }, {
        s: 7,
        a: 191,
        c: 28
    }, {
        s: 7,
        a: 192,
        c: 33
    }, {
        s: 7,
        a: 193,
        c: 56
    }, {
        s: 7,
        a: 194,
        c: 64
    }, {
        s: 7,
        a: 195,
        c: 99
    }, {
        s: 7,
        a: 196,
        c: 39
    }, {
        s: 7,
        a: 197,
        c: 47
    }, {
        s: 7,
        a: 198,
        c: 52
    }, {
        s: 7,
        a: 199,
        c: 32
    }, {
        s: 7,
        a: 200,
        c: 44
    }, {
        s: 7,
        a: 201,
        c: 50
    }, {
        s: 7,
        a: 202,
        c: 31
    }, {
        s: 7,
        a: 203,
        c: 89
    }, {
        s: 7,
        a: 204,
        c: 41
    }, {
        s: 7,
        a: 205,
        c: 69
    }, {
        s: 7,
        a: 206,
        c: 48
    }, {
        s: 8,
        a: 1,
        c: 89
    }, {
        s: 8,
        a: 2,
        c: 82
    }, {
        s: 8,
        a: 3,
        c: 34
    }, {
        s: 8,
        a: 4,
        c: 47
    }, {
        s: 8,
        a: 5,
        c: 47
    }, {
        s: 8,
        a: 6,
        c: 51
    }, {
        s: 8,
        a: 7,
        c: 101
    }, {
        s: 8,
        a: 8,
        c: 33
    }, {
        s: 8,
        a: 9,
        c: 52
    }, {
        s: 8,
        a: 10,
        c: 67
    }, {
        s: 8,
        a: 11,
        c: 99
    }, {
        s: 8,
        a: 12,
        c: 103
    }, {
        s: 8,
        a: 13,
        c: 58
    }, {
        s: 8,
        a: 14,
        c: 30
    }, {
        s: 8,
        a: 15,
        c: 54
    }, {
        s: 8,
        a: 16,
        c: 81
    }, {
        s: 8,
        a: 17,
        c: 86
    }, {
        s: 8,
        a: 18,
        c: 26
    }, {
        s: 8,
        a: 19,
        c: 97
    }, {
        s: 8,
        a: 20,
        c: 54
    }, {
        s: 8,
        a: 21,
        c: 36
    }, {
        s: 8,
        a: 22,
        c: 39
    }, {
        s: 8,
        a: 23,
        c: 49
    }, {
        s: 8,
        a: 24,
        c: 95
    }, {
        s: 8,
        a: 25,
        c: 58
    }, {
        s: 8,
        a: 26,
        c: 95
    }, {
        s: 8,
        a: 27,
        c: 61
    }, {
        s: 8,
        a: 28,
        c: 48
    }, {
        s: 8,
        a: 29,
        c: 82
    }, {
        s: 8,
        a: 30,
        c: 74
    }, {
        s: 8,
        a: 31,
        c: 69
    }, {
        s: 8,
        a: 32,
        c: 72
    }, {
        s: 8,
        a: 33,
        c: 52
    }, {
        s: 8,
        a: 34,
        c: 93
    }, {
        s: 8,
        a: 35,
        c: 58
    }, {
        s: 8,
        a: 36,
        c: 98
    }, {
        s: 8,
        a: 37,
        c: 81
    }, {
        s: 8,
        a: 38,
        c: 59
    }, {
        s: 8,
        a: 39,
        c: 66
    }, {
        s: 8,
        a: 40,
        c: 46
    }, {
        s: 8,
        a: 41,
        c: 150
    }, {
        s: 8,
        a: 42,
        c: 149
    }, {
        s: 8,
        a: 43,
        c: 88
    }, {
        s: 8,
        a: 44,
        c: 88
    }, {
        s: 8,
        a: 45,
        c: 61
    }, {
        s: 8,
        a: 46,
        c: 67
    }, {
        s: 8,
        a: 47,
        c: 76
    }, {
        s: 8,
        a: 48,
        c: 140
    }, {
        s: 8,
        a: 49,
        c: 74
    }, {
        s: 8,
        a: 50,
        c: 67
    }, {
        s: 8,
        a: 51,
        c: 37
    }, {
        s: 8,
        a: 52,
        c: 74
    }, {
        s: 8,
        a: 53,
        c: 68
    }, {
        s: 8,
        a: 54,
        c: 82
    }, {
        s: 8,
        a: 55,
        c: 38
    }, {
        s: 8,
        a: 56,
        c: 44
    }, {
        s: 8,
        a: 57,
        c: 43
    }, {
        s: 8,
        a: 58,
        c: 55
    }, {
        s: 8,
        a: 59,
        c: 35
    }, {
        s: 8,
        a: 60,
        c: 134
    }, {
        s: 8,
        a: 61,
        c: 50
    }, {
        s: 8,
        a: 62,
        c: 53
    }, {
        s: 8,
        a: 63,
        c: 76
    }, {
        s: 8,
        a: 64,
        c: 37
    }, {
        s: 8,
        a: 65,
        c: 115
    }, {
        s: 8,
        a: 66,
        c: 107
    }, {
        s: 8,
        a: 67,
        c: 78
    }, {
        s: 8,
        a: 68,
        c: 39
    }, {
        s: 8,
        a: 69,
        c: 46
    }, {
        s: 8,
        a: 70,
        c: 94
    }, {
        s: 8,
        a: 71,
        c: 54
    }, {
        s: 8,
        a: 72,
        c: 209
    }, {
        s: 8,
        a: 73,
        c: 57
    }, {
        s: 8,
        a: 74,
        c: 85
    }, {
        s: 8,
        a: 75,
        c: 95
    }, {
        s: 9,
        a: 1,
        c: 41
    }, {
        s: 9,
        a: 2,
        c: 64
    }, {
        s: 9,
        a: 3,
        c: 135
    }, {
        s: 9,
        a: 4,
        c: 98
    }, {
        s: 9,
        a: 5,
        c: 133
    }, {
        s: 9,
        a: 6,
        c: 74
    }, {
        s: 9,
        a: 7,
        c: 105
    }, {
        s: 9,
        a: 8,
        c: 77
    }, {
        s: 9,
        a: 9,
        c: 56
    }, {
        s: 9,
        a: 10,
        c: 39
    }, {
        s: 9,
        a: 11,
        c: 68
    }, {
        s: 9,
        a: 12,
        c: 79
    }, {
        s: 9,
        a: 13,
        c: 93
    }, {
        s: 9,
        a: 14,
        c: 59
    }, {
        s: 9,
        a: 15,
        c: 45
    }, {
        s: 9,
        a: 16,
        c: 102
    }, {
        s: 9,
        a: 17,
        c: 83
    }, {
        s: 9,
        a: 18,
        c: 99
    }, {
        s: 9,
        a: 19,
        c: 110
    }, {
        s: 9,
        a: 20,
        c: 80
    }, {
        s: 9,
        a: 21,
        c: 44
    }, {
        s: 9,
        a: 22,
        c: 31
    }, {
        s: 9,
        a: 23,
        c: 97
    }, {
        s: 9,
        a: 24,
        c: 170
    }, {
        s: 9,
        a: 25,
        c: 96
    }, {
        s: 9,
        a: 26,
        c: 83
    }, {
        s: 9,
        a: 27,
        c: 40
    }, {
        s: 9,
        a: 28,
        c: 113
    }, {
        s: 9,
        a: 29,
        c: 123
    }, {
        s: 9,
        a: 30,
        c: 107
    }, {
        s: 9,
        a: 31,
        c: 102
    }, {
        s: 9,
        a: 32,
        c: 64
    }, {
        s: 9,
        a: 33,
        c: 60
    }, {
        s: 9,
        a: 34,
        c: 139
    }, {
        s: 9,
        a: 35,
        c: 84
    }, {
        s: 9,
        a: 36,
        c: 160
    }, {
        s: 9,
        a: 37,
        c: 134
    }, {
        s: 9,
        a: 38,
        c: 122
    }, {
        s: 9,
        a: 39,
        c: 70
    }, {
        s: 9,
        a: 40,
        c: 176
    }, {
        s: 9,
        a: 41,
        c: 71
    }, {
        s: 9,
        a: 42,
        c: 113
    }, {
        s: 9,
        a: 43,
        c: 52
    }, {
        s: 9,
        a: 44,
        c: 77
    }, {
        s: 9,
        a: 45,
        c: 70
    }, {
        s: 9,
        a: 46,
        c: 71
    }, {
        s: 9,
        a: 47,
        c: 86
    }, {
        s: 9,
        a: 48,
        c: 64
    }, {
        s: 9,
        a: 49,
        c: 63
    }, {
        s: 9,
        a: 50,
        c: 65
    }, {
        s: 9,
        a: 51,
        c: 56
    }, {
        s: 9,
        a: 52,
        c: 93
    }, {
        s: 9,
        a: 53,
        c: 47
    }, {
        s: 9,
        a: 54,
        c: 95
    }, {
        s: 9,
        a: 55,
        c: 81
    }, {
        s: 9,
        a: 56,
        c: 45
    }, {
        s: 9,
        a: 57,
        c: 44
    }, {
        s: 9,
        a: 58,
        c: 62
    }, {
        s: 9,
        a: 59,
        c: 82
    }, {
        s: 9,
        a: 60,
        c: 118
    }, {
        s: 9,
        a: 61,
        c: 114
    }, {
        s: 9,
        a: 62,
        c: 55
    }, {
        s: 9,
        a: 63,
        c: 64
    }, {
        s: 9,
        a: 64,
        c: 73
    }, {
        s: 9,
        a: 65,
        c: 64
    }, {
        s: 9,
        a: 66,
        c: 67
    }, {
        s: 9,
        a: 67,
        c: 105
    }, {
        s: 9,
        a: 68,
        c: 79
    }, {
        s: 9,
        a: 69,
        c: 168
    }, {
        s: 9,
        a: 70,
        c: 125
    }, {
        s: 9,
        a: 71,
        c: 132
    }, {
        s: 9,
        a: 72,
        c: 107
    }, {
        s: 9,
        a: 73,
        c: 62
    }, {
        s: 9,
        a: 74,
        c: 190
    }, {
        s: 9,
        a: 75,
        c: 52
    }, {
        s: 9,
        a: 76,
        c: 37
    }, {
        s: 9,
        a: 77,
        c: 67
    }, {
        s: 9,
        a: 78,
        c: 47
    }, {
        s: 9,
        a: 79,
        c: 93
    }, {
        s: 9,
        a: 80,
        c: 103
    }, {
        s: 9,
        a: 81,
        c: 118
    }, {
        s: 9,
        a: 82,
        c: 43
    }, {
        s: 9,
        a: 83,
        c: 112
    }, {
        s: 9,
        a: 84,
        c: 71
    }, {
        s: 9,
        a: 85,
        c: 74
    }, {
        s: 9,
        a: 86,
        c: 82
    }, {
        s: 9,
        a: 87,
        c: 46
    }, {
        s: 9,
        a: 88,
        c: 76
    }, {
        s: 9,
        a: 89,
        c: 56
    }, {
        s: 9,
        a: 90,
        c: 80
    }, {
        s: 9,
        a: 91,
        c: 103
    }, {
        s: 9,
        a: 92,
        c: 90
    }, {
        s: 9,
        a: 93,
        c: 86
    }, {
        s: 9,
        a: 94,
        c: 132
    }, {
        s: 9,
        a: 95,
        c: 88
    }, {
        s: 9,
        a: 96,
        c: 59
    }, {
        s: 9,
        a: 97,
        c: 69
    }, {
        s: 9,
        a: 98,
        c: 71
    }, {
        s: 9,
        a: 99,
        c: 113
    }, {
        s: 9,
        a: 100,
        c: 128
    }, {
        s: 9,
        a: 101,
        c: 99
    }, {
        s: 9,
        a: 102,
        c: 74
    }, {
        s: 9,
        a: 103,
        c: 65
    }, {
        s: 9,
        a: 104,
        c: 67
    }, {
        s: 9,
        a: 105,
        c: 85
    }, {
        s: 9,
        a: 106,
        c: 54
    }, {
        s: 9,
        a: 107,
        c: 117
    }, {
        s: 9,
        a: 108,
        c: 86
    }, {
        s: 9,
        a: 109,
        c: 101
    }, {
        s: 9,
        a: 110,
        c: 61
    }, {
        s: 9,
        a: 111,
        c: 174
    }, {
        s: 9,
        a: 112,
        c: 109
    }, {
        s: 9,
        a: 113,
        c: 84
    }, {
        s: 9,
        a: 114,
        c: 88
    }, {
        s: 9,
        a: 115,
        c: 61
    }, {
        s: 9,
        a: 116,
        c: 61
    }, {
        s: 9,
        a: 117,
        c: 109
    }, {
        s: 9,
        a: 118,
        c: 127
    }, {
        s: 9,
        a: 119,
        c: 41
    }, {
        s: 9,
        a: 120,
        c: 199
    }, {
        s: 9,
        a: 121,
        c: 77
    }, {
        s: 9,
        a: 122,
        c: 102
    }, {
        s: 9,
        a: 123,
        c: 78
    }, {
        s: 9,
        a: 124,
        c: 82
    }, {
        s: 9,
        a: 125,
        c: 54
    }, {
        s: 9,
        a: 126,
        c: 56
    }, {
        s: 9,
        a: 127,
        c: 79
    }, {
        s: 9,
        a: 128,
        c: 60
    }, {
        s: 9,
        a: 129,
        c: 54
    }, {
        s: 10,
        a: 1,
        c: 22
    }, {
        s: 10,
        a: 2,
        c: 99
    }, {
        s: 10,
        a: 3,
        c: 113
    }, {
        s: 10,
        a: 4,
        c: 126
    }, {
        s: 10,
        a: 5,
        c: 101
    }, {
        s: 10,
        a: 6,
        c: 62
    }, {
        s: 10,
        a: 7,
        c: 71
    }, {
        s: 10,
        a: 8,
        c: 30
    }, {
        s: 10,
        a: 9,
        c: 74
    }, {
        s: 10,
        a: 10,
        c: 66
    }, {
        s: 10,
        a: 11,
        c: 86
    }, {
        s: 10,
        a: 12,
        c: 104
    }, {
        s: 10,
        a: 13,
        c: 87
    }, {
        s: 10,
        a: 14,
        c: 42
    }, {
        s: 10,
        a: 15,
        c: 138
    }, {
        s: 10,
        a: 16,
        c: 65
    }, {
        s: 10,
        a: 17,
        c: 54
    }, {
        s: 10,
        a: 18,
        c: 123
    }, {
        s: 10,
        a: 19,
        c: 71
    }, {
        s: 10,
        a: 20,
        c: 68
    }, {
        s: 10,
        a: 21,
        c: 84
    }, {
        s: 10,
        a: 22,
        c: 166
    }, {
        s: 10,
        a: 23,
        c: 113
    }, {
        s: 10,
        a: 24,
        c: 198
    }, {
        s: 10,
        a: 25,
        c: 45
    }, {
        s: 10,
        a: 26,
        c: 72
    }, {
        s: 10,
        a: 27,
        c: 118
    }, {
        s: 10,
        a: 28,
        c: 89
    }, {
        s: 10,
        a: 29,
        c: 46
    }, {
        s: 10,
        a: 30,
        c: 63
    }, {
        s: 10,
        a: 31,
        c: 114
    }, {
        s: 10,
        a: 32,
        c: 48
    }, {
        s: 10,
        a: 33,
        c: 39
    }, {
        s: 10,
        a: 34,
        c: 63
    }, {
        s: 10,
        a: 35,
        c: 97
    }, {
        s: 10,
        a: 36,
        c: 60
    }, {
        s: 10,
        a: 37,
        c: 83
    }, {
        s: 10,
        a: 38,
        c: 66
    }, {
        s: 10,
        a: 39,
        c: 81
    }, {
        s: 10,
        a: 40,
        c: 45
    }, {
        s: 10,
        a: 41,
        c: 60
    }, {
        s: 10,
        a: 42,
        c: 47
    }, {
        s: 10,
        a: 43,
        c: 45
    }, {
        s: 10,
        a: 44,
        c: 42
    }, {
        s: 10,
        a: 45,
        c: 87
    }, {
        s: 10,
        a: 46,
        c: 63
    }, {
        s: 10,
        a: 47,
        c: 49
    }, {
        s: 10,
        a: 48,
        c: 30
    }, {
        s: 10,
        a: 49,
        c: 81
    }, {
        s: 10,
        a: 50,
        c: 53
    }, {
        s: 10,
        a: 51,
        c: 39
    }, {
        s: 10,
        a: 52,
        c: 52
    }, {
        s: 10,
        a: 53,
        c: 43
    }, {
        s: 10,
        a: 54,
        c: 84
    }, {
        s: 10,
        a: 55,
        c: 58
    }, {
        s: 10,
        a: 56,
        c: 22
    }, {
        s: 10,
        a: 57,
        c: 63
    }, {
        s: 10,
        a: 58,
        c: 44
    }, {
        s: 10,
        a: 59,
        c: 73
    }, {
        s: 10,
        a: 60,
        c: 76
    }, {
        s: 10,
        a: 61,
        c: 141
    }, {
        s: 10,
        a: 62,
        c: 36
    }, {
        s: 10,
        a: 63,
        c: 21
    }, {
        s: 10,
        a: 64,
        c: 65
    }, {
        s: 10,
        a: 65,
        c: 42
    }, {
        s: 10,
        a: 66,
        c: 90
    }, {
        s: 10,
        a: 67,
        c: 61
    }, {
        s: 10,
        a: 68,
        c: 96
    }, {
        s: 10,
        a: 69,
        c: 35
    }, {
        s: 10,
        a: 70,
        c: 59
    }, {
        s: 10,
        a: 71,
        c: 136
    }, {
        s: 10,
        a: 72,
        c: 60
    }, {
        s: 10,
        a: 73,
        c: 87
    }, {
        s: 10,
        a: 74,
        c: 93
    }, {
        s: 10,
        a: 75,
        c: 69
    }, {
        s: 10,
        a: 76,
        c: 38
    }, {
        s: 10,
        a: 77,
        c: 48
    }, {
        s: 10,
        a: 78,
        c: 77
    }, {
        s: 10,
        a: 79,
        c: 26
    }, {
        s: 10,
        a: 80,
        c: 39
    }, {
        s: 10,
        a: 81,
        c: 64
    }, {
        s: 10,
        a: 82,
        c: 33
    }, {
        s: 10,
        a: 83,
        c: 85
    }, {
        s: 10,
        a: 84,
        c: 52
    }, {
        s: 10,
        a: 85,
        c: 48
    }, {
        s: 10,
        a: 86,
        c: 26
    }, {
        s: 10,
        a: 87,
        c: 83
    }, {
        s: 10,
        a: 88,
        c: 131
    }, {
        s: 10,
        a: 89,
        c: 51
    }, {
        s: 10,
        a: 90,
        c: 118
    }, {
        s: 10,
        a: 91,
        c: 28
    }, {
        s: 10,
        a: 92,
        c: 61
    }, {
        s: 10,
        a: 93,
        c: 109
    }, {
        s: 10,
        a: 94,
        c: 85
    }, {
        s: 10,
        a: 95,
        c: 44
    }, {
        s: 10,
        a: 96,
        c: 30
    }, {
        s: 10,
        a: 97,
        c: 33
    }, {
        s: 10,
        a: 98,
        c: 94
    }, {
        s: 10,
        a: 99,
        c: 60
    }, {
        s: 10,
        a: 100,
        c: 53
    }, {
        s: 10,
        a: 101,
        c: 60
    }, {
        s: 10,
        a: 102,
        c: 64
    }, {
        s: 10,
        a: 103,
        c: 45
    }, {
        s: 10,
        a: 104,
        c: 100
    }, {
        s: 10,
        a: 105,
        c: 38
    }, {
        s: 10,
        a: 106,
        c: 55
    }, {
        s: 10,
        a: 107,
        c: 85
    }, {
        s: 10,
        a: 108,
        c: 87
    }, {
        s: 10,
        a: 109,
        c: 45
    }, {
        s: 11,
        a: 1,
        c: 36
    }, {
        s: 11,
        a: 2,
        c: 35
    }, {
        s: 11,
        a: 3,
        c: 98
    }, {
        s: 11,
        a: 4,
        c: 28
    }, {
        s: 11,
        a: 5,
        c: 85
    }, {
        s: 11,
        a: 6,
        c: 64
    }, {
        s: 11,
        a: 7,
        c: 127
    }, {
        s: 11,
        a: 8,
        c: 93
    }, {
        s: 11,
        a: 9,
        c: 47
    }, {
        s: 11,
        a: 10,
        c: 56
    }, {
        s: 11,
        a: 11,
        c: 48
    }, {
        s: 11,
        a: 12,
        c: 95
    }, {
        s: 11,
        a: 13,
        c: 75
    }, {
        s: 11,
        a: 14,
        c: 64
    }, {
        s: 11,
        a: 15,
        c: 62
    }, {
        s: 11,
        a: 16,
        c: 65
    }, {
        s: 11,
        a: 17,
        c: 146
    }, {
        s: 11,
        a: 18,
        c: 100
    }, {
        s: 11,
        a: 19,
        c: 50
    }, {
        s: 11,
        a: 20,
        c: 100
    }, {
        s: 11,
        a: 21,
        c: 41
    }, {
        s: 11,
        a: 22,
        c: 27
    }, {
        s: 11,
        a: 23,
        c: 67
    }, {
        s: 11,
        a: 24,
        c: 61
    }, {
        s: 11,
        a: 25,
        c: 35
    }, {
        s: 11,
        a: 26,
        c: 40
    }, {
        s: 11,
        a: 27,
        c: 113
    }, {
        s: 11,
        a: 28,
        c: 81
    }, {
        s: 11,
        a: 29,
        c: 92
    }, {
        s: 11,
        a: 30,
        c: 38
    }, {
        s: 11,
        a: 31,
        c: 123
    }, {
        s: 11,
        a: 32,
        c: 59
    }, {
        s: 11,
        a: 33,
        c: 38
    }, {
        s: 11,
        a: 34,
        c: 66
    }, {
        s: 11,
        a: 35,
        c: 52
    }, {
        s: 11,
        a: 36,
        c: 58
    }, {
        s: 11,
        a: 37,
        c: 55
    }, {
        s: 11,
        a: 38,
        c: 73
    }, {
        s: 11,
        a: 39,
        c: 42
    }, {
        s: 11,
        a: 40,
        c: 94
    }, {
        s: 11,
        a: 41,
        c: 48
    }, {
        s: 11,
        a: 42,
        c: 73
    }, {
        s: 11,
        a: 43,
        c: 86
    }, {
        s: 11,
        a: 44,
        c: 84
    }, {
        s: 11,
        a: 45,
        c: 56
    }, {
        s: 11,
        a: 46,
        c: 76
    }, {
        s: 11,
        a: 47,
        c: 63
    }, {
        s: 11,
        a: 48,
        c: 72
    }, {
        s: 11,
        a: 49,
        c: 75
    }, {
        s: 11,
        a: 50,
        c: 63
    }, {
        s: 11,
        a: 51,
        c: 52
    }, {
        s: 11,
        a: 52,
        c: 82
    }, {
        s: 11,
        a: 53,
        c: 61
    }, {
        s: 11,
        a: 54,
        c: 65
    }, {
        s: 11,
        a: 55,
        c: 28
    }, {
        s: 11,
        a: 56,
        c: 65
    }, {
        s: 11,
        a: 57,
        c: 81
    }, {
        s: 11,
        a: 58,
        c: 61
    }, {
        s: 11,
        a: 59,
        c: 50
    }, {
        s: 11,
        a: 60,
        c: 68
    }, {
        s: 11,
        a: 61,
        c: 111
    }, {
        s: 11,
        a: 62,
        c: 83
    }, {
        s: 11,
        a: 63,
        c: 85
    }, {
        s: 11,
        a: 64,
        c: 70
    }, {
        s: 11,
        a: 65,
        c: 47
    }, {
        s: 11,
        a: 66,
        c: 73
    }, {
        s: 11,
        a: 67,
        c: 41
    }, {
        s: 11,
        a: 68,
        c: 44
    }, {
        s: 11,
        a: 69,
        c: 63
    }, {
        s: 11,
        a: 70,
        c: 68
    }, {
        s: 11,
        a: 71,
        c: 48
    }, {
        s: 11,
        a: 72,
        c: 48
    }, {
        s: 11,
        a: 73,
        c: 60
    }, {
        s: 11,
        a: 74,
        c: 48
    }, {
        s: 11,
        a: 75,
        c: 22
    }, {
        s: 11,
        a: 76,
        c: 54
    }, {
        s: 11,
        a: 77,
        c: 48
    }, {
        s: 11,
        a: 78,
        c: 109
    }, {
        s: 11,
        a: 79,
        c: 43
    }, {
        s: 11,
        a: 80,
        c: 30
    }, {
        s: 11,
        a: 81,
        c: 118
    }, {
        s: 11,
        a: 82,
        c: 57
    }, {
        s: 11,
        a: 83,
        c: 31
    }, {
        s: 11,
        a: 84,
        c: 110
    }, {
        s: 11,
        a: 85,
        c: 74
    }, {
        s: 11,
        a: 86,
        c: 42
    }, {
        s: 11,
        a: 87,
        c: 82
    }, {
        s: 11,
        a: 88,
        c: 137
    }, {
        s: 11,
        a: 89,
        c: 78
    }, {
        s: 11,
        a: 90,
        c: 37
    }, {
        s: 11,
        a: 91,
        c: 79
    }, {
        s: 11,
        a: 92,
        c: 65
    }, {
        s: 11,
        a: 93,
        c: 82
    }, {
        s: 11,
        a: 94,
        c: 86
    }, {
        s: 11,
        a: 95,
        c: 37
    }, {
        s: 11,
        a: 96,
        c: 31
    }, {
        s: 11,
        a: 97,
        c: 44
    }, {
        s: 11,
        a: 98,
        c: 46
    }, {
        s: 11,
        a: 99,
        c: 42
    }, {
        s: 11,
        a: 100,
        c: 36
    }, {
        s: 11,
        a: 101,
        c: 94
    }, {
        s: 11,
        a: 102,
        c: 44
    }, {
        s: 11,
        a: 103,
        c: 57
    }, {
        s: 11,
        a: 104,
        c: 20
    }, {
        s: 11,
        a: 105,
        c: 36
    }, {
        s: 11,
        a: 106,
        c: 37
    }, {
        s: 11,
        a: 107,
        c: 57
    }, {
        s: 11,
        a: 108,
        c: 75
    }, {
        s: 11,
        a: 109,
        c: 77
    }, {
        s: 11,
        a: 110,
        c: 72
    }, {
        s: 11,
        a: 111,
        c: 43
    }, {
        s: 11,
        a: 112,
        c: 46
    }, {
        s: 11,
        a: 113,
        c: 66
    }, {
        s: 11,
        a: 114,
        c: 68
    }, {
        s: 11,
        a: 115,
        c: 29
    }, {
        s: 11,
        a: 116,
        c: 110
    }, {
        s: 11,
        a: 117,
        c: 35
    }, {
        s: 11,
        a: 118,
        c: 42
    }, {
        s: 11,
        a: 119,
        c: 61
    }, {
        s: 11,
        a: 120,
        c: 69
    }, {
        s: 11,
        a: 121,
        c: 41
    }, {
        s: 11,
        a: 122,
        c: 18
    }, {
        s: 11,
        a: 123,
        c: 73
    }, {
        s: 12,
        a: 1,
        c: 22
    }, {
        s: 12,
        a: 2,
        c: 31
    }, {
        s: 12,
        a: 3,
        c: 64
    }, {
        s: 12,
        a: 4,
        c: 63
    }, {
        s: 12,
        a: 5,
        c: 63
    }, {
        s: 12,
        a: 6,
        c: 106
    }, {
        s: 12,
        a: 7,
        c: 30
    }, {
        s: 12,
        a: 8,
        c: 57
    }, {
        s: 12,
        a: 9,
        c: 59
    }, {
        s: 12,
        a: 10,
        c: 68
    }, {
        s: 12,
        a: 11,
        c: 43
    }, {
        s: 12,
        a: 12,
        c: 34
    }, {
        s: 12,
        a: 13,
        c: 54
    }, {
        s: 12,
        a: 14,
        c: 38
    }, {
        s: 12,
        a: 15,
        c: 76
    }, {
        s: 12,
        a: 16,
        c: 20
    }, {
        s: 12,
        a: 17,
        c: 80
    }, {
        s: 12,
        a: 18,
        c: 73
    }, {
        s: 12,
        a: 19,
        c: 77
    }, {
        s: 12,
        a: 20,
        c: 42
    }, {
        s: 12,
        a: 21,
        c: 138
    }, {
        s: 12,
        a: 22,
        c: 43
    }, {
        s: 12,
        a: 23,
        c: 91
    }, {
        s: 12,
        a: 24,
        c: 76
    }, {
        s: 12,
        a: 25,
        c: 89
    }, {
        s: 12,
        a: 26,
        c: 68
    }, {
        s: 12,
        a: 27,
        c: 36
    }, {
        s: 12,
        a: 28,
        c: 43
    }, {
        s: 12,
        a: 29,
        c: 42
    }, {
        s: 12,
        a: 30,
        c: 73
    }, {
        s: 12,
        a: 31,
        c: 131
    }, {
        s: 12,
        a: 32,
        c: 84
    }, {
        s: 12,
        a: 33,
        c: 68
    }, {
        s: 12,
        a: 34,
        c: 41
    }, {
        s: 12,
        a: 35,
        c: 38
    }, {
        s: 12,
        a: 36,
        c: 115
    }, {
        s: 12,
        a: 37,
        c: 112
    }, {
        s: 12,
        a: 38,
        c: 104
    }, {
        s: 12,
        a: 39,
        c: 46
    }, {
        s: 12,
        a: 40,
        c: 127
    }, {
        s: 12,
        a: 41,
        c: 86
    }, {
        s: 12,
        a: 42,
        c: 70
    }, {
        s: 12,
        a: 43,
        c: 105
    }, {
        s: 12,
        a: 44,
        c: 41
    }, {
        s: 12,
        a: 45,
        c: 50
    }, {
        s: 12,
        a: 46,
        c: 96
    }, {
        s: 12,
        a: 47,
        c: 57
    }, {
        s: 12,
        a: 48,
        c: 53
    }, {
        s: 12,
        a: 49,
        c: 39
    }, {
        s: 12,
        a: 50,
        c: 92
    }, {
        s: 12,
        a: 51,
        c: 110
    }, {
        s: 12,
        a: 52,
        c: 47
    }, {
        s: 12,
        a: 53,
        c: 54
    }, {
        s: 12,
        a: 54,
        c: 61
    }, {
        s: 12,
        a: 55,
        c: 33
    }, {
        s: 12,
        a: 56,
        c: 72
    }, {
        s: 12,
        a: 57,
        c: 35
    }, {
        s: 12,
        a: 58,
        c: 39
    }, {
        s: 12,
        a: 59,
        c: 72
    }, {
        s: 12,
        a: 60,
        c: 35
    }, {
        s: 12,
        a: 61,
        c: 29
    }, {
        s: 12,
        a: 62,
        c: 74
    }, {
        s: 12,
        a: 63,
        c: 71
    }, {
        s: 12,
        a: 64,
        c: 66
    }, {
        s: 12,
        a: 65,
        c: 114
    }, {
        s: 12,
        a: 66,
        c: 88
    }, {
        s: 12,
        a: 67,
        c: 111
    }, {
        s: 12,
        a: 68,
        c: 110
    }, {
        s: 12,
        a: 69,
        c: 62
    }, {
        s: 12,
        a: 70,
        c: 65
    }, {
        s: 12,
        a: 71,
        c: 27
    }, {
        s: 12,
        a: 72,
        c: 44
    }, {
        s: 12,
        a: 73,
        c: 48
    }, {
        s: 12,
        a: 74,
        c: 25
    }, {
        s: 12,
        a: 75,
        c: 45
    }, {
        s: 12,
        a: 76,
        c: 123
    }, {
        s: 12,
        a: 77,
        c: 84
    }, {
        s: 12,
        a: 78,
        c: 63
    }, {
        s: 12,
        a: 79,
        c: 50
    }, {
        s: 12,
        a: 80,
        c: 139
    }, {
        s: 12,
        a: 81,
        c: 72
    }, {
        s: 12,
        a: 82,
        c: 53
    }, {
        s: 12,
        a: 83,
        c: 70
    }, {
        s: 12,
        a: 84,
        c: 51
    }, {
        s: 12,
        a: 85,
        c: 49
    }, {
        s: 12,
        a: 86,
        c: 47
    }, {
        s: 12,
        a: 87,
        c: 81
    }, {
        s: 12,
        a: 88,
        c: 101
    }, {
        s: 12,
        a: 89,
        c: 39
    }, {
        s: 12,
        a: 90,
        c: 84
    }, {
        s: 12,
        a: 91,
        c: 39
    }, {
        s: 12,
        a: 92,
        c: 46
    }, {
        s: 12,
        a: 93,
        c: 56
    }, {
        s: 12,
        a: 94,
        c: 47
    }, {
        s: 12,
        a: 95,
        c: 27
    }, {
        s: 12,
        a: 96,
        c: 72
    }, {
        s: 12,
        a: 97,
        c: 39
    }, {
        s: 12,
        a: 98,
        c: 35
    }, {
        s: 12,
        a: 99,
        c: 55
    }, {
        s: 12,
        a: 100,
        c: 169
    }, {
        s: 12,
        a: 101,
        c: 105
    }, {
        s: 12,
        a: 102,
        c: 57
    }, {
        s: 12,
        a: 103,
        c: 26
    }, {
        s: 12,
        a: 104,
        c: 36
    }, {
        s: 12,
        a: 105,
        c: 49
    }, {
        s: 12,
        a: 106,
        c: 30
    }, {
        s: 12,
        a: 107,
        c: 59
    }, {
        s: 12,
        a: 108,
        c: 67
    }, {
        s: 12,
        a: 109,
        c: 123
    }, {
        s: 12,
        a: 110,
        c: 79
    }, {
        s: 12,
        a: 111,
        c: 94
    }, {
        s: 13,
        a: 1,
        c: 60
    }, {
        s: 13,
        a: 2,
        c: 115
    }, {
        s: 13,
        a: 3,
        c: 101
    }, {
        s: 13,
        a: 4,
        c: 111
    }, {
        s: 13,
        a: 5,
        c: 112
    }, {
        s: 13,
        a: 6,
        c: 90
    }, {
        s: 13,
        a: 7,
        c: 56
    }, {
        s: 13,
        a: 8,
        c: 58
    }, {
        s: 13,
        a: 9,
        c: 30
    }, {
        s: 13,
        a: 10,
        c: 54
    }, {
        s: 13,
        a: 11,
        c: 121
    }, {
        s: 13,
        a: 12,
        c: 42
    }, {
        s: 13,
        a: 13,
        c: 86
    }, {
        s: 13,
        a: 14,
        c: 107
    }, {
        s: 13,
        a: 15,
        c: 55
    }, {
        s: 13,
        a: 16,
        c: 188
    }, {
        s: 13,
        a: 17,
        c: 182
    }, {
        s: 13,
        a: 18,
        c: 118
    }, {
        s: 13,
        a: 19,
        c: 58
    }, {
        s: 13,
        a: 20,
        c: 34
    }, {
        s: 13,
        a: 21,
        c: 54
    }, {
        s: 13,
        a: 22,
        c: 101
    }, {
        s: 13,
        a: 23,
        c: 72
    }, {
        s: 13,
        a: 24,
        c: 30
    }, {
        s: 13,
        a: 25,
        c: 94
    }, {
        s: 13,
        a: 26,
        c: 74
    }, {
        s: 13,
        a: 27,
        c: 67
    }, {
        s: 13,
        a: 28,
        c: 52
    }, {
        s: 13,
        a: 29,
        c: 38
    }, {
        s: 13,
        a: 30,
        c: 106
    }, {
        s: 13,
        a: 31,
        c: 193
    }, {
        s: 13,
        a: 32,
        c: 55
    }, {
        s: 13,
        a: 33,
        c: 139
    }, {
        s: 13,
        a: 34,
        c: 53
    }, {
        s: 13,
        a: 35,
        c: 89
    }, {
        s: 13,
        a: 36,
        c: 101
    }, {
        s: 13,
        a: 37,
        c: 74
    }, {
        s: 13,
        a: 38,
        c: 82
    }, {
        s: 13,
        a: 39,
        c: 32
    }, {
        s: 13,
        a: 40,
        c: 58
    }, {
        s: 13,
        a: 41,
        c: 68
    }, {
        s: 13,
        a: 42,
        c: 71
    }, {
        s: 13,
        a: 43,
        c: 64
    }, {
        s: 14,
        a: 1,
        c: 72
    }, {
        s: 14,
        a: 2,
        c: 54
    }, {
        s: 14,
        a: 3,
        c: 76
    }, {
        s: 14,
        a: 4,
        c: 75
    }, {
        s: 14,
        a: 5,
        c: 86
    }, {
        s: 14,
        a: 6,
        c: 117
    }, {
        s: 14,
        a: 7,
        c: 48
    }, {
        s: 14,
        a: 8,
        c: 50
    }, {
        s: 14,
        a: 9,
        c: 157
    }, {
        s: 14,
        a: 10,
        c: 143
    }, {
        s: 14,
        a: 11,
        c: 112
    }, {
        s: 14,
        a: 12,
        c: 78
    }, {
        s: 14,
        a: 13,
        c: 78
    }, {
        s: 14,
        a: 14,
        c: 43
    }, {
        s: 14,
        a: 15,
        c: 23
    }, {
        s: 14,
        a: 16,
        c: 25
    }, {
        s: 14,
        a: 17,
        c: 62
    }, {
        s: 14,
        a: 18,
        c: 90
    }, {
        s: 14,
        a: 19,
        c: 56
    }, {
        s: 14,
        a: 20,
        c: 18
    }, {
        s: 14,
        a: 21,
        c: 138
    }, {
        s: 14,
        a: 22,
        c: 187
    }, {
        s: 14,
        a: 23,
        c: 83
    }, {
        s: 14,
        a: 24,
        c: 59
    }, {
        s: 14,
        a: 25,
        c: 55
    }, {
        s: 14,
        a: 26,
        c: 49
    }, {
        s: 14,
        a: 27,
        c: 84
    }, {
        s: 14,
        a: 28,
        c: 50
    }, {
        s: 14,
        a: 29,
        c: 21
    }, {
        s: 14,
        a: 30,
        c: 53
    }, {
        s: 14,
        a: 31,
        c: 86
    }, {
        s: 14,
        a: 32,
        c: 107
    }, {
        s: 14,
        a: 33,
        c: 43
    }, {
        s: 14,
        a: 34,
        c: 61
    }, {
        s: 14,
        a: 35,
        c: 55
    }, {
        s: 14,
        a: 36,
        c: 58
    }, {
        s: 14,
        a: 37,
        c: 114
    }, {
        s: 14,
        a: 38,
        c: 61
    }, {
        s: 14,
        a: 39,
        c: 54
    }, {
        s: 14,
        a: 40,
        c: 39
    }, {
        s: 14,
        a: 41,
        c: 39
    }, {
        s: 14,
        a: 42,
        c: 60
    }, {
        s: 14,
        a: 43,
        c: 45
    }, {
        s: 14,
        a: 44,
        c: 109
    }, {
        s: 14,
        a: 45,
        c: 64
    }, {
        s: 14,
        a: 46,
        c: 51
    }, {
        s: 14,
        a: 47,
        c: 42
    }, {
        s: 14,
        a: 48,
        c: 50
    }, {
        s: 14,
        a: 49,
        c: 32
    }, {
        s: 14,
        a: 50,
        c: 31
    }, {
        s: 14,
        a: 51,
        c: 36
    }, {
        s: 14,
        a: 52,
        c: 60
    }, {
        s: 15,
        a: 1,
        c: 25
    }, {
        s: 15,
        a: 2,
        c: 30
    }, {
        s: 15,
        a: 3,
        c: 39
    }, {
        s: 15,
        a: 4,
        c: 31
    }, {
        s: 15,
        a: 5,
        c: 27
    }, {
        s: 15,
        a: 6,
        c: 37
    }, {
        s: 15,
        a: 7,
        c: 34
    }, {
        s: 15,
        a: 8,
        c: 39
    }, {
        s: 15,
        a: 9,
        c: 29
    }, {
        s: 15,
        a: 10,
        c: 28
    }, {
        s: 15,
        a: 11,
        c: 33
    }, {
        s: 15,
        a: 12,
        c: 23
    }, {
        s: 15,
        a: 13,
        c: 26
    }, {
        s: 15,
        a: 14,
        c: 39
    }, {
        s: 15,
        a: 15,
        c: 36
    }, {
        s: 15,
        a: 16,
        c: 37
    }, {
        s: 15,
        a: 17,
        c: 21
    }, {
        s: 15,
        a: 18,
        c: 29
    }, {
        s: 15,
        a: 19,
        c: 52
    }, {
        s: 15,
        a: 20,
        c: 34
    }, {
        s: 15,
        a: 21,
        c: 42
    }, {
        s: 15,
        a: 22,
        c: 63
    }, {
        s: 15,
        a: 23,
        c: 29
    }, {
        s: 15,
        a: 24,
        c: 42
    }, {
        s: 15,
        a: 25,
        c: 25
    }, {
        s: 15,
        a: 26,
        c: 33
    }, {
        s: 15,
        a: 27,
        c: 28
    }, {
        s: 15,
        a: 28,
        c: 45
    }, {
        s: 15,
        a: 29,
        c: 36
    }, {
        s: 15,
        a: 30,
        c: 22
    }, {
        s: 15,
        a: 31,
        c: 27
    }, {
        s: 15,
        a: 32,
        c: 31
    }, {
        s: 15,
        a: 33,
        c: 39
    }, {
        s: 15,
        a: 34,
        c: 20
    }, {
        s: 15,
        a: 35,
        c: 24
    }, {
        s: 15,
        a: 36,
        c: 24
    }, {
        s: 15,
        a: 37,
        c: 17
    }, {
        s: 15,
        a: 38,
        c: 18
    }, {
        s: 15,
        a: 39,
        c: 46
    }, {
        s: 15,
        a: 40,
        c: 20
    }, {
        s: 15,
        a: 41,
        c: 19
    }, {
        s: 15,
        a: 42,
        c: 41
    }, {
        s: 15,
        a: 43,
        c: 20
    }, {
        s: 15,
        a: 44,
        c: 30
    }, {
        s: 15,
        a: 45,
        c: 20
    }, {
        s: 15,
        a: 46,
        c: 17
    }, {
        s: 15,
        a: 47,
        c: 40
    }, {
        s: 15,
        a: 48,
        c: 30
    }, {
        s: 15,
        a: 49,
        c: 26
    }, {
        s: 15,
        a: 50,
        c: 22
    }, {
        s: 15,
        a: 51,
        c: 18
    }, {
        s: 15,
        a: 52,
        c: 37
    }, {
        s: 15,
        a: 53,
        c: 28
    }, {
        s: 15,
        a: 54,
        c: 35
    }, {
        s: 15,
        a: 55,
        c: 32
    }, {
        s: 15,
        a: 56,
        c: 29
    }, {
        s: 15,
        a: 57,
        c: 23
    }, {
        s: 15,
        a: 58,
        c: 26
    }, {
        s: 15,
        a: 59,
        c: 24
    }, {
        s: 15,
        a: 60,
        c: 29
    }, {
        s: 15,
        a: 61,
        c: 20
    }, {
        s: 15,
        a: 62,
        c: 16
    }, {
        s: 15,
        a: 63,
        c: 29
    }, {
        s: 15,
        a: 64,
        c: 23
    }, {
        s: 15,
        a: 65,
        c: 62
    }, {
        s: 15,
        a: 66,
        c: 40
    }, {
        s: 15,
        a: 67,
        c: 22
    }, {
        s: 15,
        a: 68,
        c: 23
    }, {
        s: 15,
        a: 69,
        c: 18
    }, {
        s: 15,
        a: 70,
        c: 23
    }, {
        s: 15,
        a: 71,
        c: 25
    }, {
        s: 15,
        a: 72,
        c: 24
    }, {
        s: 15,
        a: 73,
        c: 19
    }, {
        s: 15,
        a: 74,
        c: 41
    }, {
        s: 15,
        a: 75,
        c: 21
    }, {
        s: 15,
        a: 76,
        c: 15
    }, {
        s: 15,
        a: 77,
        c: 19
    }, {
        s: 15,
        a: 78,
        c: 24
    }, {
        s: 15,
        a: 79,
        c: 28
    }, {
        s: 15,
        a: 80,
        c: 25
    }, {
        s: 15,
        a: 81,
        c: 30
    }, {
        s: 15,
        a: 82,
        c: 30
    }, {
        s: 15,
        a: 83,
        c: 19
    }, {
        s: 15,
        a: 84,
        c: 24
    }, {
        s: 15,
        a: 85,
        c: 69
    }, {
        s: 15,
        a: 86,
        c: 19
    }, {
        s: 15,
        a: 87,
        c: 36
    }, {
        s: 15,
        a: 88,
        c: 63
    }, {
        s: 15,
        a: 89,
        c: 21
    }, {
        s: 15,
        a: 90,
        c: 21
    }, {
        s: 15,
        a: 91,
        c: 20
    }, {
        s: 15,
        a: 92,
        c: 19
    }, {
        s: 15,
        a: 93,
        c: 14
    }, {
        s: 15,
        a: 94,
        c: 27
    }, {
        s: 15,
        a: 95,
        c: 19
    }, {
        s: 15,
        a: 96,
        c: 34
    }, {
        s: 15,
        a: 97,
        c: 28
    }, {
        s: 15,
        a: 98,
        c: 24
    }, {
        s: 15,
        a: 99,
        c: 22
    }, {
        s: 16,
        a: 1,
        c: 42
    }, {
        s: 16,
        a: 2,
        c: 68
    }, {
        s: 16,
        a: 3,
        c: 36
    }, {
        s: 16,
        a: 4,
        c: 30
    }, {
        s: 16,
        a: 5,
        c: 40
    }, {
        s: 16,
        a: 6,
        c: 31
    }, {
        s: 16,
        a: 7,
        c: 59
    }, {
        s: 16,
        a: 8,
        c: 48
    }, {
        s: 16,
        a: 9,
        c: 44
    }, {
        s: 16,
        a: 10,
        c: 47
    }, {
        s: 16,
        a: 11,
        c: 71
    }, {
        s: 16,
        a: 12,
        c: 71
    }, {
        s: 16,
        a: 13,
        c: 49
    }, {
        s: 16,
        a: 14,
        c: 100
    }, {
        s: 16,
        a: 15,
        c: 49
    }, {
        s: 16,
        a: 16,
        c: 22
    }, {
        s: 16,
        a: 17,
        c: 27
    }, {
        s: 16,
        a: 18,
        c: 39
    }, {
        s: 16,
        a: 19,
        c: 25
    }, {
        s: 16,
        a: 20,
        c: 41
    }, {
        s: 16,
        a: 21,
        c: 32
    }, {
        s: 16,
        a: 22,
        c: 55
    }, {
        s: 16,
        a: 23,
        c: 49
    }, {
        s: 16,
        a: 24,
        c: 40
    }, {
        s: 16,
        a: 25,
        c: 69
    }, {
        s: 16,
        a: 26,
        c: 86
    }, {
        s: 16,
        a: 27,
        c: 98
    }, {
        s: 16,
        a: 28,
        c: 82
    }, {
        s: 16,
        a: 29,
        c: 44
    }, {
        s: 16,
        a: 30,
        c: 90
    }, {
        s: 16,
        a: 31,
        c: 67
    }, {
        s: 16,
        a: 32,
        c: 64
    }, {
        s: 16,
        a: 33,
        c: 91
    }, {
        s: 16,
        a: 34,
        c: 43
    }, {
        s: 16,
        a: 35,
        c: 118
    }, {
        s: 16,
        a: 36,
        c: 122
    }, {
        s: 16,
        a: 37,
        c: 46
    }, {
        s: 16,
        a: 38,
        c: 73
    }, {
        s: 16,
        a: 39,
        c: 53
    }, {
        s: 16,
        a: 40,
        c: 37
    }, {
        s: 16,
        a: 41,
        c: 78
    }, {
        s: 16,
        a: 42,
        c: 25
    }, {
        s: 16,
        a: 43,
        c: 61
    }, {
        s: 16,
        a: 44,
        c: 63
    }, {
        s: 16,
        a: 45,
        c: 67
    }, {
        s: 16,
        a: 46,
        c: 28
    }, {
        s: 16,
        a: 47,
        c: 31
    }, {
        s: 16,
        a: 48,
        c: 67
    }, {
        s: 16,
        a: 49,
        c: 58
    }, {
        s: 16,
        a: 50,
        c: 32
    }, {
        s: 16,
        a: 51,
        c: 51
    }, {
        s: 16,
        a: 52,
        c: 48
    }, {
        s: 16,
        a: 53,
        c: 43
    }, {
        s: 16,
        a: 54,
        c: 38
    }, {
        s: 16,
        a: 55,
        c: 34
    }, {
        s: 16,
        a: 56,
        c: 57
    }, {
        s: 16,
        a: 57,
        c: 34
    }, {
        s: 16,
        a: 58,
        c: 37
    }, {
        s: 16,
        a: 59,
        c: 65
    }, {
        s: 16,
        a: 60,
        c: 58
    }, {
        s: 16,
        a: 61,
        c: 96
    }, {
        s: 16,
        a: 62,
        c: 71
    }, {
        s: 16,
        a: 63,
        c: 72
    }, {
        s: 16,
        a: 64,
        c: 63
    }, {
        s: 16,
        a: 65,
        c: 61
    }, {
        s: 16,
        a: 66,
        c: 69
    }, {
        s: 16,
        a: 67,
        c: 65
    }, {
        s: 16,
        a: 68,
        c: 54
    }, {
        s: 16,
        a: 69,
        c: 93
    }, {
        s: 16,
        a: 70,
        c: 74
    }, {
        s: 16,
        a: 71,
        c: 92
    }, {
        s: 16,
        a: 72,
        c: 98
    }, {
        s: 16,
        a: 73,
        c: 62
    }, {
        s: 16,
        a: 74,
        c: 42
    }, {
        s: 16,
        a: 75,
        c: 103
    }, {
        s: 16,
        a: 76,
        c: 109
    }, {
        s: 16,
        a: 77,
        c: 71
    }, {
        s: 16,
        a: 78,
        c: 75
    }, {
        s: 16,
        a: 79,
        c: 68
    }, {
        s: 16,
        a: 80,
        c: 119
    }, {
        s: 16,
        a: 81,
        c: 110
    }, {
        s: 16,
        a: 82,
        c: 29
    }, {
        s: 16,
        a: 83,
        c: 39
    }, {
        s: 16,
        a: 84,
        c: 51
    }, {
        s: 16,
        a: 85,
        c: 45
    }, {
        s: 16,
        a: 86,
        c: 91
    }, {
        s: 16,
        a: 87,
        c: 43
    }, {
        s: 16,
        a: 88,
        c: 59
    }, {
        s: 16,
        a: 89,
        c: 103
    }, {
        s: 16,
        a: 90,
        c: 81
    }, {
        s: 16,
        a: 91,
        c: 89
    }, {
        s: 16,
        a: 92,
        c: 131
    }, {
        s: 16,
        a: 93,
        c: 68
    }, {
        s: 16,
        a: 94,
        c: 83
    }, {
        s: 16,
        a: 95,
        c: 57
    }, {
        s: 16,
        a: 96,
        c: 64
    }, {
        s: 16,
        a: 97,
        c: 76
    }, {
        s: 16,
        a: 98,
        c: 40
    }, {
        s: 16,
        a: 99,
        c: 41
    }, {
        s: 16,
        a: 100,
        c: 41
    }, {
        s: 16,
        a: 101,
        c: 67
    }, {
        s: 16,
        a: 102,
        c: 56
    }, {
        s: 16,
        a: 103,
        c: 69
    }, {
        s: 16,
        a: 104,
        c: 48
    }, {
        s: 16,
        a: 105,
        c: 52
    }, {
        s: 16,
        a: 106,
        c: 94
    }, {
        s: 16,
        a: 107,
        c: 62
    }, {
        s: 16,
        a: 108,
        c: 56
    }, {
        s: 16,
        a: 109,
        c: 27
    }, {
        s: 16,
        a: 110,
        c: 65
    }, {
        s: 16,
        a: 111,
        c: 51
    }, {
        s: 16,
        a: 112,
        c: 107
    }, {
        s: 16,
        a: 113,
        c: 44
    }, {
        s: 16,
        a: 114,
        c: 57
    }, {
        s: 16,
        a: 115,
        c: 84
    }, {
        s: 16,
        a: 116,
        c: 94
    }, {
        s: 16,
        a: 117,
        c: 20
    }, {
        s: 16,
        a: 118,
        c: 66
    }, {
        s: 16,
        a: 119,
        c: 71
    }, {
        s: 16,
        a: 120,
        c: 43
    }, {
        s: 16,
        a: 121,
        c: 35
    }, {
        s: 16,
        a: 122,
        c: 42
    }, {
        s: 16,
        a: 123,
        c: 49
    }, {
        s: 16,
        a: 124,
        c: 75
    }, {
        s: 16,
        a: 125,
        c: 91
    }, {
        s: 16,
        a: 126,
        c: 53
    }, {
        s: 16,
        a: 127,
        c: 51
    }, {
        s: 16,
        a: 128,
        c: 32
    }, {
        s: 17,
        a: 1,
        c: 95
    }, {
        s: 17,
        a: 2,
        c: 57
    }, {
        s: 17,
        a: 3,
        c: 31
    }, {
        s: 17,
        a: 4,
        c: 60
    }, {
        s: 17,
        a: 5,
        c: 76
    }, {
        s: 17,
        a: 6,
        c: 57
    }, {
        s: 17,
        a: 7,
        c: 110
    }, {
        s: 17,
        a: 8,
        c: 49
    }, {
        s: 17,
        a: 9,
        c: 71
    }, {
        s: 17,
        a: 10,
        c: 42
    }, {
        s: 17,
        a: 11,
        c: 43
    }, {
        s: 17,
        a: 12,
        c: 116
    }, {
        s: 17,
        a: 13,
        c: 59
    }, {
        s: 17,
        a: 14,
        c: 31
    }, {
        s: 17,
        a: 15,
        c: 82
    }, {
        s: 17,
        a: 16,
        c: 68
    }, {
        s: 17,
        a: 17,
        c: 53
    }, {
        s: 17,
        a: 18,
        c: 71
    }, {
        s: 17,
        a: 19,
        c: 52
    }, {
        s: 17,
        a: 20,
        c: 45
    }, {
        s: 17,
        a: 21,
        c: 50
    }, {
        s: 17,
        a: 22,
        c: 36
    }, {
        s: 17,
        a: 23,
        c: 108
    }, {
        s: 17,
        a: 24,
        c: 51
    }, {
        s: 17,
        a: 25,
        c: 53
    }, {
        s: 17,
        a: 26,
        c: 45
    }, {
        s: 17,
        a: 27,
        c: 48
    }, {
        s: 17,
        a: 28,
        c: 50
    }, {
        s: 17,
        a: 29,
        c: 55
    }, {
        s: 17,
        a: 30,
        c: 48
    }, {
        s: 17,
        a: 31,
        c: 59
    }, {
        s: 17,
        a: 32,
        c: 34
    }, {
        s: 17,
        a: 33,
        c: 90
    }, {
        s: 17,
        a: 34,
        c: 71
    }, {
        s: 17,
        a: 35,
        c: 56
    }, {
        s: 17,
        a: 36,
        c: 57
    }, {
        s: 17,
        a: 37,
        c: 48
    }, {
        s: 17,
        a: 38,
        c: 24
    }, {
        s: 17,
        a: 39,
        c: 67
    }, {
        s: 17,
        a: 40,
        c: 59
    }, {
        s: 17,
        a: 41,
        c: 44
    }, {
        s: 17,
        a: 42,
        c: 48
    }, {
        s: 17,
        a: 43,
        c: 30
    }, {
        s: 17,
        a: 44,
        c: 87
    }, {
        s: 17,
        a: 45,
        c: 58
    }, {
        s: 17,
        a: 46,
        c: 82
    }, {
        s: 17,
        a: 47,
        c: 76
    }, {
        s: 17,
        a: 48,
        c: 42
    }, {
        s: 17,
        a: 49,
        c: 45
    }, {
        s: 17,
        a: 50,
        c: 19
    }, {
        s: 17,
        a: 51,
        c: 100
    }, {
        s: 17,
        a: 52,
        c: 44
    }, {
        s: 17,
        a: 53,
        c: 71
    }, {
        s: 17,
        a: 54,
        c: 55
    }, {
        s: 17,
        a: 55,
        c: 68
    }, {
        s: 17,
        a: 56,
        c: 52
    }, {
        s: 17,
        a: 57,
        c: 84
    }, {
        s: 17,
        a: 58,
        c: 74
    }, {
        s: 17,
        a: 59,
        c: 92
    }, {
        s: 17,
        a: 60,
        c: 113
    }, {
        s: 17,
        a: 61,
        c: 58
    }, {
        s: 17,
        a: 62,
        c: 64
    }, {
        s: 17,
        a: 63,
        c: 41
    }, {
        s: 17,
        a: 64,
        c: 96
    }, {
        s: 17,
        a: 65,
        c: 35
    }, {
        s: 17,
        a: 66,
        c: 54
    }, {
        s: 17,
        a: 67,
        c: 73
    }, {
        s: 17,
        a: 68,
        c: 57
    }, {
        s: 17,
        a: 69,
        c: 87
    }, {
        s: 17,
        a: 70,
        c: 81
    }, {
        s: 17,
        a: 71,
        c: 70
    }, {
        s: 17,
        a: 72,
        c: 39
    }, {
        s: 17,
        a: 73,
        c: 63
    }, {
        s: 17,
        a: 74,
        c: 37
    }, {
        s: 17,
        a: 75,
        c: 48
    }, {
        s: 17,
        a: 76,
        c: 60
    }, {
        s: 17,
        a: 77,
        c: 42
    }, {
        s: 17,
        a: 78,
        c: 60
    }, {
        s: 17,
        a: 79,
        c: 46
    }, {
        s: 17,
        a: 80,
        c: 56
    }, {
        s: 17,
        a: 81,
        c: 36
    }, {
        s: 17,
        a: 82,
        c: 57
    }, {
        s: 17,
        a: 83,
        c: 53
    }, {
        s: 17,
        a: 84,
        c: 40
    }, {
        s: 17,
        a: 85,
        c: 54
    }, {
        s: 17,
        a: 86,
        c: 50
    }, {
        s: 17,
        a: 87,
        c: 30
    }, {
        s: 17,
        a: 88,
        c: 76
    }, {
        s: 17,
        a: 89,
        c: 53
    }, {
        s: 17,
        a: 90,
        c: 37
    }, {
        s: 17,
        a: 91,
        c: 45
    }, {
        s: 17,
        a: 92,
        c: 53
    }, {
        s: 17,
        a: 93,
        c: 92
    }, {
        s: 17,
        a: 94,
        c: 58
    }, {
        s: 17,
        a: 95,
        c: 60
    }, {
        s: 17,
        a: 96,
        c: 47
    }, {
        s: 17,
        a: 97,
        c: 114
    }, {
        s: 17,
        a: 98,
        c: 71
    }, {
        s: 17,
        a: 99,
        c: 92
    }, {
        s: 17,
        a: 100,
        c: 63
    }, {
        s: 17,
        a: 101,
        c: 78
    }, {
        s: 17,
        a: 102,
        c: 67
    }, {
        s: 17,
        a: 103,
        c: 40
    }, {
        s: 17,
        a: 104,
        c: 61
    }, {
        s: 17,
        a: 105,
        c: 46
    }, {
        s: 17,
        a: 106,
        c: 45
    }, {
        s: 17,
        a: 107,
        c: 70
    }, {
        s: 17,
        a: 108,
        c: 35
    }, {
        s: 17,
        a: 109,
        c: 30
    }, {
        s: 17,
        a: 110,
        c: 90
    }, {
        s: 17,
        a: 111,
        c: 72
    }, {
        s: 18,
        a: 1,
        c: 42
    }, {
        s: 18,
        a: 2,
        c: 69
    }, {
        s: 18,
        a: 3,
        c: 13
    }, {
        s: 18,
        a: 4,
        c: 27
    }, {
        s: 18,
        a: 5,
        c: 58
    }, {
        s: 18,
        a: 6,
        c: 46
    }, {
        s: 18,
        a: 7,
        c: 44
    }, {
        s: 18,
        a: 8,
        c: 27
    }, {
        s: 18,
        a: 9,
        c: 42
    }, {
        s: 18,
        a: 10,
        c: 61
    }, {
        s: 18,
        a: 11,
        c: 30
    }, {
        s: 18,
        a: 12,
        c: 39
    }, {
        s: 18,
        a: 13,
        c: 48
    }, {
        s: 18,
        a: 14,
        c: 78
    }, {
        s: 18,
        a: 15,
        c: 75
    }, {
        s: 18,
        a: 16,
        c: 80
    }, {
        s: 18,
        a: 17,
        c: 127
    }, {
        s: 18,
        a: 18,
        c: 109
    }, {
        s: 18,
        a: 19,
        c: 173
    }, {
        s: 18,
        a: 20,
        c: 56
    }, {
        s: 18,
        a: 21,
        c: 142
    }, {
        s: 18,
        a: 22,
        c: 151
    }, {
        s: 18,
        a: 23,
        c: 25
    }, {
        s: 18,
        a: 24,
        c: 58
    }, {
        s: 18,
        a: 25,
        c: 37
    }, {
        s: 18,
        a: 26,
        c: 81
    }, {
        s: 18,
        a: 27,
        c: 54
    }, {
        s: 18,
        a: 28,
        c: 129
    }, {
        s: 18,
        a: 29,
        c: 129
    }, {
        s: 18,
        a: 30,
        c: 48
    }, {
        s: 18,
        a: 31,
        c: 123
    }, {
        s: 18,
        a: 32,
        c: 70
    }, {
        s: 18,
        a: 33,
        c: 50
    }, {
        s: 18,
        a: 34,
        c: 50
    }, {
        s: 18,
        a: 35,
        c: 41
    }, {
        s: 18,
        a: 36,
        c: 50
    }, {
        s: 18,
        a: 37,
        c: 57
    }, {
        s: 18,
        a: 38,
        c: 28
    }, {
        s: 18,
        a: 39,
        c: 63
    }, {
        s: 18,
        a: 40,
        c: 62
    }, {
        s: 18,
        a: 41,
        c: 30
    }, {
        s: 18,
        a: 42,
        c: 79
    }, {
        s: 18,
        a: 43,
        c: 39
    }, {
        s: 18,
        a: 44,
        c: 37
    }, {
        s: 18,
        a: 45,
        c: 102
    }, {
        s: 18,
        a: 46,
        c: 67
    }, {
        s: 18,
        a: 47,
        c: 52
    }, {
        s: 18,
        a: 48,
        c: 63
    }, {
        s: 18,
        a: 49,
        c: 122
    }, {
        s: 18,
        a: 50,
        c: 111
    }, {
        s: 18,
        a: 51,
        c: 59
    }, {
        s: 18,
        a: 52,
        c: 65
    }, {
        s: 18,
        a: 53,
        c: 51
    }, {
        s: 18,
        a: 54,
        c: 54
    }, {
        s: 18,
        a: 55,
        c: 83
    }, {
        s: 18,
        a: 56,
        c: 92
    }, {
        s: 18,
        a: 57,
        c: 118
    }, {
        s: 18,
        a: 58,
        c: 75
    }, {
        s: 18,
        a: 59,
        c: 43
    }, {
        s: 18,
        a: 60,
        c: 49
    }, {
        s: 18,
        a: 61,
        c: 49
    }, {
        s: 18,
        a: 62,
        c: 49
    }, {
        s: 18,
        a: 63,
        c: 85
    }, {
        s: 18,
        a: 64,
        c: 34
    }, {
        s: 18,
        a: 65,
        c: 51
    }, {
        s: 18,
        a: 66,
        c: 37
    }, {
        s: 18,
        a: 67,
        c: 21
    }, {
        s: 18,
        a: 68,
        c: 24
    }, {
        s: 18,
        a: 69,
        c: 36
    }, {
        s: 18,
        a: 70,
        c: 43
    }, {
        s: 18,
        a: 71,
        c: 65
    }, {
        s: 18,
        a: 72,
        c: 27
    }, {
        s: 18,
        a: 73,
        c: 38
    }, {
        s: 18,
        a: 74,
        c: 64
    }, {
        s: 18,
        a: 75,
        c: 29
    }, {
        s: 18,
        a: 76,
        c: 46
    }, {
        s: 18,
        a: 77,
        c: 103
    }, {
        s: 18,
        a: 78,
        c: 48
    }, {
        s: 18,
        a: 79,
        c: 76
    }, {
        s: 18,
        a: 80,
        c: 51
    }, {
        s: 18,
        a: 81,
        c: 40
    }, {
        s: 18,
        a: 82,
        c: 148
    }, {
        s: 18,
        a: 83,
        c: 38
    }, {
        s: 18,
        a: 84,
        c: 34
    }, {
        s: 18,
        a: 85,
        c: 9
    }, {
        s: 18,
        a: 86,
        c: 91
    }, {
        s: 18,
        a: 87,
        c: 46
    }, {
        s: 18,
        a: 88,
        c: 50
    }, {
        s: 18,
        a: 89,
        c: 10
    }, {
        s: 18,
        a: 90,
        c: 53
    }, {
        s: 18,
        a: 91,
        c: 23
    }, {
        s: 18,
        a: 92,
        c: 10
    }, {
        s: 18,
        a: 93,
        c: 51
    }, {
        s: 18,
        a: 94,
        c: 78
    }, {
        s: 18,
        a: 95,
        c: 49
    }, {
        s: 18,
        a: 96,
        c: 77
    }, {
        s: 18,
        a: 97,
        c: 35
    }, {
        s: 18,
        a: 98,
        c: 49
    }, {
        s: 18,
        a: 99,
        c: 48
    }, {
        s: 18,
        a: 100,
        c: 27
    }, {
        s: 18,
        a: 101,
        c: 47
    }, {
        s: 18,
        a: 102,
        c: 65
    }, {
        s: 18,
        a: 103,
        c: 25
    }, {
        s: 18,
        a: 104,
        c: 49
    }, {
        s: 18,
        a: 105,
        c: 66
    }, {
        s: 18,
        a: 106,
        c: 42
    }, {
        s: 18,
        a: 107,
        c: 48
    }, {
        s: 18,
        a: 108,
        c: 25
    }, {
        s: 18,
        a: 109,
        c: 68
    }, {
        s: 18,
        a: 110,
        c: 92
    }, {
        s: 19,
        a: 1,
        c: 5
    }, {
        s: 19,
        a: 2,
        c: 19
    }, {
        s: 19,
        a: 3,
        c: 17
    }, {
        s: 19,
        a: 4,
        c: 52
    }, {
        s: 19,
        a: 5,
        c: 52
    }, {
        s: 19,
        a: 6,
        c: 30
    }, {
        s: 19,
        a: 7,
        c: 45
    }, {
        s: 19,
        a: 8,
        c: 52
    }, {
        s: 19,
        a: 9,
        c: 43
    }, {
        s: 19,
        a: 10,
        c: 45
    }, {
        s: 19,
        a: 11,
        c: 46
    }, {
        s: 19,
        a: 12,
        c: 34
    }, {
        s: 19,
        a: 13,
        c: 25
    }, {
        s: 19,
        a: 14,
        c: 26
    }, {
        s: 19,
        a: 15,
        c: 34
    }, {
        s: 19,
        a: 16,
        c: 42
    }, {
        s: 19,
        a: 17,
        c: 51
    }, {
        s: 19,
        a: 18,
        c: 30
    }, {
        s: 19,
        a: 19,
        c: 32
    }, {
        s: 19,
        a: 20,
        c: 38
    }, {
        s: 19,
        a: 21,
        c: 57
    }, {
        s: 19,
        a: 22,
        c: 24
    }, {
        s: 19,
        a: 23,
        c: 57
    }, {
        s: 19,
        a: 24,
        c: 38
    }, {
        s: 19,
        a: 25,
        c: 35
    }, {
        s: 19,
        a: 26,
        c: 76
    }, {
        s: 19,
        a: 27,
        c: 41
    }, {
        s: 19,
        a: 28,
        c: 40
    }, {
        s: 19,
        a: 29,
        c: 38
    }, {
        s: 19,
        a: 30,
        c: 34
    }, {
        s: 19,
        a: 31,
        c: 49
    }, {
        s: 19,
        a: 32,
        c: 29
    }, {
        s: 19,
        a: 33,
        c: 36
    }, {
        s: 19,
        a: 34,
        c: 34
    }, {
        s: 19,
        a: 35,
        c: 53
    }, {
        s: 19,
        a: 36,
        c: 35
    }, {
        s: 19,
        a: 37,
        c: 47
    }, {
        s: 19,
        a: 38,
        c: 48
    }, {
        s: 19,
        a: 39,
        c: 46
    }, {
        s: 19,
        a: 40,
        c: 34
    }, {
        s: 19,
        a: 41,
        c: 35
    }, {
        s: 19,
        a: 42,
        c: 50
    }, {
        s: 19,
        a: 43,
        c: 50
    }, {
        s: 19,
        a: 44,
        c: 40
    }, {
        s: 19,
        a: 45,
        c: 46
    }, {
        s: 19,
        a: 46,
        c: 54
    }, {
        s: 19,
        a: 47,
        c: 35
    }, {
        s: 19,
        a: 48,
        c: 55
    }, {
        s: 19,
        a: 49,
        c: 60
    }, {
        s: 19,
        a: 50,
        c: 37
    }, {
        s: 19,
        a: 51,
        c: 41
    }, {
        s: 19,
        a: 52,
        c: 36
    }, {
        s: 19,
        a: 53,
        c: 29
    }, {
        s: 19,
        a: 54,
        c: 48
    }, {
        s: 19,
        a: 55,
        c: 41
    }, {
        s: 19,
        a: 56,
        c: 33
    }, {
        s: 19,
        a: 57,
        c: 16
    }, {
        s: 19,
        a: 58,
        c: 129
    }, {
        s: 19,
        a: 59,
        c: 52
    }, {
        s: 19,
        a: 60,
        c: 51
    }, {
        s: 19,
        a: 61,
        c: 46
    }, {
        s: 19,
        a: 62,
        c: 46
    }, {
        s: 19,
        a: 63,
        c: 33
    }, {
        s: 19,
        a: 64,
        c: 61
    }, {
        s: 19,
        a: 65,
        c: 56
    }, {
        s: 19,
        a: 66,
        c: 31
    }, {
        s: 19,
        a: 67,
        c: 38
    }, {
        s: 19,
        a: 68,
        c: 43
    }, {
        s: 19,
        a: 69,
        c: 36
    }, {
        s: 19,
        a: 70,
        c: 29
    }, {
        s: 19,
        a: 71,
        c: 34
    }, {
        s: 19,
        a: 72,
        c: 36
    }, {
        s: 19,
        a: 73,
        c: 74
    }, {
        s: 19,
        a: 74,
        c: 35
    }, {
        s: 19,
        a: 75,
        c: 98
    }, {
        s: 19,
        a: 76,
        c: 62
    }, {
        s: 19,
        a: 77,
        c: 39
    }, {
        s: 19,
        a: 78,
        c: 28
    }, {
        s: 19,
        a: 79,
        c: 31
    }, {
        s: 19,
        a: 80,
        c: 22
    }, {
        s: 19,
        a: 81,
        c: 33
    }, {
        s: 19,
        a: 82,
        c: 33
    }, {
        s: 19,
        a: 83,
        c: 41
    }, {
        s: 19,
        a: 84,
        c: 25
    }, {
        s: 19,
        a: 85,
        c: 27
    }, {
        s: 19,
        a: 86,
        c: 24
    }, {
        s: 19,
        a: 87,
        c: 37
    }, {
        s: 19,
        a: 88,
        c: 20
    }, {
        s: 19,
        a: 89,
        c: 14
    }, {
        s: 19,
        a: 90,
        c: 44
    }, {
        s: 19,
        a: 91,
        c: 16
    }, {
        s: 19,
        a: 92,
        c: 24
    }, {
        s: 19,
        a: 93,
        c: 38
    }, {
        s: 19,
        a: 94,
        c: 17
    }, {
        s: 19,
        a: 95,
        c: 23
    }, {
        s: 19,
        a: 96,
        c: 43
    }, {
        s: 19,
        a: 97,
        c: 45
    }, {
        s: 19,
        a: 98,
        c: 46
    }, {
        s: 20,
        a: 1,
        c: 2
    }, {
        s: 20,
        a: 2,
        c: 23
    }, {
        s: 20,
        a: 3,
        c: 15
    }, {
        s: 20,
        a: 4,
        c: 31
    }, {
        s: 20,
        a: 5,
        c: 19
    }, {
        s: 20,
        a: 6,
        c: 44
    }, {
        s: 20,
        a: 7,
        c: 30
    }, {
        s: 20,
        a: 8,
        c: 29
    }, {
        s: 20,
        a: 9,
        c: 15
    }, {
        s: 20,
        a: 10,
        c: 68
    }, {
        s: 20,
        a: 11,
        c: 19
    }, {
        s: 20,
        a: 12,
        c: 37
    }, {
        s: 20,
        a: 13,
        c: 23
    }, {
        s: 20,
        a: 14,
        c: 44
    }, {
        s: 20,
        a: 15,
        c: 39
    }, {
        s: 20,
        a: 16,
        c: 37
    }, {
        s: 20,
        a: 17,
        c: 18
    }, {
        s: 20,
        a: 18,
        c: 48
    }, {
        s: 20,
        a: 19,
        c: 14
    }, {
        s: 20,
        a: 20,
        c: 20
    }, {
        s: 20,
        a: 21,
        c: 32
    }, {
        s: 20,
        a: 22,
        c: 40
    }, {
        s: 20,
        a: 23,
        c: 19
    }, {
        s: 20,
        a: 24,
        c: 18
    }, {
        s: 20,
        a: 25,
        c: 15
    }, {
        s: 20,
        a: 26,
        c: 10
    }, {
        s: 20,
        a: 27,
        c: 16
    }, {
        s: 20,
        a: 28,
        c: 10
    }, {
        s: 20,
        a: 29,
        c: 18
    }, {
        s: 20,
        a: 30,
        c: 8
    }, {
        s: 20,
        a: 31,
        c: 10
    }, {
        s: 20,
        a: 32,
        c: 12
    }, {
        s: 20,
        a: 33,
        c: 12
    }, {
        s: 20,
        a: 34,
        c: 11
    }, {
        s: 20,
        a: 35,
        c: 14
    }, {
        s: 20,
        a: 36,
        c: 20
    }, {
        s: 20,
        a: 37,
        c: 19
    }, {
        s: 20,
        a: 38,
        c: 20
    }, {
        s: 20,
        a: 39,
        c: 93
    }, {
        s: 20,
        a: 40,
        c: 130
    }, {
        s: 20,
        a: 41,
        c: 13
    }, {
        s: 20,
        a: 42,
        c: 31
    }, {
        s: 20,
        a: 43,
        c: 19
    }, {
        s: 20,
        a: 44,
        c: 30
    }, {
        s: 20,
        a: 45,
        c: 35
    }, {
        s: 20,
        a: 46,
        c: 27
    }, {
        s: 20,
        a: 47,
        c: 87
    }, {
        s: 20,
        a: 48,
        c: 35
    }, {
        s: 20,
        a: 49,
        c: 17
    }, {
        s: 20,
        a: 50,
        c: 29
    }, {
        s: 20,
        a: 51,
        c: 21
    }, {
        s: 20,
        a: 52,
        c: 35
    }, {
        s: 20,
        a: 53,
        c: 74
    }, {
        s: 20,
        a: 54,
        c: 39
    }, {
        s: 20,
        a: 55,
        c: 41
    }, {
        s: 20,
        a: 56,
        c: 28
    }, {
        s: 20,
        a: 57,
        c: 34
    }, {
        s: 20,
        a: 58,
        c: 60
    }, {
        s: 20,
        a: 59,
        c: 33
    }, {
        s: 20,
        a: 60,
        c: 23
    }, {
        s: 20,
        a: 61,
        c: 59
    }, {
        s: 20,
        a: 62,
        c: 30
    }, {
        s: 20,
        a: 63,
        c: 67
    }, {
        s: 20,
        a: 64,
        c: 42
    }, {
        s: 20,
        a: 65,
        c: 39
    }, {
        s: 20,
        a: 66,
        c: 49
    }, {
        s: 20,
        a: 67,
        c: 19
    }, {
        s: 20,
        a: 68,
        c: 21
    }, {
        s: 20,
        a: 69,
        c: 59
    }, {
        s: 20,
        a: 70,
        c: 37
    }, {
        s: 20,
        a: 71,
        c: 115
    }, {
        s: 20,
        a: 72,
        c: 76
    }, {
        s: 20,
        a: 73,
        c: 61
    }, {
        s: 20,
        a: 74,
        c: 42
    }, {
        s: 20,
        a: 75,
        c: 46
    }, {
        s: 20,
        a: 76,
        c: 49
    }, {
        s: 20,
        a: 77,
        c: 69
    }, {
        s: 20,
        a: 78,
        c: 37
    }, {
        s: 20,
        a: 79,
        c: 19
    }, {
        s: 20,
        a: 80,
        c: 75
    }, {
        s: 20,
        a: 81,
        c: 65
    }, {
        s: 20,
        a: 82,
        c: 35
    }, {
        s: 20,
        a: 83,
        c: 20
    }, {
        s: 20,
        a: 84,
        c: 33
    }, {
        s: 20,
        a: 85,
        c: 36
    }, {
        s: 20,
        a: 86,
        c: 105
    }, {
        s: 20,
        a: 87,
        c: 75
    }, {
        s: 20,
        a: 88,
        c: 48
    }, {
        s: 20,
        a: 89,
        c: 44
    }, {
        s: 20,
        a: 90,
        c: 68
    }, {
        s: 20,
        a: 91,
        c: 37
    }, {
        s: 20,
        a: 92,
        c: 28
    }, {
        s: 20,
        a: 93,
        c: 18
    }, {
        s: 20,
        a: 94,
        c: 71
    }, {
        s: 20,
        a: 95,
        c: 17
    }, {
        s: 20,
        a: 96,
        c: 62
    }, {
        s: 20,
        a: 97,
        c: 104
    }, {
        s: 20,
        a: 98,
        c: 39
    }, {
        s: 20,
        a: 99,
        c: 44
    }, {
        s: 20,
        a: 100,
        c: 31
    }, {
        s: 20,
        a: 101,
        c: 30
    }, {
        s: 20,
        a: 102,
        c: 36
    }, {
        s: 20,
        a: 103,
        c: 27
    }, {
        s: 20,
        a: 104,
        c: 47
    }, {
        s: 20,
        a: 105,
        c: 32
    }, {
        s: 20,
        a: 106,
        c: 15
    }, {
        s: 20,
        a: 107,
        c: 20
    }, {
        s: 20,
        a: 108,
        c: 56
    }, {
        s: 20,
        a: 109,
        c: 44
    }, {
        s: 20,
        a: 110,
        c: 38
    }, {
        s: 20,
        a: 111,
        c: 35
    }, {
        s: 20,
        a: 112,
        c: 42
    }, {
        s: 20,
        a: 113,
        c: 62
    }, {
        s: 20,
        a: 114,
        c: 65
    }, {
        s: 20,
        a: 115,
        c: 36
    }, {
        s: 20,
        a: 116,
        c: 42
    }, {
        s: 20,
        a: 117,
        c: 49
    }, {
        s: 20,
        a: 118,
        c: 22
    }, {
        s: 20,
        a: 119,
        c: 21
    }, {
        s: 20,
        a: 120,
        c: 52
    }, {
        s: 20,
        a: 121,
        c: 65
    }, {
        s: 20,
        a: 122,
        c: 23
    }, {
        s: 20,
        a: 123,
        c: 70
    }, {
        s: 20,
        a: 124,
        c: 47
    }, {
        s: 20,
        a: 125,
        c: 28
    }, {
        s: 20,
        a: 126,
        c: 38
    }, {
        s: 20,
        a: 127,
        c: 50
    }, {
        s: 20,
        a: 128,
        c: 67
    }, {
        s: 20,
        a: 129,
        c: 35
    }, {
        s: 20,
        a: 130,
        c: 85
    }, {
        s: 20,
        a: 131,
        c: 75
    }, {
        s: 20,
        a: 132,
        c: 59
    }, {
        s: 20,
        a: 133,
        c: 53
    }, {
        s: 20,
        a: 134,
        c: 79
    }, {
        s: 20,
        a: 135,
        c: 50
    }, {
        s: 21,
        a: 1,
        c: 31
    }, {
        s: 21,
        a: 2,
        c: 42
    }, {
        s: 21,
        a: 3,
        c: 72
    }, {
        s: 21,
        a: 4,
        c: 44
    }, {
        s: 21,
        a: 5,
        c: 58
    }, {
        s: 21,
        a: 6,
        c: 35
    }, {
        s: 21,
        a: 7,
        c: 59
    }, {
        s: 21,
        a: 8,
        c: 42
    }, {
        s: 21,
        a: 9,
        c: 45
    }, {
        s: 21,
        a: 10,
        c: 37
    }, {
        s: 21,
        a: 11,
        c: 44
    }, {
        s: 21,
        a: 12,
        c: 29
    }, {
        s: 21,
        a: 13,
        c: 48
    }, {
        s: 21,
        a: 14,
        c: 24
    }, {
        s: 21,
        a: 15,
        c: 37
    }, {
        s: 21,
        a: 16,
        c: 35
    }, {
        s: 21,
        a: 17,
        c: 42
    }, {
        s: 21,
        a: 18,
        c: 53
    }, {
        s: 21,
        a: 19,
        c: 57
    }, {
        s: 21,
        a: 20,
        c: 26
    }, {
        s: 21,
        a: 21,
        c: 27
    }, {
        s: 21,
        a: 22,
        c: 52
    }, {
        s: 21,
        a: 23,
        c: 22
    }, {
        s: 21,
        a: 24,
        c: 82
    }, {
        s: 21,
        a: 25,
        c: 53
    }, {
        s: 21,
        a: 26,
        c: 38
    }, {
        s: 21,
        a: 27,
        c: 29
    }, {
        s: 21,
        a: 28,
        c: 59
    }, {
        s: 21,
        a: 29,
        c: 51
    }, {
        s: 21,
        a: 30,
        c: 80
    }, {
        s: 21,
        a: 31,
        c: 57
    }, {
        s: 21,
        a: 32,
        c: 39
    }, {
        s: 21,
        a: 33,
        c: 47
    }, {
        s: 21,
        a: 34,
        c: 40
    }, {
        s: 21,
        a: 35,
        c: 49
    }, {
        s: 21,
        a: 36,
        c: 72
    }, {
        s: 21,
        a: 37,
        c: 37
    }, {
        s: 21,
        a: 38,
        c: 30
    }, {
        s: 21,
        a: 39,
        c: 61
    }, {
        s: 21,
        a: 40,
        c: 45
    }, {
        s: 21,
        a: 41,
        c: 56
    }, {
        s: 21,
        a: 42,
        c: 50
    }, {
        s: 21,
        a: 43,
        c: 55
    }, {
        s: 21,
        a: 44,
        c: 82
    }, {
        s: 21,
        a: 45,
        c: 46
    }, {
        s: 21,
        a: 46,
        c: 47
    }, {
        s: 21,
        a: 47,
        c: 83
    }, {
        s: 21,
        a: 48,
        c: 43
    }, {
        s: 21,
        a: 49,
        c: 37
    }, {
        s: 21,
        a: 50,
        c: 33
    }, {
        s: 21,
        a: 51,
        c: 37
    }, {
        s: 21,
        a: 52,
        c: 45
    }, {
        s: 21,
        a: 53,
        c: 25
    }, {
        s: 21,
        a: 54,
        c: 31
    }, {
        s: 21,
        a: 55,
        c: 31
    }, {
        s: 21,
        a: 56,
        c: 55
    }, {
        s: 21,
        a: 57,
        c: 35
    }, {
        s: 21,
        a: 58,
        c: 37
    }, {
        s: 21,
        a: 59,
        c: 34
    }, {
        s: 21,
        a: 60,
        c: 32
    }, {
        s: 21,
        a: 61,
        c: 35
    }, {
        s: 21,
        a: 62,
        c: 32
    }, {
        s: 21,
        a: 63,
        c: 39
    }, {
        s: 21,
        a: 64,
        c: 37
    }, {
        s: 21,
        a: 65,
        c: 36
    }, {
        s: 21,
        a: 66,
        c: 42
    }, {
        s: 21,
        a: 67,
        c: 34
    }, {
        s: 21,
        a: 68,
        c: 35
    }, {
        s: 21,
        a: 69,
        c: 33
    }, {
        s: 21,
        a: 70,
        c: 29
    }, {
        s: 21,
        a: 71,
        c: 42
    }, {
        s: 21,
        a: 72,
        c: 39
    }, {
        s: 21,
        a: 73,
        c: 83
    }, {
        s: 21,
        a: 74,
        c: 75
    }, {
        s: 21,
        a: 75,
        c: 29
    }, {
        s: 21,
        a: 76,
        c: 51
    }, {
        s: 21,
        a: 77,
        c: 61
    }, {
        s: 21,
        a: 78,
        c: 61
    }, {
        s: 21,
        a: 79,
        c: 72
    }, {
        s: 21,
        a: 80,
        c: 45
    }, {
        s: 21,
        a: 81,
        c: 65
    }, {
        s: 21,
        a: 82,
        c: 51
    }, {
        s: 21,
        a: 83,
        c: 41
    }, {
        s: 21,
        a: 84,
        c: 69
    }, {
        s: 21,
        a: 85,
        c: 34
    }, {
        s: 21,
        a: 86,
        c: 31
    }, {
        s: 21,
        a: 87,
        c: 83
    }, {
        s: 21,
        a: 88,
        c: 40
    }, {
        s: 21,
        a: 89,
        c: 43
    }, {
        s: 21,
        a: 90,
        c: 92
    }, {
        s: 21,
        a: 91,
        c: 57
    }, {
        s: 21,
        a: 92,
        c: 33
    }, {
        s: 21,
        a: 93,
        c: 30
    }, {
        s: 21,
        a: 94,
        c: 49
    }, {
        s: 21,
        a: 95,
        c: 32
    }, {
        s: 21,
        a: 96,
        c: 37
    }, {
        s: 21,
        a: 97,
        c: 75
    }, {
        s: 21,
        a: 98,
        c: 42
    }, {
        s: 21,
        a: 99,
        c: 35
    }, {
        s: 21,
        a: 100,
        c: 26
    }, {
        s: 21,
        a: 101,
        c: 38
    }, {
        s: 21,
        a: 102,
        c: 38
    }, {
        s: 21,
        a: 103,
        c: 57
    }, {
        s: 21,
        a: 104,
        c: 66
    }, {
        s: 21,
        a: 105,
        c: 52
    }, {
        s: 21,
        a: 106,
        c: 23
    }, {
        s: 21,
        a: 107,
        c: 25
    }, {
        s: 21,
        a: 108,
        c: 42
    }, {
        s: 21,
        a: 109,
        c: 50
    }, {
        s: 21,
        a: 110,
        c: 32
    }, {
        s: 21,
        a: 111,
        c: 29
    }, {
        s: 21,
        a: 112,
        c: 43
    }, {
        s: 22,
        a: 1,
        c: 40
    }, {
        s: 22,
        a: 2,
        c: 86
    }, {
        s: 22,
        a: 3,
        c: 44
    }, {
        s: 22,
        a: 4,
        c: 44
    }, {
        s: 22,
        a: 5,
        c: 262
    }, {
        s: 22,
        a: 6,
        c: 46
    }, {
        s: 22,
        a: 7,
        c: 43
    }, {
        s: 22,
        a: 8,
        c: 45
    }, {
        s: 22,
        a: 9,
        c: 61
    }, {
        s: 22,
        a: 10,
        c: 35
    }, {
        s: 22,
        a: 11,
        c: 101
    }, {
        s: 22,
        a: 12,
        c: 48
    }, {
        s: 22,
        a: 13,
        c: 41
    }, {
        s: 22,
        a: 14,
        c: 72
    }, {
        s: 22,
        a: 15,
        c: 85
    }, {
        s: 22,
        a: 16,
        c: 38
    }, {
        s: 22,
        a: 17,
        c: 102
    }, {
        s: 22,
        a: 18,
        c: 144
    }, {
        s: 22,
        a: 19,
        c: 69
    }, {
        s: 22,
        a: 20,
        c: 23
    }, {
        s: 22,
        a: 21,
        c: 15
    }, {
        s: 22,
        a: 22,
        c: 52
    }, {
        s: 22,
        a: 23,
        c: 98
    }, {
        s: 22,
        a: 24,
        c: 38
    }, {
        s: 22,
        a: 25,
        c: 108
    }, {
        s: 22,
        a: 26,
        c: 76
    }, {
        s: 22,
        a: 27,
        c: 51
    }, {
        s: 22,
        a: 28,
        c: 94
    }, {
        s: 22,
        a: 29,
        c: 46
    }, {
        s: 22,
        a: 30,
        c: 100
    }, {
        s: 22,
        a: 31,
        c: 81
    }, {
        s: 22,
        a: 32,
        c: 36
    }, {
        s: 22,
        a: 33,
        c: 43
    }, {
        s: 22,
        a: 34,
        c: 89
    }, {
        s: 22,
        a: 35,
        c: 76
    }, {
        s: 22,
        a: 36,
        c: 128
    }, {
        s: 22,
        a: 37,
        c: 89
    }, {
        s: 22,
        a: 38,
        c: 44
    }, {
        s: 22,
        a: 39,
        c: 45
    }, {
        s: 22,
        a: 40,
        c: 148
    }, {
        s: 22,
        a: 41,
        c: 85
    }, {
        s: 22,
        a: 42,
        c: 36
    }, {
        s: 22,
        a: 43,
        c: 18
    }, {
        s: 22,
        a: 44,
        c: 51
    }, {
        s: 22,
        a: 45,
        c: 61
    }, {
        s: 22,
        a: 46,
        c: 97
    }, {
        s: 22,
        a: 47,
        c: 60
    }, {
        s: 22,
        a: 48,
        c: 45
    }, {
        s: 22,
        a: 49,
        c: 31
    }, {
        s: 22,
        a: 50,
        c: 41
    }, {
        s: 22,
        a: 51,
        c: 41
    }, {
        s: 22,
        a: 52,
        c: 106
    }, {
        s: 22,
        a: 53,
        c: 74
    }, {
        s: 22,
        a: 54,
        c: 89
    }, {
        s: 22,
        a: 55,
        c: 64
    }, {
        s: 22,
        a: 56,
        c: 59
    }, {
        s: 22,
        a: 57,
        c: 41
    }, {
        s: 22,
        a: 58,
        c: 77
    }, {
        s: 22,
        a: 59,
        c: 35
    }, {
        s: 22,
        a: 60,
        c: 56
    }, {
        s: 22,
        a: 61,
        c: 60
    }, {
        s: 22,
        a: 62,
        c: 60
    }, {
        s: 22,
        a: 63,
        c: 55
    }, {
        s: 22,
        a: 64,
        c: 45
    }, {
        s: 22,
        a: 65,
        c: 101
    }, {
        s: 22,
        a: 66,
        c: 43
    }, {
        s: 22,
        a: 67,
        c: 67
    }, {
        s: 22,
        a: 68,
        c: 29
    }, {
        s: 22,
        a: 69,
        c: 41
    }, {
        s: 22,
        a: 70,
        c: 60
    }, {
        s: 22,
        a: 71,
        c: 63
    }, {
        s: 22,
        a: 72,
        c: 136
    }, {
        s: 22,
        a: 73,
        c: 122
    }, {
        s: 22,
        a: 74,
        c: 31
    }, {
        s: 22,
        a: 75,
        c: 45
    }, {
        s: 22,
        a: 76,
        c: 41
    }, {
        s: 22,
        a: 77,
        c: 63
    }, {
        s: 22,
        a: 78,
        c: 199
    }, {
        s: 23,
        a: 1,
        c: 14
    }, {
        s: 23,
        a: 2,
        c: 21
    }, {
        s: 23,
        a: 3,
        c: 21
    }, {
        s: 23,
        a: 4,
        c: 20
    }, {
        s: 23,
        a: 5,
        c: 21
    }, {
        s: 23,
        a: 6,
        c: 42
    }, {
        s: 23,
        a: 7,
        c: 30
    }, {
        s: 23,
        a: 8,
        c: 28
    }, {
        s: 23,
        a: 9,
        c: 25
    }, {
        s: 23,
        a: 10,
        c: 15
    }, {
        s: 23,
        a: 11,
        c: 29
    }, {
        s: 23,
        a: 12,
        c: 28
    }, {
        s: 23,
        a: 13,
        c: 22
    }, {
        s: 23,
        a: 14,
        c: 104
    }, {
        s: 23,
        a: 15,
        c: 18
    }, {
        s: 23,
        a: 16,
        c: 22
    }, {
        s: 23,
        a: 17,
        c: 41
    }, {
        s: 23,
        a: 18,
        c: 56
    }, {
        s: 23,
        a: 19,
        c: 56
    }, {
        s: 23,
        a: 20,
        c: 40
    }, {
        s: 23,
        a: 21,
        c: 66
    }, {
        s: 23,
        a: 22,
        c: 21
    }, {
        s: 23,
        a: 23,
        c: 63
    }, {
        s: 23,
        a: 24,
        c: 104
    }, {
        s: 23,
        a: 25,
        c: 30
    }, {
        s: 23,
        a: 26,
        c: 19
    }, {
        s: 23,
        a: 27,
        c: 138
    }, {
        s: 23,
        a: 28,
        c: 62
    }, {
        s: 23,
        a: 29,
        c: 37
    }, {
        s: 23,
        a: 30,
        c: 25
    }, {
        s: 23,
        a: 31,
        c: 24
    }, {
        s: 23,
        a: 32,
        c: 55
    }, {
        s: 23,
        a: 33,
        c: 111
    }, {
        s: 23,
        a: 34,
        c: 32
    }, {
        s: 23,
        a: 35,
        c: 42
    }, {
        s: 23,
        a: 36,
        c: 19
    }, {
        s: 23,
        a: 37,
        c: 42
    }, {
        s: 23,
        a: 38,
        c: 41
    }, {
        s: 23,
        a: 39,
        c: 19
    }, {
        s: 23,
        a: 40,
        c: 22
    }, {
        s: 23,
        a: 41,
        c: 48
    }, {
        s: 23,
        a: 42,
        c: 25
    }, {
        s: 23,
        a: 43,
        c: 27
    }, {
        s: 23,
        a: 44,
        c: 85
    }, {
        s: 23,
        a: 45,
        c: 39
    }, {
        s: 23,
        a: 46,
        c: 37
    }, {
        s: 23,
        a: 47,
        c: 38
    }, {
        s: 23,
        a: 48,
        c: 24
    }, {
        s: 23,
        a: 49,
        c: 30
    }, {
        s: 23,
        a: 50,
        c: 48
    }, {
        s: 23,
        a: 51,
        c: 52
    }, {
        s: 23,
        a: 52,
        c: 33
    }, {
        s: 23,
        a: 53,
        c: 39
    }, {
        s: 23,
        a: 54,
        c: 19
    }, {
        s: 23,
        a: 55,
        c: 28
    }, {
        s: 23,
        a: 56,
        c: 27
    }, {
        s: 23,
        a: 57,
        c: 25
    }, {
        s: 23,
        a: 58,
        c: 23
    }, {
        s: 23,
        a: 59,
        c: 21
    }, {
        s: 23,
        a: 60,
        c: 45
    }, {
        s: 23,
        a: 61,
        c: 33
    }, {
        s: 23,
        a: 62,
        c: 49
    }, {
        s: 23,
        a: 63,
        c: 47
    }, {
        s: 23,
        a: 64,
        c: 36
    }, {
        s: 23,
        a: 65,
        c: 28
    }, {
        s: 23,
        a: 66,
        c: 41
    }, {
        s: 23,
        a: 67,
        c: 21
    }, {
        s: 23,
        a: 68,
        c: 42
    }, {
        s: 23,
        a: 69,
        c: 27
    }, {
        s: 23,
        a: 70,
        c: 42
    }, {
        s: 23,
        a: 71,
        c: 75
    }, {
        s: 23,
        a: 72,
        c: 37
    }, {
        s: 23,
        a: 73,
        c: 24
    }, {
        s: 23,
        a: 74,
        c: 38
    }, {
        s: 23,
        a: 75,
        c: 45
    }, {
        s: 23,
        a: 76,
        c: 44
    }, {
        s: 23,
        a: 77,
        c: 44
    }, {
        s: 23,
        a: 78,
        c: 48
    }, {
        s: 23,
        a: 79,
        c: 30
    }, {
        s: 23,
        a: 80,
        c: 47
    }, {
        s: 23,
        a: 81,
        c: 22
    }, {
        s: 23,
        a: 82,
        c: 40
    }, {
        s: 23,
        a: 83,
        c: 47
    }, {
        s: 23,
        a: 84,
        c: 29
    }, {
        s: 23,
        a: 85,
        c: 22
    }, {
        s: 23,
        a: 86,
        c: 33
    }, {
        s: 23,
        a: 87,
        c: 21
    }, {
        s: 23,
        a: 88,
        c: 48
    }, {
        s: 23,
        a: 89,
        c: 22
    }, {
        s: 23,
        a: 90,
        c: 26
    }, {
        s: 23,
        a: 91,
        c: 80
    }, {
        s: 23,
        a: 92,
        c: 32
    }, {
        s: 23,
        a: 93,
        c: 20
    }, {
        s: 23,
        a: 94,
        c: 26
    }, {
        s: 23,
        a: 95,
        c: 27
    }, {
        s: 23,
        a: 96,
        c: 36
    }, {
        s: 23,
        a: 97,
        c: 26
    }, {
        s: 23,
        a: 98,
        c: 17
    }, {
        s: 23,
        a: 99,
        c: 30
    }, {
        s: 23,
        a: 100,
        c: 65
    }, {
        s: 23,
        a: 101,
        c: 43
    }, {
        s: 23,
        a: 102,
        c: 30
    }, {
        s: 23,
        a: 103,
        c: 47
    }, {
        s: 23,
        a: 104,
        c: 28
    }, {
        s: 23,
        a: 105,
        c: 34
    }, {
        s: 23,
        a: 106,
        c: 37
    }, {
        s: 23,
        a: 107,
        c: 31
    }, {
        s: 23,
        a: 108,
        c: 22
    }, {
        s: 23,
        a: 109,
        c: 61
    }, {
        s: 23,
        a: 110,
        c: 43
    }, {
        s: 23,
        a: 111,
        c: 36
    }, {
        s: 23,
        a: 112,
        c: 24
    }, {
        s: 23,
        a: 113,
        c: 34
    }, {
        s: 23,
        a: 114,
        c: 34
    }, {
        s: 23,
        a: 115,
        c: 40
    }, {
        s: 23,
        a: 116,
        c: 42
    }, {
        s: 23,
        a: 117,
        c: 63
    }, {
        s: 23,
        a: 118,
        c: 29
    }, {
        s: 24,
        a: 1,
        c: 51
    }, {
        s: 24,
        a: 2,
        c: 122
    }, {
        s: 24,
        a: 3,
        c: 73
    }, {
        s: 24,
        a: 4,
        c: 94
    }, {
        s: 24,
        a: 5,
        c: 43
    }, {
        s: 24,
        a: 6,
        c: 81
    }, {
        s: 24,
        a: 7,
        c: 37
    }, {
        s: 24,
        a: 8,
        c: 50
    }, {
        s: 24,
        a: 9,
        c: 37
    }, {
        s: 24,
        a: 10,
        c: 38
    }, {
        s: 24,
        a: 11,
        c: 102
    }, {
        s: 24,
        a: 12,
        c: 59
    }, {
        s: 24,
        a: 13,
        c: 65
    }, {
        s: 24,
        a: 14,
        c: 63
    }, {
        s: 24,
        a: 15,
        c: 70
    }, {
        s: 24,
        a: 16,
        c: 56
    }, {
        s: 24,
        a: 17,
        c: 38
    }, {
        s: 24,
        a: 18,
        c: 31
    }, {
        s: 24,
        a: 19,
        c: 85
    }, {
        s: 24,
        a: 20,
        c: 38
    }, {
        s: 24,
        a: 21,
        c: 150
    }, {
        s: 24,
        a: 22,
        c: 121
    }, {
        s: 24,
        a: 23,
        c: 68
    }, {
        s: 24,
        a: 24,
        c: 47
    }, {
        s: 24,
        a: 25,
        c: 49
    }, {
        s: 24,
        a: 26,
        c: 99
    }, {
        s: 24,
        a: 27,
        c: 85
    }, {
        s: 24,
        a: 28,
        c: 87
    }, {
        s: 24,
        a: 29,
        c: 70
    }, {
        s: 24,
        a: 30,
        c: 66
    }, {
        s: 24,
        a: 31,
        c: 350
    }, {
        s: 24,
        a: 32,
        c: 83
    }, {
        s: 24,
        a: 33,
        c: 217
    }, {
        s: 24,
        a: 34,
        c: 61
    }, {
        s: 24,
        a: 35,
        c: 203
    }, {
        s: 24,
        a: 36,
        c: 55
    }, {
        s: 24,
        a: 37,
        c: 87
    }, {
        s: 24,
        a: 38,
        c: 58
    }, {
        s: 24,
        a: 39,
        c: 99
    }, {
        s: 24,
        a: 40,
        c: 108
    }, {
        s: 24,
        a: 41,
        c: 83
    }, {
        s: 24,
        a: 42,
        c: 35
    }, {
        s: 24,
        a: 43,
        c: 140
    }, {
        s: 24,
        a: 44,
        c: 44
    }, {
        s: 24,
        a: 45,
        c: 106
    }, {
        s: 24,
        a: 46,
        c: 47
    }, {
        s: 24,
        a: 47,
        c: 70
    }, {
        s: 24,
        a: 48,
        c: 48
    }, {
        s: 24,
        a: 49,
        c: 28
    }, {
        s: 24,
        a: 50,
        c: 67
    }, {
        s: 24,
        a: 51,
        c: 83
    }, {
        s: 24,
        a: 52,
        c: 45
    }, {
        s: 24,
        a: 53,
        c: 76
    }, {
        s: 24,
        a: 54,
        c: 102
    }, {
        s: 24,
        a: 55,
        c: 173
    }, {
        s: 24,
        a: 56,
        c: 48
    }, {
        s: 24,
        a: 57,
        c: 53
    }, {
        s: 24,
        a: 58,
        c: 219
    }, {
        s: 24,
        a: 59,
        c: 87
    }, {
        s: 24,
        a: 60,
        c: 103
    }, {
        s: 24,
        a: 61,
        c: 315
    }, {
        s: 24,
        a: 62,
        c: 180
    }, {
        s: 24,
        a: 63,
        c: 120
    }, {
        s: 24,
        a: 64,
        c: 86
    }, {
        s: 25,
        a: 1,
        c: 44
    }, {
        s: 25,
        a: 2,
        c: 73
    }, {
        s: 25,
        a: 3,
        c: 92
    }, {
        s: 25,
        a: 4,
        c: 66
    }, {
        s: 25,
        a: 5,
        c: 47
    }, {
        s: 25,
        a: 6,
        c: 51
    }, {
        s: 25,
        a: 7,
        c: 70
    }, {
        s: 25,
        a: 8,
        c: 65
    }, {
        s: 25,
        a: 9,
        c: 42
    }, {
        s: 25,
        a: 10,
        c: 62
    }, {
        s: 25,
        a: 11,
        c: 39
    }, {
        s: 25,
        a: 12,
        c: 37
    }, {
        s: 25,
        a: 13,
        c: 42
    }, {
        s: 25,
        a: 14,
        c: 38
    }, {
        s: 25,
        a: 15,
        c: 50
    }, {
        s: 25,
        a: 16,
        c: 40
    }, {
        s: 25,
        a: 17,
        c: 68
    }, {
        s: 25,
        a: 18,
        c: 87
    }, {
        s: 25,
        a: 19,
        c: 65
    }, {
        s: 25,
        a: 20,
        c: 96
    }, {
        s: 25,
        a: 21,
        c: 85
    }, {
        s: 25,
        a: 22,
        c: 51
    }, {
        s: 25,
        a: 23,
        c: 38
    }, {
        s: 25,
        a: 24,
        c: 34
    }, {
        s: 25,
        a: 25,
        c: 39
    }, {
        s: 25,
        a: 26,
        c: 44
    }, {
        s: 25,
        a: 27,
        c: 49
    }, {
        s: 25,
        a: 28,
        c: 28
    }, {
        s: 25,
        a: 29,
        c: 48
    }, {
        s: 25,
        a: 30,
        c: 41
    }, {
        s: 25,
        a: 31,
        c: 49
    }, {
        s: 25,
        a: 32,
        c: 69
    }, {
        s: 25,
        a: 33,
        c: 37
    }, {
        s: 25,
        a: 34,
        c: 48
    }, {
        s: 25,
        a: 35,
        c: 42
    }, {
        s: 25,
        a: 36,
        c: 49
    }, {
        s: 25,
        a: 37,
        c: 69
    }, {
        s: 25,
        a: 38,
        c: 37
    }, {
        s: 25,
        a: 39,
        c: 33
    }, {
        s: 25,
        a: 40,
        c: 69
    }, {
        s: 25,
        a: 41,
        c: 44
    }, {
        s: 25,
        a: 42,
        c: 68
    }, {
        s: 25,
        a: 43,
        c: 37
    }, {
        s: 25,
        a: 44,
        c: 55
    }, {
        s: 25,
        a: 45,
        c: 57
    }, {
        s: 25,
        a: 46,
        c: 22
    }, {
        s: 25,
        a: 47,
        c: 49
    }, {
        s: 25,
        a: 48,
        c: 55
    }, {
        s: 25,
        a: 49,
        c: 46
    }, {
        s: 25,
        a: 50,
        c: 43
    }, {
        s: 25,
        a: 51,
        c: 26
    }, {
        s: 25,
        a: 52,
        c: 33
    }, {
        s: 25,
        a: 53,
        c: 64
    }, {
        s: 25,
        a: 54,
        c: 47
    }, {
        s: 25,
        a: 55,
        c: 55
    }, {
        s: 25,
        a: 56,
        c: 24
    }, {
        s: 25,
        a: 57,
        c: 44
    }, {
        s: 25,
        a: 58,
        c: 52
    }, {
        s: 25,
        a: 59,
        c: 72
    }, {
        s: 25,
        a: 60,
        c: 61
    }, {
        s: 25,
        a: 61,
        c: 48
    }, {
        s: 25,
        a: 62,
        c: 50
    }, {
        s: 25,
        a: 63,
        c: 61
    }, {
        s: 25,
        a: 64,
        c: 27
    }, {
        s: 25,
        a: 65,
        c: 47
    }, {
        s: 25,
        a: 66,
        c: 20
    }, {
        s: 25,
        a: 67,
        c: 47
    }, {
        s: 25,
        a: 68,
        c: 85
    }, {
        s: 25,
        a: 69,
        c: 36
    }, {
        s: 25,
        a: 70,
        c: 69
    }, {
        s: 25,
        a: 71,
        c: 35
    }, {
        s: 25,
        a: 72,
        c: 42
    }, {
        s: 25,
        a: 73,
        c: 45
    }, {
        s: 25,
        a: 74,
        c: 64
    }, {
        s: 25,
        a: 75,
        c: 44
    }, {
        s: 25,
        a: 76,
        c: 26
    }, {
        s: 25,
        a: 77,
        c: 45
    }, {
        s: 26,
        a: 1,
        c: 3
    }, {
        s: 26,
        a: 2,
        c: 19
    }, {
        s: 26,
        a: 3,
        c: 27
    }, {
        s: 26,
        a: 4,
        c: 45
    }, {
        s: 26,
        a: 5,
        c: 43
    }, {
        s: 26,
        a: 6,
        c: 38
    }, {
        s: 26,
        a: 7,
        c: 39
    }, {
        s: 26,
        a: 8,
        c: 29
    }, {
        s: 26,
        a: 9,
        c: 21
    }, {
        s: 26,
        a: 10,
        c: 32
    }, {
        s: 26,
        a: 11,
        c: 16
    }, {
        s: 26,
        a: 12,
        c: 20
    }, {
        s: 26,
        a: 13,
        c: 35
    }, {
        s: 26,
        a: 14,
        c: 23
    }, {
        s: 26,
        a: 15,
        c: 33
    }, {
        s: 26,
        a: 16,
        c: 32
    }, {
        s: 26,
        a: 17,
        c: 20
    }, {
        s: 26,
        a: 18,
        c: 38
    }, {
        s: 26,
        a: 19,
        c: 32
    }, {
        s: 26,
        a: 20,
        c: 25
    }, {
        s: 26,
        a: 21,
        c: 46
    }, {
        s: 26,
        a: 22,
        c: 32
    }, {
        s: 26,
        a: 23,
        c: 21
    }, {
        s: 26,
        a: 24,
        c: 40
    }, {
        s: 26,
        a: 25,
        c: 20
    }, {
        s: 26,
        a: 26,
        c: 23
    }, {
        s: 26,
        a: 27,
        c: 30
    }, {
        s: 26,
        a: 28,
        c: 39
    }, {
        s: 26,
        a: 29,
        c: 37
    }, {
        s: 26,
        a: 30,
        c: 19
    }, {
        s: 26,
        a: 31,
        c: 23
    }, {
        s: 26,
        a: 32,
        c: 24
    }, {
        s: 26,
        a: 33,
        c: 26
    }, {
        s: 26,
        a: 34,
        c: 26
    }, {
        s: 26,
        a: 35,
        c: 35
    }, {
        s: 26,
        a: 36,
        c: 34
    }, {
        s: 26,
        a: 37,
        c: 16
    }, {
        s: 26,
        a: 38,
        c: 24
    }, {
        s: 26,
        a: 39,
        c: 22
    }, {
        s: 26,
        a: 40,
        c: 32
    }, {
        s: 26,
        a: 41,
        c: 51
    }, {
        s: 26,
        a: 42,
        c: 25
    }, {
        s: 26,
        a: 43,
        c: 26
    }, {
        s: 26,
        a: 44,
        c: 48
    }, {
        s: 26,
        a: 45,
        c: 31
    }, {
        s: 26,
        a: 46,
        c: 17
    }, {
        s: 26,
        a: 47,
        c: 20
    }, {
        s: 26,
        a: 48,
        c: 12
    }, {
        s: 26,
        a: 49,
        c: 96
    }, {
        s: 26,
        a: 50,
        c: 27
    }, {
        s: 26,
        a: 51,
        c: 43
    }, {
        s: 26,
        a: 52,
        c: 35
    }, {
        s: 26,
        a: 53,
        c: 25
    }, {
        s: 26,
        a: 54,
        c: 19
    }, {
        s: 26,
        a: 55,
        c: 15
    }, {
        s: 26,
        a: 56,
        c: 15
    }, {
        s: 26,
        a: 57,
        c: 20
    }, {
        s: 26,
        a: 58,
        c: 14
    }, {
        s: 26,
        a: 59,
        c: 23
    }, {
        s: 26,
        a: 60,
        c: 14
    }, {
        s: 26,
        a: 61,
        c: 38
    }, {
        s: 26,
        a: 62,
        c: 20
    }, {
        s: 26,
        a: 63,
        c: 57
    }, {
        s: 26,
        a: 64,
        c: 16
    }, {
        s: 26,
        a: 65,
        c: 23
    }, {
        s: 26,
        a: 66,
        c: 15
    }, {
        s: 26,
        a: 67,
        c: 29
    }, {
        s: 26,
        a: 68,
        c: 21
    }, {
        s: 26,
        a: 69,
        c: 19
    }, {
        s: 26,
        a: 70,
        c: 23
    }, {
        s: 26,
        a: 71,
        c: 28
    }, {
        s: 26,
        a: 72,
        c: 20
    }, {
        s: 26,
        a: 73,
        c: 17
    }, {
        s: 26,
        a: 74,
        c: 28
    }, {
        s: 26,
        a: 75,
        c: 22
    }, {
        s: 26,
        a: 76,
        c: 19
    }, {
        s: 26,
        a: 77,
        c: 23
    }, {
        s: 26,
        a: 78,
        c: 17
    }, {
        s: 26,
        a: 79,
        c: 19
    }, {
        s: 26,
        a: 80,
        c: 16
    }, {
        s: 26,
        a: 81,
        c: 18
    }, {
        s: 26,
        a: 82,
        c: 31
    }, {
        s: 26,
        a: 83,
        c: 26
    }, {
        s: 26,
        a: 84,
        c: 23
    }, {
        s: 26,
        a: 85,
        c: 22
    }, {
        s: 26,
        a: 86,
        c: 24
    }, {
        s: 26,
        a: 87,
        c: 17
    }, {
        s: 26,
        a: 88,
        c: 19
    }, {
        s: 26,
        a: 89,
        c: 20
    }, {
        s: 26,
        a: 90,
        c: 18
    }, {
        s: 26,
        a: 91,
        c: 18
    }, {
        s: 26,
        a: 92,
        c: 22
    }, {
        s: 26,
        a: 93,
        c: 28
    }, {
        s: 26,
        a: 94,
        c: 21
    }, {
        s: 26,
        a: 95,
        c: 16
    }, {
        s: 26,
        a: 96,
        c: 19
    }, {
        s: 26,
        a: 97,
        c: 21
    }, {
        s: 26,
        a: 98,
        c: 19
    }, {
        s: 26,
        a: 99,
        c: 19
    }, {
        s: 26,
        a: 100,
        c: 14
    }, {
        s: 26,
        a: 101,
        c: 11
    }, {
        s: 26,
        a: 102,
        c: 26
    }, {
        s: 26,
        a: 103,
        c: 29
    }, {
        s: 26,
        a: 104,
        c: 21
    }, {
        s: 26,
        a: 105,
        c: 18
    }, {
        s: 26,
        a: 106,
        c: 24
    }, {
        s: 26,
        a: 107,
        c: 14
    }, {
        s: 26,
        a: 108,
        c: 17
    }, {
        s: 26,
        a: 109,
        c: 40
    }, {
        s: 26,
        a: 110,
        c: 17
    }, {
        s: 26,
        a: 111,
        c: 26
    }, {
        s: 26,
        a: 112,
        c: 24
    }, {
        s: 26,
        a: 113,
        c: 25
    }, {
        s: 26,
        a: 114,
        c: 19
    }, {
        s: 26,
        a: 115,
        c: 16
    }, {
        s: 26,
        a: 116,
        c: 36
    }, {
        s: 26,
        a: 117,
        c: 16
    }, {
        s: 26,
        a: 118,
        c: 40
    }, {
        s: 26,
        a: 119,
        c: 28
    }, {
        s: 26,
        a: 120,
        c: 18
    }, {
        s: 26,
        a: 121,
        c: 29
    }, {
        s: 26,
        a: 122,
        c: 21
    }, {
        s: 26,
        a: 123,
        c: 15
    }, {
        s: 26,
        a: 124,
        c: 24
    }, {
        s: 26,
        a: 125,
        c: 14
    }, {
        s: 26,
        a: 126,
        c: 17
    }, {
        s: 26,
        a: 127,
        c: 40
    }, {
        s: 26,
        a: 128,
        c: 21
    }, {
        s: 26,
        a: 129,
        c: 23
    }, {
        s: 26,
        a: 130,
        c: 20
    }, {
        s: 26,
        a: 131,
        c: 17
    }, {
        s: 26,
        a: 132,
        c: 24
    }, {
        s: 26,
        a: 133,
        c: 16
    }, {
        s: 26,
        a: 134,
        c: 10
    }, {
        s: 26,
        a: 135,
        c: 23
    }, {
        s: 26,
        a: 136,
        c: 36
    }, {
        s: 26,
        a: 137,
        c: 18
    }, {
        s: 26,
        a: 138,
        c: 13
    }, {
        s: 26,
        a: 139,
        c: 44
    }, {
        s: 26,
        a: 140,
        c: 21
    }, {
        s: 26,
        a: 141,
        c: 16
    }, {
        s: 26,
        a: 142,
        c: 25
    }, {
        s: 26,
        a: 143,
        c: 14
    }, {
        s: 26,
        a: 144,
        c: 17
    }, {
        s: 26,
        a: 145,
        c: 40
    }, {
        s: 26,
        a: 146,
        c: 21
    }, {
        s: 26,
        a: 147,
        c: 11
    }, {
        s: 26,
        a: 148,
        c: 18
    }, {
        s: 26,
        a: 149,
        c: 26
    }, {
        s: 26,
        a: 150,
        c: 17
    }, {
        s: 26,
        a: 151,
        c: 20
    }, {
        s: 26,
        a: 152,
        c: 27
    }, {
        s: 26,
        a: 153,
        c: 22
    }, {
        s: 26,
        a: 154,
        c: 38
    }, {
        s: 26,
        a: 155,
        c: 31
    }, {
        s: 26,
        a: 156,
        c: 31
    }, {
        s: 26,
        a: 157,
        c: 20
    }, {
        s: 26,
        a: 158,
        c: 41
    }, {
        s: 26,
        a: 159,
        c: 21
    }, {
        s: 26,
        a: 160,
        c: 18
    }, {
        s: 26,
        a: 161,
        c: 24
    }, {
        s: 26,
        a: 162,
        c: 14
    }, {
        s: 26,
        a: 163,
        c: 17
    }, {
        s: 26,
        a: 164,
        c: 40
    }, {
        s: 26,
        a: 165,
        c: 23
    }, {
        s: 26,
        a: 166,
        c: 41
    }, {
        s: 26,
        a: 167,
        c: 35
    }, {
        s: 26,
        a: 168,
        c: 21
    }, {
        s: 26,
        a: 169,
        c: 20
    }, {
        s: 26,
        a: 170,
        c: 18
    }, {
        s: 26,
        a: 171,
        c: 18
    }, {
        s: 26,
        a: 172,
        c: 14
    }, {
        s: 26,
        a: 173,
        c: 31
    }, {
        s: 26,
        a: 174,
        c: 29
    }, {
        s: 26,
        a: 175,
        c: 21
    }, {
        s: 26,
        a: 176,
        c: 22
    }, {
        s: 26,
        a: 177,
        c: 20
    }, {
        s: 26,
        a: 178,
        c: 14
    }, {
        s: 26,
        a: 179,
        c: 17
    }, {
        s: 26,
        a: 180,
        c: 40
    }, {
        s: 26,
        a: 181,
        c: 29
    }, {
        s: 26,
        a: 182,
        c: 21
    }, {
        s: 26,
        a: 183,
        c: 42
    }, {
        s: 26,
        a: 184,
        c: 29
    }, {
        s: 26,
        a: 185,
        c: 22
    }, {
        s: 26,
        a: 186,
        c: 35
    }, {
        s: 26,
        a: 187,
        c: 37
    }, {
        s: 26,
        a: 188,
        c: 19
    }, {
        s: 26,
        a: 189,
        c: 41
    }, {
        s: 26,
        a: 190,
        c: 29
    }, {
        s: 26,
        a: 191,
        c: 21
    }, {
        s: 26,
        a: 192,
        c: 20
    }, {
        s: 26,
        a: 193,
        c: 16
    }, {
        s: 26,
        a: 194,
        c: 22
    }, {
        s: 26,
        a: 195,
        c: 13
    }, {
        s: 26,
        a: 196,
        c: 17
    }, {
        s: 26,
        a: 197,
        c: 35
    }, {
        s: 26,
        a: 198,
        c: 23
    }, {
        s: 26,
        a: 199,
        c: 25
    }, {
        s: 26,
        a: 200,
        c: 24
    }, {
        s: 26,
        a: 201,
        c: 29
    }, {
        s: 26,
        a: 202,
        c: 22
    }, {
        s: 26,
        a: 203,
        c: 18
    }, {
        s: 26,
        a: 204,
        c: 17
    }, {
        s: 26,
        a: 205,
        c: 19
    }, {
        s: 26,
        a: 206,
        c: 20
    }, {
        s: 26,
        a: 207,
        c: 23
    }, {
        s: 26,
        a: 208,
        c: 27
    }, {
        s: 26,
        a: 209,
        c: 16
    }, {
        s: 26,
        a: 210,
        c: 18
    }, {
        s: 26,
        a: 211,
        c: 22
    }, {
        s: 26,
        a: 212,
        c: 19
    }, {
        s: 26,
        a: 213,
        c: 34
    }, {
        s: 26,
        a: 214,
        c: 19
    }, {
        s: 26,
        a: 215,
        c: 28
    }, {
        s: 26,
        a: 216,
        c: 26
    }, {
        s: 26,
        a: 217,
        c: 20
    }, {
        s: 26,
        a: 218,
        c: 15
    }, {
        s: 26,
        a: 219,
        c: 16
    }, {
        s: 26,
        a: 220,
        c: 17
    }, {
        s: 26,
        a: 221,
        c: 25
    }, {
        s: 26,
        a: 222,
        c: 17
    }, {
        s: 26,
        a: 223,
        c: 23
    }, {
        s: 26,
        a: 224,
        c: 21
    }, {
        s: 26,
        a: 225,
        c: 22
    }, {
        s: 26,
        a: 226,
        c: 21
    }, {
        s: 26,
        a: 227,
        c: 92
    }, {
        s: 27,
        a: 1,
        c: 24
    }, {
        s: 27,
        a: 2,
        c: 16
    }, {
        s: 27,
        a: 3,
        c: 47
    }, {
        s: 27,
        a: 4,
        c: 45
    }, {
        s: 27,
        a: 5,
        c: 43
    }, {
        s: 27,
        a: 6,
        c: 28
    }, {
        s: 27,
        a: 7,
        c: 65
    }, {
        s: 27,
        a: 8,
        c: 56
    }, {
        s: 27,
        a: 9,
        c: 28
    }, {
        s: 27,
        a: 10,
        c: 74
    }, {
        s: 27,
        a: 11,
        c: 35
    }, {
        s: 27,
        a: 12,
        c: 72
    }, {
        s: 27,
        a: 13,
        c: 36
    }, {
        s: 27,
        a: 14,
        c: 58
    }, {
        s: 27,
        a: 15,
        c: 69
    }, {
        s: 27,
        a: 16,
        c: 77
    }, {
        s: 27,
        a: 17,
        c: 43
    }, {
        s: 27,
        a: 18,
        c: 85
    }, {
        s: 27,
        a: 19,
        c: 106
    }, {
        s: 27,
        a: 20,
        c: 44
    }, {
        s: 27,
        a: 21,
        c: 45
    }, {
        s: 27,
        a: 22,
        c: 47
    }, {
        s: 27,
        a: 23,
        c: 42
    }, {
        s: 27,
        a: 24,
        c: 77
    }, {
        s: 27,
        a: 25,
        c: 62
    }, {
        s: 27,
        a: 26,
        c: 27
    }, {
        s: 27,
        a: 27,
        c: 28
    }, {
        s: 27,
        a: 28,
        c: 47
    }, {
        s: 27,
        a: 29,
        c: 33
    }, {
        s: 27,
        a: 30,
        c: 15
    }, {
        s: 27,
        a: 31,
        c: 23
    }, {
        s: 27,
        a: 32,
        c: 50
    }, {
        s: 27,
        a: 33,
        c: 53
    }, {
        s: 27,
        a: 34,
        c: 61
    }, {
        s: 27,
        a: 35,
        c: 39
    }, {
        s: 27,
        a: 36,
        c: 69
    }, {
        s: 27,
        a: 37,
        c: 60
    }, {
        s: 27,
        a: 38,
        c: 47
    }, {
        s: 27,
        a: 39,
        c: 55
    }, {
        s: 27,
        a: 40,
        c: 136
    }, {
        s: 27,
        a: 41,
        c: 47
    }, {
        s: 27,
        a: 42,
        c: 59
    }, {
        s: 27,
        a: 43,
        c: 43
    }, {
        s: 27,
        a: 44,
        c: 110
    }, {
        s: 27,
        a: 45,
        c: 58
    }, {
        s: 27,
        a: 46,
        c: 61
    }, {
        s: 27,
        a: 47,
        c: 51
    }, {
        s: 27,
        a: 48,
        c: 42
    }, {
        s: 27,
        a: 49,
        c: 68
    }, {
        s: 27,
        a: 50,
        c: 31
    }, {
        s: 27,
        a: 51,
        c: 43
    }, {
        s: 27,
        a: 52,
        c: 44
    }, {
        s: 27,
        a: 53,
        c: 28
    }, {
        s: 27,
        a: 54,
        c: 39
    }, {
        s: 27,
        a: 55,
        c: 47
    }, {
        s: 27,
        a: 56,
        c: 58
    }, {
        s: 27,
        a: 57,
        c: 39
    }, {
        s: 27,
        a: 58,
        c: 31
    }, {
        s: 27,
        a: 59,
        c: 49
    }, {
        s: 27,
        a: 60,
        c: 104
    }, {
        s: 27,
        a: 61,
        c: 89
    }, {
        s: 27,
        a: 62,
        c: 70
    }, {
        s: 27,
        a: 63,
        c: 82
    }, {
        s: 27,
        a: 64,
        c: 78
    }, {
        s: 27,
        a: 65,
        c: 57
    }, {
        s: 27,
        a: 66,
        c: 44
    }, {
        s: 27,
        a: 67,
        c: 44
    }, {
        s: 27,
        a: 68,
        c: 47
    }, {
        s: 27,
        a: 69,
        c: 40
    }, {
        s: 27,
        a: 70,
        c: 32
    }, {
        s: 27,
        a: 71,
        c: 30
    }, {
        s: 27,
        a: 72,
        c: 32
    }, {
        s: 27,
        a: 73,
        c: 38
    }, {
        s: 27,
        a: 74,
        c: 31
    }, {
        s: 27,
        a: 75,
        c: 37
    }, {
        s: 27,
        a: 76,
        c: 47
    }, {
        s: 27,
        a: 77,
        c: 21
    }, {
        s: 27,
        a: 78,
        c: 34
    }, {
        s: 27,
        a: 79,
        c: 28
    }, {
        s: 27,
        a: 80,
        c: 45
    }, {
        s: 27,
        a: 81,
        c: 56
    }, {
        s: 27,
        a: 82,
        c: 70
    }, {
        s: 27,
        a: 83,
        c: 42
    }, {
        s: 27,
        a: 84,
        c: 57
    }, {
        s: 27,
        a: 85,
        c: 33
    }, {
        s: 27,
        a: 86,
        c: 64
    }, {
        s: 27,
        a: 87,
        c: 66
    }, {
        s: 27,
        a: 88,
        c: 71
    }, {
        s: 27,
        a: 89,
        c: 40
    }, {
        s: 27,
        a: 90,
        c: 52
    }, {
        s: 27,
        a: 91,
        c: 63
    }, {
        s: 27,
        a: 92,
        c: 61
    }, {
        s: 27,
        a: 93,
        c: 51
    }, {
        s: 28,
        a: 1,
        c: 3
    }, {
        s: 28,
        a: 2,
        c: 19
    }, {
        s: 28,
        a: 3,
        c: 38
    }, {
        s: 28,
        a: 4,
        c: 85
    }, {
        s: 28,
        a: 5,
        c: 59
    }, {
        s: 28,
        a: 6,
        c: 55
    }, {
        s: 28,
        a: 7,
        c: 92
    }, {
        s: 28,
        a: 8,
        c: 63
    }, {
        s: 28,
        a: 9,
        c: 67
    }, {
        s: 28,
        a: 10,
        c: 67
    }, {
        s: 28,
        a: 11,
        c: 37
    }, {
        s: 28,
        a: 12,
        c: 64
    }, {
        s: 28,
        a: 13,
        c: 65
    }, {
        s: 28,
        a: 14,
        c: 49
    }, {
        s: 28,
        a: 15,
        c: 148
    }, {
        s: 28,
        a: 16,
        c: 46
    }, {
        s: 28,
        a: 17,
        c: 36
    }, {
        s: 28,
        a: 18,
        c: 72
    }, {
        s: 28,
        a: 19,
        c: 119
    }, {
        s: 28,
        a: 20,
        c: 76
    }, {
        s: 28,
        a: 21,
        c: 42
    }, {
        s: 28,
        a: 22,
        c: 44
    }, {
        s: 28,
        a: 23,
        c: 108
    }, {
        s: 28,
        a: 24,
        c: 50
    }, {
        s: 28,
        a: 25,
        c: 106
    }, {
        s: 28,
        a: 26,
        c: 48
    }, {
        s: 28,
        a: 27,
        c: 110
    }, {
        s: 28,
        a: 28,
        c: 59
    }, {
        s: 28,
        a: 29,
        c: 109
    }, {
        s: 28,
        a: 30,
        c: 82
    }, {
        s: 28,
        a: 31,
        c: 73
    }, {
        s: 28,
        a: 32,
        c: 100
    }, {
        s: 28,
        a: 33,
        c: 33
    }, {
        s: 28,
        a: 34,
        c: 57
    }, {
        s: 28,
        a: 35,
        c: 75
    }, {
        s: 28,
        a: 36,
        c: 73
    }, {
        s: 28,
        a: 37,
        c: 69
    }, {
        s: 28,
        a: 38,
        c: 108
    }, {
        s: 28,
        a: 39,
        c: 52
    }, {
        s: 28,
        a: 40,
        c: 51
    }, {
        s: 28,
        a: 41,
        c: 44
    }, {
        s: 28,
        a: 42,
        c: 48
    }, {
        s: 28,
        a: 43,
        c: 75
    }, {
        s: 28,
        a: 44,
        c: 52
    }, {
        s: 28,
        a: 45,
        c: 81
    }, {
        s: 28,
        a: 46,
        c: 77
    }, {
        s: 28,
        a: 47,
        c: 86
    }, {
        s: 28,
        a: 48,
        c: 106
    }, {
        s: 28,
        a: 49,
        c: 49
    }, {
        s: 28,
        a: 50,
        c: 92
    }, {
        s: 28,
        a: 51,
        c: 29
    }, {
        s: 28,
        a: 52,
        c: 34
    }, {
        s: 28,
        a: 53,
        c: 55
    }, {
        s: 28,
        a: 54,
        c: 65
    }, {
        s: 28,
        a: 55,
        c: 74
    }, {
        s: 28,
        a: 56,
        c: 50
    }, {
        s: 28,
        a: 57,
        c: 97
    }, {
        s: 28,
        a: 58,
        c: 73
    }, {
        s: 28,
        a: 59,
        c: 82
    }, {
        s: 28,
        a: 60,
        c: 66
    }, {
        s: 28,
        a: 61,
        c: 75
    }, {
        s: 28,
        a: 62,
        c: 40
    }, {
        s: 28,
        a: 63,
        c: 84
    }, {
        s: 28,
        a: 64,
        c: 64
    }, {
        s: 28,
        a: 65,
        c: 33
    }, {
        s: 28,
        a: 66,
        c: 35
    }, {
        s: 28,
        a: 67,
        c: 42
    }, {
        s: 28,
        a: 68,
        c: 58
    }, {
        s: 28,
        a: 69,
        c: 28
    }, {
        s: 28,
        a: 70,
        c: 58
    }, {
        s: 28,
        a: 71,
        c: 78
    }, {
        s: 28,
        a: 72,
        c: 87
    }, {
        s: 28,
        a: 73,
        c: 62
    }, {
        s: 28,
        a: 74,
        c: 40
    }, {
        s: 28,
        a: 75,
        c: 70
    }, {
        s: 28,
        a: 76,
        c: 109
    }, {
        s: 28,
        a: 77,
        c: 105
    }, {
        s: 28,
        a: 78,
        c: 102
    }, {
        s: 28,
        a: 79,
        c: 78
    }, {
        s: 28,
        a: 80,
        c: 70
    }, {
        s: 28,
        a: 81,
        c: 65
    }, {
        s: 28,
        a: 82,
        c: 113
    }, {
        s: 28,
        a: 83,
        c: 67
    }, {
        s: 28,
        a: 84,
        c: 75
    }, {
        s: 28,
        a: 85,
        c: 66
    }, {
        s: 28,
        a: 86,
        c: 59
    }, {
        s: 28,
        a: 87,
        c: 60
    }, {
        s: 28,
        a: 88,
        c: 63
    }, {
        s: 29,
        a: 1,
        c: 3
    }, {
        s: 29,
        a: 2,
        c: 40
    }, {
        s: 29,
        a: 3,
        c: 56
    }, {
        s: 29,
        a: 4,
        c: 43
    }, {
        s: 29,
        a: 5,
        c: 45
    }, {
        s: 29,
        a: 6,
        c: 42
    }, {
        s: 29,
        a: 7,
        c: 70
    }, {
        s: 29,
        a: 8,
        c: 90
    }, {
        s: 29,
        a: 9,
        c: 43
    }, {
        s: 29,
        a: 10,
        c: 120
    }, {
        s: 29,
        a: 11,
        c: 37
    }, {
        s: 29,
        a: 12,
        c: 86
    }, {
        s: 29,
        a: 13,
        c: 61
    }, {
        s: 29,
        a: 14,
        c: 69
    }, {
        s: 29,
        a: 15,
        c: 40
    }, {
        s: 29,
        a: 16,
        c: 56
    }, {
        s: 29,
        a: 17,
        c: 118
    }, {
        s: 29,
        a: 18,
        c: 52
    }, {
        s: 29,
        a: 19,
        c: 47
    }, {
        s: 29,
        a: 20,
        c: 72
    }, {
        s: 29,
        a: 21,
        c: 32
    }, {
        s: 29,
        a: 22,
        c: 59
    }, {
        s: 29,
        a: 23,
        c: 60
    }, {
        s: 29,
        a: 24,
        c: 76
    }, {
        s: 29,
        a: 25,
        c: 117
    }, {
        s: 29,
        a: 26,
        c: 44
    }, {
        s: 29,
        a: 27,
        c: 87
    }, {
        s: 29,
        a: 28,
        c: 57
    }, {
        s: 29,
        a: 29,
        c: 103
    }, {
        s: 29,
        a: 30,
        c: 27
    }, {
        s: 29,
        a: 31,
        c: 70
    }, {
        s: 29,
        a: 32,
        c: 67
    }, {
        s: 29,
        a: 33,
        c: 90
    }, {
        s: 29,
        a: 34,
        c: 50
    }, {
        s: 29,
        a: 35,
        c: 30
    }, {
        s: 29,
        a: 36,
        c: 74
    }, {
        s: 29,
        a: 37,
        c: 39
    }, {
        s: 29,
        a: 38,
        c: 77
    }, {
        s: 29,
        a: 39,
        c: 69
    }, {
        s: 29,
        a: 40,
        c: 124
    }, {
        s: 29,
        a: 41,
        c: 88
    }, {
        s: 29,
        a: 42,
        c: 43
    }, {
        s: 29,
        a: 43,
        c: 42
    }, {
        s: 29,
        a: 44,
        c: 45
    }, {
        s: 29,
        a: 45,
        c: 89
    }, {
        s: 29,
        a: 46,
        c: 112
    }, {
        s: 29,
        a: 47,
        c: 89
    }, {
        s: 29,
        a: 48,
        c: 52
    }, {
        s: 29,
        a: 49,
        c: 59
    }, {
        s: 29,
        a: 50,
        c: 62
    }, {
        s: 29,
        a: 51,
        c: 64
    }, {
        s: 29,
        a: 52,
        c: 91
    }, {
        s: 29,
        a: 53,
        c: 65
    }, {
        s: 29,
        a: 54,
        c: 38
    }, {
        s: 29,
        a: 55,
        c: 56
    }, {
        s: 29,
        a: 56,
        c: 40
    }, {
        s: 29,
        a: 57,
        c: 28
    }, {
        s: 29,
        a: 58,
        c: 86
    }, {
        s: 29,
        a: 59,
        c: 25
    }, {
        s: 29,
        a: 60,
        c: 53
    }, {
        s: 29,
        a: 61,
        c: 64
    }, {
        s: 29,
        a: 62,
        c: 50
    }, {
        s: 29,
        a: 63,
        c: 84
    }, {
        s: 29,
        a: 64,
        c: 65
    }, {
        s: 29,
        a: 65,
        c: 64
    }, {
        s: 29,
        a: 66,
        c: 36
    }, {
        s: 29,
        a: 67,
        c: 73
    }, {
        s: 29,
        a: 68,
        c: 65
    }, {
        s: 29,
        a: 69,
        c: 47
    }, {
        s: 30,
        a: 1,
        c: 3
    }, {
        s: 30,
        a: 2,
        c: 9
    }, {
        s: 30,
        a: 3,
        c: 31
    }, {
        s: 30,
        a: 4,
        c: 46
    }, {
        s: 30,
        a: 5,
        c: 33
    }, {
        s: 30,
        a: 6,
        c: 42
    }, {
        s: 30,
        a: 7,
        c: 44
    }, {
        s: 30,
        a: 8,
        c: 98
    }, {
        s: 30,
        a: 9,
        c: 152
    }, {
        s: 30,
        a: 10,
        c: 60
    }, {
        s: 30,
        a: 11,
        c: 32
    }, {
        s: 30,
        a: 12,
        c: 26
    }, {
        s: 30,
        a: 13,
        c: 43
    }, {
        s: 30,
        a: 14,
        c: 26
    }, {
        s: 30,
        a: 15,
        c: 43
    }, {
        s: 30,
        a: 16,
        c: 58
    }, {
        s: 30,
        a: 17,
        c: 28
    }, {
        s: 30,
        a: 18,
        c: 39
    }, {
        s: 30,
        a: 19,
        c: 60
    }, {
        s: 30,
        a: 20,
        c: 40
    }, {
        s: 30,
        a: 21,
        c: 83
    }, {
        s: 30,
        a: 22,
        c: 67
    }, {
        s: 30,
        a: 23,
        c: 64
    }, {
        s: 30,
        a: 24,
        c: 85
    }, {
        s: 30,
        a: 25,
        c: 65
    }, {
        s: 30,
        a: 26,
        c: 31
    }, {
        s: 30,
        a: 27,
        c: 79
    }, {
        s: 30,
        a: 28,
        c: 113
    }, {
        s: 30,
        a: 29,
        c: 60
    }, {
        s: 30,
        a: 30,
        c: 92
    }, {
        s: 30,
        a: 31,
        c: 48
    }, {
        s: 30,
        a: 32,
        c: 45
    }, {
        s: 30,
        a: 33,
        c: 71
    }, {
        s: 30,
        a: 34,
        c: 34
    }, {
        s: 30,
        a: 35,
        c: 43
    }, {
        s: 30,
        a: 36,
        c: 62
    }, {
        s: 30,
        a: 37,
        c: 57
    }, {
        s: 30,
        a: 38,
        c: 72
    }, {
        s: 30,
        a: 39,
        c: 87
    }, {
        s: 30,
        a: 40,
        c: 85
    }, {
        s: 30,
        a: 41,
        c: 67
    }, {
        s: 30,
        a: 42,
        c: 57
    }, {
        s: 30,
        a: 43,
        c: 56
    }, {
        s: 30,
        a: 44,
        c: 39
    }, {
        s: 30,
        a: 45,
        c: 51
    }, {
        s: 30,
        a: 46,
        c: 83
    }, {
        s: 30,
        a: 47,
        c: 87
    }, {
        s: 30,
        a: 48,
        c: 115
    }, {
        s: 30,
        a: 49,
        c: 37
    }, {
        s: 30,
        a: 50,
        c: 71
    }, {
        s: 30,
        a: 51,
        c: 41
    }, {
        s: 30,
        a: 52,
        c: 46
    }, {
        s: 30,
        a: 53,
        c: 55
    }, {
        s: 30,
        a: 54,
        c: 81
    }, {
        s: 30,
        a: 55,
        c: 55
    }, {
        s: 30,
        a: 56,
        c: 86
    }, {
        s: 30,
        a: 57,
        c: 42
    }, {
        s: 30,
        a: 58,
        c: 76
    }, {
        s: 30,
        a: 59,
        c: 32
    }, {
        s: 30,
        a: 60,
        c: 39
    }, {
        s: 31,
        a: 1,
        c: 3
    }, {
        s: 31,
        a: 2,
        c: 19
    }, {
        s: 31,
        a: 3,
        c: 16
    }, {
        s: 31,
        a: 4,
        c: 47
    }, {
        s: 31,
        a: 5,
        c: 33
    }, {
        s: 31,
        a: 6,
        c: 72
    }, {
        s: 31,
        a: 7,
        c: 67
    }, {
        s: 31,
        a: 8,
        c: 39
    }, {
        s: 31,
        a: 9,
        c: 35
    }, {
        s: 31,
        a: 10,
        c: 105
    }, {
        s: 31,
        a: 11,
        c: 54
    }, {
        s: 31,
        a: 12,
        c: 70
    }, {
        s: 31,
        a: 13,
        c: 54
    }, {
        s: 31,
        a: 14,
        c: 76
    }, {
        s: 31,
        a: 15,
        c: 112
    }, {
        s: 31,
        a: 16,
        c: 82
    }, {
        s: 31,
        a: 17,
        c: 69
    }, {
        s: 31,
        a: 18,
        c: 54
    }, {
        s: 31,
        a: 19,
        c: 45
    }, {
        s: 31,
        a: 20,
        c: 111
    }, {
        s: 31,
        a: 21,
        c: 87
    }, {
        s: 31,
        a: 22,
        c: 66
    }, {
        s: 31,
        a: 23,
        c: 64
    }, {
        s: 31,
        a: 24,
        c: 30
    }, {
        s: 31,
        a: 25,
        c: 65
    }, {
        s: 31,
        a: 26,
        c: 40
    }, {
        s: 31,
        a: 27,
        c: 78
    }, {
        s: 31,
        a: 28,
        c: 41
    }, {
        s: 31,
        a: 29,
        c: 97
    }, {
        s: 31,
        a: 30,
        c: 58
    }, {
        s: 31,
        a: 31,
        c: 68
    }, {
        s: 31,
        a: 32,
        c: 92
    }, {
        s: 31,
        a: 33,
        c: 122
    }, {
        s: 31,
        a: 34,
        c: 100
    }, {
        s: 32,
        a: 1,
        c: 3
    }, {
        s: 32,
        a: 2,
        c: 31
    }, {
        s: 32,
        a: 3,
        c: 66
    }, {
        s: 32,
        a: 4,
        c: 92
    }, {
        s: 32,
        a: 5,
        c: 63
    }, {
        s: 32,
        a: 6,
        c: 32
    }, {
        s: 32,
        a: 7,
        c: 36
    }, {
        s: 32,
        a: 8,
        c: 25
    }, {
        s: 32,
        a: 9,
        c: 60
    }, {
        s: 32,
        a: 10,
        c: 55
    }, {
        s: 32,
        a: 11,
        c: 42
    }, {
        s: 32,
        a: 12,
        c: 75
    }, {
        s: 32,
        a: 13,
        c: 66
    }, {
        s: 32,
        a: 14,
        c: 64
    }, {
        s: 32,
        a: 15,
        c: 66
    }, {
        s: 32,
        a: 16,
        c: 56
    }, {
        s: 32,
        a: 17,
        c: 46
    }, {
        s: 32,
        a: 18,
        c: 31
    }, {
        s: 32,
        a: 19,
        c: 59
    }, {
        s: 32,
        a: 20,
        c: 95
    }, {
        s: 32,
        a: 21,
        c: 49
    }, {
        s: 32,
        a: 22,
        c: 51
    }, {
        s: 32,
        a: 23,
        c: 59
    }, {
        s: 32,
        a: 24,
        c: 52
    }, {
        s: 32,
        a: 25,
        c: 45
    }, {
        s: 32,
        a: 26,
        c: 69
    }, {
        s: 32,
        a: 27,
        c: 75
    }, {
        s: 32,
        a: 28,
        c: 30
    }, {
        s: 32,
        a: 29,
        c: 44
    }, {
        s: 32,
        a: 30,
        c: 26
    }, {
        s: 33,
        a: 1,
        c: 61
    }, {
        s: 33,
        a: 2,
        c: 43
    }, {
        s: 33,
        a: 3,
        c: 26
    }, {
        s: 33,
        a: 4,
        c: 127
    }, {
        s: 33,
        a: 5,
        c: 126
    }, {
        s: 33,
        a: 6,
        c: 143
    }, {
        s: 33,
        a: 7,
        c: 80
    }, {
        s: 33,
        a: 8,
        c: 42
    }, {
        s: 33,
        a: 9,
        c: 98
    }, {
        s: 33,
        a: 10,
        c: 76
    }, {
        s: 33,
        a: 11,
        c: 36
    }, {
        s: 33,
        a: 12,
        c: 58
    }, {
        s: 33,
        a: 13,
        c: 105
    }, {
        s: 33,
        a: 14,
        c: 60
    }, {
        s: 33,
        a: 15,
        c: 55
    }, {
        s: 33,
        a: 16,
        c: 57
    }, {
        s: 33,
        a: 17,
        c: 80
    }, {
        s: 33,
        a: 18,
        c: 68
    }, {
        s: 33,
        a: 19,
        c: 155
    }, {
        s: 33,
        a: 20,
        c: 102
    }, {
        s: 33,
        a: 21,
        c: 65
    }, {
        s: 33,
        a: 22,
        c: 85
    }, {
        s: 33,
        a: 23,
        c: 75
    }, {
        s: 33,
        a: 24,
        c: 72
    }, {
        s: 33,
        a: 25,
        c: 74
    }, {
        s: 33,
        a: 26,
        c: 77
    }, {
        s: 33,
        a: 27,
        c: 61
    }, {
        s: 33,
        a: 28,
        c: 79
    }, {
        s: 33,
        a: 29,
        c: 64
    }, {
        s: 33,
        a: 30,
        c: 69
    }, {
        s: 33,
        a: 31,
        c: 64
    }, {
        s: 33,
        a: 32,
        c: 81
    }, {
        s: 33,
        a: 33,
        c: 122
    }, {
        s: 33,
        a: 34,
        c: 56
    }, {
        s: 33,
        a: 35,
        c: 223
    }, {
        s: 33,
        a: 36,
        c: 92
    }, {
        s: 33,
        a: 37,
        c: 196
    }, {
        s: 33,
        a: 38,
        c: 75
    }, {
        s: 33,
        a: 39,
        c: 61
    }, {
        s: 33,
        a: 40,
        c: 66
    }, {
        s: 33,
        a: 41,
        c: 35
    }, {
        s: 33,
        a: 42,
        c: 16
    }, {
        s: 33,
        a: 43,
        c: 65
    }, {
        s: 33,
        a: 44,
        c: 35
    }, {
        s: 33,
        a: 45,
        c: 38
    }, {
        s: 33,
        a: 46,
        c: 29
    }, {
        s: 33,
        a: 47,
        c: 33
    }, {
        s: 33,
        a: 48,
        c: 58
    }, {
        s: 33,
        a: 49,
        c: 103
    }, {
        s: 33,
        a: 50,
        c: 267
    }, {
        s: 33,
        a: 51,
        c: 137
    }, {
        s: 33,
        a: 52,
        c: 85
    }, {
        s: 33,
        a: 53,
        c: 294
    }, {
        s: 33,
        a: 54,
        c: 39
    }, {
        s: 33,
        a: 55,
        c: 126
    }, {
        s: 33,
        a: 56,
        c: 63
    }, {
        s: 33,
        a: 57,
        c: 63
    }, {
        s: 33,
        a: 58,
        c: 67
    }, {
        s: 33,
        a: 59,
        c: 99
    }, {
        s: 33,
        a: 60,
        c: 87
    }, {
        s: 33,
        a: 61,
        c: 34
    }, {
        s: 33,
        a: 62,
        c: 43
    }, {
        s: 33,
        a: 63,
        c: 62
    }, {
        s: 33,
        a: 64,
        c: 29
    }, {
        s: 33,
        a: 65,
        c: 33
    }, {
        s: 33,
        a: 66,
        c: 55
    }, {
        s: 33,
        a: 67,
        c: 46
    }, {
        s: 33,
        a: 68,
        c: 37
    }, {
        s: 33,
        a: 69,
        c: 71
    }, {
        s: 33,
        a: 70,
        c: 40
    }, {
        s: 33,
        a: 71,
        c: 59
    }, {
        s: 33,
        a: 72,
        c: 92
    }, {
        s: 33,
        a: 73,
        c: 93
    }, {
        s: 34,
        a: 1,
        c: 67
    }, {
        s: 34,
        a: 2,
        c: 68
    }, {
        s: 34,
        a: 3,
        c: 123
    }, {
        s: 34,
        a: 4,
        c: 50
    }, {
        s: 34,
        a: 5,
        c: 46
    }, {
        s: 34,
        a: 6,
        c: 66
    }, {
        s: 34,
        a: 7,
        c: 61
    }, {
        s: 34,
        a: 8,
        c: 66
    }, {
        s: 34,
        a: 9,
        c: 105
    }, {
        s: 34,
        a: 10,
        c: 53
    }, {
        s: 34,
        a: 11,
        c: 51
    }, {
        s: 34,
        a: 12,
        c: 107
    }, {
        s: 34,
        a: 13,
        c: 87
    }, {
        s: 34,
        a: 14,
        c: 109
    }, {
        s: 34,
        a: 15,
        c: 74
    }, {
        s: 34,
        a: 16,
        c: 75
    }, {
        s: 34,
        a: 17,
        c: 35
    }, {
        s: 34,
        a: 18,
        c: 82
    }, {
        s: 34,
        a: 19,
        c: 87
    }, {
        s: 34,
        a: 20,
        c: 45
    }, {
        s: 34,
        a: 21,
        c: 70
    }, {
        s: 34,
        a: 22,
        c: 93
    }, {
        s: 34,
        a: 23,
        c: 85
    }, {
        s: 34,
        a: 24,
        c: 62
    }, {
        s: 34,
        a: 25,
        c: 35
    }, {
        s: 34,
        a: 26,
        c: 46
    }, {
        s: 34,
        a: 27,
        c: 48
    }, {
        s: 34,
        a: 28,
        c: 54
    }, {
        s: 34,
        a: 29,
        c: 30
    }, {
        s: 34,
        a: 30,
        c: 41
    }, {
        s: 34,
        a: 31,
        c: 143
    }, {
        s: 34,
        a: 32,
        c: 69
    }, {
        s: 34,
        a: 33,
        c: 160
    }, {
        s: 34,
        a: 34,
        c: 54
    }, {
        s: 34,
        a: 35,
        c: 39
    }, {
        s: 34,
        a: 36,
        c: 49
    }, {
        s: 34,
        a: 37,
        c: 100
    }, {
        s: 34,
        a: 38,
        c: 45
    }, {
        s: 34,
        a: 39,
        c: 73
    }, {
        s: 34,
        a: 40,
        c: 51
    }, {
        s: 34,
        a: 41,
        c: 58
    }, {
        s: 34,
        a: 42,
        c: 77
    }, {
        s: 34,
        a: 43,
        c: 130
    }, {
        s: 34,
        a: 44,
        c: 47
    }, {
        s: 34,
        a: 45,
        c: 59
    }, {
        s: 34,
        a: 46,
        c: 89
    }, {
        s: 34,
        a: 47,
        c: 52
    }, {
        s: 34,
        a: 48,
        c: 26
    }, {
        s: 34,
        a: 49,
        c: 29
    }, {
        s: 34,
        a: 50,
        c: 57
    }, {
        s: 34,
        a: 51,
        c: 35
    }, {
        s: 34,
        a: 52,
        c: 36
    }, {
        s: 34,
        a: 53,
        c: 38
    }, {
        s: 34,
        a: 54,
        c: 57
    }, {
        s: 35,
        a: 1,
        c: 100
    }, {
        s: 35,
        a: 2,
        c: 68
    }, {
        s: 35,
        a: 3,
        c: 85
    }, {
        s: 35,
        a: 4,
        c: 43
    }, {
        s: 35,
        a: 5,
        c: 63
    }, {
        s: 35,
        a: 6,
        c: 58
    }, {
        s: 35,
        a: 7,
        c: 62
    }, {
        s: 35,
        a: 8,
        c: 91
    }, {
        s: 35,
        a: 9,
        c: 76
    }, {
        s: 35,
        a: 10,
        c: 108
    }, {
        s: 35,
        a: 11,
        c: 115
    }, {
        s: 35,
        a: 12,
        c: 127
    }, {
        s: 35,
        a: 13,
        c: 115
    }, {
        s: 35,
        a: 14,
        c: 81
    }, {
        s: 35,
        a: 15,
        c: 47
    }, {
        s: 35,
        a: 16,
        c: 23
    }, {
        s: 35,
        a: 17,
        c: 18
    }, {
        s: 35,
        a: 18,
        c: 138
    }, {
        s: 35,
        a: 19,
        c: 21
    }, {
        s: 35,
        a: 20,
        c: 18
    }, {
        s: 35,
        a: 21,
        c: 16
    }, {
        s: 35,
        a: 22,
        c: 62
    }, {
        s: 35,
        a: 23,
        c: 12
    }, {
        s: 35,
        a: 24,
        c: 48
    }, {
        s: 35,
        a: 25,
        c: 67
    }, {
        s: 35,
        a: 26,
        c: 27
    }, {
        s: 35,
        a: 27,
        c: 94
    }, {
        s: 35,
        a: 28,
        c: 78
    }, {
        s: 35,
        a: 29,
        c: 76
    }, {
        s: 35,
        a: 30,
        c: 37
    }, {
        s: 35,
        a: 31,
        c: 65
    }, {
        s: 35,
        a: 32,
        c: 99
    }, {
        s: 35,
        a: 33,
        c: 57
    }, {
        s: 35,
        a: 34,
        c: 45
    }, {
        s: 35,
        a: 35,
        c: 55
    }, {
        s: 35,
        a: 36,
        c: 72
    }, {
        s: 35,
        a: 37,
        c: 108
    }, {
        s: 35,
        a: 38,
        c: 44
    }, {
        s: 35,
        a: 39,
        c: 100
    }, {
        s: 35,
        a: 40,
        c: 132
    }, {
        s: 35,
        a: 41,
        c: 76
    }, {
        s: 35,
        a: 42,
        c: 83
    }, {
        s: 35,
        a: 43,
        c: 111
    }, {
        s: 35,
        a: 44,
        c: 120
    }, {
        s: 35,
        a: 45,
        c: 97
    }, {
        s: 36,
        a: 1,
        c: 2
    }, {
        s: 36,
        a: 2,
        c: 13
    }, {
        s: 36,
        a: 3,
        c: 14
    }, {
        s: 36,
        a: 4,
        c: 13
    }, {
        s: 36,
        a: 5,
        c: 17
    }, {
        s: 36,
        a: 6,
        c: 30
    }, {
        s: 36,
        a: 7,
        c: 30
    }, {
        s: 36,
        a: 8,
        c: 45
    }, {
        s: 36,
        a: 9,
        c: 51
    }, {
        s: 36,
        a: 10,
        c: 36
    }, {
        s: 36,
        a: 11,
        c: 54
    }, {
        s: 36,
        a: 12,
        c: 58
    }, {
        s: 36,
        a: 13,
        c: 38
    }, {
        s: 36,
        a: 14,
        c: 57
    }, {
        s: 36,
        a: 15,
        c: 55
    }, {
        s: 36,
        a: 16,
        c: 28
    }, {
        s: 36,
        a: 17,
        c: 23
    }, {
        s: 36,
        a: 18,
        c: 55
    }, {
        s: 36,
        a: 19,
        c: 38
    }, {
        s: 36,
        a: 20,
        c: 46
    }, {
        s: 36,
        a: 21,
        c: 29
    }, {
        s: 36,
        a: 22,
        c: 31
    }, {
        s: 36,
        a: 23,
        c: 58
    }, {
        s: 36,
        a: 24,
        c: 17
    }, {
        s: 36,
        a: 25,
        c: 19
    }, {
        s: 36,
        a: 26,
        c: 30
    }, {
        s: 36,
        a: 27,
        c: 27
    }, {
        s: 36,
        a: 28,
        c: 47
    }, {
        s: 36,
        a: 29,
        c: 30
    }, {
        s: 36,
        a: 30,
        c: 47
    }, {
        s: 36,
        a: 31,
        c: 45
    }, {
        s: 36,
        a: 32,
        c: 23
    }, {
        s: 36,
        a: 33,
        c: 50
    }, {
        s: 36,
        a: 34,
        c: 44
    }, {
        s: 36,
        a: 35,
        c: 37
    }, {
        s: 36,
        a: 36,
        c: 56
    }, {
        s: 36,
        a: 37,
        c: 37
    }, {
        s: 36,
        a: 38,
        c: 39
    }, {
        s: 36,
        a: 39,
        c: 37
    }, {
        s: 36,
        a: 40,
        c: 58
    }, {
        s: 36,
        a: 41,
        c: 35
    }, {
        s: 36,
        a: 42,
        c: 23
    }, {
        s: 36,
        a: 43,
        c: 33
    }, {
        s: 36,
        a: 44,
        c: 22
    }, {
        s: 36,
        a: 45,
        c: 45
    }, {
        s: 36,
        a: 46,
        c: 42
    }, {
        s: 36,
        a: 47,
        c: 92
    }, {
        s: 36,
        a: 48,
        c: 30
    }, {
        s: 36,
        a: 49,
        c: 35
    }, {
        s: 36,
        a: 50,
        c: 33
    }, {
        s: 36,
        a: 51,
        c: 39
    }, {
        s: 36,
        a: 52,
        c: 53
    }, {
        s: 36,
        a: 53,
        c: 39
    }, {
        s: 36,
        a: 54,
        c: 42
    }, {
        s: 36,
        a: 55,
        c: 28
    }, {
        s: 36,
        a: 56,
        c: 32
    }, {
        s: 36,
        a: 57,
        c: 23
    }, {
        s: 36,
        a: 58,
        c: 16
    }, {
        s: 36,
        a: 59,
        c: 25
    }, {
        s: 36,
        a: 60,
        c: 50
    }, {
        s: 36,
        a: 61,
        c: 23
    }, {
        s: 36,
        a: 62,
        c: 36
    }, {
        s: 36,
        a: 63,
        c: 21
    }, {
        s: 36,
        a: 64,
        c: 24
    }, {
        s: 36,
        a: 65,
        c: 57
    }, {
        s: 36,
        a: 66,
        c: 46
    }, {
        s: 36,
        a: 67,
        c: 49
    }, {
        s: 36,
        a: 68,
        c: 30
    }, {
        s: 36,
        a: 69,
        c: 43
    }, {
        s: 36,
        a: 70,
        c: 33
    }, {
        s: 36,
        a: 71,
        c: 50
    }, {
        s: 36,
        a: 72,
        c: 33
    }, {
        s: 36,
        a: 73,
        c: 29
    }, {
        s: 36,
        a: 74,
        c: 31
    }, {
        s: 36,
        a: 75,
        c: 30
    }, {
        s: 36,
        a: 76,
        c: 36
    }, {
        s: 36,
        a: 77,
        c: 42
    }, {
        s: 36,
        a: 78,
        c: 41
    }, {
        s: 36,
        a: 79,
        c: 37
    }, {
        s: 36,
        a: 80,
        c: 44
    }, {
        s: 36,
        a: 81,
        c: 63
    }, {
        s: 36,
        a: 82,
        c: 34
    }, {
        s: 36,
        a: 83,
        c: 35
    }, {
        s: 37,
        a: 1,
        c: 11
    }, {
        s: 37,
        a: 2,
        c: 13
    }, {
        s: 37,
        a: 3,
        c: 13
    }, {
        s: 37,
        a: 4,
        c: 12
    }, {
        s: 37,
        a: 5,
        c: 35
    }, {
        s: 37,
        a: 6,
        c: 31
    }, {
        s: 37,
        a: 7,
        c: 18
    }, {
        s: 37,
        a: 8,
        c: 37
    }, {
        s: 37,
        a: 9,
        c: 17
    }, {
        s: 37,
        a: 10,
        c: 28
    }, {
        s: 37,
        a: 11,
        c: 46
    }, {
        s: 37,
        a: 12,
        c: 13
    }, {
        s: 37,
        a: 13,
        c: 17
    }, {
        s: 37,
        a: 14,
        c: 19
    }, {
        s: 37,
        a: 15,
        c: 21
    }, {
        s: 37,
        a: 16,
        c: 35
    }, {
        s: 37,
        a: 17,
        c: 15
    }, {
        s: 37,
        a: 18,
        c: 16
    }, {
        s: 37,
        a: 19,
        c: 28
    }, {
        s: 37,
        a: 20,
        c: 24
    }, {
        s: 37,
        a: 21,
        c: 27
    }, {
        s: 37,
        a: 22,
        c: 38
    }, {
        s: 37,
        a: 23,
        c: 29
    }, {
        s: 37,
        a: 24,
        c: 17
    }, {
        s: 37,
        a: 25,
        c: 14
    }, {
        s: 37,
        a: 26,
        c: 17
    }, {
        s: 37,
        a: 27,
        c: 24
    }, {
        s: 37,
        a: 28,
        c: 28
    }, {
        s: 37,
        a: 29,
        c: 21
    }, {
        s: 37,
        a: 30,
        c: 36
    }, {
        s: 37,
        a: 31,
        c: 25
    }, {
        s: 37,
        a: 32,
        c: 20
    }, {
        s: 37,
        a: 33,
        c: 25
    }, {
        s: 37,
        a: 34,
        c: 20
    }, {
        s: 37,
        a: 35,
        c: 38
    }, {
        s: 37,
        a: 36,
        c: 33
    }, {
        s: 37,
        a: 37,
        c: 22
    }, {
        s: 37,
        a: 38,
        c: 22
    }, {
        s: 37,
        a: 39,
        c: 23
    }, {
        s: 37,
        a: 40,
        c: 19
    }, {
        s: 37,
        a: 41,
        c: 16
    }, {
        s: 37,
        a: 42,
        c: 14
    }, {
        s: 37,
        a: 43,
        c: 12
    }, {
        s: 37,
        a: 44,
        c: 14
    }, {
        s: 37,
        a: 45,
        c: 19
    }, {
        s: 37,
        a: 46,
        c: 16
    }, {
        s: 37,
        a: 47,
        c: 24
    }, {
        s: 37,
        a: 48,
        c: 20
    }, {
        s: 37,
        a: 49,
        c: 13
    }, {
        s: 37,
        a: 50,
        c: 24
    }, {
        s: 37,
        a: 51,
        c: 23
    }, {
        s: 37,
        a: 52,
        c: 19
    }, {
        s: 37,
        a: 53,
        c: 34
    }, {
        s: 37,
        a: 54,
        c: 15
    }, {
        s: 37,
        a: 55,
        c: 21
    }, {
        s: 37,
        a: 56,
        c: 19
    }, {
        s: 37,
        a: 57,
        c: 26
    }, {
        s: 37,
        a: 58,
        c: 13
    }, {
        s: 37,
        a: 59,
        c: 28
    }, {
        s: 37,
        a: 60,
        c: 19
    }, {
        s: 37,
        a: 61,
        c: 21
    }, {
        s: 37,
        a: 62,
        c: 23
    }, {
        s: 37,
        a: 63,
        c: 22
    }, {
        s: 37,
        a: 64,
        c: 23
    }, {
        s: 37,
        a: 65,
        c: 21
    }, {
        s: 37,
        a: 66,
        c: 32
    }, {
        s: 37,
        a: 67,
        c: 23
    }, {
        s: 37,
        a: 68,
        c: 20
    }, {
        s: 37,
        a: 69,
        c: 20
    }, {
        s: 37,
        a: 70,
        c: 18
    }, {
        s: 37,
        a: 71,
        c: 22
    }, {
        s: 37,
        a: 72,
        c: 20
    }, {
        s: 37,
        a: 73,
        c: 24
    }, {
        s: 37,
        a: 74,
        c: 19
    }, {
        s: 37,
        a: 75,
        c: 26
    }, {
        s: 37,
        a: 76,
        c: 25
    }, {
        s: 37,
        a: 77,
        c: 20
    }, {
        s: 37,
        a: 78,
        c: 19
    }, {
        s: 37,
        a: 79,
        c: 20
    }, {
        s: 37,
        a: 80,
        c: 19
    }, {
        s: 37,
        a: 81,
        c: 19
    }, {
        s: 37,
        a: 82,
        c: 15
    }, {
        s: 37,
        a: 83,
        c: 18
    }, {
        s: 37,
        a: 84,
        c: 16
    }, {
        s: 37,
        a: 85,
        c: 25
    }, {
        s: 37,
        a: 86,
        c: 22
    }, {
        s: 37,
        a: 87,
        c: 18
    }, {
        s: 37,
        a: 88,
        c: 16
    }, {
        s: 37,
        a: 89,
        c: 11
    }, {
        s: 37,
        a: 90,
        c: 15
    }, {
        s: 37,
        a: 91,
        c: 26
    }, {
        s: 37,
        a: 92,
        c: 13
    }, {
        s: 37,
        a: 93,
        c: 20
    }, {
        s: 37,
        a: 94,
        c: 16
    }, {
        s: 37,
        a: 95,
        c: 18
    }, {
        s: 37,
        a: 96,
        c: 19
    }, {
        s: 37,
        a: 97,
        c: 32
    }, {
        s: 37,
        a: 98,
        c: 29
    }, {
        s: 37,
        a: 99,
        c: 23
    }, {
        s: 37,
        a: 100,
        c: 16
    }, {
        s: 37,
        a: 101,
        c: 16
    }, {
        s: 37,
        a: 102,
        c: 100
    }, {
        s: 37,
        a: 103,
        c: 19
    }, {
        s: 37,
        a: 104,
        c: 19
    }, {
        s: 37,
        a: 105,
        c: 31
    }, {
        s: 37,
        a: 106,
        c: 20
    }, {
        s: 37,
        a: 107,
        c: 15
    }, {
        s: 37,
        a: 108,
        c: 19
    }, {
        s: 37,
        a: 109,
        c: 14
    }, {
        s: 37,
        a: 110,
        c: 16
    }, {
        s: 37,
        a: 111,
        c: 19
    }, {
        s: 37,
        a: 112,
        c: 27
    }, {
        s: 37,
        a: 113,
        c: 48
    }, {
        s: 37,
        a: 114,
        c: 21
    }, {
        s: 37,
        a: 115,
        c: 29
    }, {
        s: 37,
        a: 116,
        c: 24
    }, {
        s: 37,
        a: 117,
        c: 23
    }, {
        s: 37,
        a: 118,
        c: 23
    }, {
        s: 37,
        a: 119,
        c: 21
    }, {
        s: 37,
        a: 120,
        c: 17
    }, {
        s: 37,
        a: 121,
        c: 19
    }, {
        s: 37,
        a: 122,
        c: 21
    }, {
        s: 37,
        a: 123,
        c: 19
    }, {
        s: 37,
        a: 124,
        c: 18
    }, {
        s: 37,
        a: 125,
        c: 28
    }, {
        s: 37,
        a: 126,
        c: 24
    }, {
        s: 37,
        a: 127,
        c: 18
    }, {
        s: 37,
        a: 128,
        c: 19
    }, {
        s: 37,
        a: 129,
        c: 19
    }, {
        s: 37,
        a: 130,
        c: 14
    }, {
        s: 37,
        a: 131,
        c: 19
    }, {
        s: 37,
        a: 132,
        c: 19
    }, {
        s: 37,
        a: 133,
        c: 18
    }, {
        s: 37,
        a: 134,
        c: 19
    }, {
        s: 37,
        a: 135,
        c: 18
    }, {
        s: 37,
        a: 136,
        c: 14
    }, {
        s: 37,
        a: 137,
        c: 22
    }, {
        s: 37,
        a: 138,
        c: 17
    }, {
        s: 37,
        a: 139,
        c: 18
    }, {
        s: 37,
        a: 140,
        c: 20
    }, {
        s: 37,
        a: 141,
        c: 19
    }, {
        s: 37,
        a: 142,
        c: 19
    }, {
        s: 37,
        a: 143,
        c: 21
    }, {
        s: 37,
        a: 144,
        c: 22
    }, {
        s: 37,
        a: 145,
        c: 21
    }, {
        s: 37,
        a: 146,
        c: 22
    }, {
        s: 37,
        a: 147,
        c: 26
    }, {
        s: 37,
        a: 148,
        c: 20
    }, {
        s: 37,
        a: 149,
        c: 29
    }, {
        s: 37,
        a: 150,
        c: 29
    }, {
        s: 37,
        a: 151,
        c: 21
    }, {
        s: 37,
        a: 152,
        c: 19
    }, {
        s: 37,
        a: 153,
        c: 20
    }, {
        s: 37,
        a: 154,
        c: 14
    }, {
        s: 37,
        a: 155,
        c: 10
    }, {
        s: 37,
        a: 156,
        c: 14
    }, {
        s: 37,
        a: 157,
        c: 24
    }, {
        s: 37,
        a: 158,
        c: 47
    }, {
        s: 37,
        a: 159,
        c: 17
    }, {
        s: 37,
        a: 160,
        c: 19
    }, {
        s: 37,
        a: 161,
        c: 14
    }, {
        s: 37,
        a: 162,
        c: 17
    }, {
        s: 37,
        a: 163,
        c: 16
    }, {
        s: 37,
        a: 164,
        c: 20
    }, {
        s: 37,
        a: 165,
        c: 15
    }, {
        s: 37,
        a: 166,
        c: 16
    }, {
        s: 37,
        a: 167,
        c: 15
    }, {
        s: 37,
        a: 168,
        c: 22
    }, {
        s: 37,
        a: 169,
        c: 20
    }, {
        s: 37,
        a: 170,
        c: 18
    }, {
        s: 37,
        a: 171,
        c: 29
    }, {
        s: 37,
        a: 172,
        c: 16
    }, {
        s: 37,
        a: 173,
        c: 19
    }, {
        s: 37,
        a: 174,
        c: 14
    }, {
        s: 37,
        a: 175,
        c: 17
    }, {
        s: 37,
        a: 176,
        c: 17
    }, {
        s: 37,
        a: 177,
        c: 30
    }, {
        s: 37,
        a: 178,
        c: 14
    }, {
        s: 37,
        a: 179,
        c: 15
    }, {
        s: 37,
        a: 180,
        c: 23
    }, {
        s: 37,
        a: 181,
        c: 16
    }, {
        s: 37,
        a: 182,
        c: 19
    }, {
        s: 38,
        a: 1,
        c: 15
    }, {
        s: 38,
        a: 2,
        c: 22
    }, {
        s: 38,
        a: 3,
        c: 37
    }, {
        s: 38,
        a: 4,
        c: 44
    }, {
        s: 38,
        a: 5,
        c: 32
    }, {
        s: 38,
        a: 6,
        c: 51
    }, {
        s: 38,
        a: 7,
        c: 38
    }, {
        s: 38,
        a: 8,
        c: 50
    }, {
        s: 38,
        a: 9,
        c: 31
    }, {
        s: 38,
        a: 10,
        c: 48
    }, {
        s: 38,
        a: 11,
        c: 24
    }, {
        s: 38,
        a: 12,
        c: 34
    }, {
        s: 38,
        a: 13,
        c: 36
    }, {
        s: 38,
        a: 14,
        c: 22
    }, {
        s: 38,
        a: 15,
        c: 35
    }, {
        s: 38,
        a: 16,
        c: 32
    }, {
        s: 38,
        a: 17,
        c: 44
    }, {
        s: 38,
        a: 18,
        c: 36
    }, {
        s: 38,
        a: 19,
        c: 20
    }, {
        s: 38,
        a: 20,
        c: 33
    }, {
        s: 38,
        a: 21,
        c: 30
    }, {
        s: 38,
        a: 22,
        c: 93
    }, {
        s: 38,
        a: 23,
        c: 60
    }, {
        s: 38,
        a: 24,
        c: 137
    }, {
        s: 38,
        a: 25,
        c: 33
    }, {
        s: 38,
        a: 26,
        c: 122
    }, {
        s: 38,
        a: 27,
        c: 70
    }, {
        s: 38,
        a: 28,
        c: 66
    }, {
        s: 38,
        a: 29,
        c: 50
    }, {
        s: 38,
        a: 30,
        c: 33
    }, {
        s: 38,
        a: 31,
        c: 29
    }, {
        s: 38,
        a: 32,
        c: 42
    }, {
        s: 38,
        a: 33,
        c: 30
    }, {
        s: 38,
        a: 34,
        c: 39
    }, {
        s: 38,
        a: 35,
        c: 49
    }, {
        s: 38,
        a: 36,
        c: 33
    }, {
        s: 38,
        a: 37,
        c: 20
    }, {
        s: 38,
        a: 38,
        c: 21
    }, {
        s: 38,
        a: 39,
        c: 28
    }, {
        s: 38,
        a: 40,
        c: 22
    }, {
        s: 38,
        a: 41,
        c: 46
    }, {
        s: 38,
        a: 42,
        c: 26
    }, {
        s: 38,
        a: 43,
        c: 46
    }, {
        s: 38,
        a: 44,
        c: 54
    }, {
        s: 38,
        a: 45,
        c: 48
    }, {
        s: 38,
        a: 46,
        c: 26
    }, {
        s: 38,
        a: 47,
        c: 28
    }, {
        s: 38,
        a: 48,
        c: 38
    }, {
        s: 38,
        a: 49,
        c: 23
    }, {
        s: 38,
        a: 50,
        c: 22
    }, {
        s: 38,
        a: 51,
        c: 35
    }, {
        s: 38,
        a: 52,
        c: 22
    }, {
        s: 38,
        a: 53,
        c: 21
    }, {
        s: 38,
        a: 54,
        c: 21
    }, {
        s: 38,
        a: 55,
        c: 19
    }, {
        s: 38,
        a: 56,
        c: 21
    }, {
        s: 38,
        a: 57,
        c: 20
    }, {
        s: 38,
        a: 58,
        c: 15
    }, {
        s: 38,
        a: 59,
        c: 38
    }, {
        s: 38,
        a: 60,
        c: 45
    }, {
        s: 38,
        a: 61,
        c: 40
    }, {
        s: 38,
        a: 62,
        c: 38
    }, {
        s: 38,
        a: 63,
        c: 30
    }, {
        s: 38,
        a: 64,
        c: 21
    }, {
        s: 38,
        a: 65,
        c: 40
    }, {
        s: 38,
        a: 66,
        c: 37
    }, {
        s: 38,
        a: 67,
        c: 11
    }, {
        s: 38,
        a: 68,
        c: 13
    }, {
        s: 38,
        a: 69,
        c: 33
    }, {
        s: 38,
        a: 70,
        c: 27
    }, {
        s: 38,
        a: 71,
        c: 32
    }, {
        s: 38,
        a: 72,
        c: 36
    }, {
        s: 38,
        a: 73,
        c: 22
    }, {
        s: 38,
        a: 74,
        c: 28
    }, {
        s: 38,
        a: 75,
        c: 54
    }, {
        s: 38,
        a: 76,
        c: 34
    }, {
        s: 38,
        a: 77,
        c: 20
    }, {
        s: 38,
        a: 78,
        c: 23
    }, {
        s: 38,
        a: 79,
        c: 24
    }, {
        s: 38,
        a: 80,
        c: 17
    }, {
        s: 38,
        a: 81,
        c: 18
    }, {
        s: 38,
        a: 82,
        c: 23
    }, {
        s: 38,
        a: 83,
        c: 20
    }, {
        s: 38,
        a: 84,
        c: 17
    }, {
        s: 38,
        a: 85,
        c: 31
    }, {
        s: 38,
        a: 86,
        c: 36
    }, {
        s: 38,
        a: 87,
        c: 18
    }, {
        s: 38,
        a: 88,
        c: 17
    }, {
        s: 39,
        a: 1,
        c: 29
    }, {
        s: 39,
        a: 2,
        c: 45
    }, {
        s: 39,
        a: 3,
        c: 126
    }, {
        s: 39,
        a: 4,
        c: 63
    }, {
        s: 39,
        a: 5,
        c: 105
    }, {
        s: 39,
        a: 6,
        c: 138
    }, {
        s: 39,
        a: 7,
        c: 126
    }, {
        s: 39,
        a: 8,
        c: 122
    }, {
        s: 39,
        a: 9,
        c: 105
    }, {
        s: 39,
        a: 10,
        c: 95
    }, {
        s: 39,
        a: 11,
        c: 31
    }, {
        s: 39,
        a: 12,
        c: 23
    }, {
        s: 39,
        a: 13,
        c: 29
    }, {
        s: 39,
        a: 14,
        c: 21
    }, {
        s: 39,
        a: 15,
        c: 85
    }, {
        s: 39,
        a: 16,
        c: 61
    }, {
        s: 39,
        a: 17,
        c: 60
    }, {
        s: 39,
        a: 18,
        c: 67
    }, {
        s: 39,
        a: 19,
        c: 38
    }, {
        s: 39,
        a: 20,
        c: 80
    }, {
        s: 39,
        a: 21,
        c: 120
    }, {
        s: 39,
        a: 22,
        c: 77
    }, {
        s: 39,
        a: 23,
        c: 132
    }, {
        s: 39,
        a: 24,
        c: 61
    }, {
        s: 39,
        a: 25,
        c: 40
    }, {
        s: 39,
        a: 26,
        c: 59
    }, {
        s: 39,
        a: 27,
        c: 44
    }, {
        s: 39,
        a: 28,
        c: 28
    }, {
        s: 39,
        a: 29,
        c: 81
    }, {
        s: 39,
        a: 30,
        c: 16
    }, {
        s: 39,
        a: 31,
        c: 30
    }, {
        s: 39,
        a: 32,
        c: 58
    }, {
        s: 39,
        a: 33,
        c: 34
    }, {
        s: 39,
        a: 34,
        c: 33
    }, {
        s: 39,
        a: 35,
        c: 58
    }, {
        s: 39,
        a: 36,
        c: 57
    }, {
        s: 39,
        a: 37,
        c: 41
    }, {
        s: 39,
        a: 38,
        c: 148
    }, {
        s: 39,
        a: 39,
        c: 40
    }, {
        s: 39,
        a: 40,
        c: 32
    }, {
        s: 39,
        a: 41,
        c: 77
    }, {
        s: 39,
        a: 42,
        c: 107
    }, {
        s: 39,
        a: 43,
        c: 54
    }, {
        s: 39,
        a: 44,
        c: 48
    }, {
        s: 39,
        a: 45,
        c: 76
    }, {
        s: 39,
        a: 46,
        c: 76
    }, {
        s: 39,
        a: 47,
        c: 97
    }, {
        s: 39,
        a: 48,
        c: 43
    }, {
        s: 39,
        a: 49,
        c: 83
    }, {
        s: 39,
        a: 50,
        c: 43
    }, {
        s: 39,
        a: 51,
        c: 68
    }, {
        s: 39,
        a: 52,
        c: 59
    }, {
        s: 39,
        a: 53,
        c: 85
    }, {
        s: 39,
        a: 54,
        c: 52
    }, {
        s: 39,
        a: 55,
        c: 64
    }, {
        s: 39,
        a: 56,
        c: 51
    }, {
        s: 39,
        a: 57,
        c: 32
    }, {
        s: 39,
        a: 58,
        c: 42
    }, {
        s: 39,
        a: 59,
        c: 45
    }, {
        s: 39,
        a: 60,
        c: 65
    }, {
        s: 39,
        a: 61,
        c: 50
    }, {
        s: 39,
        a: 62,
        c: 28
    }, {
        s: 39,
        a: 63,
        c: 57
    }, {
        s: 39,
        a: 64,
        c: 34
    }, {
        s: 39,
        a: 65,
        c: 62
    }, {
        s: 39,
        a: 66,
        c: 24
    }, {
        s: 39,
        a: 67,
        c: 86
    }, {
        s: 39,
        a: 68,
        c: 77
    }, {
        s: 39,
        a: 69,
        c: 74
    }, {
        s: 39,
        a: 70,
        c: 32
    }, {
        s: 39,
        a: 71,
        c: 151
    }, {
        s: 39,
        a: 72,
        c: 45
    }, {
        s: 39,
        a: 73,
        c: 94
    }, {
        s: 39,
        a: 74,
        c: 73
    }, {
        s: 39,
        a: 75,
        c: 77
    }, {
        s: 40,
        a: 1,
        c: 2
    }, {
        s: 40,
        a: 2,
        c: 29
    }, {
        s: 40,
        a: 3,
        c: 56
    }, {
        s: 40,
        a: 4,
        c: 52
    }, {
        s: 40,
        a: 5,
        c: 98
    }, {
        s: 40,
        a: 6,
        c: 42
    }, {
        s: 40,
        a: 7,
        c: 128
    }, {
        s: 40,
        a: 8,
        c: 76
    }, {
        s: 40,
        a: 9,
        c: 53
    }, {
        s: 40,
        a: 10,
        c: 67
    }, {
        s: 40,
        a: 11,
        c: 65
    }, {
        s: 40,
        a: 12,
        c: 62
    }, {
        s: 40,
        a: 13,
        c: 53
    }, {
        s: 40,
        a: 14,
        c: 37
    }, {
        s: 40,
        a: 15,
        c: 63
    }, {
        s: 40,
        a: 16,
        c: 59
    }, {
        s: 40,
        a: 17,
        c: 47
    }, {
        s: 40,
        a: 18,
        c: 67
    }, {
        s: 40,
        a: 19,
        c: 28
    }, {
        s: 40,
        a: 20,
        c: 62
    }, {
        s: 40,
        a: 21,
        c: 119
    }, {
        s: 40,
        a: 22,
        c: 63
    }, {
        s: 40,
        a: 23,
        c: 31
    }, {
        s: 40,
        a: 24,
        c: 34
    }, {
        s: 40,
        a: 25,
        c: 87
    }, {
        s: 40,
        a: 26,
        c: 69
    }, {
        s: 40,
        a: 27,
        c: 48
    }, {
        s: 40,
        a: 28,
        c: 146
    }, {
        s: 40,
        a: 29,
        c: 101
    }, {
        s: 40,
        a: 30,
        c: 41
    }, {
        s: 40,
        a: 31,
        c: 55
    }, {
        s: 40,
        a: 32,
        c: 27
    }, {
        s: 40,
        a: 33,
        c: 52
    }, {
        s: 40,
        a: 34,
        c: 105
    }, {
        s: 40,
        a: 35,
        c: 93
    }, {
        s: 40,
        a: 36,
        c: 40
    }, {
        s: 40,
        a: 37,
        c: 94
    }, {
        s: 40,
        a: 38,
        c: 37
    }, {
        s: 40,
        a: 39,
        c: 48
    }, {
        s: 40,
        a: 40,
        c: 88
    }, {
        s: 40,
        a: 41,
        c: 41
    }, {
        s: 40,
        a: 42,
        c: 61
    }, {
        s: 40,
        a: 43,
        c: 86
    }, {
        s: 40,
        a: 44,
        c: 50
    }, {
        s: 40,
        a: 45,
        c: 42
    }, {
        s: 40,
        a: 46,
        c: 61
    }, {
        s: 40,
        a: 47,
        c: 82
    }, {
        s: 40,
        a: 48,
        c: 45
    }, {
        s: 40,
        a: 49,
        c: 53
    }, {
        s: 40,
        a: 50,
        c: 73
    }, {
        s: 40,
        a: 51,
        c: 53
    }, {
        s: 40,
        a: 52,
        c: 46
    }, {
        s: 40,
        a: 53,
        c: 41
    }, {
        s: 40,
        a: 54,
        c: 20
    }, {
        s: 40,
        a: 55,
        c: 53
    }, {
        s: 40,
        a: 56,
        c: 93
    }, {
        s: 40,
        a: 57,
        c: 53
    }, {
        s: 40,
        a: 58,
        c: 69
    }, {
        s: 40,
        a: 59,
        c: 43
    }, {
        s: 40,
        a: 60,
        c: 62
    }, {
        s: 40,
        a: 61,
        c: 82
    }, {
        s: 40,
        a: 62,
        c: 41
    }, {
        s: 40,
        a: 63,
        c: 33
    }, {
        s: 40,
        a: 64,
        c: 98
    }, {
        s: 40,
        a: 65,
        c: 53
    }, {
        s: 40,
        a: 66,
        c: 76
    }, {
        s: 40,
        a: 67,
        c: 118
    }, {
        s: 40,
        a: 68,
        c: 44
    }, {
        s: 40,
        a: 69,
        c: 39
    }, {
        s: 40,
        a: 70,
        c: 44
    }, {
        s: 40,
        a: 71,
        c: 32
    }, {
        s: 40,
        a: 72,
        c: 23
    }, {
        s: 40,
        a: 73,
        c: 23
    }, {
        s: 40,
        a: 74,
        c: 60
    }, {
        s: 40,
        a: 75,
        c: 46
    }, {
        s: 40,
        a: 76,
        c: 42
    }, {
        s: 40,
        a: 77,
        c: 58
    }, {
        s: 40,
        a: 78,
        c: 123
    }, {
        s: 40,
        a: 79,
        c: 43
    }, {
        s: 40,
        a: 80,
        c: 59
    }, {
        s: 40,
        a: 81,
        c: 28
    }, {
        s: 40,
        a: 82,
        c: 104
    }, {
        s: 40,
        a: 83,
        c: 67
    }, {
        s: 40,
        a: 84,
        c: 51
    }, {
        s: 40,
        a: 85,
        c: 70
    }, {
        s: 41,
        a: 1,
        c: 2
    }, {
        s: 41,
        a: 2,
        c: 19
    }, {
        s: 41,
        a: 3,
        c: 33
    }, {
        s: 41,
        a: 4,
        c: 33
    }, {
        s: 41,
        a: 5,
        c: 75
    }, {
        s: 41,
        a: 6,
        c: 74
    }, {
        s: 41,
        a: 7,
        c: 36
    }, {
        s: 41,
        a: 8,
        c: 40
    }, {
        s: 41,
        a: 9,
        c: 62
    }, {
        s: 41,
        a: 10,
        c: 67
    }, {
        s: 41,
        a: 11,
        c: 67
    }, {
        s: 41,
        a: 12,
        c: 89
    }, {
        s: 41,
        a: 13,
        c: 40
    }, {
        s: 41,
        a: 14,
        c: 94
    }, {
        s: 41,
        a: 15,
        c: 102
    }, {
        s: 41,
        a: 16,
        c: 89
    }, {
        s: 41,
        a: 17,
        c: 74
    }, {
        s: 41,
        a: 18,
        c: 27
    }, {
        s: 41,
        a: 19,
        c: 34
    }, {
        s: 41,
        a: 20,
        c: 56
    }, {
        s: 41,
        a: 21,
        c: 78
    }, {
        s: 41,
        a: 22,
        c: 84
    }, {
        s: 41,
        a: 23,
        c: 46
    }, {
        s: 41,
        a: 24,
        c: 48
    }, {
        s: 41,
        a: 25,
        c: 99
    }, {
        s: 41,
        a: 26,
        c: 52
    }, {
        s: 41,
        a: 27,
        c: 55
    }, {
        s: 41,
        a: 28,
        c: 61
    }, {
        s: 41,
        a: 29,
        c: 79
    }, {
        s: 41,
        a: 30,
        c: 93
    }, {
        s: 41,
        a: 31,
        c: 70
    }, {
        s: 41,
        a: 32,
        c: 14
    }, {
        s: 41,
        a: 33,
        c: 51
    }, {
        s: 41,
        a: 34,
        c: 71
    }, {
        s: 41,
        a: 35,
        c: 42
    }, {
        s: 41,
        a: 36,
        c: 50
    }, {
        s: 41,
        a: 37,
        c: 88
    }, {
        s: 41,
        a: 38,
        c: 55
    }, {
        s: 41,
        a: 39,
        c: 91
    }, {
        s: 41,
        a: 40,
        c: 101
    }, {
        s: 41,
        a: 41,
        c: 39
    }, {
        s: 41,
        a: 42,
        c: 46
    }, {
        s: 41,
        a: 43,
        c: 53
    }, {
        s: 41,
        a: 44,
        c: 129
    }, {
        s: 41,
        a: 45,
        c: 72
    }, {
        s: 41,
        a: 46,
        c: 46
    }, {
        s: 41,
        a: 47,
        c: 107
    }, {
        s: 41,
        a: 48,
        c: 40
    }, {
        s: 41,
        a: 49,
        c: 43
    }, {
        s: 41,
        a: 50,
        c: 130
    }, {
        s: 41,
        a: 51,
        c: 56
    }, {
        s: 41,
        a: 52,
        c: 51
    }, {
        s: 41,
        a: 53,
        c: 73
    }, {
        s: 41,
        a: 54,
        c: 39
    }, {
        s: 42,
        a: 1,
        c: 2
    }, {
        s: 42,
        a: 2,
        c: 3
    }, {
        s: 42,
        a: 3,
        c: 43
    }, {
        s: 42,
        a: 4,
        c: 38
    }, {
        s: 42,
        a: 5,
        c: 90
    }, {
        s: 42,
        a: 6,
        c: 53
    }, {
        s: 42,
        a: 7,
        c: 90
    }, {
        s: 42,
        a: 8,
        c: 71
    }, {
        s: 42,
        a: 9,
        c: 60
    }, {
        s: 42,
        a: 10,
        c: 59
    }, {
        s: 42,
        a: 11,
        c: 89
    }, {
        s: 42,
        a: 12,
        c: 56
    }, {
        s: 42,
        a: 13,
        c: 152
    }, {
        s: 42,
        a: 14,
        c: 114
    }, {
        s: 42,
        a: 15,
        c: 149
    }, {
        s: 42,
        a: 16,
        c: 71
    }, {
        s: 42,
        a: 17,
        c: 52
    }, {
        s: 42,
        a: 18,
        c: 96
    }, {
        s: 42,
        a: 19,
        c: 38
    }, {
        s: 42,
        a: 20,
        c: 75
    }, {
        s: 42,
        a: 21,
        c: 84
    }, {
        s: 42,
        a: 22,
        c: 107
    }, {
        s: 42,
        a: 23,
        c: 118
    }, {
        s: 42,
        a: 24,
        c: 91
    }, {
        s: 42,
        a: 25,
        c: 51
    }, {
        s: 42,
        a: 26,
        c: 64
    }, {
        s: 42,
        a: 27,
        c: 68
    }, {
        s: 42,
        a: 28,
        c: 52
    }, {
        s: 42,
        a: 29,
        c: 63
    }, {
        s: 42,
        a: 30,
        c: 41
    }, {
        s: 42,
        a: 31,
        c: 48
    }, {
        s: 42,
        a: 32,
        c: 29
    }, {
        s: 42,
        a: 33,
        c: 55
    }, {
        s: 42,
        a: 34,
        c: 26
    }, {
        s: 42,
        a: 35,
        c: 36
    }, {
        s: 42,
        a: 36,
        c: 74
    }, {
        s: 42,
        a: 37,
        c: 50
    }, {
        s: 42,
        a: 38,
        c: 64
    }, {
        s: 42,
        a: 39,
        c: 29
    }, {
        s: 42,
        a: 40,
        c: 57
    }, {
        s: 42,
        a: 41,
        c: 35
    }, {
        s: 42,
        a: 42,
        c: 66
    }, {
        s: 42,
        a: 43,
        c: 28
    }, {
        s: 42,
        a: 44,
        c: 72
    }, {
        s: 42,
        a: 45,
        c: 123
    }, {
        s: 42,
        a: 46,
        c: 56
    }, {
        s: 42,
        a: 47,
        c: 68
    }, {
        s: 42,
        a: 48,
        c: 115
    }, {
        s: 42,
        a: 49,
        c: 62
    }, {
        s: 42,
        a: 50,
        c: 47
    }, {
        s: 42,
        a: 51,
        c: 77
    }, {
        s: 42,
        a: 52,
        c: 109
    }, {
        s: 42,
        a: 53,
        c: 56
    }, {
        s: 43,
        a: 1,
        c: 2
    }, {
        s: 43,
        a: 2,
        c: 13
    }, {
        s: 43,
        a: 3,
        c: 30
    }, {
        s: 43,
        a: 4,
        c: 27
    }, {
        s: 43,
        a: 5,
        c: 35
    }, {
        s: 43,
        a: 6,
        c: 23
    }, {
        s: 43,
        a: 7,
        c: 32
    }, {
        s: 43,
        a: 8,
        c: 32
    }, {
        s: 43,
        a: 9,
        c: 52
    }, {
        s: 43,
        a: 10,
        c: 45
    }, {
        s: 43,
        a: 11,
        c: 50
    }, {
        s: 43,
        a: 12,
        c: 49
    }, {
        s: 43,
        a: 13,
        c: 84
    }, {
        s: 43,
        a: 14,
        c: 19
    }, {
        s: 43,
        a: 15,
        c: 37
    }, {
        s: 43,
        a: 16,
        c: 31
    }, {
        s: 43,
        a: 17,
        c: 46
    }, {
        s: 43,
        a: 18,
        c: 34
    }, {
        s: 43,
        a: 19,
        c: 66
    }, {
        s: 43,
        a: 20,
        c: 53
    }, {
        s: 43,
        a: 21,
        c: 33
    }, {
        s: 43,
        a: 22,
        c: 46
    }, {
        s: 43,
        a: 23,
        c: 83
    }, {
        s: 43,
        a: 24,
        c: 60
    }, {
        s: 43,
        a: 25,
        c: 36
    }, {
        s: 43,
        a: 26,
        c: 40
    }, {
        s: 43,
        a: 27,
        c: 22
    }, {
        s: 43,
        a: 28,
        c: 32
    }, {
        s: 43,
        a: 29,
        c: 39
    }, {
        s: 43,
        a: 30,
        c: 36
    }, {
        s: 43,
        a: 31,
        c: 42
    }, {
        s: 43,
        a: 32,
        c: 111
    }, {
        s: 43,
        a: 33,
        c: 77
    }, {
        s: 43,
        a: 34,
        c: 30
    }, {
        s: 43,
        a: 35,
        c: 53
    }, {
        s: 43,
        a: 36,
        c: 38
    }, {
        s: 43,
        a: 37,
        c: 38
    }, {
        s: 43,
        a: 38,
        c: 49
    }, {
        s: 43,
        a: 39,
        c: 40
    }, {
        s: 43,
        a: 40,
        c: 40
    }, {
        s: 43,
        a: 41,
        c: 26
    }, {
        s: 43,
        a: 42,
        c: 34
    }, {
        s: 43,
        a: 43,
        c: 36
    }, {
        s: 43,
        a: 44,
        c: 26
    }, {
        s: 43,
        a: 45,
        c: 53
    }, {
        s: 43,
        a: 46,
        c: 55
    }, {
        s: 43,
        a: 47,
        c: 31
    }, {
        s: 43,
        a: 48,
        c: 55
    }, {
        s: 43,
        a: 49,
        c: 47
    }, {
        s: 43,
        a: 50,
        c: 30
    }, {
        s: 43,
        a: 51,
        c: 67
    }, {
        s: 43,
        a: 52,
        c: 34
    }, {
        s: 43,
        a: 53,
        c: 46
    }, {
        s: 43,
        a: 54,
        c: 36
    }, {
        s: 43,
        a: 55,
        c: 36
    }, {
        s: 43,
        a: 56,
        c: 24
    }, {
        s: 43,
        a: 57,
        c: 33
    }, {
        s: 43,
        a: 58,
        c: 48
    }, {
        s: 43,
        a: 59,
        c: 42
    }, {
        s: 43,
        a: 60,
        c: 36
    }, {
        s: 43,
        a: 61,
        c: 45
    }, {
        s: 43,
        a: 62,
        c: 29
    }, {
        s: 43,
        a: 63,
        c: 79
    }, {
        s: 43,
        a: 64,
        c: 36
    }, {
        s: 43,
        a: 65,
        c: 47
    }, {
        s: 43,
        a: 66,
        c: 40
    }, {
        s: 43,
        a: 67,
        c: 34
    }, {
        s: 43,
        a: 68,
        c: 34
    }, {
        s: 43,
        a: 69,
        c: 29
    }, {
        s: 43,
        a: 70,
        c: 29
    }, {
        s: 43,
        a: 71,
        c: 69
    }, {
        s: 43,
        a: 72,
        c: 35
    }, {
        s: 43,
        a: 73,
        c: 27
    }, {
        s: 43,
        a: 74,
        c: 26
    }, {
        s: 43,
        a: 75,
        c: 22
    }, {
        s: 43,
        a: 76,
        c: 29
    }, {
        s: 43,
        a: 77,
        c: 37
    }, {
        s: 43,
        a: 78,
        c: 34
    }, {
        s: 43,
        a: 79,
        c: 22
    }, {
        s: 43,
        a: 80,
        c: 48
    }, {
        s: 43,
        a: 81,
        c: 31
    }, {
        s: 43,
        a: 82,
        c: 36
    }, {
        s: 43,
        a: 83,
        c: 42
    }, {
        s: 43,
        a: 84,
        c: 44
    }, {
        s: 43,
        a: 85,
        c: 63
    }, {
        s: 43,
        a: 86,
        c: 52
    }, {
        s: 43,
        a: 87,
        c: 37
    }, {
        s: 43,
        a: 88,
        c: 27
    }, {
        s: 43,
        a: 89,
        c: 26
    }, {
        s: 44,
        a: 1,
        c: 2
    }, {
        s: 44,
        a: 2,
        c: 13
    }, {
        s: 44,
        a: 3,
        c: 34
    }, {
        s: 44,
        a: 4,
        c: 17
    }, {
        s: 44,
        a: 5,
        c: 23
    }, {
        s: 44,
        a: 6,
        c: 26
    }, {
        s: 44,
        a: 7,
        c: 37
    }, {
        s: 44,
        a: 8,
        c: 39
    }, {
        s: 44,
        a: 9,
        c: 14
    }, {
        s: 44,
        a: 10,
        c: 28
    }, {
        s: 44,
        a: 11,
        c: 20
    }, {
        s: 44,
        a: 12,
        c: 26
    }, {
        s: 44,
        a: 13,
        c: 28
    }, {
        s: 44,
        a: 14,
        c: 25
    }, {
        s: 44,
        a: 15,
        c: 29
    }, {
        s: 44,
        a: 16,
        c: 29
    }, {
        s: 44,
        a: 17,
        c: 35
    }, {
        s: 44,
        a: 18,
        c: 31
    }, {
        s: 44,
        a: 19,
        c: 35
    }, {
        s: 44,
        a: 20,
        c: 24
    }, {
        s: 44,
        a: 21,
        c: 21
    }, {
        s: 44,
        a: 22,
        c: 23
    }, {
        s: 44,
        a: 23,
        c: 24
    }, {
        s: 44,
        a: 24,
        c: 27
    }, {
        s: 44,
        a: 25,
        c: 18
    }, {
        s: 44,
        a: 26,
        c: 14
    }, {
        s: 44,
        a: 27,
        c: 20
    }, {
        s: 44,
        a: 28,
        c: 22
    }, {
        s: 44,
        a: 29,
        c: 37
    }, {
        s: 44,
        a: 30,
        c: 33
    }, {
        s: 44,
        a: 31,
        c: 28
    }, {
        s: 44,
        a: 32,
        c: 29
    }, {
        s: 44,
        a: 33,
        c: 29
    }, {
        s: 44,
        a: 34,
        c: 14
    }, {
        s: 44,
        a: 35,
        c: 32
    }, {
        s: 44,
        a: 36,
        c: 24
    }, {
        s: 44,
        a: 37,
        c: 50
    }, {
        s: 44,
        a: 38,
        c: 37
    }, {
        s: 44,
        a: 39,
        c: 36
    }, {
        s: 44,
        a: 40,
        c: 23
    }, {
        s: 44,
        a: 41,
        c: 34
    }, {
        s: 44,
        a: 42,
        c: 29
    }, {
        s: 44,
        a: 43,
        c: 12
    }, {
        s: 44,
        a: 44,
        c: 10
    }, {
        s: 44,
        a: 45,
        c: 18
    }, {
        s: 44,
        a: 46,
        c: 10
    }, {
        s: 44,
        a: 47,
        c: 24
    }, {
        s: 44,
        a: 48,
        c: 25
    }, {
        s: 44,
        a: 49,
        c: 20
    }, {
        s: 44,
        a: 50,
        c: 19
    }, {
        s: 44,
        a: 51,
        c: 19
    }, {
        s: 44,
        a: 52,
        c: 11
    }, {
        s: 44,
        a: 53,
        c: 27
    }, {
        s: 44,
        a: 54,
        c: 19
    }, {
        s: 44,
        a: 55,
        c: 22
    }, {
        s: 44,
        a: 56,
        c: 48
    }, {
        s: 44,
        a: 57,
        c: 25
    }, {
        s: 44,
        a: 58,
        c: 29
    }, {
        s: 44,
        a: 59,
        c: 17
    }, {
        s: 45,
        a: 1,
        c: 2
    }, {
        s: 45,
        a: 2,
        c: 29
    }, {
        s: 45,
        a: 3,
        c: 31
    }, {
        s: 45,
        a: 4,
        c: 34
    }, {
        s: 45,
        a: 5,
        c: 89
    }, {
        s: 45,
        a: 6,
        c: 53
    }, {
        s: 45,
        a: 7,
        c: 14
    }, {
        s: 45,
        a: 8,
        c: 57
    }, {
        s: 45,
        a: 9,
        c: 45
    }, {
        s: 45,
        a: 10,
        c: 72
    }, {
        s: 45,
        a: 11,
        c: 42
    }, {
        s: 45,
        a: 12,
        c: 63
    }, {
        s: 45,
        a: 13,
        c: 60
    }, {
        s: 45,
        a: 14,
        c: 61
    }, {
        s: 45,
        a: 15,
        c: 44
    }, {
        s: 45,
        a: 16,
        c: 74
    }, {
        s: 45,
        a: 17,
        c: 102
    }, {
        s: 45,
        a: 18,
        c: 55
    }, {
        s: 45,
        a: 19,
        c: 64
    }, {
        s: 45,
        a: 20,
        c: 32
    }, {
        s: 45,
        a: 21,
        c: 85
    }, {
        s: 45,
        a: 22,
        c: 56
    }, {
        s: 45,
        a: 23,
        c: 94
    }, {
        s: 45,
        a: 24,
        c: 78
    }, {
        s: 45,
        a: 25,
        c: 68
    }, {
        s: 45,
        a: 26,
        c: 70
    }, {
        s: 45,
        a: 27,
        c: 52
    }, {
        s: 45,
        a: 28,
        c: 54
    }, {
        s: 45,
        a: 29,
        c: 47
    }, {
        s: 45,
        a: 30,
        c: 62
    }, {
        s: 45,
        a: 31,
        c: 59
    }, {
        s: 45,
        a: 32,
        c: 78
    }, {
        s: 45,
        a: 33,
        c: 43
    }, {
        s: 45,
        a: 34,
        c: 61
    }, {
        s: 45,
        a: 35,
        c: 76
    }, {
        s: 45,
        a: 36,
        c: 37
    }, {
        s: 45,
        a: 37,
        c: 42
    }, {
        s: 46,
        a: 1,
        c: 2
    }, {
        s: 46,
        a: 2,
        c: 29
    }, {
        s: 46,
        a: 3,
        c: 72
    }, {
        s: 46,
        a: 4,
        c: 106
    }, {
        s: 46,
        a: 5,
        c: 64
    }, {
        s: 46,
        a: 6,
        c: 45
    }, {
        s: 46,
        a: 7,
        c: 59
    }, {
        s: 46,
        a: 8,
        c: 99
    }, {
        s: 46,
        a: 9,
        c: 74
    }, {
        s: 46,
        a: 10,
        c: 95
    }, {
        s: 46,
        a: 11,
        c: 76
    }, {
        s: 46,
        a: 12,
        c: 75
    }, {
        s: 46,
        a: 13,
        c: 52
    }, {
        s: 46,
        a: 14,
        c: 43
    }, {
        s: 46,
        a: 15,
        c: 193
    }, {
        s: 46,
        a: 16,
        c: 81
    }, {
        s: 46,
        a: 17,
        c: 113
    }, {
        s: 46,
        a: 18,
        c: 66
    }, {
        s: 46,
        a: 19,
        c: 43
    }, {
        s: 46,
        a: 20,
        c: 129
    }, {
        s: 46,
        a: 21,
        c: 95
    }, {
        s: 46,
        a: 22,
        c: 54
    }, {
        s: 46,
        a: 23,
        c: 55
    }, {
        s: 46,
        a: 24,
        c: 75
    }, {
        s: 46,
        a: 25,
        c: 60
    }, {
        s: 46,
        a: 26,
        c: 138
    }, {
        s: 46,
        a: 27,
        c: 47
    }, {
        s: 46,
        a: 28,
        c: 73
    }, {
        s: 46,
        a: 29,
        c: 80
    }, {
        s: 46,
        a: 30,
        c: 78
    }, {
        s: 46,
        a: 31,
        c: 60
    }, {
        s: 46,
        a: 32,
        c: 65
    }, {
        s: 46,
        a: 33,
        c: 85
    }, {
        s: 46,
        a: 34,
        c: 79
    }, {
        s: 46,
        a: 35,
        c: 107
    }, {
        s: 47,
        a: 1,
        c: 35
    }, {
        s: 47,
        a: 2,
        c: 81
    }, {
        s: 47,
        a: 3,
        c: 81
    }, {
        s: 47,
        a: 4,
        c: 167
    }, {
        s: 47,
        a: 5,
        c: 17
    }, {
        s: 47,
        a: 6,
        c: 20
    }, {
        s: 47,
        a: 7,
        c: 46
    }, {
        s: 47,
        a: 8,
        c: 30
    }, {
        s: 47,
        a: 9,
        c: 35
    }, {
        s: 47,
        a: 10,
        c: 75
    }, {
        s: 47,
        a: 11,
        c: 44
    }, {
        s: 47,
        a: 12,
        c: 108
    }, {
        s: 47,
        a: 13,
        c: 54
    }, {
        s: 47,
        a: 14,
        c: 48
    }, {
        s: 47,
        a: 15,
        c: 172
    }, {
        s: 47,
        a: 16,
        c: 104
    }, {
        s: 47,
        a: 17,
        c: 32
    }, {
        s: 47,
        a: 18,
        c: 65
    }, {
        s: 47,
        a: 19,
        c: 73
    }, {
        s: 47,
        a: 20,
        c: 117
    }, {
        s: 47,
        a: 21,
        c: 48
    }, {
        s: 47,
        a: 22,
        c: 45
    }, {
        s: 47,
        a: 23,
        c: 37
    }, {
        s: 47,
        a: 24,
        c: 33
    }, {
        s: 47,
        a: 25,
        c: 63
    }, {
        s: 47,
        a: 26,
        c: 65
    }, {
        s: 47,
        a: 27,
        c: 41
    }, {
        s: 47,
        a: 28,
        c: 48
    }, {
        s: 47,
        a: 29,
        c: 40
    }, {
        s: 47,
        a: 30,
        c: 66
    }, {
        s: 47,
        a: 31,
        c: 50
    }, {
        s: 47,
        a: 32,
        c: 86
    }, {
        s: 47,
        a: 33,
        c: 55
    }, {
        s: 47,
        a: 34,
        c: 55
    }, {
        s: 47,
        a: 35,
        c: 58
    }, {
        s: 47,
        a: 36,
        c: 65
    }, {
        s: 47,
        a: 37,
        c: 35
    }, {
        s: 47,
        a: 38,
        c: 129
    }, {
        s: 48,
        a: 1,
        c: 19
    }, {
        s: 48,
        a: 2,
        c: 61
    }, {
        s: 48,
        a: 3,
        c: 19
    }, {
        s: 48,
        a: 4,
        c: 94
    }, {
        s: 48,
        a: 5,
        c: 93
    }, {
        s: 48,
        a: 6,
        c: 116
    }, {
        s: 48,
        a: 7,
        c: 40
    }, {
        s: 48,
        a: 8,
        c: 27
    }, {
        s: 48,
        a: 9,
        c: 49
    }, {
        s: 48,
        a: 10,
        c: 105
    }, {
        s: 48,
        a: 11,
        c: 151
    }, {
        s: 48,
        a: 12,
        c: 85
    }, {
        s: 48,
        a: 13,
        c: 43
    }, {
        s: 48,
        a: 14,
        c: 61
    }, {
        s: 48,
        a: 15,
        c: 141
    }, {
        s: 48,
        a: 16,
        c: 124
    }, {
        s: 48,
        a: 17,
        c: 110
    }, {
        s: 48,
        a: 18,
        c: 86
    }, {
        s: 48,
        a: 19,
        c: 37
    }, {
        s: 48,
        a: 20,
        c: 89
    }, {
        s: 48,
        a: 21,
        c: 52
    }, {
        s: 48,
        a: 22,
        c: 52
    }, {
        s: 48,
        a: 23,
        c: 41
    }, {
        s: 48,
        a: 24,
        c: 77
    }, {
        s: 48,
        a: 25,
        c: 179
    }, {
        s: 48,
        a: 26,
        c: 130
    }, {
        s: 48,
        a: 27,
        c: 120
    }, {
        s: 48,
        a: 28,
        c: 60
    }, {
        s: 48,
        a: 29,
        c: 249
    }, {
        s: 49,
        a: 1,
        c: 64
    }, {
        s: 49,
        a: 2,
        c: 98
    }, {
        s: 49,
        a: 3,
        c: 77
    }, {
        s: 49,
        a: 4,
        c: 41
    }, {
        s: 49,
        a: 5,
        c: 48
    }, {
        s: 49,
        a: 6,
        c: 79
    }, {
        s: 49,
        a: 7,
        c: 127
    }, {
        s: 49,
        a: 8,
        c: 28
    }, {
        s: 49,
        a: 9,
        c: 144
    }, {
        s: 49,
        a: 10,
        c: 53
    }, {
        s: 49,
        a: 11,
        c: 159
    }, {
        s: 49,
        a: 12,
        c: 129
    }, {
        s: 49,
        a: 13,
        c: 93
    }, {
        s: 49,
        a: 14,
        c: 116
    }, {
        s: 49,
        a: 15,
        c: 91
    }, {
        s: 49,
        a: 16,
        c: 65
    }, {
        s: 49,
        a: 17,
        c: 76
    }, {
        s: 49,
        a: 18,
        c: 45
    }, {
        s: 50,
        a: 1,
        c: 14
    }, {
        s: 50,
        a: 2,
        c: 44
    }, {
        s: 50,
        a: 3,
        c: 27
    }, {
        s: 50,
        a: 4,
        c: 36
    }, {
        s: 50,
        a: 5,
        c: 32
    }, {
        s: 50,
        a: 6,
        c: 53
    }, {
        s: 50,
        a: 7,
        c: 51
    }, {
        s: 50,
        a: 8,
        c: 20
    }, {
        s: 50,
        a: 9,
        c: 45
    }, {
        s: 50,
        a: 10,
        c: 22
    }, {
        s: 50,
        a: 11,
        c: 37
    }, {
        s: 50,
        a: 12,
        c: 30
    }, {
        s: 50,
        a: 13,
        c: 19
    }, {
        s: 50,
        a: 14,
        c: 36
    }, {
        s: 50,
        a: 15,
        c: 36
    }, {
        s: 50,
        a: 16,
        c: 57
    }, {
        s: 50,
        a: 17,
        c: 37
    }, {
        s: 50,
        a: 18,
        c: 26
    }, {
        s: 50,
        a: 19,
        c: 34
    }, {
        s: 50,
        a: 20,
        c: 23
    }, {
        s: 50,
        a: 21,
        c: 23
    }, {
        s: 50,
        a: 22,
        c: 45
    }, {
        s: 50,
        a: 23,
        c: 21
    }, {
        s: 50,
        a: 24,
        c: 21
    }, {
        s: 50,
        a: 25,
        c: 17
    }, {
        s: 50,
        a: 26,
        c: 41
    }, {
        s: 50,
        a: 27,
        c: 37
    }, {
        s: 50,
        a: 28,
        c: 34
    }, {
        s: 50,
        a: 29,
        c: 31
    }, {
        s: 50,
        a: 30,
        c: 33
    }, {
        s: 50,
        a: 31,
        c: 25
    }, {
        s: 50,
        a: 32,
        c: 22
    }, {
        s: 50,
        a: 33,
        c: 29
    }, {
        s: 50,
        a: 34,
        c: 24
    }, {
        s: 50,
        a: 35,
        c: 25
    }, {
        s: 50,
        a: 36,
        c: 54
    }, {
        s: 50,
        a: 37,
        c: 41
    }, {
        s: 50,
        a: 38,
        c: 54
    }, {
        s: 50,
        a: 39,
        c: 49
    }, {
        s: 50,
        a: 40,
        c: 25
    }, {
        s: 50,
        a: 41,
        c: 29
    }, {
        s: 50,
        a: 42,
        c: 32
    }, {
        s: 50,
        a: 43,
        c: 27
    }, {
        s: 50,
        a: 44,
        c: 36
    }, {
        s: 50,
        a: 45,
        c: 53
    }, {
        s: 51,
        a: 1,
        c: 13
    }, {
        s: 51,
        a: 2,
        c: 13
    }, {
        s: 51,
        a: 3,
        c: 13
    }, {
        s: 51,
        a: 4,
        c: 13
    }, {
        s: 51,
        a: 5,
        c: 15
    }, {
        s: 51,
        a: 6,
        c: 13
    }, {
        s: 51,
        a: 7,
        c: 15
    }, {
        s: 51,
        a: 8,
        c: 15
    }, {
        s: 51,
        a: 9,
        c: 12
    }, {
        s: 51,
        a: 10,
        c: 11
    }, {
        s: 51,
        a: 11,
        c: 18
    }, {
        s: 51,
        a: 12,
        c: 18
    }, {
        s: 51,
        a: 13,
        c: 19
    }, {
        s: 51,
        a: 14,
        c: 32
    }, {
        s: 51,
        a: 15,
        c: 20
    }, {
        s: 51,
        a: 16,
        c: 37
    }, {
        s: 51,
        a: 17,
        c: 25
    }, {
        s: 51,
        a: 18,
        c: 19
    }, {
        s: 51,
        a: 19,
        c: 26
    }, {
        s: 51,
        a: 20,
        c: 20
    }, {
        s: 51,
        a: 21,
        c: 19
    }, {
        s: 51,
        a: 22,
        c: 23
    }, {
        s: 51,
        a: 23,
        c: 37
    }, {
        s: 51,
        a: 24,
        c: 28
    }, {
        s: 51,
        a: 25,
        c: 38
    }, {
        s: 51,
        a: 26,
        c: 23
    }, {
        s: 51,
        a: 27,
        c: 22
    }, {
        s: 51,
        a: 28,
        c: 38
    }, {
        s: 51,
        a: 29,
        c: 39
    }, {
        s: 51,
        a: 30,
        c: 32
    }, {
        s: 51,
        a: 31,
        c: 23
    }, {
        s: 51,
        a: 32,
        c: 26
    }, {
        s: 51,
        a: 33,
        c: 20
    }, {
        s: 51,
        a: 34,
        c: 19
    }, {
        s: 51,
        a: 35,
        c: 26
    }, {
        s: 51,
        a: 36,
        c: 28
    }, {
        s: 51,
        a: 37,
        c: 36
    }, {
        s: 51,
        a: 38,
        c: 34
    }, {
        s: 51,
        a: 39,
        c: 25
    }, {
        s: 51,
        a: 40,
        c: 34
    }, {
        s: 51,
        a: 41,
        c: 30
    }, {
        s: 51,
        a: 42,
        c: 32
    }, {
        s: 51,
        a: 43,
        c: 27
    }, {
        s: 51,
        a: 44,
        c: 37
    }, {
        s: 51,
        a: 45,
        c: 32
    }, {
        s: 51,
        a: 46,
        c: 31
    }, {
        s: 51,
        a: 47,
        c: 29
    }, {
        s: 51,
        a: 48,
        c: 25
    }, {
        s: 51,
        a: 49,
        c: 29
    }, {
        s: 51,
        a: 50,
        c: 29
    }, {
        s: 51,
        a: 51,
        c: 39
    }, {
        s: 51,
        a: 52,
        c: 46
    }, {
        s: 51,
        a: 53,
        c: 21
    }, {
        s: 51,
        a: 54,
        c: 19
    }, {
        s: 51,
        a: 55,
        c: 25
    }, {
        s: 51,
        a: 56,
        c: 27
    }, {
        s: 51,
        a: 57,
        c: 30
    }, {
        s: 51,
        a: 58,
        c: 27
    }, {
        s: 51,
        a: 59,
        c: 43
    }, {
        s: 51,
        a: 60,
        c: 31
    }, {
        s: 52,
        a: 1,
        c: 6
    }, {
        s: 52,
        a: 2,
        c: 10
    }, {
        s: 52,
        a: 3,
        c: 9
    }, {
        s: 52,
        a: 4,
        c: 13
    }, {
        s: 52,
        a: 5,
        c: 13
    }, {
        s: 52,
        a: 6,
        c: 13
    }, {
        s: 52,
        a: 7,
        c: 14
    }, {
        s: 52,
        a: 8,
        c: 10
    }, {
        s: 52,
        a: 9,
        c: 17
    }, {
        s: 52,
        a: 10,
        c: 15
    }, {
        s: 52,
        a: 11,
        c: 17
    }, {
        s: 52,
        a: 12,
        c: 18
    }, {
        s: 52,
        a: 13,
        c: 21
    }, {
        s: 52,
        a: 14,
        c: 25
    }, {
        s: 52,
        a: 15,
        c: 22
    }, {
        s: 52,
        a: 16,
        c: 53
    }, {
        s: 52,
        a: 17,
        c: 20
    }, {
        s: 52,
        a: 18,
        c: 38
    }, {
        s: 52,
        a: 19,
        c: 29
    }, {
        s: 52,
        a: 20,
        c: 33
    }, {
        s: 52,
        a: 21,
        c: 84
    }, {
        s: 52,
        a: 22,
        c: 28
    }, {
        s: 52,
        a: 23,
        c: 33
    }, {
        s: 52,
        a: 24,
        c: 32
    }, {
        s: 52,
        a: 25,
        c: 24
    }, {
        s: 52,
        a: 26,
        c: 27
    }, {
        s: 52,
        a: 27,
        c: 28
    }, {
        s: 52,
        a: 28,
        c: 31
    }, {
        s: 52,
        a: 29,
        c: 31
    }, {
        s: 52,
        a: 30,
        c: 28
    }, {
        s: 52,
        a: 31,
        c: 27
    }, {
        s: 52,
        a: 32,
        c: 31
    }, {
        s: 52,
        a: 33,
        c: 23
    }, {
        s: 52,
        a: 34,
        c: 29
    }, {
        s: 52,
        a: 35,
        c: 27
    }, {
        s: 52,
        a: 36,
        c: 31
    }, {
        s: 52,
        a: 37,
        c: 28
    }, {
        s: 52,
        a: 38,
        c: 40
    }, {
        s: 52,
        a: 39,
        c: 20
    }, {
        s: 52,
        a: 40,
        c: 27
    }, {
        s: 52,
        a: 41,
        c: 21
    }, {
        s: 52,
        a: 42,
        c: 33
    }, {
        s: 52,
        a: 43,
        c: 33
    }, {
        s: 52,
        a: 44,
        c: 39
    }, {
        s: 52,
        a: 45,
        c: 32
    }, {
        s: 52,
        a: 46,
        c: 33
    }, {
        s: 52,
        a: 47,
        c: 42
    }, {
        s: 52,
        a: 48,
        c: 41
    }, {
        s: 52,
        a: 49,
        c: 25
    }, {
        s: 53,
        a: 1,
        c: 12
    }, {
        s: 53,
        a: 2,
        c: 16
    }, {
        s: 53,
        a: 3,
        c: 14
    }, {
        s: 53,
        a: 4,
        c: 14
    }, {
        s: 53,
        a: 5,
        c: 13
    }, {
        s: 53,
        a: 6,
        c: 11
    }, {
        s: 53,
        a: 7,
        c: 15
    }, {
        s: 53,
        a: 8,
        c: 10
    }, {
        s: 53,
        a: 9,
        c: 18
    }, {
        s: 53,
        a: 10,
        c: 18
    }, {
        s: 53,
        a: 11,
        c: 16
    }, {
        s: 53,
        a: 12,
        c: 17
    }, {
        s: 53,
        a: 13,
        c: 15
    }, {
        s: 53,
        a: 14,
        c: 14
    }, {
        s: 53,
        a: 15,
        c: 14
    }, {
        s: 53,
        a: 16,
        c: 18
    }, {
        s: 53,
        a: 17,
        c: 16
    }, {
        s: 53,
        a: 18,
        c: 21
    }, {
        s: 53,
        a: 19,
        c: 18
    }, {
        s: 53,
        a: 20,
        c: 18
    }, {
        s: 53,
        a: 21,
        c: 18
    }, {
        s: 53,
        a: 22,
        c: 14
    }, {
        s: 53,
        a: 23,
        c: 99
    }, {
        s: 53,
        a: 24,
        c: 15
    }, {
        s: 53,
        a: 25,
        c: 17
    }, {
        s: 53,
        a: 26,
        c: 65
    }, {
        s: 53,
        a: 27,
        c: 47
    }, {
        s: 53,
        a: 28,
        c: 51
    }, {
        s: 53,
        a: 29,
        c: 41
    }, {
        s: 53,
        a: 30,
        c: 54
    }, {
        s: 53,
        a: 31,
        c: 73
    }, {
        s: 53,
        a: 32,
        c: 129
    }, {
        s: 53,
        a: 33,
        c: 14
    }, {
        s: 53,
        a: 34,
        c: 15
    }, {
        s: 53,
        a: 35,
        c: 19
    }, {
        s: 53,
        a: 36,
        c: 20
    }, {
        s: 53,
        a: 37,
        c: 15
    }, {
        s: 53,
        a: 38,
        c: 18
    }, {
        s: 53,
        a: 39,
        c: 21
    }, {
        s: 53,
        a: 40,
        c: 13
    }, {
        s: 53,
        a: 41,
        c: 19
    }, {
        s: 53,
        a: 42,
        c: 16
    }, {
        s: 53,
        a: 43,
        c: 15
    }, {
        s: 53,
        a: 44,
        c: 15
    }, {
        s: 53,
        a: 45,
        c: 26
    }, {
        s: 53,
        a: 46,
        c: 13
    }, {
        s: 53,
        a: 47,
        c: 19
    }, {
        s: 53,
        a: 48,
        c: 15
    }, {
        s: 53,
        a: 49,
        c: 14
    }, {
        s: 53,
        a: 50,
        c: 18
    }, {
        s: 53,
        a: 51,
        c: 12
    }, {
        s: 53,
        a: 52,
        c: 32
    }, {
        s: 53,
        a: 53,
        c: 13
    }, {
        s: 53,
        a: 54,
        c: 11
    }, {
        s: 53,
        a: 55,
        c: 17
    }, {
        s: 53,
        a: 56,
        c: 20
    }, {
        s: 53,
        a: 57,
        c: 10
    }, {
        s: 53,
        a: 58,
        c: 20
    }, {
        s: 53,
        a: 59,
        c: 19
    }, {
        s: 53,
        a: 60,
        c: 15
    }, {
        s: 53,
        a: 61,
        c: 11
    }, {
        s: 53,
        a: 62,
        c: 17
    }, {
        s: 54,
        a: 1,
        c: 22
    }, {
        s: 54,
        a: 2,
        c: 31
    }, {
        s: 54,
        a: 3,
        c: 31
    }, {
        s: 54,
        a: 4,
        c: 28
    }, {
        s: 54,
        a: 5,
        c: 20
    }, {
        s: 54,
        a: 6,
        c: 28
    }, {
        s: 54,
        a: 7,
        c: 40
    }, {
        s: 54,
        a: 8,
        c: 35
    }, {
        s: 54,
        a: 9,
        c: 43
    }, {
        s: 54,
        a: 10,
        c: 21
    }, {
        s: 54,
        a: 11,
        c: 26
    }, {
        s: 54,
        a: 12,
        c: 38
    }, {
        s: 54,
        a: 13,
        c: 22
    }, {
        s: 54,
        a: 14,
        c: 24
    }, {
        s: 54,
        a: 15,
        c: 23
    }, {
        s: 54,
        a: 16,
        c: 16
    }, {
        s: 54,
        a: 17,
        c: 29
    }, {
        s: 54,
        a: 18,
        c: 23
    }, {
        s: 54,
        a: 19,
        c: 36
    }, {
        s: 54,
        a: 20,
        c: 27
    }, {
        s: 54,
        a: 21,
        c: 16
    }, {
        s: 54,
        a: 22,
        c: 29
    }, {
        s: 54,
        a: 23,
        c: 14
    }, {
        s: 54,
        a: 24,
        c: 41
    }, {
        s: 54,
        a: 25,
        c: 32
    }, {
        s: 54,
        a: 26,
        c: 23
    }, {
        s: 54,
        a: 27,
        c: 35
    }, {
        s: 54,
        a: 28,
        c: 32
    }, {
        s: 54,
        a: 29,
        c: 22
    }, {
        s: 54,
        a: 30,
        c: 16
    }, {
        s: 54,
        a: 31,
        c: 41
    }, {
        s: 54,
        a: 32,
        c: 29
    }, {
        s: 54,
        a: 33,
        c: 16
    }, {
        s: 54,
        a: 34,
        c: 38
    }, {
        s: 54,
        a: 35,
        c: 24
    }, {
        s: 54,
        a: 36,
        c: 29
    }, {
        s: 54,
        a: 37,
        c: 43
    }, {
        s: 54,
        a: 38,
        c: 22
    }, {
        s: 54,
        a: 39,
        c: 15
    }, {
        s: 54,
        a: 40,
        c: 29
    }, {
        s: 54,
        a: 41,
        c: 19
    }, {
        s: 54,
        a: 42,
        c: 36
    }, {
        s: 54,
        a: 43,
        c: 35
    }, {
        s: 54,
        a: 44,
        c: 20
    }, {
        s: 54,
        a: 45,
        c: 21
    }, {
        s: 54,
        a: 46,
        c: 29
    }, {
        s: 54,
        a: 47,
        c: 20
    }, {
        s: 54,
        a: 48,
        c: 35
    }, {
        s: 54,
        a: 49,
        c: 18
    }, {
        s: 54,
        a: 50,
        c: 26
    }, {
        s: 54,
        a: 51,
        c: 26
    }, {
        s: 54,
        a: 52,
        c: 18
    }, {
        s: 54,
        a: 53,
        c: 17
    }, {
        s: 54,
        a: 54,
        c: 19
    }, {
        s: 54,
        a: 55,
        c: 21
    }, {
        s: 55,
        a: 1,
        c: 6
    }, {
        s: 55,
        a: 2,
        c: 9
    }, {
        s: 55,
        a: 3,
        c: 10
    }, {
        s: 55,
        a: 4,
        c: 10
    }, {
        s: 55,
        a: 5,
        c: 17
    }, {
        s: 55,
        a: 6,
        c: 18
    }, {
        s: 55,
        a: 7,
        c: 23
    }, {
        s: 55,
        a: 8,
        c: 17
    }, {
        s: 55,
        a: 9,
        c: 34
    }, {
        s: 55,
        a: 10,
        c: 17
    }, {
        s: 55,
        a: 11,
        c: 25
    }, {
        s: 55,
        a: 12,
        c: 20
    }, {
        s: 55,
        a: 13,
        c: 19
    }, {
        s: 55,
        a: 14,
        c: 24
    }, {
        s: 55,
        a: 15,
        c: 20
    }, {
        s: 55,
        a: 16,
        c: 19
    }, {
        s: 55,
        a: 17,
        c: 21
    }, {
        s: 55,
        a: 18,
        c: 19
    }, {
        s: 55,
        a: 19,
        c: 17
    }, {
        s: 55,
        a: 20,
        c: 18
    }, {
        s: 55,
        a: 21,
        c: 19
    }, {
        s: 55,
        a: 22,
        c: 23
    }, {
        s: 55,
        a: 23,
        c: 19
    }, {
        s: 55,
        a: 24,
        c: 31
    }, {
        s: 55,
        a: 25,
        c: 19
    }, {
        s: 55,
        a: 26,
        c: 12
    }, {
        s: 55,
        a: 27,
        c: 27
    }, {
        s: 55,
        a: 28,
        c: 19
    }, {
        s: 55,
        a: 29,
        c: 35
    }, {
        s: 55,
        a: 30,
        c: 19
    }, {
        s: 55,
        a: 31,
        c: 18
    }, {
        s: 55,
        a: 32,
        c: 19
    }, {
        s: 55,
        a: 33,
        c: 78
    }, {
        s: 55,
        a: 34,
        c: 19
    }, {
        s: 55,
        a: 35,
        c: 34
    }, {
        s: 55,
        a: 36,
        c: 19
    }, {
        s: 55,
        a: 37,
        c: 31
    }, {
        s: 55,
        a: 38,
        c: 19
    }, {
        s: 55,
        a: 39,
        c: 27
    }, {
        s: 55,
        a: 40,
        c: 19
    }, {
        s: 55,
        a: 41,
        c: 40
    }, {
        s: 55,
        a: 42,
        c: 19
    }, {
        s: 55,
        a: 43,
        c: 26
    }, {
        s: 55,
        a: 44,
        c: 21
    }, {
        s: 55,
        a: 45,
        c: 19
    }, {
        s: 55,
        a: 46,
        c: 19
    }, {
        s: 55,
        a: 47,
        c: 19
    }, {
        s: 55,
        a: 48,
        c: 10
    }, {
        s: 55,
        a: 49,
        c: 19
    }, {
        s: 55,
        a: 50,
        c: 16
    }, {
        s: 55,
        a: 51,
        c: 19
    }, {
        s: 55,
        a: 52,
        c: 19
    }, {
        s: 55,
        a: 53,
        c: 19
    }, {
        s: 55,
        a: 54,
        c: 41
    }, {
        s: 55,
        a: 55,
        c: 19
    }, {
        s: 55,
        a: 56,
        c: 37
    }, {
        s: 55,
        a: 57,
        c: 19
    }, {
        s: 55,
        a: 58,
        c: 20
    }, {
        s: 55,
        a: 59,
        c: 19
    }, {
        s: 55,
        a: 60,
        c: 23
    }, {
        s: 55,
        a: 61,
        c: 19
    }, {
        s: 55,
        a: 62,
        c: 14
    }, {
        s: 55,
        a: 63,
        c: 19
    }, {
        s: 55,
        a: 64,
        c: 8
    }, {
        s: 55,
        a: 65,
        c: 19
    }, {
        s: 55,
        a: 66,
        c: 17
    }, {
        s: 55,
        a: 67,
        c: 19
    }, {
        s: 55,
        a: 68,
        c: 19
    }, {
        s: 55,
        a: 69,
        c: 19
    }, {
        s: 55,
        a: 70,
        c: 13
    }, {
        s: 55,
        a: 71,
        c: 19
    }, {
        s: 55,
        a: 72,
        c: 18
    }, {
        s: 55,
        a: 73,
        c: 19
    }, {
        s: 55,
        a: 74,
        c: 22
    }, {
        s: 55,
        a: 75,
        c: 19
    }, {
        s: 55,
        a: 76,
        c: 26
    }, {
        s: 55,
        a: 77,
        c: 19
    }, {
        s: 55,
        a: 78,
        c: 27
    }, {
        s: 56,
        a: 1,
        c: 14
    }, {
        s: 56,
        a: 2,
        c: 15
    }, {
        s: 56,
        a: 3,
        c: 10
    }, {
        s: 56,
        a: 4,
        c: 14
    }, {
        s: 56,
        a: 5,
        c: 13
    }, {
        s: 56,
        a: 6,
        c: 14
    }, {
        s: 56,
        a: 7,
        c: 16
    }, {
        s: 56,
        a: 8,
        c: 27
    }, {
        s: 56,
        a: 9,
        c: 27
    }, {
        s: 56,
        a: 10,
        c: 17
    }, {
        s: 56,
        a: 11,
        c: 13
    }, {
        s: 56,
        a: 12,
        c: 12
    }, {
        s: 56,
        a: 13,
        c: 12
    }, {
        s: 56,
        a: 14,
        c: 14
    }, {
        s: 56,
        a: 15,
        c: 12
    }, {
        s: 56,
        a: 16,
        c: 19
    }, {
        s: 56,
        a: 17,
        c: 20
    }, {
        s: 56,
        a: 18,
        c: 23
    }, {
        s: 56,
        a: 19,
        c: 21
    }, {
        s: 56,
        a: 20,
        c: 16
    }, {
        s: 56,
        a: 21,
        c: 16
    }, {
        s: 56,
        a: 22,
        c: 7
    }, {
        s: 56,
        a: 23,
        c: 19
    }, {
        s: 56,
        a: 24,
        c: 18
    }, {
        s: 56,
        a: 25,
        c: 25
    }, {
        s: 56,
        a: 26,
        c: 17
    }, {
        s: 56,
        a: 27,
        c: 25
    }, {
        s: 56,
        a: 28,
        c: 10
    }, {
        s: 56,
        a: 29,
        c: 9
    }, {
        s: 56,
        a: 30,
        c: 8
    }, {
        s: 56,
        a: 31,
        c: 9
    }, {
        s: 56,
        a: 32,
        c: 11
    }, {
        s: 56,
        a: 33,
        c: 17
    }, {
        s: 56,
        a: 34,
        c: 10
    }, {
        s: 56,
        a: 35,
        c: 16
    }, {
        s: 56,
        a: 36,
        c: 14
    }, {
        s: 56,
        a: 37,
        c: 10
    }, {
        s: 56,
        a: 38,
        c: 12
    }, {
        s: 56,
        a: 39,
        c: 12
    }, {
        s: 56,
        a: 40,
        c: 13
    }, {
        s: 56,
        a: 41,
        c: 25
    }, {
        s: 56,
        a: 42,
        c: 11
    }, {
        s: 56,
        a: 43,
        c: 10
    }, {
        s: 56,
        a: 44,
        c: 13
    }, {
        s: 56,
        a: 45,
        c: 21
    }, {
        s: 56,
        a: 46,
        c: 25
    }, {
        s: 56,
        a: 47,
        c: 47
    }, {
        s: 56,
        a: 48,
        c: 15
    }, {
        s: 56,
        a: 49,
        c: 19
    }, {
        s: 56,
        a: 50,
        c: 24
    }, {
        s: 56,
        a: 51,
        c: 25
    }, {
        s: 56,
        a: 52,
        c: 17
    }, {
        s: 56,
        a: 53,
        c: 17
    }, {
        s: 56,
        a: 54,
        c: 19
    }, {
        s: 56,
        a: 55,
        c: 15
    }, {
        s: 56,
        a: 56,
        c: 16
    }, {
        s: 56,
        a: 57,
        c: 21
    }, {
        s: 56,
        a: 58,
        c: 14
    }, {
        s: 56,
        a: 59,
        c: 25
    }, {
        s: 56,
        a: 60,
        c: 32
    }, {
        s: 56,
        a: 61,
        c: 35
    }, {
        s: 56,
        a: 62,
        c: 32
    }, {
        s: 56,
        a: 63,
        c: 15
    }, {
        s: 56,
        a: 64,
        c: 25
    }, {
        s: 56,
        a: 65,
        c: 29
    }, {
        s: 56,
        a: 66,
        c: 10
    }, {
        s: 56,
        a: 67,
        c: 12
    }, {
        s: 56,
        a: 68,
        c: 22
    }, {
        s: 56,
        a: 69,
        c: 33
    }, {
        s: 56,
        a: 70,
        c: 28
    }, {
        s: 56,
        a: 71,
        c: 21
    }, {
        s: 56,
        a: 72,
        c: 30
    }, {
        s: 56,
        a: 73,
        c: 28
    }, {
        s: 56,
        a: 74,
        c: 17
    }, {
        s: 56,
        a: 75,
        c: 19
    }, {
        s: 56,
        a: 76,
        c: 20
    }, {
        s: 56,
        a: 77,
        c: 12
    }, {
        s: 56,
        a: 78,
        c: 11
    }, {
        s: 56,
        a: 79,
        c: 17
    }, {
        s: 56,
        a: 80,
        c: 17
    }, {
        s: 56,
        a: 81,
        c: 22
    }, {
        s: 56,
        a: 82,
        c: 22
    }, {
        s: 56,
        a: 83,
        c: 19
    }, {
        s: 56,
        a: 84,
        c: 16
    }, {
        s: 56,
        a: 85,
        c: 28
    }, {
        s: 56,
        a: 86,
        c: 20
    }, {
        s: 56,
        a: 87,
        c: 20
    }, {
        s: 56,
        a: 88,
        c: 19
    }, {
        s: 56,
        a: 89,
        c: 18
    }, {
        s: 56,
        a: 90,
        c: 22
    }, {
        s: 56,
        a: 91,
        c: 20
    }, {
        s: 56,
        a: 92,
        c: 26
    }, {
        s: 56,
        a: 93,
        c: 10
    }, {
        s: 56,
        a: 94,
        c: 10
    }, {
        s: 56,
        a: 95,
        c: 16
    }, {
        s: 56,
        a: 96,
        c: 17
    }, {
        s: 57,
        a: 1,
        c: 39
    }, {
        s: 57,
        a: 2,
        c: 43
    }, {
        s: 57,
        a: 3,
        c: 40
    }, {
        s: 57,
        a: 4,
        c: 134
    }, {
        s: 57,
        a: 5,
        c: 37
    }, {
        s: 57,
        a: 6,
        c: 52
    }, {
        s: 57,
        a: 7,
        c: 74
    }, {
        s: 57,
        a: 8,
        c: 69
    }, {
        s: 57,
        a: 9,
        c: 69
    }, {
        s: 57,
        a: 10,
        c: 153
    }, {
        s: 57,
        a: 11,
        c: 43
    }, {
        s: 57,
        a: 12,
        c: 109
    }, {
        s: 57,
        a: 13,
        c: 132
    }, {
        s: 57,
        a: 14,
        c: 99
    }, {
        s: 57,
        a: 15,
        c: 64
    }, {
        s: 57,
        a: 16,
        c: 118
    }, {
        s: 57,
        a: 17,
        c: 55
    }, {
        s: 57,
        a: 18,
        c: 57
    }, {
        s: 57,
        a: 19,
        c: 105
    }, {
        s: 57,
        a: 20,
        c: 180
    }, {
        s: 57,
        a: 21,
        c: 108
    }, {
        s: 57,
        a: 22,
        c: 69
    }, {
        s: 57,
        a: 23,
        c: 58
    }, {
        s: 57,
        a: 24,
        c: 56
    }, {
        s: 57,
        a: 25,
        c: 138
    }, {
        s: 57,
        a: 26,
        c: 74
    }, {
        s: 57,
        a: 27,
        c: 191
    }, {
        s: 57,
        a: 28,
        c: 94
    }, {
        s: 57,
        a: 29,
        c: 85
    }, {
        s: 58,
        a: 1,
        c: 73
    }, {
        s: 58,
        a: 2,
        c: 103
    }, {
        s: 58,
        a: 3,
        c: 90
    }, {
        s: 58,
        a: 4,
        c: 115
    }, {
        s: 58,
        a: 5,
        c: 81
    }, {
        s: 58,
        a: 6,
        c: 64
    }, {
        s: 58,
        a: 7,
        c: 163
    }, {
        s: 58,
        a: 8,
        c: 167
    }, {
        s: 58,
        a: 9,
        c: 105
    }, {
        s: 58,
        a: 10,
        c: 82
    }, {
        s: 58,
        a: 11,
        c: 139
    }, {
        s: 58,
        a: 12,
        c: 92
    }, {
        s: 58,
        a: 13,
        c: 115
    }, {
        s: 58,
        a: 14,
        c: 73
    }, {
        s: 58,
        a: 15,
        c: 40
    }, {
        s: 58,
        a: 16,
        c: 43
    }, {
        s: 58,
        a: 17,
        c: 64
    }, {
        s: 58,
        a: 18,
        c: 73
    }, {
        s: 58,
        a: 19,
        c: 72
    }, {
        s: 58,
        a: 20,
        c: 37
    }, {
        s: 58,
        a: 21,
        c: 34
    }, {
        s: 58,
        a: 22,
        c: 221
    }, {
        s: 59,
        a: 1,
        c: 43
    }, {
        s: 59,
        a: 2,
        c: 185
    }, {
        s: 59,
        a: 3,
        c: 60
    }, {
        s: 59,
        a: 4,
        c: 51
    }, {
        s: 59,
        a: 5,
        c: 60
    }, {
        s: 59,
        a: 6,
        c: 90
    }, {
        s: 59,
        a: 7,
        c: 166
    }, {
        s: 59,
        a: 8,
        c: 98
    }, {
        s: 59,
        a: 9,
        c: 134
    }, {
        s: 59,
        a: 10,
        c: 106
    }, {
        s: 59,
        a: 11,
        c: 129
    }, {
        s: 59,
        a: 12,
        c: 73
    }, {
        s: 59,
        a: 13,
        c: 45
    }, {
        s: 59,
        a: 14,
        c: 94
    }, {
        s: 59,
        a: 15,
        c: 47
    }, {
        s: 59,
        a: 16,
        c: 68
    }, {
        s: 59,
        a: 17,
        c: 50
    }, {
        s: 59,
        a: 18,
        c: 72
    }, {
        s: 59,
        a: 19,
        c: 51
    }, {
        s: 59,
        a: 20,
        c: 48
    }, {
        s: 59,
        a: 21,
        c: 84
    }, {
        s: 59,
        a: 22,
        c: 51
    }, {
        s: 59,
        a: 23,
        c: 87
    }, {
        s: 59,
        a: 24,
        c: 78
    }, {
        s: 60,
        a: 1,
        c: 220
    }, {
        s: 60,
        a: 2,
        c: 68
    }, {
        s: 60,
        a: 3,
        c: 62
    }, {
        s: 60,
        a: 4,
        c: 221
    }, {
        s: 60,
        a: 5,
        c: 56
    }, {
        s: 60,
        a: 6,
        c: 73
    }, {
        s: 60,
        a: 7,
        c: 63
    }, {
        s: 60,
        a: 8,
        c: 91
    }, {
        s: 60,
        a: 9,
        c: 101
    }, {
        s: 60,
        a: 10,
        c: 258
    }, {
        s: 60,
        a: 11,
        c: 94
    }, {
        s: 60,
        a: 12,
        c: 173
    }, {
        s: 60,
        a: 13,
        c: 80
    }, {
        s: 61,
        a: 1,
        c: 43
    }, {
        s: 61,
        a: 2,
        c: 34
    }, {
        s: 61,
        a: 3,
        c: 32
    }, {
        s: 61,
        a: 4,
        c: 46
    }, {
        s: 61,
        a: 5,
        c: 101
    }, {
        s: 61,
        a: 6,
        c: 129
    }, {
        s: 61,
        a: 7,
        c: 68
    }, {
        s: 61,
        a: 8,
        c: 54
    }, {
        s: 61,
        a: 9,
        c: 60
    }, {
        s: 61,
        a: 10,
        c: 47
    }, {
        s: 61,
        a: 11,
        c: 72
    }, {
        s: 61,
        a: 12,
        c: 75
    }, {
        s: 61,
        a: 13,
        c: 41
    }, {
        s: 61,
        a: 14,
        c: 164
    }, {
        s: 62,
        a: 1,
        c: 52
    }, {
        s: 62,
        a: 2,
        c: 92
    }, {
        s: 62,
        a: 3,
        c: 37
    }, {
        s: 62,
        a: 4,
        c: 39
    }, {
        s: 62,
        a: 5,
        c: 105
    }, {
        s: 62,
        a: 6,
        c: 71
    }, {
        s: 62,
        a: 7,
        c: 45
    }, {
        s: 62,
        a: 8,
        c: 79
    }, {
        s: 62,
        a: 9,
        c: 88
    }, {
        s: 62,
        a: 10,
        c: 72
    }, {
        s: 62,
        a: 11,
        c: 88
    }, {
        s: 63,
        a: 1,
        c: 82
    }, {
        s: 63,
        a: 2,
        c: 51
    }, {
        s: 63,
        a: 3,
        c: 44
    }, {
        s: 63,
        a: 4,
        c: 104
    }, {
        s: 63,
        a: 5,
        c: 66
    }, {
        s: 63,
        a: 6,
        c: 70
    }, {
        s: 63,
        a: 7,
        c: 90
    }, {
        s: 63,
        a: 8,
        c: 90
    }, {
        s: 63,
        a: 9,
        c: 75
    }, {
        s: 63,
        a: 10,
        c: 85
    }, {
        s: 63,
        a: 11,
        c: 44
    }, {
        s: 64,
        a: 1,
        c: 59
    }, {
        s: 64,
        a: 2,
        c: 47
    }, {
        s: 64,
        a: 3,
        c: 49
    }, {
        s: 64,
        a: 4,
        c: 62
    }, {
        s: 64,
        a: 5,
        c: 53
    }, {
        s: 64,
        a: 6,
        c: 82
    }, {
        s: 64,
        a: 7,
        c: 69
    }, {
        s: 64,
        a: 8,
        c: 51
    }, {
        s: 64,
        a: 9,
        c: 122
    }, {
        s: 64,
        a: 10,
        c: 59
    }, {
        s: 64,
        a: 11,
        c: 58
    }, {
        s: 64,
        a: 12,
        c: 59
    }, {
        s: 64,
        a: 13,
        c: 37
    }, {
        s: 64,
        a: 14,
        c: 87
    }, {
        s: 64,
        a: 15,
        c: 39
    }, {
        s: 64,
        a: 16,
        c: 79
    }, {
        s: 64,
        a: 17,
        c: 50
    }, {
        s: 64,
        a: 18,
        c: 29
    }, {
        s: 65,
        a: 1,
        c: 173
    }, {
        s: 65,
        a: 2,
        c: 132
    }, {
        s: 65,
        a: 3,
        c: 73
    }, {
        s: 65,
        a: 4,
        c: 118
    }, {
        s: 65,
        a: 5,
        c: 54
    }, {
        s: 65,
        a: 6,
        c: 146
    }, {
        s: 65,
        a: 7,
        c: 90
    }, {
        s: 65,
        a: 8,
        c: 64
    }, {
        s: 65,
        a: 9,
        c: 32
    }, {
        s: 65,
        a: 10,
        c: 72
    }, {
        s: 65,
        a: 11,
        c: 153
    }, {
        s: 65,
        a: 12,
        c: 96
    }, {
        s: 66,
        a: 1,
        c: 57
    }, {
        s: 66,
        a: 2,
        c: 49
    }, {
        s: 66,
        a: 3,
        c: 114
    }, {
        s: 66,
        a: 4,
        c: 92
    }, {
        s: 66,
        a: 5,
        c: 82
    }, {
        s: 66,
        a: 6,
        c: 107
    }, {
        s: 66,
        a: 7,
        c: 51
    }, {
        s: 66,
        a: 8,
        c: 194
    }, {
        s: 66,
        a: 9,
        c: 62
    }, {
        s: 66,
        a: 10,
        c: 121
    }, {
        s: 66,
        a: 11,
        c: 97
    }, {
        s: 66,
        a: 12,
        c: 79
    }, {
        s: 67,
        a: 1,
        c: 33
    }, {
        s: 67,
        a: 2,
        c: 53
    }, {
        s: 67,
        a: 3,
        c: 65
    }, {
        s: 67,
        a: 4,
        c: 42
    }, {
        s: 67,
        a: 5,
        c: 68
    }, {
        s: 67,
        a: 6,
        c: 34
    }, {
        s: 67,
        a: 7,
        c: 32
    }, {
        s: 67,
        a: 8,
        c: 53
    }, {
        s: 67,
        a: 9,
        c: 63
    }, {
        s: 67,
        a: 10,
        c: 39
    }, {
        s: 67,
        a: 11,
        c: 31
    }, {
        s: 67,
        a: 12,
        c: 38
    }, {
        s: 67,
        a: 13,
        c: 38
    }, {
        s: 67,
        a: 14,
        c: 27
    }, {
        s: 67,
        a: 15,
        c: 59
    }, {
        s: 67,
        a: 16,
        c: 40
    }, {
        s: 67,
        a: 17,
        c: 48
    }, {
        s: 67,
        a: 18,
        c: 30
    }, {
        s: 67,
        a: 19,
        c: 62
    }, {
        s: 67,
        a: 20,
        c: 54
    }, {
        s: 67,
        a: 21,
        c: 42
    }, {
        s: 67,
        a: 22,
        c: 47
    }, {
        s: 67,
        a: 23,
        c: 55
    }, {
        s: 67,
        a: 24,
        c: 31
    }, {
        s: 67,
        a: 25,
        c: 30
    }, {
        s: 67,
        a: 26,
        c: 34
    }, {
        s: 67,
        a: 27,
        c: 52
    }, {
        s: 67,
        a: 28,
        c: 58
    }, {
        s: 67,
        a: 29,
        c: 49
    }, {
        s: 67,
        a: 30,
        c: 40
    }, {
        s: 68,
        a: 1,
        c: 16
    }, {
        s: 68,
        a: 2,
        c: 19
    }, {
        s: 68,
        a: 3,
        c: 18
    }, {
        s: 68,
        a: 4,
        c: 15
    }, {
        s: 68,
        a: 5,
        c: 13
    }, {
        s: 68,
        a: 6,
        c: 13
    }, {
        s: 68,
        a: 7,
        c: 39
    }, {
        s: 68,
        a: 8,
        c: 14
    }, {
        s: 68,
        a: 9,
        c: 17
    }, {
        s: 68,
        a: 10,
        c: 16
    }, {
        s: 68,
        a: 11,
        c: 13
    }, {
        s: 68,
        a: 12,
        c: 17
    }, {
        s: 68,
        a: 13,
        c: 13
    }, {
        s: 68,
        a: 14,
        c: 15
    }, {
        s: 68,
        a: 15,
        c: 33
    }, {
        s: 68,
        a: 16,
        c: 15
    }, {
        s: 68,
        a: 17,
        c: 50
    }, {
        s: 68,
        a: 18,
        c: 10
    }, {
        s: 68,
        a: 19,
        c: 27
    }, {
        s: 68,
        a: 20,
        c: 13
    }, {
        s: 68,
        a: 21,
        c: 13
    }, {
        s: 68,
        a: 22,
        c: 27
    }, {
        s: 68,
        a: 23,
        c: 19
    }, {
        s: 68,
        a: 24,
        c: 26
    }, {
        s: 68,
        a: 25,
        c: 17
    }, {
        s: 68,
        a: 26,
        c: 23
    }, {
        s: 68,
        a: 27,
        c: 12
    }, {
        s: 68,
        a: 28,
        c: 28
    }, {
        s: 68,
        a: 29,
        c: 26
    }, {
        s: 68,
        a: 30,
        c: 24
    }, {
        s: 68,
        a: 31,
        c: 23
    }, {
        s: 68,
        a: 32,
        c: 39
    }, {
        s: 68,
        a: 33,
        c: 39
    }, {
        s: 68,
        a: 34,
        c: 26
    }, {
        s: 68,
        a: 35,
        c: 23
    }, {
        s: 68,
        a: 36,
        c: 14
    }, {
        s: 68,
        a: 37,
        c: 18
    }, {
        s: 68,
        a: 38,
        c: 17
    }, {
        s: 68,
        a: 39,
        c: 47
    }, {
        s: 68,
        a: 40,
        c: 16
    }, {
        s: 68,
        a: 41,
        c: 38
    }, {
        s: 68,
        a: 42,
        c: 38
    }, {
        s: 68,
        a: 43,
        c: 52
    }, {
        s: 68,
        a: 44,
        c: 44
    }, {
        s: 68,
        a: 45,
        c: 18
    }, {
        s: 68,
        a: 46,
        c: 27
    }, {
        s: 68,
        a: 47,
        c: 21
    }, {
        s: 68,
        a: 48,
        c: 42
    }, {
        s: 68,
        a: 49,
        c: 40
    }, {
        s: 68,
        a: 50,
        c: 25
    }, {
        s: 68,
        a: 51,
        c: 62
    }, {
        s: 68,
        a: 52,
        c: 19
    }, {
        s: 69,
        a: 1,
        c: 6
    }, {
        s: 69,
        a: 2,
        c: 8
    }, {
        s: 69,
        a: 3,
        c: 16
    }, {
        s: 69,
        a: 4,
        c: 20
    }, {
        s: 69,
        a: 5,
        c: 23
    }, {
        s: 69,
        a: 6,
        c: 27
    }, {
        s: 69,
        a: 7,
        c: 68
    }, {
        s: 69,
        a: 8,
        c: 16
    }, {
        s: 69,
        a: 9,
        c: 34
    }, {
        s: 69,
        a: 10,
        c: 28
    }, {
        s: 69,
        a: 11,
        c: 30
    }, {
        s: 69,
        a: 12,
        c: 29
    }, {
        s: 69,
        a: 13,
        c: 23
    }, {
        s: 69,
        a: 14,
        c: 30
    }, {
        s: 69,
        a: 15,
        c: 17
    }, {
        s: 69,
        a: 16,
        c: 25
    }, {
        s: 69,
        a: 17,
        c: 43
    }, {
        s: 69,
        a: 18,
        c: 26
    }, {
        s: 69,
        a: 19,
        c: 42
    }, {
        s: 69,
        a: 20,
        c: 20
    }, {
        s: 69,
        a: 21,
        c: 14
    }, {
        s: 69,
        a: 22,
        c: 10
    }, {
        s: 69,
        a: 23,
        c: 11
    }, {
        s: 69,
        a: 24,
        c: 40
    }, {
        s: 69,
        a: 25,
        c: 44
    }, {
        s: 69,
        a: 26,
        c: 14
    }, {
        s: 69,
        a: 27,
        c: 18
    }, {
        s: 69,
        a: 28,
        c: 14
    }, {
        s: 69,
        a: 29,
        c: 13
    }, {
        s: 69,
        a: 30,
        c: 9
    }, {
        s: 69,
        a: 31,
        c: 12
    }, {
        s: 69,
        a: 32,
        c: 31
    }, {
        s: 69,
        a: 33,
        c: 23
    }, {
        s: 69,
        a: 34,
        c: 20
    }, {
        s: 69,
        a: 35,
        c: 20
    }, {
        s: 69,
        a: 36,
        c: 17
    }, {
        s: 69,
        a: 37,
        c: 18
    }, {
        s: 69,
        a: 38,
        c: 16
    }, {
        s: 69,
        a: 39,
        c: 11
    }, {
        s: 69,
        a: 40,
        c: 15
    }, {
        s: 69,
        a: 41,
        c: 26
    }, {
        s: 69,
        a: 42,
        c: 24
    }, {
        s: 69,
        a: 43,
        c: 17
    }, {
        s: 69,
        a: 44,
        c: 23
    }, {
        s: 69,
        a: 45,
        c: 16
    }, {
        s: 69,
        a: 46,
        c: 17
    }, {
        s: 69,
        a: 47,
        c: 21
    }, {
        s: 69,
        a: 48,
        c: 17
    }, {
        s: 69,
        a: 49,
        c: 21
    }, {
        s: 69,
        a: 50,
        c: 20
    }, {
        s: 69,
        a: 51,
        c: 13
    }, {
        s: 69,
        a: 52,
        c: 17
    }, {
        s: 70,
        a: 1,
        c: 16
    }, {
        s: 70,
        a: 2,
        c: 17
    }, {
        s: 70,
        a: 3,
        c: 15
    }, {
        s: 70,
        a: 4,
        c: 47
    }, {
        s: 70,
        a: 5,
        c: 14
    }, {
        s: 70,
        a: 6,
        c: 14
    }, {
        s: 70,
        a: 7,
        c: 10
    }, {
        s: 70,
        a: 8,
        c: 19
    }, {
        s: 70,
        a: 9,
        c: 17
    }, {
        s: 70,
        a: 10,
        c: 16
    }, {
        s: 70,
        a: 11,
        c: 40
    }, {
        s: 70,
        a: 12,
        c: 12
    }, {
        s: 70,
        a: 13,
        c: 16
    }, {
        s: 70,
        a: 14,
        c: 22
    }, {
        s: 70,
        a: 15,
        c: 10
    }, {
        s: 70,
        a: 16,
        c: 10
    }, {
        s: 70,
        a: 17,
        c: 15
    }, {
        s: 70,
        a: 18,
        c: 9
    }, {
        s: 70,
        a: 19,
        c: 17
    }, {
        s: 70,
        a: 20,
        c: 15
    }, {
        s: 70,
        a: 21,
        c: 17
    }, {
        s: 70,
        a: 22,
        c: 10
    }, {
        s: 70,
        a: 23,
        c: 22
    }, {
        s: 70,
        a: 24,
        c: 22
    }, {
        s: 70,
        a: 25,
        c: 14
    }, {
        s: 70,
        a: 26,
        c: 21
    }, {
        s: 70,
        a: 27,
        c: 24
    }, {
        s: 70,
        a: 28,
        c: 18
    }, {
        s: 70,
        a: 29,
        c: 21
    }, {
        s: 70,
        a: 30,
        c: 42
    }, {
        s: 70,
        a: 31,
        c: 30
    }, {
        s: 70,
        a: 32,
        c: 28
    }, {
        s: 70,
        a: 33,
        c: 23
    }, {
        s: 70,
        a: 34,
        c: 24
    }, {
        s: 70,
        a: 35,
        c: 17
    }, {
        s: 70,
        a: 36,
        c: 24
    }, {
        s: 70,
        a: 37,
        c: 21
    }, {
        s: 70,
        a: 38,
        c: 28
    }, {
        s: 70,
        a: 39,
        c: 22
    }, {
        s: 70,
        a: 40,
        c: 35
    }, {
        s: 70,
        a: 41,
        c: 31
    }, {
        s: 70,
        a: 42,
        c: 42
    }, {
        s: 70,
        a: 43,
        c: 40
    }, {
        s: 70,
        a: 44,
        c: 44
    }, {
        s: 71,
        a: 1,
        c: 51
    }, {
        s: 71,
        a: 2,
        c: 22
    }, {
        s: 71,
        a: 3,
        c: 25
    }, {
        s: 71,
        a: 4,
        c: 65
    }, {
        s: 71,
        a: 5,
        c: 26
    }, {
        s: 71,
        a: 6,
        c: 21
    }, {
        s: 71,
        a: 7,
        c: 79
    }, {
        s: 71,
        a: 8,
        c: 16
    }, {
        s: 71,
        a: 9,
        c: 28
    }, {
        s: 71,
        a: 10,
        c: 27
    }, {
        s: 71,
        a: 11,
        c: 21
    }, {
        s: 71,
        a: 12,
        c: 44
    }, {
        s: 71,
        a: 13,
        c: 20
    }, {
        s: 71,
        a: 14,
        c: 14
    }, {
        s: 71,
        a: 15,
        c: 31
    }, {
        s: 71,
        a: 16,
        c: 31
    }, {
        s: 71,
        a: 17,
        c: 23
    }, {
        s: 71,
        a: 18,
        c: 25
    }, {
        s: 71,
        a: 19,
        c: 21
    }, {
        s: 71,
        a: 20,
        c: 20
    }, {
        s: 71,
        a: 21,
        c: 49
    }, {
        s: 71,
        a: 22,
        c: 15
    }, {
        s: 71,
        a: 23,
        c: 53
    }, {
        s: 71,
        a: 24,
        c: 35
    }, {
        s: 71,
        a: 25,
        c: 54
    }, {
        s: 71,
        a: 26,
        c: 37
    }, {
        s: 71,
        a: 27,
        c: 41
    }, {
        s: 71,
        a: 28,
        c: 71
    }, {
        s: 72,
        a: 1,
        c: 49
    }, {
        s: 72,
        a: 2,
        c: 35
    }, {
        s: 72,
        a: 3,
        c: 33
    }, {
        s: 72,
        a: 4,
        c: 28
    }, {
        s: 72,
        a: 5,
        c: 37
    }, {
        s: 72,
        a: 6,
        c: 46
    }, {
        s: 72,
        a: 7,
        c: 33
    }, {
        s: 72,
        a: 8,
        c: 41
    }, {
        s: 72,
        a: 9,
        c: 51
    }, {
        s: 72,
        a: 10,
        c: 44
    }, {
        s: 72,
        a: 11,
        c: 37
    }, {
        s: 72,
        a: 12,
        c: 39
    }, {
        s: 72,
        a: 13,
        c: 52
    }, {
        s: 72,
        a: 14,
        c: 49
    }, {
        s: 72,
        a: 15,
        c: 27
    }, {
        s: 72,
        a: 16,
        c: 39
    }, {
        s: 72,
        a: 17,
        c: 39
    }, {
        s: 72,
        a: 18,
        c: 31
    }, {
        s: 72,
        a: 19,
        c: 41
    }, {
        s: 72,
        a: 20,
        c: 26
    }, {
        s: 72,
        a: 21,
        c: 24
    }, {
        s: 72,
        a: 22,
        c: 40
    }, {
        s: 72,
        a: 23,
        c: 64
    }, {
        s: 72,
        a: 24,
        c: 45
    }, {
        s: 72,
        a: 25,
        c: 36
    }, {
        s: 72,
        a: 26,
        c: 27
    }, {
        s: 72,
        a: 27,
        c: 44
    }, {
        s: 72,
        a: 28,
        c: 52
    }, {
        s: 73,
        a: 1,
        c: 12
    }, {
        s: 73,
        a: 2,
        c: 15
    }, {
        s: 73,
        a: 3,
        c: 18
    }, {
        s: 73,
        a: 4,
        c: 24
    }, {
        s: 73,
        a: 5,
        c: 21
    }, {
        s: 73,
        a: 6,
        c: 30
    }, {
        s: 73,
        a: 7,
        c: 21
    }, {
        s: 73,
        a: 8,
        c: 26
    }, {
        s: 73,
        a: 9,
        c: 36
    }, {
        s: 73,
        a: 10,
        c: 32
    }, {
        s: 73,
        a: 11,
        c: 35
    }, {
        s: 73,
        a: 12,
        c: 19
    }, {
        s: 73,
        a: 13,
        c: 22
    }, {
        s: 73,
        a: 14,
        c: 40
    }, {
        s: 73,
        a: 15,
        c: 51
    }, {
        s: 73,
        a: 16,
        c: 31
    }, {
        s: 73,
        a: 17,
        c: 35
    }, {
        s: 73,
        a: 18,
        c: 26
    }, {
        s: 73,
        a: 19,
        c: 31
    }, {
        s: 73,
        a: 20,
        c: 329
    }, {
        s: 74,
        a: 1,
        c: 12
    }, {
        s: 74,
        a: 2,
        c: 7
    }, {
        s: 74,
        a: 3,
        c: 8
    }, {
        s: 74,
        a: 4,
        c: 10
    }, {
        s: 74,
        a: 5,
        c: 11
    }, {
        s: 74,
        a: 6,
        c: 13
    }, {
        s: 74,
        a: 7,
        c: 10
    }, {
        s: 74,
        a: 8,
        c: 16
    }, {
        s: 74,
        a: 9,
        c: 16
    }, {
        s: 74,
        a: 10,
        c: 18
    }, {
        s: 74,
        a: 11,
        c: 16
    }, {
        s: 74,
        a: 12,
        c: 17
    }, {
        s: 74,
        a: 13,
        c: 10
    }, {
        s: 74,
        a: 14,
        c: 13
    }, {
        s: 74,
        a: 15,
        c: 12
    }, {
        s: 74,
        a: 16,
        c: 21
    }, {
        s: 74,
        a: 17,
        c: 11
    }, {
        s: 74,
        a: 18,
        c: 10
    }, {
        s: 74,
        a: 19,
        c: 10
    }, {
        s: 74,
        a: 20,
        c: 11
    }, {
        s: 74,
        a: 21,
        c: 5
    }, {
        s: 74,
        a: 22,
        c: 9
    }, {
        s: 74,
        a: 23,
        c: 13
    }, {
        s: 74,
        a: 24,
        c: 19
    }, {
        s: 74,
        a: 25,
        c: 16
    }, {
        s: 74,
        a: 26,
        c: 9
    }, {
        s: 74,
        a: 27,
        c: 13
    }, {
        s: 74,
        a: 28,
        c: 12
    }, {
        s: 74,
        a: 29,
        c: 10
    }, {
        s: 74,
        a: 30,
        c: 12
    }, {
        s: 74,
        a: 31,
        c: 250
    }, {
        s: 74,
        a: 32,
        c: 9
    }, {
        s: 74,
        a: 33,
        c: 12
    }, {
        s: 74,
        a: 34,
        c: 13
    }, {
        s: 74,
        a: 35,
        c: 14
    }, {
        s: 74,
        a: 36,
        c: 10
    }, {
        s: 74,
        a: 37,
        c: 24
    }, {
        s: 74,
        a: 38,
        c: 17
    }, {
        s: 74,
        a: 39,
        c: 14
    }, {
        s: 74,
        a: 40,
        c: 14
    }, {
        s: 74,
        a: 41,
        c: 10
    }, {
        s: 74,
        a: 42,
        c: 12
    }, {
        s: 74,
        a: 43,
        c: 18
    }, {
        s: 74,
        a: 44,
        c: 16
    }, {
        s: 74,
        a: 45,
        c: 18
    }, {
        s: 74,
        a: 46,
        c: 17
    }, {
        s: 74,
        a: 47,
        c: 14
    }, {
        s: 74,
        a: 48,
        c: 22
    }, {
        s: 74,
        a: 49,
        c: 21
    }, {
        s: 74,
        a: 50,
        c: 15
    }, {
        s: 74,
        a: 51,
        c: 10
    }, {
        s: 74,
        a: 52,
        c: 31
    }, {
        s: 74,
        a: 53,
        c: 19
    }, {
        s: 74,
        a: 54,
        c: 11
    }, {
        s: 74,
        a: 55,
        c: 10
    }, {
        s: 74,
        a: 56,
        c: 44
    }, {
        s: 75,
        a: 1,
        c: 17
    }, {
        s: 75,
        a: 2,
        c: 20
    }, {
        s: 75,
        a: 3,
        c: 24
    }, {
        s: 75,
        a: 4,
        c: 23
    }, {
        s: 75,
        a: 5,
        c: 23
    }, {
        s: 75,
        a: 6,
        c: 18
    }, {
        s: 75,
        a: 7,
        c: 12
    }, {
        s: 75,
        a: 8,
        c: 9
    }, {
        s: 75,
        a: 9,
        c: 15
    }, {
        s: 75,
        a: 10,
        c: 24
    }, {
        s: 75,
        a: 11,
        c: 8
    }, {
        s: 75,
        a: 12,
        c: 18
    }, {
        s: 75,
        a: 13,
        c: 26
    }, {
        s: 75,
        a: 14,
        c: 21
    }, {
        s: 75,
        a: 15,
        c: 14
    }, {
        s: 75,
        a: 16,
        c: 20
    }, {
        s: 75,
        a: 17,
        c: 17
    }, {
        s: 75,
        a: 18,
        c: 20
    }, {
        s: 75,
        a: 19,
        c: 14
    }, {
        s: 75,
        a: 20,
        c: 17
    }, {
        s: 75,
        a: 21,
        c: 12
    }, {
        s: 75,
        a: 22,
        c: 14
    }, {
        s: 75,
        a: 23,
        c: 12
    }, {
        s: 75,
        a: 24,
        c: 15
    }, {
        s: 75,
        a: 25,
        c: 17
    }, {
        s: 75,
        a: 26,
        c: 17
    }, {
        s: 75,
        a: 27,
        c: 9
    }, {
        s: 75,
        a: 28,
        c: 12
    }, {
        s: 75,
        a: 29,
        c: 17
    }, {
        s: 75,
        a: 30,
        c: 17
    }, {
        s: 75,
        a: 31,
        c: 12
    }, {
        s: 75,
        a: 32,
        c: 12
    }, {
        s: 75,
        a: 33,
        c: 17
    }, {
        s: 75,
        a: 34,
        c: 11
    }, {
        s: 75,
        a: 35,
        c: 13
    }, {
        s: 75,
        a: 36,
        c: 21
    }, {
        s: 75,
        a: 37,
        c: 18
    }, {
        s: 75,
        a: 38,
        c: 17
    }, {
        s: 75,
        a: 39,
        c: 26
    }, {
        s: 75,
        a: 40,
        c: 27
    }, {
        s: 76,
        a: 1,
        c: 40
    }, {
        s: 76,
        a: 2,
        c: 49
    }, {
        s: 76,
        a: 3,
        c: 32
    }, {
        s: 76,
        a: 4,
        c: 35
    }, {
        s: 76,
        a: 5,
        c: 35
    }, {
        s: 76,
        a: 6,
        c: 33
    }, {
        s: 76,
        a: 7,
        c: 35
    }, {
        s: 76,
        a: 8,
        c: 37
    }, {
        s: 76,
        a: 9,
        c: 40
    }, {
        s: 76,
        a: 10,
        c: 29
    }, {
        s: 76,
        a: 11,
        c: 36
    }, {
        s: 76,
        a: 12,
        c: 23
    }, {
        s: 76,
        a: 13,
        c: 44
    }, {
        s: 76,
        a: 14,
        c: 34
    }, {
        s: 76,
        a: 15,
        c: 37
    }, {
        s: 76,
        a: 16,
        c: 23
    }, {
        s: 76,
        a: 17,
        c: 30
    }, {
        s: 76,
        a: 18,
        c: 19
    }, {
        s: 76,
        a: 19,
        c: 47
    }, {
        s: 76,
        a: 20,
        c: 29
    }, {
        s: 76,
        a: 21,
        c: 59
    }, {
        s: 76,
        a: 22,
        c: 30
    }, {
        s: 76,
        a: 23,
        c: 27
    }, {
        s: 76,
        a: 24,
        c: 33
    }, {
        s: 76,
        a: 25,
        c: 21
    }, {
        s: 76,
        a: 26,
        c: 29
    }, {
        s: 76,
        a: 27,
        c: 40
    }, {
        s: 76,
        a: 28,
        c: 47
    }, {
        s: 76,
        a: 29,
        c: 31
    }, {
        s: 76,
        a: 30,
        c: 41
    }, {
        s: 76,
        a: 31,
        c: 42
    }, {
        s: 77,
        a: 1,
        c: 13
    }, {
        s: 77,
        a: 2,
        c: 13
    }, {
        s: 77,
        a: 3,
        c: 13
    }, {
        s: 77,
        a: 4,
        c: 13
    }, {
        s: 77,
        a: 5,
        c: 13
    }, {
        s: 77,
        a: 6,
        c: 10
    }, {
        s: 77,
        a: 7,
        c: 15
    }, {
        s: 77,
        a: 8,
        c: 14
    }, {
        s: 77,
        a: 9,
        c: 14
    }, {
        s: 77,
        a: 10,
        c: 14
    }, {
        s: 77,
        a: 11,
        c: 13
    }, {
        s: 77,
        a: 12,
        c: 10
    }, {
        s: 77,
        a: 13,
        c: 9
    }, {
        s: 77,
        a: 14,
        c: 18
    }, {
        s: 77,
        a: 15,
        c: 16
    }, {
        s: 77,
        a: 16,
        c: 14
    }, {
        s: 77,
        a: 17,
        c: 15
    }, {
        s: 77,
        a: 18,
        c: 17
    }, {
        s: 77,
        a: 19,
        c: 16
    }, {
        s: 77,
        a: 20,
        c: 18
    }, {
        s: 77,
        a: 21,
        c: 17
    }, {
        s: 77,
        a: 22,
        c: 11
    }, {
        s: 77,
        a: 23,
        c: 18
    }, {
        s: 77,
        a: 24,
        c: 16
    }, {
        s: 77,
        a: 25,
        c: 17
    }, {
        s: 77,
        a: 26,
        c: 12
    }, {
        s: 77,
        a: 27,
        c: 38
    }, {
        s: 77,
        a: 28,
        c: 16
    }, {
        s: 77,
        a: 29,
        c: 24
    }, {
        s: 77,
        a: 30,
        c: 21
    }, {
        s: 77,
        a: 31,
        c: 20
    }, {
        s: 77,
        a: 32,
        c: 18
    }, {
        s: 77,
        a: 33,
        c: 12
    }, {
        s: 77,
        a: 34,
        c: 16
    }, {
        s: 77,
        a: 35,
        c: 14
    }, {
        s: 77,
        a: 36,
        c: 18
    }, {
        s: 77,
        a: 37,
        c: 16
    }, {
        s: 77,
        a: 38,
        c: 26
    }, {
        s: 77,
        a: 39,
        c: 18
    }, {
        s: 77,
        a: 40,
        c: 16
    }, {
        s: 77,
        a: 41,
        c: 20
    }, {
        s: 77,
        a: 42,
        c: 15
    }, {
        s: 77,
        a: 43,
        c: 29
    }, {
        s: 77,
        a: 44,
        c: 19
    }, {
        s: 77,
        a: 45,
        c: 16
    }, {
        s: 77,
        a: 46,
        c: 26
    }, {
        s: 77,
        a: 47,
        c: 16
    }, {
        s: 77,
        a: 48,
        c: 24
    }, {
        s: 77,
        a: 49,
        c: 16
    }, {
        s: 77,
        a: 50,
        c: 18
    }, {
        s: 78,
        a: 1,
        c: 10
    }, {
        s: 78,
        a: 2,
        c: 13
    }, {
        s: 78,
        a: 3,
        c: 16
    }, {
        s: 78,
        a: 4,
        c: 10
    }, {
        s: 78,
        a: 5,
        c: 12
    }, {
        s: 78,
        a: 6,
        c: 17
    }, {
        s: 78,
        a: 7,
        c: 13
    }, {
        s: 78,
        a: 8,
        c: 14
    }, {
        s: 78,
        a: 9,
        c: 16
    }, {
        s: 78,
        a: 10,
        c: 16
    }, {
        s: 78,
        a: 11,
        c: 17
    }, {
        s: 78,
        a: 12,
        c: 20
    }, {
        s: 78,
        a: 13,
        c: 16
    }, {
        s: 78,
        a: 14,
        c: 25
    }, {
        s: 78,
        a: 15,
        c: 16
    }, {
        s: 78,
        a: 16,
        c: 11
    }, {
        s: 78,
        a: 17,
        c: 19
    }, {
        s: 78,
        a: 18,
        c: 26
    }, {
        s: 78,
        a: 19,
        c: 22
    }, {
        s: 78,
        a: 20,
        c: 21
    }, {
        s: 78,
        a: 21,
        c: 16
    }, {
        s: 78,
        a: 22,
        c: 11
    }, {
        s: 78,
        a: 23,
        c: 16
    }, {
        s: 78,
        a: 24,
        c: 24
    }, {
        s: 78,
        a: 25,
        c: 14
    }, {
        s: 78,
        a: 26,
        c: 9
    }, {
        s: 78,
        a: 27,
        c: 21
    }, {
        s: 78,
        a: 28,
        c: 18
    }, {
        s: 78,
        a: 29,
        c: 18
    }, {
        s: 78,
        a: 30,
        c: 23
    }, {
        s: 78,
        a: 31,
        c: 14
    }, {
        s: 78,
        a: 32,
        c: 12
    }, {
        s: 78,
        a: 33,
        c: 12
    }, {
        s: 78,
        a: 34,
        c: 10
    }, {
        s: 78,
        a: 35,
        c: 24
    }, {
        s: 78,
        a: 36,
        c: 18
    }, {
        s: 78,
        a: 37,
        c: 47
    }, {
        s: 78,
        a: 38,
        c: 58
    }, {
        s: 78,
        a: 39,
        c: 32
    }, {
        s: 78,
        a: 40,
        c: 69
    }, {
        s: 79,
        a: 1,
        c: 13
    }, {
        s: 79,
        a: 2,
        c: 13
    }, {
        s: 79,
        a: 3,
        c: 13
    }, {
        s: 79,
        a: 4,
        c: 13
    }, {
        s: 79,
        a: 5,
        c: 13
    }, {
        s: 79,
        a: 6,
        c: 14
    }, {
        s: 79,
        a: 7,
        c: 13
    }, {
        s: 79,
        a: 8,
        c: 14
    }, {
        s: 79,
        a: 9,
        c: 12
    }, {
        s: 79,
        a: 10,
        c: 27
    }, {
        s: 79,
        a: 11,
        c: 16
    }, {
        s: 79,
        a: 12,
        c: 19
    }, {
        s: 79,
        a: 13,
        c: 16
    }, {
        s: 79,
        a: 14,
        c: 14
    }, {
        s: 79,
        a: 15,
        c: 14
    }, {
        s: 79,
        a: 16,
        c: 25
    }, {
        s: 79,
        a: 17,
        c: 18
    }, {
        s: 79,
        a: 18,
        c: 16
    }, {
        s: 79,
        a: 19,
        c: 17
    }, {
        s: 79,
        a: 20,
        c: 16
    }, {
        s: 79,
        a: 21,
        c: 8
    }, {
        s: 79,
        a: 22,
        c: 10
    }, {
        s: 79,
        a: 23,
        c: 9
    }, {
        s: 79,
        a: 24,
        c: 17
    }, {
        s: 79,
        a: 25,
        c: 26
    }, {
        s: 79,
        a: 26,
        c: 19
    }, {
        s: 79,
        a: 27,
        c: 25
    }, {
        s: 79,
        a: 28,
        c: 14
    }, {
        s: 79,
        a: 29,
        c: 20
    }, {
        s: 79,
        a: 30,
        c: 17
    }, {
        s: 79,
        a: 31,
        c: 20
    }, {
        s: 79,
        a: 32,
        c: 13
    }, {
        s: 79,
        a: 33,
        c: 17
    }, {
        s: 79,
        a: 34,
        c: 20
    }, {
        s: 79,
        a: 35,
        c: 20
    }, {
        s: 79,
        a: 36,
        c: 17
    }, {
        s: 79,
        a: 37,
        c: 9
    }, {
        s: 79,
        a: 38,
        c: 16
    }, {
        s: 79,
        a: 39,
        c: 17
    }, {
        s: 79,
        a: 40,
        c: 32
    }, {
        s: 79,
        a: 41,
        c: 16
    }, {
        s: 79,
        a: 42,
        c: 25
    }, {
        s: 79,
        a: 43,
        c: 14
    }, {
        s: 79,
        a: 44,
        c: 13
    }, {
        s: 79,
        a: 45,
        c: 19
    }, {
        s: 79,
        a: 46,
        c: 36
    }, {
        s: 80,
        a: 1,
        c: 8
    }, {
        s: 80,
        a: 2,
        c: 12
    }, {
        s: 80,
        a: 3,
        c: 16
    }, {
        s: 80,
        a: 4,
        c: 18
    }, {
        s: 80,
        a: 5,
        c: 11
    }, {
        s: 80,
        a: 6,
        c: 10
    }, {
        s: 80,
        a: 7,
        c: 14
    }, {
        s: 80,
        a: 8,
        c: 14
    }, {
        s: 80,
        a: 9,
        c: 7
    }, {
        s: 80,
        a: 10,
        c: 11
    }, {
        s: 80,
        a: 11,
        c: 12
    }, {
        s: 80,
        a: 12,
        c: 10
    }, {
        s: 80,
        a: 13,
        c: 10
    }, {
        s: 80,
        a: 14,
        c: 11
    }, {
        s: 80,
        a: 15,
        c: 9
    }, {
        s: 80,
        a: 16,
        c: 8
    }, {
        s: 80,
        a: 17,
        c: 17
    }, {
        s: 80,
        a: 18,
        c: 11
    }, {
        s: 80,
        a: 19,
        c: 15
    }, {
        s: 80,
        a: 20,
        c: 12
    }, {
        s: 80,
        a: 21,
        c: 13
    }, {
        s: 80,
        a: 22,
        c: 13
    }, {
        s: 80,
        a: 23,
        c: 15
    }, {
        s: 80,
        a: 24,
        c: 21
    }, {
        s: 80,
        a: 25,
        c: 16
    }, {
        s: 80,
        a: 26,
        c: 15
    }, {
        s: 80,
        a: 27,
        c: 14
    }, {
        s: 80,
        a: 28,
        c: 10
    }, {
        s: 80,
        a: 29,
        c: 12
    }, {
        s: 80,
        a: 30,
        c: 10
    }, {
        s: 80,
        a: 31,
        c: 10
    }, {
        s: 80,
        a: 32,
        c: 17
    }, {
        s: 80,
        a: 33,
        c: 14
    }, {
        s: 80,
        a: 34,
        c: 17
    }, {
        s: 80,
        a: 35,
        c: 9
    }, {
        s: 80,
        a: 36,
        c: 12
    }, {
        s: 80,
        a: 37,
        c: 24
    }, {
        s: 80,
        a: 38,
        c: 14
    }, {
        s: 80,
        a: 39,
        c: 12
    }, {
        s: 80,
        a: 40,
        c: 19
    }, {
        s: 80,
        a: 41,
        c: 10
    }, {
        s: 80,
        a: 42,
        c: 19
    }, {
        s: 81,
        a: 1,
        c: 12
    }, {
        s: 81,
        a: 2,
        c: 16
    }, {
        s: 81,
        a: 3,
        c: 14
    }, {
        s: 81,
        a: 4,
        c: 14
    }, {
        s: 81,
        a: 5,
        c: 14
    }, {
        s: 81,
        a: 6,
        c: 14
    }, {
        s: 81,
        a: 7,
        c: 14
    }, {
        s: 81,
        a: 8,
        c: 16
    }, {
        s: 81,
        a: 9,
        c: 10
    }, {
        s: 81,
        a: 10,
        c: 13
    }, {
        s: 81,
        a: 11,
        c: 14
    }, {
        s: 81,
        a: 12,
        c: 14
    }, {
        s: 81,
        a: 13,
        c: 14
    }, {
        s: 81,
        a: 14,
        c: 14
    }, {
        s: 81,
        a: 15,
        c: 13
    }, {
        s: 81,
        a: 16,
        c: 11
    }, {
        s: 81,
        a: 17,
        c: 13
    }, {
        s: 81,
        a: 18,
        c: 13
    }, {
        s: 81,
        a: 19,
        c: 15
    }, {
        s: 81,
        a: 20,
        c: 19
    }, {
        s: 81,
        a: 21,
        c: 10
    }, {
        s: 81,
        a: 22,
        c: 15
    }, {
        s: 81,
        a: 23,
        c: 19
    }, {
        s: 81,
        a: 24,
        c: 18
    }, {
        s: 81,
        a: 25,
        c: 18
    }, {
        s: 81,
        a: 26,
        c: 10
    }, {
        s: 81,
        a: 27,
        c: 18
    }, {
        s: 81,
        a: 28,
        c: 18
    }, {
        s: 81,
        a: 29,
        c: 32
    }, {
        s: 82,
        a: 1,
        c: 15
    }, {
        s: 82,
        a: 2,
        c: 17
    }, {
        s: 82,
        a: 3,
        c: 14
    }, {
        s: 82,
        a: 4,
        c: 15
    }, {
        s: 82,
        a: 5,
        c: 18
    }, {
        s: 82,
        a: 6,
        c: 28
    }, {
        s: 82,
        a: 7,
        c: 18
    }, {
        s: 82,
        a: 8,
        c: 17
    }, {
        s: 82,
        a: 9,
        c: 17
    }, {
        s: 82,
        a: 10,
        c: 15
    }, {
        s: 82,
        a: 11,
        c: 11
    }, {
        s: 82,
        a: 12,
        c: 14
    }, {
        s: 82,
        a: 13,
        c: 16
    }, {
        s: 82,
        a: 14,
        c: 16
    }, {
        s: 82,
        a: 15,
        c: 15
    }, {
        s: 82,
        a: 16,
        c: 16
    }, {
        s: 82,
        a: 17,
        c: 18
    }, {
        s: 82,
        a: 18,
        c: 19
    }, {
        s: 82,
        a: 19,
        c: 34
    }, {
        s: 83,
        a: 1,
        c: 11
    }, {
        s: 83,
        a: 2,
        c: 30
    }, {
        s: 83,
        a: 3,
        c: 24
    }, {
        s: 83,
        a: 4,
        c: 22
    }, {
        s: 83,
        a: 5,
        c: 8
    }, {
        s: 83,
        a: 6,
        c: 23
    }, {
        s: 83,
        a: 7,
        c: 22
    }, {
        s: 83,
        a: 8,
        c: 14
    }, {
        s: 83,
        a: 9,
        c: 9
    }, {
        s: 83,
        a: 10,
        c: 16
    }, {
        s: 83,
        a: 11,
        c: 20
    }, {
        s: 83,
        a: 12,
        c: 22
    }, {
        s: 83,
        a: 13,
        c: 33
    }, {
        s: 83,
        a: 14,
        c: 30
    }, {
        s: 83,
        a: 15,
        c: 26
    }, {
        s: 83,
        a: 16,
        c: 17
    }, {
        s: 83,
        a: 17,
        c: 25
    }, {
        s: 83,
        a: 18,
        c: 24
    }, {
        s: 83,
        a: 19,
        c: 15
    }, {
        s: 83,
        a: 20,
        c: 9
    }, {
        s: 83,
        a: 21,
        c: 13
    }, {
        s: 83,
        a: 22,
        c: 16
    }, {
        s: 83,
        a: 23,
        c: 16
    }, {
        s: 83,
        a: 24,
        c: 22
    }, {
        s: 83,
        a: 25,
        c: 16
    }, {
        s: 83,
        a: 26,
        c: 32
    }, {
        s: 83,
        a: 27,
        c: 13
    }, {
        s: 83,
        a: 28,
        c: 19
    }, {
        s: 83,
        a: 29,
        c: 36
    }, {
        s: 83,
        a: 30,
        c: 19
    }, {
        s: 83,
        a: 31,
        c: 31
    }, {
        s: 83,
        a: 32,
        c: 27
    }, {
        s: 83,
        a: 33,
        c: 20
    }, {
        s: 83,
        a: 34,
        c: 30
    }, {
        s: 83,
        a: 35,
        c: 16
    }, {
        s: 83,
        a: 36,
        c: 24
    }, {
        s: 84,
        a: 1,
        c: 14
    }, {
        s: 84,
        a: 2,
        c: 14
    }, {
        s: 84,
        a: 3,
        c: 12
    }, {
        s: 84,
        a: 4,
        c: 16
    }, {
        s: 84,
        a: 5,
        c: 14
    }, {
        s: 84,
        a: 6,
        c: 37
    }, {
        s: 84,
        a: 7,
        c: 21
    }, {
        s: 84,
        a: 8,
        c: 19
    }, {
        s: 84,
        a: 9,
        c: 19
    }, {
        s: 84,
        a: 10,
        c: 23
    }, {
        s: 84,
        a: 11,
        c: 13
    }, {
        s: 84,
        a: 12,
        c: 10
    }, {
        s: 84,
        a: 13,
        c: 18
    }, {
        s: 84,
        a: 14,
        c: 13
    }, {
        s: 84,
        a: 15,
        c: 18
    }, {
        s: 84,
        a: 16,
        c: 13
    }, {
        s: 84,
        a: 17,
        c: 12
    }, {
        s: 84,
        a: 18,
        c: 13
    }, {
        s: 84,
        a: 19,
        c: 15
    }, {
        s: 84,
        a: 20,
        c: 14
    }, {
        s: 84,
        a: 21,
        c: 26
    }, {
        s: 84,
        a: 22,
        c: 18
    }, {
        s: 84,
        a: 23,
        c: 17
    }, {
        s: 84,
        a: 24,
        c: 15
    }, {
        s: 84,
        a: 25,
        c: 41
    }, {
        s: 85,
        a: 1,
        c: 16
    }, {
        s: 85,
        a: 2,
        c: 13
    }, {
        s: 85,
        a: 3,
        c: 11
    }, {
        s: 85,
        a: 4,
        c: 15
    }, {
        s: 85,
        a: 5,
        c: 14
    }, {
        s: 85,
        a: 6,
        c: 13
    }, {
        s: 85,
        a: 7,
        c: 27
    }, {
        s: 85,
        a: 8,
        c: 40
    }, {
        s: 85,
        a: 9,
        c: 40
    }, {
        s: 85,
        a: 10,
        c: 65
    }, {
        s: 85,
        a: 11,
        c: 65
    }, {
        s: 85,
        a: 12,
        c: 13
    }, {
        s: 85,
        a: 13,
        c: 14
    }, {
        s: 85,
        a: 14,
        c: 15
    }, {
        s: 85,
        a: 15,
        c: 13
    }, {
        s: 85,
        a: 16,
        c: 11
    }, {
        s: 85,
        a: 17,
        c: 16
    }, {
        s: 85,
        a: 18,
        c: 10
    }, {
        s: 85,
        a: 19,
        c: 19
    }, {
        s: 85,
        a: 20,
        c: 17
    }, {
        s: 85,
        a: 21,
        c: 12
    }, {
        s: 85,
        a: 22,
        c: 10
    }, {
        s: 86,
        a: 1,
        c: 14
    }, {
        s: 86,
        a: 2,
        c: 16
    }, {
        s: 86,
        a: 3,
        c: 11
    }, {
        s: 86,
        a: 4,
        c: 19
    }, {
        s: 86,
        a: 5,
        c: 18
    }, {
        s: 86,
        a: 6,
        c: 12
    }, {
        s: 86,
        a: 7,
        c: 22
    }, {
        s: 86,
        a: 8,
        c: 15
    }, {
        s: 86,
        a: 9,
        c: 14
    }, {
        s: 86,
        a: 10,
        c: 17
    }, {
        s: 86,
        a: 11,
        c: 15
    }, {
        s: 86,
        a: 12,
        c: 14
    }, {
        s: 86,
        a: 13,
        c: 10
    }, {
        s: 86,
        a: 14,
        c: 11
    }, {
        s: 86,
        a: 15,
        c: 14
    }, {
        s: 86,
        a: 16,
        c: 9
    }, {
        s: 86,
        a: 17,
        c: 23
    }, {
        s: 87,
        a: 1,
        c: 15
    }, {
        s: 87,
        a: 2,
        c: 11
    }, {
        s: 87,
        a: 3,
        c: 12
    }, {
        s: 87,
        a: 4,
        c: 15
    }, {
        s: 87,
        a: 5,
        c: 13
    }, {
        s: 87,
        a: 6,
        c: 13
    }, {
        s: 87,
        a: 7,
        c: 31
    }, {
        s: 87,
        a: 8,
        c: 12
    }, {
        s: 87,
        a: 9,
        c: 16
    }, {
        s: 87,
        a: 10,
        c: 11
    }, {
        s: 87,
        a: 11,
        c: 14
    }, {
        s: 87,
        a: 12,
        c: 19
    }, {
        s: 87,
        a: 13,
        c: 19
    }, {
        s: 87,
        a: 14,
        c: 12
    }, {
        s: 87,
        a: 15,
        c: 14
    }, {
        s: 87,
        a: 16,
        c: 20
    }, {
        s: 87,
        a: 17,
        c: 15
    }, {
        s: 87,
        a: 18,
        c: 19
    }, {
        s: 87,
        a: 19,
        c: 15
    }, {
        s: 88,
        a: 1,
        c: 17
    }, {
        s: 88,
        a: 2,
        c: 14
    }, {
        s: 88,
        a: 3,
        c: 10
    }, {
        s: 88,
        a: 4,
        c: 13
    }, {
        s: 88,
        a: 5,
        c: 13
    }, {
        s: 88,
        a: 6,
        c: 19
    }, {
        s: 88,
        a: 7,
        c: 18
    }, {
        s: 88,
        a: 8,
        c: 14
    }, {
        s: 88,
        a: 9,
        c: 11
    }, {
        s: 88,
        a: 10,
        c: 10
    }, {
        s: 88,
        a: 11,
        c: 15
    }, {
        s: 88,
        a: 12,
        c: 12
    }, {
        s: 88,
        a: 13,
        c: 13
    }, {
        s: 88,
        a: 14,
        c: 12
    }, {
        s: 88,
        a: 15,
        c: 12
    }, {
        s: 88,
        a: 16,
        c: 12
    }, {
        s: 88,
        a: 17,
        c: 25
    }, {
        s: 88,
        a: 18,
        c: 17
    }, {
        s: 88,
        a: 19,
        c: 17
    }, {
        s: 88,
        a: 20,
        c: 16
    }, {
        s: 88,
        a: 21,
        c: 15
    }, {
        s: 88,
        a: 22,
        c: 14
    }, {
        s: 88,
        a: 23,
        c: 13
    }, {
        s: 88,
        a: 24,
        c: 22
    }, {
        s: 88,
        a: 25,
        c: 13
    }, {
        s: 88,
        a: 26,
        c: 15
    }, {
        s: 89,
        a: 1,
        c: 6
    }, {
        s: 89,
        a: 2,
        c: 8
    }, {
        s: 89,
        a: 3,
        c: 12
    }, {
        s: 89,
        a: 4,
        c: 12
    }, {
        s: 89,
        a: 5,
        c: 16
    }, {
        s: 89,
        a: 6,
        c: 18
    }, {
        s: 89,
        a: 7,
        c: 12
    }, {
        s: 89,
        a: 8,
        c: 23
    }, {
        s: 89,
        a: 9,
        c: 26
    }, {
        s: 89,
        a: 10,
        c: 15
    }, {
        s: 89,
        a: 11,
        c: 17
    }, {
        s: 89,
        a: 12,
        c: 17
    }, {
        s: 89,
        a: 13,
        c: 18
    }, {
        s: 89,
        a: 14,
        c: 14
    }, {
        s: 89,
        a: 15,
        c: 49
    }, {
        s: 89,
        a: 16,
        c: 40
    }, {
        s: 89,
        a: 17,
        c: 19
    }, {
        s: 89,
        a: 18,
        c: 23
    }, {
        s: 89,
        a: 19,
        c: 20
    }, {
        s: 89,
        a: 20,
        c: 17
    }, {
        s: 89,
        a: 21,
        c: 20
    }, {
        s: 89,
        a: 22,
        c: 19
    }, {
        s: 89,
        a: 23,
        c: 43
    }, {
        s: 89,
        a: 24,
        c: 21
    }, {
        s: 89,
        a: 25,
        c: 20
    }, {
        s: 89,
        a: 26,
        c: 15
    }, {
        s: 89,
        a: 27,
        c: 20
    }, {
        s: 89,
        a: 28,
        c: 21
    }, {
        s: 89,
        a: 29,
        c: 13
    }, {
        s: 89,
        a: 30,
        c: 10
    }, {
        s: 90,
        a: 1,
        c: 15
    }, {
        s: 90,
        a: 2,
        c: 15
    }, {
        s: 90,
        a: 3,
        c: 11
    }, {
        s: 90,
        a: 4,
        c: 20
    }, {
        s: 90,
        a: 5,
        c: 20
    }, {
        s: 90,
        a: 6,
        c: 17
    }, {
        s: 90,
        a: 7,
        c: 15
    }, {
        s: 90,
        a: 8,
        c: 14
    }, {
        s: 90,
        a: 9,
        c: 12
    }, {
        s: 90,
        a: 10,
        c: 14
    }, {
        s: 90,
        a: 11,
        c: 14
    }, {
        s: 90,
        a: 12,
        c: 16
    }, {
        s: 90,
        a: 13,
        c: 6
    }, {
        s: 90,
        a: 14,
        c: 19
    }, {
        s: 90,
        a: 15,
        c: 12
    }, {
        s: 90,
        a: 16,
        c: 15
    }, {
        s: 90,
        a: 17,
        c: 45
    }, {
        s: 90,
        a: 18,
        c: 17
    }, {
        s: 90,
        a: 19,
        c: 32
    }, {
        s: 90,
        a: 20,
        c: 13
    }, {
        s: 91,
        a: 1,
        c: 12
    }, {
        s: 91,
        a: 2,
        c: 14
    }, {
        s: 91,
        a: 3,
        c: 15
    }, {
        s: 91,
        a: 4,
        c: 15
    }, {
        s: 91,
        a: 5,
        c: 15
    }, {
        s: 91,
        a: 6,
        c: 14
    }, {
        s: 91,
        a: 7,
        c: 12
    }, {
        s: 91,
        a: 8,
        c: 20
    }, {
        s: 91,
        a: 9,
        c: 13
    }, {
        s: 91,
        a: 10,
        c: 13
    }, {
        s: 91,
        a: 11,
        c: 15
    }, {
        s: 91,
        a: 12,
        c: 13
    }, {
        s: 91,
        a: 13,
        c: 30
    }, {
        s: 91,
        a: 14,
        c: 39
    }, {
        s: 91,
        a: 15,
        c: 13
    }, {
        s: 92,
        a: 1,
        c: 13
    }, {
        s: 92,
        a: 2,
        c: 14
    }, {
        s: 92,
        a: 3,
        c: 18
    }, {
        s: 92,
        a: 4,
        c: 11
    }, {
        s: 92,
        a: 5,
        c: 15
    }, {
        s: 92,
        a: 6,
        c: 11
    }, {
        s: 92,
        a: 7,
        c: 13
    }, {
        s: 92,
        a: 8,
        c: 16
    }, {
        s: 92,
        a: 9,
        c: 11
    }, {
        s: 92,
        a: 10,
        c: 13
    }, {
        s: 92,
        a: 11,
        c: 21
    }, {
        s: 92,
        a: 12,
        c: 12
    }, {
        s: 92,
        a: 13,
        c: 19
    }, {
        s: 92,
        a: 14,
        c: 16
    }, {
        s: 92,
        a: 15,
        c: 17
    }, {
        s: 92,
        a: 16,
        c: 12
    }, {
        s: 92,
        a: 17,
        c: 14
    }, {
        s: 92,
        a: 18,
        c: 17
    }, {
        s: 92,
        a: 19,
        c: 21
    }, {
        s: 92,
        a: 20,
        c: 21
    }, {
        s: 92,
        a: 21,
        c: 9
    }, {
        s: 93,
        a: 1,
        c: 6
    }, {
        s: 93,
        a: 2,
        c: 12
    }, {
        s: 93,
        a: 3,
        c: 15
    }, {
        s: 93,
        a: 4,
        c: 20
    }, {
        s: 93,
        a: 5,
        c: 18
    }, {
        s: 93,
        a: 6,
        c: 16
    }, {
        s: 93,
        a: 7,
        c: 13
    }, {
        s: 93,
        a: 8,
        c: 15
    }, {
        s: 93,
        a: 9,
        c: 17
    }, {
        s: 93,
        a: 10,
        c: 17
    }, {
        s: 93,
        a: 11,
        c: 16
    }, {
        s: 94,
        a: 1,
        c: 13
    }, {
        s: 94,
        a: 2,
        c: 13
    }, {
        s: 94,
        a: 3,
        c: 12
    }, {
        s: 94,
        a: 4,
        c: 12
    }, {
        s: 94,
        a: 5,
        c: 14
    }, {
        s: 94,
        a: 6,
        c: 13
    }, {
        s: 94,
        a: 7,
        c: 13
    }, {
        s: 94,
        a: 8,
        c: 12
    }, {
        s: 95,
        a: 1,
        c: 14
    }, {
        s: 95,
        a: 2,
        c: 9
    }, {
        s: 95,
        a: 3,
        c: 15
    }, {
        s: 95,
        a: 4,
        c: 26
    }, {
        s: 95,
        a: 5,
        c: 18
    }, {
        s: 95,
        a: 6,
        c: 42
    }, {
        s: 95,
        a: 7,
        c: 17
    }, {
        s: 95,
        a: 8,
        c: 21
    }, {
        s: 96,
        a: 1,
        c: 18
    }, {
        s: 96,
        a: 2,
        c: 15
    }, {
        s: 96,
        a: 3,
        c: 14
    }, {
        s: 96,
        a: 4,
        c: 13
    }, {
        s: 96,
        a: 5,
        c: 18
    }, {
        s: 96,
        a: 6,
        c: 17
    }, {
        s: 96,
        a: 7,
        c: 11
    }, {
        s: 96,
        a: 8,
        c: 14
    }, {
        s: 96,
        a: 9,
        c: 13
    }, {
        s: 96,
        a: 10,
        c: 10
    }, {
        s: 96,
        a: 11,
        c: 18
    }, {
        s: 96,
        a: 12,
        c: 12
    }, {
        s: 96,
        a: 13,
        c: 15
    }, {
        s: 96,
        a: 14,
        c: 17
    }, {
        s: 96,
        a: 15,
        c: 26
    }, {
        s: 96,
        a: 16,
        c: 15
    }, {
        s: 96,
        a: 17,
        c: 10
    }, {
        s: 96,
        a: 18,
        c: 12
    }, {
        s: 96,
        a: 19,
        c: 20
    }, {
        s: 97,
        a: 1,
        c: 21
    }, {
        s: 97,
        a: 2,
        c: 19
    }, {
        s: 97,
        a: 3,
        c: 20
    }, {
        s: 97,
        a: 4,
        c: 37
    }, {
        s: 97,
        a: 5,
        c: 18
    }, {
        s: 98,
        a: 1,
        c: 56
    }, {
        s: 98,
        a: 2,
        c: 23
    }, {
        s: 98,
        a: 3,
        c: 11
    }, {
        s: 98,
        a: 4,
        c: 45
    }, {
        s: 98,
        a: 5,
        c: 78
    }, {
        s: 98,
        a: 6,
        c: 66
    }, {
        s: 98,
        a: 7,
        c: 42
    }, {
        s: 98,
        a: 8,
        c: 83
    }, {
        s: 99,
        a: 1,
        c: 20
    }, {
        s: 99,
        a: 2,
        c: 18
    }, {
        s: 99,
        a: 3,
        c: 16
    }, {
        s: 99,
        a: 4,
        c: 16
    }, {
        s: 99,
        a: 5,
        c: 13
    }, {
        s: 99,
        a: 6,
        c: 32
    }, {
        s: 99,
        a: 7,
        c: 22
    }, {
        s: 99,
        a: 8,
        c: 21
    }, {
        s: 100,
        a: 1,
        c: 13
    }, {
        s: 100,
        a: 2,
        c: 13
    }, {
        s: 100,
        a: 3,
        c: 13
    }, {
        s: 100,
        a: 4,
        c: 11
    }, {
        s: 100,
        a: 5,
        c: 11
    }, {
        s: 100,
        a: 6,
        c: 18
    }, {
        s: 100,
        a: 7,
        c: 15
    }, {
        s: 100,
        a: 8,
        c: 17
    }, {
        s: 100,
        a: 9,
        c: 25
    }, {
        s: 100,
        a: 10,
        c: 14
    }, {
        s: 100,
        a: 11,
        c: 19
    }, {
        s: 101,
        a: 1,
        c: 7
    }, {
        s: 101,
        a: 2,
        c: 9
    }, {
        s: 101,
        a: 3,
        c: 17
    }, {
        s: 101,
        a: 4,
        c: 26
    }, {
        s: 101,
        a: 5,
        c: 24
    }, {
        s: 101,
        a: 6,
        c: 17
    }, {
        s: 101,
        a: 7,
        c: 14
    }, {
        s: 101,
        a: 8,
        c: 16
    }, {
        s: 101,
        a: 9,
        c: 9
    }, {
        s: 101,
        a: 10,
        c: 13
    }, {
        s: 101,
        a: 11,
        c: 8
    }, {
        s: 102,
        a: 1,
        c: 13
    }, {
        s: 102,
        a: 2,
        c: 14
    }, {
        s: 102,
        a: 3,
        c: 12
    }, {
        s: 102,
        a: 4,
        c: 14
    }, {
        s: 102,
        a: 5,
        c: 20
    }, {
        s: 102,
        a: 6,
        c: 11
    }, {
        s: 102,
        a: 7,
        c: 18
    }, {
        s: 102,
        a: 8,
        c: 21
    }, {
        s: 103,
        a: 1,
        c: 6
    }, {
        s: 103,
        a: 2,
        c: 15
    }, {
        s: 103,
        a: 3,
        c: 52
    }, {
        s: 104,
        a: 1,
        c: 14
    }, {
        s: 104,
        a: 2,
        c: 16
    }, {
        s: 104,
        a: 3,
        c: 15
    }, {
        s: 104,
        a: 4,
        c: 17
    }, {
        s: 104,
        a: 5,
        c: 16
    }, {
        s: 104,
        a: 6,
        c: 14
    }, {
        s: 104,
        a: 7,
        c: 18
    }, {
        s: 104,
        a: 8,
        c: 14
    }, {
        s: 104,
        a: 9,
        c: 10
    }, {
        s: 105,
        a: 1,
        c: 25
    }, {
        s: 105,
        a: 2,
        c: 19
    }, {
        s: 105,
        a: 3,
        c: 20
    }, {
        s: 105,
        a: 4,
        c: 18
    }, {
        s: 105,
        a: 5,
        c: 15
    }, {
        s: 106,
        a: 1,
        c: 10
    }, {
        s: 106,
        a: 2,
        c: 23
    }, {
        s: 106,
        a: 3,
        c: 18
    }, {
        s: 106,
        a: 4,
        c: 26
    }, {
        s: 107,
        a: 1,
        c: 19
    }, {
        s: 107,
        a: 2,
        c: 17
    }, {
        s: 107,
        a: 3,
        c: 20
    }, {
        s: 107,
        a: 4,
        c: 11
    }, {
        s: 107,
        a: 5,
        c: 20
    }, {
        s: 107,
        a: 6,
        c: 13
    }, {
        s: 107,
        a: 7,
        c: 14
    }, {
        s: 108,
        a: 1,
        c: 16
    }, {
        s: 108,
        a: 2,
        c: 12
    }, {
        s: 108,
        a: 3,
        c: 15
    }, {
        s: 109,
        a: 1,
        c: 16
    }, {
        s: 109,
        a: 2,
        c: 14
    }, {
        s: 109,
        a: 3,
        c: 19
    }, {
        s: 109,
        a: 4,
        c: 17
    }, {
        s: 109,
        a: 5,
        c: 19
    }, {
        s: 109,
        a: 6,
        c: 14
    }, {
        s: 110,
        a: 1,
        c: 19
    }, {
        s: 110,
        a: 2,
        c: 31
    }, {
        s: 110,
        a: 3,
        c: 30
    }, {
        s: 111,
        a: 1,
        c: 15
    }, {
        s: 111,
        a: 2,
        c: 19
    }, {
        s: 111,
        a: 3,
        c: 15
    }, {
        s: 111,
        a: 4,
        c: 17
    }, {
        s: 111,
        a: 5,
        c: 15
    }, {
        s: 112,
        a: 1,
        c: 11
    }, {
        s: 112,
        a: 2,
        c: 9
    }, {
        s: 112,
        a: 3,
        c: 12
    }, {
        s: 112,
        a: 4,
        c: 15
    }, {
        s: 113,
        a: 1,
        c: 14
    }, {
        s: 113,
        a: 2,
        c: 9
    }, {
        s: 113,
        a: 3,
        c: 15
    }, {
        s: 113,
        a: 4,
        c: 20
    }, {
        s: 113,
        a: 5,
        c: 15
    }, {
        s: 114,
        a: 1,
        c: 14
    }, {
        s: 114,
        a: 2,
        c: 8
    }, {
        s: 114,
        a: 3,
        c: 8
    }, {
        s: 114,
        a: 4,
        c: 17
    }, {
        s: 114,
        a: 5,
        c: 20
    }, {
        s: 114,
        a: 6,
        c: 13
    }];
/*!
 * Vue.js v1.0.0-rc.1
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

	extend(Vue, __webpack_require__(12))

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
	  directives: __webpack_require__(15),
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

	Vue.version = '1.0.0-rc.1'
	module.exports = _.Vue = Vue


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(2)
	var extend = lang.extend

	extend(exports, lang)
	extend(exports, __webpack_require__(3))
	extend(exports, __webpack_require__(4))
	extend(exports, __webpack_require__(9))
	extend(exports, __webpack_require__(10))
	extend(exports, __webpack_require__(11))


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
	  ob.notify()
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
	  ob.notify()
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

	exports.camelize = function (str) {
	  return str.replace(/-(\w)/g, toUpper)
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

	exports.hyphenate = function (str) {
	  return str
	    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
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
	 * making unit tests difficult. This is fixed byy doing the
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
	      value: arg,
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
	strats.destroyed =
	strats.props = function (parentVal, childVal) {
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

	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(parentVal)
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
	        def.name = def.name || key
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
	  if (_.isPlainObject(props)) {
	    options.props = Object.keys(props).map(function (key) {
	      var val = props[key]
	      if (!_.isPlainObject(val)) {
	        val = { type: val }
	      }
	      val.name = key
	      return val
	    })
	  } else if (_.isArray(props)) {
	    options.props = props.map(function (prop) {
	      return typeof prop === 'string'
	        ? { name: prop }
	        : prop
	    })
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
	      var id = asset.name || (asset.options && asset.options.name)
	      if (!id) {
	        ("development") !== 'production' && _.warn(
	          'Array-syntax assets must provide a "name" field.'
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
	  var camelizedId = _.camelize(id)
	  var pascalizedId = camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)
	  var assets = options[type]
	  return assets[id] || assets[camelizedId] || assets[pascalizedId]
	}


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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

	exports.compiler = __webpack_require__(13)
	exports.FragmentFactory = __webpack_require__(20)
	exports.internalDirectives = __webpack_require__(35)
	exports.parsers = {
	  path: __webpack_require__(43),
	  text: __webpack_require__(6),
	  template: __webpack_require__(18),
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)

	_.extend(exports, __webpack_require__(14))
	_.extend(exports, __webpack_require__(49))


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var publicDirectives = __webpack_require__(15)
	var internalDirectives = __webpack_require__(35)
	var compileProps = __webpack_require__(48)
	var textParser = __webpack_require__(6)
	var dirParser = __webpack_require__(8)
	var templateParser = __webpack_require__(18)
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
	  a = a.descriptor.def.priority || 0
	  b = b.descriptor.def.priority || 0
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
	 * @return {Function}
	 */

	exports.compileRoot = function (el, options) {
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
	      if (containerAttrs) {
	        contextLinkFn = compileDirectives(containerAttrs, options)
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
	    containerAttrs.forEach(function (attr) {
	      if (attr.name.indexOf('v-') === 0 || attr.name === 'transition') {
	        _.warn(
	          attr.name + ' is ignored on component ' +
	          '<' + options.el.tagName.toLowerCase() + '> because ' +
	          'the component is a fragment instance: ' +
	          'http://vuejs.org/guide/components.html#Fragment_Instance'
	        )
	      }
	    })
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
	    var descriptor = {
	      name: 'component',
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    }
	    var componentLinkFn = function (vm, el, host, scope, frag) {
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
	  var fn = function terminalNodeLinkFn (vm, el, host, scope, frag) {
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
	        if (_.isLiteral(value)) {
	          value = _.stripQuotes(value)
	          modifiers.literal = true
	        }
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// text & html
	exports.text = __webpack_require__(16)
	exports.html = __webpack_require__(17)

	// logic control
	exports['for'] = __webpack_require__(19)
	exports['if'] = __webpack_require__(23)
	exports.show = __webpack_require__(24)

	// two-way binding
	exports.model = __webpack_require__(25)

	// event handling
	exports.on = __webpack_require__(30)

	// attributes
	exports.bind = __webpack_require__(31)

	// ref & el
	exports.el = __webpack_require__(32)
	exports.ref = __webpack_require__(33)

	// cloak
	exports.cloak = __webpack_require__(34)


/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(18)

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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(20)
	var isObject = _.isObject
	var uid = 0

	module.exports = {

	  priority: 2000,

	  bind: function () {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/)
	    if (inMatch) {
	      this.alias = inMatch[1]
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

	    // check for trackby param
	    this.idKey = this.param('track-by')

	    // check ref
	    this.ref = _.findRef(this.el)

	    // check for transition stagger
	    var stagger = +this.param('stagger')
	    this.enterStagger = +this.param('enter-stagger') || stagger
	    this.leaveStagger = +this.param('leave-stagger') || stagger

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

	    var idKey = this.idKey
	    var oldFrags = this.frags
	    var frags = this.frags = new Array(data.length)
	    var alias = this.alias
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
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (idKey || convertedFromObject || primitive) {
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
	        frag.destroy()
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
	    scope.$refs = {}
	    scope.$els = {}
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
	    var frag = this.factory.create(host, scope, this._frag)
	    frag.forId = this.id
	    this.cacheFrag(value, frag, index, key)
	    return frag
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function () {
	    var ref = this.ref
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
	    if (!hash.hasOwnProperty(ref)) {
	      _.defineReactive(hash, ref, refs)
	    } else {
	      hash[ref] = refs
	    }
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
	    var idKey = this.idKey
	    var cache = this.cache
	    var primitive = !isObject(value)
	    var id
	    if (key || idKey || primitive) {
	      id = idKey
	        ? idKey === '$index'
	          ? index
	          : value[idKey]
	        : (key || value)
	      if (!cache[id]) {
	        cache[id] = frag
	      } else if (idKey !== '$index') {
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
	    var idKey = this.idKey
	    var primitive = !isObject(value)
	    var frag
	    if (key || idKey || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : value[idKey]
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
	    var idKey = this.idKey
	    var scope = frag.scope
	    var index = scope.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = scope.hasOwnProperty('$key') && scope.$key
	    var primitive = !isObject(value)
	    if (idKey || key || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : value[idKey]
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
	      : index * this[type]
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
	      var type = typeof value
	      if (type === 'number') {
	        value = range(value)
	      } else if (type === 'string') {
	        value = _.toArray(value)
	      }
	      return value || []
	    }
	  },

	  unbind: function () {
	    if (this.ref) {
	      (this._scope || this.vm).$refs[this.ref] = null
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(13)
	var templateParser = __webpack_require__(18)
	var Fragment = __webpack_require__(21)
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(22)

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
	    this.nodes = _.toArray(frag.childNodes)
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
	 * @param {Boolean} trans
	 */

	function singleBefore (target, trans) {
	  var method = trans !== false
	    ? transition.before
	    : _.before
	  method(this.node, target, this.vm)
	  this.inserted = true
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove () {
	  var shouldCallRemove = _.inDoc(this.node)
	  transition.remove(this.node, this.vm)
	  this.inserted = false
	  if (shouldCallRemove) {
	    this.callHook(detach)
	  }
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} trans
	 */

	function multiBefore (target, trans) {
	  _.before(this.node, target)
	  var nodes = this.nodes
	  var vm = this.vm
	  var method = trans !== false
	    ? transition.before
	    : _.before
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    method(nodes[i], target, vm)
	  }
	  _.before(this.end, target)
	  this.inserted = true
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove () {
	  var shouldCallRemove = _.inDoc(this.node)
	  var parent = this.node.parentNode
	  var node = this.node.nextSibling
	  var nodes = this.nodes = []
	  var vm = this.vm
	  var next
	  while (node !== this.end) {
	    nodes.push(node)
	    next = node.nextSibling
	    transition.remove(node, vm)
	    node = next
	  }
	  parent.removeChild(this.node)
	  parent.removeChild(this.end)
	  this.inserted = false
	  if (shouldCallRemove) {
	    this.callHook(detach)
	  }
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
/* 22 */
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
	 * Remove by appending to another parent with transition.
	 * This is only used in block operations.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.removeThenAppend = function (el, target, vm, cb) {
	  apply(el, -1, function () {
	    target.appendChild(el)
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(20)

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
	      this.elseFrag.destroy()
	      this.elseFrag = null
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag)
	    this.frag.before(this.anchor)
	  },

	  remove: function () {
	    if (this.frag) {
	      this.frag.remove()
	      this.frag.destroy()
	      this.frag = null
	    }
	    if (this.elseFactory) {
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
	var transition = __webpack_require__(22)

	module.exports = {

	  bind: function () {
	    // check else block
	    var next = this.el.nextElementSibling
	    if (next && _.attr(next, 'v-else') !== null) {
	      this.elseEl = next
	    }
	  },

	  update: function (value) {
	    var el = this.el
	    transition.apply(el, value ? 1 : -1, function () {
	      el.style.display = value ? '' : 'none'
	    }, this.vm)
	    var elseEl = this.elseEl
	    if (elseEl) {
	      transition.apply(elseEl, value ? -1 : 1, function () {
	        elseEl.style.display = value ? 'none' : ''
	      }, this.vm)
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

	    // check params
	    // - lazy: update model on "change" instead of "input"
	    var lazy = this.param('lazy') != null
	    // - number: cast value into number when updating model.
	    var number = this.param('number') != null
	    // - debounce: debounce the input listener
	    var debounce = parseInt(this.param('debounce'), 10)

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
	    var number = this.param('number') != null

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value
	      }
	      var val = el.value
	      if (number) {
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

	    this.number = this.param('number') != null
	    var multiple = this.multiple = el.hasAttribute('multiple')

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple)
	      value = self.number
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
	    var number = this.param('number') != null

	    this.getValue = function () {
	      return el.hasOwnProperty('_value')
	        ? el._value
	        : number
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

	// check for attribtues that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/

	module.exports = {

	  priority: 850,

	  bind: function () {
	    var attr = this.arg
	    // handle interpolation bindings
	    if (this.descriptor.interp) {
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr)) {
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
	            raw + 'interpolation in "style" attribtue will cause ' +
	            'the attribtue to be discarded in Internet Explorer. ' +
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
	    if (inputProps[attr] && attr in this.el) {
	      this.el[attr] = value
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports.style = __webpack_require__(36)
	exports['class'] = __webpack_require__(37)
	exports.component = __webpack_require__(38)
	exports.prop = __webpack_require__(39)
	exports.transition = __webpack_require__(45)


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var camelRE = /([a-z])([A-Z])/g
	var testEl = null
	var propCache = {}

	module.exports = {

	  deep: true,

	  update: function (value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value
	    } else if (_.isArray(value)) {
	      this.objectHandler(value.reduce(_.extend, {}))
	    } else {
	      this.objectHandler(value)
	    }
	  },

	  objectHandler: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var prop, val
	    for (prop in cache) {
	      if (!(prop in value)) {
	        this.setProp(prop, null)
	        delete cache[prop]
	      }
	    }
	    for (prop in value) {
	      val = value[prop]
	      if (val !== cache[prop]) {
	        cache[prop] = val
	        this.setProp(prop, val)
	      }
	    }
	  },

	  setProp: function (prop, value) {
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
	  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var addClass = _.addClass
	var removeClass = _.removeClass

	module.exports = {

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
	    this.prevKeys = value
	  },

	  cleanup: function (value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        var key = this.prevKeys[i]
	        if (!value || !contains(value, key)) {
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
	var templateParser = __webpack_require__(18)

	module.exports = {

	  priority: 1500,

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
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this.param('keep-alive') != null

	      // check ref
	      this.ref = _.findRef(this.el)
	      var refs = (this._scope || this.vm).$refs
	      if (this.ref && !refs.hasOwnProperty(this.ref)) {
	        _.defineReactive(refs, this.ref, null)
	      }

	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this.param('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this.pendingComponentCb =
	      this.Component = null
	      // transition related state
	      this.pendingRemovals = 0
	      this.pendingRemovalCb = null
	      // check dynamic component params
	        // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      this.transMode = this.param('transition-mode')
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
	        el: templateParser.clone(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.ref,
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
	    this.childVM = target
	    switch (self.transMode) {
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
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      ("development") !== 'production' && _.warn(
	        'It seems you are using two-way binding on ' +
	        'a v-for alias, and the v-for has filters. ' +
	        'This will not work properly. Either remove the ' +
	        'filters or use an array of objects and bind to ' +
	        'object properties instead.'
	      )
	      return
	    }
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
	 * @param {Object} obj
	 */

	function traverse (obj) {
	  var key, val, i
	  for (key in obj) {
	    val = obj[key]
	    if (_.isArray(val)) {
	      i = val.length
	      while (i--) traverse(val[i])
	    } else if (_.isObject(val)) {
	      traverse(val)
	    }
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

	  priority: 1000,

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

	  // Importnatn hack:
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
	  var i = propOptions.length
	  var options, name, attr, value, path, parsed, prop
	  while (i--) {
	    options = propOptions[i]
	    name = options.name

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
	      mode: propBindingModes.ONE_WAY
	    }

	    // first check literal version
	    attr = _.hyphenate(name)
	    value = prop.raw = _.attr(el, attr)
	    if (value === null) {
	      // then check dynamic version
	      if ((value = _.getBindAttr(el, attr)) === null) {
	        if ((value = _.getBindAttr(el, attr + '.sync')) !== null) {
	          prop.mode = propBindingModes.TWO_WAY
	        } else if ((value = _.getBindAttr(el, attr + '.once')) !== null) {
	          prop.mode = propBindingModes.ONE_TIME
	        }
	      }
	      prop.raw = value
	      if (value !== null) {
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

	      } else if (options.required) {
	        // warn missing required
	        ("development") !== 'production' && _.warn(
	          'Missing required prop: ' + name
	        )
	      }
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
	        raw = _.stripQuotes(raw)
	        value = _.toBoolean(_.toNumber(raw))
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
	var templateParser = __webpack_require__(18)
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
	var templateParser = __webpack_require__(18)

	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.

	module.exports = {

	  priority: 1750,

	  bind: function () {
	    var host = this.vm
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var slotName = this.param('name')
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
	var FragmentFactory = __webpack_require__(20)
	var vIf = __webpack_require__(23)
	var Watcher = __webpack_require__(40)

	module.exports = {

	  priority: 1750,

	  bind: function () {
	    var el = this.el
	    this.anchor = _.createAnchor('v-partial')
	    _.replace(el, this.anchor)
	    var id = el.getAttribute('name')
	    if (id != null) {
	      // static partial
	      this.insert(id)
	    } else {
	      id = _.getBindAttr(el, 'name')
	      if (id) {
	        this.setupDynamic(id)
	      }
	    }
	  },

	  setupDynamic: function (exp) {
	    var self = this
	    var onNameChange = function (value) {
	      vIf.remove.call(self)
	      if (value) {
	        self.insert(value)
	      }
	    }
	    this.nameWatcher = new Watcher(this.vm, exp, onNameChange, {
	      scope: this._scope
	    })
	    onNameChange(this.nameWatcher.value)
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
	    if (this.nameWatcher) {
	      this.nameWatcher.teardown()
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
	var toArray = __webpack_require__(19)._postProcess

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */

	exports.filterBy = function (arr, search, delimiter /* ...dataKeys */) {
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
	        }
	      }
	    } else {
	      if (contains(item, search)) {
	        res.push(item)
	      }
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

	  // a flag to avoid this being observed
	  this._isVue = true

	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._shouldPropagate = false // for event propagation

	  // fragment instance properties
	  this._isFragment = false
	  this._fragmentStart =    // @type {CommentNode}
	  this._fragmentEnd = null // @type {CommentNode}

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

	  // set ref
	  if (options._ref) {
	    (this._scope || this._context).$refs[options._ref] = this
	  }

	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )

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
	var compiler = __webpack_require__(13)
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
	    var ob = Observer.create(items[i])
	    if (ob) {
	      (ob.parents || (ob.parents = [])).push(this)
	    }
	  }
	}

	/**
	 * Remove self from the parent list of removed objects.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.unobserveArray = function (items) {
	  var i = items.length
	  while (i--) {
	    var ob = items[i] && items[i].__ob__
	    if (ob) {
	      ob.parents.$remove(this)
	    }
	  }
	}

	/**
	 * Notify self dependency, and also parent Array dependency
	 * if any.
	 */

	Observer.prototype.notify = function () {
	  this.dep.notify()
	  var parents = this.parents
	  if (parents) {
	    var i = parents.length
	    while (i--) {
	      parents[i].notify()
	    }
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
	    var inserted, removed
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        removed = result
	        break
	      case 'pop':
	      case 'shift':
	        removed = [result]
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    if (removed) ob.unobserveArray(removed)
	    // notify change
	    ob.notify()
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
	var compiler = __webpack_require__(13)

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
	  var rootLinker = compiler.compileRoot(el, options)

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
	    this._blockFragment = el
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
	  }
	  // remove self from owner fragment
	  if (this._frag) {
	    this._frag.children.$remove(this)
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
	  // unregister ref
	  var ref = this.$options._ref
	  if (ref) {
	    var scope = this._scope || this._context
	    if (scope.$refs[ref] === this) {
	      scope.$refs[ref] = null
	    }
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

	  // initial bind
	  if (this.bind) {
	    this.bind()
	  }

	  if (this.literal) {
	    this.update && this.update(descriptor.raw)
	  } else if (
	    this.expression &&
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
	      handler = this.vm._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}

	/**
	 * Check for an attribute directive param, e.g. lazy
	 *
	 * @param {String} name
	 * @return {String}
	 */

	Directive.prototype.param = function (name) {
	  var param = _.attr(this.el, name)
	  if (param != null) {
	    param = (this._scope || this.vm).$interpolate(param)
	  } else {
	    param = _.getBindAttr(this.el, name)
	    if (param != null) {
	      param = (this._scope || this.vm).$eval(param)
	      ("development") !== 'production' && _.log(
	        'You are using bind- syntax on "' + name + '", which ' +
	        'is a directive param. It will be evaluated only once.'
	      )
	    }
	  }
	  return param
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
	    if (listeners) {
	      for (var i = 0; i < listeners.length; i++) {
	        _.off(this.el, listeners[i][0], listeners[i][1])
	      }
	    }
	    this.vm = this.el =
	    this._watcher = this._listeners = null
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
	var transition = __webpack_require__(22)

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
	  var op
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (
	    this._isFragment &&
	    !this._blockFragment.hasChildNodes()
	  ) {
	    op = withTransition === false
	      ? append
	      : transition.removeThenAppend
	    blockOp(this, this._blockFragment, op, realCb)
	  } else {
	    op = withTransition === false
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
	    blockOp(vm, target, op, cb)
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}

	/**
	 * Execute a transition operation on a fragment instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */

	function blockOp (vm, target, op, cb) {
	  var current = vm._fragmentStart
	  var end = vm._fragmentEnd
	  var next
	  while (next !== end) {
	    next = current.nextSibling
	    op(current, target, vm)
	    current = next
	  }
	  op(end, target, vm, cb)
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
	var compiler = __webpack_require__(13)

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
	  this._isCompiled = true
	  this._callHook('compiled')
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
function getCharCountJs(sura1, aya1, sura2, aya2) {
    var totalChars = 0;
    quranCharCount.forEach(function (sura) {
        if (sura.s >= sura1 && sura.s <= sura2) {
            if ((sura.s == sura1 && sura.a < aya1) || (sura.s == sura2 && sura.a > aya2)) {
                return;
            }
            totalChars += sura.c;
        }
    });

    return totalChars;
}

randomPhrase = [
    'سبحان الله وبحمده',
    'استغفر الله',
    'وَعَسَى أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ',
    'وَعَسَى أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ',
    'وَاسْتَعِينُواْ بِالصَّبْرِ وَالصَّلاَةِ'

];

function reloadMaterializeDOM() {
    $('.material-tooltip').remove();
    $('.tooltipped').tooltip('remove');
    $('.tooltipped').tooltip({delay: 100});
    $('select').material_select();
}

function reactToAjaxSuccess(data) {
    if (typeof data == 'object') {
        myAlert(data.msg);
        this.ajaxRespondData = data.data;
    } else if (typeof data == 'string') {
        myAlert(data);
    }
    $('#modal1').closeModal();
}

function reactToAjaxError(data, status, request) {
    if (status == 422) {
        myAlert(firstJsonError(data), 'error');
    } else if (status == 0) {
        myAlert('عفوا.. انقطع الإتصال بالإنترنت', 'error')
    } else {
        //console.log('request : ' + request);
        //console.log('status : ' + status);
        myAlert('[ ' + status + ' ] ' + 'عفوا.. حدث خطأ', 'error')
    }
}
function firstJsonError(obj) {
    for (var a in obj) return obj[a];
}

function myAlert(msg, type, duration) {
    var msgType = type ? type : 'success';
    var typeColorArray = {
        'success': 'green lighten-1 title-font',
        'error': 'red lighten-2 title-font',
        'info': 'blue lighten-1 title-font'
    };
    duration = duration ? duration : 4000;
    Materialize.toast(msg, duration, typeColorArray[msgType])
}

//function makeAjaxRequest($requestType, $url, $requestData) {
//    //console.info(JSON.stringify($data, null, "  "));
//    this.$http.post($url, $requestData,
//        function (data) {
//            myAlert(data);
//        })
//        .error(function (data, status) {
//            if (status == 422) {
//                myAlert(firstJsonError(data), 'error');
//            } else {
//                myAlert('عفوا.. حدث خطأ', 'error')
//            }
//        })
//}

Vue.transition('stagger', {
    stagger: function (index) {
        // increase delay by 50ms for each transitioned item,
        // but limit max delay to 300ms
        return Math.min(300, index * 50)
    }
})
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.http.options.root = '';
Vue.config.debug = true;
Vue.config.strict = true;
var myData = {
    allJson: {
        students: [],
        halakah:[],
        memorizeTypes: [],
        allBehaviors: [],
        SelectedDayDaily: true,
        selectedDate: null,
        previousDate: null
    },
    CurrentMemorizeTypeID: null,
    //CurrentStudentID: null,
    CurrentDailyId: null,
    newMemorize: {},
    previousMemorize: {},
    selectedStudentInfo: {},
    ajaxRespondData: null,
    search: null,
    searchType: 'name',
    searchTypes: [
        {value: 'name', text: 'بحث بإسم الطالب'},
        {value: 'points', text: 'بحث بمجموع النقاط'},
        {value: 'degree', text: 'بحث بالتقدير'}],
    sortTypes: [
        {value: 'stFullName4', text: 'ترتيب حسب إسم الطالب'},
        {value: 'finalPoints', text: 'ترتيب حسب مجموع النقاط'}],
    sortType: 'stFullName4',
    sortOrder: 1,
    degreeTypes: [{value: '', text: 'الجميع'},
        {value: 'success', text: 'ممتاز'},
        {value: 'info', text: 'جيد جدا'},
        {value: 'warning', text: 'جيد'},
        {value: 'danger', text: 'لم يحفظ'},
        {value: 'default', text: 'لم يسمِّع'}],
    degreeType: null,
    sora1Ayat: null,
    sora1AyatArray: [],
    sora2Ayat: null,
    sora2AyatArray: [],
    errorsMaxCount: [],
    quranIdAndName: [],
    quranIdAndAyat: [],
    checkAll: false,
    quran: quran,
    quranCharCount: quranCharCount,
    //ajaxMsg: null,
    //showAjaxMsg: false
    randomPhrases: randomPhrase
};


var content = new Vue({
    el: '#content',
    data: myData,
    ready: function () {
        /*var g_date = '20150620'; console.log('Selected Gregorian date : ' + g_date); var todayHijriDateArray = zezo_get_hijri_date(g_date); this.todayHijriDate = todayHijriDateArray; console.log('Converted from g to (H array) : ' + this.days.todayHijriDate); for (var i = 0; i < 5; i++) { var rowTodayHijriDate = get_row_hijri_date(todayHijriDateArray); console.log('converted from (H array) to (H row) : ' + rowTodayHijriDate); var g_date = get_g_date(rowTodayHijriDate); console.log('convert (H row) to (G row) : ' + g_date); var day_no = get_g_date(rowTodayHijriDate, 'yes'); console.log('get day No from H date : ' + day_no); var addDays = add_days(g_date, -7); console.log('Add days to (G date) : ' + addDays); }*/
        this.getDataFromDB();
        var x = 1;
        this.errorsMaxCount = ([{'value': 0, 'text': 0}]);
        while (x < 21) {
            this.errorsMaxCount.push({'value': x, 'text': x});
            x++;
        }
        this.quranIdAndName = [{value: '', text: 'حدد السورة'}];
        this.quranIdAndAyat = [{value: '', text: 'حدد الآية'}];
        this.quran.forEach(function (sora) {
            this.quranIdAndName.push({value: sora.n, text: sora.t});
            this.quranIdAndAyat.push({value: sora.n, text: sora.a});
        }.bind(this));
    },

    computed: {
        summaries: function () {
            var data = [];
            this.allJson.students.forEach(function (student) {
                var selectedDailyData = this.singleDailyData(student, this.allJson.selectedDate);
                var dailyId, dailyHDate, attendance_status,
                    goodBehaviorsPoints, badBehaviorsPoints, totalBehaviors,
                    memorize1Points, memorize2Points, memorize3Points, totalMemorize,
                    memorize1Class, memorize2Class, memorize3Class,
                    finalPoints;
                if (selectedDailyData.id) {

                    //Daily
                    dailyId = selectedDailyData.id;
                    dailyHDate = selectedDailyData.h_date;
                    attendance_status = selectedDailyData.attendance_status;

                    //Behaviors
                    goodBehaviorsPoints = parseFloat(this.studentBehaviorsPoints(student, 1)) || 0;
                    badBehaviorsPoints = parseFloat(this.studentBehaviorsPoints(student, 2)) || 0;

                    totalBehaviors = parseFloat(goodBehaviorsPoints) - parseFloat(badBehaviorsPoints);

                    //Memorize
                    memorize1Points = parseFloat(this.studentMemorizeData(student, 1).points) || 0;
                    memorize2Points = parseFloat(this.studentMemorizeData(student, 2).points) || 0;
                    memorize3Points = parseFloat(this.studentMemorizeData(student, 3).points) || 0;

                    totalMemorize = parseFloat(memorize1Points) + parseFloat(memorize2Points) + parseFloat(memorize3Points);

                    memorize1Class = this.studentMemorizeData(student, 1).myClass;
                    memorize2Class = this.studentMemorizeData(student, 2).myClass;
                    memorize3Class = this.studentMemorizeData(student, 3).myClass;

                    finalPoints = totalBehaviors + totalMemorize;

                }
                data.push({
                    st_no: student.st_no,
                    stFullName4: student.stFullName4,
                    stFullName3: student.stFullName3,
                    FatherMobileNo: student.FatherMobileNo,
                    dailyId: dailyId || null,
                    dailyHDate: dailyHDate || null,
                    attendance_status: attendance_status || null,
                    goodBehaviorsPoints: goodBehaviorsPoints ? parseFloat(goodBehaviorsPoints.toFixed(2)) : 0,
                    badBehaviorsPoints: badBehaviorsPoints ? parseFloat(badBehaviorsPoints.toFixed(2)) : 0,

                    totalBehaviors: totalBehaviors ? parseFloat(totalBehaviors.toFixed(2)) : 0,

                    memorize1Points: memorize1Points ? parseFloat(memorize1Points.toFixed(2)) : 0,
                    memorize2Points: memorize2Points ? parseFloat(memorize2Points.toFixed(2)) : 0,
                    memorize3Points: memorize3Points ? parseFloat(memorize3Points.toFixed(2)) : 0,

                    totalMemorize: totalMemorize ? parseFloat(totalMemorize.toFixed(2)) : 0,

                    memorize1Class: memorize1Class || 'default text-muted',
                    memorize2Class: memorize2Class || 'default text-muted',
                    memorize3Class: memorize3Class || 'default text-muted',

                    finalPoints: finalPoints ? parseFloat(finalPoints.toFixed(2)) : 0

                });
            }.bind(this));
            return data;
        }
    },

    methods: {

        degree: function (myClass) {
            switch (true) {
                case (myClass == 'success'):
                    return 'ممتاز';
                case (myClass == 'info'):
                    return 'جيد جدا';
                case (myClass == 'warning'):
                    return 'جيد';
                case (myClass == 'danger'):
                    return 'لم يحفظ';
            }
        },

        getDataFromDB: function () {
            this.summaries.splice(0);
            this.allJson.SelectedDayDaily = true;
            var rowDate = date_to_no(this.allJson.selectedDate);
            if (!rowDate) return false;
            this.$http.get('daily/allJson/' + rowDate + '/215', function (data) {
                this.allJson = data;
            }.bind(this));
            setTimeout(reloadMaterializeDOM(), 2000);
        },

        extractSelectedMemorizeToArray: function (memorizeDate, memorizeTypeID, student) {
            var memorize = {
                id: null, daily_id: null, method_id: null,
                start_sora: null, start_aya: null, end_sora: null, end_aya: null,
                errors_count: null, hesitations_count: null,
                points: null, notes: null, is_not_memorized: null, memorize_type: null
            };
            var selectedDailyData = this.singleDailyData(student, memorizeDate);


            if (!selectedDailyData.memorize) return memorize;
            selectedDailyData.memorize.forEach(function (st_memorize) {
                if (memorizeTypeID == st_memorize.method_id) {
                    memorize = st_memorize;
                    memorize.daily_id = selectedDailyData.id;
                    memorize.memorize_type = memorizeTypeID;
                }
                //}
            }.bind(this));
            return memorize;
        },

        findStudentById: function (studentID) {
            var student = {};
            this.allJson.students.forEach(function (st) {
                if (st.st_no == studentID) {
                    student = st;
                    return false;
                }
            });
            return student;
        },

        openMemorizeForm: function (memorizeTypeID, studentID) {
            var student = this.findStudentById(studentID);
            this.CurrentMemorizeTypeID = memorizeTypeID;
            this.selectedStudentInfo = {stFullName4: student.stFullName4, stFullName3: student.stFullName3, st_no: student.st_no};
            this.newMemorize = {};
            this.previousMemorize = {};
            this.newMemorize = this.extractSelectedMemorizeToArray(this.allJson.selectedDate, memorizeTypeID, student);

            student.daily.forEach(function (daily) {
                if (date_to_no(this.allJson.selectedDate) != daily.h_date) {
                    daily.memorize.forEach(function (memorize) {
                        if (memorizeTypeID == memorize.method_id) {
                            this.allJson.previousDate = rawToFormattedDate(daily.h_date);
                        }
                    }.bind(this));
                } else if (date_to_no(this.allJson.selectedDate) == daily.h_date) {
                    this.CurrentDailyId = daily.id;
                }
            }.bind(this));


            if (this.allJson.previousDate) {
                this.previousMemorize = this.extractSelectedMemorizeToArray(this.allJson.previousDate, memorizeTypeID, student);
            }

            if (!this.previousMemorize.id && !this.newMemorize.id) {
                this.getPreviousMemorize(date_to_no(this.allJson.selectedDate), memorizeTypeID, student.st_no)
            } else {
                this.prepareNewDayMemorization();
            }

            setTimeout(reloadMaterializeDOM, 1000);
            $('#modal1').openModal();
        },

        prepareNewDayMemorization: function () {
//إذا كان يوم جديد فيتم تجهيز بيانات اليوم كبداية التسميع
            if (!this.newMemorize.id && this.previousMemorize.id) {
                this.newMemorize.daily_id = this.CurrentDailyId;
                if (!this.previousMemorize.is_not_memorized) {
                    var $last_aya = this.previousMemorize.end_aya >= this.quran[this.previousMemorize.end_sora - 1].a;
                    this.newMemorize.start_sora = $last_aya ? this.previousMemorize.end_sora + 1 : this.previousMemorize.end_sora;
                    this.newMemorize.start_aya = $last_aya ? 1 : this.previousMemorize.end_aya + 1;

                    this.newMemorize.end_sora = $last_aya ? this.previousMemorize.end_sora + 1 : this.previousMemorize.end_sora;

                    //إذا كانت آخر سورة هي الناس
                    this.newMemorize.start_sora = this.newMemorize.start_sora == 114 ? 114 : this.newMemorize.start_sora;
                } else {
                    this.newMemorize.start_sora = this.previousMemorize.start_sora;
                    this.newMemorize.start_aya = this.previousMemorize.start_aya;

                    this.newMemorize.end_sora = this.previousMemorize.end_sora;
                    this.newMemorize.end_aya = this.previousMemorize.end_aya;
                }
            }
            this.getAyatCount();
        },

        getPreviousMemorize: function (h_date, memorizeTypeID, studentID) {
            this.$http.get('memorize/getMemorizeData/' + h_date + '/' + memorizeTypeID + '/' + studentID, function (data) {
                this.previousMemorize = data;
                this.prepareNewDayMemorization();
            }.bind(this));
        },

        getAyatCount: function () {
            if (this.newMemorize.start_sora) {
                this.sora1Ayat = this.quran[this.newMemorize.start_sora - 1].a;
                var x = 1;
                this.sora1AyatArray = ([{value: '', text: 'حدد الآية'}]);
                while (x <= this.sora1Ayat) {
                    this.sora1AyatArray.push({value: x, text: x});
                    x++;
                }
            }
            if (this.newMemorize.end_sora) {
                this.sora2Ayat = this.quran[this.newMemorize.end_sora - 1].a;
                var y = 1;
                this.sora2AyatArray = ([{value: '', text: 'حدد الآية'}]);
                while (y <= this.sora2Ayat) {
                    this.sora2AyatArray.push({value: y, text: y});
                    y++;
                }
            }
        },

        modelClass: function () {
            if (this.newMemorize.id > 0)
                return this.pointClass(this.newMemorize);
        },

        singleMemorizeData: function (memorizeTypeID) {
            var selectedMemorize = '';
            this.allJson.memorizeTypes.forEach(function (memorize) {
                if (memorizeTypeID == memorize.id) {
                    selectedMemorize = memorize;
                    return false;
                }
            });
            return selectedMemorize;
        },

        singleBehaviorData: function (behavior_id) {
            var behaviors = '';
            this.allJson.allBehaviors.forEach(function (behavior) {
                if (behavior_id == behavior.id) {
                    behaviors = behavior;
                    return false;
                }
            });
            return behaviors;
        },

        pointClass: function (st_memorize) {
            //console.log(st_memorize.method_id);
            var a_point = this.singleMemorizeData(st_memorize.method_id).a_point;
            //var a_point = 3;
            var b_point = (a_point / 3) * 2;

            var st_points = st_memorize.points;
            if (st_memorize.is_not_memorized == 0) {
                switch (true) {
                    case (st_points >= a_point):
                        return 'success';
                    case (st_points >= b_point):
                        return 'info';
                    case (st_points < b_point):
                        return 'warning';
                }
            }
            return 'danger';
        },

        singleDailyData: function (student, Date) {
            if (!student.daily.length) return {};
            var rowDate = date_to_no(Date);
            var selectedDaily = {};
            student.daily.forEach(function (daily, index) {
                if (daily.h_date == rowDate) {
                    daily.index = index;
                    selectedDaily = daily;
                    return false;
                }
            });
            return selectedDaily;
        },

        studentBehaviorsPoints: function (student, behaviorTypeID) {
            var selectedDailyIndex = this.singleDailyData(student, this.allJson.selectedDate);
            var totalBehaviorsPoints = 0;
            if (!selectedDailyIndex.behavior) return false;

            selectedDailyIndex.behavior.forEach(function (behavior) {
                var singleBehavior = this.singleBehaviorData(behavior.behavior_id);
                if ((behaviorTypeID) == singleBehavior.bahavior_type) {
                    totalBehaviorsPoints += parseFloat(behavior.points);
                }
            }.bind(this));
            if (totalBehaviorsPoints) return totalBehaviorsPoints;

            return false;
        },

        studentMemorizeData: function (student, memorizeTypeID) {
            var memorize = {};
            var selectedDailyData = this.singleDailyData(student, this.allJson.selectedDate);
            if (selectedDailyData.memorize) {
                selectedDailyData.memorize.forEach(function (st_memorize) {
                    //var singleMethod = this.singleMethodData(st_memorize.method_id);
                    //var selectedMemorizeData = this.singleMemorizeData(memorizeTypeID);
                    if (memorizeTypeID == st_memorize.method_id) {
                        st_memorize.myClass = this.pointClass(st_memorize);
                        memorize = st_memorize;
                        return false;
                    }
                }.bind(this));
            }
            if (!memorize.myClass) memorize.myClass = 'default text-muted';
            if (!memorize.points) memorize.points = 0;
            return memorize;

        },

        changeLocalMemorize: function (typeOfChange) {
            //typeOfChange  'update','store','destroy'
            this.allJson.students.forEach(function (student) {
                if (student.st_no == this.selectedStudentInfo.st_no) {
                    student.daily.forEach(function (daily) {
                        if (daily.id == this.newMemorize.daily_id) {

                            if (typeOfChange == 'store') {
                                daily.memorize.push(this.newMemorize);

                            } else if (typeOfChange == 'update') {
                                for (var i2 = 0; i2 < daily.memorize.length; i2++) {
                                    if (daily.memorize[i2].id == this.newMemorize.id) {
                                        daily.memorize.splice(i2, 1, this.newMemorize);
                                    }
                                }

                            } else if (typeOfChange == 'destroy') {
                                for (var i3 = 0; i3 < daily.memorize.length; i3++) {
                                    if (daily.memorize[i3].id == this.newMemorize.id) {
                                        daily.memorize.splice(i3, 1);
                                    }
                                }
                            }
                        }
                    }.bind(this));
                }
            }.bind(this));

        },

        setSortType: function () {
            if (this.sortType == 'stFullName4') this.sortOrder = 1;
            if (this.sortType == 'finalPoints') this.sortOrder = -1;
        },

        makeAjaxRequest: function ($url, $requestData) {
            this.ajaxRespondData = null;
            this.$http.post($url, $requestData,
                function (data) {
                    reactToAjaxSuccess(data);
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                })
        },

        prepareNewMemorizeBeforeSaving: function () {
            this.newMemorize.is_not_memorized = this.newMemorize.is_not_memorized ? this.newMemorize.is_not_memorized : 0;
            this.newMemorize.errors_count = this.newMemorize.errors_count ? this.newMemorize.errors_count : 0;
            this.newMemorize.hesitations_count = this.newMemorize.hesitations_count ? this.newMemorize.hesitations_count : 0;
        },

        storeMemorize: function () {
            this.prepareNewMemorizeBeforeSaving();
            var a_point = this.singleMemorizeData(this.CurrentMemorizeTypeID).a_point;
            if (this.newMemorize.id) {
                //Update memorization
                this.newMemorize.points = a_point - this.newMemorize.errors_count;
                this.$http.put('memorize/update/', this.newMemorize,
                    function (data) {
                        reactToAjaxSuccess(data);
                        this.changeLocalMemorize('update');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            } else {
                //create a new memorization
                this.newMemorize.daily_id = this.CurrentDailyId;
                this.newMemorize.method_id = this.CurrentMemorizeTypeID;
                this.newMemorize.points = a_point - this.newMemorize.errors_count;
                this.$http.post('memorize/store/', this.newMemorize,
                    function (data) {
                        reactToAjaxSuccess(data);
                        this.newMemorize.id = data.data.id;
                        this.changeLocalMemorize('store');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            }
            //console.info(JSON.stringify(this.newMemorize, null, "  "));
        },

        destroyMemorize: function () {
            this.$http.delete('memorize/destroy/' + this.newMemorize.id, null,
                function (data) {
                    reactToAjaxSuccess(data);
                    this.changeLocalMemorize('destroy');
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
        },

        prepareNewDailyForHalakah: function () {
            this.$http.post('daily/prepareForHalakah/', {'h_date': date_to_no(this.allJson.selectedDate), 'StHalaqah': 215},
                function (data) {
                    reactToAjaxSuccess(data);
                    this.getDataFromDB();
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
        },

        randomPhrase: function () {
            return randomPhrase[Math.floor((Math.random() * randomPhrase.length - 1) + 1)];
        }


        //Filters
    },

    filters: {
        multiFilter: function (summaries) {
            return summaries.filter(function (summaries) {
                switch (true) {
                    case (this.searchType === 'name'):
                        if (!this.search) return summaries;
                        return summaries.stFullName4.search(this.search) >= 0;
                    case (this.searchType === 'points'):
                        if (!this.search) return summaries;
                        return summaries.finalPoints >= this.search;
                    case (this.searchType === 'degree'):
                        if (!this.degreeType) return summaries;
                        return summaries.memorize1Class.search(this.degreeType) >= 0
                            || summaries.memorize2Class.search(this.degreeType) >= 0
                            || summaries.memorize3Class.search(this.degreeType) >= 0;
                }
            }.bind(this));
        }
    }
});
//# sourceMappingURL=main.js.map