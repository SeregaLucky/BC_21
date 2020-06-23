export const templateWeather = ({ name, main, wind }) => {
  return `
    <li>
      <h3>${name}</h3>
      <p>Temp: ${main.temp}</p>
      <p>Speed wind: ${wind.speed}</p>
    </li>
  `;
};
