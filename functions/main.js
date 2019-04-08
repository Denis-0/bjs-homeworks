"use strict"
  
function getSolutions (a, b, c) {
	let D = Math.pow(b, 2) - 4*a*c;

	if (D < 0) {
		return D;
	} else if (D == 0) {
		let x1 = -b / 2*a
		return x1, D;
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / 2*a;
		let x2 = (-b - Math.sqrt(D)) / 2*a;
		return [ x1 , x2 ] , D;
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions( a, b, c );
	
	console.log('Вычисляем корни квадратного уравнения ax² + bx + c».');
	console.log('Значение дискриминанта:' + result);

	if (result < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result == 0) {
		console.log('Уравнение имеет один корень X₁ = ' + x1);
	} else if (result > 0) {
		console.log('Уравнение имеет два корня X₁ = ' + x1 + ' X₂ = ' + x2);
	}
}

showSolutionsMessage( 1, 2, 3 );
showSolutionsMessage( 7, 20, -3 );
showSolutionsMessage( 2, 4, 2 );



function getPersonData(secretData) {
	
}