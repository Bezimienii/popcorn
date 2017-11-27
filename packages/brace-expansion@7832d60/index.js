function numeric(e){return parseInt(e,10)==e?parseInt(e,10):e.charCodeAt(0)}function escapeBraces(e){return e.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod)}function unescapeBraces(e){return e.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".")}function parseCommaParts(e){if(!e)return[""];var n=[],r=balanced("{","}",e);if(!r)return e.split(",");var t=r.pre,a=r.body,s=r.post,o=t.split(",");o[o.length-1]+="{"+a+"}";var i=parseCommaParts(s);return s.length&&(o[o.length-1]+=i.shift(),o.push.apply(o,i)),n.push.apply(n,o),n}function expandTop(e){return e?("{}"===e.substr(0,2)&&(e="\\{\\}"+e.substr(2)),expand(escapeBraces(e),!0).map(unescapeBraces)):[]}function identity(e){return e}function embrace(e){return"{"+e+"}"}function isPadded(e){return/^-?0\d/.test(e)}function lte(e,n){return e<=n}function gte(e,n){return e>=n}function expand(e,n){var r=[],t=balanced("{","}",e);if(!t||/\$$/.test(t.pre))return[e];var a=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(t.body),s=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(t.body),o=a||s,i=t.body.indexOf(",")>=0;if(!o&&!i)return t.post.match(/,.*\}/)?(e=t.pre+"{"+t.body+escClose+t.post,expand(e)):[e];var p;if(o)p=t.body.split(/\.\./);else if(p=parseCommaParts(t.body),1===p.length&&(p=expand(p[0],!1).map(embrace),1===p.length)){var c=t.post.length?expand(t.post,!1):[""];return c.map(function(e){return t.pre+p[0]+e})}var l,u=t.pre,c=t.post.length?expand(t.post,!1):[""];if(o){var d=numeric(p[0]),m=numeric(p[1]),h=Math.max(p[0].length,p[1].length),f=3==p.length?Math.abs(numeric(p[2])):1,v=lte,g=m<d;g&&(f*=-1,v=gte);var b=p.some(isPadded);l=[];for(var C=d;v(C,m);C+=f){var x;if(s)x=String.fromCharCode(C),"\\"===x&&(x="");else if(x=String(C),b){var j=h-x.length;if(j>0){var y=new Array(j+1).join("0");x=C<0?"-"+y+x.slice(1):y+x}}l.push(x)}}else l=concatMap(p,function(e){return expand(e,!1)});for(var M=0;M<l.length;M++)for(var P=0;P<c.length;P++){var O=u+l[M]+c[P];(!n||o||O)&&r.push(O)}return r}var concatMap=require("concat-map"),balanced=require("balanced-match");module.exports=expandTop;var escSlash="\0SLASH"+Math.random()+"\0",escOpen="\0OPEN"+Math.random()+"\0",escClose="\0CLOSE"+Math.random()+"\0",escComma="\0COMMA"+Math.random()+"\0",escPeriod="\0PERIOD"+Math.random()+"\0";