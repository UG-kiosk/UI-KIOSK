import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { DetailsTile, Header, Paragraph } from '@UG/libs/components';
import { Academic } from '@UG/libs/types';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { StateType } from 'src/store';
import { useTranslation } from 'react-i18next';

const Line = styled('div')`
  width: 975px;
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
`;

interface StateProps {
  isLoading: boolean;
  staffList: Academic[];
  errorMessage: string | null;
}

export const StaffDetailsPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { name } = useParams();
  const navigate = useNavigate();

  const { isLoading, staffList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.staff.isLoading,
    staffList: state.staff.staffList,
    errorMessage: state.staff.error,
  }));
  const academic = staffList.find(academic => academic.name === name);

  useEffect(() => {
    if (!name) {
      navigate('/error');
    }
  }, [name, navigate]);

  const academicPosts: JSX.Element[] = useMemo(() => {
    if (!academic || !academic.content) {
      return [];
    }
    return academic.content?.posts.map((post, index) => (
      <DetailsTile key={index} width={975} marginTop={35} padding={'10px 40px'}>
        <Paragraph margin={25} color={theme.palette.primary.main} fontWeight={600}>
          {post}
        </Paragraph>
      </DetailsTile>
    ));
  }, [academic, theme.palette.primary.main]);

  //TODO change layout as soon as we get designs
  if (!isLoading && errorMessage) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>{errorMessage}</p>
      </>
    );
  }

  //TODO change layout as soon as we get designs
  if (isLoading && !errorMessage) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>loading...</p>
      </>
    );
  }

  //TODO change layout as soon as we get designs
  if (!academic) {
    return (
      <>
        <Header />
        <p style={{ marginTop: '150px' }}>sorry but we couldn&apos;t find {name}</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <Box marginTop="150px" marginBottom="40px" marginLeft="auto" marginRight="auto" width={975}>
        <Paragraph margin={15} fontSize={36} color={theme.palette.secondary.dark}>
          {academic?.name}
        </Paragraph>
        <Line />
        <DetailsTile width={975} padding={'40px 40px'}>
          <Paragraph margin={25} fontSize={36} color={theme.palette.secondary.dark}>
            {t('staffPage.contact')}
          </Paragraph>
          <Paragraph margin={25} fontSize={24} color={theme.palette.secondary.dark} fontWeight={500}>
            {academic?.content?.email}
          </Paragraph>
          {academic?.content?.tutorial ? (
            <Paragraph margin={25} fontSize={36} color={theme.palette.secondary.dark}>
              {t('staffPage.tutorial')}
            </Paragraph>
          ) : null}
          <Paragraph margin={25} fontSize={24} color={theme.palette.secondary.dark} fontWeight={500}>
            {academic?.content?.tutorial}
          </Paragraph>
        </DetailsTile>
        {academicPosts}
      </Box>
    </>
  );
};
