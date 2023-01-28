import { Skeleton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSkeleton = styled(Skeleton)<ListPageSkeletonProps>`
  width: 900px;
  height: ${({ height }) => (height ? height : '80')}px;
  border-radius: 55px;
  margin-bottom: 40px;
`;

interface ListPageSkeletonProps {
  height?: number;
}

export const ListPageSkeleton = ({ height }: ListPageSkeletonProps) => {
  return (
    <Box mx="auto" mt="150px" display="flex" alignItems="center" flexDirection="column" sx={{ width: '100%' }}>
      <StyledSkeleton animation="wave" variant="rectangular" height={height} data-cy="skeleton-row" />
      <StyledSkeleton animation="wave" variant="rectangular" height={height} data-cy="skeleton-row" />
      <StyledSkeleton animation="wave" variant="rectangular" height={height} data-cy="skeleton-row" />
      <StyledSkeleton animation="wave" variant="rectangular" height={height} data-cy="skeleton-row" />
      <StyledSkeleton animation="wave" variant="rectangular" height={height} data-cy="skeleton-row" />
      <StyledSkeleton animation="wave" variant="rectangular" height={height} data-cy="skeleton-row" />
    </Box>
  );
};
