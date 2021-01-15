import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GridThemeProvider} from 'styled-bootstrap-grid';
import bootstrapGridTheme from './gridTheme';

ReactDOM.render(
  <React.StrictMode>
    <GridThemeProvider
      gridTheme={bootstrapGridTheme}
    >
      <App />
    </GridThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);