function flattenDeep(e){var t=e?e.length:0;return t?baseFlatten(e,!0):[]}var baseFlatten=require("../internal/baseFlatten");module.exports=flattenDeep;