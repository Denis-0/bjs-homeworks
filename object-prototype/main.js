function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = 1554854400;
        date = new Date(2011, 0, 1);
        birthday = 1293840000;
        diff = birthday - now;
        age = diff / 31536000000;

    return age; 


}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;

    if (animal == 'undefined') {
        return null
    }
    if (animal != 'undefined') {
        return sound;
    }
}



function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;

    for (let i = 0; i < marks.length; i++) {
        average += Number.parseInt(marks[i]);
    }

    average = average / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}