var argv=require("optimist").usage("Count the lines in a file.\nUsage: $0").options({file:{demand:!0,alias:"f",description:"Load a file"},base:{alias:"b",description:"Numeric base to use for output","default":10}}).argv,fs=require("fs"),s=fs.createReadStream(argv.file),lines=0;s.on("data",function(e){lines+=e.toString().match(/\n/g).length}),s.on("end",function(){console.log(lines.toString(argv.base))});