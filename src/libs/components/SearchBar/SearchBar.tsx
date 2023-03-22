import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchInput } from '@UG/libs/components';
import { SearchBarProps } from '@UG/libs/types';
import { useSearchParams } from 'react-router-dom';

const StyledSearchButton = styled(Button)`
  width: 56px;
  height: 56px;
  margin-left: 20px;
  color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 25px;
  font-size: 12px;
`;

export const SearchBar = ({ query, onSubmit }: SearchBarProps) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const params = searchParams.get(query);

  const formMethods = useForm<{ name: string }>({
    defaultValues: { name: params || '' },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <SearchInput label={t('search')} fieldName={query} />
        <StyledSearchButton variant="outlined" type="submit" data-cy="search-button">
          <SearchIcon data-cy="search-icon" />
        </StyledSearchButton>
      </form>
    </FormProvider>
  );
};
