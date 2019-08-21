export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (newTodo) => ({
  type : 'ADD_TODO',
  payload : {
    addTodo : newTodo
  }
})

export const deleteTodo = (oldTodo) => ({
  type : 'DELETE_TODO',
  payload : {
    deleteTodo : oldTodo
  }
})