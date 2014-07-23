function findMaxSeq(array) {

	var counter = 1;
	var maxCounter = 1;
	var position = 0;
	var index;

	for (var i = 0; i < array.length; i++) {
		if (array[i] < array[i + 1]) {

			counter++;
		} 
		else {
			if (maxCounter < counter) {
				maxCounter = counter;
				index = i - counter + 1;
				console.log(i);
			}
			counter = 1;

		}

	}
	if (maxCounter < 2) {
		jsConsole.writeLine('no');
	} else {
		var result = array.slice(index, index + maxCounter);
		jsConsole.writeLine('[' + result + ']');
	}

}

findMaxSeq([3, 2, 3, 4, 2, 2, 4]);
findMaxSeq([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSeq([3, 2, 1]); 