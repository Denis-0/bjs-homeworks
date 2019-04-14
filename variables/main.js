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
    if (this.durability != "Infinity") {
      if (this.durability - damage < 0) {
        this.durability = 0;
      } else {
        this.durability = this.durability - damage;
      }
    }
  }
  getDamage() {
    if (this.durability == "Infinity") {
     return this.attack;
   } else {
    if (this.durabilityConst * 0.3 >= this.durability) {
      return this.attack / 2;
    } else if (this.durability == 0) {
      return 0;
    } else {
      return this.attack;
    }
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
console.log(arm);
//  console.log(arm.durability);
arm.getDamage();
console.log(arm.getDamage());
console.log(arm.isBroken());


// Задача 2

// class Weapon {
//   constructor (attack, durability, range) {
//     this.attack = attack;
//     this.durability = durability;
//     this.range = range;
//     this.durabilityConst = durability;
//   }

//   takeDamage(damage) {
//     if (this.durability != "Infinity") {
//     if (this.durability - damage < 0) {
//       this.durability = 0;
//     } else {
//       this.durability = this.durability - damage;
//     }
//   }
//   }
//   getDamage() {
//     if (this.durability == "Infinity") {
//        return this.attack;
//     } else {
//     if (this.durabilityConst * 0.3 >= this.durability) {
//       return this.attack / 2;
//     } else if (this.durability == 0) {
//       return 0;
//     } else {
//       return this.attack;
//     }
//   }
//   }
//   isBroken() {
//       if (this.durability == 0) {
//         return true;
//       } else {
//         return false;
//       }
//   }

// }
// class Bow extends Weapon {
//   constructor(attack, durability, range) {
//   super(attack, durability, range);
//   this.name = 'Лук';

// }
// }
// class LongBow extends Bow {
//   constructor(attack, durability, range) {
//   super(attack, durability, range);
//   this.name = 'Длинный Лук';

// }
// }
// class Arm extends Weapon {
//   constructor(attack, durability, range) {
//     super(attack, durability, range);
//   this.name = 'Рука';
// }
// }
// class Sword extends Weapon {
//   constructor(attack, durability, range) {
//     super(attack, durability, range);

//   this.name = 'Меч';
// }
// }
// class Axe extends Sword {
//   constructor(attack, durability, range) {
//     super(attack, durability, range);

//   this.name = 'Секира';
// }
// }
// class Knife extends Weapon {
//   constructor(attack, durability, range) {
//     super(attack, durability, range);

//   this.name = 'Нож';
// }
// }
// class Stick extends Weapon {
//   constructor(attack, durability, range) {
//     super(attack, durability, range);

//   this.name = 'Посох';
// }
// }
// class StickOfTheStorm extends Stick {
//   constructor(attack, durability, range) {
//     super(attack, durability, range);

//   this.name = 'Посох Бури';
// }
// }

//   const arm = new Arm(1, Infinity, 1);
//   const bow = new Bow(10, 200, 3);
//   const sword = new Sword(25, 500, 1);
//   const knife = new Knife(5, 300, 1);
//   const stick = new Stick(8, 300, 2);
//   const longBow = new LongBow(15, 4, 200);
//   const axe = new Axe(27, 1, 800);
//   const stickOfTheStorm = new StickOfTheStorm(10, 3, 2);

//   arm.takeDamage(6);
//   console.log(arm);
// //  console.log(arm.durability);
//   arm.getDamage();
//   console.log(arm.getDamage());
//   console.log(arm.isBroken());

// console.log(arm);
// console.log(bow);
// console.log(sword);
// console.log(knife);
// console.log(stick);
// console.log(longBow);
// console.log(axe);
// console.log(stickOfTheStorm);


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
