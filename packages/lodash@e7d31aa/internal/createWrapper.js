function createWrapper(e,a,r,t,p,i,A,n){var _=a&BIND_KEY_FLAG;if(!_&&"function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);var l=t?t.length:0;if(l||(a&=~(PARTIAL_FLAG|PARTIAL_RIGHT_FLAG),t=p=null),l-=p?p.length:0,a&PARTIAL_RIGHT_FLAG){var L=t,D=p;t=p=null}var u=_?null:getData(e),R=[e,a,r,t,p,L,D,i,A,n];if(u&&(mergeData(R,u),a=R[1],n=R[9]),R[9]=null==n?_?0:e.length:nativeMax(n-l,0)||0,a==BIND_FLAG)var c=createBindWrapper(R[0],R[2]);else c=a!=PARTIAL_FLAG&&a!=(BIND_FLAG|PARTIAL_FLAG)||R[4].length?createHybridWrapper.apply(void 0,R):createPartialWrapper.apply(void 0,R);var G=u?baseSetData:setData;return G(c,R)}var baseSetData=require("./baseSetData"),createBindWrapper=require("./createBindWrapper"),createHybridWrapper=require("./createHybridWrapper"),createPartialWrapper=require("./createPartialWrapper"),getData=require("./getData"),mergeData=require("./mergeData"),setData=require("./setData"),BIND_FLAG=1,BIND_KEY_FLAG=2,PARTIAL_FLAG=32,PARTIAL_RIGHT_FLAG=64,FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max;module.exports=createWrapper;