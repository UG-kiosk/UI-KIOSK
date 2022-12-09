import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledLogoPL = styled('img')`
  height: 60px;
`;
const StyledFlag = styled('img')`
  height: 32px;
`;
const StyledLine = styled('div')`
  border-left: 3px solid ${({ theme }) => theme.palette.secondary.main};
  height: 50px;
`;

export const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      marginLeft="auto"
      marginRight="auto"
      sx={{ backgroundColor: 'primary.light', width: 1080 }}
      data-cy="header"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: 6,
          height: 90,
        }}
      >
        <StyledLogoPL src="src/assets/ug_logo_pl.png" alt="blue UG"></StyledLogoPL>
        <StyledLine />
        <Grid item xs={7} />
        <StyledLine />
        <StyledFlag src="src/assets/eu_flag.jpg" alt="Europan Union Flag"></StyledFlag>
      </Grid>
    </Box>
  );
};
