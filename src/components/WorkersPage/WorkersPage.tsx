import { Header } from '@UG/libs/components';
import { Worker } from '../../state/WorkersSlice';
import { useSelector } from 'react-redux';
import { StateType } from '../../store';
import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { WorkerTile } from './WorkerTile';
import { useTranslation } from 'react-i18next';

const StyledTextField = styled(TextField)`
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

const StyledButton = styled(Button)`
  width: 60px;
  height: 60px;
  color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 25px;
  font-size: 12px;
`;

export const WorkersPage = () => {
  const workers = useSelector<StateType, Worker[]>(state => state.workers);
  const { t } = useTranslation();
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
        // noValidate
        autoComplete="off"
      >
        <StyledTextField label={t('search')} data-cy="search-bar" />
        <StyledButton variant="outlined" data-cy="search-button">
          <SearchIcon data-cy="search-icon" />
        </StyledButton>
      </Box>
      <Box
        width={1080}
        // maxHeight={1000}
        margin="50px auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        // overflow="auto"
      >
        {workers.map((worker, id) => (
          <WorkerTile key={id} name={worker.name} units={worker.units} />
        ))}
      </Box>
    </>
  );
};
