montageDefine("533f456","test/test",{dependencies:["fs","path","assert","../lib/cssoapi.js","../lib/util.js"],factory:function(n,r,t){function i(n,r){return l.parse(n,r,!0)}function e(n,r,t){var e=i(n,r);return t&&(e=l.compress(e)),d.cleanInfo(e)}function a(n){return o.readFileSync(n).toString().trim()}function s(n,r,t){var i=a(r+".css"),e=f.relative(__dirname,r),s=function(n){it("in "+e,function(){u.equal(v[n](i,t),a(r+"."+n))})};for(var c in v)c in n&&s(c)}function c(n,r){var t={};o.readdirSync(n).forEach(function(n){var r=f.extname(n);if(r){var i=f.basename(n,r);t[i]||(t[i]={}),t[i][r.substring(1)]=1}});for(var i in t)s(t[i],f.join(n,i),r)}var o=n("fs"),f=n("path"),u=n("assert"),l=n("../lib/cssoapi.js"),d=n("../lib/util.js"),v={p:function(n,r){return l.treeToString(e(n,r))},l:function(n,r){return l.translate(e(n,r))},cl:function(n,r){return l.translate(e(n,r,!0))}};describe("CSSO",function(){var n=f.join(__dirname,"data");o.readdirSync(n).forEach(function(r){var t=f.join(n,r),i=o.statSync(t);i.isDirectory()&&c(t,r.substring(5))})})}});