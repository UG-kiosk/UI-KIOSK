import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Worker } from '@UG/libs/types';
import { finishLoading, setError, setWorkersList, startLoading } from 'src/state/WorkersSlice';
import axios from 'axios';

export const useGetWorkers = () => {
  const dispatch = useDispatch();

  const getWorkersList = useCallback(async () => {
    try {
      dispatch(startLoading());
      // url will be changed as soon as we deploy API
      const { data: workersList } = await axios.get<Worker[]>('http://localhost:3001/workers');

      dispatch(setWorkersList(workersList));
      dispatch(finishLoading());
    } catch (error: any) {
      const errorMessage = error?.response?.message || 'Something went wrong';

      dispatch(setError(errorMessage));
    }
  }, [dispatch]);

  return { getWorkersList };
};
