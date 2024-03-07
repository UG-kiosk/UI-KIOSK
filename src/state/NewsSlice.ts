import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from '@UG/libs/types';

export interface NewsType {
  isLoading: boolean;
  newsList: News[];
  newsDetails: News | null;
  error: string | null;
}

const initialState: NewsType = {
  isLoading: false,
  newsList: [],
  newsDetails: null,
  error: null,
};

export const news = createSlice({
  name: 'news',
  initialState,
  reducers: {
    startLoading(state: NewsType) {
      state.isLoading = true;
      state.error = null;
    },
    setNewsList(state: NewsType, action: PayloadAction<News[]>) {
      state.newsList = action.payload;
      state.error = null;
    },
    setNewsDetails(state: NewsType, action: PayloadAction<News>) {
      state.newsDetails = action.payload;
      state.error = null;
    },
    finishLoading(state: NewsType) {
      state.isLoading = false;
    },
    setError(state: NewsType, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { startLoading, setNewsList, setNewsDetails, finishLoading, setError } = news.actions;

export const newsReducer = news.reducer;
