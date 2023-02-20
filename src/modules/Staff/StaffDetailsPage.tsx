import { styled, useTheme } from '@mui/material/styles';
import { DetailsTile, Header, Navbar, Paragraph, StyledSkeleton, ListPageSkeleton, Error } from '@UG/libs/components';
import { Academic } from '@UG/libs/types';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { StateType } from 'src/store';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { useGetStaff } from './hooks';

const Line = styled('div')`
  width: 975px;
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
`;

interface StateProps {
  isLoading: boolean;
  staffDetails: Academic | null;
  errorMessage: string | null;
}

export const StaffDetailsPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { _id } = useParams();
  const { getStaffDetails } = useGetStaff();

  const { isLoading, staffDetails, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.staff.isLoading,
    staffDetails: state.staff.staffDetails,
    errorMessage: state.staff.error,
  }));

  useEffect(() => {
    if (!_id) {
      navigate('/error');
    } else {
      getStaffDetails(_id);
    }
  }, [_id, navigate, getStaffDetails]);

  const academicPosts: JSX.Element[] = useMemo(() => {
    if (!staffDetails || !staffDetails.content) {
      return [];
    }

    return staffDetails.content?.posts.map((post, i) => (
      <React.Fragment key={i}>
        <Paragraph margin="50px 0 50px 0" fontSize={28} align="center" data-cy="details-post">
          {post.position}
        </Paragraph>
        {post.faculty.map((f, index) => (
          <DetailsTile key={index} width={975} marginTop={35} padding="10px 40px">
            <Paragraph margin="25px" color={theme.palette.primary.main} fontWeight={600}>
              {f}
            </Paragraph>
          </DetailsTile>
        ))}
      </React.Fragment>
    ));
  }, [staffDetails, theme.palette.primary.main]);

  if (!isLoading && errorMessage) {
    // optional props will be added later
    return (
      <>
        <Header />
        <Error data-cy="error-message" />
        <Navbar />
      </>
    );
  }

  if (isLoading && !errorMessage) {
    return (
      <>
        <Header />
        <Box marginTop="150px" marginBottom="40px" ml="auto" mr="auto" width={975}>
          <StyledSkeleton
            animation="wave"
            variant="rectangular"
            width={500}
            height={50}
            mt={30}
            data-cy="skeleton-tile"
          />
          <Line />
          <StyledSkeleton animation="wave" variant="rectangular" width={975} height={250} data-cy="skeleton-tile" />
          <ListPageSkeleton tiles={3} width={975} mt={50} height={100} />
        </Box>
      </>
    );
  }

  if (!staffDetails) {
    return (
      <>
        <Header />
        <Error />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box margin="150px auto" marginBottom="180px" width={975}>
        <Paragraph margin="15px" fontSize={36} color={theme.palette.secondary.dark} data-cy="academic-name">
          {staffDetails?.name}
        </Paragraph>
        <Line />
        <DetailsTile width={975} padding="40px 40px">
          <Paragraph margin="25px" fontSize={36} color={theme.palette.secondary.dark} data-cy="contact">
            {t('staffPage.contact')}
          </Paragraph>
          <Paragraph
            margin="25px"
            fontSize={24}
            color={theme.palette.secondary.dark}
            fontWeight={500}
            data-cy="contact-email"
          >
            {staffDetails?.content?.email}
          </Paragraph>
          {staffDetails?.content?.tutorial ? (
            <Paragraph margin="25px" fontSize={36} color={theme.palette.secondary.dark} data-cy="tutorial">
              {t('staffPage.tutorial')}
            </Paragraph>
          ) : null}
          {staffDetails?.content?.tutorial ? (
            <Paragraph
              margin="25px"
              fontSize={24}
              color={theme.palette.secondary.dark}
              fontWeight={500}
              data-cy="tutorial-schedule"
            >
              {staffDetails?.content?.tutorial}
            </Paragraph>
          ) : null}
        </DetailsTile>
        {academicPosts}
      </Box>
      <Navbar />
    </>
  );
};
