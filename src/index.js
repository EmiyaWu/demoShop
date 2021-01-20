import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GridThemeProvider, BaseCSS} from 'styled-bootstrap-grid';
import bootstrapGridTheme from './gridTheme';
import { BrowserRouter, Switch } from 'react-router-dom';
import Router from './Router';

ReactDOM.render(
  // <React.StrictMode>
  //   <GridThemeProvider
  //     gridTheme={bootstrapGridTheme}
  //   >
  //     <BaseCSS />
  //     <App />
  //   </GridThemeProvider>
  // </React.StrictMode>
  <BrowserRouter>
    <Switch>
      <GridThemeProvider
        gridTheme={bootstrapGridTheme}
      >
        <Router />
        <BaseCSS />
      </GridThemeProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);