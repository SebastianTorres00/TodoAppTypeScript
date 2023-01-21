import {ADD_TODO, ADD_TODO_TO_STORE, DELETE_TODO, EDIT_TODO} from '../types'

const initialState = {
  TodoList: []
};

const listTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...action.payload]
    case ADD_TODO_TO_STORE:
      return [...action.payload]
    case DELETE_TODO:
      return [...action.payload]
    case EDIT_TODO:
      return [...action.payload]
    default:
      return state;
  }
};

export default listTodoReducer