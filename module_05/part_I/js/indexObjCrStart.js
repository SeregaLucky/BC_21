// const alex = {
//   name: 'Alex',

//   infoPr: {
//     selery: 1000,
//   },
// };

// const tom = {
//   name: 'tom',

//   infoPr: {
//     selery: 800,
//   },
// };

// alex.infoPr = tom.infoPr;
// // alex.infoPr = {
// //   selery: 800,
// // }
// console.log(alex);

//
//
//
//

// const obj = {};
// console.log(obj);

// const arr = [];
// console.log(arr);

//
//
//
//

// const cat = {
//   isRun: true,
// };

// const dog = {
//   age: 3,
// };

// console.log(dog);
// console.log(dog.__proto__);

// dog.__proto__ = cat;
// console.log(dog);

//
//
//
//

// const cat2 = {
//   isRun: true,
// };

// const dog2 = Object.create(cat2);
// dog2.age = 3;
// console.log(dog2);

// const dog3 = Object.create(dog2);
// dog3.sleep = false;
// console.log(dog3);

//
//
//
//

// const fn1 = function () {};
// console.dir(fn1);

// const fn2 = new Function();
// console.dir(fn2);

// __proto__ === prototype

// const cat2 = {
//   isRun: true,
// };
// // console.log('cat2', cat2);

// const dog2 = Object.create(cat2);
// dog2.age = 3;
// console.log('dog2', dog2);
// console.log(dog2.isRun);

//
//
//
//

// const cat2 = {
//   isRun: true,
// };
// // console.log('cat2', cat2);

// const dog2 = Object.create(cat2);
// dog2.age = 3;
// console.log('dog2', dog2);

// for (const key in dog2) {
//   if (!dog2.hasOwnProperty(key)) continue;

//   console.log(key);
// }

// const keysDog = Object.keys(dog2);
// console.log(keysDog);

//
//
//
//

// const obj = Object.create(
//   {},
//   {
//     name: {
//       value: 'Tom',
//       enumerable: true,
//       writable: true,
//       configurable: false,
//     },
//     age: {
//       value: 33,
//       enumerable: true,
//       writable: false,
//       configurable: true,
//     },
//   },
// );

// for (const key in obj) {
//   console.log(key);
// }

// obj.name = 'Alex';

// delete obj.age;

// console.log(obj);

//
//
//
//
