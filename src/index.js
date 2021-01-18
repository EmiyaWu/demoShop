import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GridThemeProvider, BaseCSS} from 'styled-bootstrap-grid';
import bootstrapGridTheme from './gridTheme';

ReactDOM.render(
  <React.StrictMode>
    <GridThemeProvider
      gridTheme={bootstrapGridTheme}
    >
      <BaseCSS />
      <App />
    </GridThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);