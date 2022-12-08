import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { showMainView } from 'src/state/WelcomeSlice';
import { useCallback } from 'react';

const StyledTitle = styled('h1')`
  width: 738px;
  height: 209px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 96px;
  line-height: 117px;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.light};
`;

const StyledButton = styled('button')`
  border: 5px solid ${({ theme }) => theme.palette.secondary.light};
  border-radius: 50px;
  height: 120px;
  width: 800px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.light};
  background: ${({ theme }) => theme.palette.primary.main};
`;

const StyledImage = styled('img')`
  width: 831px;
  height: 500px;
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
      sx={{ width: 1080, height: 1920, margin: 'auto' }}
    >
      <StyledTitle>Instytut Informatyki</StyledTitle>
      <StyledButton onClick={handleClick}>Dotknij Tutaj</StyledButton>
      <StyledImage src="src/assets/UG.png" alt="" />
    </Box>
  );
};
