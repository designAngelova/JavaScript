function sortArray(array) {
	var result = new Array();
	var length = array.length;
	for (var i = 0; i < length; i++) {

		var min = Math.min.apply(null, array);
		result.push(min);

		//remove min from array
		var index = array.indexOf(min);
		if (index > -1) {
			array.splice(index, 1);
		}

	}
	jsConsole.writeLine(result.join(", "));

}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
