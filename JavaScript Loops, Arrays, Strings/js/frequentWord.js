function findMostFreqWord(text){
	 var words = text.toLowerCase().split(/[^a-zA-z]+/);
    words.sort();
    var wordFreq = {};
    var count = 1;
    var max = 0;
    for (var i = 1; i < words.length; i++) {
        if (words[i] === words[i - 1]) {
            count++;
            wordFreq[words[i]] = count;
            if (count >= max) {
                max = count;
            }
        } else {
            count = 1;
        }
    }
    var result = "";
    for (var word in wordFreq) {
        if (wordFreq[word] === max) {
            result += word + " -> " + wordFreq[word] + " times" + "\n";
        }
    }
    return result;
}

jsConsole.writeLine(findMostFreqWord('in the middle of the night'));
jsConsole.writeLine(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
jsConsole.writeLine(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));