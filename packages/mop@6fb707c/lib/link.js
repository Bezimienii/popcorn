function link(o,n){var t=URL.resolve(n.buildLocation,o.config.name+"/"),e=Location.toPath(o.buildLocation).replace(/\/$/,""),r=Location.toPath(t).replace(/\/$/,"");return n.fs.remove(r)["catch"](function(){}).then(function(){return n.fs.symbolicCopy(e,r)["catch"](function(o){if("EPERM"===o.code)return n.fs.copyTree(e,r);throw o})}).then(function(){return n.out.log(e),e})}var URL=require("url2"),Location=require("./location");module.exports=link;