var core=Object.create(require("../level1/core").dom.level1.core);core.Node.prototype.__defineGetter__("textContent",function(){switch(this.nodeType){case this.COMMENT_NODE:case this.CDATA_SECTION_NODE:case this.PROCESSING_INSTRUCTION_NODE:case this.TEXT_NODE:return this.nodeValue;case this.ATTRIBUTE_NODE:case this.DOCUMENT_FRAGMENT_NODE:case this.ELEMENT_NODE:case this.ENTITY_NODE:case this.ENTITY_REFERENCE_NODE:for(var e="",t=0;t<this.childNodes.length;++t)this.childNodes[t].nodeType!==this.COMMENT_NODE&&this.childNodes[t].nodeType!==this.PROCESSING_INSTRUCTION_NODE&&(e+=this.childNodes[t].textContent||"");return e;default:return null}}),core.Node.prototype.__defineSetter__("textContent",function(e){for(var t=this.childNodes.length;--t>=0;)this.removeChild(this.childNodes.item(t));return""!==e&&null!=e&&this.appendChild(this._ownerDocument.createTextNode(e)),e}),exports.dom={level3:{core:core}};