import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Academic, Pagination } from '@UG/libs/types';
import {
  finishLoading,
  setError,
  setStaffList,
  startLoading,
  setStaffDetails,
  setPageInfo,
} from 'src/state/StaffSlice';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export const useGetStaff = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const getStaffList = useCallback(async () => {
    try {
      dispatch(startLoading());

      const page = searchParams.get('page');
      const name = searchParams.get('name');

      const { data } = await axios.get<Pagination<Academic>>('/api/staff', {
        params: { ...(name ? { name } : {}), ...(page ? { page } : {}) },
      });
      const { content, totalPages } = data;

      dispatch(setStaffList(content));
      dispatch(setPageInfo({ totalPages }));
      dispatch(finishLoading());
    } catch (error: any) {
      const errorMessage = error?.response?.message || 'Something went wrong';

      dispatch(setError(errorMessage));
      dispatch(finishLoading());
    }
  }, [dispatch, searchParams]);

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
