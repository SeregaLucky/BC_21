import API from '../servises/api';
import templateItemsPost from '../templates/templateItemsPost.hbs';
import templateItemPost from '../templates/templateItemPost.hbs';

const refs = {
  form: document.querySelector('.js_form'),
  list: document.querySelector('.js_list'),
  btnChangeForm: document.querySelector('.js_form_edit'),
  activeLi: null,
};

API.getAllItems()
  .then(data => {
    const allLi = templateItemsPost(data);
    refs.list.insertAdjacentHTML('beforeend', allLi);
  })
  .catch(err => console.log(err));

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleClickBtn);
refs.btnChangeForm.addEventListener('click', changeItemForm);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  // console.log(form.elements);
  const inputTitle = form.elements.title;
  const inputAuthor = form.elements.author;

  const object = {
    title: inputTitle.value,
    author: inputAuthor.value,
  };

  API.postItem(object)
    .then(data => {
      const li = templateItemPost(data);
      refs.list.insertAdjacentHTML('beforeend', li);
    })
    .catch(err => console.log(err));

  form.reset();
}

function changeItemForm(e) {
  const buttonChange = e.currentTarget;
  console.log(buttonChange);

  const inputTitle = refs.form.elements.title;
  const inputAuthor = refs.form.elements.author;

  const object = {
    title: inputTitle.value,
    author: inputAuthor.value,
  };

  console.log(object);
  console.log(refs.activeLi);
  const iditem = refs.activeLi.dataset.iditem;
  API.patchItem(iditem, object)
    .then(() => {
      const h3 = refs.activeLi.querySelector('h3');
      const span = refs.activeLi.querySelector('span');

      h3.textContent = inputTitle.value;
      span.textContent = inputAuthor.value;

      const btnAdd = refs.form.querySelector('.js_form_add');
      const btnChange = refs.form.querySelector('.js_form_edit');

      btnAdd.classList.remove('form_btn--disable');
      btnChange.classList.remove('form_btn--active');
    })
    .catch(err => console.log(err));
}

function handleClickBtn(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const needLi = e.target.closest('li');

  const clickBtnAction = e.target.dataset.action;

  if (clickBtnAction === 'change') {
    refs.activeLi = needLi;

    const titleText = needLi.querySelector('h3').textContent;
    const authorText = needLi.querySelector('span').textContent;

    console.log('titleText', titleText);
    console.log('authorText', authorText);

    const inputTitle = refs.form.elements.title;
    const inputAuthor = refs.form.elements.author;

    inputTitle.value = titleText;
    inputAuthor.value = authorText;

    const btnAdd = refs.form.querySelector('.js_form_add');
    const btnChange = refs.form.querySelector('.js_form_edit');

    btnAdd.classList.add('form_btn--disable');
    btnChange.classList.add('form_btn--active');
  } else if (clickBtnAction === 'delete') {
    const needId = needLi.dataset.iditem;

    // console.log(API);

    // const objPromis = API.deleteItem(needId);
    // console.log('objPromis', objPromis);

    API.deleteItem(needId)
      .then(() => needLi.remove())
      // .then(console.log)
      .catch(err => console.log(err));
  }
}
