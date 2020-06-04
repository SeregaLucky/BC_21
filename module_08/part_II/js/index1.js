// const parag = document.querySelector('.text');
// const divFirst = document.querySelector('.inDiv');
// const divSecond = document.querySelector('.inDiv2');

// divFirst.append(parag);
// divSecond.append(parag);

//
//
//
//

// const parag = document.querySelector('.text');
// const divFirst = document.querySelector('.inDiv');
// const divSecond = document.querySelector('.inDiv2');

// const copyParag1 = parag.cloneNode(true);
// const copyParag2 = parag.cloneNode(true);

// divFirst.append(copyParag1);
// divSecond.append(copyParag2);

// console.log(copyParag1 === copyParag2);

// console.log(parag === copyParag1);
// console.log(parag === copyParag2);

//
//
//
//

// window.addEventListener('scroll', scrollDoc);

// let count = 0;
// function scrollDoc() {
//   count += 1;
//   console.log(count);
// }

//
//
//
//

// const buttonBG = document.querySelector('.js_change_bg');
// const body = document.body;

// buttonBG.addEventListener('click', changeBG);
// window.addEventListener('scroll', scrollDoc);

// let countBG = 0;

// function changeBG() {
//   countBG += 1;
//   body.classList.toggle('active_body');
//   console.log('countBG', countBG);
// }

// let countScroll = 0;
// function scrollDoc() {
//   countScroll += 1;
//   for (let i = 0; i < 1000000000; i += 1) {}
//   console.log('countScroll', countScroll);
// }

//
//
//
//

// window.addEventListener('scroll', _.throttle(scrollDoc, 100));

// let count = 0;
// function scrollDoc() {
//   count += 1;
//   console.log(count);
// }

//
//
//
//
// const input = document.querySelector('.inp');
// const parag = document.querySelector('.text_in');

// input.addEventListener('input', _.debounce(handleInput, 500));

// function handleInput(e) {
//   // console.log(e);
//   const inputText = e.target.value;
//   parag.textContent = inputText;
// }

//
//
//
//
// window.addEventListener('mousemove', _.throttle(mouseGo, 200));

// function mouseGo(e) {
//   console.log(e);
// }

//
//
//
//

// window.addEventListener('resize', _.throttle(mouseGo, 50));

// function mouseGo(e) {
//   console.log(e);
// }

//
//
//
//

// const allImg = document.querySelectorAll('img');
// // console.log(allImg);

// const fnLazyLoad = img => {
//   // console.log(img);

//   const fnEntry = (entries, observer) => {
//     // console.log(enties);
//     // console.log(entries[0]);
//     entries.forEach(entry => {
//       console.log(entry);
//       // console.log(entry.target);
//       // console.log(entry.target.dataset.needsrc);

//       if (entry.isIntersecting) {
//         const nowImg = entry.target;
//         const src = entry.target.dataset.needsrc;
//         nowImg.src = src;
//         observer.disconnect();
//       }
//     });

//     // console.log(observer);
//     // observer.disconnect();
//   };

//   const intOb = new IntersectionObserver(fnEntry, {});
//   // console.log(intOb);

//   intOb.observe(img);
// };

// allImg.forEach(img => fnLazyLoad(img));

//
//
//
//

// const allImg = document.querySelectorAll('img');
// // console.log(allImg);

// const fnLazyLoad = img => {
//   // console.log(img);

//   const fnEntry = (entries, observer) => {
//     // console.log(entries);

//     if (entries[0].isIntersecting) {
//       const nowImg = entries[0].target;
//       const needsrc = nowImg.dataset.needsrc;
//       nowImg.src = needsrc;
//       observer.disconnect();
//     }
//   };

//   const options = {
//     rootMargin: '400px 100px',
//   };

//   const intOb = new IntersectionObserver(fnEntry, options);
//   // console.log(intOb);

//   intOb.observe(img);
// };

// allImg.forEach(img => fnLazyLoad(img));

//
//
//
//

// const alldiv = document.querySelectorAll('.js_div');
// // console.log(alldiv);

// const fnEntry = entries => {
//   // console.log(entries);

//   entries.forEach(entry => {
//     // console.log(entry);

//     if (entry.isIntersecting) {
//       // console.log(entry);
//       console.log(entry.target);
//     }
//   });
// };

// const options = {
//   threshold: 0.3,
// };

// const intObs = new IntersectionObserver(fnEntry, options);

// // intObs.observe(...alldiv); // не работает

// alldiv.forEach(div => intObs.observe(div));
