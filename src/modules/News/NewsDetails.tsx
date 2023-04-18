import { Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Divider, Paragraph } from '@UG/libs/components';
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

const StyledParagraph = styled(Typography, { shouldForwardProp: prop => prop !== 'key' })<{ key: number }>`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: justified;
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
      <Divider />
      <Box m={5} width={900}>
        <Paragraph fontWeight={700} fontSize={24} color={theme.palette.primary.main}>
          {` • ${moment(newsDetails.datetime).format('DD-MM-YYYY')} • ${newsDetails.source}`}
        </Paragraph>
        <Box
          component="img"
          my={3}
          sx={{
            minHeight: 300,
            minWidth: 250,
            objectFit: 'cover',
          }}
          src={newsDetails.photo}
        />
        {newsDetails.body.map((paragraph, index) => (
          <StyledParagraph key={index}>{paragraph}</StyledParagraph>
        ))}
      </Box>
    </>
  );
};
