//
//
//
//

// const date = new Date();
// console.log(date);
// console.log(date.getTime());

// console.log(Date.now());

// //
// //
// //
// //

// const date = new Date(5534534534458);
// console.log('date', date);

// //
// //

// const date2 = new Date(2022, 0, 3, 4);
// console.log('date2', date2);

// //
// //

// const date3 = new Date('Jun 03 2022');
// console.log('date2', date3);

//
//

let date = new Date();

// формат вывода
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: 'numeric',
};

// Украина
const localeUk = date.toLocaleString('en-US', options);
console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42
