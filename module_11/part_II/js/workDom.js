// const refs = {
//   startButton: document.querySelector('button[data-action="start"]'),
//   stopButton: document.querySelector('button[data-action="stop"]'),
//   mainDiv: document.querySelector('.js_block'),
// };
// // console.log(refs);

// refs.startButton.addEventListener('click', startGo);
// refs.stopButton.addEventListener('click', stopGo);

// let marginLeft = 0;
// let idSI = null;
// let isGo = false;

// function startGo() {
//   if (isGo) return;
//   isGo = true;

//   idSI = setInterval(() => {
//     marginLeft += 1;
//     refs.mainDiv.style.marginLeft = `${marginLeft}px`;
//   }, 50);
// }

// function stopGo() {
//   clearInterval(idSI);
//   isGo = false;
// }

//
//
//
//

// class Block {
//   constructor({ selector, delay }) {
//     this.mainDiv = document.querySelector(selector);
//     this.delay = delay;

//     this.refs = {
//       startButton: this.mainDiv.querySelector('button[data-action="start"]'),
//       stopButton: this.mainDiv.querySelector('button[data-action="stop"]'),
//       mainDiv: this.mainDiv.querySelector('.js_block'),
//     };

//     this.marginLeft = 0;
//     this.idSI = null;
//     this.isGo = false;

//     this.addList();
//   }

//   addList() {
//     this.refs.startButton.addEventListener('click', this.startGo.bind(this));
//     this.refs.stopButton.addEventListener('click', this.stopGo.bind(this));
//   }

//   startGo() {
//     if (this.isGo) return;
//     this.isGo = true;

//     this.idSI = setInterval(() => {
//       this.marginLeft += 1;
//       this.refs.mainDiv.style.marginLeft = `${this.marginLeft}px`;
//     }, this.delay);
//   }

//   stopGo() {
//     clearInterval(this.idSI);
//     this.isGo = false;
//   }
// }

// const div = new Block({
//   selector: '.js_main_div1',
//   delay: 50,
// });
// console.log(div);

// new Block({
//   selector: '.js_main_div2',
//   delay: 50,
// });

//
//
//
//

// class Timer {
//   constructor({ selector }) {
//     this.mainDiv = document.querySelector(selector);

//     this.refs = {
//       startButton: this.mainDiv.querySelector('button[data-action="start"]'),
//       stopButton: this.mainDiv.querySelector('button[data-action="stop"]'),
//       spanSec: this.mainDiv.querySelector('.js_show_time_sec'),
//       spanMin: this.mainDiv.querySelector('.js_show_time_min'),
//     };

//     this.idSI = null;
//     this.isStart = false;

//     // this.onceStart();
//   }

//   onceStart() {
//     this.updateTime(1000);
//   }

//   start() {
//     if (this.isStart) return;
//     this.isStart = true;

//     const startTime = Date.now();

//     // this.onceStart(startTime);

//     this.idSI = setInterval(() => {
//       const timeNow = Date.now();
//       const deltaTime = timeNow - startTime;

//       // this.printTime(deltaTime);
//       this.updateTime(deltaTime);
//     }, 1000);
//   }

//   stopGoTime() {
//     clearInterval(this.idSI);
//     this.isStart = false;
//     // this.printTime(0);
//     this.updateTime(0);
//   }

//   updateTime(time) {
//     /*
//      * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//      * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//      */
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

//     /*
//      * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//      * миллисекунд в одной секунде (1000)
//      */
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     this.printTime({ mins, secs });
//   }

//   pad(time) {
//     return String(time).padStart(2, 0);
//   }

//   printTime({ secs, mins }) {
//     this.refs.spanSec.textContent = secs;
//     this.refs.spanMin.textContent = mins;
//   }
// }

// const time = new Timer({
//   selector: '.js_time_div',
// });
// console.log(time);

// time.refs.startButton.addEventListener('click', time.start.bind(time));
// time.refs.stopButton.addEventListener('click', time.stopGoTime.bind(time));

// function addEventListener(type, callback){
//   callback()
// }
