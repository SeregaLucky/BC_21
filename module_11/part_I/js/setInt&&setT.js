// console.log(111);
// for (let i = 0; i < 5; i++) {}
// console.log(222);

//
//
//
// setTimeout();

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

//
//
//
// setTimeout();

// console.log(111);

// const idST = setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
// console.log('idST', idST);

// for (let i = 0; i < 1000000000; i++) {}

// console.log(222);
// clearTimeout(idST);

//
//
//

// console.log(111);

// const idST = setTimeout(() => {
//   console.log('setTimeout');
// }, 10000);
// console.log('idST', idST);

// for (let i = 0; i < 1000000000; i++) {}

// console.log(222);
// clearTimeout(idST);

//
//
//
// let count = 0;

// setInterval(() => {
//   count += 1;
//   console.log(count);
// }, 1000);

//
//
//
// let count = 0;

// const idSI = setInterval(() => {
//   count += 1;
//   console.log(count);

//   if (count === 10) {
//     clearInterval(idSI);
//   }
// }, 100);
// console.log('idSI', idSI);

// for (let i = 0; i < 1000000000; i++) {}

//
//
//
// const div = document.querySelector('.js_block');

// let margin = 0;

// setInterval(() => {
//   margin += 10;
//   div.style.margin = margin + 'px';
// }, 200);

//
//
//
// const obj = {
//   a: 10,

//   classicFoo() {
//     // this = obj;
//     setTimeout(function () {
//       // this = window;
//       console.log(`${this} in object scope`); // window
//     }, 1000);
//   },

//   arrowFoo() {
//     // this = obj;
//     setTimeout(() => {
//       // нету просто this у стрелок
//       console.log(`${this} in object scope`); // obj
//     }, 1000);
//   },
// };

// setTimeout(function () {
//   console.log(`${this} in global scope`); // window
// }, 1000);

// setTimeout(() => {
//   console.log(`${this} in global scope`); //window
// }, 1000);

// obj.classicFoo(); // window
// obj.arrowFoo(); // obj

//
//
//
//
//
//
// const fn1 = () => console.log('a, b, x');
// setInterval(fn1, 1000);
//
//
// const fn1 = (a, b, x) => console.log(a, b, x);
// setInterval(fn1, 1000, 7, 8, 9);

//
//
// const fn1 = callback => callback(777);
// setInterval(fn1, 1000, console.log);

//
//

// setInterval(() => {
//   console.log(Date.now());
// }, 1000);

// setInterval(() => {
//   const data = new Date();
//   const sec = data.getSeconds();
//   const twoSumSec = String(sec).padStart(3, 0);
//   console.log(twoSumSec);
// }, 1000);

//
//
//
//
const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');

// buttonStart.addEventListener('click', fnStart);
// buttonStop.addEventListener('click', fnStop);

// function fnStart() {}

// function fnStop() {}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomIntegerFromInterval(1, 6));
