function isStrictComparable(e){return e===e&&(0===e?1/e>0:!isObject(e))}var isObject=require("../lang/isObject");module.exports=isStrictComparable;