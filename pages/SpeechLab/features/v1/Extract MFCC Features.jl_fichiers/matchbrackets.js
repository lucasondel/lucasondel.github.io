/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/codemirror@5.60.0/addon/edit/matchbrackets.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}((function(t){var e=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),n=t.Pos,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function i(t){return t&&t.bracketRegex||/[(){}[\]]/}function c(t,e,c){var o=t.getLineHandle(e.line),h=e.ch-1,l=c&&c.afterCursor;null==l&&(l=/(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className));var s=i(c),f=!l&&h>=0&&s.test(o.text.charAt(h))&&r[o.text.charAt(h)]||s.test(o.text.charAt(h+1))&&r[o.text.charAt(++h)];if(!f)return null;var u=">"==f.charAt(1)?1:-1;if(c&&c.strict&&u>0!=(h==e.ch))return null;var m=t.getTokenTypeAt(n(e.line,h+1)),g=a(t,n(e.line,h+(u>0?1:0)),u,m,c);return null==g?null:{from:n(e.line,h),to:g&&g.pos,match:g&&g.ch==f.charAt(0),forward:u>0}}function a(t,e,c,a,o){for(var h=o&&o.maxScanLineLength||1e4,l=o&&o.maxScanLines||1e3,s=[],f=i(o),u=c>0?Math.min(e.line+l,t.lastLine()+1):Math.max(t.firstLine()-1,e.line-l),m=e.line;m!=u;m+=c){var g=t.getLine(m);if(g){var d=c>0?0:g.length-1,k=c>0?g.length:-1;if(!(g.length>h))for(m==e.line&&(d=e.ch-(c<0?1:0));d!=k;d+=c){var p=g.charAt(d);if(f.test(p)&&(void 0===a||(t.getTokenTypeAt(n(m,d+1))||"")==(a||""))){var v=r[p];if(v&&">"==v.charAt(1)==c>0)s.push(p);else{if(!s.length)return{pos:n(m,d),ch:p};s.pop()}}}}}return m-c!=(c>0?t.lastLine():t.firstLine())&&null}function o(t,r,i){for(var a=t.state.matchBrackets.maxHighlightLineLength||1e3,o=i&&i.highlightNonMatching,h=[],l=t.listSelections(),s=0;s<l.length;s++){var f=l[s].empty()&&c(t,l[s].head,i);if(f&&(f.match||!1!==o)&&t.getLine(f.from.line).length<=a){var u=f.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";h.push(t.markText(f.from,n(f.from.line,f.from.ch+1),{className:u})),f.to&&t.getLine(f.to.line).length<=a&&h.push(t.markText(f.to,n(f.to.line,f.to.ch+1),{className:u}))}}if(h.length){e&&t.state.focused&&t.focus();var m=function(){t.operation((function(){for(var t=0;t<h.length;t++)h[t].clear()}))};if(!r)return m;setTimeout(m,800)}}function h(t){t.operation((function(){t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null),t.state.matchBrackets.currentlyHighlighted=o(t,!1,t.state.matchBrackets)}))}function l(t){t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)}t.defineOption("matchBrackets",!1,(function(e,n,r){r&&r!=t.Init&&(e.off("cursorActivity",h),e.off("focus",h),e.off("blur",l),l(e)),n&&(e.state.matchBrackets="object"==typeof n?n:{},e.on("cursorActivity",h),e.on("focus",h),e.on("blur",l))})),t.defineExtension("matchBrackets",(function(){o(this,!0)})),t.defineExtension("findMatchingBracket",(function(t,e,n){return(n||"boolean"==typeof e)&&(n?(n.strict=e,e=n):e=e?{strict:!0}:null),c(this,t,e)})),t.defineExtension("scanForBracket",(function(t,e,n,r){return a(this,t,e,n,r)}))}));
//# sourceMappingURL=/sm/6036d65978fb523cd5ae74a9242decdf7d5488aa7fd530a5c44e2a968c98f0d2.map