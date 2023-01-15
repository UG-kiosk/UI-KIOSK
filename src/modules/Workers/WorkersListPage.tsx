import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetWorkers } from './hooks';
import { StateType } from 'src/store';
import { useTranslation } from 'react-i18next';
import { Header, DetailsTile, Paragraph } from '@UG/libs/components';
import { Worker } from '@UG/libs/types';
import { styled, useTheme } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
    // color: ${({ theme }) => theme.palette.secondary.main};
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

interface StateProps {
  isLoading: boolean;
  workersList: Worker[];
  errorMessage: string | null;
}

export const WorkersListPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { getWorkersList } = useGetWorkers();

  const { isLoading, workersList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.workers.isLoading,
    workersList: state.workers.workersList,
    errorMessage: state.workers.error,
  }));

  useEffect(() => {
    getWorkersList();
  }, [getWorkersList]);

  const workersTiles: JSX.Element[] = useMemo(
    () =>
      // id later will be replaced with worker id
      workersList.map(({ name, units }) => (
        <StyledLink to={`/workers/${name}`} key={name}>
          <DetailsTile key={name} backgroundColor={theme.palette.background.paper}>
            <Paragraph color={theme.palette.secondary.dark}>{name}</Paragraph>
            <Paragraph fontWeight={500} fontSize={16} color={theme.palette.primary.main}>
              {units.join(' • ')}
            </Paragraph>
          </DetailsTile>
        </StyledLink>
      )),
    [workersList, theme.palette.background.paper, theme.palette.secondary.dark, theme.palette.primary.main],
  );

  if (!isLoading && errorMessage) {
    return (
      <>
        <Header />
        <p>{errorMessage}</p>
      </>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        <Header />
        <p>loading...</p>
      </>
    );
  }
  return (
    <>
      <Header />
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
      <Box width={1080} margin="50px auto" display="flex" flexDirection="column" alignItems="center">
        {workersTiles}
      </Box>
    </>
  );
};
