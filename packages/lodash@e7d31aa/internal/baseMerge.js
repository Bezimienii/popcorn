function baseMerge(e,r,i,a,s){if(!isObject(e))return e;var t=isLength(r.length)&&(isArray(r)||isTypedArray(r));if(!t){var y=keys(r);push.apply(y,getSymbols(r))}return arrayEach(y||r,function(o,u){if(y&&(u=o,o=r[u]),isObjectLike(o))a||(a=[]),s||(s=[]),baseMergeDeep(e,r,u,baseMerge,i,a,s);else{var b=e[u],g=i?i(b,o,u,e,r):void 0,p=void 0===g;p&&(g=o),!t&&void 0===g||!p&&(g===g?g===b:b!==b)||(e[u]=g)}}),e}var arrayEach=require("./arrayEach"),baseMergeDeep=require("./baseMergeDeep"),getSymbols=require("./getSymbols"),isArray=require("../lang/isArray"),isLength=require("./isLength"),isObject=require("../lang/isObject"),isObjectLike=require("./isObjectLike"),isTypedArray=require("../lang/isTypedArray"),keys=require("../object/keys"),arrayProto=Array.prototype,push=arrayProto.push;module.exports=baseMerge;