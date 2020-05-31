//
//
// querySelectorAll

// const allLi = document.querySelectorAll('li');
// console.log(allLi);

// allLi.querySelector('li'); // на самих массивах нету querySelector

// // const allLiArr = [...allLi];
// // console.log(allLiArr);

// allLi.forEach(li => console.log('li', li));

//
//
// querySelector
// debugger;
// const li = document.querySelector('li');
// console.dir(li);
// li.textContent = 99999999;

//
//
// querySelector
// const list = document.querySelector('.js_list');
// console.log(list);

// const allLiList = list.querySelectorAll('li');
// console.log(allLiList);

// allLiList.forEach((li, idx) => {
//   console.log(li.textContent);

//   if (idx === 1) {
//     li.textContent = `Это элемент под индексом ${idx}`;
//   }
// });

//
//
// style
// const list = document.querySelector('.js_list');
// console.log(list);

// list.style.color = 'orange';

//
//

const arrayMy = [
  { id: 1, name: 'Alex', isActive: true },
  { id: 2, name: 'Bob', isActive: false },
  { id: 3, name: 'Ania', isActive: true },
  { id: 4, name: 'Tom', isActive: true },
  { id: 5, name: 'Liza', isActive: false },
];

const tamplate = (name, isActive) => {
  return `
  <li>
    <span>Name: ${name} --- </span>
    <span>IsActive: ${isActive}</span>
  </li>
  `;
};

const allLi = arrayMy.map(item => tamplate(item.name, item.isActive)).join('');

console.log('object', allLi);

const list2 = document.querySelector('.js_list2');
console.log(list2);

list2.innerHTML = allLi;
