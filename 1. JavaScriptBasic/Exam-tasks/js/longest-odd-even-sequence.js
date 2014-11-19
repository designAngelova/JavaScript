function solve(input){
	var str = input.split(/[ ()]+/);
	var number = str.map(Number);
	//remove firs index of array
	number.splice(0, 1);
	//remove last index of array
	number.pop();
	var count = 0;
	var max = 0;
	
	for (var i=0; i < number.length; i++) {
		 var zero = number[i] == 0 || number [i+1] == 0;
	 var odd = ((number[i] % 2 !== 0 ) && ((number [i+1] % 2 === 0)  || zero));
	 var even = ((number[i] % 2 === 0 ) && ((number [i+1] % 2 !== 0) || zero));
	
	 if (odd || even ) {
	 	count++;
	 }
	 
	 if (max < count) {
	 	max = count;
	 }
	 
	}
	return max;
}

console.log(solve('(3) (22) (-18) (55) (44) (3) (21)'));
console.log(solve('(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)'));
console.log(solve(' ( 2 )  ( 33 ) (1) (4)   (  -1  )'));
console.log(solve('(102)(103)(0)(105)  (107)(1)'));
console.log(solve('(2) (2) (2) (2) (2)'));
