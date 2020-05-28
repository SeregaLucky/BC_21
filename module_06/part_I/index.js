/*
 * ForEach
 */
// const arrayForObj0 = [22, 33, 44];

// arrayForObj0.forEach((number, idx, array) => {
//   console.log(number);
//   // console.log(idx);
//   // console.log(array);
// });

/*
 * ForEach
 */
// const arrayForObj = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];
// console.log('arrayForObj', arrayForObj);

// const fn1 = arr => {
//   // console.log(arr);
//   arr.forEach((item, idx, array) => {
//     console.log('item', item);

//     item.age = item.age + 1;
//   });
// };

// fn1(arrayForObj);
// console.log('arrayForObj', arrayForObj);

//
//
//
//
/*
 * Map
 */
// const arrayForObj0 = [20, 40, 50];

// const allNum = arrayForObj0.map((number, idx, array) => {
//   console.log(number);
//   return number * 2;
// });
// console.log('allNum', allNum);

/*
 * Map
 */
// const arrayMapObj = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];
// console.log('arrayMapObj', arrayMapObj);

// const fn2 = arr => {
//   return arr.map((item, idx, arr) => {
//     return { ...item, age: item.age + 1 };
//     // return { id: 1, name: 'Alex', age: 24, age: item.age + 1 };
//   });
// };
// fn2(arrayMapObj);
// console.log('arrayMapObj', fn2(arrayMapObj));

/*
 * Map
 */
// const arrayMapObj = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];
// console.log('arrayMapObj', arrayMapObj);

// const fn2 = arr =>
//   arr.map((item, idx, arr) => ({ ...item, age: item.age + 1 }));

// fn2(arrayMapObj);
// console.log('arrayMapObj', fn2(arrayMapObj));

//
//
//
//
/*
 * Map для DOM
 */
// const arrayMapObjDOM = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];

// const fn1 = arr => {
//   return arr
//     .map(
//       item => `
//   <li>
//     <p>Имя: ${item.name}</p>
//     <p>Возраст: ${item.age}</p>
//   </li>
//   `,
//     )
//     .join('');
// };

// console.log(fn1(arrayMapObjDOM));

//
//
//
/*
 * Map для DOM
 */
// const arrayMapObjDOM = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];

// const template = (name, age) => {
//   return `
//   <li>
//     <p>Имя: ${name}</p>
//     <p>Возраст: ${age}</p>
//   </li>
//   `;
// };

// const fn1 = arr => {
//   return arr.map(item => template(item.name, item.age)).join('');
// };

// console.log(fn1(arrayMapObjDOM));

//
//
//
/*
 * Map для DOM
 */
// const user = { id: 1, name: 'Alex', age: 24 };
// // const { name, age } = user;
// const { name, age } = { id: 1, name: 'Alex', age: 24 };
// console.log('name', name);
// console.log('age', age);

// const arrayMapObjDOM = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];

// const template = (name, age) => {
//   return `
//   <li>
//     <p>Имя: ${name}</p>
//     <p>Возраст: ${age}</p>
//   </li>
//   `;
// };

// const fn1 = arr => {
//   return arr.map(({ name, age }) => template(name, age)).join('');
// };

// console.log(fn1(arrayMapObjDOM));

//
//
//
//
/*
 * Filter
 */
// const arrayForObj0 = [20, 40, 50, 30];

// const res = arrayForObj0.filter((number, idx, array) => {
//   return number > 35;
// });

// console.log('res', res);

//
//
//
//
/*
 * Filter
 */
// const arrayForObj0 = [20, 40, 50, 30];

// const res = arrayForObj0.filter((number, idx, array) => number > 35);

// console.log('res', res);

//
//
//
//
/*
 * Filter
 */
// const arrayFilterObj = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 22 },
//   { id: 3, name: 'Jerry', age: 29 },
// ];
// // console.log('object', object)

// const fn1 = (arr, needAge) => {
//   return arr.filter(item => item.age > needAge);
// };

// const needAge = 23;

// console.log('fn1()', fn1(arrayFilterObj, needAge));

//
//
//
//

// const unique = (value, index, array) => {
//   return array.indexOf(value) === index;
// };

// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];

// const uniqueAges = ages.filter((number, idx, array) => {
//   return array.indexOf(number) === idx;
// });

// console.log(uniqueAges);

//
//
//
//
/*
 * Find
 */
// const arrayForObj = ['Alex', 'Ania', 'Vika'];

// const fn1 = arr => arr.find((name, idx, array) => name === 'Ania333');
// console.log(fn1(arrayForObj));

//
//
//
//
/*
 * Find
 */
// const arrayForObj = ['Alex', 'Ania', 'Vika'];

// const fn1 = (arr, needName) =>
//   arr.find((name, idx, array) => {
//     return name === needName;
//   });

// const needName = 'Ania';
// console.log(fn1(arrayForObj, needName));

//
//
//
//
/*
 * Find
 */
// const arrayFindObj = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];

// const fn1 = (arr, id) => {
//   return arr.find(item => item.id === id);
// };

// const id = 2;

// console.log('fn1()', fn1(arrayFindObj, id));

//
//
//
//
/*
 * Some
 */
// const arrayForObj = [20, 40, 50, 30];

// const fn1 = (arr, numb) => {
//   return arr.some((number, idx, array) => {
//     return number > numb;
//   });
// };

// const numb = 30;

// console.log('isGood', fn1(arrayForObj, numb));

//
//
//
//
/*
 * Some
 */
// const arraySomeObj = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];

// const fn1 = (arr, age) => {
//   return arr.some(item => item.age > age);
// };

// const needAge = 20;

// console.log('fn1', fn1(arraySomeObj, needAge));

//
//
//
//
/*
 * Every
 */
// const arrayForObj = [20, 40, 50, 30];

// const fn1 = (arr, needNumber) => {
//   return arr.every((number, idx, array) => number > needNumber);
// };

// const needNumber = 19;

// console.log('fn1', fn1(arrayForObj, needNumber));

//
//
//
//
/*
 * Every
 */

// const arrayEveryObj = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 28 },
//   { id: 3, name: 'Jerry', age: 26 },
// ];

// const fn1 = (arr, age) => {
//   return arr.every(item => {
//     console.log('item', item);

//     return item.age > age;
//   });
// };

// const needAge = 27;

// console.log('fn1', fn1(arrayEveryObj, needAge));

//
//
//
//
/*
 * Sort
 */
// const arrayForObj = [20, 100000000, 40, 50, 30, 25];
// console.log('arrayForObj', arrayForObj);

// const fn1 = arr => {
//   const copyArr = [...arr];

//   // const res = copyArr.sort();
//   const res = copyArr.sort((numb1, numb2) => numb1 - numb2);

//   return res;
// };

// console.log('fn1(arrayForObj)', fn1(arrayForObj));

//
//
//
//
/*
 * Sort
 */
// const array1 = [1, 30, 4, 21, 100000];
// // array1.sort();
// array1.sort((a, b) => a - b);
// array1.sort((a, b) => a - b);
// console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// //
// //
// //
// //
// /*
//  * Sort
//  */
// const arraySortObj = [
//   { id: 3, name: 'Jerry', age: 16 },
//   { id: 2, name: 'Tom', age: 38 },
//   { id: 1, name: 'Alex', age: 24 },
// ];

// const fn1 = arr => {
//   const copyArr = [...arr];
//   return copyArr.sort((item1, item2) => item1.name - item2.name);
// };

// console.log('fn1()', fn1(arraySortObj));

// //
// //
// //
// //
// /*
//  * Sort
//  */
// const arraySortObj = [
//   { id: 3, name: 'Jerry', age: 6 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 1, name: 'Alex', age: 24 },
// ];

//
//
//
//
/*
 * Reduce
 */
// const arrayReduceObj = [
//   { id: 1, name: 'Tom', selery: 900 },
//   { id: 2, name: 'Alex', selery: 1000 },
//   { id: 3, name: 'Tom', selery: 950 },
//   { id: 4, name: 'Ania', selery: 1200 },
// ];

// // const fn1 = arr => {
// //   return arr.reduce((acc, item, idx, array) => {
// //     console.log('item', item);
// //     acc = acc + item.selery;

// //     return acc;
// //   }, 0);
// // };
// // // debugger;
// // const res = fn1(arrayReduceObj);
// // console.log('res', res);

//
//
//
//
/*
 * Reduce
 */
// const arrayReduceObj2 = [
//   { id: 1, name: 'Tom', salary: 900 },
//   { id: 2, name: 'Alex', salary: 1000 },
//   { id: 3, name: 'Tom', salary: 950 },
//   { id: 4, name: 'Ania', salary: 1200 },
// ];
// // debugger;
// const allLi = arrayReduceObj2.reduce((acc, item) => {
//   const temp = `
//   <li>
//     <p>Имя: ${item.name}</p>
//     <p>Salary: ${item.salary}</p>
//   </li>
//   `;

//   // console.log('temp', temp);

//   acc += temp;

//   return acc;
// }, '');

// console.log('allLi', typeof allLi);

// console.log('cat' + 'is' + 'My');

//
//
//
/*
 * Reduce
 */
// const arrayReduceObj2 = [
//   { id: 1, name: 'Tom', salary: 900 },
//   { id: 2, name: 'Alex', salary: 1000 },
//   { id: 3, name: 'Tom', salary: 950 },
//   { id: 4, name: 'Ania', salary: 1200 },
// ];

// const tempate = (name, salary) => {
//   return `
//   <li>
//     <p>Имя: ${name}</p>
//     <p>Salary: ${salary}</p>
//   </li>
//   `;
// };

// const allLi = arrayReduceObj2.reduce(
//   (acc, item) => (acc += tempate(item.name, item.salary)),
//   '',
// );

// console.log('allLi', allLi);

//
//
//
/*
 * Reduce
 */
// const arrayReduceObj2 = [
//   { id: 1, name: 'Tom', salary: 900 },
//   { id: 2, name: 'Alex', salary: 1000 },
//   { id: 3, name: 'Tom', salary: 950 },
//   { id: 4, name: 'Ania', salary: 1200 },
// ];

// const tempateItemUser = (name, salary) => {
//   return `
//   <li>
//     <p>Имя: ${name}</p>
//     <p>Salary: ${salary}</p>
//   </li>
//   `;
// };

// const allLi = arrayReduceObj2.reduce(
//   (acc, { name, salary }) => (acc += tempateItemUser(name, salary)),
//   '',
// );

// console.log('allLi', allLi);

//
//
//
//
//
//

// const arr = [11, 22, 33];

// arr.forEach((element, idx) => {
//   console.log('idx', idx);
// });

//
//

// const users1 = [
//   { id: 1, name: 'Tom', balance: 900 },
//   { id: 2, name: 'Alex', balance: 1000 },
//   { id: 3, name: 'Tom', balance: 950 },
//   { id: 4, name: 'Ania', balance: 1200 },
// ];
// debugger;
// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };

// console.log(calculateTotalBalance(users1));

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => {
//     // acc + user.balance;
//     acc = acc + user.balance;
//     // acc += user.balance;

//     // return acc;
//   }, 0);
// };

// console.log(calculateTotalBalance(users1));

//
//

//
//

// const users1 = [
//   { id: 1, name: 'Tom', balance: 900 },
//   { id: 2, name: 'Alex', balance: 1000 },
//   { id: 3, name: 'Tom', balance: 950 },
//   { id: 4, name: 'Ania', balance: 1200 },
// ];

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => {
//     // acc + user.balance;
//     acc = acc + user.balance;
//     // acc += user.balance;

//     return acc;
//   }, 0);
// };
// debugger;
// console.log(calculateTotalBalance(users1));

//
//
//

// const arr = [
//   [11, 22, 33],
//   [55, 77, 99],
//   [88, 22],
// ];

// const bigArr = arr.reduce((acc, arrNumb) => {
//   return [...acc, ...arrNumb];
//   // return [ 11, 22, 33];
//   // return [ 11, 22, 33, 55, 77, 99];
//   // return [11, 22, 33, 55, 77, 99, 88, 22];
// }, []);

// console.log('bigArr', bigArr);

//
//
//

// const arr = [
//   [11, 22, 33],
//   [55, 77, 99],
//   [88, 22],
// ];

// const bigArr = arr.reduce((acc, arrNumb) => {
//   // const aa = acc.push(...arrNumb);
//   // console.log('aa', aa);

//   acc.push(...arrNumb);

//   return acc;
// }, []);

// console.log('bigArr', bigArr);

//
//
//

// const arr = [
//   [11, 22, 33],
//   [55, 77, 99],
//   [88, 22],
// ];

// const bigArr = arr.flatMap(arrayNumber => arrayNumber);
// console.log('bigArr', bigArr);

//
//
//

// const arr = [222, 444, [11, 22, 33, [55, 77, 99, [88, [666], 22]]]];

// const oneArr = arr.flat(Infinity);
// console.log('oneArr', oneArr);

//
//

// const users1 = [
//   { id: 1, name: 'Tom', balance: [900, 300, 500] },
//   { id: 2, name: 'Alex', balance: [1000, 300, 600] },
//   { id: 3, name: 'Tom', balance: [950, 100, 200] },
//   { id: 4, name: 'Ania', balance: [1200, 300, 400] },
// ];

// const allBalanceSelery = [...new Set(users1.flatMap(item => item.balance))];

// console.log(allBalanceSelery);

//
//

// const set = new Set([11, 22, 11, 22, 33, 33]);
// console.log(set);

// set.add(666);
// console.log(set);

// const newMyArr = [...set];
// console.log(newMyArr);

//
//
//

// const users1 = [
//   { id: 1, name: 'Tom', balance: 900 },
//   { id: 2, name: 'Alex', balance: 1000 },
//   { id: 3, name: 'Tom', balance: 950 },
//   { id: 4, name: 'Ania', balance: 1200 },
// ];

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => user.balance, 0);
// };

// console.log(calculateTotalBalance(users1));

//
//
//
//

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

//
//
//
//

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react', 'js'] },
// ];

// const res = tweets.reduce((acc, item) => {
//   const isFind = item.tags.includes('js');

//   if (isFind) {
//     acc.push('js');
//     // return acc;
//   }

//   return acc;
// }, []);

// console.log('res', res); // ['js', 'js', 'js']

//
//
//
//

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react', 'js'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react', 'js'] },
// ];

// const res = tweets.reduce((acc, item) => {
//   const arrOnlyJS = item.tags.filter(tag => tag === 'js');
//   console.log('arrOnlyJS', arrOnlyJS);

//   if (arrOnlyJS.length) {
//     acc.push(...arrOnlyJS);
//   }

//   return acc;
// }, []);

// console.log('res', res); // ['js', 'js', 'js', 'js']

//
//
//
//

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react', 'js'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react', 'js'] },
];
console.log('tweets', tweets);

const res = tweets
  .filter(item => item.likes > 4)
  .sort((item1, item2) => item1.likes - item2.likes);

console.log('res', res);
