import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Button } from '@mui/material';
import { DetailsTile, ListPageSkeleton, Paragraph } from '@UG/libs/components';
import { News } from '@UG/libs/types';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StateType } from 'src/store';
import { useGetNews } from './hooks';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

interface StateProps {
  isLoading: boolean;
  newsList: News[];
  errorMessage: string | null;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 700;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

export const NewsList = () => {
  const { t } = useTranslation();
  const { getNewsList } = useGetNews();
  const theme = useTheme();
  const { isLoading, newsList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.news.isLoading,
    newsList: state.news.newsList,
    errorMessage: state.news.error,
  }));
  const [activeButton, setActiveButton] = useState('button-ALL');

  const clickedButtonHandler = useCallback(
    (name: string) => {
      setActiveButton('button-' + name);
      getNewsList(name);
    },
    [getNewsList],
  );

  useEffect(() => {
    getNewsList();
  }, [getNewsList]);

  const buttons = useMemo(
    () => (
      <Box mb={2}>
        {['ALL', 'INF', 'MFI'].map(name => (
          <StyledButton
            variant="outlined"
            name={'button-' + name}
            key={name}
            sx={{
              '&.active': {
                background: 'blue',
                color: 'white',
              },
            }}
            className={activeButton == 'button-' + name ? 'active' : ''}
            onClick={() => clickedButtonHandler(name)}
          >
            {t('newsPage.' + name.toLowerCase())}
          </StyledButton>
        ))}
      </Box>
    ),
    [activeButton, t, clickedButtonHandler],
  );

  const newsTiles: JSX.Element[] = useMemo(
    () =>
      newsList.map(({ title, datetime, source, shortBody, photo, _id }) => (
        <StyledLink to={_id} key={title} data-cy="news-tile-container">
          <DetailsTile backgroundColor={theme.palette.background.paper}>
            <Grid container spacing={2}>
              <Grid item xs={5} style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  sx={{
                    height: 210,
                    width: 300,
                    objectFit: 'cover',
                    borderRadius: '15px 0px 0px 15px',
                  }}
                  src={photo}
                />
              </Grid>
              <Grid item xs={6}>
                <Paragraph color={theme.palette.secondary.dark}>{title}</Paragraph>
                <Paragraph fontWeight={700} fontSize={15} color={theme.palette.primary.main}>
                  {` • ${moment(datetime).format('DD-MM-YYYY')} • ${source}`}
                </Paragraph>
                {shortBody.map(
                  (paragraph, index) =>
                    paragraph.trim().length != 0 && (
                      <Paragraph key={index} fontWeight={400} fontSize={15} color={theme.palette.primary.dark}>
                        {paragraph}
                      </Paragraph>
                    ),
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
        <ListPageSkeleton />;
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
