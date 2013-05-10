#= require ./model
#= require ./collection
#= require_self

elegant_card_style = """
// Name: Elegant Card
// Description: Use The Elegant Card Container however you want son.
.card.elegant\n
  border-radius: 3px\n
  box-shadow: 0 0 6px rbga(0,0,0,0.3)\n
  background-color: #fff\n
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
  .span4
    .card.elegant
      header
        | Use It However
  .span4
    .card.elegant
      header
        | Use It However

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








