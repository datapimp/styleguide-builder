#= require ./config
#= require_tree ./templates

#= require ./lib
#= require ./data
#= require ./views
#= require ./application


$ ->
  window.SBApp = new StyleBuilder.Application()

  SBApp.boot()

  CodeSync.util.loadStylesheet("/stylesheets/code_sync.css")

  SBApp.codeSync = new CodeSync.Client()
