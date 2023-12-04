import { styled, useTheme } from '@mui/material/styles';
import { DetailsTile, ListPageSkeleton, Error, FilterPanel } from '@UG/libs/components';
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 700;
`;

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
      majorsList.map(({ name, _id }) => (
        <StyledLink to={_id} key={_id} data-cy="major-tile-container">
          <DetailsTile backgroundColor={theme.palette.background.paper}>{name}</DetailsTile>
        </StyledLink>
      )),
    [majorsList, theme.palette.background.paper],
  );

  if (!isLoading && errorMessage) {
    return <Error data-cy="error-message" />;
  }

  if (isLoading && !errorMessage) {
    return <ListPageSkeleton mt={80} height={100} />;
  }

  if (!majorsTiles.length) {
    return <p>{t('noResultsInLanguage')}</p>;
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
