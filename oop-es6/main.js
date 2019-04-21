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

//let arm = new Bow();
let arm = new Arm();
let bow = new Bow();
let sword = new Sword();
let knife = new Knife();
let stick = new Stick();
let longBow = new LongBow();
let axe = new Axe();
let stickOfTheStorm = new StickOfTheStorm();
console.log(arm.name); // Лук
console.log(arm.attack); // 10
console.log(arm.durability); // 200
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



// class Weapon {
// 	constructor (name, attack, durability, range) {
// 		this.name = name;
// 		this.attack = attack;
// 		this.durability = durability;
// 		this.range = range;
// 		this.durabilityConst = durability;
// 	}

// 	takeDamage(damage) {
		
// 		if (this.durability - damage < 0) {
// 			this.durability = 0;
// 		} else {
// 			this.durability = this.durability - damage;
// 		}
// 	}
	
// 	getDamage() {
		
// 		if (this.durabilityConst * 0.3 > this.durability) {
// 			return this.attack / 2;
// 		} else if (this.durability == 0) {
// 			return 0;
// 		} else {
// 			return this.attack;
// 		}
		
// 	}
// 	isBroken() {
// 		if (this.durability == 0) {
// 			return true;
// 		} //else {
// 			//return false;
// 		//}
// 	}

// }

// let arm = new Weapon('Рука', 1, Infinity, 1);
// let bow = new Weapon('Лук', 10, 200, 3);
// let sword = new Weapon('Меч', 25, 500, 1);
// let knife = new Weapon('Нож', 5, 300, 1);
// let stick = new Weapon('Посох', 8, 300, 2);
// let longBow = new Weapon('Длинный лук', 15, 4, 200);
// let axe = new Weapon('Секира', 27, 1, 800);
// let stickOfTheStorm = new Weapon('Посох Бури', 10, 3, 2);

// arm.takeDamage(6);

// //console.log(arm.durability);
// arm.getDamage();
// console.log(arm.getDamage());
// console.log(arm.isBroken());


// // Задача 2


// class Bow extends Weapon {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);
// 		this.name = 'Лук';

// 	}
// }
// class LongBow extends Bow {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);
// 		this.name = 'Длинный Лук';

// 	}
// }
// class Arm extends Weapon {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);
// 		this.name = 'Рука';
// 	}
// }
// class Sword extends Weapon {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);

// 		this.name = 'Меч';
// 	}
// }
// class Axe extends Sword {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);

// 		this.name = 'Секира';
// 	}
// }
// class Knife extends Weapon {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);

// 		this.name = 'Нож';
// 	}
// }
// class Stick extends Weapon {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);

// 		this.name = 'Посох';
// 	}
// }
// class StickOfTheStorm extends Stick {
// 	constructor(name, attack, durability, range) {
// 		super(name, attack, durability, range);

// 		this.name = 'Посох Бури';
// 	}
// }




// console.log(arm);
// console.log(bow);
// console.log(sword);
// console.log(knife);
// console.log(stick);
// console.log(longBow);
// console.log(axe);
// console.log(stickOfTheStorm);



