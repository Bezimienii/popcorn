function lazyReverse(){if(this.__filtered__){var e=new LazyWrapper(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}var LazyWrapper=require("./LazyWrapper");module.exports=lazyReverse;