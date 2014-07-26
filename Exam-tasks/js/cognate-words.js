function Check(input) {
	var input = input[0].split(/[^a-zA-z]+/);
	//take words
	var output = [];
	var str = "";

	for (var a = 0; a < input.length; a++) {
		for (var b = 0; b < input.length; b++) {
			for (var c = 0; c < input.length; c++) {
				if ((b !== a)) {

					var notEmpty = input[a] !== '' && input[b] !== '' && input[c] !== '';
					var sum = (input[a] + input[b]) === input[c];
					if (notEmpty && sum) {

						var note = input[a] + "|" + input[b] + "=" + input[c];
						if (output.indexOf(note) < 0)//check if there is the same word
						{
							output.push(note);
						}
					}
				}

			}

		}

	}
	if (output.length !== 0) {

		return output.join('\n');
	} else {
		return ("No");
	}
}

console.log(Check("java..?|basics/*-+=javabasics"));
console.log(Check("Hi, Hi, Hihi"));
console.log(Check("Uni(lo,.ve=I love SoftUni (Soft)"));
console.log(Check("a a aa a"));
console.log(Check("x a ab b aba a hello+java a b aaaaa"));
console.log(Check("aa bb bbaa"));
console.log(Check("ho hoho"));

