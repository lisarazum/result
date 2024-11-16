const URL = 'https://api.slingacademy.com/v1/sample-data/photos'

const list = document.querySelector('#data-container')

const getFastestLoadedPhoto = (ids) => {
  toggleLoader()

  const requests = ids.map((id) => fetch(`${URL}/${id}`))
  Promise.race(requests)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка в запросе')
      }
      return response.json()
    })
    .then((result) => {
      const photo = createPhotoItem(result.photo.url, result.photo.title)
      list.append(photo)
    })
    .catch((error) => console.log('error', error))
    .finally(() => {
      toggleLoader()
    })

}

//ф-я создания карточки
const createPhotoItem = (src, text) => {
  const liHtml = document.createElement('li')
  liHtml.classList.add('photo-item')

  const imgHtml = document.createElement('img')
  imgHtml.classList.add('photo-item__image')
  imgHtml.setAttribute('src', src)

  const headingHtml = document.createElement('h3')
  headingHtml.classList.add('photo-item__title')
  headingHtml.textContent = text

  liHtml.append(imgHtml)
  liHtml.append(headingHtml)

  return liHtml
}

//ф-я лоадера
const toggleLoader = () => {
  const loader = document.querySelector('#loader')
  const isHidden = loader.hasAttribute('hidden')

  if (isHidden) {
    loader.removeAttribute('hidden')
  } else {
    loader.setAttribute('hidden', '')
  }
}

getFastestLoadedPhoto([60, 12, 55]);