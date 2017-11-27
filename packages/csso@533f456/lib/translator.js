function CSSOTranslator(){}CSSOTranslator.prototype.translate=function(t){return this._t(t)},CSSOTranslator.prototype._m_simple={unary:1,nth:1,combinator:1,ident:1,number:1,s:1,string:1,attrselector:1,operator:1,raw:1,unknown:1},CSSOTranslator.prototype._m_composite={simpleselector:1,dimension:1,selector:1,property:1,value:1,filterv:1,progid:1,ruleset:1,atruleb:1,atrulerq:1,atrulers:1,stylesheet:1},CSSOTranslator.prototype._m_primitive={cdo:"cdo",cdc:"cdc",decldelim:";",namespace:"|",delim:","},CSSOTranslator.prototype._t=function(t){var r=t[0];return r in this._m_primitive?this._m_primitive[r]:r in this._m_simple?this._simple(t):r in this._m_composite?this._composite(t):this[r](t)},CSSOTranslator.prototype._composite=function(t,r){var o="";for(r=void 0===r?1:r;r<t.length;r++)o+=this._t(t[r]);return o},CSSOTranslator.prototype._simple=function(t){return t[1]},CSSOTranslator.prototype.percentage=function(t){return this._t(t[1])+"%"},CSSOTranslator.prototype.comment=function(t){return"/*"+t[1]+"*/"},CSSOTranslator.prototype.clazz=function(t){return"."+this._t(t[1])},CSSOTranslator.prototype.atkeyword=function(t){return"@"+this._t(t[1])},CSSOTranslator.prototype.shash=function(t){return"#"+t[1]},CSSOTranslator.prototype.vhash=function(t){return"#"+t[1]},CSSOTranslator.prototype.attrib=function(t){return"["+this._composite(t)+"]"},CSSOTranslator.prototype.important=function(t){return"!"+this._composite(t)+"important"},CSSOTranslator.prototype.nthselector=function(t){return":"+this._simple(t[1])+"("+this._composite(t,2)+")"},CSSOTranslator.prototype.funktion=function(t){return this._simple(t[1])+"("+this._composite(t[2])+")"},CSSOTranslator.prototype.declaration=function(t){return this._t(t[1])+":"+this._t(t[2])},CSSOTranslator.prototype.filter=function(t){return this._t(t[1])+":"+this._t(t[2])},CSSOTranslator.prototype.block=function(t){return"{"+this._composite(t)+"}"},CSSOTranslator.prototype.braces=function(t){return t[1]+this._composite(t,3)+t[2]},CSSOTranslator.prototype.atrules=function(t){return this._composite(t)+";"},CSSOTranslator.prototype.atruler=function(t){return this._t(t[1])+this._t(t[2])+"{"+this._t(t[3])+"}"},CSSOTranslator.prototype.pseudoe=function(t){return"::"+this._t(t[1])},CSSOTranslator.prototype.pseudoc=function(t){return":"+this._t(t[1])},CSSOTranslator.prototype.uri=function(t){return"url("+this._composite(t)+")"},CSSOTranslator.prototype.functionExpression=function(t){return"expression("+t[1]+")"},exports.translate=function(t){return(new CSSOTranslator).translate(t)},exports.translator=function(){return new CSSOTranslator};