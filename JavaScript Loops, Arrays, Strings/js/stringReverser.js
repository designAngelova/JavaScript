function reverseString(string){
	var charArray = string.split('');
	charArray.reverse();
	
	jsConsole.writeLine(charArray.join(""));
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');
