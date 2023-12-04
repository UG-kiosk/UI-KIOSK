import { useSearchParam } from '../../../hooks';
import { useCallback } from 'react';

export const useFilterPanel = () => {
  const { handleParamChange, getSearchParam } = useSearchParam();

  const handleButtonClick = useCallback(
    (key: string, value: string) => {
      handleParamChange(key, value);
    },
    [handleParamChange],
  );

  const selectedButton = useCallback(
    (paramName: string) => {
      const selectedParam = getSearchParam(paramName);

      if (selectedParam === null) {
        return 'ALL';
      }
      return selectedParam;
    },
    [getSearchParam],
  );

  return {
    handleButtonClick,
    selectedButton,
  };
};
