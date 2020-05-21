//
//
/* 1. Пример передачи и вызова колбека showText в функцию higherOrderFun */

// const higherOrderFun = function (obj) {
//   console.log('higherOrderFun');
//   console.log(obj);
// };

// const showText = { a: 3 };

// higherOrderFun(showText);

// //
// //
// /* 1. Пример передачи и вызова колбека showText в функцию higherOrderFun */

// const higherOrderFun = function (callback) {
//   console.log('higherOrderFun');
//   console.log(callback);

//   callback();

//   // (function () {
//   //   console.log('I am callback');
//   // })();
// };

// const showText = function () {
//   console.log('I am callback');
//   return 111;
// };

// // console.log(showText);

// higherOrderFun(showText);

// // higherOrderFun(function () {
// //   console.log('I am callback');
// // });

// //
// //
// /* 1. Пример передачи и вызова колбека showText в функцию higherOrderFun */

// // debugger;

// const higherOrderFun = function (callback) {
//   console.log('higherOrderFun');
//   console.log(callback);

//   const numb111 = callback();

//   console.log(numb111);
// };

// const showText = () => {
//   console.log('I am callback');
//   return 111;
// };

// higherOrderFun(showText);

// //
// //
// /* 1. Пример передачи и вызова колбека showText в функцию higherOrderFun */

// // debugger;

// const higherOrderFun = function (callback) {
//   console.log('higherOrderFun');
//   console.log(callback);

//   const numb111 = callback();

//   console.log(numb111);
// };

// higherOrderFun(() => {
//   console.log('I am callback');
//   return 111;
// });

// //
// //
// /* 2. Пример законсолить текст через колбек который лежит в функции higherOrderFun */
// // debugger;

// const arrayNames = ['Tom', 'Bob', 'Alex'];

// const higherOrderFun = function (callback, array) {
//   console.log('higherOrderFun');

//   for (const name of array) {
//     callback(name);
//   }
// };

// const showText = name11 => {
//   console.log(name11);
// };

// higherOrderFun(showText, arrayNames);

//
//
/* 2. Тут мы росто создали функцию внутри другой и там же ее и вызвали */
// debugger;

// const arrayNames = ['Tom', 'Bob', 'Alex'];

// const higherOrderFun = function (array) {
//   console.log('higherOrderFun');

//   for (const name of array) {
//     const showText = name => {
//       console.log(name);
//     };

//     showText(name);
//   }
// };

// higherOrderFun(arrayNames);

//
//
/* 4. higherOrderFun принимает массив имен и колбек.
 * higherOrderFun спрашивает у пользователя новое имя
 * и вызвает колбек который примает массив и новое имя и проверяет есть ли такое имя
 * И если есть то возвращет true если нет то false и именно higherOrderFun выводит результват
 * Если true добавляет в массив если нет то выводит в консоль сообщение "что уже такой есть"
 */
// debugger;
// const arrayNames = ['Tom', 'Bob', 'Alex'];

// const higherOrderFun = function (callback, array) {
//   console.log('higherOrderFun');

//   const newName = prompt('Новое имя');

//   const isFind = callback(array, newName);

//   if (!isFind) {
//     console.log(`Имя это добавилось: ${newName}`);
//     arrayNames.push(newName);
//   } else {
//     console.log(`Имя это уже есть и НЕ добавилось: ${newName}`);
//   }
// };

// const showText = (array, name11) => {
//   return array.includes(name11);
// };

// higherOrderFun(showText, arrayNames);

// console.log(arrayNames);

//
//
/* 5. higherOrderFun принимает массив объектов друзей и колбек.
 * колбек должен вернуть true или false если пользователь активен
 * Должна вернуть пассив объектов активных ползователей
 * КОЛБЕК АНОНИМНОЙ функцией отдать
 */
// const arrayNames = [
//   { id: 1, name: 'Alex', isActive: false },
//   { id: 2, name: 'Bob', isActive: true },
//   { id: 3, name: 'Vika', isActive: true },
//   { id: 4, name: 'Tom', isActive: false },
// ];

// const higherOrderFun = function (array, callback) {
//   console.log('higherOrderFun');

//   const activeFreinds = [];

//   for (const obj of array) {
//     // console.log(obj);

//     const isActive = callback(obj);

//     if (isActive) {
//       activeFreinds.push(obj);
//     }
//   }

//   return activeFreinds;
// };
// // [
// //   { id: 2, name: 'Bob', isActive: true },
// //   { id: 3, name: 'Vika', isActive: true },
// // ];

// const activeArray = higherOrderFun(arrayNames, obj => obj.isActive);

// console.log(activeArray);

//
//
/* 6. На основании 5 только мы сами передаем искать активных или нет
 */

// debugger;

const arrayNames = [
  { id: 1, name: 'Alex', isActive: false },
  { id: 2, name: 'Bob', isActive: true },
  { id: 3, name: 'Vika', isActive: true },
  { id: 4, name: 'Tom', isActive: false },
];

const arrayNames222 = [
  { id: 1, name: 'Alex222', isActive: false },
  { id: 2, name: 'Bob2222', isActive: true },
  { id: 3, name: 'Vika222', isActive: true },
  { id: 4, name: 'Tom222', isActive: false },
];

const higherOrderFun = function (array, isActiveNow, callback) {
  console.log('higherOrderFun');

  const activeFreinds = [];

  for (const obj of array) {
    // console.log(obj);

    const isActive = callback(obj, isActiveNow);

    if (isActive) {
      activeFreinds.push(obj);
    }
  }

  return activeFreinds;
};

const isActive = false;

// Первый вызов
const activeArray = higherOrderFun(
  arrayNames,
  isActive,
  (obj, isActiveNow) => obj.isActive === isActiveNow,
);

// Второй вызов
const activeArray2 = higherOrderFun(
  arrayNames222,
  isActive,
  (obj, isActiveNow) => obj.isActive === isActiveNow,
);

console.log(activeArray);
console.log(activeArray2);

console.log(activeArray === activeArray2); // false
