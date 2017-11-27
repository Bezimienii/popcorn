var parse=require("../"),test=require("tape");test("numeric short args",function(e){e.plan(2),e.deepEqual(parse(["-n123"]),{n:123,_:[]}),e.deepEqual(parse(["-123","456"]),{1:!0,2:!0,3:456,_:[]})}),test("short",function(e){e.deepEqual(parse(["-b"]),{b:!0,_:[]},"short boolean"),e.deepEqual(parse(["foo","bar","baz"]),{_:["foo","bar","baz"]},"bare"),e.deepEqual(parse(["-cats"]),{c:!0,a:!0,t:!0,s:!0,_:[]},"group"),e.deepEqual(parse(["-cats","meow"]),{c:!0,a:!0,t:!0,s:"meow",_:[]},"short group next"),e.deepEqual(parse(["-h","localhost"]),{h:"localhost",_:[]},"short capture"),e.deepEqual(parse(["-h","localhost","-p","555"]),{h:"localhost",p:555,_:[]},"short captures"),e.end()}),test("mixed short bool and capture",function(e){e.same(parse(["-h","localhost","-fp","555","script.js"]),{f:!0,p:555,h:"localhost",_:["script.js"]}),e.end()}),test("short and long",function(e){e.deepEqual(parse(["-h","localhost","-fp","555","script.js"]),{f:!0,p:555,h:"localhost",_:["script.js"]}),e.end()});