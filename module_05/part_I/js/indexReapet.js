// let a = 10;
// let a;

//
//
//
//

// var a = 10;
// var a;

// if (true) {
//   console.log(a);
// }

//
//
//
//

// const obj = {
//   counter: 0,

//   increment() {
//     console.log(this);

//     this.counter += 1;
//     // obj.counter += 1;
//     console.log(this.counter);
//     // console.log(obj.counter);
//   },
// };

// // obj.increment();
// // obj.increment();

// function show(callback) {
//   callback();
// }

// show(obj.increment.bind(obj));
// // show(obj.increment.bind(666));

//
//
//
//

// let counter = 0;

// const increment = function () {
//   counter += 1;
//   console.log(counter);
// };

// increment();
// increment();

//
//
//
//

const obj = {
  counter: 0,

  increment() {
    console.log(this);

    this.counter += 1;
    // obj.counter += 1;
    console.log(this.counter);
    // console.log(obj.counter);
  },
};

console.log(obj.counter);
obj.increment();
