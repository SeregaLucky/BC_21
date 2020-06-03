// 0 Показать заблокирование меню
// window.addEventListener('contextmenu', stopShowMenu);

// function stopShowMenu(e) {
//   console.log(e);
//   e.preventDefault();
// }

//
//
//
// 1
// const mainDiv = document.querySelector('.js_parent_div');
// const main = document.querySelector('main');

// mainDiv.addEventListener('click', clickDiv);
// main.addEventListener('click', clickMain);
// // window.addEventListener('click', clickW);

// function clickDiv(e) {
//   // console.log(e);
//   console.log('target', e.target);
//   console.log('currentTarget', e.currentTarget);
//   // e.stopPropagation();
//   // e.stopImmediatePropagation();
// }

// function clickMain(e) {
//   console.log('main', e);
// }

// function clickW(e) {
//   console.log('window', e);
// }

//
//
//
// 2
// const items = document.querySelectorAll('.js_item');
// console.log(items);

// items.forEach(li => li.addEventListener('click', activeLi));

// function activeLi(e) {
//   console.log(111);

//   const li = e.target;
//   const activeLi = document.querySelector('.active');
//   console.log(activeLi);

//   if (activeLi) {
//     activeLi.classList.remove('active');
//   }

//   li.classList.add('active');
// }

//
//
//
// 2
// const list = document.querySelector('.js_list_nav');

// list.addEventListener('click', clickList);

// function clickList(e) {
//   // console.log(e);
//   console.log(e.target);
//   // console.log(typeof e.target.nodeName);

//   // if (e.target.nodeName === 'LI') {
//   //   e.target.classList.add('active');
//   // }

//   console.log('e.target', e.target);
//   console.log('e.currentTarget', e.currentTarget);

//   console.log(e.target === e.currentTarget);

//   if (e.target === e.currentTarget) return;

//   const activeLi = document.querySelector('.active');
//   if (activeLi) {
//     activeLi.classList.remove('active');
//   }

//   e.target.classList.add('active');
// }

//
//
//
// 4
// import data from './dataImg.js';
// import { tempImgPhoto } from './tempImgPhoto.js';

// const list = document.querySelector('.js_list');

// const allLi = data.map(item => tempImgPhoto(item)).join('');

// list.insertAdjacentHTML('beforeend', allLi);

// list.addEventListener('click', clickList);

// function clickList(e) {
//   // debugger;
//   console.log('target', e.target);
//   console.log('currentTarget', e.currentTarget);

//   if (e.target.nodeName !== 'IMG') return;
//   // const source = e.target.dataset.source;
//   // console.log(source);
//   const { source } = e.target.dataset;
//   console.log(e.target.dataset);

//   const activeImg = document.querySelector('.activeImg');

//   if (activeImg) {
//     activeImg.classList.remove('activeImg');
//     const { sourcesmall: sourceSmall } = activeImg.dataset;

//     activeImg.src = sourceSmall;
//   }

//   e.target.classList.add('activeImg');
//   e.target.src = source;
// }

//
//
//
// 4
// import data from './dataImg.js';
// import { tempImgPhoto } from './tempImgPhoto.js';

// const list = document.querySelector('.js_list');

// const allLi = data.map(item => tempImgPhoto(item)).join('');

// list.insertAdjacentHTML('beforeend', allLi);

// list.addEventListener('click', clickList);

// function clickList(e) {
//   // debugger;
//   console.log('target', e.target);
//   console.log('currentTarget', e.currentTarget);

//   if (e.target.nodeName === 'IMG') {
//     // const source = e.target.dataset.source;
//     // console.log(source);
//     const { source } = e.target.dataset;
//     console.log(e.target.dataset);

//     const activeImg = document.querySelector('.activeImg');

//     if (activeImg) {
//       activeImg.classList.remove('activeImg');
//       const { sourcesmall: sourceSmall } = activeImg.dataset;

//       activeImg.src = sourceSmall;
//     }

//     e.target.classList.add('activeImg');
//     e.target.src = source;
//   }
// }

//
//
//
// 5
// const buttonShow = document.querySelector('.js_btn_show_modal');
// const overlay = document.querySelector('.js_overlay');
// const buttonClose = document.querySelector('button[data-action="close-modal"]');

// buttonShow.addEventListener('click', showModal);
// overlay.addEventListener('click', clickByModal);
// buttonClose.addEventListener('click', closeModal);

// // setTimeout(showModal, 3000);
// // setTimeout(() => showModal(), 3000);

// function showModal() {
//   window.addEventListener('keydown', handleKey);
//   overlay.classList.add('active');
// }

// function clickByModal(e) {
//   // if (e.target !== e.currentTarget) return;
//   if (e.target === e.currentTarget) {
//     closeModal();
//   }
// }

// function closeModal() {
//   overlay.classList.remove('active');
//   // window.removeEventListener('keydown', handleKey);
// }

// function handleKey(e) {
//   console.log(e.code);
//   if (e.code === 'Escape') {
//     closeModal();
//   }
// }

//
//
//
//
const users = {
  itemUsers: [],

  addUser(name, dream) {
    const user = {
      id: Date.now(),
      name,
      dream,
    };

    this.itemUsers = [...this.itemUsers, user];

    return user;
  },

  deleteUser(id) {
    this.itemUsers = this.itemUsers.filter(user => user.id !== Number(id));
  },
};

const form = document.querySelector('.js_form');
const list3 = document.querySelector('.list3');

form.addEventListener('submit', handleForm);
list3.addEventListener('click', deleteUser);

function handleForm(e) {
  e.preventDefault();
  const nameValue = e.currentTarget.elements.name.value;
  const dreamValue = e.currentTarget.elements.dream.value;

  const userNew = users.addUser(nameValue, dreamValue);
  const itemMarkup = templateItem(userNew.id, userNew.name, userNew.dream);
  list3.insertAdjacentHTML('beforeend', itemMarkup);

  // const itemMarkup = templateItem(nameValue, dreamValue);
  // list3.insertAdjacentHTML('beforeend', itemMarkup);

  e.currentTarget.reset();
  console.log(users);
}

function templateItem(id, name, dream) {
  return `
    <li class="1111" data-id="${id}">
      <p>Name: ${name}</p>
      <p>Dream: ${dream}</p>
      <div>
        <button type="button">Delete</button>
      </div>
    </li>
  `;
}

function deleteUser(e) {
  // console.log(e.target.nodeName);
  if (e.target.nodeName !== 'BUTTON') return;
  const li = e.target.closest('li');
  console.log(li);
  // const id = li.dataset.id;
  const { id } = li.dataset;

  users.deleteUser(id);

  li.remove();
  console.log(users);
}
