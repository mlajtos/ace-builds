ace.define("ace/mode/bxl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e="\\b(?:WARNING|FIXME|XXX|HACK|BUG|BARLA)\\b",t="TODO",n=/https?:\/\/[^\s]+/,r="@[a-zA-Z0-9]+",i="[A-Z]+-[0-9]+",s=this.createKeywordMapper({keyword:"this|super|root|forkey|forval","keyword.control":"if|else|do|while|for|break|continue|switch|case|default|return","variable.language":"loc|in|out|cfg|data|tmp|__init__|throw|try|catch|finally","variable.language.invalid.illegal":"env","support.function":"log|warning|error|info|java|compile|exec|stack|trace","storage.type.support.function":"bool|int|float|double|string|date|time|dateTime|path","constant.language":"null|NULL|empty|EMPTY","constant.language.boolean":"true|false"},"identifier.XXX");this.$rules={start:[{token:"comment.line",regex:"\\/\\/",next:"singlelineComment"},{token:"comment.block",regex:"\\/\\*",next:"multilineComment"},{token:"string.triple",regex:"'''",next:"tripleQuotedString"},{token:"string.single",regex:"[']",next:"singleQuotedString"},{token:"string.double",regex:'"',next:"doubleQuotedString"},{token:"constant.numeric",regex:"[-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]\\d+)?)?(L|l|F|f|D|d|bd|BD)?\\b"},{token:"identifier.tree",regex:"(/[\\w]+)"},{token:"support.function.module",regex:"(\\$\\$?)",next:"operationCall"},{token:"support.function.agent",regex:"(\\w+\\.)(\\w+)"},{token:"keyword.operator",regex:"=\\[\\]|!|%|/|\\*|\\-|\\+|\\.|&|~|\\^|<<|>>|==|=|!=|<=|>=|>|<|&&|\\|\\||\\?|\\:"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:s,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"}],multilineComment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment.documentation",regex:e},{token:"comment.documentation.alternative",regex:t},{token:"comment.documentation.mention",regex:r},{token:"comment.markup.underline.link",regex:n},{token:"comment.documentation.issue",regex:i},{defaultToken:"comment"}],singlelineComment:[{token:"",regex:"^",next:"start"},{token:"comment.documentation",regex:e},{token:"comment.documentation.alternative",regex:t},{token:"comment.documentation.mention",regex:r},{token:"comment.markup.underline.link",regex:n},{token:"comment.documentation.issue",regex:i},{defaultToken:"comment.line"}],singleQuotedString:[{token:"variable.parameter",regex:"%%.*?%%"},{token:"string.escaped",regex:"[\\\\]."},{token:"string.single",regex:"[']",next:"start"},{defaultToken:"string.single"}],doubleQuotedString:[{token:"variable.parameter",regex:"%%.*?%%"},{token:"string.escaped",regex:"[\\\\]."},{token:"string.double",regex:'["]',next:"start"},{defaultToken:"string.double"}],tripleQuotedString:[{token:"string.triple",regex:"'''",next:"start"},{token:"variable.parameter",regex:"%%.*?%%"},{defaultToken:"string.triple"}],operationCall:[{token:function(e,t){return["keyword.operator","support.function.operation"]},regex:"(\\.)([\\w]+)",next:"start"},{token:"keyword.operator",regex:"\\.",next:"start"},{token:s,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"identifier.tree",regex:"(/[\\w]+)"}]}};r.inherits(s,i),t.BxlHighlightRules=s}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../behaviour").Behaviour,s=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),u=["text","paren.rparen","punctuation.operator"],a=["text","paren.rparen","punctuation.operator","comment"],f,l={},c=function(e){var t=-1;e.multiSelect&&(t=e.selection.index,l.rangeCount!=e.multiSelect.rangeCount&&(l={rangeCount:e.multiSelect.rangeCount}));if(l[t])return f=l[t];f=l[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},h=function(e,t,n,r){var i=e.end.row-e.start.row;return{text:n+t+r,selection:[0,e.start.column+1,i,e.end.column+(i?0:1)]}},p=function(){this.add("braces","insertion",function(e,t,n,r,i){var s=n.getCursorPosition(),u=r.doc.getLine(s.row);if(i=="{"){c(n);var a=n.getSelectionRange(),l=r.doc.getTextRange(a);if(l!==""&&l!=="{"&&n.getWrapBehavioursEnabled())return h(a,l,"{","}");if(p.isSaneInsertion(n,r))return/[\]\}\)]/.test(u[s.column])||n.inMultiSelectMode?(p.recordAutoInsert(n,r,"}"),{text:"{}",selection:[1,1]}):(p.recordMaybeInsert(n,r,"{"),{text:"{",selection:[1,1]})}else if(i=="}"){c(n);var d=u.substring(s.column,s.column+1);if(d=="}"){var v=r.$findOpeningBracket("}",{column:s.column+1,row:s.row});if(v!==null&&p.isAutoInsertedClosing(s,u,i))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else{if(i=="\n"||i=="\r\n"){c(n);var m="";p.isMaybeInsertedClosing(s,u)&&(m=o.stringRepeat("}",f.maybeInsertedBrackets),p.clearMaybeInsertedClosing());var d=u.substring(s.column,s.column+1);if(d==="}"){var g=r.findMatchingBracket({row:s.row,column:s.column+1},"}");if(!g)return null;var y=this.$getIndent(r.getLine(g.row))}else{if(!m){p.clearMaybeInsertedClosing();return}var y=this.$getIndent(u)}var b=y+r.getTabString();return{text:"\n"+b+"\n"+y+m,selection:[1,b.length,1,b.length]}}p.clearMaybeInsertedClosing()}}),this.add("braces","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="{"){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.end.column,i.end.column+1);if(u=="}")return i.end.column++,i;f.maybeInsertedBrackets--}}),this.add("parens","insertion",function(e,t,n,r,i){if(i=="("){c(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return h(s,o,"(",")");if(p.isSaneInsertion(n,r))return p.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(i==")"){c(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==")"){var l=r.$findOpeningBracket(")",{column:u.column+1,row:u.row});if(l!==null&&p.isAutoInsertedClosing(u,a,i))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="("){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==")")return i.end.column++,i}}),this.add("brackets","insertion",function(e,t,n,r,i){if(i=="["){c(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return h(s,o,"[","]");if(p.isSaneInsertion(n,r))return p.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if(i=="]"){c(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f=="]"){var l=r.$findOpeningBracket("]",{column:u.column+1,row:u.row});if(l!==null&&p.isAutoInsertedClosing(u,a,i))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="["){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u=="]")return i.end.column++,i}}),this.add("string_dquotes","insertion",function(e,t,n,r,i){if(i=='"'||i=="'"){c(n);var s=i,o=n.getSelectionRange(),u=r.doc.getTextRange(o);if(u!==""&&u!=="'"&&u!='"'&&n.getWrapBehavioursEnabled())return h(o,u,s,s);if(!u){var a=n.getCursorPosition(),f=r.doc.getLine(a.row),l=f.substring(a.column-1,a.column),p=f.substring(a.column,a.column+1),d=r.getTokenAt(a.row,a.column),v=r.getTokenAt(a.row,a.column+1);if(l=="\\"&&d&&/escape/.test(d.type))return null;var m=d&&/string|escape/.test(d.type),g=!v||/string|escape/.test(v.type),y;if(p==s)y=m!==g;else{if(m&&!g)return null;if(m&&g)return null;var b=r.$mode.tokenRe;b.lastIndex=0;var w=b.test(l);b.lastIndex=0;var E=b.test(l);if(w||E)return null;if(p&&!/[\s;,.})\]\\]/.test(p))return null;y=!0}return{text:y?s+s:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&(s=='"'||s=="'")){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==s)return i.end.column++,i}})};p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",u)){var i=new s(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||"text",u))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",a)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},p.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,i,f.autoInsertedLineEnd[0])||(f.autoInsertedBrackets=0),f.autoInsertedRow=r.row,f.autoInsertedLineEnd=n+i.substr(r.column),f.autoInsertedBrackets++},p.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,i)||(f.maybeInsertedBrackets=0),f.maybeInsertedRow=r.row,f.maybeInsertedLineStart=i.substr(0,r.column)+n,f.maybeInsertedLineEnd=i.substr(r.column),f.maybeInsertedBrackets++},p.isAutoInsertedClosing=function(e,t,n){return f.autoInsertedBrackets>0&&e.row===f.autoInsertedRow&&n===f.autoInsertedLineEnd[0]&&t.substr(e.column)===f.autoInsertedLineEnd},p.isMaybeInsertedClosing=function(e,t){return f.maybeInsertedBrackets>0&&e.row===f.maybeInsertedRow&&t.substr(e.column)===f.maybeInsertedLineEnd&&t.substr(0,e.column)==f.maybeInsertedLineStart},p.popAutoInsertedClosing=function(){f.autoInsertedLineEnd=f.autoInsertedLineEnd.substr(1),f.autoInsertedBrackets--},p.clearMaybeInsertedClosing=function(){f&&(f.maybeInsertedBrackets=0,f.maybeInsertedRow=-1)},r.inherits(p,i),t.CstyleBehaviour=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)}}.call(o.prototype)}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/bxl_completions",["require","exports","module"],function(e,t,n){"use strict";var r=function(){};(function(){var e={data:{pattern:{name:"aloha",attr:"bla",items:{subitem:{name:"Subitem",value:3}}}},cfg:{name:"Hello"}},t={data:[{caption:"pattern",snippet:"pattern",meta:"DATA",score:Number.MAX_VALUE},{caption:"items",snippet:"stringAttr",meta:"DATA",score:Number.MAX_VALUE}],"in":[{caption:"urlContext",snippet:"urlContext",meta:"IN",score:Number.MAX_VALUE}],out:[{caption:"content",snippet:"content",meta:"OUT",score:Number.MAX_VALUE}],cfg:[{caption:"destroyWorld",snippet:"destroyWorld",meta:"CFG",score:Number.MAX_VALUE}]};this.getCompletions=function(e,n,r,i){var s=n.getTokenAt(r.row,r.column);if(!s)return[];var o=[],u,a;if(s.type=="keyword.operator"){console.log("Path separator \u2013 ",s.value);var r={row:r.row,column:s.start},s=n.getTokenAt(r.row,r.column)}s.type==="identifier.tree"&&(console.log("Path \u2013 ",s.value),a=s.value,r={row:s.row,column:s.start},s=n.getTokenAt(r.row,r.column)),previousToken.type==="variable.language"&&(console.log("Tree \u2013 ",s.value),u=s.value),t[u]&&(o=t[u]),u=u?u:"",a=a?a:"";var f=u+a;return console.log("Input for completer: ",f),o}}).call(r.prototype),t.BxlCompletions=r}),ace.define("ace/mode/bxl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/bxl_highlight_rules","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent","ace/mode/bxl_completions"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./bxl_highlight_rules").BxlHighlightRules,o=e("../worker/worker_client").WorkerClient,u=e("./behaviour/cstyle").CstyleBehaviour,a=e("./folding/cstyle").FoldMode,f=e("./matching_brace_outdent").MatchingBraceOutdent,l=e("./bxl_completions").BxlCompletions,c=function(){this.HighlightRules=s,this.foldingRules=new a,this.$behaviour=new u,this.$outdent=new f,this.$completer=new l};r.inherits(c,i),function(){this.getCompletions=function(e,t,n,r){return this.$completer.getCompletions(e,t,n,r)},this.createWorker=function(e){var t=new o(["ace"],"ace/mode/bxl_worker","BxlWorker");return t.attachToDocument(e.getDocument()),t.on("lint",function(t){e.setAnnotations(t.data)}),t.on("terminate",function(){e.clearAnnotations()}),t.call("changeOptions",[{host:window.location.origin,project:blox.constant.BLOX_IDE_URL,service:"codeValidationPage/_validate",parameter:"sourceCode"}]),t},this.$id="ace/mode/bxl"}.call(c.prototype),t.Mode=c})