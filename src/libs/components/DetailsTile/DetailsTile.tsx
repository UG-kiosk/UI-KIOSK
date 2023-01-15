import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface DetailsTileProps {
  marginTop?: number;
  backgroundColor?: string;
  children: ReactNode[] | ReactNode;
}

const StyledDetailsTile = styled('div', {
  shouldForwardProp: prop => prop !== 'marginTop' && prop !== 'backgroundColor',
})<DetailsTileProps>`
  margin: ${({ marginTop }) => (marginTop ? marginTop : 20)}px auto;
  width: 900px;
  height: auto;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.palette.background.default};
  padding: 20px 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(174, 174, 192, 0.4);
  border-radius: 55px;
`;

export const DetailsTile = ({ children, marginTop, backgroundColor }: DetailsTileProps) => {
  return (
    <StyledDetailsTile marginTop={marginTop} backgroundColor={backgroundColor}>
      {children}
    </StyledDetailsTile>
  );
};
