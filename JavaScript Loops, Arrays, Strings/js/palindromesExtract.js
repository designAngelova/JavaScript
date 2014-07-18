function findPalindromes(input){

	var output = new Array();
	var words = input.toLowerCase().split(/\W+/);
	for (var i=0; i < words.length; i++) {
	  if (words[i] == words[i].split('').reverse().join('')) {
	  	output.push(words[i]);
	  }
	 }
	  return output.join(', ');
}

jsConsole.writeLine(findPalindromes('There is a man, his name was Bob.'));

