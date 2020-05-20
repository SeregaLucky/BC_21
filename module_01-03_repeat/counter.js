// Создать объект счетчик с методами увеличивать и методом уменьшать
// Плюс метод который возвращает данные счетчика
// Метод который сбрасываает счетчик до нуля

// let count = 0;

// function giveTime() {
//   return count;
// }

// function inc() {
//   count += 1;
// }

// function dec() {
//   count -= 1;
// }

// function reset() {
//   count = 0;
// }

// inc();
// inc();
// inc();
// console.log(giveTime());
// console.log('===================');

// dec();
// console.log(giveTime());
// console.log('===================');

// reset();
// console.log(giveTime());
// console.log('===================');

//
//
//
//

const timer = {
  counter: 0,

  giveTime() {
    return this.counter;
  },

  inc() {
    this.counter += 1;
  },

  dec() {
    this.counter -= 1;
  },

  reset() {
    this.counter = 0;
  },
};

timer.inc();
timer.inc();
timer.inc();
console.log(timer.giveTime());
console.log('===================');

timer.dec();
console.log(timer.giveTime());
console.log('===================');

timer.reset();
console.log(timer.giveTime());
console.log('===================');
