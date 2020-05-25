// const alex = {
//   name: 'Alex',
//   status: 'student',
//   cash: 500,
// };

// const tom = {
//   name: 'tom',
//   status: 'work',
//   cash: 900,
// };

//
//
//
//

// const obj = {
//   aa: 10,
// };

// obj.bb = 20;

//
//
//
//

// const User = function (name, status, cash) {
//   // this = {};

//   this.name = name;
//   this.status = status;
//   this.cash = cash;
//   this.cash = cash;

//   // return this;
// };

// const tom = new User('Tom', 'student', 500);
// console.log(tom);

// const anna = new User('Anna', 'work', 900);
// console.log(anna);

// console.log(tom === anna);

//
//
//
//

// const obj = {
//   aa: 10,
//   bb: 22,
// };

// const { aa, bb: b } = obj;
// console.log(aa, b);

//
//
//
//

// const User = function ({ name, status, cash }) {
//   // this = {};

//   this.name = name;
//   this.status = status;
//   this.cash = cash;

//   // return this;
// };

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// console.log(tom);

// const anna = new User({ name: 'Anna', status: 'work', cash: 900 });
// console.log(anna);

// console.log(tom === anna);

//
//
//
//

// const User = function ({ name, status, cash }) {
//   // this = tom;

//   this.name = name;
//   // tom.name = name;

//   this.status = status;
//   // tom.status = status;

//   this.cash = cash;
//   // tom.cash = cash;

//   // return this;
// };

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// console.log(tom);

//
//
//
//

// const User = function (obj) {
//   this.name = obj.name;
//   this.status = obj.status;
//   this.cash = obj.cash;
// };

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// console.log(tom);

//
//
//
//

// const User = function ({ name = 'ananim', status = null, cash = 0 }) {
//   this.name = name;
//   this.status = status;
//   this.cash = cash;

//   this.addCash = function (number) {
//     this.cash = this.cash + number;
//     // anna.cash = anna.cash + number;
//     console.log(this.cash);
//     // console.log(anna.cash);
//   };

//   this.decCash = function (number) {
//     this.cash -= number;
//     console.log(this.cash);
//   };

//   // this.aaa = function (number) {
//   //   console.log(this);
//   // };

//   // this.aaa();
// };

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// // const tom = 'dfsdfd12313123';
// console.log(tom);
// tom.addCash(100);
// // 'dfsdfd12313123'.addCash(100);
// tom.decCash(50);
// tom.decCash(170);

// const anna = new User({ status: 'work', cash: 900, name: 'Anna' });
// console.log(anna);
// anna.addCash(200);
// anna.decCash(70);
// anna.decCash(270);

//
//
//
//
//
//
//
//
// __proto__ === prototype

// const User = function ({ name = 'ananim', status = null, cash = 0 }) {
//   // this = {};
//   // this.__proto__ = User.prototype
//   // this.Object.create(User.prototype)

//   this.name = name;
//   this.status = status;
//   this.cash = cash;

//   // return this;
// };

// User.prototype.addCash = function (number) {
//   this.cash = this.cash + number;
//   console.log(this.cash);
// };
// User.prototype.decCash = function (number) {
//   this.cash -= number;
//   console.log(this.cash);
// };

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// console.log(tom);
// tom.addCash(100);
// tom.decCash(50);
// tom.decCash(170);

// const anna = new User({ status: 'work', cash: 900, name: 'Anna' });
// console.log(anna);
// anna.addCash(200);
// anna.decCash(70);
// anna.decCash(270);

//
//
//
//
// __proto__ === prototype

// const User = function ({ name = 'ananim', status = null, cash = 0 }) {
//   this.name = name;
//   this.status = status;
//   this.cash = cash;

//   this.allOperationCash = [];
// };

// User.prototype.addCash = function (objCash) {
//   this.cash = this.cash + objCash.inc;
//   this.allOperationCash = [...this.allOperationCash, objCash];
//   console.log(this.cash);
// };
// User.prototype.decCash = function (objCash) {
//   this.cash -= objCash.dec;
//   this.allOperationCash = [...this.allOperationCash, objCash];
//   console.log(this.cash);
// };

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// console.log(tom);
// tom.addCash({ inc: 100 });
// tom.decCash({ dec: 50 });
// tom.decCash({ dec: 170 });

// const anna = new User({ status: 'work', cash: 900, name: 'Anna' });
// console.log(anna);
// anna.addCash({ inc: 200 });
// anna.decCash({ dec: 70 });
// anna.decCash({ dec: 270 });

//
//
//
//
// __proto__ === prototype

const User = function ({ name = 'ananim', status = null, cash = 0 }) {
  this.name = name;
  this.status = status;
  this.cash = cash;

  this.allOperationCash = [];
};

User.optionCash = {
  INC: 'inc333',
  DEC: 'dec55',
};

User.fn1 = function () {
  console.log(111111);
};

// const optionCash = {
//   INC: 'inc2',
//   DEC: 'dec',
// };

User.prototype.addCash = function (objCash) {
  // const value = Object.values(objCash.inc2)[0];
  const value = Object.values(objCash[User.optionCash.INC])[0];
  // const value = Object.values(objCash['inc2'])[0];
  this.cash = this.cash + value;
  this.allOperationCash = [...this.allOperationCash, objCash];
  console.log(this.cash);
};
User.prototype.decCash = function (objCash) {
  const value = Object.values(objCash[User.optionCash.DEC])[0];
  this.cash = this.cash - value;
  this.allOperationCash = [...this.allOperationCash, objCash];
  console.log(this.cash);
};

console.dir(User);

const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
console.log(tom);
tom.addCash({ [User.optionCash.INC]: { selery: 100 } });
tom.decCash({ [User.optionCash.DEC]: { food: 50 } });
tom.decCash({ [User.optionCash.DEC]: { home: 170 } });

const anna = new User({ status: 'work', cash: 900, name: 'Anna' });
console.log(anna);
anna.addCash({ [User.optionCash.INC]: { findMoney: 200 } });
anna.decCash({ [User.optionCash.DEC]: { family: 70 } });
anna.decCash({ [User.optionCash.DEC]: { fun: 270 } });

//
//
//
//
//
//
//
//
//

// console.log(Math.random());
// Object.create()

//
//
//

// const text = 'my cat';
// // const text = new String('my cat');
// console.log(text);
// console.dir(text.toUpperCase());

//
//
//

// const numb = 77.5432432423;
// const numb = new Number(77.5432432423);
// console.log(numb);
// console.dir(numb.toFixed(2));
