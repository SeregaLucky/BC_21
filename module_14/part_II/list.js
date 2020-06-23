const allList = document.querySelectorAll('.js_list');

// LI
allList.forEach(list => {
  list.addEventListener('dragstart', dragStart);
  list.addEventListener('dragend', dragEnd);
  // list.addEventListener('dragover', dragOver);
  list.addEventListener('dragover', _.throttle(dragOver, 500));
});

// LI
function dragStart(e) {
  if (e.target.nodeName !== 'LI') return;
  // Добавляет класс элеммнта который мы взяли
  e.target.classList.add('dragging');
  console.log('dragStart');
}
function dragEnd(e) {
  if (e.target.nodeName !== 'LI') return;
  // Удаляет класс элеммнта который мы брали
  e.target.classList.remove('dragging');
  console.log('dragEnd');
}

// UL
function dragOver(e) {
  e.preventDefault();
  // console.log("dragOver");
  const list = e.currentTarget; // список над которым находишься
  // console.log("dragOver list", list);
  // console.log('dragOver e.clientY', e.clientY);

  if (list === null) return; // когда используешь тротлинг

  const afterElement = getDragAfterElement(list, e.clientY);
  // console.log('afterElement', afterElement); // елемент или undefined
  const draggable = document.querySelector('.dragging');

  // // если второй аргкмент null indefined то он сработает как appendChild
  list.insertBefore(draggable, afterElement);
}

function getDragAfterElement(list, y) {
  const draggableElements = [
    ...list.querySelectorAll('.draggable:not(.dragging)'),
  ];
  console.log('draggableElements', draggableElements);

  return draggableElements.reduce(
    (closest, child) => {
      // console.log('child', child);
      const box = child.getBoundingClientRect();
      console.log('box', box);

      const offset = y - box.top - box.height / 2;
      console.log('offset', offset);

      // console.log("===========================");

      if (offset < 0 && offset > closest.offset) {
        return {offset: offset, element: child};
      }

      return closest;
    },
    {offset: Number.NEGATIVE_INFINITY},
  ).element;
}

//
//
//
//
//
//
//
//

// const allList = document.querySelectorAll(".js_list");

// // LI
// allList.forEach((list) => {
//   list.addEventListener("dragstart", dragStart);
//   list.addEventListener("dragend", dragEnd);
//   // list.addEventListener("dragover", dragOver);
//   list.addEventListener("dragover", _.throttle(dragOver, 50));
// });

// // LI
// function dragStart(e) {
//   if (e.target.nodeName !== "LI") return;
//   // Добавляет класс элеммнта который мы взяли
//   e.target.classList.add("dragging");
//   // console.log("dragStart");
// }
// function dragEnd(e) {
//   if (e.target.nodeName !== "LI") return;
//   // Удаляет класс элеммнта который мы брали
//   e.target.classList.remove("dragging");
//   // console.log("dragEnd");
// }

// // UL
// function dragOver(e) {
//   e.preventDefault();
//   // console.log("dragOver");
//   const list = e.currentTarget; // список над которым находишься
//   // console.log("dragOver list", list);
//   // console.log("dragOver e.clientY", e.clientY);

//   if (list === null) return; // когда используешь тротлинг

//   const afterElement = getDragAfterElement(list, e.clientY);
//   // console.log("afterElement", afterElement); // елемент или undefined
//   const draggable = document.querySelector(".dragging");

//   // если второй аргкмент null  то он сработает как appendChild
//   list.insertBefore(draggable, afterElement);
// }

// function getDragAfterElement(list, y) {
//   const draggableElements = [
//     ...list.querySelectorAll(".draggable:not(.dragging)"),
//   ];
//   // console.log("draggableElements", draggableElements);

//   return draggableElements.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect();
//       // console.log("box", box);

//       const offset = y - box.top - box.height / 2;
//       // console.log("offset", offset);

//       // if (offset < 0 && offset > closest.offset) {
//       //   return { offset: offset, element: child };
//       // }

//       if (offset < 0) {
//         return { offset: offset, element: child };
//       }

//       return closest;
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element;
// }
