function countSubstringOccur(input){
	var key = input[0];
	var text = input[1];
	var lower = text.toLowerCase();
	//make key global search regex
	var regex = new RegExp(key,'g');
	var count = lower.match(regex);
	return count.length;
}
jsConsole.writeLine(countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]));
jsConsole.writeLine(countSubstringOccur(["your", "No one heard a single word you said. They should have seen it in your eyes. What was going around your head."]));
jsConsole.writeLine(countSubstringOccur(["but", "But you were living in another world tryin' to get your message through."]));