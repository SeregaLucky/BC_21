// const button = document.querySelector('.js_button');
// const body = document.body;

// console.log(button);
// console.log(body);

// const temp = '<li class="item">111111</li>';

// body.insertAdjacentHTML('beforebegin', temp);

// const li = document.querySelector('li');
// console.log(li);

// //
// //

// const li2 = document.createElement('li');
// li2.textContent = 2222;
// li2.classList.add('item');
// console.log(li2);
// body.prepend(li2);

//
//
//
//

// const button = document.querySelector('.js_button');
// console.log(button);

// let counter = 0;

// button.addEventListener('click', () => {
//   counter += 1;
//   console.log(counter);
// });

//
//
//
//

// const button = document.querySelector('.js_button');
// console.log(button);
// // button.hidden = true;

// button.addEventListener('click', handleClick);
// button.addEventListener('dblclick', handleDblClick);

// let counter = 0;

// function handleClick() {
//   // counter += 1;
//   // console.log(counter);
// }

// function handleDblClick() {
//   counter += 2;
//   console.log(counter);
// }

//
//
//
//

// const button = document.querySelector('.js_button');
// console.log(button);

// button.addEventListener('click', handleClick);

// function handleClick(event) {
//   // console.log(event);
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);
//   console.log(event.target === event.currentTarget);
// }

//
//
//
//

// const button = document.querySelector('.js_button');
// const body = document.body;

// button.addEventListener('click', handleClick22);

// function handleClick22() {
//   body.classList.toggle('body_active');
// }

//
//
//
//
// const input = document.querySelector('.js_input');

// input.addEventListener('focus', handleFocus1);

// function handleFocus1(event) {
//   // console.log(event);
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);

//   console.log(event.target === event.currentTarget);
// }

//
//
//
//

// const input = document.querySelector('.js_input');

// input.addEventListener('focus', handleFocus1);
// input.addEventListener('blur', handleBlur1);

// function handleFocus1(event) {
//   console.log('FOCUS');
//   // console.log(event);
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);

//   console.log(event.target === event.currentTarget);
// }

// function handleBlur1(event) {
//   console.log('BLUR');
//   console.log(event);
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);

//   console.log(event.target === event.currentTarget);
// }

//
//
//
//

// const input = document.querySelector('.js_input');

// input.addEventListener('change', handleFocus1);

// function handleFocus1(event) {
//   console.log('CHANGE');
//   // console.log(event);
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);

//   console.log(event.target === event.currentTarget);
// }

//
//
//
//

// const input = document.querySelector('.js_input');

// input.addEventListener('input', handleFocus1);

// function handleFocus1(event) {
//   console.log('INPUT');
//   console.log(event);
//   console.log(event.currentTarget.value);
//   console.log(event.target.value);
// }

//
//
//
//

// const input = document.querySelector('.js_input');

// input.addEventListener('input', handleFocus1);

// function handleFocus1(event) {
//   console.log('INPUT');
//   console.log(event);
//   console.log(event.currentTarget.value);
//   console.log('name', event.target.name);
// }

//
//
//
//

// const input = document.querySelector('.js_input');
// const parag = document.querySelector('.js_show_text');

// const handleInput = event => {
//   console.log(event);

//   parag.textContent = event.target.value;
// };

// input.addEventListener('input', handleInput);

// function handleInput(event) {
//   console.log(event);
//   console.log(event.target);
//   console.log(event.currentTarget);

//   parag.textContent = event.target.value;
// }

// const handleInput = event => {
//   console.log(event);

//   parag.textContent = event.target.value;
// };

// function handleInput(event) {
//   console.log(event);

//   parag.textContent = event.target.value;
// }

//
//
//
//

// const parag = document.querySelector('.js_show_text_keys');
// const button = document.querySelector('.js_button2');

// window.addEventListener('keypress', handleKey);
// button.addEventListener('click', handleClickStop);

// function handleKey(event) {
//   console.log(event);

//   // parag.textContent = parag.textContent + event.key;
//   parag.textContent += event.key;
// }

// function handleClickStop(event) {
//   console.log(event);
//   window.removeEventListener('keypress', handleKey);
//   button.removeEventListener('click', handleClickStop);
// }

//
//
//
//
// ПЛОХО!! Не стимете слушатель
// const parag = document.querySelector('.js_show_text_keys');
// const button = document.querySelector('.js_button2');

// window.addEventListener('keypress', event => {
//   parag.textContent += event.key;
// });

// button.addEventListener('click', handleClickStop);

// function handleClickStop(event) {
//   console.log(event);
//   window.removeEventListener('keypress', event => {
//     parag.textContent += event.key;
//   });
//   button.removeEventListener('click', handleClickStop);
// }

//
//
//
//
