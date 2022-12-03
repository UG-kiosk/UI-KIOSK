import { Grid } from '@mui/material';
import { Tile } from '@UG/libs/components';

export const MainPanel = () => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    rowSpacing={8}
    sx={{ width: 1695, margin: 'auto', mb: 8, mt: 8 }}
  >
    <Grid item xs={12} container justifyContent="center">
      <Tile />
    </Grid>

    <Grid item xs={4} container direction="row" justifyContent="flex-start">
      <Tile tileWidth={535} />
    </Grid>
    <Grid item xs={4} container direction="row" justifyContent="center">
      <Tile tileWidth={535} />
    </Grid>
    <Grid item xs={4} container direction="row" justifyContent="flex-end">
      <Tile tileWidth={535} />
    </Grid>

    <Grid item xs={12} container justifyContent="center">
      <Tile />
    </Grid>

    <Grid item xs={6} container justifyContent="flex-start">
      <Tile tileWidth={826} />
    </Grid>
    <Grid item xs={6} container justifyContent="flex-end">
      <Tile tileWidth={826} />
    </Grid>
  </Grid>
);
