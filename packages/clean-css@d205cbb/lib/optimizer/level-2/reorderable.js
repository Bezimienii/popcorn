function canReorder(e,r,i){for(var o=r.length-1;o>=0;o--)for(var t=e.length-1;t>=0;t--)if(!canReorderSingle(e[t],r[o],i))return!1;return!0}function canReorderSingle(e,r,i){var o=e[0],t=e[1],n=e[2],d=e[5],l=e[6],s=r[0],f=r[1],u=r[2],a=r[5],p=r[6];return!("font"==o&&"line-height"==s||"font"==s&&"line-height"==o)&&((!FLEX_PROPERTIES.test(o)||!FLEX_PROPERTIES.test(s))&&(!(n==u&&unprefixed(o)==unprefixed(s)&&vendorPrefixed(o)^vendorPrefixed(s))&&(("border"!=n||!BORDER_PROPERTIES.test(u)||!("border"==o||o==u||t!=f&&sameBorderComponent(o,s)))&&(("border"!=u||!BORDER_PROPERTIES.test(n)||!("border"==s||s==n||t!=f&&sameBorderComponent(o,s)))&&(("border"!=n||"border"!=u||o==s||!(isSideBorder(o)&&isStyleBorder(s)||isStyleBorder(o)&&isSideBorder(s)))&&(n!=u||(!(o!=s||n!=u||t!=f&&!withDifferentVendorPrefix(t,f))||(o!=s&&n==u&&o!=n&&s!=u||(o!=s&&n==u&&t==f||(!(!p||!l||inheritable(n)||inheritable(u)||rulesOverlap(a,d,!1))||!specificitiesOverlap(d,a,i)))))))))))}function vendorPrefixed(e){return/^\-(?:moz|webkit|ms|o)\-/.test(e)}function unprefixed(e){return e.replace(/^\-(?:moz|webkit|ms|o)\-/,"")}function sameBorderComponent(e,r){return e.split("-").pop()==r.split("-").pop()}function isSideBorder(e){return"border-top"==e||"border-right"==e||"border-bottom"==e||"border-left"==e}function isStyleBorder(e){return"border-color"==e||"border-style"==e||"border-width"==e}function withDifferentVendorPrefix(e,r){return vendorPrefixed(e)&&vendorPrefixed(r)&&e.split("-")[1]!=r.split("-")[2]}function inheritable(e){return"font"==e||"line-height"==e||"list-style"==e}var rulesOverlap=require("./rules-overlap"),specificitiesOverlap=require("./specificities-overlap"),FLEX_PROPERTIES=/align\-items|box\-align|box\-pack|flex|justify/,BORDER_PROPERTIES=/^border\-(top|right|bottom|left|color|style|width|radius)/;module.exports={canReorder:canReorder,canReorderSingle:canReorderSingle};