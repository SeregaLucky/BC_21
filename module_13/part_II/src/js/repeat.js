// const arr = [
//   { id: 1, name: 'Tom' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Vika' },
// ];

// // for (let i = 0; i < arr.length; i += 1) {
// //   console.log(arr[i]);
// // }

// const iterArr = arr.entries();
// console.log(iterArr);

// const a1 = iterArr.next();
// console.log(a1);

// const a2 = iterArr.next();
// console.log(a2);

//
//
//
//

// const arr = [
//   { id: 1, name: 'Tom' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Vika' },
// ];

// function* arrG(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     yield array[i];
//   }
// }

// const gen = arrG(arr);
// console.log(gen);

// const f1 = gen.next();
// console.log(f1);

// const f2 = gen.next();
// console.log(f2);

// const f3 = gen.next();
// console.log(f3);

// const f4 = gen.next();
// console.log(f4);

// const f5 = gen.next();
// console.log(f5);

//
//
//
//

// const promise = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(555), 100),
// );

// console.log(promise);

// setTimeout(() => console.log(promise), 1000);

//
//
//
//

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = response.json();

  return users;
};

// getUsers().then(users => console.log(users));

//
//
//
//

const getUsers2 = async () => {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(result);
    return result;
  } catch (err) {
    throw err;
  }
};

// getUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error));

//
//
//
//

// const getUsers3 = async () =>
//   await fetch('https://jsonplaceholder.typicode.com/users');

// getUsers().then(users => console.log(users));

//
//
//
//

// const getUsers3 = async () =>
//   await fetch('https://jsonplaceholder.typicode.com/users');

// const res = getUsers();
// console.log(res);

//
//
//
//

// const h1 = document.querySelector('h1');
// console.log('h1', h1);
// console.log('textContent', h1.textContent);
// console.log('innerHTML', h1.innerHTML);
// console.log('innerText', h1.innerText);

// h1.textContent = '<h2>Title 2</h2>';
// h1.innerHTML = '<h2>Title 2</h2>';
// h1.innerHTML = 'Title 2';
// h1.innerText = 'Title 3';
// h1.innerText = '<h2>Title 2</h2>';

//
//
//
//
// const obj = {
//   id: 11,

//   toString() {
//     return 'I am object';
//   },
// };

// console.log(obj);
// alert(obj);

//
//

// const obj = {
//   id: 11,

//   // toString() {
//   //   return 2 + 2;
//   // },
// };

// console.log(obj);
// // alert(obj);
// console.log(`167 ${obj}`);

//
//
