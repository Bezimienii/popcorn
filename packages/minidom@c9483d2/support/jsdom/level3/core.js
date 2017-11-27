var core=require("../level2/core").dom.level2.core,HtmlToDom=require("../browser/htmltodom").HtmlToDom,domToHtml=require("../browser/domtohtml").domToHtml,htmlencoding=require("../browser/htmlencoding"),HTMLEncode=htmlencoding.HTMLEncode,HTMLDecode=htmlencoding.HTMLDecode;core=Object.create(core),core.VALIDATION_ERR=16,core.TYPE_MISMATCH_ERR=17,core.DOMImplementation.prototype.getFeature=function(e,t){};var DOCUMENT_POSITION_DISCONNECTED=core.Node.prototype.DOCUMENT_POSITION_DISCONNECTED=1,DOCUMENT_POSITION_PRECEDING=core.Node.prototype.DOCUMENT_POSITION_PRECEDING=2,DOCUMENT_POSITION_FOLLOWING=core.Node.prototype.DOCUMENT_POSITION_FOLLOWING=4,DOCUMENT_POSITION_CONTAINS=core.Node.prototype.DOCUMENT_POSITION_CONTAINS=8,DOCUMENT_POSITION_CONTAINED_BY=core.Node.prototype.DOCUMENT_POSITION_CONTAINED_BY=16,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC=core.Node.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC=32,DOCUMENT_TYPE_NODE=core.Node.prototype.DOCUMENT_TYPE_NODE;core.Node.prototype.compareDocumentPosition=function(e){if(!(e instanceof core.Node))throw Error("Comparing position against non-Node values is not allowed");var t,r;if(t=this.nodeType===this.DOCUMENT_NODE?this:this.ownerDocument,r=e.nodeType===this.DOCUMENT_NODE?e:e.ownerDocument,this===e)return 0;if(this===e.ownerDocument)return DOCUMENT_POSITION_FOLLOWING+DOCUMENT_POSITION_CONTAINED_BY;if(this.ownerDocument===e)return DOCUMENT_POSITION_PRECEDING+DOCUMENT_POSITION_CONTAINS;if(t!==r)return DOCUMENT_POSITION_DISCONNECTED;if(this.nodeType===this.ATTRIBUTE_NODE&&this._childNodes&&this._childNodes._toArray().indexOf(e)!==-1)return DOCUMENT_POSITION_FOLLOWING+DOCUMENT_POSITION_CONTAINED_BY;if(e.nodeType===this.ATTRIBUTE_NODE&&e._childNodes&&e._childNodes._toArray().indexOf(this)!==-1)return DOCUMENT_POSITION_PRECEDING+DOCUMENT_POSITION_CONTAINS;for(var o=this,n=[],i=null;o;){if(o==e)return DOCUMENT_POSITION_PRECEDING+DOCUMENT_POSITION_CONTAINS;n.push(o),o=o._parentNode}for(o=e,i=null;o;){if(o==this)return DOCUMENT_POSITION_FOLLOWING+DOCUMENT_POSITION_CONTAINED_BY;var N=n.indexOf(o);if(N!==-1){var O=n[N],_=O._childNodes._toArray().indexOf(n[N-1]),E=O._childNodes._toArray().indexOf(i);return _>E?DOCUMENT_POSITION_PRECEDING:DOCUMENT_POSITION_FOLLOWING}i=o,o=o._parentNode}return DOCUMENT_POSITION_DISCONNECTED},core.Node.prototype.isSameNode=function(e){return e===this},core.Node.prototype.__defineGetter__("textContent",function(){switch(this.nodeType){case this.COMMENT_NODE:case this.CDATA_SECTION_NODE:case this.PROCESSING_INSTRUCTION_NODE:case this.TEXT_NODE:return this.nodeValue;case this.ATTRIBUTE_NODE:case this.DOCUMENT_FRAGMENT_NODE:case this.ELEMENT_NODE:case this.ENTITY_NODE:case this.ENTITY_REFERENCE_NODE:for(var e="",t=0;t<this.childNodes.length;++t)this.childNodes[t].nodeType!==this.COMMENT_NODE&&this.childNodes[t].nodeType!==this.PROCESSING_INSTRUCTION_NODE&&(e+=this.childNodes[t].textContent||"");return e;default:return null}}),core.Node.prototype.__defineSetter__("textContent",function(e){for(var t=this.childNodes.length;--t>=0;)this.removeChild(this.childNodes.item(t));return""!==e&&null!=e&&this.appendChild(this._ownerDocument.createTextNode(e)),e}),core.Node.prototype.isEqualNode=function(e){var t=this,r=function(){for(var r=0;r<arguments.length;r++){var o=arguments[r];if(t[o]!=e[o])return!0}return!1},o=function(e,t){if(null==e&&null==t)return!1;if(null==e||null==t)return!0;if(e.length!=t.length)return!0;for(var r=[],o=0;o<t.length;o++)r[o]=o;for(var n=0;n<e.length;n++){for(var i=!1,o=0;o<r.length;o++)if(e.item(n).isEqualNode(t.item(r[o]))){i=!0,r.splice(o,1);break}if(!i)return!0}return!1},n=function(e,t){if(null==e&&null==t)return!1;if(null==e||null==t)return!0;if(e.length!=t.length)return!0;for(var r=0;r<e.length;r++)if(!e.item(r).isEqualNode(t.item(r)))return!0;return!1};if(!e)return!1;if(this.isSameNode(e))return!0;if(this.nodeType!=e.nodeType)return!1;if(r("nodeName","localName","namespaceURI","prefix","nodeValue"))return!1;if(o(this.attributes,e.attributes))return!1;if(n(this.childNodes,e.childNodes))return!1;if(this.nodeType==DOCUMENT_TYPE_NODE){if(r("publicId","systemId","internalSubset"))return!1;if(o(this.entities,e.entities))return!1;if(o(this.notations,e.notations))return!1}return!0},core.Node.prototype.setUserData=function(e,t,r){var o=this[e]||null;return this[e]=t,o},core.Node.prototype.getUserData=function(e){var t=this[e]||null;return t},core.Attr.prototype.__defineGetter__("isId",function(){return"id"===this.name.toLowerCase()}),core.UserDataHandler=function(){},core.UserDataHandler.prototype.NODE_CLONED=1,core.UserDataHandler.prototype.NODE_IMPORTED=2,core.UserDataHandler.prototype.NODE_DELETED=3,core.UserDataHandler.prototype.NODE_RENAMED=4,core.UserDataHandler.prototype.NODE_ADOPTED=5,core.UserDataHandler.prototype.handle=function(e,t,r,o,n){},core.DOMError=function(e,t,r,o,n,i){this._severity=e,this._message=t,this._type=r,this._relatedException=o,this._relatedData=n,this._location=i},core.DOMError.prototype={},core.DOMError.prototype.SEVERITY_WARNING=1,core.DOMError.prototype.SEVERITY_ERROR=2,core.DOMError.prototype.SEVERITY_FATAL_ERROR=3,core.DOMError.prototype.__defineGetter__("severity",function(){return this._severity}),core.DOMError.prototype.__defineGetter__("message",function(){return this._message}),core.DOMError.prototype.__defineGetter__("type",function(){return this._type}),core.DOMError.prototype.__defineGetter__("relatedException",function(){return this._relatedException}),core.DOMError.prototype.__defineGetter__("relatedData",function(){return this._relatedData}),core.DOMError.prototype.__defineGetter__("location",function(){return this._location}),core.DOMConfiguration=function(){},core.DOMConfiguration.prototype={setParameter:function(e,t){},getParameter:function(e){},canSetParameter:function(e,t){},parameterNames:function(){}},core.Document.prototype.__defineGetter__("domConfig",function(){return this._domConfig||new core.DOMConfiguration}),core.DOMStringList=function(){},core.DOMStringList.prototype={item:function(){},length:function(){},contains:function(){}},core.Document.prototype._inputEncoding=null,core.Document.prototype.__defineGetter__("inputEncoding",function(){return this._inputEncoding}),exports.dom={level3:{core:core}};