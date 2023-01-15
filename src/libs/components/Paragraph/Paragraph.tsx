import { styled } from '@mui/material/styles';

export interface ParagraphProps {
  margin?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}

export const Paragraph = styled('p', {
  shouldForwardProp: prop =>
    prop !== 'margin' && prop !== 'fontFamily' && prop !== 'fontSize' && prop !== 'fontWeight' && prop !== 'color',
})<ParagraphProps>`
  margin: ${({ margin }) => (margin ? `${margin}px` : '0px')};
  font-family: 'Montserrat';
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '24px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '700')};
  color: ${({ color }) => (color ? color : '#000000')};
`;
