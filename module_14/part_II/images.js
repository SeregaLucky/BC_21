const list = document.querySelector('.list_emply')
let elTake = null

list.addEventListener('dragstart', dragStart)
list.addEventListener('dragend', dragEnd)

list.addEventListener('dragenter', dragEnter)
list.addEventListener('dragleave', dragLeave)

list.addEventListener('dragover', dragOver)
list.addEventListener('drop', dragDrop)

function dragStart({ target }) {
  if (target.nodeName !== 'DIV') return
  console.log('dragStart')
  target.classList.add('hold')
  elTake = target
}
function dragEnd({ target }) {
  if (target.nodeName !== 'DIV') return
  console.log('dragEnd')
  target.classList.remove('hold')
}

function dragEnter({ target }) {
  if (target.nodeName !== 'LI') return
  target.classList.add('hovered')
}
function dragLeave({ target }) {
  if (target.nodeName !== 'LI') return
  target.classList.remove('hovered')
}

function dragOver(e) {
  e.preventDefault()
  console.log(111)
}
function dragDrop({ target }) {
  if (target.nodeName !== 'LI') return
  target.classList.remove('hovered')
  target.append(elTake)
  elTake = null
}
