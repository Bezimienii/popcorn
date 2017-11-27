montageDefine("8c68c9f","lib/ast",{dependencies:[],factory:function(t,e,n){"use strict";function o(t,n,o,i){arguments.length<4&&(i=s),n=n?n.split(/\s+/):[];var a=n;i&&i.PROPS&&(n=n.concat(i.PROPS));for(var r="return function AST_"+t+"(props){ if (props) { ",l=n.length;--l>=0;)r+="this."+n[l]+" = props."+n[l]+";";var c=i&&new i;(c&&c.initialize||o&&o.initialize)&&(r+="this.initialize();"),r+="}}";var u=new Function(r)();if(c&&(u.prototype=c,u.BASE=i),i&&i.SUBCLASSES.push(u),u.prototype.CTOR=u,u.PROPS=n||null,u.SELF_PROPS=a,u.SUBCLASSES=[],t&&(u.prototype.TYPE=u.TYPE=t),o)for(l in o)HOP(o,l)&&(/^\$/.test(l)?u[l.substr(1)]=o[l]:u.prototype[l]=o[l]);return u.DEFMETHOD=function(t,e){this.prototype[t]=e},e["AST_"+t]=u,u}function i(t,e){t.body instanceof r?t.body._walk(e):t.body.forEach(function(t){t._walk(e)})}function a(t){this.visit=t,this.stack=[],this.directives=Object.create(null)}var s=(o("Token","type value line col pos endline endcol endpos nlb comments_before file raw",{},null),o("Node","start end",{clone:function(){return new this.CTOR(this)},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function(t){return t._visit(this)},walk:function(t){return this._walk(t)}},null));s.warn_function=null,s.warn=function(t,e){s.warn_function&&s.warn_function(string_template(t,e))};var r=o("Statement",null,{$documentation:"Base class of all statements"}),l=(o("Debugger",null,{$documentation:"Represents a debugger statement"},r),o("Directive","value scope quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",scope:"[AST_Scope/S] The scope that this directive affects",quote:"[string] the original quote character"}},r)),c=o("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function(t){return t._visit(this,function(){this.body._walk(t)})}},r),u=o("Block","body",{$documentation:"A body of statements (usually bracketed)",$propdoc:{body:"[AST_Statement*] an array of statements"},_walk:function(t){return t._visit(this,function(){i(this,t)})}},r),f=(o("BlockStatement",null,{$documentation:"A block statement"},u),o("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)",_walk:function(t){return t._visit(this)}},r),o("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},_walk:function(t){return t._visit(this,function(){this.body._walk(t)})}},r)),d=o("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function(t){return t._visit(this,function(){this.label._walk(t),this.body._walk(t)})}},f),h=o("IterationStatement",null,{$documentation:"Internal class.  All loops inherit from it."},f),p=o("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},h),m=(o("Do",null,{$documentation:"A `do` statement",_walk:function(t){return t._visit(this,function(){this.body._walk(t),this.condition._walk(t)})}},p),o("While",null,{$documentation:"A `while` statement",_walk:function(t){return t._visit(this,function(){this.condition._walk(t),this.body._walk(t)})}},p),o("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function(t){return t._visit(this,function(){this.init&&this.init._walk(t),this.condition&&this.condition._walk(t),this.step&&this.step._walk(t),this.body._walk(t)})}},h)),_=(o("ForIn","init name object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",name:"[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",object:"[AST_Node] the object that we're looping through"},_walk:function(t){return t._visit(this,function(){this.init._walk(t),this.object._walk(t),this.body._walk(t)})}},h),o("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function(t){return t._visit(this,function(){this.expression._walk(t),this.body._walk(t)})}},f),o("Scope","directives variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{directives:"[string*/S] an array of directives declared in this scope",variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"}},u)),b=(o("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_enclose:function(t){var e=this,n=[],o=[];t.forEach(function(t){var e=t.lastIndexOf(":");n.push(t.substr(0,e)),o.push(t.substr(e+1))});var i="(function("+o.join(",")+"){ '$ORIG'; })("+n.join(",")+")";return i=parse(i),i=i.transform(new TreeTransformer(function(t){if(t instanceof l&&"$ORIG"==t.value)return MAP.splice(e.body)}))},wrap_commonjs:function(t,e){var n=this,o=[];e&&(n.figure_out_scope(),n.walk(new a(function(t){t instanceof C&&t.definition().global&&(find_if(function(e){return e.name==t.name},o)||o.push(t))})));var i="(function(exports, global){ '$ORIG'; '$EXPORTS'; global['"+t+"'] = exports; }({}, (function(){return this}())))";return i=parse(i),i=i.transform(new TreeTransformer(function(t){if(t instanceof l)switch(t.value){case"$ORIG":return MAP.splice(n.body);case"$EXPORTS":var e=[];return o.forEach(function(t){e.push(new c({body:new R({left:new N({expression:new q({name:"exports"}),property:new L({value:t.name})}),operator:"=",right:new q(t)})}))}),MAP.splice(e)}}))}},_),o("Lambda","name argnames uses_arguments",{$documentation:"Base class for functions",$propdoc:{name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg*] array of function arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array"},_walk:function(t){return t._visit(this,function(){this.name&&this.name._walk(t),this.argnames.forEach(function(e){e._walk(t)}),i(this,t)})}},_)),y=(o("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},b),o("Function",null,{$documentation:"A function expression"},b),o("Defun",null,{$documentation:"A function definition"},b),o("Jump",null,{$documentation:"Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"},r)),v=o("Exit","value",{$documentation:"Base class for “exits” (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function(t){return t._visit(this,this.value&&function(){this.value._walk(t)})}},y),S=(o("Return",null,{$documentation:"A `return` statement"},v),o("Throw",null,{$documentation:"A `throw` statement"},v),o("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function(t){return t._visit(this,this.label&&function(){this.label._walk(t)})}},y)),w=(o("Break",null,{$documentation:"A `break` statement"},S),o("Continue",null,{$documentation:"A `continue` statement"},S),o("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function(t){return t._visit(this,function(){this.condition._walk(t),this.body._walk(t),this.alternative&&this.alternative._walk(t)})}},f)),$=o("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` “discriminant”"},_walk:function(t){return t._visit(this,function(){this.expression._walk(t),i(this,t)})}},u),k=o("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},u),A=(o("Default",null,{$documentation:"A `default` switch branch"},k),o("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function(t){return t._visit(this,function(){this.expression._walk(t),i(this,t)})}},k),o("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function(t){return t._visit(this,function(){i(this,t),this.bcatch&&this.bcatch._walk(t),this.bfinally&&this.bfinally._walk(t)})}},u),o("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch] symbol for the exception"},_walk:function(t){return t._visit(this,function(){this.argname._walk(t),i(this,t)})}},u),o("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},u),o("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function(t){return t._visit(this,function(){this.definitions.forEach(function(e){e._walk(t)})})}},r)),g=(o("Var",null,{$documentation:"A `var` statement"},A),o("Const",null,{$documentation:"A `const` statement"},A),o("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_SymbolVar|AST_SymbolConst] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},_walk:function(t){return t._visit(this,function(){this.name._walk(t),this.value&&this.value._walk(t)})}}),o("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function(t){return t._visit(this,function(){this.expression._walk(t),this.args.forEach(function(e){e._walk(t)})})}})),T=(o("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},g),o("Seq","car cdr",{$documentation:"A sequence expression (two comma-separated expressions)",$propdoc:{car:"[AST_Node] first element in sequence",cdr:"[AST_Node] second element in sequence"},$cons:function(t,e){var n=new T(t);return n.car=t,n.cdr=e,n},$from_array:function(t){if(0==t.length)return null;if(1==t.length)return t[0].clone();for(var e=null,n=t.length;--n>=0;)e=T.cons(t[n],e);for(var o=e;o;){if(o.cdr&&!o.cdr.cdr){o.cdr=o.cdr.car;break}o=o.cdr}return e},to_array:function(){for(var t=this,e=[];t;){if(e.push(t.car),t.cdr&&!(t.cdr instanceof T)){e.push(t.cdr);break}t=t.cdr}return e},add:function(t){for(var e=this;e;){if(!(e.cdr instanceof T)){var n=T.cons(e.cdr,t);return e.cdr=n}e=e.cdr}},len:function(){return this.cdr instanceof T?this.cdr.len()+1:2},_walk:function(t){return t._visit(this,function(){this.car._walk(t),this.cdr&&this.cdr._walk(t)})}})),x=o("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the “container” expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}}),N=(o("Dot",null,{$documentation:"A dotted property access expression",_walk:function(t){return t._visit(this,function(){this.expression._walk(t)})}},x),o("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function(t){return t._visit(this,function(){this.expression._walk(t),this.property._walk(t)})}},x)),B=o("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function(t){return t._visit(this,function(){this.expression._walk(t)})}}),O=o("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},B),j=(o("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},B),o("Binary","left operator right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function(t){return t._visit(this,function(){this.left._walk(t),this.right._walk(t)})}})),D=o("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function(t){return t._visit(this,function(){this.condition._walk(t),this.consequent._walk(t),this.alternative._walk(t)})}}),R=o("Assign",null,{$documentation:"An assignment expression — `a = b + 5`"},j),E=(o("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function(t){return t._visit(this,function(){this.elements.forEach(function(e){e._walk(t)})})}}),o("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function(t){return t._visit(this,function(){this.properties.forEach(function(e){e._walk(t)})})}}),o("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",value:"[AST_Node] property value.  For setters and getters this is an AST_Function."},_walk:function(t){return t._visit(this,function(){this.value._walk(t)})}})),P=(o("ObjectKeyVal","quote",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character"}},E),o("ObjectSetter",null,{$documentation:"An object setter property"},E),o("ObjectGetter",null,{$documentation:"An object getter property"},E),o("Symbol","scope name thedef",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol"},$documentation:"Base class for all symbols"})),C=(o("SymbolAccessor",null,{$documentation:"The name of a property accessor (setter/getter function)"},P),o("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",$propdoc:{init:"[AST_Node*/S] array of initializers for this declaration."}},P)),F=o("SymbolVar",null,{$documentation:"Symbol defining a variable"},C),q=(o("SymbolConst",null,{$documentation:"A constant declaration"},C),o("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},F),o("SymbolDefun",null,{$documentation:"Symbol defining a function"},C),o("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},C),o("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},C),o("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function(){this.references=[],this.thedef=this}},P),o("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},P)),I=(o("LabelRef",null,{$documentation:"Reference to a label symbol"},P),o("This",null,{$documentation:"The `this` symbol"},P),o("Constant",null,{$documentation:"Base class for all constants",getValue:function(){return this.value}})),L=o("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},I),z=(o("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},I),o("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},I),o("Atom",null,{$documentation:"Base class for atoms"},I)),V=(o("Null",null,{$documentation:"The `null` atom",value:null},z),o("NaN",null,{$documentation:"The impossible value",value:NaN},z),o("Undefined",null,{$documentation:"The `undefined` value",value:void 0},z),o("Hole",null,{$documentation:"A hole in an array",value:void 0},z),o("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},z),o("Boolean",null,{$documentation:"Base class for booleans"},z));o("False",null,{$documentation:"The `false` atom",value:!1},V),o("True",null,{$documentation:"The `true` atom",value:!0},V);a.prototype={_visit:function(t,e){this.push(t);var n=this.visit(t,e?function(){e.call(t)}:noop);return!n&&e&&e.call(t),this.pop(t),n},parent:function(t){return this.stack[this.stack.length-2-(t||0)]},push:function(t){t instanceof b?this.directives=Object.create(this.directives):t instanceof l&&(this.directives[t.value]=!this.directives[t.value]||"up"),this.stack.push(t)},pop:function(t){this.stack.pop(),t instanceof b&&(this.directives=Object.getPrototypeOf(this.directives))},self:function(){return this.stack[this.stack.length-1]},find_parent:function(t){for(var e=this.stack,n=e.length;--n>=0;){var o=e[n];if(o instanceof t)return o}},has_directive:function(t){var e=this.directives[t];if(e)return e;var n=this.stack[this.stack.length-1];if(n instanceof _)for(var o=0;o<n.body.length;++o){var i=n.body[o];if(!(i instanceof l))break;if(i.value==t)return!0}},in_boolean_context:function(){for(var t=this.stack,e=t.length,n=t[--e];e>0;){var o=t[--e];if(o instanceof w&&o.condition===n||o instanceof D&&o.condition===n||o instanceof p&&o.condition===n||o instanceof m&&o.condition===n||o instanceof O&&"!"==o.operator&&o.expression===n)return!0;if(!(o instanceof j)||"&&"!=o.operator&&"||"!=o.operator)return!1;n=o}},loopcontrol_target:function(t){var e=this.stack;if(t)for(var n=e.length;--n>=0;){var o=e[n];if(o instanceof d&&o.label.name==t.name)return o.body}else for(var n=e.length;--n>=0;){var o=e[n];if(o instanceof $||o instanceof h)return o}}}}});