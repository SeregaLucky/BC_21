import users from '../users.js';

// const li = document.createElement('li');
// li.textContent = 'Cat';
// console.log(li);

// const img = document.createElement('img');
// console.log(img);
// // img.setAttribute(
// //   'src',
// //   'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
// // );
// img.src =
//   'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg';

// img.setAttribute('width', '250');

// li.append(img);

// const listCats = document.querySelector('.js_list_cats');
// listCats.append(li);
//
//
//
//

// const li = document.createElement('li');
// li.textContent = 'Cat';

// const img = document.createElement('img');
// img.setAttribute(
//   'src',
//   'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
// );

// img.setAttribute('width', '250');
// img.width = 200;

// // img.setAttribute('data-action', '222');
// // img.dataset['data-action'] = '222';

// const listCats = document.querySelector('.js_list_cats');
// listCats.append(li);

// li.append(img);

//
//
//
//

// const users = [
//   {
//     id: 1,
//     name: 'Персик',
//     imgSrc:
//       'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
//     childrenNames: ['Чарли', 'Джонни'],
//   },
//   {
//     id: 2,
//     name: 'Зевс',
//     imgSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s',
//     childrenNames: ['Юпитер', 'Снежок'],
//   },
// ];

// const listCats = document.querySelector('.js_list_cats');

// const allCats = users.map(cat => {
//   console.log(cat);
//   const li = document.createElement('li');
//   li.textContent = `Имя котика ${cat.name}`;
//   // console.log(li);

//   // listCats.appendChild(li); // ПЛОХО
//   return li; // ХОРОШО=)
// });

// console.log(allCats);

// listCats.append(...allCats);

//
//
//
//

// const users = [
//   {
//     id: 1,
//     name: 'Персик',
//     imgSrc:
//       'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
//     childrenNames: ['Чарли', 'Джонни'],
//   },
//   {
//     id: 2,
//     name: 'Зевс',
//     imgSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s',
//     childrenNames: ['Юпитер', 'Снежок'],
//   },
// ];

// const listCats = document.querySelector('.js_list_cats');

// const allCats = users.map(cat => {
//   console.log(cat);
//   const li = document.createElement('li');
//   li.textContent = `Имя котика ${cat.name}`;

//   const img = document.createElement('img');
//   img.src = cat.imgSrc;
//   img.width = '200';

//   li.append(img);

//   // listCats.appendChild(li); // ПЛОХО
//   return li; // ХОРОШО=)
// });
// console.log(allCats);

// listCats.append(...allCats);

//
//
//
//

// const users = [
//   {
//     id: 1,
//     name: 'Персик',
//     imgSrc:
//       'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
//     childrenNames: ['Чарли', 'Джонни'],
//   },
//   {
//     id: 2,
//     name: 'Зевс',
//     imgSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s',
//     childrenNames: ['Юпитер', 'Снежок'],
//   },
// ];

// const listCats = document.querySelector('.js_list_cats');

// const allCats = users.map(cat => {
//   console.log(cat);
//   // Содаем лишку
//   const li = document.createElement('li');
//   li.textContent = `Имя котика ${cat.name}`;

//   // Создаем картинку
//   const img = document.createElement('img');
//   img.src = cat.imgSrc;
//   img.width = '200';

//   // создаем список котиков
//   const ul = document.createElement('ul');
//   const allLiNames = cat.childrenNames.map(nameCat => {
//     const liName = document.createElement('li');
//     liName.textContent = nameCat;

//     return liName;
//   });

//   ul.append(...allLiNames);

//   li.append(img, ul);

//   return li; // ХОРОШО=)
// });
// console.log(allCats);

// listCats.append(...allCats);

//
//
//
//

// const listCats = document.querySelector('.js_list_cats');

// // listCats.innerHTML = '<li>222</li>';
// listCats.innerHTML += '<li>222</li>';  // плохо

//
//
//
//

// const listCats = document.querySelector('.js_list_cats');

// const li = '<li>222</li>';

// listCats.insertAdjacentHTML('beforeend', li);

//
//
//
//

// const users = [
//   {
//     id: 1,
//     name: 'Персик',
//     imgSrc:
//       'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
//     childrenNames: ['Чарли', 'Джонни'],
//   },
//   {
//     id: 2,
//     name: 'Зевс',
//     imgSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s',
//     childrenNames: ['Юпитер', 'Снежок'],
//   },
// ];

// const listCats = document.querySelector('.js_list_cats');

// const allLi = users
//   .map(cat => {
//     const li = `
//     <li>
//       <h3>${cat.name}</h3>
//       <img width=200 src="${cat.imgSrc}" alt="">
//     </li>
//  `;

//     // listCats.insertAdjacentHTML('beforeend', li); // ПХОХО
//     return li;
//   })
//   .join('');

// console.log(allLi);

// listCats.insertAdjacentHTML('beforeend', allLi);

//
//
//
//

// const users = [
//   {
//     id: 1,
//     name: 'Персик',
//     imgSrc:
//       'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
//     childrenNames: ['Чарли', 'Джонни'],
//   },
//   {
//     id: 2,
//     name: 'Зевс',
//     imgSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s',
//     childrenNames: ['Юпитер', 'Снежок'],
//   },
// ];

// const listCats = document.querySelector('.js_list_cats');

// const allLi = users.reduce((acc, cat) => {
//   const li = `
//     <li>
//       <h3>${cat.name}</h3>
//       <img width=200 src="${cat.imgSrc}" alt="">
//     </li>
//  `;

//   acc += li;
//   return acc;
// }, '');

// console.log(allLi);

// listCats.insertAdjacentHTML('beforeend', allLi);

// //
// //
// //
// //

// const users = [
//   {
//     id: 1,
//     name: 'Персик',
//     imgSrc:
//       'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
//     childrenNames: ['Чарли', 'Джонни'],
//   },
//   {
//     id: 2,
//     name: 'Зевс',
//     imgSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s',
//     childrenNames: ['Юпитер', 'Снежок'],
//   },
// ];

// const listCats = document.querySelector('.js_list_cats');

// const allLi = users.reduce((acc, cat) => {
//   const li = templeteCat(cat);

//   acc += li;
//   return acc;
// }, '');

// function templeteCat(cat) {
//   return `
//     <li>
//       <h3>${cat.name}</h3>
//       <img width=200 src="${cat.imgSrc}" alt="">
//     </li>
//   `;
// }

// console.log(allLi);

// listCats.insertAdjacentHTML('beforeend', allLi);

//
//
//
//

// const users = [
//   {
//     id: 1,
//     name: 'Персик',
//     imgSrc:
//       'https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/760x/-/format/webp/20143010160217.jpg',
//     childrenNames: ['Чарли', 'Джонни'],
//   },
//   {
//     id: 2,
//     name: 'Зевс',
//     imgSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s',
//     childrenNames: ['Юпитер', 'Снежок'],
//   },
// ];

const listCats = document.querySelector('.js_list_cats');

const allLi = users.map(cat => templeteCat(cat)).join('');

function templeteCat(cat) {
  return `
    <li>
      <h3>${cat.name}</h3>
      <img width=200 src="${cat.imgSrc}" alt="">

      <ul>${templeteNameCat(cat.childrenNames)}</ul>
    </li>
  `;
}

function templeteNameCat(arrayNameCats) {
  return arrayNameCats.map(name => `<li>${name}</li>`).join('');
}

console.log(allLi);

// const li = document.createElement

listCats.insertAdjacentHTML('beforeend', allLi);
// listCats.innerHTML = allLi;

const allLi1 = listCats.querySelectorAll('li');
console.log(allLi1);

//
//
//
//
