function pickByArray(r,t){r=toObject(r);for(var e=-1,o=t.length,c={};++e<o;){var a=t[e];a in r&&(c[a]=r[a])}return c}var toObject=require("./toObject");module.exports=pickByArray;