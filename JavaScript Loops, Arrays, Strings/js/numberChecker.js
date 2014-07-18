function printNumbers(num) {

	var arr = new Array();
	for (var i = 2; i <= num; i++) {
		if ((i % 4 != 0) && (i % 5 != 0)) {

			arr.push(i);

		}

	}
	if (arr.length == 0) {
		jsConsole.writeLine("No");
	} else {
		jsConsole.writeLine(arr);
	}
}

printNumbers(20);
printNumbers(1);
printNumbers(13);
