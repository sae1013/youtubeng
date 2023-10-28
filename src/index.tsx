import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import lightTheme from './theme/light_theme';
import { RouterProvider } from 'react-router-dom';
import { routerBuilder } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={routerBuilder()}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
reportWebVitals();
