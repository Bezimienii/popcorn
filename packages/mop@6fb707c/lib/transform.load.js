montageDefine("6fb707c","lib/transform",{dependencies:["bluebird","./transform/html","./transform/css","./transform/json","./transform/json","./transform/javascript"],factory:function(n,t,s){"use strict";function o(n,t){var s=function(){t.out.status.apply(t.out,["Processed"].concat(Array.prototype.slice.call(arguments)))};return new e(function(n){var o,e,f=Object.keys(t.files);for(a+=f.length,e=0;e<f.length;e++)o=t.files[f[e]],r(o,t,function(t){return function(){s(t.path),a--,a||n()}}(o))}).then(function(){t.out.status()})}function r(n,t,s){var r=t.fs.extension(n.location);o.extensions[r]?o.extensions[r](n,t,s):s&&s()}var e=n("bluebird"),a=0;s.exports=o,o.extensions={".html":n("./transform/html"),".css":n("./transform/css"),".json":n("./transform/json"),".mjson":n("./transform/json"),".js":n("./transform/javascript")}}});