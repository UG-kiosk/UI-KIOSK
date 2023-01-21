import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DetailsTile, Divider, Header, Navbar } from '@UG/libs/components';
import { Major } from '@UG/libs/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { StateType } from 'src/store';
import { MajorDetails } from './MajorDetails';
// import { useGetMajors } from './hooks';

interface StateProps {
  isLoading: boolean;
  errorMessage: string | null;
  majorDetails: Major | null;
  majorsList: Major[];
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

export const MajorDetailsPage = () => {
  // const { getMajorDetails } = useGetMajors();
  const { name } = useParams();
  const navigate = useNavigate();
  const { isLoading, errorMessage, majorsList } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.majors.isLoading,
    errorMessage: state.majors.error,
    majorDetails: state.majors.majorDetails,
    majorsList: state.majors.majorsList,
  }));
  const majorDetails = majorsList.find(major => major.name === name);

  useEffect(() => {
    if (!name) {
      navigate('/error');
    }
  }, [name, navigate]);

  // TODO - after major endpoint is set up on API
  // useEffect(() => {
  //   getMajorDetails();
  // }, [getMajorDetails]);

  //TODO change layout as soon as we get designs
  if (!isLoading && errorMessage) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>{errorMessage}</p>
        <Navbar />
      </>
    );
  }

  //TODO change layout as soon as we get designs
  if (isLoading && !errorMessage) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>loading...</p>
        <Navbar />
      </>
    );
  }

  //TODO change layout as soon as we get designs
  if (!majorDetails) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>sorry but we couldn&apos;t find {name}</p>
        <Navbar />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box marginTop="150px" marginBottom="40px" marginLeft="auto" marginRight="auto" width={975}>
        <StyledTitle>{majorDetails.name}</StyledTitle>
        <Divider />
        <DetailsTile>
          <MajorDetails major={majorDetails} />
        </DetailsTile>
      </Box>
      <Navbar />
    </>
  );
};
