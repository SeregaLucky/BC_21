import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';
const apiKey = '175165a6952a2064d8eb4ea274c5f82f';
// console.log(111);

// const getWeather = () => {
//   fetch(`${baseURL}/weather?q=Kiev&appid=${apiKey}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// };
// getWeather();

//
//
//
//

// const getWeather = async () => {
//   const res = await fetch(`${baseURL}/weather?q=Kiev&appid=${apiKey}`);
//   console.log(22, res);

//   const data = await res.json();
//   console.log(25, data);

//   return data;
// };

// getWeather().then(data => console.log(data));
// console.log(111);
//
//
//
//

// const getWeather = async () => {
//   try {
//     return await axios(`${baseURL}/weather?q=Kiecxczxcv&appid=${apiKey}`);
//   } catch (err) {
//     console.log('45', err);
//     throw err;
//   }
// };

// getWeather()
//   .then(data => console.log(data))
//   .catch(err => console.log('err 2', err));

//
//
//
//

// const getWeather = async () => {
//   return await axios(`${baseURL}/weather?q=Kiecxczxcv&appid=${apiKey}`);
// };

// getWeather()
//   .then(data => console.log(data))
//   .catch(err => console.log('err 2', err));

//
//
//
//

const getWeather = async () => {
  const res = await fetch(`${baseURL}/weather?q=Kiev&appid=${apiKey}`);
  console.log(22, res);

  const res2 = await fetch(
    `${baseURL}/forecast/hourly?q={city name}&appid=${apiKey}`,
  );

  const res2 = await fetch(
    `${baseURL}/forecast/hourly?q={city name}&appid=${apiKey}`,
  );
};

getWeather().then(data => console.log(data));
console.log(111);

//
//
//
//

const getWeather = async () => {
  fetch(`${baseURL}/weather?q=Kiev&appid=${apiKey}`).then(() => {
    const res2 = fetch(
      `${baseURL}/forecast/hourly?q={city name}&appid=${apiKey}`,
    ).then(() => {
      const res3 = fetch(
        `${baseURL}/forecast/hourly?q={city name}&appid=${apiKey}`,
      );
    });
  });
};

getWeather().then(data => console.log(data));
console.log(111);
