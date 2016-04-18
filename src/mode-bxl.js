define("ace/mode/bxl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var BxlHighlightRules = function() {


	var docComment = "\\b(?:WARNING|FIXME|XXX|HACK|BUG|COMPENSATION|BARLA)\\b";
	var docComment2 = "TODO";
	var urlRegex = /https?:\/\/[^\s]+/;
	var docMention = "@[a-zA-Z0-9]+";
	var docIssue = "[A-Z]+-[0-9]+";

	var keywordMapper = this.createKeywordMapper({
        "keyword": "this|super|root|forkey|forval",
        "keyword.control": "if|else|do|while|for|break|continue|switch|case|default|return|instanceof",
        "variable.language": "loc|in|out|cfg|data|tmp|__init__|src|dest|throw|try|catch|finally",
        "variable.language.invalid.illegal": "env",
        "support.function": "log|warning|error|info|java|compile|exec|stack|trace",
        "storage.type.support.function": "bool|int|long|decimal|float|double|string|date|time|dateTime|path",
        "constant.language": "null|NULL|empty|EMPTY",
        "constant.language.boolean": "true|false",
    }, "unknown");

	this.$rules = {
	    "start": [ {
			token : "comment.line",
			regex : "\\/\\/",
			next  : "singlelineComment"
        }, {
			token : "comment.block",
			regex : "\\/\\*",
			next : "multilineComment"
		}, {
			token : "string.triple",
			regex : "'''",
			next  : "tripleQuotedString"
		}, {
			token : "string.single",
			regex : '[\']',
			next  : "singleQuotedString"
		}, {
		    token : "string.double",
		    regex : '"',
		    next  : "doubleQuotedString"
		}, {
			token : "constant.numeric", // number
			regex : "[-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]\\d+)?)?(L|l|F|f|D|d|bd|BD)?\\b"
		}, {
			token : ["identifier.tree.separator", "identifier.tree"], // tree paths
			regex : "(/)([\\w]+)"
		}, {
		    token : "support.function.module",
		    regex : "\\$\\$?",
		    push  : "operationCall"
		}, {
			token : "keyword.operator",
			regex : "=\\[\\]|!|%|\/|\\*|\\-|\\+|\\.|&|~|\\^|<<|>>|==|=|:=|!=|<=|>=|>|<|&&|\\|\\||\\?|\\:"
		}, {
			token : "lparen",
			regex : "[[({]"
		}, {
			token : "rparen",
			regex : "[\\])}]"
		}, {
			token : "support.function.agent", // module operation call
			regex : "(\\w+)(\\.\\w+)+"
		}, {
			token : keywordMapper,
			regex : "[a-zA-Z_][a-zA-Z0-9_]*\\b"
		}],
		"multilineComment" : [ {
			token : "comment",
			regex : ".*?\\*\\/",
			next : "start"
		}, {
		    token : "comment.documentation",
            regex : docComment
		}, {
		    token : "comment.documentation.alternative",
            regex : docComment2
		}, {
		    token : "comment.documentation.mention",
		    regex : docMention
		}, {
		    token: "comment.markup.underline.link",
		    regex : urlRegex
		}, {
			token: "comment.documentation.issue",
			regex: docIssue
		}, {
			defaultToken : "comment"
		}],
		"singlelineComment": [{
		    token : "",
		    regex : "^",
		    next  : "start"
		}, {
		    token : "comment.documentation",
            regex : docComment
		}, {
		    token : "comment.documentation.alternative",
            regex : docComment2
		}, {
		    token : "comment.documentation.mention",
		    regex : docMention
		}, {
		    token: "comment.markup.underline.link",
		    regex : urlRegex
		}, {
			token: "comment.documentation.issue",
			regex: docIssue
		}, {
		    defaultToken: "comment.line"
		}],
		"singleQuotedString" : [{
			token : "variable.parameter",
			regex : "%%.*?%%"
		}, {
			token : "string.escaped",
			regex : "[\\\\]."
		}, {
			token : "string.single",
			regex : '[\']',
			next  : "start"
		}, {
			defaultToken : "string.single"
		}],
		"doubleQuotedString": [{
		    token : "variable.parameter",
			regex : "%%.*?%%"
		}, {
			token : "string.escaped",
			regex : "[\\\\]."
		}, {
			token : "string.double",
			regex : '["]',
			next  : "start"
		}, {
			defaultToken : "string.double"
		}],
		"tripleQuotedString"  : [{
			token : "string.triple",
			regex : "'''",
			next  : "start"
		}, {
			token : "variable.parameter",
			regex : "%%.*?%%"
		}, {
            defaultToken : "string.triple"
        }],
        "operationCall": [{
            token : function(dotOperator, operationName) { return ["keyword.operator", "support.function.operation"] },
            regex : "(\\.)([\\w]+)",
            next  : "start"
        }, {
            token : "keyword.operator",
            regex : "\\.",
            next  : "start"
        }, {
			token : keywordMapper,
			regex : "[a-zA-Z_][a-zA-Z0-9_]*\\b"
		}, {
            include: "start"  
        }]
	};

	this.normalizeRules();

};

oop.inherits(BxlHighlightRules, TextHighlightRules);

exports.BxlHighlightRules = BxlHighlightRules;

});

define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(require, exports, module) {
"use strict";

var Range = require("../range").Range;

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

define("ace/mode/bxl_completions",["require","exports","module","ace/token_iterator"], function(require, exports, module) {
"use strict";

var TokenIterator = require("../token_iterator").TokenIterator;


var BxlCompletions = function() {

};

(function() {

    this.identifierRegexps = [/[a-zA-Z_0-9\-\u00A2-\uFFFF]/];

    function index(object, prop) {
        if (object && object.hasOwnProperty(prop)) {
            return object[prop]
        } else {
            return undefined
        }
    }

    function isPathSeparator(token) {
        return (token.value === "/" && token.type !== "comment.line");
    }

    function isPathSegment(token) {
        return (token.type === "identifier.tree" || token.type === "variable.language");
    }

    function isRootPath(token) {
        return (token.type === "variable.language");
    }

    this.getCompletions = function(editor, session, pos, prefix, callback) {
        this.getKeywordCompletions(editor, session, pos, prefix, callback);
        this.getPathsCompletions(editor, session, pos, prefix, callback);
        this.getOperationCompletions(editor, session, pos, prefix, callback);
    }
    this.getPathsCompletions = function(editor, session, pos, prefix, callback) {
        var iterator = new TokenIterator(session, pos.row, pos.column);
        var token = iterator.getCurrentToken();

        var path = [];
        var relativePath = true;

        if (token) {
            if (isPathSegment(token)) {
                token = iterator.stepBackward();
            } else if (isPathSeparator(token)) {
                relativePath = true; // possibility
            }
        }

        while (token && (isPathSeparator(token) || isPathSegment(token))) {
            if (isPathSegment(token)) {
                path.unshift(token.value);
            }

            if (isRootPath(token)) {
                relativePath = false;
            }
            token = iterator.stepBackward();
        }

        var staticPaths = getStaticPathsForCompletions();
        var dynamicPaths = getDynamicPathsForCompletion(session);

        var staticSubtree = path.reduce(index, staticPaths);
        var dynamicSubtree = path.reduce(index, dynamicPaths);

        if (staticSubtree && !relativePath) {
            var completions = Object.keys(staticSubtree).map(function(key) {
                return {
                    caption: key,
                    snippet: key,
                    meta: "id",
                    score: 800
                }
            });

            callback(null, completions);
        }

        if (dynamicSubtree && !relativePath) {
            var completions = Object.keys(dynamicSubtree).map(function(key) {
                return {
                    caption: key,
                    snippet: key,
                    meta: "id",
                    score: 900
                }
            });

            callback(null, completions);
        }
    };

    function getStaticPathsForCompletions() {
        var demo = {
            "data": {
                "pattern": {
                    "name": 0,
                    "attr": 0,
                    "items": {
                        "subitem": {
                            "name": 0,
                            "value": 0
                        }
                    }
                }
            },
            "cfg": {
                "name": 0
            },
            "in": {"expand":0,"type":{"tailor":0,"file":0}},
            "out": {
                "output": 0
            }
        };

        if (window.blox && window.blox.__autocomplete__) {
            var obj = window.blox.__autocomplete__
        } else {
            var obj = demo;
        }

        return obj;
    }

    function getDynamicPathsForCompletion(session) {
        var iterator = new TokenIterator(session, 0, 0);
        var token = iterator.getCurrentToken();
        var gotTreeIdentifier = false;
        var path = [];
        var paths = [];

        while (token) {
            if (gotTreeIdentifier) {
                if (isPathSegment(token)) {
                    path.push(token.value);
                } else if (isPathSeparator(token)) {
                } else {
                    gotTreeIdentifier = false;
                    paths.push(path);
                    path = [];
                }
            } else {
                if (isRootPath(token)) {
                    gotTreeIdentifier = true;
                    path.push(token.value);
                }
            }

            token = iterator.stepForward();
        }

        return pathsToObject(paths);
    }

    function pathsToObject(paths) {
        var obj = {};

        paths.forEach(function(path){
            var p = obj;
            for (var i = 0; i < path.length; i++) {
                    if (p.hasOwnProperty(path[i])) {
                        p = p[path[i]];
                    } else {
                        p[path[i]] = {};
                        p = p[path[i]];
                    }
                    
                }    
        });

        return obj;
    }

    this.getKeywordCompletions = function(editor, session, pos, prefix, callback) {
        var completions = session.$mode.$keywordList.map(function(word) {
            return {
                caption: word,
                snippet: word,
                score: 500,
                meta: "keyword"
            };
        });

        callback(null, completions);
    }

    this.getOperationList = function() {
        var operations = {
            "getDisplayContent": {
                "in": {
                    "urlPath": 0,
                    "urlContext": 0,
                    "paramTree": 0,
                    "sessionTree": 0,
                    "attrKey": 0,
                    "attrData": 0,
                    "rowData": 0,
                    "rowErrors": 0
                },
                "out": {
                    "content": 0,
                    "attrData": 0,
                    "rowData": 0,
                    "rowErrors": 0
                }
            },
            "getEditContent": {
                "in": {},
                "out": {}
            },
            "getHiddenContent": {
                "in": {},
                "out": {}
            },
            "_getContent": {
                "in": {},
                "out": {}
            }
        };

        if (window.blox && window.blox.__autocomplete__ && window.blox.__autocomplete__.this) {
            var obj = window.blox.__autocomplete__.this
        } else {
            var obj = operations;
        }

        return obj;
    }


    this.getOperationCompletions = function(editor, session, pos, prefix, callback) {
        var operations = this.getOperationList();

        var iterator = new TokenIterator(session, pos.row, pos.column);
        var token = iterator.getCurrentToken();

        if (token && token.type === "support.function.operation") {
            token = iterator.stepBackward();
        }

        if (token && token.type === "keyword.operator" && token.value === ".") {
            token = iterator.stepBackward();

            if (token && token.type === "keyword" && token.value === "this") {
                token = iterator.stepBackward();

                if (token && token.type === "support.function.module" && token.value === "$") {
                    var completions = Object.keys(operations).map(function(key) {
                        var inConstraints = operations[key].hasOwnProperty("in") ? Object.keys(operations[key].in).map(function(key) {
                            return "&nbsp;/" + key + "<br>"
                        }).join("") : "";

                        if (inConstraints !== "") {
                            inConstraints = "<hr><i>Input Constraints:</i><br>" + inConstraints
                        }

                        var outConstraints = operations[key].hasOwnProperty("out") ? Object.keys(operations[key].out).map(function(key) {
                            return "&nbsp;/" + key + "<br>"
                        }).join("") : "";

                        if (outConstraints !== "") {
                            outConstraints = "<hr><i>Output Constraints:</i><br>" + outConstraints
                        }

                        if (inConstraints !== "" && outConstraints !== "") {
                            var operationTitle = "Operation <b>" + key + "</b>"
                        } else {
                            var operationTitle = "";
                        }

                        if (operationTitle !== "") {
                            var docHTML = operationTitle + inConstraints + outConstraints;
                        } else {
                            docHTML = null
                        }

                        return {
                            caption: key,
                            snippet: key,
                            meta: "operation",
                            docHTML: docHTML,
                            score: 1000
                        }
                    });

                    callback(null, completions);
                }
            }
        }
    }

}).call(BxlCompletions.prototype);

exports.BxlCompletions = BxlCompletions;
});

define("ace/mode/bxl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/bxl_highlight_rules","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent","ace/mode/bxl_completions"], function(require, exports, module) {

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var BxlHighlightRules = require("./bxl_highlight_rules").BxlHighlightRules;
var WorkerClient = require("../worker/worker_client").WorkerClient;
var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
var FoldMode = require("./folding/cstyle").FoldMode;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var BxlCompletions = require("./bxl_completions").BxlCompletions;

var Mode = function() {
    this.HighlightRules = BxlHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = new CstyleBehaviour();
    this.$outdent = new MatchingBraceOutdent();
    this.completer = new BxlCompletions();

    var highlighter = new BxlHighlightRules();
    this.$keywordList = highlighter.$keywordList;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};

	this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/bxl_worker", "BxlWorker");
        worker.attachToDocument(session.getDocument());

        worker.on("lint", function(results) {
            session.setAnnotations(results.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        worker.call("changeOptions", [{
            host: window.location.origin, // blox.constant.
            project: blox.constant.BLOX_IDE_URL,
            service: "codeValidationPage/_validate",
            parameter: "sourceCode"
        }]);

        return worker;
    }

    this.$id = "ace/mode/bxl";

}).call(Mode.prototype);

exports.Mode = Mode;
});
