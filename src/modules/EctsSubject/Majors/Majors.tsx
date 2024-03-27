import { DetailsTile, ListPageSkeleton, Paragraph, Error, Divider } from '@UG/libs/components';
import { useMajors } from './useMajors';
import { Box, useTheme } from '@mui/material';

export const Major = () => {
  const { majorsList, major, degreeText, navigate, getSpecialities, hasSpecialities, isLoading, isError } = useMajors();
  const theme = useTheme();

  if (isError && !isLoading) {
    return <Error data-cy="error-message" />;
  }

  if (isLoading) {
    return <ListPageSkeleton mt={80} height={100} />;
  }

  const majorsTiles = majorsList.map((major, index) => (
    <DetailsTile
      key={`${major}${index}`}
      backgroundColor={theme.palette.background.paper}
      onClick={() => (hasSpecialities(major) ? getSpecialities(major) : navigate(major))}
    >
      <Paragraph color={theme.palette.secondary.dark}>{major}</Paragraph>
    </DetailsTile>
  ));

  return (
    <Box>
      <Box>
        <Paragraph color={major ? theme.palette.primary.main : theme.palette.primary.dark}>
          {major || degreeText}
        </Paragraph>
        <Divider />
      </Box>
      {majorsTiles}
    </Box>
  );
};
