#= require ./component_examples/index
#= require_self

page = StyleBuilder.register      "StyleBuilder.pages.ComponentExamples"
page.extends                      "StyleBuilder.Page"

page.configuration
  collection: "component_examples"
  template: "pages/component_examples"
  regions:
    display:
      component: "example_display"
    list:
      name: "example_selector"
      component: "component_example_selector"

page.configuration
  defaultState:
    "current_component": undefined

page.configuration
  componentEvents:
    "example_selector on:selection": "onComponentSelection"

page.configuration
  events:
    "click .add-new-example" : "addNewExample"

page.privateMethods
  addNewExample: ()->
    @collection.add()

  onComponentSelection: (componentExample)->
    SBApp.router.navigate("#components/#{ componentExample.id }", true)

page.privateMethods
  afterInitialize: ()->
    @collection.on "reset", @renderAllPreviews, @
    @collection.on "change", @renderAllPreviews, @

page.publicMethods
  show: (selected)->
    componentExample = @collection.get(selected)
    display = @getExampleDisplay()
    display.loadExample(componentExample)

  index: ()->
    @getExampleDisplay().setEmptyState("on")
    @renderAllPreviews()

  renderAllPreviews: ()->
    container = @$('.all-preview-container').empty()

    for example in @collection.models
      container.append "<h4>#{ example.get('name') }</h4><div class='preview-canvas' data-active-example='#{ example.id }' />"
      wrapper = @$("[data-active-example='#{ example.id }']")
      wrapper.html Luca.template("#{ example.id }")


page.register()