import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchInput } from '@UG/libs/components';
import { useSearchParams } from 'react-router-dom';

interface FormData {
  name: string;
}
type SubmitHandler = (data: FormData) => void;

interface SearchBarProps {
  query: string;
  onSubmit: SubmitHandler;
}
enum SearchFormFieldsNames {
  NAME = 'name',
}
interface SearchFormTypes {
  [SearchFormFieldsNames.NAME]: string;
}

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

  const formMethods = useForm<SearchFormTypes>({
    defaultValues: { [SearchFormFieldsNames.NAME]: params || '' },
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
