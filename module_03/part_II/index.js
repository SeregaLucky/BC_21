/*
 * Сразу пример с ними что и где
 */

// const obj111 = { a: 22, ...{ b: 33 } };
// console.log(obj111);

// const arr111 = [222, ...[333]];
// console.log(arr111);
// console.log(...[333])

// const arr2222 = [222, 333];

// function fn9(a, b) {
//   console.log(a, b);
// }

// fn9(...arr2222);
// fn9(222, 333);

//
//
//
//

// function fn9(a, ...rest111) {
//   console.log('a', a);
//   console.log('rest', rest111);
// }
// fn9(222, 333, 444);

//
//
//
//
// const { a, ...allRest } = { a: 4, b: 3, c: 5 };
// console.log(a);
// console.log(allRest);

/*
 * spread массивах
 */

/* Пример с 2 массивами */

// По старинке
// const animal1 = ['dog', 'cat', 'bird'];
// const animal2 = ['tiger', 'lion'];

// const bigArr = animal1.concat(animal2);
// console.log(bigArr);
// console.log('============================');

//
//
//
//

// Новый подход
// const animal3 = ['dog', 'cat', 'bird'];
// const animal4 = ['tiger', 'lion'];

// const bigArr1 = [...animal3, ...animal4];
// // const bigArr1 = ['dog', 'cat', 'bird', 'tiger', 'lion'];
// console.log(bigArr1);

// console.log('============================');

//
//
/* вывести елементы массива через консоль лог */
// const numbers = [11, 44, 22];

// console.log(numbers);
// console.log(...numbers);
// console.log(11, 44, 22);

// console.log('============================');

//
//
/* Найти максимальное число */
// const numbers2 = [34, 44, 22, 8];

// console.log(Math.max(2, 5, 4));
// console.log(Math.max(...numbers2));
// console.log(Math.max(34, 44, 22, 8));

// console.log('============================');

//
//
/* Создание просто копию массива 2 способами */
// const animal5 = ['dog', 'cat', 'bird'];

// const copyA = animal5.slice();
// console.log(copyA);
// console.log(animal5 === copyA);

// const copyA2 = [...animal5];
// console.log(copyA2);

// console.log('============================');

//
//
/* Создание копию массива и добавление (push) в копию */
// const animal6 = ['dog', 'cat', 'bird'];
// console.log(animal6);

// animal6.push('555');
// console.log(animal6);

// console.log('============================');

//
//
/* Создание копию массива с целью добалвение */
// const animal7 = ['dog', 'cat', 'bird'];
// // console.log(animal7);

// const copyA3 = [...animal7];
// copyA3.push('777');
// // console.log(copyA3.push('777'));
// console.log(copyA3);

// console.log('============================');

//
//
/* Создание копию массива используя slice при разбиении */
// const animal8 = ['dog', 'cat', 'bird', 'tiger', 'lion'];

// const newA = [...animal8.slice(0, 2), '777', ...animal8.slice(3)];
// console.log(newA);

// console.log('============================');

//
//
/* Создание копию массива с дополнительными данными ввода */
// const names = ['Tom', 'Bob', 'Ania'];
// console.log(names);

// const word = prompt('Дай слово');

// const copyN = [...names, word];
// // const copyN = ['Tom', 'Bob', 'Ania', '555'];
// console.log(copyN);

// console.log('============================');

//
//
/* Распыление в агрументах вызова функции */
// const names2 = ['Tom', 'Bob', 555, 666];

// const fn1 = (a, b, ...rest222) => {
//   console.log(a);
//   console.log(b);
//   console.log(rest222);
// };

// fn1(names2);
// fn1(['Tom', 'Bob']);

// fn1(...names2);
// fn1('Tom', 'Bob', 555, 666);

// console.log('============================');

/*
 * spread в объектах + когда одинаковые ключи
 */

//
//
/* Создание копию объекта и сравнения */
// const tank = {
//   modal: 'T-84',
//   speed: 110,
// };

// const copyT = { ...tank };
// // const copyT = { modal: 'T-84', speed: 110, };
// console.log(copyT);
// console.log(tank === copyT);

// console.log([...tank]); // не будет работать

// console.log('============================');

//
//
/* Создание копию объекта c добавлением новых данных от пользователя */
// const tank2 = {
//   // modal: 'T-84',
//   speed: 110,
// };
// console.log(tank2);

// const modal = prompt('Новые данные');

// const copyT = { ...tank2, modal };
// // const copyT = { ...tank2, modal: modal };

// console.log(copyT);

// console.log('============================');

//
//
/* Объект с 2 ключами */

// const cssData = {
//   wight: 200,
//   height: 100,

//   height1: 500,

//   height1: 800,
// };

// console.log(cssData);

// console.log('============================');

//
//
/* Создание копию объекта c 2 объектов где ключ в одном повторяется */

// const cssData = {
//   wight: 200,
//   height: 100,
// };

// const cssData2 = {
//   height: 500,
//   padding: 34,
// };

// const bigCopy = { ...cssData, ...cssData2 };
// // const bigCopy = { wight: 200, height: 100, height: 500, padding: 34 };
// console.log(bigCopy);

// console.log('============================');

//
//
/* Создание копию объекта c сложным типом данных и его изминением */
// const weather = {
//   cloud: false,
//   temp: 31,
//   allTemp: [11, 15, 22, 29, 24],
// };
// console.log('weather', weather);

// // const copyW = { ...weather };
// const copyW = { ...weather, allTemp: [...weather.allTemp] };
// // const copyW = { cloud: false, temp: 31, allTemp: [11, 15, 22, 29, 24], allTemp: [11, 15, 22, 29, 24] };

// // console.log(weather === copyW);
// // console.log(weather.cloud);
// console.log(weather.allTemp === copyW.allTemp);

// copyW.temp = 24;
// copyW.allTemp.push(999);
// console.log('copyW', copyW);

//
//
//
//

// const arrP = [
//   { id: 1, name: 'Alex' },
//   { id: 2, name: 'Tom' },
//   { id: 3, name: 'Ania' },
// ];
// console.log('arrP', arrP);

// const copy = [...arrP];
// // console.log('copy', copy);
// // console.log('copy[0]', copy[0]);
// // console.log('copy[0].name ---------- ', copy[0].name);
// copy[0].name = 'Alex888';
// console.log('copy', copy);

// // console.log(arrP === copy);
// // console.log(arrP[0] === copy[1]);

// // console.log('============================');

//
//
//
//

// const arrP = [
//   { id: 1, name: 'Alex' },
//   { id: 2, name: 'Tom' },
//   { id: 3, name: 'Ania' },
// ];
// console.log(arrP);

// const id = Number(prompt('какой айдишник поменять?'));
// const name = prompt('На какое имя поменять?');

// const newName = { name: name };
// // const newName = { name }

// const fn = (array, id, newData) => {
//   const copyA = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].id === id) {
//       console.log('FIND', array[i]);
//       const newChangeObj = { ...array[i], ...newData };
//       copyA.push(newChangeObj);
//     } else {
//       copyA.push(array[i]);
//     }
//   }

//   return copyA;
// };

// console.log(fn(arrP, id, newName));

//
//
//
//

//
//
//
//

// const arrP = [
//   { id: 1, name: 'Alex' },
//   { id: 2, name: 'Tom' },
//   { id: 3, name: 'Ania' },
// ];
// console.log(arrP);

// const fn = (array, id, newData) => {
//   const copyA = [{ ...array[0] }, { ...array[1] }, { ...array[2] }];

//   return copyA;
// };

// console.log(fn(arrP, id, newName));

/*
 *
 * rest
 *
 */
/* В параметрах функции */

/*
 *
 * Диструктуризация объектов && глубокая
 *
 */
// let aa;
// let bb;
// console.log(aa);
// console.log(bb);

//
//
//
//

//
//
/* показать создание переменных в строчку */
// let aa, bb;
// console.log(aa);
// console.log(bb);

//
//
//
//

// const perion1 = {
//   time: 13,
//   data11: {
//     x1: 3,
//     z1: 10,
//   },
// };

//
//
/* Раньше как делали */
// const perion1 = {
//   time: 13,
//   data11: {
//     x1: 3,
//     z1: 10,
//   },
// };

// const time = perion1.time;
// // const time = 13;
// const data = perion1.data11;
// // const data = { x1: 3, z1: 10, },

// console.log('time', time);
// console.log('data', data);

// console.log('============================');

// console.log('============================');

//
//
/* Обычная диструктуризация */
// const perion1 = {
//   time: 13,
//   data11: {
//     x1: 3,
//     z1: 10,
//   },
// };
// // console.log(perion1.time);
// // console.log(perion1.name);

// const { time, data11 } = perion1;
// console.log('time', time);
// console.log('data', data11);

// console.log('============================');

//
//
/* Диструктуризация с иными именами переменных и присв */
// const perion1 = {
//   timeDT: 13,
//   name: 'Bob',
//   age: 30,
// };
// console.log(perion1.age);

// const { timeDT: time, name, age: newAge = 20 } = perion1;
// console.log('time --- ', time);
// console.log('name --- ', name);
// console.log('age --- ', newAge);
// console.log('age --- ', age);
// console.log('time --- ', timeDT);

// console.log('============================');

//
//
/* Диструктуризация глубокая */
// const perion1 = {
//   time: 13,
//   data: {
//     x1: 3,
//     z1: 10,
//   },
// };

// const {
//   time,
//   data: { x1, z1 },
// } = perion1;

// console.log('time --- ', time);
// console.log('x1 --- ', x1);
// console.log('z1 --- ', z1);
// // console.log('data --- ', data);

//
//
//
//

// const perion1 = {
//   time: 13,
//   data: {
//     x1: 3,
//     z1: 10,
//   },
// };

// const { time, data } = perion1;

// console.log('time --- ', time);
// console.log('data --- ', data);
// console.log('x1 --- ', data.x1);
// console.log('z1 --- ', data.z1);

// //
// //
// //
// //

// const perion1 = {
//   time: 13,
//   data: {
//     x1: 3,
//     z1: 10,
//   },
// };

// const { time, data } = perion1;

// // const time = perion1.time;
// // const data = perion1.data;

// console.log('time --- ', time);
// console.log('data --- ', data);

// const { x1, z1 } = data;

// console.log('x1 --- ', x1);
// console.log('z1 --- ', z1);

//
//
//
//

// const perion1 = {
//   time: 13,
//   data: {
//     x1: 3,
//     z1: 10,
//   },
// };
// let { time, data } = perion1;

// const perion2 = {
//   time: 44,
//   data: {
//     x1: 7,
//     z1: 9,
//   },
// };

// let { time, data } = perion2;
// const { time: time2, data: data2 } = perion2;

// let a = 10;
// let a = 20;

//
//
//
//
// const arr = [
//   { id: 1, text: 'Text111' },
//   { id: 2, text: 'Text222' },
//   { id: 3, text: 'Text333' },
// ];

// const [obj1, obj2, obj3] = arr;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

/*
 * Диструктуризация массивов
 */
// const arr = ['TEXT 111', 'TEXT 222', 'TEXT 333', 'TEXT 444'];

// const [text1, text2, ...text3] = arr;

// console.log(text1);
// console.log(text2);
// console.log(text3);

// console.log('============================');

/* Диструктуризация в цикле */
// const object3 = {
//   name: 'Tom',
//   age: 33,
//   car: 2,
// };

// const entries = Object.entries(object3);
// console.log('entries', entries);

// for (const entry of entries) {
//   console.log(entry);
//   // console.log(entry[0]);
//   // console.log(entry[1]);
//   console.log('====================');
// }

// for (const [key, value] of entries) {
//   // console.log(entry);
//   console.log(key);
//   console.log(value);
//   console.log('====================');
// }

// console.log('============================');

/*
 * Диструктуризация в параметрах функции
 */

// const show = ({ age: age111, name, time = 0 }) => {
//   console.log(age111);
//   console.log(name);
//   console.log(time);
// };

// show({ age: 22, name: 'Tom' });

//
//
//
//
//
