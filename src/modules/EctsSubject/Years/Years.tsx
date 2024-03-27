import { DetailsTile, ListPageSkeleton, Paragraph, Error } from '@UG/libs/components';
import { Box, Divider, useTheme } from '@mui/material';
import { UseYears } from './useYears';

export const Years = () => {
  const { major, speciality, yearsList, navigate, isError, isLoading } = UseYears();
  const theme = useTheme();

  if (isError && !isLoading) {
    return <Error data-cy="error-message" />;
  }

  if (isLoading) {
    return <ListPageSkeleton mt={80} height={100} />;
  }

  const majorsTiles = yearsList.map((year, index) => (
    <DetailsTile
      key={`${year}${index}`}
      backgroundColor={theme.palette.background.paper}
      onClick={() => navigate(year)}
    >
      <Paragraph color={theme.palette.secondary.dark}>{`${year}/${year + 1}`}</Paragraph>
    </DetailsTile>
  ));

  return (
    <Box>
      <Paragraph color={theme.palette.primary.main}>{speciality || major}</Paragraph>
      <Divider />
      {majorsTiles}
    </Box>
  );
};
