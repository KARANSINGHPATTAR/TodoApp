import { ADD_TODO , DELETE_TODO } from "../actions/TodoApp.action"

const initialState = {
  todos: [
    { id: 0 , todo: "go home" },
    { id:1 , todo: "play game" }
  ]
}

const TodoAppReducer = (state = initialState, { type , payload }) => {
  switch(type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: payload.addTodo+state.todos.length , todo: payload.addTodo }
        ]
      }
    case DELETE_TODO:
      return {
        todos: [
          ...state.todos.filter(todo => todo.todo !== payload.deleteTodo)
        ]
      }
    default:
      return state
  }
}

export default TodoAppReducer