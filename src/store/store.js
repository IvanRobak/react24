import { createStore } from 'redux';

const reduser = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: state.total + action.payload,
      };
    case 'decrement':
      return {
        ...state,
        total: state.total - action.payload,
      };
    case 'createTodo':
      return {
        ...state,
        todo: [...state.todo, { ...action.payload }],
      };

    case 'setStep':
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reduser, { total: 0, step: 1, todo: [] });

export default store;
