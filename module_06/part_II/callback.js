// Переписать через коллбек, коллбек передать в forEachShow

// const users = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
// ];

// const forEachShow = function () {
//   for (let i = 0; i < users.length; i += 1) {
//     showInfoCB(users[i], i, users);
//   }
// };

// const showInfoCB = function (item, idx, array) {
//   console.log('item', item);
//   // console.log('idx', idx);
//   // console.log('array', array);
// };

// forEachShow();

//
//

// Переписать через коллбек, коллбек передать в forEachShow

const users = [
  { id: 1, name: 'Ania', isActive: false },
  { id: 2, name: 'Tom', isActive: true },
  { id: 3, name: 'Jerry', isActive: false },
];

const forEachShow = function (callback) {
  for (let i = 0; i < users.length; i += 1) {
    callback(users[i], i, users);
  }
};

const showInfoCB = function (item, idx, array) {
  console.log('item', item);
  // console.log('idx', idx);
  // console.log('array', array);
};

const showInfoCB222 = function (item, idx, array) {
  console.log('item', item.name);
  // console.log('idx', idx);
  // console.log('array', array);
};

forEachShow(showInfoCB);
forEachShow(showInfoCB222);

//
//

// Переписать через коллбек, коллбек передать в forEachShow
// debugger;
// const users = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
// ];

// const forEachShow = function (callback) {
//   for (let i = 0; i < users.length; i += 1) {
//     callback(users[i], i, users);
//   }
// };

// forEachShow((item, idx, array) => {
//   console.log('item', item);
// });
// forEachShow((item, idx, array)=> {
//   console.log('item', item.name);
// });

//
//

// const users = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
// ];

// users.forEach(item => console.log('item', item));

//
//
//
//

// // Переписать через коллбек, коллбек передать в mapShow

// const users2 = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
// ];

// const mapShow = function () {
//   const array = [];

//   for (let i = 0; i < users2.length; i += 1) {
//     const item = showInfoCB2();
//     array.push(item);
//   }

//   return array;
// };

// const showInfoCB2 = function (item, idx, array) {
//   // console.log('item', item);
//   // console.log('idx', idx);
//   // console.log('array', array);
//   // return 'dfsdfd';
// };

// const result2 = mapShow();
// console.log(result2);

//
//
//
//

// // Переписать через коллбек, коллбек передать в mapShow

const users2 = [
  { id: 1, name: 'Ania', isActive: false },
  { id: 2, name: 'Tom', isActive: true },
  { id: 3, name: 'Jerry', isActive: false },
];

const mapShow = function (callback) {
  const array = [];

  for (let i = 0; i < users2.length; i += 1) {
    const item = callback(users2[i], i, users2);
    array.push(item);
  }

  return array;
};

const showInfoCB2 = function (item, idx, array) {
  console.log('item', item);
  console.log('idx', idx);
  console.log('array', array);
  return 'dfsdfd';

  // return item.name;
};

const result2 = mapShow(showInfoCB2);
console.log(result2);

//
//
//
//

// const users22 = [
//   { id: 11, name: 'Ania', isActive: false },
//   { id: 22, name: 'Tom', isActive: true },
//   { id: 33, name: 'Jerry', isActive: false },
// ];

// const allNames = users22.map(user => {
//   // console.log(user);
//   // console.log(idx);
//   // console.log(arr);
//   // return [user.name, user.id];
//   // return { name: user.name, id: user.id };
// });

// console.log(allNames);

// // //
// // //
// // //
// // //

// // // Переписать через коллбек, коллбек передать в filterShow

// const users3 = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
//   { id: 4, name: 'Alex', isActive: true },
//   { id: 5, name: 'Bob', isActive: false },
// ];

// const filterShow = function () {
//   const array = [];

//   for (let i = 0; i < users3.length; i += 1) {
//     const item = showInfoCB3(users3[i], i, users3);
//     if (item) {
//       array.push(users3[i]);
//     }
//   }

//   return array;
// };

// const showInfoCB3 = function (item, idx, array) {
//   return item.isActive;
// };

// const result3 = filterShow();
// console.log(result3);

// //
// //
// //
// //

// // Переписать через коллбек, коллбек передать в filterShow

// const users3 = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
//   { id: 4, name: 'Alex', isActive: true },
//   { id: 5, name: 'Bob', isActive: false },
// ];

// const filterShow = function (callback) {
//   const array = [];

//   for (let i = 0; i < users3.length; i += 1) {
//     const item = callback(users3[i], i, users3);
//     if (item) {
//       array.push(users3[i]);
//     }
//   }

//   return array;
// };

// const showInfoCB3 = function (item, idx, array) {
//   return item.isActive;
// };

// const result3 = filterShow(showInfoCB3);
// console.log(result3);

// //
// //
// //
// //

// // Переписать через коллбек, коллбек передать в filterShow

const users3 = [
  { id: 1, name: 'Ania', isActive: false },
  { id: 2, name: 'Tom', isActive: true },
  { id: 3, name: 'Jerry', isActive: false },
  { id: 4, name: 'Alex', isActive: true },
  { id: 5, name: 'Bob', isActive: false },
];

const filterShow = function (callback) {
  const array = [];

  for (let i = 0; i < users3.length; i += 1) {
    const item = callback(users3[i], i, users3);
    if (item) {
      array.push(users3[i]);
    }
  }

  return array;
};

// const result3 = filterShow((item, idx, array) => {
//   return item.isActive;
// });
const result3 = filterShow((item, idx, array) => item.isActive);
console.log(result3);

//
//
//
//

// //
// //
// //
// //

// // Переписать через коллбек, коллбек передать в filterShow

// const users33 = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
//   { id: 4, name: 'Alex', isActive: true },
//   { id: 5, name: 'Bob', isActive: false },
// ];

// const res33 = users33.filter((item, idx, array) => item.isActive);
// console.log(res33);

// //
// //
// //
// //

// // Переписать через коллбек, коллбек передать в findShow

const users4 = [
  { id: 1, name: 'Ania', isActive: false },
  { id: 2, name: 'Tom', isActive: true },
  { id: 3, name: 'Jerry', isActive: false },
  { id: 4, name: 'Alex', isActive: true },
  { id: 5, name: 'Bob', isActive: false },
];

const findShow4 = function () {
  for (let i = 0; i < users4.length; i += 1) {
    const item = showInfoCB4(users4[i], i, users4);

    if (item) {
      return users4[i];
    }
  }
};

const showInfoCB4 = function (item, idx, array) {
  return item.id === 2;
};

const result4 = findShow4();

console.log(result4);

//
//

// const users4 = [
//   { id: 1, name: 'Ania', isActive: false },
//   { id: 2, name: 'Tom', isActive: true },
//   { id: 3, name: 'Jerry', isActive: false },
//   { id: 4, name: 'Alex', isActive: true },
//   { id: 5, name: 'Bob', isActive: false },
// ];

// const el = users4.find((item, idx, array) => item.id === 2);

// console.log(el);

//
//

// tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// const countLikes = function (tweets) {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

//
//

//
//

// const users5 = [
//   { id: 1, name: 'Ania', isActive: false, selery: 200 },
//   { id: 2, name: 'Tom', isActive: true, selery: 200 },
//   { id: 3, name: 'Jerry', isActive: false, selery: 200 },
//   { id: 4, name: 'Alex', isActive: true, selery: 200 },
//   { id: 5, name: 'Bob', isActive: false, selery: 200 },
// ];

// const res10 = users5.reduce((acc, item, idx, array) => {
//   console.log('acc', acc);
//   acc += item.selery;
//   // return acc;
//   // console.log('item', item);
// }, 0);

// console.log(res10);

//
//

const users5 = [
  { id: 1, name: 'Ania', isActive: false, selery: 200 },
  { id: 2, name: 'Tom', isActive: true, selery: 200 },
  { id: 3, name: 'Jerry', isActive: false, selery: 200 },
  { id: 4, name: 'Alex', isActive: true, selery: 200 },
  { id: 5, name: 'Bob', isActive: false, selery: 200 },
];

const res10 = users5.reduce((acc, item, idx, array) => {
  acc.push(item.name);
  return acc;
}, []);

console.log(res10);
console.log(res10 === users5);
