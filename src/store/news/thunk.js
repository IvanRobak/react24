import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopNews } from '../../services/getNews';

export const getNewsThunk = createAsyncThunk('news/getTopNews', async () => {
  return await getTopNews();
});
