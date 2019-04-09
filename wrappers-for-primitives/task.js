"use strict"

function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;
  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  //задаем сегодняшнюю дату
  let now = new Date();
  //считаем количество месяцев
  let n = (date.getMonth() - now.getMonth()) + 12 * (date.getFullYear() - now.getFullYear());
  // считаем сумму, которую необходимо вернуть банку
  let S = parseInt(amount) - parseInt(contribution);
  // коофициент для процентной ставки
  let P = parseInt(percent) / 100 / 12;
   //считаем ежемесячный платеж
   let monthPay = (S * (P + P / (((1 + P) ** n) - 1)));
  //считаем сумму по кредиту 
  let totalAmount = (monthPay * n);


  return totalAmount;
}





function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {

  if ((name == '') || (name == 'null') || (name == 'undefined')) {
    console.log('Привет, мир! Меня зовут Аноним');
  } else {
    console.log('Привет, мир! Меня зовут ' + name);
  }

  return `Привет, мир! Меня зовут ${name}`;
}
