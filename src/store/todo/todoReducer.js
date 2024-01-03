import { createReducer } from '@reduxjs/toolkit';
import { todoInitialState } from './initialState';
import { createTodo } from './actions';

export const todoReducer = createReducer(todoInitialState, builder => {
  builder.addCase(createTodo, (state, action) => {
    state.todo.push(action.payload);
  });
});
