function drop(e,r,l){var a=e?e.length:0;return a?((l?isIterateeCall(e,r,l):null==r)&&(r=1),baseSlice(e,r<0?0:r)):[]}var baseSlice=require("../internal/baseSlice"),isIterateeCall=require("../internal/isIterateeCall");module.exports=drop;