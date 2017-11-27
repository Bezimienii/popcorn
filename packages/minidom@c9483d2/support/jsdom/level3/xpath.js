!function(){function e(e,n,t,r){var o=e(n,t);if(null==o)return null;for(var s;s=n.trypop(r);){var i=e(n,t);if(null==i)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+n.position()+": Expected something after "+s);o=t.node(s,o,i)}return o}function n(e,n){return t(e,n)||r(null,e,n)}function t(e,n){var t=e.peek();if("/"===t||"//"===t){var o=n.node("Root");return r(o,e,n,!0)}return null}function r(e,n,t,r){if(null==e&&(e=o(n,t),null==e))return e;for(var s;s=n.trypop(["/","//"]);){"//"===s&&(e=t.node("/",e,t.node("Axis","descendant-or-self","node",void 0)));var i=o(n,t);if(null==i&&"/"===s&&r)return e;if(r=!1,null==i)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+n.position()+": Expected step after "+s);e=t.node("/",e,i)}return e}function o(e,n){var t=e.trypop([".",".."]);if("."===t)return n.node("Axis","self","node");if(".."===t)return n.node("Axis","parent","node");var r,o=s(e,n),a=i(e,n);if(null==a&&(r=u(e,n)),null==o&&null==a&&null==r)return null;if(null==a&&null==r)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected nodeTest after axisSpecifier "+o);null==o&&(o="child"),null==a&&(a="attribute"===o?"attribute":"namespace"===o?"namespace":"element");for(var h,p=n.node("Axis",o,a,r);null!=(h=l(p,e,n));)p=h;return p}function s(e,n){var t=e.trypop("@");if(null!=t)return"attribute";var r=e.trypopaxisname();if(null!=r){var o=e.trypop("::");if(null==o)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Should not happen. Should be ::.");return r}}function i(e,n){if("("!==e.peek2())return null;var t=e.trypop(["comment","text","processing-instruction","node"]);if(null!=t){if(null==e.trypop("("))throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Should not happen.");var r=void 0;if("processing-instruction"==t&&(r=e.trypopliteral()),null==e.trypop(")"))throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected close parens.");return t}}function u(e,n){var t=e.trypopnametest();return null!=t?t:null}function l(e,n,t){if(null==n.trypop("["))return null;var r=d(n,t);if(null==r)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+n.position()+": Expected expression after [");if(null==n.trypop("]"))throw new W(W.INVALID_EXPRESSION_ERR,"Position "+n.position()+": Expected ] after expression.");return t.node("Predicate",e,r)}function a(e,n){var t=e.trypopliteral();if(null==t&&(t=e.trypopnumber()),null!=t)return t;var r=e.trypopvarref();if(null!=r)return n.node("VariableReference",r);var o=h(e,n);if(null!=o)return o;if(e.trypop("(")){var s=d(e,n);if(null==s)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected expression after (.");if(null==e.trypop(")"))throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected ) after expression.");return s}return null}function h(e,n){var t=e.trypopfuncname(e,n);if(null==t)return null;if(null==e.trypop("("))throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected ( ) after function name.");for(var r=[],o=!0;null==e.trypop(")");){if(!o&&null==e.trypop(","))throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected , between arguments of the function.");o=!1;var s=d(e,n);if(null==s)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected expression as argument of function.");r.push(s)}return n.node("FunctionCall",t,r)}function p(n,t){return e(f,n,t,"|")}function f(e,t){var o=c(e,t);if(null==o){var s=n(e,t);if(null==s)throw new Error;return t.node("PathExpr",s)}var i=r(o,e,t,!1);return o===i?i:t.node("PathExpr",i)}function c(e,n){var t=a(e,n);if(null==t)return null;for(var r,o=t;null!=(r=l(o,e,n));)o=r;return o}function d(n,t){var r=((n.peeked||"")+n.str,e(E,n,t,"or"));(n.peeked||"")+n.str;return r}function E(n,t){return e(v,n,t,"and")}function v(n,t){return e(R,n,t,["=","!="])}function R(n,t){return e(_,n,t,["<",">","<=",">="])}function _(n,t){return e(g,n,t,["+","-"])}function g(n,t){return e(N,n,t,["*","div","mod"])}function N(e,n){if(e.trypop("-")){var t=N(e,n);if(null==t)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Expected unary expression after -");return n.node("UnaryMinus",t)}return p(e,n)}function m(e){this.nodes=[],this.pos=[],this.lasts=[],this.nextPos=[],this.seriesIndexes=[],this.isReverseAxis=e,this._pushToNodes=e?Array.prototype.unshift:Array.prototype.push}function y(e){for(var n=[],t=0;t<e.nodes.length;t++){var r=e.nodes[t];if(e.pos)for(var o=0;o<e.pos[t].length;++o)n.push({nodes:[r],pos:[[e.pos[t][o]]],lasts:[[e.lasts[t][o]]]});else n.push({nodes:[r],pos:[[t+1]],lasts:[[e.nodes.length]]})}return n}function w(e,n,t){this.nodeTypeNum=e,this.nodeName=n,this.shouldLowerCase=t,this.nodeNameTest=null==n?this._alwaysTrue:t?this._nodeNameLowerCaseEquals:this._nodeNameEquals}function T(e,n,t,r,o,s,i,u,l){for(var a=new w(n,t,r),h=new m(l);0<e.length;){var p=o.call(e);console.assert(null!=p),p=i(p),h.pushSeries();for(var f=1;null!=p;)!u&&a.matches(p)&&h.addNode(p),p===s.call(e)&&(o.call(e),h.pushSeries(),f++),u&&a.matches(p)&&h.addNode(p),p=i(p);for(;0<f--;)h.popSeries()}return h}function O(e){if(e.ownerElement){if(e.ownerElement.firstChild)return e.ownerElement.firstChild;e=e.ownerElement}do if(e.nextSibling)return e.nextSibling;while(e=e.parentNode);return null}function b(e){if(e.ownerElement&&(e=e.ownerElement),null!=e.firstChild)return e.firstChild;do{if(null!=e.nextSibling)return e.nextSibling;e=e.parentNode}while(e);return null}function P(e){if(e.ownerElement)return e.ownerElement;if(null!=e.previousSibling){for(e=e.previousSibling;null!=e.lastChild;)e=e.lastChild;return e}return null!=e.parentNode?e.parentNode:null}function D(e,n,t,r){for(var o=new w(n,t,r),s=new m((!1)),i=e[0],u=[],l=0;l<e.length;l++){var a=e[l],h=O(a);h&&u.push(h)}if(0===u.length)return{nodes:[]};for(var p=0;i=b(i);){for(var l=u.length-1;l>=0;l--)i===u[l]&&(s.pushSeries(),u.splice(l,l+1),p++);p&&o.matches(i)&&s.addNode(i)}console.assert(0===u.length);for(var l=0;l<p;l++)s.popSeries();return s.finalize()}function S(e,n,t,r){var o=new w(n,t,r),s=e.pop();if(null==s)return{nodes:{}};for(var i={nodes:[],pos:[],lasts:[]},u=[s.parentNode||s.ownerElement],l=[1];s=P(s);){s===e[e.length-1]&&(u.push(e.pop()),l.push(1));var a,h=o.matches(s),p=!1;h&&(a=l.slice());for(var f=0;f<u.length;++f)s===u[f]?(u[f]=s.parentNode||s.ownerElement,h&&(a[f]=null)):h&&(a[f]=l[f]++,p=!0);p&&(i.nodes.unshift(s),i.pos.unshift(a))}for(var f=0;f<i.pos.length;++f){var c=[];i.lasts.push(c);for(var d=i.pos[f].length-1;d>=0;d--)null==i.pos[f][d]?i.pos[f].splice(d,d+1):c.unshift(l[d]-1)}return i}function I(e,n,t,r,o,s,i){for(;0<t.length&&null!=t[0].ownerElement;){var u=t.shift();o&&r.matches(u)&&(i.push(u),s.push(e.nodes.length))}null==n||o||r.matches(n)&&e.addNode(n);var l=!1;if(null==n){if(0===t.length)return;n=t.shift(),e.pushSeries(),l=!0}else 0<t.length&&n===t[0]&&(e.pushSeries(),l=!0,t.shift());o&&r.matches(n)&&e.addNode(n);for(var a=n.childNodes,h=0;h<a.length;++h){var p=a[h];I(e,p,t,r,o,s,i)}l&&e.popSeries()}function A(e,n,t,r,o){for(var s=new w(n,t,r),i=new m((!1)),u=[],l=[];0<e.length;)I(i,null,e,s,o,u,l);i.finalize();for(var a=l.length-1;a>=0;--a)i.nodes.splice(u[a],u[a],l[a]),i.pos.splice(u[a],u[a],[1]),i.lasts.splice(u[a],u[a],[1]);return i}function x(e,n,t,r,o){for(var s=new w(n,t,r),i=[],u=0;u<e.length;++u){for(var l=e[u],a=!0,h=[];null!=l;)a&&!o||s.matches(l)&&h.push(l),a=!1,l=l.parentNode||l.ownerElement;0<h.length&&i.push(h)}for(var p=[],u=0;u<i.length;++u)p.push(i[u].length);for(var f=(new m((!0)),{nodes:[],pos:[],lasts:[]});0<i.length;){for(var c=[i[0].length],d=[p[0]],l=i[0].pop(),u=i.length-1;u>0;--u)l===i[u][i[u].length-1]&&(c.push(i[u].length),d.push(p[u]),i[u].pop(),0===i[u].length&&(i.splice(u,u+1),p.splice(u,u+1)));0===i[0].length&&(i.shift(),p.shift()),f.nodes.push(l),f.pos.push(c),f.lasts.push(d)}return f}function Y(e){var n=[e];for(null!=e.ownerElement&&(e=e.ownerElement,n.push(-1));null!=e;){for(var t=0;null!=e.previousSibling;)e=e.previousSibling,t++;n.push(t),e=e.parentNode}return n}function L(e,n){var t=Math.min(e.length-1,n.length-1),r=e.length,o=n.length;if(e[0]===n[0])return 0;for(var s,i=0;i<t&&(s=e[r-i-1]-n[o-i-1],0===s);++i);return null!=s&&0!==s||(s=r-o),0===s&&(s=e.nodeName-n.nodeName),0===s&&(s=1),s}function j(e){function n(e,n){return L(e.v,n.v)}for(var t=[],r=0;r<e.nodes.length;r++){var o=Y(e.nodes[r]);t.push({v:o,n:e.nodes[r],p:e.pos[r],l:e.lasts[r]})}t.sort(n);for(var s={nodes:[],pos:[],lasts:[]},r=0;r<t.length;++r)s.nodes.push(t[r].n),s.pos.push(t[r].p),s.lasts.push(t[r].l);return s}function X(e,n){var t,r,o,s,i=[];if("object"!=typeof e)throw new W(W.INVALID_EXPRESSION_ERR,"Invalid LHS for | operator (expected node-set): "+e);if("object"!=typeof n)throw new W(W.INVALID_EXPRESSION_ERR,"Invalid LHS for | operator (expected node-set): "+n);for(;;){if(null==t&&(t=e.shift(),null!=t&&(o=Y(t))),null==r&&(r=n.shift(),null!=r&&(s=Y(r))),null==t||null==r)break;var u=L(o,s);u<0?(i.push(t),t=null,o=null):u>0?(i.push(r),r=null,s=null):t.nodeName<r.nodeName?(i.push(t),t=null,o=null):t.nodeName>r.nodeName?(i.push(r),r=null,s=null):t!==r?(i.push(r),r=null,s=null):(console.assert(t===r,u),r=null,s=null)}for(;t;)i.push(t),t=e.shift();for(;r;)i.push(r),r=n.shift();return i}function k(e,n,t,r){var o;if(o=r?F.number:"boolean"==typeof n||"boolean"==typeof t?F["boolean"]:"number"==typeof n||"number"==typeof t?F.number:F.string,"object"==typeof n&&"object"==typeof t){for(var s=0;s<n.nodes.length;++s)for(var i=o({nodes:[n.nodes[s]]}),u=0;u<t.nodes.length;++u){var l=o({nodes:[t.nodes[u]]});if(e(i,l))return!0}return!1}if("object"==typeof n&&n.nodes&&n.nodes.length){for(var s=0;s<n.nodes.length;++s){var i=o({nodes:[n.nodes[s]]}),a=o(t);if(e(i,a))return!0}return!1}if("object"==typeof t&&n.nodes&&n.nodes.length){for(var s=0;s<n.nodes.length;++s){var h=o({nodes:[t.nodes[s]]}),p=o(n);if(e(p,h))return!0}return!1}var p=o(n),a=o(t);return e(p,a)}var V,U;"function"==typeof require?(V=require("../level3/core").dom.level3.core,U=exports):(V=this,U={});var M=U.Stream=function(e){this.original=this.str=e,this.peeked=null,this.prev=null,this.prevprev=null};M.prototype={peek:function(){if(this.peeked)return this.peeked;var e=this.re.exec(this.str);return e?(this.str=this.str.substr(e[0].length),this.peeked=e[1]):null},peek2:function(){this.peek();var e=this.re.exec(this.str);return e?e[1]:null},pop:function(){var e=this.peek();return this.peeked=null,this.prevprev=this.prev,this.prev=e,e},trypop:function(e){var n=this.peek();if(n===e)return this.pop();if(Array.isArray(e))for(var t=0;t<e.length;++t){var r=e[t];if(r==n)return this.pop()}},trypopfuncname:function(){var e=this.peek();if(!this.isQnameRe.test(e))return null;switch(e){case"comment":case"text":case"processing-instruction":case"node":return null}return"("!=this.peek2()?null:this.pop()},trypopaxisname:function(){var e=this.peek();switch(e){case"ancestor":case"ancestor-or-self":case"attribute":case"child":case"descendant":case"descendant-or-self":case"following":case"following-sibling":case"namespace":case"parent":case"preceding":case"preceding-sibling":case"self":if("::"==this.peek2())return this.pop()}return null},trypopnametest:function(){var e=this.peek();return"*"===e||this.startsWithNcNameRe.test(e)?this.pop():null},trypopliteral:function(){var e=this.peek();if(null==e)return null;var n=e.charAt(0),t=e.charAt(e.length-1);return'"'===n&&'"'===t||"'"===n&&"'"===t?(this.pop(),e.substr(1,e.length-2)):void 0},trypopnumber:function(){var e=this.peek();return this.isNumberRe.test(e)?parseFloat(this.pop()):null},trypopvarref:function(){var e=this.peek();return null==e?null:"$"===e.charAt(0)?this.pop().substr(1):null},position:function(){return this.original.length-this.str.length}},function(){var e="A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",n=e+"\\-\\.0-9·̀-ͯ‿-⁀",t="["+e+"]["+n+"]*",r=t+"(?::"+t+")?",o="\\.\\.|[\\(\\)\\[\\].@,]|::",s="and|or|mod|div|//|!=|<=|>=|[*/|+\\-=<>]",i="\"[^\"]*\"|'[^']*'",u="[0-9]+(?:\\.[0-9]*)?|\\.[0-9]+",l="\\$"+r,a="\\*|"+t+":\\*|"+r,h="[ \t\r\n]*",p=new RegExp("^"+h+"("+u+"|"+o+"|"+a+"|"+s+"|"+i+"|"+l+")");M.prototype.re=p,M.prototype.startsWithNcNameRe=new RegExp("^"+t),M.prototype.isQnameRe=new RegExp("^"+r+"$"),M.prototype.isNumberRe=new RegExp("^"+u+"$")}();var C=U.parse=function(e,n){for(var t,r=d(e,n),o=[];t=e.pop();)o.push(t);if(o.length)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+e.position()+": Unparsed tokens: "+o.join(" "));return r},H={node:function(){return Array.prototype.slice.call(arguments)}};m.prototype={pushSeries:function(){this.nextPos.push(1),this.seriesIndexes.push(this.nodes.length)},popSeries:function(){console.assert(0<this.nextPos.length,this.nextPos);for(var e=this.nextPos.pop()-1,n=this.nextPos.length,t=this.seriesIndexes.pop(),r=this.nodes.length,o=t;o<r;++o)console.assert(n<this.lasts[o].length),console.assert(void 0===this.lasts[o][n]),this.lasts[o][n]=e},finalize:function(){if(null==this.nextPos)return this;console.assert(0===this.nextPos.length);for(var e=0;e<this.lasts.length;++e)for(var n=0;n<this.lasts[e].length;++n)console.assert(null!=this.lasts[e][n],e+","+n+":"+JSON.stringify(this.lasts));return this.pushSeries=this.popSeries=this.addNode=function(){throw new Error("Already finalized.")},this},addNode:function(e){console.assert(e),this._pushToNodes.call(this.nodes,e),this._pushToNodes.call(this.pos,this.nextPos.slice()),this._pushToNodes.call(this.lasts,new Array(this.nextPos.length));for(var n=0;n<this.nextPos.length;++n)this.nextPos[n]++},simplify:function(){return this.finalize(),{nodes:this.nodes,pos:this.pos,lasts:this.lasts}}},w.prototype={matches:function(e){return(0===this.nodeTypeNum||e.nodeType===this.nodeTypeNum)&&this.nodeNameTest(e.nodeName)},_alwaysTrue:function(e){return!0},_nodeNameEquals:function(e){return this.nodeName===e},_nodeNameLowerCaseEquals:function(e){return this.nodeName===e.toLowerCase()}};var B=U.sortUniqDocumentOrder=function(e){for(var n=[],t=0;t<e.length;t++){var r=e[t],o=Y(r);n.push(o)}n.sort(L);for(var s=[],t=0;t<n.length;t++)0<t&&n[t][0]===n[t-1][0]||s.push(n[t][0]);return s},z=U.axes={ancestor:function(e,n,t,r){return x(e,n,t,r,!1)},"ancestor-or-self":function(e,n,t,r){return x(e,n,t,r,!0)},attribute:function(e,n,t,r){var o=new w(n,t,r),s=new m((!1));if(null!=t)for(var i=0;i<e.length;++i){var u=e[i];if(null!=u.getAttributeNode){var l=u.getAttributeNode(t);null!=l&&o.matches(l)&&(s.pushSeries(),s.addNode(l),s.popSeries())}}else for(var i=0;i<e.length;++i){var u=e[i];if(null!=u.attributes){s.pushSeries();for(var a=0;a<u.attributes.length;a++){var l=u.attributes[a];o.matches(l)&&s.addNode(l)}s.popSeries()}}return s.finalize()},child:function K(e,n,t,r){for(var o=new w(n,t,r),s=new m((!1)),i=0;i<e.length;++i){var u=e[i];if(!u.ownerElement&&u.childNodes){s.pushSeries();for(var l=1===n&&null!=u.children?u.children:u.childNodes,a=0;a<l.length;++a){var K=l[a];o.matches(K)&&s.addNode(K)}s.popSeries()}}return s.finalize(),j(s)},descendant:function(e,n,t,r){return A(e,n,t,r,!1)},"descendant-or-self":function(e,n,t,r){return A(e,n,t,r,!0)},following:function(e,n,t,r){return D(e,n,t,r)},"following-sibling":function(e,n,t,r){return T(e,n,t,r,Array.prototype.shift,function(){return this[0]},function(e){return e.nextSibling})},namespace:function(e,n,t,r){},parent:function ee(e,n,t,r){for(var o=new w(n,t,r),s=[],i=[],u=0;u<e.length;++u){var ee=e[u].parentNode||e[u].ownerElement;null!=ee&&o.matches(ee)&&(s.length>0&&ee===s[s.length-1]||(s.push(ee),i.push([1])))}return{nodes:s,pos:i,lasts:i}},preceding:function(e,n,t,r){return S(e,n,t,r)},"preceding-sibling":function(e,n,t,r){return T(e,n,t,r,Array.prototype.pop,function(){return this[this.length-1]},function(e){return e.previousSibling},!1,!0)},self:function(e,n,t,r){for(var o=[],s=[],i=new w(n,t,r),u=0;u<e.length;++u)i.matches(e[u])&&(o.push(e[u]),s.push([1]));return{nodes:o,pos:s,lasts:s}}},F={number:function(e){return"number"==typeof e?e:"string"==typeof e?parseFloat(e):"boolean"==typeof e?+e:F.number(F.string.call(this,e))},string:function(e){return null==e?F.string(this):"string"==typeof e||"boolean"==typeof e||"number"==typeof e?""+e:0==e.nodes.length?"":null!=e.nodes[0].textContent?e.nodes[0].textContent:e.nodes[0].nodeValue},"boolean":function(e){return"object"==typeof e?e.nodes.length>0:!!e},last:function(){return console.assert(Array.isArray(this.pos)),console.assert(Array.isArray(this.lasts)),console.assert(1===this.pos.length),console.assert(1===this.lasts.length),console.assert(1===this.lasts[0].length),this.lasts[0][0]},position:function(){return console.assert(Array.isArray(this.pos)),console.assert(Array.isArray(this.lasts)),console.assert(1===this.pos.length),console.assert(1===this.lasts.length),console.assert(1===this.pos[0].length),this.pos[0][0]},count:function(e){if("object"!=typeof e)throw new W(W.INVALID_EXPRESSION_ERR,"Position "+stream.position()+": Function count(node-set) got wrong argument type: "+e);return e.nodes.length},id:function ne(e){var n={nodes:[]},t=this.nodes[0].ownerDocument||this.nodes[0];console.assert(t);var r;if("object"==typeof e){r=[];for(var o=0;o<e.nodes.length;++o){var s=e.nodes[o],i=F.string({nodes:[s]}),u=i.split(/[ \t\r\n]+/g);Array.prototype.push.apply(r,u)}}else{var i=F.string(e),u=i.split(/[ \t\r\n]+/g);r=u}for(var o=0;o<r.length;++o){var ne=r[o];if(0!==ne.length){var l=t.getElementById(ne);null!=l&&n.nodes.push(l)}}return n.nodes=B(n.nodes),n},"local-name":function(e){if(null==e)return F.name(this);if(null==e.nodes)throw new W(W.INVALID_EXPRESSION_ERR,"argument to name() must be a node-set. got "+e);return e.nodes[0].nodeName.toLowerCase()},"namespace-uri":function(e){throw new Error("not implemented yet")},name:function(e){if(null==e)return F.name(this);if(null==e.nodes)throw new W(W.INVALID_EXPRESSION_ERR,"argument to name() must be a node-set. got "+e);return e.nodes[0].nodeName.toLowerCase()},concat:function(e){for(var n=[],t=0;t<arguments.length;++t)n.push(F.string(arguments[t]));return n.join("")},"starts-with":function(e,n){var t=F.string(e),r=F.string(n);return t.substr(0,r.length)===r},contains:function(e,n){var t=F.string(e),r=F.string(n),o=t.indexOf(r);return-1!==o},"substring-before":function(e,n){var t=F.string(e),r=F.string(n),o=t.indexOf(r);return-1===o?"":t.substr(0,o)},"substring-after":function(e,n){var t=F.string(e),r=F.string(n),o=t.indexOf(r);return-1===o?"":t.substr(o+r.length)},substring:function(e,n,t){if(null==e||null==n)throw new W(W.INVALID_EXPRESSION_ERR,"Must be at least 2 arguments to string()");var r=F.string(e),o=F.round(n),s=null==t?null:F.round(t);return null==s?r.substr(o-1):r.substr(o-1,s)},"string-length":function(e){return F.string.call(this,e).length},"normalize-space":function(e){var n=F.string.call(this,e);return n.replace(/[ \t\r\n]+/g," ").replace(/^ | $/g,"")},translate:function(e,n,t){for(var r=F.string.call(this,e),o=F.string(n),s=F.string(t),i=[],u={},l=0;l<o.length;++l){var a=o.charAt(l);u[a]=s.charAt(l),i.push(a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"))}var h=new RegExp(i.join("|"),"g");return r.replace(h,function(e){return u[e]})},not:function(e){var n=F["boolean"](e);return!n},"true":function(){return!0},"false":function(){return!1},lang:function(e){throw new Error("Not implemented")},sum:function te(e){if(null==e)return F.sum(this);for(var te=0,n=0;n<e.nodes.length;++n){var t=e.nodes[n],r=F.number({nodes:[t]});te+=r}return te},floor:function(e){return Math.floor(F.number(e))},ceiling:function(e){return Math.ceil(F.number(e))},round:function(e){return Math.round(F.number(e))}},q={UnaryMinus:function(e){return-F.number(e)},"+":function(e,n){return F.number(e)+F.number(n)},"-":function(e,n){return F.number(e)-F.number(n)},"*":function(e,n){return F.number(e)*F.number(n)},div:function(e,n){return F.number(e)/F.number(n)},mod:function(e,n){return F.number(e)%F.number(n)},"<":function(e,n){return k(function(e,n){return F.number(e)<F.number(n)},e,n,!0)},"<=":function(e,n){return k(function(e,n){return F.number(e)<=F.number(n)},e,n,!0)},">":function(e,n){return k(function(e,n){return F.number(e)>F.number(n)},e,n,!0)},">=":function(e,n){return k(function(e,n){return F.number(e)>=F.number(n)},e,n,!0)},and:function(e,n){return F["boolean"](e)&&F["boolean"](n)},or:function(e,n){return F["boolean"](e)||F["boolean"](n)},"|":function(e,n){return{nodes:X(e.nodes,n.nodes)}},"=":function(e,n){if("object"==typeof e&&"object"==typeof n){for(var t={},r=0;r<e.nodes.length;++r){var o=F.string({nodes:[e.nodes[r]]});t[o]=!0}for(var r=0;r<n.nodes.length;++r){var o=F.string({nodes:[n.nodes[r]]});if(t[o])return!0}return!1}return k(function(e,n){return e===n},e,n)},"!=":function(e,n){if("object"==typeof e&&"object"==typeof n){if(0===e.nodes.length||0===n.nodes.length)return!1;for(var t={},r=0;r<e.nodes.length;++r){var o=F.string({nodes:[e.nodes[r]]});t[o]=!0}for(var r=0;r<n.nodes.length;++r){var o=F.string({nodes:[n.nodes[r]]});if(!t[o])return!0}return!1}return k(function(e,n){return e!==n},e,n)}},$=U.nodeTypes={node:0,attribute:2,comment:8,text:3,"processing-instruction":7,element:1},G=(U.stringifyObject=function(e){function n(e){if(Array.isArray(e))return e.map(function(e){return n(e)});if("object"!=typeof e)return e;if(null==e)return e;if(null!=e.outerHTML)return e.outerHTML;if(null!=e.nodeValue)return e.nodeName+"="+e.nodeValue;if(e[t])return"[circular]";e[t]=!0;var r={};for(var o in e)if(t!==o)try{r[o]=n(e[o])}catch(s){r[o]="[exception: "+s.message+"]"}return delete e[t],r}var t="seen"+Math.floor(1e9*Math.random());return JSON.stringify(n(e))},U.Evaluator=function(e){this.doc=e});G.prototype={val:function(e,n){if(console.assert(n.nodes),"number"==typeof e||"string"==typeof e)return e;if(q[e[0]]){for(var t=[],r=1;r<e.length;++r)t.push(this.val(e[r],n));var o=q[e[0]].apply(n,t);return o}switch(e[0]){case"Root":return{nodes:[this.doc]};case"FunctionCall":var s=e[1],i=e[2];if(null==F[s])throw new W(W.INVALID_EXPRESSION_ERR,"Unknown function: "+s);for(var t=[],r=0;r<i.length;++r)t.push(this.val(i[r],n));var o=F[s].apply(n,t);return o;case"Predicate":for(var u=this.val(e[1],n),l={nodes:[]},a=y(u),r=0;r<a.length;++r){var h,p=a[r],f=this.val(e[2],p);if(h="number"==typeof f?f===p.pos[0][0]:F["boolean"](f)){var c=p.nodes[0];for(l.nodes.push(c);r+1<a.length&&c===a[r+1].nodes[0];)r++}}return l;case"PathExpr":var d=this.val(e[1],n);if(d.finalize){for(var r=0;r<d.nodes.length;++r)console.assert(null!=d.nodes[r].nodeType);return{nodes:d.nodes}}return d;case"/":var u=this.val(e[1],n);console.assert(null!=u);var o=this.val(e[2],u);return console.assert(null!=o),o;case"Axis":var E=e[1],v=e[2],R=$[v],_=!0,g=e[3]&&_?e[3].toLowerCase():e[3];if(g="*"===g?null:g,"object"!=typeof n)return{nodes:[],pos:[]};var N=n.nodes.slice(),o=z[E](N,R,g,_);return o}}};var W=(U.evaluate=function(e,n,t){var r=new M(e),o=C(r,H),s=new G(n).val(o,{nodes:[t]});return s},U.XPathException=function(e,n){var t=new Error(n);this.__proto__=t,this.name="XPathException",this.code=e});W.prototype=Object.create(Error.prototype),W.prototype.__proto__=W,W.INVALID_EXPRESSION_ERR=51,W.TYPE_ERR=52;var J=U.XPathEvaluator=function(){};J.prototype={createExpression:function(e,n){return new Q(e,n)},createNSResolver:function(e){},evaluate:function(e,n,t,r,o){var s=new Q(e,t);return s.evaluate(n,r,o)}};var Q=U.XPathExpression=function(e,n,t){var r=new M(e);this._ast=C(r,H),this._doc=t};Q.prototype={evaluate:function(e,n,t){if(null==e.nodeType)throw new Error("bad argument (expected context node): "+e);var r=e.ownerDocument||e;if(null!=this._doc&&this._doc!==r)throw new V.DOMException(V.WRONG_DOCUMENT_ERR,"The document must be the same as the context node's document.");var o=new G(r),s=o.val(this._ast,{nodes:[e]});if(Z.NUMBER_TYPE===n)s=F.number(s);else if(Z.STRING_TYPE===n)s=F.string(s);else if(Z.BOOLEAN_TYPE===n)s=F["boolean"](s);else{if(Z.ANY_TYPE!==n&&Z.UNORDERED_NODE_ITERATOR_TYPE!==n&&Z.ORDERED_NODE_ITERATOR_TYPE!==n&&Z.UNORDERED_NODE_SNAPSHOT_TYPE!==n&&Z.ORDERED_NODE_SNAPSHOT_TYPE!==n&&Z.ANY_UNORDERED_NODE_TYPE!==n&&Z.FIRST_ORDERED_NODE_TYPE!==n)throw new V.DOMException(V.NOT_SUPPORTED_ERR,"You must provide an XPath result type (0=any).");if(Z.ANY_TYPE!==n&&"object"!=typeof s)throw new W(W.TYPE_ERR,"Value should be a node-set: "+s)}return new Z(r,s,n)}};var Z=U.XPathResult=function re(e,n,t){function r(){o._invalidated=!0,e.removeEventListener("DOMSubtreeModified",r,!0)}if(this._value=n,this._resultType=t,this._i=0,this._invalidated=!1,this.resultType===re.UNORDERED_NODE_ITERATOR_TYPE||this.resultType===re.ORDERED_NODE_ITERATOR_TYPE){e.addEventListener("DOMSubtreeModified",r,!0);var o=this}};Z.ANY_TYPE=0,Z.NUMBER_TYPE=1,Z.STRING_TYPE=2,Z.BOOLEAN_TYPE=3,Z.UNORDERED_NODE_ITERATOR_TYPE=4,Z.ORDERED_NODE_ITERATOR_TYPE=5,Z.UNORDERED_NODE_SNAPSHOT_TYPE=6,Z.ORDERED_NODE_SNAPSHOT_TYPE=7,Z.ANY_UNORDERED_NODE_TYPE=8,Z.FIRST_ORDERED_NODE_TYPE=9,Z.prototype={get resultType(){if(this._resultType)return this._resultType;switch(typeof this._value){case"number":return Z.NUMBER_TYPE;case"string":return Z.STRING_TYPE;case"boolean":return Z.BOOLEAN_TYPE;default:return Z.UNORDERED_NODE_ITERATOR_TYPE}},get numberValue(){if(Z.NUMBER_TYPE!==this.resultType)throw new W(W.TYPE_ERR,"You should have asked for a NUMBER_TYPE.");return this._value},get stringValue(){if(Z.STRING_TYPE!==this.resultType)throw new W(W.TYPE_ERR,"You should have asked for a STRING_TYPE.");return this._value},get booleanValue(){if(Z.BOOLEAN_TYPE!==this.resultType)throw new W(W.TYPE_ERR,"You should have asked for a BOOLEAN_TYPE.");return this._value},get singleNodeValue(){if(Z.ANY_UNORDERED_NODE_TYPE!==this.resultType&&Z.FIRST_ORDERED_NODE_TYPE!==this.resultType)throw new W(W.TYPE_ERR,"You should have asked for a FIRST_ORDERED_NODE_TYPE.");return this._value.nodes[0]||null},get invalidIteratorState(){return(Z.UNORDERED_NODE_ITERATOR_TYPE===this.resultType||Z.ORDERED_NODE_ITERATOR_TYPE===this.resultType)&&!!this._invalidated},get snapshotLength(){if(Z.UNORDERED_NODE_SNAPSHOT_TYPE!==this.resultType&&Z.ORDERED_NODE_SNAPSHOT_TYPE!==this.resultType)throw new W(W.TYPE_ERR,"You should have asked for a ORDERED_NODE_SNAPSHOT_TYPE.");return this._value.nodes.length},iterateNext:function(){if(Z.UNORDERED_NODE_ITERATOR_TYPE!==this.resultType&&Z.ORDERED_NODE_ITERATOR_TYPE!==this.resultType)throw new W(W.TYPE_ERR,"You should have asked for a ORDERED_NODE_ITERATOR_TYPE.");if(this.invalidIteratorState)throw new V.DOMException(V.INVALID_STATE_ERR,"The document has been mutated since the result was returned");return this._value.nodes[this._i++]||null},snapshotItem:function(e){if(Z.UNORDERED_NODE_SNAPSHOT_TYPE!==this.resultType&&Z.ORDERED_NODE_SNAPSHOT_TYPE!==this.resultType)throw new W(W.TYPE_ERR,"You should have asked for a ORDERED_NODE_SNAPSHOT_TYPE.");return this._value.nodes[e]||null}},Z.prototype.__proto__=Z,V.XPathException=W,V.XPathExpression=Q,V.XPathResult=Z,V.XPathEvaluator=J,V.Document.prototype.createExpression=J.prototype.createExpression,V.Document.prototype.createNSResolver=J.prototype.createNSResolver,V.Document.prototype.evaluate=J.prototype.evaluate}();