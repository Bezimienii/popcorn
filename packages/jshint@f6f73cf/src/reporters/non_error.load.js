montageDefine("f6f73cf","src/reporters/non_error",{dependencies:[],factory:function(n,e,r){"use strict";r.exports={reporter:function(n,e,r){var o,t,c,i,f=n.length,a="";n.forEach(function(n){o=n.file,t=n.error,a+=o+": line "+t.line+", col "+t.character+", "+t.reason,r.verbose&&(a+=" ("+t.code+")"),a+="\n"}),a+=f>0?"\n"+f+" error"+(1===f?"":"s"):"",e.forEach(function(n){o=n.file,c=n.implieds,i=n.unused,(c||i)&&(a+="\n\n"+o+" :\n"),c&&(a+="\tImplied globals:\n",c.forEach(function(n){a+="\t\t"+n.name+": "+n.line+"\n"})),i&&(a+="\tUnused Variables:\n\t\t",i.forEach(function(n){a+=n.name+"("+n.line+"), "}))}),a&&console.log(a+"\n")}}}});