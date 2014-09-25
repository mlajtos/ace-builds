define("ace/snippets/bxl",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "snippet str.contains\n\
	str.contains{\n\
		/string = ${1};\n\
		/substring = ${2};\n\
		/ignoreCase = true;\n\
	};\n\
\n\
snippet str.endsWith\n\
	str.endsWith{\n\
		/string = ${1};\n\
		/suffix= ${2};\n\
	};\n\
\n\
snippet str.extractDiacritics\n\
	str.extractDiacritics(${1});\n\
\n\
snippet str.format\n\
	str.format{\n\
		/string = ${1};\n\
		/params = {\n\
			${2}\n\
	 	};\n\
	 };\n\
\n\
snippet str.find\n\
	str.find{ \n\
		/string =  ${1}; \n\
		/regex = ${2}; \n\
	};\n\
\n\
snippet str.hashMD5\n\
	str.hashMD5(${1});\n\
\n\
snippet str.hashSHA1\n\
	str.hashSHA1(${1});\n\
\n\
snippet str.htmlEncode\n\
	str.htmlEncode(${1});\n\
\n\
snippet str.initCap\n\
	str.initCap(${1});\n\
\n\
snippet str.join\n\
	str.join{\n\
		/strings = ${1};\n\
		/delimiter = ${2};\n\
	};\n\
\n\
snippet str.length\n\
	str.length(${1});\n\
\n\
snippet str.justify\n\
	str.justify{\n\
		/string = ${1};\n\
		/length = ${2};\n\
		/char = ${3};\n\
		/type/center = ${4:true};\n\
	};\n\
\n\
snippet str.replace\n\
	str.replace{\n\
		/string = ${1};\n\
		/regex = ${3};\n\
		/replacement = ${2};\n\
	};\n\
\n\
snippet str.split\n\
	str.split{\n\
		/string = ${1};\n\
		/regex = ${2};\n\
	};\n\
\n\
snippet str.replaceParams\n\
	str.replaceParams{\n\
		/string = ${1};\n\
		/params{\n\
			${2}\n\
		};\n\
	};\n\
\n\
snippet str.substring\n\
	str.substring{\n\
		/string = ${1};\n\
		/beginIndex = ${2};\n\
		/endIndex = ${3};\n\
	};\n\
\n\
snippet str.toLowerCase\n\
	str.toLowerCase(${1});\n\
\n\
snippet str.toUpperCase\n\
	str.toUpperCase(${1});\n\
\n\
snippet str.trim\n\
	str.trim(${1});\n\
\n\
snippet str.startsWith\n\
	str.startsWith{\n\
		/string = ${1};\n\
		/prefix= ${2};\n\
	};\n\
\n\
# if else\n\
snippet if\n\
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
snippet while\n\
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
