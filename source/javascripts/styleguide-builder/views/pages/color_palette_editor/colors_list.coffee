view = StyleBuilder.register    "StyleBuilder.views.ColorsList"
view.extends                    "Luca.components.GridLayoutView"

view.defines
  collection: "colors"
  itemsPerRow: 2
  itemTemplate: "color_display"