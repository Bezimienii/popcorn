function sortedUniq(r,e){for(var n,o=-1,t=r.length,d=-1,i=[];++o<t;){var s=r[o],u=e?e(s,o,r):s;o&&n===u||(n=u,i[++d]=s)}return i}module.exports=sortedUniq;