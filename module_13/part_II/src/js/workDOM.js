import { getWeather, getWeatherFourDays } from '../servises/api';
import { templateWeather } from '../templates.js/templateByOneDay';
import { templateWeatherByFive } from '../templates.js/templateByFiveDays';
import refs from './refs';

refs.form.addEventListener('submit', handleSubmit);
refs.formFourDays.addEventListener('submit', handleSubmitFourDays);

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e.currentTarget.elements.city);

  const input = e.currentTarget.elements.city;

  getWeather(input.value)
    .then(data => {
      // console.log(data);
      const markupWeather = templateWeather(data);
      // refs.list.insertAdjacentHTML('beforeend', markupWeather);
      refs.list.innerHTML = markupWeather;
    })
    .catch(err => console.log(err));
}

function handleSubmitFourDays(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.city;

  getWeatherFourDays(input.value)
    .then(({ city, list }) => {
      console.log(city);
      console.log(list);
      refs.titleByFiveDays.textContent = city.name;

      const allLi = list.map(item => templateWeatherByFive(item)).join('');

      refs.listByFiveDays.innerHTML = allLi;
    })
    .catch(err => {
      console.dir(err);
      console.log('40', err);
    });
}
