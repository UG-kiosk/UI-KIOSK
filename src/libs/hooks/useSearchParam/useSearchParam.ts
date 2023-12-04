import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleParamChange = useCallback(
    (paramName: string, paramValue: string) => {
      if (paramValue === 'ALL') {
        searchParams.delete(paramName);
        setSearchParams(searchParams);
        return;
      }

      setSearchParams({ [paramName]: paramValue });
    },
    [searchParams, setSearchParams],
  );

  const getSearchParam = useCallback((paramName: string) => searchParams.get(paramName) as string, [searchParams]);

  return { handleParamChange, getSearchParam };
};
