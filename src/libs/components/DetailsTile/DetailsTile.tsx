import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface DetailsTileProps {
  width?: number;
  marginTop?: number;
  padding?: string;
  backgroundColor?: string;
  hoverBgColor?: string;
  borderRadius?: number;
  children: ReactNode[] | ReactNode;
}

const StyledDetailsTile = styled('div', {
  shouldForwardProp: prop =>
    prop !== 'width' &&
    prop !== 'marginTop' &&
    prop !== 'padding' &&
    prop !== 'backgroundColor' &&
    prop !== 'hoverBgColor' &&
    prop !== 'borderRadius',
})<DetailsTileProps>`
  width: ${({ width }) => (width ? `${width}px` : '900px')};
  margin: ${({ marginTop }) => (marginTop ? marginTop : 20)}px auto;
  height: auto;
  padding: ${({ padding }) => (padding ? padding : '20px 40px')};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.palette.background.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(174, 174, 192, 0.4);
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : '55px')};
  :hover {
    background-color: ${({ hoverBgColor }) => (hoverBgColor ? hoverBgColor : 'none')};
  }
`;

export const DetailsTile = ({
  children,
  width,
  marginTop,
  padding,
  backgroundColor,
  hoverBgColor,
}: DetailsTileProps) => {
  return (
    <StyledDetailsTile
      width={width}
      marginTop={marginTop}
      padding={padding}
      backgroundColor={backgroundColor}
      hoverBgColor={hoverBgColor}
    >
      {children}
    </StyledDetailsTile>
  );
};
