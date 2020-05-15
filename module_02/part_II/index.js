'use strict';

/*
 * Повторить примеры с ссылками
 */
// const arr = [11, 22];
// const arr2 = [11, 22];
// console.log(arr === arr2);

// console.log(!3);
// console.log(!!'');

/*
 * Для чего функции
 */

// console.log('cat'.toLocaleUpperCase());

// debugger;

// const fn1 = function () {
//   console.log(111);
// };

// console.log(222);

// fn1();
// fn1();
// fn1();

//
//
//
//
// let a;
// console.log(a);

// const fn1 = function (num1, num2, num3) {
//   // console.log(111);
//   console.log('num1', num1);
//   console.log('num2', num2);
//   console.log('num3', num3);
//   console.log('=======================');
// };

// console.log(222);

// fn1();
// fn1(2, 3);
// fn1(5);
// fn1(7, 8, 9);
// fn1(7, 8, 9, 11);

/*
 * function expression (в переменную)
 */
// debugger;
// const fn2 = function (num) {
//   const a = 2;
//   console.log(num * a);
// };

// fn2(2);
// fn2(3);
// fn2(10);
// fn2(60);

/*
 * function decl
 */
// let counter = 0;

// function fn3() {
//   counter = counter + 1;
//   console.log('fn3 --- counter', counter);
// }

// fn3();
// fn3();
// fn3();
// fn3();
// console.log('LAST counter', counter);

/*
 * function return
 */
// // debugger;
// const fn2 = function (num) {
//   const a = 2;
//   // console.log(num * a);
//   const res = num * a;
//   return res;
// };

// // console.log(fn2(3));
// const resFun = fn2(3);
// const sum = 5 + resFun;
// console.log(sum);

/*
 * arguments
 */
// const fn2 = function (num1, num2) {
//   console.log('num1', num1);
//   console.log('num2', num2);
//   console.log(arguments);

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// };

// fn2(3, 5, 7);

//
//
//

// const fn2 = function aaa() {
//   console.log(arguments);
//   const array = Array.from(arguments);
//   console.log(array);
// };

// fn2(3, 5, 7);

/*
 * Параметры по умолчанию
 */
// debugger;
// const fn2 = function (num1 = 10, num2 = 20, num3 = 30) {
//   // console.log('num1', num1);
//   // console.log('num2', num2);
//   // console.log('num3', num3);

//   return num1 + num2 + num3;
// };

// console.log(fn2(3, 5, 7));
// console.log(fn2(3, 5));
// console.log(fn2(3));
// console.log(fn2());
// console.log(fn2(2, null, 3));
// console.log(fn2(undefined, undefined, 3));

/*
 * Порядок выполения кода когда одна в другой вызывается и покзать в дебагере
 */
// debugger;
// function fn1() {
//   console.log('fn1');
// }

// function fn2() {
//   console.log('Inside START fn2');
//   fn1();
//   console.log('Inside FINISH fn2');
// }

// fn2();

// console.log('ALL FINISH');

//
//
//
//

// debugger;
// function fn1() {
//   console.log('fn1');
//   return 2;
// }

// function fn2() {
//   const num1 = 3;
//   console.log('Inside START fn2');
//   const res1 = fn1();
//   console.log('Inside FINISH fn2');

//   return num1 + res1;
// }

// console.log(fn2());

// console.log('ALL FINISH');

//
//
//
//

// debugger;
// function fn1(num1) {
//   return num1 * 2;
// }

// function fn2(number1, number2) {
//   const res1 = fn1(number2);

//   return number1 + res1;
// }

// console.log(fn2(2, 4));

/*
 * Guard Clause
 */

// function fn2(number1) {
//   if (number1 <= 5) {
//     console.log('Number 1-5');
//   } else if (number1 > 5 && number1 <= 10) {
//     console.log('Number 6-10');
//   } else {
//     console.log('Number 11 and more');
//   }
// }
// fn2(2);
// console.log(fn2(6));

//
//
// debugger;

// function fn2(number1) {
//   if (number1 <= 5) {
//     console.log('Number 1-5');
//     return;
//   }

//   if (number1 > 5 && number1 <= 10) {
//     console.log('Number 6-10');
//     return;
//   }

//   console.log('Number 11 and more');
// }
// fn2(8);

// console.log(fn2(6));

/*
 *
 * Область видимости
 *
 */

// let b;

// if (true) {
//   b = 7;
//   let a = 10;
// }

// // console.log('a', a);
// console.log('b', b);

//
//
//
//

// if (true) {
//   var a = 10;
// }
// console.log(a);

// function fn1() {
//   var b = 10;
// }

// console.log(b);

/*
 * function decl && unction expression - в чем разница
 */
// console.log(bb);
// const bb = 10;

// const fn1 = function () {
//   console.log('fn1');
// };
// fn1();

// // (function (fff) {
// //   console.log('fn1');
// //   console.log(fff);
// // })(10);

//
//
//
//
// fn2();
// function fn2() {
//   console.log('fn2');
// }

// if (true) {
//   // fn1(a);

//   // var a = 10

//   function fn1(num) {
//     console.log(num);
//   }
// }

// fn1(num);
/*
 * Стрелки
 */

// const fn1 = (num1, num2) => num1 + num2;

// console.log(fn1(2, 3));

// (() => {
//   console.log(111);
// })()

//
//
//
//

// const fn1 = function (num1, num2) {
//   console.log(arguments);
// };
// fn1(2, 3);

//
//

// const fn1 = (...rest111) => {
//   // console.log(arguments);
//   console.log(rest111);
// };

// fn1(2, 3);

//
//
//
//

// const fn1 = (num1, num2, ...rest) => {
//   console.log(num1);
//   console.log(num2);
//   console.log(rest);
// };

// fn1(2, 3, 5, 7);

//
//
//
//

// const fn1 = (num1, num2, ...rest) => {
//   console.log(num1);
//   console.log(num2);
//   console.log(rest);
// };

// fn1(2, 3, [5, 7], 222);

//
//
//
//

// const fn1 = function (num1, num2, ...rest) {
//   console.log(num1);
//   console.log(num2);
//   console.log(rest);
// };

// fn1(2, 3, [5, 7], 222);

//
//
//
//

/*
 * Задача.
 * 1. Фун принимает массив чисел и возвращеет их сумму
 */
// debugger;

// const arr = [1, 3, 4];
// const arr2 = [2, 3, 7];

// const fn1 = array11 => {
//   let total22 = 0;

//   for (const number of array11) {
//     // total22 += number;
//     total22 = total22 + number;
//   }

//   return total22;
// };

// console.log(fn1(arr));
// console.log(fn1(arr2));

//
//
//
//

// const arr = [1, 3, 4];
// const arr2 = [2, 3, 7];
// const arr3 = [20, 10];

// const fn1 = (array11, defSelery = 0) => {
//   let total22 = defSelery;

//   for (const number of array11) {
//     // total22 += number;
//     total22 = total22 + number;
//   }

//   return total22;
// };

// console.log(fn1(arr, 0));
// console.log(fn1(arr2, 1000));
// console.log(fn1(arr3));

/*
 * Задача.
 * 1. Фун принимает массив и возвращет суму квадратов тех чисел [[разбить на две]]
 */
// const arr = [2, 3, 4];

// const fn1 = array => {
//   const dublArray = [];

//   for (const num of array) {
//     // const dublNumb = Math.pow(num, 2);
//     // const dublNumb = num ** 2;
//     const dublNumb = num * num;
//     dublArray.push(dublNumb);
//   }

//   // console.log(dublArray);
//   sum(dublArray);
// }; // [4, 9, 16]

// fn1(arr);

// function sum(array) {
//   let total = 0;

//   for (const num of array) {
//     total += num;
//   }

//   console.log(total);
// } // 29

//
//
//
//

// const arr = [2, 3, 4];

// const fn1 = array => {
//   const dublArray = [];

//   for (const num of array) {
//     const dublNumb = num * num;
//     dublArray.push(dublNumb);
//   }

//   let total = 0;

//   for (const num of dublArray) {
//     total += num;
//   }

//   console.log(total);
// };

// fn1(arr);

/*
 * Задача.
 * 1. Функция заполнения массива случайными числами и длину массива мы указываем
 */

// const fn1 = counter => {
//   const arr = [];

//   for (let i = 0; i < counter; i += 1) {
//     const number = Number((Math.random() * 10).toFixed(2));
//     arr.push(number);
//   }

//   return arr;
// };

// console.log(fn1(10));

/*
 * Задача.
 * 1. Функция принимает слово и нужно изменить порядок слов в строке на обратный
 * 2. И вернуть его
 */
// debugger;

const fn2 = word => {
  let newWord = '';

  // for (let i = word.length; i > 0; i--) {
  //   newWord = newWord + word[i - 1];
  // }
  for (let i = word.length - 1; i >= 0; i -= 1) {
    newWord = newWord + word[i];
  }

  return newWord;
};

console.log(fn2('animal')); // 'lamina'
