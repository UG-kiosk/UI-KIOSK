import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DetailsTile, Divider } from '@UG/libs/components';
import { Major } from '@UG/libs/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from 'src/store';
import { MajorDetailsInfo } from './MajorDetailsInfo';
import { useGetMajors } from '../hooks';

interface StateProps {
  isLoading: boolean;
  errorMessage: string | null;
  majorDetails: Major | null;
  majorsList: Major[];
}

interface MajorDetailsProps {
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

export const MajorDetails = ({ id }: MajorDetailsProps) => {
  const { getMajorDetails } = useGetMajors();
  const { isLoading, errorMessage, majorDetails } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.majors.isLoading,
    errorMessage: state.majors.error,
    majorDetails: state.majors.majorDetails,
    majorsList: state.majors.majorsList,
  }));

  useEffect(() => {
    getMajorDetails(id);
  }, [id, getMajorDetails]);

  //TODO change layout as soon as we get designs
  if (!isLoading && errorMessage) {
    return (
      <>
        <p style={{ marginTop: '150px' }}>{errorMessage}</p>
      </>
    );
  }

  //TODO change layout as soon as we get designs
  if (isLoading && !errorMessage) {
    return (
      <>
        <p style={{ marginTop: '150px' }}>loading...</p>
      </>
    );
  }

  //TODO change layout as soon as we get designs
  if (!majorDetails) {
    return (
      <>
        <p style={{ marginTop: '150px' }}>sorry but we couldn&apos;t find {id}</p>
      </>
    );
  }

  return (
    <>
      <StyledTitle data-cy="title">{majorDetails.name}</StyledTitle>
      <Divider />
      <DetailsTile padding="40px 40px" gap={20}>
        <MajorDetailsInfo major={majorDetails} />
      </DetailsTile>
    </>
  );
};
