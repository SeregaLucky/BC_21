// import io from 'socket.io-client';
// import './styles.css';

// const refs = {
//   nametag: document.querySelector('.nametag'),
//   editor: document.querySelector('.message-editor'),
//   feed: document.querySelector('.message-feed'),
// };

// const socket = io('ws://localhost:3000');
// const userName = prompt('Username?', '') || 'Anonymous';

// appendJoinedMessage(userName);

// socket.on('connected', chatHistory => {
//   console.log(chatHistory);
//   const markup = chatHistory
//     .map(entry => `<li><b>${entry.userName}</b>: ${entry.message}</li>`)
//     .join('');

//   refs.feed.insertAdjacentHTML('beforeend', markup);
// });

// socket.on('chat-message', appendMessageToFeed);
// refs.editor.addEventListener('submit', editorSubmitHandler);

// function editorSubmitHandler(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const input = form.elements.message;

//   if (input.value.trim() === '') {
//     alert('Введи сообщение, животное!');
//     return;
//   }

//   const payload = {
//     userName,
//     message: input.value,
//   };

//   socket.emit('chat-message', payload);
//   appendMessageToFeed(payload);
//   form.reset();
// }

// function appendJoinedMessage(name) {
//   refs.nametag.insertAdjacentHTML(
//     'afterbegin',
//     `<span>Joined chat as <b>${name}</b></span>`,
//   );
// }

// function appendMessageToFeed({ userName, message }) {
//   refs.feed.insertAdjacentHTML(
//     'beforeend',
//     `<li><b>${userName}</b>: ${message}</li>`,
//   );
// }

// const fn1 = num => num2 => {
//   return num + num2;
// };

// console.log(fn1(10)(5));

//
//

// Global
// Parent: null

// [[ENV: Global]]
const fn2 = function (num) {
  // env: fn2
  // Parent: Global
  // num: 10

  // [[ENV: fn2]]
  return function fn333(num2) {
    // env: fn333
    // Parent: fn2
    // num2: 5
    return num2 + num;
  };
};

// Global
// Parent: null
// fn2: function

const resFn = fn2(10);
console.log(resFn);

const res = resFn(5);
console.log(res);

//
//
//
//

const fn1 = num => num2 => num3 => num + num2 + num3;

console.log(fn1(10)(5)(3));
