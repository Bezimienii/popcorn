montageDefine("6fb707c","optimize",{dependencies:["url2","path","./lib/build","./lib/spinner","./lib/location","q-io/fs","./package.json","optimist"],factory:function(o,i,e){function n(i,e){function n(o){var i=m.toPath(o);return t.read(i)}e=e||{},i=m.fromPath(i,!0),e.out&&(e.out.log||(e.out.log=r),e.out.warn||(e.out.warn=r),e.out.status||(e.out.status=r),e.out.error||(e.out.error=r));var t=e.fs||o("q-io/fs");return c(i,{buildLocation:d.resolve(i,(e.buildLocation||"builds")+"/"),minify:void 0===e.minify||!!e.minify,lint:void 0!==e.lint&&!!e.lint,noCss:void 0!==e.noCss&&!!e.noCss,cssEmbedding:void 0===e.cssEmbedding||!!e.cssEmbedding,delimiter:void 0!==e.delimiter?e.delimiter:"@",out:e.out||u,fs:t,read:n,overlays:["browser"],production:!0})}function t(){console.log("Usage: mop [options] [<application> ...]"),console.log(""),console.log("    -o --optimize 0 to disable optimizations"),console.log("    -l --lint to enable linter warnings"),console.log("    -d --delimiter @ to use a different symbol"),console.log("       --no-css to disable CSS compression"),console.log("       --no-css-embedding to disable embedding of CSS in HTML"),console.log("")}function s(){var i=o("./package.json");console.log(i.title+" version "+i.version)}function l(){var i=o("optimist"),e=i["boolean"](["h","help","v","version","css","css-embedding"])["default"]("optimize","1").alias("o","optimize")["default"]("delimiter","@").alias("d","delimiter")["default"]("css",!0)["default"]("css-embedding",!0).argv;if(e.h||e.help)return t();if(e.v||e.version)return s();var l=e._.length?e._[0]:".";l=a.resolve(process.cwd(),l),n(l,{buildLocation:e.t||e.target,minify:e.optimize>0,lint:e.l||e.lint,noCss:!e.css,cssEmbedding:e["css-embedding"],delimiter:e.delimiter})}function r(){}var d=o("url2"),a=o("path"),c=o("./lib/build"),u=o("./lib/spinner"),m=o("./lib/location");e.exports=n,e===o.main&&l()}});