function split(r,e){var t,n,i=Marker.OPEN_ROUND_BRACKET,s=Marker.CLOSE_ROUND_BRACKET,u=0,l=0,a=0,f=r.length,g=[];if(r.indexOf(e)==-1)return[r];if(r.indexOf(i)==-1)return r.split(e);for(;l<f;)r[l]==i?u++:r[l]==s&&u--,0===u&&l>0&&l+1<f&&r[l]==e&&(g.push(r.substring(a,l)),a=l+1),l++;return a<l+1&&(t=r.substring(a),n=t[t.length-1],n==e&&(t=t.substring(0,t.length-1)),g.push(t)),g}var Marker=require("../tokenizer/marker");module.exports=split;