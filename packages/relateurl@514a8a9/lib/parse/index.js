"use strict";function parseFromUrl(r,e,t){if(r){var a=parseUrl(r,e),s=pathUtils.resolveDotSegments(a.path.absolute.array);return a.path.absolute.array=s,a.path.absolute.string="/"+pathUtils.join(s),a}return t}function parseUrl(r,e){var t=parseUrlString(r,e);return t.valid===!1?t:(parseHost(t,e),parsePort(t,e),parsePath(t,e),parseQuery(t,e),hrefInfo(t),t)}var hrefInfo=require("./hrefInfo"),parseHost=require("./host"),parsePath=require("./path"),parsePort=require("./port"),parseQuery=require("./query"),parseUrlString=require("./urlstring"),pathUtils=require("../util/path");module.exports={from:parseFromUrl,to:parseUrl};