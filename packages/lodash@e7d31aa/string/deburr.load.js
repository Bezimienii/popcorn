montageDefine("e7d31aa","string/deburr",{dependencies:["../internal/baseToString","../internal/deburrLetter"],factory:function(e,r,n){function t(e){return e=a(e),e&&e.replace(d,f).replace(i,"")}var a=e("../internal/baseToString"),f=e("../internal/deburrLetter"),i=/[\u0300-\u036f\ufe20-\ufe23]/g,d=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;n.exports=t}});