var isObject=require("../lang/isObject"),baseCreate=function(){function e(){}return function(t){if(isObject(t)){e.prototype=t;var r=new e;e.prototype=null}return r||global.Object()}}();module.exports=baseCreate;