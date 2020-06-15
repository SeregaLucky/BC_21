/*
 * 1 callBack
 */
// const fn1 = callback => {
//   setTimeout(() => {
//     const randomNum = Math.round(Math.random() * 10);

//     callback(randomNum);
//   }, 1000);
// };

// const showLog = numb => console.log(numb);
// // const showLog = () => 5 + 5;

// fn1(showLog);

/*
 * 1 new Promise
 */
// const fn1 = () => {
//   return new Promise((good, bad) => {
//     setTimeout(() => {
//       const randomNum = Math.round(Math.random() * 10);

//       good(randomNum);
//       // bad('Now is error');
//     }, 500);
//   });
// };

// // const showLog = numb => console.log(numb);
// const showLog = function (numb) {
//   console.log(numb);
// };

// fn1()
//   .then(numb => showLog(numb))
//   .catch(err => console.error(err));

/*
 * 2 callBack
 */
// const fn1 = (cbGood, cbBad) => {
//   setTimeout(() => {
//     const randomN = Math.random();

//     if (randomN > 0.4) {
//       cbGood(randomN);
//     } else {
//       cbBad('This is Error my');
//     }
//   }, 1000);
// };

// const showLogGood = numb => console.log(numb);
// const showLogBad = error => console.error(error);

// fn1(showLogGood, showLogBad);

/*
 * 2 new Promise
 */
// const fn1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const randomN = Math.random();

//       if (randomN > 0.4) {
//         res(randomN);
//       } else {
//         rej('This is Error my');
//       }
//     }, 1000);
//   });
// };

// const showLogGood = numb => console.log(numb);
// const showLogBad = error => console.error(error);

// fn1()
//   .then(numb => showLogGood(numb))
//   .catch(err => showLogBad(err));

// fn1().then(showLogGood).catch(showLogBad);

// fn1().then(
//   numb => showLogGood(numb),
//   err => showLogBad(err),
// );

/*
 * 3 new Promise
 */
// const fn1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const randomN = Math.random();

//       if (randomN > 0.4) {
//         res(randomN);
//       } else {
//         rej('This is Error my');
//       }
//     }, 1000);
//   });
// };

// fn1()
//   .then(numb => {
//     console.log('First then', numb);
//     return numb * 2;
//   })
//   .then(numb => {
//     console.log('Second then', numb);
//     return numb * 2;
//   })
//   .then(numb => {
//     console.log(numb);
//     setTimeout(() => console.log(numb), 1000);
//   })
//   .catch(err => console.error(err))
//   .finally(() => console.log('finally'));

/*
 * 4 new Promise
 */
// const button = document.querySelector('.js_button');
// const parag = document.querySelector('.js_show_text');

// button.addEventListener('click', showIsGood);

// function showIsGood() {
//   fn1()
//     .then(() => showLogGood())
//     .catch(() => showLogBad());
// }

// const fn1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const randomN = Math.random();

//       // if (randomN > 0.4) {
//       //   res();
//       // } else {
//       //   rej();
//       // }

//       randomN > 0.4 ? res() : rej();
//     }, 10);
//   });
// };

// const showLogGood = () => (parag.textContent = 'Good=)');
// const showLogBad = () => (parag.textContent = 'Bad=(');

/*
 * 5
 */
// const fn1 = callback => {
//   let total = 0;

//   for (let i = 0; i < 5; i += 1) {
//     total += i;
//   }

//   callback(total);
// };

// const showLog = numb => console.log(numb);

// fn1(showLog);

/*
 * 5
 */
// const fn1 = () => {
//   let total = 0;

//   for (let i = 0; i < 5; i += 1) {
//     total += i;
//   }

//   return Promise.resolve(total);
//   // return Promise.reject('This is reject');
// };

// const showLog = numb => console.log(numb);
// // const showLogWarn = err => console.warn(err);
// const showLogErr = err => console.error(err);

// const promise = fn1();
// console.log(promise);

// promise.then(showLog).catch(showLogErr);

/*
 * 6
 */
// const startTime = Date.now();

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 3000);

// // console.log('promiseA', promiseA);
// // console.log('promiseB', promiseB);

// /*
//  * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
//  * Первый выполнится через секунду и просто будет готов
//  */
// Promise.all([promiseA, promiseB])
//   .then(result => {
//     const finishTime = Date.now();
//     console.log(finishTime - startTime);
//     console.log(result);
//   }) //["promiseA", "promiseB"]
//   .catch(err => console.log(err));

/*
 * 7
 */
// const makePromise = (text, delay) => {
//   return new Promise((resolve, rej) => {
//     setTimeout(() => {
//       const randomNumb = Math.random();

//       randomNumb > 0.5 ? resolve(text) : rej('My Error');
//     }, delay);
//   });
// };

// const promiseA = makePromise('promiseA', 100);
// const promiseB = makePromise('promiseB', 300);

// /*
//  * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
//  * Первый выполнится через секунду и просто будет готов
//  */
// Promise.all([promiseA, promiseB])
//   .then(result => console.log(result)) //["promiseA", "promiseB"]
//   .catch(err => console.log(err));

/*
 * 7
 */
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Work');
//     }, delay);
//   });
// };

// const promiseA = makePromise('promiseA', 100);
// const promiseB = makePromise('promiseB', 3000);

// /*
//  * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
//  * Первый выполнится через секунду и просто будет готов
//  */
// Promise.race([promiseA, promiseB])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));
