function createPadding(e,i,t){var r=e.length;if(i=+i,r>=i||!nativeIsFinite(i))return"";var n=i-r;return t=null==t?" ":t+"",repeat(t,ceil(n/t.length)).slice(0,n)}var repeat=require("../string/repeat"),ceil=Math.ceil,nativeIsFinite=global.isFinite;module.exports=createPadding;