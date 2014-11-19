function solve(input){
	var arr = input.split(' ');
	var last = "";
	var output = "";
	for (var i=0; i < input.length; i++) {
	  var word = input[i].split("").reverse().join("");
	  for (var i=0; i < word.length; i++) {
		last = word[i];
		output += last;
		
	  }
	  
	}
	return output;
	
}
solve("Fun exam right"); 
