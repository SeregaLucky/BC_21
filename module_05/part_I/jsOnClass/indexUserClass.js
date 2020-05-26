// class User {
//   constructor({ name = 'ananim', status = null, cash = 0 }) {
//     this.name = name;
//     this.status = status;
//     this.cash = cash;
//   }

//   addCash(number) {
//     this.cash = this.cash + number;
//     console.log(this.cash);
//   }

//   decCash(number) {
//     this.cash -= number;
//     console.log(this.cash);
//   }
// }

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// console.log('tom', tom);
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

// class User {
//   static optionCash = {
//     INC: 'inc',
//     DEC: 'dec',
//   };

//   static fn1 = function () {
//     console.log(111111);
//   };

//   constructor({ name = 'ananim', status = null, cash = 0 }) {
//     this.name = name;
//     this.status = status;
//     this.cash = cash;

//     this.allOperationCash = [];
//   }

//   addCash(objCash) {
//     console.log('objCash', objCash);
//     // const value = Object.values(objCash.inc)[0];
//     console.log('57', Object.values(objCash[User.optionCash.INC]));
//     const value = Object.values(objCash[User.optionCash.INC])[0];
//     this.cash = this.cash + value;
//     this.allOperationCash = [...this.allOperationCash, objCash];
//     console.log(this.cash);
//   }

//   decCash(objCash) {
//     // const value = Object.values(objCash.dec)[0];
//     const value = Object.values(objCash[User.optionCash.DEC])[0];
//     this.cash = this.cash - value;
//     this.allOperationCash = [...this.allOperationCash, objCash];
//     console.log(this.cash);
//   }
// }
// console.dir(User);

// const tom = new User({ name: 'Tom', status: 'student', cash: 500 });
// console.log('tom === =>', tom);
// // tom.addCash({ inc: { selery: 100 } });
// tom.addCash({ [User.optionCash.INC]: { selery: 100 } });
// // tom.addCash({ inc222: { selery: 100 } });
// // tom.decCash({ [User.optionCash.DEC]: { food: 50 } });
// // tom.decCash({ [User.optionCash.DEC]: { home: 170 } });

//
//
//
//

class User {
  constructor({ name = 'ananim', status = null, cash = 0 }) {
    this.name = name;
    this.status = status;
    this.cash = cash;
  }

  addCash(number) {
    this.cash = this.cash + number;
    console.log(this.cash);
  }

  decCash(number) {
    this.cash -= number;
    console.log(this.cash);
  }
}

// const name = prompt('Ваше имя?');
// const status = prompt('Ваше статус?');
// const cash = prompt('Кеш?');

const name = 'Alex';
const status = 'work';
const cash = 800;

// const tom = new User({ name: name, status: status, cash: cash });
const tom = new User({ name, status, cash });
console.log('tom', tom);
tom.addCash(100);
tom.decCash(50);
tom.decCash(170);
