function bufferClone(r){return bufferSlice.call(r,0)}var constant=require("../utility/constant"),isNative=require("../lang/isNative"),ArrayBuffer=isNative(ArrayBuffer=global.ArrayBuffer)&&ArrayBuffer,bufferSlice=isNative(bufferSlice=ArrayBuffer&&new ArrayBuffer(0).slice)&&bufferSlice,floor=Math.floor,Uint8Array=isNative(Uint8Array=global.Uint8Array)&&Uint8Array,Float64Array=function(){try{var r=isNative(r=global.Float64Array)&&r,e=new r(new ArrayBuffer(10),0,1)&&r}catch(a){}return e}(),FLOAT64_BYTES_PER_ELEMENT=Float64Array?Float64Array.BYTES_PER_ELEMENT:0;bufferSlice||(bufferClone=ArrayBuffer&&Uint8Array?function(r){var e=r.byteLength,a=Float64Array?floor(e/FLOAT64_BYTES_PER_ELEMENT):0,t=a*FLOAT64_BYTES_PER_ELEMENT,f=new ArrayBuffer(e);if(a){var n=new Float64Array(f,0,a);n.set(new Float64Array(r,0,a))}return e!=t&&(n=new Uint8Array(f,t),n.set(new Uint8Array(r,t))),f}:constant(null)),module.exports=bufferClone;