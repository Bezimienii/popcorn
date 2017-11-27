montageDefine("d205cbb","lib/optimizer/level-2/optimize",{dependencies:["./merge-adjacent","./merge-media-queries","./merge-non-adjacent-by-body","./merge-non-adjacent-by-selector","./reduce-non-adjacent","./remove-duplicate-font-at-rules","./remove-duplicate-media-queries","./remove-duplicates","./remove-unused-at-rules","./restructure","./properties/optimize","../../options/optimization-level","../../tokenizer/token"],factory:function(e,t,r){function n(e){for(var t=0,r=e.length;t<r;t++){var o=e[t],a=!1;switch(o[0]){case b.RULE:a=0===o[1].length||0===o[2].length;break;case b.NESTED_BLOCK:n(o[2]),a=0===o[2].length;break;case b.AT_RULE:a=0===o[1].length;break;case b.AT_RULE_BLOCK:a=0===o[2].length}a&&(e.splice(t,1),t--,r--)}}function o(e,t){for(var r=0,n=e.length;r<n;r++){var o=e[r];if(o[0]==b.NESTED_BLOCK){var a=/@(-moz-|-o-|-webkit-)?keyframes/.test(o[1][0][1]);i(o[2],t,!a)}}}function a(e,t){for(var r=0,n=e.length;r<n;r++){var o=e[r];switch(o[0]){case b.RULE:f(o[2],!0,!0,t);break;case b.NESTED_BLOCK:a(o[2],t)}}}function i(e,t,r){var f,b,h=t.options.level[j.Two];if(o(e,t),a(e,t),h.removeDuplicateRules&&v(e,t),h.mergeAdjacentRules&&c(e,t),h.reduceNonAdjacentRules&&m(e,t),h.mergeNonAdjacentRules&&"body"!=h.mergeNonAdjacentRules&&l(e,t),h.mergeNonAdjacentRules&&"selector"!=h.mergeNonAdjacentRules&&u(e,t),h.restructureRules&&h.mergeAdjacentRules&&r&&(R(e,t),c(e,t)),h.restructureRules&&!h.mergeAdjacentRules&&r&&R(e,t),h.removeDuplicateFontRules&&d(e,t),h.removeDuplicateMediaBlocks&&p(e,t),h.removeUnusedAtRules&&g(e,t),h.mergeMedia)for(f=s(e,t),b=f.length-1;b>=0;b--)i(f[b][2],t,!1);return h.removeEmpty&&n(e),e}var c=e("./merge-adjacent"),s=e("./merge-media-queries"),u=e("./merge-non-adjacent-by-body"),l=e("./merge-non-adjacent-by-selector"),m=e("./reduce-non-adjacent"),d=e("./remove-duplicate-font-at-rules"),p=e("./remove-duplicate-media-queries"),v=e("./remove-duplicates"),g=e("./remove-unused-at-rules"),R=e("./restructure"),f=e("./properties/optimize"),j=e("../../options/optimization-level").OptimizationLevel,b=e("../../tokenizer/token");r.exports=i}});