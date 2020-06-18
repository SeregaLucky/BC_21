const baseURL = 'http://localhost:3000';

const getAllItems = () => {
  return fetch(`${baseURL}/posts`).then(res => res.json());
};

const postItem = object => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  };

  return fetch(`${baseURL}/posts`, options).then(res => res.json());
};

const deleteItem = id => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${baseURL}/posts/${id}`, options);
};

export default { getAllItems, postItem, deleteItem };
