montageDefine("aa4df19","lib/jsdom/parsing_unit",{dependencies:[],factory:function(e,r,t){"use strict";var s=t.exports=function(e){this.parser=e,this.suspended=!1,this.parsingLoopLock=!1,this.callback=null};s.prototype._stateGuard=function(e){if(this.suspended&&e)throw new Error("parse5: Parser was already suspended. Please, check your control flow logic.");if(!this.suspended&&!e)throw new Error("parse5: Parser was already resumed. Please, check your control flow logic.");return e},s.prototype.suspend=function(){return this.suspended=this._stateGuard(!0),this},s.prototype.resume=function(){return this.suspended=this._stateGuard(!1),this.parsingLoopLock||this.parser._runParsingLoop(),this},s.prototype.documentWrite=function(e){return this.parser.tokenizer.preprocessor.write(e),this},s.prototype.handleScripts=function(e){return this.parser.scriptHandler=e,this},s.prototype.done=function(e){return this.callback=e,this}}});