const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const dataList = document.querySelector('#data-container')

const getUsers = () => {
  toggleLoader();
  const SERVE_RESPONSE = fetch(USERS_URL, {
    method: 'GET'
  })

  SERVE_RESPONSE
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка в запросе')
      }
      return response.json()
    })
    .then((result) => {
      result.forEach(el => {
        const user = createUser(el.name)
        dataList.append(user)
      });
    })
    .catch((error) => {
      console.log(error)
    })  
    .finally(() => {
      toggleLoader()
    })
}

//ф-я создания юзера
const createUser = (name) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = '#'
  a.textContent = name

  li.append(a)
  return li
}

//ф-я показа лоадера
const toggleLoader = () => {
  const loader = document.querySelector('#loader')
  const isHidden = loader.hasAttribute('hidden')

  if (isHidden) {
    loader.removeAttribute('hidden')
  } else {
    loader.setAttribute('hidden', '')
  }
}

getUsers()