import { styled } from '@mui/material/styles';

interface TileProps {
  content?: string;
  tileWidth?: number;
}

const StyledTile = styled('div', {
  shouldForwardProp: prop => prop !== 'tileWidth',
})<Pick<TileProps, 'tileWidth'>>`
  height: 560px;
  width: ${({ tileWidth }) => (tileWidth ? `${tileWidth}px` : '1695px')};
  border-radius: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Tile = ({ content, tileWidth }: TileProps) => <StyledTile tileWidth={tileWidth}>{content}</StyledTile>;
