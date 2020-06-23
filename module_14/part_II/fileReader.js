const input = document.querySelector('.js_input_file')
const img = document.querySelector('.js_img')

input.addEventListener('change', handleChange)

function handleChange(e) {
  const file = e.target.files[0]
  const reader = new FileReader()
  // console.log(reader);

  reader.onloadend = () => {
    console.log(reader)
    img.src = reader.result
  }

  reader.readAsDataURL(file)
}
