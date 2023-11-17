import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DetailsTile, Divider, Header, Navbar } from '@UG/libs/components';
import { Events } from '@UG/libs/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { StateType } from 'src/store';
import { useGetEvents } from './hooks';

interface StateProps {
  isLoading: boolean;
  errorMessage: string | null;
  eventsList: Events[] | null;
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

export const EventsDetailsPage = () => {
  // const { getEventsDetails } = useGetEvents();
  const { name } = useParams();
  const navigate = useNavigate();

  const { isLoading, eventsList, errorMessage,  } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.events.isLoading,
    eventsList: state.events.eventsList,
    errorMessage: state.events.error,
  }));

  const eventDetails = eventsList?.find(event => event.name === name);


  useEffect(() => {
    if (!name) {
      navigate('/error');
    } 
  }, [name, navigate]);


  if (!isLoading && errorMessage) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>{errorMessage}</p>
        <Navbar />
      </>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>Loading...</p>
        <Navbar />
      </>
    );
  }

  if (!eventDetails) {
    return (
      <>
        <Header />
        <Error />

      </>
    );
  }

  return (
    <>
      <Header />
      <Box marginTop="150px" marginBottom="40px" marginLeft="auto" marginRight="auto" width={975}>
        <StyledTitle data-cy="title">{eventDetails.name}</StyledTitle>
        <Divider />

      </Box>
      <Navbar />
    </>
  );
};