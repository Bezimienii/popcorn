montageDefine("533f456","lib/compressor",{dependencies:["./translator.js","./util.js"],factory:function(e,t,r){function s(e,t){this.name=s.extractMain(e),this.sides={top:null,right:null,bottom:null,left:null},this.imp=t?4:0}function o(){}s.props={margin:1,"margin-top":1,"margin-right":1,"margin-bottom":1,"margin-left":1,padding:1,"padding-top":1,"padding-right":1,"padding-bottom":1,"padding-left":1},s.extractMain=function(e){var t=e.indexOf("-");return t===-1?e:e.substr(0,t)},s.prototype.impSum=function(){var e=0,t=0;for(var r in this.sides)this.sides[r]&&(t++,this.sides[r].imp&&e++);return e===t?e:0},s.prototype.add=function(e,t,r,s){var o,n,i,l,a,c=this.sides,p=[],s=s?1:0,h=!1;if((n=e.lastIndexOf("-"))!==-1){if(l=e.substr(n+1),l in c)return(!(o=c[l])||s&&!o.imp)&&(c[l]={s:s?t.substring(0,t.length-10):t,t:[r[0]],imp:s},"unary"===r[0][1]&&c[l].t.push(r[1])),!0}else if(e===this.name){for(n=0;n<r.length;n++)switch(i=r[n],a=p[p.length-1],i[1]){case"unary":p.push({s:i[2],t:[i],imp:s}),h=!0;break;case"number":case"ident":h?(a.t.push(i),a.s+=i[2]):p.push({s:i[2],t:[i],imp:s}),h=!1;break;case"percentage":h?(a.t.push(i),a.s+=i[2][2]+"%"):p.push({s:i[2][2]+"%",t:[i],imp:s}),h=!1;break;case"dimension":h?(a.t.push(i),a.s+=i[2][2]+i[3][2]):p.push({s:i[2][2]+i[3][2],t:[i],imp:s}),h=!1;break;case"s":case"comment":case"important":break;default:return!1}return!(p.length>4)&&(p[1]||(p[1]=p[0]),p[2]||(p[2]=p[0]),p[3]||(p[3]=p[1]),c.top||(c.top=p[0]),c.right||(c.right=p[1]),c.bottom||(c.bottom=p[2]),c.left||(c.left=p[3]),!0)}},s.prototype.isOkToMinimize=function(){var e,t=this.sides,r=/\\9$/;return!!(t.top&&t.right&&t.bottom&&t.left)&&(e=t.top.imp+t.right.imp+t.bottom.imp+t.left.imp,!(r.test(t.top.s)||r.test(t.right.s)||r.test(t.bottom.s)||r.test(t.left.s))&&(0===e||4===e||e===this.imp))},s.prototype.getValue=function(){var e=this.sides,t=[e.top,e.right,e.bottom,e.left],r=[{},"value"];e.left.s===e.right.s&&(t.length--,e.bottom.s===e.top.s&&(t.length--,e.right.s===e.top.s&&t.length--));for(var s=0;s<t.length-1;s++)r=r.concat(t[s].t),r.push([{s:" "},"s"," "]);return r=r.concat(t[s].t),this.impSum()&&r.push([{s:"!important"},"important"]),r},s.prototype.getProperty=function(){return[{s:this.name},"property",[{s:this.name},"ident",this.name]]},s.prototype.getString=function(){for(var e=this.getProperty(),t=this.getValue().slice(2),r=e[0].s+":",s=0;s<t.length;s++)r+=t[s][0].s;return r};var n=["deg","grad","rad","turn","s","ms","Hz","kHz","dpi","dpcm","dppx"];o.prototype.init=function(){this.props={},this.shorts={},this.shorts2={},this.ccrules={},this.crules={},this.prules={},this.frrules={},this.msrules={},this.csrules={},this.rbrules={},this.rjrules={},this.rrrules={},this.frules={},this.initRules(this.crules,this.defCCfg),this.initRules(this.ccrules,this.cleanCfg),this.initRules(this.frrules,this.frCfg),this.initRules(this.prules,this.preCfg),this.initRules(this.msrules,this.msCfg),this.initRules(this.csrules,this.csCfg),this.initRules(this.rbrules,this.defRBCfg),this.initRules(this.rjrules,this.defRJCfg),this.initRules(this.rrrules,this.defRRCfg),this.initRules(this.frules,this.defFCfg),this.shortGroupID=0,this.lastShortGroupID=0,this.lastShortSelector=0},o.prototype.initRules=function(e,t){var r,s,o,n=this.order,i=this.profile,l=[];for(s=0;s<n.length;s++)n[s]in t&&l.push(n[s]);for(l.length||(l=n),s=0;s<l.length;s++){r=i[l[s]];for(o in r)e[o]?e[o].push(l[s]):e[o]=[l[s]]}},o.prototype.cleanCfg={cleanComment:1},o.prototype.defCCfg={cleanCharset:1,cleanImport:1,cleanWhitespace:1,cleanDecldelim:1,compressNumber:1,cleanUnary:1,compressColor:1,compressDimension:1,compressString:1,compressFontWeight:1,compressFont:1,compressBackground:1,cleanEmpty:1},o.prototype.defRBCfg={restructureBlock:1},o.prototype.defRJCfg={rejoinRuleset:1,cleanEmpty:1},o.prototype.defRRCfg={restructureRuleset:1,cleanEmpty:1},o.prototype.defFCfg={cleanEmpty:1,delimSelectors:1,delimBlocks:1},o.prototype.preCfg={destroyDelims:1,preTranslate:1},o.prototype.msCfg={markShorthands:1},o.prototype.frCfg={freezeRulesets:1},o.prototype.csCfg={cleanShorthands:1,cleanEmpty:1},o.prototype.order=["cleanCharset","cleanImport","cleanComment","cleanWhitespace","compressNumber","cleanUnary","compressColor","compressDimension","compressString","compressFontWeight","compressFont","compressBackground","freezeRulesets","destroyDelims","preTranslate","markShorthands","cleanShorthands","restructureBlock","rejoinRuleset","restructureRuleset","cleanEmpty","delimSelectors","delimBlocks"],o.prototype.profile={cleanCharset:{atrules:1},cleanImport:{atrules:1},cleanWhitespace:{s:1},compressNumber:{number:1},cleanUnary:{unary:1},compressColor:{vhash:1,funktion:1,ident:1},compressDimension:{dimension:1},compressString:{string:1},compressFontWeight:{declaration:1},compressFont:{declaration:1},compressBackground:{declaration:1},cleanComment:{comment:1},cleanDecldelim:{block:1},cleanEmpty:{ruleset:1,atruleb:1,atruler:1},destroyDelims:{decldelim:1,delim:1},preTranslate:{declaration:1,property:1,simpleselector:1,filter:1,value:1,number:1,percentage:1,dimension:1,ident:1},restructureBlock:{block:1},rejoinRuleset:{ruleset:1},restructureRuleset:{ruleset:1},delimSelectors:{selector:1},delimBlocks:{block:1},markShorthands:{block:1},cleanShorthands:{declaration:1},freezeRulesets:{ruleset:1}},o.prototype.isContainer=function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return!0},o.prototype.process=function(e,t,r,s,o){var n=t[1];if(n&&e[n])for(var i,l,a=e[n],c=t,l=(this.order,0);l<a.length;l++){if(i=this[a[l]](c,n,r,s,o),null===i)return null;void 0!==i&&(c=i)}return c},o.prototype.compress=function(e,t){e=e||["stylesheet"],this.init(),this.info=!0;var r,s,o,n,a,c="string"!=typeof e[0]?e:this.injectInfo([e])[0],p=1e11,h=this.findProtectedComment(e);if(c=this.walk(this.ccrules,c,"/0"),c=this.walk(this.crules,c,"/0"),c=this.walk(this.prules,c,"/0"),c=this.walk(this.frrules,c,"/0"),s=i.translate(l(c)).length,!t){a=this.copyArray(c),c=this.walk(this.rjrules,c,"/0"),this.disjoin(c),c=this.walk(this.msrules,c,"/0"),c=this.walk(this.csrules,c,"/0"),c=this.walk(this.rbrules,c,"/0");do r=p,o=this.copyArray(c),c=this.walk(this.rjrules,c,"/0"),c=this.walk(this.rrrules,c,"/0"),p=i.translate(l(c)).length,n=this.copyArray(c);while(r>p);s<r&&s<p?c=a:r<p&&(c=o)}return c=this.walk(this.frules,c,"/0"),h&&c.splice(2,0,h),c},o.prototype.findProtectedComment=function(e){for(var t,r=2;r<e.length;r++){if(t=e[r],"comment"===t[1]&&t[2].length>0&&"!"===t[2].charAt(0))return t;if("s"!==t[1])return}},o.prototype.injectInfo=function(e){for(var t,r=e.length-1;r>-1;r--)t=e[r],t&&Array.isArray(t)&&(this.isContainer(t)&&(t=this.injectInfo(t)),t.splice(0,0,{}));return e},o.prototype.disjoin=function(e){for(var t,r,s,o,n=e.length-1;n>-1;n--){if(t=e[n],t&&Array.isArray(t)&&"ruleset"===t[1]&&(t[0].shortGroupID=this.shortGroupID++,r=t[2],r.length>3)){o=r.slice(0,2);for(var i=r.length-1;i>1;i--)s=this.copyArray(t),s[2]=o.concat([r[i]]),s[2][0].s=r[i][0].s,e.splice(n+1,0,s);e.splice(n,1)}this.isContainer(t)&&this.disjoin(t)}},o.prototype.walk=function(e,t,r){for(var s,o,n=t.length-1;n>-1;n--)s=t[n],s&&Array.isArray(s)&&(s[0].parent=t,this.isContainer(s)&&(s=this.walk(e,s,r+"/"+n)),null===s?t.splice(n,1):(o=this.process(e,s,t,n,r))?t[n]=o:null===o&&t.splice(n,1));return t.length?t:null},o.prototype.freezeRulesets=function(e,t,r,s){var o=e[0],n=e[2];return o.freeze=this.freezeNeeded(n),o.freezeID=this.selectorSignature(n),o.pseudoID=this.composePseudoID(n),o.pseudoSignature=this.pseudoSelectorSignature(n,this.allowedPClasses,!0),this.markSimplePseudo(n),e},o.prototype.markSimplePseudo=function(e){for(var t,r={},s=2;s<e.length;s++)t=e[s],t[0].pseudo=this.containsPseudo(t),t[0].sg=r,r[t[0].s]=1},o.prototype.composePseudoID=function(e){for(var t,r=[],s=2;s<e.length;s++)t=e[s],this.containsPseudo(t)&&r.push(t[0].s);return r.sort(),r.join(",")},o.prototype.containsPseudo=function(e){for(var t=2;t<e.length;t++)switch(e[t][1]){case"pseudoc":case"pseudoe":case"nthselector":if(!(e[t][2][2]in this.notFPClasses))return!0}},o.prototype.selectorSignature=function(e){for(var t=[],r=2;r<e.length;r++)t.push(i.translate(l(e[r])));return t.sort(),t.join(",")},o.prototype.pseudoSelectorSignature=function(e,t,r){var s,o=[],n={},i=!1;t=t||{};for(var l=2;l<e.length;l++){s=e[l];for(var a=2;a<s.length;a++)switch(s[a][1]){case"pseudoc":case"pseudoe":case"nthselector":s[a][2][2]in t?i=!0:n[s[a][2][2]]=1}}for(var c in n)o.push(c);return o.sort(),o.join(",")+(r?"":i)},o.prototype.notFPClasses={link:1,visited:1,hover:1,active:1,"first-letter":1,"first-line":1},o.prototype.notFPElements={"first-letter":1,"first-line":1},o.prototype.freezeNeeded=function(e){for(var t,r=2;r<e.length;r++){t=e[r];for(var s=2;s<t.length;s++)switch(t[s][1]){case"pseudoc":if(!(t[s][2][2]in this.notFPClasses))return!0;break;case"pseudoe":if(!(t[s][2][2]in this.notFPElements))return!0;break;case"nthselector":return!0}}return!1},o.prototype.cleanCharset=function(e,t,r,s){if("charset"===e[2][2][2])for(s-=1;s>1;s--)if("s"!==r[s][1]&&"comment"!==r[s][1])return null},o.prototype.cleanImport=function(e,t,r,s){var o;for(s-=1;s>1;s--)if(o=r[s][1],"s"!==o&&"comment"!==o){if("atrules"!==o)return null;if(o=r[s][2][2][2],"import"!==o&&"charset"!==o)return null}},o.prototype.cleanComment=function(e,t,r,s){var o="braces"===r[1]&&4===s||"braces"!==r[1]&&2===s?null:r[s-1][1],n=s===r.length-1?null:r[s+1][1];return null===n||null===o?null:this._cleanComment(n)||this._cleanComment(o)?null:void 0},o.prototype._cleanComment=function(e){switch(e){case"s":case"operator":case"attrselector":case"block":case"decldelim":case"ruleset":case"declaration":case"atruleb":case"atrules":case"atruler":case"important":case"nth":case"combinator":return!0}},o.prototype.nextToken=function(e,t,r,s){for(var o,n;r<e.length;r++)if(o=e[r],Array.isArray(o)){if(n=o[1],n===t)return o;if(s&&"s"!==n)return}},o.prototype.cleanWhitespace=function(e,t,r,s){var o="braces"===r[1]&&4===s||"braces"!==r[1]&&2===s?null:r[s-1][1],n=s===r.length-1?null:r[s+1][1];if("unknown"===n)e[2]="\n";else{if(("atrulerq"!==r[1]||o)&&!this.issue16(r,s)&&!this.issue165(r,o,n)&&!this.issue134(o,n)){if(null===n||null===o)return null;if(this._cleanWhitespace(n,!1)||this._cleanWhitespace(o,!0))return null}e[2]=" "}return e},o.prototype.issue16=function(e,t){return 2!==t&&t!==e.length-1&&"uri"===e[t-1][1]},o.prototype.issue165=function(e,t,r){return"atrulerq"===e[1]&&"braces"===t&&"ident"===r},o.prototype.issue134=function(e,t){return"funktion"===e&&("funktion"===t||"vhash"===t)},o.prototype._cleanWhitespace=function(e,t){switch(e){case"s":case"operator":case"attrselector":case"block":case"decldelim":case"ruleset":case"declaration":case"atruleb":case"atrules":case"atruler":case"important":case"nth":case"combinator":return!0}if(t)switch(e){case"funktion":case"braces":case"uri":return!0}},o.prototype.cleanDecldelim=function(e){for(var t=e.length-1;t>1;t--)"decldelim"===e[t][1]&&"declaration"!==e[t+1][1]&&e.splice(t,1);return"decldelim"===e[2][1]&&e.splice(2,1),e},o.prototype.compressNumber=function(e,t,r,s){var o=e[2];return/^0*/.test(o)&&(o=o.replace(/^0+/,"")),/\.0*$/.test(o)&&(o=o.replace(/\.0*$/,"")),/\..*[1-9]+0+$/.test(o)&&(o=o.replace(/0+$/,"")),"."!==o&&""!==o||(o="0"),e[2]=o,e[0].s=o,e},o.prototype.findDeclaration=function(e){for(var t=e;(t=t[0].parent)&&"declaration"!==t[1];);return t},o.prototype.cleanUnary=function(e,t,r,s){var o=r[s+1];return o&&"number"===o[1]&&"0"===o[2]?null:e},o.prototype.compressColor=function(e,t,r,s){switch(t){case"vhash":return this.compressHashColor(e);case"funktion":return this.compressFunctionColor(e);case"ident":return this.compressIdentColor(e,t,r,s)}},o.prototype.compressIdentColor=function(e,t,r){var s={yellow:"ff0",fuchsia:"f0f",white:"fff",black:"000",blue:"00f",aqua:"0ff"},o={value:1,functionBody:1},n=e[2].toLowerCase();if(r[1]in o&&n in s)return[{},"vhash",s[n]]},o.prototype.compressHashColor=function(e){return this._compressHashColor(e[2],e[0])},o.prototype._compressHashColor=function(e,t){var r={f00:"red",c0c0c0:"silver",808080:"gray",800000:"maroon",800080:"purple","008000":"green",808000:"olive","000080":"navy","008080":"teal"},s=e;return e=e.toLowerCase(),6===e.length&&e.charAt(0)===e.charAt(1)&&e.charAt(2)===e.charAt(3)&&e.charAt(4)===e.charAt(5)&&(e=e.charAt(0)+e.charAt(2)+e.charAt(4)),r[e]?[t,"string",r[e]]:[t,"vhash",e.length<s.length?e:s]},o.prototype.compressFunctionColor=function(e){var t,r,s,o=[],n="";if("rgb"===e[2][2]){for(s=e[3],t=2;t<s.length;t++)if(r=s[t][1],"number"===r)o.push(s[t]);else if("operator"!==r){o=[];break}var i=e[0].parent,l=i.indexOf(e),a=i[l+1]&&"s"!=i[l+1][1];if(3===o.length&&(n+=1===(r=Number(o[0][2]).toString(16)).length?"0"+r:r,n+=1===(r=Number(o[1][2]).toString(16)).length?"0"+r:r,n+=1===(r=Number(o[2][2]).toString(16)).length?"0"+r:r,6===n.length)){var c=this._compressHashColor(n,{});return a&&(c[2]+=" "),c}}},o.prototype.compressDimension=function(e){if("0"===e[2][2]){if(n.indexOf(e[3][2])>=0)return;return e[2]}},o.prototype.compressString=function(e,t,r){for(var s,o=e[2],n="",i=0;i<o.length;i++)s=o.charAt(i),"\\"===s&&"\n"===o.charAt(i+1)?i++:n+=s;if(o.length!==n.length)return[{},"string",n]},o.prototype.compressFontWeight=function(e){var t=e[2],r=e[3];if(t[2][2].indexOf("font-weight")!==-1&&"ident"===r[2][1])return"normal"===r[2][2]?r[2]=[{},"number","400"]:"bold"===r[2][2]&&(r[2]=[{},"number","700"]),e},o.prototype.compressFont=function(e){var t,r,s,o=e[2],n=e[3];if(/font$/.test(o[2][2])&&n.length){for(n.splice(2,0,[{},"s",""]),t=n.length-1;t>2;t--)r=n[t],"ident"===r[1]&&(r=r[2],"bold"===r?n[t]=[{},"number","700"]:"normal"===r?(s=n[t-1],"operator"===s[1]&&"/"===s[2]?n.splice(--t,2):n.splice(t,1),"s"===n[t-1][1]&&n.splice(--t,1)):"medium"===r&&n[t+1]&&"/"!==n[t+1][2]&&(n.splice(t,1),"s"===n[t-1][1]&&n.splice(--t,1)));return n.length>2&&"s"===n[2][1]&&n.splice(2,1),2===n.length&&n.push([{},"ident","normal"]),e}},o.prototype.compressBackground=function(e){var t,r,s=e[2],o=e[3],n="important"===o[o.length-1][1]?3:2;if(/background$/.test(s[2][2])&&o.length){for(o.splice(2,0,[{},"s",""]),t=o.length-1;t>n;t--)r=o[t],"ident"===r[1]&&(r=r[2],"transparent"!==r&&"none"!==r&&"repeat"!==r&&"scroll"!==r||(o.splice(t,1),"s"===o[t-1][1]&&o.splice(--t,1)));return o.length>2&&"s"===o[2][1]&&o.splice(2,1),2===o.length&&o.splice(2,0,[{},"number","0"],[{},"s"," "],[{},"number","0"]),e}},o.prototype.cleanEmpty=function(e,t){switch(t){case"ruleset":if(2===e[3].length)return null;break;case"atruleb":if(e[e.length-1].length<3)return null;break;case"atruler":if(e[4].length<3)return null}},o.prototype.destroyDelims=function(){return null},o.prototype.preTranslate=function(e){return e[0].s=i.translate(l(e)),e},o.prototype.markShorthands=function(e,t,r,o,n){if("ruleset"===r[1])var i=r[2][2][0].s,l=r[0].freeze,a=r[0].freezeID;else var i="",l=!1,a="fake";for(var c,p,h,u,f,d,g,m,y=this.pathUp(n)+"/"+(l?"&"+a+"&":"")+i+"/",b=r[0].shortGroupID,v=e.length-1;v>-1;v--)if(g=!0,c=e[v],"declaration"===c[1]&&(h=c[3],u="important"===h[h.length-1][1],p=c[2][0].s,c[0].id=n+"/"+v,p in s.props)){f=y+s.extractMain(p);var k=this.shorts2[f]||[];m=0===k.length?0:k.length-1,this.lastShortSelector&&i!==this.lastShortSelector&&b!==this.lastShortGroupID||k.length&&(d=k[m],g=!1),g&&(c[0].replaceByShort=!0,c[0].shorthandKey={key:f,i:m},d=new s(p,u),k.push(d)),d.invalid||(c[0].removeByShort=!0,c[0].shorthandKey={key:f,i:m},d.add(p,h[0].s,h.slice(2),u)),this.shorts2[f]=k,this.lastShortSelector=i,this.lastShortGroupID=b}return e},o.prototype.cleanShorthands=function(e){if(e[0].removeByShort||e[0].replaceByShort){var t,r,s=e[0].shorthandKey;if(t=this.shorts2[s.key][s.i],!t.invalid&&t.isOkToMinimize())return e[0].replaceByShort?(r=[{},"declaration",t.getProperty(),t.getValue()],r[0].s=i.translate(l(r)),r):null}},o.prototype.dontRestructure={src:1,clip:1,display:1},o.prototype.restructureBlock=function(e,t,r,s,o){if("ruleset"===r[1])var n=this.props,i=r[2][2][0].pseudo,l=r[2][2][0].s,a=r[0].freeze,c=r[0].freezeID,p=r[0].pseudoID,h=r[2][2][0].sg;else var n={},i=!1,l="",a=!1,c="fake",p="fake",h={};for(var u,f,d,g,m,y,b=this.pathUp(o)+"/"+l+"/",v=e.length-1;v>-1;v--)u=e[v],"declaration"===u[1]&&(d=u[3],g="important"===d[d.length-1][1],f=u[2][0].s,y=this.buildPPre(b,f,d,u,a),u[0].id=o+"/"+v,!this.dontRestructure[f]&&(m=n[y])?(i&&c===m.freezeID||!i&&p===m.pseudoID||i&&p===m.pseudoID&&this.hashInHash(h,m.sg))&&(g&&!m.imp?(n[y]={block:e,imp:g,id:u[0].id,sg:h,freeze:a,path:o,freezeID:c,pseudoID:p},this.deleteProperty(m.block,m.id)):e.splice(v,1)):this.needless(f,n,b,g,d,u,a)?e.splice(v,1):n[y]={block:e,imp:g,id:u[0].id,sg:h,freeze:a,path:o,freezeID:c,pseudoID:p});return e},o.prototype.buildPPre=function(e,t,r,s,o){var n=o?"ft:":"ff:";if(t.indexOf("background")!==-1)return n+e+s[0].s;for(var i=r.slice(2),l=[0,0,0,0],a="",c=0;c<i.length;c++)switch(a||(a=this.getVendorIDFromToken(i[c])),i[c][1]){case"vhash":case"ident":l[0]=1;break;case"funktion":switch(i[c][2][2]){case"rgb":l[0]=1;break;case"hsl":l[1]=1;break;case"hsla":l[2]=1;break;case"rgba":l[3]=1}}return n+e+t+l.join("")+(a?a:"")},o.prototype.vendorID={"-o-":"o","-moz-":"m","-webkit-":"w","-ms-":"i","-epub-":"e","-apple-":"a","-xv-":"x","-wap-":"p"},o.prototype.getVendorIDFromToken=function(e){var t;switch(e[1]){case"ident":if(t=this.getVendorFromString(e[2]))return this.vendorID[t];break;case"funktion":if(t=this.getVendorFromString(e[2][2]))return this.vendorID[t]}},o.prototype.getVendorFromString=function(e){var t,r=e.charAt(0);return"-"===r&&(t=e.indexOf("-",2))!==-1?e.substr(0,t+1):""},o.prototype.deleteProperty=function(e,t){for(var r,s=e.length-1;s>1;s--)if(r=e[s],Array.isArray(r)&&"declaration"===r[1]&&r[0].id===t)return void e.splice(s,1)},o.prototype.nlTable={"border-width":["border"],"border-style":["border"],"border-color":["border"],"border-top":["border"],"border-right":["border"],"border-bottom":["border"],"border-left":["border"],"border-top-width":["border-top","border-width","border"],"border-right-width":["border-right","border-width","border"],"border-bottom-width":["border-bottom","border-width","border"],"border-left-width":["border-left","border-width","border"],"border-top-style":["border-top","border-style","border"],"border-right-style":["border-right","border-style","border"],"border-bottom-style":["border-bottom","border-style","border"],"border-left-style":["border-left","border-style","border"],"border-top-color":["border-top","border-color","border"],"border-right-color":["border-right","border-color","border"],"border-bottom-color":["border-bottom","border-color","border"],"border-left-color":["border-left","border-color","border"],"margin-top":["margin"],"margin-right":["margin"],"margin-bottom":["margin"],"margin-left":["margin"],"padding-top":["padding"],"padding-right":["padding"],"padding-bottom":["padding"],"padding-left":["padding"],"font-style":["font"],"font-variant":["font"],"font-weight":["font"],"font-size":["font"],"font-family":["font"],"list-style-type":["list-style"],"list-style-position":["list-style"],"list-style-image":["list-style"]},o.prototype.needless=function(e,t,r,s,o,n,i){var l=e.charAt(0);"*"===l||"_"===l||"$"===l?e=e.substr(1):"/"===l&&"/"===e.charAt(1)?(l="//",e=e.substr(2)):l="";var a,c,p,h=this.getVendorFromString(e),u=e.substr(h.length);if(u in this.nlTable){a=this.nlTable[u];for(var f=0;f<a.length;f++)if(p=this.buildPPre(r,l+h+a[f],o,n,i),c=t[p])return!s||c.imp}},o.prototype.rejoinRuleset=function(e,t,r,s){var o,n,a,c=2===s||"unknown"===r[s-1][1]?null:r[s-1],p=c?c[2].slice(2):[],h=c?c[3].slice(2):[],u=e[2].slice(2),f=e[3].slice(2);if(!f.length)return null;if(p.length&&h.length&&e[0].pseudoSignature==c[0].pseudoSignature){if(e[1]!==c[1])return;if(o=this.getHash(p),n=this.getHash(u),this.equalHash(n,o))return c[3]=c[3].concat(e[3].splice(2)),null;if(this.okToJoinByProperties(e,c)&&(a=this.analyze(e,c),!a.ne1.length&&!a.ne2.length))return c[2]=this.cleanSelector(c[2].concat(e[2].splice(2))),c[2][0].s=i.translate(l(c[2])),null}},o.prototype.okToJoinByProperties=function(e,t){var r=e[0],s=t[0];return r.freezeID===s.freezeID||(r.pseudoID===s.pseudoID||(r.freeze&&s.freeze?this.pseudoSelectorSignature(e[2],this.allowedPClasses)===this.pseudoSelectorSignature(t[2],this.allowedPClasses):!(r.freeze||s.freeze)))},o.prototype.allowedPClasses={after:1,before:1},o.prototype.containsOnlyAllowedPClasses=function(e){for(var t,r=2;r<e.length;r++){t=e[r];for(var s=2;s<t.length;s++)if(!("pseudoc"!=t[s][1]&&"pseudoe"!=t[s][1]||t[s][2][2]in this.allowedPClasses))return!1}return!0},o.prototype.restructureRuleset=function(e,t,r,s){var o,n,a=2===s||"unknown"===r[s-1][1]?null:r[s-1],c=a?a[2].slice(2):[],p=a?a[3].slice(2):[],h=e[3].slice(2);if(!h.length)return null;if(c.length&&p.length&&e[0].pseudoSignature==a[0].pseudoSignature){if(e[1]!==a[1])return;if(o=this.analyze(e,a),o.eq.length&&(o.ne1.length||o.ne2.length))if(o.ne1.length&&!o.ne2.length){var u=e[2].slice(2),f=i.translate(l(e[2])),d=f.length+u.length-1,g=this.calcLength(o.eq)+o.eq.length-1;if(d<g)return a[2]=this.cleanSelector(a[2].concat(e[2].slice(2))),e[3].splice(2),e[3]=e[3].concat(o.ne1),e}else if(o.ne2.length&&!o.ne1.length){var u=a[2].slice(2),f=i.translate(l(a[2])),d=f.length+u.length-1,g=this.calcLength(o.eq)+o.eq.length-1;if(d<g)return e[2]=this.cleanSelector(a[2].concat(e[2].slice(2))),a[3].splice(2),a[3]=a[3].concat(o.ne2),e}else{var u=this.cleanSelector(a[2].concat(e[2].slice(2))),f=i.translate(l(u)),m=f.length+u.length-1+2,g=this.calcLength(o.eq)+o.eq.length-1;if(g>=m)return u[0].s=f,n=[{f:0,l:0},"ruleset",u,[{f:0,l:0},"block"].concat(o.eq)],e[3].splice(2),e[3]=e[3].concat(o.ne1),a[3].splice(2),a[3]=a[3].concat(o.ne2),r.splice(s,0,n),n}}},o.prototype.calcLength=function(e){for(var t=0,r=0;r<e.length;r++)t+=e[r][0].s.length;return t},o.prototype.cleanSelector=function(e){if(2===e.length)return null;for(var t,r={},s=2;s<e.length;s++)t=e[s][0].s,t in r?(e.splice(s,1),s--):r[t]=1;return e},o.prototype.analyze=function(e,t){var r={eq:[],ne1:[],ne2:[]};if(e[1]!==t[1])return r;var s,o,n,i,l=e[3],a=t[3],c=l.slice(2),p=a.slice(2);for(s=this.getHash(c),o=this.getHash(p),n=0;n<c.length;n++)i=c[n],i[0].s in o?r.eq.push(i):r.ne1.push(i);for(n=0;n<p.length;n++)i=p[n],i[0].s in s||r.ne2.push(i);return r},o.prototype.equalHash=function(e,t){var r;for(r in e)if(!(r in t))return!1;for(r in t)if(!(r in e))return!1;return!0},o.prototype.getHash=function(e){for(var t={},r=0;r<e.length;r++)t[e[r][0].s]=1;return t},o.prototype.hashInHash=function(e,t){for(var r in e)if(!(r in t))return!1;return!0},o.prototype.delimSelectors=function(e){for(var t=e.length-1;t>2;t--)e.splice(t,0,[{},"delim"])},o.prototype.delimBlocks=function(e){for(var t=e.length-1;t>2;t--)e.splice(t,0,[{},"decldelim"])},o.prototype.copyArray=function(e){for(var t,r=[],s=0;s<e.length;s++)t=e[s],Array.isArray(t)?r.push(this.copyArray(t)):"object"==typeof t?r.push(this.copyObject(t)):r.push(t);return r},o.prototype.copyObject=function(e){var t={};for(var r in e)t[r]=e[r];return t},o.prototype.pathUp=function(e){return e.substr(0,e.lastIndexOf("/"))};var i=e("./translator.js").translator(),l=e("./util.js").cleanInfo;t.compress=function(e,t){return(new o).compress(e,t)}}});