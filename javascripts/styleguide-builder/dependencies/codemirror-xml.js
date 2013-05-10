CodeMirror.defineMode("xml",function(e,t){function a(e,t){function n(n){return t.tokenize=n,n(e,t)}var r=e.next();if(r=="<"){if(e.eat("!"))return e.eat("[")?e.match("CDATA[")?n(c("atom","]]>")):null:e.match("--")?n(c("comment","-->")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),n(h(1))):null;if(e.eat("?"))return e.eatWhile(/[\w\._\-]/),t.tokenize=c("meta","?>"),"meta";var i=e.eat("/");o="";var s;while(s=e.eat(/[^\s\u00a0=<>\"\'\/?]/))o+=s;return o?(u=i?"closeTag":"openTag",t.tokenize=f,"tag"):"error"}if(r=="&"){var a;return e.eat("#")?e.eat("x")?a=e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):a=e.eatWhile(/[\d]/)&&e.eat(";"):a=e.eatWhile(/[\w\.\-:]/)&&e.eat(";"),a?"atom":"error"}return e.eatWhile(/[^&<]/),null}function f(e,t){var n=e.next();return n==">"||n=="/"&&e.eat(">")?(t.tokenize=a,u=n==">"?"endTag":"selfcloseTag","tag"):n=="="?(u="equals",null):/[\'\"]/.test(n)?(t.tokenize=l(n),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=<>\"\']/),"word")}function l(e){return function(t,n){while(!t.eol())if(t.next()==e){n.tokenize=f;break}return"string"}}function c(e,t){return function(n,r){while(!n.eol()){if(n.match(t)){r.tokenize=a;break}n.next()}return e}}function h(e){return function(t,n){var r;while((r=t.next())!=null){if(r=="<")return n.tokenize=h(e+1),n.tokenize(t,n);if(r==">"){if(e==1){n.tokenize=a;break}return n.tokenize=h(e-1),n.tokenize(t,n)}}return"meta"}}function m(){for(var e=arguments.length-1;e>=0;e--)p.cc.push(arguments[e])}function g(){return m.apply(null,arguments),!0}function y(e,t){var n=i.doNotIndent.hasOwnProperty(e)||p.context&&p.context.noIndent;p.context={prev:p.context,tagName:e,indent:p.indented,startOfLine:t,noIndent:n}}function b(){p.context&&(p.context=p.context.prev)}function w(e){if(e=="openTag")return p.tagName=o,p.tagStart=d.column(),g(T,E(p.startOfLine));if(e=="closeTag"){var t=!1;return p.context?p.context.tagName!=o&&(i.implicitlyClosed.hasOwnProperty(p.context.tagName.toLowerCase())&&b(),t=!p.context||p.context.tagName!=o):t=!0,t&&(v="error"),g(S(t))}return g()}function E(e){return function(t){var n=p.tagName;return p.tagName=p.tagStart=null,t=="selfcloseTag"||t=="endTag"&&i.autoSelfClosers.hasOwnProperty(n.toLowerCase())?(x(n.toLowerCase()),g()):t=="endTag"?(x(n.toLowerCase()),y(n,e),g()):g()}}function S(e){return function(t){return e&&(v="error"),t=="endTag"?(b(),g()):(v="error",g(arguments.callee))}}function x(e){var t;for(;;){if(!p.context)return;t=p.context.tagName.toLowerCase();if(!i.contextGrabbers.hasOwnProperty(t)||!i.contextGrabbers[t].hasOwnProperty(e))return;b()}}function T(e){return e=="word"?(v="attribute",g(N,T)):e=="endTag"||e=="selfcloseTag"?m():(v="error",g(T))}function N(e){return e=="equals"?g(C,T):(i.allowMissing?e=="word"&&(v="attribute"):v="error",e=="endTag"||e=="selfcloseTag"?m():g())}function C(e){return e=="string"?g(k):e=="word"&&i.allowUnquoted?(v="string",g()):(v="error",e=="endTag"||e=="selfCloseTag"?m():g())}function k(e){return e=="string"?g(k):m()}var n=e.indentUnit,r=t.multilineTagIndentFactor||1,i=t.htmlMode?{autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0}:{autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1},s=t.alignCDATA,o,u,p,d,v;return{startState:function(){return{tokenize:a,cc:[],indented:0,startOfLine:!0,tagName:null,tagStart:null,context:null}},token:function(e,t){!t.tagName&&e.sol()&&(t.startOfLine=!0,t.indented=e.indentation());if(e.eatSpace())return null;v=u=o=null;var n=t.tokenize(e,t);t.type=u;if((n||u)&&n!="comment"){p=t,d=e;for(;;){var r=t.cc.pop()||w;if(r(u||n))break}}return t.startOfLine=!1,v||n},indent:function(e,t,i){var o=e.context;if(e.tokenize!=f&&e.tokenize!=a||o&&o.noIndent)return i?i.match(/^(\s*)/)[0].length:0;if(e.tagName)return e.tagStart+n*r;if(s&&/<!\[CDATA\[/.test(t))return 0;o&&/^<\//.test(t)&&(o=o.prev);while(o&&!o.startOfLine)o=o.prev;return o?o.indent+n:0},electricChars:"/",configuration:t.htmlMode?"html":"xml"}}),CodeMirror.defineMIME("text/xml","xml"),CodeMirror.defineMIME("application/xml","xml"),CodeMirror.mimeModes.hasOwnProperty("text/html")||CodeMirror.defineMIME("text/html",{name:"xml",htmlMode:!0});