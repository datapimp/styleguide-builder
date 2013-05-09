(function(){var e;e=StyleBuilder.register("StyleBuilder.Model"),e["extends"]("Luca.Model"),e.register()}).call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.Collection"),e["extends"]("Luca.Collection"),e.defines({model:StyleBuilder.Model})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.models.ComponentExample"),e["extends"]("StyleBuilder.Model"),e.configuration({defaults:{id:"component-example",name:"Component Example",description:"A Component Example is some sample markup which demonstrates the effect of having a certain combination of one or more CSS classes applied to it",markup_content:".component-example\n  h5 This is what a component might look like",style_content:"@import 'examples/color_palette'\n.component-example\n  color: $main\n  background-color: $alternate",markup_content_asset_name:"component-example.jst.skim",style_content_asset_name:"component-example.css.sass"}}),e.publicMethods({markupContent:function(){var e;return e=this.get("markup_content"),_.isArray(e)?e.join(""):e},styleContent:function(){var e;return e=this.get("style_content"),_.isArray(e)?e.join(""):e}}),e.register()}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.collections.ComponentExamples"),e["extends"]("StyleBuilder.Collection"),e.defines({model:StyleBuilder.models.ComponentExample,fetch:function(){var e;return e=StyleBuilder.collections.ComponentExamples.testData,this.reset(e)}})}.call(this),function(){StyleBuilder.collections.ComponentExamples.testData=[{id:"elegant-card",name:"Elegant Card",markup_content:".card.elegant\n h4\n | Example Content inside of an Elegant Card.\n p\n | Go ahead and edit the content of the markup code or the stylesheet in the editors below.\n p\n | Be amazed as it updates before your eyes.\n",style_content:"@import 'examples/color_palette'\n\n\n.card.elegant\n  padding: 20px\n  border: 1px solid $main\n  margin: 20px 0px\n  border-radius: 8px\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.9)\n  background: linear-gradient(#fff,#efefef)\n",style_content_asset_name:"elegant-card.css.sass",markup_content_asset_name:"elegant-card.jst.skim",description:"An elegant card description, when you would use it, where it is appropriate, etc"}]}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.models.Color"),e["extends"]("StyleBuilder.Model"),e.defines({defaults:{name:"Color Name",value:"#e3e3e3",variable:"$colorName"}})}.call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.collections.Colors"),e["extends"]("StyleBuilder.Collection"),e.defines({model:StyleBuilder.models.Color,fetch:function(){return this.reset(StyleBuilder.collections.Colors.defaults)},exportToVariables:function(e){var t,n,r,i,s,o,u,a;return n=function(){var e,t,n,r,f;n=this.models,f=[];for(e=0,t=n.length;e<t;e++)s=n[e],r=s.attributes,o=r.name,u=r.value,a=r.variable,a.match(/^\$/)||(a="$"+a),i="// "+o+"\n",f.push(i+=""+a+": "+u);return f}.call(this),t=function(){var e,t,n,r;n=this.models,r=[];for(e=0,t=n.length;e<t;e++)s=n[e],r.push(_(s.attributes).pick("name","value","variable"));return r}.call(this),r=JSON.stringify(t),$.ajax({type:"POST",url:StyleBuilder.config.asset_compilation_url,data:JSON.stringify({path:"source/javascripts/styleguide-builder/data/colors/palette.js",contents:"StyleBuilder.collections.Colors.defaults = "+r})}),$.ajax({type:"POST",url:StyleBuilder.config.asset_compilation_url,success:e,data:JSON.stringify({path:"source/stylesheets/examples/color_palette.css.sass",contents:n.join("\n")})})}})}.call(this),StyleBuilder.collections.Colors.defaults=[{name:"Main",value:"#000000",variable:"$main"},{name:"Alternate",value:"#35ab86",variable:"$alternate"},{name:"Boom",value:"#9a3b3b",variable:"$boom"}],function(){}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};StyleBuilder.CollectionManager=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.initialCollections=["colors","component_examples"],n}(Luca.CollectionManager)}.call(this);