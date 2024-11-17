document.addEventListener('DOMContentLoaded', () => {
  const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'
  const container = document.querySelector('.data-container')

  const renderAlbums = async () => {
    toggleLoader()
    try {
      const response = await fetch(ALBUM_URL)
      if (!response.ok) {
        throw new Error('Произошла ошибка в получении данных об альбомах...')
      }
      const data = await response.json()
      data.forEach((album) => {
        const post = createPost(album.title)
        container.append(post)
      })
    } catch(error) {
      container.textContent = error.message
    } finally {
      toggleLoader()
    }
  }

  const createPost = (text) => {
    const li = document.createElement('li')
    li.textContent = text

    return li
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

  renderAlbums()
})