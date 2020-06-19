import axios from 'axios';
// console.log(axios);

const baseURL = 'http://localhost:3000';

{
  /*
   * WORK WITH AXIOS
   */

  // Первый вариант записи baseURL
  axios.defaults.baseURL = 'http://localhost:3000';

  // Второй вариант записи baseURL то тогда нужно и менно имена переменных
  // подставлять вместо axios
  // const axiosMyBD = axios.create({
  //   baseURL: 'http://localhost:3000',
  // });

  // const axiosMyBD4000 = axios.create({
  //   baseURL: 'http://localhost:4000',
  // });
}

// console.log(axios.defaults);

/*
 * GET ALL ITEMS
 */
// const getAllItems = () => {
//   return fetch(`${baseURL}/posts`).then(res => res.json());
// };

// AXIOS
const getAllItems = () => {
  return axios.get(`/posts`).then(res => {
    console.log(res.data);
    return res.data;
  });
};

/*
 * POST ITEM
 */
// const postItem = object => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(object),
//   };

//   return fetch(`${baseURL}/posts`, options).then(res => res.json());
// };

// AXIOS
const postItem = object => {
  return axios.post(`/posts`, object).then(res => res.data);
};

/*
 * DELETE ITEM
 */
// const deleteItem = id => {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${baseURL}/posts/${id}`, options);
// };

// AXIOS
const deleteItem = id => axios.delete(`/posts/${id}`);

/*
 * DELETE ITEM
 */
// const patchItem = (id, object) => {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(object),
//   };

//   return fetch(`${baseURL}/posts/${id}`, options);
// };

// AXIOS
const patchItem = (id, object) => {
  return axios.patch(`/posts/${id}`, object).then(res => res.data);
};

export default { getAllItems, postItem, deleteItem, patchItem };

// fetch сразу при вызове прям сразу возвращет объект обещание
// fetch(){
//   gfdgfdfgd
//   return {
//     '<state>': "pending"
//   }
// }
