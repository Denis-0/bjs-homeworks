"use strict"

function getSolutions (a, b, c) {
	let D = b² - 4 * a * c;
	if (D < 0) {
		return { D: D}
	} else if (D == 0) {
		let x1 = -b / 2 * a;
		return { roots: [ x1 ], D: D };
	} else if (D > 0) {
		let x1 = (-b + √D) / 2*a;
		let x2 = (-b - √D) / 2*a;
		return { roots: [ x1: значение_x1, x2: значение_x2 ], D: значение_дискриминанта };
	}
}

function showSolutionsMessage( a, b, c ) {
	let result
	
}