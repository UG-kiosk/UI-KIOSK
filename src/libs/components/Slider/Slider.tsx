import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface SliderProps {
  children?: ReactNode;
  className?: string;
  gap?: number;
  ml?: number;
}

const StyledSlider = styled('div', {
  shouldForwardProp: prop => prop !== 'gap',
})<SliderProps>`
  gap: ${({ gap }) => (gap ? `${gap}px` : '10px')};
  overflow-x: scroll;
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  position: relative;

  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;

  & > img:first-child {
    margin-left: ${({ ml }) => (ml ? `${ml}px` : '0px')};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slider = ({ children, className, gap, ml }: SliderProps) => (
  <StyledSlider gap={gap} className={className} ml={ml}>
    {children}
  </StyledSlider>
);
