montageDefine("1458af9","src/grep",{dependencies:["./common","fs"],factory:function(r,e,n){function o(r,e,n){r=i.parseOptions(r,{v:"inverse"}),n||i.error("no paths given"),"string"==typeof n&&(n=[].slice.call(arguments,2)),n=i.expand(n);var o="";return n.forEach(function(n){if(!t.existsSync(n))return void i.error("no such file or directory: "+n,!0);var c=t.readFileSync(n,"utf8"),s=c.split(/\r*\n/);s.forEach(function(n){var i=n.match(e);(r.inverse&&!i||!r.inverse&&i)&&(o+=n+"\n")})}),i.ShellString(o)}var i=r("./common"),t=r("fs");n.exports=o}});