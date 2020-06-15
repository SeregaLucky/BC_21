// const obj = {
//   classicFoo() {
//     const context = this;
//     setTimeout(
//       function () {
//         console.log(this);
//         // console.log('context', context);
//         // console.log(`${this} in object scope`); // window
//       }.bind(this),
//       100,
//     );
//   },

//   arrowFoo() {
//     setTimeout(() => {
//       console.log(this);
//       // console.log(`${this} in object scope`); // obj
//     }, 100);
//   },
// };

// obj.classicFoo(); // window
// obj.arrowFoo(); // obj

//
//

// setTimeout(function () {
//   console.log(this); // window
//   // console.log(`${this} in global scope`); // window
// }, 100);

// setTimeout(() => {
//   console.log(this); // window но у нас  type="module" по этому undefined
//   // console.log(`${this} in global scope`); // window но у нас  type="module" по этому undefined
// }, 100);

//
//
//
//
//
//
// const fn = () => {
//   //
// };
// fn();

//
//
//
//
//
//
// setTimeout(() => console.log('First'), 100);
// setTimeout(() => console.log('Second'), 100);
