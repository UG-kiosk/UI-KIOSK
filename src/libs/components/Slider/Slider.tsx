import { styled } from '@mui/system';
import { ReactNode } from 'react';

interface SliderProps {
  children?: ReactNode;
  className?: string;
  gap?: number;
}

const StyledSlider = styled('div')<SliderProps>(({ gap }) => ({
  gap: gap ? `${gap}px` : '10px',
  overflow: 'auto',
  paddingInline: 'calc((100vw - 100%) / 2)',
  marginLeft: 'calc((100vw - 100%) / -2)',
  display: 'flex',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  width: 'calc(100% + (100vw - 100%))',

  overflowScrolling: 'touch',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

export const Slider = ({ children, className, gap }: SliderProps) => (
  <StyledSlider gap={gap} className={className}>
    {children}
  </StyledSlider>
);
