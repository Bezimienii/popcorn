function range(e,a,l){l&&isIterateeCall(e,a,l)&&(a=l=null),e=+e||0,l=null==l?1:+l||0,null==a?(a=e,e=0):a=+a||0;for(var r=-1,t=nativeMax(ceil((a-e)/(l||1)),0),n=Array(t);++r<t;)n[r]=e,e+=l;return n}var isIterateeCall=require("../internal/isIterateeCall"),ceil=Math.ceil,nativeMax=Math.max;module.exports=range;