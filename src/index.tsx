import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import colorTheme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ThemeProvider as EmotionThemeProvier } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MUIThemeProvider theme={colorTheme}>
      <EmotionThemeProvier theme={colorTheme}>
        <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <RouterProvider router={router} />
        </I18nextProvider>
      </EmotionThemeProvier>
    </MUIThemeProvider>
  </React.StrictMode>,
);
