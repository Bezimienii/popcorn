"use strict";module.exports={reporter:function(r,e,o){var n,c=r.length,t="";o=o||{},r.forEach(function(r){var e=r.file,c=r.error;n&&n!==e&&(t+="\n"),n=e,t+=e+":"+c.line+":"+c.character+": "+c.reason,o.verbose&&(t+=" ("+c.code+")"),t+="\n"}),t&&console.log(t+"\n"+c+" error"+(1===c?"":"s"))}};