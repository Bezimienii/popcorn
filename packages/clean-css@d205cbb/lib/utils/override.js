function override(r,e){var i,o,n,l={};for(i in r)n=r[i],Array.isArray(n)?l[i]=n.slice(0):"object"==typeof n&&null!==n?l[i]=override(n,{}):l[i]=n;for(o in e)n=e[o],o in l&&Array.isArray(n)?l[o]=n.slice(0):o in l&&"object"==typeof n&&null!==n?l[o]=override(l[o],n):l[o]=n;return l}module.exports=override;