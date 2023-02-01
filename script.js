const txtInput = document.querySelector('.inputs input'),
  checkBtn = document.querySelector('.inputs button'),
  infoTxt = document.querySelector('.info-txt')
let filterInput
checkBtn.addEventListener('click', () => {
  let reverseInput = filterInput.split('').reverse().join('')
  infoTxt.style.display = 'block'
  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `Não, <span>'${txtInput.value}'</span> não é um palíndromo!`)
  }
  infoTxt.innerHTML = `Sim, <span>'${txtInput.value}'</span> é um palíndromo!`
})
txtInput.addEventListener('keyup', () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, '')
  if (filterInput) {
    return checkBtn.classList.add('active')
  }
  infoTxt.style.display = 'none'
  checkBtn.classList.remove('active')
})
