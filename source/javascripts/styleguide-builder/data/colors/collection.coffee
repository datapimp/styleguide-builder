collection = StyleBuilder.register  "StyleBuilder.collections.Colors"
collection.extends                  "StyleBuilder.Collection"
collection.defines
  model: StyleBuilder.models.Color

  fetch: ()->
    @reset StyleBuilder.collections.Colors.defaults

  importFromSassFileContents: (fileContents="")->
    lines = fileContents.split("\n")

    settings = []

    for line, index in lines
      if line.match(/\/\/\ \w+/) and lines[index + 1]?.match(/^\$/)
        name = line.split(' ')[1]
        [variable,value] = lines[index + 1]?.split(':')
        settings.push({name,value,variable})

    @reset(settings)

  generateSassFileContents: ()->
    contents = for model in @models
      {name,value,variable} = model.attributes

      variable = "$#{ variable }" unless variable.match(/^\$/)

      line = "// #{ name }\n"
      line += "#{ variable }: #{ value }"

    contents.join("\n")

  generateJSONFileContents: ()->
    attributes = for model in @models
      _(model.attributes).pick 'name', 'value', 'variable'

    exportData = JSON.stringify(attributes)
    "StyleBuilder.collections.Colors.defaults = #{ exportData }"

  exportToVariables: (successCallback)->
    $.ajax
      type: "POST"
      url: StyleBuilder.config.asset_compilation_url
      data: JSON.stringify
        path: StyleBuilder.config.paletteFileJsonLocation
        contents: @generateJSONFileContents()

    $.ajax
      type: "POST"
      url: StyleBuilder.config.asset_compilation_url
      success: successCallback
      data: JSON.stringify
        path: StyleBuilder.config.paletteFileSassLocation
        contents: @generateSassFileContents()

StyleBuilder.config.paletteFileSassLocation = "source/stylesheets/examples/color_palette.css.sass"
StyleBuilder.config.paletteFileJsonLocation = "source/javascripts/styleguide-builder/data/colors/palette.js"
