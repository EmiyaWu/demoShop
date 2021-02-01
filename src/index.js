import React from 'react';
import ReactDOM from 'react-dom';
import {GridThemeProvider, BaseCSS} from 'styled-bootstrap-grid';
import bootstrapGridTheme from './gridTheme';
import { BrowserRouter, Switch } from 'react-router-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import store from "./store";


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <GridThemeProvider
          gridTheme={bootstrapGridTheme}
        >
          <Router />
          <BaseCSS />
        </GridThemeProvider>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);