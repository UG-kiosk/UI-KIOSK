import { SxProps, Theme, styled } from '@mui/material/styles';

interface StyledDividerProps {
  width?: number;
  styled?: SxProps<Theme>;
}

const StyledDivider = styled('div', {
  shouldForwardProp: prop => prop !== 'width',
})<StyledDividerProps>`
  width: ${({ width }) => (width ? `${width}px` : '975px')};
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
`;

export const Divider = ({ width, styled }: StyledDividerProps) => {
  return <StyledDivider data-cy="divider" width={width} sx={styled} />;
};
