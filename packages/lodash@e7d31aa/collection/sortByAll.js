var baseFlatten=require("../internal/baseFlatten"),baseSortByOrder=require("../internal/baseSortByOrder"),isIterateeCall=require("../internal/isIterateeCall"),restParam=require("../function/restParam"),sortByAll=restParam(function(e,r){if(null==e)return[];var t=r[2];return t&&isIterateeCall(r[0],r[1],t)&&(r.length=1),baseSortByOrder(e,baseFlatten(r),[])});module.exports=sortByAll;