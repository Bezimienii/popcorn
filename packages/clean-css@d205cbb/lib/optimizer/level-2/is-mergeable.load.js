montageDefine("d205cbb","lib/optimizer/level-2/is-mergeable",{dependencies:["../../tokenizer/marker","../../utils/split"],factory:function(n,e,t){function O(n,e,t,O){var f,E,s,o=l(n,_.COMMA);for(E=0,s=o.length;E<s;E++)if(f=o[E],0===f.length||r(f)||f.indexOf(_.COLON)>-1&&!u(f,i(f),e,t,O))return!1;return!0}function r(n){return N.test(n)}function i(n){var e,t,O,r,i,u,f=[],E=[],s=C.ROOT,o=0,h=!1,l=!1;for(i=0,u=n.length;i<u;i++)e=n[i],r=!O&&p.test(e),t=s==C.DOUBLE_QUOTE||s==C.SINGLE_QUOTE,O?E.push(e):e==_.DOUBLE_QUOTE&&s==C.ROOT?(E.push(e),s=C.DOUBLE_QUOTE):e==_.DOUBLE_QUOTE&&s==C.DOUBLE_QUOTE?(E.push(e),s=C.ROOT):e==_.SINGLE_QUOTE&&s==C.ROOT?(E.push(e),s=C.SINGLE_QUOTE):e==_.SINGLE_QUOTE&&s==C.SINGLE_QUOTE?(E.push(e),s=C.ROOT):t?E.push(e):e==_.OPEN_ROUND_BRACKET?(E.push(e),o++):e==_.CLOSE_ROUND_BRACKET&&1==o&&h?(E.push(e),f.push(E.join("")),o--,E=[],h=!1):e==_.CLOSE_ROUND_BRACKET?(E.push(e),o--):e==_.COLON&&0===o&&h&&!l?(f.push(E.join("")),E=[],E.push(e)):e!=_.COLON||0!==o||l?e==_.SPACE&&0===o&&h?(f.push(E.join("")),E=[],h=!1):r&&0===o&&h?(f.push(E.join("")),E=[],h=!1):E.push(e):(E=[],E.push(e),h=!0),O=e==_.BACK_SLASH,l=e==_.COLON;return E.length>0&&h&&f.push(E.join("")),f}function u(n,e,t,O,r){return f(e,t,O)&&E(e)&&(e.length<2||!s(n,e))&&(e.length<2||r&&o(e))}function f(n,e,t){var O,r,i,u;for(i=0,u=n.length;i<u;i++)if(O=n[i],r=O.indexOf(_.OPEN_ROUND_BRACKET)>-1?O.substring(0,O.indexOf(_.OPEN_ROUND_BRACKET)):O,e.indexOf(r)===-1&&t.indexOf(r)===-1)return!1;return!0}function E(n){var e,t,O,r,i,u;for(i=0,u=n.length;i<u;i++){if(e=n[i],O=e.indexOf(_.OPEN_ROUND_BRACKET),r=O>-1,t=r?e.substring(0,O):e,r&&R.indexOf(t)==-1)return!1;if(!r&&R.indexOf(t)>-1)return!1}return!0}function s(n,e){var t,O,r,i,u,f,E,s,o,h=0;for(s=0,o=e.length;s<o&&(t=e[s],r=e[s+1],r);s++)if(O=n.indexOf(t,h),i=n.indexOf(t,O+1),h=i,E=O+t.length==i,E&&(u=t.indexOf(_.OPEN_ROUND_BRACKET)>-1?t.substring(0,t.indexOf(_.OPEN_ROUND_BRACKET)):t,f=r.indexOf(_.OPEN_ROUND_BRACKET)>-1?r.substring(0,r.indexOf(_.OPEN_ROUND_BRACKET)):r,u!=U||f!=U))return!0;return!1}function o(n){var e,t,O,r=0;for(t=0,O=n.length;t<O;t++)if(e=n[t],r+=h(e)?g.indexOf(e)>-1?1:0:d.indexOf(e)>-1?1:0,r>1)return!1;return!0}function h(n){return T.test(n)}var _=n("../../tokenizer/marker"),l=n("../../utils/split"),N=/\/deep\//,T=/^::/,U=":not",R=[":dir",":lang",":not",":nth-child",":nth-last-child",":nth-last-of-type",":nth-of-type"],p=/[>\+~]/,d=[":after",":before",":first-letter",":first-line",":lang"],g=["::after","::before","::first-letter","::first-line"],C={DOUBLE_QUOTE:"double-quote",SINGLE_QUOTE:"single-quote",ROOT:"root"};t.exports=O}});