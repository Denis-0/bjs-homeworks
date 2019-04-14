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
console.log(func());

}
execute(compareArrays([8, 9], [8, 9]));
console.log(execute(compareArrays([8, 9], [8, 9])));

function memorize(fn, limit) {

}

const sum = (a, b) => a + b;

const mSum = memorize(sum(), 2); // 2 результата хранятся в памяти

// Вызов этих функций даёт один и тот же результат
console.log(sum( 3, 4 )); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(memorize(sum(3, 4), 2));