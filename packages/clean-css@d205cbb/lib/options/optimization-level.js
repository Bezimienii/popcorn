function noop(){}function optimizationLevelFrom(e){var i=override(DEFAULTS,{}),r=OptimizationLevel.Zero,o=OptimizationLevel.One,t=OptimizationLevel.Two;return void 0===e?(delete i[t],i):("string"==typeof e&&(e=parseInt(e)),"number"==typeof e&&e===parseInt(t)?i:"number"==typeof e&&e===parseInt(o)?(delete i[t],i):"number"==typeof e&&e===parseInt(r)?(delete i[t],delete i[o],i):("object"==typeof e&&(e=covertValuesToHashes(e)),o in e&&"roundingPrecision"in e[o]&&(e[o].roundingPrecision=roundingPrecisionFrom(e[o].roundingPrecision)),t in e&&"skipProperties"in e[t]&&"string"==typeof e[t].skipProperties&&(e[t].skipProperties=e[t].skipProperties.split(LIST_VALUE_SEPARATOR)),(r in e||o in e||t in e)&&(i[r]=override(i[r],e[r])),o in e&&ALL_KEYWORD_1 in e[o]&&(i[o]=override(i[o],defaults(o,normalizeValue(e[o][ALL_KEYWORD_1]))),delete e[o][ALL_KEYWORD_1]),o in e&&ALL_KEYWORD_2 in e[o]&&(i[o]=override(i[o],defaults(o,normalizeValue(e[o][ALL_KEYWORD_2]))),delete e[o][ALL_KEYWORD_2]),o in e||t in e?i[o]=override(i[o],e[o]):delete i[o],t in e&&ALL_KEYWORD_1 in e[t]&&(i[t]=override(i[t],defaults(t,normalizeValue(e[t][ALL_KEYWORD_1]))),delete e[t][ALL_KEYWORD_1]),t in e&&ALL_KEYWORD_2 in e[t]&&(i[t]=override(i[t],defaults(t,normalizeValue(e[t][ALL_KEYWORD_2]))),delete e[t][ALL_KEYWORD_2]),t in e?i[t]=override(i[t],e[t]):delete i[t],i))}function defaults(e,i){var r,o=override(DEFAULTS[e],{});for(r in o)"boolean"==typeof o[r]&&(o[r]=i);return o}function normalizeValue(e){switch(e){case FALSE_KEYWORD_1:case FALSE_KEYWORD_2:return!1;case TRUE_KEYWORD_1:case TRUE_KEYWORD_2:return!0;default:return e}}function covertValuesToHashes(e){var i,r,o=override(e,{});for(r=0;r<=2;r++)i=""+r,i in o&&(void 0===o[i]||o[i]===!1)&&delete o[i],i in o&&o[i]===!0&&(o[i]={}),i in o&&"string"==typeof o[i]&&(o[i]=covertToHash(o[i],i));return o}function covertToHash(e,i){return e.split(OPTION_SEPARATOR).reduce(function(e,r){var o=r.split(OPTION_VALUE_SEPARATOR),t=o[0],n=o[1],l=normalizeValue(n);return ALL_KEYWORD_1==t||ALL_KEYWORD_2==t?e=override(e,defaults(i,l)):e[t]=l,e},{})}var roundingPrecisionFrom=require("./rounding-precision").roundingPrecisionFrom,override=require("../utils/override"),OptimizationLevel={Zero:"0",One:"1",Two:"2"},DEFAULTS={};DEFAULTS[OptimizationLevel.Zero]={},DEFAULTS[OptimizationLevel.One]={cleanupCharsets:!0,normalizeUrls:!0,optimizeBackground:!0,optimizeBorderRadius:!0,optimizeFilter:!0,optimizeFontWeight:!0,optimizeOutline:!0,removeEmpty:!0,removeNegativePaddings:!0,removeQuotes:!0,removeWhitespace:!0,replaceMultipleZeros:!0,replaceTimeUnits:!0,replaceZeroUnits:!0,roundingPrecision:roundingPrecisionFrom(void 0),selectorsSortingMethod:"standard",specialComments:"all",tidyAtRules:!0,tidyBlockScopes:!0,tidySelectors:!0,transform:noop},DEFAULTS[OptimizationLevel.Two]={mergeAdjacentRules:!0,mergeIntoShorthands:!0,mergeMedia:!0,mergeNonAdjacentRules:!0,mergeSemantically:!1,overrideProperties:!0,removeEmpty:!0,reduceNonAdjacentRules:!0,removeDuplicateFontRules:!0,removeDuplicateMediaBlocks:!0,removeDuplicateRules:!0,removeUnusedAtRules:!1,restructureRules:!1,skipProperties:[]};var ALL_KEYWORD_1="*",ALL_KEYWORD_2="all",FALSE_KEYWORD_1="false",FALSE_KEYWORD_2="off",TRUE_KEYWORD_1="true",TRUE_KEYWORD_2="on",LIST_VALUE_SEPARATOR=",",OPTION_SEPARATOR=";",OPTION_VALUE_SEPARATOR=":";module.exports={OptimizationLevel:OptimizationLevel,optimizationLevelFrom:optimizationLevelFrom};