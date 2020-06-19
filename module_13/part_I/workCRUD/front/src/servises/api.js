const baseURL = 'http://localhost:3000';

// GET ALL
const getFetch = () => {
  fetch(baseURL + '/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
// getFetch();

// GET BY ID
const getFetchByID = id => {
  fetch(baseURL + '/posts/' + id)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
// getFetchByID(3);

// POST
const postFetchItem = obj => {
  fetch(baseURL + '/posts', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(obj),
    // body: obj, // Do not work
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
const obj = { title: 'Title Post 44', author: 'Alex' };
// postFetchItem(obj);

// DELETE
const deleteFetchByID = id => {
  const options = {
    method: 'DELETE',
  };

  fetch(`${baseURL}/posts/${id}`, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
// deleteFetchByID(4);

// PUT
const putFetchInPostsItem = (id, obj) => {
  const options = {
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(obj),
  };

  fetch(`${baseURL}/posts/${id}`, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
const id = 3;
const newObj = { title: 'Title 555 COPY', author: 'Vika' };
// putFetchInPostsItem(id, newObj);

// PATCH
const patchFetchPostsItem = (id, obj) => {
  const options = {
    method: 'PATCH',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(obj),
  };

  fetch(`${baseURL}/posts/${id}`, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
const idPatch = 3;
const newObjPatch = { title: 'Title 777 COPY' };
// patchFetchPostsItem(idPatch, newObjPatch);
