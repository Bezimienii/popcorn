montageDefine("fc77de5","examples/command",{dependencies:["cli"],factory:function(e,n,l){var a=e("cli");a.parse(null,["install","test","edit","remove","uninstall","ls"]),console.log("Command is: "+a.command)}});