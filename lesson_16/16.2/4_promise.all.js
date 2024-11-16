const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const usersIds = [5, 6, 2, 1]

const dataList = document.querySelector('#data-container')

const getUsersByIds = (ids) => {
  toggleLoader()

  const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`))
  Promise.all(requests)
    .then((responses) => {
      const dataResult = responses.map((response) => response.json())
      return Promise.all(dataResult)
    })
    .then((results) => {
      results.forEach((result) => {
        const user = createUser(result.name)
        dataList.append(user)
      })
    })
    .catch((error) => console.log(error))
    .finally(() => toggleLoader())
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

getUsersByIds(usersIds)