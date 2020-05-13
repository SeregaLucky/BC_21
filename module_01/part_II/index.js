'use strict';

// console.log(3 === '3');

// console.log(Boolean(false));

// if ('null') {
//   console.log(111);
// }

//
//
//
//

// const text = 'fsdfsd';
// // console.log(text.length);
// console.log(text.includes('sddfsd'));

//
//
//
//

// const text = 'MY cat';
// const textSmall = text.toLowerCase();
// console.log(text);
// console.log(textSmall);

//
//
//
//

// let a = 6;
// console.log(a);

// a = 7;
// console.log(a);

// const b = null;
// // b = 10;
// console.log(b);

// let b = 10;

//
//
//
//

// if (3) {
//   const a = 10;
//   console.log(a);
// } else if (5) {
//   const a = 12;
// }

//
//
//
//

// let a;
// console.log(a);

//
//
//
//

// console.log(3 && '' && 5);

//
//
//
//

//
//
//
//

// const isGoodAge = confirm('Вам уже есть 18 лет?');
// // console.log(isGoodAge);
// let text;

// if (isGoodAge) {
//   text = 'Вы можете зайти';
// } else {
//   text = 'Вы еще маленький';
// }

// console.log(text);

//
//
//
//

// const age = prompt('Сколько вам лет?');
// const ageNumber = Number(age);
// console.log(ageNumber);
// const isNumber = Number.isNaN(ageNumber);
// let text;

// if (isNumber) {
//   text = 'Вы ввели не чесло';
// } else if (ageNumber === 17) {
//   // '17' === 17
//   text = 'Вы частчино зашли';
// } else if (ageNumber >= 18) {
//   text = 'Вы можете зайти';
// } else {
//   text = 'Вы еще маленький';
// }

// console.log(text);

//
//
//
//

// let numberMuth = prompt('Введите номер месяца?');
// numberMuth = Number(numberMuth);

// let text;

// if (numberMuth === 12 || numberMuth === 1 || numberMuth === 2) {
//   text = 'Зима';
// } else if (numberMuth === 3 || numberMuth === 4 || numberMuth === 5) {
//   text = 'Весна';
// } else if (numberMuth === 6 || numberMuth === 7 || numberMuth === 8) {
//   text = 'Лето';
// } else if (numberMuth === 9 || numberMuth === 10 || numberMuth === 11) {
//   text = 'Осень';
// } else {
//   text = 'Введите только число от 1 до 12';
// }

// console.log(text);

//
//

// const name = 'Bob111';
// let a;

// switch (name) {
//   case 'Alex':
//     a = 1;
//     break;

//   case 'Bob':
//     a = 2;
//     break;

//   default:
//     a = 3;
//     break;
// }

// console.log(a);

//
//

// let numberMuth = prompt('Введите номер месяца?');
// numberMuth = Number(numberMuth);

// let text;

// switch (numberMuth) {
//   case 12:
//   case 1:
//   case 2:
//     text = 'Зима';
//     break;

//   case 3:
//   case 4:
//   case 5:
//     text = 'Весна';
//     break;

//   case 6:
//   case 7:
//   case 8:
//     text = 'Лето';
//     break;

//   case 9:
//   case 10:
//   case 11:
//     text = 'Осень';
//     break;

//   default:
//     text = 'Введите только число от 1 до 12';
// }

// console.log(text);

//
//
//
//
// let a = 10;

// if (true) {
//   // let a; // не можешь обратится раньше ее объявления
//   console.log(a);
//   let a = 20;
//   // 1
//   if (true) {
//     // 2
//   } else {
//     // 2
//   }
// } else {
// }

//
//
//
//
// let a = 10;
// // var a; // поднимается в даном примере до вверха глобальной области видимости
// if (true) {
//   // var a; нельзя зажать блочной областью
//   console.log(a);
//   var a = 20;
//   // a = 20;
//   // 1
//   if (true) {
//     // 2
//   } else {
//     // 2
//   }
// } else {
// }

//
//
//
//
// // var b = 10;
// if (true) {
//   var b = 10;
// }

// console.log(b);

//
//
//
//

//
//
//
//

// // debugger;
// let counter = 6;

// while (counter) {
//   counter = counter - 1;

//   // if (!(counter % 2)) {
//   //   console.log(counter);
//   // }

//   // if (counter % 2) {
//   //   continue;
//   // }
//   // console.log(counter);
// }

// console.log(1111111111111);

//
//
//
//

// // debugger;
// let counter = 6;

// while (true) {
//   counter = counter - 1;
//   console.log(counter);

//   // if (!counter) {
//   //   break;
//   // }
//   if (counter === 0) {
//     break;
//   }
//   // if (counter === 3) {
//   //   break;
//   // }
// }

// console.log(1111111111111);

//
//
//
//

// // debugger;
// let counter = 6;
// let number;

// while (true) {
//   number = prompt('Введите число');
//   number = Number(number);

//   if (number === 10) {
//     break;
//   }
// }

// console.log(1111111111111);

//
//
//
//

// // debugger;
// let counter = 6;
// let number;

// while (number !== 10) {
//   number = prompt('Введите число');
//   number = Number(number);
// }

// console.log(1111111111111);

//
//
//
//

// // debugger;
// let counter = 6;
// let number;
// let totalSum = 0;

// do {
//   number = prompt('Введите число');
//   const number222 = Number(number);
//   const isNumber = Number.isNaN(number222);

//   if (!isNumber) {
//     totalSum = totalSum + number222;
//   }
// } while (number !== null);

// console.log(totalSum);

//
//
//
//

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log(1111111111111);

//
//
//
//

// const text = 'My cat in animal';
// // console.log(text[3]);
// // console.log(text.length);

// for (let i = 0; i < text.length; i++) {
//   console.log(i);
//   console.log(text[i]);
// }

//
//
//
//

// const text = 'My cat in animal';

// for (let i = 0; i < text.length; i++) {
//   // if (text[i] !== ' ') {
//   //   console.log(text[i]);
//   // }

//   if (text[i] === ' ') {
//     continue;
//   }

//   console.log(text[i]);
// }

//
//
//
//
// const alex = 900;
// const bob = 800;
// const Tom = 950;

// const res = alex + bob + Tom;
// console.log(res);

//
//
//
//

// const array = [900, 800, 950];
// console.log(array);
// let allSelery = 0;
// for (let i = 0; i < array.length; i += 1) {
//   allSelery = allSelery + array[i];
// }

// console.log(allSelery);

//
//
//
//

// // показать не четные цифры
// for (let i = 0; i < 6; i += 1) {
//   // if (i % 2) {
//   //   console.log(i);
//   // }

//   if (!(i % 2)) {
//     continue;
//   }

//   console.log(i);
// }

//
//
//
//

// debugger;
// for (let i = 0; i < 6; i += 1) {
//   if (i === 3) {
//     break;
//   }

//   console.log(i);
// }

//
//
//
//

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   // sum = sum + i;
//   sum += i; // аналог вверхней строчки кода
// }

// console.log(sum);

//
//
//
//

// const target = 6;
// for (let i = 0; i < target; i += 1) {
//   console.log(i + 1);
// }

// const target = 6;
// for (let i = 0; i < target; i += 1) {
//   let a = i + 1;
//   console.log(a);
// }

// const target = 6;
// for (let i = 0; i < target; i += 1) {
//   // const text = 'Сейчас у вас цифра:' + i;
//   const text = `Сейчас у вас цифра: ${i + 1}`;
//   console.log(text);
// }

//
//
//
//

// const text = 'Mycatinanimal';
// // console.log(text);
// // console.log(text.toUpperCase());
// // console.log(text.length);
// // console.log(text[2]);

// let textNext = '';

// for (let i = 0; i < text.length; i += 1) {
//   if (!(i % 2)) {
//     textNext = textNext + text[i].toUpperCase();
//   } else {
//     textNext = textNext + text[i];
//   }
// }

// console.log(textNext);

//
//
//
//

// debugger;
// const text = 'Mycatinanimal';

// let textNext = '';

// for (let i = 0; i < text.length; i += 1) {
//   if (!(i % 2)) {
//     textNext = textNext + text[i].toUpperCase();
//     continue;
//   }

//   textNext = textNext + text[i];
// }

// console.log(textNext);

//
//
//
//

// const timeStart = Date.now();
// // for (let i = 0; i < 100000000; i += 1) {}
// const timeFinish = Date.now();

// console.log(111);
// console.log(timeFinish - timeStart);

//
//
//
//

// for (let i = 0; i < 3; i += 1) {
//   console.log(i);
// }

// console.log(i);

//
//
//
//

// for (var i = 0; i < 3; i += 1) {
//   // console.log(i);
// }

// console.log(i);

