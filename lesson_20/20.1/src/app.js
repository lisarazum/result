import { getRandomColor } from './utils'

export default function initApp() {
  const buttonHtml = document.createElement('button')
  buttonHtml.className = 'button'
  buttonHtml.textContent = 'Изменить цвет страницы'

  document.querySelector('body').append(buttonHtml)

  buttonHtml.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = getRandomColor()
  })
}