montageDefine("e7d31aa","lang/isFunction",{dependencies:["../internal/baseIsFunction","./isNative"],factory:function(n,t,e){var i=n("../internal/baseIsFunction"),a=n("./isNative"),o="[object Function]",c=Object.prototype,r=c.toString,s=a(s=global.Uint8Array)&&s,l=i(/x/)||s&&!i(s)?function(n){return r.call(n)==o}:i;e.exports=l}});