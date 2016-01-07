define("ace/theme/bxl",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.cssClass = "ace-bxl";
exports.cssText = ".ace-bxl .ace_gutter {\
background: #f0f0f0;\
border-right: 1px solid #eee;\
color: #8F908A;\
}\
.ace-bxl.ace_editor{\
border: 1px solid lightgray;\
border-radius: 4px;\
background-color: white;\
margin-bottom: 1em;\
}\
.ace-bxl .ace_cursor {\
color: #666666;\
}\
.ace-bxl .ace_marker-layer .ace_selected-word {\
border: 1px solid #666666;\
border-radius: 1px;\
}\
.ace-bxl .ace_marker-layer .ace_active-line,\
.ace-bxl .ace_gutter-active-line {\
background: rgba(34, 170, 255, 0.10);\
}\
.ace-bxl .ace_marker-layer .ace_selection {\
background: rgba(0, 120, 205, 0.15);\
}\
.ace-bxl .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #666666;\
border-radius: 1px;\
}\
.ace-bxl .ace_invalid {\
color: #F8F8F0;\
background-color: #F92626;\
padding-left: 0.1em;\
padding-right: 0.1em;\
}\
.ace-bxl .ace_support.ace_function {\
color: #DD00DD;\
}\
.ace-bxl .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-bxl .ace_variable {\
color: #879EFA;\
font-weight: bold;\
}\
.ace-bxl .ace_keyword,\
.ace-bxl .ace_keyword.ace_control,\
.ace-bxl .ace_constant.ace_language {\
color: #7F0055;\
font-weight: bold;\
}\
.ace_keyword.ace_operator {\
color: black;\
font-weight: normal;\
}\
.ace-bxl .ace_identifier.ace_tree{\
color: #FF7F00;\
}\
.ace-bxl .ace_variable.ace_parameter {\
font-style: italic;\
color: #009DFF;\
}\
.ace-bxl .ace_constant.ace_numeric,\
.ace-bxl .ace_constant.ace_character,\
.ace-bxl .ace_string,\
.ace-bxl .ace_constant.ace_other {\
color: blue;\
}\
.ace-bxl .ace_comment {\
color: #007F00;\
}\
.ace-bxl .ace_indent-guide {\
border-right: 1px solid lightgray;\
margin-right: -1px; \
}\
.ace_variable.ace_language.ace_invalid.ace_illegal {\
text-decoration: line-through;\
color: red;\
background-color: inherit;\
}\
.ace-bxl .ace_comment.ace_documentation{\
color: #F92626;\
}\
.ace-bxl .ace_comment.ace_documentation.ace_alternative{\
color: #879EFA;\
}\
.ace-bxl .ace_comment.ace_documentation.ace_mention{\
border: 1px solid #D0CFCF;\
border-radius: 6px;\
background-color: whitesmoke;\
color: black;\
padding: 0 2px;\
margin: 0 -4px;\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
