//SPREAD
// const arr = [11, 22];

// function fn1(a, b) {
//   console.log('a', a);
//   console.log('b', b);
// }

// fn1(...arr);
// // fn1(11, 22);

// const arr1 = [11, ...[22, 33]];
// console.log(arr1);

// const obj = { a: 11, ...{ b: 22, c: 33 } };
// console.log(obj);

// REST

// const arr = [11, 22, 33, 44];

// function fn1(a, b, ...allRest) {
//   console.log('arguments', arguments);
//   const arrayReal = Array.from(arguments);
//   console.log(arrayReal);

//   const arrayReal1 = [...arguments];
//   console.log(arrayReal1);

//   // console.log('a', a);
//   // console.log('b', b);

//   // console.log('b', allRest);

//   // for (const numb of allRest) {
//   //   console.log('numb', numb);
//   // }
// }

// fn1(...arr); // 11, 22, 33, 44

//
//

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const { b, ...restAll } = obj;

// console.log(b);
// console.log(restAll);

// console.log(b);
// console.log(c);

//
//
//
//

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,

//   b: 10,
// };

// console.log(obj);

//
//
//
//

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obj2 = {
//   z: 10,
//   c: 1000,
// };

// const bigObj = { ...obj, ...obj2 }; // { a: 1,  b: 2, c: 3, z: 10, c: 1000 }
// console.log(bigObj);

// const obj2 = {
//   z: 10,
//   c: 1000,
//   f: [11, 22, 33],

//   fn() {},
// };
// console.log(obj2);

// const copyObj = { ...obj2, f: [...obj2.f] };

// copyObj.z = 300;

// // console.log('copyObj.f', typeof copyObj.f);
// // console.log('null', typeof null);

// copyObj.f.push(55);
// console.log(copyObj);

//
///

//
//

// const obj2 = {
//   z: 10,
//   c: 1000,
//   f: [11, 22, 33], // 17

//   addNumb(number) {
//     console.log(number);

//     // this.f.push(number);

//     this.f = [...this.f, number];
//     // obj2.f = [...obj2.f, number]; // 18

//     return this.f;
//     // return obj2.f;
//   },
// };
// console.log(obj2.f);

// // obj2.addNumb(555);
// console.log(obj2.addNumb(555));

// [11,22,33]

// console.log(obj2.f);

//
//
//

// const obj3 = {
//   z: 10,
//   c: 1000,
//   f: [11, 22, 33],
// };

// obj3.f = 10;
// console.log(obj3);

//
//
//

// const obj3 = {
//   z: 10,
//   c: 1000,
//   f: [11, 22, 33], // 17
// };
// console.log(obj3.f); // 17

// // obj3.f.push(555);
// obj3.f = [...obj3.f, 555]; // 18
// console.log(obj3.f); // 18
