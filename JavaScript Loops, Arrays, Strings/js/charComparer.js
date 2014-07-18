function compareChars(first, second) {
	var equal = false;
	var firstLength = first.length;
	var secondLength = second.length;

	for (var i = 0; i < firstLength; i++) {
		for (var k = 0; k < secondLength; k++) {
			if ((first[i] === second[k]) && (firstLength == secondLength)) {
				return "Equal";

			} else {
				return "Not Equal";
			}

		}

	}
}

jsConsole.writeLine(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
jsConsole.writeLine(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
jsConsole.writeLine(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));
