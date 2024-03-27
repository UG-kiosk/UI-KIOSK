import { styled } from '@mui/material/styles';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface DetailsTileProps extends ComponentPropsWithoutRef<'div'> {
  width?: number;
  marginTop?: number;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: number;
  gap?: number;
  children: ReactNode[] | ReactNode;
}

const StyledDetailsTile = styled('div', {
  shouldForwardProp: prop =>
    prop !== 'width' &&
    prop !== 'marginTop' &&
    prop !== 'padding' &&
    prop !== 'backgroundColor' &&
    prop !== 'borderRadius' &&
    prop !== 'gap',
})<DetailsTileProps>`
  width: ${({ width }) => (width ? `${width}px` : '900px')};
  margin: ${({ marginTop }) => (marginTop ? marginTop : 20)}px auto;
  height: auto;
  padding: ${({ padding }) => (padding ? padding : '20px 40px')};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.palette.background.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(174, 174, 192, 0.4);
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : '55px')};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0')};
  display: flex;
  flex-direction: column;
`;

export const DetailsTile = ({
  children,
  width,
  marginTop,
  padding,
  backgroundColor,
  gap,
  ...props
}: DetailsTileProps) => {
  return (
    <StyledDetailsTile
      width={width}
      marginTop={marginTop}
      padding={padding}
      backgroundColor={backgroundColor}
      gap={gap}
      data-cy="details-tile"
      {...props}
    >
      {children}
    </StyledDetailsTile>
  );
};
