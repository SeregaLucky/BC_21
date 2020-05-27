// ВОПРОС последовательность выполнения этого кода? как работает? https://pastebin.com/TfMjp0M6

// let i;

// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };

//   setTimeout(() => log(), 20);
// }
// for (let i = 0; i < 3000000000; i++) {}

// console.log(i);

//
//

// for (var i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };

//   setTimeout(() => log(), 0);
// }

//
//
//
//

//
//
//
//

//
//
//
//

// Object.assign();

// const obj = {
//   name: 'Alex',
//   bb: [343, 3432],
// };

// const copyObj = Object.assign({}, obj);
// console.log('copyObj', copyObj);

// console.log(obj === copyObj);
// console.log(obj.bb === copyObj.bb);

// const copyObj2 = { ...obj };

//
//
//
//

//
//
//
//

// //
// //
// //
// //

// const gender = {
//   MALE: 'male',
//   FEMALE: 'female',
// };

// class User {
//   constructor({ gender, name }) {
//     this.gender = gender;
//     this.name = name;

//     // this.changeName = function (newName) {
//     //   this.name = newName;
//     // };
//   }

//   changeName(newName) {
//     this.name = newName;
//     // tom.name = newName;
//     // alex.name = newName;
//   }
// }

// const tom = new User({ gender: 'male', name: 'Tom' });
// // const tom = new User({ gender: gender.MALE, name: 'Tom' });
// // const tom = new User({ gender: User.gender.MALE, name: 'Tom' });
// console.log(tom);
// tom.changeName('Tom 222');
// // tom.name = 'Tom 222';

// const alex = new User({ gender: 'male', name: 'Alex' });
// console.log(alex);
// alex.changeName('Alex 222');

// //
// //
// //
// //

// const gender = {
//   MALE: 'male',
//   FEMALE: 'female',
// };

// class User {
//   constructor({ gender, name }) {
//     this.gender = gender;
//     this.name = name;

//     // this.changeName = function (newName) {
//     //   this.name = newName;
//     // };
//   }

//   changeName(newName) {
//     this.name = newName;
//     // tom.name = newName;
//     // alex.name = newName;
//   }
// }

// // const tom = new User({ gender: 'male', name: 'Tom' });
// const tom = new User({ gender: gender.MALE, name: 'Tom' });
// console.log(tom);
// tom.changeName('Tom 222');

// const ania = new User({ gender: gender.FEMALE, name: 'Ania' });
// console.log(ania);
// ania.changeName('Ania 222');

//
//
//
//

// class User {
//   static gender = {
//     MALE: 'male',
//     FEMALE: 'female',
//   };

//   constructor({ gender, name }) {
//     this.gender = gender;
//     this.name = name;

//     // this.changeName = function (newName) {
//     //   this.name = newName;
//     // };
//   }

//   changeName(newName) {
//     this.name = newName;
//     // tom.name = newName;
//     // alex.name = newName;
//   }
// }
// console.log(User);
// console.log(User.gender.FEMALE);

// const tom = new User({ gender: 'male', name: 'Tom' });
// const tom = new User({ gender: User.gender.MALE, name: 'Tom' });
// console.log(tom);
// tom.changeName('Tom 222');

// const ania = new User({ gender: User.gender.FEMALE, name: 'Ania' });
// console.log(ania);
// ania.changeName('Ania 222');

//
//
//
//

// class User {
//   static gender = {
//     MALE: 'male',
//     FEMALE: 'female',
//   };

//   constructor({ gender, name }) {
//     this.gender = gender;

//     // this.name = name;
//     this.changeName(name);
//   }

//   #name = null;

//   changeName(newName) {
//     if (newName.length > 2) {
//       this.#name = newName;
//       // this.name = newName;
//     }
//   }
// }

// const tom = new User({ gender: User.gender.MALE, name: 'Tom' });
// console.log(tom);
// // console.log(tom.#name);
// // tom.changeName('Tom 222');
// // tom.changeName('T');
// // tom.name = 'T';
// tom.#name = 'T';

//
//
//
//

class User {
  static gender = {
    MALE: 'male',
    FEMALE: 'female',
  };

  constructor({ gender, name }) {
    this.gender = gender;
    this.name = name;

    // this.changeName = this.changeName.bind(this);
  }

  zzz = 555;

  // changeName(newName) {
  //   this.name = newName;
  // }

  changeName = newName => {
    this.name = newName;
  };
}

const tom = new User({ gender: User.gender.MALE, name: 'Tom' });
console.log(tom);
tom.changeName('333');

//
//
//
//

//
//
//
//

// есть ли случаи когда лучше не создавать колбек, а прописывать все в одной функции,
// либо же отдельной? или это универсальное решение по сути?
// ПОКАЗАТЬ на декларативных методах и сеттаймауте и сетинтервале

//
//
//
//

//
//
//
//

//
//
//
//

// вопрос не по теме: почему typeof undefined  = undefined,
// a typeof null == 'object' ?

// console.log(typeof 'dfsds');
// console.log(typeof 4343);

// console.log(typeof undefined);

// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);

//
//

// const fn1 = aa => {
//   if (aa === null) {
//     console.log('Это null');
//     return;
//   }

//   if (Array.isArray(aa)) {
//     console.log('Это массив');
//     return;
//   }

//   if (typeof aa === 'object') {
//     console.log('Это объект');
//     return;
//   }

//   console.log('Передайте массив или налл или объект');
// };

// fn1(null);
// fn1([]);
// fn1({});

// fn1(43543);
// fn1('dfsdf');

// for (let i = 0; i < 5; i += 1) {
//   console.log('i', i);
//   // return;
//   break;
// }
