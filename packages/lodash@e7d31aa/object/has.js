function has(e,r){if(null==e)return!1;var t=hasOwnProperty.call(e,r);return t||isKey(r)||(r=toPath(r),e=1==r.length?e:baseGet(e,baseSlice(r,0,-1)),r=last(r),t=null!=e&&hasOwnProperty.call(e,r)),t}var baseGet=require("../internal/baseGet"),baseSlice=require("../internal/baseSlice"),isKey=require("../internal/isKey"),last=require("../array/last"),toPath=require("../internal/toPath"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=has;