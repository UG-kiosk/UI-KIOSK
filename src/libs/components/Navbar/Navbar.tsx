import { Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NavButtons = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50px;
  width: 200px;
  font-size: 54px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  const handleNavigateForward = useCallback(() => {
    navigate(1);
  }, [navigate]);
  return (
    <Grid
      position="fixed"
      zIndex={2}
      bottom={60}
      left={0}
      right={0}
      ml="auto"
      mr="auto"
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      borderRadius={50}
      sx={{
        backgroundColor: 'primary.light',
        width: 700,
        height: 90,
        px: 3,
      }}
      data-cy="navbar"
    >
      <NavButtons onClick={handleNavigateBack} data-cy="nav-back">
        <NavigateBeforeIcon fontSize="inherit" data-cy="nav-icon" />
      </NavButtons>
      <StyledLink to="/" data-cy="nav-home">
        <NavButtons>
          <HomeIcon fontSize="inherit" data-cy="nav-icon" />
        </NavButtons>
      </StyledLink>
      <NavButtons onClick={handleNavigateForward} data-cy="nav-forward">
        <NavigateNextIcon fontSize="inherit" data-cy="nav-icon" />
      </NavButtons>
    </Grid>
  );
};
