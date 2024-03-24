import { Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface DetailsTileProps {
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
})((props: DetailsTileProps & { theme: Theme }) => ({
  width: props.width ? `${props.width}px` : '900px',
  margin: `${props.marginTop ? props.marginTop : 20}px auto`,
  height: 'auto',
  padding: props.padding ? props.padding : '20px 40px',
  backgroundColor: props.backgroundColor ? props.backgroundColor : props.theme.palette.background.default,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(174, 174, 192, 0.4)',
  borderRadius: props.borderRadius ? `${props.borderRadius}px` : '55px',
  gap: props.gap ? `${props.gap}px` : '0',
  display: 'flex',
  flexDirection: 'column',
}));

export const DetailsTile = ({ children, width, marginTop, padding, backgroundColor, gap }: DetailsTileProps) => {
  return (
    <StyledDetailsTile
      width={width}
      marginTop={marginTop}
      padding={padding}
      backgroundColor={backgroundColor}
      gap={gap}
      data-cy="details-tile"
    >
      {children}
    </StyledDetailsTile>
  );
};
