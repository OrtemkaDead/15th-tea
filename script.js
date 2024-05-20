const mainDirectory = document.getElementById('main-content')

const firstMainCup = document.getElementById('tea-cup-main-first')
const secondMainCup = document.getElementById('tea-cup-main-second')

const firstFormCup = document.getElementById('tea-cup-form-first')
const secondFormCup = document.getElementById('tea-cup-form-second')

const firstInfoCup = document.getElementById('tea-cup-info-first')
const secondInfoCup = document.getElementById('tea-cup-info-second')

window.addEventListener("scroll", () => {
  if (window.pageYOffset > (mainDirectory.clientHeight - 200)) {
    firstMainCup.classList.add('tea__cup--main-first-hide')
    secondMainCup.classList.add('tea__cup--main-second-hide')

    firstFormCup.classList.remove('tea__cup--form-first-hide')
    secondFormCup.classList.remove('tea__cup--form-second-hide')
  }
  if (window.pageYOffset > (mainDirectory.clientHeight * 1.8)) {
    firstInfoCup.classList.remove('tea__cup--info-first-hide')
    secondInfoCup.classList.remove('tea__cup--info-second-hide')

    firstMainCup.classList.add('tea__cup--main-first-hide')
    secondMainCup.classList.add('tea__cup--main-second-hide')
  }
  if (window.pageYOffset <= (100)) {
    firstMainCup.classList.remove('tea__cup--main-first-hide')
    secondMainCup.classList.remove('tea__cup--main-second-hide')

    firstInfoCup.classList.add('tea__cup--info-first-hide')
    secondInfoCup.classList.add('tea__cup--info-second-hide')
  }
});