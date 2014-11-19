function Solve(array) {
	
	var answer = 1;
	//map everything in array as number if possible
	array = array.map(Number);
	for (var i=2; i < array.length; i++) {
	  if(array[i-1] > array[i]){
	  	answer++;
	  }
	}
	return answer;
}
console.log(Solve([7,1,2,-3,4,4,0,1]));
console.log(Solve([9,1,8,8,7,6,5,7,7,6,]));
