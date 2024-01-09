import { createSlice } from '@reduxjs/toolkit';
import { getNewsThunk } from './thunk';
import { initialState } from './initialState';

const handlePending = state => {
  state.status = 'pending';
};

const handleFulfilled = (state, { payload }) => {
  state.news = payload.articles;
  state.status = 'fulfilled';
  state.error = false;
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNewsThunk.pending, handlePending)
      .addCase(getNewsThunk.fulfilled, handleFulfilled)
      .addCase(getNewsThunk.rejected, handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
