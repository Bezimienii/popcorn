montageDefine("e7d31aa","internal/mergeData",{dependencies:["./arrayCopy","./composeArgs","./composeArgsRight","./replaceHolders"],factory:function(e,r,a){function o(e,r){var a=e[1],o=r[1],h=a|o,u=h<g,y=o==g&&a==i||o==g&&a==d&&e[7].length<=r[8]||o==(g|d)&&a==i;if(!u&&!y)return e;o&c&&(e[2]=r[2],h|=a&c?0:p);var _=r[3];if(_){var v=e[3];e[3]=v?l(v,_,r[4]):n(_),e[4]=v?t(e[3],m):n(r[4])}return _=r[5],_&&(v=e[5],e[5]=v?s(v,_,r[6]):n(_),e[6]=v?t(e[5],m):n(r[6])),_=r[7],_&&(e[7]=n(_)),o&g&&(e[8]=null==e[8]?r[8]:f(e[8],r[8])),null==e[9]&&(e[9]=r[9]),e[0]=r[0],e[1]=h,e}var n=e("./arrayCopy"),l=e("./composeArgs"),s=e("./composeArgsRight"),t=e("./replaceHolders"),c=1,p=4,i=8,g=128,d=256,m="__lodash_placeholder__",f=Math.min;a.exports=o}});