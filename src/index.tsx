import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import colorTheme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ThemeProvider as EmotionThemeProvier } from '@emotion/react';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MUIThemeProvider theme={colorTheme}>
        <EmotionThemeProvier theme={colorTheme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </EmotionThemeProvier>
      </MUIThemeProvider>
    </Provider>
  </React.StrictMode>,
);
