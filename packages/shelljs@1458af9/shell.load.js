montageDefine("1458af9","shell",{dependencies:["./src/common","./src/cd","./src/pwd","./src/ls","./src/find","./src/cp","./src/rm","./src/mv","./src/mkdir","./src/test","./src/cat","./src/to","./src/toEnd","./src/sed","./src/grep","./src/which","./src/echo","./src/dirs","./src/dirs","./src/dirs","./src/ln","./src/exec","./src/chmod","./src/tempdir","./src/error"],factory:function(r,c,s){var p=r("./src/common"),a=r("./src/cd");c.cd=p.wrap("cd",a);var d=r("./src/pwd");c.pwd=p.wrap("pwd",d);var e=r("./src/ls");c.ls=p.wrap("ls",e);var o=r("./src/find");c.find=p.wrap("find",o);var t=r("./src/cp");c.cp=p.wrap("cp",t);var i=r("./src/rm");c.rm=p.wrap("rm",i);var v=r("./src/mv");c.mv=p.wrap("mv",v);var w=r("./src/mkdir");c.mkdir=p.wrap("mkdir",w);var n=r("./src/test");c.test=p.wrap("test",n);var m=r("./src/cat");c.cat=p.wrap("cat",m);var h=r("./src/to");String.prototype.to=p.wrap("to",h);var f=r("./src/toEnd");String.prototype.toEnd=p.wrap("toEnd",f);var l=r("./src/sed");c.sed=p.wrap("sed",l);var g=r("./src/grep");c.grep=p.wrap("grep",g);var x=r("./src/which");c.which=p.wrap("which",x);var k=r("./src/echo");c.echo=k;var u=r("./src/dirs").dirs;c.dirs=p.wrap("dirs",u);var E=r("./src/dirs").pushd;c.pushd=p.wrap("pushd",E);var y=r("./src/dirs").popd;c.popd=p.wrap("popd",y);var S=r("./src/ln");c.ln=p.wrap("ln",S),c.exit=process.exit,c.env=process.env;var D=r("./src/exec");c.exec=p.wrap("exec",D,{notUnix:!0});var U=r("./src/chmod");c.chmod=p.wrap("chmod",U);var b=r("./src/tempdir");c.tempdir=p.wrap("tempdir",b);var j=r("./src/error");c.error=j,c.config=p.config}});