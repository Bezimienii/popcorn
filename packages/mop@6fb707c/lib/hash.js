function base16(r){var e="0123456789abcdef";return Array.prototype.map.call(r,function(r){return e[(240&r)>>4]+e[(15&r)>>0]}).join("")}var CRYPTO=require("crypto");module.exports=function(){var r=new CRYPTO.Hash("sha256");return{update:function(e){r.update(e)},digest:function(){return base16(new Buffer(r.digest(),"binary"))}}};