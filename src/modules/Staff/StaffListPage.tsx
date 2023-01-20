import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetStaff } from './hooks';
import { StateType } from 'src/store';
import { Header, Navbar, DetailsTile, Paragraph, ListPageSkeleton, ErrorMessage } from '@UG/libs/components';
import { Academic } from '@UG/libs/types';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar, SearchBarSkeleton } from './SearchBar';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface StateProps {
  isLoading: boolean;
  staffList: Academic[];
  errorMessage: string | null;
}

export const StaffListPage = () => {
  const theme = useTheme();
  const { getStaffList } = useGetStaff();

  const { isLoading, staffList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.staff.isLoading,
    staffList: state.staff.staffList,
    errorMessage: state.staff.error,
  }));

  useEffect(() => {
    getStaffList();
  }, [getStaffList]);

  const staffTiles: JSX.Element[] = useMemo(
    () =>
      staffList.map(({ _id, name, units }) => (
        <StyledLink to={`/staff/${_id}`} key={_id}>
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
    return (
      <>
        <Header />
        <ErrorMessage />
      </>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        <Header />
        <SearchBarSkeleton mb={-10} />
        <ListPageSkeleton height={100} />
      </>
    );
  }

  return (
    <>
      <Header />
      <SearchBar />
      <Box
        width={1080}
        margin="50px auto"
        marginBottom="180px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {staffTiles}
      </Box>
      <Navbar />
    </>
  );
};
