(function(){var e;e=StyleBuilder.register("StyleBuilder.Application"),e["extends"]("Luca.Application"),e.configuration({el:"#viewport",name:"SBApp",autoBoot:!1,fluid:!1,fullscreen:!1}),e.configuration({collectionManagerClass:"StyleBuilder.CollectionManager"}),e.configuration({routes:{"":"home#index",components:"component_examples#index","components/:selected":"component_examples#show",colors:"color_palette_editor#index"}}),e.contains({component:"home"},{component:"component_examples"},{component:"color_palette_editor"}),e.register()}).call(this);