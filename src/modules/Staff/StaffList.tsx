import { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetStaff } from './hooks';
import { StateType } from 'src/store';
import { DetailsTile, Paragraph, ListPageSkeleton, Error, SearchBar } from '@UG/libs/components';
import { Academic, FormData } from '@UG/libs/types';
import { styled, useTheme } from '@mui/material/styles';
import { Link, useSearchParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { Pagination } from '@mui/material';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface StateProps {
  isLoading: boolean;
  staffList: Academic[];
  errorMessage: string | null;
  totalPages: number;
}

export const StaffList = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const { getStaffList } = useGetStaff();

  const { isLoading, staffList, errorMessage, totalPages } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.staff.isLoading,
    staffList: state.staff.staffList,
    errorMessage: state.staff.error,
    totalPages: state.staff.totalPages,
  }));

  const handlePageChange = useCallback(
    (_event: ChangeEvent<unknown>, page: number) => {
      const name = searchParams.get('name');
      setSearchParams({ ...(name ? { name } : {}), page: page.toString() });
    },
    [searchParams, setSearchParams],
  );

  const getPageNumber = useMemo(() => {
    const page = searchParams.get('page');
    return page ? parseInt(page) : 1;
  }, [searchParams]);

  useEffect(() => {
    getStaffList();
  }, [getStaffList]);

  const onSubmit: SubmitHandler<FormData> = useCallback(
    data => {
      const { name } = data;
      setSearchParams({ name });
    },
    [setSearchParams],
  );

  const staffTiles: JSX.Element[] = useMemo(
    () =>
      staffList.map(({ _id, name, units }) => (
        <StyledLink to={`/staff/${_id}`} key={_id} data-cy="link-to-staff-details">
          <DetailsTile key={_id} backgroundColor={theme.palette.background.paper}>
            <Paragraph color={theme.palette.secondary.dark}>{name}</Paragraph>
            <Paragraph fontWeight={500} fontSize={16} color={theme.palette.primary.main}>
              {units.join(' • ')}
            </Paragraph>
          </DetailsTile>
        </StyledLink>
      )),
    [staffList, theme.palette.background.paper, theme.palette.secondary.dark, theme.palette.primary.main],
  );

  if (!isLoading && errorMessage) {
    return <Error data-cy="error-message" />;
  }

  if (isLoading && !errorMessage) {
    return <ListPageSkeleton mt={80} height={100} />;
  }
  return (
    <>
      <SearchBar query={'name'} onSubmit={onSubmit} />
      {staffTiles}
      <Pagination
        page={getPageNumber}
        count={totalPages}
        onChange={handlePageChange}
        shape="rounded"
        color="primary"
        size="large"
      />
    </>
  );
};
