function isElement(e){return!!e&&1===e.nodeType&&isObjectLike(e)&&objToString.call(e).indexOf("Element")>-1}var isObjectLike=require("../internal/isObjectLike"),isPlainObject=require("./isPlainObject"),support=require("../support"),objectProto=Object.prototype,objToString=objectProto.toString;support.dom||(isElement=function(e){return!!e&&1===e.nodeType&&isObjectLike(e)&&!isPlainObject(e)}),module.exports=isElement;