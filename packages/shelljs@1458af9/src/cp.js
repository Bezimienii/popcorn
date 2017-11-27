function copyFileSync(e,r){fs.existsSync(e)||common.error("copyFileSync: no such file or directory: "+e);var c=65536,o=new Buffer(c),n=c,s=0,i=null,t=null;try{i=fs.openSync(e,"r")}catch(f){common.error("copyFileSync: could not read src file ("+e+")")}try{t=fs.openSync(r,"w")}catch(f){common.error("copyFileSync: could not write to dest file (code="+f.code+"):"+r)}for(;n===c;)n=fs.readSync(i,o,0,c,s),fs.writeSync(t,o,0,n),s+=n;fs.closeSync(i),fs.closeSync(t),fs.chmodSync(r,fs.statSync(e).mode)}function cpdirSyncRecursive(e,r,c){c||(c={});var o=fs.statSync(e);try{fs.mkdirSync(r,o.mode)}catch(n){if("EEXIST"!==n.code)throw n}for(var s=fs.readdirSync(e),i=0;i<s.length;i++){var t=e+"/"+s[i],f=r+"/"+s[i],y=fs.lstatSync(t);if(y.isDirectory())cpdirSyncRecursive(t,f,c);else if(y.isSymbolicLink()){var a=fs.readlinkSync(t);fs.symlinkSync(a,f,"win32"===os.platform()?"junction":null)}else fs.existsSync(f)&&!c.force?common.log("skipping existing file: "+s[i]):copyFileSync(t,f)}}function _cp(e,r,c){e=common.parseOptions(e,{f:"force",R:"recursive",r:"recursive"}),arguments.length<3?common.error("missing <source> and/or <dest>"):arguments.length>3?(r=[].slice.call(arguments,1,arguments.length-1),c=arguments[arguments.length-1]):"string"==typeof r?r=[r]:"length"in r?r=r:common.error("invalid arguments");var o=fs.existsSync(c),n=o&&fs.statSync(c);if(o&&n.isDirectory()||!(r.length>1)||common.error("dest is not a directory (too many sources)"),o&&n.isFile()&&!e.force&&common.error("dest file already exists: "+c),e.recursive){r.forEach(function(e,c){"/"===e[e.length-1]&&(r[c]+="*")});try{fs.mkdirSync(c,parseInt("0777",8))}catch(s){}}r=common.expand(r),r.forEach(function(r){if(!fs.existsSync(r))return void common.error("no such file or directory: "+r,!0);{if(!fs.statSync(r).isDirectory()){var o=c;return fs.existsSync(c)&&fs.statSync(c).isDirectory()&&(o=path.normalize(c+"/"+path.basename(r))),fs.existsSync(o)&&!e.force?void common.error("dest file already exists: "+o,!0):void copyFileSync(r,o)}if(e.recursive){var n=path.join(c,path.basename(r)),s=fs.statSync(r);try{fs.mkdirSync(n,s.mode)}catch(i){if("EEXIST"!==i.code)throw i}cpdirSyncRecursive(r,n,{force:e.force})}else common.log(r+" is a directory (not copied)")}})}var fs=require("fs"),path=require("path"),common=require("./common"),os=require("os");module.exports=_cp;