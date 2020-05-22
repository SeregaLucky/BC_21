// const arr = [111, 222, 333, 444];

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

//
//
//
//

// const arr = [111, 222, 333, 444];

// arr.forEach(number => console.log(number));

// arr.forEach(function (number) {
//   console.log(number);
// });

//
//
//
//

// const fn1 = function (callback) {
//   const numb = 10;

//   setInterval(() => {
//     callback(numb);
//   }, 2000);
// };

// function fn22(numb) {
//   console.log(11111111111);
//   console.log(numb);
// }

// function fn333(numb) {
//   const dubl = numb * 2;
//   console.log(33333333);
//   console.log(dubl);
// }

// // fn1(fn22);
// fn1(fn333);

//
//
//
//

// const aaa = Math.pow(2, 3);
// console.log(aaa);
// debugger;

// function fn1(numb, n) {
//   if (n === 1) {
//     return numb;
//   }

//   return numb * fn1(numb, n - 1);
// }

// console.log(fn1(2, 3));

//
//
//
//

// debugger;

// const FN = function (callback) {
//   console.log('START FN');

//   callback();

//   console.log('FINISH FN');
// };

// const cb = function () {
//   console.log(111111111);
// };

// FN(cb);

//
//
//
//
// const aa = 10 // declaration `aa' before initialization

// console.log(aa);
// const aa = 10;
// console.log(aa);

//
//
//
//

// var aa;

// console.log(aa);
// var aa = 10;
// // aa = 10;
// console.log(aa);

//
//
//
//

// let a = 10;

// if (true) {
//   // let a // declaration `aa' before initialization

//   console.log(a);

//   let a = 10;

//   // a = 10;
// }

//
//
//
//

// // let a = 10;
// var a
// if (true) {
//   //

//   console.log(a);

//   var a = 10;
//   a = 10;
// }

//
//
//
//

// // Global
// // Parent: null

// // [[ENV: Global]]
// const createCounter = function () {
//   // env createCounter
//   // Parent: Global
//   let privateValue = 0;
//   // env createCounter
//   // Parent: Global
//   // privateValue: 0

//   // [[ENV: createCounter]]
//   const increment = function () {
//     // env increment
//     // Parent: createCounter
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   // env createCounter
//   // Parent: Global
//   // privateValue: 0, increment: function

//   return increment;
// };

// // Global
// // Parent: null
// // createCounter: function

// const counterA = createCounter(); // 18

// // Global
// // Parent: null
// // createCounter: function, counterA: function

// counterA(); // 1
// counterA(); // 2

// const counterB = createCounter(); // 20
// counterB(); // 1
// counterB(); // 2
// counterB(); // 3

//
//
//
//

//
//
//
//

// // Global
// // Parent: null

// // [[ENV: Global]]
// const makeShef = function (name) {
//   // env makeShef
//   // Parent: Global
//   // name: Mango

//   // [[ENV: makeShef]]
//   return function makeDish(dish) {
//     // env: makeDish
//     // Parent: makeShef
//     // dish:
//     console.log(`${name} is cooking ${dish}`);
//   };
// };
// // Global
// // Parent: null
// // makeShef: function
// const mango = makeShef('Mango');
// // Global
// // Parent: null
// // makeShef: function, mango: function

// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

//
//
//
//

// let name = 'John';
// // Global
// // Parent: null
// // name: 'John'

// // [[ENV: Global]]
// function sayHi() {
//   // env: sayHi
//   // Parent: Global
//   alert('Hi, ' + name);
// }

// // Global
// // Parent: null
// // name: 'John', sayHi: func

// name = 'Pete';

// // Global
// // Parent: null
// // name: 'Pete', sayHi: func

// sayHi();

//
//
//
//

// const aa = function makeDish(dish) {
//   console.log(name + dish);
// };

// aa(10);
