import { SxProps, Theme, styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface TileProps {
  children?: ReactNode;
  className?: string;
  tileWidth?: number;
  tileHeight?: number;
  styled?: SxProps<Theme>;
}

const StyledTile = styled('div', {
  shouldForwardProp: prop => prop !== 'tileWidth' && prop !== 'tileHeight',
})<TileProps>`
  height: ${({ tileHeight }) => (tileHeight ? `${tileHeight}px` : '320px')};
  width: ${({ tileWidth }) => (tileWidth ? `${tileWidth}px` : '985px')};
  border-radius: 55px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.background.default};
`;

export const Tile = ({ children, className, tileWidth, tileHeight, styled }: TileProps) => (
  <StyledTile tileWidth={tileWidth} tileHeight={tileHeight} className={className} sx={styled}>
    {children}
  </StyledTile>
);
