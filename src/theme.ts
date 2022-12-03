import { createTheme } from '@mui/material/styles';

const colorTheme = createTheme({
  palette: {
    background: {
      default: '#F5F5F5',
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
  },
});

export default colorTheme;
