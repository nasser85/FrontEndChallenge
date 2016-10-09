

//I created two functions to solve this problem in modular way.
//The first function called "sum" takes in two arguments,
//1) a number that you want to find multiples of and, 2) a limiting number.
//I did this because we essentially have to find the multiples of both
//3 and 5 that are less than a given number.  This is basically doing the same
//logic twice.  So in the main function entitled "threeFiveSum," I return
//the sum of the sums of the multiples of both 3 and 5 that are under a given
//number "num."  I call the sum function twice with in the threeFiveSum function,
//once for three and once for five.  In the sum function, we run a while loop
//that continually adds a consecutive multiple of a given number to a sum variable
//so long as the mutliple is less than the limiting number, denoted by "num".
//Upon the termination of the loop, the sum of the multiples of a given number
//is returned.

function sum(current, num) {
	var sum = 0;
	var counter = 2;
	var multiple = current;
	while (multiple < num) {
		sum += multiple;
		multiple = current*counter;
		counter ++;
	}
	return sum;
}

function threeFiveSum(num) {
	return sum(3, num) + sum(5, num);
	
}

threeFiveSum(1000); // The solution would be 266333