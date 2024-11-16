const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const list = document.querySelector('#data-list')
const todosIds = [1, 10, 20, 30]

//получаем данные с сервера
const getAllTodos = (ids) => {
  toggleLoader()
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
  Promise.all(requests)
    .then((responses) => {
      // if (!response.ok) {
      //   throw new Error('Ошибка запроса')
      // }
      const dataResult = responses.map((response) => response.json())
      return Promise.all(dataResult)
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

getAllTodos(todosIds)




