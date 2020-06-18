import API from '../servises/api';
import templateItemsPost from '../templates/templateItemsPost.hbs';
import templateItemPost from '../templates/templateItemPost.hbs';

const refs = {
  form: document.querySelector('.js_form'),
  list: document.querySelector('.js_list'),
};

API.getAllItems()
  .then(data => {
    const allLi = templateItemsPost(data);
    refs.list.insertAdjacentHTML('beforeend', allLi);
  })
  .catch(err => console.log(err));

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', deleteItem);

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

  // form.reset();
}

function deleteItem(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const needLi = e.target.closest('li');
  const needId = needLi.dataset.iditem;

  API.deleteItem(needId)
    // .then(() => needLi.remove())
    .then(console.log)
    .catch(err => console.log(err));
}
