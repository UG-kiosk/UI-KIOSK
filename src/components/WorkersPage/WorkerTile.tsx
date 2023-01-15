import { styled, useTheme } from '@mui/material/styles';
import { StyledParagraph } from '../../libs/components/Paragraph';

const StyledTile = styled('div')`
  margin: 20px auto;
  width: 900px;
  height: auto;
  background-color: #e0e0e080;
  padding: 20px 40px 20px 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(174, 174, 192, 0.4);
  border-radius: 55px;
  :hover {
    background-color: #e0e0e0;
  }
`;

interface WorkerTileProps {
  name: string;
  units: string[];
}

export const WorkerTile = ({ name, units }: WorkerTileProps) => {
  const theme = useTheme();
  return (
    <StyledTile>
      <StyledParagraph color={theme.palette.secondary.dark}>{name}</StyledParagraph>
      <StyledParagraph fontWeight={500} fontSize={16} color={theme.palette.primary.main}>
        {units.join(' • ')}
      </StyledParagraph>
    </StyledTile>
  );
};
