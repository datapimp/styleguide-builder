#= require_tree ./color_palette_editor
#= require_self

page = StyleBuilder.register      "StyleBuilder.pages.ColorPaletteEditor"
page.extends                      "StyleBuilder.Page"

page.configuration
  collection: "colors"

  layout: "color_palette_editor_layout"

  regions:
    list:
      component: "colors_list"

  events:
    "click .add-new" : "toggleForm"
    "click .submit-button" : "submitColorForm"
    "click .export-variables": "exportVariables"

page.privateMethods
  exportVariables: (e)->
    @$('.status-area').removeClass('hide')

    for delay in [0..20]
      setTimeout ()=>
        @$('.status-area .bar').css('width': "#{ delay * 5 }%")
      , delay * 20

    @collection.exportToVariables ()=>
      @$('.status-area').addClass('hide')

  toggleForm: ()->
    @$('.add-new-color-form').toggleClass('hide')

  submitColorForm: ()->
    form = @$('form.add-new-color-form')

    @collection.add
      name: @$('[name="name"]', form).val()
      value: @$('[name="value"]', form).val()
      variable: @$('[name="variable"]', form).val()

    @$(':input',form).val('')


  afterRender: ()->
    StyleBuilder.Page::afterRender?.apply(@, arguments)

    @$('.color-picker-input').spectrum
      showInput: true
      showAlpha: false
      preferredFormat: "hex6"

page.defines
  index: ()->
    true
