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
		

			if (this.durabilityConst * 0.3 >= this.durability) {
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

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 4, 200);
const axe = new Weapon('Секира', 27, 1, 800);
const stickOfTheStorm = new Weapon('Посох Бури', 10, 3, 2);

arm.takeDamage(6);
//console.log(arm);
//console.log(arm.durability);
arm.getDamage();
console.log(arm.getDamage());
console.log(arm.isBroken());


// Задача 2

// class Weapon {
// 	constructor (name, attack, durability, range) {
// 		this.name = name;
// 		this.attack = attack;
// 		this.durability = durability;
// 		this.range = range;
// 		this.durabilityConst = durability;
// 	}

// 	takeDamage(damage) {
// 		if (this.durability != "Infinity") {
// 			if (this.durability - damage < 0) {
// 				this.durability = 0;
// 			} else {
// 				this.durability = this.durability - damage;
// 			}
// 		}
// 	}
// 	getDamage() {
// 		if (this.durability == "Infinity") {
// 			return this.attack;
// 		} else {
// 			if (this.durabilityConst * 0.3 >= this.durability) {
// 				return this.attack / 2;
// 			} else if (this.durability == 0) {
// 				return 0;
// 			} else {
// 				return this.attack;
// 			}
// 		}
// 	}
// 	isBroken() {
// 		if (this.durability == 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}

// }
class Bow extends Weapon {
	constructor(attack, durability, range) {
		super(attack, durability, range);
		this.name = 'Лук';

	}
}
class LongBow extends Bow {
	constructor(attack, durability, range) {
		super(attack, durability, range);
		this.name = 'Длинный Лук';

	}
}
class Arm extends Weapon {
	constructor(attack, durability, range) {
		super(attack, durability, range);
		this.name = 'Рука';
	}
}
class Sword extends Weapon {
	constructor(attack, durability, range) {
		super(attack, durability, range);

		this.name = 'Меч';
	}
}
class Axe extends Sword {
	constructor(attack, durability, range) {
		super(attack, durability, range);

		this.name = 'Секира';
	}
}
class Knife extends Weapon {
	constructor(attack, durability, range) {
		super(attack, durability, range);

		this.name = 'Нож';
	}
}
class Stick extends Weapon {
	constructor(attack, durability, range) {
		super(attack, durability, range);

		this.name = 'Посох';
	}
}
class StickOfTheStorm extends Stick {
	constructor(attack, durability, range) {
		super(attack, durability, range);

		this.name = 'Посох Бури';
	}
}

// const arm = new Arm(1, Infinity, 1);
// const bow = new Bow(10, 200, 3);
// const sword = new Sword(25, 500, 1);
// const knife = new Knife(5, 300, 1);
// const stick = new Stick(8, 300, 2);
// const longBow = new LongBow(15, 4, 200);
// const axe = new Axe(27, 1, 800);
// const stickOfTheStorm = new StickOfTheStorm(10, 3, 2);

// arm.takeDamage(6);
// console.log(arm);
// console.log(arm.durability);
// arm.getDamage();
// console.log(arm.getDamage());
// console.log(arm.isBroken());

console.log(arm);
console.log(bow);
console.log(sword);
console.log(knife);
console.log(stick);
console.log(longBow);
console.log(axe);
console.log(stickOfTheStorm);



