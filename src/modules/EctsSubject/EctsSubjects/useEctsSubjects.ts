import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { EctsSubjectsResponse } from './EctsSubjectTypes';

export const useMajors = () => {
  const { degree, major, year } = useParams();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<EctsSubjectsResponse>();
  const speciality = searchParams.get('speciality');
  const [isError, setError] = useState(false);

  const yearText = `nabór ${year}/${Number(year) + 1}`;

  const getEctsSubjects = useCallback(async () => {
    try {
      const { data } = await axios.get<EctsSubjectsResponse>('/ects-subjects/major', {
        params: { degree, major, year, speciality },
      });
      setData(data);
    } catch (error) {
      setError(true);
    }
  }, [degree, major, speciality, year]);

  useEffect(() => {
    getEctsSubjects();
  }, [getEctsSubjects]);

  return { ectsSubjectsList: data, major, yearText, speciality, isError };
};
