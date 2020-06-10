import users from './users.json';

import itemUser from '../templates/itemUser.hbs';
import allLiUsers from '../templates/allLiUsers.hbs';

// console.log(users);
// console.log(itemUser);
// console.log(allLiUsers);

/*
 * Шаблонная строка
 */
// const list = document.querySelector('.js-menu');
// const allLi = users.map(item => `<li>Name: ${item.name}</li>`).join('');
// list.insertAdjacentHTML('beforeend', allLi);

/*
 * HBS - item
 */
// const list = document.querySelector('.js-menu');
// const allLi = users.map(item => itemUser(item)).join('');
// list.insertAdjacentHTML('beforeend', allLi);

/*
 * HBS - AllLi
 */
const list = document.querySelector('.js-menu');
const allLi = allLiUsers(users);
console.log(allLi);
list.insertAdjacentHTML('beforeend', allLi);
