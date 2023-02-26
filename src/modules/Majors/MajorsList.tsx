import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DetailsTile, ListPageSkeleton, Navbar } from '@UG/libs/components';
import { Major } from '@UG/libs/types';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StateType } from 'src/store';
import { useGetMajors } from './hooks';

interface StateProps {
  isLoading: boolean;
  majorsList: Major[];
  errorMessage: string | null;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 700;
`;

export const MajorsList = () => {
  const { getMajorsList } = useGetMajors();
  const { isLoading, majorsList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.majors.isLoading,
    majorsList: state.majors.majorsList,
    errorMessage: state.majors.error,
  }));

  useEffect(() => {
    getMajorsList();
  }, [getMajorsList]);

  const majorsTiles: JSX.Element[] = useMemo(
    () =>
      //TODO - change name to id
      majorsList.map(({ name }) => (
        <StyledLink to={name} key={name} data-cy="major-tile-container">
          <DetailsTile>{name}</DetailsTile>
        </StyledLink>
      )),
    [majorsList],
  );

  //TODO change layout as soon as we get designs
  if (!isLoading && errorMessage) {
    return (
      <>
        <p style={{ marginTop: '150px' }} data-cy="error-message">
          {errorMessage}
        </p>
        <Navbar />
      </>
    );
  }

  //TODO change layout as soon as we get designs
  if (isLoading && !errorMessage) {
    return (
      <>
        <ListPageSkeleton />
        <Navbar />
      </>
    );
  }

  return (
    <>
      <Box
        marginLeft="auto"
        marginRight="auto"
        marginTop="150px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: 1080,
        }}
      >
        {majorsTiles}
      </Box>
      <Navbar />
    </>
  );
};
