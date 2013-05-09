model = StyleBuilder.register "StyleBuilder.models.ComponentExample"
model.extends                 "StyleBuilder.Model"

model.configuration
  defaults:
    id: "component-example"
    name: "Component Example"
    description: "A Component Example is some sample markup which demonstrates the effect of having a certain combination of one or more CSS classes applied to it"
    markup_content: ".component-example\n  h5 This is what a component might look like"
    style_content: "@import 'examples/color_palette'\n.component-example\n  color: $main\n  background-color: $alternate"
    markup_content_asset_name: "component-example.jst.skim"
    style_content_asset_name: "component-example.css.sass"

model.publicMethods
  # prefixes SASS content with the variables generated from
  # the color palette, and other settings, in case our compiler
  # environment doesn't have access to our variable declarations
  compilationPayload: (value, extension)->
    return value if StyleBuilder.config.prefixStyleContentWithVariables? is true

    colors = SBApp.collectionManager.get("colors")

    payload = if extension.match(/css/i)
      "#{ colors.generateSassFileContents() }\n\n#{ value }"
    else
      value

  markupContent: ()->
    content = @get("markup_content")
    if _.isArray(content) then content.join("") else content

  styleContent: ()->
    content = @get("style_content")
    if _.isArray(content) then content.join("") else content


model.register()
