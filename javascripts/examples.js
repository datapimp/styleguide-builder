(function(){this.JST||(this.JST={}),this.JST["examples/elegant-card"]=function(){return this.Skim={access:function(e){var t;return t=this[e],typeof t=="function"&&(t=t.call(this)),t===!0?[this]:t===!1||t==null?!1:Object.prototype.toString.call(t)!=="[object Array]"?[t]:t.length===0?!1:t},withContext:function(e,t){var n;return n=function(e){var t;return t=function(){},t.prototype=e,new t},e=n(e),e.safe||(e.safe=this.safe||function(e){var t;return(e!=null?e.skimSafe:void 0)?e:(t=new String(e!=null?e:""),t.skimSafe=!0,t)}),e.escape||(e.escape=this.escape||function(e){return e==null?"":e.skimSafe?e:this.safe((""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\//g,"&#47;"))}),t.call(e)}},function(e){return e==null&&(e={}),Skim.withContext.call({},e,function(){var e;return e=[],e.push('<div class="card elegant"><header>An Elegant Card</header><p>Go ahead and edit the content of the markup code or the stylesheet in the editors below.</p><p>Be amazed as it updates before your eyes.</p></div><div class="row-fluid"><div class="span4"><div class="card elegant"><header>Use It However</header><p>you can make whatever</p></div></div><div class="span4"><div class="card elegant"><header>Use It However</header><p>it is all up to you baby.</p></div></div><div class="span4"><div class="card elegant"><header>Use It However</header><p>show off your style chops</p></div></div></div>'),e.join("")})}}.call(this)}).call(this),function(){}.call(this);