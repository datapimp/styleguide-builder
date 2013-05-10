(function(){var e;e=StyleBuilder.register("StyleBuilder.models.ComponentExample"),e["extends"]("StyleBuilder.Model"),e.configuration({defaults:{id:"component-example",name:"Component Example",description:"A Component Example is some sample markup which demonstrates the effect of having a certain combination of one or more CSS classes applied to it",markup_content:".component-example\n  h5 This is what a component might look like",style_content:".component-example\n  color: #333\n  background-color: #e3e3e3",markup_content_asset_name:"component-example.jst.skim",style_content_asset_name:"component-example.css.sass"}}),e.publicMethods({compilationPayload:function(e,t){var n,r;return StyleBuilder.config.prefixStyleContentWithVariables!=null==1?e:(n=SBApp.collectionManager.get("colors"),r=t.match(/css/i)?""+n.generateSassFileContents()+"\n\n"+e:e)},markupContent:function(){var e;return e=this.get("markup_content"),_.isArray(e)?e.join(""):e},styleContent:function(){var e;return e=this.get("style_content"),_.isArray(e)?e.join(""):e}}),e.register()}).call(this),function(){var e;e=StyleBuilder.register("StyleBuilder.collections.ComponentExamples"),e["extends"]("StyleBuilder.Collection"),e.defines({model:StyleBuilder.models.ComponentExample,fetch:function(){var e;return e=StyleBuilder.collections.ComponentExamples.testData,this.reset(e)}})}.call(this),function(){StyleBuilder.collections.ComponentExamples.testData=[{id:"elegant-card",name:"Elegant Card",markup_content:".card.elegant\n h4\n | Example Content inside of an Elegant Card.\n p\n | Go ahead and edit the content of the markup code or the stylesheet in the editors below.\n p\n | Be amazed as it updates before your eyes.\n",style_content:".card.elegant\n  padding: 20px\n  border: 1px solid #333\n  margin: 20px 0px\n  border-radius: 8px\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.9)\n  background: linear-gradient(#fff,#efefef)\n",style_content_asset_name:"elegant-card.css.sass",markup_content_asset_name:"elegant-card.jst.skim",description:"An elegant card description, when you would use it, where it is appropriate, etc"}]}.call(this);