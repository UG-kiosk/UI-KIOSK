import { useEffect, useCallback } from 'react';
import { StateType } from 'src/store';
import { useGetNews } from './';
import { useSelector } from 'react-redux';
import { News } from '@UG/libs/types';

interface StateProps {
  isLoading: boolean;
  newsList: News[];
  errorMessage: string | null;
  totalPages: number;
}

export const useNewsList = () => {
  const { getNewsList } = useGetNews();
  const { isLoading, newsList, errorMessage, totalPages } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.news.isLoading,
    newsList: state.news.newsList,
    errorMessage: state.news.error,
    totalPages: state.news.totalPages,
  }));

  const clickedButtonHandler = useCallback(
    (name: string) => {
      getNewsList(name);
    },
    [getNewsList],
  );

  useEffect(() => {
    getNewsList();
  }, [getNewsList]);

  return { isLoading, newsList, errorMessage, clickedButtonHandler, totalPages };
};
