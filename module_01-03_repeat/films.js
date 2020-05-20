// debugger;
// const films = {
//   'Home alone': 90,
//   'Harry Potter': 210,
//   Aladin: 95,
// };

// const giveLongestfilm = obj => {
//   // console.log(obj);

//   const allEntries = Object.entries(obj);
//   console.log(allEntries);

//   let longestFilm = '';
//   let longestTime = 0;

//   for (const entry of allEntries) {
//     // console.log(entry);
//     let film = entry[0];
//     let time = entry[1];

//     if (longestTime < time) {
//       longestTime = time;
//       longestFilm = film;
//     }
//   }

//   return longestFilm;
// };

// console.log(giveLongestfilm(films));

//
//
//
//
// debugger;
// const films = {
//   'Home alone': 90,
//   'Harry Potter': 210,
//   Aladin: 95,
// };

// const giveLongestfilm = obj => {
//   // console.log(obj);

//   const allEntries = Object.entries(obj);
//   console.log(allEntries);

//   let longestFilm = '';
//   let longestTime = 0;

//   for (const [film, time] of allEntries) {
//     if (longestTime < time) {
//       longestTime = time;
//       longestFilm = film;
//     }
//   }

//   return longestFilm;
// };

// console.log(giveLongestfilm(films));
