#= require ./config
#= require_tree ./templates

#= require ./lib
#= require ./data
#= require ./views
#= require ./application


$ ->
  window.SBApp = new StyleBuilder.Application()

  SBApp.boot()

  if StyleBuilder.running_locally is true
    SBApp.codeSync = new CodeSync.Client()
  else
    CodeSync.set "assetCompilationEndpoint", "http://infinite-beyond-8679.herokuapp.com/code-sync/source"
    CodeSync.set "serverInfoEndpoint", "http://infinite-beyond-8679.herokuapp.com/code-sync/info"

  CodeSync.AssetEditor?.setHotKey("ctrl+j")
  CodeSync.AssetEditor?.toggleEditor?()

  _.delay ()->
    CodeSync.AssetEditor?.toggleEditor?()
  , 2500

