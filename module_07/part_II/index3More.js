// <!-- 6 Counter -->
// class Counter {
//   constructor({ selector, startValue, step }) {
//     // this = {}
//     this.value = startValue;
//     this.step = step;

//     this.mainDiv = document.querySelector(selector);

//     this.refs = {
//       changeNumberEl: this.mainDiv.querySelector('div'),
//       cbuttonDec: this.mainDiv.querySelector('button[data-action="decrement"]'),
//       cbuttonInc: this.mainDiv.querySelector('button[data-action="increment"]'),
//     };

//     this.addL();
//     this.printValue();
//   }

//   addL() {
//     this.refs.cbuttonDec.addEventListener('click', this.dec.bind(this));
//     this.refs.cbuttonInc.addEventListener('click', this.inc.bind(this));
//   }

//   dec() {
//     // console.log(this);
//     this.value -= this.step;
//     console.log(this.value);
//     this.printValue();
//   }

//   inc() {
//     this.value += this.step;
//     console.log(this.value);
//     this.printValue();
//   }

//   printValue() {
//     this.refs.changeNumberEl.textContent = this.value;
//   }
// }

// const counter = new Counter({
//   selector: '.js_counter',
//   startValue: 0,
//   step: 1,
// });

// console.log(counter);

// new Counter({
//   selector: '.js_counter2',
//   startValue: 10,
//   step: 5,
// });

//
//
//
//
//
//

// <!-- 4 без FormData -->
// const form = document.querySelector('.js_form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   // console.log(form.elements);
//   console.log(form.elements);
//   console.log(form.elements.login);

//   const loginValue = form.elements.login.value;
//   const passwordValue = form.elements.password.value;

//   console.log(loginValue);
//   console.log(passwordValue);
// }

//
//
//
//

// <!-- 4 с FormData -->
// const form = document.querySelector('.js_form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);

//   const obj = {};

//   formData.forEach((value, name) => {
//     // console.log(name + ' - ' + value);
//     obj[name] = value;
//   });

//   console.log(obj);
// }

//
//
//
//
//
//
//
//

// <!-- 5 -->
// const button = document.querySelector('.js_btn');
// const span = document.querySelector('.js_text');

// const obj = {
//   name: 'Alex',

//   showName() {
//     console.log(this);
//     console.log(this.name);

//     span.textContent = this.name;
//   },
// };

// button.addEventListener('click', obj.showName.bind(obj));

// function addEventListener(aaa, callback){
//   // const event = собирает емент
//   callback(event)
// }

//
//
//
//

/* Делаем модалку которая будет работать на всех сайтах через tampermonkey */
// const PASSWORD = '1111';

// const body = document.body;
// console.log(document);

// const div = document.createElement('div');

// div.style.background = '#ccc';
// div.style.width = '100%';
// div.style.height = '100%';
// div.style.top = '0';
// div.style.left = '0';
// div.style.right = '0';
// div.style.bottom = '0';
// div.style.position = 'fixed';
// div.style.zIndex = '99999';
// div.style.display = 'flex';
// div.style.alignItems = 'center';
// div.style.justifyContent = 'center';
// console.log(div);

// const input = document.createElement('input');
// div.append(input);

// input.addEventListener('input', stopModal);

// function stopModal(event) {
//   // console.log(event.target);

//   if (event.target.value === PASSWORD) {
//     div.style.display = 'none';

//     input.removeEventListener('input', stopModal);
//   }
// }

// body.append(div);

//
//
//
//

// <!-- 7 -->
const deleteButton = document.querySelector('.js_button2');

deleteButton.addEventListener('click', deleteParag);

let count = 0;
function deleteParag() {
  count += 1;

  const par = document.querySelector('.js_show_text_keys');
  const numb = par.dataset.delete;
  console.log(numb);
  console.log(count);

  if (count === Number(numb)) {
    par.remove();

    deleteButton.removeEventListener('click', deleteParag);
  }
}
