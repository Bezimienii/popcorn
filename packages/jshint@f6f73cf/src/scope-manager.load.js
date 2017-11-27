montageDefine("f6f73cf","src/scope-manager",{dependencies:["lodash","events"],factory:function(e,n,t){"use strict";var a=e("lodash"),o=e("events"),s={},i=function(e,n,t,i){function r(e){h={"(labels)":Object.create(null),"(usages)":Object.create(null),"(breakLabels)":Object.create(null),"(parent)":h,"(type)":e,"(params)":"functionparams"===e||"catchparams"===e?[]:null},m.push(h)}function l(e,n){O.emit("warning",{code:e,token:n,data:a.slice(arguments,2)})}function u(e,n){O.emit("warning",{code:e,token:n,data:a.slice(arguments,2)})}function f(e){h["(usages)"][e]||(h["(usages)"][e]={"(modified)":[],"(reassigned)":[],"(tokens)":[]})}function c(){if("functionparams"===h["(type)"])return void d();var e=h["(labels)"];for(var n in e)e[n]&&"exception"!==e[n]["(type)"]&&e[n]["(unused)"]&&E(n,e[n]["(token)"],"var")}function d(){var n=h["(params)"];if(n)for(var t,a=n.pop();a;){var o=h["(labels)"][a];if(t=x(e.funct["(unusedOption)"]),"undefined"===a)return;if(o["(unused)"])E(a,o["(token)"],"param",e.funct["(unusedOption)"]);else if("last-param"===t)return;a=n.pop()}}function p(e){for(var n=m.length-1;n>=0;--n){var t=m[n]["(labels)"];if(t[e])return t}}function b(e){for(var n=m.length-1;n>=0;n--){var t=m[n];if(t["(usages)"][e])return t["(usages)"][e];if(t===y)break}return!1}function g(n,t){if("outer"===e.option.shadow)for(var a="global"===y["(type)"],o="functionparams"===h["(type)"],s=!a,i=0;i<m.length;i++){var r=m[i];o||m[i+1]!==y||(s=!1),s&&r["(labels)"][n]&&l("W123",t,n),r["(breakLabels)"][n]&&l("W123",t,n)}}function v(n,t,a){e.option.latedef&&(e.option.latedef===!0&&"function"===n||"function"!==n)&&l("W003",a,t)}var h,m=[];r("global"),h["(predefined)"]=n;var y=h,k=Object.create(null),_=Object.create(null),W=[],O=new o.EventEmitter,x=function(n){return void 0===n&&(n=e.option.unused),n===!0&&(n="last-param"),n},E=function(e,n,t,a){var o=n.line,s=n.from,i=n.raw_text||e;a=x(a);var r={vars:["var"],"last-param":["var","param"],strict:["var","param","last-param"]};a&&r[a]&&r[a].indexOf(t)!==-1&&l("W098",{line:o,from:s},i),(a||"var"===t)&&W.push({name:e,line:o,character:s})},B={on:function(e,n){e.split(" ").forEach(function(e){O.on(e,n)})},isPredefined:function(e){return!this.has(e)&&a.has(m[0]["(predefined)"],e)},stack:function(e){var n=h;r(e),e||"functionparams"!==n["(type)"]||(h["(isFuncBody)"]=!0,h["(context)"]=y,y=h)},unstack:function(){var n,t,o=m.length>1?m[m.length-2]:null,r=h===y,f="functionparams"===h["(type)"],d="functionouter"===h["(type)"],p=h["(usages)"],b=h["(labels)"],g=Object.keys(p);for(p.__proto__&&g.indexOf("__proto__")===-1&&g.push("__proto__"),n=0;n<g.length;n++){var v=g[n],W=p[v],O=b[v];if(O){var x=O["(type)"],B="const"===x||"import"===x;if(O["(useOutsideOfScope)"]&&!e.option.funcscope){var U=W["(tokens)"];if(U)for(t=0;t<U.length;t++)O["(function)"]===U[t]["(function)"]&&u("W038",U[t],v)}if(h["(labels)"][v]["(unused)"]=!1,B&&W["(modified)"])for(t=0;t<W["(modified)"].length;t++)u("E013",W["(modified)"][t],v);if(("function"===x||"class"===x)&&W["(reassigned)"])for(t=0;t<W["(reassigned)"].length;t++)W["(reassigned)"][t].ignoreW021||l("W021",W["(reassigned)"][t],v,x)}else if(d&&(e.funct["(isCapturing)"]=!0),o)if(o["(usages)"][v]){var j=o["(usages)"][v];j["(modified)"]=j["(modified)"].concat(W["(modified)"]),j["(tokens)"]=j["(tokens)"].concat(W["(tokens)"]),j["(reassigned)"]=j["(reassigned)"].concat(W["(reassigned)"])}else o["(usages)"][v]=W,r&&(o["(usages)"][v]["(onlyUsedSubFunction)"]=!0);else if("boolean"==typeof h["(predefined)"][v]){if(delete i[v],k[v]=s,h["(predefined)"][v]===!1&&W["(reassigned)"])for(t=0;t<W["(reassigned)"].length;t++)W["(reassigned)"][t].ignoreW020||l("W020",W["(reassigned)"][t])}else if(W["(tokens)"])for(t=0;t<W["(tokens)"].length;t++){var w=W["(tokens)"][t];w.forgiveUndef||(e.option.undef&&!w.ignoreUndef&&l("W117",w,v),_[v]?_[v].line.push(w.line):_[v]={name:v,line:[w.line]})}}if(o||Object.keys(i).forEach(function(e){E(e,i[e],"var")}),o&&!r&&!f&&!d){var L=Object.keys(b);for(n=0;n<L.length;n++){var S=L[n],F=b[S];if(!F["(blockscoped)"]&&"exception"!==F["(type)"]){var z=o["(labels)"][S];z?z["(unused)"]&=F["(unused)"]:(F["(useOutsideOfScope)"]="global"!==y["(type)"]&&!this.funct.has(S,{excludeCurrent:!0}),o["(labels)"][S]=F),delete b[S]}}}c(),m.pop(),r&&(y=m[a.findLastIndex(m,function(e){return e["(isFuncBody)"]||"global"===e["(type)"]})]),h=o},addParam:function(n,t,o){if(o=o||"param","exception"===o){var s=this.funct.labeltype(n);s&&"exception"!==s&&(e.option.node||l("W002",e.tokens.next,n))}if(a.has(h["(labels)"],n)?h["(labels)"][n].duplicated=!0:(g(n,t,o),h["(labels)"][n]={"(type)":o,"(token)":t,"(unused)":!0},h["(params)"].push(n)),a.has(h["(usages)"],n)){var i=h["(usages)"][n];i["(onlyUsedSubFunction)"]?v(o,n,t):l("E056",t,n,o)}},validateParams:function(){if("global"!==y["(type)"]){var n=e.isStrict(),t=y["(parent)"];t["(params)"]&&t["(params)"].forEach(function(a){var o=t["(labels)"][a];o&&o.duplicated&&(n?l("E011",o["(token)"],a):e.option.shadow!==!0&&l("W004",o["(token)"],a))})}},getUsedOrDefinedGlobals:function(){var e=Object.keys(k);return k.__proto__===s&&e.indexOf("__proto__")===-1&&e.push("__proto__"),e},getImpliedGlobals:function(){var e=a.values(_),n=!1;return _.__proto__&&(n=e.some(function(e){return"__proto__"===e.name}),n||e.push(_.__proto__)),e},getUnuseds:function(){return W},has:function(e){return Boolean(p(e))},labeltype:function(e){var n=p(e);return n?n[e]["(type)"]:null},addExported:function(e){var n=m[0]["(labels)"];if(a.has(i,e))delete i[e];else if(a.has(n,e))n[e]["(unused)"]=!1;else{for(var o=1;o<m.length;o++){var s=m[o];if(s["(type)"])break;if(a.has(s["(labels)"],e)&&!s["(labels)"][e]["(blockscoped)"])return void(s["(labels)"][e]["(unused)"]=!1)}t[e]=!0}},setExported:function(e,n){this.block.use(e,n)},initialize:function(e){h["(labels)"][e]&&(h["(labels)"][e]["(initialized)"]=!0)},addlabel:function(n,o){var i=o.type,r=o.token,u="let"===i||"const"===i||"class"===i||"import"===i,f="function"===i||"import"===i,c="global"===(u?h:y)["(type)"]&&a.has(t,n);if(g(n,r,i),u){var d=h["(labels)"][n];if(d||h!==y||"global"===h["(type)"]||(d=!!y["(parent)"]["(labels)"][n]),!d&&h["(usages)"][n]){var p=h["(usages)"][n];p["(onlyUsedSubFunction)"]||f?v(i,n,r):f||l("E056",r,n,i)}d?l("E011",r,n):"outer"===e.option.shadow&&B.funct.has(n)&&l("W004",r,n),B.block.add(n,i,r,!c,o.initialized)}else{var m=B.funct.has(n);!m&&b(n)&&v(i,n,r),B.funct.has(n,{onlyBlockscoped:!0})?l("E011",r,n):e.option.shadow!==!0&&m&&"__proto__"!==n&&"global"!==y["(type)"]&&l("W004",r,n),B.funct.add(n,i,r,!c),"global"!==y["(type)"]||e.impliedClosure()||(k[n]=s)}},funct:{labeltype:function(e,n){for(var t=n&&n.onlyBlockscoped,a=n&&n.excludeParams,o=m.length-(n&&n.excludeCurrent?2:1),s=o;s>=0;s--){var i=m[s];if(i["(labels)"][e]&&(!t||i["(labels)"][e]["(blockscoped)"]))return i["(labels)"][e]["(type)"];var r=a?m[s-1]:i;if(r&&"functionparams"===r["(type)"])return null}return null},hasBreakLabel:function(e){for(var n=m.length-1;n>=0;n--){var t=m[n];if(t["(breakLabels)"][e])return!0;if("functionparams"===t["(type)"])return!1}return!1},has:function(e,n){return Boolean(this.labeltype(e,n))},add:function(e,n,t,a){h["(labels)"][e]={"(type)":n,"(token)":t,"(blockscoped)":!1,"(function)":y,"(unused)":a}}},block:{isGlobal:function(){return"global"===h["(type)"]},use:function(n,t){var a=y["(parent)"];a&&a["(labels)"][n]&&"param"===a["(labels)"][n]["(type)"]&&(B.funct.has(n,{excludeParams:!0,onlyBlockscoped:!0})||(a["(labels)"][n]["(unused)"]=!1)),t&&(e.ignored.W117||e.option.undef===!1)&&(t.ignoreUndef=!0),f(n),h["(usages)"][n]["(onlyUsedSubFunction)"]=!1,t&&(t["(function)"]=y,h["(usages)"][n]["(tokens)"].push(t));var o=h["(labels)"][n];o&&o["(blockscoped)"]&&!o["(initialized)"]&&u("E056",t,n,o["(type)"])},reassign:function(n,t){t.ignoreW020=e.ignored.W020,t.ignoreW021=e.ignored.W021,this.modify(n,t),h["(usages)"][n]["(reassigned)"].push(t)},modify:function(e,n){f(e),h["(usages)"][e]["(onlyUsedSubFunction)"]=!1,h["(usages)"][e]["(modified)"].push(n)},add:function(e,n,t,a,o){h["(labels)"][e]={"(type)":n,"(token)":t,"(initialized)":!!o,"(blockscoped)":!0,"(unused)":a}},addBreakLabel:function(n,t){var a=t.token;B.funct.hasBreakLabel(n)?l("E011",a,n):"outer"===e.option.shadow&&(B.funct.has(n)?l("W004",a,n):g(n,a)),h["(breakLabels)"][n]=a}}};return B};t.exports=i}});