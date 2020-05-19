// Создание, запись и изминение
// Методы

// const arr = [];

// const obj = {
//   id: 'dfsdfsd342343v',
//   name: 'Alex',
//   age: 22,
// };

// obj.car = 'BMW';
// obj['a b'] = 10;

// obj.name = 'Tom';

// console.log(obj);

//
//
//
//

// const arr = [111, 222];
// arr.car = 'BMW';
// console.log(arr);

//
//
//
//

// const obj = {
//   id: 'dfsdfsd342343v',
//   name: 'Alex',
//   age: 22,
//   isActive: false,
// };

// const obj2 = {
//   id: 'dfdsfdsfsd',
//   name: 'Bob',
//   age: 33,
// };

// console.log(obj === obj);

// // Как перезаписать свойства obj2, свойствами obj?

// obj2.id = obj.id;
// // obj2.id = 'dfsdfsd342343v'
// obj2.name = obj.name;
// // obj2.name = 'Alex'
// obj2.isActive = obj.isActive;
// // obj2.isActive = false;

// console.log(obj2);

//
//
//
//

// const arr = [111, 222];
// console.log(arr);

// // for (let i = 0; i < arr.length; i += 1) {
// //   console.log(arr[i]);
// // }

// for (const num of arr) {
//   console.log(num);
// }

//
//
//
//

// const obj = {
//   id: 'dfsdfsd342343v',
//   name: 'Alex',
//   age: 22,
//   isActive: false,
//   '0': 'dfdsfsf',
// };
// console.log(obj);

// // for (let i = 0; i < obj.length; i += 1) {
// //   console.log(arr[i]);
// //   // console.log(arr[0]);
// // }

// // for (const num of arr) {
// //   console.log(num);
// // }

// const allKeys = Object.keys(obj);
// console.log(allKeys);

//
//
//
//

// const obj1 = {
//   _id: 'dfsdfsd342343v',
//   name: 'Alex',
//   age: 22,
//   isActive: false,
//   '0': 'dfdsfsf',

//   getId() {
//     return this._id;
//     // return obj1._id;
//   },

//   changeActive(isActive) {
//     this.isActive = isActive;
//     console.log(this);
//     // obj1.isActive = isActive;
//     // console.log(obj1);
//   },
// };

// console.log(obj1.getId());
// obj1.changeActive(true);

//
//
//
//

// const obj = {
//   id: 'dfsdfsd342343v',
//   name: 'Alex',
//   'age': 22,
//   isActive: false,
//   '0': 'dfdsfsf',
// };

// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

// if ('age' in obj) {
//   console.log('Find');
// }
