function isArguments(e){var t=isObjectLike(e)?e.length:void 0;return isLength(t)&&objToString.call(e)==argsTag}var isLength=require("../internal/isLength"),isObjectLike=require("../internal/isObjectLike"),argsTag="[object Arguments]",objectProto=Object.prototype,objToString=objectProto.toString;module.exports=isArguments;