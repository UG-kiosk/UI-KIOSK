import { Major } from '@UG/libs/types';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoading, setError, setMajorDetails, setMajorsList, startLoading } from 'src/state/MajorsSlice';

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
      const errorMessage = error?.response?.data?.message || 'Something went wrong';

      dispatch(setError(errorMessage));
      dispatch(finishLoading());
    }
  }, [dispatch]);

  const getMajorDetails = useCallback(
    async (id: string) => {
      try {
        dispatch(startLoading());

        // url will be changed as soon as we deploy API
        const { data: majorDetails } = await axios.get<Major>(`http://localhost:3001/major/${id}`);

        dispatch(setMajorDetails(majorDetails));
        dispatch(finishLoading());
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';

        dispatch(setError(errorMessage));
      }
    },
    [dispatch],
  );

  return { getMajorsList, getMajorDetails };
};
