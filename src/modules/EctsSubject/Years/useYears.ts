import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export const UseYears = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { degree, major } = useParams();
  const speciality = searchParams.get('speciality');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<number[]>([]);

  const getYears = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<number[]>('/ects-subjects/years', {
        params: { degree, major, speciality },
      });
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }, [degree, major, speciality]);

  const navigateToSubject = useCallback(
    (years: number) =>
      navigate({ pathname: `${years.toString()}`, search: createSearchParams(searchParams).toString() }),
    [navigate, searchParams],
  );

  useEffect(() => {
    getYears();
  }, [getYears]);

  return { major, speciality, yearsList: data, navigate: navigateToSubject, isLoading, isError };
};
