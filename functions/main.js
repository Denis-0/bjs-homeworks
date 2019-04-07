"use strict"
  
function getSolutions (a, b, c) {
	let D=b*b-4*a*c;
	if (D < 0) {
		return { D: D}
	} else if (D == 0) {
		let x1 = -b/(2*a)
		return { roots: [ x1 ], D: D };
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / 2*a;
		let x2 = (-b - Math.sqrt(D)) / 2*a;
		return { roots: [ x1 , x2 ], D: D };
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions( a, b, c );
	
	console.log('Вычисляем корни квадратного уравнения ax² + bx + c». Значение переданных a, b и c должны присутствовать в формуле.')
	console.log('Значение дискриминанта: ' + D);

	if (D < 0) {
		return 'Уравнение не имеет вещественных корней'
	} else if (D == 0) {
		return 'Уравнение имеет один корень X₁ = ' + x1;
	} else if (D > 0) {
		return 'Уравнение имеет два корня X₁ = ' + x1 + ' X₂ = ' + x2;
	}
}

showSolutionsMessage(1, 2, 3);



function getPersonData(secretData) {
	
}