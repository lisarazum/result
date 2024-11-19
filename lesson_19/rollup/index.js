import './index.css'
import photo from './images.jpeg'

import { sum } from './main'

const array = [1, 2, 3].map((i) => i + 1)

function hello(...args) {
  console.log(`hello, ${args[0]}, ${args[1]}`)
}

hello(sum(1, 1), array)

function createImg() {
  const imgHtml = document.createElement('img')
  imgHtml.setAttribute('src', photo)
  document.querySelector('body').append(imgHtml)
}
createImg()