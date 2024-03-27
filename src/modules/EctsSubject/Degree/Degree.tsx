import { Paragraph, Tile } from '@UG/libs/components';
import { DegreeOption } from './DegreeOptions';
import { Link } from 'react-router-dom';
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { CSSProperties } from 'react';

const box: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

const link: SxProps<Theme> = {
  textDecoration: 'none',
};

export const Degree = () => {
  const theme = useTheme();

  return (
    <Box sx={box}>
      {DegreeOption.map(degree => (
        <Link key={degree.value} to={degree.value} style={link as CSSProperties}>
          <Tile styled={({ palette }) => ({ backgroundColor: palette.primary.main })}>
            <Paragraph fontWeight={800} fontSize={64} color={theme.palette.primary.light}>
              {degree.label}
            </Paragraph>
          </Tile>
        </Link>
      ))}
    </Box>
  );
};
