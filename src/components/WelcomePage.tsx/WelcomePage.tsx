import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { showMainView } from 'src/state/WelcomeSlice';
import { useCallback } from 'react';

const StyledTitle = styled('h1')`
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.palette.secondary.light};
  font-style: normal;
  font-weight: 800;
  font-size: 150px;
  line-height: 183px;
  text-align: center;
  width: 1578px;
`;

const StyledButton = styled('button')`
  border: 5px solid #fbfbfb;
  border-radius: 50px;
  width: 1435px;
  height: 195px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 128px;
  line-height: 156px;
  color: ${({ theme }) => theme.palette.secondary.light};
  background: ${({ theme }) => theme.palette.primary.main}; ;
`;

const StyledImage = styled('img')`
  width: 1420px;
  height: 853px;
`;

export const WelcomePage = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(showMainView());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="#004daa"
      gap="250px"
      sx={{ width: 1920, height: 2891, margin: 'auto', mb: 8, mt: 8 }}
    >
      <StyledTitle>Instytut Informatyki</StyledTitle>
      <StyledButton onClick={handleClick}>Dotknij Tutaj</StyledButton>
      <StyledImage src="src/assets/UG.png" alt="" />
    </Box>
  );
};
