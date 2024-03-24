import { styled, useTheme } from '@mui/material/styles';
import { DetailsTile, ListPageSkeleton, Error, FilterPanel, Paragraph } from '@UG/libs/components';
import { Degree, Major } from '@UG/libs/types';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StateType } from 'src/store';
import { useGetMajors } from './hooks';
import { useTranslation } from 'react-i18next';

interface StateProps {
  isLoading: boolean;
  majorsList: Major[];
  errorMessage: string | null;
}

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.dark,
  fontFamily: 'Montserrat',
  fontSize: '24px',
  fontWeight: 700,
}));

export const MajorsList = () => {
  const { t } = useTranslation();
  const theme = useTheme();
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
      majorsList.map(({ name, _id, degree }) => (
        <StyledLink to={_id} key={_id} data-cy="major-tile-container">
          <DetailsTile backgroundColor={theme.palette.background.paper}>
            <Paragraph color={theme.palette.secondary.dark}>{name}</Paragraph>
            <Paragraph fontWeight={500} fontSize={16} color={theme.palette.primary.main}>
              {t('degree.' + degree)}
            </Paragraph>
          </DetailsTile>
        </StyledLink>
      )),
    [majorsList, t, theme.palette.background.paper, theme.palette.primary.main, theme.palette.secondary.dark],
  );

  if (!isLoading && errorMessage) {
    return <Error data-cy="error-message" />;
  }

  if (isLoading && !errorMessage) {
    return <ListPageSkeleton mt={80} height={100} />;
  }

  if (!majorsTiles.length) {
    return <p>{t('noResults')}</p>;
  }

  return (
    <>
      <FilterPanel
        buttonKeys={[Degree.BACHELOR, Degree.MASTER]}
        buttonGroupTranslationKey={'degree'}
        paramName={'degree'}
      />
      {majorsTiles}
    </>
  );
};
