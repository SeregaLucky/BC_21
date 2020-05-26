/* PersonDef - DEFAULT */
const PersonDef = function ({ name, xp }) {
  this.name = name;
  this.xp = xp;
};

PersonDef.prototype.addXp = function (number) {
  this.xp += number;
  console.log('new XP', this.xp);
};
PersonDef.prototype.removeXp = function (number) {
  this.xp -= number;
  console.log('new XP', this.xp);
};

// const alex = new PersonDef({ name: 'Alex', xp: 250 });
// console.log(alex);
// alex.addXp(30);

//
//
//
//

// /* PersonDef - DEFAULT */
const PersonDef = function ({ name, xp }) {
  this.name = name;
  this.xp = xp;
};

PersonDef.prototype.addXp = function (number) {
  this.xp += number;
  console.log('new XP', this.xp);
};
PersonDef.prototype.removeXp = function (number) {
  this.xp -= number;
  console.log('new XP', this.xp);
};

console.dir('PersonDef', PersonDef);

const NormalUser = function ({ name, xp, power }) {
  // this = alex;
  PersonDef.call(this, { name, xp });
  // PersonDef.call(alex, { name, xp });

  this.power = power;

  // return this;
};

NormalUser.prototype = Object.create(PersonDef.prototype);
NormalUser.prototype.constructor = NormalUser;

NormalUser.prototype.addPower = function (number) {
  this.power += number;
  // alex.power += number;

  console.log(this.power);
  // console.log(alex.power);
};

const alex = new NormalUser({ name: 'Alex', xp: 250, power: 40 });
console.log(alex);
alex.addPower(130);
// alex.addXp(30);

//
//
//
//

// const poly = {
//   name: 'Poly',
// };

// const tom = poly;

// const fn1 = function () {
//   console.log(this);
// };

// fn1.call(tom);
