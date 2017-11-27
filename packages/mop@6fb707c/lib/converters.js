var Converters=module.exports={registry:{},register:function(t){this.registerOneWay(t.from,t.to,t.convert),this.registerOneWay(t.to,t.from,t.revert)},registerOneWay:function(t,r,e){this.registry[r]||(this.registry[r]={});var n=this.registry[r];n[t]=e},convert:function(t,r,e){if(t===r)return e;if(!this.registry[r])throw new Error("Can't convert to content type "+r);var n=this.registry[r];if(!n[t])throw new Error("Can't convert from content type "+t+" to "+r);var o=n[t];return o.call(this,e)},from:function(t,r){return Object.create(this.Converter).init(t,r,this)},Converter:{init:function(t,r,e){return this.content=t,this.contentType=r,this.converters=e,this},to:function(t){return this.converters.from(this.converters.convert(this.contentType,t,this.content),t)}}};Converters.register({from:"buffer",to:"utf8",convert:function(t){return t.toString("utf-8")},revert:function(t){return new Buffer(t,"utf8")}}),require("./shim-minidom");var minidom=require("minidom");Converters.register({from:"utf8",to:"document",convert:function(t){return minidom(t)},revert:function(t){return t.outerHTML}}),Converters.register({from:"buffer",to:"document",convert:function(t){return this.from(t,"buffer").to("utf8").to("document").content},revert:function(t){return this.from(t,"document").to("utf8").to("buffer").content}});