montageDefine("e7d31aa","collection/invoke",{dependencies:["../internal/baseEach","../internal/getLength","../internal/invokePath","../internal/isKey","../internal/isLength","../function/restParam"],factory:function(n,e,t){var a=n("../internal/baseEach"),i=n("../internal/getLength"),r=n("../internal/invokePath"),l=n("../internal/isKey"),o=n("../internal/isLength"),c=n("../function/restParam"),s=c(function(n,e,t){var c=-1,s="function"==typeof e,f=l(e),h=i(n),u=o(h)?Array(h):[];return a(n,function(n){var a=s?e:f&&null!=n&&n[e];u[++c]=a?a.apply(n,t):r(n,e,t)}),u});t.exports=s}});