function findLargestSumOfDigits(nums) {
    if (arguments.length < 1) {
        return undefined;
    }
    var maxSum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (parseInt(nums[i]) !== nums[i]) {
            return undefined;
        }
        var currentNum = Math.abs(nums[i]).toString();
        var currentSum = 0;
        for (var j = 0; j < currentNum.length; j++) {
            currentSum += Number(currentNum[j]);
        }
        if (currentSum >= maxSum) {
            var result = nums[i];
            maxSum = currentSum;
        }
    }
    return result;
}
jsConsole.writeLine(findLargestSumOfDigits([5, 10, 15, 111]));
jsConsole.writeLine(findLargestSumOfDigits([33, 44, -99, 0, 20]));
jsConsole.writeLine(findLargestSumOfDigits(['hello']));
jsConsole.writeLine(findLargestSumOfDigits([5, 3.3]));