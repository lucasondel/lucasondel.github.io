/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/codemirror@5.60.0/addon/hint/show-hint.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}((function(t){"use strict";function i(t,i){if(this.cm=t,this.options=i,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var e=this;t.on("cursorActivity",this.activityFunc=function(){e.cursorActivity()})}}t.showHint=function(t,i,e){if(!i)return t.showHint(e);e&&e.async&&(i.async=!0);var n={hint:i};if(e)for(var o in e)n[o]=e[o];return t.showHint(n)},t.defineExtension("showHint",(function(e){e=function(t,i,e){var n=t.options.hintOptions,o={};for(var s in l)o[s]=l[s];if(n)for(var s in n)void 0!==n[s]&&(o[s]=n[s]);if(e)for(var s in e)void 0!==e[s]&&(o[s]=e[s]);o.hint.resolve&&(o.hint=o.hint.resolve(t,i));return o}(this,this.getCursor("start"),e);var n=this.listSelections();if(!(n.length>1)){if(this.somethingSelected()){if(!e.hint.supportsSelection)return;for(var o=0;o<n.length;o++)if(n[o].head.line!=n[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var s=this.state.completionActive=new i(this,e);s.options.hint&&(t.signal(this,"startCompletion",this),s.update(!0))}})),t.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close()}));var e=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},n=window.cancelAnimationFrame||clearTimeout;function o(t){return"string"==typeof t?t:t.text}function s(t,i){for(;i&&i!=t;){if("LI"===i.nodeName.toUpperCase()&&i.parentNode==t)return i;i=i.parentNode}}function c(i,e){this.completion=i,this.data=e,this.picked=!1;var n=this,c=i.cm,r=c.getInputField().ownerDocument,l=r.defaultView||r.parentWindow,h=this.hints=r.createElement("ul"),a=i.cm.options.theme;h.className="CodeMirror-hints "+a,this.selectedHint=e.selectedHint||0;for(var f=e.list,u=0;u<f.length;++u){var p=h.appendChild(r.createElement("li")),d=f[u],m="CodeMirror-hint"+(u!=this.selectedHint?"":" CodeMirror-hint-active");null!=d.className&&(m=d.className+" "+m),p.className=m,d.render?d.render(p,e,d):p.appendChild(r.createTextNode(d.displayText||o(d))),p.hintId=u}var g=i.options.container||r.body,v=c.cursorCoords(i.options.alignWithWord?e.from:null),y=v.left,w=v.bottom,C=!0,H=0,b=0;if(g!==r.body){var k=-1!==["absolute","relative","fixed"].indexOf(l.getComputedStyle(g).position)?g:g.offsetParent,A=k.getBoundingClientRect(),S=r.body.getBoundingClientRect();H=A.left-S.left-k.scrollLeft,b=A.top-S.top-k.scrollTop}h.style.left=y-H+"px",h.style.top=w-b+"px";var x=l.innerWidth||Math.max(r.body.offsetWidth,r.documentElement.offsetWidth),T=l.innerHeight||Math.max(r.body.offsetHeight,r.documentElement.offsetHeight);g.appendChild(h);var M,O=i.options.moveOnOverlap?h.getBoundingClientRect():new DOMRect,F=!!i.options.paddingForScrollbar&&h.scrollHeight>h.clientHeight+1;if(setTimeout((function(){M=c.getScrollInfo()})),O.bottom-T>0){var N=O.bottom-O.top;if(v.top-(v.bottom-O.top)-N>0)h.style.top=(w=v.top-N-b)+"px",C=!1;else if(N>T){h.style.height=T-5+"px",h.style.top=(w=v.bottom-O.top-b)+"px";var P=c.getCursor();e.from.ch!=P.ch&&(v=c.cursorCoords(P),h.style.left=(y=v.left-H)+"px",O=h.getBoundingClientRect())}}var E,R=O.right-x;if(R>0&&(O.right-O.left>x&&(h.style.width=x-5+"px",R-=O.right-O.left-x),h.style.left=(y=v.left-R-H)+"px"),F)for(var W=h.firstChild;W;W=W.nextSibling)W.style.paddingRight=c.display.nativeBarWidth+"px";(c.addKeyMap(this.keyMap=function(t,i){var e={Up:function(){i.moveFocus(-1)},Down:function(){i.moveFocus(1)},PageUp:function(){i.moveFocus(1-i.menuSize(),!0)},PageDown:function(){i.moveFocus(i.menuSize()-1,!0)},Home:function(){i.setFocus(0)},End:function(){i.setFocus(i.length-1)},Enter:i.pick,Tab:i.pick,Esc:i.close};/Mac/.test(navigator.platform)&&(e["Ctrl-P"]=function(){i.moveFocus(-1)},e["Ctrl-N"]=function(){i.moveFocus(1)});var n=t.options.customKeys,o=n?{}:e;function s(t,n){var s;s="string"!=typeof n?function(t){return n(t,i)}:e.hasOwnProperty(n)?e[n]:n,o[t]=s}if(n)for(var c in n)n.hasOwnProperty(c)&&s(c,n[c]);var r=t.options.extraKeys;if(r)for(var c in r)r.hasOwnProperty(c)&&s(c,r[c]);return o}(i,{moveFocus:function(t,i){n.changeActive(n.selectedHint+t,i)},setFocus:function(t){n.changeActive(t)},menuSize:function(){return n.screenAmount()},length:f.length,close:function(){i.close()},pick:function(){n.pick()},data:e})),i.options.closeOnUnfocus)&&(c.on("blur",this.onBlur=function(){E=setTimeout((function(){i.close()}),100)}),c.on("focus",this.onFocus=function(){clearTimeout(E)}));c.on("scroll",this.onScroll=function(){var t=c.getScrollInfo(),e=c.getWrapperElement().getBoundingClientRect(),n=w+M.top-t.top,o=n-(l.pageYOffset||(r.documentElement||r.body).scrollTop);if(C||(o+=h.offsetHeight),o<=e.top||o>=e.bottom)return i.close();h.style.top=n+"px",h.style.left=y+M.left-t.left+"px"}),t.on(h,"dblclick",(function(t){var i=s(h,t.target||t.srcElement);i&&null!=i.hintId&&(n.changeActive(i.hintId),n.pick())})),t.on(h,"click",(function(t){var e=s(h,t.target||t.srcElement);e&&null!=e.hintId&&(n.changeActive(e.hintId),i.options.completeOnSingleClick&&n.pick())})),t.on(h,"mousedown",(function(){setTimeout((function(){c.focus()}),20)}));var I=this.getSelectedHintRange();return 0===I.from&&0===I.to||this.scrollToActive(),t.signal(e,"select",f[this.selectedHint],h.childNodes[this.selectedHint]),!0}function r(t,i,e,n){if(t.async)t(i,n,e);else{var o=t(i,e);o&&o.then?o.then(n):n(o)}}i.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(i,e){var n=i.list[e],s=this;this.cm.operation((function(){n.hint?n.hint(s.cm,i,n):s.cm.replaceRange(o(n),n.from||i.from,n.to||i.to,"complete"),t.signal(i,"pick",n),s.cm.scrollIntoView()})),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(n(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var i=this.cm.getCursor(),o=this.cm.getLine(i.line);if(i.line!=this.startPos.line||o.length-i.ch!=this.startLen-this.startPos.ch||i.ch<t.ch||this.cm.somethingSelected()||!i.ch||this.options.closeCharacters.test(o.charAt(i.ch-1)))this.close();else{var s=this;this.debounce=e((function(){s.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var i=this,e=++this.tick;r(this.options.hint,this.cm,this.options,(function(n){i.tick==e&&i.finishUpdate(n,t)}))}},finishUpdate:function(i,e){this.data&&t.signal(this.data,"update");var n=this.widget&&this.widget.picked||e&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=i,i&&i.list.length&&(n&&1==i.list.length?this.pick(i,0):(this.widget=new c(this,i),t.signal(i,"shown")))}},c.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm;this.completion.options.closeOnUnfocus&&(t.off("blur",this.onBlur),t.off("focus",this.onFocus)),t.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(i,e){if(i>=this.data.list.length?i=e?this.data.list.length-1:0:i<0&&(i=e?0:this.data.list.length-1),this.selectedHint!=i){var n=this.hints.childNodes[this.selectedHint];n&&(n.className=n.className.replace(" CodeMirror-hint-active","")),(n=this.hints.childNodes[this.selectedHint=i]).className+=" CodeMirror-hint-active",this.scrollToActive(),t.signal(this.data,"select",this.data.list[this.selectedHint],n)}},scrollToActive:function(){var t=this.getSelectedHintRange(),i=this.hints.childNodes[t.from],e=this.hints.childNodes[t.to],n=this.hints.firstChild;i.offsetTop<this.hints.scrollTop?this.hints.scrollTop=i.offsetTop-n.offsetTop:e.offsetTop+e.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=e.offsetTop+e.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}},t.registerHelper("hint","auto",{resolve:function(i,e){var n,o=i.getHelpers(e,"hint");if(o.length){var s=function(t,i,e){var n=function(t,i){if(!t.somethingSelected())return i;for(var e=[],n=0;n<i.length;n++)i[n].supportsSelection&&e.push(i[n]);return e}(t,o);!function o(s){if(s==n.length)return i(null);r(n[s],t,e,(function(t){t&&t.list.length>0?i(t):o(s+1)}))}(0)};return s.async=!0,s.supportsSelection=!0,s}return(n=i.getHelper(i.getCursor(),"hintWords"))?function(i){return t.hint.fromList(i,{words:n})}:t.hint.anyword?function(i,e){return t.hint.anyword(i,e)}:function(){}}}),t.registerHelper("hint","fromList",(function(i,e){var n,o=i.getCursor(),s=i.getTokenAt(o),c=t.Pos(o.line,s.start),r=o;s.start<o.ch&&/\w/.test(s.string.charAt(o.ch-s.start-1))?n=s.string.substr(0,o.ch-s.start):(n="",c=o);for(var l=[],h=0;h<e.words.length;h++){var a=e.words[h];a.slice(0,n.length)==n&&l.push(a)}if(l.length)return{list:l,from:c,to:r}})),t.commands.autocomplete=t.showHint;var l={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};t.defineOption("hintOptions",null)}));
//# sourceMappingURL=/sm/f38d05194dd0e0806e10c403d9a8f32fdaaf2d2cba0319c1699513c5e8e3c4ee.map