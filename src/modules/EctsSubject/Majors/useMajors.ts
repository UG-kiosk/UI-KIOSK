import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export const useMajors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { degree } = useParams();
  const majorParam = searchParams.get('major');
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  const degreeText = degree === 'bachelor' ? 'Studia I Stopnia' : 'Studia II Stopnia';

  const getMajorsOrSpecialities = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<string[]>(`/ects-subjects/${degree}`, {
        params: { major: majorParam },
      });
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }, [degree, majorParam]);

  const navigateToYears = useCallback(
    (majorOrSpeciality: string) =>
      majorParam
        ? navigate({
            pathname: `${majorParam}`,
            search: createSearchParams({ speciality: majorOrSpeciality }).toString(),
          })
        : navigate(`${majorOrSpeciality}`),
    [majorParam, navigate],
  );

  const getSpecialities = useCallback((major: string) => setSearchParams({ major: major }), [setSearchParams]);

  const hasSpecialities = useCallback((major: string) => {
    const subjectsWithSpecialities = ['Informatyka', 'Matematyka'];

    return subjectsWithSpecialities.includes(major);
  }, []);

  useEffect(() => {
    getMajorsOrSpecialities();
  }, [getMajorsOrSpecialities]);

  return {
    majorsList: data,
    navigate: navigateToYears,
    getSpecialities,
    hasSpecialities,
    isLoading,
    isError,
    major: majorParam,
    degreeText,
  };
};
