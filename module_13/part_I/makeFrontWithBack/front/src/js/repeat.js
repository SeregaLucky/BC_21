import axios from 'axios';

function fetchCountries() {
  const url = `https://restcountries.eu/rest/v2/name/ERRRRRR`;
  return axios(url)
    .then(res => {
      if (res.ok) return res.json();
      // throw new Error(`${res.status} error while your search has occured`);
      // throw res;
    })
    .then(countries => {
      markupCountries(countries);
    });
  // .catch(err => {
  //   // refs.countriesBlock.innerHTML = '';
  //   // result.name = '';
  //   console.dir(err);
  //   // return console.warn(err);
  // });
}

// fetchCountries();

// setTimeout(() => console.log(111), 3000);

// const fn1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => res(), 100);
//   });
// };

// const fn2 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => res(), 3000);
//   });
// };

// const promis1 = fn1();
// const promis2 = fn2();

// Promise.all([promis1, promis2]).then(() => console.log('Promise.all'));

//
//
//
//

// true && function() { some logic } будет работать, но можно ли делать true && return function() { some logic } ? Под true я подразумеваю любое выражение, которое приведётся к true

// const fn3 = () => {
//   return 555;
// };

// const res = 5 < 4 && fn3();
// console.log(res);
