Luca.initialize "StyleBuilder",
  modelBootstrap: window.StyleBuilderBootstrap ||= {}
  baseParams: {}


StyleBuilder.config ||= {}

StyleBuilder.running_locally = !!(window.location.host.match(/localhost/i))

StyleBuilder.config.asset_compilation_url = if window.location.host.match(/localhost/) then "http://localhost:9295/source" else "http://infinite-beyond-8679.herokuapp.com/code-sync/source"

# If we're running locally, or inside of a rails app
# then this isn't necesary.  If we're running on the github pages host
# with no backend, then we will be using a code sync backend which doesn't
# have our variable files in its asset paths just yet.
StyleBuilder.config.prefixStyleContentWithVariables = true