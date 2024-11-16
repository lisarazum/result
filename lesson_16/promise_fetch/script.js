const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const list = document.querySelector('#data-list')

//получаем данные с сервера
const getAllTodos = () => {
  toggleLoader()
  const result = fetch(TODOS_URL, {
    method: 'GET',
  })
  
  result
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка запроса')
      }
      return response.json()
    })
    .then((todos) => {
      todos.forEach((el) => {
        const createElement = createTodoElement(el.title)
        list.append(createElement)
      })
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      toggleLoader()
    })
}

// создаем элемент задачи
const createTodoElement = (text) => {
  const todoElement = document.createElement('li')
  todoElement.textContent = text

  return todoElement
}

//проверяем лоадер
const toggleLoader = () => {
  const loaderHtml = document.querySelector('#loader')
  const isHidden = loaderHtml.hasAttribute('hidden')
  if (isHidden) {
    loaderHtml.removeAttribute('hidden')
  } else {
    loaderHtml.setAttribute('hidden', '')
  }
}

getAllTodos()




