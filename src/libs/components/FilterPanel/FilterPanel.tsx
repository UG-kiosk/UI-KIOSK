import { FilterButton } from './components/FilterButton';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFilterPanel } from './hooks/useFilterPanel';

interface FilterPanelProps {
  buttonKeys: string[];
  buttonGroupTranslationKey: string;
  paramName: string;
}

export const FilterPanel = ({ buttonKeys, buttonGroupTranslationKey, paramName }: FilterPanelProps) => {
  const { handleButtonClick, selectedButton } = useFilterPanel();
  const { t } = useTranslation();

  const filterbuttons = useMemo(
    () => (
      <Box mb={2}>
        {['ALL', ...buttonKeys].map(name => (
          <FilterButton
            name={name}
            key={name}
            type="button"
            text={t(buttonGroupTranslationKey + '.' + name)}
            className={selectedButton(paramName) == name ? 'selected' : ''}
            onClick={() => handleButtonClick(paramName, name)}
          ></FilterButton>
        ))}
      </Box>
    ),
    [buttonGroupTranslationKey, buttonKeys, handleButtonClick, paramName, selectedButton, t],
  );

  return filterbuttons;
};
