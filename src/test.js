import { createStore } from 'redux';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, { total: 2 });

store.dispatch({ type: 'increment', payload: 5 });
