import { createReducer } from '@reduxjs/toolkit';
import { counterInitialState } from './initialState';
import { decrement, increment, setStep } from './action';

export const counterReducer = createReducer(counterInitialState, builder => {
  builder
    .addCase(increment, (state, action) => {
      state.total += action.payload;
    })
    .addCase(decrement, (state, action) => {
      state.total -= action.payload;
    })
    .addCase(setStep, (state, action) => {
      state.total = action.payload;
    });
});
