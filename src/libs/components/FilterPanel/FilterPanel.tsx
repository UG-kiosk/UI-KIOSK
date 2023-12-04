import { FilterButton } from './FilterButton';
import { Box } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

interface FilterPanelProps {
  buttonKeys: string[];
  buttonGroupTranslationKey: string;
  paramName: string;
}

export const FilterPanel = ({ buttonKeys, buttonGroupTranslationKey, paramName }: FilterPanelProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const activeButton = (searchParams.get(paramName) as string) || 'ALL';

  const handleButtonClick = useCallback(
    (name: string) => {
      if (name === 'ALL') {
        searchParams.delete(paramName);
        setSearchParams(searchParams);
        return;
      }

      setSearchParams({ [paramName]: name });
    },
    [paramName, searchParams, setSearchParams],
  );

  const filterbuttons = useMemo(
    () => (
      <Box mb={2}>
        {['ALL', ...buttonKeys].map(name => (
          <FilterButton
            name={name}
            key={name}
            type="button"
            text={t(buttonGroupTranslationKey + '.' + name)}
            className={activeButton == name ? 'selected' : ''}
            onClick={() => handleButtonClick(name)}
          ></FilterButton>
        ))}
      </Box>
    ),
    [activeButton, buttonGroupTranslationKey, buttonKeys, handleButtonClick, t],
  );

  return filterbuttons;
};
