function removeDuplicateMediaQueries(e){var r,i,l,o,u,a={};for(o=0,u=e.length;o<u;o++)i=e[o],i[0]==Token.NESTED_BLOCK&&(l=serializeRules(i[1])+"%"+serializeAll(i[2]),r=a[l],r&&(r[2]=[]),a[l]=i)}var Token=require("../../tokenizer/token"),serializeAll=require("../../writer/one-time").all,serializeRules=require("../../writer/one-time").rules;module.exports=removeDuplicateMediaQueries;