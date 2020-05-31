// 1. Произвести общий подсчет кроме чисел которые идут под четными индексами массива
// const nums = [10, 20, 30, 40, 50];

// const fn1 = arr => {
//   return arr.reduce((acc, number, idx) => {
//     console.log('idx', idx);

//     if (!(idx % 2)) {
//       acc += number;
//     }

//     return acc;
//   }, 0);
// };

// console.log('fn1', fn1(nums));

// 2. Код ниже получает из массива строк новый массив, содержащий их длины:
// const arr = ['Есть', 'жизнь', 'на', 'Марсе'];

// const fn2 = arr => arr.map(word => word.length);

// console.log('fn2', fn2(arr));

// 3. Вернуть только положительные числа
// const numbers = [2, -3, 4, 7, 2, -99, 3, -7];

// const fn3 = arr => arr.filter(number => number > 0);

// console.log('fn2', fn3(numbers));

// 4. Вернуть только массив первых вдух объектов
// const users2 = [
//   { id: 1, name: 'Вася' },
//   { id: 2, name: 'Петя' },
//   { id: 3, name: 'Маша' },
// ];

// const fn4 = arr => arr.filter((item, idx) => idx < 2);

// console.log('fn4', fn4(users2));

// 5. Вернуть только массив без объекта у которого id === 2
// const users3 = [
//   { id: 1, name: 'Вася' },
//   { id: 2, name: 'Петя' },
//   { id: 3, name: 'Маша' },
// ];

// const fn5 = (arr, id) => {
//   return arr.filter(item => item.id !== id);
// };

// const deleteId = 2;

// console.log('fn5', fn5(users3, deleteId));

// 6. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0

// const numbers = [5, 8, 4, 0, 4, 5, 6];

// const fn6 = arr => {
//   let total = 0;

//   arr.reduce((acc, number) => {
//     console.log('number', number);

//     if (number === 0) {
//       total = acc;
//       console.log('0 => ', acc);
//       return acc;
//     }

//     acc += number;
//     return acc;
//   }, 0);

//   return total;
// };

// console.log('fn6', fn6(numbers));

// 8. Подщитать общее количество проживших лет персонажей
const scientist = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543,
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947,
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
  },
];
// {
//   first: "Albert",
//   last: "Einstein",
//   year: 1879,
//   passed: 1955,
// },

// const fn8 = arr =>
//   arr.reduce((acc, item) => (acc += item.passed - item.year), 0);

// console.log('fn8(scientist);', fn8(scientist));

// 9. Вернуть массив в котором будут персонажи которые родились с 1850 года и прожили 80 или больше лет

// const fn9 = (arr, yearB, liveYears) => {
//   return arr.filter(
//     item => item.year > yearB && item.passed - item.year > liveYears,
//   );
// };

// const yearB = 1850;
// const liveYears = 80;

// console.log(fn9(scientist, yearB, liveYears));

// 10. Подсчитать количество активных или не активных участинков
// const arrayMy = [
//   { id: 1, name: 'Alex', isActive: true },
//   { id: 2, name: 'Bob', isActive: false },
//   { id: 3, name: 'Ania', isActive: true },
//   { id: 4, name: 'Tom', isActive: true },
//   { id: 5, name: 'Liza', isActive: false },
// ]; // 3 - если активные и 2 если не ктивные

// const fn10 = (arr, isActive) => {
//   return arr.reduce((acc, item) => {
//     if (item.isActive === isActive) {
//       return (acc += 1);
//     }

//     return acc;
//   }, 0);
// };

// const isActive = false;

// console.log('fn10', fn10(arrayMy, isActive));

// 11. Подсчитать количество активных или не активных участинков сохранив в объекте
// const arrayMy = [
//   { id: 1, name: 'Alex', isActive: true },
//   { id: 2, name: 'Bob', isActive: false },
//   { id: 3, name: 'Ania', isActive: true },
//   { id: 4, name: 'Tom', isActive: true },
//   { id: 5, name: 'Liza', isActive: false },
// ]; // { true: 3, false: 2 }

// const fn11 = arr => {
//   return arr.reduce(
//     (acc, item) => {
//       /* 1 */
//       // acc[item.isActive] = item.isActive
//       //   ? acc[item.isActive] + 1
//       //   : acc[item.isActive] + 1;
//       // return acc;

//       /* 2 */
//       if (item.isActive) {
//         acc.true = acc.true + 1;
//         return acc;
//       }

//       acc.false = acc.false + 1;
//       return acc;

//       /* 3 */
//       // acc[item.isActive] = acc[item.isActive] + 1;
//       // return acc;
//     },
//     { true: 0, false: 0 },
//   );
// };
// // debugger;
// console.log('fn11', fn11(arrayMy));

//
//
//
//
// 12. Сумма цифр массива
// const numbers = [12, 104, 81] // 1 + 2 + 1 + 0 + 4 + 8 + 1

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
//
//
//
//
//
//
//
// 13. Пользователь хочет изменить в телефонной книге имя номер друга
// const arrayMy2 = [
//   { id: 1, name: 'Alex', phone: 101 },
//   { id: 2, name: 'Bob', phone: 102 },
//   { id: 3, name: 'Ania', phone: 103 },
//   { id: 4, name: 'Tom', phone: 104 },
//   { id: 5, name: 'Liza', phone: 105 },
// ];
// console.log('arrayMy2', arrayMy2);

// const fn13 = (arr, newInfoObj, id) => {
//   return arr.map(item => {
//     /* 1 */
//     // if (item.id === id) {
//     //   return { ...item, ...newInfoObj };
//     //   // return { id: 4, name: 'Tom', phone: 104, name: 'Tom 222', phone: '434245' };
//     // }
//     // return item;

//     /* 2 */
//     return item.id === id ? { ...item, ...newInfoObj } : item;
//   });
// };

// const id = 4;
// const name = 'Tom 222';
// const phone = '434245';

// const newInfoObj = { name: name, phone: phone };

// console.log('fn13', fn13(arrayMy2, newInfoObj, id));

//
//
//
// 13. Пользователь хочет изменить в телефонной книге имя номер друга
// const arrayMy2 = [
//   { id: 1, name: 'Alex', phone: 101 },
//   { id: 2, name: 'Bob', phone: 102 },
//   { id: 3, name: 'Ania', phone: 103 },
//   { id: 4, name: 'Tom', phone: 104 },
//   { id: 5, name: 'Liza', phone: 105 },
// ];
// console.log('arrayMy2', arrayMy2);

// const fn13 = (arr, newInfoObj, id) =>
//   arr.map(item => (item.id === id ? { ...item, ...newInfoObj } : item));

// const id = 4;
// const name = 'Tom 222';
// const phone = '434245';

// const newInfoObj = { name: name, phone: phone };

// console.log('fn13', fn13(arrayMy2, newInfoObj, id));

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
//
//
//
// 14. Найти пару а именно индексы их элементов которые в субе дадут 50 // [2, 3]
// const numbers = [10, 20, 10, 40, 50, 60, 70];

//
//
//
//
//
//
//
//
// includes
// const arr = [1, 5, 3, 7, 3, 8, 4];
// console.log(arr.includes(3, 4));

//
//

// const obj = { true: 0, false: 0 };
// obj.true = obj.true + 1;

// console.log(obj);

//
//
// debugger;
// const key = true;
// const key2 = 'name';

// const obj = { true: 0, false: 0 };
// obj['true'] = obj[key] + 1;
// obj['3 dfsdf sdfsd'] = 77;
// obj['3-dfsdf sdfsd'] = obj['3 dfsdf sdfsd'] + 1;
// // obj['3 dfsdf sdfsd'] = 77 + 1;

// obj[key2] = 'Alex';
// obj[key2] = 'Alex222';

// // obj.3-dfsdf sdfsd = 10;

// console.log(obj);
// // console.log(obj[key]);

//
//
//
//
//
//
//
// 1- параментр - исходник (массив) . 2 -параметр - сколько елементов должно быть

// const tribonacci = (arr, count) => {
//   return arr.reduce((acc, item, idx, array) => {
//     const startArrLength = array.length;

//     if(){
//       acc.push(...array)
//       return acc;
//     }

//   }, []);
// };

//
//

// const tribonacci = (arr, count) => {
//   const startArrLength = arr.length;
//   const arrayAll = [];

//   const sumStart = arr.reduce((acc, numb) => (acc += numb), 0);
//   arrayAll.push(...arr);

//   for (let i = 0; i < count; i += 1) {
//     if (startArrLength) {
//       arrayAll.push(sumStart);
//     }
//   }

//   return arrayAll;
// };

//
//
//
//

// const tribonacci = (arr, count) => {
//   const startArrLength = arr.length;
//   const arrayAll = [];

//   // const sumStart = arr.reduce((acc, numb) => (acc += numb), 0);
//   arrayAll.push(...arr);

//   for (let i = 0; i < count; i += 1) {
//     const needArr = arrayAll.splice(i, 3);
//     const sum = needArr.reduce((acc, numb) => (acc += numb), 0);
//     console.log('sum', sum);

//     arrayAll.push(sum);
//   }

//   return arrayAll;
// };

// console.log(tribonacci([1, 1, 1], 10));
// [1, 1, 1, 3, 5, 9, 17, 31, 57, 105];
// console.log(tribonacci([0, 0, 1], 10));
// // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
// console.log(tribonacci([0, 1, 1], 10));
// // , [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]
// console.log(tribonacci([1, 0, 0], 10));
// // , [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]
// console.log(tribonacci([0, 0, 0], 10));
// // , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// console.log(tribonacci([1, 2, 3], 10));
// // [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]
// console.log(tribonacci([3, 2, 1], 10));
// // , [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]
// console.log(tribonacci([1, 1, 1], 1));
// // , [1]
// console.log(tribonacci([300, 200, 100], 0));
// // , []
// console.log(tribonacci([0.5, 0.5, 0.5], 30));
// ,
// [
//   0.5,
//   0.5,
//   0.5,
//   1.5,
//   2.5,
//   4.5,
//   8.5,
//   15.5,
//   28.5,
//   52.5,
//   96.5,
//   177.5,
//   326.5,
//   600.5,
//   1104.5,
//   2031.5,
//   3736.5,
//   6872.5,
//   12640.5,
//   23249.5,
//   42762.5,
//   78652.5,
//   144664.5,
//   266079.5,
//   489396.5,
//   900140.5,
//   1655616.5,
//   3045153.5,
//   5600910.5,
//   10301680.5,
// ]

// 1 + 1 + 2 + 3 + 5 + 8;
