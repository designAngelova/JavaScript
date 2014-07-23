function createArray(argument) {
	var array = new Array(20);
	for (var i = 0; i < array.length; i++) {
		array[i] = i * 5;
	}
	jsConsole.write(array.join(", "));
}

createArray();
