function everyValuesPair(e,r,a){var u,l,v,t=r.value.length,M=a.value.length,n=Math.max(t,M),i=Math.min(t,M)-1;for(v=0;v<n;v++)if(u=r.value[v]&&r.value[v][1]||u,l=a.value[v]&&a.value[v][1]||l,u!=Marker.COMMA&&l!=Marker.COMMA&&!e(u,l,v,v<=i))return!1;return!0}var Marker=require("../../../tokenizer/marker");module.exports=everyValuesPair;