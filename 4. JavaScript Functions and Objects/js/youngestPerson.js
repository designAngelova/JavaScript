function findYoungestPerson(persons) {
	var person = persons[0];
	var min = person.age;
	for (var i = 0; i < persons.length; i++) {
		if (persons[i].age < min) {
			person = persons[i];
			min = persons[i];

		}
	}

	jsConsole.write('The youngest person is ' + person.firstname + " " + person.lastname);

}

var persons = [{
	firstname : 'George',
	lastname : 'Kolev',
	age : 32
}, {
	firstname : 'Bay',
	lastname : 'Ivan',
	age : 81
}, {
	firstname : 'Baba',
	lastname : 'Ginka',
	age : 40
}];
jsConsole.write(findYoungestPerson(persons)); 