import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import { DetailsTile, ListPageSkeleton, Paragraph, NewsButton } from '@UG/libs/components';
import { News } from '@UG/libs/types';
import { useEffect, useMemo, useCallback, useState } from 'react';
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

export const NewsList = () => {
  const { t } = useTranslation();
  const { getNewsList } = useGetNews();
  const theme = useTheme();
  const { isLoading, newsList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.news.isLoading,
    newsList: state.news.newsList,
    errorMessage: state.news.error,
  }));

  const [activeButton, setActiveButton] = useState('ALL-button');

  const clickedButtonHandler = useCallback(
    (name: string) => {
      setActiveButton(name + '-button');
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
          <NewsButton
            name={name}
            key={name}
            type="button"
            text={t('newsPage.' + name.toLowerCase())}
            className={activeButton == name + '-button' ? 'selected' : ''}
            onClick={() => clickedButtonHandler(name)}
          ></NewsButton>
        ))}
      </Box>
    ),
    [t, activeButton, clickedButtonHandler],
  );

  const newsTiles: JSX.Element[] = useMemo(
    () =>
      newsList.map(({ title, datetime, source, shortBody, photo, _id }) => (
        <StyledLink to={_id} key={title} data-cy="news-tile-container">
          <DetailsTile backgroundColor={theme.palette.background.paper} padding="25px 25px">
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
                  src={photo}
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
        <ListPageSkeleton width={900} height={260} mt={20} />;
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
