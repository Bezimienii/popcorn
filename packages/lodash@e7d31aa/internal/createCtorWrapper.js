function createCtorWrapper(e){return function(){var r=baseCreate(e.prototype),t=e.apply(r,arguments);return isObject(t)?t:r}}var baseCreate=require("./baseCreate"),isObject=require("../lang/isObject");module.exports=createCtorWrapper;