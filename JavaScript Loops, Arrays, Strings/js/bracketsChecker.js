function checkBrackets(input) {
	var brackets = 0;
	for (var char in input) {
		if (input[char] == '(') {
			brackets++;
		}
		if (input[char] == ')') {
			brackets--;
		}
		if (brackets < 0) {
			break;
		}
	}
	if (brackets == 0) {
		return "correct";

	} else {
		return "incorrect";

	}

}

jsConsole.writeLine(checkBrackets('( ( a + b ) / 5 – d )'));
jsConsole.writeLine(checkBrackets(') ( a + b ) )'));
jsConsole.writeLine(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
