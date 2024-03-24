import { Skeleton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';

interface ListPageSkeletonProps {
  tiles?: number;
  mt?: number;
  marginBottom?: number;
  width?: number;
  height?: number;
}

export const StyledSkeleton = styled(Skeleton)<ListPageSkeletonProps>(({ marginBottom, width, height }) => ({
  width: width ? width : '900px',
  height: height ? height : '80px',
  borderRadius: '55px',
  marginBottom: marginBottom ? marginBottom : '40px',
}));

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
