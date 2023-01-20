const menu = document.querySelector('.navbar-menu')
const background = document.querySelector('.navbar-background')

document.querySelector('.navbar-button').addEventListener('click', (event) => {
  if (menu.classList.contains('invisible')) {
    menu.classList.remove('invisible')
    background.classList.add('opacity-100')
    background.classList.toggle('invisible')
  } else {
    menu.classList.add('invisible')
    background.classList.remove('opacity-100')
    background.classList.toggle('invisible')
  }
})
