import { ADD_TODO, ADD_TODO_TO_STORE, DELETE_TODO, EDIT_TODO } from "../types"

const addTodoToStore = (payload) => (dispatch) => {
    const action = {
      type: ADD_TODO_TO_STORE,
      payload,
    }
    dispatch(action)
  }

const addTodo = (payload) => (dispatch) => {
    const action = {
      type: ADD_TODO,
      payload,
    }
    dispatch(action)
}

const deleteTodo = (payload) => (dispatch) => {
  const action = {
    type: DELETE_TODO,
    payload,
  }
  dispatch(action)
}

const editTodo = (payload) => (dispatch) => {
  console.log("--->", payload);
  const action = {
    type: EDIT_TODO,
    payload,
  }
  dispatch(action)
}
  
export {addTodoToStore, addTodo, deleteTodo, editTodo}