function clear(){active&&(process.stdout.write("[A[2K"),active=!1)}function log(){clear(),console.log.apply(console,arguments)}function warn(){clear(),console.log.apply(console,["(warn)"].concat(slice.call(arguments)))}function status(){if(!arguments.length)return clear();active||(process.stdout.write("\n"),active=!0);var o=slice.call(arguments),t=o.shift(),e=o.join(" "),s=t+" "+frames[i]+(e?" "+e:"");s=s.slice(0,process.stdout.columns-1);var a=Date.now();a>lastTime+period&&(i=(i+1)%frames.length,lastTime=Date.now()),process.stdout.write("[A[2K"+s+"\n")}function noop(){}var lastTime=Date.now(),frames=["⡿⣾","⢿⣷","⣻⣯","⣽⣟","⣾⡿","⣷⢿"],i=0,period=50,active=!1,slice=Array.prototype.slice;exports.log=log,exports.warn=warn,exports.status=process.stdout.isTTY?status:noop;