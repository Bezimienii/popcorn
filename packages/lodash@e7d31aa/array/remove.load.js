montageDefine("e7d31aa","array/remove",{dependencies:["../internal/baseCallback","../internal/basePullAt"],factory:function(e,a,n){function r(e,a,n){var r=[];if(!e||!e.length)return r;var i=-1,s=[],u=e.length;for(a=t(a,n,3);++i<u;){var o=e[i];a(o,i,e)&&(r.push(o),s.push(i))}return l(e,s),r}var t=e("../internal/baseCallback"),l=e("../internal/basePullAt");n.exports=r}});