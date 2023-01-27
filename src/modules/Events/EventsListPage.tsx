import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetEvents } from './hooks';
import { StateType } from 'src/store';
import { Header, Navbar, DetailsTile, ListPageSkeleton } from '@UG/libs/components';
import { Events } from '@UG/libs/types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
// import { SearchBar } from '../../libs/components/SearchBar';

interface StateProps {
  isLoading: boolean;
  eventsList: Events[];
  errorMessage: string | null;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 700;
`;

export const EventsList = () => {
  const { getEventsList } = useGetEvents();
  const { isLoading, eventsList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.events.isLoading,
    eventsList: state.events.eventsList,
    errorMessage: state.events.error,
  }));



  useEffect(() => {
    getEventsList();
  }, [getEventsList]);

  const eventsTiles: JSX.Element[] = useMemo(
    () =>
      eventsList.map(({ name }) => (
        <StyledLink to={name} key={name} data-cy="events-tile-container">
          <DetailsTile>{name}</DetailsTile>
        </StyledLink>
      )),
    [eventsList],
  );

  if (!isLoading && errorMessage) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }} data-cy="error-message">
          {errorMessage}
        </p>
        <Navbar />
      </>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        <Header />
        <ListPageSkeleton />
        <Navbar />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box
        marginLeft="auto"
        marginRight="auto"
        marginTop="150px"
        marginBottom="150px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: 1080,
        }}
      >
        {eventsTiles}
      </Box>
      <Navbar />
    </>
  );
};
