var cli=exports,argv,curr_opt,curr_val,full_opt,is_long,short_tags=[],opt_list,parsed={},usage,argv_parsed,command_list,commands,show_debug;cli.app=null,cli.version=null,cli.argv=[],cli.argc=0,cli.options={},cli.args=[],cli.command=null,cli.width=70,cli.option_width=25,cli["native"]={};var define_native=function(e){Object.defineProperty(cli["native"],e,{enumerable:!0,configurable:!0,get:function(){return delete cli["native"][e],cli["native"][e]=require(e)}})},natives=process.binding("natives");for(var module in natives)define_native(module);cli.output=console.log,cli.exit=require("exit"),cli.no_color=!1,(process.env.NODE_DISABLE_COLORS||"dumb"===process.env.TERM)&&(cli.no_color=!0);var enable={help:!0,version:!1,status:!1,timeout:!1,catchall:!1,glob:!1};cli.enable=function(){return Array.prototype.slice.call(arguments).forEach(function(e){switch(e){case"catchall":process.on("uncaughtException",function(e){cli.error("Uncaught exception: "+(e.msg||e))});break;case"help":case"version":case"status":case"autocomplete":case"timeout":break;case"glob":cli.glob=require("glob");break;default:cli.fatal('Unknown plugin "'+e+'"')}enable[e]=!0}),cli},cli.disable=function(){return Array.prototype.slice.call(arguments).forEach(function(e){enable[e]&&(enable[e]=!1)}),cli},cli.setArgv=function(e,t){e="string"==typeof e?e.split(" "):e.slice(),cli.app=e.shift(),t||["node","node.exe"].indexOf(cli["native"].path.basename(cli.app))===-1&&cli["native"].path.basename(process.execPath)!==cli.app&&process.execPath!==cli.app||(cli.app=e.shift()),cli.app=cli["native"].path.basename(cli.app),argv_parsed=!1,cli.args=cli.argv=argv=e,cli.argc=argv.length,cli.options={},cli.command=null},cli.setArgv(process.argv),cli.next=function(){if(argv_parsed||(cli.args=[],argv_parsed=!0),curr_val=null,short_tags.length)return curr_opt=short_tags.shift(),full_opt="-"+curr_opt,curr_opt;if(!argv.length)return!1;if(curr_opt=argv.shift(),"-"===curr_opt||"--"===curr_opt){for(;argv.length;)cli.args.push(argv.shift());return!1}if("-"!==curr_opt[0])return cli.args.push(curr_opt),cli.next();if(is_long="-"===curr_opt[1],curr_opt=curr_opt.substr(is_long?2:1),!is_long&&curr_opt.length>1)return short_tags=curr_opt.split(""),cli.next();var e,t;return is_long&&(e=curr_opt.indexOf("="))>=0&&(curr_val=curr_opt.substr(e+1),curr_opt=curr_opt.substr(0,e),t=curr_val.length,('"'===curr_val[0]&&'"'===curr_val[t-1]||"'"===curr_val[0]&&"'"===curr_val[t-1])&&(curr_val=curr_val.substr(1,t-2)),curr_val.match(/^[0-9]+$/)&&(curr_val=parseInt(curr_val,10))),full_opt=(is_long?"--":"-")+curr_opt,curr_opt},cli.parse=function(e,t){var r,n,i,a,o=cli.options,c=!e;for(opt_list=e||{},commands=t,command_list=commands||[],commands&&!Array.isArray(commands)&&(command_list=Object.keys(commands));i=cli.next();){a=!1;for(var s in opt_list)if(opt_list[s]instanceof Array&&(opt_list[s][0]||(opt_list[s][0]=s),i===s||i===opt_list[s][0])){if(a=!0,2===opt_list[s].length){o[s]=!0;break}if(r=null,4===opt_list[s].length&&(r=opt_list[s][3]),opt_list[s][2]instanceof Array){for(n=0,l=opt_list[s][2].length;n<l;n++)"number"==typeof opt_list[s][2][n]&&(opt_list[s][2][n]+="");o[s]=cli.getArrayValue(opt_list[s][2],is_long?null:r);break}switch(opt_list[s][2].toLowerCase&&(opt_list[s][2]=opt_list[s][2].toLowerCase()),opt_list[s][2]){case"string":case 1:case!0:o[s]=cli.getValue(r);break;case"int":case"number":case"num":case"time":case"seconds":case"secs":case"minutes":case"mins":case"x":case"n":o[s]=cli.getInt(r);break;case"date":case"datetime":case"date_time":o[s]=cli.getDate(r);break;case"float":case"decimal":o[s]=cli.getFloat(r);break;case"path":case"file":case"directory":case"dir":o[s]=cli.getPath(r,opt_list[s][2]);break;case"email":o[s]=cli.getEmail(r);break;case"url":case"uri":case"domain":case"host":o[s]=cli.getUrl(r,opt_list[s][2]);break;case"ip":o[s]=cli.getIp(r);break;case"bool":case"boolean":case"on":o[s]=!0;break;case"false":case"off":case!1:case 0:o[s]=!1;break;default:cli.fatal('Unknown opt type "'+opt_list[s][2]+'"')}break}if(!a){if(!enable.help||"h"!==i&&"help"!==i){if(enable.version&&("v"===i||"version"===i)){null==cli.version&&cli.parsePackageJson(),console.error(cli.app+" v"+cli.version),cli.exit();break}if(enable.catchall&&("c"===i||"catch"===i))continue;if(enable.status&&("k"===i||"no-color"===i)){cli.no_color="k"===i||"no-color"===i;continue}if(enable.status&&"debug"===i){show_debug="debug"===i;continue}if(enable.timeout&&("t"===i||"timeout"===i)){var u=cli.getInt();setTimeout(function(){cli.fatal("Process timed out after "+u+"s")},1e3*u);continue}if(c){o[i]=curr_val||!0;continue}}else cli.getUsage();cli.fatal("Unknown option "+full_opt)}}for(var s in opt_list)r=4===opt_list[s].length?opt_list[s][3]:null,opt_list[s]instanceof Array?"undefined"==typeof o[s]&&(o[s]=r):o[s]=opt_list[s];if(command_list.length){if(0===cli.args.length)return enable.help?cli.getUsage():cli.fatal("A command is required ("+command_list.join(", ")+")."),cli.exit(1);cli.command=cli.autocompleteCommand(cli.args.shift())}return cli.argc=cli.args.length,o},cli.autocompleteCommand=function(e){var t;t=command_list instanceof Array?command_list:Object.keys(command_list);var r,n,i=0,a=e.length;if(0===t.length||t.indexOf(e)!==-1)return e;for(r=0;r<a&&(n=[],l=t.length,!(l<=1));r++){for(i=0;i<l;i++)t[i].length>=r&&t[i][r]===e[r]&&n.push(t[i]);t=n}return l=t.length,1===l?t[0]:void(0===l?cli.fatal('Unknown command "'+e+'"'+(enable.help?". Please see --help for more information":"")):(t.sort(),cli.fatal('The command "'+e+'" is ambiguous and could mean "'+t.join('", "')+'"')))},cli.status=function(e,t){var r;switch(t){case"info":r=cli.no_color?"INFO:":"[33mINFO[0m:";break;case"debug":r=cli.no_color?"DEBUG:":"[36mDEBUG[0m:";break;case"error":case"fatal":r=cli.no_color?"ERROR:":"[31mERROR[0m:";break;case"ok":r=cli.no_color?"OK:":"[32mOK[0m:"}return e=r+" "+e,"fatal"===t?(console.error(e),cli.exit(1)):void(enable.status&&!show_debug&&"debug"===t||console.error(e))},["info","error","ok","debug","fatal"].forEach(function(e){cli[e]=function(t){cli.status(t,e)}}),cli.setApp=function(e,t){return e.indexOf("package.json")!==-1?cli.parsePackageJson(e):(cli.app=e,cli.version=t),cli},cli.parsePackageJson=function(e){var t=function(e){var t=JSON.parse(cli["native"].fs.readFileSync(e,"utf8"));cli.version=t.version,cli.app=t.name},r=function(e,t,r){for(var n=0,i=e.length;n<i;n++)try{return void t(e[n])}catch(a){n===i-1&&cli.fatal(r)}};try{if(e)return t(e);r([__dirname+"/package.json",__dirname+"/../package.json",__dirname+"/../../package.json"],t)}catch(n){cli.fatal("Could not detect "+cli.app+" version")}},cli.setUsage=function(e){return usage=e,cli};var pad=function(e,t){if("undefined"==typeof t&&(t=e,e=""),e.length<t)for(t-=e.length;t--;)e+=" ";return e};cli.getUsage=function(e){var t,r,n,i,a=[],l=cli.option_width,o=function(e,t,r){var n=e.length,i=cli.width-n,a="";if(t.length<=i)return t;for(var l,o=(t+"").split(" "),c=0;o.length;)a+=(l=o.shift())+" ",c+=l.length,o.length&&c+o[0].length>i&&(a+="\n"+pad(n),c=0);return a};usage=usage||cli.app+" [OPTIONS]"+(command_list.length?" <command>":"")+" [ARGS]",cli.no_color?(console.error("Usage:\n  "+usage),console.error("Options: ")):(console.error("[1mUsage[0m:\n  "+usage),console.error("\n[1mOptions[0m: "));for(var c in opt_list)1===c.length?(long=opt_list[c][0],t=c):(long=c,t=opt_list[c][0]),r=opt_list[c][1].trim(),type=opt_list[c].length>=3?opt_list[c][2]:null,n=4===opt_list[c].length?opt_list[c][3]:null,i=t===long?1===t.length?"  -"+t:"      --"+long:t?"  -"+t+", --"+long:"      --"+long,i+=" ",type&&(type instanceof Array&&(r+=". VALUE must be either ["+type.join("|")+"]",type="VALUE"),type!==!0&&1!==type||(type=long.toUpperCase()),type=type.toUpperCase(),"FLOAT"!==type&&"INT"!==type||(type="NUMBER"),i+=n?"["+type+"]":type),i=pad(i,l),i+=o(i,r),i+=n?" (Default is "+n+")":"",console.error(i.replace("%s","%\0s")),a.push(t),a.push(long);if(enable.timeout&&a.indexOf("t")===-1&&a.indexOf("timeout")===-1&&console.error(pad("  -t, --timeout N",l)+"Exit if the process takes longer than N seconds"),enable.status&&(a.indexOf("k")===-1&&a.indexOf("no-color")===-1&&console.error(pad("  -k, --no-color",l)+"Omit color from output"),a.indexOf("debug")===-1&&console.error(pad("      --debug",l)+"Show debug information")),enable.catchall&&a.indexOf("c")===-1&&a.indexOf("catch")===-1&&console.error(pad("  -c, --catch",l)+"Catch unanticipated errors"),enable.version&&a.indexOf("v")===-1&&a.indexOf("version")===-1&&console.error(pad("  -v, --version",l)+"Display the current version"),enable.help&&a.indexOf("h")===-1&&a.indexOf("help")===-1&&console.error(pad("  -h, --help",l)+"Display help and usage details"),command_list.length)if(console.error("\n[1mCommands[0m: "),Array.isArray(commands))command_list.sort(),console.error("  "+o("  ",command_list.join(", ")));else for(var s in commands)i="  "+pad(s,l-2),i+=o(i,commands[s]),console.error(i);return cli.exit(e)},cli.getOptError=function(e,t){var r=full_opt+" expects "+e+". Use `"+cli.app+" "+full_opt+(is_long?"=":" ")+t+"`";return r},cli.getValue=function(e,t,r){r=r||cli.getOptError("a value","VALUE");var n;try{if(curr_val)return t&&(curr_val=t(curr_val)),curr_val;if(short_tags.length)throw"Short tags";if(!argv.length||1===argv[0].length&&"-"===argv[0][0])throw"No value";n=argv.shift(),n.match(/^[0-9]+$/)&&(n=parseInt(n,10)),t&&(n=t(n))}catch(i){return n&&argv.unshift(n),null!=e?e:cli.fatal(r)}return n},cli.getInt=function(e){return cli.getValue(e,function(e){if("number"==typeof e)return e;if(!e.match(/^(?:-?(?:0|[1-9][0-9]*))$/))throw"Invalid int";return parseInt(e)},cli.getOptError("a number","NUMBER"))},cli.getDate=function(e){return cli.getValue(e,function(e){if("date"===cli.toType(e))return e;if(e=new Date(e),!e.getTime())throw e.toString();return e},cli.getOptError("a date","DATE"))},cli.getFloat=function(e){return cli.getValue(e,function(e){if(!e.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/))throw"Invalid float";return parseFloat(e,10)},cli.getOptError("a number","NUMBER"))},cli.getUrl=function(e,t){return t=t||"url",cli.getValue(e,function(e){if(!e.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2})?)|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i))throw"Invalid URL";return e},cli.getOptError("a "+t,t.toUpperCase()))},cli.getEmail=function(e){return cli.getValue(e,function(e){if(!e.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/))throw"Invalid email";return e},cli.getOptError("an email","EMAIL"))},cli.getIp=function(e){return cli.getValue(e,function(e){if(!e.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/))throw"Invalid IP";return e},cli.getOptError("an IP","IP"))},cli.getPath=function(e,t){return t=t||"path",cli.getValue(e,function(e){if(e.match(/[?*;{}]/))throw"Invalid path";return e},cli.getOptError("a "+t,t.toUpperCase()))},cli.getArrayValue=function(e,t){return cli.getValue(t,function(t){if(e.indexOf(t)===-1)throw"Unexpected value";return t},cli.getOptError("either ["+e.join("|")+"]","VALUE"))},cli.withStdin=function(e,t){"function"==typeof e&&(t=e,e="utf8");var r=process.openStdin(),n="";r.setEncoding(e),r.on("data",function(e){n+=e}),r.on("end",function(){t.apply(cli,[n])})},cli.withStdinLines=function(e){cli.withStdin(function(t){var r=t.indexOf("\r\n")!==-1?"\r\n":"\n";e.apply(cli,[t.split(r),r])})},cli.withInput=function(e,t,r){if("function"==typeof t?(r=t,t="utf8"):"function"==typeof e&&(r=e,t="utf8",e="stdin"),"stdin"===e)e=process.openStdin();else try{e=cli["native"].fs.createReadStream(e),e.on("error",cli.fatal)}catch(n){return cli.fatal(n)}e.setEncoding(t);var i,a,l=[],o="";e.on("data",function(e){if(!i){if(o+=e,!a)if(o.indexOf("\r\n")!==-1)a="\r\n";else{if(o.indexOf("\n")===-1)return void(last_line=o);a="\n"}for(l=o.split(a),o=i?null:l.pop();l.length;)r.apply(cli,[l.shift(),a,!1])}}),e.on("end",function(){i=!0,o.length&&r.apply(cli,[o,a||"",!1]),r.apply(cli,[null,null,!0])})},cli.toType=function(e){function t(e){return Number(e)===e&&e%1===0}function r(e){return e===Number(e)&&e%1!==0}var n={}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();if("number"===n){if(t(e))return"integer";if(r(e))return"float"}return n},cli.main=function(e){e.call(cli,cli.args,cli.options)},cli.createServer=function(){var e,t,r=function(e,t,r){return r?(console.error(r.stack),t.writeHead(500,{"Content-Type":"text/plain"}),t.end(r.stack+"\n")):(t.writeHead(404,{"Content-Type":"text/plain"}),void t.end("Not Found\n"))};e=t=r;var n=Array.prototype.slice.call(arguments);return n.length&&n[0]instanceof Array&&(n=n[0]),n.reverse().forEach(function(r){var n=e;e=function(e,i){try{r(e,i,function(r){return r?t(e,i,r):void n(e,i)})}catch(a){t(e,i,a)}}}),cli["native"].http.createServer(e)},cli.exec=function(e,t,r){cli["native"].child_process.exec(e,function(e,n,i){return(e=e||i)?r?r(e,n):cli.fatal("exec() failed\n"+e):void(t&&t(n.split("\n")))})};var last_progress_call,progress_len=74,min_progress_increase=5,last_progress_percentage=0;cli.progress=function(e,t,r){if(r=r||process.stdout,!(e<0||e>1||isNaN(e))){t||(t=0);var n=(new Date).getTime();if(!(last_progress_call&&n-last_progress_call<100&&1!==e)){last_progress_call=n;var i=Math.pow(10,t),a=Math.floor(100*e*i)/i;if(!(!r.isTTY&&a<100&&a-last_progress_percentage<min_progress_increase)){last_progress_percentage=a;for(var l=a+"%",o=0;o<t;o++)l+=" ";if(!r.isTTY)return void(a<100?r.write(l+"..."):(r.write(l+"\n"),last_progress_percentage=0));var c=Math.floor(progress_len*e),s="";for(0==c&&e>0&&(c=1),o=1;o<=progress_len;o++)s+=o<=c?"#":" ";r.clearLine(),r.write("["+s+"] "+l),1===e?r.write("\n"):r.cursorTo(0)}}}};var spinner_interval;cli.spinner=function(e,t,r){if(r=r||process.stdout,!r.isTTY)return void r.write(e+"\n");if(t)return r.clearLine(),r.cursorTo(0),r.write(e+"\n"),clearInterval(spinner_interval);e=e+" "||"";var n=["-","\\","|","/"],i=0,a=n.length;spinner_interval=setInterval(function(){r.clearLine(),r.cursorTo(0),r.write(e+n[i++]),i==a&&(i=0)},200)};