ace.define("ace/theme/bxl",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.cssClass = "ace-bxl";
exports.cssText = ".ace-bxl .ace_gutter {\
background: #f0f0f0;\
border-right: 1px solid #eee;\
color: #8F908A;\
}\
.ace-bxl.ace_editor{\
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
.ace-bxl .ace_unknown {\
border-bottom: 1px solid red;\
}\
.ace-bxl .ace_comment.ace_documentation{\
color: #F92626;\
}\
.ace-bxl .ace_comment.ace_documentation.ace_alternative{\
color: #879EFA;\
}\
.ace-bxl .ace_comment.ace_documentation.ace_mention, .ace-bxl .ace_comment.ace_documentation.ace_issue{\
border: 1px solid #D0CFCF;\
border-radius: 6px;\
background-color: whitesmoke;\
color: black;\
padding: 0 2px;\
margin: 0 -4px;\
cursor: pointer !important;\
pointer-events: auto;\
}\
body.dark .ace-bxl .ace_gutter {\
background: #31373F;\
color: #8F908A;\
border-right: 1px solid #8c8c8c;\
}\
body.dark .ace-bxl .ace_print-margin {\
width: 1px;\
background: #555651\
}\
body.dark .ace-bxl {\
background-color: #272B30;\
color: #F8F8F2\
}\
body.dark .ace-bxl .ace_cursor {\
color: #F8F8F0\
}\
body.dark .ace-bxl .ace_marker-layer .ace_selection {\
background: #49483E\
}\
body.dark .ace-bxl.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
body.dark .ace-bxl .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
body.dark .ace-bxl .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
body.dark .ace-bxl .ace_marker-layer .ace_active-line {\
background: #202020\
}\
body.dark .ace-bxl .ace_gutter-active-line {\
background-color: #272727\
}\
body.dark .ace-bxl .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
body.dark .ace-bxl .ace_invisible {\
color: #52524d\
}\
body.dark .ace-bxl .ace_entity.ace_name.ace_tag,\
body.dark .ace-bxl .ace_keyword,\
body.dark .ace-bxl .ace_meta.ace_tag,\
body.dark .ace-bxl .ace_storage {\
color: #F92672\
}\
body.dark .ace-bxl .ace_punctuation,\
body.dark .ace-bxl .ace_punctuation.ace_tag {\
color: #fff\
}\
body.dark .ace-bxl .ace_constant.ace_character,\
body.dark .ace-bxl .ace_constant.ace_language,\
body.dark .ace-bxl .ace_constant.ace_numeric,\
body.dark .ace-bxl .ace_constant.ace_other {\
color: #AE81FF\
}\
body.dark .ace-bxl .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
body.dark .ace-bxl .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
body.dark .ace-bxl .ace_support.ace_constant,\
body.dark .ace-bxl .ace_support.ace_function {\
color: #66D9EF\
}\
body.dark .ace-bxl .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
body.dark .ace-bxl .ace_storage.ace_type,\
body.dark .ace-bxl .ace_support.ace_class,\
body.dark .ace-bxl .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
body.dark .ace-bxl .ace_entity.ace_name.ace_function,\
body.dark .ace-bxl .ace_entity.ace_other,\
body.dark .ace-bxl .ace_entity.ace_other.ace_attribute-name,\
body.dark .ace-bxl .ace_variable {\
color: #A6E22E\
}\
body.dark .ace-bxl .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
body.dark .ace-bxl .ace_string {\
color: #E6DB74\
}\
body.dark .ace-bxl .ace_comment {\
color: #75715E\
}\
body.dark .ace-bxl .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}\
body.dark .ace-bxl .ace_identifier.ace_tree {\
color: #d6d6d6;\
}\
body.dark .ace-bxl .ace_autocomplete .ace_marker-layer .ace_active-line{\
background-color: #515256;\
}\
body.dark .ace-bxl .ace_editor.ace_autocomplete .ace_completion-highlight{\
color: #CEC107;\
}\
body.dark .ace-bxl .ace_indent-guide {\
border-right: none;\
margin-right: 0;\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
