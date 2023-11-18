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
  overflow: auto;
  padding-inline: calc((100vw - 100%) / 2);
  margin-left: calc((100vw - 100%) / -2);
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;

  width: calc(100% + (100vw - 100%));

  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slider = ({ children, className, gap }: SliderProps) => (
  <StyledSlider gap={gap} className={className}>
    {children}
  </StyledSlider>
);
