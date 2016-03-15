ace.define("ace/snippets/bxl",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# scope: bxl\n\
\n\
\n\
# math agent\n\
\n\
snippet math.floor\n\
	math.floor(${1})\n\
\n\
snippet math.ceil\n\
	math.ceil(${1})\n\
\n\
snippet math.random\n\
	math.random()\n\
\n\
snippet math.round\n\
	math.round(${1})\n\
\n\
# is agent\n\
\n\
snippet is.module\n\
	is.module(${1})\n\
\n\
snippet is.subNodes\n\
	is.subNodes(${1})\n\
\n\
snippet is.typeBoolean\n\
	is.typeBoolean(${1})\n\
\n\
snippet is.typeDate\n\
	is.typeDate(${1})\n\
\n\
snippet is.typeDatetime\n\
	is.typeDatetime(${1})\n\
\n\
snippet is.typeDouble\n\
	is.typeDouble(${1})\n\
\n\
snippet is.typeDecimal\n\
	is.typeDecimal(${1})\n\
\n\
snippet is.typeInt\n\
	is.typeInt(${1})\n\
\n\
snippet is.typeLong\n\
	is.typeLong(${1})\n\
\n\
snippet is.typeNode\n\
	is.typeNode(${1})\n\
\n\
snippet is.typeString\n\
	is.typeString(${1})\n\
\n\
snippet is.typeTime\n\
	is.typeTime(${1})\n\
\n\
snippet is.typeValueNN\n\
	is.typeValueNN(${1})\n\
\n\
snippet is.valueNE\n\
	is.valueNE(${1})\n\
\n\
snippet is.valueDatetime\n\
	is.valueDatetime(${1})\n\
\n\
snippet is.valueDate\n\
	is.valueDate(${1})\n\
\n\
snippet is.valueTime\n\
	is.valueTime(${1})\n\
\n\
snippet is.valueBoolean\n\
	 is.valueBoolean(${1})\n\
\n\
snippet is.valueDouble\n\
	is.valueDouble(${1})\n\
\n\
snippet is.valueDoubleNZ\n\
	is.valueDoubleNZ(${1})\n\
\n\
snippet is.valueDecimal\n\
	is.valueDecimal(${1})\n\
\n\
snippet is.valueInt\n\
	is.valueInt(${1})\n\
\n\
snippet is.valueIntNZ\n\
	is.valueIntNZ(${1})\n\
\n\
snippet is.valueLong\n\
	is.valueLong(${1})\n\
\n\
snippet is.valuePathNE\n\
	is.valuePathNE(${1})\n\
\n\
snippet is.valueString\n\
	is.valueString(${1})\n\
\n\
snippet is.valueStringNE\n\
	is.valueStringNE(${1})\n\
\n\
# path agent\n\
\n\
snippet path.items\n\
	path.items(${1})\n\
\n\
snippet path.join\n\
	path.join(${1})\n\
\n\
snippet path.key\n\
	path.key(${1})\n\
\n\
snippet path.length\n\
	path.length(${1})\n\
\n\
snippet path.pathToTreeFocus\n\
	path.pathToTreeFocus(${1})\n\
\n\
snippet path.treeFocusToPath\n\
	path.treeFocusToPath(${1})\n\
\n\
snippet path.split\n\
	path.split{\n\
		/path = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
snippet path.keyAt\n\
	path.keyAt{\n\
		/path = ${1};\n\
		/index = ${2};\n\
	}\n\
\n\
snippet path.keyLast\n\
	path.keyLast(${1})\n\
\n\
snippet path.subPath\n\
	path.subPath{\n\
		/path = ${1};\n\
		/beginIndex = ${2};\n\
		/endIndex = ${3};\n\
	}\n\
\n\
snippet path.tail\n\
	path.tail(${1})\n\
\n\
snippet path.val\n\
	path.val(${1})\n\
\n\
snippet path.keyDelete\n\
	path.keyDelete{\n\
		/path = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
# date agent\n\
\n\
snippet date.add\n\
	date.add{\n\
		/datetime = ${1};\n\
		/year = ${2};\n\
		/month = ${3};\n\
		/day = ${4};\n\
		/hour = ${5};\n\
		/minute = ${6};\n\
		/second = ${7};\n\
	}\n\
\n\
snippet date.dateToStruct\n\
	date.dateToStruct(${1})\n\
\n\
snippet date.datetimeToStruct\n\
	date.datetimeToStruct(${1})\n\
\n\
snippet date.now\n\
	date.now()\n\
\n\
snippet date.parseDatetime\n\
	date.parseDatetime(${1})\n\
\n\
snippet date.parseDate\n\
	date.parseDate(${1})\n\
\n\
snippet date.parseTime\n\
	date.parseTime(${1})\n\
\n\
# tree agent\n\
\n\
snippet tree.add\n\
	tree.add{\n\
		/tree = ${1};\n\
		/add = ${2};\n\
	}\n\
\n\
snippet tree.count\n\
	tree.count(${1})\n\
\n\
snippet tree.dumpToBxl\n\
	tree.dumpToBxl(${1})\n\
\n\
snippet tree.dumpToString\n\
	tree.dumpToString(${1})\n\
\n\
snippet tree.keyDelete\n\
	tree.keyDelete{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
snippet tree.keyFirst\n\
	tree.keyFirst(${1})\n\
\n\
snippet tree.keyLast\n\
	tree.keyLast(${1})\n\
\n\
snippet tree.keyMoveDown\n\
	tree.keyMoveDown{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/cycle = true;\n\
	}\n\
\n\
snippet tree.keyMoveUp\n\
	tree.keyMoveUp{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/cycle = true;\n\
	}\n\
\n\
snippet tree.keyNext\n\
	tree.keyNext{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/cycle = true;\n\
	}\n\
\n\
snippet tree.keyPos\n\
	tree.keyPos{ \n\
		/tree = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
snippet tree.keysDelete\n\
	tree.keysDelete{\n\
		/tree = ${1};\n\
		/keys = {\n\
			${2}\n\
		};\n\
	}\n\
\n\
snippet tree.pathDelete\n\
	tree.pathDelete{\n\
		/tree = ${1};\n\
		/path = {\n\
			${2}\n\
		};\n\
	}\n\
\n\
snippet tree.reverse\n\
	tree.reverse(${1});\n\
\n\
snippet tree.subtree\n\
	tree.subtree{\n\
		/tree = ${1};\n\
		/beginIndex = ${2};\n\
		/endIndex = ${3};\n\
	}\n\
\n\
snippet tree.keyInsert\n\
	tree.keyInsert{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/addTree = ${3};\n\
		/afterKey = ${4};\n\
	}\n\
\n\
# str agent\n\
\n\
snippet str.base64decode\n\
	str.base64decode(${1:\"QlhM\"})\n\
\n\
snippet str.base64encode\n\
	str.base64encode(${1:\"Hello World!\"})\n\
\n\
snippet str.contains\n\
	str.contains{\n\
		/string = ${1:\"hello world\"};\n\
		/substring = ${2:\"ello\"};\n\
		/ignoreCase = true;\n\
	}\n\
\n\
snippet str.endsWith\n\
	str.endsWith{\n\
		/string = ${1:\"Hello\"};\n\
		/suffix= ${2:\"lo\"};\n\
	}\n\
\n\
snippet str.extractDiacritics\n\
	str.extractDiacritics(${1:\"héľĺó wôřlď\"})\n\
\n\
snippet str.format\n\
	str.format{\n\
		/string = ${1:\"Hello %%name%%\"};\n\
		/params{\n\
			${2:/name = \"World\"}\n\
		};\n\
	}\n\
\n\
snippet str.find\n\
	str.find{ \n\
		/string = ${1:\"hello world\"}; \n\
		/regex = ${2:\"[a-z]\"}; \n\
	}\n\
\n\
snippet str.hashMD5\n\
	str.hashMD5(${1:\"Hello World\"})\n\
\n\
snippet str.hashSHA1\n\
	str.hashSHA1(${1:\"Hello World\"})\n\
\n\
snippet str.htmlEncode\n\
	str.htmlEncode(${1})\n\
\n\
snippet str.initCap\n\
	str.initCap(${1})\n\
\n\
snippet str.join\n\
	str.join{\n\
		/strings = ${1};\n\
		/delimiter = ${2};\n\
	}\n\
\n\
snippet str.length\n\
	str.length(${1:\"Hello World\"})\n\
\n\
snippet str.justify\n\
	str.justify{\n\
		/string = ${1};\n\
		/length = ${2};\n\
		/char = ${3};\n\
		/type/center = ${4:true};\n\
	}\n\
\n\
snippet str.replace\n\
	str.replace{\n\
		/string = ${1:\"Hello World\"};\n\
		/regex = ${3:\"World\"};\n\
		/replacement = ${2:\"BXL\"};\n\
	}\n\
\n\
snippet str.split\n\
	str.split{\n\
		/string = ${1:\"Hello World\"};\n\
		/regex = ${2:\" \"};\n\
	}\n\
\n\
snippet str.replaceParams\n\
	str.replaceParams{\n\
		/string = ${1:\"Hello %%param%%\"};\n\
		/params{\n\
			/${2:param} = ${3:\"world\"};\n\
		};\n\
	}\n\
\n\
snippet str.substring\n\
	str.substring{\n\
		/string = ${1:\"Hello World\"};\n\
		/beginIndex = ${2:0};\n\
		/endIndex = ${3:4};\n\
	}\n\
\n\
snippet str.toLowerCase\n\
	str.toLowerCase(${1:\"HELLO WORLD\"})\n\
\n\
snippet str.toUpperCase\n\
	str.toUpperCase(${1:\"hello world\"})\n\
\n\
snippet str.trim\n\
	str.trim(${1:\"   hello world   \"})\n\
\n\
snippet str.startsWith\n\
	str.startsWith{\n\
		/string = ${1:\"Hello World\"};\n\
		/prefix= ${2:\"Hell\"};\n\
	}\n\
\n\
# server agent\n\
\n\
snippet server.getParam\n\
	server.getParam(${1})\n\
\n\
snippet server.session\n\
	server.session.read{\n\
		/context[${1:in/urlContext}] = null;\n\
	}\n\
\n\
snippet server.session.write\n\
	server.session.write{\n\
		/context[${1:in/urlContext}] = null;\n\
		/tree = ${2:tmp/tree};\n\
	}\n\
\n\
# lang agent\n\
\n\
snippet java\n\
	java{\n\
		/class = \"${1:sk.jumpsoft.blox.extension.ExtensionPackage.ExtensionClass}\";\n\
		/input{\n\
			/parameter = ${2:\"value\"};\n\
		};\n\
	}\n\
\n\
# ide agent\n\
\n\
snippet ide.createInstance\n\
	ide.createInstance{\n\
		/typePath${1:app/meh} = null;\n\
		/config = tmp/config; // optional\n\
	}\n\
\n\
snippet ide.getConfigType\n\
	ide.getConfigType(${1:tmp/config})\n\
\n\
snippet ide.getModuleType\n\
	ide.getModuleType(${1:tmp/config})\n\
\n\
snippet ide.isNewIde\n\
	ide.isNewIde()\n\
\n\
snippet ide.moduleInstanceOfPath\n\
	ide.moduleInstanceOfPath{\n\
		/module = ${1:tmp/module};\n\
		/parent = ${2:tmp/parent};\n\
	}\n\
\n\
snippet ide.moduleTypeOfPath\n\
	ide.moduleTypeOfPath{\n\
		/module = ${1:tmp/module};\n\
		/typePath = ${2:tmp/typePath};\n\
	}\n\
\n\
snippet ide.pathInstanceOfPath\n\
	ide.pathInstanceOfPath{\n\
		/module = ${1:tmp/module};\n\
		/parent = ${2:tmp/parent};\n\
	}\n\
\n\
snippet ide.registerCode\n\
	ide.registerCode{\n\
		/app = tmp/app;\n\
		/lib = tmp/lib; // only one\n\
	}\n\
\n\
\n\
# if else\n\
snippet ifelse\n\
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
snippet dataCondition\n\
	{\n\
		/name = ${1:\"name\"};\n\
		/condType/${2:equal} = null;\n\
		/valueType/${3:string} = null;\n\
		/value = ${4:\"hello world\"};\n\
	}\n\
\n\
snippet tryCatch\n\
	try{\n\
	  throw/${1:exception}{\n\
	    /message = \"Additional message\";\n\
	  };\n\
	} catch/$1 {\n\
	  log(loc/message);\n\
	}\n\
\n\
# module operation call\n\
snippet $\n\
	\\$${1:module}.${2:operation}{\n\
		${3}\n\
	};\n\
\n\
snippet formMessage\n\
	{\n\
		/type/${1:warning} = null;\n\
		/message = ${2:\"Message goes here.\"};\n\
		/reasons[]{\n\
			/message = ${3:\"Optional reason goes here.\"}\n\
		};\n\
	}";
exports.scope = "bxl";

});
