var fs=require("fs"),path=require("path");module.exports=function(e,t){var r={completionKey:"get-yargs-completions"};r.getCompletion=function(a){var o=[],c=process.argv[process.argv.length-1],p=process.argv.slice(process.argv.indexOf("--"+r.completionKey)+1),s=e.parse(p);return n?n.length<3?a(n(c,s)):n(c,s,function(e){a(e)}):(c.match(/^-/)||t.getCommands().forEach(function(e){o.push(e[0])}),c.match(/^-/)&&Object.keys(e.getOptions().key).forEach(function(e){o.push("--"+e)}),void a(o))},r.generateCompletionScript=function(e){var t=fs.readFileSync(path.resolve(__dirname,"../completion.sh.hbs"),"utf-8"),r=path.basename(e);return e.match(/\.js$/)&&(e="./"+e),t=t.replace(/{{app_name}}/g,r),t.replace(/{{app_path}}/g,e)};var n=null;return r.registerFunction=function(e){n=e},r};