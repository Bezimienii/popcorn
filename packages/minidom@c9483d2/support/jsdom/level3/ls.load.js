montageDefine("c9483d2","support/jsdom/level3/ls",{dependencies:["./core","./events"],factory:function(t,e,n){var o=t("./core").dom.level3.core,c=t("./events").dom.level3.events,r={};r.LSException=function(t){this.code=t},r.LSException.prototype={PARSE_ERR:81,SERIALIZE_ERR:82},r.DOMImplementationLS=function(){};var i={MODE_SYNCHRONOUS:1,MODE_ASYNCHRONOUS:2,createLSParser:function(t,e){return new r.LSParser(t,e)},createLSSerializer:function(){return new r.LSSerializer},createLSInput:function(){return new r.LSInput},createLSOutput:function(){return new r.LSOutput}};Object.keys(i).forEach(function(t,e){o.DOMImplementation.prototype[t]=i[t]}),r.DOMImplementationLS.prototype=i,o.Document.getFeature=function(){return i},r.LSParser=function(){this._domConfig=new o.DOMConfiguration},r.LSParser.prototype={get domConfig(){return this._domConfig},get filter(){return this._filter||null},set filter(t){this._filter=t},get async(){return this._async},get busy(){return this._busy},parse:function(t){var e=new o.Document;return e._inputEncoding="UTF-16",e},parseURI:function(t){return new o.Document},ACTION_APPEND_AS_CHILDREN:1,ACTION_REPLACE_CHILDREN:2,ACTION_INSERT_BEFORE:3,ACTION_INSERT_AFTER:4,ACTION_REPLACE:5,parseWithContext:function(t,e,n){return new o.Node},abort:function(){}},r.LSInput=function(){},r.LSInput.prototype={get characterStream(){return this._characterStream||null},set characterStream(t){this._characterStream=t},get byteStream(){return this._byteStream||null},set byteStream(t){this._byteStream=t},get stringData(){return this._stringData||null},set stringData(t){this._stringData=t},get systemId(){return this._systemId||null},set systemId(t){this._systemId=t},get publicId(){return this._publicId||null},set publicId(t){this._publicId=t},get baseURI(){return this._baseURI||null},set baseURI(t){this._baseURI=t},get encoding(){return this._encoding||null},set encoding(t){this._encoding=t},get certifiedText(){return this._certifiedText||null},set certifiedText(t){this._certifiedText=t}},r.LSResourceResolver=function(){},r.LSResourceResolver.prototype.resolveResource=function(t,e,n,o,c){return new r.LSInput},r.LSParserFilter=function(){},r.LSParserFilter.prototype={FILTER_ACCEPT:1,FILTER_REJECT:2,FILTER_SKIP:3,FILTER_INTERRUPT:4,get whatToShow(){return this._whatToShow},startElement:function(t){return 0},acceptNode:function(t){return t}},r.LSSerializer=function(){this._domConfig=new o.DOMConfiguration},r.LSSerializer.prototype={get domConfig(){return this._domConfig},get newLine(){return this._newLine||null},set newLine(t){this._newLine=t},get filter(){return this._filter||null},set filter(t){this._filter=t},write:function(t,e){return!0},writeToURI:function(t,e){return!0},writeToString:function(t){return""}},r.LSOutput=function(){},r.LSOutput.prototype={get characterStream(){return this._characterStream||null},set characterStream(t){this._characterStream=t},get byteStream(){return this._byteStream||null},set byteStream(t){this._byteStream=t},get systemId(){return this._systemId||null},set systemId(t){this._systemId=t},get encoding(){return this._encoding||null},set encoding(t){this._encoding=t}},r.LSProgressEvent=function(){},r.LSProgressEvent.prototype={get input(){return this._input},get position(){return this._position},get totalSize(){return this._totalSize}},r.LSProgressEvent.prototype.__proto__=c.Event,r.LSLoadEvent=function(){},r.LSLoadEvent.prototype={get newDocument(){return this._newDocument},get input(){return this._input}},r.LSLoadEvent.prototype.__proto__=c.Event,r.LSSerializerFilter=function(){},r.LSSerializerFilter.prototype={get whatToShow(){return this._whatToShow}},n.exports.dom={level3:{ls:r}}}});