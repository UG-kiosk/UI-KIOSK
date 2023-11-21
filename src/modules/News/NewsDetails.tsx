import { Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Divider, Paragraph, Slider } from '@UG/libs/components';
import { News } from '@UG/libs/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from 'src/store';
import { useGetNews } from './hooks';
import moment from 'moment';

interface StateProps {
  isLoading: boolean;
  errorMessage: string | null;
  newsDetails: News | null;
  newsList: News[];
}

interface NewsDetailsProps {
  id: string;
}

const StyledTitle = styled(Typography)`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const NewsDetails = ({ id }: NewsDetailsProps) => {
  const theme = useTheme();
  const { getNewsDetails } = useGetNews();
  const { isLoading, errorMessage, newsDetails } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.news.isLoading,
    errorMessage: state.news.error,
    newsDetails: state.news.newsDetails,
    newsList: state.news.newsList,
  }));

  const allPhotos = newsDetails ? [newsDetails.leadingPhoto, ...newsDetails.photos] : [];

  useEffect(() => {
    getNewsDetails(id);
  }, [id, getNewsDetails]);

  if (!isLoading && errorMessage) {
    return (
      <>
        <p style={{ marginTop: '150px' }}>{errorMessage}</p>
      </>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        <p style={{ marginTop: '150px' }}>loading...</p>
      </>
    );
  }

  if (!newsDetails) {
    return (
      <>
        <p style={{ marginTop: '150px' }}>sorry but we couldn&apos;t find {id}</p>
      </>
    );
  }

  return (
    <>
      <StyledTitle width={1000} data-cy="title">
        {newsDetails.title}
      </StyledTitle>
      <Divider width={1000} />
      <Box mx={5} width={1000}>
        <Paragraph fontWeight={700} fontSize={24} color={theme.palette.primary.main}>
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
              />
            ))}
        </Slider>
        <div dangerouslySetInnerHTML={{ __html: newsDetails.body }} />
      </Box>
    </>
  );
};
