function pickByCallback(r,a){var e={};return baseForIn(r,function(r,n,o){a(r,n,o)&&(e[n]=r)}),e}var baseForIn=require("./baseForIn");module.exports=pickByCallback;