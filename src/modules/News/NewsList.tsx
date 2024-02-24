import { styled, useTheme } from '@mui/system';
import { Box, Grid } from '@mui/material';
import { DetailsTile, ListPageSkeleton, Paragraph } from '@UG/libs/components';
import { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useNewsList } from './hooks';
import { FilterButton } from '../../libs/components/FilterPanel/components/FilterButton';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.dark,
  fontFamily: 'Montserrat',
  fontSize: '24px',
  fontWeight: 700,
}));

export const NewsList = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isLoading, newsList, errorMessage, clickedButtonHandler } = useNewsList();
  const [activeButton, setActiveButton] = useState('ALL-button');

  const handleButtonClick = useCallback(
    (name: string) => {
      setActiveButton(name + '-button');
      clickedButtonHandler(name);
    },
    [setActiveButton, clickedButtonHandler],
  );

  const buttons = useMemo(
    () => (
      <Box mb={2}>
        {['ALL', 'MFI', 'INF'].map(name => (
          <FilterButton
            key={name}
            type="button"
            text={t('newsPage.' + name.toLowerCase())}
            className={activeButton == name + '-button' ? 'selected' : ''}
            onClick={() => handleButtonClick(name)}
          ></FilterButton>
        ))}
      </Box>
    ),
    [t, activeButton, handleButtonClick],
  );

  const newsTiles: JSX.Element[] = useMemo(
    () =>
      newsList.map(({ title, datetime, source, shortBody, leadingPhoto, _id }) => (
        <StyledLink to={_id} key={title} data-cy="news-tile-container" sx={{ margin: '25px 25px' }}>
          <DetailsTile backgroundColor={theme.palette.background.paper} padding="25px 25px" marginTop={1}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
              <Grid item style={{ display: 'flex', alignItems: 'center', marginRight: '25px' }}>
                <Box
                  component="img"
                  sx={{
                    height: 210,
                    width: 300,
                    objectFit: 'cover',
                    borderRadius: '25px 0px 0px 25px',
                  }}
                  src={leadingPhoto}
                />
              </Grid>
              <Grid
                item
                xs={7}
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '8',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                <Paragraph color={theme.palette.secondary.dark} fontSize={20}>
                  {title}
                </Paragraph>
                <Paragraph fontWeight={700} fontSize={15} color={theme.palette.primary.main} margin="5px 0px 5px">
                  {` • ${moment(datetime).format('DD-MM-YYYY')} • ${source}`}
                </Paragraph>
                {shortBody && shortBody.length != 0 && (
                  <Paragraph fontWeight={400} fontSize={15} color={theme.palette.primary.dark}>
                    {shortBody}
                  </Paragraph>
                )}
              </Grid>
            </Grid>
          </DetailsTile>
        </StyledLink>
      )),
    [
      newsList,
      theme.palette.background.paper,
      theme.palette.secondary.dark,
      theme.palette.primary.dark,
      theme.palette.primary.main,
    ],
  );

  if (!isLoading && errorMessage) {
    return (
      <p style={{ marginTop: '150px' }} data-cy="error-message">
        {errorMessage}
      </p>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        {buttons}
        <ListPageSkeleton width={900} height={260} mt={25} marginBottom={50} />;
      </>
    );
  }

  return (
    <>
      {buttons}
      {newsTiles}
    </>
  );
};
