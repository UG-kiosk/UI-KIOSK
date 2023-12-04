import { Language, Major } from '@UG/libs/types';
import axios from 'axios';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { finishLoading, setError, setMajorDetails, setMajorsList, startLoading } from '../../../state/MajorsSlice';

export const useGetMajors = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const currentLanguage = useMemo((): Language => {
    return i18n.language as Language;
  }, [i18n.language]);

  const getMajorsList = useCallback(async () => {
    try {
      dispatch(startLoading());

      const { data: majorsList } = await axios.get<Major[]>('/api/majors', {
        params: { language: currentLanguage },
      });

      dispatch(setMajorsList(majorsList));
      dispatch(finishLoading());
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Something went wrong';

      dispatch(setError(errorMessage));
      dispatch(finishLoading());
    }
  }, [currentLanguage, dispatch]);

  const getMajorDetails = useCallback(
    async (id: string) => {
      try {
        dispatch(startLoading());

        const { data: majorDetails } = await axios.get<Major>(`/api/majors/${id}`, {
          params: { language: currentLanguage },
        });

        dispatch(setMajorDetails(majorDetails));
        dispatch(finishLoading());
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';

        dispatch(setError(errorMessage));
      }
    },
    [currentLanguage, dispatch],
  );

  return { getMajorsList, getMajorDetails };
};
