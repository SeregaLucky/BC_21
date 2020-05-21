// // GLOBAL
// // Parent: null

// // [[ENV: GLOBAL]]
// const fn1 = function () {
//   // env: fn1
//   // Parent: GLOBAL
// };

// // GLOBAL
// // Parent: null
// // fn1: function

// fn1();
// fn1();
// fn1();

//
//
//
//
//
//

// // GLOBAL
// // Parent: null

// // [[ENV: GLOBAL]]
// const fn1 = function (numb) {
//   // env: fn1
//   // Parent: GLOBAL
//   // numb: 5

//   const b = 10;
//   // env: fn1
//   // Parent: GLOBAL
//   // numb: 5, b: 10

//   console.log(numb);
// };

// // GLOBAL
// // Parent: null
// // fn1: function

// fn1(5);
// fn1(10);

//
//
//
//
//
//

// // Global
// // Parent: null

// // [[ENV: Global]]
// function fn1() {
//   // env fn1
//   // Parent: Global
//   fn2();
// }

// // Global
// // Parent: null
// // fn1: func

// // [[ENV: Global]]
// function fn2() {
//   // env fn2
//   // Parent: Global
//   const zzz = 10;

//   // env fn2
//   // Parent: Global
//   // zzz: 10
//   fn3();
// }

// // Global
// // Parent: null
// // fn1: func, fn2: func

// // [[ENV: Global]]
// function fn3() {
//   // env fn3
//   // Parent: Global
//   console.log(zzz);
// }

// // Global
// // Parent: null
// // fn1: func, fn2: func, fn3: func

// fn1();

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
//

// // Global
// // Parent: null

// // [[ENV: Global]]
// function fn1() {
//   // env fn1
//   // Parent: Global

//   const zzz = 10;

//   // env fn1
//   // Parent: Global
//   // z: 10
//   fn2();
// }

// // Global
// // Parent: null
// // fn1: func

// // [[ENV: Global]]
// function fn2() {
//   // env fn2
//   // Parent: Global
//   fn3();
// }

// // Global
// // Parent: null
// // fn1: func, fn2: func

// // [[ENV: Global]]
// function fn3() {
//   // env fn3
//   // Parent: Global
//   console.log(zzz);
// }

// // Global
// // Parent: null
// // fn1: func, fn2: func, fn3: func

// fn1();

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
// function fn1() {
//   // env fn1
//   // Parent: Global
//   fn2();
// }

// // Global
// // Parent: null
// // fn1: func

// // [[ENV: Global]]
// function fn2() {
//   // env fn2
//   // Parent: Global
//   fn3();
// }

// // Global
// // Parent: null
// // fn1: func, fn2: func

// // [[ENV: Global]]
// function fn3() {
//   // env fn3
//   // Parent: Global
//   console.log(zzz);
// }

// const zzz = 10;
// // Global
// // Parent: null
// // fn1: func, fn2: func, fn3: func, zzz: 10

// fn1();

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
// function fn1() {
//   // env fn1
//   // Parent: Global
//   fn2();
// }

// // Global
// // Parent: null
// // fn1: func

// // [[ENV: Global]]
// function fn2() {
//   // env fn2
//   // Parent: Global
//   fn3();
// }

// // Global
// // Parent: null
// // fn1: func, fn2: func

// // [[ENV: Global]]
// function fn3() {
//   // env fn3
//   // Parent: Global
//   console.log(zzz);
// }

// // Global
// // Parent: null
// // fn1: func, fn2: func, fn3: func

// fn1();

// const zzz = 10;

// // Global
// // Parent: null
// // fn1: func, fn2: func, fn3: func, zzz = 10

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
//     console.log(zzz);
//   };

//   // env createCounter
//   // Parent: Global
//   // privateValue: 0, increment: func

//   increment();
// };

// // Global
// // Parent: null
// // createCounter: func

// const zzz = 10;
// // Global
// // Parent: null
// // createCounter: func, zzz: 10

// createCounter();
// // createCounter();

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
// const createCounter = function () {
//   let privateValue = 0;

//   return function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };
// };

// // Global
// // Parent: null
// // createCounter: func

// const counterA = createCounter();
// // const counterA = function () {
// //   privateValue += 1;
// //   console.log(privateValue);
// // };
// console.log(counterA);
// counterA(); // 1
// counterA(); // 2

// // const counterB = createCounter();
// // counterB(); // 1
// // counterB(); // 2
// // counterB(); // 3

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
// const createCounter = function () {
//   // env createCounter
//   // Parent: Global
//   let privateValue = 0;

//   // env createCounter
//   // Parent: Global
//   // privateValue: 0

//   // [[ENV: createCounter]]
//   return function () {
//     // env ananim
//     // Parent: createCounter
//     privateValue += 1;
//     console.log(privateValue);
//   };
//   // env createCounter
//   // Parent: Global
//   // privateValue: 0, ananim: func
// };

// // Global
// // Parent: null
// // createCounter: func

// const counterA = createCounter();
// // Global
// // Parent: null
// // createCounter: func, counterA: func

// counterA(); // 1
// counterA(); // 2
// counterA(); // 3
// counterA(); // 4

// // const counterB = createCounter();
// // counterB(); // 1
// // counterB(); // 2
// // counterB(); // 3

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
// const createCounter = function (startCount = 0) {
//   // env createCounter
//   // Parent: Global
//   let privateValue = startCount;

//   // env createCounter
//   // Parent: Global
//   // privateValue: 0

//   // [[ENV: createCounter]]
//   return function () {
//     // env ananim
//     // Parent: createCounter
//     privateValue += 1;
//     console.log(privateValue);
//   };
//   // env createCounter
//   // Parent: Global
//   // privateValue: 0, ananim: func
// };

// // Global
// // Parent: null
// // createCounter: func

// const counterA = createCounter();
// // Global
// // Parent: null
// // createCounter: func, counterA: func

// counterA(); // 1
// counterA(); // 2

// // const counterB = createCounter();
// // counterB(); // 1
// // counterB(); // 2
// // counterB(); // 3

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
// const createCounter = function () {
//   // env createCounter
//   // Parent: Global
//   let privateValue = 0;

//   // env createCounter
//   // Parent: Global
//   // privateValue: 0

//   // [[ENV: createCounter]]
//   return function () {
//     // env ananim
//     // Parent: createCounter
//     privateValue += 1;
//     console.log(privateValue);
//   };
//   // env createCounter
//   // Parent: Global
//   // privateValue: 0, ananim: func
// };

// // Global
// // Parent: null
// // createCounter: func

// const counterA = createCounter();
// // Global
// // Parent: null
// // createCounter: func, counterA: func

// counterA(); // 1
// counterA(); // 2

// const counterB = createCounter();
// counterB(); // 1
// counterB(); // 2

// createCounter();

// counterB(); // 3
// counterA(); // 3
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
// const createCounter = function () {
//   let privateValue = 0;

//   // [[ENV: createCounter]]
//   const fn22 = function () {
//     privateValue += 1;
//     console.log(privateValue);
//     console.log(a);
//   };

//   return fn22;
// };

// const counterA = createCounter();

// counterA(); // 1
// counterA(); // 2

// const a = 10;

// const counterB = createCounter();
// counterB(); // 1
// counterB(); // 2

// createCounter();

// counterB(); // 3
// counterA(); // 3

//
//
//
//
//
//
//

// (num => {
//   console.log(num);
// })(111);

//
//
//
//
//
//
//

// function aa() {
//   return num => console.log(num);
// }

// aa()(10);
// num => console.log(num)(10);

//
//
//
//
//
//
//

// function aa() {
//   return function (num) {
//     console.log(num);
//   };
// }

// aa()(10);

//
//
//
//
//
//
//

const aa = () => num => console.log(num);

aa()(10);
