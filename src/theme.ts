import { createTheme } from '@mui/material';

const colorTheme = createTheme({
  palette: {
    background: {
      default: '#F5F5F5',
      paper: '#e0e0e080',
    },
    primary: {
      main: '#0044B0',
      light: '#FFFFFF',
      dark: '#000000',
    },
    secondary: {
      main: '#D9D9D9',
      light: '#FBFBFB',
      dark: '#4A4A4A',
    },
    error: {
      main: '#ff0000',
    },
  },
});

export default colorTheme;
