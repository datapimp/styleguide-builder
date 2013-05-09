collection = StyleBuilder.register  "StyleBuilder.collections.ComponentExamples"
collection.extends                  "StyleBuilder.Collection"

collection.defines
  model: StyleBuilder.models.ComponentExample
  fetch: ()->
    models = StyleBuilder.collections.ComponentExamples.testData
    @reset(models)