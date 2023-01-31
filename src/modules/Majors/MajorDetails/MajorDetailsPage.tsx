import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DetailsTile, Divider, Header, Navbar } from '@UG/libs/components';
import { Major } from '@UG/libs/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { StateType } from 'src/store';
import { MajorDetails } from './MajorDetails';
import { useGetMajors } from '../hooks';

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
  const { getMajorDetails } = useGetMajors();
  const { _id } = useParams();
  const navigate = useNavigate();
  const { isLoading, errorMessage, majorDetails } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.majors.isLoading,
    errorMessage: state.majors.error,
    majorDetails: state.majors.majorDetails,
    majorsList: state.majors.majorsList,
  }));

  useEffect(() => {
    if (!_id) {
      navigate('/error');
    } else {
      getMajorDetails(_id);
    }
  }, [_id, getMajorDetails, navigate]);

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
        <p style={{ marginTop: '150px' }}>sorry but we couldn&apos;t find {_id}</p>
        <Navbar />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box marginTop="150px" marginBottom="40px" marginLeft="auto" marginRight="auto" width={975}>
        <StyledTitle data-cy="title">{majorDetails.name}</StyledTitle>
        <Divider />
        <DetailsTile>
          <MajorDetails major={majorDetails} />
        </DetailsTile>
      </Box>
      <Navbar />
    </>
  );
};
