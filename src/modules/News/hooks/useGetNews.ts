import { Pagination } from './../../../libs/types/Pagination/Pagination';
import { News } from '@UG/libs/types';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoading, setError, setNewsDetails, setNewsList, startLoading, setPageInfo } from 'src/state/NewsSlice';
import { useSearchParams } from 'react-router-dom';

export const useGetNews = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const getNewsList = useCallback(
    async (source?: string) => {
      try {
        dispatch(startLoading());
        const page = searchParams.get('page');
        const params = {
          ...(source === 'INF' ? { source: 'INF' } : source === 'MFI' ? { source: 'MFI' } : {}),
          ...(page ? { page } : {}),
        };

        const { data } = await axios.get<Pagination<News>>('http://localhost:5202/news?language=Pl', {
          params,
        });
        const { content, pagination } = data;
        const totalPages = pagination.totalPages;
        dispatch(setNewsList(content));
        dispatch(setPageInfo({ totalPages }));
        dispatch(finishLoading());
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';
        dispatch(setError(errorMessage));
        dispatch(finishLoading());
      }
    },
    [dispatch, searchParams],
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
