#= require ./model
#= require ./collection
#= require_self

elegant_card_style = """// Edit this using SASS
.card.elegant
  background-color: #fff
  padding: 20px 0px 40px 10px
  border-radius: 3px
  box-shadow: 0 0 6px rgba(0,0,0,0.3)
  margin: 10px 0px
  p
    line-height: 32px
  header
    font-weight: bold
    font-size: 24px

#preview-canvas[data-active-example='elegant-card']
  background-color: beige
  padding: 20px
"""

elegant_card_markup = """
.card.elegant
  header An Elegant Card
  p Go ahead and edit the content of the markup code or the stylesheet in the editors below.
  p Be amazed as it updates before your eyes.

.row-fluid
  .span4
    .card.elegant
      header
        | Use It However
      p you can make whatever
  .span4
    .card.elegant
      header
        | Use It However
      p it is all up to you baby.
  .span4
    .card.elegant
      header
        | Use It However
      p show off your style chops
"""

StyleBuilder.collections.ComponentExamples.testData = [
  id: "elegant-card"
  name: "Elegant Card"
  markup_content: elegant_card_markup
  style_content: elegant_card_style
  style_content_asset_name: "elegant-card.css.sass"
  markup_content_asset_name: "elegant-card.jst.skim"
  description: "An elegant card description, when you would use it, where it is appropriate, etc"
]








