"use strict"

// Exercise 1
function calculateQuadraticEquation() {
    let a = +window.a.value,
    	b = +window.b.value,
    	c = +window.c.value,
    	result = getResult(a, b, c);

    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    window.result.textContent = `х = ${result}`;
}

function getResult(a, b, c) {
    let D = Math.pow(b, 2) - 4*a*c;

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / 2*a,
        	x2 = (-b - Math.sqrt(D)) / 2*a;

        return [x1, x2];
    } else if (D == 0) {
    	return -b / 2*a;
    } else {
        return 'Нет корней';
    }
}


// Exercise 2
function calculateDrinkTask() {
    let name = window.personName.value,
    	dateOfBirthday = new Date(window.dateOfBirthday.value),
    	drink = askDrink(name, dateOfBirthday);

    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
	let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (age > 18) {
        return "Не желаете ли олд-фэшн, " + name;
    } else {
        return "Сожалею " + name + " но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    }
}


// Exercise 3
function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0),
    	averageMark = getAverageMark(marks);

    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
	if (marks.length > 5) {
        let newMarksArray = marks.splice(5);
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    return sum / marks.length;
}