function createCompounder(r){return function(e){for(var o=-1,u=words(deburr(e)),n=u.length,t="";++o<n;)t=r(t,u[o],o);return t}}var deburr=require("../string/deburr"),words=require("../string/words");module.exports=createCompounder;