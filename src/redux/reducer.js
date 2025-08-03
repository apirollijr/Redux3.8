import { DELETE_TODO } from "./actionTypes";

const initialState = {
    todos: [
      { id: 1, text: "Learn Redux" },
      { id: 2, text: "Build To-Do App" },
      { id: 3, text: "Test Delete Functionality" }
    ]
  };
  

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
