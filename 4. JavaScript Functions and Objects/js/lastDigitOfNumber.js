function lastDigitAsText(number){
	var last = Math.abs(number%10);
	
	
	switch(last){
		case 0: jsConsole.writeLine("Zero");break;
		case 1: jsConsole.writeLine("One");break;
		case 2: jsConsole.writeLine("Two");break;
		case 3: jsConsole.writeLine("Three");break;
		case 4: jsConsole.writeLine("Four");break;
		case 5: jsConsole.writeLine("Five");break;
		case 6: jsConsole.writeLine("Six");break;
		case 7: jsConsole.writeLine("Seven");break;
		case 8: jsConsole.writeLine("Eight");break;
		case 9: jsConsole.writeLine("Nine");break;
		default:
				jsConsole.write("Invalid number"); break;
	}
}

lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);
