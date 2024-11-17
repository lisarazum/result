const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodosWithUserData = async () => {
  try {
    const usersResponse = await fetch(USERS_URL)
    if (!usersResponse.ok) {
      throw new Error('ошибка в получении данных')
    }
    const users = await usersResponse.json()
    const firstUserId = users[0]?.id
    console.log('firstUserId', firstUserId)

    const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)
    if (!todosResponse.ok) {
      throw new Error('ошибка в получении данных')
    }
    const todos = await todosResponse.json()
    console.log(todos)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('finally')
  }
}

getTodosWithUserData()

// const showTodos = () => {
//   const result = fetch(USERS_URL) 

//   result
//     .then((responses)=> {
//       return responses.json()
//     })
//     .then((users) => {
//       console.log('users', users)
//       const firstUserId = users[0]?.id
//       console.log('firstUserId', firstUserId)

//       fetch(`${TODOS_URL}?userId=${firstUserId}`)
//         .then((responses) => {
//           return responses.json()
//         })
//         .then((todos) => {
//           console.log('todos', todos)
//         })
//         .catch((error) => {
//           console.log('Error', error)
//         })
//     })
//     .catch((error) => {
//       console.log('Error: ', error)
//     })
// }

// showTodos()