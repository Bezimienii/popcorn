var $util={};$util.cleanInfo=function(r){var t=[];return r=r.slice(1),r.forEach(function(r){t.push(Array.isArray(r)?$util.cleanInfo(r):r)}),t},$util.treeToString=function(r,t){var i=$util.dummySpaces(t),t=t?t:0,n=(t?"\n"+i:"")+"[";return r.forEach(function(r){n+=(Array.isArray(r)?$util.treeToString(r,t+1):void 0!==r.f?$util.ircToString(r):"'"+r.toString()+"'")+", "}),n.substr(0,n.length-2)+"]"},$util.ircToString=function(r){return"{"+r.f+","+r.l+"}"},$util.dummySpaces=function(r){return"                                                  ".substr(0,2*r)},$util.printTree=function(r){require("sys").print($util.treeToString(r))},exports.cleanInfo=$util.cleanInfo,exports.treeToString=$util.treeToString,exports.printTree=$util.printTree;