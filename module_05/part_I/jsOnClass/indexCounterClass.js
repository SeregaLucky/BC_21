// class Counter {
//   constructor({ startValue, step }) {
//     this.value = startValue;
//     this.step = step;
//   }

//   increment() {
//     this.value += this.step;
//     console.log('increment this.value =>', this.value);
//   }

//   decrement() {
//     this.value -= this.step;
//     console.log('decrement this.value =>', this.value);
//   }
// }

// const counter = new Counter({ startValue: 10, step: 5 });
// console.log('counter', counter);

// counter.increment();
// counter.increment();
// counter.increment();

// counter.decrement();

//
//
//
//

// class Counter {
//   constructor({ startValue, step }) {
//     this._value = startValue;
//     this.step = step;
//   }

//   increment() {
//     this._value += this.step;
//     console.log('increment this.value =>', this._value);
//   }

//   decrement() {
//     this._value -= this.step;
//     console.log('decrement this.value =>', this._value);
//   }

//   getValue() {
//     return this._value;
//   }

//   setValue(number) {
//     this._value = number;
//   }
// }

// const counter = new Counter({ startValue: 10, step: 5 });
// console.log('counter', counter);
// // console.log('value', counter._value);  // есть метод для этого в объекте
// console.log('value', counter.getValue());

// // counter.value = 1000; // есть метод для этого в объекте
// counter.setValue(500);

// // counter.increment();
// // counter.increment();
// // counter.increment();

// // counter.decrement();

//
//
//
//

// class Counter {
//   constructor({ startValue, step }) {
//     this._value = startValue;
//     this.step = step;
//   }

//   increment() {
//     this._value += this.step;
//     console.log('increment this.value =>', this._value);
//   }

//   decrement() {
//     this._value -= this.step;
//     console.log('decrement this.value =>', this._value);
//   }

//   get value() {
//     return this._value;
//   }

//   set value(number) {
//     this._value = number;
//   }
// }

// const counter = new Counter({ startValue: 10, step: 5 });
// console.log('counter', counter);
// // console.log('value', counter._value);  // есть метод для этого в объекте
// // console.log('value', counter.value);

// // counter.value = 1000; // есть метод для этого в объекте
// // counter.value = 500;

// const startValue = document.querySelector('p');
// const input = document.querySelector('input');
// const btnInc = document.querySelector('.js_inc_btn');
// const btnDec = document.querySelector('.js_decrement_btn');

// startValue.textContent = counter.value;

// btnDec.addEventListener('click', clickDec);
// btnInc.addEventListener('click', clickInc);
// input.addEventListener('change', newStartValue);

// function clickDec() {
//   console.log(111);
//   counter.decrement();
//   startValue.textContent = counter.value;
// }
// function clickInc() {
//   console.log(111);
//   counter.increment();
//   startValue.textContent = counter.value;
// }
// function newStartValue(e) {
//   counter.value = Number(e.target.value);
//   startValue.textContent = counter.value;
// }

// console.log(startValue);

//
//
//
//

// class Counter {
//   constructor({ startValue, step }) {
//     this._value = startValue;
//     this.step = step;

//     this.increment = () => {
//       this._value += this.step;
//       console.log('increment this.value =>', this._value);
//     };

//     this.decrement = () => {
//       this._value += this.step;
//       console.log('increment this.value =>', this._value);
//     };
//   }
// }

// const counter = new Counter({ startValue: 10, step: 5 });
// console.log('counter', counter);

// counter.increment();
// counter.increment();
// counter.increment();

//
//
//
//

// class Counter {
//   constructor({ startValue, step }) {
//     this._value = startValue;
//     this.step = step;

//     this.aaa = 10;

//     // this.increment = () => {
//     //   this._value += this.step;
//     //   console.log('increment this.value =>', this._value);
//     // };

//     // this.decrement = () => {
//     //   this._value += this.step;
//     //   console.log('increment this.value =>', this._value);
//     // };
//   }

//   // aaa = 10;

//   // increment = () => {
//   //   this._value += this.step;
//   //   console.log('increment this.value =>', this._value);
//   // };

//   // decrement = () => {
//   //   this._value += this.step;
//   //   console.log('increment this.value =>', this._value);
//   // };
// }

// const counter = new Counter({ startValue: 10, step: 5 });
// console.log('counter', counter);

// counter.increment();
// counter.increment();
// counter.increment();
//
//
//
//

class Counter {
  constructor({ startValue, step }) {
    // this._value = startValue;
    this.step = step;

    this.value = startValue;

    // this.setValue(startValue);

    // this.#value = startValue; // на прямую не выйдет записать. Будет ошибка
  }

  #value = 10;

  // Публичные свойства классов и они будут записыватся под капотом в constructor
  increment = () => {
    this.#value += this.step;
    console.log('increment this.value =>', this.#value);
  };

  // Публичные свойства классов и они будут записыватся под капотом в constructor
  decrement = () => {
    this.#value += this.step;
    console.log('increment this.value =>', this.#value);
  };

  get value() {
    return this.#value;
  }
  // getValue(number) {
  //   // const newV = number * 2;
  //   this.#value = number;
  // }

  set value(number) {
    this.#value = number;
  }

  //   setValue(number) {
  //     // const newV = number * 2;
  //     this.#value = number;
  //   }
}

const counter = new Counter({ startValue: 100, step: 5 });
console.log('counter', counter);
// counter.#value = 500;
// console.log(counter.#value);
// console.log(counter.value);
// counter.value = 500;

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);
counter.value = 600;
