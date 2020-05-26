// class PersonDef {
//   constructor({ name, xp }) {
//     this.name = name;
//     this.xp = xp;
//   }

//   addXp(number) {
//     this.xp += number;
//     console.log('new XP', this.xp);
//   }

//   removeXp(number) {
//     this.xp -= number;
//     console.log('new XP', this.xp);
//   }
// }

// const alex = new PersonDef({ name: 'Alex', xp: 250 });
// console.log(alex);
// alex.addXp(30);
// alex.removeXp(10);

//
//
//
//

// class PersonDef {
//   constructor({ name, xp }) {
//     this.name = name;
//     this.xp = xp;
//   }

//   addXp(number) {
//     this.xp += number;
//     console.log('new XP', this.xp);
//   }

//   removeXp(number) {
//     this.xp -= number;
//     console.log('new XP', this.xp);
//   }
// }

// class NormalUser extends PersonDef {
//   constructor({ name, xp, power }) {
//     // PersonDef.call(this, { name, xp });
//     super({ name, xp });
//     this.power = power;
//   }

//   addPower(number) {
//     super.addXp(1);
//     this.power += number;
//     console.log(this.power);
//   }
// }

// const alex = new NormalUser({ name: 'Alex', xp: 250, power: 40 });
// console.log('alex', alex);
// alex.addPower(130);
// // alex.addXp(30);

//
//
//
//

// class PersonDef {
//   constructor({ name, xp }) {
//     this.name = name;
//     this.xp = xp;
//   }

//   addXp(number) {
//     this.xp += number;
//     console.log('new XP', this.xp);
//   }

//   removeXp(number) {
//     this.xp -= number;
//     console.log('new XP', this.xp);
//   }
// }

// class NormalUser extends PersonDef {
//   constructor({ name, xp, power }) {
//     // PersonDef.call(this, { name, xp });
//     super({ name, xp });
//     this.power = power;
//   }

//   addPower(number) {
//     super.addXp(1);
//     this.power += number;
//     console.log(this.power);
//   }
// }

// class BigUser extends NormalUser {
//   constructor({ name, xp, power, speed }) {
//     super({ name, xp, power });

//     this.speed = speed;
//   }

//   addSpeed(number) {
//     this.speed += number;
//     console.log('this.speed', this.speed);

//     super.addXp(1);
//   }
// }

// const alex = new BigUser({ name: 'Alex', xp: 250, power: 40, speed: 20 });
// console.log('alex', alex);

// alex.addSpeed(16);

// delete alex.xp;
