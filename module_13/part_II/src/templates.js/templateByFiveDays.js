export const templateWeatherByFive = ({ main, wind }) => {
  return `
    <li>
      <p>Temp: ${main.temp}</p>
      <p>Speed wind: ${wind.speed}</p>
    </li>
  `;
};
