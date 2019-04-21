"use strict"

// Задача 1

class Weapon {
	constructor (name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.durabilityConst = durability;
	}

	takeDamage(damage) {

		if (this.durability - damage < 0) {
			this.durability = 0;
		} else {
			this.durability = this.durability - damage;
		}
	}

	getDamage() {


		if (this.durabilityConst * 0.3 > this.durability) {
			return this.attack / 2;
		} else if (this.durability == 0) {
			return 0;
		} else {
			return this.attack;
		}

	}
	isBroken() {
		if (this.durability == 0) {
			return true;
		} else {
			return false;
		}
	}

}
// Задача 2

class Bow extends Weapon {
	constructor() {
		super();
		this.name = 'Лук';
		this.attack = 10;
		this.durability = 200;
		this.range = 3;

	}
}
class LongBow extends Bow {
	constructor() {
		super();
		this.name = 'Длинный Лук';
		this.attack = 15;
		this.range = 4;

	}
}
class Arm extends Weapon {
	constructor() {
		super();
		this.name = 'Рука';
		this.attack = 1;
		this.durability = 'Infinity';
		this.range = 1;
	}
}
class Sword extends Weapon {
	constructor() {
		super();
		this.name = 'Меч';
		this.attack = 25;
		this.durability = 500;
		this.range = 1;
	}
}
class Axe extends Sword {
	constructor() {
		super();

		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800;
	}
}
class Knife extends Weapon {
	constructor() {
		super();

		this.name = 'Нож';
		this.attack = 5;
		this.durability = 300;
		this.range = 1;
	}
}
class Stick extends Weapon {
	constructor() {
		super();

		this.name = 'Посох';
		this.attack = 8;
		this.durability = 300;
		this.range = 2;
	}
}
class StickOfTheStorm extends Stick {
	constructor() {
		super();
		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
}


let arm = new Arm();
let bow = new Bow();
let sword = new Sword();
let knife = new Knife();
let stick = new Stick();
let longBow = new LongBow();
let axe = new Axe();
let stickOfTheStorm = new StickOfTheStorm();
console.log(arm.name);
console.log(arm.attack);
console.log(arm.durability);
console.log(arm.range);


console.log(arm);
console.log(bow);
console.log(sword);
console.log(knife);
console.log(stick);
console.log(longBow);
console.log(axe);
console.log(stickOfTheStorm);

arm.takeDamage(6);
arm.getDamage();
console.log(arm.getDamage());
console.log(arm.isBroken());
