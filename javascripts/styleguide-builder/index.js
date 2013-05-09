(function(){Luca.initialize("StyleBuilder",{modelBootstrap:window.StyleBuilderBootstrap||(window.StyleBuilderBootstrap={}),baseParams:{}}),StyleBuilder.config||(StyleBuilder.config={}),StyleBuilder.config.asset_compilation_url=window.location.host.match(/localhost/)?"http://localhost:9295/source":"http://infinite-beyond-8679.herokuapp.com/code-sync/source"}).call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/templates/pages/component_examples"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="row-fluid"><div class="span3 examples-list-wrapper"><h4>Examples<a href="#"><small>(Back)</small></a></h4><div class="well examples-list-container" data-region="list"></div><div class="btn btn-success btn-small add-new-example"><i class="icon icon-plus-sign icon-white"></i>&nbsp; Create</div></div><div class="span9"><div data-region="display"></div></div></div>'),e.join("")})}}.call(this)}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/templates/pages/home"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="row-fluid"><div class="span12"><h1>Welcome to the StyleBuilder Application</h1><p>A style guide is meant to showcase the typography, color, spacing, and other visual conventions for your site. In addition to this, common UI elements such as containers, tables, form controls, grid settings, and many other components along with the proper markup and class conventions needed to properly display them on the page can be displayed.</p><p>Rather than maintaining a static document, this application allows you to use your production stylesheets and develop best coding practices directly in the browser, so you can ensure that the stylesheets in your project best represent the intentions of your visual designers.</p></div></div><div class="row-fluid well"><div class="span12"><ol class="steps"><li><a class="link" href="#typography">Typography</a><p>Define the typography preferences for your site. Define different types of headings, sub headings, paragraphs, etc</p></li><li><a class="link" href="#colors">Color Palette</a><p>Define the selection of colors which make up the main color palette for your site.  These values will be available throughout your stylesheets as SASS variables</p></li><li><a class="link" href="#components">Component Examples</a><p>Show example components such as containers, forms, tables, navigation menus, etc. Allows you to show example markup and visually see the effect of the various treatment CSS classes you define in your stylesheets.</p></li></ol></div></div>'),e.join("")})}}.call(this)}.call(this),function(){}.call(this),function(){}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.Model"),e["extends"]("Luca.Model"),e.register()}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.Collection"),e["extends"]("Luca.Collection"),e.defines({model:StyleBuilder.Model})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.models.ComponentExample"),e["extends"]("StyleBuilder.Model"),e.configuration({defaults:{id:"component-example",name:"Component Example",description:"A Component Example is some sample markup which demonstrates the effect of having a certain combination of one or more CSS classes applied to it",markup_content:".component-example\n  h5 This is what a component might look like",style_content:"@import 'examples/color_palette'\n.component-example\n  color: $main\n  background-color: $alternate",markup_content_asset_name:"component-example.jst.skim",style_content_asset_name:"component-example.css.sass"}}),e.publicMethods({markupContent:function(){var e;return e=this.get("markup_content"),_.isArray(e)?e.join(""):e},styleContent:function(){var e;return e=this.get("style_content"),_.isArray(e)?e.join(""):e}}),e.register()}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.collections.ComponentExamples"),e["extends"]("StyleBuilder.Collection"),e.defines({model:StyleBuilder.models.ComponentExample,fetch:function(){var e;return e=StyleBuilder.collections.ComponentExamples.testData,this.reset(e)}})}.call(this),function(){StyleBuilder.collections.ComponentExamples.testData=[{id:"elegant-card",name:"Elegant Card",markup_content:".card.elegant\n h4\n | Example Content inside of an Elegant Card.\n p\n | Go ahead and edit the content of the markup code or the stylesheet in the editors below.\n p\n | Be amazed as it updates before your eyes.\n",style_content:"@import 'examples/color_palette'\n\n\n.card.elegant\n  padding: 20px\n  border: 1px solid $main\n  margin: 20px 0px\n  border-radius: 8px\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.9)\n  background: linear-gradient(#fff,#efefef)\n",style_content_asset_name:"elegant-card.css.sass",markup_content_asset_name:"elegant-card.jst.skim",description:"An elegant card description, when you would use it, where it is appropriate, etc"}]}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.models.Color"),e["extends"]("StyleBuilder.Model"),e.defines({defaults:{name:"Color Name",value:"#e3e3e3",variable:"$colorName"}})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.collections.Colors"),e["extends"]("StyleBuilder.Collection"),e.defines({model:StyleBuilder.models.Color,fetch:function(){return this.reset(StyleBuilder.collections.Colors.defaults)},exportToVariables:function(e){var t,n,r,i,s,o,u,a;return n=function(){var e,t,n,r,f;n=this.models,f=[];for(e=0,t=n.length;e<t;e++)s=n[e],r=s.attributes,o=r.name,u=r.value,a=r.variable,a.match(/^\$/)||(a="$"+a),i="// "+o+"\n",f.push(i+=""+a+": "+u);return f}.call(this),t=function(){var e,t,n,r;n=this.models,r=[];for(e=0,t=n.length;e<t;e++)s=n[e],r.push(_(s.attributes).pick("name","value","variable"));return r}.call(this),r=JSON.stringify(t),$.ajax({type:"POST",url:StyleBuilder.config.asset_compilation_url,data:JSON.stringify({path:"source/javascripts/styleguide-builder/data/colors/palette.js",contents:"StyleBuilder.collections.Colors.defaults = "+r})}),$.ajax({type:"POST",url:StyleBuilder.config.asset_compilation_url,success:e,data:JSON.stringify({path:"source/stylesheets/examples/color_palette.css.sass",contents:n.join("\n")})})}})}.call(this),StyleBuilder.collections.Colors.defaults=[{name:"Main",value:"#000000",variable:"$main"},{name:"Alternate",value:"#35ab86",variable:"$alternate"},{name:"Boom",value:"#9a3b3b",variable:"$boom"}],function(){}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};StyleBuilder.CollectionManager=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.initialCollections=["colors","component_examples"],n}(Luca.CollectionManager)}.call(this),function(){var e,t;t=StyleBuilder.register("StyleBuilder.View"),t["extends"]("Luca.View"),t.defines({autoBindEventHandlers:!0}),e=StyleBuilder.register("StyleBuilder.Page"),e["extends"]("Luca.components.Page"),e.defines({autoBindEventHandlers:!0})}.call(this),function(){var e,t=[].slice;e=StyleBuilder.register("StyleBuilder.components.AssetEditor"),e["extends"]("StyleBuilder.View"),e.configuration({changeThrottle:1200}),e.privateMethods({beforeRender:function(){return this.$el.append(this.make("div",{"class":"asset-editor-wrapper"}))},afterRender:function(){var e,t=this;return e=this.$(".asset-editor-wrapper")[0],this.codeMirrorInstance=CodeMirror(e,{lineNumbers:!0,theme:this.theme||"lesser-dark",mode:this.mode}),this.changeHandler=_.debounce(function(e){return t.onEditorChange.call(t,e)},this.changeThrottle)},listenForChanges:function(){return this.codeMirrorInstance.on("change",this.changeHandler)},onEditorChange:function(e){var n,r,i,s=this;console.log("On Editor Change",arguments);if(!this.example)return;return i=this.assetName().split("."),n=i[0],r=2<=i.length?t.call(i,1):[],$.ajax({type:"POST",url:StyleBuilder.config.asset_compilation_url,data:JSON.stringify({name:n,extension:r.join("."),contents:this.getValue()}),success:function(e){if(e!=null?e.compiled:void 0)return s.trigger("example:recompiled",e.compiled,s.example)}})}}),e.publicMethods({assetName:function(){return this.example.read(""+this.role+"_asset_name")},loadExample:function(e){var t;return this.example=e,(t=this.codeMirrorInstance)!=null&&t.off("change",this.changeHandler),this.setValue(this.example.read(this.reader)),this.listenForChanges()},setValue:function(e){return this.codeMirrorInstance.setValue(e)},getValue:function(){return this.codeMirrorInstance.getValue()}}),e.register()}.call(this),function(){}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/views/pages/component_examples/example_display_layout"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="example-display-layout"><div class="state" data-state="no-example-selected"><h3>Component Examples</h3><p>Here we display commonly used UI components, containers, etc withall of the different variations and show what can be achieved whensimply adding a certain css class.</p><p>We will show a live example of the component, with the markup neededto render the component, and any relevant style declarations thatare needed to achieve the visual effect.</p></div><div class="state" data-state="example-selected"><h3 class="title"></h3><div class="row-fluid"><div class="span12"><p class="description"></p></div></div><div class="preview-area row-fluid"><div class="span12"><div id="preview-canvas"></div></div></div><div class="code-container row-fluid"><div class="span6"><h5>Markup</h5><div class="markup" data-region="markup_content"></div></div><div class="span6"><h5>Style</h5><div class="style" data-region="style_content"></div></div></div></div></div>'),e.join("")})}}.call(this)}.call(this),function(){var view;view=StyleBuilder.register("StyleBuilder.views.ExampleDisplay"),view["extends"]("StyleBuilder.Page"),view.configuration({template:"component_examples/example_display_layout",regions:{style_content:{role:"style_content",name:"style_content_editor",type:"asset_editor",mode:"sass",reader:"styleContent"},markup_content:{role:"markup_content",name:"markup_content_editor",reader:"markupContent",type:"asset_editor",mode:"haml"}}}),view.configuration({componentEvents:{"style_content example:recompiled":"onStyleCompilation","markup_content example:recompiled":"onMarkupCompilation"}}),view.privateMethods({beforeRender:function(){var e;return this.setEmptyState("on"),(e=StyleBuilder.Page.prototype.beforeRender)!=null?e.apply(this,arguments):void 0},onStyleCompilation:function(e,t){return $("style[data-example-id='"+t.id+"']").remove(),$("head").append("<style data-example-id='"+t.id+"' type='text/css'>"+e+"</style>")},onMarkupCompilation:function(compiled,example){var fn,_this=this;return fn=function(compiled){return eval("this.JST['examples/"+example.id+"']="+compiled)},fn.call(window,compiled),_.delay(function(){return _this.renderPreviewContent()},150)},setEmptyState:function(e){return e==null&&(e="off"),e==="on"?(this.$("[data-state]").hide(),this.$("[data-state='no-example-selected']").show()):(this.$("[data-state]").show(),this.$("[data-state='no-example-selected']").hide())},previewCanvas:function(){return this.$("#preview-canvas")},displayStyleExample:function(){return this.getStyleContent().loadExample(this.example)},displayMarkupExample:function(){return this.getMarkupContent().loadExample(this.example)}}),view.publicMethods({renderPreviewContent:function(){var e;if(this.example!=null)try{return this.previewCanvas().html(Luca.template("examples/"+this.example.id))}catch(t){return e=this.getMarkupContent().getValue(),this.getMarkupContent().setValue(""+e+" ")}},loadExample:function(e){return this.example=e,this.setEmptyState("off"),this.$("h3.title").html(this.example.read("name")),this.$("p.description").html(this.example.read("description")),this.displayMarkupExample(),this.displayStyleExample(),this.renderPreviewContent()}}),view.register()}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.views.ComponentExampleSelector"),e["extends"]("Luca.CollectionView"),e.configuration({tagName:"div",itemTagName:"div",collection:"component_examples",itemRenderer:function(e){var t;return t=e.model.get("name"),this.make("a",{"class":"link","data-model-id":e.model.id},t)},events:{"click .collection-item":function(e){var t,n;return t=this.$(e.target),t=t.closest(".collection-item"),n=this.collection.at(t.data("index")),this.trigger("on:selection",n)}}}),e.register()}.call(this),function(){}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.pages.ComponentExamples"),e["extends"]("StyleBuilder.Page"),e.configuration({collection:"component_examples",template:"pages/component_examples",regions:{display:{component:"example_display"},list:{name:"example_selector",component:"component_example_selector"}}}),e.configuration({defaultState:{current_component:void 0}}),e.configuration({componentEvents:{"example_selector on:selection":"onComponentSelection"}}),e.configuration({events:{"click .add-new-example":"addNewExample"}}),e.privateMethods({addNewExample:function(){return this.collection.add()},onComponentSelection:function(e){var t;return t=this.getExampleDisplay(),t.loadExample(e)}}),e.publicMethods({show:function(e){},index:function(){}}),e.register()}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/views/pages/color_palette_editor/color_display"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="color-palette-item-display"><h5>'),e.push(this.model.get("name")),e.push("&nbsp;"),e.push(this.model.get("value")),e.push('</h5><div class="color-preview" style="width:120px;height:120px;border-radius:60px;background-color:'),e.push(this.escape(this.model.get("value"))),e.push('"></div></div>'),e.join("")})}}.call(this)}.call(this),function(){this.JST||(this.JST={}),this.JST["styleguide-builder/views/pages/color_palette_editor/color_palette_editor_layout"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="row-fluid"><div class="span12"><h3>Color Palette&nbsp;<a class="link" href="#"><small>Back</small></a></h3></div></div><form class="hide add-new-color-form"><h5>Add New Color</h5><div class="row-fluid"><div class="span4"><div class="control-group required"><label class="control-label">Name</label><div class="controls"><input name="name" type="text" /></div></div></div><div class="span4"><div class="control-group"><label class="control-label">Variable</label><div class="controls"><input name="variable" type="text" /></div></div></div><div class="span4"><div class="control-group"><label class="control-label">Color</label><div class="controls"><input class="color-picker-input" name="value" type="text" /></div></div></div></div><div class="form-actions"><div class="pull-right"><div class="btn add-new">Cancel</div><div class="btn btn-primary submit-button">Add</div></div></div></form><div class="list-container" data-region="list" style="margin-bottom: 15px"></div><div class="well toolbar"><div class="row-fluid"><div class="span3 offset3"><div class="status-area hide"><div class="progress progress-striped active"><div class="bar" style="width:0%"></div></div></div></div><div class="span6"><div class="pull-right"><div class="btn btn-primary export-variables"><i class="icon icon-chevron-right icon-white"></i>&nbsp; Export Variables</div>&nbsp;<div class="btn btn-success add-new"><i class="icon icon-white icon-plus-sign"></i>&nbsp; Add Color</div></div></div></div></div>'),e.join("")})}}.call(this)}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.views.ColorsList"),e["extends"]("Luca.components.GridLayoutView"),e.defines({collection:"colors",itemsPerRow:4,itemTemplate:"color_display"})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.pages.ColorPaletteEditor"),e["extends"]("StyleBuilder.Page"),e.configuration({collection:"colors",layout:"color_palette_editor_layout",regions:{list:{component:"colors_list"}},events:{"click .add-new":"toggleForm","click .submit-button":"submitColorForm","click .export-variables":"exportVariables"}}),e.privateMethods({exportVariables:function(e){var t,n,r=this;this.$(".status-area").removeClass("hide");for(t=n=0;n<=20;t=++n)setTimeout(function(){return r.$(".status-area .bar").css({width:""+t*5+"%"})},t*20);return this.collection.exportToVariables(function(){return r.$(".status-area").addClass("hide")})},toggleForm:function(){return this.$(".add-new-color-form").toggleClass("hide")},submitColorForm:function(){var e;return e=this.$("form.add-new-color-form"),this.collection.add({name:this.$('[name="name"]',e).val(),value:this.$('[name="value"]',e).val(),variable:this.$('[name="variable"]',e).val()}),this.$(":input",e).val("")},afterRender:function(){var e;return(e=StyleBuilder.Page.prototype.afterRender)!=null&&e.apply(this,arguments),this.$(".color-picker-input").spectrum({showInput:!0,showAlpha:!1,preferredFormat:"hex6"})}}),e.defines({index:function(){return!0}})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.pages.Home"),e["extends"]("StyleBuilder.Page"),e.defines({template:"pages/home",index:function(){return!0}})}.call(this),function(){}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.Application"),e["extends"]("Luca.Application"),e.configuration({el:"#viewport",name:"SBApp",autoBoot:!1,fluid:!1,fullscreen:!1}),e.configuration({collectionManagerClass:"StyleBuilder.CollectionManager"}),e.configuration({routes:{"":"home#index",components:"component_examples#index","components/:selected":"component_examples#show",colors:"color_palette_editor#index"}}),e.contains({component:"home"},{component:"component_examples"},{component:"color_palette_editor"}),e.register()}.call(this),function(){$(function(){return window.SBApp=new StyleBuilder.Application,SBApp.boot()})}.call(this);