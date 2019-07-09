// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
//I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function sumOfAll(arr) {
	var sum = 0
	for (var i = 0; i < arr.length; i++) {
		for (var i = j; j < arr[i].length; i++) {
			sum += arr[i][j]
		}
	}
	return sum
}

//best practice
function sumArray(arr) {
	return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)
}
