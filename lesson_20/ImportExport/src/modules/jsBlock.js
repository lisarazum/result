import JS_IMAGE from '../../assets/jsLogo.png'

export class jsBlock {
  #container 

  constructor() {
    this.#container = document.createElement('div')
    this.#container.className = 'js-block'
  }

  render() {
    const mainTitlte = document.createElement('h1')
    mainTitlte.className = 'main-title'
    mainTitlte.textContent = 'JS'

    const jsImageHtml = document.createElement('img')
    jsImageHtml.className = 'js-img'
    jsImageHtml.src = JS_IMAGE

    const foundedText = document.createElement('p')
    foundedText.textContent = 'С момента создания JS прошло'
    foundedText.className = 'founded-text'

    this.#container.append(mainTitlte, jsImageHtml, foundedText)

    return this.#container
  }
}