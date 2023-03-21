import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Academic } from '@UG/libs/types';
import { finishLoading, setError, setStaffList, startLoading, setStaffDetails } from 'src/state/StaffSlice';
import axios from 'axios';

export const useGetStaff = () => {
  const dispatch = useDispatch();

  const getStaffList = useCallback(async () => {
    try {
      dispatch(startLoading());
      // url will be changed as soon as we deploy API
      const { data: staffList } = await axios.get<Academic[]>('/api/staff');

      dispatch(setStaffList(staffList));
      dispatch(finishLoading());
    } catch (error: any) {
      const errorMessage = error?.response?.message || 'Something went wrong';

      dispatch(setError(errorMessage));
      dispatch(finishLoading());
    }
  }, [dispatch]);

  const getStaffDetails = useCallback(
    async (id: string) => {
      try {
        dispatch(startLoading());
        // url will be changed as soon as we deploy API
        const { data: staffDetails } = await axios.get<Academic>(`/api/staff/${id}`);

        dispatch(setStaffDetails(staffDetails));
        dispatch(finishLoading());
      } catch (error: any) {
        const errorMessage = error?.response?.message || 'Something went wrong';

        dispatch(setError(errorMessage));
        dispatch(finishLoading());
      }
    },
    [dispatch],
  );

  return { getStaffList, getStaffDetails };
};
