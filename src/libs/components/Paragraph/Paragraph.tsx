import { styled } from '@mui/material/styles';

export interface ParagraphProps {
  margin?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  align?: string;
}

export const Paragraph = styled('p', {
  shouldForwardProp: prop =>
    prop !== 'margin' && prop !== 'fontSize' && prop !== 'fontWeight' && prop !== 'color' && prop !== 'align',
})<ParagraphProps>`
  font-family: 'Montserrat', sans-serif;
  margin: ${({ margin }) => (margin ? `${margin}` : '0px')};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '24px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '700')};
  color: ${({ color, theme }) => (color ? color : theme.palette.secondary.dark)};
  text-align: ${({ align }) => (align ? align : 'left')};
`;
