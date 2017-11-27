montageDefine("3120880","package.json",{exports:{author:{name:"Isaac Z. Schlueter",email:"i@izs.me",url:"http://blog.izs.me/"},name:"glob",description:"a little globber",version:"7.1.2",repository:{type:"git",url:"git://github.com/isaacs/node-glob.git"},main:"glob.js",files:["glob.js","sync.js","common.js"],engines:{node:"*"},dependencies:{"fs.realpath":"^1.0.0",inflight:"^1.0.4",inherits:"2",minimatch:"^3.0.4",once:"^1.3.0","path-is-absolute":"^1.0.0"},devDependencies:{mkdirp:"0",rimraf:"^2.2.8",tap:"^7.1.2",tick:"0.0.6"},scripts:{prepublish:"npm run benchclean",profclean:"rm -f v8.log profile.txt",test:"tap test/*.js --cov","test-regen":"npm run profclean && TEST_REGEN=1 node test/00-setup.js",bench:"bash benchmark.sh",prof:"bash prof.sh && cat profile.txt",benchclean:"node benchclean.js"},license:"ISC",gitHead:"8fa8d561e08c9eed1d286c6a35be2cd8123b2fb7",bugs:{url:"https://github.com/isaacs/node-glob/issues"},homepage:"https://github.com/isaacs/node-glob#readme",_id:"glob@7.1.2",_npmVersion:"5.0.0-beta.56",_nodeVersion:"8.0.0-pre",_npmUser:{name:"isaacs",email:"i@izs.me"},dist:{integrity:"sha512-MJTUg1kjuLeQCJ+ccE4Vpa6kKVXkPYJ2mOCQyUuKLcLQsdrMCpBPUi8qVE6+YuaJkozeA9NusTAw3hLr8Xe5EQ==",shasum:"c19c9df9a028702d678612384a6552404c636d15",tarball:"https://registry.npmjs.org/glob/-/glob-7.1.2.tgz"},maintainers:[{name:"isaacs",email:"i@izs.me"}],_npmOperationalInternal:{host:"s3://npm-registry-packages",tmp:"tmp/glob-7.1.2.tgz_1495224925341_0.07115248567424715"},directories:{},_shasum:"c19c9df9a028702d678612384a6552404c636d15",_resolved:"https://registry.npmjs.org/glob/-/glob-7.1.2.tgz",_from:"glob@>=7.1.1 <8.0.0",hash:"3120880",mappings:{"fs.realpath":{name:"fs.realpath",hash:"6aca627",location:"../fs.realpath@6aca627/"},inflight:{name:"inflight",hash:"39b8654",location:"../inflight@39b8654/"},inherits:{name:"inherits",hash:"95a968b",location:"../inherits@95a968b/"},minimatch:{name:"minimatch",hash:"c363ccc",location:"../minimatch@c363ccc/"},once:{name:"once",hash:"a4b3f99",location:"../once@a4b3f99/"},"path-is-absolute":{name:"path-is-absolute",hash:"c72f878",location:"../path-is-absolute@c72f878/"}},production:!0,useScriptInjection:!0}});