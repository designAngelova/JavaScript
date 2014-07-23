function findNthDigit(array) {
	var index = array[0];
	var number = array[1].toString().replace('.', '').replace('-', '');

	if (number.length < index) {
		jsConsole.writeLine("The number doesn’t have " + index + " digits");
	}
	number = Number(number);
	for (var i = 0; i < index - 1; i++) {
		number = Math.floor(number / 10);
	}

	return number % 10;
}

jsConsole.writeLine(findNthDigit([1, 6]));
jsConsole.writeLine(findNthDigit([2, -55]));
jsConsole.writeLine(findNthDigit([6, 923456]));
jsConsole.writeLine(findNthDigit([3, 1451.78]));
jsConsole.writeLine(findNthDigit([6, 888.88]));
