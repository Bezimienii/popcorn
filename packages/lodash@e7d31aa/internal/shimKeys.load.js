montageDefine("e7d31aa","internal/shimKeys",{dependencies:["../lang/isArguments","../lang/isArray","./isIndex","./isLength","../object/keysIn","../support"],factory:function(n,e,r){function s(n){for(var e=g(n),r=e.length,s=r&&n.length,l=s&&o(s)&&(a(n)||p.nonEnumArgs&&t(n)),c=-1,y=[];++c<r;){var h=e[c];(l&&i(h,s)||u.call(n,h))&&y.push(h)}return y}var t=n("../lang/isArguments"),a=n("../lang/isArray"),i=n("./isIndex"),o=n("./isLength"),g=n("../object/keysIn"),p=n("../support"),l=Object.prototype,u=l.hasOwnProperty;r.exports=s}});