#= require ./model
#= require ./collection
#= require_self

StyleBuilder.collections.ComponentExamples.testData = [
  id: "elegant-card"
  name: "Elegant Card"
  markup_content: ".card.elegant\n h4\n | Example Content inside of an Elegant Card.\n p\n | Go ahead and edit the content of the markup code or the stylesheet in the editors below.\n p\n | Be amazed as it updates before your eyes.\n"
  style_content: ".card.elegant\n  padding: 20px\n  border: 1px solid #333\n  margin: 20px 0px\n  border-radius: 8px\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.9)\n  background: linear-gradient(#fff,#efefef)\n"
  style_content_asset_name: "elegant-card.css.sass"
  markup_content_asset_name: "elegant-card.jst.skim"
  description: "An elegant card description, when you would use it, where it is appropriate, etc"
]







