import { Skeleton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';

export const StyledSkeleton = styled(Skeleton)<ListPageSkeletonProps>`
  width: ${({ width }) => (width ? width : 900)}px;
  height: ${({ height }) => (height ? height : '80')}px;
  border-radius: 55px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 40)}px;
`;

interface ListPageSkeletonProps {
  tiles?: number;
  mt?: number;
  marginBottom?: number;
  width?: number;
  height?: number;
}

export const ListPageSkeleton = ({ tiles, mt, width, height, marginBottom }: ListPageSkeletonProps) => {
  const skeletonTiles: JSX.Element[] = useMemo(
    () =>
      Array.from(Array(tiles ? tiles : 6).keys()).map((_, index) => (
        <StyledSkeleton
          animation="wave"
          variant="rectangular"
          width={width}
          height={height}
          marginBottom={marginBottom}
          key={index}
          data-cy="skeleton-row"
        />
      )),
    [tiles, width, height, marginBottom],
  );

  return (
    <Box
      mx="auto"
      mt={mt ? `${mt}px` : '150px'}
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ width: '100%' }}
    >
      {skeletonTiles}
    </Box>
  );
};
