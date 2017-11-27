var tap=require("tap"),test=tap.test,semver=require("../semver.js");test("\nmajor tests",function(e){[["1.2.3",1],[" 1.2.3 ",1],[" 2.2.3-4 ",2],[" 3.2.3-pre ",3],["v5.2.3",5],[" v8.2.3 ",8],["\t13.2.3",13],["=21.2.3",21,!0],["v=34.2.3",34,!0]].forEach(function(t){var r=t[0],n=t[1],a=t[2]||!1,v="major("+r+") = "+n;e.equal(semver.major(r,a),n,v)}),e.end()}),test("\nminor tests",function(e){[["1.1.3",1],[" 1.1.3 ",1],[" 1.2.3-4 ",2],[" 1.3.3-pre ",3],["v1.5.3",5],[" v1.8.3 ",8],["\t1.13.3",13],["=1.21.3",21,!0],["v=1.34.3",34,!0]].forEach(function(t){var r=t[0],n=t[1],a=t[2]||!1,v="minor("+r+") = "+n;e.equal(semver.minor(r,a),n,v)}),e.end()}),test("\npatch tests",function(e){[["1.2.1",1],[" 1.2.1 ",1],[" 1.2.2-4 ",2],[" 1.2.3-pre ",3],["v1.2.5",5],[" v1.2.8 ",8],["\t1.2.13",13],["=1.2.21",21,!0],["v=1.2.34",34,!0]].forEach(function(t){var r=t[0],n=t[1],a=t[2]||!1,v="patch("+r+") = "+n;e.equal(semver.patch(r,a),n,v)}),e.end()});