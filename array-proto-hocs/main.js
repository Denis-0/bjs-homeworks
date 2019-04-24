"use strict"

function compareArrays(arr1, arr2) {
	if ((arr1.length != arr2.length)) {            
		return false;
	}
	function isSame(e1, i) {
		return e1 === arr2[i];
	}
	return arr1.every(isSame);
}

function memorize(fn, limit) {    
	let results = [];

	return function(...rest) {
		let args = [...rest];        
		let k = results.find(e1 => compareArrays(e1.args, args));

		if (k) {
			return k.result;
		} else {
			results.unshift({
				args,
				result: fn(...rest)
			})

			if (results.length > limit) {
				results.shift();
			}

			return results;
		}
	}    
}     


let sum = function(...rest) {
	let sum = 0;
	for (let i = 0; i < rest.length; i++) {
		sum += rest[i];
	}
	return (sum);
}

let mSum = memorize(sum, 10);


console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

console.log(mSum(1, 2, 3, 4));
console.log(mSum(1, 2, 3, 4));
console.log(mSum(3, 4, 600, 6));
console.log(mSum(3, 4, 556, 6));
console.log(mSum(3, 455, 5, 6));
console.log(mSum(3, 4, 5));
console.log(mSum(3, 5, 6));
console.log(mSum(5));
console.log(mSum(3, 4, 5, 6, 4, 5, 6));
console.log(mSum(32, 42, 25, 6));
console.log(mSum(3, 4, 55, 56));
console.log(mSum(3, 64, 5, 61));
console.log(mSum(3, 74, 5, 67, 125));
console.log(mSum(3, 74, 53, 67, 124));