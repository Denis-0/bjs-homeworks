"use strict"

class Weapon {
	constructor (name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
	}
}

class reinforcedWeapon extends Weapon {

}
	

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(10);
console.log(arm.durability);
/*
const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability);

const sword = new Weapon({
  name: 'Меч',
  attack: 20,
  durability: 10,
  range: 1,
});

sword.takeDamage(5);
console.log(sword.durability);

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

knife.takeDamage(5);
console.log(knife.durability);

const stick = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

stick.takeDamage(5);
console.log(stick.durability);

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 300,
  range: 2,
});

longBow.takeDamage(5);
console.log(longBow.durability);

const axe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1,
});

axe.takeDamage(5);
console.log(axe.durability);

const stickOfTheStorm = new Weapon({
  name: 'Посох Бури',
  attack: 27,
  durability: 800,
  range: 1,
});

stickOfTheStorm.takeDamage(5);
console.log(stickOfTheStorm.durability);
*/
