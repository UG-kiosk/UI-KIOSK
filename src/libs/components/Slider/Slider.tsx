import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface SliderProps {
  children?: ReactNode;
  className?: string;
  gap?: number;
}

const StyledSlider = styled('div', {
  shouldForwardProp: prop => prop !== 'gap',
})<SliderProps>`
  gap: ${({ gap }) => (gap ? `${gap}px` : '10px')};
  overflow-x: scroll;
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slider = ({ children, className, gap }: SliderProps) => (
  <StyledSlider gap={gap} className={className}>
    {children}
  </StyledSlider>
);
