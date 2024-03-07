import { styled } from '@mui/material/styles';

interface StyledDividerProps {
  width?: number;
}

const StyledDivider = styled('div', {
  shouldForwardProp: prop => prop !== 'width',
})<StyledDividerProps>`
  width: ${({ width }) => (width ? `${width}px` : '975px')};
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
`;

export const Divider = ({ width }: StyledDividerProps) => {
  return <StyledDivider data-cy="divider" width={width} />;
};
