function isNative(t){return null!=t&&(objToString.call(t)==funcTag?reIsNative.test(fnToString.call(t)):isObjectLike(t)&&reIsHostCtor.test(t))}var escapeRegExp=require("../string/escapeRegExp"),isObjectLike=require("../internal/isObjectLike"),funcTag="[object Function]",reIsHostCtor=/^\[object .+?Constructor\]$/,objectProto=Object.prototype,fnToString=Function.prototype.toString,objToString=objectProto.toString,reIsNative=RegExp("^"+escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");module.exports=isNative;