define("ace/snippets/bxl",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# if else\n\
snippet ife\n\
	if (${1:true}) {\n\
		${2}\n\
	} else {\n\
		${0}\n\
	}\n\
\n\
# for\n\
snippet for\n\
	for (${1:in}) {\n\
		${2:out}[forkey] = forval;\n\
	}\n\
\n\
# while\n\
snippet whi\n\
	${1:tmp/i} = 0;\n\
	while (${1} < ${2:10}) {\n\
		${3:// code}\n\
		${1} = ${1} + 1;\n\
	}\n\
\n\
# module operation call\n\
snippet $\n\
	\\$${1:module}.${2:operation}{\n\
		${3}\n\
	};\n\
\n\
# getContent\n\
snippet getContent\n\
	\\$${1:modulePath}.getContent{\n\
		/urlPath = in/urlPath/${2:moduleName};\n\
		/urlContext[in/urlContext]/${2} = null;\n\
		/paramTree = in/paramTree/${2};\n\
		/sessionTree = in/sessionTree/${2};\n\
		/dataTree = in/dataTree;\n\
	};";
exports.scope = "bxl";

});
