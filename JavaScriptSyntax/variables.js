// Write a JavaScript function variablesTypes(value) that accepts the
// following parameters: name, age, isMale (true or false),
// array of your favorite foods. The function must return the
// values of the variables and their types.

function variablesTypes(input) {
	console.log("My name: " + input[0] + " // type is " + typeof (input[0]) + "\n" + "My age: " + input[1] + " //type is " + typeof (input[1]) + "\n" + "I am male: " + input[2] + " // type is " + typeof (input[2]) + "\n" + "My favorite foods are: " + input[3] + " //type is " + typeof (input[3]));
}

variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]);
