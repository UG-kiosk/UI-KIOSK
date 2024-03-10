import { Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { Divider, Paragraph, StyledSkeleton, Slider } from '@UG/libs/components';
import { News } from '@UG/libs/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from 'src/store';
import { useGetNews } from './hooks';
import moment from 'moment';
import DOMPurify from 'dompurify';

interface StateProps {
  isLoading: boolean;
  errorMessage: string | null;
  newsDetails: News | null;
  newsList: News[];
}

interface NewsDetailsProps {
  id: string;
}

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '36px',
  fontWeight: 700,
  lineHeight: '44px',
  letterSpacing: '0em',
  marginBottom: '15px',
  color: theme.palette.secondary.dark,
}));

export const NewsDetails = ({ id }: NewsDetailsProps) => {
  const theme = useTheme();
  const { getNewsDetails } = useGetNews();
  const { isLoading, errorMessage, newsDetails } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.news.isLoading,
    errorMessage: state.news.error,
    newsDetails: state.news.newsDetails,
    newsList: state.news.newsList,
  }));
  const cleanBody = newsDetails?.body ? DOMPurify.sanitize(newsDetails.body) : '';

  const allPhotos = newsDetails ? [newsDetails.leadingPhoto, ...newsDetails.photos] : [];

  useEffect(() => {
    getNewsDetails(id);
  }, [id, getNewsDetails]);

  if (!isLoading && errorMessage) {
    return (
      <>
        <p style={{ marginTop: '150px' }} data-cy="error-message">
          {errorMessage}
        </p>
      </>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        <StyledSkeleton
          animation="wave"
          variant="rectangular"
          width={1000}
          height={44}
          mt={25}
          data-cy="skeleton-tile"
        />
        <Divider width={1000} />
        <StyledSkeleton
          animation="wave"
          variant="rectangular"
          width={1000}
          height={350}
          mt={25}
          data-cy="skeleton-tile"
        />
        <StyledSkeleton
          animation="wave"
          variant="rectangular"
          width={1000}
          height={300}
          mt={25}
          data-cy="skeleton-tile"
        />
      </>
    );
  }

  if (!newsDetails) {
    return (
      <>
        <p style={{ marginTop: '150px' }} data-cy="error-message">
          sorry but we couldn&apos;t find {id}
        </p>
      </>
    );
  }

  return (
    <>
      <StyledTitle width={1000} data-cy="news-title">
        {newsDetails.title}
      </StyledTitle>
      <Divider width={1000} />
      <Box mx={5} width={1000}>
        <Paragraph fontWeight={700} fontSize={24} color={theme.palette.primary.main} data-cy="news-info">
          {` • ${moment(newsDetails.datetime).format('DD-MM-YYYY')} • ${newsDetails.source}`}
        </Paragraph>
        <Slider gap={40}>
          {allPhotos.length > 0 &&
            allPhotos.map((photo, index) => (
              <Box
                component="img"
                my={3}
                sx={{
                  height: 300,
                  width: 'auto',
                  objectFit: 'cover',
                  borderRadius: 15,
                }}
                key={index}
                src={photo}
                data-cy="news-img"
              />
            ))}
        </Slider>
        <div dangerouslySetInnerHTML={{ __html: cleanBody }} data-cy="news-content" />
      </Box>
    </>
  );
};
