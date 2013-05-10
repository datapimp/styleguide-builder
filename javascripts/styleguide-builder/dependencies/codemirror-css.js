CodeMirror.defineMode("css",function(e){return CodeMirror.getMode(e,"text/css")}),CodeMirror.defineMode("css-base",function(e,t){"use strict";function c(e,t){return l=t,e}function h(e,t){var n=e.next();if(r[n]){var i=r[n](e,t);if(i!==!1)return i}if(n=="@")return e.eatWhile(/[\w\\\-]/),c("def",e.current());if(n=="=")c(null,"compare");else{if(!(n!="~"&&n!="|"||!e.eat("=")))return c(null,"compare");if(n=='"'||n=="'")return t.tokenize=p(n),t.tokenize(e,t);if(n=="#")return e.eatWhile(/[\w\\\-]/),c("atom","hash");if(n=="!")return e.match(/^\s*\w*/),c("keyword","important");if(/\d/.test(n))return e.eatWhile(/[\w.%]/),c("number","unit");if(n!=="-")return/[,+>*\/]/.test(n)?c(null,"select-op"):n=="."&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?c("qualifier","qualifier"):n==":"?c("operator",n):/[;{}\[\]\(\)]/.test(n)?c(null,n):n=="u"&&e.match("rl(")?(e.backUp(1),t.tokenize=d,c("property","variable")):(e.eatWhile(/[\w\\\-]/),c("property","variable"));if(/\d/.test(e.peek()))return e.eatWhile(/[\w.%]/),c("number","unit");if(e.match(/^[^-]+-/))return c("meta","meta")}}function p(e,t){return function(n,r){var i=!1,s;while((s=n.next())!=null){if(s==e&&!i)break;i=!i&&s=="\\"}return i||(t&&n.backUp(1),r.tokenize=h),c("string","string")}}function d(e,t){return e.next(),e.match(/\s*[\"\']/,!1)?t.tokenize=h:t.tokenize=p(")",!0),c(null,"(")}var n=e.indentUnit,r=t.hooks||{},i=t.atMediaTypes||{},s=t.atMediaFeatures||{},o=t.propertyKeywords||{},u=t.colorKeywords||{},a=t.valueKeywords||{},f=!!t.allowNested,l=null;return{startState:function(e){return{tokenize:h,baseIndent:e||0,stack:[]}},token:function(e,t){t.tokenize=t.tokenize||h;if(t.tokenize==h&&e.eatSpace())return null;var n=t.tokenize(e,t);n&&typeof n!="string"&&(n=c(n[0],n[1]));var r=t.stack[t.stack.length-1];if(n=="variable")return l=="variable-definition"&&t.stack.push("propertyValue"),"variable-2";n=="property"?r=="propertyValue"?a[e.current()]?n="string-2":u[e.current()]?n="keyword":n="variable-2":r=="rule"?o[e.current()]||(n+=" error"):r=="block"?o[e.current()]?n="property":u[e.current()]?n="keyword":a[e.current()]?n="string-2":n="tag":!r||r=="@media{"?n="tag":r=="@media"?i[e.current()]?n="attribute":/^(only|not)$/i.test(e.current())?n="keyword":e.current().toLowerCase()=="and"?n="error":s[e.current()]?n="error":n="attribute error":r=="@mediaType"?i[e.current()]?n="attribute":e.current().toLowerCase()=="and"?n="operator":/^(only|not)$/i.test(e.current())?n="error":s[e.current()]?n="error":n="error":r=="@mediaType("?o[e.current()]||(i[e.current()]?n="error":e.current().toLowerCase()=="and"?n="operator":/^(only|not)$/i.test(e.current())?n="error":n+=" error"):n="error":n=="atom"?!r||r=="@media{"||r=="block"?n="builtin":r=="propertyValue"?/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e.current())||(n+=" error"):n="error":r=="@media"&&l=="{"&&(n="error");if(l=="{")if(r=="@media"||r=="@mediaType")t.stack.pop(),t.stack[t.stack.length-1]="@media{";else{var p=f?"block":"rule";t.stack.push(p)}else if(l=="}"){var d=t.stack[t.stack.length-1];d=="interpolation"&&(n="operator"),t.stack.pop(),r=="propertyValue"&&t.stack.pop()}else l=="interpolation"?t.stack.push("interpolation"):l=="@media"?t.stack.push("@media"):r=="@media"&&/\b(keyword|attribute)\b/.test(n)?t.stack.push("@mediaType"):r=="@mediaType"&&e.current()==","?t.stack.pop():r=="@mediaType"&&l=="("?t.stack.push("@mediaType("):r=="@mediaType("&&l==")"?t.stack.pop():r!="rule"&&r!="block"||l!=":"?r=="propertyValue"&&l==";"&&t.stack.pop():t.stack.push("propertyValue");return n},indent:function(e,t){var r=e.stack.length;return/^\}/.test(t)&&(r-=e.stack[e.stack.length-1]=="propertyValue"?2:1),e.baseIndent+r*n},electricChars:"}"}}),function(){function e(e){var t={};for(var n=0;n<e.length;++n)t[e[n]]=!0;return t}function o(e,t){var n=!1,r;while((r=e.next())!=null){if(n&&r=="/"){t.tokenize=null;break}n=r=="*"}return["comment","comment"]}var t=e(["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"]),n=e(["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid"]),r=e(["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid-cell","grid-column","grid-column-align","grid-column-sizing","grid-column-span","grid-columns","grid-flow","grid-row","grid-row-align","grid-row-sizing","grid-row-span","grid-rows","grid-template","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-shadow","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"]),i=e(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua"]),s=e(["above","absolute","activeborder","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","auto","avoid","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break-all","break-word","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","compact","condensed","contain","content","content-box","context-menu","continuous","copy","cover","crop","cross","crosshair","currentcolor","cursive","dashed","decimal","decimal-leading-zero","default","default-button","destination-atop","destination-in","destination-out","destination-over","devanagari","disc","discard","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ew-resize","expanded","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","footnotes","forwards","from","geometricPrecision","georgian","graytext","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-table","inset","inside","intrinsic","invert","italic","justify","kannada","katakana","katakana-iroha","khmer","landscape","lao","large","larger","left","level","lighter","line-through","linear","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","malayalam","match","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","overlay","overline","padding","padding-box","painted","paused","persian","plus-darker","plus-lighter","pointer","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radio","read-only","read-write","read-write-plaintext-only","relative","repeat","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","round","row-resize","rtl","run-in","running","s-resize","sans-serif","scroll","scrollbar","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","single","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","solid","somali","source-atop","source-in","source-out","source-over","space","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","white","wider","window","windowframe","windowtext","x-large","x-small","xor","xx-large","xx-small"]);CodeMirror.defineMIME("text/css",{atMediaTypes:t,atMediaFeatures:n,propertyKeywords:r,colorKeywords:i,valueKeywords:s,hooks:{"<":function(e,t){function n(e,t){var n=0,r;while((r=e.next())!=null){if(n>=2&&r==">"){t.tokenize=null;break}n=r=="-"?n+1:0}return["comment","comment"]}if(e.eat("!"))return t.tokenize=n,n(e,t)},"/":function(e,t){return e.eat("*")?(t.tokenize=o,o(e,t)):!1}},name:"css-base"}),CodeMirror.defineMIME("text/x-scss",{atMediaTypes:t,atMediaFeatures:n,propertyKeywords:r,colorKeywords:i,valueKeywords:s,allowNested:!0,hooks:{$:function(e){return e.match(/^[\w-]+/),e.peek()==":"?["variable","variable-definition"]:["variable","variable"]},"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=o,o(e,t)):["operator","operator"]},"#":function(e){return e.eat("{")?["operator","interpolation"]:(e.eatWhile(/[\w\\\-]/),["atom","hash"])}},name:"css-base"})}();