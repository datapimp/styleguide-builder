(function(){var view;view=StyleBuilder.register("StyleBuilder.views.ExampleDisplay"),view["extends"]("StyleBuilder.Page"),view.configuration({template:"component_examples/example_display_layout",regions:{style_content:{role:"style_content",name:"style_content_editor",type:"asset_editor",mode:"sass",reader:"styleContent"},markup_content:{role:"markup_content",name:"markup_content_editor",reader:"markupContent",type:"asset_editor",mode:"haml"}}}),view.configuration({componentEvents:{"style_content example:recompiled":"onStyleCompilation","markup_content example:recompiled":"onMarkupCompilation"}}),view.privateMethods({beforeRender:function(){var e;return this.setEmptyState("on"),(e=StyleBuilder.Page.prototype.beforeRender)!=null?e.apply(this,arguments):void 0},onStyleCompilation:function(e,t){return $("style[data-example-id='"+t.id+"']").remove(),$("head").append("<style data-example-id='"+t.id+"' type='text/css'>"+e+"</style>")},onMarkupCompilation:function(compiled,example){var fn,_this=this;return fn=function(compiled){return eval("this.JST['examples/"+example.id+"']="+compiled)},fn.call(window,compiled),_.delay(function(){return _this.renderPreviewContent()},150)},setEmptyState:function(e){return e==null&&(e="off"),e==="on"?(this.$("[data-state]").hide(),this.$("[data-state='no-example-selected']").show()):(this.$("[data-state]").show(),this.$("[data-state='no-example-selected']").hide())},previewCanvas:function(){return this.$("#main-preview-canvas")},displayStyleExample:function(){return this.getStyleContent().loadExample(this.example)},displayMarkupExample:function(){return this.getMarkupContent().loadExample(this.example)}}),view.publicMethods({renderPreviewContent:function(){var e;if(this.example!=null)try{return this.previewCanvas().html(Luca.template("examples/"+this.example.id))}catch(t){return e=this.getMarkupContent().getValue(),this.getMarkupContent().setValue(""+e+" ")}},loadExample:function(e){return this.example=e,this.setEmptyState("off"),this.$("h3.title").html(this.example.read("name")),this.$("p.description").html(this.example.read("description")),this.previewCanvas().attr("data-active-example",this.example.id),this.displayMarkupExample(),this.displayStyleExample(),this.renderPreviewContent()}}),view.register()}).call(this);