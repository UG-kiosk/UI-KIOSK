import { Grid } from '@mui/material';
import { Tile, Paragraph } from '@UG/libs/components';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import { useTranslation } from 'react-i18next';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const MainPanel = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={8}
      sx={{ width: 1080, margin: 0, my: 12, px: 6 }}
      data-cy="main-panel"
    >
      <Grid item xs={12} container justifyContent="center" data-cy="tile">
        <Tile />
      </Grid>

      <Grid item xs={4} container direction="row" justifyContent="flex-start" data-cy="tile">
        <StyledLink to="majors">
          <Tile tileWidth={305}>
            <SchoolIcon sx={{ fontSize: 190 }} />
            <Paragraph data-cy="majors-link-label">{t('mainPanel.majors')}</Paragraph>
          </Tile>
        </StyledLink>
      </Grid>
      <Grid item xs={4} container direction="row" justifyContent="center" data-cy="tile">
        <Tile tileWidth={305} />
      </Grid>
      <Grid item xs={4} container direction="row" justifyContent="flex-end" data-cy="tile">
        <StyledLink to="staff">
          <Tile tileWidth={305}>
            <PeopleAltIcon sx={{ fontSize: '190px' }} data-cy="people-alt-icon" />
            <Paragraph data-cy="staff-link-label">{t('mainPanel.staff')}</Paragraph>
          </Tile>
        </StyledLink>
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
};
