import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getNewsSearchThunk, getNewsThunk } from './thunk';
import { initialState } from './initialState';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const customArr = [getNewsThunk, getNewsSearchThunk];

const fn = status => customArr.map(el => el[status]);

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
      //   //   .addCase(getNewsThunk.pending, handlePending)
      //   .addCase(getNewsThunk.fulfilled, handleFulfilled)
      //   .addCase(getNewsThunk.rejected, handleRejected)
      //   //   .addCase(getNewsSearchThunk.pending, handlePending)
      //   .addCase(getNewsSearchThunk.fulfilled, handleFulfilled)
      //   .addCase(getNewsSearchThunk.rejected, handleRejected)
      //     .addMatcher(isAnyOf([getNewsThunk.pending, getNewsSearchThunk.pending]), handlePending);

      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
