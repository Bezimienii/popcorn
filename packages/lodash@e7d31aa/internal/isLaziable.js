function isLaziable(e){var a=getFuncName(e);return!!a&&e===lodash[a]&&a in LazyWrapper.prototype}var LazyWrapper=require("./LazyWrapper"),getFuncName=require("./getFuncName"),lodash=require("../chain/lodash");module.exports=isLaziable;