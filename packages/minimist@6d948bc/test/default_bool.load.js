montageDefine("6d948bc","test/default_bool",{dependencies:["tape","../"],factory:function(e,a,o){var t=e("tape"),l=e("../");t("boolean default true",function(e){var a=l([],{"boolean":"sometrue","default":{sometrue:!0}});e.equal(a.sometrue,!0),e.end()}),t("boolean default false",function(e){var a=l([],{"boolean":"somefalse","default":{somefalse:!1}});e.equal(a.somefalse,!1),e.end()})}});