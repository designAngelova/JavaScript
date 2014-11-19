function reverseWordsInString(str){
	var array = str.split(" ");
	var result = "";
	  for (var i=0; i < array.length; i++) {
	result += array[i].split("").reverse().join("") + " ";
	 
	  
	  }
	
	return result.trim();
}
jsConsole.writeLine(reverseWordsInString("Hello, how are you."));
jsConsole.writeLine(reverseWordsInString("Life is pretty good, isn’t it?"));
