montageDefine("423c844","test/index",{dependencies:["../index","tape","jsonify"],factory:function(n,e,o){var i=n("../index"),t=n("tape");"undefined"==typeof window||window.JSON||(window.JSON=n("jsonify")),t("console has expected methods",function(n){n.ok(i.log),n.ok(i.info),n.ok(i.warn),n.ok(i.dir),n.ok(i.time,"time"),n.ok(i.timeEnd,"timeEnd"),n.ok(i.trace,"trace"),n.ok(i.assert),n.end()}),t("invoke console.log",function(n){i.log("test-log"),n.end()}),t("invoke console.info",function(n){i.info("test-info"),n.end()}),t("invoke console.warn",function(n){i.warn("test-warn"),n.end()}),t("invoke console.time",function(n){i.time("label"),n.end()}),t("invoke console.trace",function(n){i.trace("test-trace"),n.end()}),t("invoke console.assert",function(n){i.assert(!0),n.end()}),t("invoke console.dir",function(n){i.dir("test-dir"),n.end()}),t("invoke console.timeEnd",function(n){i.timeEnd("label"),n.end()})}});