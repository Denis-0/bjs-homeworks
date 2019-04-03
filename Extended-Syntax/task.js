

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let D=b*b-4*a*c;
    let x1,x2

    if (D > 0) {
        x1=(-b+Math.sqrt(D))/(2*a);
        x2=(-b-Math.sqrt(D))/(2*a);
        return [x1, x2];
    } else if (D==0) {
        x1=-b/(2*a)
        return x1;
    } else if (D < 0) {
        return [];

    }
    return x;
    
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday;
    if (age > 18) {
        return "Не желаете ли олд-фэшн, " + name;
    } else {
        return "Сожалею " + name + " но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    }
    
    return age;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let marks = [];

    if (marks.length > 5) {
        marks.splice(5);
    }

    let sum = 0; 
    for (let i = 0; i < marks.length; i++) {
        sum == marks[i];
    }


    averageMark = sum / marks.length;
    return averageMark;
}
