var cli=require("cli"),options=cli.parse({numeric:["n","Compare using a numeric sort"],reverse:["r","Reverse the results"]});cli.withStdinLines(function(e,r){e.sort(options.numeric?function(e,r){return parseInt(e)>parseInt(r)}:null),options.reverse&&e.reverse(),this.output(e.join(r))});