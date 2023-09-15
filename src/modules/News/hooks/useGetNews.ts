import { News } from '@UG/libs/types';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoading, setError, setNewsDetails, setNewsList, startLoading } from 'src/state/NewsSlice';

export const useGetNews = () => {
  const dispatch = useDispatch();

  const getNewsList = useCallback(
    async (source?: string) => {
      try {
        dispatch(startLoading());
        const request = source == 'INF' ? '?source=INF' : source == 'MFI' ? '?source=MFI' : '';
        const { data: NewsList } = await axios.get<News[]>('/api/news' + request);
        dispatch(setNewsList(NewsList));
        dispatch(finishLoading());
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';
        dispatch(setError(errorMessage));
        dispatch(finishLoading());
      }
    },
    [dispatch],
  );

  const getNewsDetails = useCallback(
    async (id: string) => {
      try {
        dispatch(startLoading());

        const { data: newsDetails } = await axios.get<News>(`/api/news/${id}`);
        dispatch(setNewsDetails(newsDetails));
        dispatch(finishLoading());
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';

        dispatch(setError(errorMessage));
      }
    },
    [dispatch],
  );

  return { getNewsList, getNewsDetails };
};
