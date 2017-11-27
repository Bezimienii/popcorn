montageDefine("f6f73cf","src/lex",{dependencies:["lodash","events","./reg.js","./state.js","../data/ascii-identifier-data.js","../data/non-ascii-identifier-start.js","../data/non-ascii-identifier-part-only.js"],factory:function(t,e,i){"use strict";function r(t){return/^[0-9a-fA-F]+$/.test(t)}function n(t){return 1===t.length&&r(t)}function s(){var t=[];return{push:function(e){t.push(e)},check:function(){for(var e=0;e<t.length;++e)t[e]();t.splice(0,t.length)}}}function a(t){var e=t;"string"==typeof e&&(e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n")),e[0]&&"#!"===e[0].substr(0,2)&&(e[0].indexOf("node")!==-1&&(u.option.node=!0),e[0]=""),this.emitter=new c.EventEmitter,this.source=t,this.setLines(e),this.prereg=!0,this.line=0,this["char"]=1,this.from=1,this.input="",this.inComment=!1,this.context=[],this.templateStarts=[];for(var i=0;i<u.option.indent;i+=1)u.tab+=" "}var h=t("lodash"),c=t("events"),l=t("./reg.js"),u=t("./state.js").state,o=t("../data/ascii-identifier-data.js"),p=o.asciiIdentifierStartTable,f=o.asciiIdentifierPartTable,g=t("../data/non-ascii-identifier-start.js"),d=t("../data/non-ascii-identifier-part-only.js"),m={Identifier:1,Punctuator:2,NumericLiteral:3,StringLiteral:4,Comment:5,Keyword:6,NullLiteral:7,BooleanLiteral:8,RegExp:9,TemplateHead:10,TemplateMiddle:11,TemplateTail:12,NoSubstTemplate:13},k={Block:1,Template:2};a.prototype={_lines:[],inContext:function(t){return this.context.length>0&&this.context[this.context.length-1].type===t},pushContext:function(t){this.context.push({type:t})},popContext:function(){return this.context.pop()},isContext:function(t){return this.context.length>0&&this.context[this.context.length-1]===t},currentContext:function(){return this.context.length>0&&this.context[this.context.length-1]},getLines:function(){return this._lines=u.lines,this._lines},setLines:function(t){this._lines=t,u.lines=this._lines},peek:function(t){return this.input.charAt(t||0)},skip:function(t){t=t||1,this["char"]+=t,this.input=this.input.slice(t)},on:function(t,e){t.split(" ").forEach(function(t){this.emitter.on(t,e)}.bind(this))},trigger:function(){this.emitter.emit.apply(this.emitter,Array.prototype.slice.call(arguments))},triggerAsync:function(t,e,i,r){i.push(function(){r()&&this.trigger(t,e)}.bind(this))},scanPunctuator:function(){var t,e,i,r=this.peek();switch(r){case".":if(/^[0-9]$/.test(this.peek(1)))return null;if("."===this.peek(1)&&"."===this.peek(2))return{type:m.Punctuator,value:"..."};case"(":case")":case";":case",":case"[":case"]":case":":case"~":case"?":return{type:m.Punctuator,value:r};case"{":return this.pushContext(k.Block),{type:m.Punctuator,value:r};case"}":return this.inContext(k.Block)&&this.popContext(),{type:m.Punctuator,value:r};case"#":return{type:m.Punctuator,value:r};case"":return null}return t=this.peek(1),e=this.peek(2),i=this.peek(3),">"===r&&">"===t&&">"===e&&"="===i?{type:m.Punctuator,value:">>>="}:"="===r&&"="===t&&"="===e?{type:m.Punctuator,value:"==="}:"!"===r&&"="===t&&"="===e?{type:m.Punctuator,value:"!=="}:">"===r&&">"===t&&">"===e?{type:m.Punctuator,value:">>>"}:"<"===r&&"<"===t&&"="===e?{type:m.Punctuator,value:"<<="}:">"===r&&">"===t&&"="===e?{type:m.Punctuator,value:">>="}:"="===r&&">"===t?{type:m.Punctuator,value:r+t}:r===t&&"+-<>&|".indexOf(r)>=0?{type:m.Punctuator,value:r+t}:"<>=!+-*%&|^/".indexOf(r)>=0?"="===t?{type:m.Punctuator,value:r+t}:{type:m.Punctuator,value:r}:null},scanComments:function(t){function e(t,e,i){var r=["jshint","jslint","members","member","globals","global","exported"],n=!1,s=t+e,a="plain";return i=i||{},i.isMultiline&&(s+="*/"),e=e.replace(/\n/g," "),"/*"===t&&l.fallsThrough.test(e)&&(n=!0,a="falls through"),r.forEach(function(i){if(!n&&("//"!==t||"jshint"===i)&&(" "===e.charAt(i.length)&&e.substr(0,i.length)===i&&(n=!0,t+=i,e=e.substr(i.length)),n||" "!==e.charAt(0)||" "!==e.charAt(i.length+1)||e.substr(1,i.length)!==i||(n=!0,t=t+" "+i,e=e.substr(i.length+1)),n))switch(i){case"member":a="members";break;case"global":a="globals";break;default:var r=e.split(":").map(function(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")});if(2===r.length)switch(r[0]){case"ignore":switch(r[1]){case"start":h.ignoringLinterErrors=!0,n=!1;break;case"end":h.ignoringLinterErrors=!1,n=!1}}a=i}}),{type:m.Comment,commentType:a,value:s,body:e,isSpecial:n,isMultiline:i.isMultiline||!1,isMalformed:i.isMalformed||!1}}var i=this.peek(),r=this.peek(1),n=this.input.substr(2),s=this.line,a=this["char"],h=this;if("*"===i&&"/"===r)return this.trigger("error",{code:"E018",line:s,character:a}),this.skip(2),null;if("/"!==i||"*"!==r&&"/"!==r)return null;if("/"===r)return this.skip(this.input.length),e("//",n);var c="";if("*"===r){for(this.inComment=!0,this.skip(2);"*"!==this.peek()||"/"!==this.peek(1);)if(""===this.peek()){if(c+="\n",!this.nextLine(t))return this.trigger("error",{code:"E017",line:s,character:a}),this.inComment=!1,e("/*",c,{isMultiline:!0,isMalformed:!0})}else c+=this.peek(),this.skip();return this.skip(2),this.inComment=!1,e("/*",c,{isMultiline:!0})}},scanKeyword:function(){var t=/^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input),e=["if","in","do","var","for","new","try","let","this","else","case","void","with","enum","while","break","catch","throw","const","yield","class","super","return","typeof","delete","switch","export","import","default","finally","extends","function","continue","debugger","instanceof"];return t&&e.indexOf(t[0])>=0?{type:m.Keyword,value:t[0]}:null},scanIdentifier:function(){function t(t){return g.indexOf(t)>-1}function e(e){return t(e)||d.indexOf(e)>-1}function i(t){return t.replace(/\\u([0-9a-fA-F]{4})/g,function(t,e){return String.fromCharCode(parseInt(e,16))})}var n,s,a="",h=0,c=function(){if(h+=1,"u"!==this.peek(h))return null;var t,i=this.peek(h+1)+this.peek(h+2)+this.peek(h+3)+this.peek(h+4);return r(i)?(t=parseInt(i,16),f[t]||e(t)?(h+=5,"\\u"+i):null):null}.bind(this),l=function(){var e=this.peek(h),i=e.charCodeAt(0);return 92===i?c():i<128?p[i]?(h+=1,e):null:t(i)?(h+=1,e):null}.bind(this),u=function(){var t=this.peek(h),i=t.charCodeAt(0);return 92===i?c():i<128?f[i]?(h+=1,t):null:e(i)?(h+=1,t):null}.bind(this);if(s=l(),null===s)return null;for(a=s;s=u(),null!==s;)a+=s;switch(a){case"true":case"false":n=m.BooleanLiteral;break;case"null":n=m.NullLiteral;break;default:n=m.Identifier}return{type:n,value:i(a),text:a,tokenLength:a.length}},scanNumericLiteral:function(t){function e(t){return/^[0-9]$/.test(t)}function i(t){return/^[0-7]$/.test(t)}function r(t){return/^[01]$/.test(t)}function s(t){return"$"===t||"_"===t||"\\"===t||t>="a"&&t<="z"||t>="A"&&t<="Z"}var a,h=0,c="",l=this.input.length,o=this.peek(h),p=e,f=10,g=!1;if("."!==o&&!e(o))return null;if("."!==o){for(c=this.peek(h),h+=1,o=this.peek(h),"0"===c&&("x"!==o&&"X"!==o||(p=n,f=16,h+=1,c+=o),"o"!==o&&"O"!==o||(p=i,f=8,u.inES6(!0)||this.triggerAsync("warning",{code:"W119",line:this.line,character:this["char"],data:["Octal integer literal","6"]},t,function(){return!0}),h+=1,c+=o),"b"!==o&&"B"!==o||(p=r,f=2,u.inES6(!0)||this.triggerAsync("warning",{code:"W119",line:this.line,character:this["char"],data:["Binary integer literal","6"]},t,function(){return!0}),h+=1,c+=o),i(o)&&(p=i,f=8,g=!0,a=!1,h+=1,c+=o),!i(o)&&e(o)&&(h+=1,c+=o));h<l;){if(o=this.peek(h),g&&e(o))a=!0;else if(!p(o))break;c+=o,h+=1}if(p!==e)return!g&&c.length<=2?{type:m.NumericLiteral,value:c,isMalformed:!0}:h<l&&(o=this.peek(h),s(o))?null:{type:m.NumericLiteral,value:c,base:f,isLegacy:g,isMalformed:!1}}if("."===o)for(c+=o,h+=1;h<l&&(o=this.peek(h),e(o));)c+=o,h+=1;if("e"===o||"E"===o){if(c+=o,h+=1,o=this.peek(h),"+"!==o&&"-"!==o||(c+=this.peek(h),h+=1),o=this.peek(h),!e(o))return null;for(c+=o,h+=1;h<l&&(o=this.peek(h),e(o));)c+=o,h+=1}return h<l&&(o=this.peek(h),s(o))?null:{type:m.NumericLiteral,value:c,base:f,isMalformed:!isFinite(c)}},scanEscapeSequence:function(t){var e=!1,i=1;this.skip();var n=this.peek();switch(n){case"'":this.triggerAsync("warning",{code:"W114",line:this.line,character:this["char"],data:["\\'"]},t,function(){return u.jsonMode});break;case"b":n="\\b";break;case"f":n="\\f";break;case"n":n="\\n";break;case"r":n="\\r";break;case"t":n="\\t";break;case"0":n="\\0";var s=parseInt(this.peek(1),10);this.triggerAsync("warning",{code:"W115",line:this.line,character:this["char"]},t,function(){return s>=0&&s<=7&&u.isStrict()});break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":n="\\"+n,this.triggerAsync("warning",{code:"W115",line:this.line,character:this["char"]},t,function(){return u.isStrict()});break;case"u":var a=this.input.substr(1,4),h=parseInt(a,16);r(a)||this.trigger("warning",{code:"W052",line:this.line,character:this["char"],data:["u"+a]}),n=String.fromCharCode(h),i=5;break;case"v":this.triggerAsync("warning",{code:"W114",line:this.line,character:this["char"],data:["\\v"]},t,function(){return u.jsonMode}),n="\x0B";break;case"x":var c=parseInt(this.input.substr(1,2),16);this.triggerAsync("warning",{code:"W114",line:this.line,character:this["char"],data:["\\x-"]},t,function(){return u.jsonMode}),n=String.fromCharCode(c),i=3;break;case"\\":n="\\\\";break;case'"':n='\\"';break;case"/":break;case"":e=!0,n=""}return{"char":n,jump:i,allowNewLine:e}},scanTemplateLiteral:function(t){var e,i,r="",n=this.line,s=this["char"],a=this.templateStarts.length;if("`"===this.peek())u.inES6(!0)||this.triggerAsync("warning",{code:"W119",line:this.line,character:this["char"],data:["template literal syntax","6"]},t,function(){return!0}),e=m.TemplateHead,this.templateStarts.push({line:this.line,"char":this["char"]}),a=this.templateStarts.length,this.skip(1),this.pushContext(k.Template);else{if(!this.inContext(k.Template)||"}"!==this.peek())return null;e=m.TemplateMiddle}for(;"`"!==this.peek();){for(;""===(i=this.peek());)if(r+="\n",!this.nextLine(t)){var h=this.templateStarts.pop();return this.trigger("error",{code:"E052",line:h.line,character:h["char"]}),{type:e,value:r,startLine:n,startChar:s,isUnclosed:!0,depth:a,context:this.popContext()}}if("$"===i&&"{"===this.peek(1))return r+="${",this.skip(2),{type:e,value:r,startLine:n,startChar:s,isUnclosed:!1,depth:a,context:this.currentContext()};if("\\"===i){var c=this.scanEscapeSequence(t);r+=c["char"],this.skip(c.jump)}else"`"!==i&&(r+=i,this.skip(1))}return e=e===m.TemplateHead?m.NoSubstTemplate:m.TemplateTail,this.skip(1),this.templateStarts.pop(),{type:e,value:r,startLine:n,startChar:s,isUnclosed:!1,depth:a,context:this.popContext()}},scanStringLiteral:function(t){var e=this.peek();if('"'!==e&&"'"!==e)return null;this.triggerAsync("warning",{code:"W108",line:this.line,character:this["char"]},t,function(){return u.jsonMode&&'"'!==e});var i="",r=this.line,n=this["char"],s=!1;for(this.skip();this.peek()!==e;)if(""===this.peek()){if(s?(s=!1,this.triggerAsync("warning",{code:"W043",line:this.line,character:this["char"]},t,function(){return!u.option.multistr}),this.triggerAsync("warning",{code:"W042",line:this.line,character:this["char"]},t,function(){return u.jsonMode&&u.option.multistr})):this.trigger("warning",{code:"W112",line:this.line,character:this["char"]}),!this.nextLine(t))return this.trigger("error",{code:"E029",line:r,character:n}),{type:m.StringLiteral,value:i,startLine:r,startChar:n,isUnclosed:!0,quote:e}}else{s=!1;var a=this.peek(),h=1;if(a<" "&&this.triggerAsync("warning",{code:"W113",line:this.line,character:this["char"],data:["<non-printable>"]},t,function(){return!0}),"\\"===a){var c=this.scanEscapeSequence(t);a=c["char"],h=c.jump,s=c.allowNewLine}i+=a,this.skip(h)}return this.skip(),{type:m.StringLiteral,value:i,startLine:r,startChar:n,isUnclosed:!1,quote:e}},scanRegExp:function(t){var e,i,r=0,n=this.input.length,s=this.peek(),a=s,h="",c=[],l=!1,o=!1,p=function(){s<" "&&(l=!0,this.triggerAsync("warning",{code:"W048",line:this.line,character:this["char"]},t,function(){return!0})),"<"===s&&(l=!0,this.triggerAsync("warning",{code:"W049",line:this.line,character:this["char"],data:[s]},t,function(){return!0}))}.bind(this);if(!this.prereg||"/"!==s)return null;for(r+=1,e=!1;r<n;)if(s=this.peek(r),a+=s,h+=s,o)"]"===s&&("\\"===this.peek(r-1)&&"\\"!==this.peek(r-2)||(o=!1)),"\\"===s&&(r+=1,s=this.peek(r),h+=s,a+=s,p()),r+=1;else{if("\\"===s){if(r+=1,s=this.peek(r),h+=s,a+=s,p(),"/"===s){r+=1;continue}if("["===s){r+=1;continue}}if("["!==s){if("/"===s){h=h.substr(0,h.length-1),e=!0,r+=1;break}r+=1}else o=!0,r+=1}if(!e)return this.trigger("error",{code:"E015",line:this.line,character:this.from}),void this.trigger("fatal",{line:this.line,from:this.from});for(;r<n&&(s=this.peek(r),/[gimy]/.test(s));)"y"===s?(u.inES6(!0)||this.triggerAsync("warning",{code:"W119",line:this.line,character:this["char"],data:["Sticky RegExp flag","6"]},t,function(){return!0}),a.indexOf("y")>-1&&(i="Duplicate RegExp flag")):c.push(s),a+=s,r+=1;try{new RegExp(h,c.join(""))}catch(f){i=f.message}return i&&(l=!0,this.trigger("error",{code:"E016",line:this.line,character:this["char"],data:[i]})),{type:m.RegExp,value:a,flags:c,isMalformed:l}},scanNonBreakingSpaces:function(){return u.option.nonbsp?this.input.search(/(\u00A0)/):-1},scanUnsafeChars:function(){return this.input.search(l.unsafeChars)},next:function(t){for(this.from=this["char"];/\s/.test(this.peek());)this.from+=1,this.skip();var e=this.scanComments(t)||this.scanStringLiteral(t)||this.scanTemplateLiteral(t);return e?e:(e=this.scanRegExp(t)||this.scanPunctuator()||this.scanKeyword()||this.scanIdentifier()||this.scanNumericLiteral(t),e?(this.skip(e.tokenLength||e.value.length),e):null)},nextLine:function(t){var e;if(this.line>=this.getLines().length)return!1;this.input=this.getLines()[this.line],this.line+=1,this["char"]=1,this.from=1;var i=this.input.trim(),r=function(){return h.some(arguments,function(t){return 0===i.indexOf(t)})},n=function(){return h.some(arguments,function(t){return i.indexOf(t,i.length-t.length)!==-1})};if(this.ignoringLinterErrors===!0&&(r("/*","//")||this.inComment&&n("*/")||(this.input="")),e=this.scanNonBreakingSpaces(),e>=0&&this.triggerAsync("warning",{code:"W125",line:this.line,character:e+1},t,function(){return!0}),this.input=this.input.replace(/\t/g,u.tab),e=this.scanUnsafeChars(),e>=0&&this.triggerAsync("warning",{code:"W100",line:this.line,character:e},t,function(){return!0}),!this.ignoringLinterErrors&&u.option.maxlen&&u.option.maxlen<this.input.length){var s=this.inComment||r.call(i,"//")||r.call(i,"/*"),a=!s||!l.maxlenException.test(i);a&&this.triggerAsync("warning",{code:"W101",line:this.line,character:this.input.length},t,function(){return!0})}return!0},token:function(){function t(t,e){if(!t.reserved)return!1;var i=t.meta;if(i&&i.isFutureReservedWord&&u.inES5()){if(!i.es5)return!1;if(i.strictOnly&&!u.option.strict&&!u.isStrict())return!1;if(e)return!1}return!0}for(var e,i=s(),r=function(e,r,n,s){var a;if("(endline)"!==e&&"(end)"!==e&&(this.prereg=!1),"(punctuator)"===e){switch(r){case".":case")":case"~":case"#":case"]":case"++":case"--":this.prereg=!1;break;default:this.prereg=!0}a=Object.create(u.syntax[r]||u.syntax["(error)"])}return"(identifier)"===e&&("return"!==r&&"case"!==r&&"yield"!==r&&"typeof"!==r&&"instanceof"!==r||(this.prereg=!0),h.has(u.syntax,r)&&(a=Object.create(u.syntax[r]||u.syntax["(error)"]),t(a,n&&"(identifier)"===e)||(a=null))),"(template)"!==e&&"(template middle)"!==e||(this.prereg=!0),a||(a=Object.create(u.syntax[e])),a.identifier="(identifier)"===e,a.type=a.type||e,a.value=r,a.line=this.line,a.character=this["char"],a.from=this.from,a.identifier&&s&&(a.raw_text=s.text||s.value),s&&s.startLine&&s.startLine!==this.line&&(a.startLine=s.startLine),s&&s.context&&(a.context=s.context),s&&s.depth&&(a.depth=s.depth),s&&s.isUnclosed&&(a.isUnclosed=s.isUnclosed),n&&a.identifier&&(a.isProperty=n),a.check=i.check,a}.bind(this);;){if(!this.input.length)return this.nextLine(i)?r("(endline)",""):this.exhausted?null:(this.exhausted=!0,r("(end)",""));if(e=this.next(i))switch(e.type){case m.StringLiteral:return this.triggerAsync("String",{line:this.line,"char":this["char"],from:this.from,startLine:e.startLine,startChar:e.startChar,value:e.value,quote:e.quote},i,function(){return!0}),r("(string)",e.value,null,e);case m.TemplateHead:return this.trigger("TemplateHead",{line:this.line,"char":this["char"],from:this.from,startLine:e.startLine,startChar:e.startChar,value:e.value}),r("(template)",e.value,null,e);case m.TemplateMiddle:return this.trigger("TemplateMiddle",{line:this.line,"char":this["char"],from:this.from,startLine:e.startLine,startChar:e.startChar,value:e.value}),r("(template middle)",e.value,null,e);case m.TemplateTail:return this.trigger("TemplateTail",{line:this.line,"char":this["char"],from:this.from,startLine:e.startLine,startChar:e.startChar,value:e.value}),r("(template tail)",e.value,null,e);case m.NoSubstTemplate:return this.trigger("NoSubstTemplate",{line:this.line,"char":this["char"],from:this.from,startLine:e.startLine,startChar:e.startChar,value:e.value}),r("(no subst template)",e.value,null,e);case m.Identifier:this.triggerAsync("Identifier",{line:this.line,"char":this["char"],from:this.from,name:e.value,raw_name:e.text,isProperty:"."===u.tokens.curr.id},i,function(){return!0});case m.Keyword:case m.NullLiteral:case m.BooleanLiteral:return r("(identifier)",e.value,"."===u.tokens.curr.id,e);case m.NumericLiteral:return e.isMalformed&&this.trigger("warning",{code:"W045",line:this.line,character:this["char"],data:[e.value]}),this.triggerAsync("warning",{code:"W114",line:this.line,character:this["char"],data:["0x-"]},i,function(){return 16===e.base&&u.jsonMode}),this.triggerAsync("warning",{code:"W115",line:this.line,character:this["char"]},i,function(){return u.isStrict()&&8===e.base&&e.isLegacy}),this.trigger("Number",{line:this.line,"char":this["char"],from:this.from,value:e.value,base:e.base,isMalformed:e.malformed}),r("(number)",e.value);case m.RegExp:return r("(regexp)",e.value);case m.Comment:if(u.tokens.curr.comment=!0,e.isSpecial)return{id:"(comment)",value:e.value,body:e.body,type:e.commentType,isSpecial:e.isSpecial,line:this.line,character:this["char"],from:this.from};break;case"":break;default:return r("(punctuator)",e.value)}else this.input.length&&(this.trigger("error",{code:"E024",line:this.line,character:this["char"],data:[this.peek()]}),this.input="")}}},e.Lexer=a,e.Context=k}});