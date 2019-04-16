"use stricy"

let results = [{}];

function compareArrays( arr1, arr2 ) {
	//let response = true;

	if (arr1.length != arr2.length) {
		
		return false;

	} else {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] != arr2[i]) {
				return false;
			}
		}
	}

	
	console.log(arr1, arr2);
	return true;
}

function execute(func) {


}
execute(compareArrays([8, 9], [8, 9]));
console.log(execute(compareArrays([8, 9], [8, 9])));

function memoize(fn, limit) {

}

