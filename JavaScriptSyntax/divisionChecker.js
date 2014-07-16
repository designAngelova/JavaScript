// Write a JavaScript function divisionBy3(value) that
// finds the sum of digits of integer number n (n > 9)
// and checks if the sum is divided by 3 without remainder.
// Write JS program divisionChecker.js to check a few numbers.
// The result should be printed on the console (“the number is
// divided by 3 without remainder” or “the number is not
// divided by 3 without remainder”). Run the program through Node.js

function dividedByThree(num) {
	var sumOfDigits = 0;
	while (num > 0) {
		sumOfDigits += num % 10;
		num = Math.floor(num / 10);
	}
	if (sumOfDigits % 3 == 0) {
		console.log("the number is divided by 3 without remainder");
	} else {
		console.log("the number is not divided by 3 without remainder");
	}
}

dividedByThree(13);
dividedByThree(189);
dividedByThree(591);
