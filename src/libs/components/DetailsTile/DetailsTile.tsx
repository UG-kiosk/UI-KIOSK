import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

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
  children: ReactNode[] | ReactNode;
}

export const DetailsTile = ({ children }: WorkerTileProps) => {
  return <StyledTile>{children}</StyledTile>;
};
