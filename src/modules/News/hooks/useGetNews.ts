import { News } from '@UG/libs/types';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoading, setError, setNewsList, startLoading } from 'src/state/NewsSlice';

export const useGetNews = () => {
  const dispatch = useDispatch();

  const getNewsList = useCallback(async () => {
    try {
      dispatch(startLoading());
      const { data: NewsList } = await axios.get<News[]>('/api/news');
      dispatch(setNewsList(NewsList));
      dispatch(finishLoading());
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Something went wrong';
      dispatch(setError(errorMessage));
      dispatch(finishLoading());
    }
  }, [dispatch]);

  return { getNewsList };
};
