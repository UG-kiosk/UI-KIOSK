import { Major } from '@UG/libs/types';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoading, setError, setMajorsList, startLoading } from 'src/state/MajorsSlice';

export const useGetMajors = () => {
  const dispatch = useDispatch();

  const getMajorsList = useCallback(async () => {
    try {
      dispatch(startLoading());

      // url will be changed as soon as we deploy API
      const { data: majorsList } = await axios.get<Major[]>('http://localhost:3001/majors');

      dispatch(setMajorsList(majorsList));
      dispatch(finishLoading());
    } catch (error: any) {
      const errorMessage = error?.response?.message || 'Something went wrong';

      dispatch(setError(errorMessage));
    }
  }, [dispatch]);

  return { getMajorsList };
};
