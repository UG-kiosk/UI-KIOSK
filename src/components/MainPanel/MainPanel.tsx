import { Grid } from '@mui/material';
import { Tile } from '@UG/libs/components';

export const MainPanel = () => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    rowSpacing={8}
    sx={{ width: 1080, margin: 'auto', my: 12, px: 6 }}
    data-cy="main-panel"
  >
    <Grid item xs={12} container justifyContent="center" data-cy="tile">
      <Tile />
    </Grid>

    <Grid item xs={4} container direction="row" justifyContent="flex-start" data-cy="tile">
      <Tile tileWidth={305} />
    </Grid>
    <Grid item xs={4} container direction="row" justifyContent="center" data-cy="tile">
      <Tile tileWidth={305} />
    </Grid>
    <Grid item xs={4} container direction="row" justifyContent="flex-end" data-cy="tile">
      <Tile tileWidth={305} />
    </Grid>

    <Grid item xs={12} container justifyContent="center" data-cy="tile">
      <Tile />
    </Grid>

    <Grid item xs={6} container justifyContent="flex-start" data-cy="tile">
      <Tile tileWidth={473} />
    </Grid>
    <Grid item xs={6} container justifyContent="flex-end" data-cy="tile">
      <Tile tileWidth={473} />
    </Grid>
  </Grid>
);
