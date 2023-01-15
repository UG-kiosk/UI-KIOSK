import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { DetailsTile, Header, Paragraph } from '@UG/libs/components';
import { Worker } from '@UG/libs/types';
import { useEffect } from 'react';
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
  workersList: Worker[];
  errorMessage: string | null;
}

export const WorkerDetailsPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { name } = useParams();
  const navigate = useNavigate();

  const { isLoading, workersList, errorMessage } = useSelector<StateType, StateProps>(state => ({
    isLoading: state.workers.isLoading,
    workersList: state.workers.workersList,
    errorMessage: state.workers.error,
  }));
  const worker = workersList.find(worker => worker.name === name);

  useEffect(() => {
    if (!name) {
      navigate('/error');
    }
  }, [name, navigate]);

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
  if (!worker) {
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
          {worker?.name}
        </Paragraph>
        <Line />
        <DetailsTile width={975} padding={'40px 40px'}>
          <Paragraph margin={25} fontSize={36} color={theme.palette.secondary.dark}>
            {t('workerPage.contact')}
          </Paragraph>
          <Paragraph margin={25} fontSize={24} color={theme.palette.secondary.dark} fontWeight={500}>
            {worker?.content?.email}
          </Paragraph>
          {worker?.content?.tutorship?.schedule ? (
            <Paragraph margin={25} fontSize={36} color={theme.palette.secondary.dark}>
              {t('workerPage.tutorial')}
            </Paragraph>
          ) : null}
          <Paragraph margin={25} fontSize={24} color={theme.palette.secondary.dark} fontWeight={500}>
            {worker?.content?.tutorship?.schedule}
          </Paragraph>
          <Paragraph margin={25} fontSize={20} color={theme.palette.secondary.dark}>
            {worker?.content?.tutorship?.link}
          </Paragraph>
        </DetailsTile>
        {worker?.content?.posts.map((post, index) => (
          <DetailsTile key={index} width={975} marginTop={35} padding={'10px 40px'}>
            <Paragraph margin={25} fontSize={24} color={theme.palette.primary.main} fontWeight={600}>
              {post}
            </Paragraph>
          </DetailsTile>
        ))}
      </Box>
    </>
  );
};
