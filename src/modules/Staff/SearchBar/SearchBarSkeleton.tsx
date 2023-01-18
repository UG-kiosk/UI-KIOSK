import { styled } from '@mui/material/styles';
import { Box, Skeleton } from '@mui/material';

const SearchSkeleton = styled(Skeleton)`
  width: 710px;
  height: 60px;
  border-radius: 25px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ButtonSkeleton = styled(Skeleton)`
  width: 60px;
  height: 60px;
  border-radius: 25px;
`;

interface SearchBarSkeletonProps {
  mb?: number;
}

export const SearchBarSkeleton = ({ mb }: SearchBarSkeletonProps) => {
  return (
    <Box marginLeft="auto" marginRight="auto" mt="150px" mb={mb} display="flex" textAlign="center" sx={{ width: 800 }}>
      <SearchSkeleton animation="wave" variant="rectangular" />
      <ButtonSkeleton animation="wave" variant="rectangular" />
    </Box>
  );
};
