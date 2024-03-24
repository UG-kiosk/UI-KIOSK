import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface TileProps {
  children?: ReactNode;
  className?: string;
  tileWidth?: number;
  tileHeight?: number;
}

const StyledTile = styled('div')<TileProps>(({ theme, tileWidth, tileHeight }) => ({
  height: tileHeight ? `${tileHeight}px` : '320px',
  width: tileWidth ? `${tileWidth}px` : '985px',
  borderRadius: '55px',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.background.default,
}));

export const Tile = ({ children, className, tileWidth, tileHeight }: TileProps) => (
  <StyledTile tileWidth={tileWidth} tileHeight={tileHeight} className={className}>
    {children}
  </StyledTile>
);
