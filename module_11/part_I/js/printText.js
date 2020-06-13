// const arrText = ['My cat is animal', 'Can I fly?', 'Yes, it is WORK=)'];

const parag = document.querySelector('.js_text');

const logicPrint = {
  arrText: ['My cat is animal', 'Can I fly?', 'Yes, it is WORK=)'],

  start() {
    // this = logicPrint
    let counterLetters = 0;
    let counterEl = 0;

    setInterval(() => {
      counterLetters += 1;

      const lengthEl = this.arrText[counterEl].length;
      const letters = this.arrText[counterEl].slice(0, counterLetters);

      if (lengthEl === counterLetters) {
        counterLetters = 0;

        // if (this.arrText.length === counterEl + 1) {
        //   counterEl = 0;
        // } else {
        //   counterEl += 1;
        // }

        this.arrText.length === counterEl + 1
          ? (counterEl = 0)
          : (counterEl += 1);
      }

      this.printText(letters);
    }, 200);
  },

  printText(letters) {
    parag.textContent = letters;
  },
};

logicPrint.start();

//
//
//
//

const parag2 = document.querySelector('.js_text2');

const logicPrint2 = {
  arrText: ['My 1111 animal', 'Can 2222 fly?', 'Yes, 333 WORK=)'],

  start() {
    // this = logicPrint
    let counterLetters = 0;
    let counterEl = 0;

    setInterval(() => {
      counterLetters += 1;

      const lengthEl = this.arrText[counterEl].length;
      const letters = this.arrText[counterEl].slice(0, counterLetters);

      if (lengthEl === counterLetters) {
        counterLetters = 0;

        // if (this.arrText.length === counterEl + 1) {
        //   counterEl = 0;
        // } else {
        //   counterEl += 1;
        // }

        this.arrText.length === counterEl + 1
          ? (counterEl = 0)
          : (counterEl += 1);
      }

      this.printText(letters);
    }, 100);
  },

  printText(letters) {
    parag2.textContent = letters;
  },
};

logicPrint2.start();
