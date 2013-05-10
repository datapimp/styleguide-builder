(function(){Luca.initialize("StyleBuilder",{modelBootstrap:window.StyleBuilderBootstrap||(window.StyleBuilderBootstrap={}),baseParams:{}}),StyleBuilder.config||(StyleBuilder.config={}),StyleBuilder.running_locally=!!window.location.host.match(/localhost/i),StyleBuilder.config.asset_compilation_url=window.location.host.match(/localhost/)?"http://localhost:9295/source":"http://infinite-beyond-8679.herokuapp.com/code-sync/source",StyleBuilder.config.prefixStyleContentWithVariables=!0}).call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/templates/pages/component_examples"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="row-fluid"><div class="span3 examples-list-wrapper"><h4>Examples<a href="#"><small>(Back)</small></a></h4><div class="well examples-list-container" data-region="list"></div><div class="btn btn-success btn-small add-new-example"><i class="icon icon-plus-sign icon-white"></i>&nbsp; Create</div></div><div class="span9"><div data-region="display"></div></div></div>'),e.join("")})}}.call(this)}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/templates/pages/home"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="row-fluid"><div class="span12"><h1>Welcome to the StyleBuilder Application</h1><div class="value-prop"><p>A style guide is meant to showcase the typography, color, spacing, and other visual conventions for your site. In addition to this, common UI elements such as containers, tables, form controls, grid settings, and many other components along with the proper markup and class conventions needed to properly display them on the page can be displayed.</p><p>Rather than maintaining a static document, this application allows you to use your production stylesheets and develop best coding practices directly in the browser, so you can ensure that the stylesheets in your project best represent the intentions of your visual designers.</p></div></div></div><div class="row-fluid"><div class="span12"><h3>Getting Started</h3><div class="steps-menu"><ol><li><a class="link" href="#colors">Color Palette</a><p>Define the selection of colors which make up the main color palette for your site.  These values will be available throughout your stylesheets as SASS variables</p></li><li><a class="link" href="#components">Component Examples</a><p>Show example components such as containers, forms, tables, navigation menus, etc. Allows you to show example markup and visually see the effect of the various treatment CSS classes you define in your stylesheets.</p></li></ol></div></div></div><footer><div class="row-fluid"><p>This app is powered by<a href="http://datapimp.github.io/luca"> Luca</a>  and<a href="http://datapimp.github.io/code_sync"> Code Sync</a>. Written by your boy<a href="https://github.com/datapimp"> Datapimp</a></p></div></footer>'),e.join("")})}}.call(this)}.call(this),function(){}.call(this),function(){}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.Model"),e["extends"]("Luca.Model"),e.register()}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.Collection"),e["extends"]("Luca.Collection"),e.defines({model:StyleBuilder.Model})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.models.ComponentExample"),e["extends"]("StyleBuilder.Model"),e.configuration({defaults:{id:"component-example",name:"Component Example",description:"A Component Example is some sample markup which demonstrates the effect of having a certain combination of one or more CSS classes applied to it",markup_content:".component-example\n  h5 This is what a component might look like",style_content:".component-example\n  color: #333\n  background-color: #e3e3e3",markup_content_asset_name:"component-example.jst.skim",style_content_asset_name:"component-example.css.sass"}}),e.publicMethods({compilationPayload:function(e,t){var n,r;return StyleBuilder.config.prefixStyleContentWithVariables!=null==1?e:(n=SBApp.collectionManager.get("colors"),r=t.match(/css/i)?""+n.generateSassFileContents()+"\n\n"+e:e)},markupContent:function(){var e;return e=this.get("markup_content"),_.isArray(e)?e.join(""):e},styleContent:function(){var e;return e=this.get("style_content"),_.isArray(e)?e.join(""):e}}),e.register()}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.collections.ComponentExamples"),e["extends"]("StyleBuilder.Collection"),e.defines({model:StyleBuilder.models.ComponentExample,fetch:function(){var e;return e=StyleBuilder.collections.ComponentExamples.testData,this.reset(e)}})}.call(this),function(){var e,t;t="// Edit this using SASS\n.card.elegant\n  background-color: #fff\n  padding: 20px 0px 40px 10px\n  border-radius: 3px\n  box-shadow: 0 0 6px rgba(0,0,0,0.3)\n  margin: 10px 0px\n  p\n    line-height: 32px\n  header\n    font-weight: bold\n    font-size: 24px\n\n.preview-canvas[data-active-example='elegant-card']\n  background-color: beige\n  padding: 20px",e=".card.elegant\n  header An Elegant Card\n  p Go ahead and edit the content of the markup code or the stylesheet in the editors below.\n  p Be amazed as it updates before your eyes.\n\n.row-fluid\n  .span4\n    .card.elegant\n      header\n        | Use It However\n      p you can make whatever\n  .span4\n    .card.elegant\n      header\n        | Use It However\n      p it is all up to you baby.\n  .span4\n    .card.elegant\n      header\n        | Use It However\n      p show off your style chops",StyleBuilder.collections.ComponentExamples.testData=[{id:"elegant-card",name:"Elegant Card",markup_content:e,style_content:t,style_content_asset_name:"elegant-card.css.sass",markup_content_asset_name:"elegant-card.jst.skim",description:"An elegant card description, when you would use it, where it is appropriate, etc"}]}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.models.Color"),e["extends"]("StyleBuilder.Model"),e.defines({defaults:{name:"Color Name",value:"#e3e3e3",variable:"$colorName"}})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.collections.Colors"),e["extends"]("StyleBuilder.Collection"),e.defines({model:StyleBuilder.models.Color,fetch:function(){return this.reset(StyleBuilder.collections.Colors.defaults)},importFromSassFileContents:function(e){var t,n,r,i,s,o,u,a,f,l,c,h;e==null&&(e=""),r=e.split("\n"),s=[];for(t=a=0,f=r.length;a<f;t=++a)n=r[t],n.match(/\/\/\ \w+/)&&((l=r[t+1])!=null?l.match(/^\$/):void 0)&&(i=n.split(" ")[1],h=(c=r[t+1])!=null?c.split(":"):void 0,u=h[0],o=h[1],s.push({name:i,value:o,variable:u}));return this.reset(s)},generateSassFileContents:function(){var e,t,n,r,i,s;return e=function(){var e,o,u,a,f;u=this.models,f=[];for(e=0,o=u.length;e<o;e++)n=u[e],a=n.attributes,r=a.name,i=a.value,s=a.variable,s.match(/^\$/)||(s="$"+s),t="// "+r+"\n",f.push(t+=""+s+": "+i);return f}.call(this),e.join("\n")},generateJSONFileContents:function(){var e,t,n;return e=function(){var e,t,r,i;r=this.models,i=[];for(e=0,t=r.length;e<t;e++)n=r[e],i.push(_(n.attributes).pick("name","value","variable"));return i}.call(this),t=JSON.stringify(e),"StyleBuilder.collections.Colors.defaults = "+t},exportToVariables:function(e){return $.ajax({type:"POST",url:StyleBuilder.config.asset_compilation_url,data:JSON.stringify({path:StyleBuilder.config.paletteFileJsonLocation,contents:this.generateJSONFileContents()})}),$.ajax({type:"POST",url:StyleBuilder.config.asset_compilation_url,success:e,data:JSON.stringify({path:StyleBuilder.config.paletteFileSassLocation,contents:this.generateSassFileContents()})})}}),StyleBuilder.config.paletteFileSassLocation="source/stylesheets/examples/color_palette.css.sass",StyleBuilder.config.paletteFileJsonLocation="source/javascripts/styleguide-builder/data/colors/palette.js"}.call(this),StyleBuilder.collections.Colors.defaults=[{name:"Main",value:"#000000",variable:"$main"},{name:"Alternate",value:"#35ab86",variable:"$alternate"},{name:"Boom",value:"#9a3b3b",variable:"$boom"}],function(){}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};StyleBuilder.CollectionManager=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.initialCollections=["colors","component_examples"],n}(Luca.CollectionManager)}.call(this),function(){var e,t;t=StyleBuilder.register("StyleBuilder.View"),t["extends"]("Luca.View"),t.defines({autoBindEventHandlers:!0}),e=StyleBuilder.register("StyleBuilder.Page"),e["extends"]("Luca.components.Page"),e.defines({autoBindEventHandlers:!0})}.call(this),function(){var e,t=[].slice;e=StyleBuilder.register("StyleBuilder.components.AssetEditor"),e["extends"]("StyleBuilder.View"),e.configuration({changeThrottle:1200}),e.privateMethods({beforeRender:function(){return this.$el.append(this.make("div",{"class":"asset-editor-wrapper"}))},afterRender:function(){var e,t=this;return e=this.$(".asset-editor-wrapper")[0],this.codeMirrorInstance=CodeMirror(e,{lineNumbers:!0,theme:this.theme||"lesser-dark",mode:this.mode}),this.changeHandler=_.debounce(function(e){return t.onEditorChange.call(t,e)},this.changeThrottle)},listenForChanges:function(){return this.codeMirrorInstance.on("change",this.changeHandler)},onEditorChange:function(e){var n,r,i,s,o=this;console.log("On Editor Change",arguments);if(!this.example)return;return s=this.assetName().split("."),r=s[0],i=2<=s.length?t.call(s,1):[],n=i.join("."),$.ajax({type:"POST",url:CodeSync.get("assetCompilationEndpoint"),data:JSON.stringify({name:r,extension:n,contents:this.example.compilationPayload(this.getValue(),n)}),success:function(e){if(e!=null?e.compiled:void 0)return o.trigger("example:recompiled",e.compiled,o.example)}})}}),e.publicMethods({assetName:function(){return this.example.read(""+this.role+"_asset_name")},loadExample:function(e){var t;return this.example=e,(t=this.codeMirrorInstance)!=null&&t.off("change",this.changeHandler),this.setValue(this.example.read(this.reader)),this.listenForChanges()},setValue:function(e){return this.codeMirrorInstance.setValue(e)},getValue:function(){var e;return e=this.codeMirrorInstance.getValue()}}),e.register()}.call(this),function(){}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/views/pages/component_examples/example_display_layout"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="example-display-layout"><div class="state" data-state="no-example-selected"><h3>Component Examples</h3><p>Here we display commonly used UI components, containers, etc withall of the different variations and show what can be achieved whensimply adding a certain css class.</p><p>We will show a live example of the component, with the markup neededto render the component, and any relevant style declarations thatare needed to achieve the visual effect.</p><div class="all-preview-container"></div></div><div class="state" data-state="example-selected"><h3 class="title"></h3><div class="row-fluid"><div class="span12"><p class="description"></p></div></div><div class="preview-area row-fluid"><div class="span12"><div class="preview-canvas" id="main-preview-canvas"></div></div></div><div class="code-container"><div class="row-fluid"><div class="span12"><h5>Markup</h5><div class="markup" data-region="markup_content"></div></div></div><div class="row-fluid"><div class="span12"><h5>Style</h5><div class="style" data-region="style_content"></div></div></div></div></div></div>'),e.join("")})}}.call(this)}.call(this),function(){var view;view=StyleBuilder.register("StyleBuilder.views.ExampleDisplay"),view["extends"]("StyleBuilder.Page"),view.configuration({template:"component_examples/example_display_layout",regions:{style_content:{role:"style_content",name:"style_content_editor",type:"asset_editor",mode:"sass",reader:"styleContent"},markup_content:{role:"markup_content",name:"markup_content_editor",reader:"markupContent",type:"asset_editor",mode:"haml"}}}),view.configuration({componentEvents:{"style_content example:recompiled":"onStyleCompilation","markup_content example:recompiled":"onMarkupCompilation"}}),view.privateMethods({beforeRender:function(){var e;return this.setEmptyState("on"),(e=StyleBuilder.Page.prototype.beforeRender)!=null?e.apply(this,arguments):void 0},onStyleCompilation:function(e,t){return $("style[data-example-id='"+t.id+"']").remove(),$("head").append("<style data-example-id='"+t.id+"' type='text/css'>"+e+"</style>")},onMarkupCompilation:function(compiled,example){var fn,_this=this;return fn=function(compiled){return eval("this.JST['examples/"+example.id+"']="+compiled)},fn.call(window,compiled),_.delay(function(){return _this.renderPreviewContent()},150)},setEmptyState:function(e){return e==null&&(e="off"),e==="on"?(this.$("[data-state]").hide(),this.$("[data-state='no-example-selected']").show()):(this.$("[data-state]").show(),this.$("[data-state='no-example-selected']").hide())},previewCanvas:function(){return this.$("#main-preview-canvas")},displayStyleExample:function(){return this.getStyleContent().loadExample(this.example)},displayMarkupExample:function(){return this.getMarkupContent().loadExample(this.example)}}),view.publicMethods({renderPreviewContent:function(){var e;if(this.example!=null)try{return this.previewCanvas().html(Luca.template("examples/"+this.example.id))}catch(t){return e=this.getMarkupContent().getValue(),this.getMarkupContent().setValue(""+e+" ")}},loadExample:function(e){return this.example=e,this.setEmptyState("off"),this.$("h3.title").html(this.example.read("name")),this.$("p.description").html(this.example.read("description")),this.previewCanvas().attr("data-active-example",this.example.id),this.displayMarkupExample(),this.displayStyleExample(),this.renderPreviewContent()}}),view.register()}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.views.ComponentExampleSelector"),e["extends"]("Luca.CollectionView"),e.configuration({tagName:"div",itemTagName:"div",collection:"component_examples",itemRenderer:function(e){var t;return t=e.model.get("name"),this.make("a",{"class":"link","data-model-id":e.model.id},t)},events:{"click .collection-item":function(e){var t,n;return t=this.$(e.target),t=t.closest(".collection-item"),n=this.collection.at(t.data("index")),this.trigger("on:selection",n)}}}),e.register()}.call(this),function(){}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.pages.ComponentExamples"),e["extends"]("StyleBuilder.Page"),e.configuration({collection:"component_examples",template:"pages/component_examples",regions:{display:{component:"example_display"},list:{name:"example_selector",component:"component_example_selector"}}}),e.configuration({defaultState:{current_component:void 0}}),e.configuration({componentEvents:{"example_selector on:selection":"onComponentSelection"}}),e.configuration({events:{"click .add-new-example":"addNewExample"}}),e.privateMethods({addNewExample:function(){return this.collection.add()},onComponentSelection:function(e){return SBApp.router.navigate("#components/"+e.id,!0)}}),e.privateMethods({afterInitialize:function(){return this.collection.on("reset",this.renderAllPreviews,this),this.collection.on("change",this.renderAllPreviews,this)}}),e.publicMethods({show:function(e){var t,n;return t=this.collection.get(e),n=this.getExampleDisplay(),n.loadExample(t)},index:function(){return this.getExampleDisplay().setEmptyState("on"),this.renderAllPreviews()},renderAllPreviews:function(){var e,t,n,r,i,s,o;e=this.$(".all-preview-container").empty(),s=this.collection.models,o=[];for(r=0,i=s.length;r<i;r++)t=s[r],e.append("<h4>"+t.get("name")+"<small><a href='#components/"+t.id+"'>&nbsp;Edit</a></small></h4><div class='preview-canvas' data-active-example='"+t.id+"' />"),n=this.$("[data-active-example='"+t.id+"']"),o.push(n.html(Luca.template(""+t.id)));return o}}),e.register()}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/views/pages/color_palette_editor/color_display"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="color-palette-item-display"><h5>'),e.push(this.model.get("name")),e.push("&nbsp;"),e.push(this.model.get("value")),e.push('</h5><div class="color-preview" style="width:120px;height:120px;border-radius:60px;background-color:'),e.push(this.escape(this.model.get("value"))),e.push('"></div></div>'),e.join("")})}}.call(this)}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/views/pages/color_palette_editor/color_palette_editor_layout"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="row-fluid"><div class="span12"><h3>Color Palette&nbsp;<a class="link" href="#"><small>Back</small></a></h3></div></div><form class="hide add-new-color-form"><h5>Add New Color</h5><div class="row-fluid"><div class="span4"><div class="control-group required"><label class="control-label">Name</label><div class="controls"><input name="name" type="text" /></div></div></div><div class="span4"><div class="control-group"><label class="control-label">Variable</label><div class="controls"><input name="variable" type="text" /></div></div></div><div class="span4"><div class="control-group"><label class="control-label">Color</label><div class="controls"><input class="color-picker-input" name="value" type="text" /></div></div></div></div><div class="form-actions"><div class="pull-right"><div class="btn add-new">Cancel</div><div class="btn btn-primary submit-button">Add</div></div></div></form><div class="list-container" data-region="list" style="margin-bottom: 15px"></div><div class="well toolbar"><div class="row-fluid"><div class="span3 offset3"><div class="status-area hide"><div class="progress progress-striped active"><div class="bar" style="width:0%"></div></div></div></div><div class="span6"><div class="pull-right"><div class="btn btn-primary export-variables"><i class="icon icon-chevron-right icon-white"></i>&nbsp; Export Variables</div>&nbsp;<div class="btn btn-success add-new"><i class="icon icon-white icon-plus-sign"></i>&nbsp; Add Color</div></div></div></div></div>'),e.join("")})}}.call(this)}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.views.ColorsList"),e["extends"]("Luca.components.GridLayoutView"),e.defines({collection:"colors",itemsPerRow:2,itemTemplate:"color_display"})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.pages.ColorPaletteEditor"),e["extends"]("StyleBuilder.Page"),e.configuration({collection:"colors",layout:"color_palette_editor_layout",regions:{list:{component:"colors_list"}},events:{"click .add-new":"toggleForm","click .submit-button":"submitColorForm","click .export-variables":"exportVariables"}}),e.privateMethods({exportVariables:function(e){var t,n,r=this;this.$(".status-area").removeClass("hide");for(t=n=0;n<=20;t=++n)setTimeout(function(){return r.$(".status-area .bar").css({width:""+t*5+"%"})},t*20);return this.collection.exportToVariables(function(){return r.$(".status-area").addClass("hide")})},toggleForm:function(){return this.$(".add-new-color-form").toggleClass("hide")},submitColorForm:function(){var e;return e=this.$("form.add-new-color-form"),this.collection.add({name:this.$('[name="name"]',e).val(),value:this.$('[name="value"]',e).val(),variable:this.$('[name="variable"]',e).val()}),this.$(":input",e).val("")},afterRender:function(){var e;return(e=StyleBuilder.Page.prototype.afterRender)!=null&&e.apply(this,arguments),this.$(".color-picker-input").spectrum({showInput:!0,showAlpha:!1,preferredFormat:"hex6"})}}),e.defines({index:function(){return!0}})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.pages.Home"),e["extends"]("StyleBuilder.Page"),e.defines({template:"pages/home",index:function(){return!0}})}.call(this),function(){}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.Application"),e["extends"]("Luca.Application"),e.configuration({el:"#viewport",name:"SBApp",autoBoot:!1,fluid:!1,fullscreen:!1}),e.configuration({collectionManagerClass:"StyleBuilder.CollectionManager"}),e.configuration({routes:{"":"home#index",components:"component_examples#index","components/:selected":"component_examples#show",colors:"color_palette_editor#index"}}),e.contains({component:"home"},{component:"component_examples"},{component:"color_palette_editor"}),e.register()}.call(this),function(){$(function(){var e,t;return window.SBApp=new StyleBuilder.Application,SBApp.boot(),StyleBuilder.running_locally===!0?SBApp.codeSync=new CodeSync.Client:(CodeSync.set("assetCompilationEndpoint","http://infinite-beyond-8679.herokuapp.com/code-sync/source"),CodeSync.set("serverInfoEndpoint","http://infinite-beyond-8679.herokuapp.com/code-sync/info")),(e=CodeSync.AssetEditor)!=null&&e.setHotKey("ctrl+j"),(t=CodeSync.AssetEditor)!=null&&typeof t.toggleEditor=="function"&&t.toggleEditor(),_.delay(function(){var e;return(e=CodeSync.AssetEditor)!=null?typeof e.toggleEditor=="function"?e.toggleEditor():void 0:void 0},2500)})}.call(this);