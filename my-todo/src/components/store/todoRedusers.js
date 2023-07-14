const data = [];

const defaultState = JSON.parse(localStorage.getItem('cartTodo')) ?? data;

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CHANGE_DONE = 'CHANGE_DONE';
const EDIT_TODO = 'EDIT_TODO'


export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...state, action.payload];
  
      case DELETE_TODO:
        return state.filter(el => el.id !== action.payload);
  
      case CHANGE_DONE:
        return state.map(el => {
          if (el.id === action.payload) {
            return { ...el, done: !el.done };
          }
          return el;
        });
      case EDIT_TODO:
        return state.map(el => {
          if(el.id === action.payload.id){
            return { ...el, description: action.payload.description}
          }
          return el
        })
  
      default:
        return state;
    }
};
  
  

export const addNewTodoAction = (payload) => ({
    type: ADD_TODO,
    payload,
});
export const deleteTodoAction = (payload) => ({
    type: DELETE_TODO,
    payload
});
export const changeDoneAction = (payload) => ({
    type: CHANGE_DONE,
    payload
});
export const editTodoAction = (payload) => ({
  type: EDIT_TODO,
  payload
});
