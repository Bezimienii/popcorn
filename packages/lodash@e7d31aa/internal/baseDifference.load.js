montageDefine("e7d31aa","internal/baseDifference",{dependencies:["./baseIndexOf","./cacheIndexOf","./createCache"],factory:function(e,n,a){function r(e,n){var a=e?e.length:0,r=[];if(!a)return r;var i=-1,h=f,o=!0,s=o&&n.length>=200?t(n):null,u=n.length;s&&(h=c,o=!1,n=s);e:for(;++i<a;){var d=e[i];if(o&&d===d){for(var l=u;l--;)if(n[l]===d)continue e;r.push(d)}else h(n,d,0)<0&&r.push(d)}return r}var f=e("./baseIndexOf"),c=e("./cacheIndexOf"),t=e("./createCache");a.exports=r}});