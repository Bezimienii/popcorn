montageDefine("514a8a9","lib/format",{dependencies:["./constants"],factory:function(t,e,r){"use strict";function u(t,e){return!t.auth||e.removeAuth||!t.extra.relation.maximumHost&&e.output!==h.ABSOLUTE?"":t.auth+"@"}function n(t,e){return t.hash?t.hash:""}function o(t,e){return t.host.full&&(t.extra.relation.maximumAuth||e.output===h.ABSOLUTE)?t.host.full:""}function a(t,e){var r="",u=t.path.absolute.string,n=t.path.relative.string,o=x(t,e);if(t.extra.relation.maximumHost||e.output===h.ABSOLUTE||e.output===h.ROOT_RELATIVE)r=u;else if(n.length<=u.length&&e.output===h.SHORTEST||e.output===h.PATH_RELATIVE){if(r=n,""===r){var a=p(t,e)&&!!f(t,e);t.extra.relation.maximumPath&&!o?r="./":!t.extra.relation.overridesQuery||o||a||(r="./")}}else r=u;return"/"!==r||o||!e.removeRootTrailingSlash||t.extra.relation.minimumPort&&e.output!==h.ABSOLUTE||(r=""),r}function i(t,e){return t.port&&!t.extra.portIsDefault&&t.extra.relation.maximumHost?":"+t.port:""}function m(t,e){return p(t,e)?f(t,e):""}function s(t,e){return x(t,e)?t.resource:""}function l(t,e){var r="";return(t.extra.relation.maximumHost||e.output===h.ABSOLUTE)&&(r+=t.extra.relation.minimumScheme&&e.schemeRelative&&e.output!==h.ABSOLUTE?"//":t.scheme+"://"),r}function c(t,e){var r="";return r+=l(t,e),r+=u(t,e),r+=o(t,e),r+=i(t,e),r+=a(t,e),r+=s(t,e),r+=m(t,e),r+=n(t,e)}function f(t,e){var r=e.removeEmptyQueries&&t.extra.relation.minimumPort;return t.query.string[r?"stripped":"full"]}function p(t,e){return!t.extra.relation.minimumQuery||e.output===h.ABSOLUTE||e.output===h.ROOT_RELATIVE}function x(t,e){var r=e.removeDirectoryIndexes&&t.extra.resourceIsIndex,u=t.extra.relation.minimumResource&&e.output!==h.ABSOLUTE&&e.output!==h.ROOT_RELATIVE;return!!t.resource&&!u&&!r}var h=t("./constants");r.exports=c}});