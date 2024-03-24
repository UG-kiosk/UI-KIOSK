import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { DetailsTile, Divider, Paragraph, Error } from '@UG/libs/components';
import { Major } from '@UG/libs/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from 'src/store';
import { MajorDetailsInfo } from './MajorDetailsInfo';
import { useGetMajors } from '../hooks';
import { useTranslation } from 'react-i18next';

interface StateProps {
  isLoading: boolean;
  errorMessage: string | null;
  majorDetails: Major | null;
  majorsList: Major[];
}

interface MajorDetailsProps {
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

export const MajorDetails = ({ id }: MajorDetailsProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
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

  if (!isLoading && errorMessage) {
    return <Error data-cy="error-message" />;
  }

  //TODO change layout as soon as we get designs
  if (isLoading && !errorMessage) {
    return (
      <>
        <p style={{ marginTop: '150px' }}>loading...</p>
      </>
    );
  }

  if (!majorDetails) {
    return <Error data-cy="error-message" />;
  }

  return (
    <>
      <StyledTitle data-cy="title">{majorDetails.name}</StyledTitle>
      <Divider />
      <Paragraph fontWeight={700} fontSize={24} color={theme.palette.primary.main}>
        {t('degree.' + majorDetails.degree)}
      </Paragraph>
      <DetailsTile width={975} padding="40px 40px">
        <MajorDetailsInfo major={majorDetails} />
      </DetailsTile>
    </>
  );
};
