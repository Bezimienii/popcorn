montageDefine("d834c96","index",{dependencies:["assert","path","./lib/completion","./lib/parser","./lib/usage","./lib/validation","window-size"],factory:function(n,e,t){function r(e,t){function r(n){var e=s(n,b),t=e.argv,r=e.aliases;t.$0=d.$0,d.parsed=e,x&&~t._.indexOf(x)&&(d.showCompletionScript(),k&&process.exit(0));for(var o,i=Object.keys(d.getCommandHandlers()),a=0;void 0!==(o=i[a]);a++)if(~t._.indexOf(o))return d.getCommandHandlers()[o](d.reset()),d.argv;return Object.keys(t).forEach(function(n){if(n===j&&t[n])d.showHelp("log"),k&&process.exit(0);else if(n===O&&t[n])m.showVersion(),k&&process.exit(0);else if(n===_)return void g.getCompletion(function(n){(n||[]).forEach(function(n){console.log(n)}),k&&process.exit(0)})}),y.nonOptionCount(t),y.missingArgumentValue(t),y.requiredArguments(t),w&&y.unknownArguments(t,r),y.customChecks(t,r),y.implications(t),p(t),t}function p(n){Object.keys(b.key).forEach(function(e){"undefined"==typeof n[e]&&(n[e]=void 0)})}e=e||[];var d={},g=null,m=null,y=null;t||(t=process.cwd()),d.$0=process.argv.slice(0,2).map(function(n,e){if(0!==e||!/\b(node|iojs)$/.test(n)){var r=o(t,n);return n.match(/^\//)&&r.length<n.length?r:n}}).join(" ").trim(),void 0!==process.env._&&process.argv[1]===process.env._&&(d.$0=process.env._.replace(u.dirname(process.execPath)+"/",""));var b;d.resetOptions=d.reset=function(){return b={array:[],"boolean":[],string:[],narg:{},key:{},alias:{},"default":{},defaultDescription:{},requiresArg:[],count:[],normalize:[],config:[]},m=l(d),y=f(d,m),g=c(d,m),v={},k=!0,w=!1,j=null,O=null,_=null,h={},d.parsed=!1,d},d.resetOptions(),d["boolean"]=function(n){return b["boolean"].push.apply(b["boolean"],[].concat(n)),d},d.array=function(n){return b.array.push.apply(b.array,[].concat(n)),d},d.nargs=function(n,e){return"object"==typeof n?Object.keys(n).forEach(function(e){d.nargs(e,n[e])}):b.narg[n]=e,d},d.normalize=function(n){return b.normalize.push.apply(b.normalize,[].concat(n)),d},d.config=function(n){return b.config.push.apply(b.config,[].concat(n)),d},d.example=function(n,e){return m.example(n,e),d},d.command=function(n,e,t){return m.command(n,e),t&&(h[n]=t),d};var h={};d.getCommandHandlers=function(){return h},d.string=function(n){return b.string.push.apply(b.string,[].concat(n)),d},d["default"]=function(n,e,t){return"object"==typeof n?Object.keys(n).forEach(function(e){d["default"](e,n[e])}):("function"==typeof e&&(t=m.functionDescription(e,t),e=e.call()),b.defaultDescription[n]=t,b["default"][n]=e),d},d.alias=function(n,e){return"object"==typeof n?Object.keys(n).forEach(function(e){d.alias(e,n[e])}):b.alias[n]=(b.alias[n]||[]).concat(e),d},d.count=function(n){return b.count.push.apply(b.count,[].concat(n)),d};var v={};d.demand=d.required=d.require=function(n,e){return"number"==typeof n?(v._||(v._={count:0,msg:null}),v._.count+=n,v._.msg=e):Array.isArray(n)?n.forEach(function(n){d.demand(n,e)}):"string"==typeof e?v[n]={msg:e}:e!==!0&&"undefined"!=typeof e||(v[n]={msg:void 0}),d},d.getDemanded=function(){return v},d.requiresArg=function(n){return b.requiresArg.push.apply(b.requiresArg,[].concat(n)),d},d.implies=function(n,e){return y.implies(n,e),d},d.usage=function(n,e){return e||"object"!=typeof n||(e=n,n=null),m.usage(n),e&&d.options(e),d},d.epilogue=d.epilog=function(n){return m.epilog(n),d},d.fail=function(n){return m.failFn(n),d},d.check=function(n){return y.check(n),d},d.defaults=d["default"],d.describe=function(n,e){return b.key[n]=!0,m.describe(n,e),d},d.parse=function(n){return r(n)},d.option=d.options=function(n,e){if("object"==typeof n)Object.keys(n).forEach(function(e){d.options(e,n[e])});else{a("object"==typeof e,"second argument to option must be an object"),b.key[n]=!0,e.alias&&d.alias(n,e.alias);var t=e.demand||e.required||e.require;t&&d.demand(n,t),"default"in e&&d["default"](n,e["default"]),"nargs"in e&&d.nargs(n,e.nargs),(e["boolean"]||"boolean"===e.type)&&(d["boolean"](n),e.alias&&d["boolean"](e.alias)),(e.array||"array"===e.type)&&(d.array(n),e.alias&&d.array(e.alias)),(e.string||"string"===e.type)&&(d.string(n),e.alias&&d.string(e.alias)),(e.count||"count"===e.type)&&d.count(n);var r=e.describe||e.description||e.desc;r&&d.describe(n,r),e.requiresArg&&d.requiresArg(n)}return d},d.getOptions=function(){return b},d.wrap=function(n){return m.wrap(n),d};var w=!1;d.strict=function(){return w=!0,d},d.getStrict=function(){return w},d.showHelp=function(n){return d.parsed||r(e),m.showHelp(n),d};var O=null;d.version=function(n,e,t){return O=e||"version",m.version(n),d["boolean"](O),d.describe(O,t||"Show version number"),d};var j=null;d.addHelpOpt=function(n,e){return j=n,d["boolean"](n),d.describe(n,e||"Show help"),d},d.showHelpOnFail=function(n,e){return m.showHelpOnFail(n,e),d};var k=!0;d.exitProcess=function(n){return"boolean"!=typeof n&&(n=!0),k=n,d},d.getExitProcess=function(){return k},d.help=function(){return arguments.length>0?d.addHelpOpt.apply(d,arguments):(d.parsed||r(e),m.help())};var _=null,x=null;return d.completion=function(n,e,t){return"function"==typeof e&&(t=e,e=null),x=n,_=g.completionKey,d.command(x,e||"generate bash completion script"),t&&g.registerFunction(t),d},d.showCompletionScript=function(n){return n=n||d.$0,console.log(g.generateCompletionScript(n)),d},d.getUsageInstance=function(){return m},d.getValidationInstance=function(){return y},d.terminalWidth=function(){return n("window-size").width},Object.defineProperty(d,"argv",{get:function(){var n=null;try{n=r(e)}catch(t){m.fail(t.message)}return n},enumerable:!0}),i(d),d}function o(n,e){return u.relative(n,e)}function i(n){Object.keys(n).forEach(function(e){"argv"===e?r.__defineGetter__(e,n.__lookupGetter__(e)):r[e]="function"==typeof n[e]?n[e].bind(n):n[e]})}var a=n("assert"),u=n("path"),c=n("./lib/completion"),s=n("./lib/parser"),l=n("./lib/usage"),f=n("./lib/validation");r(process.argv.slice(2));var e=t.exports=r;e.rebase=o}});