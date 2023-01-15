import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../store';
import { Worker } from '../../state/WorkersSlice';
import { Header } from '../../libs/components/Header';
import { styled, useTheme } from '@mui/material/styles';
import { StyledParagraph } from '../../libs/components/Paragraph';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Line = styled('div')`
  width: 975px;
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
`;

interface TileProps {
  height?: number;
  width?: number;
  marginTop?: number;
  padding?: number;
  color?: string;
  borderRadius?: number;
}

const StyledTile = styled('div', {
  shouldForwardProp: prop =>
    prop !== 'height' &&
    prop !== 'width' &&
    prop !== 'marginTop' &&
    prop !== 'padding' &&
    prop !== 'color' &&
    prop !== 'borderRadius',
})<TileProps>`
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : '975px')};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : 'auto')};
  padding: ${({ padding }) => (padding ? `${padding}px` : '0px')};
  background-color: ${({ color }) => (color ? color : '')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : '25px')};
`;

export const WorkerPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const workers = useSelector<StateType, Array<Worker>>(state => state.workers);
  const worker = workers.find(worker => worker.id === id);
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Box marginTop="150px" marginBottom="40px" marginLeft="auto" marginRight="auto" width={975}>
        <StyledParagraph margin={15} fontSize={36} color={theme.palette.secondary.dark}>
          {worker?.name}
        </StyledParagraph>
        <Line />
        <StyledTile padding={80}>
          <StyledParagraph margin={25} fontSize={36} color={theme.palette.secondary.dark}>
            {t('workerPage.contact')}
          </StyledParagraph>
          <StyledParagraph margin={25} fontSize={24} color={theme.palette.secondary.dark}>
            {worker?.content?.email}
          </StyledParagraph>
          {worker?.content?.tutorship?.schedule ? (
            <StyledParagraph margin={25} fontSize={36} color={theme.palette.secondary.dark}>
              {t('workerPage.tutorial')}
            </StyledParagraph>
          ) : null}
          <StyledParagraph margin={25} fontSize={24} color={theme.palette.secondary.dark}>
            {worker?.content?.tutorship?.schedule}
          </StyledParagraph>
          <StyledParagraph margin={25} fontSize={24} color={theme.palette.secondary.dark}>
            {worker?.content?.tutorship?.link}
          </StyledParagraph>
        </StyledTile>
        {worker?.content?.posts.map(post => (
          <StyledTile marginTop={35} padding={15} borderRadius={55}>
            <StyledParagraph margin={25} fontSize={24} color={theme.palette.secondary.dark}>
              {post}
            </StyledParagraph>
          </StyledTile>
        ))}
      </Box>
    </>
  );
};
