function inputSourceMapTracker(){var n={};return{all:all.bind(null,n),isTracking:isTracking.bind(null,n),originalPositionFor:originalPositionFor.bind(null,n),track:track.bind(null,n)}}function all(n){return n}function isTracking(n,r){return r in n}function originalPositionFor(n,r,o,i){for(var u,l=r[0],a=r[1],e=r[2],t={line:l,column:a+o};!u&&t.column>a;)t.column--,u=n[e].originalPositionFor(t);return null===u.line&&l>1&&i>0?originalPositionFor(n,[l-1,a,e],o,i-1):null!==u.line?toMetadata(u):r}function toMetadata(n){return[n.line,n.column,n.source]}function track(n,r,o){n[r]=new SourceMapConsumer(o)}var SourceMapConsumer=require("source-map").SourceMapConsumer;module.exports=inputSourceMapTracker;