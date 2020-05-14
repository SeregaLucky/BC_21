'use strict';

{
  // const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
  // const arr = [33, 55, 11, 44, 22];
}

/*
 * Создание
 */
// const array = [321, 'dsdfds', true, undefined, {}, [4343], 'sdsad'];

// console.log(array);
// console.log(array.length);
// console.log(array[5]);

//
//
// let a;
// a = 10;

// const arr2 = [];
// console.log(arr2);

// arr2[0] = 111;
// arr2[1] = 222;
// arr2[2] = 'Cat';
// arr2[3] = ['New Arr'];
// console.log(arr2);

/*
 * Измиение конкретного
 */
// let a;
// a = 10;
// console.log(a);

// a = 20;
// console.log(a);

// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr);

// arr[1] = 'Big DOG';
// arr[5] = 'Bus new';
// console.log(arr);

/*
 * for
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
//   // console.log(arr[0]);
// }

/*
 * for... of
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];

// for (const word of arr) {
//   console.log(word);
// }

/*
 * length
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr.length);

/*
 * Многомерные массивы
 */
// const array = [
//   [111, 222, 333],
//   [444, 555, 666],
//   [777, 888, 999],
// ];

// console.log(array);
// // console.log(array[1][2]);
// // console.log([444, 555, 666][2]);
// array[1][2] = 123;
// console.log(array);

/*
 * push
 */
// const arr = [111];
// console.log(arr);
// arr.push(333);
// console.log(arr);
// console.log(arr.push(333));
// const newLength = arr.push(333);
// console.log(newLength);
// console.log(arr);

// arr.push(444, 555, 666);
// console.log(arr);

/*
 * pop
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr);

// arr.pop();
// arr.pop();
// console.log(arr);

/*
 * unshift
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr);
// arr.unshift(111);
// console.log(arr);
// arr.unshift(222, 333, 444);
// console.log(arr.unshift(222, 333, 444));
// console.log(arr);

/*
 * shift
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr);
// arr.shift();
// arr.shift();
// arr.shift();
// console.log(arr);

/*
 *
 * ССЫЛОЧНЫЙ ТИП ДАННЫХ
 *
 */
// let a = 7;
// let b = a;
// console.log(b);

//
//

// let a = 7;
// let b = a;
// b = 9;
// console.log(b);
// console.log(a);

//
//

// let a = 7;
// let b = a;
// // let b = 7;
// console.log(a === b);
// // console.log(7 === 7);

//
//

// let a = 'aaa';
// let b = a;
// b = 'fff';
// console.log(b);
// console.log(a);

//
//

// const arr11 = [111];
// const arr22 = arr11;
// console.log(arr22);

//
//

// const arr11 = [111];
// const arr22 = arr11;
// arr22.push(222);
// console.log(arr22);
// console.log(arr11);

//
//

// const a = [111];
// const b = [111];
// console.log(a === b);

//
//

// const a = [111];
// const b = [111];
// console.log(a.length === b.length);
// // console.log(1 === 1);

//
//

// const a = [111]; // 17
// const b = a; // 17
// a.push(222);
// console.log('b', b);
// console.log('a', a);

//
//

// const a = [111]; // 17
// const b = a; // 17
// b.push(222);
// console.log(a === b);
// // console.log(17 === 17);

//
//

// const a = [111]; // 17
// a.push(222);
// console.log(a);
// a = 333; // ошибка

//
//

// let a = [111]; // 11
// let b = a; // 11
// let c = b; // 11
// c.push(222);
// console.log(b);
// console.log(a === b && b === c && c === a);
// // console.log(11 === 11 && 11 === 11 && 11 === 11);

//
//

// const a = [111, 222, 333];
// const b = a;
// b[1] = 999;
// console.log(b);
// console.log(a);

//
//

// const a = [111, 222, 333];
// console.log(a);
// a[1] = 555;
// console.log(a);

/*
 * includes
 */
// const text = 'my cat';
// console.log(text.includes('ca'));
// console.log(text.includes('caa'));

// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr.includes('car'));

/*
 * indexOf
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus', 'dog'];
// // console.log(arr);
// // console.log(arr.indexOf('dog'));
// console.log(arr.indexOf('111'));

/*
 * concat
 */
// const arr = ['cat', 'dog'];
// const arr2 = ['beg', 'box', 'bus'];

// const arr3 = arr.concat(arr2); // ['cat', 'dog', 'beg', 'box', 'bus']
// console.log('arr3', arr3);

// console.log('arr', arr);
// console.log('arr2', arr2);
// console.log(arr.concat(arr2));

/*
 * slice
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// const partArr = arr.slice(); // []
// console.log(partArr);
// console.log(arr === partArr);

//
//

// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// const partArr = arr.slice(0, 3);
// console.log(partArr);

//
//

// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// const partArr = arr.slice(2, 4);
// console.log(partArr);
// console.log(arr);

//
//

// const arr = 'cat is animal';
// const partArr = arr.slice(1, 5);
// console.log(partArr);

//
//

// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// const partArr = arr.slice(2);
// console.log(partArr);

/*
 * splice
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// const res = arr.splice(1, 4);
// console.log(res);
// console.log(arr);

//
//

// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr);
// arr.splice(2, 0, '11111111', '222');
// console.log(arr);

//
//

// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];
// console.log(arr);
// arr.splice(1, 1, 'BIG DOG');
// console.log(arr);

/*
 * join
 */
// const arr = ['cat', 'dog', 'car', 'beg'];
// const res = arr.join(', ') + '.';
// console.log(res);

/*
 * split
 */
// const text = 'my cat is animal';
// const arrText = text.split(' ');
// console.log(arrText);

//
//

// const text = 'my cat is animal';
// const arrText = text.split('a');
// console.log(arrText);

//
//

// const text = 'my cat is animal';
// const arrText = text.split('');
// console.log(arrText);

/*
 * rev && palindrome
 */
// const text = 'anna';
// const text2 = 'anna';

// const arrayText = text2.split('');
// console.log(arrayText);

// const reverseArray = arrayText.reverse();
// console.log(reverseArray);

// const makeWord = reverseArray.join('');
// console.log(makeWord);

// console.log(text2 === makeWord);

/*
 * Задача. Подщет всех знчений
 */
// debugger;
// const arr = [5, 10, 25, 68, 78, 95];
// let total = 0;

// for (const number of arr) {
//   // console.log(number);
//   total += number;
// }

// console.log(total);

/*
 * Задача. Увидичить каждое число на 10%
 */
// const arr1 = [5, 10, 25, 68, 78, 95];

// const arrNew = [];

// for (const number of arr1) {
//   const biggerNumber = (number * 1.1).toFixed(2);
//   arrNew.push(biggerNumber);
//   // arrNew.push((number * 1.1).toFixed(2));
// }

// console.log(arrNew);

/*
 * Задача:
 * 1. Спросить у пользователя сколько товаров он хочет купить
 * 2. И какую цифру введет столько раз должны его спросить о вводе желаемого товара
 * 3. И те товары который пользователь введет вывести в виде массива
 */

/*
 * цикл с добавлением Infinity
 */
// console.log(typeof Infinity);

// let text;

// for (let i = 0; Infinity; i += 1) {
//   text = Number(prompt('111'));

//   if (text === 9) {
//     break;
//   }
// }

/*
 * Задача: создать новые массивы только со славами а другой только с числами
 */
// Global
// const mas = [15, 'hello', 'trump', 23, 'world', 999, 176];

// const onlyText = [];
// const onlyNumber = [];

// for (const el of mas) {
//   // Block 1
//   // console.log(el);

//   if (isNaN(el)) {
//     // Block 2
//     onlyText.push(el);
//   } else {
//     // Block 2
//     onlyNumber.push(el);
//   }

//   // isNaN(el) ? onlyText.push(el) : onlyNumber.push(el);
// }

// console.log('onlyText', onlyText);
// console.log('onlyNumber', onlyNumber);

/*
 * Задача:
 * 1. Есть массив и спрашивать у пользователя какое слово хочет удалить с массива
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];

// // arr.splice(-1, 1);
// // console.log(arr);

// const wordDel = prompt('какое слово удалить?');
// console.log(wordDel);

// const index = arr.indexOf(wordDel);
// console.log(index);

// if (index !== -1) {
//   arr.splice(index, 1);
// }

// console.log('arr', arr);

/*
 * Задача:
 * 1. Есть массив и спрашивать у пользователя какое слово хочет удалить с массива
 * 2. И спрашивать на какое заменить
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];

// // arr.splice(-1, 1);
// // console.log(arr);

// const wordDel = prompt('какое слово удалить?');
// const newWord = prompt('На какое слово заменить?');

// const index = arr.indexOf(wordDel);
// console.log(index);

// if (index !== -1) {
//   arr.splice(index, 1, newWord);
// }

// console.log('arr', arr);

/*
 * Задача:
 * 1. Создать новый массив в котором будет только не четные елементы массива ниже
 */
// const arr = ['cat', 'dog', 'car', 'beg', 'box', 'bus'];

/*
 * Задача:
 * 1. Создать цикл который будет выводить один текст который будет кратен числу 3
 * 2. Или выводить второй текст который будет кратен числу 5
 * 3. Или будет выводить индекс во всех остальных случаях
 */

// const num = 100;

// for (let i = 1; i <= num; i++) {
//   if (i % 3 === 0) {
//     console.log('333');
//     continue;
//   }

//   if (i % 5 === 0) {
//     console.log('555');
//     continue;
//   }

//   console.log(i);
// }

/*
 * Задача:
 * 1. Спросить сколько массивов создать
 * 2. Спросить сколько длина каждого массива
 * 3. Что бы каждом следующем подмасиве счет начинался со следующей цифры
 */

// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// const text11 = prompt('Число массивов?');
// const text22 = prompt('Число массивов?');

// const mainArray = [];

// for (let i = 0; i < text11; i += 1) {
//   const smallArray = [];

//   // mainArray.push(smallArray);

//   for (let j = 1; j <= text22; j += 1) {
//     const num = j + i * text22;

//     smallArray.push(num);
//   }

//   mainArray.push(smallArray);
// }

// console.log(mainArray);
