import { styled } from '@mui/material/styles';

interface StyledDividerProps {
  width?: number;
}

const StyledDivider = styled('div')<StyledDividerProps>(({ theme, width }) => ({
  width: width ? `${width}px` : '975px',
  marginBottom: '35px',
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
}));

export const Divider = ({ width }: StyledDividerProps) => {
  return <StyledDivider data-cy="divider" width={width} />;
};
