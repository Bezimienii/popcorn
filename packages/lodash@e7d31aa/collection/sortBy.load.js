montageDefine("e7d31aa","collection/sortBy",{dependencies:["../internal/baseCallback","../internal/baseMap","../internal/baseSortBy","../internal/compareAscending","../internal/isIterateeCall"],factory:function(e,n,a){function r(e,n,a){if(null==e)return[];a&&o(e,n,a)&&(n=null);var r=-1;n=t(n,a,3);var s=l(e,function(e,a,t){return{criteria:n(e,a,t),index:++r,value:e}});return i(s,c)}var t=e("../internal/baseCallback"),l=e("../internal/baseMap"),i=e("../internal/baseSortBy"),c=e("../internal/compareAscending"),o=e("../internal/isIterateeCall");a.exports=r}});