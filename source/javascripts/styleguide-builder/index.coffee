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

  CodeSync.AssetEditor?.setHotKey("ctrl+j")
  CodeSync.AssetEditor.toggleEditor()

