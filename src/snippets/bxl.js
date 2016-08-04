define("ace/snippets/bxl",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# scope: bxl\n\
\n\
# math agent\n\
\n\
snippet math.floor\n\
	floor(${1:2.3})\n\
\n\
snippet math.ceil\n\
	ceil(${1:2.3})\n\
\n\
snippet math.round\n\
	round(${1:2.3})\n\
\n\
snippet math.random\n\
	random()\n\
\n\
snippet math.randomInt\n\
	random{\n\
		/int = ${1:6};\n\
	}\n\
\n\
snippet math.randomLong\n\
	random{\n\
		/long = ${1:6};\n\
	}\n\
\n\
# is agent\n\
\n\
snippet is.module\n\
	module(${1})\n\
\n\
snippet is.subNodes\n\
	subNodes(${1})\n\
\n\
snippet is.typeBoolean\n\
	typeBoolean(${1})\n\
\n\
snippet is.typeDate\n\
	typeDate(${1})\n\
\n\
snippet is.typeDatetime\n\
	typeDatetime(${1})\n\
\n\
snippet is.typeDouble\n\
	typeDouble(${1})\n\
\n\
snippet is.typeDecimal\n\
	typeDecimal(${1})\n\
\n\
snippet is.typeInt\n\
	typeInt(${1})\n\
\n\
snippet is.typeLong\n\
	typeLong(${1})\n\
\n\
snippet is.typeNode\n\
	typeNode(${1})\n\
\n\
snippet is.typeString\n\
	typeString(${1})\n\
\n\
snippet is.typeTime\n\
	typeTime(${1})\n\
\n\
snippet is.typeValueNN\n\
	typeValueNN(${1})\n\
\n\
snippet is.valueNE\n\
	valueNE(${1})\n\
\n\
snippet is.valueDatetime\n\
	valueDatetime(${1})\n\
\n\
snippet is.valueDate\n\
	valueDate(${1})\n\
\n\
snippet is.valueTime\n\
	valueTime(${1})\n\
\n\
snippet is.valueBoolean\n\
	valueBoolean(${1})\n\
\n\
snippet is.valueDouble\n\
	valueDouble(${1})\n\
\n\
snippet is.valueDoubleNZ\n\
	valueDoubleNZ(${1})\n\
\n\
snippet is.valueDecimal\n\
	valueDecimal(${1})\n\
\n\
snippet is.valueInt\n\
	valueInt(${1})\n\
\n\
snippet is.valueIntNZ\n\
	valueIntNZ(${1})\n\
\n\
snippet is.valueLong\n\
	valueLong(${1})\n\
\n\
snippet is.valuePathNE\n\
	valuePathNE(${1})\n\
\n\
snippet is.valueString\n\
	valueString(${1})\n\
\n\
snippet is.valueStringNE\n\
	valueStringNE(${1})\n\
\n\
# path agent\n\
\n\
snippet path.items\n\
	items(${1})\n\
\n\
snippet path.join\n\
	join(${1})\n\
\n\
snippet path.key\n\
	key(${1})\n\
\n\
snippet path.length\n\
	length(${1})\n\
\n\
snippet path.pathToTreeFocus\n\
	pathToTreeFocus(${1})\n\
\n\
snippet path.treeFocusToPath\n\
	treeFocusToPath(${1})\n\
\n\
snippet path.split\n\
	split{\n\
		/path = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
snippet path.keyAt\n\
	keyAt{\n\
		/path = ${1};\n\
		/index = ${2};\n\
	}\n\
\n\
snippet path.keyLast\n\
	keyLast(${1})\n\
\n\
snippet path.subPath\n\
	subPath{\n\
		/path = ${1};\n\
		/beginIndex = ${2};\n\
		/endIndex = ${3};\n\
	}\n\
\n\
snippet path.tail\n\
	tail(${1})\n\
\n\
snippet path.val\n\
	val(${1})\n\
\n\
snippet path.keyDelete\n\
	keyDelete{\n\
		/path = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
# date agent\n\
\n\
snippet date.add\n\
	add{\n\
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
	dateToStruct(${1})\n\
\n\
snippet date.datetimeToStruct\n\
	datetimeToStruct(${1})\n\
\n\
snippet date.now\n\
	now()\n\
\n\
snippet date.parseDatetime\n\
	parseDatetime(${1})\n\
\n\
snippet date.parseDate\n\
	parseDate(${1})\n\
\n\
snippet date.parseTime\n\
	parseTime(${1})\n\
\n\
# tree agent\n\
\n\
snippet tree.add\n\
	add{\n\
		/tree = ${1};\n\
		/add = ${2};\n\
	}\n\
\n\
snippet tree.count\n\
	count(${1})\n\
\n\
snippet tree.dumpToBxl\n\
	dumpToBxl(${1})\n\
\n\
snippet tree.dumpToString\n\
	dumpToString(${1})\n\
\n\
snippet tree.keyDelete\n\
	keyDelete{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
snippet tree.keyFirst\n\
	keyFirst(${1})\n\
\n\
snippet tree.keyLast\n\
	keyLast(${1})\n\
\n\
snippet tree.keyMoveDown\n\
	keyMoveDown{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/cycle = true;\n\
	}\n\
\n\
snippet tree.keyMoveUp\n\
	keyMoveUp{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/cycle = true;\n\
	}\n\
\n\
snippet tree.keyNext\n\
	keyNext{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/cycle = true;\n\
	}\n\
\n\
snippet tree.keyPos\n\
	keyPos{ \n\
		/tree = ${1};\n\
		/key = ${2};\n\
	}\n\
\n\
snippet tree.keysDelete\n\
	keysDelete{\n\
		/tree = ${1};\n\
		/keys{\n\
			${2}\n\
		};\n\
	}\n\
\n\
snippet tree.pathDelete\n\
	pathDelete{\n\
		/tree = ${1};\n\
		/path = ${2};\n\
	}\n\
\n\
snippet tree.reverse\n\
	reverse(${1});\n\
\n\
snippet tree.subtree\n\
	subtree{\n\
		/tree = ${1};\n\
		/beginIndex = ${2};\n\
		/endIndex = ${3};\n\
	}\n\
\n\
snippet tree.keyInsert\n\
	keyInsert{\n\
		/tree = ${1};\n\
		/key = ${2};\n\
		/addTree = ${3};\n\
		/afterKey = ${4};\n\
	}\n\
\n\
# str agent\n\
\n\
snippet str.base64decode\n\
	base64decode(${1:\"QlhM\"})\n\
\n\
snippet str.base64encode\n\
	base64encode(${1:\"Hello World!\"})\n\
\n\
snippet str.contains\n\
	contains{\n\
		/string = ${1:\"hello world\"};\n\
		/substring = ${2:\"ello\"};\n\
		/ignoreCase = true;\n\
	}\n\
\n\
snippet str.endsWith\n\
	endsWith{\n\
		/string = ${1:\"Hello\"};\n\
		/suffix= ${2:\"lo\"};\n\
	}\n\
\n\
snippet str.extractDiacritics\n\
	extractDiacritics(${1:\"héľĺó wôřlď\"})\n\
\n\
snippet str.format\n\
	format{\n\
		/string = ${1:\"Hello %%name%%\"};\n\
		/params{\n\
			${2:/name = \"World\"}\n\
		};\n\
	}\n\
\n\
snippet str.find\n\
	find{ \n\
		/string = ${1:\"hello world\"}; \n\
		/regex = ${2:\"[a-z]\"}; \n\
	}\n\
\n\
snippet str.hashMD5\n\
	hashMD5(${1:\"Hello World\"})\n\
\n\
snippet str.hashSHA1\n\
	hashSHA1(${1:\"Hello World\"})\n\
\n\
snippet str.htmlEncode\n\
	htmlEncode(${1})\n\
\n\
snippet str.initCap\n\
	initCap(${1})\n\
\n\
snippet str.join\n\
	join{\n\
		/strings = ${1};\n\
		/delimiter = ${2};\n\
	}\n\
\n\
snippet str.length\n\
	length(${1:\"Hello World\"})\n\
\n\
snippet str.justify\n\
	justify{\n\
		/string = ${1};\n\
		/length = ${2};\n\
		/char = ${3};\n\
		/type/center = ${4:true};\n\
	}\n\
\n\
snippet str.replace\n\
	replace{\n\
		/string = ${1:\"Hello World\"};\n\
		/regex = ${3:\"World\"};\n\
		/replacement = ${2:\"BXL\"};\n\
	}\n\
\n\
snippet str.split\n\
	split{\n\
		/string = ${1:\"Hello World\"};\n\
		/regex = ${2:\" \"};\n\
	}\n\
\n\
snippet str.replaceParams\n\
	replaceParams{\n\
		/string = ${1:\"Hello %%param%%\"};\n\
		/params{\n\
			/${2:param} = ${3:\"world\"};\n\
		};\n\
	}\n\
\n\
snippet str.substring\n\
	substring{\n\
		/string = ${1:\"Hello World\"};\n\
		/beginIndex = ${2:0};\n\
		/endIndex = ${3:4};\n\
	}\n\
\n\
snippet str.toLowerCase\n\
	toLowerCase(${1:\"HELLO WORLD\"})\n\
\n\
snippet str.toUpperCase\n\
	toUpperCase(${1:\"hello world\"})\n\
\n\
snippet str.trim\n\
	trim(${1:\"   hello world   \"})\n\
\n\
snippet str.startsWith\n\
	startsWith{\n\
		/string = ${1:\"Hello World\"};\n\
		/prefix= ${2:\"Hell\"};\n\
	}\n\
\n\
# server agent\n\
\n\
snippet server.getParam\n\
	getParam(${1})\n\
\n\
snippet server.session\n\
	session.read{\n\
		/context[${1:in/urlContext}] = null;\n\
	}\n\
\n\
snippet server.session.write\n\
	session.write{\n\
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
	createInstance{\n\
		/typePath${1:app/meh} = null;\n\
		/config = tmp/config; // optional\n\
	}\n\
\n\
snippet ide.getConfigType\n\
	getConfigType(${1:tmp/config})\n\
\n\
snippet ide.getModuleType\n\
	getModuleType(${1:tmp/config})\n\
\n\
snippet ide.isNewIde\n\
	isNewIde()\n\
\n\
snippet ide.moduleInstanceOfPath\n\
	moduleInstanceOfPath{\n\
		/module = ${1:tmp/module};\n\
		/parent = ${2:tmp/parent};\n\
	}\n\
\n\
snippet ide.moduleTypeOfPath\n\
	moduleTypeOfPath{\n\
		/module = ${1:tmp/module};\n\
		/typePath = ${2:tmp/typePath};\n\
	}\n\
\n\
snippet ide.pathInstanceOfPath\n\
	pathInstanceOfPath{\n\
		/module = ${1:tmp/module};\n\
		/parent = ${2:tmp/parent};\n\
	}\n\
\n\
snippet ide.registerCode\n\
	registerCode{\n\
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
snippet tryCatch\n\
	try{\n\
	  throw/${1:exception}{\n\
	    /message = \"Additional message\";\n\
	  };\n\
	} catch/$1 {\n\
	  log(loc/message);\n\
	}\n\
\n\
snippet switch\n\
	switch(${1:tmp/greeting}) {\n\
	  case \"${2:hello}\":\n\
	    ${3:// code}\n\
	    break;\n\
	  default:\n\
	  	${4:// code}\n\
	  	break;\n\
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
	}\n\
\n\
snippet dataCondition\n\
	{\n\
		/name = ${1:\"name\"};\n\
		/condType/${2:equal} = null;\n\
		/valueType/${3:string} = null;\n\
		/value = ${4:\"hello world\"};\n\
	}";
exports.scope = "bxl";

});
