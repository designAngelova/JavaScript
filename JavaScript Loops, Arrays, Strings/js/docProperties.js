function displayProperties() {
	var properties = [];
	for (elements in document) {
		properties.push(elements);
	}
	properties.sort();
	jsConsole.write(properties.join('<br>'));
}

displayProperties();
