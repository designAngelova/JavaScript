
function findMinAndMax(array){
	var min = Math.min.apply(null, array);
    var max = Math.max.apply(null, array);
    return("Min ->" + min+"\n" + "Max -> " + max);
    
}
jsConsole.writeLine(findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]));
jsConsole.writeLine(findMinAndMax([2, 2, 2, 2, 2]));
jsConsole.writeLine(findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]));
