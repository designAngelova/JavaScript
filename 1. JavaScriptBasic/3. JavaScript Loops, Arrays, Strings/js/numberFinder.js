function findMostFreqNum(array) {
	var count = 1;
	var maxCount = 1;

	//sort array

	function orderBy(a, b) {
		//return (a == b) ? 0 : (a > b) ? 1 : -1;
		return a - b;
	};

	array.sort(orderBy);

	
	var mostFrequentNum = array[0];
	for (var i = 0; i < array.length-1; i++) {
		if (array[i] == array[i + 1]) {
			count++;
			
		
		if (maxCount <= count) {
			maxCount = count;
			mostFrequentNum = array[i];
		} 
		}
		else {
			count = 1;
		}

	}
	jsConsole.writeLine(mostFrequentNum + " (" + maxCount + " times )");
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

