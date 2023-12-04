import { useSearchParam } from '../../hooks';
import { FilterButton } from './FilterButton';
import { Box } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface FilterPanelProps {
  buttonKeys: string[];
  buttonGroupTranslationKey: string;
  paramName: string;
}

export const FilterPanel = ({ buttonKeys, buttonGroupTranslationKey, paramName }: FilterPanelProps) => {
  const { handleParamChange, getSearchParam } = useSearchParam();
  const { t } = useTranslation();

  const handleButtonClick = useCallback(
    (value: string) => {
      handleParamChange(paramName, value);
    },
    [handleParamChange, paramName],
  );

  const selectedButton = useMemo(() => {
    const selectedParam = getSearchParam(paramName);

    if (selectedParam === null) {
      return 'ALL';
    }
    return selectedParam;
  }, [getSearchParam, paramName]);

  const filterbuttons = useMemo(
    () => (
      <Box mb={2}>
        {['ALL', ...buttonKeys].map(name => (
          <FilterButton
            name={name}
            key={name}
            type="button"
            text={t(buttonGroupTranslationKey + '.' + name)}
            className={selectedButton == name ? 'selected' : ''}
            onClick={() => handleButtonClick(name)}
          ></FilterButton>
        ))}
      </Box>
    ),
    [buttonGroupTranslationKey, buttonKeys, handleButtonClick, selectedButton, t],
  );

  return filterbuttons;
};
