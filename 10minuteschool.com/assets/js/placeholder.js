!function(){var e="placeholder"in document.createElement("input");var r=Object.freeze({START:"start",STOP:"stop",NOTHING:!1}),l={letterDelay:100,sentenceDelay:1e3,loop:!1,startOnFocus:!0,shuffle:!1,showCursor:!0,cursor:"|",autoStart:!1,onFocusAction:r.START,onBlurAction:r.STOP};function s(t,o,e){var s,n;if(this.el=t,this.texts=o,e=e||{},this.options=function(t,o){var e={};for(var s in t)e[s]=void 0===o[s]?t[s]:o[s];return e}(l,e),this.options.startOnFocus||(console.warn("Superplaceholder.js: `startOnFocus` option has been deprecated. Please use `onFocusAction`, `onBlurAction` and `autoStart`"),this.options.autoStart=!0,this.options.onFocusAction=r.NOTHING,this.options.onBlurAction=r.NOTHING),this.timeouts=[],this.isPlaying=!1,this.options.shuffle)for(var i=this.texts.length;i--;)n=~~(Math.random()*i),s=this.texts[n],this.texts[n]=this.texts[i],this.texts[i]=s;this.begin()}s.prototype.begin=function(){var t=this;t.originalPlaceholder=t.el.getAttribute("placeholder"),(t.options.onFocusAction||t.options.onBlurAction)&&(t.listeners={focus:t.onFocus.bind(t),blur:t.onBlur.bind(t)},t.el.addEventListener("focus",t.listeners.focus),t.el.addEventListener("blur",t.listeners.blur)),t.options.autoStart&&t.processText(0)},s.prototype.onFocus=function(){if(this.options.onFocusAction===r.START){if(this.isInProgress())return;this.processText(0)}else this.options.onFocusAction===r.STOP&&this.cleanUp()},s.prototype.onBlur=function(){if(this.options.onBlurAction===r.STOP)this.cleanUp();else if(this.options.onBlurAction===r.START){if(this.isInProgress())return;this.processText(0)}},s.prototype.cleanUp=function(){for(var t=this.timeouts.length;t--;)clearTimeout(this.timeouts[t]);null===this.originalPlaceholder?this.el.removeAttribute("placeholder"):this.el.setAttribute("placeholder",this.originalPlaceholder),this.timeouts.length=0,this.isPlaying=!1},s.prototype.isInProgress=function(){return this.isPlaying},s.prototype.typeString=function(o,e){var t,s=this;if(!o)return!1;function n(t){s.el.setAttribute("placeholder",o.substr(0,t+1)+(t!==o.length-1&&s.options.showCursor?s.options.cursor:"")),t===o.length-1&&e()}for(var i=0;i<o.length;i++)t=setTimeout(n,i*s.options.letterDelay,i),s.timeouts.push(t)},s.prototype.processText=function(t){var o,e=this;this.isPlaying=!0,e.typeString(e.texts[t],function(){e.timeouts.length=0,e.options.loop||e.texts[t+1]||(e.isPlaying=!1),o=setTimeout(function(){e.processText(e.options.loop?(t+1)%e.texts.length:t+1)},e.options.sentenceDelay),e.timeouts.push(o)})};var t=function(t){if(e){var o=new s(t.el,t.sentences,t.options);return{start:function(){o.isInProgress()||o.processText(0)},stop:function(){o.cleanUp()},destroy:function(){for(var t in o.cleanUp(),o.listeners)o.el.removeEventListener(t,o.listeners[t])}}}};t.Actions=r,"object"==typeof exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):window.superplaceholder=t}();