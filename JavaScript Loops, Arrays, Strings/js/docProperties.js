function displayProperties() {
	var properties = [];
	for (elements in window) {
		properties.push(elements);
	}
	properties.sort();
	jsConsole.write(properties.join('<br>'));
}

displayProperties();
