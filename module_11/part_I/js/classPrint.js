// class LogicPrint {
//   constructor({ array, selectorParag, delay }) {
//     this.array = array;
//     this.parag = document.querySelector(selectorParag);
//     this.delay = delay;
//   }

//   start() {
//     // this = logicPrint
//     let counterLetters = 0;
//     let counterEl = 0;

//     setInterval(() => {
//       counterLetters += 1;

//       const lengthEl = this.array[counterEl].length;
//       const letters = this.array[counterEl].slice(0, counterLetters);

//       if (lengthEl === counterLetters) {
//         counterLetters = 0;

//         // if (this.array.length === counterEl + 1) {
//         //   counterEl = 0;
//         // } else {
//         //   counterEl += 1;
//         // }

//         this.array.length === counterEl + 1
//           ? (counterEl = 0)
//           : (counterEl += 1);
//       }

//       this.printText(letters);
//     }, this.delay);
//   }

//   printText(letters) {
//     this.parag.textContent = letters;
//   }
// }

// const arrText = ['My cat is animal', 'Can I fly?', 'Yes, it is WORK=)'];

// const logicPrint = new LogicPrint({
//   array: arrText,
//   selectorParag: '.js_text',
//   delay: 200,
// });

// console.log(logicPrint);
// logicPrint.start();

// //
// //

// const arrText2 = ['My 1111 animal', 'Can 2222 fly?', 'Yes, 333 WORK=)'];
// const logicPrint2 = new LogicPrint({
//   array: arrText2,
//   selectorParag: '.js_text2',
//   delay: 400,
// });

// logicPrint2.start();

//
//
//
//
//
//

class LogicPrint {
  constructor({ array, selectorParag, delay }) {
    this.array = array;
    this.parag = document.querySelector(selectorParag);
    // this.spanDays = this.parag.querySelector('span[data-value="days"]')
    this.delay = delay;

    this.start();
  }

  start() {
    // this = logicPrint
    let counterLetters = 0;
    let counterEl = 0;

    setInterval(() => {
      counterLetters += 1;

      const lengthEl = this.array[counterEl].length;
      const letters = this.array[counterEl].slice(0, counterLetters);

      if (lengthEl === counterLetters) {
        counterLetters = 0;

        // if (this.array.length === counterEl + 1) {
        //   counterEl = 0;
        // } else {
        //   counterEl += 1;
        // }

        this.array.length === counterEl + 1
          ? (counterEl = 0)
          : (counterEl += 1);
      }

      this.printText(letters);
    }, this.delay);
  }

  printText(letters) {
    this.parag.textContent = letters;
  }
}

const arrText = ['My cat is animal', 'Can I fly?', 'Yes, it is WORK=)'];
const arrText2 = ['My 1111 animal', 'Can 2222 fly?', 'Yes, 333 WORK=)'];

// new LogicPrint({
//   array: arrText,
//   selectorParag: '.js_text',
//   delay: 200,
// });

// new LogicPrint({
//   array: arrText2,
//   selectorParag: '.js_text2',
//   delay: 400,
// });
