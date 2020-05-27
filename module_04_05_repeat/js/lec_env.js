// var value = 0;

// const fn1 = function () {
//   if (1) {
//     value = true;
//   } else {
//     var value = false;
//   }

//   console.log(value);
// };

// fn1();

//
//
//
//

// 2.
// const text = 'my cat';

// if (true) {
//   const text = 10;

//   function fn1() {
//     console.log(text);
//   }
//   fn1();
// }

// fn1();

// 2.
// var text = 'my cat';

// if (true) {
//   var text = 10;

//   function fn1() {
//     console.log(text);
//   }
//   fn1();
// }
// // fn1();

// 2.

// const fn22 = cb => cb();

// if (true) {
//   // const fn1 = function () {
//   //   console.log(text);
//   // }; // я всплыла но вы не можете до меня достучатся только ниже обьявления
//   var text = 10;
//   // fn22(fn1);

//   // function fn1() {
//   //   console.log(text);
//   // }

//   const fn1 = function () {
//     console.log(text);
//   };

//   fn22(fn1);
//   // fn1();
// }

// fn1();

//
//
//
//

// 3.
// const isFind = false;

// let value = 10;

// // [[ENV: Global]]
// const fn1 = function () {
//   if (isFind) {
//     value = true;
//   }

//   console.log(value);
// };

// fn1();

//
//
//
//

// 4.
// let value = 10;
// const fn1 = function (value) {
//   // value: 55
//   console.log(value);
// };

// fn1(55);

//
//
//
//

// 5.
// let value = 10;

// const fn1 = function () {
//   // let value // не можете стучатся раньше объявления
//   console.log(value);

//   let value = 50;
//   // value = 50;

//   // console.log(value);
// };

// fn1();

// 5.

// const fn1 = function () {
//   // var value;
//   console.log(value);

//   var value = 50;
//   // value = 50;
// };

// fn1();

//
//
//
//

// 6.
// const fn1 = function () {
//   console.log(this);
// };

// const obj = {
//   x: 21,
// };

// obj.fn1 = fn1;

// obj.fn1();
// fn1();

//
//
//
//

// 7.
// const fn1 = function () {
//   // this: obj
//   console.log(this);
//   let a = 10;

//   function fn22() {
//     // this: und
//     let a;
//     console.log(this);
//     console.log(a);
//   }

//   fn22();
// };

// const obj = {
//   x: 21,
// };

// obj.fn1 = fn1;

// // fn1();
// obj.fn1();

//
//
//
//

// 7.
// const fn1 = function () {
//   // this: obj
//   console.log(this);
//   let b = 7;

//   const fn22 = () => {
//     console.log(this);
//     console.log(b);
//   };

//   fn22();
// };

// const obj = {
//   x: 21,
// };

// obj.fn1 = fn1;

// fn1();
// // obj.fn1();

//
//
//
//

// const fn22 = () => {
//   console.log(this);
// };

// fn22();

//
//
//
//

// 8. вызов и хостинг функций
// // fn11();
// const fn11 = function () {
//   console.log('fn11');
// };
// // fn11();

// // fn22();
// function fn22() {
//   console.log('fn22');
// }
// // fn22();

// // fn33();
// const fn33 = () => {
//   console.log('fn33');
// };
// fn33();

//
//
//
//

// 9.
// if (true) {
//   if (true) {
//     let fn11 = function () {
//       console.log('fn11');
//     };
//   }

//   function fn22() {
//     console.log('fn22');

//     fn11();
//   }

//   fn22();
// }

//
//
//
//

// 10.
// if (true) {
//   let fn11 = 5;

//   if (true) {
//     fn11 = function () {
//       console.log('fn11');
//     };
//   }

//   function fn22() {
//     console.log('fn22');

//     fn11();
//   }

//   fn22();
// }

//
//
//
//

// 11.
// if (true) {
//   var aa = 10;

//   if (false) {
//     aa = 20;
//   }

//   function fn22() {
//     console.log(aa);
//   }

//   fn22();
// }

//
//
//
//

// // 12.
// if (true) {
//   function fn22() {
//     // var aa;
//     console.log(aa);

//     if (true) {
//       var aa = 10;
//     }
//   }

//   fn22();
// }

//
//
//
//

// 13.
// if (true) {
//   function fn22() {
//     console.log(aa);

//     if (true) {
//       var aa = 10;
//     }
//   }
// }

// fn22();

//
//
//
//

// 14.

// if (true) {
//   function fn22() {
//     // var aa;
//     console.log(aa);

//     if (true) {
//       var aa = 10;
//     }
//   }
//   // var aa = 10;
//   fn22();
// }
