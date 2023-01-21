import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const StyledSearchTextField = styled(TextField)`
  width: 710px;
  & input {
    font-family: 'Montserrat';
    color: ${({ theme }) => theme.palette.primary.dark};
    margin-left: 20px;
    margin-right: 20px;
  }
  & fieldset {
    border-radius: 25px;
  }
  & .MuiOutlinedInput-root:hover {
    & fieldset {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
  }
  & .MuiFormLabel-root {
    font-weight: 700;
  }
  & label {
    font-weight: 700;
    margin-left: 30px;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  & legend {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-left: 30px;
  }
`;

const StyledSearchButton = styled(Button)`
  width: 60px;
  height: 60px;
  color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 25px;
  font-size: 12px;
`;

export const SearchBar = () => {
  const { t } = useTranslation();
  return (
    <Box
      marginLeft="auto"
      marginRight="auto"
      marginTop="150px"
      component="form"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: 800,
      }}
      autoComplete="off"
    >
      <StyledSearchTextField label={t('search')} data-cy="search-bar" />
      <StyledSearchButton variant="outlined" data-cy="search-button">
        <SearchIcon data-cy="search-icon" />
      </StyledSearchButton>
    </Box>
  );
};
