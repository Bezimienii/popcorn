montageDefine("e7d31aa","function/throttle",{dependencies:["./debounce","../lang/isObject"],factory:function(n,e,i){function t(n,e,i){var t=!0,g=!0;if("function"!=typeof n)throw new TypeError(o);return i===!1?t=!1:r(i)&&(t="leading"in i?!!i.leading:t,g="trailing"in i?!!i.trailing:g),c.leading=t,c.maxWait=+e,c.trailing=g,a(n,e,c)}var a=n("./debounce"),r=n("../lang/isObject"),o="Expected a function",c={leading:!1,maxWait:0,trailing:!1};i.exports=t}});