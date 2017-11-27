montageDefine("b21e930","src/htmlparser",{dependencies:["./utils","ncname"],factory:function(e,t,n){"use strict";function r(e){return c(e,!0)}function a(e){var t=s.source+"(?:\\s*("+o(e)+")[ \\t\\n\\f\\r]*(?:"+l.join("|")+"))?";if(e.customAttrSurround){for(var n=[],r=e.customAttrSurround.length-1;r>=0;r--)n[r]="(?:("+e.customAttrSurround[r][0].source+")\\s*"+t+"\\s*("+e.customAttrSurround[r][1].source+"))";n.push("(?:"+t+")"),t="(?:"+n.join("|")+")"}return new RegExp("^\\s*"+t)}function o(e){return u.concat(e.customAttrAssign||[]).map(function(e){return"(?:"+e.source+")"}).join("|")}function i(e,t){function n(e){var t=e.match(d);if(t){var n={tagName:t[1],attrs:[]};e=e.slice(t[0].length);for(var r,a;!(r=e.match(f))&&(a=e.match(m));)e=e.slice(a[0].length),n.attrs.push(a);if(r)return n.unarySlash=r[1],n.rest=e.slice(r[0].length),n}}function r(e){var n=e.tagName,r=e.unarySlash;if(t.html5&&"p"===i&&E(n)&&o("",i),!t.html5&&!b(n))for(;i&&b(i);)o("",i);y(n)&&i===n&&o("",n);var a=v(n)||"html"===n&&"head"===i||!!r,c=e.attrs.map(function(e){function n(t){return c=e[t],a=e[t+1],"undefined"!=typeof a?'"':(a=e[t+2],"undefined"!=typeof a?"'":(a=e[t+3],"undefined"==typeof a&&w(r)&&(a=r),""))}var r,a,o,i,c,s,u=7;g&&e[0].indexOf('""')===-1&&(""===e[3]&&delete e[3],""===e[4]&&delete e[4],""===e[5]&&delete e[5]);var l=1;if(t.customAttrSurround)for(var m=0,d=t.customAttrSurround.length;m<d;m++,l+=u)if(r=e[l+1]){s=n(l+2),o=e[l],i=e[l+6];break}return!r&&(r=e[l])&&(s=n(l+1)),{name:r,value:a,customAssign:c||"=",customOpen:o||"",customClose:i||"",quote:s||""}});a||(l.push({tag:n,attrs:c}),i=n,r=""),t.start&&t.start(n,c,a,r)}function o(e,n){var r;if(n){var a=n.toLowerCase();for(r=l.length-1;r>=0&&l[r].tag.toLowerCase()!==a;r--);}else r=0;if(r>=0){for(var o=l.length-1;o>=r;o--)t.end&&t.end(l[o].tag,l[o].attrs,o>r||!e);l.length=r,i=r&&l[r-1].tag}else"br"===n.toLowerCase()?t.start&&t.start(n,[],!0,""):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,"",!0),t.end&&t.end(n,[]))}for(var i,c,s,u,l=[],m=a(t);e;){if(c=e,i&&C(i)){var x=i.toLowerCase(),A=D[x]||(D[x]=new RegExp("([\\s\\S]*?)</"+x+"[^>]*>","i"));e=e.replace(A,function(e,n){return"script"!==x&&"style"!==x&&"noscript"!==x&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""}),o("</"+x+">",x)}else{var O=e.indexOf("<");if(0===O){if(/^<!--/.test(e)){var S=e.indexOf("-->");if(S>=0){t.comment&&t.comment(e.substring(4,S)),e=e.substring(S+3),s="";continue}}if(/^<!\[/.test(e)){var k=e.indexOf("]>");if(k>=0){t.comment&&t.comment(e.substring(2,k+1),!0),e=e.substring(k+2),s="";continue}}var L=e.match(h);if(L){t.doctype&&t.doctype(L[0]),e=e.substring(L[0].length),s="";continue}var M=e.match(p);if(M){e=e.substring(M[0].length),M[0].replace(p,o),s="/"+M[1].toLowerCase();continue}var T=n(e);if(T){e=T.rest,r(T),s=T.tagName.toLowerCase();continue}}var N;O>=0?(N=e.substring(0,O),e=e.substring(O)):(N=e,e="");var j=n(e);j?u=j.tagName:(j=e.match(p),u=j?"/"+j[1]:""),t.chars&&t.chars(N,s,u),s=""}if(e===c)throw new Error("Parse Error: "+e)}t.partialMarkup||o()}var c=e("./utils").createMapFromString,s=/([^\s"'<>\/=]+)/,u=[/=/],l=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^ \t\n\f\r"'`=<>]+)/.source],m=function(){var t=e("ncname").source.slice(1,-1);return"((?:"+t+"\\:)?"+t+")"}(),d=new RegExp("^<"+m),f=/^\s*(\/?)>/,p=new RegExp("^<\\/"+m+"[^>]*>"),h=/^<!DOCTYPE [^>]+>/i,g=!1;"x".replace(/x(.)?/g,function(e,t){g=""===t});var v=r("area,base,basefont,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),b=r("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,noscript,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,svg,textarea,tt,u,var"),y=r("colgroup,dd,dt,li,option,p,td,tfoot,th,thead,tr,source"),w=r("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),C=r("script,style"),E=r("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),D={};t.HTMLParser=i,t.HTMLtoXML=function(e){var t="";return new i(e,{start:function(e,n,r){t+="<"+e;for(var a=0,o=n.length;a<o;a++)t+=" "+n[a].name+'="'+(n[a].value||"").replace(/"/g,"&#34;")+'"';t+=(r?"/":"")+">"},end:function(e){t+="</"+e+">"},chars:function(e){t+=e},comment:function(e){t+="<!--"+e+"-->"},ignore:function(e){t+=e}}),t},t.HTMLtoDOM=function(e,t){var n={html:!0,head:!0,body:!0,title:!0},r={link:"head",base:"head"};t?t=t.ownerDocument||t.getOwnerDocument&&t.getOwnerDocument()||t:"undefined"!=typeof DOMDocument?t=new DOMDocument:"undefined"!=typeof document&&document.implementation&&document.implementation.createDocument?t=document.implementation.createDocument("","",null):"undefined"!=typeof ActiveX&&(t=new ActiveXObject("Msxml.DOMDocument"));var a=[],o=t.documentElement||t.getDocumentElement&&t.getDocumentElement();if(!o&&t.createElement&&!function(){var e=t.createElement("html"),n=t.createElement("head");n.appendChild(t.createElement("title")),e.appendChild(n),e.appendChild(t.createElement("body")),t.appendChild(e)}(),t.getElementsByTagName)for(var c in n)n[c]=t.getElementsByTagName(c)[0];var s=n.body;return new i(e,{start:function(e,o,i){if(n[e])return void(s=n[e]);var c=t.createElement(e);for(var u in o)c.setAttribute(o[u].name,o[u].value);r[e]&&"boolean"!=typeof n[r[e]]?n[r[e]].appendChild(c):s&&s.appendChild&&s.appendChild(c),i||(a.push(c),s=c)},end:function(){a.length-=1,s=a[a.length-1]},chars:function(e){s.appendChild(t.createTextNode(e))},comment:function(){},ignore:function(){}}),t}}});