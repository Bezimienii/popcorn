montageDefine("d5c4fb2","core/converter/range-enforcer",{dependencies:["./converter"],factory:function(e,n,r){function t(e){return e<=this.min?this.min:e>=this.max?this.max:e}var a=e("./converter").Converter;n.RangeEnforcer=a.specialize({min:{value:null},max:{value:null},convert:{value:t},revert:{value:t}})}});