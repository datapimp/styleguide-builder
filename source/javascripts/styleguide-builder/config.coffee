Luca.initialize "StyleBuilder",
  modelBootstrap: window.StyleBuilderBootstrap ||= {}
  baseParams: {}


StyleBuilder.config ||= {}
StyleBuilder.config.asset_compilation_url = if window.location.host.match(/localhost/) then "http://localhost:9295/source" else "http://infinite-beyond-8679.herokuapp.com/code-sync/source"