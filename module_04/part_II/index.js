'use strict';

//
//
/* 1. В объекте обычная функция и ее вызвать */
// const persan = {
//   selery: 1000,

//   show() {
//     console.log(this);
//     // console.log(persan);
//   },
// };

// persan.show();

//
//
/* 2. отдельно вызывать функцю с контекстом */
// function show() {
//   console.log(this);
// }

// show();

//
//
/* 3. функция отдельно и ее записать в объект */
// function show() {
//   // this = persan
//   console.log(this);
// }
// const persan = {
//   selery: 1000,
// };

// persan.show = show;
// console.log(persan);

// persan.show();

//
//
/* 4. Метод с объекта записать в другой объект и показать почему именно this тут нужен */
// const persan = {
//   selery: 1000,

//   show() {
//     console.log(this);
//   },
// };

// const persan22 = {
//   selery: 1200,
// };
// persan22.show = persan.show;
// // console.log(persan22);
// persan22.show();

// persan.show();

//
//
/* 5. В методе другая функция и она вызвается там же */
// const persan = {
//   selery: 1000,

//   show() {
//     console.log(this);
//     // console.log(persan);

//     const show222 = function () {
//       console.log('show222', this);
//       // console.log('show222', undefined);
//     };

//     show222();
//   },
// };

// persan.show();

//
//
/*  */
// const persan = {
//   selery: 1000,

//   show() {
//     console.log(this);
//   },

//   show()
// };

// persan.show();

//
//
//
//
//
//
//
//
/* 6. Стрелка */
// let b = 10;

// const arrowF = () => {
//   console.log(this);
//   console.log('b', b);
// };

// arrowF();

//
//
/* 7. Стрелку записать в объект */
// const arrowF = () => {
//   console.log(this);
// };

// const persan = {
//   selery: 1000,
// };

// persan.arrowF = arrowF;
// console.log(persan);
// persan.arrowF();

//
//
/* 8. Стрелка уже лежит в объекте и взывать ее */
// const persan = {
//   selery: 1000,

//   arrowF: () => {
//     //
//     console.log(this);
//   },
// };

// persan.arrowF();

//
//
/* 9. В объетке стрелочная функция а в ней обычная которую там же и вызывают */
// const persan = {
//   selery: 1000,

//   arrowF: () => {
//     console.log(this);

//     const show = function () {
//       // this = undefined
//       console.log('show', this);
//     };

//     show();
//     show.call(this);
//   },
// };

// persan.arrowF();

//
//
/* 9.  */
// const show = function () {
//   console.log(this);
// };

// const persan = {
//   selery: 1000,

//   show() {
//     console.log(this);
//   },
// };

// persan.show();

//
//
/* 10. В объетке обычная функция а в ней другая обычная которую там же и вызывают */
// const persan = {
//   selery: 1000,

//   show() {
//     // this = persan
//     // console.log(this);
//     const aa = 10;

//     // [[ENV: show]]
//     const arrowF = () => {
//       // env arrowF
//       // Parent: show
//       console.log(this);
//       console.log(aa);
//     };

//     // env show
//     // Parent: persan
//     // this = persan, aa = 10, arrowF: func

//     arrowF();
//   },
// };

// persan.show();

//
//
/* 11. В объетке обычная функция а в ней другая обычная которую там же и вызывают
 * и как сделать так что бы во вторая тоже могла достучатся к объетку
 */
// const persan = {
//   selery: 1000,

//   show() {
//     // this = persan
//     console.log(this);

//     const context = this;
//     let context2 = this;

//     const fn1 = function () {
//       // this = undefined
//       context2 = 1000000000;

//       console.log(this);
//       console.log('context', context);
//       console.log('context2', context2);
//     };

//     fn1();
//   },
// };

// persan.show();

//
//
/* 12. В объекте фун обычная а в ней не обычная=) */
// const persan = {
//   selery: 1000,

//   show() {
//     console.log(this);

//     const fn1 = () => {
//       //
//       console.log(this);
//     };

//     fn1();
//   },
// };

// persan.show();

//
//
//
//

// const hotel = {
//   name: 'Resort Hotel',

//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// fn(hotel.showThis);

// // fn(showThis() {
// //   console.log(this);
// // });

//
//
//
//
// const fn = function (callback) {
//   callback();
// };

// const hotel = {
//   name: 'Resort Hotel',

//   show() {
//     console.log(this);
//   },
// };

// hotel.fn = fn;
// hotel.fn(hotel.show);

//
//
//
//
//
//

//
//
/* 13. CALL, apply и для чего */
// const alex = {
//   name: 'Alex',
//   selery: 1000,

//   addSelery(numb) {
//     this.selery = this.selery + numb;
//     console.log(this);
//   },
// };

// alex.addSelery(100);

// const tom = {
//   name: 'Tom',
//   selery: 900,

//   addSelery(numb) {
//     this.selery = this.selery + numb;
//     console.log(this);
//   },
// };

// tom.addSelery(80);

//
//
/* 13. CALL, apply и для чего */
// const addSelery = function (numb, present) {
//   this.selery = this.selery + numb * present;
//   // alex.selery = alex.selery + numb * 0.8;
//   console.log(this);
//   // console.log(alex);
// };

// // console.log(addSelery);

// const alex = {
//   name: 'Alex',
//   selery: 1000,
// };

// addSelery.call(alex, 100, 0.8);

// const tom = {
//   name: 'Tom',
//   selery: 900,
// };

// addSelery.call(tom, 80, 0.8);

//
//
/* 14. call, APPLY и для чего */
// const addSelery = function (numb, present) {
//   this.selery = this.selery + numb * present;
//   console.log(this);
// };

// const alex = {
//   name: 'Alex',
//   selery: 1000,
// };

// addSelery.apply(alex, [100, 0.8]);

// const tom = {
//   name: 'Tom',
//   selery: 900,
// };

// addSelery.apply(tom, [80, 0.8]);

// //
// //
// /* 15. BIND и для чего */
// const tom = {
//   name: 'Tom',
//   selery: 900,

//   show(numb) {
//     console.log(this);
//     console.log(numb);
//   },
// };

// const func = function (callback, numb) {
//   callback();
// };

// // func(tom.show.bind(tom));
// const showCopy = tom.show.bind(tom, 10000);
// func(showCopy, 1000);

//
//
//
//
//
// const tom = {
//   name: 'Tom',
//   selery: 900,

//   arr: [11, 22, 33],
// };
// console.log(tom);

// const { name, selery, arr: arrayNumber } = tom;

// arrayNumber.push(555);

// // const copyArrayNumber = [...arrayNumber];
// // copyArrayNumber.push(555);

// console.log(tom);

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

/* Показать возможно или конструктор или обьъект с методом и кнопка */

// const count = {
//   couner: 0,

//   addSelery() {
//     this.couner += 1;
//     console.log(this);
//   },
// };

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', count.addSelery.bind(count));

// addSelery() {
//   this.couner += 1;
//   console.log(this);
// }()

//
//
//
//

const Count = function ({ counter, step }) {
  // this = {}
  this.counter = counter;

  this.addSelery = function () {
    this.counter += step;
    console.log(this);
  };

  // return this
};

const count = new Count({ counter: 10, step: 5 });
console.log(count);

const count222 = new Count({ counter: 100, step: 50 });
console.log(count222);

const h1 = document.querySelector('h1');

h1.addEventListener('click', count.addSelery.bind(count));

// function addEventListener(text, callback){
//   if(text === 'click'){
//     callback()
//   }
// }
