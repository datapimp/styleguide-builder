collection = StyleBuilder.register  "StyleBuilder.collections.Colors"
collection.extends                  "StyleBuilder.Collection"

collection.defines

  model: StyleBuilder.models.Color

  fetch: ()->
    @reset StyleBuilder.collections.Colors.defaults

  exportToVariables: (successCallback)->
    contents = for model in @models
      {name,value,variable} = model.attributes

      variable = "$#{ variable }" unless variable.match(/^\$/)

      line = "// #{ name }\n"
      line += "#{ variable }: #{ value }"

    attributes = for model in @models
      _(model.attributes).pick 'name', 'value', 'variable'

    exportData = JSON.stringify(attributes)

    $.ajax
      type: "POST"
      url: StyleBuilder.config.asset_compilation_url
      data:
        JSON.stringify
          path: "source/javascripts/styleguide-builder/data/colors/palette.js"
          contents: "StyleBuilder.collections.Colors.defaults = #{ exportData }"

    $.ajax
      type: "POST"
      url: StyleBuilder.config.asset_compilation_url
      success: successCallback
      data: JSON.stringify
        path: "source/stylesheets/examples/color_palette.css.sass"
        contents: contents.join("\n")
