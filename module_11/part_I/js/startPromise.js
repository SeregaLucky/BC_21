// const promise = new Promise((res, rej) => {
//   // console.log(rej);
//   rej(555);
//   // setTimeout(() => {
//   //   res(555);
//   // }, 2000);
// });

// console.log(promise);
// promise.then(num => console.log(num)).catch(err => console.error(err));

//
//
//

// const fn1 = callback => {
//   setTimeout(() => callback(555), 2000);
// };

// const log = numb => console.log(numb);

// fn1(log);

//
//
//
//

const promise = new Promise((res, rej) => {
  setTimeout(() => res(555), 2000);
});

console.log(promise);
promise
  .then(num => num * 2)
  .then(dublNumb => console.log(dublNumb))
  .catch(err => console.error(err))
  .finally(() => console.log('WORK finally'));

fetch('https://dsfdsfdsfsd')
  .then(() => {})
  .catch(ee => console.log('111111', ee));
