function createFlow(r){return function(){var e=arguments.length;if(!e)return function(){return arguments[0]};for(var a,t=r?e:-1,n=0,i=Array(e);r?t--:++t<e;){var u=i[n++]=arguments[t];if("function"!=typeof u)throw new TypeError(FUNC_ERROR_TEXT);var l=a?"":getFuncName(u);a="wrapper"==l?new LodashWrapper([]):a}for(t=a?-1:e;++t<e;){u=i[t],l=getFuncName(u);var o="wrapper"==l?getData(u):null;a=o&&isLaziable(o[0])?a[getFuncName(o[0])].apply(a,o[3]):1==u.length&&isLaziable(u)?a[l]():a.thru(u)}return function(){var r=arguments;if(a&&1==r.length&&isArray(r[0]))return a.plant(r[0]).value();for(var t=0,n=i[t].apply(this,r);++t<e;)n=i[t].call(this,n);return n}}}var LodashWrapper=require("./LodashWrapper"),getData=require("./getData"),getFuncName=require("./getFuncName"),isArray=require("../lang/isArray"),isLaziable=require("./isLaziable"),FUNC_ERROR_TEXT="Expected a function";module.exports=createFlow;