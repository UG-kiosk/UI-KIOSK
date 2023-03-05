import { styled } from '@mui/material/styles';

const StyledDivider = styled('div')`
  width: 975px;
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
`;

export const Divider = () => {
  return <StyledDivider data-cy="divider" />;
};
