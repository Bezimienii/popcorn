function rebaseRemoteMap(e,r){var u=path.dirname(r);return e.sources=e.sources.map(function(e){return url.resolve(u,e)}),e}var path=require("path"),url=require("url");module.exports=rebaseRemoteMap;