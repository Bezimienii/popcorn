montageDefine("e7d31aa","number/random",{dependencies:["../internal/baseRandom","../internal/isIterateeCall"],factory:function(e,n,a){function t(e,n,a){a&&r(e,n,a)&&(n=a=null);var t=null==e,u=null==n;if(null==a&&(u&&"boolean"==typeof e?(a=e,e=1):"boolean"==typeof n&&(a=n,u=!0)),t&&u&&(n=1,u=!1),e=+e||0,u?(n=e,e=0):n=+n||0,a||e%1||n%1){var d=i();return o(e+d*(n-e+parseFloat("1e-"+((d+"").length-1))),n)}return l(e,n)}var l=e("../internal/baseRandom"),r=e("../internal/isIterateeCall"),o=Math.min,i=Math.random;a.exports=t}});