'use strict';

/*
 *
 */

/*
 * Что это такое объект && Создание && пару задачек снова теперь на объеткы
 */
// const arr = [11, 22];
// console.log(arr);

// const object = {
//   name: 'Alex',
//   age: 22,
//   house111: 22,
// };

// object.car = 'BMW';
// object['house 111'] = '333 street';

// // console.log(object.car);
// console.log(object['house 111']);

// console.log(object);

// const object2 = {
//   'name-11': 'Alex',
//   'age 22': 22,
//   '33bsd': 232
// };

/*
 * Стучатся к свойствам 2 варианта
 */
// const object = {
//   name: 'Alex',
//   'Мутро 2033': 22,
// };

// console.log(object.name);
// console.log(object['Мутро 2033']);

/*
 * Добавление && перезаписывание
 */

// const object = {
//   name: 'Alex',
//   'Мутро 2033': 22,
// };

// object['Мутро 2033'] = 33;
// object.name = 'Tom';

// console.log(object);

//
//
// const car = 'BMW';

// const children = () => 3;

// const object = {
//   'name': 'Alex',
//   'Мутро 2033': 22,
//   'age': 33,
//   'isActive': true,
//   'car1': car,
//   'children1': children(),
// };

// console.log(object);
// console.log(object.age);
// console.log(object['Мутро 2033']);

// object.age = 34;
// console.log(object.age);

// object['Мутро 2033'] = 66;
// console.log('new letter', object['Мутро 2033']);

/*
 * Изминение двумя способами .[]
 */

/*
 * Delete
 */

// const object = {
//   name: 'Alex',
//   'Мутро 2033': 22,
//   age: 33,
//   isActive: true,
// };

// delete object.age;
// delete object['Мутро 2033'];

// console.log(object);

/*
 * Если стучатся к отсутствующиему свойсту
 */

// const object = {
//   name: 'Alex',
//   'Мутро 2033': 22,
//   age: 33,
//   isActive: true,
// };

// console.log(object.age111);

/*
 * Короткие свойства {a, b}
 */
// const name = 'Tom';
// const age = 22;

// const object = {
//   name: name,
//   age: age,
//   name: 'Tom222',
// };

// // const object = {
// //   name,
// //   age,
// // };

// console.log(object);

/*
 * Вычисляемые свойства через переменную
 * 1. Покзаать создание свойст объекта через значения другого объекта
 */
// const object1 = {
//   name: 'Tom',
//   age: 33,
// };
// // console.log(name);

// console.log(object1.name);
// // console.log(object1.age);

// // const object2 = {
// //   [object1.name]: object1.age,
// //   // ['Tom']: 33
// // };

// // console.log(object2);

/*
 * Методы объекта
 */
// const object3 = {
//   name: 'Tom',
//   age: 33,

//   changeAge: function (newAge) {
//     console.log('this', this);
//     this.age = newAge;
//     // object3.age = newAge;
//   },
// };
// // console.log(object3);
// object3.changeAge(35);
// console.log(object3);

//
//
//
//

// const object3 = {
//   name: 'Tom',
//   age: 33,

//   changeAge(newAge) {
//     console.log('this', this);
//     this.age = newAge;
//     // object3.age = newAge;
//   },
// };
// // console.log(object3);
// object3.changeAge(35);
// console.log(object3);

//
//
//
//

// const object3 = {
//   name: 'Tom',
//   age: 33,

//   changeAge(newAge) {
//     console.log('this', this);
//     const res = newAge - this.age;
//     this.age = newAge;
//     // object3.age = newAge;

//     this.showInfo(res);
//     // object3.showInfo();
//   },

//   showInfo(result) {
//     console.log(`${this.name} ${result}`);
//   },
// };
// // console.log(object3);
// object3.changeAge(35);
// console.log(object3);

/*
 * for...in && if...in
 */

// const object3 = {
//   name: 'Tom',
//   age: 33,
//   car: 2,
// };

// for (const key in object3) {
//   // console.log(key);
//   // console.log(object3[key]);
//   console.log(`${key} ${object3[key]}`);
// }

// if ('age' in object3) {
//   console.log('FIND');
// }

/*
 * Object.keys(), Object.values(), Object.entries()
 */
// const object3 = {
//   name: 'Tom',
//   age: 33,
//   car: 2,
// };

// const allKeys = Object.keys(object3);
// console.log(allKeys);

// for (const key of allKeys) {
//   console.log(object3[key]);
// }

//
//
//
//

// const object3 = {
//   name: 'Tom',
//   age: 33,
//   car: 2,
// };

// const allValues = Object.values(object3);
// console.log(allValues);

//
//
//
//

// const object3 = {
//   name: 'Tom',
//   age: 33,
//   car: 2,
// };

// const allEntries = Object.entries(object3);
// // console.log(allEntries);

// for (const entry of allEntries) {
//   // console.log(entry);
//   // console.log(entry[0]);
//   console.log(entry[1]);
// }

/*
 * Задача.
 * Спросить у пользователя какие данные он хочет получить с объетка
 */
// const value = prompt('По какому ключу предоставить данные?');

// const obj = {
//   name: 'Tom',
//   car: 'BMW',
// };

// const showInfo = (value, object) => {
//   if (object[value]) {
//     console.log(object[value]);
//     return;
//   }

//   console.log('Ключ не найден');

// if (object[value]) {
//   console.log(object[value]);
// } else {
//   console.log('Ключ не найден');
// }

// object[value] ? console.log(object[value]) : console.log('Ключ не найден');
// object[value] ? console.log(object[value]) : console.log('Ключ не найден');
// console.log(object[value] ? object[value] : 'Ключ не найден');
// };

// showInfo(value, obj);

/*
 * Задача.
 * 1. Даны два объетка. Объедините их вместе используе функцию
 */
// const a = { name: 'Alex' };
// const b = { age: 22 };

// const giveBigObj = (obj1, obj2) => {
//   // const bigObj = {};
//   // bigObj.name = obj1.name;
//   // bigObj.age = obj2.age;

//   // const bigObj = {
//   //   name: obj1.name,
//   //   age: obj2.age,
//   // };

//   const name = obj1.name;
//   const age = obj2.age;
//   const bigObj = { name, age };

//   return bigObj;
// };

// console.log(giveBigObj(a, b));

/*
 * Задача.
 * 1. Спросить у пользователя имя и возраст и внести в объект
 * 2. и вернуть этот объект
 */

// const namePt = prompt('Ваше имя?');
// const agePt = prompt('Ваше возраст?');

// const giveInfo = (name, age) => {
//   // const obj = {
//   //   name: name,
//   //   age: age,
//   // };

//   // const obj = {};
//   // obj.name = name;
//   // obj.age = age;

//   const obj = {};
//   obj[name] = name;
//   obj[age] = age;

//   return obj;
// };

// console.log(giveInfo(namePt));

//
//
//
//

// debugger;

// const namePt = prompt('Ваше имя?');

// const giveInfo = name => {
//   // const obj = {};
//   // obj[name] = name;

//   // return obj;

//   return { name };
// };

// console.log(giveInfo(namePt));

//
//
//
//

// debugger;

// const namePt = prompt('Ваше имя?');
// const agePt = prompt('Ваше имя?');

// const giveInfo = (name, age) => ({ name, age });

// console.log(giveInfo(namePt, agePt));

//  {
//    name: 'Alex'
//    age: 22,
//  }

/*
 * Задача.
 * 1. Посчитатль зарплаты
 */
// const obj = {
//   ania: 600,
//   alex: 500,
//   tom: 400,
// };

// const giveAllSelery = object => {
//   const allSelery = Object.values(object);
//   console.log(allSelery);

//   let total = 0;

//   for (const selery of allSelery) {
//     // total = total + selery;
//     total += selery;
//   }

//   return total;
// }; // 1000

// console.log(giveAllSelery(obj));

//
//
//
//

// const obj = {
//   ania: 600,
//   alex: 500,
//   tom: 400,
// };

// const giveAllSelery = function (object) {
//   const allSelery = Object.values(object);
//   console.log(allSelery);

//   let total = 0;

//   for (const selery of allSelery) {
//     // total = total + selery;
//     total += selery;
//   }

//   return total;
// }; // 1000

// console.log(giveAllSelery(obj));

/*
 * Задача.
 * 1. Посчитатль зарплату одного где зп в объекте массив
 */
// const obj = {
//   name: 'Alex',
//   seleries: [200, 400, 100, 200],
// };
// const obj2 = {
//   name: 'Alex',
//   seleries: [100, 400, 100, 2900],
// };

// const resultSelery = object => {
//   let total = 0;

//   for (const selery of object.seleries) {
//     total += selery;
//   }

//   return total;
// };

// console.log(resultSelery(obj));
// console.log(resultSelery(obj2));
/*
 * Задача.
 * 1. Принимает объект и c названием фильмов и их длительностью и вернуть самый длинный фильм
 */
// debugger;
// const films = {
//   'Home alone': 90,
//   'Harry Potter': 210,
//   Aladin: 95,
// };

// const giveLongestfilm = obj => {
//   // console.log(obj);

//   const allEntries = Object.entries(obj);
//   console.log(allEntries);

//   let longestFilm = '';
//   let longestTime = 0;

//   for (const entry of allEntries) {
//     console.log(entry);
//     let film = entry[0];
//     let time = entry[1];

//     if (longestTime < time) {
//       longestTime = time;
//       longestFilm = film;
//     }
//   }

//   return longestFilm;
// };

// console.log(giveLongestfilm(films));

//
//
//
//

// function aaa(a, b) {}
// aaa.age = 22;
// console.log(aaa);

//
//
//
//
// const arr = [11, 22];
// arr.car = 'BMW';
// console.log(arr);

/*
 * Задача.
 * 1. Принимает объект и врнуть с него имя самого мощного оружея
 */

/*
 * Задача. Объект с книгами и методами
 * 1. Вернуть все книги
 * 2. Добавить книгу
 * 3. Удалить книгу
 * 4. Заменить книгу
 * 5. Заменить имя книги
 */

const objBooks = {
  books: [
    { id: 1, name: 'Метро 2033' },
    { id: 2, name: 'Мартин Иден' },
    { id: 3, name: 'Путешествие к центру земли' },
  ],

  getAllBook() {
    return this.books;
    // return objBooks.books;
  },

  addNewBook(book) {
    const newBook = {
      id: this.books.length + 1,
      name: book,
    };

    this.books.push(newBook);
  },

  deleteBook(id) {
    // console.log(id);

    for (let i = 0; i < this.books.length; i += 1) {
      // console.log(this.books[i]);
      // console.log(this.books[i].id);

      if (this.books[i].id === id) {
        this.books.splice(i, 1);
        // objBooks.books.splice(i, 1);
      }
    }
  },
};

// console.log(objBooks.books);
// console.log(objBooks.getAllBook());

console.log(objBooks.addNewBook('Морской волк'));
console.log(objBooks.getAllBook());

console.log('==============================');

objBooks.deleteBook(2);
console.log(objBooks.getAllBook());
