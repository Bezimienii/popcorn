function _cat(n,o){var r="";return o||common.error("no paths given"),"string"==typeof o&&(o=[].slice.call(arguments,1)),o=common.expand(o),o.forEach(function(n){fs.existsSync(n)||common.error("no such file or directory: "+n),r+=fs.readFileSync(n,"utf8")+"\n"}),"\n"===r[r.length-1]&&(r=r.substring(0,r.length-1)),common.ShellString(r)}var common=require("./common"),fs=require("fs");module.exports=_cat;